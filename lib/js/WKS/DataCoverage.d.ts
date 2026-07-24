import * as flatbuffers from 'flatbuffers';
import { SpatialCoverage, SpatialCoverageT } from './SpatialCoverage.js';
import { TemporalCoverage, TemporalCoverageT } from './TemporalCoverage.js';
/**
 * Data coverage combining spatial and temporal
 */
export declare class DataCoverage implements flatbuffers.IUnpackableObject<DataCoverageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DataCoverage;
    static getRootAsDataCoverage(bb: flatbuffers.ByteBuffer, obj?: DataCoverage): DataCoverage;
    static getSizePrefixedRootAsDataCoverage(bb: flatbuffers.ByteBuffer, obj?: DataCoverage): DataCoverage;
    /**
     * Spatial coverage definition
     */
    SPATIAL(obj?: SpatialCoverage): SpatialCoverage | null;
    /**
     * Temporal coverage definition
     */
    TEMPORAL(obj?: TemporalCoverage): TemporalCoverage | null;
    static startDataCoverage(builder: flatbuffers.Builder): void;
    static addSpatial(builder: flatbuffers.Builder, SPATIALOffset: flatbuffers.Offset): void;
    static addTemporal(builder: flatbuffers.Builder, TEMPORALOffset: flatbuffers.Offset): void;
    static endDataCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DataCoverageT;
    unpackTo(_o: DataCoverageT): void;
}
export declare class DataCoverageT implements flatbuffers.IGeneratedObject {
    SPATIAL: SpatialCoverageT | null;
    TEMPORAL: TemporalCoverageT | null;
    constructor(SPATIAL?: SpatialCoverageT | null, TEMPORAL?: TemporalCoverageT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DataCoverage.d.ts.map