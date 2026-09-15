import * as flatbuffers from 'flatbuffers';
import { CDM, CDMT } from './CDM.js';
import { CQRProbabilityResult, CQRProbabilityResultT } from './CQRProbabilityResult.js';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Explicit summary when legacy source lacks sufficient data for a full CDM.
 */
export declare class CQREvent implements flatbuffers.IUnpackableObject<CQREventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQREvent;
    static getRootAsCQREvent(bb: flatbuffers.ByteBuffer, obj?: CQREvent): CQREvent;
    static getSizePrefixedRootAsCQREvent(bb: flatbuffers.ByteBuffer, obj?: CQREvent): CQREvent;
    PRIMARY_ID(): string;
    PRIMARY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SECONDARY_ID(): string;
    SECONDARY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PRIMARY_NAME(): string | null;
    PRIMARY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SECONDARY_NAME(): string | null;
    SECONDARY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PRIMARY_NORAD_ID(): number;
    SECONDARY_NORAD_ID(): number;
    TCA(obj?: TIMInstant): TIMInstant | null;
    MISS_DISTANCE_M(): number;
    RELATIVE_SPEED_M_S(): number;
    PROBABILITY(obj?: CQRProbabilityResult): CQRProbabilityResult | null;
    DILUTION_THRESHOLD_M(): number;
    /**
     * True when DILUTION_THRESHOLD_M carries a value; false means absent.
     */
    HAS_DILUTION_THRESHOLD_M(): boolean;
    /**
     * Primary-object RTN components in m and m/s; omitted when unavailable.
     */
    RELATIVE_POSITION_RTN(obj?: FRMVector3): FRMVector3 | null;
    RELATIVE_VELOCITY_RTN(obj?: FRMVector3): FRMVector3 | null;
    /**
     * One-sigma RTN values in metres, not covariance matrices.
     */
    PRIMARY_SIGMA_RTN_M(obj?: FRMVector3): FRMVector3 | null;
    SECONDARY_SIGMA_RTN_M(obj?: FRMVector3): FRMVector3 | null;
    PRIMARY_DAYS_SINCE_EPOCH(): number;
    /**
     * True when PRIMARY_DAYS_SINCE_EPOCH carries a value; false means absent.
     */
    HAS_PRIMARY_DAYS_SINCE_EPOCH(): boolean;
    SECONDARY_DAYS_SINCE_EPOCH(): number;
    /**
     * True when SECONDARY_DAYS_SINCE_EPOCH carries a value; false means absent.
     */
    HAS_SECONDARY_DAYS_SINCE_EPOCH(): boolean;
    /**
     * Full standards-backed result when physically available.
     */
    CONJUNCTION_MESSAGE(obj?: CDM): CDM | null;
    PRIMARY_STATE(obj?: PRWResidentState): PRWResidentState | null;
    SECONDARY_STATE(obj?: PRWResidentState): PRWResidentState | null;
    MAHALANOBIS_3D_SQUARED(): number;
    /**
     * True when MAHALANOBIS_3D_SQUARED carries a value; false means absent.
     */
    HAS_MAHALANOBIS_3D_SQUARED(): boolean;
    COMBINED_RADIUS_M(): number;
    /**
     * True when COMBINED_RADIUS_M carries a value; false means absent.
     */
    HAS_COMBINED_RADIUS_M(): boolean;
    static startCQREvent(builder: flatbuffers.Builder): void;
    static addPrimaryId(builder: flatbuffers.Builder, PRIMARY_IDOffset: flatbuffers.Offset): void;
    static addSecondaryId(builder: flatbuffers.Builder, SECONDARY_IDOffset: flatbuffers.Offset): void;
    static addPrimaryName(builder: flatbuffers.Builder, PRIMARY_NAMEOffset: flatbuffers.Offset): void;
    static addSecondaryName(builder: flatbuffers.Builder, SECONDARY_NAMEOffset: flatbuffers.Offset): void;
    static addPrimaryNoradId(builder: flatbuffers.Builder, PRIMARY_NORAD_ID: number): void;
    static addSecondaryNoradId(builder: flatbuffers.Builder, SECONDARY_NORAD_ID: number): void;
    static addTca(builder: flatbuffers.Builder, TCAOffset: flatbuffers.Offset): void;
    static addMissDistanceM(builder: flatbuffers.Builder, MISS_DISTANCE_M: number): void;
    static addRelativeSpeedMS(builder: flatbuffers.Builder, RELATIVE_SPEED_M_S: number): void;
    static addProbability(builder: flatbuffers.Builder, PROBABILITYOffset: flatbuffers.Offset): void;
    static addDilutionThresholdM(builder: flatbuffers.Builder, DILUTION_THRESHOLD_M: number): void;
    static addHasDilutionThresholdM(builder: flatbuffers.Builder, HAS_DILUTION_THRESHOLD_M: boolean): void;
    static addRelativePositionRtn(builder: flatbuffers.Builder, RELATIVE_POSITION_RTNOffset: flatbuffers.Offset): void;
    static addRelativeVelocityRtn(builder: flatbuffers.Builder, RELATIVE_VELOCITY_RTNOffset: flatbuffers.Offset): void;
    static addPrimarySigmaRtnM(builder: flatbuffers.Builder, PRIMARY_SIGMA_RTN_MOffset: flatbuffers.Offset): void;
    static addSecondarySigmaRtnM(builder: flatbuffers.Builder, SECONDARY_SIGMA_RTN_MOffset: flatbuffers.Offset): void;
    static addPrimaryDaysSinceEpoch(builder: flatbuffers.Builder, PRIMARY_DAYS_SINCE_EPOCH: number): void;
    static addHasPrimaryDaysSinceEpoch(builder: flatbuffers.Builder, HAS_PRIMARY_DAYS_SINCE_EPOCH: boolean): void;
    static addSecondaryDaysSinceEpoch(builder: flatbuffers.Builder, SECONDARY_DAYS_SINCE_EPOCH: number): void;
    static addHasSecondaryDaysSinceEpoch(builder: flatbuffers.Builder, HAS_SECONDARY_DAYS_SINCE_EPOCH: boolean): void;
    static addConjunctionMessage(builder: flatbuffers.Builder, CONJUNCTION_MESSAGEOffset: flatbuffers.Offset): void;
    static addPrimaryState(builder: flatbuffers.Builder, PRIMARY_STATEOffset: flatbuffers.Offset): void;
    static addSecondaryState(builder: flatbuffers.Builder, SECONDARY_STATEOffset: flatbuffers.Offset): void;
    static addMahalanobis3DSquared(builder: flatbuffers.Builder, MAHALANOBIS_3D_SQUARED: number): void;
    static addHasMahalanobis3DSquared(builder: flatbuffers.Builder, HAS_MAHALANOBIS_3D_SQUARED: boolean): void;
    static addCombinedRadiusM(builder: flatbuffers.Builder, COMBINED_RADIUS_M: number): void;
    static addHasCombinedRadiusM(builder: flatbuffers.Builder, HAS_COMBINED_RADIUS_M: boolean): void;
    static endCQREvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQREventT;
    unpackTo(_o: CQREventT): void;
}
export declare class CQREventT implements flatbuffers.IGeneratedObject {
    PRIMARY_ID: string | Uint8Array | null;
    SECONDARY_ID: string | Uint8Array | null;
    PRIMARY_NAME: string | Uint8Array | null;
    SECONDARY_NAME: string | Uint8Array | null;
    PRIMARY_NORAD_ID: number;
    SECONDARY_NORAD_ID: number;
    TCA: TIMInstantT | null;
    MISS_DISTANCE_M: number;
    RELATIVE_SPEED_M_S: number;
    PROBABILITY: CQRProbabilityResultT | null;
    DILUTION_THRESHOLD_M: number;
    HAS_DILUTION_THRESHOLD_M: boolean;
    RELATIVE_POSITION_RTN: FRMVector3T | null;
    RELATIVE_VELOCITY_RTN: FRMVector3T | null;
    PRIMARY_SIGMA_RTN_M: FRMVector3T | null;
    SECONDARY_SIGMA_RTN_M: FRMVector3T | null;
    PRIMARY_DAYS_SINCE_EPOCH: number;
    HAS_PRIMARY_DAYS_SINCE_EPOCH: boolean;
    SECONDARY_DAYS_SINCE_EPOCH: number;
    HAS_SECONDARY_DAYS_SINCE_EPOCH: boolean;
    CONJUNCTION_MESSAGE: CDMT | null;
    PRIMARY_STATE: PRWResidentStateT | null;
    SECONDARY_STATE: PRWResidentStateT | null;
    MAHALANOBIS_3D_SQUARED: number;
    HAS_MAHALANOBIS_3D_SQUARED: boolean;
    COMBINED_RADIUS_M: number;
    HAS_COMBINED_RADIUS_M: boolean;
    constructor(PRIMARY_ID?: string | Uint8Array | null, SECONDARY_ID?: string | Uint8Array | null, PRIMARY_NAME?: string | Uint8Array | null, SECONDARY_NAME?: string | Uint8Array | null, PRIMARY_NORAD_ID?: number, SECONDARY_NORAD_ID?: number, TCA?: TIMInstantT | null, MISS_DISTANCE_M?: number, RELATIVE_SPEED_M_S?: number, PROBABILITY?: CQRProbabilityResultT | null, DILUTION_THRESHOLD_M?: number, HAS_DILUTION_THRESHOLD_M?: boolean, RELATIVE_POSITION_RTN?: FRMVector3T | null, RELATIVE_VELOCITY_RTN?: FRMVector3T | null, PRIMARY_SIGMA_RTN_M?: FRMVector3T | null, SECONDARY_SIGMA_RTN_M?: FRMVector3T | null, PRIMARY_DAYS_SINCE_EPOCH?: number, HAS_PRIMARY_DAYS_SINCE_EPOCH?: boolean, SECONDARY_DAYS_SINCE_EPOCH?: number, HAS_SECONDARY_DAYS_SINCE_EPOCH?: boolean, CONJUNCTION_MESSAGE?: CDMT | null, PRIMARY_STATE?: PRWResidentStateT | null, SECONDARY_STATE?: PRWResidentStateT | null, MAHALANOBIS_3D_SQUARED?: number, HAS_MAHALANOBIS_3D_SQUARED?: boolean, COMBINED_RADIUS_M?: number, HAS_COMBINED_RADIUS_M?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQREvent.d.ts.map