import * as flatbuffers from 'flatbuffers';
import { CDMObject, CDMObjectT } from './cdmobject.js';
import { PNM, PNMT } from './pnm.js';
import { refFrame } from './ref-frame.js';
import { screeningVolumeShape } from './screening-volume-shape.js';
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
    ccsdsCdmVers(): number;
    /**
     * The date the CDM message was created
     */
    creationDate(): string | null;
    creationDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The originator of the CDM message
     */
    originator(): string | null;
    originator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The intended recipient of the CDM message
     */
    messageFor(): string | null;
    messageFor(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A unique identifier for the CDM message
     */
    messageId(): string | null;
    messageId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of closest approach
     */
    tca(): string | null;
    tca(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The miss distance between the two objects
     */
    missDistance(): number;
    /**
     * The relative speed between the two objects
     */
    relativeSpeed(): number;
    /**
     * The relative position R component
     */
    relativePositionR(): number;
    /**
     * The relative position T component
     */
    relativePositionT(): number;
    /**
     * The relative position N component
     */
    relativePositionN(): number;
    /**
     * The relative velocity R component
     */
    relativeVelocityR(): number;
    /**
     * The relative velocity T component
     */
    relativeVelocityT(): number;
    /**
     * The relative velocity N component
     */
    relativeVelocityN(): number;
    /**
     * The start time of the screening period
     */
    startScreenPeriod(): string | null;
    startScreenPeriod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The end time of the screening period
     */
    stopScreenPeriod(): string | null;
    stopScreenPeriod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The reference frame for the screening volume
     */
    screenVolumeFrame(): refFrame;
    /**
     * The shape of the screening volume
     */
    screenVolumeShape(): screeningVolumeShape;
    /**
     * The X dimension of the screening volume
     */
    screenVolumeX(): number;
    /**
     * The Y dimension of the screening volume
     */
    screenVolumeY(): number;
    /**
     * The Z dimension of the screening volume
     */
    screenVolumeZ(): number;
    /**
     * The time the objects entered the screening volume
     */
    screenEntryTime(): string | null;
    screenEntryTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The time the objects exited the screening volume
     */
    screenExitTime(): string | null;
    screenExitTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The probability of collision between the two objects
     */
    collisionProbability(): number;
    /**
     * The method used to calculate the collision probability
     */
    collisionProbabilityMethod(): string | null;
    collisionProbabilityMethod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The first object in the CDM message
     */
    object1(obj?: CDMObject): CDMObject | null;
    /**
     * The second object in the CDM message
     */
    object2(obj?: CDMObject): CDMObject | null;
    /**
     * Data Source for the positional information for Object 1
     */
    object1Datasource(obj?: PNM): PNM | null;
    /**
     * Data Source for the positional information for Object 2
     */
    object2Datasource(obj?: PNM): PNM | null;
    static startCDM(builder: flatbuffers.Builder): void;
    static addCcsdsCdmVers(builder: flatbuffers.Builder, ccsdsCdmVers: number): void;
    static addCreationDate(builder: flatbuffers.Builder, creationDateOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, originatorOffset: flatbuffers.Offset): void;
    static addMessageFor(builder: flatbuffers.Builder, messageForOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, messageIdOffset: flatbuffers.Offset): void;
    static addTca(builder: flatbuffers.Builder, tcaOffset: flatbuffers.Offset): void;
    static addMissDistance(builder: flatbuffers.Builder, missDistance: number): void;
    static addRelativeSpeed(builder: flatbuffers.Builder, relativeSpeed: number): void;
    static addRelativePositionR(builder: flatbuffers.Builder, relativePositionR: number): void;
    static addRelativePositionT(builder: flatbuffers.Builder, relativePositionT: number): void;
    static addRelativePositionN(builder: flatbuffers.Builder, relativePositionN: number): void;
    static addRelativeVelocityR(builder: flatbuffers.Builder, relativeVelocityR: number): void;
    static addRelativeVelocityT(builder: flatbuffers.Builder, relativeVelocityT: number): void;
    static addRelativeVelocityN(builder: flatbuffers.Builder, relativeVelocityN: number): void;
    static addStartScreenPeriod(builder: flatbuffers.Builder, startScreenPeriodOffset: flatbuffers.Offset): void;
    static addStopScreenPeriod(builder: flatbuffers.Builder, stopScreenPeriodOffset: flatbuffers.Offset): void;
    static addScreenVolumeFrame(builder: flatbuffers.Builder, screenVolumeFrame: refFrame): void;
    static addScreenVolumeShape(builder: flatbuffers.Builder, screenVolumeShape: screeningVolumeShape): void;
    static addScreenVolumeX(builder: flatbuffers.Builder, screenVolumeX: number): void;
    static addScreenVolumeY(builder: flatbuffers.Builder, screenVolumeY: number): void;
    static addScreenVolumeZ(builder: flatbuffers.Builder, screenVolumeZ: number): void;
    static addScreenEntryTime(builder: flatbuffers.Builder, screenEntryTimeOffset: flatbuffers.Offset): void;
    static addScreenExitTime(builder: flatbuffers.Builder, screenExitTimeOffset: flatbuffers.Offset): void;
    static addCollisionProbability(builder: flatbuffers.Builder, collisionProbability: number): void;
    static addCollisionProbabilityMethod(builder: flatbuffers.Builder, collisionProbabilityMethodOffset: flatbuffers.Offset): void;
    static addObject1(builder: flatbuffers.Builder, object1Offset: flatbuffers.Offset): void;
    static addObject2(builder: flatbuffers.Builder, object2Offset: flatbuffers.Offset): void;
    static addObject1Datasource(builder: flatbuffers.Builder, object1DatasourceOffset: flatbuffers.Offset): void;
    static addObject2Datasource(builder: flatbuffers.Builder, object2DatasourceOffset: flatbuffers.Offset): void;
    static endCDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CDMT;
    unpackTo(_o: CDMT): void;
}
export declare class CDMT implements flatbuffers.IGeneratedObject {
    ccsdsCdmVers: number;
    creationDate: string | Uint8Array | null;
    originator: string | Uint8Array | null;
    messageFor: string | Uint8Array | null;
    messageId: string | Uint8Array | null;
    tca: string | Uint8Array | null;
    missDistance: number;
    relativeSpeed: number;
    relativePositionR: number;
    relativePositionT: number;
    relativePositionN: number;
    relativeVelocityR: number;
    relativeVelocityT: number;
    relativeVelocityN: number;
    startScreenPeriod: string | Uint8Array | null;
    stopScreenPeriod: string | Uint8Array | null;
    screenVolumeFrame: refFrame;
    screenVolumeShape: screeningVolumeShape;
    screenVolumeX: number;
    screenVolumeY: number;
    screenVolumeZ: number;
    screenEntryTime: string | Uint8Array | null;
    screenExitTime: string | Uint8Array | null;
    collisionProbability: number;
    collisionProbabilityMethod: string | Uint8Array | null;
    object1: CDMObjectT | null;
    object2: CDMObjectT | null;
    object1Datasource: PNMT | null;
    object2Datasource: PNMT | null;
    constructor(ccsdsCdmVers?: number, creationDate?: string | Uint8Array | null, originator?: string | Uint8Array | null, messageFor?: string | Uint8Array | null, messageId?: string | Uint8Array | null, tca?: string | Uint8Array | null, missDistance?: number, relativeSpeed?: number, relativePositionR?: number, relativePositionT?: number, relativePositionN?: number, relativeVelocityR?: number, relativeVelocityT?: number, relativeVelocityN?: number, startScreenPeriod?: string | Uint8Array | null, stopScreenPeriod?: string | Uint8Array | null, screenVolumeFrame?: refFrame, screenVolumeShape?: screeningVolumeShape, screenVolumeX?: number, screenVolumeY?: number, screenVolumeZ?: number, screenEntryTime?: string | Uint8Array | null, screenExitTime?: string | Uint8Array | null, collisionProbability?: number, collisionProbabilityMethod?: string | Uint8Array | null, object1?: CDMObjectT | null, object2?: CDMObjectT | null, object1Datasource?: PNMT | null, object2Datasource?: PNMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=cdm.d.ts.map