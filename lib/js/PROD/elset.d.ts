import { meanElementSource } from '../OCM/main.js';
import { type Result } from './tokens.js';
import { type Record } from './record.js';
export declare const ELSET_REFUSAL_CODES: readonly string[];
/** The only theory whose mean element set the two-line form carries. */
export declare const TWO_LINE_THEORY = meanElementSource.SGP4;
/** The modulo-10 checksum of a two-line element line's first 68 columns. */
export declare function twoLineChecksum(line: string): number;
/** P7, two-line form: the Record's SGP4 mean element set as two 69-character lines. */
export declare function elsetTwoLine(record: Record): Result<string>;
/** P7, element-file form: the equinoctial set at the Record's first state and the parameters it carries, one line. */
export declare function elsetElementFile(record: Record): Result<string>;
//# sourceMappingURL=elset.d.ts.map