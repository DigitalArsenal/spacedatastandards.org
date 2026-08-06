import * as flatbuffers from 'flatbuffers';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
import { oppRcsAspect } from './oppRcsAspect.js';
/**
 * Radar cross-section as reported for one band, polarization and aspect
 * convention. Radar cross-section is band- and aspect-dependent, so an $OPP
 * carries a list of these and never a single scalar. A source publishing
 * minimum, average and maximum cross-sections becomes three entries with
 * ASPECT MINIMUM, AVERAGE and MAXIMUM sharing one SOURCE.
 */
export declare class OPPRadarCrossSection implements flatbuffers.IUnpackableObject<OPPRadarCrossSectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPRadarCrossSection;
    static getRootAsOPPRadarCrossSection(bb: flatbuffers.ByteBuffer, obj?: OPPRadarCrossSection): OPPRadarCrossSection;
    static getSizePrefixedRootAsOPPRadarCrossSection(bb: flatbuffers.ByteBuffer, obj?: OPPRadarCrossSection): OPPRadarCrossSection;
    /**
     * Radar band designation verbatim from the source: "UHF", "L", "S", "C",
     * "X", "Ku". Empty when the source states no band.
     */
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Centre frequency [megahertz] when the source states one. Zero means
     * unstated.
     */
    FREQUENCY_MHZ(): number;
    /**
     * Polarization verbatim from the source: "HH", "VV", "HV", "RCRC". Empty
     * when the source states none.
     */
    POLARIZATION(): string | null;
    POLARIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ASPECT(): oppRcsAspect;
    /**
     * The cross-section itself. UNITS is "m2" or "dBsm" as the source published
     * it; the two are never mixed within one entry and never silently converted.
     */
    CROSS_SECTION(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Size bucket verbatim when a source publishes a bucket instead of a number,
     * such as a public catalogue's "SMALL", "MEDIUM", "LARGE". A bucket is never
     * turned into a number.
     */
    SIZE_CLASS(): string | null;
    SIZE_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor or facility that produced the measurement, when stated.
     */
    SENSOR(): string | null;
    SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOPPRadarCrossSection(builder: flatbuffers.Builder): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addFrequencyMhz(builder: flatbuffers.Builder, FREQUENCY_MHZ: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATIONOffset: flatbuffers.Offset): void;
    static addAspect(builder: flatbuffers.Builder, ASPECT: oppRcsAspect): void;
    static addCrossSection(builder: flatbuffers.Builder, CROSS_SECTIONOffset: flatbuffers.Offset): void;
    static addSizeClass(builder: flatbuffers.Builder, SIZE_CLASSOffset: flatbuffers.Offset): void;
    static addSensor(builder: flatbuffers.Builder, SENSOROffset: flatbuffers.Offset): void;
    static endOPPRadarCrossSection(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPRadarCrossSectionT;
    unpackTo(_o: OPPRadarCrossSectionT): void;
}
export declare class OPPRadarCrossSectionT implements flatbuffers.IGeneratedObject {
    BAND: string | Uint8Array | null;
    FREQUENCY_MHZ: number;
    POLARIZATION: string | Uint8Array | null;
    ASPECT: oppRcsAspect;
    CROSS_SECTION: OPPQuantityT | null;
    SIZE_CLASS: string | Uint8Array | null;
    SENSOR: string | Uint8Array | null;
    constructor(BAND?: string | Uint8Array | null, FREQUENCY_MHZ?: number, POLARIZATION?: string | Uint8Array | null, ASPECT?: oppRcsAspect, CROSS_SECTION?: OPPQuantityT | null, SIZE_CLASS?: string | Uint8Array | null, SENSOR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPRadarCrossSection.d.ts.map