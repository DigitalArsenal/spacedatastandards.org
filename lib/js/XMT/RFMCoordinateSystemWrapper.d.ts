import * as flatbuffers from 'flatbuffers';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
export declare class RFMCoordinateSystemWrapper implements flatbuffers.IUnpackableObject<RFMCoordinateSystemWrapperT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMCoordinateSystemWrapper;
    static getRootAsRFMCoordinateSystemWrapper(bb: flatbuffers.ByteBuffer, obj?: RFMCoordinateSystemWrapper): RFMCoordinateSystemWrapper;
    static getSizePrefixedRootAsRFMCoordinateSystemWrapper(bb: flatbuffers.ByteBuffer, obj?: RFMCoordinateSystemWrapper): RFMCoordinateSystemWrapper;
    COORDINATE_SYSTEM(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    static startRFMCoordinateSystemWrapper(builder: flatbuffers.Builder): void;
    static addCoordinateSystem(builder: flatbuffers.Builder, COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static endRFMCoordinateSystemWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFMCoordinateSystemWrapper(builder: flatbuffers.Builder, COORDINATE_SYSTEMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFMCoordinateSystemWrapperT;
    unpackTo(_o: RFMCoordinateSystemWrapperT): void;
}
export declare class RFMCoordinateSystemWrapperT implements flatbuffers.IGeneratedObject {
    COORDINATE_SYSTEM: RFMCoordinateSystemT | null;
    constructor(COORDINATE_SYSTEM?: RFMCoordinateSystemT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMCoordinateSystemWrapper.d.ts.map