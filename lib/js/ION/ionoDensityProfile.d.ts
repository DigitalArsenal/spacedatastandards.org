import * as flatbuffers from 'flatbuffers';
/**
 * Ionospheric Electron Density Profile
 */
export declare class ionoDensityProfile implements flatbuffers.IUnpackableObject<ionoDensityProfileT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ionoDensityProfile;
    static getRootAsionoDensityProfile(bb: flatbuffers.ByteBuffer, obj?: ionoDensityProfile): ionoDensityProfile;
    static getSizePrefixedRootAsionoDensityProfile(bb: flatbuffers.ByteBuffer, obj?: ionoDensityProfile): ionoDensityProfile;
    /**
     * Observation epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Altitudes in km
     */
    ALTITUDES(index: number): number | null;
    altitudesLength(): number;
    altitudesArray(): Float64Array | null;
    /**
     * Electron densities at each altitude in electrons/m^3
     */
    DENSITIES(index: number): number | null;
    densitiesLength(): number;
    densitiesArray(): Float64Array | null;
    static startionoDensityProfile(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addAltitudes(builder: flatbuffers.Builder, ALTITUDESOffset: flatbuffers.Offset): void;
    static createAltitudesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAltitudesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAltitudesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensities(builder: flatbuffers.Builder, DENSITIESOffset: flatbuffers.Offset): void;
    static createDensitiesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDensitiesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDensitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endionoDensityProfile(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createionoDensityProfile(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, ALTITUDESOffset: flatbuffers.Offset, DENSITIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ionoDensityProfileT;
    unpackTo(_o: ionoDensityProfileT): void;
}
export declare class ionoDensityProfileT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    ALTITUDES: (number)[];
    DENSITIES: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, ALTITUDES?: (number)[], DENSITIES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ionoDensityProfile.d.ts.map