import * as flatbuffers from 'flatbuffers';
import { USR, USRT } from './USR.js';
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
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hierarchical Deterministic (HD) derivation path for the program's key, used in cryptocurrency wallets
     */
    HD_KEY_PATH(): string | null;
    HD_KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vector of standard message types used by the program
     */
    MESSAGE_TYPES(index: number): string;
    MESSAGE_TYPES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    messageTypesLength(): number;
    /**
     * Vector of users associated with the program, each user can have assigned message types
     */
    USERS(index: number, obj?: USR): USR | null;
    usersLength(): number;
    static startPRG(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addHdKeyPath(builder: flatbuffers.Builder, HD_KEY_PATHOffset: flatbuffers.Offset): void;
    static addMessageTypes(builder: flatbuffers.Builder, MESSAGE_TYPESOffset: flatbuffers.Offset): void;
    static createMessageTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMessageTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUsers(builder: flatbuffers.Builder, USERSOffset: flatbuffers.Offset): void;
    static createUsersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUsersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPRGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPRG(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, HD_KEY_PATHOffset: flatbuffers.Offset, MESSAGE_TYPESOffset: flatbuffers.Offset, USERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRGT;
    unpackTo(_o: PRGT): void;
}
export declare class PRGT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    HD_KEY_PATH: string | Uint8Array | null;
    MESSAGE_TYPES: (string)[];
    USERS: (USRT)[];
    constructor(NAME?: string | Uint8Array | null, HD_KEY_PATH?: string | Uint8Array | null, MESSAGE_TYPES?: (string)[], USERS?: (USRT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRG.d.ts.map