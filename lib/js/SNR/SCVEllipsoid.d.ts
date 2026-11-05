import * as flatbuffers from 'flatbuffers';
import { scvBodyKind } from './scvBodyKind.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
export declare class SCVEllipsoid implements flatbuffers.IUnpackableObject<SCVEllipsoidT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVEllipsoid;
    static getRootAsSCVEllipsoid(bb: flatbuffers.ByteBuffer, obj?: SCVEllipsoid): SCVEllipsoid;
    static getSizePrefixedRootAsSCVEllipsoid(bb: flatbuffers.ByteBuffer, obj?: SCVEllipsoid): SCVEllipsoid;
    BODY(): scvBodyKind;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SEMI_MAJOR_M(): number;
    SEMI_MINOR_M(): number;
    SEMI_INTERMEDIATE_M(): number;
    FRAME(): scvCoordinateFrame;
    static startSCVEllipsoid(builder: flatbuffers.Builder): void;
    static addBody(builder: flatbuffers.Builder, BODY: scvBodyKind): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSemiMajorM(builder: flatbuffers.Builder, SEMI_MAJOR_M: number): void;
    static addSemiMinorM(builder: flatbuffers.Builder, SEMI_MINOR_M: number): void;
    static addSemiIntermediateM(builder: flatbuffers.Builder, SEMI_INTERMEDIATE_M: number): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static endSCVEllipsoid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVEllipsoid(builder: flatbuffers.Builder, BODY: scvBodyKind, NAMEOffset: flatbuffers.Offset, SEMI_MAJOR_M: number, SEMI_MINOR_M: number, SEMI_INTERMEDIATE_M: number, FRAME: scvCoordinateFrame): flatbuffers.Offset;
    unpack(): SCVEllipsoidT;
    unpackTo(_o: SCVEllipsoidT): void;
}
export declare class SCVEllipsoidT implements flatbuffers.IGeneratedObject {
    BODY: scvBodyKind;
    NAME: string | Uint8Array | null;
    SEMI_MAJOR_M: number;
    SEMI_MINOR_M: number;
    SEMI_INTERMEDIATE_M: number;
    FRAME: scvCoordinateFrame;
    constructor(BODY?: scvBodyKind, NAME?: string | Uint8Array | null, SEMI_MAJOR_M?: number, SEMI_MINOR_M?: number, SEMI_INTERMEDIATE_M?: number, FRAME?: scvCoordinateFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVEllipsoid.d.ts.map