import * as flatbuffers from 'flatbuffers';
/**
 * Tracking and Data Fusion
 */
export declare class TKG implements flatbuffers.IUnpackableObject<TKGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TKG;
    static getRootAsTKG(bb: flatbuffers.ByteBuffer, obj?: TKG): TKG;
    static getSizePrefixedRootAsTKG(bb: flatbuffers.ByteBuffer, obj?: TKG): TKG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FILTER_CONFIG(): string | null;
    FILTER_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    IMM_CONFIG(): string | null;
    IMM_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MHT_CONFIG(): string | null;
    MHT_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    JPDA_CONFIG(): string | null;
    JPDA_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FUSION_CONFIG(): string | null;
    FUSION_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MEASUREMENTS(): string | null;
    MEASUREMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INITIAL_STATE(): string | null;
    INITIAL_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACK_TO_UPDATE(): string | null;
    TRACK_TO_UPDATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACKS_TO_CORRELATE(index: number): string;
    TRACKS_TO_CORRELATE(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tracksToCorrelateLength(): number;
    static startTKG(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addFilterConfig(builder: flatbuffers.Builder, FILTER_CONFIGOffset: flatbuffers.Offset): void;
    static addImmConfig(builder: flatbuffers.Builder, IMM_CONFIGOffset: flatbuffers.Offset): void;
    static addMhtConfig(builder: flatbuffers.Builder, MHT_CONFIGOffset: flatbuffers.Offset): void;
    static addJpdaConfig(builder: flatbuffers.Builder, JPDA_CONFIGOffset: flatbuffers.Offset): void;
    static addFusionConfig(builder: flatbuffers.Builder, FUSION_CONFIGOffset: flatbuffers.Offset): void;
    static addMeasurements(builder: flatbuffers.Builder, MEASUREMENTSOffset: flatbuffers.Offset): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addTrackToUpdate(builder: flatbuffers.Builder, TRACK_TO_UPDATEOffset: flatbuffers.Offset): void;
    static addTracksToCorrelate(builder: flatbuffers.Builder, TRACKS_TO_CORRELATEOffset: flatbuffers.Offset): void;
    static createTracksToCorrelateVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTracksToCorrelateVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTKG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTKGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTKGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTKG(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, FILTER_CONFIGOffset: flatbuffers.Offset, IMM_CONFIGOffset: flatbuffers.Offset, MHT_CONFIGOffset: flatbuffers.Offset, JPDA_CONFIGOffset: flatbuffers.Offset, FUSION_CONFIGOffset: flatbuffers.Offset, MEASUREMENTSOffset: flatbuffers.Offset, INITIAL_STATEOffset: flatbuffers.Offset, TRACK_TO_UPDATEOffset: flatbuffers.Offset, TRACKS_TO_CORRELATEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TKGT;
    unpackTo(_o: TKGT): void;
}
export declare class TKGT implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    FILTER_CONFIG: string | Uint8Array | null;
    IMM_CONFIG: string | Uint8Array | null;
    MHT_CONFIG: string | Uint8Array | null;
    JPDA_CONFIG: string | Uint8Array | null;
    FUSION_CONFIG: string | Uint8Array | null;
    MEASUREMENTS: string | Uint8Array | null;
    INITIAL_STATE: string | Uint8Array | null;
    TRACK_TO_UPDATE: string | Uint8Array | null;
    TRACKS_TO_CORRELATE: (string)[];
    constructor(COMMAND?: string | Uint8Array | null, FILTER_CONFIG?: string | Uint8Array | null, IMM_CONFIG?: string | Uint8Array | null, MHT_CONFIG?: string | Uint8Array | null, JPDA_CONFIG?: string | Uint8Array | null, FUSION_CONFIG?: string | Uint8Array | null, MEASUREMENTS?: string | Uint8Array | null, INITIAL_STATE?: string | Uint8Array | null, TRACK_TO_UPDATE?: string | Uint8Array | null, TRACKS_TO_CORRELATE?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TKG.d.ts.map