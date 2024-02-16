import * as flatbuffers from 'flatbuffers';
import { STAGE, STAGET } from './STAGE.js';
import { SUSTAINER, SUSTAINERT } from './SUSTAINER.js';
/**
 * Rocket Configuration
 */
export declare class ROC implements flatbuffers.IUnpackableObject<ROCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ROC;
    static getRootAsROC(bb: flatbuffers.ByteBuffer, obj?: ROC): ROC;
    static getSizePrefixedRootAsROC(bb: flatbuffers.ByteBuffer, obj?: ROC): ROC;
    /**
     * Rocket Name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Family
     */
    FAMILY(): string | null;
    FAMILY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Variant
     */
    VARIANT(): string | null;
    VARIANT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stages in the Rocket
     */
    STAGES(index: number, obj?: STAGE): STAGE | null;
    stagesLength(): number;
    /**
     * Sustainers in the Rocket
     */
    SUSTAINERS(index: number, obj?: SUSTAINER): SUSTAINER | null;
    sustainersLength(): number;
    static startROC(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFamily(builder: flatbuffers.Builder, FAMILYOffset: flatbuffers.Offset): void;
    static addVariant(builder: flatbuffers.Builder, VARIANTOffset: flatbuffers.Offset): void;
    static addStages(builder: flatbuffers.Builder, STAGESOffset: flatbuffers.Offset): void;
    static createStagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSustainers(builder: flatbuffers.Builder, SUSTAINERSOffset: flatbuffers.Offset): void;
    static createSustainersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSustainersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endROC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createROC(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, FAMILYOffset: flatbuffers.Offset, VARIANTOffset: flatbuffers.Offset, STAGESOffset: flatbuffers.Offset, SUSTAINERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ROCT;
    unpackTo(_o: ROCT): void;
}
export declare class ROCT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    FAMILY: string | Uint8Array | null;
    VARIANT: string | Uint8Array | null;
    STAGES: (STAGET)[];
    SUSTAINERS: (SUSTAINERT)[];
    constructor(NAME?: string | Uint8Array | null, FAMILY?: string | Uint8Array | null, VARIANT?: string | Uint8Array | null, STAGES?: (STAGET)[], SUSTAINERS?: (SUSTAINERT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ROC.d.ts.map