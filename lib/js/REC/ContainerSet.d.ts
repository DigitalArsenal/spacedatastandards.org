import * as flatbuffers from 'flatbuffers';
import { SequenceContainer, SequenceContainerT } from './SequenceContainer.js';
/**
 * Collection of sequence containers
 */
export declare class ContainerSet implements flatbuffers.IUnpackableObject<ContainerSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContainerSet;
    static getRootAsContainerSet(bb: flatbuffers.ByteBuffer, obj?: ContainerSet): ContainerSet;
    static getSizePrefixedRootAsContainerSet(bb: flatbuffers.ByteBuffer, obj?: ContainerSet): ContainerSet;
    /**
     * Sequence containers
     */
    CONTAINERS(index: number, obj?: SequenceContainer): SequenceContainer | null;
    containersLength(): number;
    static startContainerSet(builder: flatbuffers.Builder): void;
    static addContainers(builder: flatbuffers.Builder, CONTAINERSOffset: flatbuffers.Offset): void;
    static createContainersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContainersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endContainerSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createContainerSet(builder: flatbuffers.Builder, CONTAINERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ContainerSetT;
    unpackTo(_o: ContainerSetT): void;
}
export declare class ContainerSetT implements flatbuffers.IGeneratedObject {
    CONTAINERS: (SequenceContainerT)[];
    constructor(CONTAINERS?: (SequenceContainerT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContainerSet.d.ts.map