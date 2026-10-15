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
 *   pipe-to-shell      `curl|wget ... | sh|bash` (also across `\` line
 *                      continuations), `sh <(curl ...)`, `eval "$(curl ...)"`,
 *                      `python -c "exec(urlopen(...))"`, `irm ... | iex`, and
 *                      a file downloaded then run with sh/bash/source in the
 *                      same step without a checksum or signature check
 *   mutable-source     raw.githubusercontent.com/<repo>/<main|master|HEAD>/,
 *                      `<pkg>@latest` installs (npm/npx/pnpm/yarn/bun and
 *                      `go install|get|run`), `git clone` without a pinned
 *                      40-hex commit in the same step, a checkout of another
 *                      repository without a 40-hex `ref:`, an action that
 *                      runs a scanner image whose version defaults to
 *                      `latest` (trufflehog) without an @sha256 pin, a bare
 *                      `npm install` (it resolves and may rewrite the lock;
 *                      `npm ci` installs exactly the lockfile)
 *   unpinned-pip       `pip install` without `--require-hashes` (a hashed
 *                      requirements file); a `# hardening: <reason>` comment
 *                      on the line exempts it
 *   checkout-ref       a workflow checkout whose `ref:` comes from a dispatch
 *                      input (`inputs.*`, `github.event.inputs.*`): whoever
 *                      dispatches picks the code a gated job builds, and an
 *                      unqualified name resolves to a BRANCH before a tag;
 *                      also a `ref:` or `repository:` taken from any event
 *                      field or `github.head_ref` (a workflow_run or
 *                      issue_comment job checking out a fork's head runs the
 *                      fork's code with this repository's token and secrets)
 *   latest-image       a container run or pulled (`docker run|pull|create`)
 *                      at the moving `:latest` tag
 *   unpinned-image     a job `container:` or `services.*.image:` (matrix
 *                      entries included) not pinned to an @sha256 digest: a
 *                      tag is mutable, and the job's steps run inside it; a
 *                      `# hardening: <reason>` comment on the line exempts it
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
 *                      GITHUB_TOKEN; `secrets.X`, `secrets['X']` and
 *                      `toJSON(secrets)` all count) or mints an OIDC id-token
 *                      without declaring a deployment `environment:`, where
 *                      the owner's required reviewers and branch/tag policy
 *                      apply; `toJSON(secrets)` anywhere; secrets in the
 *                      workflow-level `env:` (every job would get them)
 *   ref-gate           a job with an `environment:` in a manually dispatched
 *                      workflow whose `if:` does not restrict github.ref, or
 *                      any job `if:` that admits every tag
 *                      (`startsWith(github.ref, 'refs/tags/')`) or every
 *                      branch (`'refs/heads/'`) instead of v* tags / main
 *                      (environments named ci-* hold read-only CI credentials
 *                      for every branch and are exempt from the first part)
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
// Any tag / any branch: the prefix closes right after the slash.
const ANY_TAG_GATE = /refs\/tags\/['"]/;
const ANY_BRANCH_GATE = /refs\/heads\/['"]/;
// `${{ ... }}`, lazily, so `format('{0}', inputs.x)` cannot end it early.
const EXPRESSION = /\$\{\{[\s\S]*?\}\}/g;
// Actions that run a container image whose `version` input defaults to the
// moving `latest` tag: the action SHA alone does not pin the code that runs.
const IMAGE_VERSION_ACTIONS = { 'trufflesecurity/trufflehog': 'version' };
const CHECKSUM_CHECK = /\b(sha(1|224|256|384|512)sum|shasum|b2sum)\b|\bopenssl\s+dgst\b|\bgpgv?\b[^\n]*--verify|\bgpgv\b|\bcosign\s+verify|\bminisign\b[^\n]*-V|\bsignify\b[^\n]*-V/;

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

/**
 * Line indexes that are heredoc payload inside `run:` bodies (README text,
 * generated config): data written to a file, not commands the step runs.
 */
function heredocLines(lines) {
  const data = new Set();
  for (let i = 0; i < lines.length; i += 1) {
    const m = /<<-?\s*(['"]?)([A-Za-z_][A-Za-z0-9_]*)\1/.exec(lines[i]);
    if (!m) continue;
    const terminator = m[2];
    let j = i + 1;
    while (j < lines.length && lines[j].trim() !== terminator) {
      data.add(j);
      j += 1;
    }
    i = j;
  }
  return data;
}

/** Physical lines joined across shell `\` continuations: [{ text, line }]. */
function logicalLines(lines) {
  const out = [];
  for (let i = 0; i < lines.length; i += 1) {
    let text = lines[i];
    const line = i + 1;
    while (/\\\s*$/.test(text) && i + 1 < lines.length) {
      i += 1;
      text = `${text.replace(/\\\s*$/, ' ')}${lines[i].trim()}`;
    }
    out.push({ text, line });
  }
  return out;
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

  // pipe-to-shell and mutable sources, in every line a step executes (heredoc
  // payloads are data and are skipped).
  const data = heredocLines(code);
  const exec = code.map((l, i) => (data.has(i) ? '' : l));
  for (const { text: line, line: at } of logicalLines(exec)) {
    if (/\b(curl|wget)\b[^|]*\|\s*(sudo\s+(-\S+\s+)*)?(env\s+\S+\s+)*(ba|z|da|k)?sh\b/.test(line)) {
      add(at, 'pipe-to-shell', 'downloads piped into a shell run unverified code; download a pinned release and check its sha256');
    }
    if (/(\b(ba|z|da|k)?sh|\bsource|(^|[\s;&|])\.)\s+<\(\s*(curl|wget)\b/.test(line) || /\beval\s+["']?\$\(\s*(curl|wget)\b/.test(line)) {
      add(at, 'pipe-to-shell', 'a download run through process substitution or eval is unverified code');
    }
    if (/\bpython[0-9.]*\s+-c\b/.test(line) && /\bexec\s*\(/.test(line) && /\b(urlopen|urlretrieve|requests\.get|httpx\.get)\b/.test(line)) {
      add(at, 'pipe-to-shell', 'python -c exec() of a download runs unverified code');
    }
    if (/\b(irm|iwr|Invoke-RestMethod|Invoke-WebRequest)\b[^|]*\|\s*(iex|Invoke-Expression)\b/i.test(line)) {
      add(at, 'pipe-to-shell', 'downloads piped into Invoke-Expression run unverified code');
    }
    if (/raw\.githubusercontent\.com\/[^/\s]+\/[^/\s]+\/(main|master|HEAD)\//.test(line)) {
      add(at, 'mutable-source', 'fetches from a moving branch head; pin a tag or commit and verify a checksum');
    }
    if (/\b(npm|npx|pnpm|yarn|bunx?)\b.*@latest\b/.test(line)) {
      add(at, 'mutable-source', 'installs a moving @latest version; pin an exact version');
    }
    const npmInstall = /\bnpm\s+(install|i|add)\b(.*)$/.exec(line);
    if (npmInstall && !npmInstall[2].split(/\s+/).some((arg) => arg && !arg.startsWith('-'))) {
      add(at, 'mutable-source', 'npm install resolves versions afresh; use npm ci (exactly the lockfile)');
    }
    if (/\bgo\s+(install|get|run)\b[^\n]*@(latest|master|main|HEAD)\b/.test(line)) {
      add(at, 'mutable-source', 'go install of a moving version; pin a release (go checks it against sum.golang.org)');
    }
    if (/\b(pip[0-9.]*|python[0-9.]*\s+-m\s+pip|uv\s+pip)\s+install\b/.test(line) && !/--require-hashes\b/.test(line)
      && !/#\s*hardening:\s*\S/.test(lines[at - 1])) {
      add(at, 'unpinned-pip', 'pip install without --require-hashes runs whatever PyPI serves today; install a hashed requirements file');
    }
    if (/\bdocker\s+(run|pull|create)\b/.test(line) && /\S:latest\b/.test(line)) {
      add(at, 'latest-image', 'runs a container at the moving :latest tag; pin <version>@sha256:<digest>');
    }
    if (/\bpull_request_target\b/.test(line)) {
      add(at, 'pull-request-target', 'pull_request_target runs with secrets on untrusted pull requests');
    }
  }

  const bodies = scriptBodies(code);
  for (const body of bodies) {
    if (/\bgit\s+clone\b/.test(body.text) && !/\b[0-9a-f]{40}\b/.test(body.text)) {
      add(body.line, 'mutable-source', 'git clone without checking out a pinned 40-hex commit in the same step');
    }
    // Downloaded to a file, then run, with nothing checking what arrived.
    const runnable = body.lines.filter((_, k) => !data.has(body.offset + k));
    const joined = logicalLines(runnable).map((l) => l.text);
    const downloaded = new Set();
    for (const l of joined) {
      if (!/\b(curl|wget)\b/.test(l)) continue;
      for (const m of l.matchAll(/(?:\s-o|\s--output|\s-O|\s--output-document)[=\s]+(['"]?)([^\s'";|&]+)\1/g)) downloaded.add(m[2]);
    }
    if (downloaded.size && !CHECKSUM_CHECK.test(joined.join('\n'))) {
      const runs = (l) => [...downloaded].some((f) => {
        const q = f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const viaShell = new RegExp(`(^|[\\s;&|(])((sudo\\s+)?(ba|z|da|k)?sh|source|\\.)\\s+(-\\S+\\s+)*['"]?${q}['"]?(\\s|$|;)`);
        const direct = new RegExp(`(^|[;&|]|&&|\\|\\|)\\s*(sudo\\s+)?['"]?(\\./)?${q}['"]?(\\s|$|;)`);
        return viaShell.test(l) || direct.test(l);
      });
      const at = joined.findIndex((l) => runs(l));
      if (at >= 0) add(body.line, 'pipe-to-shell', 'a downloaded file is executed with no checksum or signature check in the same step');
    }
    body.lines.forEach((l, k) => {
      const expressions = l.match(EXPRESSION) || [];
      for (const expr of expressions) {
        const untrusted = /\bgithub\.event\b|\bgithub\.head_ref\b/.test(expr) || (kind === 'workflow' && /\binputs\./.test(expr));
        if (untrusted) add(body.offset + k + 1, 'script-injection', `${expr} is expanded into the script; pass it through env:`);
      }
    });
  }

  // Actions whose container image defaults to `latest`.
  code.forEach((line, i) => {
    const m = /^\s*(?:-\s+)?uses:\s*['"]?([\w.-]+\/[\w.-]+)@/.exec(line);
    if (!m || !IMAGE_VERSION_ACTIONS[m[1]]) return;
    const input = IMAGE_VERSION_ACTIONS[m[1]];
    let start = i;
    while (start >= 0 && !/^\s*-\s/.test(code[start])) start -= 1;
    const dashCol = indentOf(code[start < 0 ? i : start]);
    let end = i + 1;
    while (end < code.length && (isBlank(code[end]) || indentOf(code[end]) > dashCol)) end += 1;
    const step = code.slice(Math.max(start, 0), end);
    const version = step.find((l) => new RegExp(`^\\s*${input}:`).test(l));
    if (!version || !/@sha256:[0-9a-f]{64}\s*['"]?\s*$/.test(version)) {
      add(i + 1, 'mutable-source', `${m[1]} runs its image at \`${input}\` (default latest); pin ${input}: <version>@sha256:<digest>`);
    }
  });

  for (const step of checkoutSteps(code)) {
    const at = step.lines.findIndex((l) => /^\s*persist-credentials:/.test(l));
    const persist = at < 0 ? null : step.lines[at];
    const raw = at < 0 ? '' : lines[step.start + at];
    if (!persist) {
      add(step.line, 'persist-credentials', 'actions/checkout must set persist-credentials: false');
    } else if (!/:\s*false\s*$/.test(persist)) {
      if (!/#\s*hardening:\s*\S/.test(raw)) add(step.line, 'persist-credentials', 'persist-credentials: true needs a "# hardening: <reason>" comment');
    }
    const refLine = step.lines.find((l) => /^\s*ref:/.test(l));
    if (kind === 'workflow' && refLine && /\binputs\.|\bgithub\.event\.inputs\b/.test(refLine)) {
      add(step.line, 'checkout-ref', 'checkout ref comes from a dispatch input; build github.ref and dispatch the workflow on the tag instead');
    } else if (step.lines.some((l) => /^\s*(ref|repository):/.test(l) && /\bgithub\.event\b|\bgithub\.head_ref\b/.test(l))) {
      add(step.line, 'checkout-ref', 'checkout ref or repository comes from the triggering event; check out the commit the run itself is for (the default)');
    }
    const repo = step.lines.find((l) => /^\s*repository:/.test(l));
    if (repo && !/\$\{\{\s*github\.repository\s*\}\}/.test(repo)) {
      const ref = step.lines.find((l) => /^\s*ref:/.test(l));
      if (!ref || !SHA40.test(unquote(ref.replace(/^\s*ref:/, '')))) {
        add(step.line, 'mutable-source', `checkout of ${unquote(repo.replace(/^\s*repository:/, ''))} must pin ref: to a 40-hex commit`);
      }
    }
  }

  // Job and service containers: the steps run inside them, so a tag the
  // registry can repoint is unreviewed code.
  code.forEach((line, i) => {
    const m = /^\s*(?:-\s+)?(container|image):\s*(\S.*?)\s*$/.exec(line);
    if (!m) return;
    const value = unquote(m[2]);
    if (!value || value.startsWith('${{') || value === '|' || value === '>') return;
    if (/@sha256:[0-9a-f]{64}$/.test(value)) return;
    if (/#\s*hardening:\s*\S/.test(lines[i])) return;
    add(i + 1, 'unpinned-image', `${m[1]} ${value} is a mutable tag; pin <image>:<tag>@sha256:<digest>`);
  });

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

  // Workflow-level env reaches every job, environment or not.
  const envIdx = code.findIndex((l) => /^env:/.test(l));
  if (envIdx >= 0) {
    const envBlock = code.slice(envIdx, blockEnd(code, envIdx, 0)).join('\n');
    if (/\bsecrets\b/.test(envBlock.replace(/secrets\.GITHUB_TOKEN\b/g, ''))) {
      add(envIdx + 1, 'environment', 'workflow-level env: holds a secret, so every job gets it; set it on the step that needs it, in an environment job');
    }
  }
  code.forEach((line, i) => {
    if (/\btoJSON\s*\(\s*secrets\s*\)/i.test(line)) add(i + 1, 'environment', 'toJSON(secrets) hands every secret to one place');
  });

  const dispatched = code.some((l) => /\bworkflow_dispatch\b/.test(l));
  for (const job of jobsOf(code)) {
    const perms = jobKey(job, 'permissions');
    if (!perms) add(job.line, 'permissions', `job ${job.name} has no permissions: block`);
    const env = jobKey(job, 'environment');
    const jobText = job.lines.join('\n');
    const secrets = [
      ...[...jobText.matchAll(/\bsecrets\.([A-Za-z0-9_]+)/g)].map((m) => m[1]),
      ...[...jobText.matchAll(/\bsecrets\s*\[\s*['"]?([A-Za-z0-9_]*)/g)].map((m) => m[1] || '[indexed]'),
      ...(/\btoJSON\s*\(\s*secrets\s*\)/i.test(jobText) ? ['toJSON(secrets)'] : []),
    ].filter((s) => s !== 'GITHUB_TOKEN');
    const idToken = perms && /id-token:\s*write/.test(perms.block);
    if ((secrets.length || idToken) && !env) {
      const why = [secrets.length ? `secrets ${[...new Set(secrets)].join(', ')}` : '', idToken ? 'id-token: write' : ''].filter(Boolean).join(' and ');
      add(job.line, 'environment', `job ${job.name} holds ${why} but declares no deployment environment:`);
    }
    // ci-* environments carry read-only CI credentials for every branch and
    // pull request; they are not deployment targets, so they take no ref gate.
    const ciOnly = env && /^\s*environment:\s*['"]?ci-/.test(env.line);
    const cond = jobKey(job, 'if');
    if (env && dispatched && !ciOnly) {
      if (!cond || !SAFE_REF_GATE.test(cond.block)) add(job.line, 'ref-gate', `job ${job.name} deploys from a dispatchable workflow without an if: on github.ref`);
    }
    if (cond && ANY_TAG_GATE.test(cond.block)) add(job.line, 'ref-gate', `job ${job.name} admits every tag; gate on 'refs/tags/v'`);
    if (cond && ANY_BRANCH_GATE.test(cond.block)) add(job.line, 'ref-gate', `job ${job.name} admits every branch; gate on 'refs/heads/main'`);
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
