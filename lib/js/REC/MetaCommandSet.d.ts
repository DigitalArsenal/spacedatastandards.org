import * as flatbuffers from 'flatbuffers';
import { MetaCommand, MetaCommandT } from './MetaCommand.js';
/**
 * Collection of metacommands
 */
export declare class MetaCommandSet implements flatbuffers.IUnpackableObject<MetaCommandSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MetaCommandSet;
    static getRootAsMetaCommandSet(bb: flatbuffers.ByteBuffer, obj?: MetaCommandSet): MetaCommandSet;
    static getSizePrefixedRootAsMetaCommandSet(bb: flatbuffers.ByteBuffer, obj?: MetaCommandSet): MetaCommandSet;
    /**
     * MetaCommands
     */
    META_COMMANDS(index: number, obj?: MetaCommand): MetaCommand | null;
    metaCommandsLength(): number;
    static startMetaCommandSet(builder: flatbuffers.Builder): void;
    static addMetaCommands(builder: flatbuffers.Builder, META_COMMANDSOffset: flatbuffers.Offset): void;
    static createMetaCommandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMetaCommandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMetaCommandSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMetaCommandSet(builder: flatbuffers.Builder, META_COMMANDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MetaCommandSetT;
    unpackTo(_o: MetaCommandSetT): void;
}
export declare class MetaCommandSetT implements flatbuffers.IGeneratedObject {
    META_COMMANDS: (MetaCommandT)[];
    constructor(META_COMMANDS?: (MetaCommandT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MetaCommandSet.d.ts.map