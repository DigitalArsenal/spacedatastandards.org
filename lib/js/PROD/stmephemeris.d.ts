import { type Result } from './tokens.js';
import { type Record } from './record.js';
import { type Equinoctial } from './frames.js';
export declare const STM_EPHEMERIS_REFUSAL_CODES: readonly string[];
export interface StmEphemerisEpoch {
    readonly minutes: number;
    readonly epochMs: number;
    /** 6 x COV_SIZE: d(state at t) / d(equinoctial set at t0, then the solved parameters). */
    readonly sensitivities: readonly (readonly number[])[];
}
export interface StmEphemeris {
    readonly epochMs: number;
    readonly weightedRms: number;
    readonly size: number;
    readonly parameters: readonly string[];
    /** The equinoctial set of the first state, the point the projection is taken at. */
    readonly elements: Equinoctial;
    /** The first state's covariance over the equinoctial set and the solved parameters, LTM. */
    readonly ltm: readonly number[];
    readonly epochs: readonly StmEphemerisEpoch[];
}
/** The Record fragment P8 prints and its reader returns. */
export type StmEphemerisText = Omit<StmEphemeris, 'elements' | 'parameters'>;
/** The P8 content of a Record, before printing. */
export declare function stmEphemeris(record: Record): Result<StmEphemeris>;
/** P8 text of a fragment: the header, the equinoctial covariance rows and the sensitivity rows per epoch. */
export declare function writeStmEphemeris(e: StmEphemerisText): Result<string>;
/** P8 text: the header, the equinoctial covariance rows and the sensitivity rows per epoch. */
export declare function stmEphemerisText(record: Record): Result<string>;
/** Reads P8 back into its fragment; refuses a malformed header, covariance row, epoch line or block. */
export declare function readStmEphemeris(text: string): Result<StmEphemerisText>;
//# sourceMappingURL=stmephemeris.d.ts.map