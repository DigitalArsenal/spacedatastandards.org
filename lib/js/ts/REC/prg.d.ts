import * as flatbuffers from 'flatbuffers';
import { USR, USRT } from './usr.js';
/**
 * Program Description Message
 */
export declare class PRG implements flatbuffers.IUnpackableObject<PRGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRG;
    static getRootAsPRG(bb: flatbuffers.ByteBuffer, obj?: PRG): PRG;
    static getSizePrefixedRootAsPRG(bb: flatbuffers.ByteBuffer, obj?: PRG): PRG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The name of the program
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hierarchical Deterministic (HD) derivation path for the program's key, used in cryptocurrency wallets
     */
    hdKeyPath(): string | null;
    hdKeyPath(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vector of standard message types used by the program
     */
    messageTypes(index: number): string;
    messageTypes(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    messageTypesLength(): number;
    /**
     * Vector of users associated with the program, each user can have assigned message types
     */
    users(index: number, obj?: USR): USR | null;
    usersLength(): number;
    static startPRG(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addHdKeyPath(builder: flatbuffers.Builder, hdKeyPathOffset: flatbuffers.Offset): void;
    static addMessageTypes(builder: flatbuffers.Builder, messageTypesOffset: flatbuffers.Offset): void;
    static createMessageTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessageTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUsers(builder: flatbuffers.Builder, usersOffset: flatbuffers.Offset): void;
    static createUsersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUsersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPRG(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset, hdKeyPathOffset: flatbuffers.Offset, messageTypesOffset: flatbuffers.Offset, usersOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRGT;
    unpackTo(_o: PRGT): void;
}
export declare class PRGT implements flatbuffers.IGeneratedObject {
    name: string | Uint8Array | null;
    hdKeyPath: string | Uint8Array | null;
    messageTypes: (string)[];
    users: (USRT)[];
    constructor(name?: string | Uint8Array | null, hdKeyPath?: string | Uint8Array | null, messageTypes?: (string)[], users?: (USRT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=prg.d.ts.map