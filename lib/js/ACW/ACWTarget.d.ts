import * as flatbuffers from 'flatbuffers';
import { ACWStateSample, ACWStateSampleT } from './ACWStateSample.js';
import { ACWTargetSignature, ACWTargetSignatureT } from './ACWTargetSignature.js';
/**
 * One simulated target: truth states and signature.
 */
export declare class ACWTarget implements flatbuffers.IUnpackableObject<ACWTargetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWTarget;
    static getRootAsACWTarget(bb: flatbuffers.ByteBuffer, obj?: ACWTarget): ACWTarget;
    static getSizePrefixedRootAsACWTarget(bb: flatbuffers.ByteBuffer, obj?: ACWTarget): ACWTarget;
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CAT_ID(): number;
    /**
     * International designator.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Truth Earth-fixed states with velocity, in the frame and time scale of
     * ACWRequest.STATES.
     */
    STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    statesLength(): number;
    SIGNATURE(obj?: ACWTargetSignature): ACWTargetSignature | null;
    static startACWTarget(builder: flatbuffers.Builder): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static endACWTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ACWTargetT;
    unpackTo(_o: ACWTargetT): void;
}
export declare class ACWTargetT implements flatbuffers.IGeneratedObject {
    TARGET_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    STATES: (ACWStateSampleT)[];
    SIGNATURE: ACWTargetSignatureT | null;
    constructor(TARGET_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, STATES?: (ACWStateSampleT)[], SIGNATURE?: ACWTargetSignatureT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWTarget.d.ts.map