import * as flatbuffers from 'flatbuffers';
/**
 * One trajectory state time history of an OCM (CCSDS 502.0-B-3 Table 6-3 .. 6-4):
 * the block's keywords, and its data lines as written (a time tag, then the
 * numbers TRAJ_TYPE says). The single-trajectory fields of the OCM above state
 * the first block's CARTPV or CARTPVA states for the modules that read those.
 */
export declare class OCMTrajectoryBlock implements flatbuffers.IUnpackableObject<OCMTrajectoryBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMTrajectoryBlock;
    static getRootAsOCMTrajectoryBlock(bb: flatbuffers.ByteBuffer, obj?: OCMTrajectoryBlock): OCMTrajectoryBlock;
    static getSizePrefixedRootAsOCMTrajectoryBlock(bb: flatbuffers.ByteBuffer, obj?: OCMTrajectoryBlock): OCMTrajectoryBlock;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_ID.
     */
    TRAJ_ID(): string | null;
    TRAJ_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_PREV_ID.
     */
    TRAJ_PREV_ID(): string | null;
    TRAJ_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_NEXT_ID.
     */
    TRAJ_NEXT_ID(): string | null;
    TRAJ_NEXT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_BASIS: PREDICTED, DETERMINED, TELEMETRY, SIMULATED or OTHER.
     */
    TRAJ_BASIS(): string | null;
    TRAJ_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_BASIS_ID.
     */
    TRAJ_BASIS_ID(): string | null;
    TRAJ_BASIS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * INTERPOLATION: the recommended interpolation method.
     */
    INTERPOLATION(): string | null;
    INTERPOLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * INTERPOLATION_DEGREE.
     */
    INTERPOLATION_DEGREE(): number;
    /**
     * PROPAGATOR.
     */
    PROPAGATOR(): string | null;
    PROPAGATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CENTER_NAME.
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_REF_FRAME.
     */
    TRAJ_REF_FRAME(): string | null;
    TRAJ_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_FRAME_EPOCH.
     */
    TRAJ_FRAME_EPOCH(): string | null;
    TRAJ_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USEABLE_START_TIME.
     */
    USEABLE_START_TIME(): string | null;
    USEABLE_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USEABLE_STOP_TIME.
     */
    USEABLE_STOP_TIME(): string | null;
    USEABLE_STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORB_REVNUM, NaN when not stated.
     */
    ORB_REVNUM(): number;
    /**
     * ORB_REVNUM_BASIS: 0 or 1, -1 when not stated.
     */
    ORB_REVNUM_BASIS(): number;
    /**
     * TRAJ_TYPE as written, for example CARTPV.
     */
    TRAJ_TYPE(): string | null;
    TRAJ_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORB_AVERAGING.
     */
    ORB_AVERAGING(): string | null;
    ORB_AVERAGING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TRAJ_UNITS.
     */
    TRAJ_UNITS(): string | null;
    TRAJ_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The data lines, as written.
     */
    LINES(index: number): string;
    LINES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    linesLength(): number;
    static startOCMTrajectoryBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addTrajId(builder: flatbuffers.Builder, TRAJ_IDOffset: flatbuffers.Offset): void;
    static addTrajPrevId(builder: flatbuffers.Builder, TRAJ_PREV_IDOffset: flatbuffers.Offset): void;
    static addTrajNextId(builder: flatbuffers.Builder, TRAJ_NEXT_IDOffset: flatbuffers.Offset): void;
    static addTrajBasis(builder: flatbuffers.Builder, TRAJ_BASISOffset: flatbuffers.Offset): void;
    static addTrajBasisId(builder: flatbuffers.Builder, TRAJ_BASIS_IDOffset: flatbuffers.Offset): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addPropagator(builder: flatbuffers.Builder, PROPAGATOROffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addTrajRefFrame(builder: flatbuffers.Builder, TRAJ_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTrajFrameEpoch(builder: flatbuffers.Builder, TRAJ_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, USEABLE_START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, USEABLE_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addOrbRevnum(builder: flatbuffers.Builder, ORB_REVNUM: number): void;
    static addOrbRevnumBasis(builder: flatbuffers.Builder, ORB_REVNUM_BASIS: number): void;
    static addTrajType(builder: flatbuffers.Builder, TRAJ_TYPEOffset: flatbuffers.Offset): void;
    static addOrbAveraging(builder: flatbuffers.Builder, ORB_AVERAGINGOffset: flatbuffers.Offset): void;
    static addTrajUnits(builder: flatbuffers.Builder, TRAJ_UNITSOffset: flatbuffers.Offset): void;
    static addLines(builder: flatbuffers.Builder, LINESOffset: flatbuffers.Offset): void;
    static createLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCMTrajectoryBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMTrajectoryBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, TRAJ_IDOffset: flatbuffers.Offset, TRAJ_PREV_IDOffset: flatbuffers.Offset, TRAJ_NEXT_IDOffset: flatbuffers.Offset, TRAJ_BASISOffset: flatbuffers.Offset, TRAJ_BASIS_IDOffset: flatbuffers.Offset, INTERPOLATIONOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number, PROPAGATOROffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, TRAJ_REF_FRAMEOffset: flatbuffers.Offset, TRAJ_FRAME_EPOCHOffset: flatbuffers.Offset, USEABLE_START_TIMEOffset: flatbuffers.Offset, USEABLE_STOP_TIMEOffset: flatbuffers.Offset, ORB_REVNUM: number, ORB_REVNUM_BASIS: number, TRAJ_TYPEOffset: flatbuffers.Offset, ORB_AVERAGINGOffset: flatbuffers.Offset, TRAJ_UNITSOffset: flatbuffers.Offset, LINESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMTrajectoryBlockT;
    unpackTo(_o: OCMTrajectoryBlockT): void;
}
export declare class OCMTrajectoryBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    TRAJ_ID: string | Uint8Array | null;
    TRAJ_PREV_ID: string | Uint8Array | null;
    TRAJ_NEXT_ID: string | Uint8Array | null;
    TRAJ_BASIS: string | Uint8Array | null;
    TRAJ_BASIS_ID: string | Uint8Array | null;
    INTERPOLATION: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    PROPAGATOR: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    TRAJ_REF_FRAME: string | Uint8Array | null;
    TRAJ_FRAME_EPOCH: string | Uint8Array | null;
    USEABLE_START_TIME: string | Uint8Array | null;
    USEABLE_STOP_TIME: string | Uint8Array | null;
    ORB_REVNUM: number;
    ORB_REVNUM_BASIS: number;
    TRAJ_TYPE: string | Uint8Array | null;
    ORB_AVERAGING: string | Uint8Array | null;
    TRAJ_UNITS: string | Uint8Array | null;
    LINES: (string)[];
    constructor(COMMENT?: string | Uint8Array | null, TRAJ_ID?: string | Uint8Array | null, TRAJ_PREV_ID?: string | Uint8Array | null, TRAJ_NEXT_ID?: string | Uint8Array | null, TRAJ_BASIS?: string | Uint8Array | null, TRAJ_BASIS_ID?: string | Uint8Array | null, INTERPOLATION?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, PROPAGATOR?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, TRAJ_REF_FRAME?: string | Uint8Array | null, TRAJ_FRAME_EPOCH?: string | Uint8Array | null, USEABLE_START_TIME?: string | Uint8Array | null, USEABLE_STOP_TIME?: string | Uint8Array | null, ORB_REVNUM?: number, ORB_REVNUM_BASIS?: number, TRAJ_TYPE?: string | Uint8Array | null, ORB_AVERAGING?: string | Uint8Array | null, TRAJ_UNITS?: string | Uint8Array | null, LINES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMTrajectoryBlock.d.ts.map