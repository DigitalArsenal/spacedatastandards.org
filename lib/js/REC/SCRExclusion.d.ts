import * as flatbuffers from 'flatbuffers';
/**
 * An object left out of the screen because it could not be propagated.
 */
export declare class SCRExclusion implements flatbuffers.IUnpackableObject<SCRExclusionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRExclusion;
    static getRootAsSCRExclusion(bb: flatbuffers.ByteBuffer, obj?: SCRExclusion): SCRExclusion;
    static getSizePrefixedRootAsSCRExclusion(bb: flatbuffers.ByteBuffer, obj?: SCRExclusion): SCRExclusion;
    /**
     * Index of the object in the screen's index order.
     */
    INDEX(): number;
    /**
     * First time the propagation failed, Julian date (UTC).
     */
    FIRST_FAILURE_JD(): number;
    /**
     * The propagator's or source's failure text.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCRExclusion(builder: flatbuffers.Builder): void;
    static addIndex(builder: flatbuffers.Builder, INDEX: number): void;
    static addFirstFailureJd(builder: flatbuffers.Builder, FIRST_FAILURE_JD: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endSCRExclusion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRExclusion(builder: flatbuffers.Builder, INDEX: number, FIRST_FAILURE_JD: number, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRExclusionT;
    unpackTo(_o: SCRExclusionT): void;
}
export declare class SCRExclusionT implements flatbuffers.IGeneratedObject {
    INDEX: number;
    FIRST_FAILURE_JD: number;
    REASON: string | Uint8Array | null;
    constructor(INDEX?: number, FIRST_FAILURE_JD?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRExclusion.d.ts.map