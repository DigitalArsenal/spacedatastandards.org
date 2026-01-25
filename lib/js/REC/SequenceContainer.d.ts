import * as flatbuffers from 'flatbuffers';
import { BaseContainer, BaseContainerT } from './BaseContainer.js';
import { ContainerBinaryEncoding, ContainerBinaryEncodingT } from './ContainerBinaryEncoding.js';
import { ContainerEntry, ContainerEntryT } from './ContainerEntry.js';
import { RateInStream, RateInStreamT } from './RateInStream.js';
/**
 * Sequence container (packet definition)
 */
export declare class SequenceContainer implements flatbuffers.IUnpackableObject<SequenceContainerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SequenceContainer;
    static getRootAsSequenceContainer(bb: flatbuffers.ByteBuffer, obj?: SequenceContainer): SequenceContainer;
    static getSizePrefixedRootAsSequenceContainer(bb: flatbuffers.ByteBuffer, obj?: SequenceContainer): SequenceContainer;
    /**
     * Container name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Abstract container (used as base only)
     */
    ABSTRACT(): boolean;
    /**
     * Container entry list
     */
    ENTRY_LIST(index: number, obj?: ContainerEntry): ContainerEntry | null;
    entryListLength(): number;
    /**
     * Base container (inheritance)
     */
    BASE_CONTAINER(obj?: BaseContainer): BaseContainer | null;
    /**
     * Binary encoding
     */
    BINARY_ENCODING(obj?: ContainerBinaryEncoding): ContainerBinaryEncoding | null;
    /**
     * Rate in stream
     */
    RATE_IN_STREAM(obj?: RateInStream): RateInStream | null;
    /**
     * Idle pattern (hex string for padding)
     */
    IDLE_PATTERN(): string | null;
    IDLE_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSequenceContainer(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAbstract(builder: flatbuffers.Builder, ABSTRACT: boolean): void;
    static addEntryList(builder: flatbuffers.Builder, ENTRY_LISTOffset: flatbuffers.Offset): void;
    static createEntryListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntryListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBaseContainer(builder: flatbuffers.Builder, BASE_CONTAINEROffset: flatbuffers.Offset): void;
    static addBinaryEncoding(builder: flatbuffers.Builder, BINARY_ENCODINGOffset: flatbuffers.Offset): void;
    static addRateInStream(builder: flatbuffers.Builder, RATE_IN_STREAMOffset: flatbuffers.Offset): void;
    static addIdlePattern(builder: flatbuffers.Builder, IDLE_PATTERNOffset: flatbuffers.Offset): void;
    static endSequenceContainer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SequenceContainerT;
    unpackTo(_o: SequenceContainerT): void;
}
export declare class SequenceContainerT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    ABSTRACT: boolean;
    ENTRY_LIST: (ContainerEntryT)[];
    BASE_CONTAINER: BaseContainerT | null;
    BINARY_ENCODING: ContainerBinaryEncodingT | null;
    RATE_IN_STREAM: RateInStreamT | null;
    IDLE_PATTERN: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, ABSTRACT?: boolean, ENTRY_LIST?: (ContainerEntryT)[], BASE_CONTAINER?: BaseContainerT | null, BINARY_ENCODING?: ContainerBinaryEncodingT | null, RATE_IN_STREAM?: RateInStreamT | null, IDLE_PATTERN?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SequenceContainer.d.ts.map