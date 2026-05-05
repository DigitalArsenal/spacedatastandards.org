import * as flatbuffers from 'flatbuffers';
import { PLGPortManifest, PLGPortManifestT } from './PLGPortManifest.js';
import { drainBehavior } from './drainBehavior.js';
/**
 * Canonical method declaration.
 */
export declare class PLGMethodManifest implements flatbuffers.IUnpackableObject<PLGMethodManifestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGMethodManifest;
    static getRootAsPLGMethodManifest(bb: flatbuffers.ByteBuffer, obj?: PLGMethodManifest): PLGMethodManifest;
    static getSizePrefixedRootAsPLGMethodManifest(bb: flatbuffers.ByteBuffer, obj?: PLGMethodManifest): PLGMethodManifest;
    METHOD_ID(): string;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    DISPLAY_NAME(): string | null;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INPUT_PORTS(index: number, obj?: PLGPortManifest): PLGPortManifest | null;
    inputPortsLength(): number;
    OUTPUT_PORTS(index: number, obj?: PLGPortManifest): PLGPortManifest | null;
    outputPortsLength(): number;
    MAX_BATCH(): number;
    DRAIN_POLICY(): drainBehavior;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGMethodManifest(builder: flatbuffers.Builder): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static addInputPorts(builder: flatbuffers.Builder, INPUT_PORTSOffset: flatbuffers.Offset): void;
    static createInputPortsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInputPortsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutputPorts(builder: flatbuffers.Builder, OUTPUT_PORTSOffset: flatbuffers.Offset): void;
    static createOutputPortsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOutputPortsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxBatch(builder: flatbuffers.Builder, MAX_BATCH: number): void;
    static addDrainPolicy(builder: flatbuffers.Builder, DRAIN_POLICY: drainBehavior): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPLGMethodManifest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGMethodManifest(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset, DISPLAY_NAMEOffset: flatbuffers.Offset, INPUT_PORTSOffset: flatbuffers.Offset, OUTPUT_PORTSOffset: flatbuffers.Offset, MAX_BATCH: number, DRAIN_POLICY: drainBehavior, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGMethodManifestT;
    unpackTo(_o: PLGMethodManifestT): void;
}
export declare class PLGMethodManifestT implements flatbuffers.IGeneratedObject {
    METHOD_ID: string | Uint8Array | null;
    DISPLAY_NAME: string | Uint8Array | null;
    INPUT_PORTS: (PLGPortManifestT)[];
    OUTPUT_PORTS: (PLGPortManifestT)[];
    MAX_BATCH: number;
    DRAIN_POLICY: drainBehavior;
    DESCRIPTION: string | Uint8Array | null;
    constructor(METHOD_ID?: string | Uint8Array | null, DISPLAY_NAME?: string | Uint8Array | null, INPUT_PORTS?: (PLGPortManifestT)[], OUTPUT_PORTS?: (PLGPortManifestT)[], MAX_BATCH?: number, DRAIN_POLICY?: drainBehavior, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGMethodManifest.d.ts.map