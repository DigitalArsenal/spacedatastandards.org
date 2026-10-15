// Regression tests for the publish workflow's gates (security audit SEC-042 /
// SEC-044, fix round 2). The workflow's own step scripts run under bash in
// throwaway git repositories with a fake `gh`; nothing touches the network.
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workflow = readFileSync(path.join(root, '.github/workflows/publish.yml'), 'utf8');

function stepScript(name) {
  const lines = workflow.split('\n');
  const at = lines.findIndex((l) => l.trim() === `- name: ${name}`);
  assert.ok(at >= 0, `step "${name}" not found`);
  let i = at + 1;
  while (!/^\s*run:\s*\|/.test(lines[i])) i += 1;
  const runCol = lines[i].search(/\S/);
  const body = [];
  for (i += 1; i < lines.length; i += 1) {
    if (lines[i].trim() !== '' && lines[i].search(/\S/) <= runCol) break;
    body.push(lines[i]);
  }
  const indent = Math.min(...body.filter((l) => l.trim()).map((l) => l.search(/\S/)));
  return body.map((l) => l.slice(indent)).join('\n');
}

function jobBlock(job) {
  const lines = workflow.split('\n');
  const at = lines.findIndex((l) => l === `  ${job}:`);
  assert.ok(at >= 0, `job ${job} not found`);
  let end = at + 1;
  while (end < lines.length && !/^ {2}[A-Za-z0-9_-]+:\s*$/.test(lines[end])) end += 1;
  return lines.slice(at, end).join('\n');
}

function gitRepo(dir) {
  mkdirSync(dir, { recursive: true });
  const git = (...args) => execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git('init', '-q', '-b', 'main');
  git('config', 'user.email', 'test@example.invalid');
  git('config', 'user.name', 'test');
  git('config', 'commit.gpgsign', 'false');
  git('config', 'tag.gpgsign', 'false');
  return git;
}

function fakeGh(dir, status) {
  const bin = path.join(dir, 'bin');
  mkdirSync(bin, { recursive: true });
  writeFileSync(path.join(bin, 'gh'), status === null
    ? '#!/bin/sh\nexit 1\n'
    : `#!/bin/sh\ncase "$*" in "api repos/o/r/compare/refs/heads/main..."*) echo ${status} ;; *) exit 1 ;; esac\n`);
  chmodSync(path.join(bin, 'gh'), 0o755);
  return bin;
}

const PUBLISHERS = ['publish-npm', 'publish-github-npm', 'publish-pypi', 'publish-cargo', 'publish-dart',
  'publish-maven-java', 'publish-go', 'publish-php'];

test('publishers run only for v* tags: no main, no bare refs/tags/ prefix, no version input', () => {
  assert.doesNotMatch(workflow, /inputs\.version\b/);
  assert.doesNotMatch(workflow, /^\s+version:\n\s+description: 'Version to publish/m);
  for (const job of PUBLISHERS) {
    const block = jobBlock(job);
    assert.match(block, /startsWith\(github\.ref, 'refs\/tags\/v'\)/, job);
    assert.doesNotMatch(block, /refs\/heads\/main|refs\/tags\/'\)/, job);
  }
});

test('the version is the tag the run builds; main, a mismatched tree and an off-main tag are refused', () => {
  const script = stepScript('Get version');
  const dir = mkdtempSync(path.join(tmpdir(), 'sds-version-'));
  try {
    const repo = path.join(dir, 'repo');
    const git = gitRepo(repo);
    writeFileSync(path.join(repo, 'package.json'), JSON.stringify({ name: 'x', version: '1.249.0+1792003589633' }));
    git('add', '-A');
    git('commit', '-q', '-m', 'release');
    const sha = git('rev-parse', 'HEAD');
    const out = path.join(dir, 'out');
    const run = (env, status = 'behind') => {
      writeFileSync(out, '');
      return spawnSync('bash', ['-e', '-c', script], {
        cwd: repo,
        encoding: 'utf8',
        env: { PATH: `${fakeGh(dir, status)}:${process.env.PATH}`, GITHUB_OUTPUT: out, GITHUB_REPOSITORY: 'o/r', GITHUB_SHA: sha, ...env },
      });
    };
    // The audit's class: a dispatch from main used to publish HEAD as any version.
    assert.notEqual(run({ EVENT_NAME: 'workflow_dispatch', REF: 'refs/heads/main' }).status, 0);
    assert.notEqual(run({ EVENT_NAME: 'workflow_dispatch', REF: 'refs/tags/x' }).status, 0);
    assert.notEqual(run({ EVENT_NAME: 'workflow_dispatch', REF: 'refs/tags/v9.9.9' }).status, 0, 'package.json says 1.249.0');
    assert.notEqual(run({ EVENT_NAME: 'release', REF: 'refs/tags/v1.249.0', RELEASE_TAG: 'v1.248.0' }).status, 0);
    assert.notEqual(run({ EVENT_NAME: 'release', REF: 'refs/tags/v1.249.0', RELEASE_TAG: 'v1.249.0' }, 'ahead').status, 0);
    assert.notEqual(run({ EVENT_NAME: 'release', REF: 'refs/tags/v1.249.0', RELEASE_TAG: 'v1.249.0' }, null).status, 0, 'fails closed');
    assert.equal(readFileSync(out, 'utf8'), '');
    const ok = run({ EVENT_NAME: 'release', REF: 'refs/tags/v1.249.0', RELEASE_TAG: 'v1.249.0' });
    assert.equal(ok.status, 0, ok.stderr);
    assert.equal(readFileSync(out, 'utf8'), 'version=1.249.0\n');
    assert.equal(run({ EVENT_NAME: 'workflow_dispatch', REF: 'refs/tags/v1.249.0' }, 'identical').status, 0);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('publish-go runs in an environment and never moves an existing module tag', () => {
  const block = jobBlock('publish-go');
  assert.match(block, /^ {4}environment: go-modules$/m);
  assert.doesNotMatch(block, /--force|git tag -f/);
  const script = stepScript('Create and push Go module tag').replaceAll('${{ needs.build.outputs.version }}', '1.249.0');
  const dir = mkdtempSync(path.join(tmpdir(), 'sds-go-tag-'));
  try {
    const origin = path.join(dir, 'origin.git');
    execFileSync('git', ['init', '-q', '--bare', origin]);
    const repo = path.join(dir, 'repo');
    const git = gitRepo(repo);
    mkdirSync(path.join(repo, 'lib/go'), { recursive: true });
    writeFileSync(path.join(repo, 'lib/go/go.mod'), 'module x\n');
    git('add', '-A');
    git('commit', '-q', '-m', 'one');
    const first = git('rev-parse', 'HEAD');
    git('remote', 'add', 'origin', origin);
    git('push', '-q', 'origin', 'main');
    const run = () => spawnSync('bash', ['-e', '-c', script], { cwd: repo, encoding: 'utf8', env: { ...process.env, GITHUB_TOKEN: 'unused' } });
    const remoteTag = () => execFileSync('git', ['-C', origin, 'rev-parse', 'refs/tags/lib/go/v1.249.0'], { encoding: 'utf8' }).trim();

    const created = run();
    assert.equal(created.status, 0, created.stderr);
    assert.equal(remoteTag(), first);
    const again = run();
    assert.equal(again.status, 0, again.stderr);

    // A later commit must not take over the published module version.
    writeFileSync(path.join(repo, 'README'), 'two');
    git('add', 'README');
    git('commit', '-q', '-m', 'two');
    git('tag', '-d', 'lib/go/v1.249.0');
    const moved = run();
    assert.notEqual(moved.status, 0);
    assert.match(moved.stdout + moved.stderr, /refusing to move it/);
    assert.equal(remoteTag(), first);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('Python tools install from hash-pinned requirement files, and the build uses them', () => {
  for (const file of ['flatbuffers.txt', 'publish-pypi.txt']) {
    const text = readFileSync(path.join(root, '.github/requirements', file), 'utf8');
    const pins = text.split('\n').filter((l) => /^[A-Za-z0-9_.-]+==/.test(l));
    assert.ok(pins.length > 0, file);
    for (const pin of pins) {
      const name = pin.split('==')[0];
      const block = text.slice(text.indexOf(pin)).split('\n').slice(1).filter((l) => l.startsWith('    --hash=sha256:'));
      assert.ok(block.length > 0, `${file}: ${name} has no --hash`);
    }
    assert.ok(workflow.includes(`pip install --require-hashes -r .github/requirements/${file}`), file);
  }
  assert.match(workflow, /python -m build --no-isolation/);
  assert.doesNotMatch(workflow, /^\s+run: pip install (?!--require-hashes)/m);
});
