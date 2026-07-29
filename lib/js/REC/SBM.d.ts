import * as flatbuffers from 'flatbuffers';
import { sbmEventType } from './sbmEventType.js';
import { sbmFragment, sbmFragmentT } from './sbmFragment.js';
import { sbmObjectClass } from './sbmObjectClass.js';
/**
 * Satellite Breakup Model
 *
 * One SBM record is a single on-orbit fragmentation event — an explosion or
 * a collision — together with the debris population a breakup model produced
 * for it. It carries the model inputs (parent states, masses, relative
 * velocity, object class, cutoff, seed) so the population is reproducible,
 * and the resulting fragments in FRAGMENTS.
 *
 * Units on the wire: parent and fragment position are KILOMETERS, parent and
 * fragment velocity are KILOMETERS PER SECOND (matching $OMM, $OEM, $OCM and
 * $CDM state conventions); ejection delta-V, relative velocity and
 * characteristic length are METERS PER SECOND and METERS respectively
 * (matching the breakup-model literature). Every field name states its unit.
 *
 * This record describes an ON-ORBIT breakup. Atmospheric reentry breakup and
 * demise stay in $RDM/$REM; a business-loss classification of the event stays
 * in $OOE.
 */
export declare class SBM implements flatbuffers.IUnpackableObject<SBMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBM;
    static getRootAsSBM(bb: flatbuffers.ByteBuffer, obj?: SBM): SBM;
    static getSizePrefixedRootAsSBM(bb: flatbuffers.ByteBuffer, obj?: SBM): SBM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Producer-defined message identifier.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation date in ISO 8601 UTC format.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency, application, or service.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Breakup event type.
     */
    EVENT_TYPE(): sbmEventType;
    /**
     * Parent object class used to select model coefficients.
     */
    OBJECT_CLASS(): sbmObjectClass;
    /**
     * Event epoch in ISO 8601 UTC format. Fragment states are given at this
     * epoch.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used by all epochs.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for all position, velocity and delta-V components.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target object name.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target international designator or producer object identifier.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target satellite catalog number. Joins to CAT.NORAD_CAT_ID and
     * OMM.NORAD_CAT_ID. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * Impactor object name. COLLISION events only.
     */
    IMPACTOR_OBJECT_NAME(): string | null;
    IMPACTOR_OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Impactor satellite catalog number. COLLISION events only. 0 when unbound.
     */
    IMPACTOR_NORAD_CAT_ID(): number;
    /**
     * Target mass in kilograms.
     */
    TARGET_MASS_KG(): number;
    /**
     * Target characteristic length in meters.
     */
    TARGET_L_C_M(): number;
    /**
     * Impactor mass in kilograms. COLLISION events only.
     */
    IMPACTOR_MASS_KG(): number;
    /**
     * Impactor characteristic length in meters. COLLISION events only.
     */
    IMPACTOR_L_C_M(): number;
    /**
     * Collision relative velocity in meters per second. COLLISION events only.
     */
    RELATIVE_VELOCITY_M_PER_S(): number;
    /**
     * True when the collision energy-to-mass ratio met the catastrophic
     * threshold and both bodies were fully fragmented.
     */
    CATASTROPHIC(): boolean;
    /**
     * Parent position X component in kilometers at EPOCH.
     */
    PARENT_POSITION_X_KM(): number;
    /**
     * Parent position Y component in kilometers at EPOCH.
     */
    PARENT_POSITION_Y_KM(): number;
    /**
     * Parent position Z component in kilometers at EPOCH.
     */
    PARENT_POSITION_Z_KM(): number;
    /**
     * Parent velocity X component in kilometers per second at EPOCH.
     */
    PARENT_VELOCITY_X_KM_PER_S(): number;
    /**
     * Parent velocity Y component in kilometers per second at EPOCH.
     */
    PARENT_VELOCITY_Y_KM_PER_S(): number;
    /**
     * Parent velocity Z component in kilometers per second at EPOCH.
     */
    PARENT_VELOCITY_Z_KM_PER_S(): number;
    /**
     * Lower characteristic-length cutoff in meters. Fragments smaller than
     * this were not generated.
     */
    MIN_LC_M(): number;
    /**
     * Random number generator seed. A producer that reports the same
     * MODEL_NAME, MODEL_VERSION, inputs and SEED must reproduce FRAGMENTS
     * exactly.
     */
    SEED(): number;
    /**
     * Breakup model name, e.g. "NASA_SSBM".
     */
    MODEL_NAME(): string | null;
    MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Breakup model implementation version.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of fragments generated. Equals the length of FRAGMENTS when the
     * population is carried in this record.
     */
    FRAGMENT_COUNT(): number;
    /**
     * Total parent mass fed to the model in kilograms.
     */
    INPUT_MASS_KG(): number;
    /**
     * Total mass carried by the generated fragments in kilograms.
     */
    OUTPUT_MASS_KG(): number;
    /**
     * Generated fragment population.
     */
    FRAGMENTS(index: number, obj?: sbmFragment): sbmFragment | null;
    fragmentsLength(): number;
    /**
     * Free-form model assumptions or limitations.
     */
    ASSUMPTIONS(index: number): string;
    ASSUMPTIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    assumptionsLength(): number;
    /**
     * Additional comments.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSBM(builder: flatbuffers.Builder): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addEventType(builder: flatbuffers.Builder, EVENT_TYPE: sbmEventType): void;
    static addObjectClass(builder: flatbuffers.Builder, OBJECT_CLASS: sbmObjectClass): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addImpactorObjectName(builder: flatbuffers.Builder, IMPACTOR_OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addImpactorNoradCatId(builder: flatbuffers.Builder, IMPACTOR_NORAD_CAT_ID: number): void;
    static addTargetMassKg(builder: flatbuffers.Builder, TARGET_MASS_KG: number): void;
    static addTargetLCM(builder: flatbuffers.Builder, TARGET_L_C_M: number): void;
    static addImpactorMassKg(builder: flatbuffers.Builder, IMPACTOR_MASS_KG: number): void;
    static addImpactorLCM(builder: flatbuffers.Builder, IMPACTOR_L_C_M: number): void;
    static addRelativeVelocityMPerS(builder: flatbuffers.Builder, RELATIVE_VELOCITY_M_PER_S: number): void;
    static addCatastrophic(builder: flatbuffers.Builder, CATASTROPHIC: boolean): void;
    static addParentPositionXKm(builder: flatbuffers.Builder, PARENT_POSITION_X_KM: number): void;
    static addParentPositionYKm(builder: flatbuffers.Builder, PARENT_POSITION_Y_KM: number): void;
    static addParentPositionZKm(builder: flatbuffers.Builder, PARENT_POSITION_Z_KM: number): void;
    static addParentVelocityXKmPerS(builder: flatbuffers.Builder, PARENT_VELOCITY_X_KM_PER_S: number): void;
    static addParentVelocityYKmPerS(builder: flatbuffers.Builder, PARENT_VELOCITY_Y_KM_PER_S: number): void;
    static addParentVelocityZKmPerS(builder: flatbuffers.Builder, PARENT_VELOCITY_Z_KM_PER_S: number): void;
    static addMinLcM(builder: flatbuffers.Builder, MIN_LC_M: number): void;
    static addSeed(builder: flatbuffers.Builder, SEED: number): void;
    static addModelName(builder: flatbuffers.Builder, MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addFragmentCount(builder: flatbuffers.Builder, FRAGMENT_COUNT: number): void;
    static addInputMassKg(builder: flatbuffers.Builder, INPUT_MASS_KG: number): void;
    static addOutputMassKg(builder: flatbuffers.Builder, OUTPUT_MASS_KG: number): void;
    static addFragments(builder: flatbuffers.Builder, FRAGMENTSOffset: flatbuffers.Offset): void;
    static createFragmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFragmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endSBM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSBMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSBMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSBM(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, EVENT_TYPE: sbmEventType, OBJECT_CLASS: sbmObjectClass, EPOCHOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, REF_FRAMEOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, IMPACTOR_OBJECT_NAMEOffset: flatbuffers.Offset, IMPACTOR_NORAD_CAT_ID: number, TARGET_MASS_KG: number, TARGET_L_C_M: number, IMPACTOR_MASS_KG: number, IMPACTOR_L_C_M: number, RELATIVE_VELOCITY_M_PER_S: number, CATASTROPHIC: boolean, PARENT_POSITION_X_KM: number, PARENT_POSITION_Y_KM: number, PARENT_POSITION_Z_KM: number, PARENT_VELOCITY_X_KM_PER_S: number, PARENT_VELOCITY_Y_KM_PER_S: number, PARENT_VELOCITY_Z_KM_PER_S: number, MIN_LC_M: number, SEED: number, MODEL_NAMEOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, FRAGMENT_COUNT: number, INPUT_MASS_KG: number, OUTPUT_MASS_KG: number, FRAGMENTSOffset: flatbuffers.Offset, ASSUMPTIONSOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SBMT;
    unpackTo(_o: SBMT): void;
}
export declare class SBMT implements flatbuffers.IGeneratedObject {
    MESSAGE_ID: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    EVENT_TYPE: sbmEventType;
    OBJECT_CLASS: sbmObjectClass;
    EPOCH: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    IMPACTOR_OBJECT_NAME: string | Uint8Array | null;
    IMPACTOR_NORAD_CAT_ID: number;
    TARGET_MASS_KG: number;
    TARGET_L_C_M: number;
    IMPACTOR_MASS_KG: number;
    IMPACTOR_L_C_M: number;
    RELATIVE_VELOCITY_M_PER_S: number;
    CATASTROPHIC: boolean;
    PARENT_POSITION_X_KM: number;
    PARENT_POSITION_Y_KM: number;
    PARENT_POSITION_Z_KM: number;
    PARENT_VELOCITY_X_KM_PER_S: number;
    PARENT_VELOCITY_Y_KM_PER_S: number;
    PARENT_VELOCITY_Z_KM_PER_S: number;
    MIN_LC_M: number;
    SEED: number;
    MODEL_NAME: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    FRAGMENT_COUNT: number;
    INPUT_MASS_KG: number;
    OUTPUT_MASS_KG: number;
    FRAGMENTS: (sbmFragmentT)[];
    ASSUMPTIONS: (string)[];
    COMMENT: string | Uint8Array | null;
    constructor(MESSAGE_ID?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, EVENT_TYPE?: sbmEventType, OBJECT_CLASS?: sbmObjectClass, EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, IMPACTOR_OBJECT_NAME?: string | Uint8Array | null, IMPACTOR_NORAD_CAT_ID?: number, TARGET_MASS_KG?: number, TARGET_L_C_M?: number, IMPACTOR_MASS_KG?: number, IMPACTOR_L_C_M?: number, RELATIVE_VELOCITY_M_PER_S?: number, CATASTROPHIC?: boolean, PARENT_POSITION_X_KM?: number, PARENT_POSITION_Y_KM?: number, PARENT_POSITION_Z_KM?: number, PARENT_VELOCITY_X_KM_PER_S?: number, PARENT_VELOCITY_Y_KM_PER_S?: number, PARENT_VELOCITY_Z_KM_PER_S?: number, MIN_LC_M?: number, SEED?: number, MODEL_NAME?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, FRAGMENT_COUNT?: number, INPUT_MASS_KG?: number, OUTPUT_MASS_KG?: number, FRAGMENTS?: (sbmFragmentT)[], ASSUMPTIONS?: (string)[], COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBM.d.ts.map