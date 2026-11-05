import { type Result, type Token } from './tokens.js';
import { type Record } from './record.js';
export declare const P5_ELSET = "EQUINOCTIAL";
export declare const P5_FLAG_MODEL = "UNSPECIFIED";
export declare const P5_LUNISOLAR_BODIES: readonly string[];
/** The state triples and the Record frame each one is. */
export declare const P5_STATE_FRAMES: readonly {
    readonly prefix: string;
    readonly frame: string;
}[];
/** Every P5 tag in written order: the tokens.ts P5 table. */
export declare const P5_TAGS: readonly Token[];
/** COV_PARAMETERS is absent when no parameter is solved; the COV rows are checked against COV_SIZE. */
export declare const P5_REQUIRED_TAGS: readonly string[];
/** The tag carrying each parameter's value, in the order of record.ts PARAMETERS. */
export declare const P5_PARAMETER_TAGS: readonly string[];
export declare const P5_SIGMA_TAGS: readonly string[];
/** P5 of a Record: the first epoch's state and covariance; refuses a Record without the required fields. */
export declare function writeP5(record: Record): Result<string>;
/** The Record of a P5 text under GM (km**3/s**2); refuses an unknown tag, a tag out of order and a malformed value. */
export declare function readP5(text: string, gm: number): Result<Record>;
//# sourceMappingURL=covmsg-text.d.ts.map