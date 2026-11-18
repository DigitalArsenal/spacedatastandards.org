#!/usr/bin/env node
// Seeded fuzz of the $MOR COV_FACTOR reference decoder over the validity domain of schema/MOR/COV_FACTOR.md section 3:
// every scalar the decoder reads at special values (NaN, the infinities, zeros of both signs, the smallest and largest
// subnormal and normal numbers, negatives), at each bound and its neighbors, and as random bit patterns; factor bytes
// random, truncated and over-long; the test vectors with single bits flipped (cases in lib/mor-cov-factor-fuzz-cases.mjs).
// Each case must end, within the time limit, in a defined outcome: a refusal (an error and no matrix), no covariance
// (encoding NONE or unknown), or a finite, exactly symmetric, positive semi-definite G G^T and P. Never a hang, a
// throw, a NaN or a non-PSD matrix. The decoder runs in a worker thread; the main thread stops it when one case runs
// over the limit.
//   node scripts/e2e/mor-cov-factor-fuzz.mjs [cases=120000] [seed=20261117]
import assert from 'node:assert/strict';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

const CASE_LIMIT_MS = 2000; // per case; a decode takes well under a millisecond

if (isMainThread) {
  const cases = Number(process.argv[2] ?? 120000), seed = Number(process.argv[3] ?? 20261117);
  assert.ok(cases >= 100000, 'at least 100,000 cases');
  const progress = new Int32Array(new SharedArrayBuffer(4));
  const worker = new Worker(new URL(import.meta.url), { workerData: { cases, seed, progress } });
  const t0 = Date.now();
  let last = -1, since = Date.now(), timer;
  const result = await new Promise((resolve, reject) => {
    worker.on('message', resolve);
    worker.on('error', reject);
    timer = setInterval(() => {
      const at = Atomics.load(progress, 0);
      if (at !== last) { last = at; since = Date.now(); return; }
      if (Date.now() - since > CASE_LIMIT_MS) { worker.terminate(); reject(new Error(`case ${at} ran over ${CASE_LIMIT_MS} ms (seed ${seed})`)); }
    }, 50);
  }).finally(() => clearInterval(timer));
  await worker.terminate();
  console.log(JSON.stringify({ seed, cases, seconds: (Date.now() - t0) / 1000, outcomes: result.counts, slowestCaseMs: result.slowest }));
  assert.deepEqual(result.bad, [], `cases outside the defined outcomes: ${JSON.stringify(result.bad.slice(0, 10))}`);
  assert.equal(Object.values(result.counts).reduce((a, b) => a + b, 0), cases);
  assert.ok(result.counts.decoded > 1000 && result.counts.refused > 1000, 'both accepted and refused cases are exercised');
  console.log(`PASS mor-cov-factor-fuzz: ${cases} cases, each a refusal, no covariance, or a finite symmetric PSD result`);
} else {
  const { decodeCovFactor } = await import('./lib/mor-cov-factor.mjs');
  const { COV_FACTOR_VECTORS } = await import('./lib/mor-cov-factor-vectors.mjs');
  const { makeCase, outcome, DEFINED_OUTCOMES } = await import('./lib/mor-cov-factor-fuzz-cases.mjs');
  const { cases, seed, progress } = workerData;
  const counts = {}, bad = [];
  let slowest = 0;
  for (let i = 0; i < cases; i++) {
    Atomics.store(progress, 0, i);
    const { rec, what } = makeCase(COV_FACTOR_VECTORS, seed, i);
    const t = performance.now();
    const o = outcome(decodeCovFactor, rec);
    slowest = Math.max(slowest, performance.now() - t);
    counts[o] = (counts[o] ?? 0) + 1;
    if (!DEFINED_OUTCOMES.includes(o)) bad.push({ i, what, o });
  }
  parentPort.postMessage({ counts, bad, slowest: Number(slowest.toFixed(3)) });
}
