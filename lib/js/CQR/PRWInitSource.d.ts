import * as flatbuffers from 'flatbuffers';
import { PRWKeplerianElements, PRWKeplerianElementsT } from './PRWKeplerianElements.js';
import { PRWTleLines, PRWTleLinesT } from './PRWTleLines.js';
import { prwSourceKind } from './prwSourceKind.js';
export declare class PRWInitSource implements flatbuffers.IUnpackableObject<PRWInitSourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWInitSource;
    static getRootAsPRWInitSource(bb: flatbuffers.ByteBuffer, obj?: PRWInitSource): PRWInitSource;
    static getSizePrefixedRootAsPRWInitSource(bb: flatbuffers.ByteBuffer, obj?: PRWInitSource): PRWInitSource;
    /**
     * Wire kind identifier for BYTES.
     */
    KIND(): prwSourceKind;
    /**
     * Optional SDS file_identifier for BYTES (`$OMM`, `$OCM`, `$OEM`, `$PPE`).
     */
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoded source record as a FlatBuffer (consumed per KIND).
     */
    BYTES(index: number): number | null;
    bytesLength(): number;
    bytesArray(): Uint8Array | null;
    /**
     * Convenience inline form when KIND == KEPLERIAN.
     */
    KEPLERIAN(obj?: PRWKeplerianElements): PRWKeplerianElements | null;
    /**
     * Convenience inline form when KIND == TLE.
     */
    TLE(obj?: PRWTleLines): PRWTleLines | null;
    static startPRWInitSource(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: prwSourceKind): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addBytes(builder: flatbuffers.Builder, BYTESOffset: flatbuffers.Offset): void;
    static createBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeplerian(builder: flatbuffers.Builder, KEPLERIANOffset: flatbuffers.Offset): void;
    static addTle(builder: flatbuffers.Builder, TLEOffset: flatbuffers.Offset): void;
    static endPRWInitSource(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWInitSourceT;
    unpackTo(_o: PRWInitSourceT): void;
}
export declare class PRWInitSourceT implements flatbuffers.IGeneratedObject {
    KIND: prwSourceKind;
    FILE_IDENTIFIER: string | Uint8Array | null;
    BYTES: (number)[];
    KEPLERIAN: PRWKeplerianElementsT | null;
    TLE: PRWTleLinesT | null;
    constructor(KIND?: prwSourceKind, FILE_IDENTIFIER?: string | Uint8Array | null, BYTES?: (number)[], KEPLERIAN?: PRWKeplerianElementsT | null, TLE?: PRWTleLinesT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWInitSource.d.ts.map