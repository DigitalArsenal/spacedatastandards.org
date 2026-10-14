import * as flatbuffers from 'flatbuffers';
import { mplGeometryRequest, mplGeometryRequestT } from './mplGeometryRequest.js';
import { mplLambertRequest, mplLambertRequestT } from './mplLambertRequest.js';
import { mplPhasingRequest, mplPhasingRequestT } from './mplPhasingRequest.js';
import { mplRelativeRequest, mplRelativeRequestT } from './mplRelativeRequest.js';
import { mplRendezvousRequest, mplRendezvousRequestT } from './mplRendezvousRequest.js';
import { mplTransferRequest, mplTransferRequestT } from './mplTransferRequest.js';
/**
 * The question: which problem and its inputs. Only the sub-table matching
 * PROBLEM is read.
 */
export declare class mplRequest implements flatbuffers.IUnpackableObject<mplRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRequest;
    static getRootAsmplRequest(bb: flatbuffers.ByteBuffer, obj?: mplRequest): mplRequest;
    static getSizePrefixedRootAsmplRequest(bb: flatbuffers.ByteBuffer, obj?: mplRequest): mplRequest;
    /**
     * Gravitational parameter of the central body, km^3/s^2; 0 = Earth
     * (398600.4418).
     */
    MU_KM3_S2(): number;
    TRANSFER(obj?: mplTransferRequest): mplTransferRequest | null;
    LAMBERT(obj?: mplLambertRequest): mplLambertRequest | null;
    PHASING(obj?: mplPhasingRequest): mplPhasingRequest | null;
    RELATIVE(obj?: mplRelativeRequest): mplRelativeRequest | null;
    RENDEZVOUS(obj?: mplRendezvousRequest): mplRendezvousRequest | null;
    GEOMETRY(obj?: mplGeometryRequest): mplGeometryRequest | null;
    static startmplRequest(builder: flatbuffers.Builder): void;
    static addMuKm3S2(builder: flatbuffers.Builder, MU_KM3_S2: number): void;
    static addTransfer(builder: flatbuffers.Builder, TRANSFEROffset: flatbuffers.Offset): void;
    static addLambert(builder: flatbuffers.Builder, LAMBERTOffset: flatbuffers.Offset): void;
    static addPhasing(builder: flatbuffers.Builder, PHASINGOffset: flatbuffers.Offset): void;
    static addRelative(builder: flatbuffers.Builder, RELATIVEOffset: flatbuffers.Offset): void;
    static addRendezvous(builder: flatbuffers.Builder, RENDEZVOUSOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static endmplRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplRequestT;
    unpackTo(_o: mplRequestT): void;
}
export declare class mplRequestT implements flatbuffers.IGeneratedObject {
    MU_KM3_S2: number;
    TRANSFER: mplTransferRequestT | null;
    LAMBERT: mplLambertRequestT | null;
    PHASING: mplPhasingRequestT | null;
    RELATIVE: mplRelativeRequestT | null;
    RENDEZVOUS: mplRendezvousRequestT | null;
    GEOMETRY: mplGeometryRequestT | null;
    constructor(MU_KM3_S2?: number, TRANSFER?: mplTransferRequestT | null, LAMBERT?: mplLambertRequestT | null, PHASING?: mplPhasingRequestT | null, RELATIVE?: mplRelativeRequestT | null, RENDEZVOUS?: mplRendezvousRequestT | null, GEOMETRY?: mplGeometryRequestT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRequest.d.ts.map