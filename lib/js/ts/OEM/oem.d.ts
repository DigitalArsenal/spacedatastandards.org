import * as flatbuffers from 'flatbuffers';
import { ephemerisDataBlock, ephemerisDataBlockT } from './ephemeris-data-block.js';
/**
 * Orbit Ephemeris Message
 */
export declare class OEM implements flatbuffers.IUnpackableObject<OEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OEM;
    static getRootAsOEM(bb: flatbuffers.ByteBuffer, obj?: OEM): OEM;
    static getSizePrefixedRootAsOEM(bb: flatbuffers.ByteBuffer, obj?: OEM): OEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * OEM Header
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classification(): string | null;
    classification(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OEM Version
     */
    ccsdsOemVers(): number;
    /**
     * Creation Date
     */
    creationDate(): string | null;
    creationDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator
     */
    originator(): string | null;
    originator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Array of ephemeris data blocks
     */
    ephemerisDataBlock(index: number, obj?: ephemerisDataBlock): ephemerisDataBlock | null;
    ephemerisDataBlockLength(): number;
    static startOEM(builder: flatbuffers.Builder): void;
    static addClassification(builder: flatbuffers.Builder, classificationOffset: flatbuffers.Offset): void;
    static addCcsdsOemVers(builder: flatbuffers.Builder, ccsdsOemVers: number): void;
    static addCreationDate(builder: flatbuffers.Builder, creationDateOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, originatorOffset: flatbuffers.Offset): void;
    static addEphemerisDataBlock(builder: flatbuffers.Builder, ephemerisDataBlockOffset: flatbuffers.Offset): void;
    static createEphemerisDataBlockVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEphemerisDataBlockVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOEM(builder: flatbuffers.Builder, classificationOffset: flatbuffers.Offset, ccsdsOemVers: number, creationDateOffset: flatbuffers.Offset, originatorOffset: flatbuffers.Offset, ephemerisDataBlockOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OEMT;
    unpackTo(_o: OEMT): void;
}
export declare class OEMT implements flatbuffers.IGeneratedObject {
    classification: string | Uint8Array | null;
    ccsdsOemVers: number;
    creationDate: string | Uint8Array | null;
    originator: string | Uint8Array | null;
    ephemerisDataBlock: (ephemerisDataBlockT)[];
    constructor(classification?: string | Uint8Array | null, ccsdsOemVers?: number, creationDate?: string | Uint8Array | null, originator?: string | Uint8Array | null, ephemerisDataBlock?: (ephemerisDataBlockT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=oem.d.ts.map