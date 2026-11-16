import * as flatbuffers from 'flatbuffers';
import { BodyDescriptor, BodyDescriptorT } from './BodyDescriptor.js';
import { clgClearanceMode } from './clgClearanceMode.js';
export declare class CLGBody implements flatbuffers.IUnpackableObject<CLGBodyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGBody;
    static getRootAsCLGBody(bb: flatbuffers.ByteBuffer, obj?: CLGBody): CLGBody;
    static getSizePrefixedRootAsCLGBody(bb: flatbuffers.ByteBuffer, obj?: CLGBody): CLGBody;
    MODEL(obj?: BodyDescriptor): BodyDescriptor | null;
    /**
     * Missing HAS_MOTION_SOURCE_INDEX is allowed only with explicitly supplied
     * FRAME_STATIONARY=true and exact identity
     * with the definition's fixed frame. Otherwise a valid source is required.
     */
    MOTION_SOURCE_INDEX(): number;
    FRAME_STATIONARY(): boolean;
    CLEARANCE(): clgClearanceMode;
    /**
     * Presence flag required; finite >=0, added to EACH semiaxis only when BOTH
     * endpoints are SPACECRAFT. BodyDescriptor always describes true surface.
     */
    SPACE_SPACE_SKIM_MARGIN_M(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_MOTION_SOURCE_INDEX(): boolean;
    HAS_FRAME_STATIONARY(): boolean;
    HAS_CLEARANCE(): boolean;
    HAS_SPACE_SPACE_SKIM_MARGIN_M(): boolean;
    static startCLGBody(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addMotionSourceIndex(builder: flatbuffers.Builder, MOTION_SOURCE_INDEX: number): void;
    static addFrameStationary(builder: flatbuffers.Builder, FRAME_STATIONARY: boolean): void;
    static addClearance(builder: flatbuffers.Builder, CLEARANCE: clgClearanceMode): void;
    static addSpaceSpaceSkimMarginM(builder: flatbuffers.Builder, SPACE_SPACE_SKIM_MARGIN_M: number): void;
    static addHasMotionSourceIndex(builder: flatbuffers.Builder, HAS_MOTION_SOURCE_INDEX: boolean): void;
    static addHasFrameStationary(builder: flatbuffers.Builder, HAS_FRAME_STATIONARY: boolean): void;
    static addHasClearance(builder: flatbuffers.Builder, HAS_CLEARANCE: boolean): void;
    static addHasSpaceSpaceSkimMarginM(builder: flatbuffers.Builder, HAS_SPACE_SPACE_SKIM_MARGIN_M: boolean): void;
    static endCLGBody(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGBody(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset, MOTION_SOURCE_INDEX: number, FRAME_STATIONARY: boolean, CLEARANCE: clgClearanceMode, SPACE_SPACE_SKIM_MARGIN_M: number, HAS_MOTION_SOURCE_INDEX: boolean, HAS_FRAME_STATIONARY: boolean, HAS_CLEARANCE: boolean, HAS_SPACE_SPACE_SKIM_MARGIN_M: boolean): flatbuffers.Offset;
    unpack(): CLGBodyT;
    unpackTo(_o: CLGBodyT): void;
}
export declare class CLGBodyT implements flatbuffers.IGeneratedObject {
    MODEL: BodyDescriptorT | null;
    MOTION_SOURCE_INDEX: number;
    FRAME_STATIONARY: boolean;
    CLEARANCE: clgClearanceMode;
    SPACE_SPACE_SKIM_MARGIN_M: number;
    HAS_MOTION_SOURCE_INDEX: boolean;
    HAS_FRAME_STATIONARY: boolean;
    HAS_CLEARANCE: boolean;
    HAS_SPACE_SPACE_SKIM_MARGIN_M: boolean;
    constructor(MODEL?: BodyDescriptorT | null, MOTION_SOURCE_INDEX?: number, FRAME_STATIONARY?: boolean, CLEARANCE?: clgClearanceMode, SPACE_SPACE_SKIM_MARGIN_M?: number, HAS_MOTION_SOURCE_INDEX?: boolean, HAS_FRAME_STATIONARY?: boolean, HAS_CLEARANCE?: boolean, HAS_SPACE_SPACE_SKIM_MARGIN_M?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGBody.d.ts.map