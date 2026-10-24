import * as flatbuffers from 'flatbuffers';
/**
 * Burn Out Vector Message: the state of a launch vehicle at burnout, in EFG
 * (Earth-fixed) coordinates. Position is in kilometers (km), velocity in
 * kilometers per second (km/s) and time in seconds (s); a producer holding
 * another unit converts before writing.
 */
export declare class BOV implements flatbuffers.IUnpackableObject<BOVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BOV;
    static getRootAsBOV(bb: flatbuffers.ByteBuffer, obj?: BOV): BOV;
    static getSizePrefixedRootAsBOV(bb: flatbuffers.ByteBuffer, obj?: BOV): BOV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * EFG position, E component, km (11 significant figures).
     */
    E_COORDINATE(): number;
    /**
     * EFG position, F component, km (11 significant figures).
     */
    F_COORDINATE(): number;
    /**
     * EFG position, G component, km (11 significant figures).
     */
    G_COORDINATE(): number;
    /**
     * EFG velocity, E component, km/s (9 significant figures).
     */
    E_DOT(): number;
    /**
     * EFG velocity, F component, km/s (9 significant figures).
     */
    F_DOT(): number;
    /**
     * EFG velocity, G component, km/s (9 significant figures).
     */
    G_DOT(): number;
    /**
     * Epoch time, in ISO 8601 UTC format.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time from launch, seconds (s), with appropriate precision.
     */
    TIME_FROM_LAUNCH(): number;
    static startBOV(builder: flatbuffers.Builder): void;
    static addECoordinate(builder: flatbuffers.Builder, E_COORDINATE: number): void;
    static addFCoordinate(builder: flatbuffers.Builder, F_COORDINATE: number): void;
    static addGCoordinate(builder: flatbuffers.Builder, G_COORDINATE: number): void;
    static addEDot(builder: flatbuffers.Builder, E_DOT: number): void;
    static addFDot(builder: flatbuffers.Builder, F_DOT: number): void;
    static addGDot(builder: flatbuffers.Builder, G_DOT: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeFromLaunch(builder: flatbuffers.Builder, TIME_FROM_LAUNCH: number): void;
    static endBOV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBOVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBOVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBOV(builder: flatbuffers.Builder, E_COORDINATE: number, F_COORDINATE: number, G_COORDINATE: number, E_DOT: number, F_DOT: number, G_DOT: number, EPOCHOffset: flatbuffers.Offset, TIME_FROM_LAUNCH: number): flatbuffers.Offset;
    unpack(): BOVT;
    unpackTo(_o: BOVT): void;
}
export declare class BOVT implements flatbuffers.IGeneratedObject {
    E_COORDINATE: number;
    F_COORDINATE: number;
    G_COORDINATE: number;
    E_DOT: number;
    F_DOT: number;
    G_DOT: number;
    EPOCH: string | Uint8Array | null;
    TIME_FROM_LAUNCH: number;
    constructor(E_COORDINATE?: number, F_COORDINATE?: number, G_COORDINATE?: number, E_DOT?: number, F_DOT?: number, G_DOT?: number, EPOCH?: string | Uint8Array | null, TIME_FROM_LAUNCH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BOV.d.ts.map