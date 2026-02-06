import * as flatbuffers from 'flatbuffers';
import { seoDataType } from './seoDataType.js';
import { seoObservatoryType } from './seoObservatoryType.js';
import { seoParticleType } from './seoParticleType.js';
/**
 * Space Environment Observation
 */
export declare class SEO implements flatbuffers.IUnpackableObject<SEOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SEO;
    static getRootAsSEO(bb: flatbuffers.ByteBuffer, obj?: SEO): SEO;
    static getSizePrefixedRootAsSEO(bb: flatbuffers.ByteBuffer, obj?: SEO): SEO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message type code
     */
    MSG_TYPE(): string | null;
    MSG_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Generating system
     */
    GEN_SYSTEM(): string | null;
    GEN_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * External reference identifier
     */
    EXTERNAL_ID(): string | null;
    EXTERNAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of environmental data
     */
    DATA_TYPE(): seoDataType;
    /**
     * Generation time (ISO 8601)
     */
    GEN_TIME(): string | null;
    GEN_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if this is a forecast
     */
    FORECAST(): boolean;
    /**
     * True if derived from other measurements
     */
    DERIVED(): boolean;
    /**
     * Satellite catalog number (if space-based)
     */
    SAT_NO(): number;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observatory type
     */
    OBSERVATORY_TYPE(): seoObservatoryType;
    /**
     * Observatory name
     */
    OBSERVATORY_NAME(): string | null;
    OBSERVATORY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observatory notes
     */
    OBSERVATORY_NOTES(): string | null;
    OBSERVATORY_NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Instrument type description
     */
    INSTRUMENT_TYPE(): string | null;
    INSTRUMENT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observatory latitude (degrees)
     */
    LAT(): number;
    /**
     * Observatory longitude (degrees)
     */
    LON(): number;
    /**
     * Observatory altitude (km)
     */
    ALT(): number;
    /**
     * Sensor reference frame
     */
    SEN_REFERENCE_FRAME(): string | null;
    SEN_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor position (km, 3 components)
     */
    SEN_POS(index: number): number | null;
    senPosLength(): number;
    senPosArray(): Float64Array | null;
    /**
     * Sensor velocity (km/s, 3 components)
     */
    SEN_VEL(index: number): number | null;
    senVelLength(): number;
    senVelArray(): Float64Array | null;
    /**
     * Measurement type description
     */
    MEAS_TYPE(): string | null;
    MEAS_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Particle type measured
     */
    PARTICLE_TYPE(): seoParticleType;
    /**
     * Energy level or range (keV or MeV)
     */
    SEN_ENERGY_LEVEL(): string | null;
    SEN_ENERGY_LEVEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation set identifier
     */
    OB_SET_ID(): string | null;
    OB_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time (ISO 8601)
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Measurement values
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    /**
     * Measurement uncertainties
     */
    UNCERTAINTIES(index: number): number | null;
    uncertaintiesLength(): number;
    uncertaintiesArray(): Float64Array | null;
    /**
     * Units for measurement values
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data quality indicator
     */
    QUALITY(): string | null;
    QUALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event descriptor
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source types
     */
    SRC_TYPS(index: number): string;
    SRC_TYPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcTypsLength(): number;
    /**
     * Source identifiers
     */
    SRC_IDS(index: number): string;
    SRC_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcIdsLength(): number;
    static startSEO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addMsgType(builder: flatbuffers.Builder, MSG_TYPEOffset: flatbuffers.Offset): void;
    static addGenSystem(builder: flatbuffers.Builder, GEN_SYSTEMOffset: flatbuffers.Offset): void;
    static addExternalId(builder: flatbuffers.Builder, EXTERNAL_IDOffset: flatbuffers.Offset): void;
    static addDataType(builder: flatbuffers.Builder, DATA_TYPE: seoDataType): void;
    static addGenTime(builder: flatbuffers.Builder, GEN_TIMEOffset: flatbuffers.Offset): void;
    static addForecast(builder: flatbuffers.Builder, FORECAST: boolean): void;
    static addDerived(builder: flatbuffers.Builder, DERIVED: boolean): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addObservatoryType(builder: flatbuffers.Builder, OBSERVATORY_TYPE: seoObservatoryType): void;
    static addObservatoryName(builder: flatbuffers.Builder, OBSERVATORY_NAMEOffset: flatbuffers.Offset): void;
    static addObservatoryNotes(builder: flatbuffers.Builder, OBSERVATORY_NOTESOffset: flatbuffers.Offset): void;
    static addInstrumentType(builder: flatbuffers.Builder, INSTRUMENT_TYPEOffset: flatbuffers.Offset): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addAlt(builder: flatbuffers.Builder, ALT: number): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addSenPos(builder: flatbuffers.Builder, SEN_POSOffset: flatbuffers.Offset): void;
    static createSenPosVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSenPosVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSenPosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSenVel(builder: flatbuffers.Builder, SEN_VELOffset: flatbuffers.Offset): void;
    static createSenVelVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSenVelVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSenVelVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeasType(builder: flatbuffers.Builder, MEAS_TYPEOffset: flatbuffers.Offset): void;
    static addParticleType(builder: flatbuffers.Builder, PARTICLE_TYPE: seoParticleType): void;
    static addSenEnergyLevel(builder: flatbuffers.Builder, SEN_ENERGY_LEVELOffset: flatbuffers.Offset): void;
    static addObSetId(builder: flatbuffers.Builder, OB_SET_IDOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUncertainties(builder: flatbuffers.Builder, UNCERTAINTIESOffset: flatbuffers.Offset): void;
    static createUncertaintiesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createUncertaintiesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUncertaintiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addQuality(builder: flatbuffers.Builder, QUALITYOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addSrcTyps(builder: flatbuffers.Builder, SRC_TYPSOffset: flatbuffers.Offset): void;
    static createSrcTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSrcIds(builder: flatbuffers.Builder, SRC_IDSOffset: flatbuffers.Offset): void;
    static createSrcIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSEO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSEOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSEO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, MSG_TYPEOffset: flatbuffers.Offset, GEN_SYSTEMOffset: flatbuffers.Offset, EXTERNAL_IDOffset: flatbuffers.Offset, DATA_TYPE: seoDataType, GEN_TIMEOffset: flatbuffers.Offset, FORECAST: boolean, DERIVED: boolean, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, OBSERVATORY_TYPE: seoObservatoryType, OBSERVATORY_NAMEOffset: flatbuffers.Offset, OBSERVATORY_NOTESOffset: flatbuffers.Offset, INSTRUMENT_TYPEOffset: flatbuffers.Offset, LAT: number, LON: number, ALT: number, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset, SEN_POSOffset: flatbuffers.Offset, SEN_VELOffset: flatbuffers.Offset, MEAS_TYPEOffset: flatbuffers.Offset, PARTICLE_TYPE: seoParticleType, SEN_ENERGY_LEVELOffset: flatbuffers.Offset, OB_SET_IDOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, VALUESOffset: flatbuffers.Offset, UNCERTAINTIESOffset: flatbuffers.Offset, UNITSOffset: flatbuffers.Offset, QUALITYOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, DESCRIPTOROffset: flatbuffers.Offset, SRC_TYPSOffset: flatbuffers.Offset, SRC_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SEOT;
    unpackTo(_o: SEOT): void;
}
export declare class SEOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    MSG_TYPE: string | Uint8Array | null;
    GEN_SYSTEM: string | Uint8Array | null;
    EXTERNAL_ID: string | Uint8Array | null;
    DATA_TYPE: seoDataType;
    GEN_TIME: string | Uint8Array | null;
    FORECAST: boolean;
    DERIVED: boolean;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    OBSERVATORY_TYPE: seoObservatoryType;
    OBSERVATORY_NAME: string | Uint8Array | null;
    OBSERVATORY_NOTES: string | Uint8Array | null;
    INSTRUMENT_TYPE: string | Uint8Array | null;
    LAT: number;
    LON: number;
    ALT: number;
    SEN_REFERENCE_FRAME: string | Uint8Array | null;
    SEN_POS: (number)[];
    SEN_VEL: (number)[];
    MEAS_TYPE: string | Uint8Array | null;
    PARTICLE_TYPE: seoParticleType;
    SEN_ENERGY_LEVEL: string | Uint8Array | null;
    OB_SET_ID: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    VALUES: (number)[];
    UNCERTAINTIES: (number)[];
    UNITS: string | Uint8Array | null;
    QUALITY: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    DESCRIPTOR: string | Uint8Array | null;
    SRC_TYPS: (string)[];
    SRC_IDS: (string)[];
    constructor(ID?: string | Uint8Array | null, MSG_TYPE?: string | Uint8Array | null, GEN_SYSTEM?: string | Uint8Array | null, EXTERNAL_ID?: string | Uint8Array | null, DATA_TYPE?: seoDataType, GEN_TIME?: string | Uint8Array | null, FORECAST?: boolean, DERIVED?: boolean, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, OBSERVATORY_TYPE?: seoObservatoryType, OBSERVATORY_NAME?: string | Uint8Array | null, OBSERVATORY_NOTES?: string | Uint8Array | null, INSTRUMENT_TYPE?: string | Uint8Array | null, LAT?: number, LON?: number, ALT?: number, SEN_REFERENCE_FRAME?: string | Uint8Array | null, SEN_POS?: (number)[], SEN_VEL?: (number)[], MEAS_TYPE?: string | Uint8Array | null, PARTICLE_TYPE?: seoParticleType, SEN_ENERGY_LEVEL?: string | Uint8Array | null, OB_SET_ID?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, VALUES?: (number)[], UNCERTAINTIES?: (number)[], UNITS?: string | Uint8Array | null, QUALITY?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, DESCRIPTOR?: string | Uint8Array | null, SRC_TYPS?: (string)[], SRC_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SEO.d.ts.map