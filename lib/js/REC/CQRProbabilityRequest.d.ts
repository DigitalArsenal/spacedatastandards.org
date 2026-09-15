import * as flatbuffers from 'flatbuffers';
import { CQRPlaneGeometry, CQRPlaneGeometryT } from './CQRPlaneGeometry.js';
import { cqrProbabilityAlgorithm } from './cqrProbabilityAlgorithm.js';
export declare class CQRProbabilityRequest implements flatbuffers.IUnpackableObject<CQRProbabilityRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRProbabilityRequest;
    static getRootAsCQRProbabilityRequest(bb: flatbuffers.ByteBuffer, obj?: CQRProbabilityRequest): CQRProbabilityRequest;
    static getSizePrefixedRootAsCQRProbabilityRequest(bb: flatbuffers.ByteBuffer, obj?: CQRProbabilityRequest): CQRProbabilityRequest;
    GEOMETRY(obj?: CQRPlaneGeometry): CQRPlaneGeometry | null;
    ALGORITHM(): cqrProbabilityAlgorithm;
    static startCQRProbabilityRequest(builder: flatbuffers.Builder): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: cqrProbabilityAlgorithm): void;
    static endCQRProbabilityRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRProbabilityRequest(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset, ALGORITHM: cqrProbabilityAlgorithm): flatbuffers.Offset;
    unpack(): CQRProbabilityRequestT;
    unpackTo(_o: CQRProbabilityRequestT): void;
}
export declare class CQRProbabilityRequestT implements flatbuffers.IGeneratedObject {
    GEOMETRY: CQRPlaneGeometryT | null;
    ALGORITHM: cqrProbabilityAlgorithm;
    constructor(GEOMETRY?: CQRPlaneGeometryT | null, ALGORITHM?: cqrProbabilityAlgorithm);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRProbabilityRequest.d.ts.map