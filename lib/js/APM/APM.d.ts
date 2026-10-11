import * as flatbuffers from 'flatbuffers';
import { APMAngularVelocity, APMAngularVelocityT } from './APMAngularVelocity.js';
import { APMEulerAngleState, APMEulerAngleStateT } from './APMEulerAngleState.js';
import { APMInertia, APMInertiaT } from './APMInertia.js';
import { APMManeuver, APMManeuverT } from './APMManeuver.js';
import { APMQuaternionState, APMQuaternionStateT } from './APMQuaternionState.js';
import { APMSpinState, APMSpinStateT } from './APMSpinState.js';
/**
 * Attitude Parameter Message
 */
export declare class APM implements flatbuffers.IUnpackableObject<APMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APM;
    static getRootAsAPM(bb: flatbuffers.ByteBuffer, obj?: APM): APM;
    static getSizePrefixedRootAsAPM(bb: flatbuffers.ByteBuffer, obj?: APM): APM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_APM_VERS(): string | null;
    CCSDS_APM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    Q1(): number;
    Q2(): number;
    Q3(): number;
    QC(): number;
    /**
     * COMMENT lines of the message (CCSDS 504.0-B-2) from its header, metadata and
     * data groups, in message order, joined by a line feed. A state group's own
     * comments stay with it.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CLASSIFICATION of the message: the optional header keyword stating its
     * security classification or handling caveat.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MESSAGE_ID: the optional header keyword, an identifier the originator makes
     * unique for this message.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CENTER_NAME: the orbit center, when the message states one.
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TIME_SYSTEM: the time system EPOCH and the maneuver epochs are in.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quaternion states (QUAT_START block), in message order. Q1..QC above are the
     * single frameless quaternion of the earlier form of this record; a message is
     * read into and written from these lists.
     */
    QUATERNION_STATES(index: number, obj?: APMQuaternionState): APMQuaternionState | null;
    quaternionStatesLength(): number;
    /**
     * Euler angle states (EULER_START block), in message order.
     */
    EULER_ANGLE_STATES(index: number, obj?: APMEulerAngleState): APMEulerAngleState | null;
    eulerAngleStatesLength(): number;
    /**
     * Angular velocities (ANGVEL_START block), in message order.
     */
    ANGULAR_VELOCITIES(index: number, obj?: APMAngularVelocity): APMAngularVelocity | null;
    angularVelocitiesLength(): number;
    /**
     * Spin states (SPIN_START block), in message order.
     */
    SPIN_STATES(index: number, obj?: APMSpinState): APMSpinState | null;
    spinStatesLength(): number;
    /**
     * Inertia tensors (INERTIA_START block), in message order.
     */
    INERTIAS(index: number, obj?: APMInertia): APMInertia | null;
    inertiasLength(): number;
    /**
     * Attitude maneuvers (MAN_START block), in message order.
     */
    MANEUVERS(index: number, obj?: APMManeuver): APMManeuver | null;
    maneuversLength(): number;
    static startAPM(builder: flatbuffers.Builder): void;
    static addCcsdsApmVers(builder: flatbuffers.Builder, CCSDS_APM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addQuaternionStates(builder: flatbuffers.Builder, QUATERNION_STATESOffset: flatbuffers.Offset): void;
    static createQuaternionStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startQuaternionStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEulerAngleStates(builder: flatbuffers.Builder, EULER_ANGLE_STATESOffset: flatbuffers.Offset): void;
    static createEulerAngleStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEulerAngleStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngularVelocities(builder: flatbuffers.Builder, ANGULAR_VELOCITIESOffset: flatbuffers.Offset): void;
    static createAngularVelocitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAngularVelocitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpinStates(builder: flatbuffers.Builder, SPIN_STATESOffset: flatbuffers.Offset): void;
    static createSpinStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpinStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInertias(builder: flatbuffers.Builder, INERTIASOffset: flatbuffers.Offset): void;
    static createInertiasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInertiasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static createManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAPM(builder: flatbuffers.Builder, CCSDS_APM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number, COMMENTOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, MESSAGE_IDOffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, QUATERNION_STATESOffset: flatbuffers.Offset, EULER_ANGLE_STATESOffset: flatbuffers.Offset, ANGULAR_VELOCITIESOffset: flatbuffers.Offset, SPIN_STATESOffset: flatbuffers.Offset, INERTIASOffset: flatbuffers.Offset, MANEUVERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APMT;
    unpackTo(_o: APMT): void;
}
export declare class APMT implements flatbuffers.IGeneratedObject {
    CCSDS_APM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    COMMENT: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    QUATERNION_STATES: (APMQuaternionStateT)[];
    EULER_ANGLE_STATES: (APMEulerAngleStateT)[];
    ANGULAR_VELOCITIES: (APMAngularVelocityT)[];
    SPIN_STATES: (APMSpinStateT)[];
    INERTIAS: (APMInertiaT)[];
    MANEUVERS: (APMManeuverT)[];
    constructor(CCSDS_APM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number, COMMENT?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, QUATERNION_STATES?: (APMQuaternionStateT)[], EULER_ANGLE_STATES?: (APMEulerAngleStateT)[], ANGULAR_VELOCITIES?: (APMAngularVelocityT)[], SPIN_STATES?: (APMSpinStateT)[], INERTIAS?: (APMInertiaT)[], MANEUVERS?: (APMManeuverT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APM.d.ts.map