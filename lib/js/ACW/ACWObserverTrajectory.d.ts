import * as flatbuffers from 'flatbuffers';
import { ACWBlackoutWindow, ACWBlackoutWindowT } from './ACWBlackoutWindow.js';
import { ACWStateSample, ACWStateSampleT } from './ACWStateSample.js';
/**
 * A moving observer (spacecraft) given as pre-sampled Earth-fixed states, in
 * the same frame and time scale as ACWRequest.STATES.
 */
export declare class ACWObserverTrajectory implements flatbuffers.IUnpackableObject<ACWObserverTrajectoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWObserverTrajectory;
    static getRootAsACWObserverTrajectory(bb: flatbuffers.ByteBuffer, obj?: ACWObserverTrajectory): ACWObserverTrajectory;
    static getSizePrefixedRootAsACWObserverTrajectory(bb: flatbuffers.ByteBuffer, obj?: ACWObserverTrajectory): ACWObserverTrajectory;
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    statesLength(): number;
    /**
     * Observer-specific unavailable intervals.
     */
    BLACKOUT_WINDOWS(index: number, obj?: ACWBlackoutWindow): ACWBlackoutWindow | null;
    blackoutWindowsLength(): number;
    static startACWObserverTrajectory(builder: flatbuffers.Builder): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBlackoutWindows(builder: flatbuffers.Builder, BLACKOUT_WINDOWSOffset: flatbuffers.Offset): void;
    static createBlackoutWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBlackoutWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACWObserverTrajectory(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWObserverTrajectory(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, STATESOffset: flatbuffers.Offset, BLACKOUT_WINDOWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWObserverTrajectoryT;
    unpackTo(_o: ACWObserverTrajectoryT): void;
}
export declare class ACWObserverTrajectoryT implements flatbuffers.IGeneratedObject {
    OBSERVER_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    STATES: (ACWStateSampleT)[];
    BLACKOUT_WINDOWS: (ACWBlackoutWindowT)[];
    constructor(OBSERVER_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, STATES?: (ACWStateSampleT)[], BLACKOUT_WINDOWS?: (ACWBlackoutWindowT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWObserverTrajectory.d.ts.map