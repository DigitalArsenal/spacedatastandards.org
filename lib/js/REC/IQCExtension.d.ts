import * as flatbuffers from 'flatbuffers';
/**
 * A SigMF extension namespace the upstream metadata declares.
 */
export declare class IQCExtension implements flatbuffers.IUnpackableObject<IQCExtensionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCExtension;
    static getRootAsIQCExtension(bb: flatbuffers.ByteBuffer, obj?: IQCExtension): IQCExtension;
    static getSizePrefixedRootAsIQCExtension(bb: flatbuffers.ByteBuffer, obj?: IQCExtension): IQCExtension;
    /**
     * Extension namespace name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extension version.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the extension is declared optional for interpretation.
     */
    IS_OPTIONAL(): boolean;
    static startIQCExtension(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addIsOptional(builder: flatbuffers.Builder, IS_OPTIONAL: boolean): void;
    static endIQCExtension(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCExtension(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, IS_OPTIONAL: boolean): flatbuffers.Offset;
    unpack(): IQCExtensionT;
    unpackTo(_o: IQCExtensionT): void;
}
export declare class IQCExtensionT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    IS_OPTIONAL: boolean;
    constructor(NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, IS_OPTIONAL?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCExtension.d.ts.map