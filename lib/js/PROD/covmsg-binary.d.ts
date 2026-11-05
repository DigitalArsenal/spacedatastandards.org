import { type Result } from './tokens.js';
export declare const P6_LITTLE_ENDIAN = true;
export declare const P6_MARKER_BYTES = 4;
export declare const P6_HEADER_BYTES = 20;
export declare const P6_VALUE_BYTES = 8;
export declare const P6_HEADER_FIELDS: readonly {
    readonly name: 'EPOCH' | 'COV_SIZE' | 'WTD_RMS';
    readonly offset: number;
    readonly type: 'float64' | 'int32';
}[];
export declare const P6_STATE_BLOCK_VALUES = 21;
export declare const P6_MIN_COV_SIZE = 6;
export declare const P6_MAX_COV_SIZE = 11;
export declare const P6_REFUSAL_CODES: readonly string[];
/** The value count of each record after the header for a covariance of dimension covSize: 21, then 7, 8, ... covSize. */
export declare function p6RowWidths(covSize: number): number[];
/** The byte length of a P6 message of dimension covSize. */
export declare function p6Length(covSize: number): number;
export interface P6Message {
    readonly epochMs: number;
    readonly covSize: number;
    readonly weightedRms: number;
    /** The lower triangle of dimension covSize, row by row: the state block in UVW, then the parameter rows. */
    readonly ltm: readonly number[];
}
/** Reads a P6 message; refuses any deviation from the frozen layout. */
export declare function readP6(bytes: Uint8Array): Result<P6Message>;
//# sourceMappingURL=covmsg-binary.d.ts.map