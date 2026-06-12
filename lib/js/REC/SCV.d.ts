import * as flatbuffers from 'flatbuffers';
import { SCVCancel, SCVCancelT } from './SCVCancel.js';
import { SCVCoverageRequest, SCVCoverageRequestT } from './SCVCoverageRequest.js';
import { SCVPackedGeometryChunk, SCVPackedGeometryChunkT } from './SCVPackedGeometryChunk.js';
import { SCVProgress, SCVProgressT } from './SCVProgress.js';
import { SCVResult, SCVResultT } from './SCVResult.js';
import { scvEnvelopeKind } from './scvEnvelopeKind.js';
export declare class SCV implements flatbuffers.IUnpackableObject<SCVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCV;
    static getRootAsSCV(bb: flatbuffers.ByteBuffer, obj?: SCV): SCV;
    static getSizePrefixedRootAsSCV(bb: flatbuffers.ByteBuffer, obj?: SCV): SCV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ENVELOPE_KIND(): scvEnvelopeKind;
    REQUEST(obj?: SCVCoverageRequest): SCVCoverageRequest | null;
    PROGRESS(obj?: SCVProgress): SCVProgress | null;
    CANCEL(obj?: SCVCancel): SCVCancel | null;
    RESULT(obj?: SCVResult): SCVResult | null;
    GEOMETRY(obj?: SCVPackedGeometryChunk): SCVPackedGeometryChunk | null;
    static startSCV(builder: flatbuffers.Builder): void;
    static addEnvelopeKind(builder: flatbuffers.Builder, ENVELOPE_KIND: scvEnvelopeKind): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addProgress(builder: flatbuffers.Builder, PROGRESSOffset: flatbuffers.Offset): void;
    static addCancel(builder: flatbuffers.Builder, CANCELOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static endSCV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SCVT;
    unpackTo(_o: SCVT): void;
}
export declare class SCVT implements flatbuffers.IGeneratedObject {
    ENVELOPE_KIND: scvEnvelopeKind;
    REQUEST: SCVCoverageRequestT | null;
    PROGRESS: SCVProgressT | null;
    CANCEL: SCVCancelT | null;
    RESULT: SCVResultT | null;
    GEOMETRY: SCVPackedGeometryChunkT | null;
    constructor(ENVELOPE_KIND?: scvEnvelopeKind, REQUEST?: SCVCoverageRequestT | null, PROGRESS?: SCVProgressT | null, CANCEL?: SCVCancelT | null, RESULT?: SCVResultT | null, GEOMETRY?: SCVPackedGeometryChunkT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCV.d.ts.map