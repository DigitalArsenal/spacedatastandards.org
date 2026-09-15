import * as flatbuffers from 'flatbuffers';
import { ephemerisDataBlock, ephemerisDataBlockT } from './ephemerisDataBlock.js';
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
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OEM Version
     */
    CCSDS_OEM_VERS(): number;
    /**
     * Creation Date
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Array of ephemeris data blocks
     */
    EPHEMERIS_DATA_BLOCK(index: number, obj?: ephemerisDataBlock): ephemerisDataBlock | null;
    ephemerisDataBlockLength(): number;
    static startOEM(builder: flatbuffers.Builder): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addCcsdsOemVers(builder: flatbuffers.Builder, CCSDS_OEM_VERS: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addEphemerisDataBlock(builder: flatbuffers.Builder, EPHEMERIS_DATA_BLOCKOffset: flatbuffers.Offset): void;
    static createEphemerisDataBlockVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEphemerisDataBlockVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOEM(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset, CCSDS_OEM_VERS: number, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, EPHEMERIS_DATA_BLOCKOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OEMT;
    unpackTo(_o: OEMT): void;
}
export declare class OEMT implements flatbuffers.IGeneratedObject {
    CLASSIFICATION: string | Uint8Array | null;
    CCSDS_OEM_VERS: number;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    EPHEMERIS_DATA_BLOCK: (ephemerisDataBlockT)[];
    constructor(CLASSIFICATION?: string | Uint8Array | null, CCSDS_OEM_VERS?: number, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, EPHEMERIS_DATA_BLOCK?: (ephemerisDataBlockT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OEM.d.ts.map