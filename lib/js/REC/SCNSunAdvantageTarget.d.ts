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
     * Scenario reference id of the target object.
     */
    TARGET_REFERENCE_ID(): string | null;
    TARGET_REFERENCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog id of the target satellite when available.
     */
    TARGET_NORAD_CAT_ID(): number;
    /**
     * Ground site id associated with the target pairing.
     */
    GROUND_SITE_ID(): string | null;
    GROUND_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCNSunAdvantageTarget(builder: flatbuffers.Builder): void;
    static addTargetReferenceId(builder: flatbuffers.Builder, TARGET_REFERENCE_IDOffset: flatbuffers.Offset): void;
    static addTargetNoradCatId(builder: flatbuffers.Builder, TARGET_NORAD_CAT_ID: number): void;
    static addGroundSiteId(builder: flatbuffers.Builder, GROUND_SITE_IDOffset: flatbuffers.Offset): void;
    static endSCNSunAdvantageTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNSunAdvantageTarget(builder: flatbuffers.Builder, TARGET_REFERENCE_IDOffset: flatbuffers.Offset, TARGET_NORAD_CAT_ID: number, GROUND_SITE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNSunAdvantageTargetT;
    unpackTo(_o: SCNSunAdvantageTargetT): void;
}
export declare class SCNSunAdvantageTargetT implements flatbuffers.IGeneratedObject {
    TARGET_REFERENCE_ID: string | Uint8Array | null;
    TARGET_NORAD_CAT_ID: number;
    GROUND_SITE_ID: string | Uint8Array | null;
    constructor(TARGET_REFERENCE_ID?: string | Uint8Array | null, TARGET_NORAD_CAT_ID?: number, GROUND_SITE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNSunAdvantageTarget.d.ts.map