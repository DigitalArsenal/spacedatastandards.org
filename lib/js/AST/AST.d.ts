import * as flatbuffers from 'flatbuffers';
/**
 * Astrodynamics
 */
export declare class AST implements flatbuffers.IUnpackableObject<ASTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AST;
    static getRootAsAST(bb: flatbuffers.ByteBuffer, obj?: AST): AST;
    static getSizePrefixedRootAsAST(bb: flatbuffers.ByteBuffer, obj?: AST): AST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATION_REQUEST(): string | null;
    PROPAGATION_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TLE(): string | null;
    TLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INITIAL_ELEMENTS(): string | null;
    INITIAL_ELEMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INITIAL_STATE(): string | null;
    INITIAL_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_MS(): bigint;
    MANEUVER_PLAN(): string | null;
    MANEUVER_PLAN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONJUNCTION_PRIMARY(): string | null;
    CONJUNCTION_PRIMARY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONJUNCTION_SECONDARY(): string | null;
    CONJUNCTION_SECONDARY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBSERVATIONS(index: number): string;
    OBSERVATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    observationsLength(): number;
    OD_CONFIG(): string | null;
    OD_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GROUND_STATION(): string | null;
    GROUND_STATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FORMATION_CONFIG(): string | null;
    FORMATION_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_ELEMENTS(): string | null;
    TARGET_ELEMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAST(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addPropagationRequest(builder: flatbuffers.Builder, PROPAGATION_REQUESTOffset: flatbuffers.Offset): void;
    static addTle(builder: flatbuffers.Builder, TLEOffset: flatbuffers.Offset): void;
    static addInitialElements(builder: flatbuffers.Builder, INITIAL_ELEMENTSOffset: flatbuffers.Offset): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addManeuverPlan(builder: flatbuffers.Builder, MANEUVER_PLANOffset: flatbuffers.Offset): void;
    static addConjunctionPrimary(builder: flatbuffers.Builder, CONJUNCTION_PRIMARYOffset: flatbuffers.Offset): void;
    static addConjunctionSecondary(builder: flatbuffers.Builder, CONJUNCTION_SECONDARYOffset: flatbuffers.Offset): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOdConfig(builder: flatbuffers.Builder, OD_CONFIGOffset: flatbuffers.Offset): void;
    static addGroundStation(builder: flatbuffers.Builder, GROUND_STATIONOffset: flatbuffers.Offset): void;
    static addFormationConfig(builder: flatbuffers.Builder, FORMATION_CONFIGOffset: flatbuffers.Offset): void;
    static addTargetElements(builder: flatbuffers.Builder, TARGET_ELEMENTSOffset: flatbuffers.Offset): void;
    static endAST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishASTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedASTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAST(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, PROPAGATION_REQUESTOffset: flatbuffers.Offset, TLEOffset: flatbuffers.Offset, INITIAL_ELEMENTSOffset: flatbuffers.Offset, INITIAL_STATEOffset: flatbuffers.Offset, EPOCH_MS: bigint, MANEUVER_PLANOffset: flatbuffers.Offset, CONJUNCTION_PRIMARYOffset: flatbuffers.Offset, CONJUNCTION_SECONDARYOffset: flatbuffers.Offset, OBSERVATIONSOffset: flatbuffers.Offset, OD_CONFIGOffset: flatbuffers.Offset, GROUND_STATIONOffset: flatbuffers.Offset, FORMATION_CONFIGOffset: flatbuffers.Offset, TARGET_ELEMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASTT;
    unpackTo(_o: ASTT): void;
}
export declare class ASTT implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    PROPAGATION_REQUEST: string | Uint8Array | null;
    TLE: string | Uint8Array | null;
    INITIAL_ELEMENTS: string | Uint8Array | null;
    INITIAL_STATE: string | Uint8Array | null;
    EPOCH_MS: bigint;
    MANEUVER_PLAN: string | Uint8Array | null;
    CONJUNCTION_PRIMARY: string | Uint8Array | null;
    CONJUNCTION_SECONDARY: string | Uint8Array | null;
    OBSERVATIONS: (string)[];
    OD_CONFIG: string | Uint8Array | null;
    GROUND_STATION: string | Uint8Array | null;
    FORMATION_CONFIG: string | Uint8Array | null;
    TARGET_ELEMENTS: string | Uint8Array | null;
    constructor(COMMAND?: string | Uint8Array | null, PROPAGATION_REQUEST?: string | Uint8Array | null, TLE?: string | Uint8Array | null, INITIAL_ELEMENTS?: string | Uint8Array | null, INITIAL_STATE?: string | Uint8Array | null, EPOCH_MS?: bigint, MANEUVER_PLAN?: string | Uint8Array | null, CONJUNCTION_PRIMARY?: string | Uint8Array | null, CONJUNCTION_SECONDARY?: string | Uint8Array | null, OBSERVATIONS?: (string)[], OD_CONFIG?: string | Uint8Array | null, GROUND_STATION?: string | Uint8Array | null, FORMATION_CONFIG?: string | Uint8Array | null, TARGET_ELEMENTS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AST.d.ts.map