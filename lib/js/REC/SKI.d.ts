import * as flatbuffers from 'flatbuffers';
import { imageType } from './imageType.js';
/**
 * Sky Imagery
 */
export declare class SKI implements flatbuffers.IUnpackableObject<SKIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKI;
    static getRootAsSKI(bb: flatbuffers.ByteBuffer, obj?: SKI): SKI;
    static getSizePrefixedRootAsSKI(bb: flatbuffers.ByteBuffer, obj?: SKI): SKI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * Sensor identifier
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor geodetic latitude (degrees)
     */
    SENLAT(): number;
    /**
     * Sensor geodetic longitude (degrees)
     */
    SENLON(): number;
    /**
     * Sensor altitude (km)
     */
    SENALT(): number;
    /**
     * Sensor ECEF X position (km)
     */
    SENX(): number;
    /**
     * Sensor ECEF Y position (km)
     */
    SENY(): number;
    /**
     * Sensor ECEF Z position (km)
     */
    SENZ(): number;
    /**
     * Sensor quaternion (scalar-last: q1, q2, q3, q0)
     */
    SEN_QUAT(index: number): number | null;
    senQuatLength(): number;
    senQuatArray(): Float64Array | null;
    /**
     * Sensor quaternion rate
     */
    SEN_QUAT_DOT(index: number): number | null;
    senQuatDotLength(): number;
    senQuatDotArray(): Float64Array | null;
    /**
     * Image type
     */
    IMAGE_TYPE(): imageType;
    /**
     * Exposure start time (ISO 8601)
     */
    EXP_START_TIME(): string | null;
    EXP_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Exposure end time (ISO 8601)
     */
    EXP_END_TIME(): string | null;
    EXP_END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image source information
     */
    IMAGE_SOURCE_INFO(): string | null;
    IMAGE_SOURCE_INFO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Top-left corner start azimuth (degrees)
     */
    TOP_LEFT_START_AZ(): number;
    /**
     * Top-left corner start elevation (degrees)
     */
    TOP_LEFT_START_EL(): number;
    /**
     * Top-left corner stop azimuth (degrees)
     */
    TOP_LEFT_STOP_AZ(): number;
    /**
     * Top-left corner stop elevation (degrees)
     */
    TOP_LEFT_STOP_EL(): number;
    /**
     * Image set identifier
     */
    IMAGE_SET_ID(): string | null;
    IMAGE_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of images in set
     */
    IMAGE_SET_LENGTH(): number;
    /**
     * Sequence number within set
     */
    SEQUENCE_ID(): number;
    /**
     * Frame field-of-view width (degrees)
     */
    FRAME_FOVWIDTH(): number;
    /**
     * Frame field-of-view height (degrees)
     */
    FRAME_FOVHEIGHT(): number;
    /**
     * Pixel field-of-view width (arcseconds)
     */
    PIXEL_FOVWIDTH(): number;
    /**
     * Pixel field-of-view height (arcseconds)
     */
    PIXEL_FOVHEIGHT(): number;
    /**
     * Frame width (pixels)
     */
    FRAME_WIDTH_PIXELS(): number;
    /**
     * Frame height (pixels)
     */
    FRAME_HEIGHT_PIXELS(): number;
    /**
     * Pixel bit depth
     */
    PIXEL_BIT_DEPTH(): number;
    /**
     * Annotation key reference
     */
    ANNOTATION_KEY(): string | null;
    ANNOTATION_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Calibration key reference
     */
    CALIBRATION_KEY(): string | null;
    CALIBRATION_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image filename
     */
    FILENAME(): string | null;
    FILENAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File size (bytes)
     */
    FILESIZE(): bigint;
    /**
     * File checksum value
     */
    CHECKSUM_VALUE(): string | null;
    CHECKSUM_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated EO observation references
     */
    EO_OBSERVATIONS(index: number): string;
    EO_OBSERVATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    eoObservationsLength(): number;
    static startSKI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSenlat(builder: flatbuffers.Builder, SENLAT: number): void;
    static addSenlon(builder: flatbuffers.Builder, SENLON: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addSenx(builder: flatbuffers.Builder, SENX: number): void;
    static addSeny(builder: flatbuffers.Builder, SENY: number): void;
    static addSenz(builder: flatbuffers.Builder, SENZ: number): void;
    static addSenQuat(builder: flatbuffers.Builder, SEN_QUATOffset: flatbuffers.Offset): void;
    static createSenQuatVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSenQuatVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSenQuatVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSenQuatDot(builder: flatbuffers.Builder, SEN_QUAT_DOTOffset: flatbuffers.Offset): void;
    static createSenQuatDotVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSenQuatDotVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSenQuatDotVector(builder: flatbuffers.Builder, numElems: number): void;
    static addImageType(builder: flatbuffers.Builder, IMAGE_TYPE: imageType): void;
    static addExpStartTime(builder: flatbuffers.Builder, EXP_START_TIMEOffset: flatbuffers.Offset): void;
    static addExpEndTime(builder: flatbuffers.Builder, EXP_END_TIMEOffset: flatbuffers.Offset): void;
    static addImageSourceInfo(builder: flatbuffers.Builder, IMAGE_SOURCE_INFOOffset: flatbuffers.Offset): void;
    static addTopLeftStartAz(builder: flatbuffers.Builder, TOP_LEFT_START_AZ: number): void;
    static addTopLeftStartEl(builder: flatbuffers.Builder, TOP_LEFT_START_EL: number): void;
    static addTopLeftStopAz(builder: flatbuffers.Builder, TOP_LEFT_STOP_AZ: number): void;
    static addTopLeftStopEl(builder: flatbuffers.Builder, TOP_LEFT_STOP_EL: number): void;
    static addImageSetId(builder: flatbuffers.Builder, IMAGE_SET_IDOffset: flatbuffers.Offset): void;
    static addImageSetLength(builder: flatbuffers.Builder, IMAGE_SET_LENGTH: number): void;
    static addSequenceId(builder: flatbuffers.Builder, SEQUENCE_ID: number): void;
    static addFrameFovwidth(builder: flatbuffers.Builder, FRAME_FOVWIDTH: number): void;
    static addFrameFovheight(builder: flatbuffers.Builder, FRAME_FOVHEIGHT: number): void;
    static addPixelFovwidth(builder: flatbuffers.Builder, PIXEL_FOVWIDTH: number): void;
    static addPixelFovheight(builder: flatbuffers.Builder, PIXEL_FOVHEIGHT: number): void;
    static addFrameWidthPixels(builder: flatbuffers.Builder, FRAME_WIDTH_PIXELS: number): void;
    static addFrameHeightPixels(builder: flatbuffers.Builder, FRAME_HEIGHT_PIXELS: number): void;
    static addPixelBitDepth(builder: flatbuffers.Builder, PIXEL_BIT_DEPTH: number): void;
    static addAnnotationKey(builder: flatbuffers.Builder, ANNOTATION_KEYOffset: flatbuffers.Offset): void;
    static addCalibrationKey(builder: flatbuffers.Builder, CALIBRATION_KEYOffset: flatbuffers.Offset): void;
    static addFilename(builder: flatbuffers.Builder, FILENAMEOffset: flatbuffers.Offset): void;
    static addFilesize(builder: flatbuffers.Builder, FILESIZE: bigint): void;
    static addChecksumValue(builder: flatbuffers.Builder, CHECKSUM_VALUEOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEoObservations(builder: flatbuffers.Builder, EO_OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createEoObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEoObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSKI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSKIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSKIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSKI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SAT_NO: number, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, SENLAT: number, SENLON: number, SENALT: number, SENX: number, SENY: number, SENZ: number, SEN_QUATOffset: flatbuffers.Offset, SEN_QUAT_DOTOffset: flatbuffers.Offset, IMAGE_TYPE: imageType, EXP_START_TIMEOffset: flatbuffers.Offset, EXP_END_TIMEOffset: flatbuffers.Offset, IMAGE_SOURCE_INFOOffset: flatbuffers.Offset, TOP_LEFT_START_AZ: number, TOP_LEFT_START_EL: number, TOP_LEFT_STOP_AZ: number, TOP_LEFT_STOP_EL: number, IMAGE_SET_IDOffset: flatbuffers.Offset, IMAGE_SET_LENGTH: number, SEQUENCE_ID: number, FRAME_FOVWIDTH: number, FRAME_FOVHEIGHT: number, PIXEL_FOVWIDTH: number, PIXEL_FOVHEIGHT: number, FRAME_WIDTH_PIXELS: number, FRAME_HEIGHT_PIXELS: number, PIXEL_BIT_DEPTH: number, ANNOTATION_KEYOffset: flatbuffers.Offset, CALIBRATION_KEYOffset: flatbuffers.Offset, FILENAMEOffset: flatbuffers.Offset, FILESIZE: bigint, CHECKSUM_VALUEOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, EO_OBSERVATIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SKIT;
    unpackTo(_o: SKIT): void;
}
export declare class SKIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SAT_NO: number;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    SENLAT: number;
    SENLON: number;
    SENALT: number;
    SENX: number;
    SENY: number;
    SENZ: number;
    SEN_QUAT: (number)[];
    SEN_QUAT_DOT: (number)[];
    IMAGE_TYPE: imageType;
    EXP_START_TIME: string | Uint8Array | null;
    EXP_END_TIME: string | Uint8Array | null;
    IMAGE_SOURCE_INFO: string | Uint8Array | null;
    TOP_LEFT_START_AZ: number;
    TOP_LEFT_START_EL: number;
    TOP_LEFT_STOP_AZ: number;
    TOP_LEFT_STOP_EL: number;
    IMAGE_SET_ID: string | Uint8Array | null;
    IMAGE_SET_LENGTH: number;
    SEQUENCE_ID: number;
    FRAME_FOVWIDTH: number;
    FRAME_FOVHEIGHT: number;
    PIXEL_FOVWIDTH: number;
    PIXEL_FOVHEIGHT: number;
    FRAME_WIDTH_PIXELS: number;
    FRAME_HEIGHT_PIXELS: number;
    PIXEL_BIT_DEPTH: number;
    ANNOTATION_KEY: string | Uint8Array | null;
    CALIBRATION_KEY: string | Uint8Array | null;
    FILENAME: string | Uint8Array | null;
    FILESIZE: bigint;
    CHECKSUM_VALUE: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    TAGS: (string)[];
    DESCRIPTION: string | Uint8Array | null;
    EO_OBSERVATIONS: (string)[];
    constructor(ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, SAT_NO?: number, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, SENLAT?: number, SENLON?: number, SENALT?: number, SENX?: number, SENY?: number, SENZ?: number, SEN_QUAT?: (number)[], SEN_QUAT_DOT?: (number)[], IMAGE_TYPE?: imageType, EXP_START_TIME?: string | Uint8Array | null, EXP_END_TIME?: string | Uint8Array | null, IMAGE_SOURCE_INFO?: string | Uint8Array | null, TOP_LEFT_START_AZ?: number, TOP_LEFT_START_EL?: number, TOP_LEFT_STOP_AZ?: number, TOP_LEFT_STOP_EL?: number, IMAGE_SET_ID?: string | Uint8Array | null, IMAGE_SET_LENGTH?: number, SEQUENCE_ID?: number, FRAME_FOVWIDTH?: number, FRAME_FOVHEIGHT?: number, PIXEL_FOVWIDTH?: number, PIXEL_FOVHEIGHT?: number, FRAME_WIDTH_PIXELS?: number, FRAME_HEIGHT_PIXELS?: number, PIXEL_BIT_DEPTH?: number, ANNOTATION_KEY?: string | Uint8Array | null, CALIBRATION_KEY?: string | Uint8Array | null, FILENAME?: string | Uint8Array | null, FILESIZE?: bigint, CHECKSUM_VALUE?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, TAGS?: (string)[], DESCRIPTION?: string | Uint8Array | null, EO_OBSERVATIONS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKI.d.ts.map