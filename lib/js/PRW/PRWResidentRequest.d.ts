import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Portable batch request: no output pointer; state records returned via TAB.
 */
export declare class PRWResidentRequest implements flatbuffers.IUnpackableObject<PRWResidentRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWResidentRequest;
    static getRootAsPRWResidentRequest(bb: flatbuffers.ByteBuffer, obj?: PRWResidentRequest): PRWResidentRequest;
    static getSizePrefixedRootAsPRWResidentRequest(bb: flatbuffers.ByteBuffer, obj?: PRWResidentRequest): PRWResidentRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    TARGET_EPOCH(obj?: TIMInstant): TIMInstant | null;
    ENTITY_HANDLES(index: number): number | null;
    entityHandlesLength(): number;
    entityHandlesArray(): Uint32Array | null;
    MAXIMUM_COUNT(): number;
    TARGET_COORDINATE_SYSTEM(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    static startPRWResidentRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addTargetEpoch(builder: flatbuffers.Builder, TARGET_EPOCHOffset: flatbuffers.Offset): void;
    static addEntityHandles(builder: flatbuffers.Builder, ENTITY_HANDLESOffset: flatbuffers.Offset): void;
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEntityHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaximumCount(builder: flatbuffers.Builder, MAXIMUM_COUNT: number): void;
    static addTargetCoordinateSystem(builder: flatbuffers.Builder, TARGET_COORDINATE_SYSTEMOffset: flatbuffers.Offset): void;
    static endPRWResidentRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWResidentRequestT;
    unpackTo(_o: PRWResidentRequestT): void;
}
export declare class PRWResidentRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    TARGET_EPOCH: TIMInstantT | null;
    ENTITY_HANDLES: (number)[];
    MAXIMUM_COUNT: number;
    TARGET_COORDINATE_SYSTEM: RFMCoordinateSystemT | null;
    constructor(INSTANCE?: PRWInstanceT | null, TARGET_EPOCH?: TIMInstantT | null, ENTITY_HANDLES?: (number)[], MAXIMUM_COUNT?: number, TARGET_COORDINATE_SYSTEM?: RFMCoordinateSystemT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWResidentRequest.d.ts.map