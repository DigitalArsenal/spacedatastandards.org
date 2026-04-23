import * as flatbuffers from 'flatbuffers';
import { hostCapabilityKind } from './hostCapabilityKind.js';
/**
 * One host capability dependency (richer form of PluginCapability).
 */
export declare class PLGHostCapability implements flatbuffers.IUnpackableObject<PLGHostCapabilityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGHostCapability;
    static getRootAsPLGHostCapability(bb: flatbuffers.ByteBuffer, obj?: PLGHostCapability): PLGHostCapability;
    static getSizePrefixedRootAsPLGHostCapability(bb: flatbuffers.ByteBuffer, obj?: PLGHostCapability): PLGHostCapability;
    CAPABILITY(): hostCapabilityKind;
    SCOPE(): string | null;
    SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REQUIRED(): boolean;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGHostCapability(builder: flatbuffers.Builder): void;
    static addCapability(builder: flatbuffers.Builder, CAPABILITY: hostCapabilityKind): void;
    static addScope(builder: flatbuffers.Builder, SCOPEOffset: flatbuffers.Offset): void;
    static addRequired(builder: flatbuffers.Builder, REQUIRED: boolean): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPLGHostCapability(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGHostCapability(builder: flatbuffers.Builder, CAPABILITY: hostCapabilityKind, SCOPEOffset: flatbuffers.Offset, REQUIRED: boolean, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGHostCapabilityT;
    unpackTo(_o: PLGHostCapabilityT): void;
}
export declare class PLGHostCapabilityT implements flatbuffers.IGeneratedObject {
    CAPABILITY: hostCapabilityKind;
    SCOPE: string | Uint8Array | null;
    REQUIRED: boolean;
    DESCRIPTION: string | Uint8Array | null;
    constructor(CAPABILITY?: hostCapabilityKind, SCOPE?: string | Uint8Array | null, REQUIRED?: boolean, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGHostCapability.d.ts.map