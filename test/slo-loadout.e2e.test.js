// npm test runs the $SLO end-to-end check: scripts/e2e/loadout.mjs writes three publishers' record streams, reads
// them back, answers "what does this host carry" by the READING RULE of schema/SLO/main.fbs and copies every
// loadout through the generated C++ and Go. It needs node, a C++17 compiler and go, as the other wire checks do.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

describe('$SLO sensor loadout', function () {
  this.timeout(600000);
  it('scripts/e2e/loadout.mjs passes', () => {
    const result = spawnSync(process.execPath, ['scripts/e2e/loadout.mjs'], { cwd: root, encoding: 'utf8' });
    assert.ifError(result.error);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /^PASS loadout:/m);
  });
});
