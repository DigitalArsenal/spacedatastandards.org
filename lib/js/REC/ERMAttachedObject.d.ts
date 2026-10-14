import * as flatbuffers from 'flatbuffers';
import { ERMRowLabel, ERMRowLabelT } from './ERMRowLabel.js';
import { ERMRuleNote, ERMRuleNoteT } from './ERMRuleNote.js';
import { covarianceRule } from './covarianceRule.js';
/**
 * One object's product and the covariance it got.
 */
export declare class ERMAttachedObject implements flatbuffers.IUnpackableObject<ERMAttachedObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAttachedObject;
    static getRootAsERMAttachedObject(bb: flatbuffers.ByteBuffer, obj?: ERMAttachedObject): ERMAttachedObject;
    static getSizePrefixedRootAsERMAttachedObject(bb: flatbuffers.ByteBuffer, obj?: ERMAttachedObject): ERMAttachedObject;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mean element theory, e.g. "SGP4".
     */
    THEORY(): string | null;
    THEORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OMM_SHA256(): string | null;
    OMM_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OCM_SHA256(): string | null;
    OCM_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RULE(): covarianceRule;
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * e.g. "operator-ephemeris", "fit-state", "sgp4-epoch-state".
     */
    PRODUCT(): string | null;
    PRODUCT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CALIBRATED(): boolean;
    /**
     * "rtn" or "unavailable".
     */
    OMM_COVARIANCE(): string | null;
    OMM_COVARIANCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROWS(index: number, obj?: ERMRowLabel): ERMRowLabel | null;
    rowsLength(): number;
    NOTES(index: number, obj?: ERMRuleNote): ERMRuleNote | null;
    notesLength(): number;
    static startERMAttachedObject(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTheory(builder: flatbuffers.Builder, THEORYOffset: flatbuffers.Offset): void;
    static addOmmSha256(builder: flatbuffers.Builder, OMM_SHA256Offset: flatbuffers.Offset): void;
    static addOcmSha256(builder: flatbuffers.Builder, OCM_SHA256Offset: flatbuffers.Offset): void;
    static addRule(builder: flatbuffers.Builder, RULE: covarianceRule): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addProduct(builder: flatbuffers.Builder, PRODUCTOffset: flatbuffers.Offset): void;
    static addCalibrated(builder: flatbuffers.Builder, CALIBRATED: boolean): void;
    static addOmmCovariance(builder: flatbuffers.Builder, OMM_COVARIANCEOffset: flatbuffers.Offset): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static createNotesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNotesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMAttachedObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMAttachedObject(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, THEORYOffset: flatbuffers.Offset, OMM_SHA256Offset: flatbuffers.Offset, OCM_SHA256Offset: flatbuffers.Offset, RULE: covarianceRule, METHODOffset: flatbuffers.Offset, PRODUCTOffset: flatbuffers.Offset, CALIBRATED: boolean, OMM_COVARIANCEOffset: flatbuffers.Offset, ROWSOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMAttachedObjectT;
    unpackTo(_o: ERMAttachedObjectT): void;
}
export declare class ERMAttachedObjectT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    THEORY: string | Uint8Array | null;
    OMM_SHA256: string | Uint8Array | null;
    OCM_SHA256: string | Uint8Array | null;
    RULE: covarianceRule;
    METHOD: string | Uint8Array | null;
    PRODUCT: string | Uint8Array | null;
    CALIBRATED: boolean;
    OMM_COVARIANCE: string | Uint8Array | null;
    ROWS: (ERMRowLabelT)[];
    NOTES: (ERMRuleNoteT)[];
    constructor(OBJECT_KEY?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, THEORY?: string | Uint8Array | null, OMM_SHA256?: string | Uint8Array | null, OCM_SHA256?: string | Uint8Array | null, RULE?: covarianceRule, METHOD?: string | Uint8Array | null, PRODUCT?: string | Uint8Array | null, CALIBRATED?: boolean, OMM_COVARIANCE?: string | Uint8Array | null, ROWS?: (ERMRowLabelT)[], NOTES?: (ERMRuleNoteT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAttachedObject.d.ts.map