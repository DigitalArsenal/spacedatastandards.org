import { type Record as ProductRecord } from './record.js';
import { type Product, type Result } from './tokens.js';
export declare const SIGMA_TOKENS: readonly string[];
/** The 6 x 6 UVW state block (21 LTM values) of each epoch's covariance. */
export declare function uvwStateBlocks(record: ProductRecord): Result<number[][]>;
/** The six UVW sigmas of a 6 x 6 LTM block: the square roots of its diagonal. */
export declare function sigmasOf(block: readonly number[]): number[];
/** The sigma row (P1 line 4, P3's sigma row, a P4 row) of a 6 x 6 UVW block. */
export declare function sigmaLine(product: Product, block: readonly number[]): Result<string>;
export declare function versionLine(product: Product, record: ProductRecord): Result<string>;
/** P3: version, the state row of epoch 0, the two title lines, six triangle rows and the sigma row (UVW). */
export declare function writeP3(record: ProductRecord): Result<string>;
/** P4: version, then one UVW sigma row per epoch. */
export declare function writeP4(record: ProductRecord): Result<string>;
//# sourceMappingURL=covtext.d.ts.map