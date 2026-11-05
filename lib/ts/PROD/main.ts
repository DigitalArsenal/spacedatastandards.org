// hand-written: not generated
// lib/ts/PROD: the product codec family (requirement baseline, section 2.2). The first line above is the marker
// scripts/createTSIndex.js reads: it leaves this file alone, reads no walk programs for the directory and still
// exports PROD from lib/ts/index.ts, so the directory survives the release build.
// One namespace: the Record, the token tables and the frame transforms, then every product module's writers,
// readers and constants. No two modules export the same name (test/prod-exports.test.js holds that).
export * from './frames.js';
export * from './record.js';
export * from './tokens.js';
export * from './staterow.js';
export * from './ephtrk.js';
export * from './covtext.js';
export * from './covmsg-text.js';
export * from './covmsg-binary.js';
export * from './elset.js';
export * from './stmephemeris.js';
export * from './residual.js';
