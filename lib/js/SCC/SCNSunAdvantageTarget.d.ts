import * as flatbuffers from 'flatbuffers';
/**
 * Target pairing for sun-advantage visualization.
 */
export declare class SCNSunAdvantageTarget implements flatbuffers.IUnpackableObject<SCNSunAdvantageTargetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNSunAdvantageTarget;
    static getRootAsSCNSunAdvantageTarget(bb: flatbuffers.ByteBuffer, obj?: SCNSunAdvantageTarget): SCNSunAdvantageTarget;
    static getSizePrefixedRootAsSCNSunAdvantageTarget(bb: flatbuffers.ByteBuffer, obj?: SCNSunAdvantageTarget): SCNSunAdvantageTarget;
    /**
     * Target identifier for the paired object.
     */
    TARGET_ID(): string | null;
    TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog id of the target satellite when available.
     */
    NORAD_CAT_ID(): number;
    /**
     * Site id associated with the target pairing.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNSunAdvantageTarget(builder: flatbuffers.Builder): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static endSCNSunAdvantageTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNSunAdvantageTarget(builder: flatbuffers.Builder, TARGET_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, SITE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNSunAdvantageTargetT;
    unpackTo(_o: SCNSunAdvantageTargetT): void;
}
export declare class SCNSunAdvantageTargetT implements flatbuffers.IGeneratedObject {
    TARGET_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    SITE_ID: string | Uint8Array | null;
    constructor(TARGET_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, SITE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNSunAdvantageTarget.d.ts.map