import * as flatbuffers from 'flatbuffers';
import { aisMessageRole } from './aisMessageRole.js';
/**
 * One structured message in an AI conversation transcript.
 */
export declare class AISMessage implements flatbuffers.IUnpackableObject<AISMessageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AISMessage;
    static getRootAsAISMessage(bb: flatbuffers.ByteBuffer, obj?: AISMessage): AISMessage;
    static getSizePrefixedRootAsAISMessage(bb: flatbuffers.ByteBuffer, obj?: AISMessage): AISMessage;
    /**
     * Participant role for this message.
     */
    ROLE(): aisMessageRole;
    /**
     * UTF-8 message body text.
     */
    CONTENT(): string | null;
    CONTENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC timestamp when the message was created.
     */
    TIMESTAMP_UTC(): string | null;
    TIMESTAMP_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Correlating tool-call identifier when ROLE is TOOL or ASSISTANT.
     */
    TOOL_CALL_ID(): string | null;
    TOOL_CALL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tool name when associated with a tool invocation.
     */
    TOOL_NAME(): string | null;
    TOOL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAISMessage(builder: flatbuffers.Builder): void;
    static addRole(builder: flatbuffers.Builder, ROLE: aisMessageRole): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static addTimestampUtc(builder: flatbuffers.Builder, TIMESTAMP_UTCOffset: flatbuffers.Offset): void;
    static addToolCallId(builder: flatbuffers.Builder, TOOL_CALL_IDOffset: flatbuffers.Offset): void;
    static addToolName(builder: flatbuffers.Builder, TOOL_NAMEOffset: flatbuffers.Offset): void;
    static endAISMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAISMessage(builder: flatbuffers.Builder, ROLE: aisMessageRole, CONTENTOffset: flatbuffers.Offset, TIMESTAMP_UTCOffset: flatbuffers.Offset, TOOL_CALL_IDOffset: flatbuffers.Offset, TOOL_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AISMessageT;
    unpackTo(_o: AISMessageT): void;
}
export declare class AISMessageT implements flatbuffers.IGeneratedObject {
    ROLE: aisMessageRole;
    CONTENT: string | Uint8Array | null;
    TIMESTAMP_UTC: string | Uint8Array | null;
    TOOL_CALL_ID: string | Uint8Array | null;
    TOOL_NAME: string | Uint8Array | null;
    constructor(ROLE?: aisMessageRole, CONTENT?: string | Uint8Array | null, TIMESTAMP_UTC?: string | Uint8Array | null, TOOL_CALL_ID?: string | Uint8Array | null, TOOL_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AISMessage.d.ts.map