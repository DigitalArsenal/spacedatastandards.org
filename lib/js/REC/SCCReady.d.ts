import * as flatbuffers from 'flatbuffers';
/**
 * Startup readiness message.
 */
export declare class SCCReady implements flatbuffers.IUnpackableObject<SCCReadyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCCReady;
    static getRootAsSCCReady(bb: flatbuffers.ByteBuffer, obj?: SCCReady): SCCReady;
    static getSizePrefixedRootAsSCCReady(bb: flatbuffers.ByteBuffer, obj?: SCCReady): SCCReady;
    READY(): boolean;
    static startSCCReady(builder: flatbuffers.Builder): void;
    static addReady(builder: flatbuffers.Builder, READY: boolean): void;
    static endSCCReady(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCCReady(builder: flatbuffers.Builder, READY: boolean): flatbuffers.Offset;
    unpack(): SCCReadyT;
    unpackTo(_o: SCCReadyT): void;
}
export declare class SCCReadyT implements flatbuffers.IGeneratedObject {
    READY: boolean;
    constructor(READY?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCCReady.d.ts.map