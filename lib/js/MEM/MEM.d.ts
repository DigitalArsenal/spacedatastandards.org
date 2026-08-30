import * as flatbuffers from 'flatbuffers';
import { MEMAttestation, MEMAttestationT } from './MEMAttestation.js';
import { MEMEditingDecision, MEMEditingDecisionT } from './MEMEditingDecision.js';
import { MEMErrorModel, MEMErrorModelT } from './MEMErrorModel.js';
/**
 * Measurement Error Model. JSON projections preserve these IDL-capitalized
 * field names exactly. The FlatBuffer signature covers the size-prefixed
 * buffer with both signature vectors zeroed; the canonical-JSON signature
 * covers RFC 8785 canonical JSON with both signature fields omitted.
 */
export declare class MEM implements flatbuffers.IUnpackableObject<MEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MEM;
    static getRootAsMEM(bb: flatbuffers.ByteBuffer, obj?: MEM): MEM;
    static getSizePrefixedRootAsMEM(bb: flatbuffers.ByteBuffer, obj?: MEM): MEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ERROR_MODELS(index: number, obj?: MEMErrorModel): MEMErrorModel | null;
    errorModelsLength(): number;
    EDITING_LEDGER(index: number, obj?: MEMEditingDecision): MEMEditingDecision | null;
    editingLedgerLength(): number;
    RANDOM_SEED(): bigint;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTESTATION(obj?: MEMAttestation): MEMAttestation | null;
    static startMEM(builder: flatbuffers.Builder): void;
    static addErrorModels(builder: flatbuffers.Builder, ERROR_MODELSOffset: flatbuffers.Offset): void;
    static createErrorModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startErrorModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEditingLedger(builder: flatbuffers.Builder, EDITING_LEDGEROffset: flatbuffers.Offset): void;
    static createEditingLedgerVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEditingLedgerVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRandomSeed(builder: flatbuffers.Builder, RANDOM_SEED: bigint): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addAttestation(builder: flatbuffers.Builder, ATTESTATIONOffset: flatbuffers.Offset): void;
    static endMEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MEMT;
    unpackTo(_o: MEMT): void;
}
export declare class MEMT implements flatbuffers.IGeneratedObject {
    ERROR_MODELS: (MEMErrorModelT)[];
    EDITING_LEDGER: (MEMEditingDecisionT)[];
    RANDOM_SEED: bigint;
    TRACE_ID: string | Uint8Array | null;
    ATTESTATION: MEMAttestationT | null;
    constructor(ERROR_MODELS?: (MEMErrorModelT)[], EDITING_LEDGER?: (MEMEditingDecisionT)[], RANDOM_SEED?: bigint, TRACE_ID?: string | Uint8Array | null, ATTESTATION?: MEMAttestationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MEM.d.ts.map