import * as flatbuffers from 'flatbuffers';
/**
 * The orbit determination an ephemeris block descends from. SDS addition:
 * CCSDS 502.0-B-3 OEM states no determination statistics. Names and meanings
 * follow the OD_ fields of $OCM OrbitDetermination, which a fit of these
 * states copies forward (OD_OBSERVATIONS_USED is the count of the observations
 * behind the ephemeris, not of its states).
 */
export declare class OEMOrbitDetermination implements flatbuffers.IUnpackableObject<OEMOrbitDeterminationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OEMOrbitDetermination;
    static getRootAsOEMOrbitDetermination(bb: flatbuffers.ByteBuffer, obj?: OEMOrbitDetermination): OEMOrbitDetermination;
    static getSizePrefixedRootAsOEMOrbitDetermination(bb: flatbuffers.ByteBuffer, obj?: OEMOrbitDetermination): OEMOrbitDetermination;
    /**
     * Observations the determination used; 0 when not stated.
     */
    OD_OBSERVATIONS_USED(): number;
    /**
     * First epoch of the observation arc (ISO 8601 UTC); empty when not stated.
     */
    OD_ARC_START(): string | null;
    OD_ARC_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last epoch of the observation arc (ISO 8601 UTC); empty when not stated.
     */
    OD_ARC_STOP(): string | null;
    OD_ARC_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method of the determination; empty when not stated.
     */
    OD_METHOD(): string | null;
    OD_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOEMOrbitDetermination(builder: flatbuffers.Builder): void;
    static addOdObservationsUsed(builder: flatbuffers.Builder, OD_OBSERVATIONS_USED: number): void;
    static addOdArcStart(builder: flatbuffers.Builder, OD_ARC_STARTOffset: flatbuffers.Offset): void;
    static addOdArcStop(builder: flatbuffers.Builder, OD_ARC_STOPOffset: flatbuffers.Offset): void;
    static addOdMethod(builder: flatbuffers.Builder, OD_METHODOffset: flatbuffers.Offset): void;
    static endOEMOrbitDetermination(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOEMOrbitDetermination(builder: flatbuffers.Builder, OD_OBSERVATIONS_USED: number, OD_ARC_STARTOffset: flatbuffers.Offset, OD_ARC_STOPOffset: flatbuffers.Offset, OD_METHODOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OEMOrbitDeterminationT;
    unpackTo(_o: OEMOrbitDeterminationT): void;
}
export declare class OEMOrbitDeterminationT implements flatbuffers.IGeneratedObject {
    OD_OBSERVATIONS_USED: number;
    OD_ARC_START: string | Uint8Array | null;
    OD_ARC_STOP: string | Uint8Array | null;
    OD_METHOD: string | Uint8Array | null;
    constructor(OD_OBSERVATIONS_USED?: number, OD_ARC_START?: string | Uint8Array | null, OD_ARC_STOP?: string | Uint8Array | null, OD_METHOD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OEMOrbitDetermination.d.ts.map