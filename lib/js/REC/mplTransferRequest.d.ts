import * as flatbuffers from 'flatbuffers';
/**
 * Classical transfer and plane change between circular orbits (Hohmann,
 * BiElliptic, PlaneChange, CombinedTransfer).
 */
export declare class mplTransferRequest implements flatbuffers.IUnpackableObject<mplTransferRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplTransferRequest;
    static getRootAsmplTransferRequest(bb: flatbuffers.ByteBuffer, obj?: mplTransferRequest): mplTransferRequest;
    static getSizePrefixedRootAsmplTransferRequest(bb: flatbuffers.ByteBuffer, obj?: mplTransferRequest): mplTransferRequest;
    /**
     * Radius of the initial circular orbit, km (also the orbit radius of a
     * PlaneChange).
     */
    INITIAL_RADIUS_KM(): number;
    /**
     * Radius of the final circular orbit, km.
     */
    FINAL_RADIUS_KM(): number;
    /**
     * Apoapsis radius of the intermediate orbit of a BiElliptic transfer, km.
     */
    INTERMEDIATE_RADIUS_KM(): number;
    /**
     * Orbital speed at the burn of a PlaneChange, km/s.
     */
    SPEED_KM_S(): number;
    /**
     * Inclination change, deg (signed).
     */
    INCLINATION_CHANGE_DEG(): number;
    static startmplTransferRequest(builder: flatbuffers.Builder): void;
    static addInitialRadiusKm(builder: flatbuffers.Builder, INITIAL_RADIUS_KM: number): void;
    static addFinalRadiusKm(builder: flatbuffers.Builder, FINAL_RADIUS_KM: number): void;
    static addIntermediateRadiusKm(builder: flatbuffers.Builder, INTERMEDIATE_RADIUS_KM: number): void;
    static addSpeedKmS(builder: flatbuffers.Builder, SPEED_KM_S: number): void;
    static addInclinationChangeDeg(builder: flatbuffers.Builder, INCLINATION_CHANGE_DEG: number): void;
    static endmplTransferRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplTransferRequest(builder: flatbuffers.Builder, INITIAL_RADIUS_KM: number, FINAL_RADIUS_KM: number, INTERMEDIATE_RADIUS_KM: number, SPEED_KM_S: number, INCLINATION_CHANGE_DEG: number): flatbuffers.Offset;
    unpack(): mplTransferRequestT;
    unpackTo(_o: mplTransferRequestT): void;
}
export declare class mplTransferRequestT implements flatbuffers.IGeneratedObject {
    INITIAL_RADIUS_KM: number;
    FINAL_RADIUS_KM: number;
    INTERMEDIATE_RADIUS_KM: number;
    SPEED_KM_S: number;
    INCLINATION_CHANGE_DEG: number;
    constructor(INITIAL_RADIUS_KM?: number, FINAL_RADIUS_KM?: number, INTERMEDIATE_RADIUS_KM?: number, SPEED_KM_S?: number, INCLINATION_CHANGE_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplTransferRequest.d.ts.map