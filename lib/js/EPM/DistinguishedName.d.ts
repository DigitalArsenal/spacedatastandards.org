import * as flatbuffers from 'flatbuffers';
import { DNComponent, DNComponentT } from './DNComponent.js';
/**
 * Represents a Distinguished Name composed of DNComponents
 */
export declare class DistinguishedName implements flatbuffers.IUnpackableObject<DistinguishedNameT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DistinguishedName;
    static getRootAsDistinguishedName(bb: flatbuffers.ByteBuffer, obj?: DistinguishedName): DistinguishedName;
    static getSizePrefixedRootAsDistinguishedName(bb: flatbuffers.ByteBuffer, obj?: DistinguishedName): DistinguishedName;
    /**
     * The sequence of components making up the DN
     */
    COMPONENTS(index: number, obj?: DNComponent): DNComponent | null;
    componentsLength(): number;
    static startDistinguishedName(builder: flatbuffers.Builder): void;
    static addComponents(builder: flatbuffers.Builder, COMPONENTSOffset: flatbuffers.Offset): void;
    static createComponentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startComponentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDistinguishedName(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDistinguishedName(builder: flatbuffers.Builder, COMPONENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DistinguishedNameT;
    unpackTo(_o: DistinguishedNameT): void;
}
export declare class DistinguishedNameT implements flatbuffers.IGeneratedObject {
    COMPONENTS: (DNComponentT)[];
    constructor(COMPONENTS?: (DNComponentT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DistinguishedName.d.ts.map