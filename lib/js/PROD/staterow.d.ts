import { type Record as ProductRecord } from './record.js';
import { type State } from './frames.js';
import { type Product, type Result, type Token } from './tokens.js';
export type FieldValue = number | string | boolean;
/** One line of a product: the named tokens' values at their columns; refuses a value that does not fit. */
export declare function formatLine(product: Product, names: readonly string[], values: {
    readonly [token: string]: FieldValue;
}): Result<string>;
/** A header line naming each token at its column: text left-justified at the start, numbers right-justified to the end. */
export declare function headerLine(columns: readonly (readonly Token[])[]): Result<string>;
/** Joins product lines: '\n' after every line. */
export declare function joinLines(lines: readonly string[]): string;
export interface StateRow {
    readonly minutes: number;
    readonly state: State;
}
/** The state tokens of one epoch (MSE, POSX..VELZ) as values keyed by token name. */
export declare function stateValues(row: StateRow): {
    [token: string]: FieldValue;
};
/** The state row of one epoch for a product that carries one (P1 without the label; P2 and P3 with it). */
export declare function stateLine(product: Product, row: StateRow, labelled: boolean): Result<string>;
export declare function epochRows(record: ProductRecord): Result<StateRow[]>;
/** The P2 header line. */
export declare function stateRowHeader(): Result<string>;
/** P2 from groups of state rows: header, then each group's rows, a blank line between groups. */
export declare function writeStateRows(groups: readonly (readonly StateRow[])[]): Result<string>;
/** P2 of one Record (one group) or of several Records (one group each, in order). */
export declare function writeP2(records: ProductRecord | readonly ProductRecord[]): Result<string>;
/** The text of a token's field on a line (the columns it occupies). */
export declare function fieldText(line: string, token: Token): string;
/** A numeric field read back; null when the columns do not hold a number. */
export declare function fieldNumber(line: string, token: Token): number | null;
/** Reads P2 back into its groups of state rows; refuses a header or a row that is not the P2 layout. */
export declare function readP2(text: string): Result<{
    groups: StateRow[][];
}>;
//# sourceMappingURL=staterow.d.ts.map