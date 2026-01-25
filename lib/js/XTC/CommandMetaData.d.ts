import * as flatbuffers from 'flatbuffers';
import { AlgorithmSet, AlgorithmSetT } from './AlgorithmSet.js';
import { ArgumentTypeSet, ArgumentTypeSetT } from './ArgumentTypeSet.js';
import { ContainerSet, ContainerSetT } from './ContainerSet.js';
import { MetaCommandSet, MetaCommandSetT } from './MetaCommandSet.js';
import { ParameterSet, ParameterSetT } from './ParameterSet.js';
import { ParameterTypeSet, ParameterTypeSetT } from './ParameterTypeSet.js';
import { StreamSet, StreamSetT } from './StreamSet.js';
/**
 * Command metadata collection
 */
export declare class CommandMetaData implements flatbuffers.IUnpackableObject<CommandMetaDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CommandMetaData;
    static getRootAsCommandMetaData(bb: flatbuffers.ByteBuffer, obj?: CommandMetaData): CommandMetaData;
    static getSizePrefixedRootAsCommandMetaData(bb: flatbuffers.ByteBuffer, obj?: CommandMetaData): CommandMetaData;
    /**
     * Argument type definitions
     */
    ARGUMENT_TYPE_SET(obj?: ArgumentTypeSet): ArgumentTypeSet | null;
    /**
     * Parameter types used by commands
     */
    PARAMETER_TYPE_SET(obj?: ParameterTypeSet): ParameterTypeSet | null;
    /**
     * Parameters used by commands
     */
    PARAMETER_SET(obj?: ParameterSet): ParameterSet | null;
    /**
     * MetaCommand definitions
     */
    META_COMMAND_SET(obj?: MetaCommandSet): MetaCommandSet | null;
    /**
     * Command container set
     */
    COMMAND_CONTAINER_SET(obj?: ContainerSet): ContainerSet | null;
    /**
     * Algorithm definitions
     */
    ALGORITHM_SET(obj?: AlgorithmSet): AlgorithmSet | null;
    /**
     * Stream definitions
     */
    STREAM_SET(obj?: StreamSet): StreamSet | null;
    static startCommandMetaData(builder: flatbuffers.Builder): void;
    static addArgumentTypeSet(builder: flatbuffers.Builder, ARGUMENT_TYPE_SETOffset: flatbuffers.Offset): void;
    static addParameterTypeSet(builder: flatbuffers.Builder, PARAMETER_TYPE_SETOffset: flatbuffers.Offset): void;
    static addParameterSet(builder: flatbuffers.Builder, PARAMETER_SETOffset: flatbuffers.Offset): void;
    static addMetaCommandSet(builder: flatbuffers.Builder, META_COMMAND_SETOffset: flatbuffers.Offset): void;
    static addCommandContainerSet(builder: flatbuffers.Builder, COMMAND_CONTAINER_SETOffset: flatbuffers.Offset): void;
    static addAlgorithmSet(builder: flatbuffers.Builder, ALGORITHM_SETOffset: flatbuffers.Offset): void;
    static addStreamSet(builder: flatbuffers.Builder, STREAM_SETOffset: flatbuffers.Offset): void;
    static endCommandMetaData(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CommandMetaDataT;
    unpackTo(_o: CommandMetaDataT): void;
}
export declare class CommandMetaDataT implements flatbuffers.IGeneratedObject {
    ARGUMENT_TYPE_SET: ArgumentTypeSetT | null;
    PARAMETER_TYPE_SET: ParameterTypeSetT | null;
    PARAMETER_SET: ParameterSetT | null;
    META_COMMAND_SET: MetaCommandSetT | null;
    COMMAND_CONTAINER_SET: ContainerSetT | null;
    ALGORITHM_SET: AlgorithmSetT | null;
    STREAM_SET: StreamSetT | null;
    constructor(ARGUMENT_TYPE_SET?: ArgumentTypeSetT | null, PARAMETER_TYPE_SET?: ParameterTypeSetT | null, PARAMETER_SET?: ParameterSetT | null, META_COMMAND_SET?: MetaCommandSetT | null, COMMAND_CONTAINER_SET?: ContainerSetT | null, ALGORITHM_SET?: AlgorithmSetT | null, STREAM_SET?: StreamSetT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CommandMetaData.d.ts.map