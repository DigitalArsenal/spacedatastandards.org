import { type Record as ProductRecord } from './record.js';
import { memMeasurementType } from '../ODR/main.js';
import { type Result } from './tokens.js';
/** One P9 row, as written and as read back. */
export interface ResidualRow {
    readonly id: string;
    readonly epochMs: number;
    readonly type: memMeasurementType;
    readonly typeName: string;
    readonly observed: number;
    readonly computed: number;
    readonly residual: number;
    readonly weight: number;
    readonly accepted: boolean;
    readonly code: string;
}
/** The P9 rows of a Record; refused when the Record carries no residuals or a row lacks a printed value. */
export declare function residualRows(record: ProductRecord): Result<ResidualRow[]>;
/** P9 from rows: the sign-convention header, then one row per input. */
export declare function writeResidualRows(rows: readonly ResidualRow[]): Result<string>;
/** P9 of a Record. */
export declare function writeP9(record: ProductRecord): Result<string>;
/** Reads P9 back into its rows; refuses a header, a row or a type that is not the P9 layout. */
export declare function readP9(text: string): Result<{
    rows: ResidualRow[];
}>;
//# sourceMappingURL=residual.d.ts.map