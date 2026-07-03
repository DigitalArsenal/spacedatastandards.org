import * as flatbuffers from 'flatbuffers';
import { assetCatalogTab } from './assetCatalogTab.js';
/**
 * Asset-picker request or acknowledgement.
 */
export declare class SCCAssetPicker implements flatbuffers.IUnpackableObject<SCCAssetPickerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCCAssetPicker;
    static getRootAsSCCAssetPicker(bb: flatbuffers.ByteBuffer, obj?: SCCAssetPicker): SCCAssetPicker;
    static getSizePrefixedRootAsSCCAssetPicker(bb: flatbuffers.ByteBuffer, obj?: SCCAssetPicker): SCCAssetPicker;
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CATALOG_TAB(): assetCatalogTab;
    ACKNOWLEDGED(): boolean;
    static startSCCAssetPicker(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addCatalogTab(builder: flatbuffers.Builder, CATALOG_TAB: assetCatalogTab): void;
    static addAcknowledged(builder: flatbuffers.Builder, ACKNOWLEDGED: boolean): void;
    static endSCCAssetPicker(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCCAssetPicker(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, CATALOG_TAB: assetCatalogTab, ACKNOWLEDGED: boolean): flatbuffers.Offset;
    unpack(): SCCAssetPickerT;
    unpackTo(_o: SCCAssetPickerT): void;
}
export declare class SCCAssetPickerT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    CATALOG_TAB: assetCatalogTab;
    ACKNOWLEDGED: boolean;
    constructor(REQUEST_ID?: string | Uint8Array | null, CATALOG_TAB?: assetCatalogTab, ACKNOWLEDGED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCCAssetPicker.d.ts.map