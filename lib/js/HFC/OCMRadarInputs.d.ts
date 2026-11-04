import * as flatbuffers from 'flatbuffers';
/**
 * The side-looking radar a chaser's position is tested against (the inputs
 * only: wavelength, beamwidths and look angles follow from them).
 */
export declare class OCMRadarInputs implements flatbuffers.IUnpackableObject<OCMRadarInputsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMRadarInputs;
    static getRootAsOCMRadarInputs(bb: flatbuffers.ByteBuffer, obj?: OCMRadarInputs): OCMRadarInputs;
    static getSizePrefixedRootAsOCMRadarInputs(bb: flatbuffers.ByteBuffer, obj?: OCMRadarInputs): OCMRadarInputs;
    /**
     * Citation of the radar's published characteristics.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Carrier frequency, GHz. NaN when not stated.
     */
    FREQUENCY_GHZ(): number;
    /**
     * Antenna aperture along track, m. NaN when not stated.
     */
    ANTENNA_LENGTH_M(): number;
    /**
     * Antenna aperture across track, m. NaN when not stated.
     */
    ANTENNA_HEIGHT_M(): number;
    /**
     * Incidence-angle band of the swath, deg. NaN when not stated.
     */
    INCIDENCE_MIN_DEG(): number;
    INCIDENCE_MAX_DEG(): number;
    static startOCMRadarInputs(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addFrequencyGhz(builder: flatbuffers.Builder, FREQUENCY_GHZ: number): void;
    static addAntennaLengthM(builder: flatbuffers.Builder, ANTENNA_LENGTH_M: number): void;
    static addAntennaHeightM(builder: flatbuffers.Builder, ANTENNA_HEIGHT_M: number): void;
    static addIncidenceMinDeg(builder: flatbuffers.Builder, INCIDENCE_MIN_DEG: number): void;
    static addIncidenceMaxDeg(builder: flatbuffers.Builder, INCIDENCE_MAX_DEG: number): void;
    static endOCMRadarInputs(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMRadarInputs(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, FREQUENCY_GHZ: number, ANTENNA_LENGTH_M: number, ANTENNA_HEIGHT_M: number, INCIDENCE_MIN_DEG: number, INCIDENCE_MAX_DEG: number): flatbuffers.Offset;
    unpack(): OCMRadarInputsT;
    unpackTo(_o: OCMRadarInputsT): void;
}
export declare class OCMRadarInputsT implements flatbuffers.IGeneratedObject {
    SOURCE: string | Uint8Array | null;
    FREQUENCY_GHZ: number;
    ANTENNA_LENGTH_M: number;
    ANTENNA_HEIGHT_M: number;
    INCIDENCE_MIN_DEG: number;
    INCIDENCE_MAX_DEG: number;
    constructor(SOURCE?: string | Uint8Array | null, FREQUENCY_GHZ?: number, ANTENNA_LENGTH_M?: number, ANTENNA_HEIGHT_M?: number, INCIDENCE_MIN_DEG?: number, INCIDENCE_MAX_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMRadarInputs.d.ts.map