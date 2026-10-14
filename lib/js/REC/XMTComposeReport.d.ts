import * as flatbuffers from 'flatbuffers';
import { XMTComposedObject, XMTComposedObjectT } from './XMTComposedObject.js';
/**
 * Result of a catalog composition.
 */
export declare class XMTComposeReport implements flatbuffers.IUnpackableObject<XMTComposeReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTComposeReport;
    static getRootAsXMTComposeReport(bb: flatbuffers.ByteBuffer, obj?: XMTComposeReport): XMTComposeReport;
    static getSizePrefixedRootAsXMTComposeReport(bb: flatbuffers.ByteBuffer, obj?: XMTComposeReport): XMTComposeReport;
    /**
     * Records read over all layers.
     */
    INPUT_RECORDS(): number;
    /**
     * Distinct objects.
     */
    OBJECT_COUNT(): number;
    /**
     * Objects whose layers disagree on identifiers.
     */
    IDENTITY_CONFLICTS(): number;
    OBJECTS(index: number, obj?: XMTComposedObject): XMTComposedObject | null;
    objectsLength(): number;
    static startXMTComposeReport(builder: flatbuffers.Builder): void;
    static addInputRecords(builder: flatbuffers.Builder, INPUT_RECORDS: number): void;
    static addObjectCount(builder: flatbuffers.Builder, OBJECT_COUNT: number): void;
    static addIdentityConflicts(builder: flatbuffers.Builder, IDENTITY_CONFLICTS: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTComposeReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTComposeReport(builder: flatbuffers.Builder, INPUT_RECORDS: number, OBJECT_COUNT: number, IDENTITY_CONFLICTS: number, OBJECTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTComposeReportT;
    unpackTo(_o: XMTComposeReportT): void;
}
export declare class XMTComposeReportT implements flatbuffers.IGeneratedObject {
    INPUT_RECORDS: number;
    OBJECT_COUNT: number;
    IDENTITY_CONFLICTS: number;
    OBJECTS: (XMTComposedObjectT)[];
    constructor(INPUT_RECORDS?: number, OBJECT_COUNT?: number, IDENTITY_CONFLICTS?: number, OBJECTS?: (XMTComposedObjectT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTComposeReport.d.ts.map