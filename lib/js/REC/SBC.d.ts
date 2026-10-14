import * as flatbuffers from 'flatbuffers';
import { SBCCovarianceRequest, SBCCovarianceRequestT } from './SBCCovarianceRequest.js';
import { SBCDiagnostics, SBCDiagnosticsT } from './SBCDiagnostics.js';
/**
 * Sensor Bias Contribution - exactly one arm is set.
 */
export declare class SBC implements flatbuffers.IUnpackableObject<SBCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBC;
    static getRootAsSBC(bb: flatbuffers.ByteBuffer, obj?: SBC): SBC;
    static getSizePrefixedRootAsSBC(bb: flatbuffers.ByteBuffer, obj?: SBC): SBC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: SBCCovarianceRequest): SBCCovarianceRequest | null;
    DIAGNOSTICS(obj?: SBCDiagnostics): SBCDiagnostics | null;
    static startSBC(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addDiagnostics(builder: flatbuffers.Builder, DIAGNOSTICSOffset: flatbuffers.Offset): void;
    static endSBC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSBCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSBCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SBCT;
    unpackTo(_o: SBCT): void;
}
export declare class SBCT implements flatbuffers.IGeneratedObject {
    REQUEST: SBCCovarianceRequestT | null;
    DIAGNOSTICS: SBCDiagnosticsT | null;
    constructor(REQUEST?: SBCCovarianceRequestT | null, DIAGNOSTICS?: SBCDiagnosticsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBC.d.ts.map