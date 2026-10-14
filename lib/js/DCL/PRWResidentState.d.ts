import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { PRWProcessNoise, PRWProcessNoiseT } from './PRWProcessNoise.js';
import { PRWStateMatrix, PRWStateMatrixT } from './PRWStateMatrix.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
/**
 * Identity/state at one epoch. FRM state is m/m/s with named frame/time scale.
 */
export declare class PRWResidentState implements flatbuffers.IUnpackableObject<PRWResidentStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWResidentState;
    static getRootAsPRWResidentState(bb: flatbuffers.ByteBuffer, obj?: PRWResidentState): PRWResidentState;
    static getSizePrefixedRootAsPRWResidentState(bb: flatbuffers.ByteBuffer, obj?: PRWResidentState): PRWResidentState;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    ENTITY_HANDLE(): number;
    CATALOG_NUMBER(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATE(obj?: FRMStateVector): FRMStateVector | null;
    COORDINATE_SYSTEM(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    COVARIANCE(obj?: PRWStateMatrix): PRWStateMatrix | null;
    /**
     * Optional initial dynamical mass in kg; distinct from a missing mass.
     */
    MASS_KG(): number;
    /**
     * True when MASS_KG carries a value; false means absent.
     */
    HAS_MASS_KG(): boolean;
    /**
     * Explicit SI concepts Cd*A/m and Cr*A/m. Do not infer these from legacy
     * ignored/underspecified coefficients; require a caller-provided mapping.
     */
    DRAG_AREA_OVER_MASS_M2_KG(): number;
    /**
     * True when DRAG_AREA_OVER_MASS_M2_KG carries a value; false means absent.
     */
    HAS_DRAG_AREA_OVER_MASS_M2_KG(): boolean;
    SRP_AREA_OVER_MASS_M2_KG(): number;
    /**
     * True when SRP_AREA_OVER_MASS_M2_KG carries a value; false means absent.
     */
    HAS_SRP_AREA_OVER_MASS_M2_KG(): boolean;
    VALID(): boolean;
    /**
     * Process noise for COVARIANCE: on input, what propagation adds; on
     * output, what the propagated COVARIANCE includes. Absent means none.
     */
    PROCESS_NOISE(obj?: PRWProcessNoise): PRWProcessNoise | null;
    /**
     * Rate of change of DRAG_AREA_OVER_MASS_M2_KG, m2/kg/s, from STATE's epoch
     * (the BDOT of a VCM).
     */
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): number;
    /**
     * True when DRAG_AREA_OVER_MASS_RATE_M2_KG_S carries a value; false means absent.
     */
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): boolean;
    /**
     * Constant in-track acceleration, m/s2, as PRWForceConfiguration's.
     */
    IN_TRACK_ACCELERATION_M_S2(): number;
    /**
     * True when IN_TRACK_ACCELERATION_M_S2 carries a value; false means absent.
     */
    HAS_IN_TRACK_ACCELERATION_M_S2(): boolean;
    static startPRWResidentState(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addEntityHandle(builder: flatbuffers.Builder, ENTITY_HANDLE: number): void;
    static addCatalogNumber(builder: flatbuffers.Builder, CATALOG_NUMBER: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addCoordinateSystem(builder: flatbuffers.Builder, COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KG: number): void;
    static addHasMassKg(builder: flatbuffers.Builder, HAS_MASS_KG: boolean): void;
    static addDragAreaOverMassM2Kg(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_M2_KG: number): void;
    static addHasDragAreaOverMassM2Kg(builder: flatbuffers.Builder, HAS_DRAG_AREA_OVER_MASS_M2_KG: boolean): void;
    static addSrpAreaOverMassM2Kg(builder: flatbuffers.Builder, SRP_AREA_OVER_MASS_M2_KG: number): void;
    static addHasSrpAreaOverMassM2Kg(builder: flatbuffers.Builder, HAS_SRP_AREA_OVER_MASS_M2_KG: boolean): void;
    static addValid(builder: flatbuffers.Builder, VALID: boolean): void;
    static addProcessNoise(builder: flatbuffers.Builder, PROCESS_NOISEOffset: flatbuffers.Offset): void;
    static addDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number): void;
    static addHasDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean): void;
    static addInTrackAccelerationMS2(builder: flatbuffers.Builder, IN_TRACK_ACCELERATION_M_S2: number): void;
    static addHasInTrackAccelerationMS2(builder: flatbuffers.Builder, HAS_IN_TRACK_ACCELERATION_M_S2: boolean): void;
    static endPRWResidentState(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWResidentStateT;
    unpackTo(_o: PRWResidentStateT): void;
}
export declare class PRWResidentStateT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    ENTITY_HANDLE: number;
    CATALOG_NUMBER: number;
    OBJECT_ID: string | Uint8Array | null;
    STATE: FRMStateVectorT | null;
    COORDINATE_SYSTEM: RFMCoordinateSystemT | null;
    COVARIANCE: PRWStateMatrixT | null;
    MASS_KG: number;
    HAS_MASS_KG: boolean;
    DRAG_AREA_OVER_MASS_M2_KG: number;
    HAS_DRAG_AREA_OVER_MASS_M2_KG: boolean;
    SRP_AREA_OVER_MASS_M2_KG: number;
    HAS_SRP_AREA_OVER_MASS_M2_KG: boolean;
    VALID: boolean;
    PROCESS_NOISE: PRWProcessNoiseT | null;
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number;
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean;
    IN_TRACK_ACCELERATION_M_S2: number;
    HAS_IN_TRACK_ACCELERATION_M_S2: boolean;
    constructor(INSTANCE?: PRWInstanceT | null, ENTITY_HANDLE?: number, CATALOG_NUMBER?: number, OBJECT_ID?: string | Uint8Array | null, STATE?: FRMStateVectorT | null, COORDINATE_SYSTEM?: RFMCoordinateSystemT | null, COVARIANCE?: PRWStateMatrixT | null, MASS_KG?: number, HAS_MASS_KG?: boolean, DRAG_AREA_OVER_MASS_M2_KG?: number, HAS_DRAG_AREA_OVER_MASS_M2_KG?: boolean, SRP_AREA_OVER_MASS_M2_KG?: number, HAS_SRP_AREA_OVER_MASS_M2_KG?: boolean, VALID?: boolean, PROCESS_NOISE?: PRWProcessNoiseT | null, DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: number, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: boolean, IN_TRACK_ACCELERATION_M_S2?: number, HAS_IN_TRACK_ACCELERATION_M_S2?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWResidentState.d.ts.map