import * as flatbuffers from 'flatbuffers';
import { BaseContainer, BaseContainerT } from './BaseContainer.js';
import { CommandContainerEntry, CommandContainerEntryT } from './CommandContainerEntry.js';
/**
 * Command container definition
 */
export declare class CommandContainer implements flatbuffers.IUnpackableObject<CommandContainerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CommandContainer;
    static getRootAsCommandContainer(bb: flatbuffers.ByteBuffer, obj?: CommandContainer): CommandContainer;
    static getSizePrefixedRootAsCommandContainer(bb: flatbuffers.ByteBuffer, obj?: CommandContainer): CommandContainer;
    /**
     * Container name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entry list
     */
    ENTRY_LIST(index: number, obj?: CommandContainerEntry): CommandContainerEntry | null;
    entryListLength(): number;
    /**
     * Base container reference
     */
    BASE_CONTAINER(obj?: BaseContainer): BaseContainer | null;
    static startCommandContainer(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addEntryList(builder: flatbuffers.Builder, ENTRY_LISTOffset: flatbuffers.Offset): void;
    static createEntryListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEntryListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBaseContainer(builder: flatbuffers.Builder, BASE_CONTAINEROffset: flatbuffers.Offset): void;
    static endCommandContainer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CommandContainerT;
    unpackTo(_o: CommandContainerT): void;
}
export declare class CommandContainerT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ENTRY_LIST: (CommandContainerEntryT)[];
    BASE_CONTAINER: BaseContainerT | null;
    constructor(NAME?: string | Uint8Array | null, ENTRY_LIST?: (CommandContainerEntryT)[], BASE_CONTAINER?: BaseContainerT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CommandContainer.d.ts.map