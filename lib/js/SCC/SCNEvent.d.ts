import * as flatbuffers from 'flatbuffers';
import { EOO, EOOT } from './EOO.js';
import { OMM, OMMT } from './OMM.js';
import { RDO, RDOT } from './RDO.js';
import { STV, STVT } from './STV.js';
/**
 * Imported scenario event payload composed from existing SDS records.
 */
export declare class SCNEvent implements flatbuffers.IUnpackableObject<SCNEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNEvent;
    static getRootAsSCNEvent(bb: flatbuffers.ByteBuffer, obj?: SCNEvent): SCNEvent;
    static getSizePrefixedRootAsSCNEvent(bb: flatbuffers.ByteBuffer, obj?: SCNEvent): SCNEvent;
    /**
     * Stable id for the imported scenario event.
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mean orbital elements associated with the event.
     */
    MEAN_ELEMENTS(index: number, obj?: OMM): OMM | null;
    meanElementsLength(): number;
    /**
     * State vectors associated with the event.
     */
    STATE_VECTORS(index: number, obj?: STV): STV | null;
    stateVectorsLength(): number;
    /**
     * Electro-optical observations associated with the event.
     */
    EO_OBSERVATIONS(index: number, obj?: EOO): EOO | null;
    eoObservationsLength(): number;
    /**
     * Radar observations associated with the event.
     */
    RADAR_OBSERVATIONS(index: number, obj?: RDO): RDO | null;
    radarObservationsLength(): number;
    static startSCNEvent(builder: flatbuffers.Builder): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addMeanElements(builder: flatbuffers.Builder, MEAN_ELEMENTSOffset: flatbuffers.Offset): void;
    static createMeanElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMeanElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStateVectors(builder: flatbuffers.Builder, STATE_VECTORSOffset: flatbuffers.Offset): void;
    static createStateVectorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateVectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEoObservations(builder: flatbuffers.Builder, EO_OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createEoObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEoObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRadarObservations(builder: flatbuffers.Builder, RADAR_OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createRadarObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRadarObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCNEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCNEvent(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset, MEAN_ELEMENTSOffset: flatbuffers.Offset, STATE_VECTORSOffset: flatbuffers.Offset, EO_OBSERVATIONSOffset: flatbuffers.Offset, RADAR_OBSERVATIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCNEventT;
    unpackTo(_o: SCNEventT): void;
}
export declare class SCNEventT implements flatbuffers.IGeneratedObject {
    EVENT_ID: string | Uint8Array | null;
    MEAN_ELEMENTS: (OMMT)[];
    STATE_VECTORS: (STVT)[];
    EO_OBSERVATIONS: (EOOT)[];
    RADAR_OBSERVATIONS: (RDOT)[];
    constructor(EVENT_ID?: string | Uint8Array | null, MEAN_ELEMENTS?: (OMMT)[], STATE_VECTORS?: (STVT)[], EO_OBSERVATIONS?: (EOOT)[], RADAR_OBSERVATIONS?: (RDOT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNEvent.d.ts.map