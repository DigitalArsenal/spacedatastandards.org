import * as flatbuffers from 'flatbuffers';
import { CLGRecordRef, CLGRecordRefT } from './CLGRecordRef.js';
import { SCVSensorShapeContract, SCVSensorShapeContractT } from './SCVSensorShapeContract.js';
import { clgPointingArchitecture } from './clgPointingArchitecture.js';
import { clgRegardGeometry } from './clgRegardGeometry.js';
import { clgSteeringClass } from './clgSteeringClass.js';
import { clgTerminalCapability } from './clgTerminalCapability.js';
import { clgTerminalMedium } from './clgTerminalMedium.js';
export declare class CLGTerminalProfile implements flatbuffers.IUnpackableObject<CLGTerminalProfileT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGTerminalProfile;
    static getRootAsCLGTerminalProfile(bb: flatbuffers.ByteBuffer, obj?: CLGTerminalProfile): CLGTerminalProfile;
    static getSizePrefixedRootAsCLGTerminalProfile(bb: flatbuffers.ByteBuffer, obj?: CLGTerminalProfile): CLGTerminalProfile;
    PROFILE_ID(): string;
    PROFILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    MEDIUM(): clgTerminalMedium;
    CAPABILITY(): clgTerminalCapability;
    COMPATIBILITY_CLASS(): string;
    COMPATIBILITY_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    DEFINITION_REFS(index: number, obj?: CLGRecordRef): CLGRecordRef | null;
    definitionRefsLength(): number;
    STEERING(): clgSteeringClass;
    REGARD(): clgRegardGeometry;
    /**
     * Mount +Z boresight, +X right, +Y up. SCV angles are degrees.
     * Shape radial fields zero; bounds below are authoritative SI values.
     */
    SHAPE(obj?: SCVSensorShapeContract): SCVSensorShapeContract | null;
    MIN_RANGE_M(): number;
    MAX_RANGE_M(): number;
    /**
     * MECHANICAL only: finite positive rates/acceleration with true HAS flags.
     */
    MAX_SLEW_RATE_RAD_S(): number;
    MAX_ANGULAR_ACCELERATION_RAD_S2(): number;
    ACQUISITION_MAX_RATE_RAD_S(): number;
    /**
     * MECHANICAL only: finite >=0; explicit zero has a true HAS flag.
     */
    ACQUISITION_TIME_S(): number;
    SETTLE_TIME_S(): number;
    /**
     * ELECTRONIC only: HAS_BEAM_SWITCH_TIME_S=false requests no modeled delay;
     * a true flag with zero specifies
     * zero delay. Applicability and omission are preserved in provenance.
     */
    BEAM_SWITCH_TIME_S(): number;
    MAX_SIMULTANEOUS_LINKS(): number;
    INDEPENDENT_BEAMS(): boolean;
    POINTING(): clgPointingArchitecture;
    /**
     * Bidirectional retarded COMMON_AXIS requires finite positive separation
     * tolerance stated by user, backed by DEFINITION_REFS. No implied zero.
     * Retarded COMMON_AXIS profiles require positive value even in a one-way run.
     */
    MAX_POINT_AHEAD_RAD(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_MEDIUM(): boolean;
    HAS_CAPABILITY(): boolean;
    HAS_STEERING(): boolean;
    HAS_REGARD(): boolean;
    HAS_MIN_RANGE_M(): boolean;
    HAS_MAX_RANGE_M(): boolean;
    HAS_MAX_SLEW_RATE_RAD_S(): boolean;
    HAS_MAX_ANGULAR_ACCELERATION_RAD_S2(): boolean;
    HAS_ACQUISITION_MAX_RATE_RAD_S(): boolean;
    HAS_ACQUISITION_TIME_S(): boolean;
    HAS_SETTLE_TIME_S(): boolean;
    HAS_BEAM_SWITCH_TIME_S(): boolean;
    HAS_MAX_SIMULTANEOUS_LINKS(): boolean;
    HAS_INDEPENDENT_BEAMS(): boolean;
    HAS_POINTING(): boolean;
    HAS_MAX_POINT_AHEAD_RAD(): boolean;
    static startCLGTerminalProfile(builder: flatbuffers.Builder): void;
    static addProfileId(builder: flatbuffers.Builder, PROFILE_IDOffset: flatbuffers.Offset): void;
    static addMedium(builder: flatbuffers.Builder, MEDIUM: clgTerminalMedium): void;
    static addCapability(builder: flatbuffers.Builder, CAPABILITY: clgTerminalCapability): void;
    static addCompatibilityClass(builder: flatbuffers.Builder, COMPATIBILITY_CLASSOffset: flatbuffers.Offset): void;
    static addDefinitionRefs(builder: flatbuffers.Builder, DEFINITION_REFSOffset: flatbuffers.Offset): void;
    static createDefinitionRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDefinitionRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSteering(builder: flatbuffers.Builder, STEERING: clgSteeringClass): void;
    static addRegard(builder: flatbuffers.Builder, REGARD: clgRegardGeometry): void;
    static addShape(builder: flatbuffers.Builder, SHAPEOffset: flatbuffers.Offset): void;
    static addMinRangeM(builder: flatbuffers.Builder, MIN_RANGE_M: number): void;
    static addMaxRangeM(builder: flatbuffers.Builder, MAX_RANGE_M: number): void;
    static addMaxSlewRateRadS(builder: flatbuffers.Builder, MAX_SLEW_RATE_RAD_S: number): void;
    static addMaxAngularAccelerationRadS2(builder: flatbuffers.Builder, MAX_ANGULAR_ACCELERATION_RAD_S2: number): void;
    static addAcquisitionMaxRateRadS(builder: flatbuffers.Builder, ACQUISITION_MAX_RATE_RAD_S: number): void;
    static addAcquisitionTimeS(builder: flatbuffers.Builder, ACQUISITION_TIME_S: number): void;
    static addSettleTimeS(builder: flatbuffers.Builder, SETTLE_TIME_S: number): void;
    static addBeamSwitchTimeS(builder: flatbuffers.Builder, BEAM_SWITCH_TIME_S: number): void;
    static addMaxSimultaneousLinks(builder: flatbuffers.Builder, MAX_SIMULTANEOUS_LINKS: number): void;
    static addIndependentBeams(builder: flatbuffers.Builder, INDEPENDENT_BEAMS: boolean): void;
    static addPointing(builder: flatbuffers.Builder, POINTING: clgPointingArchitecture): void;
    static addMaxPointAheadRad(builder: flatbuffers.Builder, MAX_POINT_AHEAD_RAD: number): void;
    static addHasMedium(builder: flatbuffers.Builder, HAS_MEDIUM: boolean): void;
    static addHasCapability(builder: flatbuffers.Builder, HAS_CAPABILITY: boolean): void;
    static addHasSteering(builder: flatbuffers.Builder, HAS_STEERING: boolean): void;
    static addHasRegard(builder: flatbuffers.Builder, HAS_REGARD: boolean): void;
    static addHasMinRangeM(builder: flatbuffers.Builder, HAS_MIN_RANGE_M: boolean): void;
    static addHasMaxRangeM(builder: flatbuffers.Builder, HAS_MAX_RANGE_M: boolean): void;
    static addHasMaxSlewRateRadS(builder: flatbuffers.Builder, HAS_MAX_SLEW_RATE_RAD_S: boolean): void;
    static addHasMaxAngularAccelerationRadS2(builder: flatbuffers.Builder, HAS_MAX_ANGULAR_ACCELERATION_RAD_S2: boolean): void;
    static addHasAcquisitionMaxRateRadS(builder: flatbuffers.Builder, HAS_ACQUISITION_MAX_RATE_RAD_S: boolean): void;
    static addHasAcquisitionTimeS(builder: flatbuffers.Builder, HAS_ACQUISITION_TIME_S: boolean): void;
    static addHasSettleTimeS(builder: flatbuffers.Builder, HAS_SETTLE_TIME_S: boolean): void;
    static addHasBeamSwitchTimeS(builder: flatbuffers.Builder, HAS_BEAM_SWITCH_TIME_S: boolean): void;
    static addHasMaxSimultaneousLinks(builder: flatbuffers.Builder, HAS_MAX_SIMULTANEOUS_LINKS: boolean): void;
    static addHasIndependentBeams(builder: flatbuffers.Builder, HAS_INDEPENDENT_BEAMS: boolean): void;
    static addHasPointing(builder: flatbuffers.Builder, HAS_POINTING: boolean): void;
    static addHasMaxPointAheadRad(builder: flatbuffers.Builder, HAS_MAX_POINT_AHEAD_RAD: boolean): void;
    static endCLGTerminalProfile(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGTerminalProfileT;
    unpackTo(_o: CLGTerminalProfileT): void;
}
export declare class CLGTerminalProfileT implements flatbuffers.IGeneratedObject {
    PROFILE_ID: string | Uint8Array | null;
    MEDIUM: clgTerminalMedium;
    CAPABILITY: clgTerminalCapability;
    COMPATIBILITY_CLASS: string | Uint8Array | null;
    DEFINITION_REFS: (CLGRecordRefT)[];
    STEERING: clgSteeringClass;
    REGARD: clgRegardGeometry;
    SHAPE: SCVSensorShapeContractT | null;
    MIN_RANGE_M: number;
    MAX_RANGE_M: number;
    MAX_SLEW_RATE_RAD_S: number;
    MAX_ANGULAR_ACCELERATION_RAD_S2: number;
    ACQUISITION_MAX_RATE_RAD_S: number;
    ACQUISITION_TIME_S: number;
    SETTLE_TIME_S: number;
    BEAM_SWITCH_TIME_S: number;
    MAX_SIMULTANEOUS_LINKS: number;
    INDEPENDENT_BEAMS: boolean;
    POINTING: clgPointingArchitecture;
    MAX_POINT_AHEAD_RAD: number;
    HAS_MEDIUM: boolean;
    HAS_CAPABILITY: boolean;
    HAS_STEERING: boolean;
    HAS_REGARD: boolean;
    HAS_MIN_RANGE_M: boolean;
    HAS_MAX_RANGE_M: boolean;
    HAS_MAX_SLEW_RATE_RAD_S: boolean;
    HAS_MAX_ANGULAR_ACCELERATION_RAD_S2: boolean;
    HAS_ACQUISITION_MAX_RATE_RAD_S: boolean;
    HAS_ACQUISITION_TIME_S: boolean;
    HAS_SETTLE_TIME_S: boolean;
    HAS_BEAM_SWITCH_TIME_S: boolean;
    HAS_MAX_SIMULTANEOUS_LINKS: boolean;
    HAS_INDEPENDENT_BEAMS: boolean;
    HAS_POINTING: boolean;
    HAS_MAX_POINT_AHEAD_RAD: boolean;
    constructor(PROFILE_ID?: string | Uint8Array | null, MEDIUM?: clgTerminalMedium, CAPABILITY?: clgTerminalCapability, COMPATIBILITY_CLASS?: string | Uint8Array | null, DEFINITION_REFS?: (CLGRecordRefT)[], STEERING?: clgSteeringClass, REGARD?: clgRegardGeometry, SHAPE?: SCVSensorShapeContractT | null, MIN_RANGE_M?: number, MAX_RANGE_M?: number, MAX_SLEW_RATE_RAD_S?: number, MAX_ANGULAR_ACCELERATION_RAD_S2?: number, ACQUISITION_MAX_RATE_RAD_S?: number, ACQUISITION_TIME_S?: number, SETTLE_TIME_S?: number, BEAM_SWITCH_TIME_S?: number, MAX_SIMULTANEOUS_LINKS?: number, INDEPENDENT_BEAMS?: boolean, POINTING?: clgPointingArchitecture, MAX_POINT_AHEAD_RAD?: number, HAS_MEDIUM?: boolean, HAS_CAPABILITY?: boolean, HAS_STEERING?: boolean, HAS_REGARD?: boolean, HAS_MIN_RANGE_M?: boolean, HAS_MAX_RANGE_M?: boolean, HAS_MAX_SLEW_RATE_RAD_S?: boolean, HAS_MAX_ANGULAR_ACCELERATION_RAD_S2?: boolean, HAS_ACQUISITION_MAX_RATE_RAD_S?: boolean, HAS_ACQUISITION_TIME_S?: boolean, HAS_SETTLE_TIME_S?: boolean, HAS_BEAM_SWITCH_TIME_S?: boolean, HAS_MAX_SIMULTANEOUS_LINKS?: boolean, HAS_INDEPENDENT_BEAMS?: boolean, HAS_POINTING?: boolean, HAS_MAX_POINT_AHEAD_RAD?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGTerminalProfile.d.ts.map