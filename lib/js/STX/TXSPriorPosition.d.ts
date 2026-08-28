import * as flatbuffers from 'flatbuffers';
import { txsPositionAuthorityClass } from './txsPositionAuthorityClass.js';
/**
 * A position the facility is asserted to have occupied and vacated, retained
 * so a relocation never silently rewrites history.
 */
export declare class TXSPriorPosition implements flatbuffers.IUnpackableObject<TXSPriorPositionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TXSPriorPosition;
    static getRootAsTXSPriorPosition(bb: flatbuffers.ByteBuffer, obj?: TXSPriorPosition): TXSPriorPosition;
    static getSizePrefixedRootAsTXSPriorPosition(bb: flatbuffers.ByteBuffer, obj?: TXSPriorPosition): TXSPriorPosition;
    /**
     * Decimal degrees on WGS 84.
     */
    LATITUDE(): number;
    LONGITUDE(): number;
    /**
     * Class of authority behind THIS coordinate, which is frequently weaker
     * than the authority behind the current one.
     */
    POSITION_AUTHORITY(): txsPositionAuthorityClass;
    /**
     * One-sigma-equivalent horizontal envelope in metres, as the source states
     * it. Zero means unpublished.
     */
    POSITION_UNCERTAINTY_M(): number;
    /**
     * RFC 3339 UTC bounds over which the facility is asserted to have occupied
     * this position. Either bound is absent when unpublished.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_UNTIL(): string | null;
    VALID_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * PROVIDER_ID of the SOURCES entry asserting this position.
     */
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTXSPriorPosition(builder: flatbuffers.Builder): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addPositionAuthority(builder: flatbuffers.Builder, POSITION_AUTHORITY: txsPositionAuthorityClass): void;
    static addPositionUncertaintyM(builder: flatbuffers.Builder, POSITION_UNCERTAINTY_M: number): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidUntil(builder: flatbuffers.Builder, VALID_UNTILOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static endTXSPriorPosition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTXSPriorPosition(builder: flatbuffers.Builder, LATITUDE: number, LONGITUDE: number, POSITION_AUTHORITY: txsPositionAuthorityClass, POSITION_UNCERTAINTY_M: number, VALID_FROMOffset: flatbuffers.Offset, VALID_UNTILOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TXSPriorPositionT;
    unpackTo(_o: TXSPriorPositionT): void;
}
export declare class TXSPriorPositionT implements flatbuffers.IGeneratedObject {
    LATITUDE: number;
    LONGITUDE: number;
    POSITION_AUTHORITY: txsPositionAuthorityClass;
    POSITION_UNCERTAINTY_M: number;
    VALID_FROM: string | Uint8Array | null;
    VALID_UNTIL: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    constructor(LATITUDE?: number, LONGITUDE?: number, POSITION_AUTHORITY?: txsPositionAuthorityClass, POSITION_UNCERTAINTY_M?: number, VALID_FROM?: string | Uint8Array | null, VALID_UNTIL?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TXSPriorPosition.d.ts.map