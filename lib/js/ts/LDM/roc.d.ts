import * as flatbuffers from 'flatbuffers';
import { STAGE, STAGET } from './stage.js';
import { SUSTAINER, SUSTAINERT } from './sustainer.js';
/**
 * Rocket Configuration
 */
export declare class ROC implements flatbuffers.IUnpackableObject<ROCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ROC;
    static getRootAsROC(bb: flatbuffers.ByteBuffer, obj?: ROC): ROC;
    static getSizePrefixedRootAsROC(bb: flatbuffers.ByteBuffer, obj?: ROC): ROC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Rocket Name
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Family
     */
    family(): string | null;
    family(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rocket Variant
     */
    variant(): string | null;
    variant(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stages in the Rocket
     */
    stages(index: number, obj?: STAGE): STAGE | null;
    stagesLength(): number;
    /**
     * Sustainers in the Rocket
     */
    sustainers(index: number, obj?: SUSTAINER): SUSTAINER | null;
    sustainersLength(): number;
    static startROC(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addFamily(builder: flatbuffers.Builder, familyOffset: flatbuffers.Offset): void;
    static addVariant(builder: flatbuffers.Builder, variantOffset: flatbuffers.Offset): void;
    static addStages(builder: flatbuffers.Builder, stagesOffset: flatbuffers.Offset): void;
    static createStagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSustainers(builder: flatbuffers.Builder, sustainersOffset: flatbuffers.Offset): void;
    static createSustainersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSustainersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endROC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishROCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedROCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createROC(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset, familyOffset: flatbuffers.Offset, variantOffset: flatbuffers.Offset, stagesOffset: flatbuffers.Offset, sustainersOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ROCT;
    unpackTo(_o: ROCT): void;
}
export declare class ROCT implements flatbuffers.IGeneratedObject {
    name: string | Uint8Array | null;
    family: string | Uint8Array | null;
    variant: string | Uint8Array | null;
    stages: (STAGET)[];
    sustainers: (SUSTAINERT)[];
    constructor(name?: string | Uint8Array | null, family?: string | Uint8Array | null, variant?: string | Uint8Array | null, stages?: (STAGET)[], sustainers?: (SUSTAINERT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=roc.d.ts.map