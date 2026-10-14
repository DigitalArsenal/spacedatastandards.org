import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
import { XMTMeasuredError, XMTMeasuredErrorT } from './XMTMeasuredError.js';
import { XMTRecordRef, XMTRecordRefT } from './XMTRecordRef.js';
import { xmtCovarianceOrigin } from './xmtCovarianceOrigin.js';
import { xmtSelectionReason } from './xmtSelectionReason.js';
/**
 * The product chosen for one object and kind.
 */
export declare class XMTProductSelection implements flatbuffers.IUnpackableObject<XMTProductSelectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTProductSelection;
    static getRootAsXMTProductSelection(bb: flatbuffers.ByteBuffer, obj?: XMTProductSelection): XMTProductSelection;
    static getSizePrefixedRootAsXMTProductSelection(bb: flatbuffers.ByteBuffer, obj?: XMTProductSelection): XMTProductSelection;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_MS(): bigint;
    REASON(): xmtSelectionReason;
    /**
     * True when another measured candidate has the same median.
     */
    TIE(): boolean;
    /**
     * The element set chosen ($OMM).
     */
    OMM_REF(obj?: XMTRecordRef): XMTRecordRef | null;
    /**
     * The paired state and covariance ($OCM), when there is one.
     */
    OCM_REF(obj?: XMTRecordRef): XMTRecordRef | null;
    COVARIANCE_ORIGIN(): xmtCovarianceOrigin;
    /**
     * The covariance's realism label.
     */
    COVARIANCE(obj?: CVR): CVR | null;
    /**
     * The measured row it won on (when MEASURED).
     */
    MEASURED(obj?: XMTMeasuredError): XMTMeasuredError | null;
    static startXMTProductSelection(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addReason(builder: flatbuffers.Builder, REASON: xmtSelectionReason): void;
    static addTie(builder: flatbuffers.Builder, TIE: boolean): void;
    static addOmmRef(builder: flatbuffers.Builder, OMM_REFOffset: flatbuffers.Offset): void;
    static addOcmRef(builder: flatbuffers.Builder, OCM_REFOffset: flatbuffers.Offset): void;
    static addCovarianceOrigin(builder: flatbuffers.Builder, COVARIANCE_ORIGIN: xmtCovarianceOrigin): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static addMeasured(builder: flatbuffers.Builder, MEASUREDOffset: flatbuffers.Offset): void;
    static endXMTProductSelection(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTProductSelectionT;
    unpackTo(_o: XMTProductSelectionT): void;
}
export declare class XMTProductSelectionT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    EPOCH_MS: bigint;
    REASON: xmtSelectionReason;
    TIE: boolean;
    OMM_REF: XMTRecordRefT | null;
    OCM_REF: XMTRecordRefT | null;
    COVARIANCE_ORIGIN: xmtCovarianceOrigin;
    COVARIANCE: CVRT | null;
    MEASURED: XMTMeasuredErrorT | null;
    constructor(SOURCE_ID?: string | Uint8Array | null, EPOCH_MS?: bigint, REASON?: xmtSelectionReason, TIE?: boolean, OMM_REF?: XMTRecordRefT | null, OCM_REF?: XMTRecordRefT | null, COVARIANCE_ORIGIN?: xmtCovarianceOrigin, COVARIANCE?: CVRT | null, MEASURED?: XMTMeasuredErrorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTProductSelection.d.ts.map