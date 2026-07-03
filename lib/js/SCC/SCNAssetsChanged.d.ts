import * as flatbuffers from 'flatbuffers';
import { SCNReference, SCNReferenceT } from './SCNReference.js';
/**
 * Scenario asset-change notification payload.
 */
export declare class SCNAssetsChanged implements flatbuffers.IUnpackableObject<SCNAssetsChangedT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNAssetsChanged;
    static getRootAsSCNAssetsChanged(bb: flatbuffers.ByteBuffer, obj?: SCNAssetsChanged): SCNAssetsChanged;
    static getSizePrefixedRootAsSCNAssetsChanged(bb: flatbuffers.ByteBuffer, obj?: SCNAssetsChanged): SCNAssetsChanged;
    /**
     * Satellite references added by the asset-change event.
     */
    ADDED_SATELLITES(index: number, obj?: SCNReference): SCNReference | null;
    addedSatellitesLength(): number;
    /**
     * Ground-site references added by the asset-change event.
     */
    ADDED_GROUND_SITES(index: number, obj?: SCNReference): SCNReference | null;
    addedGroundSitesLength(): number;
    /**
     * Satellite references removed by the asset-change event.
     */
    REMOVED_SATELLITES(index: number, obj?: SCNReference): SCNReference | null;
    removedSatellitesLength(): number;
    /**
     * Ground-site references removed by the asset-change event.
     */
    REMOVED_GROUND_SITES(index: number, obj?: SCNReference): SCNReference | null;
    removedGroundSitesLength(): number;
    /**
     * Current satellite references after the asset-change event.
     */
    SATELLITES(index: number, obj?: SCNReference): SCNReference | null;
    satellitesLength(): number;
    /**
     * Current ground-site references after the asset-change event.
     */
    GROUND_SITES(index: number, obj?: SCNReference): SCNReference | null;
    groundSitesLength(): number;
    /**
     * Current full reference set after the asset-change event.
     */
    REFERENCES(index: number, obj?: SCNReference): SCNReference | null;
    referencesLength(): number;
    static startSCNAssetsChanged(builder: flatbuffers.Builder): void;
    static addAddedSatellites(builder: flatbuffers.Builder, ADDED_SATELLITESOffset: flatbuffers.Offset): void;
    static createAddedSatellitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAddedSatellitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAddedGroundSites(builder: flatbuffers.Builder, ADDED_GROUND_SITESOffset: flatbuffers.Offset): void;
    static createAddedGroundSitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAddedGroundSitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRemovedSatellites(builder: flatbuffers.Builder, REMOVED_SATELLITESOffset: flatbuffers.Offset): void;
    static createRemovedSatellitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRemovedSatellitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRemovedGroundSites(builder: flatbuffers.Builder, REMOVED_GROUND_SITESOffset: flatbuffers.Offset): void;
    static createRemovedGroundSitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRemovedGroundSitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSatellites(builder: flatbuffers.Builder, SATELLITESOffset: flatbuffers.Offset): void;
    static createSatellitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSatellitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroundSites(builder: flatbuffers.Builder, GROUND_SITESOffset: flatbuffers.Offset): void;
    static createGroundSitesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroundSitesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferences(builder: flatbuffers.Builder, REFERENCESOffset: flatbuffers.Offset): void;
    static createReferencesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReferencesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCNAssetsChanged(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNAssetsChanged(builder: flatbuffers.Builder, ADDED_SATELLITESOffset: flatbuffers.Offset, ADDED_GROUND_SITESOffset: flatbuffers.Offset, REMOVED_SATELLITESOffset: flatbuffers.Offset, REMOVED_GROUND_SITESOffset: flatbuffers.Offset, SATELLITESOffset: flatbuffers.Offset, GROUND_SITESOffset: flatbuffers.Offset, REFERENCESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNAssetsChangedT;
    unpackTo(_o: SCNAssetsChangedT): void;
}
export declare class SCNAssetsChangedT implements flatbuffers.IGeneratedObject {
    ADDED_SATELLITES: (SCNReferenceT)[];
    ADDED_GROUND_SITES: (SCNReferenceT)[];
    REMOVED_SATELLITES: (SCNReferenceT)[];
    REMOVED_GROUND_SITES: (SCNReferenceT)[];
    SATELLITES: (SCNReferenceT)[];
    GROUND_SITES: (SCNReferenceT)[];
    REFERENCES: (SCNReferenceT)[];
    constructor(ADDED_SATELLITES?: (SCNReferenceT)[], ADDED_GROUND_SITES?: (SCNReferenceT)[], REMOVED_SATELLITES?: (SCNReferenceT)[], REMOVED_GROUND_SITES?: (SCNReferenceT)[], SATELLITES?: (SCNReferenceT)[], GROUND_SITES?: (SCNReferenceT)[], REFERENCES?: (SCNReferenceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNAssetsChanged.d.ts.map