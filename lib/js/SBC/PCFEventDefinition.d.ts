import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { PCFExpression, PCFExpressionT } from './PCFExpression.js';
import { pcfEventAction } from './pcfEventAction.js';
import { pcfEventDirection } from './pcfEventDirection.js';
import { pcfEventKind } from './pcfEventKind.js';
/**
 * One event to locate inside the integration. A $PCF carries the list; a $PRW
 * execution request carries the same definitions beside the integrator settings,
 * and a located event comes back as a PRWEventRecord.
 */
export declare class PCFEventDefinition implements flatbuffers.IUnpackableObject<PCFEventDefinitionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFEventDefinition;
    static getRootAsPCFEventDefinition(bb: flatbuffers.ByteBuffer, obj?: PCFEventDefinition): PCFEventDefinition;
    static getSizePrefixedRootAsPCFEventDefinition(bb: flatbuffers.ByteBuffer, obj?: PCFEventDefinition): PCFEventDefinition;
    /**
     * The event function. Default UNSPECIFIED (refused).
     */
    KIND(): pcfEventKind;
    /**
     * Which zero crossings of the event function count. Default ANY.
     */
    DIRECTION(): pcfEventDirection;
    /**
     * What the integrator does at the event. Default RECORD.
     */
    ACTION(): pcfEventAction;
    /**
     * Tolerance on the located epoch, seconds; 0 also selects 1e-9. Default 1e-9.
     */
    TOLERANCE_SECONDS(): number;
    /**
     * STOP acts at this qualifying crossing (1 is the first). Default 1.
     */
    OCCURRENCE(): number;
    /**
     * TRUE_ANOMALY and ARGUMENT_OF_LATITUDE: the angle, radians. Default 0.
     */
    ANGLE_RAD(): number;
    /**
     * PLANE_CROSSING: the normal, in the request's axes; it need not be a unit
     * vector. Default absent (the pole of the axes).
     */
    PLANE_NORMAL(obj?: FRMVector3): FRMVector3 | null;
    /**
     * CLOSEST_APPROACH: the id of the input port that carries the second trajectory
     * as $OEM; "second_trajectory" is the port FFM declares. Default empty.
     */
    SECOND_TRAJECTORY_PORT(): string | null;
    SECOND_TRAJECTORY_PORT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EXPRESSION: the program. Default absent.
     */
    EXPRESSION(obj?: PCFExpression): PCFExpression | null;
    static startPCFEventDefinition(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: pcfEventKind): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: pcfEventDirection): void;
    static addAction(builder: flatbuffers.Builder, ACTION: pcfEventAction): void;
    static addToleranceSeconds(builder: flatbuffers.Builder, TOLERANCE_SECONDS: number): void;
    static addOccurrence(builder: flatbuffers.Builder, OCCURRENCE: number): void;
    static addAngleRad(builder: flatbuffers.Builder, ANGLE_RAD: number): void;
    static addPlaneNormal(builder: flatbuffers.Builder, PLANE_NORMALOffset: flatbuffers.Offset): void;
    static addSecondTrajectoryPort(builder: flatbuffers.Builder, SECOND_TRAJECTORY_PORTOffset: flatbuffers.Offset): void;
    static addExpression(builder: flatbuffers.Builder, EXPRESSIONOffset: flatbuffers.Offset): void;
    static endPCFEventDefinition(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCFEventDefinitionT;
    unpackTo(_o: PCFEventDefinitionT): void;
}
export declare class PCFEventDefinitionT implements flatbuffers.IGeneratedObject {
    KIND: pcfEventKind;
    DIRECTION: pcfEventDirection;
    ACTION: pcfEventAction;
    TOLERANCE_SECONDS: number;
    OCCURRENCE: number;
    ANGLE_RAD: number;
    PLANE_NORMAL: FRMVector3T | null;
    SECOND_TRAJECTORY_PORT: string | Uint8Array | null;
    EXPRESSION: PCFExpressionT | null;
    constructor(KIND?: pcfEventKind, DIRECTION?: pcfEventDirection, ACTION?: pcfEventAction, TOLERANCE_SECONDS?: number, OCCURRENCE?: number, ANGLE_RAD?: number, PLANE_NORMAL?: FRMVector3T | null, SECOND_TRAJECTORY_PORT?: string | Uint8Array | null, EXPRESSION?: PCFExpressionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFEventDefinition.d.ts.map