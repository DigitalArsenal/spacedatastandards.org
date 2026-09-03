import * as flatbuffers from 'flatbuffers';
import { qrpFilterOp } from './qrpFilterOp.js';
/**
 * One field filter of a request.
 */
export declare class QRPFilter implements flatbuffers.IUnpackableObject<QRPFilterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRPFilter;
    static getRootAsQRPFilter(bb: flatbuffers.ByteBuffer, obj?: QRPFilter): QRPFilter;
    static getSizePrefixedRootAsQRPFilter(bb: flatbuffers.ByteBuffer, obj?: QRPFilter): QRPFilter;
    FIELD(): string | null;
    FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OP(): qrpFilterOp;
    /**
     * Value as text; for In, values separated by commas.
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startQRPFilter(builder: flatbuffers.Builder): void;
    static addField(builder: flatbuffers.Builder, FIELDOffset: flatbuffers.Offset): void;
    static addOp(builder: flatbuffers.Builder, OP: qrpFilterOp): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endQRPFilter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQRPFilter(builder: flatbuffers.Builder, FIELDOffset: flatbuffers.Offset, OP: qrpFilterOp, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QRPFilterT;
    unpackTo(_o: QRPFilterT): void;
}
export declare class QRPFilterT implements flatbuffers.IGeneratedObject {
    FIELD: string | Uint8Array | null;
    OP: qrpFilterOp;
    VALUE: string | Uint8Array | null;
    constructor(FIELD?: string | Uint8Array | null, OP?: qrpFilterOp, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRPFilter.d.ts.map