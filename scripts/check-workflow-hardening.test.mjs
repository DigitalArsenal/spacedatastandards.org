// Regression tests for the workflow hardening gate (security audit SEC-042 /
// SEC-044). The first test is the gate itself: this repository's workflows
// must pass. The rest prove each rule still fires, using the exact patterns
// the audit found on main, so the gate cannot silently decay into a no-op.
import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { checkRepo, checkWorkflowText } from './check-workflow-hardening.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rules = (text, kind = 'workflow') => checkWorkflowText(text, { kind }).map((f) => f.rule);

const SAFE = `name: ok
on:
  push:
    branches: [main]
permissions: {}
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262 # v4.4.0
        with:
          persist-credentials: false
      - run: echo ok
`;

test('this repository\'s workflows pass the hardening gate', () => {
  const findings = checkRepo(root);
  assert.deepEqual(findings.map((f) => `${f.file}:${f.line}: [${f.rule}] ${f.message}`), []);
});

test('a hardened workflow passes', () => {
  assert.deepEqual(rules(SAFE), []);
});

test('actions pinned by tag or branch are refused', () => {
  for (const ref of ['softprops/action-gh-release@v2', 'aquasecurity/trivy-action@master', 'actions/checkout@v4',
    'pypa/gh-action-pypi-publish@release/v1', 'dtolnay/rust-toolchain@stable', 'docker://alpine:3']) {
    assert.ok(rules(SAFE.replace('- run: echo ok', `- uses: ${ref}`)).includes('pinned-uses'), ref);
  }
  assert.ok(!rules(SAFE.replace('- run: echo ok', '- uses: ./.github/actions/local')).includes('pinned-uses'));
});

test('curl|sh and moving sources are refused', () => {
  const syft = '- run: curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sudo sh -s -- -b /usr/local/bin';
  const found = rules(SAFE.replace('- run: echo ok', syft));
  assert.ok(found.includes('pipe-to-shell'));
  assert.ok(found.includes('mutable-source'));
  assert.ok(rules(SAFE.replace('- run: echo ok', '- run: npm install -g npm@latest')).includes('mutable-source'));
  assert.ok(rules(SAFE.replace('- run: echo ok', '- run: git clone https://github.com/emscripten-core/emsdk.git e')).includes('mutable-source'));
  assert.ok(!rules(SAFE.replace('- run: echo ok', `- run: |
          git clone https://github.com/emscripten-core/emsdk.git e
          git -C e checkout 0123456789abcdef0123456789abcdef01234567`)).includes('mutable-source'));
  const masterCheckout = SAFE.replace('          persist-credentials: false', `          persist-credentials: false
          repository: DigitalArsenal/flatbuffers
          ref: master`);
  assert.ok(rules(masterCheckout).includes('mutable-source'));
});

test('pull_request_target is refused', () => {
  assert.ok(rules(SAFE.replace('  push:\n    branches: [main]', '  pull_request_target:')).includes('pull-request-target'));
});

test('missing or write-granting permissions are refused', () => {
  assert.ok(rules(SAFE.replace('permissions: {}\n', '')).includes('permissions'));
  assert.ok(rules(SAFE.replace('permissions: {}\n', 'permissions:\n  contents: write\n  id-token: write\n')).includes('permissions'));
  assert.ok(rules(SAFE.replace('    permissions:\n      contents: read\n', '')).includes('permissions'));
});

test('checkouts must not persist the token', () => {
  assert.ok(rules(SAFE.replace('        with:\n          persist-credentials: false\n', '')).includes('persist-credentials'));
  assert.ok(rules(SAFE.replace('persist-credentials: false', 'persist-credentials: true')).includes('persist-credentials'));
  assert.ok(!rules(SAFE.replace('persist-credentials: false', 'persist-credentials: true # hardening: pushes gh-pages')).includes('persist-credentials'));
});

test('dispatch inputs and event fields expanded into scripts are refused', () => {
  assert.ok(rules(SAFE.replace('- run: echo ok', '- run: echo "${{ inputs.ref }}"')).includes('script-injection'));
  assert.ok(rules(SAFE.replace('- run: echo ok', '- run: echo "${{ github.event.release.tag_name }}"')).includes('script-injection'));
  assert.ok(!rules(SAFE.replace('- run: echo ok', '- run: echo "$REF"')).includes('script-injection'));
});

test('secret-bearing and id-token jobs must use a deployment environment, gated on the ref when dispatchable', () => {
  const secretJob = SAFE.replace('- run: echo ok', '- run: echo ok\n        env:\n          TOKEN: ${{ secrets.DOCKERHUB_TOKEN }}');
  assert.ok(rules(secretJob).includes('environment'));
  const withEnv = secretJob.replace('    permissions:\n      contents: read\n', '    environment: dockerhub\n    permissions:\n      contents: read\n');
  assert.ok(!rules(withEnv).includes('environment'));
  const dispatched = withEnv.replace('on:\n', 'on:\n  workflow_dispatch:\n');
  assert.ok(rules(dispatched).includes('ref-gate'));
  const gated = dispatched.replace('    environment: dockerhub\n', "    if: github.ref == 'refs/heads/main'\n    environment: dockerhub\n");
  assert.ok(!rules(gated).includes('ref-gate'));
  const idToken = SAFE.replace('      contents: read\n', '      contents: read\n      id-token: write\n');
  assert.ok(rules(idToken).includes('environment'));
  assert.ok(!rules(secretJob.replace('DOCKERHUB_TOKEN', 'GITHUB_TOKEN')).includes('environment'));
});

// ---- Fix round 2: the bypasses the verifier found in round 1's gate. ----

test('a checkout ref taken from a dispatch input is refused (docker-publish ref bypass)', () => {
  const fromInput = SAFE.replace('          persist-credentials: false', `          ref: \${{ inputs.ref || github.ref }}
          persist-credentials: false`);
  assert.ok(rules(fromInput).includes('checkout-ref'));
  assert.ok(rules(fromInput.replace('inputs.ref', 'github.event.inputs.ref')).includes('checkout-ref'));
  assert.ok(!rules(SAFE).includes('checkout-ref'));
});

test('ref gates that admit every tag or every branch are refused', () => {
  const gated = (cond) => SAFE.replace('    runs-on: ubuntu-latest\n', `    runs-on: ubuntu-latest\n    if: ${cond}\n`);
  assert.ok(rules(gated("(github.ref == 'refs/heads/main' || startsWith(github.ref, 'refs/tags/'))")).includes('ref-gate'));
  assert.ok(rules(gated("startsWith(github.ref, \"refs/heads/\")")).includes('ref-gate'));
  assert.ok(!rules(gated("startsWith(github.ref, 'refs/tags/v') || github.ref == 'refs/heads/main'")).includes('ref-gate'));
});

test('pip installs must be hash-pinned; heredoc text is not a command', () => {
  for (const cmd of ['pip install flatbuffers', 'pip install build twine packaging', 'python3 -m pip install flatbuffers', 'uv pip install x', 'pip3 install -r requirements.txt']) {
    assert.ok(rules(SAFE.replace('- run: echo ok', `- run: ${cmd}`)).includes('unpinned-pip'), cmd);
  }
  assert.ok(!rules(SAFE.replace('- run: echo ok', '- run: pip install --require-hashes -r .github/requirements/x.txt')).includes('unpinned-pip'));
  assert.ok(!rules(SAFE.replace('- run: echo ok', '- run: pip install . # hardening: the package under test')).includes('unpinned-pip'));
  const heredoc = SAFE.replace('- run: echo ok', `- run: |
          cat > README.md << 'EOF'
          pip install spacedatastandards
          npm install -g foo@latest
          EOF
          echo done`);
  assert.deepEqual(rules(heredoc), []);
});

test('scanner actions that default to a latest image must pin it by digest', () => {
  const step = (extra) => SAFE.replace('- run: echo ok', `- uses: trufflesecurity/trufflehog@e76dff8a7e57d6df0c60ad8cbf5d5cba505a8fc9 # v3.99.2
        with:
          path: ./
${extra}`);
  assert.ok(rules(step('')).includes('mutable-source'));
  assert.ok(rules(step('          version: latest\n')).includes('mutable-source'));
  assert.ok(rules(step('          version: 3.99.2\n')).includes('mutable-source'));
  assert.ok(!rules(step(`          version: 3.99.2@sha256:${'a'.repeat(64)}\n`)).includes('mutable-source'));
});

test('download-and-run variants the line rule missed are refused', () => {
  const run = (body) => rules(SAFE.replace('- run: echo ok', `- run: |\n${body.split('\n').map((l) => `          ${l}`).join('\n')}`));
  assert.ok(run('curl -fsSL https://example.com/i.sh \\\n  | sh').includes('pipe-to-shell'), 'continuation');
  assert.ok(run('bash <(curl -fsSL https://example.com/i.sh)').includes('pipe-to-shell'), 'process substitution');
  assert.ok(run('source <(wget -qO- https://example.com/env)').includes('pipe-to-shell'));
  assert.ok(run('eval "$(curl -fsSL https://example.com/env)"').includes('pipe-to-shell'));
  assert.ok(run('python3 -c "import urllib.request as u; exec(u.urlopen(\'https://example.com/x.py\').read())"').includes('pipe-to-shell'));
  assert.ok(run('curl -fsSL -o /tmp/i.sh https://example.com/i.sh\nsh /tmp/i.sh').includes('pipe-to-shell'), 'download then sh');
  assert.ok(run('wget -O "$RUNNER_TEMP/i.sh" https://example.com/i.sh\nchmod +x "$RUNNER_TEMP/i.sh"\n"$RUNNER_TEMP/i.sh"').includes('pipe-to-shell'), 'download then exec');
  assert.ok(!run('curl -fsSL -o /tmp/i.sh https://example.com/i.sh\necho "abc  /tmp/i.sh" | sha256sum -c -\nsh /tmp/i.sh').includes('pipe-to-shell'), 'checked download');
  assert.ok(!run('curl -fsSL -o /tmp/x.zip https://example.com/x.zip\nunzip -q /tmp/x.zip').includes('pipe-to-shell'), 'not executed');
  assert.ok(run('go install golang.org/x/vuln/cmd/govulncheck@latest').includes('mutable-source'));
  assert.ok(!run('go install golang.org/x/vuln/cmd/govulncheck@v1.8.0').includes('mutable-source'));
  assert.ok(run('npm install --ignore-scripts').includes('mutable-source'), 'bare npm install');
  assert.ok(!run('npm ci --ignore-scripts').includes('mutable-source'));
  assert.ok(!run('npm install -g npm@11.20.0').includes('mutable-source'));
});

test('every way of naming a secret counts, and secrets never sit in workflow-level env', () => {
  for (const ref of ["${{ secrets['DOCKERHUB_TOKEN'] }}", '${{ toJSON(secrets) }}', '${{ secrets[format(\'{0}\', \'X\')] }}']) {
    const job = SAFE.replace('- run: echo ok', `- run: echo ok\n        env:\n          T: ${ref}`);
    assert.ok(rules(job).includes('environment'), ref);
  }
  const workflowEnv = SAFE.replace('permissions: {}\n', 'permissions: {}\nenv:\n  TOKEN: ${{ secrets.NPM_TOKEN }}\n');
  assert.ok(rules(workflowEnv).includes('environment'));
  assert.ok(!rules(SAFE.replace('permissions: {}\n', 'permissions: {}\nenv:\n  NODE_VERSION: 24\n')).includes('environment'));
});

test('an expression with braces inside cannot hide a dispatch input from the injection rule', () => {
  assert.ok(rules(SAFE.replace('- run: echo ok', "- run: echo \"${{ format('{0}', inputs.version) }}\"")).includes('script-injection'));
});

test('a checkout of the triggering event\'s head (workflow_run, issue_comment) is refused', () => {
  const withRef = (line) => SAFE.replace('          persist-credentials: false', `          ${line}
          persist-credentials: false`);
  assert.ok(rules(withRef('ref: ${{ github.event.workflow_run.head_sha }}')).includes('checkout-ref'));
  assert.ok(rules(withRef('ref: ${{ github.event.pull_request.head.ref }}')).includes('checkout-ref'));
  assert.ok(rules(withRef('ref: ${{ github.head_ref }}')).includes('checkout-ref'));
  assert.ok(rules(withRef('repository: ${{ github.event.pull_request.head.repo.full_name }}')).includes('checkout-ref'));
  assert.ok(rules(withRef('ref: ${{ github.event.workflow_run.head_sha }}'), 'action').includes('checkout-ref'));
  assert.ok(!rules(withRef('ref: ${{ github.sha }}')).includes('checkout-ref'));
});

test('job and service containers are pinned by digest; nothing runs at :latest', () => {
  const inJob = (extra) => SAFE.replace('    runs-on: ubuntu-latest\n', `    runs-on: ubuntu-latest\n${extra}`);
  assert.ok(rules(inJob('    container: ubuntu:20.04\n')).includes('unpinned-image'));
  assert.ok(rules(inJob('    services:\n      docker:\n        image: docker:dind\n')).includes('unpinned-image'));
  assert.ok(rules(inJob('    strategy:\n      matrix:\n        include:\n          - container: ubuntu:20.04\n')).includes('unpinned-image'));
  const digest = 'sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214';
  assert.ok(!rules(inJob(`    container: ubuntu:20.04@${digest}\n`)).includes('unpinned-image'));
  assert.ok(!rules(inJob('    container: ${{ matrix.container }}\n')).includes('unpinned-image'));
  assert.ok(!rules(inJob('    container: ubuntu:20.04 # hardening: throwaway lint job\n')).includes('unpinned-image'));
  for (const cmd of ['docker run --rm ghcr.io/x/y:latest scan', 'docker pull alpine:latest']) {
    assert.ok(rules(SAFE.replace('- run: echo ok', `- run: ${cmd}`)).includes('latest-image'), cmd);
  }
  assert.ok(!rules(SAFE.replace('- run: echo ok', '- run: docker run --rm alpine:3.20@' + digest)).includes('latest-image'));
});
