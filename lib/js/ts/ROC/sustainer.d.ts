import * as flatbuffers from 'flatbuffers';
/**
 * Sustainer Details
 */
export declare class SUSTAINER implements flatbuffers.IUnpackableObject<SUSTAINERT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SUSTAINER;
    static getRootAsSUSTAINER(bb: flatbuffers.ByteBuffer, obj?: SUSTAINER): SUSTAINER;
    static getSizePrefixedRootAsSUSTAINER(bb: flatbuffers.ByteBuffer, obj?: SUSTAINER): SUSTAINER;
    /**
     * Name of the Sustainer
     */
    sustainerName(): string | null;
    sustainerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thrust Produced by the Sustainer (in Newtons)
     */
    thrust(): number;
    /**
     * Duration of the Burn (in Seconds)
     */
    burnDuration(): number;
    static startSUSTAINER(builder: flatbuffers.Builder): void;
    static addSustainerName(builder: flatbuffers.Builder, sustainerNameOffset: flatbuffers.Offset): void;
    static addThrust(builder: flatbuffers.Builder, thrust: number): void;
    static addBurnDuration(builder: flatbuffers.Builder, burnDuration: number): void;
    static endSUSTAINER(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSUSTAINER(builder: flatbuffers.Builder, sustainerNameOffset: flatbuffers.Offset, thrust: number, burnDuration: number): flatbuffers.Offset;
    unpack(): SUSTAINERT;
    unpackTo(_o: SUSTAINERT): void;
}
export declare class SUSTAINERT implements flatbuffers.IGeneratedObject {
    sustainerName: string | Uint8Array | null;
    thrust: number;
    burnDuration: number;
    constructor(sustainerName?: string | Uint8Array | null, thrust?: number, burnDuration?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sustainer.d.ts.map