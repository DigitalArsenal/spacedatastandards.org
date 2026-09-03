import * as flatbuffers from 'flatbuffers';
/**
 * Wind radii by quadrant at one wind-speed threshold. Radii are kilometres
 * (1 nmi = 1.852 km exactly) from the centre to the outermost point at which
 * the threshold is reached; 0 means the threshold is not reached in that
 * quadrant; a negative value means not reported.
 */
export declare class TCTRadii implements flatbuffers.IUnpackableObject<TCTRadiiT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TCTRadii;
    static getRootAsTCTRadii(bb: flatbuffers.ByteBuffer, obj?: TCTRadii): TCTRadii;
    static getSizePrefixedRootAsTCTRadii(bb: flatbuffers.ByteBuffer, obj?: TCTRadii): TCTRadii;
    /**
     * Wind-speed threshold, m/s, converted exactly from knots
     * (1 kt = 1852/3600 m/s: 34 kt = 17.49, 50 kt = 25.72, 64 kt = 32.92).
     */
    THRESHOLD_WIND_MS(): number;
    /**
     * North-east quadrant radius, km.
     */
    NE_KM(): number;
    /**
     * South-east quadrant radius, km.
     */
    SE_KM(): number;
    /**
     * South-west quadrant radius, km.
     */
    SW_KM(): number;
    /**
     * North-west quadrant radius, km.
     */
    NW_KM(): number;
    static startTCTRadii(builder: flatbuffers.Builder): void;
    static addThresholdWindMs(builder: flatbuffers.Builder, THRESHOLD_WIND_MS: number): void;
    static addNeKm(builder: flatbuffers.Builder, NE_KM: number): void;
    static addSeKm(builder: flatbuffers.Builder, SE_KM: number): void;
    static addSwKm(builder: flatbuffers.Builder, SW_KM: number): void;
    static addNwKm(builder: flatbuffers.Builder, NW_KM: number): void;
    static endTCTRadii(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTCTRadii(builder: flatbuffers.Builder, THRESHOLD_WIND_MS: number, NE_KM: number, SE_KM: number, SW_KM: number, NW_KM: number): flatbuffers.Offset;
    unpack(): TCTRadiiT;
    unpackTo(_o: TCTRadiiT): void;
}
export declare class TCTRadiiT implements flatbuffers.IGeneratedObject {
    THRESHOLD_WIND_MS: number;
    NE_KM: number;
    SE_KM: number;
    SW_KM: number;
    NW_KM: number;
    constructor(THRESHOLD_WIND_MS?: number, NE_KM?: number, SE_KM?: number, SW_KM?: number, NW_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TCTRadii.d.ts.map