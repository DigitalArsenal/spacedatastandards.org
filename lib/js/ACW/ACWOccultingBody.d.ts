import * as flatbuffers from 'flatbuffers';
import { ACWOrientationSample, ACWOrientationSampleT } from './ACWOrientationSample.js';
import { ACWStateSample, ACWStateSampleT } from './ACWStateSample.js';
/**
 * A body other than the central body that may block a line of sight.
 */
export declare class ACWOccultingBody implements flatbuffers.IUnpackableObject<ACWOccultingBodyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWOccultingBody;
    static getRootAsACWOccultingBody(bb: flatbuffers.ByteBuffer, obj?: ACWOccultingBody): ACWOccultingBody;
    static getSizePrefixedRootAsACWOccultingBody(bb: flatbuffers.ByteBuffer, obj?: ACWOccultingBody): ACWOccultingBody;
    /**
     * NAIF integer code (10 Sun, 301 Moon, 499 Mars). 0 and the central
     * body (399) are invalid here.
     */
    BODY_NAIF_ID(): number;
    /**
     * Radii along the body-fixed x, y, z axes, meters. All > 0.
     */
    SEMI_MAJOR_M(): number;
    SEMI_INTERMEDIATE_M(): number;
    SEMI_MINOR_M(): number;
    /**
     * Body-center states in the STATES frame and time scale, interpolated
     * to sample epochs. Absent for BODY_NAIF_ID 10 or 301 means SUN_STATES
     * or MOON_STATES; required for every other body.
     */
    STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    statesLength(): number;
    /**
     * Orientation samples, interpolated to sample epochs. Absent only when
     * the three radii are equal (a sphere).
     */
    ORIENTATION(index: number, obj?: ACWOrientationSample): ACWOrientationSample | null;
    orientationLength(): number;
    static startACWOccultingBody(builder: flatbuffers.Builder): void;
    static addBodyNaifId(builder: flatbuffers.Builder, BODY_NAIF_ID: number): void;
    static addSemiMajorM(builder: flatbuffers.Builder, SEMI_MAJOR_M: number): void;
    static addSemiIntermediateM(builder: flatbuffers.Builder, SEMI_INTERMEDIATE_M: number): void;
    static addSemiMinorM(builder: flatbuffers.Builder, SEMI_MINOR_M: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrientation(builder: flatbuffers.Builder, ORIENTATIONOffset: flatbuffers.Offset): void;
    static createOrientationVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOrientationVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACWOccultingBody(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWOccultingBody(builder: flatbuffers.Builder, BODY_NAIF_ID: number, SEMI_MAJOR_M: number, SEMI_INTERMEDIATE_M: number, SEMI_MINOR_M: number, STATESOffset: flatbuffers.Offset, ORIENTATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWOccultingBodyT;
    unpackTo(_o: ACWOccultingBodyT): void;
}
export declare class ACWOccultingBodyT implements flatbuffers.IGeneratedObject {
    BODY_NAIF_ID: number;
    SEMI_MAJOR_M: number;
    SEMI_INTERMEDIATE_M: number;
    SEMI_MINOR_M: number;
    STATES: (ACWStateSampleT)[];
    ORIENTATION: (ACWOrientationSampleT)[];
    constructor(BODY_NAIF_ID?: number, SEMI_MAJOR_M?: number, SEMI_INTERMEDIATE_M?: number, SEMI_MINOR_M?: number, STATES?: (ACWStateSampleT)[], ORIENTATION?: (ACWOrientationSampleT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWOccultingBody.d.ts.map