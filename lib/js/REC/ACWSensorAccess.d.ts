import * as flatbuffers from 'flatbuffers';
import { ACWAccessWindow, ACWAccessWindowT } from './ACWAccessWindow.js';
/**
 * Access windows of one sensor to one target (SIMULATE_OBSERVATIONS input).
 */
export declare class ACWSensorAccess implements flatbuffers.IUnpackableObject<ACWSensorAccessT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWSensorAccess;
    static getRootAsACWSensorAccess(bb: flatbuffers.ByteBuffer, obj?: ACWSensorAccess): ACWSensorAccess;
    static getSizePrefixedRootAsACWSensorAccess(bb: flatbuffers.ByteBuffer, obj?: ACWSensorAccess): ACWSensorAccess;
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOWS(index: number, obj?: ACWAccessWindow): ACWAccessWindow | null;
    windowsLength(): number;
    static startACWSensorAccess(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addWindows(builder: flatbuffers.Builder, WINDOWSOffset: flatbuffers.Offset): void;
    static createWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACWSensorAccess(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWSensorAccess(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset, TARGET_IDOffset: flatbuffers.Offset, WINDOWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWSensorAccessT;
    unpackTo(_o: ACWSensorAccessT): void;
}
export declare class ACWSensorAccessT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    TARGET_ID: string | Uint8Array | null;
    WINDOWS: (ACWAccessWindowT)[];
    constructor(SENSOR_ID?: string | Uint8Array | null, TARGET_ID?: string | Uint8Array | null, WINDOWS?: (ACWAccessWindowT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWSensorAccess.d.ts.map