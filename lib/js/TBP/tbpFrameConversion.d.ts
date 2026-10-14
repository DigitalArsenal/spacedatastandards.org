import * as flatbuffers from 'flatbuffers';
import { tbpConversionDirection } from './tbpConversionDirection.js';
import { tbpState, tbpStateT } from './tbpState.js';
/**
 * A state converted between the synodic and inertial frames. The inertial
 * frame is centred on the barycentre with its X axis along the synodic X
 * axis at REFERENCE_EPOCH_MS (elapsed time 0) and Z along the system's
 * angular momentum.
 */
export declare class tbpFrameConversion implements flatbuffers.IUnpackableObject<tbpFrameConversionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpFrameConversion;
    static getRootAstbpFrameConversion(bb: flatbuffers.ByteBuffer, obj?: tbpFrameConversion): tbpFrameConversion;
    static getSizePrefixedRootAstbpFrameConversion(bb: flatbuffers.ByteBuffer, obj?: tbpFrameConversion): tbpFrameConversion;
    DIRECTION(): tbpConversionDirection;
    /**
     * Unix milliseconds when the two frames are aligned; 0 = relative time
     * only.
     */
    REFERENCE_EPOCH_MS(): bigint;
    /**
     * Seconds from the alignment to the state.
     */
    ELAPSED_S(): number;
    /**
     * The synodic state (input or result), non-dimensional.
     */
    SYNODIC(obj?: tbpState): tbpState | null;
    /**
     * The inertial state (input or result): km and km/s, 6 values.
     */
    INERTIAL(index: number): number | null;
    inertialLength(): number;
    inertialArray(): Float64Array | null;
    static starttbpFrameConversion(builder: flatbuffers.Builder): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: tbpConversionDirection): void;
    static addReferenceEpochMs(builder: flatbuffers.Builder, REFERENCE_EPOCH_MS: bigint): void;
    static addElapsedS(builder: flatbuffers.Builder, ELAPSED_S: number): void;
    static addSynodic(builder: flatbuffers.Builder, SYNODICOffset: flatbuffers.Offset): void;
    static addInertial(builder: flatbuffers.Builder, INERTIALOffset: flatbuffers.Offset): void;
    static createInertialVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInertialVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInertialVector(builder: flatbuffers.Builder, numElems: number): void;
    static endtbpFrameConversion(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpFrameConversionT;
    unpackTo(_o: tbpFrameConversionT): void;
}
export declare class tbpFrameConversionT implements flatbuffers.IGeneratedObject {
    DIRECTION: tbpConversionDirection;
    REFERENCE_EPOCH_MS: bigint;
    ELAPSED_S: number;
    SYNODIC: tbpStateT | null;
    INERTIAL: (number)[];
    constructor(DIRECTION?: tbpConversionDirection, REFERENCE_EPOCH_MS?: bigint, ELAPSED_S?: number, SYNODIC?: tbpStateT | null, INERTIAL?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpFrameConversion.d.ts.map