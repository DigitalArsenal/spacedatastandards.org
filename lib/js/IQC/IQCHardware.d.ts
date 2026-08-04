import * as flatbuffers from 'flatbuffers';
/**
 * Receive chain that produced the samples.
 *
 * Every field is a verbatim string. SigMF `core:hw` is free text and the
 * non-SigMF archives publish nothing more structured; splitting free text
 * into a manufacturer and a model by guessing is a defect.
 */
export declare class IQCHardware implements flatbuffers.IUnpackableObject<IQCHardwareT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCHardware;
    static getRootAsIQCHardware(bb: flatbuffers.ByteBuffer, obj?: IQCHardware): IQCHardware;
    static getSizePrefixedRootAsIQCHardware(bb: flatbuffers.ByteBuffer, obj?: IQCHardware): IQCHardware;
    /**
     * SigMF `core:hw` verbatim, or the source's equivalent free-text
     * description of the receive chain.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver manufacturer, only when the source names it as its own field.
     */
    MANUFACTURER(): string | null;
    MANUFACTURER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receiver model, only when the source names it as its own field.
     */
    MODEL(): string | null;
    MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna description, only when the source names it as its own field.
     */
    ANTENNA(): string | null;
    ANTENNA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:recorder` — the SOFTWARE that wrote the recording.
     */
    RECORDER(): string | null;
    RECORDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQCHardware(builder: flatbuffers.Builder): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addManufacturer(builder: flatbuffers.Builder, MANUFACTUREROffset: flatbuffers.Offset): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addAntenna(builder: flatbuffers.Builder, ANTENNAOffset: flatbuffers.Offset): void;
    static addRecorder(builder: flatbuffers.Builder, RECORDEROffset: flatbuffers.Offset): void;
    static endIQCHardware(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCHardware(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset, MANUFACTUREROffset: flatbuffers.Offset, MODELOffset: flatbuffers.Offset, ANTENNAOffset: flatbuffers.Offset, RECORDEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IQCHardwareT;
    unpackTo(_o: IQCHardwareT): void;
}
export declare class IQCHardwareT implements flatbuffers.IGeneratedObject {
    DESCRIPTION: string | Uint8Array | null;
    MANUFACTURER: string | Uint8Array | null;
    MODEL: string | Uint8Array | null;
    ANTENNA: string | Uint8Array | null;
    RECORDER: string | Uint8Array | null;
    constructor(DESCRIPTION?: string | Uint8Array | null, MANUFACTURER?: string | Uint8Array | null, MODEL?: string | Uint8Array | null, ANTENNA?: string | Uint8Array | null, RECORDER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCHardware.d.ts.map