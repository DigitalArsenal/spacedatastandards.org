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
