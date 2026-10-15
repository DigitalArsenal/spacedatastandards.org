#!/usr/bin/env node
/**
 * Workflow hardening gate (security audit SEC-042 / SEC-044 / SEC-045).
 *
 * Release and Pages jobs here hold registry tokens, OIDC id-tokens and signing
 * keys. The audit found them running third-party code by MOVING references
 * (action tags and branches, `curl ... | sh` from a branch head, emsdk HEAD,
 * `npm@latest`), with write tokens granted to every job and persisted into
 * .git/config. That is the tj-actions/changed-files class: one upstream
 * compromise and the attacker's code runs inside a trusted release job.
 *
 * This gate keeps the class out. It reads every workflow and composite action
 * and fails on:
 *
 *   pinned-uses        a `uses:` that is not a local action or a full 40-hex
 *                      commit SHA (docker:// needs an @sha256 digest)
 *   pipe-to-shell      `curl|wget ... | sh|bash`, `irm ... | iex`
 *   mutable-source     raw.githubusercontent.com/<repo>/<main|master|HEAD>/,
 *                      `<pkg>@latest` installs, `git clone` without a pinned
 *                      40-hex commit in the same step, a checkout of another
 *                      repository without a 40-hex `ref:`
 *   pull-request-target  any pull_request_target trigger
 *   permissions        a workflow without a top-level `permissions:` block, a
 *                      top-level block that grants write, or a job without its
 *                      own `permissions:` (least privilege per job)
 *   persist-credentials  an actions/checkout step that does not set
 *                      `persist-credentials: false` (true needs a
 *                      `# hardening: <reason>` comment on the same line)
 *   script-injection   `${{ inputs.* }}`, `${{ github.event.* }}` or
 *                      `${{ github.head_ref }}` expanded inside a `run:` or
 *                      `script:` body (pass them through `env:` instead)
 *   environment        a job that receives a repository secret (other than
 *                      GITHUB_TOKEN) or mints an OIDC id-token without
 *                      declaring a deployment `environment:`, where the
 *                      owner's required reviewers and branch/tag policy apply
 *   ref-gate           a job with an `environment:` in a manually dispatched
 *                      workflow whose `if:` does not restrict github.ref
 *                      (environments named ci-* hold read-only CI credentials
 *                      for every branch and are exempt)
 *   dependabot         .github/dependabot.yml does not update github-actions
 *
 * It is deliberately dependency-free and line-oriented (workflows here are
 * plain block YAML), so it runs before `npm ci` and in every repo the same way.
 *
 * Usage: node scripts/check-workflow-hardening.mjs [--root <repo root>]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SHA40 = /^[0-9a-f]{40}$/;
const SAFE_REF_GATE = /github\.ref\b/;

const indentOf = (line) => line.length - line.trimStart().length;
const isBlank = (line) => line.trim() === '' || line.trim().startsWith('#');
// Strip a trailing YAML comment that is not inside quotes.
function stripComment(line) {
  let quote = null;
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i];
    if (quote) {
      if (c === quote) quote = null;
    } else if (c === '"' || c === "'") {
      quote = c;
    } else if (c === '#' && (i === 0 || /\s/.test(line[i - 1]))) {
      return line.slice(0, i).trimEnd();
    }
  }
  return line;
}
const unquote = (value) => value.trim().replace(/^(['"])(.*)\1$/, '$2');

/** Lines of a block scalar / nested mapping that belongs to the key at keyCol. */
function blockEnd(lines, start, keyCol) {
  let end = start + 1;
  while (end < lines.length && (lines[end].trim() === '' || indentOf(lines[end]) > keyCol)) end += 1;
  return end;
}

/** The body (and first line) of every `run:` / `script:` value. */
function scriptBodies(lines) {
  const bodies = [];
  lines.forEach((line, i) => {
    const m = /^(\s*(?:-\s+)?)(run|script):\s*(.*)$/.exec(line);
    if (!m) return;
    const keyCol = m[1].length;
    const rest = m[3];
    if (/^[|>][-+0-9]*\s*(#.*)?$/.test(rest)) {
      const end = blockEnd(lines, i, keyCol);
      bodies.push({ line: i + 1, text: lines.slice(i + 1, end).join('\n'), lines: lines.slice(i + 1, end), offset: i + 1 });
    } else {
      bodies.push({ line: i + 1, text: rest, lines: [rest], offset: i });
    }
  });
  return bodies;
}

/** Steps (list items) that contain a `uses: actions/checkout@` line. */
function checkoutSteps(lines) {
  const steps = [];
  lines.forEach((line, i) => {
    if (!/^\s*(-\s+)?uses:\s*['"]?actions\/checkout@/.test(line)) return;
    let start = i;
    while (start >= 0 && !/^\s*-\s/.test(lines[start])) start -= 1;
    if (start < 0) start = i;
    const dashCol = indentOf(lines[start]);
    let end = start + 1;
    while (end < lines.length && (isBlank(lines[end]) || indentOf(lines[end]) > dashCol)) end += 1;
    steps.push({ line: i + 1, start, end, lines: lines.slice(start, end) });
  });
  return steps;
}

/** Top-level jobs: [{ name, line, keyIndent, lines }]. */
function jobsOf(lines) {
  const at = lines.findIndex((l) => /^jobs:\s*$/.test(stripComment(l)));
  if (at < 0) return [];
  const end = blockEnd(lines, at, 0);
  const body = lines.slice(at + 1, end);
  const first = body.find((l) => !isBlank(l));
  if (!first) return [];
  const jobIndent = indentOf(first);
  const jobs = [];
  body.forEach((line, k) => {
    if (isBlank(line) || indentOf(line) !== jobIndent) return;
    const m = /^\s*([A-Za-z0-9_-]+):/.exec(line);
    if (!m) return;
    const startIdx = at + 1 + k;
    const jobEnd = blockEnd(lines, startIdx, jobIndent);
    const jobLines = lines.slice(startIdx + 1, jobEnd);
    const firstKey = jobLines.find((l) => !isBlank(l));
    jobs.push({ name: m[1], line: startIdx + 1, keyIndent: firstKey ? indentOf(firstKey) : jobIndent + 2, lines: jobLines });
  });
  return jobs;
}

/** A job-level key's own line and nested block. */
function jobKey(job, key) {
  const idx = job.lines.findIndex((l) => indentOf(l) === job.keyIndent && new RegExp(`^\\s*${key}:`).test(l));
  if (idx < 0) return null;
  const end = blockEnd(job.lines, idx, job.keyIndent);
  return { line: job.lines[idx], block: job.lines.slice(idx, end).map(stripComment).join('\n') };
}

export function checkWorkflowText(text, { file = '<workflow>', kind = 'workflow' } = {}) {
  const findings = [];
  const add = (line, rule, message) => findings.push({ file, line, rule, message });
  const lines = text.split(/\r?\n/);
  const code = lines.map((l) => (l.trim().startsWith('#') ? '' : stripComment(l)));

  // pinned-uses
  code.forEach((line, i) => {
    const m = /^\s*(?:-\s+)?uses:\s*(.+)$/.exec(line);
    if (!m) return;
    const ref = unquote(m[1]);
    if (ref.startsWith('./')) return;
    if (ref.startsWith('docker://')) {
      if (!/@sha256:[0-9a-f]{64}$/.test(ref)) add(i + 1, 'pinned-uses', `${ref} must be pinned by @sha256 digest`);
      return;
    }
    const at = ref.lastIndexOf('@');
    if (at < 0 || !/^[\w.-]+\/[\w.-]+(\/[\w./-]+)?$/.test(ref.slice(0, at)) || !SHA40.test(ref.slice(at + 1))) {
      add(i + 1, 'pinned-uses', `${ref} is not pinned to a full commit SHA`);
    }
  });

  // pipe-to-shell and mutable sources, anywhere in code
  code.forEach((line, i) => {
    if (/\b(curl|wget)\b[^|]*\|\s*(sudo\s+(-\S+\s+)*)?(env\s+\S+\s+)*(ba|z|da|k)?sh\b/.test(line)) {
      add(i + 1, 'pipe-to-shell', 'downloads piped into a shell run unverified code; download a pinned release and check its sha256');
    }
    if (/\b(irm|iwr|Invoke-RestMethod|Invoke-WebRequest)\b[^|]*\|\s*(iex|Invoke-Expression)\b/i.test(line)) {
      add(i + 1, 'pipe-to-shell', 'downloads piped into Invoke-Expression run unverified code');
    }
    if (/raw\.githubusercontent\.com\/[^/\s]+\/[^/\s]+\/(main|master|HEAD)\//.test(line)) {
      add(i + 1, 'mutable-source', 'fetches from a moving branch head; pin a tag or commit and verify a checksum');
    }
    if (/\b(npm|npx|pnpm|yarn|bunx?)\b.*@latest\b/.test(line)) {
      add(i + 1, 'mutable-source', 'installs a moving @latest version; pin an exact version');
    }
    if (/\bpull_request_target\b/.test(line)) {
      add(i + 1, 'pull-request-target', 'pull_request_target runs with secrets on untrusted pull requests');
    }
  });

  const bodies = scriptBodies(code);
  for (const body of bodies) {
    if (/\bgit\s+clone\b/.test(body.text) && !/\b[0-9a-f]{40}\b/.test(body.text)) {
      add(body.line, 'mutable-source', 'git clone without checking out a pinned 40-hex commit in the same step');
    }
    body.lines.forEach((l, k) => {
      const expressions = l.match(/\$\{\{[^}]*\}\}/g) || [];
      for (const expr of expressions) {
        const untrusted = /\bgithub\.event\b|\bgithub\.head_ref\b/.test(expr) || (kind === 'workflow' && /\binputs\./.test(expr));
        if (untrusted) add(body.offset + k + 1, 'script-injection', `${expr} is expanded into the script; pass it through env:`);
      }
    });
  }

  for (const step of checkoutSteps(code)) {
    const at = step.lines.findIndex((l) => /^\s*persist-credentials:/.test(l));
    const persist = at < 0 ? null : step.lines[at];
    const raw = at < 0 ? '' : lines[step.start + at];
    if (!persist) {
      add(step.line, 'persist-credentials', 'actions/checkout must set persist-credentials: false');
    } else if (!/:\s*false\s*$/.test(persist)) {
      if (!/#\s*hardening:\s*\S/.test(raw)) add(step.line, 'persist-credentials', 'persist-credentials: true needs a "# hardening: <reason>" comment');
    }
    const repo = step.lines.find((l) => /^\s*repository:/.test(l));
    if (repo && !/\$\{\{\s*github\.repository\s*\}\}/.test(repo)) {
      const ref = step.lines.find((l) => /^\s*ref:/.test(l));
      if (!ref || !SHA40.test(unquote(ref.replace(/^\s*ref:/, '')))) {
        add(step.line, 'mutable-source', `checkout of ${unquote(repo.replace(/^\s*repository:/, ''))} must pin ref: to a 40-hex commit`);
      }
    }
  }

  if (kind !== 'workflow') return findings;

  // permissions: top level present and read-only
  const topIdx = code.findIndex((l) => /^permissions:/.test(l));
  if (topIdx < 0) {
    add(1, 'permissions', 'workflow has no top-level permissions: block (default token is read/write)');
  } else {
    const end = blockEnd(code, topIdx, 0);
    const block = code.slice(topIdx, end).join('\n');
    if (/\bwrite\b/.test(block)) add(topIdx + 1, 'permissions', 'top-level permissions grant write; grant writes per job');
  }

  const dispatched = code.some((l) => /\bworkflow_dispatch\b/.test(l));
  for (const job of jobsOf(code)) {
    const perms = jobKey(job, 'permissions');
    if (!perms) add(job.line, 'permissions', `job ${job.name} has no permissions: block`);
    const env = jobKey(job, 'environment');
    const jobText = job.lines.join('\n');
    const secrets = [...jobText.matchAll(/\$\{\{\s*secrets\.([A-Za-z0-9_]+)/g)].map((m) => m[1]).filter((s) => s !== 'GITHUB_TOKEN');
    const idToken = perms && /id-token:\s*write/.test(perms.block);
    if ((secrets.length || idToken) && !env) {
      const why = [secrets.length ? `secrets ${[...new Set(secrets)].join(', ')}` : '', idToken ? 'id-token: write' : ''].filter(Boolean).join(' and ');
      add(job.line, 'environment', `job ${job.name} holds ${why} but declares no deployment environment:`);
    }
    // ci-* environments carry read-only CI credentials for every branch and
    // pull request; they are not deployment targets, so they take no ref gate.
    const ciOnly = env && /^\s*environment:\s*['"]?ci-/.test(env.line);
    if (env && dispatched && !ciOnly) {
      const cond = jobKey(job, 'if');
      if (!cond || !SAFE_REF_GATE.test(cond.block)) add(job.line, 'ref-gate', `job ${job.name} deploys from a dispatchable workflow without an if: on github.ref`);
    }
    if (/secrets:\s*inherit/.test(jobText)) add(job.line, 'environment', `job ${job.name} passes secrets: inherit`);
  }
  return findings;
}

function* yamlFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* yamlFiles(full);
    else if (/\.ya?ml$/.test(entry.name)) yield full;
  }
}

export function checkRepo(root) {
  const findings = [];
  const workflows = path.join(root, '.github', 'workflows');
  for (const file of yamlFiles(workflows)) {
    findings.push(...checkWorkflowText(fs.readFileSync(file, 'utf8'), { file: path.relative(root, file), kind: 'workflow' }));
  }
  for (const file of yamlFiles(path.join(root, '.github', 'actions'))) {
    if (!/^action\.ya?ml$/.test(path.basename(file))) continue;
    findings.push(...checkWorkflowText(fs.readFileSync(file, 'utf8'), { file: path.relative(root, file), kind: 'action' }));
  }
  const dependabot = ['dependabot.yml', 'dependabot.yaml'].map((n) => path.join(root, '.github', n)).find((p) => fs.existsSync(p));
  const dependabotText = dependabot ? fs.readFileSync(dependabot, 'utf8') : '';
  if (!/package-ecosystem:\s*['"]?github-actions['"]?/.test(dependabotText)) {
    findings.push({ file: '.github/dependabot.yml', line: 1, rule: 'dependabot', message: 'dependabot must keep the pinned action SHAs current (package-ecosystem: github-actions)' });
  }
  return findings;
}

const invokedDirectly = process.argv[1] && fs.realpathSync(process.argv[1]) === fs.realpathSync(fileURLToPath(import.meta.url));
if (invokedDirectly) {
  const rootFlag = process.argv.indexOf('--root');
  const root = rootFlag > 0 ? path.resolve(process.argv[rootFlag + 1]) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const findings = checkRepo(root);
  for (const f of findings) console.error(`${f.file}:${f.line}: [${f.rule}] ${f.message}`);
  if (findings.length) {
    console.error(`check-workflow-hardening: ${findings.length} finding(s)`);
    process.exit(1);
  }
  console.log('check-workflow-hardening: OK');
}
