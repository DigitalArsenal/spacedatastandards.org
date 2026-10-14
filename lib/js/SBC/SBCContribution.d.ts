import * as flatbuffers from 'flatbuffers';
import { sbcContributorKind } from './sbcContributorKind.js';
/**
 * Variance one contributor added, per axis.
 */
export declare class SBCContribution implements flatbuffers.IUnpackableObject<SBCContributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBCContribution;
    static getRootAsSBCContribution(bb: flatbuffers.ByteBuffer, obj?: SBCContribution): SBCContribution;
    static getSizePrefixedRootAsSBCContribution(bb: flatbuffers.ByteBuffer, obj?: SBCContribution): SBCContribution;
    KIND(): sbcContributorKind;
    /**
     * Sensor the contribution is for (KIND SensorBias, one per sensor);
     * empty for the total of a kind.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Element sets, sensors or matrices behind the contribution.
     */
    COUNT(): number;
    /**
     * Radial position variance added, m**2.
     */
    RADIAL_VARIANCE_M2(): number;
    /**
     * In-track position variance added, m**2.
     */
    IN_TRACK_VARIANCE_M2(): number;
    /**
     * Cross-track position variance added, m**2.
     */
    CROSS_TRACK_VARIANCE_M2(): number;
    /**
     * Variance added to each velocity component, (m/s)**2; 0 = none.
     */
    VELOCITY_VARIANCE_M2_S2(): number;
    static startSBCContribution(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: sbcContributorKind): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addRadialVarianceM2(builder: flatbuffers.Builder, RADIAL_VARIANCE_M2: number): void;
    static addInTrackVarianceM2(builder: flatbuffers.Builder, IN_TRACK_VARIANCE_M2: number): void;
    static addCrossTrackVarianceM2(builder: flatbuffers.Builder, CROSS_TRACK_VARIANCE_M2: number): void;
    static addVelocityVarianceM2S2(builder: flatbuffers.Builder, VELOCITY_VARIANCE_M2_S2: number): void;
    static endSBCContribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSBCContribution(builder: flatbuffers.Builder, KIND: sbcContributorKind, SENSOR_IDOffset: flatbuffers.Offset, COUNT: number, RADIAL_VARIANCE_M2: number, IN_TRACK_VARIANCE_M2: number, CROSS_TRACK_VARIANCE_M2: number, VELOCITY_VARIANCE_M2_S2: number): flatbuffers.Offset;
    unpack(): SBCContributionT;
    unpackTo(_o: SBCContributionT): void;
}
export declare class SBCContributionT implements flatbuffers.IGeneratedObject {
    KIND: sbcContributorKind;
    SENSOR_ID: string | Uint8Array | null;
    COUNT: number;
    RADIAL_VARIANCE_M2: number;
    IN_TRACK_VARIANCE_M2: number;
    CROSS_TRACK_VARIANCE_M2: number;
    VELOCITY_VARIANCE_M2_S2: number;
    constructor(KIND?: sbcContributorKind, SENSOR_ID?: string | Uint8Array | null, COUNT?: number, RADIAL_VARIANCE_M2?: number, IN_TRACK_VARIANCE_M2?: number, CROSS_TRACK_VARIANCE_M2?: number, VELOCITY_VARIANCE_M2_S2?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBCContribution.d.ts.map