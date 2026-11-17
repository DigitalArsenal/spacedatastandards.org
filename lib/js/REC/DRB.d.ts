import * as flatbuffers from 'flatbuffers';
import { DRBOutcome, DRBOutcomeT } from './DRBOutcome.js';
/**
 * Derived Row Build.
 */
export declare class DRB implements flatbuffers.IUnpackableObject<DRBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DRB;
    static getRootAsDRB(bb: flatbuffers.ByteBuffer, obj?: DRB): DRB;
    static getSizePrefixedRootAsDRB(bb: flatbuffers.ByteBuffer, obj?: DRB): DRB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * SHA-256 of the exact artifact that will load the rows (32 bytes): the receiving module file, not the
     * builder. It becomes DPMDerivedBuild.BUILDER_DIGEST; a receiver whose own digest differs must not use
     * the rows.
     */
    RECEIVER_ARTIFACT_SHA256(index: number): number | null;
    receiverArtifactSha256Length(): number;
    receiverArtifactSha256Array(): Uint8Array | null;
    /**
     * Start of the first window, microseconds since 1970-01-01T00:00:00 UTC on the UNIX scale ($MOR
     * EPOCH_UNIX_US).
     */
    START_UNIX_US(): bigint;
    /**
     * Windows per record, consecutive from START_UNIX_US as the receiver lays its windows out; 1 or 2.
     */
    WINDOW_COUNT(): number;
    /**
     * Position series only, no velocity series (flags bit 0).
     */
    POSITION_ONLY(): boolean;
    /**
     * Rows also for the receiver's wide records (flags bit 1).
     */
    WIDE_RECORDS(): boolean;
    /**
     * In the returned request: one entry per input record without rows, ascending RECORD_INDEX. Empty in
     * the request a builder receives.
     */
    OUTCOMES(index: number, obj?: DRBOutcome): DRBOutcome | null;
    outcomesLength(): number;
    static startDRB(builder: flatbuffers.Builder): void;
    static addReceiverArtifactSha256(builder: flatbuffers.Builder, RECEIVER_ARTIFACT_SHA256Offset: flatbuffers.Offset): void;
    static createReceiverArtifactSha256Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceiverArtifactSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addStartUnixUs(builder: flatbuffers.Builder, START_UNIX_US: bigint): void;
    static addWindowCount(builder: flatbuffers.Builder, WINDOW_COUNT: number): void;
    static addPositionOnly(builder: flatbuffers.Builder, POSITION_ONLY: boolean): void;
    static addWideRecords(builder: flatbuffers.Builder, WIDE_RECORDS: boolean): void;
    static addOutcomes(builder: flatbuffers.Builder, OUTCOMESOffset: flatbuffers.Offset): void;
    static startOutcomesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDRB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDRBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDRBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDRB(builder: flatbuffers.Builder, RECEIVER_ARTIFACT_SHA256Offset: flatbuffers.Offset, START_UNIX_US: bigint, WINDOW_COUNT: number, POSITION_ONLY: boolean, WIDE_RECORDS: boolean, OUTCOMESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DRBT;
    unpackTo(_o: DRBT): void;
}
export declare class DRBT implements flatbuffers.IGeneratedObject {
    RECEIVER_ARTIFACT_SHA256: (number)[];
    START_UNIX_US: bigint;
    WINDOW_COUNT: number;
    POSITION_ONLY: boolean;
    WIDE_RECORDS: boolean;
    OUTCOMES: (DRBOutcomeT)[];
    constructor(RECEIVER_ARTIFACT_SHA256?: (number)[], START_UNIX_US?: bigint, WINDOW_COUNT?: number, POSITION_ONLY?: boolean, WIDE_RECORDS?: boolean, OUTCOMES?: (DRBOutcomeT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DRB.d.ts.map