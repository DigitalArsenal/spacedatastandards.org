import * as flatbuffers from 'flatbuffers';
import { OILLink, OILLinkT } from './OILLink.js';
import { xmtPairVerdict } from './xmtPairVerdict.js';
/**
 * Result of comparing one proposed pair.
 */
export declare class XMTPairResult implements flatbuffers.IUnpackableObject<XMTPairResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTPairResult;
    static getRootAsXMTPairResult(bb: flatbuffers.ByteBuffer, obj?: XMTPairResult): XMTPairResult;
    static getSizePrefixedRootAsXMTPairResult(bb: flatbuffers.ByteBuffer, obj?: XMTPairResult): XMTPairResult;
    /**
     * The proposed link, as requested (identities, evidence).
     */
    LINK(obj?: OILLink): OILLink | null;
    VERDICT(): xmtPairVerdict;
    /**
     * Why the verdict (human-readable).
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Largest position separation over the arc, km; NaN when not compared.
     */
    MAX_POSITION_RESIDUAL_KM(): number;
    /**
     * Largest velocity separation over the arc, km/s; NaN when not compared.
     */
    MAX_VELOCITY_RESIDUAL_KM_S(): number;
    /**
     * Largest difference of the left trajectory's supplied velocity from its
     * differentiated positions, km/s; NaN when not compared.
     */
    LEFT_FINITE_DIFFERENCE_RESIDUAL_KM_S(): number;
    /**
     * The same for the right trajectory, km/s.
     */
    RIGHT_FINITE_DIFFERENCE_RESIDUAL_KM_S(): number;
    /**
     * Grid samples compared; 0 when not compared.
     */
    SAMPLES(): number;
    /**
     * Arc span compared, s.
     */
    SPAN_S(): number;
    /**
     * Key of the catalog object the pair would bind to ("norad:<n>" or
     * "cospar:<designator>"); empty when the pair names none.
     */
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the integration bound the native identity to OBJECT_KEY.
     */
    BOUND(): boolean;
    static startXMTPairResult(builder: flatbuffers.Builder): void;
    static addLink(builder: flatbuffers.Builder, LINKOffset: flatbuffers.Offset): void;
    static addVerdict(builder: flatbuffers.Builder, VERDICT: xmtPairVerdict): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addMaxPositionResidualKm(builder: flatbuffers.Builder, MAX_POSITION_RESIDUAL_KM: number): void;
    static addMaxVelocityResidualKmS(builder: flatbuffers.Builder, MAX_VELOCITY_RESIDUAL_KM_S: number): void;
    static addLeftFiniteDifferenceResidualKmS(builder: flatbuffers.Builder, LEFT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number): void;
    static addRightFiniteDifferenceResidualKmS(builder: flatbuffers.Builder, RIGHT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static addSpanS(builder: flatbuffers.Builder, SPAN_S: number): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addBound(builder: flatbuffers.Builder, BOUND: boolean): void;
    static endXMTPairResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTPairResult(builder: flatbuffers.Builder, LINKOffset: flatbuffers.Offset, VERDICT: xmtPairVerdict, REASONOffset: flatbuffers.Offset, MAX_POSITION_RESIDUAL_KM: number, MAX_VELOCITY_RESIDUAL_KM_S: number, LEFT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number, RIGHT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number, SAMPLES: number, SPAN_S: number, OBJECT_KEYOffset: flatbuffers.Offset, BOUND: boolean): flatbuffers.Offset;
    unpack(): XMTPairResultT;
    unpackTo(_o: XMTPairResultT): void;
}
export declare class XMTPairResultT implements flatbuffers.IGeneratedObject {
    LINK: OILLinkT | null;
    VERDICT: xmtPairVerdict;
    REASON: string | Uint8Array | null;
    MAX_POSITION_RESIDUAL_KM: number;
    MAX_VELOCITY_RESIDUAL_KM_S: number;
    LEFT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number;
    RIGHT_FINITE_DIFFERENCE_RESIDUAL_KM_S: number;
    SAMPLES: number;
    SPAN_S: number;
    OBJECT_KEY: string | Uint8Array | null;
    BOUND: boolean;
    constructor(LINK?: OILLinkT | null, VERDICT?: xmtPairVerdict, REASON?: string | Uint8Array | null, MAX_POSITION_RESIDUAL_KM?: number, MAX_VELOCITY_RESIDUAL_KM_S?: number, LEFT_FINITE_DIFFERENCE_RESIDUAL_KM_S?: number, RIGHT_FINITE_DIFFERENCE_RESIDUAL_KM_S?: number, SAMPLES?: number, SPAN_S?: number, OBJECT_KEY?: string | Uint8Array | null, BOUND?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTPairResult.d.ts.map