import * as flatbuffers from 'flatbuffers';
import { MPE, MPET } from './MPE.js';
import { meanElementTheory } from './meanElementTheory.js';
import { referenceFrame } from './referenceFrame.js';
import { timeSystem } from './timeSystem.js';
/**
 * Collection of MPE Records
 */
export declare class MPECOLLECTION implements flatbuffers.IUnpackableObject<MPECOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPECOLLECTION;
    static getRootAsMPECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: MPECOLLECTION): MPECOLLECTION;
    static getSizePrefixedRootAsMPECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: MPECOLLECTION): MPECOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Default value = U
     */
    CLASSIFICATION_TYPE(): string | null;
    CLASSIFICATION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    REF_FRAME(): referenceFrame;
    /**
     * Epoch of the Reference Frame. (UNIX TimeStamp)
     */
    REF_FRAME_EPOCH(): number;
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    TIME_SYSTEM(): timeSystem;
    /**
     * Description of the Mean Element Theory. (SGP4,DSST,USM)
     */
    MEAN_ELEMENT_THEORY(): meanElementTheory;
    /**
     * Array of MPE records
     */
    RECORDS(index: number, obj?: MPE): MPE | null;
    recordsLength(): number;
    static startMPECOLLECTION(builder: flatbuffers.Builder): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAME: referenceFrame): void;
    static addRefFrameEpoch(builder: flatbuffers.Builder, REF_FRAME_EPOCH: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementTheory): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMPECOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMPECOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMPECOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMPECOLLECTION(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset, REF_FRAME: referenceFrame, REF_FRAME_EPOCH: number, TIME_SYSTEM: timeSystem, MEAN_ELEMENT_THEORY: meanElementTheory, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MPECOLLECTIONT;
    unpackTo(_o: MPECOLLECTIONT): void;
}
export declare class MPECOLLECTIONT implements flatbuffers.IGeneratedObject {
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    REF_FRAME: referenceFrame;
    REF_FRAME_EPOCH: number;
    TIME_SYSTEM: timeSystem;
    MEAN_ELEMENT_THEORY: meanElementTheory;
    RECORDS: (MPET)[];
    constructor(CLASSIFICATION_TYPE?: string | Uint8Array | null, REF_FRAME?: referenceFrame, REF_FRAME_EPOCH?: number, TIME_SYSTEM?: timeSystem, MEAN_ELEMENT_THEORY?: meanElementTheory, RECORDS?: (MPET)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MPECOLLECTION.d.ts.map