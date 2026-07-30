import * as flatbuffers from 'flatbuffers';
import { PLGAcceptedTypeSet, PLGAcceptedTypeSetT } from './PLGAcceptedTypeSet.js';
/**
 * One input or output port on a method.
 */
export declare class PLGPortManifest implements flatbuffers.IUnpackableObject<PLGPortManifestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGPortManifest;
    static getRootAsPLGPortManifest(bb: flatbuffers.ByteBuffer, obj?: PLGPortManifest): PLGPortManifest;
    static getSizePrefixedRootAsPLGPortManifest(bb: flatbuffers.ByteBuffer, obj?: PLGPortManifest): PLGPortManifest;
    /**
     * Stable port identifier within the method.
     */
    PORT_ID(): string;
    PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable name for UIs.
     */
    DISPLAY_NAME(): string | null;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type sets accepted on this port.
     */
    ACCEPTED_TYPE_SETS(index: number, obj?: PLGAcceptedTypeSet): PLGAcceptedTypeSet | null;
    acceptedTypeSetsLength(): number;
    /**
     * Minimum number of streams that must be connected.
     */
    MIN_STREAMS(): number;
    /**
     * Maximum number of streams that may be connected.
     */
    MAX_STREAMS(): number;
    /**
     * Whether the port must be connected for invocation.
     */
    REQUIRED(): boolean;
    /**
     * Optional human-readable description.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGPortManifest(builder: flatbuffers.Builder): void;
    static addPortId(builder: flatbuffers.Builder, PORT_IDOffset: flatbuffers.Offset): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static addAcceptedTypeSets(builder: flatbuffers.Builder, ACCEPTED_TYPE_SETSOffset: flatbuffers.Offset): void;
    static createAcceptedTypeSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAcceptedTypeSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinStreams(builder: flatbuffers.Builder, MIN_STREAMS: number): void;
    static addMaxStreams(builder: flatbuffers.Builder, MAX_STREAMS: number): void;
    static addRequired(builder: flatbuffers.Builder, REQUIRED: boolean): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPLGPortManifest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGPortManifest(builder: flatbuffers.Builder, PORT_IDOffset: flatbuffers.Offset, DISPLAY_NAMEOffset: flatbuffers.Offset, ACCEPTED_TYPE_SETSOffset: flatbuffers.Offset, MIN_STREAMS: number, MAX_STREAMS: number, REQUIRED: boolean, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGPortManifestT;
    unpackTo(_o: PLGPortManifestT): void;
}
export declare class PLGPortManifestT implements flatbuffers.IGeneratedObject {
    PORT_ID: string | Uint8Array | null;
    DISPLAY_NAME: string | Uint8Array | null;
    ACCEPTED_TYPE_SETS: (PLGAcceptedTypeSetT)[];
    MIN_STREAMS: number;
    MAX_STREAMS: number;
    REQUIRED: boolean;
    DESCRIPTION: string | Uint8Array | null;
    constructor(PORT_ID?: string | Uint8Array | null, DISPLAY_NAME?: string | Uint8Array | null, ACCEPTED_TYPE_SETS?: (PLGAcceptedTypeSetT)[], MIN_STREAMS?: number, MAX_STREAMS?: number, REQUIRED?: boolean, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGPortManifest.d.ts.map