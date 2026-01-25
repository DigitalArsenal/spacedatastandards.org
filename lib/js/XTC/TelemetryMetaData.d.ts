import * as flatbuffers from 'flatbuffers';
import { AlgorithmSet, AlgorithmSetT } from './AlgorithmSet.js';
import { ContainerSet, ContainerSetT } from './ContainerSet.js';
import { ParameterSet, ParameterSetT } from './ParameterSet.js';
import { ParameterTypeSet, ParameterTypeSetT } from './ParameterTypeSet.js';
import { StreamSet, StreamSetT } from './StreamSet.js';
/**
 * Telemetry metadata collection
 */
export declare class TelemetryMetaData implements flatbuffers.IUnpackableObject<TelemetryMetaDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TelemetryMetaData;
    static getRootAsTelemetryMetaData(bb: flatbuffers.ByteBuffer, obj?: TelemetryMetaData): TelemetryMetaData;
    static getSizePrefixedRootAsTelemetryMetaData(bb: flatbuffers.ByteBuffer, obj?: TelemetryMetaData): TelemetryMetaData;
    /**
     * Parameter type definitions
     */
    PARAMETER_TYPE_SET(obj?: ParameterTypeSet): ParameterTypeSet | null;
    /**
     * Parameter definitions
     */
    PARAMETER_SET(obj?: ParameterSet): ParameterSet | null;
    /**
     * Container definitions
     */
    CONTAINER_SET(obj?: ContainerSet): ContainerSet | null;
    /**
     * Algorithm definitions
     */
    ALGORITHM_SET(obj?: AlgorithmSet): AlgorithmSet | null;
    /**
     * Stream definitions
     */
    STREAM_SET(obj?: StreamSet): StreamSet | null;
    static startTelemetryMetaData(builder: flatbuffers.Builder): void;
    static addParameterTypeSet(builder: flatbuffers.Builder, PARAMETER_TYPE_SETOffset: flatbuffers.Offset): void;
    static addParameterSet(builder: flatbuffers.Builder, PARAMETER_SETOffset: flatbuffers.Offset): void;
    static addContainerSet(builder: flatbuffers.Builder, CONTAINER_SETOffset: flatbuffers.Offset): void;
    static addAlgorithmSet(builder: flatbuffers.Builder, ALGORITHM_SETOffset: flatbuffers.Offset): void;
    static addStreamSet(builder: flatbuffers.Builder, STREAM_SETOffset: flatbuffers.Offset): void;
    static endTelemetryMetaData(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): TelemetryMetaDataT;
    unpackTo(_o: TelemetryMetaDataT): void;
}
export declare class TelemetryMetaDataT implements flatbuffers.IGeneratedObject {
    PARAMETER_TYPE_SET: ParameterTypeSetT | null;
    PARAMETER_SET: ParameterSetT | null;
    CONTAINER_SET: ContainerSetT | null;
    ALGORITHM_SET: AlgorithmSetT | null;
    STREAM_SET: StreamSetT | null;
    constructor(PARAMETER_TYPE_SET?: ParameterTypeSetT | null, PARAMETER_SET?: ParameterSetT | null, CONTAINER_SET?: ContainerSetT | null, ALGORITHM_SET?: AlgorithmSetT | null, STREAM_SET?: StreamSetT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TelemetryMetaData.d.ts.map