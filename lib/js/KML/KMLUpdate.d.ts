import * as flatbuffers from 'flatbuffers';
/**
 * Update element for NetworkLinkControl
 */
export declare class KMLUpdate implements flatbuffers.IUnpackableObject<KMLUpdateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLUpdate;
    static getRootAsKMLUpdate(bb: flatbuffers.ByteBuffer, obj?: KMLUpdate): KMLUpdate;
    static getSizePrefixedRootAsKMLUpdate(bb: flatbuffers.ByteBuffer, obj?: KMLUpdate): KMLUpdate;
    /**
     * Target href
     */
    TARGET_HREF(): string | null;
    TARGET_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Change KML (raw)
     */
    CHANGE_KML(): string | null;
    CHANGE_KML(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Create KML (raw)
     */
    CREATE_KML(): string | null;
    CREATE_KML(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Delete KML (raw)
     */
    DELETE_KML(): string | null;
    DELETE_KML(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLUpdate(builder: flatbuffers.Builder): void;
    static addTargetHref(builder: flatbuffers.Builder, TARGET_HREFOffset: flatbuffers.Offset): void;
    static addChangeKml(builder: flatbuffers.Builder, CHANGE_KMLOffset: flatbuffers.Offset): void;
    static addCreateKml(builder: flatbuffers.Builder, CREATE_KMLOffset: flatbuffers.Offset): void;
    static addDeleteKml(builder: flatbuffers.Builder, DELETE_KMLOffset: flatbuffers.Offset): void;
    static endKMLUpdate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLUpdate(builder: flatbuffers.Builder, TARGET_HREFOffset: flatbuffers.Offset, CHANGE_KMLOffset: flatbuffers.Offset, CREATE_KMLOffset: flatbuffers.Offset, DELETE_KMLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLUpdateT;
    unpackTo(_o: KMLUpdateT): void;
}
export declare class KMLUpdateT implements flatbuffers.IGeneratedObject {
    TARGET_HREF: string | Uint8Array | null;
    CHANGE_KML: string | Uint8Array | null;
    CREATE_KML: string | Uint8Array | null;
    DELETE_KML: string | Uint8Array | null;
    constructor(TARGET_HREF?: string | Uint8Array | null, CHANGE_KML?: string | Uint8Array | null, CREATE_KML?: string | Uint8Array | null, DELETE_KML?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLUpdate.d.ts.map