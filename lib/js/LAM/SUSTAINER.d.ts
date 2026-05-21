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
    SUSTAINER_NAME(): string | null;
    SUSTAINER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thrust Produced by the Sustainer (in Newtons)
     */
    THRUST(): number;
    /**
     * Duration of the Burn (in Seconds)
     */
    BURN_DURATION(): number;
    static startSUSTAINER(builder: flatbuffers.Builder): void;
    static addSustainerName(builder: flatbuffers.Builder, SUSTAINER_NAMEOffset: flatbuffers.Offset): void;
    static addThrust(builder: flatbuffers.Builder, THRUST: number): void;
    static addBurnDuration(builder: flatbuffers.Builder, BURN_DURATION: number): void;
    static endSUSTAINER(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSUSTAINER(builder: flatbuffers.Builder, SUSTAINER_NAMEOffset: flatbuffers.Offset, THRUST: number, BURN_DURATION: number): flatbuffers.Offset;
    unpack(): SUSTAINERT;
    unpackTo(_o: SUSTAINERT): void;
}
export declare class SUSTAINERT implements flatbuffers.IGeneratedObject {
    SUSTAINER_NAME: string | Uint8Array | null;
    THRUST: number;
    BURN_DURATION: number;
    constructor(SUSTAINER_NAME?: string | Uint8Array | null, THRUST?: number, BURN_DURATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SUSTAINER.d.ts.map