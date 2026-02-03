import * as flatbuffers from 'flatbuffers';
/**
 * Electronic Warfare
 */
export declare class EWR implements flatbuffers.IUnpackableObject<EWRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EWR;
    static getRootAsEWR(bb: flatbuffers.ByteBuffer, obj?: EWR): EWR;
    static getSizePrefixedRootAsEWR(bb: flatbuffers.ByteBuffer, obj?: EWR): EWR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    SYSTEM_ID(): number;
    ENTITY_ID(): number;
    ESM_ACTIVE(): boolean;
    ECM_ACTIVE(): boolean;
    RWR_ACTIVE(): boolean;
    ESM_CONTACTS(index: number): string;
    ESM_CONTACTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    esmContactsLength(): number;
    ACTIVE_JAMMING(index: number): string;
    ACTIVE_JAMMING(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    activeJammingLength(): number;
    COUNTERMEASURES(): string | null;
    COUNTERMEASURES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    THREAT_WARNINGS(index: number): string;
    THREAT_WARNINGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    threatWarningsLength(): number;
    EMCON_LEVEL(): number;
    LAST_UPDATE_MS(): bigint;
    static startEWR(builder: flatbuffers.Builder): void;
    static addSystemId(builder: flatbuffers.Builder, SYSTEM_ID: number): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_ID: number): void;
    static addEsmActive(builder: flatbuffers.Builder, ESM_ACTIVE: boolean): void;
    static addEcmActive(builder: flatbuffers.Builder, ECM_ACTIVE: boolean): void;
    static addRwrActive(builder: flatbuffers.Builder, RWR_ACTIVE: boolean): void;
    static addEsmContacts(builder: flatbuffers.Builder, ESM_CONTACTSOffset: flatbuffers.Offset): void;
    static createEsmContactsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEsmContactsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addActiveJamming(builder: flatbuffers.Builder, ACTIVE_JAMMINGOffset: flatbuffers.Offset): void;
    static createActiveJammingVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startActiveJammingVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCountermeasures(builder: flatbuffers.Builder, COUNTERMEASURESOffset: flatbuffers.Offset): void;
    static addThreatWarnings(builder: flatbuffers.Builder, THREAT_WARNINGSOffset: flatbuffers.Offset): void;
    static createThreatWarningsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThreatWarningsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEmconLevel(builder: flatbuffers.Builder, EMCON_LEVEL: number): void;
    static addLastUpdateMs(builder: flatbuffers.Builder, LAST_UPDATE_MS: bigint): void;
    static endEWR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEWR(builder: flatbuffers.Builder, SYSTEM_ID: number, ENTITY_ID: number, ESM_ACTIVE: boolean, ECM_ACTIVE: boolean, RWR_ACTIVE: boolean, ESM_CONTACTSOffset: flatbuffers.Offset, ACTIVE_JAMMINGOffset: flatbuffers.Offset, COUNTERMEASURESOffset: flatbuffers.Offset, THREAT_WARNINGSOffset: flatbuffers.Offset, EMCON_LEVEL: number, LAST_UPDATE_MS: bigint): flatbuffers.Offset;
    unpack(): EWRT;
    unpackTo(_o: EWRT): void;
}
export declare class EWRT implements flatbuffers.IGeneratedObject {
    SYSTEM_ID: number;
    ENTITY_ID: number;
    ESM_ACTIVE: boolean;
    ECM_ACTIVE: boolean;
    RWR_ACTIVE: boolean;
    ESM_CONTACTS: (string)[];
    ACTIVE_JAMMING: (string)[];
    COUNTERMEASURES: string | Uint8Array | null;
    THREAT_WARNINGS: (string)[];
    EMCON_LEVEL: number;
    LAST_UPDATE_MS: bigint;
    constructor(SYSTEM_ID?: number, ENTITY_ID?: number, ESM_ACTIVE?: boolean, ECM_ACTIVE?: boolean, RWR_ACTIVE?: boolean, ESM_CONTACTS?: (string)[], ACTIVE_JAMMING?: (string)[], COUNTERMEASURES?: string | Uint8Array | null, THREAT_WARNINGS?: (string)[], EMCON_LEVEL?: number, LAST_UPDATE_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EWR.d.ts.map