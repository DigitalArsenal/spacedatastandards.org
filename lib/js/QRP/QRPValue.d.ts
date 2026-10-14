import * as flatbuffers from 'flatbuffers';
import { qrpValueKind } from './qrpValueKind.js';
/**
 * One typed value: a bound parameter of a request, or one cell of a row.
 * Exactly the field named by KIND is meaningful.
 */
export declare class QRPValue implements flatbuffers.IUnpackableObject<QRPValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QRPValue;
    static getRootAsQRPValue(bb: flatbuffers.ByteBuffer, obj?: QRPValue): QRPValue;
    static getSizePrefixedRootAsQRPValue(bb: flatbuffers.ByteBuffer, obj?: QRPValue): QRPValue;
    KIND(): qrpValueKind;
    BOOL_VALUE(): boolean;
    INT_VALUE(): bigint;
    FLOAT_VALUE(): number;
    TEXT_VALUE(): string | null;
    TEXT_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BYTES_VALUE(index: number): number | null;
    bytesValueLength(): number;
    bytesValueArray(): Uint8Array | null;
    static startQRPValue(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: qrpValueKind): void;
    static addBoolValue(builder: flatbuffers.Builder, BOOL_VALUE: boolean): void;
    static addIntValue(builder: flatbuffers.Builder, INT_VALUE: bigint): void;
    static addFloatValue(builder: flatbuffers.Builder, FLOAT_VALUE: number): void;
    static addTextValue(builder: flatbuffers.Builder, TEXT_VALUEOffset: flatbuffers.Offset): void;
    static addBytesValue(builder: flatbuffers.Builder, BYTES_VALUEOffset: flatbuffers.Offset): void;
    static createBytesValueVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBytesValueVector(builder: flatbuffers.Builder, numElems: number): void;
    static endQRPValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQRPValue(builder: flatbuffers.Builder, KIND: qrpValueKind, BOOL_VALUE: boolean, INT_VALUE: bigint, FLOAT_VALUE: number, TEXT_VALUEOffset: flatbuffers.Offset, BYTES_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): QRPValueT;
    unpackTo(_o: QRPValueT): void;
}
export declare class QRPValueT implements flatbuffers.IGeneratedObject {
    KIND: qrpValueKind;
    BOOL_VALUE: boolean;
    INT_VALUE: bigint;
    FLOAT_VALUE: number;
    TEXT_VALUE: string | Uint8Array | null;
    BYTES_VALUE: (number)[];
    constructor(KIND?: qrpValueKind, BOOL_VALUE?: boolean, INT_VALUE?: bigint, FLOAT_VALUE?: number, TEXT_VALUE?: string | Uint8Array | null, BYTES_VALUE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QRPValue.d.ts.map