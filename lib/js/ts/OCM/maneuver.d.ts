import * as flatbuffers from 'flatbuffers';
export declare class Maneuver implements flatbuffers.IUnpackableObject<ManeuverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Maneuver;
    static getRootAsManeuver(bb: flatbuffers.ByteBuffer, obj?: Maneuver): Maneuver;
    static getSizePrefixedRootAsManeuver(bb: flatbuffers.ByteBuffer, obj?: Maneuver): Maneuver;
    /**
     * Unique identifier for the maneuver.
     */
    manId(): string | null;
    manId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Basis of the maneuver plan (e.g., planned, predicted, estimated).
     */
    manBasis(): string | null;
    manBasis(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the maneuver device.
     */
    manDeviceId(): string | null;
    manDeviceId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the previous maneuver.
     */
    manPrevId(): string | null;
    manPrevId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Purpose of the maneuver.
     */
    manPurpose(): string | null;
    manPurpose(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the maneuver data.
     */
    manRefFrame(): string | null;
    manRefFrame(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the maneuver reference frame.
     */
    manFrameEpoch(): string | null;
    manFrameEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of maneuver (e.g., IMPULSIVE, FINITE).
     */
    manType(): string | null;
    manType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start epoch of the maneuver.
     */
    manEpochStart(): string | null;
    manEpochStart(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration of the maneuver.
     */
    manDuration(): number;
    /**
     * Units for the maneuver data values.
     */
    manUnits(index: number): string;
    manUnits(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manUnitsLength(): number;
    /**
     * Data associated with the maneuver.
     */
    data(index: number): string;
    data(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dataLength(): number;
    /**
     * Comments related to the maneuver.
     */
    manComment(index: number): string;
    manComment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manCommentLength(): number;
    static startManeuver(builder: flatbuffers.Builder): void;
    static addManId(builder: flatbuffers.Builder, manIdOffset: flatbuffers.Offset): void;
    static addManBasis(builder: flatbuffers.Builder, manBasisOffset: flatbuffers.Offset): void;
    static addManDeviceId(builder: flatbuffers.Builder, manDeviceIdOffset: flatbuffers.Offset): void;
    static addManPrevId(builder: flatbuffers.Builder, manPrevIdOffset: flatbuffers.Offset): void;
    static addManPurpose(builder: flatbuffers.Builder, manPurposeOffset: flatbuffers.Offset): void;
    static addManRefFrame(builder: flatbuffers.Builder, manRefFrameOffset: flatbuffers.Offset): void;
    static addManFrameEpoch(builder: flatbuffers.Builder, manFrameEpochOffset: flatbuffers.Offset): void;
    static addManType(builder: flatbuffers.Builder, manTypeOffset: flatbuffers.Offset): void;
    static addManEpochStart(builder: flatbuffers.Builder, manEpochStartOffset: flatbuffers.Offset): void;
    static addManDuration(builder: flatbuffers.Builder, manDuration: number): void;
    static addManUnits(builder: flatbuffers.Builder, manUnitsOffset: flatbuffers.Offset): void;
    static createManUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManComment(builder: flatbuffers.Builder, manCommentOffset: flatbuffers.Offset): void;
    static createManCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static endManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createManeuver(builder: flatbuffers.Builder, manIdOffset: flatbuffers.Offset, manBasisOffset: flatbuffers.Offset, manDeviceIdOffset: flatbuffers.Offset, manPrevIdOffset: flatbuffers.Offset, manPurposeOffset: flatbuffers.Offset, manRefFrameOffset: flatbuffers.Offset, manFrameEpochOffset: flatbuffers.Offset, manTypeOffset: flatbuffers.Offset, manEpochStartOffset: flatbuffers.Offset, manDuration: number, manUnitsOffset: flatbuffers.Offset, dataOffset: flatbuffers.Offset, manCommentOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ManeuverT;
    unpackTo(_o: ManeuverT): void;
}
export declare class ManeuverT implements flatbuffers.IGeneratedObject {
    manId: string | Uint8Array | null;
    manBasis: string | Uint8Array | null;
    manDeviceId: string | Uint8Array | null;
    manPrevId: string | Uint8Array | null;
    manPurpose: string | Uint8Array | null;
    manRefFrame: string | Uint8Array | null;
    manFrameEpoch: string | Uint8Array | null;
    manType: string | Uint8Array | null;
    manEpochStart: string | Uint8Array | null;
    manDuration: number;
    manUnits: (string)[];
    data: (string)[];
    manComment: (string)[];
    constructor(manId?: string | Uint8Array | null, manBasis?: string | Uint8Array | null, manDeviceId?: string | Uint8Array | null, manPrevId?: string | Uint8Array | null, manPurpose?: string | Uint8Array | null, manRefFrame?: string | Uint8Array | null, manFrameEpoch?: string | Uint8Array | null, manType?: string | Uint8Array | null, manEpochStart?: string | Uint8Array | null, manDuration?: number, manUnits?: (string)[], data?: (string)[], manComment?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=maneuver.d.ts.map