import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { snrMountingFrame } from './snrMountingFrame.js';
import { snrPointingMode } from './snrPointingMode.js';
/**
 * How the sensor sits on its platform and where it points. Angles are degrees
 * and signed, so an unset angle is NaN (absent), never 0.
 */
export declare class SNRMounting implements flatbuffers.IUnpackableObject<SNRMountingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNRMounting;
    static getRootAsSNRMounting(bb: flatbuffers.ByteBuffer, obj?: SNRMounting): SNRMounting;
    static getSizePrefixedRootAsSNRMounting(bb: flatbuffers.ByteBuffer, obj?: SNRMounting): SNRMounting;
    FRAME(): snrMountingFrame;
    /**
     * Boresight azimuth in FRAME. NaN = not stated.
     */
    BORESIGHT_AZIMUTH_DEG(): number;
    /**
     * Boresight elevation in FRAME. NaN = not stated.
     */
    BORESIGHT_ELEVATION_DEG(): number;
    /**
     * Roll about the boresight. NaN = not stated.
     */
    ROLL_DEG(): number;
    POINTING(): snrPointingMode;
    /**
     * Azimuth scan rate, degrees per second, for POINTING SCAN. NaN = not stated.
     */
    SCAN_AZIMUTH_RATE_DEG_S(): number;
    /**
     * Elevation scan rate, degrees per second, for POINTING SCAN. NaN = not stated.
     */
    SCAN_ELEVATION_RATE_DEG_S(): number;
    /**
     * Field-of-regard limits in FRAME, degrees. NaN = no limit stated.
     * ELEVATION_LIMIT_MIN_DEG is the minimum elevation a ground sensor operates at.
     */
    AZIMUTH_LIMIT_MIN_DEG(): number;
    AZIMUTH_LIMIT_MAX_DEG(): number;
    ELEVATION_LIMIT_MIN_DEG(): number;
    ELEVATION_LIMIT_MAX_DEG(): number;
    /**
     * Where the mounting was read, when it differs from the record's PROVENANCE.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startSNRMounting(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: snrMountingFrame): void;
    static addBoresightAzimuthDeg(builder: flatbuffers.Builder, BORESIGHT_AZIMUTH_DEG: number): void;
    static addBoresightElevationDeg(builder: flatbuffers.Builder, BORESIGHT_ELEVATION_DEG: number): void;
    static addRollDeg(builder: flatbuffers.Builder, ROLL_DEG: number): void;
    static addPointing(builder: flatbuffers.Builder, POINTING: snrPointingMode): void;
    static addScanAzimuthRateDegS(builder: flatbuffers.Builder, SCAN_AZIMUTH_RATE_DEG_S: number): void;
    static addScanElevationRateDegS(builder: flatbuffers.Builder, SCAN_ELEVATION_RATE_DEG_S: number): void;
    static addAzimuthLimitMinDeg(builder: flatbuffers.Builder, AZIMUTH_LIMIT_MIN_DEG: number): void;
    static addAzimuthLimitMaxDeg(builder: flatbuffers.Builder, AZIMUTH_LIMIT_MAX_DEG: number): void;
    static addElevationLimitMinDeg(builder: flatbuffers.Builder, ELEVATION_LIMIT_MIN_DEG: number): void;
    static addElevationLimitMaxDeg(builder: flatbuffers.Builder, ELEVATION_LIMIT_MAX_DEG: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSNRMounting(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SNRMountingT;
    unpackTo(_o: SNRMountingT): void;
}
export declare class SNRMountingT implements flatbuffers.IGeneratedObject {
    FRAME: snrMountingFrame;
    BORESIGHT_AZIMUTH_DEG: number;
    BORESIGHT_ELEVATION_DEG: number;
    ROLL_DEG: number;
    POINTING: snrPointingMode;
    SCAN_AZIMUTH_RATE_DEG_S: number;
    SCAN_ELEVATION_RATE_DEG_S: number;
    AZIMUTH_LIMIT_MIN_DEG: number;
    AZIMUTH_LIMIT_MAX_DEG: number;
    ELEVATION_LIMIT_MIN_DEG: number;
    ELEVATION_LIMIT_MAX_DEG: number;
    PROVENANCE: OPPProvenanceT | null;
    constructor(FRAME?: snrMountingFrame, BORESIGHT_AZIMUTH_DEG?: number, BORESIGHT_ELEVATION_DEG?: number, ROLL_DEG?: number, POINTING?: snrPointingMode, SCAN_AZIMUTH_RATE_DEG_S?: number, SCAN_ELEVATION_RATE_DEG_S?: number, AZIMUTH_LIMIT_MIN_DEG?: number, AZIMUTH_LIMIT_MAX_DEG?: number, ELEVATION_LIMIT_MIN_DEG?: number, ELEVATION_LIMIT_MAX_DEG?: number, PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNRMounting.d.ts.map