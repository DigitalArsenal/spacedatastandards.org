import * as flatbuffers from 'flatbuffers';
/**
 * RF Band
 */
export declare class RFB implements flatbuffers.IUnpackableObject<RFBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFB;
    static getRootAsRFB(bb: flatbuffers.ByteBuffer, obj?: RFB): RFB;
    static getSizePrefixedRootAsRFB(bb: flatbuffers.ByteBuffer, obj?: RFB): RFB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODE(): string | null;
    MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PURPOSE(): string | null;
    PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FREQ_MIN(): number;
    FREQ_MAX(): number;
    CENTER_FREQ(): number;
    PEAK_GAIN(): number;
    EDGE_GAIN(): number;
    BANDWIDTH(): number;
    BEAMWIDTH(): number;
    POLARIZATION(): string | null;
    POLARIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERP(): number;
    EIRP(): number;
    static startRFB(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addMode(builder: flatbuffers.Builder, MODEOffset: flatbuffers.Offset): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSEOffset: flatbuffers.Offset): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addCenterFreq(builder: flatbuffers.Builder, CENTER_FREQ: number): void;
    static addPeakGain(builder: flatbuffers.Builder, PEAK_GAIN: number): void;
    static addEdgeGain(builder: flatbuffers.Builder, EDGE_GAIN: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addBeamwidth(builder: flatbuffers.Builder, BEAMWIDTH: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATIONOffset: flatbuffers.Offset): void;
    static addErp(builder: flatbuffers.Builder, ERP: number): void;
    static addEirp(builder: flatbuffers.Builder, EIRP: number): void;
    static endRFB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFB(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, BANDOffset: flatbuffers.Offset, MODEOffset: flatbuffers.Offset, PURPOSEOffset: flatbuffers.Offset, FREQ_MIN: number, FREQ_MAX: number, CENTER_FREQ: number, PEAK_GAIN: number, EDGE_GAIN: number, BANDWIDTH: number, BEAMWIDTH: number, POLARIZATIONOffset: flatbuffers.Offset, ERP: number, EIRP: number): flatbuffers.Offset;
    unpack(): RFBT;
    unpackTo(_o: RFBT): void;
}
export declare class RFBT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    BAND: string | Uint8Array | null;
    MODE: string | Uint8Array | null;
    PURPOSE: string | Uint8Array | null;
    FREQ_MIN: number;
    FREQ_MAX: number;
    CENTER_FREQ: number;
    PEAK_GAIN: number;
    EDGE_GAIN: number;
    BANDWIDTH: number;
    BEAMWIDTH: number;
    POLARIZATION: string | Uint8Array | null;
    ERP: number;
    EIRP: number;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, BAND?: string | Uint8Array | null, MODE?: string | Uint8Array | null, PURPOSE?: string | Uint8Array | null, FREQ_MIN?: number, FREQ_MAX?: number, CENTER_FREQ?: number, PEAK_GAIN?: number, EDGE_GAIN?: number, BANDWIDTH?: number, BEAMWIDTH?: number, POLARIZATION?: string | Uint8Array | null, ERP?: number, EIRP?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFB.d.ts.map