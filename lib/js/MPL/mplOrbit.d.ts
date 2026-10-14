import * as flatbuffers from 'flatbuffers';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { mplElements, mplElementsT } from './mplElements.js';
/**
 * One orbit, given by EXACTLY ONE of ELEMENTS or STATE. A request that
 * carries both, or neither, is invalid: the form is always stated, never
 * inferred.
 */
export declare class mplOrbit implements flatbuffers.IUnpackableObject<mplOrbitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplOrbit;
    static getRootAsmplOrbit(bb: flatbuffers.ByteBuffer, obj?: mplOrbit): mplOrbit;
    static getSizePrefixedRootAsmplOrbit(bb: flatbuffers.ByteBuffer, obj?: mplOrbit): mplOrbit;
    /**
     * Identifier of the object on this orbit (catalog number, international
     * designator or name); empty = not stated.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ELEMENTS(obj?: mplElements): mplElements | null;
    /**
     * Inertial state in the plan's REFERENCE_FRAME (km, km/s). EPOCH empty =
     * the plan's start (PLAN_EPOCH_MS, or offset 0).
     */
    STATE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    static startmplOrbit(builder: flatbuffers.Builder): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addElements(builder: flatbuffers.Builder, ELEMENTSOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static endmplOrbit(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplOrbitT;
    unpackTo(_o: mplOrbitT): void;
}
export declare class mplOrbitT implements flatbuffers.IGeneratedObject {
    OBJECT_ID: string | Uint8Array | null;
    ELEMENTS: mplElementsT | null;
    STATE: ephemerisDataLineT | null;
    constructor(OBJECT_ID?: string | Uint8Array | null, ELEMENTS?: mplElementsT | null, STATE?: ephemerisDataLineT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplOrbit.d.ts.map