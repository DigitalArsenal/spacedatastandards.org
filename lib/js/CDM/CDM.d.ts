import * as flatbuffers from 'flatbuffers';
import { CDMObject, CDMObjectT } from './CDMObject.js';
import { PNM, PNMT } from './PNM.js';
import { objectCenteredReferenceFrame } from './objectCenteredReferenceFrame.js';
import { screeningVolumeShape } from './screeningVolumeShape.js';
/**
 * Conjunction Data Message
 */
export declare class CDM implements flatbuffers.IUnpackableObject<CDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CDM;
    static getRootAsCDM(bb: flatbuffers.ByteBuffer, obj?: CDM): CDM;
    static getSizePrefixedRootAsCDM(bb: flatbuffers.ByteBuffer, obj?: CDM): CDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The version of the CCSDS CDM standard used
     */
    CCSDS_CDM_VERS(): number;
    /**
     * The date the CDM message was created
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The originator of the CDM message
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The intended recipient of the CDM message
     */
    MESSAGE_FOR(): string | null;
    MESSAGE_FOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A unique identifier for the CDM message
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of closest approach
     */
    TCA(): string | null;
    TCA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The miss distance between the two objects
     */
    MISS_DISTANCE(): number;
    /**
     * The relative speed between the two objects
     */
    RELATIVE_SPEED(): number;
    /**
     * The relative position R component
     */
    RELATIVE_POSITION_R(): number;
    /**
     * The relative position T component
     */
    RELATIVE_POSITION_T(): number;
    /**
     * The relative position N component
     */
    RELATIVE_POSITION_N(): number;
    /**
     * The relative velocity R component
     */
    RELATIVE_VELOCITY_R(): number;
    /**
     * The relative velocity T component
     */
    RELATIVE_VELOCITY_T(): number;
    /**
     * The relative velocity N component
     */
    RELATIVE_VELOCITY_N(): number;
    /**
     * The start time of the screening period
     */
    START_SCREEN_PERIOD(): string | null;
    START_SCREEN_PERIOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The end time of the screening period
     */
    STOP_SCREEN_PERIOD(): string | null;
    STOP_SCREEN_PERIOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The reference frame for the screening volume
     */
    SCREEN_VOLUME_FRAME(): objectCenteredReferenceFrame;
    /**
     * The shape of the screening volume
     */
    SCREEN_VOLUME_SHAPE(): screeningVolumeShape;
    /**
     * The X dimension of the screening volume
     */
    SCREEN_VOLUME_X(): number;
    /**
     * The Y dimension of the screening volume
     */
    SCREEN_VOLUME_Y(): number;
    /**
     * The Z dimension of the screening volume
     */
    SCREEN_VOLUME_Z(): number;
    /**
     * The time the objects entered the screening volume
     */
    SCREEN_ENTRY_TIME(): string | null;
    SCREEN_ENTRY_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The time the objects exited the screening volume
     */
    SCREEN_EXIT_TIME(): string | null;
    SCREEN_EXIT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The probability of collision between the two objects
     */
    COLLISION_PROBABILITY(): number;
    /**
     * The method used to calculate the collision probability
     */
    COLLISION_PROBABILITY_METHOD(): string | null;
    COLLISION_PROBABILITY_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The first object in the CDM message
     */
    OBJECT1(obj?: CDMObject): CDMObject | null;
    /**
     * The second object in the CDM message
     */
    OBJECT2(obj?: CDMObject): CDMObject | null;
    /**
     * Data Source for the positional information for Object 1
     */
    OBJECT1_DATASOURCE(obj?: PNM): PNM | null;
    /**
     * Data Source for the positional information for Object 2
     */
    OBJECT2_DATASOURCE(obj?: PNM): PNM | null;
    static startCDM(builder: flatbuffers.Builder): void;
    static addCcsdsCdmVers(builder: flatbuffers.Builder, CCSDS_CDM_VERS: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addMessageFor(builder: flatbuffers.Builder, MESSAGE_FOROffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addTca(builder: flatbuffers.Builder, TCAOffset: flatbuffers.Offset): void;
    static addMissDistance(builder: flatbuffers.Builder, MISS_DISTANCE: number): void;
    static addRelativeSpeed(builder: flatbuffers.Builder, RELATIVE_SPEED: number): void;
    static addRelativePositionR(builder: flatbuffers.Builder, RELATIVE_POSITION_R: number): void;
    static addRelativePositionT(builder: flatbuffers.Builder, RELATIVE_POSITION_T: number): void;
    static addRelativePositionN(builder: flatbuffers.Builder, RELATIVE_POSITION_N: number): void;
    static addRelativeVelocityR(builder: flatbuffers.Builder, RELATIVE_VELOCITY_R: number): void;
    static addRelativeVelocityT(builder: flatbuffers.Builder, RELATIVE_VELOCITY_T: number): void;
    static addRelativeVelocityN(builder: flatbuffers.Builder, RELATIVE_VELOCITY_N: number): void;
    static addStartScreenPeriod(builder: flatbuffers.Builder, START_SCREEN_PERIODOffset: flatbuffers.Offset): void;
    static addStopScreenPeriod(builder: flatbuffers.Builder, STOP_SCREEN_PERIODOffset: flatbuffers.Offset): void;
    static addScreenVolumeFrame(builder: flatbuffers.Builder, SCREEN_VOLUME_FRAME: objectCenteredReferenceFrame): void;
    static addScreenVolumeShape(builder: flatbuffers.Builder, SCREEN_VOLUME_SHAPE: screeningVolumeShape): void;
    static addScreenVolumeX(builder: flatbuffers.Builder, SCREEN_VOLUME_X: number): void;
    static addScreenVolumeY(builder: flatbuffers.Builder, SCREEN_VOLUME_Y: number): void;
    static addScreenVolumeZ(builder: flatbuffers.Builder, SCREEN_VOLUME_Z: number): void;
    static addScreenEntryTime(builder: flatbuffers.Builder, SCREEN_ENTRY_TIMEOffset: flatbuffers.Offset): void;
    static addScreenExitTime(builder: flatbuffers.Builder, SCREEN_EXIT_TIMEOffset: flatbuffers.Offset): void;
    static addCollisionProbability(builder: flatbuffers.Builder, COLLISION_PROBABILITY: number): void;
    static addCollisionProbabilityMethod(builder: flatbuffers.Builder, COLLISION_PROBABILITY_METHODOffset: flatbuffers.Offset): void;
    static addObject1(builder: flatbuffers.Builder, OBJECT1Offset: flatbuffers.Offset): void;
    static addObject2(builder: flatbuffers.Builder, OBJECT2Offset: flatbuffers.Offset): void;
    static addObject1Datasource(builder: flatbuffers.Builder, OBJECT1_DATASOURCEOffset: flatbuffers.Offset): void;
    static addObject2Datasource(builder: flatbuffers.Builder, OBJECT2_DATASOURCEOffset: flatbuffers.Offset): void;
    static endCDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CDMT;
    unpackTo(_o: CDMT): void;
}
export declare class CDMT implements flatbuffers.IGeneratedObject {
    CCSDS_CDM_VERS: number;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    MESSAGE_FOR: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    TCA: string | Uint8Array | null;
    MISS_DISTANCE: number;
    RELATIVE_SPEED: number;
    RELATIVE_POSITION_R: number;
    RELATIVE_POSITION_T: number;
    RELATIVE_POSITION_N: number;
    RELATIVE_VELOCITY_R: number;
    RELATIVE_VELOCITY_T: number;
    RELATIVE_VELOCITY_N: number;
    START_SCREEN_PERIOD: string | Uint8Array | null;
    STOP_SCREEN_PERIOD: string | Uint8Array | null;
    SCREEN_VOLUME_FRAME: objectCenteredReferenceFrame;
    SCREEN_VOLUME_SHAPE: screeningVolumeShape;
    SCREEN_VOLUME_X: number;
    SCREEN_VOLUME_Y: number;
    SCREEN_VOLUME_Z: number;
    SCREEN_ENTRY_TIME: string | Uint8Array | null;
    SCREEN_EXIT_TIME: string | Uint8Array | null;
    COLLISION_PROBABILITY: number;
    COLLISION_PROBABILITY_METHOD: string | Uint8Array | null;
    OBJECT1: CDMObjectT | null;
    OBJECT2: CDMObjectT | null;
    OBJECT1_DATASOURCE: PNMT | null;
    OBJECT2_DATASOURCE: PNMT | null;
    constructor(CCSDS_CDM_VERS?: number, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, MESSAGE_FOR?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null, TCA?: string | Uint8Array | null, MISS_DISTANCE?: number, RELATIVE_SPEED?: number, RELATIVE_POSITION_R?: number, RELATIVE_POSITION_T?: number, RELATIVE_POSITION_N?: number, RELATIVE_VELOCITY_R?: number, RELATIVE_VELOCITY_T?: number, RELATIVE_VELOCITY_N?: number, START_SCREEN_PERIOD?: string | Uint8Array | null, STOP_SCREEN_PERIOD?: string | Uint8Array | null, SCREEN_VOLUME_FRAME?: objectCenteredReferenceFrame, SCREEN_VOLUME_SHAPE?: screeningVolumeShape, SCREEN_VOLUME_X?: number, SCREEN_VOLUME_Y?: number, SCREEN_VOLUME_Z?: number, SCREEN_ENTRY_TIME?: string | Uint8Array | null, SCREEN_EXIT_TIME?: string | Uint8Array | null, COLLISION_PROBABILITY?: number, COLLISION_PROBABILITY_METHOD?: string | Uint8Array | null, OBJECT1?: CDMObjectT | null, OBJECT2?: CDMObjectT | null, OBJECT1_DATASOURCE?: PNMT | null, OBJECT2_DATASOURCE?: PNMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CDM.d.ts.map