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
    MAN_ID(): string | null;
    MAN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Basis of the maneuver plan (e.g., planned, predicted, estimated).
     */
    MAN_BASIS(): string | null;
    MAN_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the maneuver device.
     */
    MAN_DEVICE_ID(): string | null;
    MAN_DEVICE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the previous maneuver.
     */
    MAN_PREV_ID(): string | null;
    MAN_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Purpose of the maneuver.
     */
    MAN_PURPOSE(): string | null;
    MAN_PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for the maneuver data.
     */
    MAN_REF_FRAME(): string | null;
    MAN_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the maneuver reference frame.
     */
    MAN_FRAME_EPOCH(): string | null;
    MAN_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of maneuver (e.g., IMPULSIVE, FINITE).
     */
    MAN_TYPE(): string | null;
    MAN_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start epoch of the maneuver.
     */
    MAN_EPOCH_START(): string | null;
    MAN_EPOCH_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration of the maneuver.
     */
    MAN_DURATION(): number;
    /**
     * Units for the maneuver data values.
     */
    MAN_UNITS(index: number): string;
    MAN_UNITS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manUnitsLength(): number;
    /**
     * Data associated with the maneuver.
     */
    DATA(index: number): string;
    DATA(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    dataLength(): number;
    /**
     * Comments related to the maneuver.
     */
    MAN_COMMENT(index: number): string;
    MAN_COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manCommentLength(): number;
    static startManeuver(builder: flatbuffers.Builder): void;
    static addManId(builder: flatbuffers.Builder, MAN_IDOffset: flatbuffers.Offset): void;
    static addManBasis(builder: flatbuffers.Builder, MAN_BASISOffset: flatbuffers.Offset): void;
    static addManDeviceId(builder: flatbuffers.Builder, MAN_DEVICE_IDOffset: flatbuffers.Offset): void;
    static addManPrevId(builder: flatbuffers.Builder, MAN_PREV_IDOffset: flatbuffers.Offset): void;
    static addManPurpose(builder: flatbuffers.Builder, MAN_PURPOSEOffset: flatbuffers.Offset): void;
    static addManRefFrame(builder: flatbuffers.Builder, MAN_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addManFrameEpoch(builder: flatbuffers.Builder, MAN_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addManType(builder: flatbuffers.Builder, MAN_TYPEOffset: flatbuffers.Offset): void;
    static addManEpochStart(builder: flatbuffers.Builder, MAN_EPOCH_STARTOffset: flatbuffers.Offset): void;
    static addManDuration(builder: flatbuffers.Builder, MAN_DURATION: number): void;
    static addManUnits(builder: flatbuffers.Builder, MAN_UNITSOffset: flatbuffers.Offset): void;
    static createManUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManComment(builder: flatbuffers.Builder, MAN_COMMENTOffset: flatbuffers.Offset): void;
    static createManCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static endManeuver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createManeuver(builder: flatbuffers.Builder, MAN_IDOffset: flatbuffers.Offset, MAN_BASISOffset: flatbuffers.Offset, MAN_DEVICE_IDOffset: flatbuffers.Offset, MAN_PREV_IDOffset: flatbuffers.Offset, MAN_PURPOSEOffset: flatbuffers.Offset, MAN_REF_FRAMEOffset: flatbuffers.Offset, MAN_FRAME_EPOCHOffset: flatbuffers.Offset, MAN_TYPEOffset: flatbuffers.Offset, MAN_EPOCH_STARTOffset: flatbuffers.Offset, MAN_DURATION: number, MAN_UNITSOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, MAN_COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ManeuverT;
    unpackTo(_o: ManeuverT): void;
}
export declare class ManeuverT implements flatbuffers.IGeneratedObject {
    MAN_ID: string | Uint8Array | null;
    MAN_BASIS: string | Uint8Array | null;
    MAN_DEVICE_ID: string | Uint8Array | null;
    MAN_PREV_ID: string | Uint8Array | null;
    MAN_PURPOSE: string | Uint8Array | null;
    MAN_REF_FRAME: string | Uint8Array | null;
    MAN_FRAME_EPOCH: string | Uint8Array | null;
    MAN_TYPE: string | Uint8Array | null;
    MAN_EPOCH_START: string | Uint8Array | null;
    MAN_DURATION: number;
    MAN_UNITS: (string)[];
    DATA: (string)[];
    MAN_COMMENT: (string)[];
    constructor(MAN_ID?: string | Uint8Array | null, MAN_BASIS?: string | Uint8Array | null, MAN_DEVICE_ID?: string | Uint8Array | null, MAN_PREV_ID?: string | Uint8Array | null, MAN_PURPOSE?: string | Uint8Array | null, MAN_REF_FRAME?: string | Uint8Array | null, MAN_FRAME_EPOCH?: string | Uint8Array | null, MAN_TYPE?: string | Uint8Array | null, MAN_EPOCH_START?: string | Uint8Array | null, MAN_DURATION?: number, MAN_UNITS?: (string)[], DATA?: (string)[], MAN_COMMENT?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Maneuver.d.ts.map