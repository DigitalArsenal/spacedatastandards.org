import * as flatbuffers from 'flatbuffers';
import { MDECrossingPair, MDECrossingPairT } from './MDECrossingPair.js';
import { MDEEvent, MDEEventT } from './MDEEvent.js';
import { MDELevel, MDELevelT } from './MDELevel.js';
import { mdeObjectStatus } from './mdeObjectStatus.js';
/**
 * One object screened.
 */
export declare class MDEObjectDetection implements flatbuffers.IUnpackableObject<MDEObjectDetectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEObjectDetection;
    static getRootAsMDEObjectDetection(bb: flatbuffers.ByteBuffer, obj?: MDEObjectDetection): MDEObjectDetection;
    static getSizePrefixedRootAsMDEObjectDetection(bb: flatbuffers.ByteBuffer, obj?: MDEObjectDetection): MDEObjectDetection;
    /**
     * Object key: "NORAD:<n>", else OBJECT_ID, else OBJECT_NAME.
     */
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CAT_ID(): number;
    /**
     * Element sets in its history.
     */
    ELEMENT_SETS(): number;
    /**
     * Frame the history was screened in, e.g. "TEMEOFDATE", "EME2000".
     */
    FRAME(): string | null;
    FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): mdeObjectStatus;
    /**
     * Why the history was insufficient; empty otherwise.
     */
    DETAIL(): string | null;
    DETAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Crossing pairs (when REPORT_PAIRS).
     */
    PAIRS(index: number, obj?: MDECrossingPair): MDECrossingPair | null;
    pairsLength(): number;
    /**
     * Level series (when REPORT_LEVELS).
     */
    LEVELS(index: number, obj?: MDELevel): MDELevel | null;
    levelsLength(): number;
    /**
     * Every event each enabled detector raised, before combining.
     */
    DETECTOR_EVENTS(index: number, obj?: MDEEvent): MDEEvent | null;
    detectorEventsLength(): number;
    /**
     * The events emitted (one $MNV each).
     */
    EVENTS(index: number, obj?: MDEEvent): MDEEvent | null;
    eventsLength(): number;
    static startMDEObjectDetection(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addElementSets(builder: flatbuffers.Builder, ELEMENT_SETS: number): void;
    static addFrame(builder: flatbuffers.Builder, FRAMEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: mdeObjectStatus): void;
    static addDetail(builder: flatbuffers.Builder, DETAILOffset: flatbuffers.Offset): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static createPairsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLevels(builder: flatbuffers.Builder, LEVELSOffset: flatbuffers.Offset): void;
    static createLevelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDetectorEvents(builder: flatbuffers.Builder, DETECTOR_EVENTSOffset: flatbuffers.Offset): void;
    static createDetectorEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDetectorEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMDEObjectDetection(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEObjectDetection(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, NORAD_CAT_ID: number, ELEMENT_SETS: number, FRAMEOffset: flatbuffers.Offset, STATUS: mdeObjectStatus, DETAILOffset: flatbuffers.Offset, PAIRSOffset: flatbuffers.Offset, LEVELSOffset: flatbuffers.Offset, DETECTOR_EVENTSOffset: flatbuffers.Offset, EVENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDEObjectDetectionT;
    unpackTo(_o: MDEObjectDetectionT): void;
}
export declare class MDEObjectDetectionT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    ELEMENT_SETS: number;
    FRAME: string | Uint8Array | null;
    STATUS: mdeObjectStatus;
    DETAIL: string | Uint8Array | null;
    PAIRS: (MDECrossingPairT)[];
    LEVELS: (MDELevelT)[];
    DETECTOR_EVENTS: (MDEEventT)[];
    EVENTS: (MDEEventT)[];
    constructor(OBJECT_KEY?: string | Uint8Array | null, NORAD_CAT_ID?: number, ELEMENT_SETS?: number, FRAME?: string | Uint8Array | null, STATUS?: mdeObjectStatus, DETAIL?: string | Uint8Array | null, PAIRS?: (MDECrossingPairT)[], LEVELS?: (MDELevelT)[], DETECTOR_EVENTS?: (MDEEventT)[], EVENTS?: (MDEEventT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEObjectDetection.d.ts.map