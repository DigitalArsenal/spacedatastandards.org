import * as flatbuffers from 'flatbuffers';
import { TMSIdentifier, TMSIdentifierT } from './TMSIdentifier.js';
import { TMSModelParameter, TMSModelParameterT } from './TMSModelParameter.js';
import { TMSProvenance, TMSProvenanceT } from './TMSProvenance.js';
import { TrkTrackStatus } from './TrkTrackStatus.js';
import { trackEnvironment } from './trackEnvironment.js';
/**
 * Track Model State
 */
export declare class TMS implements flatbuffers.IUnpackableObject<TMST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMS;
    static getRootAsTMS(bb: flatbuffers.ByteBuffer, obj?: TMS): TMS;
    static getSizePrefixedRootAsTMS(bb: flatbuffers.ByteBuffer, obj?: TMS): TMS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this state record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Publisher-stable identifier of the track this state belongs to, held
     * constant across every state update of the same track.
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Domain the track moves in. The `$TRK` enum reused verbatim; ordinal 0
     * is SPACE, so a publisher MUST set this field — it is defaulted to
     * UNKNOWN explicitly so an unset field can never be read as SPACE.
     */
    ENVIRONMENT(): trackEnvironment;
    /**
     * RFC 3339 UTC fixed-millisecond epoch this state is valid at. The
     * propagation origin: every kinematic field below is stated at EPOCH.
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Latitude, decimal degrees on WGS 84, positive north.
     */
    LATITUDE(): number;
    /**
     * Longitude, decimal degrees on WGS 84, positive east, in [-180, 180].
     */
    LONGITUDE(): number;
    /**
     * Altitude, metres above the WGS 84 ellipsoid. NaN for a surface track
     * whose source publishes no altitude.
     */
    ALTITUDE_M(): number;
    /**
     * Speed over ground, metres per second.
     */
    GROUND_SPEED_MPS(): number;
    /**
     * Velocity components, metres per second, local NED-derived axes:
     * north, east, and up. Published when the source or filter resolves
     * them; NaN otherwise.
     */
    VELOCITY_NORTH_MPS(): number;
    VELOCITY_EAST_MPS(): number;
    VELOCITY_UP_MPS(): number;
    /**
     * Heading, degrees true, [0, 360): the direction the vehicle points.
     */
    HEADING_DEG(): number;
    /**
     * Course over ground, degrees true, [0, 360): the direction it moves.
     */
    COURSE_DEG(): number;
    /**
     * Turn rate, degrees per second, positive clockwise seen from above.
     */
    TURN_RATE_DPS(): number;
    /**
     * Vertical rate, metres per second, positive up.
     */
    VERTICAL_RATE_MPS(): number;
    /**
     * Identifier of the dead-reckoning or motion model that extrapolates
     * this state, a key into the publisher's model registry. Required: a
     * state with no model is a position report, which this record is not.
     */
    MODEL_ID(): string;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Parameters of that model, named per its own registry.
     */
    MODEL_PARAMETERS(index: number, obj?: TMSModelParameter): TMSModelParameter | null;
    modelParametersLength(): number;
    /**
     * RFC 3339 UTC instant beyond which the publisher no longer stands
     * behind propagation of this state.
     */
    PROPAGATION_VALID_UNTIL(): string | null;
    PROPAGATION_VALID_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 1-sigma horizontal position uncertainty at EPOCH, metres.
     */
    POSITION_UNCERTAINTY_M(): number;
    /**
     * Gate in standard deviations: an observation whose innovation exceeds
     * this many sigma of POSITION_UNCERTAINTY_M breached the model and
     * produced this update.
     */
    INNOVATION_GATE_SIGMA(): number;
    /**
     * Gate as an absolute distance, metres, when the publisher gates on
     * distance rather than sigma.
     */
    INNOVATION_GATE_DISTANCE_M(): number;
    /**
     * Publisher's stated tolerance, metres, within which propagation of this
     * state is considered to agree with truth.
     */
    TOLERANCE_M(): number;
    /**
     * Track status. The `$TRK` enum reused verbatim; ordinal 0 is ACTIVE,
     * so a publisher MUST set this field on every record — an unset field
     * reads as ACTIVE and a consumer cannot distinguish the two.
     */
    TRACK_STATUS(): TrkTrackStatus;
    /**
     * Seconds after LAST_UPDATE_EPOCH at which a consumer MUST mark the
     * track stale.
     */
    STALE_AFTER_S(): number;
    /**
     * Seconds after LAST_UPDATE_EPOCH at which a consumer MUST drop the
     * track.
     */
    DROP_AFTER_S(): number;
    /**
     * RFC 3339 UTC fixed-millisecond epoch of the last source observation
     * that updated this track — the staleness clock origin. EPOCH may lag it
     * when the publisher re-emits a keepalive state.
     */
    LAST_UPDATE_EPOCH(): string | null;
    LAST_UPDATE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every identity the track is known by, scheme-tagged.
     */
    IDENTIFIERS(index: number, obj?: TMSIdentifier): TMSIdentifier | null;
    identifiersLength(): number;
    /**
     * Feed lineage and licence. Required.
     */
    SOURCE(obj?: TMSProvenance): TMSProvenance | null;
    static startTMS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENT: trackEnvironment): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addGroundSpeedMps(builder: flatbuffers.Builder, GROUND_SPEED_MPS: number): void;
    static addVelocityNorthMps(builder: flatbuffers.Builder, VELOCITY_NORTH_MPS: number): void;
    static addVelocityEastMps(builder: flatbuffers.Builder, VELOCITY_EAST_MPS: number): void;
    static addVelocityUpMps(builder: flatbuffers.Builder, VELOCITY_UP_MPS: number): void;
    static addHeadingDeg(builder: flatbuffers.Builder, HEADING_DEG: number): void;
    static addCourseDeg(builder: flatbuffers.Builder, COURSE_DEG: number): void;
    static addTurnRateDps(builder: flatbuffers.Builder, TURN_RATE_DPS: number): void;
    static addVerticalRateMps(builder: flatbuffers.Builder, VERTICAL_RATE_MPS: number): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelParameters(builder: flatbuffers.Builder, MODEL_PARAMETERSOffset: flatbuffers.Offset): void;
    static createModelParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModelParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPropagationValidUntil(builder: flatbuffers.Builder, PROPAGATION_VALID_UNTILOffset: flatbuffers.Offset): void;
    static addPositionUncertaintyM(builder: flatbuffers.Builder, POSITION_UNCERTAINTY_M: number): void;
    static addInnovationGateSigma(builder: flatbuffers.Builder, INNOVATION_GATE_SIGMA: number): void;
    static addInnovationGateDistanceM(builder: flatbuffers.Builder, INNOVATION_GATE_DISTANCE_M: number): void;
    static addToleranceM(builder: flatbuffers.Builder, TOLERANCE_M: number): void;
    static addTrackStatus(builder: flatbuffers.Builder, TRACK_STATUS: TrkTrackStatus): void;
    static addStaleAfterS(builder: flatbuffers.Builder, STALE_AFTER_S: number): void;
    static addDropAfterS(builder: flatbuffers.Builder, DROP_AFTER_S: number): void;
    static addLastUpdateEpoch(builder: flatbuffers.Builder, LAST_UPDATE_EPOCHOffset: flatbuffers.Offset): void;
    static addIdentifiers(builder: flatbuffers.Builder, IDENTIFIERSOffset: flatbuffers.Offset): void;
    static createIdentifiersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIdentifiersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endTMS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TMST;
    unpackTo(_o: TMST): void;
}
export declare class TMST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    ENVIRONMENT: trackEnvironment;
    EPOCH: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    ALTITUDE_M: number;
    GROUND_SPEED_MPS: number;
    VELOCITY_NORTH_MPS: number;
    VELOCITY_EAST_MPS: number;
    VELOCITY_UP_MPS: number;
    HEADING_DEG: number;
    COURSE_DEG: number;
    TURN_RATE_DPS: number;
    VERTICAL_RATE_MPS: number;
    MODEL_ID: string | Uint8Array | null;
    MODEL_PARAMETERS: (TMSModelParameterT)[];
    PROPAGATION_VALID_UNTIL: string | Uint8Array | null;
    POSITION_UNCERTAINTY_M: number;
    INNOVATION_GATE_SIGMA: number;
    INNOVATION_GATE_DISTANCE_M: number;
    TOLERANCE_M: number;
    TRACK_STATUS: TrkTrackStatus;
    STALE_AFTER_S: number;
    DROP_AFTER_S: number;
    LAST_UPDATE_EPOCH: string | Uint8Array | null;
    IDENTIFIERS: (TMSIdentifierT)[];
    SOURCE: TMSProvenanceT | null;
    constructor(ID?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, ENVIRONMENT?: trackEnvironment, EPOCH?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, ALTITUDE_M?: number, GROUND_SPEED_MPS?: number, VELOCITY_NORTH_MPS?: number, VELOCITY_EAST_MPS?: number, VELOCITY_UP_MPS?: number, HEADING_DEG?: number, COURSE_DEG?: number, TURN_RATE_DPS?: number, VERTICAL_RATE_MPS?: number, MODEL_ID?: string | Uint8Array | null, MODEL_PARAMETERS?: (TMSModelParameterT)[], PROPAGATION_VALID_UNTIL?: string | Uint8Array | null, POSITION_UNCERTAINTY_M?: number, INNOVATION_GATE_SIGMA?: number, INNOVATION_GATE_DISTANCE_M?: number, TOLERANCE_M?: number, TRACK_STATUS?: TrkTrackStatus, STALE_AFTER_S?: number, DROP_AFTER_S?: number, LAST_UPDATE_EPOCH?: string | Uint8Array | null, IDENTIFIERS?: (TMSIdentifierT)[], SOURCE?: TMSProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMS.d.ts.map