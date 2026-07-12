import * as flatbuffers from 'flatbuffers';
import { APPDataRef, APPDataRefT } from './APPDataRef.js';
import { APPModuleRef, APPModuleRefT } from './APPModuleRef.js';
import { APPSourceRef, APPSourceRefT } from './APPSourceRef.js';
import { APPUIPage, APPUIPageT } from './APPUIPage.js';
/**
 * Application Package Manifest — one launchable app.
 */
export declare class APP implements flatbuffers.IUnpackableObject<APPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APP;
    static getRootAsAPP(bb: flatbuffers.ByteBuffer, obj?: APP): APP;
    static getSizePrefixedRootAsAPP(bb: flatbuffers.ByteBuffer, obj?: APP): APP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable app identity, unique per publisher. Required.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SemVer 2.0.0 app version.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Member WASM modules. Referential integrity: every MODULE_ID and every
     * MODULE-kind REF elsewhere in the manifest must resolve into this list.
     */
    MODULES(index: number, obj?: APPModuleRef): APPModuleRef | null;
    modulesLength(): number;
    /**
     * SDS record types produced and consumed.
     */
    DATA(index: number, obj?: APPDataRef): APPDataRef | null;
    dataLength(): number;
    /**
     * Upstream sources depended on.
     */
    SOURCES(index: number, obj?: APPSourceRef): APPSourceRef | null;
    sourcesLength(): number;
    /**
     * UI pages. Exactly one entry page when nonempty.
     */
    UI(index: number, obj?: APPUIPage): APPUIPage | null;
    uiLength(): number;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the manifest was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * when the manifest was last updated.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addModules(builder: flatbuffers.Builder, MODULESOffset: flatbuffers.Offset): void;
    static createModulesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModulesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUi(builder: flatbuffers.Builder, UIOffset: flatbuffers.Offset): void;
    static createUiVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUiVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static endAPP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAPPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAPP(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, MODULESOffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, SOURCESOffset: flatbuffers.Offset, UIOffset: flatbuffers.Offset, CREATED_ATOffset: flatbuffers.Offset, UPDATED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APPT;
    unpackTo(_o: APPT): void;
}
export declare class APPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    MODULES: (APPModuleRefT)[];
    DATA: (APPDataRefT)[];
    SOURCES: (APPSourceRefT)[];
    UI: (APPUIPageT)[];
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, MODULES?: (APPModuleRefT)[], DATA?: (APPDataRefT)[], SOURCES?: (APPSourceRefT)[], UI?: (APPUIPageT)[], CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APP.d.ts.map