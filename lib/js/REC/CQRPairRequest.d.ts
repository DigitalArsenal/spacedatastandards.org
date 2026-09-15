import * as flatbuffers from 'flatbuffers';
import { CQRObjectSource, CQRObjectSourceT } from './CQRObjectSource.js';
import { CQRScreeningControls, CQRScreeningControlsT } from './CQRScreeningControls.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
/**
 * CONTROLS.COMBINED_RADIUS_M must equal PRIMARY_RADIUS_M + SECONDARY_RADIUS_M.
 * Reject inconsistent radii instead of silently choosing one source.
 */
export declare class CQRPairRequest implements flatbuffers.IUnpackableObject<CQRPairRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRPairRequest;
    static getRootAsCQRPairRequest(bb: flatbuffers.ByteBuffer, obj?: CQRPairRequest): CQRPairRequest;
    static getSizePrefixedRootAsCQRPairRequest(bb: flatbuffers.ByteBuffer, obj?: CQRPairRequest): CQRPairRequest;
    PRIMARY(obj?: CQRObjectSource): CQRObjectSource | null;
    SECONDARY(obj?: CQRObjectSource): CQRObjectSource | null;
    CONTROLS(obj?: CQRScreeningControls): CQRScreeningControls | null;
    PRIMARY_RADIUS_M(): number;
    SECONDARY_RADIUS_M(): number;
    /**
     * Common inertial frame used for relative state and encounter-plane geometry.
     */
    EVALUATION_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    static startCQRPairRequest(builder: flatbuffers.Builder): void;
    static addPrimary(builder: flatbuffers.Builder, PRIMARYOffset: flatbuffers.Offset): void;
    static addSecondary(builder: flatbuffers.Builder, SECONDARYOffset: flatbuffers.Offset): void;
    static addControls(builder: flatbuffers.Builder, CONTROLSOffset: flatbuffers.Offset): void;
    static addPrimaryRadiusM(builder: flatbuffers.Builder, PRIMARY_RADIUS_M: number): void;
    static addSecondaryRadiusM(builder: flatbuffers.Builder, SECONDARY_RADIUS_M: number): void;
    static addEvaluationFrame(builder: flatbuffers.Builder, EVALUATION_FRAMEOffset: flatbuffers.Offset): void;
    static endCQRPairRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRPairRequestT;
    unpackTo(_o: CQRPairRequestT): void;
}
export declare class CQRPairRequestT implements flatbuffers.IGeneratedObject {
    PRIMARY: CQRObjectSourceT | null;
    SECONDARY: CQRObjectSourceT | null;
    CONTROLS: CQRScreeningControlsT | null;
    PRIMARY_RADIUS_M: number;
    SECONDARY_RADIUS_M: number;
    EVALUATION_FRAME: RFMCoordinateSystemT | null;
    constructor(PRIMARY?: CQRObjectSourceT | null, SECONDARY?: CQRObjectSourceT | null, CONTROLS?: CQRScreeningControlsT | null, PRIMARY_RADIUS_M?: number, SECONDARY_RADIUS_M?: number, EVALUATION_FRAME?: RFMCoordinateSystemT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRPairRequest.d.ts.map