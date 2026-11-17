import * as flatbuffers from 'flatbuffers';
/**
 * A timeline row a scenario keeps: what was run, and on what. Never its bars;
 * the inputs of the run are the request records of the enclosing $REC.
 */
export declare class SCNPinnedRow implements flatbuffers.IUnpackableObject<SCNPinnedRowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNPinnedRow;
    static getRootAsSCNPinnedRow(bb: flatbuffers.ByteBuffer, obj?: SCNPinnedRow): SCNPinnedRow;
    static getSizePrefixedRootAsSCNPinnedRow(bb: flatbuffers.ByteBuffer, obj?: SCNPinnedRow): SCNPinnedRow;
    /**
     * Row identifier, unique in the scenario.
     */
    ROW_ID(): string | null;
    ROW_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The application's identifier of the mode the row belongs to.
     */
    MODE_ID(): string | null;
    MODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The application's identifier of the verb that produced the row; empty
     * when the row came without a run.
     */
    VERB_ID(): string | null;
    VERB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REFERENCE_IDs of the scenario references the row was run on.
     */
    REFERENCE_IDS(index: number): string;
    REFERENCE_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    referenceIdsLength(): number;
    /**
     * CID of the stored record the row shows, when it shows one (for example
     * an event's descriptor $SCN); empty otherwise.
     */
    RECORD_CID(): string | null;
    RECORD_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNPinnedRow(builder: flatbuffers.Builder): void;
    static addRowId(builder: flatbuffers.Builder, ROW_IDOffset: flatbuffers.Offset): void;
    static addModeId(builder: flatbuffers.Builder, MODE_IDOffset: flatbuffers.Offset): void;
    static addVerbId(builder: flatbuffers.Builder, VERB_IDOffset: flatbuffers.Offset): void;
    static addReferenceIds(builder: flatbuffers.Builder, REFERENCE_IDSOffset: flatbuffers.Offset): void;
    static createReferenceIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReferenceIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRecordCid(builder: flatbuffers.Builder, RECORD_CIDOffset: flatbuffers.Offset): void;
    static endSCNPinnedRow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNPinnedRow(builder: flatbuffers.Builder, ROW_IDOffset: flatbuffers.Offset, MODE_IDOffset: flatbuffers.Offset, VERB_IDOffset: flatbuffers.Offset, REFERENCE_IDSOffset: flatbuffers.Offset, RECORD_CIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNPinnedRowT;
    unpackTo(_o: SCNPinnedRowT): void;
}
export declare class SCNPinnedRowT implements flatbuffers.IGeneratedObject {
    ROW_ID: string | Uint8Array | null;
    MODE_ID: string | Uint8Array | null;
    VERB_ID: string | Uint8Array | null;
    REFERENCE_IDS: (string)[];
    RECORD_CID: string | Uint8Array | null;
    constructor(ROW_ID?: string | Uint8Array | null, MODE_ID?: string | Uint8Array | null, VERB_ID?: string | Uint8Array | null, REFERENCE_IDS?: (string)[], RECORD_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNPinnedRow.d.ts.map