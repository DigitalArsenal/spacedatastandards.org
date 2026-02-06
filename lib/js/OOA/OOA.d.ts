import * as flatbuffers from 'flatbuffers';
/**
 * On-Orbit Antenna
 */
export declare class OOA implements flatbuffers.IUnpackableObject<OOAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOA;
    static getRootAsOOA(bb: flatbuffers.ByteBuffer, obj?: OOA): OOA;
    static getSizePrefixedRootAsOOA(bb: flatbuffers.ByteBuffer, obj?: OOA): OOA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent on-orbit object
     */
    ID_ON_ORBIT(): string | null;
    ID_ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to antenna specification
     */
    ID_ANTENNA(): string | null;
    ID_ANTENNA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna type (e.g., PARABOLIC, PHASED_ARRAY, HORN, HELICAL, DIPOLE, PATCH, YAGI)
     */
    ANTENNA_TYPE(): string | null;
    ANTENNA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of antennas of this type
     */
    QUANTITY(): number;
    /**
     * Operating frequency band (e.g., UHF, L, S, C, X, Ku, Ka, V, W)
     */
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum operating frequency in MHz
     */
    FREQ_MIN(): number;
    /**
     * Maximum operating frequency in MHz
     */
    FREQ_MAX(): number;
    /**
     * Antenna gain in dBi
     */
    GAIN(): number;
    /**
     * Antenna diameter or aperture in meters
     */
    APERTURE(): number;
    /**
     * Beamwidth in degrees
     */
    BEAMWIDTH(): number;
    /**
     * Polarization type (e.g., LINEAR, CIRCULAR, DUAL, RHCP, LHCP)
     */
    POLARIZATION(): string | null;
    POLARIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the antenna is steerable
     */
    STEERABLE(): boolean;
    /**
     * Maximum slew rate in degrees per second
     */
    SLEW_RATE(): number;
    /**
     * Purpose or function (e.g., TT_C, PAYLOAD, CROSSLINK, GPS)
     */
    PURPOSE(): string | null;
    PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOOA(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addIdAntenna(builder: flatbuffers.Builder, ID_ANTENNAOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAntennaType(builder: flatbuffers.Builder, ANTENNA_TYPEOffset: flatbuffers.Offset): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: number): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addGain(builder: flatbuffers.Builder, GAIN: number): void;
    static addAperture(builder: flatbuffers.Builder, APERTURE: number): void;
    static addBeamwidth(builder: flatbuffers.Builder, BEAMWIDTH: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATIONOffset: flatbuffers.Offset): void;
    static addSteerable(builder: flatbuffers.Builder, STEERABLE: boolean): void;
    static addSlewRate(builder: flatbuffers.Builder, SLEW_RATE: number): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSEOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOOA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOA(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ON_ORBITOffset: flatbuffers.Offset, ID_ANTENNAOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, ANTENNA_TYPEOffset: flatbuffers.Offset, QUANTITY: number, BANDOffset: flatbuffers.Offset, FREQ_MIN: number, FREQ_MAX: number, GAIN: number, APERTURE: number, BEAMWIDTH: number, POLARIZATIONOffset: flatbuffers.Offset, STEERABLE: boolean, SLEW_RATE: number, PURPOSEOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOAT;
    unpackTo(_o: OOAT): void;
}
export declare class OOAT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ON_ORBIT: string | Uint8Array | null;
    ID_ANTENNA: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ANTENNA_TYPE: string | Uint8Array | null;
    QUANTITY: number;
    BAND: string | Uint8Array | null;
    FREQ_MIN: number;
    FREQ_MAX: number;
    GAIN: number;
    APERTURE: number;
    BEAMWIDTH: number;
    POLARIZATION: string | Uint8Array | null;
    STEERABLE: boolean;
    SLEW_RATE: number;
    PURPOSE: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ON_ORBIT?: string | Uint8Array | null, ID_ANTENNA?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ANTENNA_TYPE?: string | Uint8Array | null, QUANTITY?: number, BAND?: string | Uint8Array | null, FREQ_MIN?: number, FREQ_MAX?: number, GAIN?: number, APERTURE?: number, BEAMWIDTH?: number, POLARIZATION?: string | Uint8Array | null, STEERABLE?: boolean, SLEW_RATE?: number, PURPOSE?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOA.d.ts.map