import * as flatbuffers from 'flatbuffers';
import { VCMAtmosphericModelData, VCMAtmosphericModelDataT } from './VCMAtmosphericModelData.js';
import { VCMStateVector, VCMStateVectorT } from './VCMStateVector.js';
import { equinoctialElements, equinoctialElementsT } from './equinoctialElements.js';
import { keplerianElements, keplerianElementsT } from './keplerianElements.js';
import { perturbationStatus } from './perturbationStatus.js';
import { propagatorConfig, propagatorConfigT } from './propagatorConfig.js';
import { uvwSigmas, uvwSigmasT } from './uvwSigmas.js';
/**
 * Vector Covariance Message
 */
export declare class VCM implements flatbuffers.IUnpackableObject<VCMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCM;
    static getRootAsVCM(bb: flatbuffers.ByteBuffer, obj?: VCM): VCM;
    static getSizePrefixedRootAsVCM(bb: flatbuffers.ByteBuffer, obj?: VCM): VCM;
    CCSDS_OMM_VERS(): number;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATE_VECTOR(obj?: VCMStateVector): VCMStateVector | null;
    KEPLERIAN_ELEMENTS(obj?: keplerianElements): keplerianElements | null;
    EQUINOCTIAL_ELEMENTS(obj?: equinoctialElements): equinoctialElements | null;
    GM(): number;
    ATMOSPHERIC_MODEL_DATA(obj?: VCMAtmosphericModelData): VCMAtmosphericModelData | null;
    PROPAGATOR_SETTINGS(obj?: propagatorConfig): propagatorConfig | null;
    UVW_SIGMAS(obj?: uvwSigmas): uvwSigmas | null;
    MASS(): number;
    SOLAR_RAD_AREA(): number;
    SOLAR_RAD_COEFF(): number;
    DRAG_AREA(): number;
    DRAG_COEFF(): number;
    SRP(): perturbationStatus;
    CLASSIFICATION_TYPE(): string | null;
    CLASSIFICATION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CAT_ID(): number;
    ELEMENT_SET_NO(): number;
    REV_AT_EPOCH(): number;
    BSTAR(): number;
    MEAN_MOTION_DOT(): number;
    MEAN_MOTION_DDOT(): number;
    COV_REFERENCE_FRAME(): string | null;
    COV_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance matrix as flat array (6x6 lower triangular = 21 elements).
     * Order: [CX_X, CY_X, CY_Y, CZ_X, CZ_Y, CZ_Z,
     *         CX_DOT_X, CX_DOT_Y, CX_DOT_Z, CX_DOT_X_DOT,
     *         CY_DOT_X, CY_DOT_Y, CY_DOT_Z, CY_DOT_X_DOT, CY_DOT_Y_DOT,
     *         CZ_DOT_X, CZ_DOT_Y, CZ_DOT_Z, CZ_DOT_X_DOT, CZ_DOT_Y_DOT, CZ_DOT_Z_DOT]
     * Units: position in km**2, velocity in km**2/s**2, cross in km**2/s
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    USER_DEFINED_BIP_0044_TYPE(): number;
    USER_DEFINED_OBJECT_DESIGNATOR(): string | null;
    USER_DEFINED_OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    USER_DEFINED_EARTH_MODEL(): string | null;
    USER_DEFINED_EARTH_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    USER_DEFINED_EPOCH_TIMESTAMP(): number;
    USER_DEFINED_MICROSECONDS(): number;
    static startVCM(builder: flatbuffers.Builder): void;
    static addCcsdsOmmVers(builder: flatbuffers.Builder, CCSDS_OMM_VERS: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addStateVector(builder: flatbuffers.Builder, STATE_VECTOROffset: flatbuffers.Offset): void;
    static addKeplerianElements(builder: flatbuffers.Builder, KEPLERIAN_ELEMENTSOffset: flatbuffers.Offset): void;
    static addEquinoctialElements(builder: flatbuffers.Builder, EQUINOCTIAL_ELEMENTSOffset: flatbuffers.Offset): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addAtmosphericModelData(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL_DATAOffset: flatbuffers.Offset): void;
    static addPropagatorSettings(builder: flatbuffers.Builder, PROPAGATOR_SETTINGSOffset: flatbuffers.Offset): void;
    static addUvwSigmas(builder: flatbuffers.Builder, UVW_SIGMASOffset: flatbuffers.Offset): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addSolarRadArea(builder: flatbuffers.Builder, SOLAR_RAD_AREA: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, SOLAR_RAD_COEFF: number): void;
    static addDragArea(builder: flatbuffers.Builder, DRAG_AREA: number): void;
    static addDragCoeff(builder: flatbuffers.Builder, DRAG_COEFF: number): void;
    static addSrp(builder: flatbuffers.Builder, SRP: perturbationStatus): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addElementSetNo(builder: flatbuffers.Builder, ELEMENT_SET_NO: number): void;
    static addRevAtEpoch(builder: flatbuffers.Builder, REV_AT_EPOCH: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUserDefinedBip0044Type(builder: flatbuffers.Builder, USER_DEFINED_BIP_0044_TYPE: number): void;
    static addUserDefinedObjectDesignator(builder: flatbuffers.Builder, USER_DEFINED_OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addUserDefinedEarthModel(builder: flatbuffers.Builder, USER_DEFINED_EARTH_MODELOffset: flatbuffers.Offset): void;
    static addUserDefinedEpochTimestamp(builder: flatbuffers.Builder, USER_DEFINED_EPOCH_TIMESTAMP: number): void;
    static addUserDefinedMicroseconds(builder: flatbuffers.Builder, USER_DEFINED_MICROSECONDS: number): void;
    static endVCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishVCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedVCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): VCMT;
    unpackTo(_o: VCMT): void;
}
export declare class VCMT implements flatbuffers.IGeneratedObject {
    CCSDS_OMM_VERS: number;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    STATE_VECTOR: VCMStateVectorT | null;
    KEPLERIAN_ELEMENTS: keplerianElementsT | null;
    EQUINOCTIAL_ELEMENTS: equinoctialElementsT | null;
    GM: number;
    ATMOSPHERIC_MODEL_DATA: VCMAtmosphericModelDataT | null;
    PROPAGATOR_SETTINGS: propagatorConfigT | null;
    UVW_SIGMAS: uvwSigmasT | null;
    MASS: number;
    SOLAR_RAD_AREA: number;
    SOLAR_RAD_COEFF: number;
    DRAG_AREA: number;
    DRAG_COEFF: number;
    SRP: perturbationStatus;
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    ELEMENT_SET_NO: number;
    REV_AT_EPOCH: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    COV_REFERENCE_FRAME: string | Uint8Array | null;
    COVARIANCE: (number)[];
    USER_DEFINED_BIP_0044_TYPE: number;
    USER_DEFINED_OBJECT_DESIGNATOR: string | Uint8Array | null;
    USER_DEFINED_EARTH_MODEL: string | Uint8Array | null;
    USER_DEFINED_EPOCH_TIMESTAMP: number;
    USER_DEFINED_MICROSECONDS: number;
    constructor(CCSDS_OMM_VERS?: number, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, STATE_VECTOR?: VCMStateVectorT | null, KEPLERIAN_ELEMENTS?: keplerianElementsT | null, EQUINOCTIAL_ELEMENTS?: equinoctialElementsT | null, GM?: number, ATMOSPHERIC_MODEL_DATA?: VCMAtmosphericModelDataT | null, PROPAGATOR_SETTINGS?: propagatorConfigT | null, UVW_SIGMAS?: uvwSigmasT | null, MASS?: number, SOLAR_RAD_AREA?: number, SOLAR_RAD_COEFF?: number, DRAG_AREA?: number, DRAG_COEFF?: number, SRP?: perturbationStatus, CLASSIFICATION_TYPE?: string | Uint8Array | null, NORAD_CAT_ID?: number, ELEMENT_SET_NO?: number, REV_AT_EPOCH?: number, BSTAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, COV_REFERENCE_FRAME?: string | Uint8Array | null, COVARIANCE?: (number)[], USER_DEFINED_BIP_0044_TYPE?: number, USER_DEFINED_OBJECT_DESIGNATOR?: string | Uint8Array | null, USER_DEFINED_EARTH_MODEL?: string | Uint8Array | null, USER_DEFINED_EPOCH_TIMESTAMP?: number, USER_DEFINED_MICROSECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCM.d.ts.map