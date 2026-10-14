import * as flatbuffers from 'flatbuffers';
import { NCDCode500Header, NCDCode500HeaderT } from './NCDCode500Header.js';
import { NCDSP3Header, NCDSP3HeaderT } from './NCDSP3Header.js';
import { NCDScenarioEpochContainer, NCDScenarioEpochContainerT } from './NCDScenarioEpochContainer.js';
import { NCDSegmentDescriptor, NCDSegmentDescriptorT } from './NCDSegmentDescriptor.js';
import { ncdContainerFormat } from './ncdContainerFormat.js';
/**
 * Native Container Descriptor.
 *
 * The file-level facts of an ephemeris, attitude or tracking container that
 * are NOT properties of the messages inside it. $OEM, $AEM and $TDM carry the
 * states, attitudes and observations; none of them can carry the internal
 * file name, the comment area, the segment address ranges, the header accuracy
 * block or the interpolation order the source declared, because those describe
 * the CONTAINER. Without them a read-then-write cycle silently invents header
 * values, and a segmented binary file cannot be reproduced at all.
 *
 * ONE record covers every container class rather than one record per format:
 * the file-level facts are the same kind of fact in each, and the
 * format-specific blocks are optional sub-tables selected by FORMAT. Only the
 * block matching FORMAT is populated.
 */
export declare class NCD implements flatbuffers.IUnpackableObject<NCDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NCD;
    static getRootAsNCD(bb: flatbuffers.ByteBuffer, obj?: NCD): NCD;
    static getSizePrefixedRootAsNCD(bb: flatbuffers.ByteBuffer, obj?: NCD): NCD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Container format class.
     */
    FORMAT(): ncdContainerFormat;
    /**
     * Format name when FORMAT is PROVIDER_DEFINED. Empty otherwise.
     */
    PROVIDER_DEFINED_FORMAT_NAME(): string | null;
    PROVIDER_DEFINED_FORMAT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the container format as declared by the file itself.
     */
    FORMAT_VERSION(): string | null;
    FORMAT_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producing system or organization as recorded IN THE FILE.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creation date recorded in the file, ISO 8601.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator recorded in the file.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Container-internal file name, which is stored inside the file and is
     * independent of the name on disk.
     */
    INTERNAL_FILE_NAME(): string | null;
    INTERNAL_FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text comment area carried inside the container, one entry per line,
     * in file order.
     */
    COMMENT_AREA(index: number): string;
    COMMENT_AREA(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentAreaLength(): number;
    /**
     * Reference frame name as the container itself spells it, before any
     * mapping onto $RFM.
     */
    NATIVE_FRAME_NAME(): string | null;
    NATIVE_FRAME_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Integer reference frame code as the container stores it.
     */
    NATIVE_FRAME_ID(): number;
    /**
     * Time system as the container itself spells it, before any mapping onto
     * the ratified time-scale vocabulary.
     */
    NATIVE_TIME_SYSTEM(): string | null;
    NATIVE_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Descriptors of the container's segments, in file order. Empty for a
     * single-span container.
     */
    SEGMENTS(index: number, obj?: NCDSegmentDescriptor): NCDSegmentDescriptor | null;
    segmentsLength(): number;
    /**
     * Header block when FORMAT is SP3_C or SP3_D.
     */
    SP3_HEADER(obj?: NCDSP3Header): NCDSP3Header | null;
    /**
     * Parameters when FORMAT is SCENARIO_EPOCH_EPHEMERIS_TEXT or
     * SCENARIO_EPOCH_ATTITUDE_TEXT.
     */
    SCENARIO_CONTAINER(obj?: NCDScenarioEpochContainer): NCDScenarioEpochContainer | null;
    /**
     * Header words when FORMAT is CODE_500.
     */
    CODE_500_HEADER(obj?: NCDCode500Header): NCDCode500Header | null;
    /**
     * Total coverage start across all segments, ISO 8601.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total coverage stop across all segments, ISO 8601.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Length of the described container in bytes.
     */
    SOURCE_BYTE_LENGTH(): bigint;
    /**
     * SHA-256 of the described container's exact bytes, lowercase hex. This is
     * what makes the descriptor checkable: a consumer can prove the descriptor
     * belongs to the file it holds.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the described container when it is addressed by
     * content rather than by path.
     */
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNCD(builder: flatbuffers.Builder): void;
    static addFormat(builder: flatbuffers.Builder, FORMAT: ncdContainerFormat): void;
    static addProviderDefinedFormatName(builder: flatbuffers.Builder, PROVIDER_DEFINED_FORMAT_NAMEOffset: flatbuffers.Offset): void;
    static addFormatVersion(builder: flatbuffers.Builder, FORMAT_VERSIONOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addInternalFileName(builder: flatbuffers.Builder, INTERNAL_FILE_NAMEOffset: flatbuffers.Offset): void;
    static addCommentArea(builder: flatbuffers.Builder, COMMENT_AREAOffset: flatbuffers.Offset): void;
    static createCommentAreaVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentAreaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNativeFrameName(builder: flatbuffers.Builder, NATIVE_FRAME_NAMEOffset: flatbuffers.Offset): void;
    static addNativeFrameId(builder: flatbuffers.Builder, NATIVE_FRAME_ID: number): void;
    static addNativeTimeSystem(builder: flatbuffers.Builder, NATIVE_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSp3Header(builder: flatbuffers.Builder, SP3_HEADEROffset: flatbuffers.Offset): void;
    static addScenarioContainer(builder: flatbuffers.Builder, SCENARIO_CONTAINEROffset: flatbuffers.Offset): void;
    static addCode500Header(builder: flatbuffers.Builder, CODE_500_HEADEROffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addSourceByteLength(builder: flatbuffers.Builder, SOURCE_BYTE_LENGTH: bigint): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static endNCD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNCDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNCDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): NCDT;
    unpackTo(_o: NCDT): void;
}
export declare class NCDT implements flatbuffers.IGeneratedObject {
    FORMAT: ncdContainerFormat;
    PROVIDER_DEFINED_FORMAT_NAME: string | Uint8Array | null;
    FORMAT_VERSION: string | Uint8Array | null;
    PRODUCER: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    INTERNAL_FILE_NAME: string | Uint8Array | null;
    COMMENT_AREA: (string)[];
    NATIVE_FRAME_NAME: string | Uint8Array | null;
    NATIVE_FRAME_ID: number;
    NATIVE_TIME_SYSTEM: string | Uint8Array | null;
    SEGMENTS: (NCDSegmentDescriptorT)[];
    SP3_HEADER: NCDSP3HeaderT | null;
    SCENARIO_CONTAINER: NCDScenarioEpochContainerT | null;
    CODE_500_HEADER: NCDCode500HeaderT | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    SOURCE_BYTE_LENGTH: bigint;
    SOURCE_SHA256: string | Uint8Array | null;
    SOURCE_CID: string | Uint8Array | null;
    constructor(FORMAT?: ncdContainerFormat, PROVIDER_DEFINED_FORMAT_NAME?: string | Uint8Array | null, FORMAT_VERSION?: string | Uint8Array | null, PRODUCER?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, INTERNAL_FILE_NAME?: string | Uint8Array | null, COMMENT_AREA?: (string)[], NATIVE_FRAME_NAME?: string | Uint8Array | null, NATIVE_FRAME_ID?: number, NATIVE_TIME_SYSTEM?: string | Uint8Array | null, SEGMENTS?: (NCDSegmentDescriptorT)[], SP3_HEADER?: NCDSP3HeaderT | null, SCENARIO_CONTAINER?: NCDScenarioEpochContainerT | null, CODE_500_HEADER?: NCDCode500HeaderT | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, SOURCE_BYTE_LENGTH?: bigint, SOURCE_SHA256?: string | Uint8Array | null, SOURCE_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NCD.d.ts.map