import * as flatbuffers from 'flatbuffers';
import { OEM, OEMT } from './OEM.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * One launched object: its trajectory for a liftoff at NOMINAL_LIFTOFF.
 */
export declare class CQRLaunchSegment implements flatbuffers.IUnpackableObject<CQRLaunchSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchSegment;
    static getRootAsCQRLaunchSegment(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchSegment): CQRLaunchSegment;
    static getSizePrefixedRootAsCQRLaunchSegment(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchSegment): CQRLaunchSegment;
    SEGMENT_ID(): string;
    SEGMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SEGMENT_NAME(): string | null;
    SEGMENT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sampled states in EVALUATION_FRAME, km and km/s as the OEM defines.
     */
    TRAJECTORY(obj?: OEM): OEM | null;
    /**
     * Hard-body radius, metres.
     */
    RADIUS_M(): number;
    /**
     * Radar cross section, square metres.
     */
    RADAR_CROSS_SECTION_M2(): number;
    /**
     * True when RADAR_CROSS_SECTION_M2 carries a value; false means absent.
     */
    HAS_RADAR_CROSS_SECTION_M2(): boolean;
    /**
     * Liftoff times this trajectory applies to, half-open [VALID_FROM,
     * VALID_UNTIL). Absent bounds select the whole window. Windows whose
     * trajectory changes (for example a varying azimuth) supply one segment
     * per span.
     */
    VALID_FROM(obj?: TIMInstant): TIMInstant | null;
    VALID_UNTIL(obj?: TIMInstant): TIMInstant | null;
    static startCQRLaunchSegment(builder: flatbuffers.Builder): void;
    static addSegmentId(builder: flatbuffers.Builder, SEGMENT_IDOffset: flatbuffers.Offset): void;
    static addSegmentName(builder: flatbuffers.Builder, SEGMENT_NAMEOffset: flatbuffers.Offset): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static addRadiusM(builder: flatbuffers.Builder, RADIUS_M: number): void;
    static addRadarCrossSectionM2(builder: flatbuffers.Builder, RADAR_CROSS_SECTION_M2: number): void;
    static addHasRadarCrossSectionM2(builder: flatbuffers.Builder, HAS_RADAR_CROSS_SECTION_M2: boolean): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidUntil(builder: flatbuffers.Builder, VALID_UNTILOffset: flatbuffers.Offset): void;
    static endCQRLaunchSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRLaunchSegmentT;
    unpackTo(_o: CQRLaunchSegmentT): void;
}
export declare class CQRLaunchSegmentT implements flatbuffers.IGeneratedObject {
    SEGMENT_ID: string | Uint8Array | null;
    SEGMENT_NAME: string | Uint8Array | null;
    TRAJECTORY: OEMT | null;
    RADIUS_M: number;
    RADAR_CROSS_SECTION_M2: number;
    HAS_RADAR_CROSS_SECTION_M2: boolean;
    VALID_FROM: TIMInstantT | null;
    VALID_UNTIL: TIMInstantT | null;
    constructor(SEGMENT_ID?: string | Uint8Array | null, SEGMENT_NAME?: string | Uint8Array | null, TRAJECTORY?: OEMT | null, RADIUS_M?: number, RADAR_CROSS_SECTION_M2?: number, HAS_RADAR_CROSS_SECTION_M2?: boolean, VALID_FROM?: TIMInstantT | null, VALID_UNTIL?: TIMInstantT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchSegment.d.ts.map