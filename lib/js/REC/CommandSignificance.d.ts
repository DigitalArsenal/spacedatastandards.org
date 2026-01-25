import * as flatbuffers from 'flatbuffers';
/**
 * Significance of command execution
 */
export declare class CommandSignificance implements flatbuffers.IUnpackableObject<CommandSignificanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CommandSignificance;
    static getRootAsCommandSignificance(bb: flatbuffers.ByteBuffer, obj?: CommandSignificance): CommandSignificance;
    static getSizePrefixedRootAsCommandSignificance(bb: flatbuffers.ByteBuffer, obj?: CommandSignificance): CommandSignificance;
    /**
     * Consequence level (1=lowest, higher=more severe)
     */
    CONSEQUENCE_LEVEL(): number;
    /**
     * Reason for significance
     */
    REASON_FOR_WARNING(): string | null;
    REASON_FOR_WARNING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCommandSignificance(builder: flatbuffers.Builder): void;
    static addConsequenceLevel(builder: flatbuffers.Builder, CONSEQUENCE_LEVEL: number): void;
    static addReasonForWarning(builder: flatbuffers.Builder, REASON_FOR_WARNINGOffset: flatbuffers.Offset): void;
    static endCommandSignificance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCommandSignificance(builder: flatbuffers.Builder, CONSEQUENCE_LEVEL: number, REASON_FOR_WARNINGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CommandSignificanceT;
    unpackTo(_o: CommandSignificanceT): void;
}
export declare class CommandSignificanceT implements flatbuffers.IGeneratedObject {
    CONSEQUENCE_LEVEL: number;
    REASON_FOR_WARNING: string | Uint8Array | null;
    constructor(CONSEQUENCE_LEVEL?: number, REASON_FOR_WARNING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CommandSignificance.d.ts.map