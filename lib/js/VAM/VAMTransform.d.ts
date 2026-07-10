import * as flatbuffers from 'flatbuffers';
import { VAMQuaternion, VAMQuaternionT } from './VAMQuaternion.js';
import { VAMScale3, VAMScale3T } from './VAMScale3.js';
import { VAMVector3, VAMVector3T } from './VAMVector3.js';
import { visualAssetUpAxis } from './visualAssetUpAxis.js';
/**
 * Transform from source coordinates into canonical meters. Absent SCALE and omitted scale components mean identity scale; translation and bounds use VAMVector3 zero defaults.
 */
export declare class VAMTransform implements flatbuffers.IUnpackableObject<VAMTransformT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMTransform;
    static getRootAsVAMTransform(bb: flatbuffers.ByteBuffer, obj?: VAMTransform): VAMTransform;
    static getSizePrefixedRootAsVAMTransform(bb: flatbuffers.ByteBuffer, obj?: VAMTransform): VAMTransform;
    TRANSLATION(obj?: VAMVector3): VAMVector3 | null;
    ROTATION(obj?: VAMQuaternion): VAMQuaternion | null;
    SCALE(obj?: VAMScale3): VAMScale3 | null;
    UP_AXIS(): visualAssetUpAxis;
    SOURCE_UNITS(): string | null;
    SOURCE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METERS_PER_SOURCE_UNIT(): number;
    ORIGIN_NOTE(): string | null;
    ORIGIN_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMTransform(builder: flatbuffers.Builder): void;
    static addTranslation(builder: flatbuffers.Builder, TRANSLATIONOffset: flatbuffers.Offset): void;
    static addRotation(builder: flatbuffers.Builder, ROTATIONOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALEOffset: flatbuffers.Offset): void;
    static addUpAxis(builder: flatbuffers.Builder, UP_AXIS: visualAssetUpAxis): void;
    static addSourceUnits(builder: flatbuffers.Builder, SOURCE_UNITSOffset: flatbuffers.Offset): void;
    static addMetersPerSourceUnit(builder: flatbuffers.Builder, METERS_PER_SOURCE_UNIT: number): void;
    static addOriginNote(builder: flatbuffers.Builder, ORIGIN_NOTEOffset: flatbuffers.Offset): void;
    static endVAMTransform(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VAMTransformT;
    unpackTo(_o: VAMTransformT): void;
}
export declare class VAMTransformT implements flatbuffers.IGeneratedObject {
    TRANSLATION: VAMVector3T | null;
    ROTATION: VAMQuaternionT | null;
    SCALE: VAMScale3T | null;
    UP_AXIS: visualAssetUpAxis;
    SOURCE_UNITS: string | Uint8Array | null;
    METERS_PER_SOURCE_UNIT: number;
    ORIGIN_NOTE: string | Uint8Array | null;
    constructor(TRANSLATION?: VAMVector3T | null, ROTATION?: VAMQuaternionT | null, SCALE?: VAMScale3T | null, UP_AXIS?: visualAssetUpAxis, SOURCE_UNITS?: string | Uint8Array | null, METERS_PER_SOURCE_UNIT?: number, ORIGIN_NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMTransform.d.ts.map