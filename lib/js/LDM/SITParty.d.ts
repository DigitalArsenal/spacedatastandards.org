import * as flatbuffers from 'flatbuffers';
import { SITCitation, SITCitationT } from './SITCitation.js';
import { SITReference, SITReferenceT } from './SITReference.js';
import { sitPartyRole } from './sitPartyRole.js';
/**
 * An organisation with a part at the site.
 */
export declare class SITParty implements flatbuffers.IUnpackableObject<SITPartyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITParty;
    static getRootAsSITParty(bb: flatbuffers.ByteBuffer, obj?: SITParty): SITParty;
    static getSizePrefixedRootAsSITParty(bb: flatbuffers.ByteBuffer, obj?: SITParty): SITParty;
    /**
     * The part it plays
     */
    ROLE(): sitPartyRole;
    /**
     * Its name, as the source states it
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Records about the party (its registry record, its official website)
     */
    EXTERNAL_REFERENCES(index: number, obj?: SITReference): SITReference | null;
    externalReferencesLength(): number;
    /**
     * Where the statement that it plays this part was read
     */
    CITATION(obj?: SITCitation): SITCitation | null;
    static startSITParty(builder: flatbuffers.Builder): void;
    static addRole(builder: flatbuffers.Builder, ROLE: sitPartyRole): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addExternalReferences(builder: flatbuffers.Builder, EXTERNAL_REFERENCESOffset: flatbuffers.Offset): void;
    static createExternalReferencesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExternalReferencesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endSITParty(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SITPartyT;
    unpackTo(_o: SITPartyT): void;
}
export declare class SITPartyT implements flatbuffers.IGeneratedObject {
    ROLE: sitPartyRole;
    NAME: string | Uint8Array | null;
    EXTERNAL_REFERENCES: (SITReferenceT)[];
    CITATION: SITCitationT | null;
    constructor(ROLE?: sitPartyRole, NAME?: string | Uint8Array | null, EXTERNAL_REFERENCES?: (SITReferenceT)[], CITATION?: SITCitationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITParty.d.ts.map