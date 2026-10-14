import * as flatbuffers from 'flatbuffers';
/**
 * One orbit regime: a set falls in the first regime whose half-open ranges
 * hold its mean altitude (from un-Kozai'd SGP4 mean motion, WGS-72) and
 * eccentricity.
 */
export declare class ERMRegime implements flatbuffers.IUnpackableObject<ERMRegimeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRegime;
    static getRootAsERMRegime(bb: flatbuffers.ByteBuffer, obj?: ERMRegime): ERMRegime;
    static getSizePrefixedRootAsERMRegime(bb: flatbuffers.ByteBuffer, obj?: ERMRegime): ERMRegime;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALTITUDE_MIN_KM(): number;
    ALTITUDE_MAX_KM(): number;
    ECCENTRICITY_MIN(): number;
    ECCENTRICITY_MAX(): number;
    static startERMRegime(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addAltitudeMinKm(builder: flatbuffers.Builder, ALTITUDE_MIN_KM: number): void;
    static addAltitudeMaxKm(builder: flatbuffers.Builder, ALTITUDE_MAX_KM: number): void;
    static addEccentricityMin(builder: flatbuffers.Builder, ECCENTRICITY_MIN: number): void;
    static addEccentricityMax(builder: flatbuffers.Builder, ECCENTRICITY_MAX: number): void;
    static endERMRegime(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMRegime(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ALTITUDE_MIN_KM: number, ALTITUDE_MAX_KM: number, ECCENTRICITY_MIN: number, ECCENTRICITY_MAX: number): flatbuffers.Offset;
    unpack(): ERMRegimeT;
    unpackTo(_o: ERMRegimeT): void;
}
export declare class ERMRegimeT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ALTITUDE_MIN_KM: number;
    ALTITUDE_MAX_KM: number;
    ECCENTRICITY_MIN: number;
    ECCENTRICITY_MAX: number;
    constructor(ID?: string | Uint8Array | null, ALTITUDE_MIN_KM?: number, ALTITUDE_MAX_KM?: number, ECCENTRICITY_MIN?: number, ECCENTRICITY_MAX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRegime.d.ts.map