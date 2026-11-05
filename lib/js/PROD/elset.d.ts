import { meanElementSource } from '../OCM/main.js';
import { type Result } from './tokens.js';
import { type Record, type RecordMeanElements, type RecordParameter } from './record.js';
import { type Equinoctial } from './frames.js';
export declare const ELSET_REFUSAL_CODES: readonly string[];
/** The only theory whose mean element set the two-line form carries. */
export declare const TWO_LINE_THEORY = meanElementSource.SGP4;
/** The mean element set the two-line form carries: the Record's, without BTERM and AGOM, which it does not print. */
export type TwoLineMeanElements = Omit<RecordMeanElements, 'bterm' | 'agom'>;
/** The Record fragment of the two-line form: what the writer prints and the reader returns. */
export interface TwoLineElements {
    /** NORAD_CAT_ID. */
    readonly noradCatId: number;
    /** HEADER.CLASSIFICATION, one character. */
    readonly classification: string;
    /** INTERNATIONAL_DESIGNATOR, YYYY-NNNP[PP]; null when blank. */
    readonly internationalDesignator: string | null;
    /** The set's epoch: the full year and the day of the year counted from 1.0 (00:00 UTC of January 1), on the 1e-8 day grid. */
    readonly epochYear: number;
    readonly epochDay: number;
    /** The mean element set; its EPOCH is the ISO 8601 instant of epochYear/epochDay to the millisecond. */
    readonly meanElements: TwoLineMeanElements;
    readonly ephemerisType: number;
    /** No typed home in the Record: null when blank (the Record-built set prints it blank). */
    readonly elementSetNumber: number | null;
    /** ORB_REVNUM modulo 100000 when the set's epoch is EPOCH_TZERO; null when blank. */
    readonly revAtEpoch: number | null;
}
/** The Record fragment of the element-file form. */
export interface ElementFileSet {
    /** The first state's epoch, UTC milliseconds. */
    readonly epochMs: number;
    /** The $OCM EQUINOCTIAL set of the first state: a km, af, ag, L deg, chi, psi, fr. */
    readonly equinoctial: Equinoctial;
    /** The parameters OD_DYNAMIC_PARAMETERS carries, in the fixed order (whether solved is not printed). */
    readonly parameters: readonly Omit<RecordParameter, 'solvedFor'>[];
}
/** The modulo-10 checksum of a two-line element line's first 68 columns. */
export declare function twoLineChecksum(line: string): number;
/** The two-line form's fragment of a Record: its SGP4 mean element set and the identifiers the lines carry. */
export declare function twoLineElements(record: Record): Result<TwoLineElements>;
/** Two 69-character lines of a two-line fragment. */
export declare function writeTwoLine(set: TwoLineElements): Result<string>;
/** P7, two-line form: the Record's SGP4 mean element set as two 69-character lines. */
export declare function elsetTwoLine(record: Record): Result<string>;
/** The element-file form's fragment of a Record: the equinoctial set of its first state and the parameters it carries. */
export declare function elementFileSet(record: Record): Result<ElementFileSet>;
/** One element-file line of a fragment. */
export declare function writeElementFile(set: ElementFileSet): Result<string>;
/** P7, element-file form: the equinoctial set at the Record's first state and the parameters it carries, one line. */
export declare function elsetElementFile(record: Record): Result<string>;
/** Reads the two-line form back into its fragment; refuses a malformed line, field or checksum. */
export declare function readTwoLine(text: string): Result<TwoLineElements>;
/** Reads the element-file form back into its fragment; refuses a malformed line or field. */
export declare function readElementFile(text: string): Result<ElementFileSet>;
//# sourceMappingURL=elset.d.ts.map