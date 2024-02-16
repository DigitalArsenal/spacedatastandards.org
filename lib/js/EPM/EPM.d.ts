import * as flatbuffers from 'flatbuffers';
import { ContactPoint, ContactPointT } from './ContactPoint.js';
import { CryptoKey, CryptoKeyT } from './CryptoKey.js';
import { Entity } from './Entity.js';
import { Occupation, OccupationT } from './Occupation.js';
import { OrganizationT } from './Organization.js';
import { PersonT } from './Person.js';
/**
 * Entity Profile Message
 */
export declare class EPM implements flatbuffers.IUnpackableObject<EPMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPM;
    static getRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    static getSizePrefixedRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    /**
     * Common name of the entity (person or organization)
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alternate name for the entity
     */
    ALTERNATE_NAME(): string | null;
    ALTERNATE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of the entity
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of an image representing the entity
     */
    IMAGE(): string | null;
    IMAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of a webpage that unambiguously indicates the entity's identity
     */
    SAME_AS(): string | null;
    SAME_AS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the entity's website
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Telephone number for the entity
     */
    TELEPHONE(): string | null;
    TELEPHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Email address for the entity
     */
    EMAIL(): string | null;
    EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cryptographic key information associated with the entity
     */
    KEY(index: number, obj?: CryptoKey): CryptoKey | null;
    keyLength(): number;
    /**
     * Contact points for the entity
     */
    CONTACT_POINT(index: number, obj?: ContactPoint): ContactPoint | null;
    contactPointLength(): number;
    /**
     * Address of the entity, using the ContactPoint structure
     */
    ADDRESS(obj?: ContactPoint): ContactPoint | null;
    /**
     * Job title of the entity (applicable to persons)
     */
    JOB_TITLE(): string | null;
    JOB_TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    entityType(): Entity;
    /**
     * Union type to represent either a person or an organization
     */
    ENTITY<T extends flatbuffers.Table>(obj: any): any | null;
    /**
     * Occupation of the entity (applicable to persons)
     */
    HAS_OCCUPATION(obj?: Occupation): Occupation | null;
    static startEPM(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAlternateName(builder: flatbuffers.Builder, ALTERNATE_NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addImage(builder: flatbuffers.Builder, IMAGEOffset: flatbuffers.Offset): void;
    static addSameAs(builder: flatbuffers.Builder, SAME_ASOffset: flatbuffers.Offset): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static addTelephone(builder: flatbuffers.Builder, TELEPHONEOffset: flatbuffers.Offset): void;
    static addEmail(builder: flatbuffers.Builder, EMAILOffset: flatbuffers.Offset): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static createKeyVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContactPoint(builder: flatbuffers.Builder, CONTACT_POINTOffset: flatbuffers.Offset): void;
    static createContactPointVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContactPointVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addJobTitle(builder: flatbuffers.Builder, JOB_TITLEOffset: flatbuffers.Offset): void;
    static addEntityType(builder: flatbuffers.Builder, entityType: Entity): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addHasOccupation(builder: flatbuffers.Builder, HAS_OCCUPATIONOffset: flatbuffers.Offset): void;
    static endEPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EPMT;
    unpackTo(_o: EPMT): void;
}
export declare class EPMT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ALTERNATE_NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    IMAGE: string | Uint8Array | null;
    SAME_AS: string | Uint8Array | null;
    URL: string | Uint8Array | null;
    TELEPHONE: string | Uint8Array | null;
    EMAIL: string | Uint8Array | null;
    KEY: (CryptoKeyT)[];
    CONTACT_POINT: (ContactPointT)[];
    ADDRESS: ContactPointT | null;
    JOB_TITLE: string | Uint8Array | null;
    entityType: Entity;
    ENTITY: OrganizationT | PersonT | null;
    HAS_OCCUPATION: OccupationT | null;
    constructor(NAME?: string | Uint8Array | null, ALTERNATE_NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, IMAGE?: string | Uint8Array | null, SAME_AS?: string | Uint8Array | null, URL?: string | Uint8Array | null, TELEPHONE?: string | Uint8Array | null, EMAIL?: string | Uint8Array | null, KEY?: (CryptoKeyT)[], CONTACT_POINT?: (ContactPointT)[], ADDRESS?: ContactPointT | null, JOB_TITLE?: string | Uint8Array | null, entityType?: Entity, ENTITY?: OrganizationT | PersonT | null, HAS_OCCUPATION?: OccupationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPM.d.ts.map