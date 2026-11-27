import * as flatbuffers from 'flatbuffers';
/**
 * One structured tool call and optional result captured during a model turn.
 */
export declare class AISToolCall implements flatbuffers.IUnpackableObject<AISToolCallT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AISToolCall;
    static getRootAsAISToolCall(bb: flatbuffers.ByteBuffer, obj?: AISToolCall): AISToolCall;
    static getSizePrefixedRootAsAISToolCall(bb: flatbuffers.ByteBuffer, obj?: AISToolCall): AISToolCall;
    /**
     * Model-assigned call identifier.
     */
    CALL_ID(): string | null;
    CALL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Invoked tool name.
     */
    TOOL_NAME(): string;
    TOOL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Serialized tool arguments as invoked.
     */
    ARGUMENTS_TEXT(): string | null;
    ARGUMENTS_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Serialized or summarized tool result returned to the model.
     */
    RESULT_TEXT(): string | null;
    RESULT_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the tool invocation returned an error.
     */
    IS_ERROR(): boolean;
    /**
     * Wall-clock duration of the tool execution in milliseconds.
     */
    DURATION_MS(): number;
    static startAISToolCall(builder: flatbuffers.Builder): void;
    static addCallId(builder: flatbuffers.Builder, CALL_IDOffset: flatbuffers.Offset): void;
    static addToolName(builder: flatbuffers.Builder, TOOL_NAMEOffset: flatbuffers.Offset): void;
    static addArgumentsText(builder: flatbuffers.Builder, ARGUMENTS_TEXTOffset: flatbuffers.Offset): void;
    static addResultText(builder: flatbuffers.Builder, RESULT_TEXTOffset: flatbuffers.Offset): void;
    static addIsError(builder: flatbuffers.Builder, IS_ERROR: boolean): void;
    static addDurationMs(builder: flatbuffers.Builder, DURATION_MS: number): void;
    static endAISToolCall(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAISToolCall(builder: flatbuffers.Builder, CALL_IDOffset: flatbuffers.Offset, TOOL_NAMEOffset: flatbuffers.Offset, ARGUMENTS_TEXTOffset: flatbuffers.Offset, RESULT_TEXTOffset: flatbuffers.Offset, IS_ERROR: boolean, DURATION_MS: number): flatbuffers.Offset;
    unpack(): AISToolCallT;
    unpackTo(_o: AISToolCallT): void;
}
export declare class AISToolCallT implements flatbuffers.IGeneratedObject {
    CALL_ID: string | Uint8Array | null;
    TOOL_NAME: string | Uint8Array | null;
    ARGUMENTS_TEXT: string | Uint8Array | null;
    RESULT_TEXT: string | Uint8Array | null;
    IS_ERROR: boolean;
    DURATION_MS: number;
    constructor(CALL_ID?: string | Uint8Array | null, TOOL_NAME?: string | Uint8Array | null, ARGUMENTS_TEXT?: string | Uint8Array | null, RESULT_TEXT?: string | Uint8Array | null, IS_ERROR?: boolean, DURATION_MS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AISToolCall.d.ts.map