import * as flatbuffers from 'flatbuffers';
import { Argument, ArgumentT } from './Argument.js';
import { BaseMetaCommand, BaseMetaCommandT } from './BaseMetaCommand.js';
import { CommandContainer, CommandContainerT } from './CommandContainer.js';
import { CommandSignificance, CommandSignificanceT } from './CommandSignificance.js';
import { CommandVerifier, CommandVerifierT } from './CommandVerifier.js';
import { Interlock, InterlockT } from './Interlock.js';
/**
 * MetaCommand definition
 */
export declare class MetaCommand implements flatbuffers.IUnpackableObject<MetaCommandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MetaCommand;
    static getRootAsMetaCommand(bb: flatbuffers.ByteBuffer, obj?: MetaCommand): MetaCommand;
    static getSizePrefixedRootAsMetaCommand(bb: flatbuffers.ByteBuffer, obj?: MetaCommand): MetaCommand;
    /**
     * Command name
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
     * Abstract command (base only)
     */
    ABSTRACT(): boolean;
    /**
     * Argument list
     */
    ARGUMENTS(index: number, obj?: Argument): Argument | null;
    argumentsLength(): number;
    /**
     * Command container
     */
    COMMAND_CONTAINER(obj?: CommandContainer): CommandContainer | null;
    /**
     * Base metacommand (inheritance)
     */
    BASE_META_COMMAND(obj?: BaseMetaCommand): BaseMetaCommand | null;
    /**
     * Command verifiers
     */
    VERIFIERS(index: number, obj?: CommandVerifier): CommandVerifier | null;
    verifiersLength(): number;
    /**
     * Command significance
     */
    SIGNIFICANCE(obj?: CommandSignificance): CommandSignificance | null;
    /**
     * Interlock constraints
     */
    INTERLOCKS(index: number, obj?: Interlock): Interlock | null;
    interlocksLength(): number;
    /**
     * Default significance
     */
    DEFAULT_SIGNIFICANCE(obj?: CommandSignificance): CommandSignificance | null;
    static startMetaCommand(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAbstract(builder: flatbuffers.Builder, ABSTRACT: boolean): void;
    static addArguments(builder: flatbuffers.Builder, ARGUMENTSOffset: flatbuffers.Offset): void;
    static createArgumentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArgumentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCommandContainer(builder: flatbuffers.Builder, COMMAND_CONTAINEROffset: flatbuffers.Offset): void;
    static addBaseMetaCommand(builder: flatbuffers.Builder, BASE_META_COMMANDOffset: flatbuffers.Offset): void;
    static addVerifiers(builder: flatbuffers.Builder, VERIFIERSOffset: flatbuffers.Offset): void;
    static createVerifiersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVerifiersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignificance(builder: flatbuffers.Builder, SIGNIFICANCEOffset: flatbuffers.Offset): void;
    static addInterlocks(builder: flatbuffers.Builder, INTERLOCKSOffset: flatbuffers.Offset): void;
    static createInterlocksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInterlocksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDefaultSignificance(builder: flatbuffers.Builder, DEFAULT_SIGNIFICANCEOffset: flatbuffers.Offset): void;
    static endMetaCommand(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MetaCommandT;
    unpackTo(_o: MetaCommandT): void;
}
export declare class MetaCommandT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    ABSTRACT: boolean;
    ARGUMENTS: (ArgumentT)[];
    COMMAND_CONTAINER: CommandContainerT | null;
    BASE_META_COMMAND: BaseMetaCommandT | null;
    VERIFIERS: (CommandVerifierT)[];
    SIGNIFICANCE: CommandSignificanceT | null;
    INTERLOCKS: (InterlockT)[];
    DEFAULT_SIGNIFICANCE: CommandSignificanceT | null;
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, ABSTRACT?: boolean, ARGUMENTS?: (ArgumentT)[], COMMAND_CONTAINER?: CommandContainerT | null, BASE_META_COMMAND?: BaseMetaCommandT | null, VERIFIERS?: (CommandVerifierT)[], SIGNIFICANCE?: CommandSignificanceT | null, INTERLOCKS?: (InterlockT)[], DEFAULT_SIGNIFICANCE?: CommandSignificanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MetaCommand.d.ts.map