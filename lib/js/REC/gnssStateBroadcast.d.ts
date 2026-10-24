import * as flatbuffers from 'flatbuffers';
/**
 * GLONASS and SBAS broadcast a state vector in the system's Earth-fixed frame
 * (PZ-90 or the system frame): km, km/s, km/s^2.
 */
export declare class gnssStateBroadcast implements flatbuffers.IUnpackableObject<gnssStateBroadcastT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): gnssStateBroadcast;
    static getRootAsgnssStateBroadcast(bb: flatbuffers.ByteBuffer, obj?: gnssStateBroadcast): gnssStateBroadcast;
    static getSizePrefixedRootAsgnssStateBroadcast(bb: flatbuffers.ByteBuffer, obj?: gnssStateBroadcast): gnssStateBroadcast;
    /**
     * Position, km.
     */
    X(): number;
    Y(): number;
    Z(): number;
    /**
     * Velocity, km/s.
     */
    VX(): number;
    VY(): number;
    VZ(): number;
    /**
     * Luni-solar acceleration, km/s^2.
     */
    AX(): number;
    AY(): number;
    AZ(): number;
    /**
     * Reference time of the state, seconds of the day.
     */
    TOE(): number;
    /**
     * GLONASS frequency channel number k. Meaningful only when
     * HAS_FREQUENCY_NUMBER.
     */
    FREQUENCY_NUMBER(): number;
    /**
     * True when FREQUENCY_NUMBER carries a value (channel 0 is a real channel);
     * false (the default) means absent.
     */
    HAS_FREQUENCY_NUMBER(): boolean;
    /**
     * Message frame time, seconds of the day.
     */
    MESSAGE_FRAME_TIME(): number;
    static startgnssStateBroadcast(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addVx(builder: flatbuffers.Builder, VX: number): void;
    static addVy(builder: flatbuffers.Builder, VY: number): void;
    static addVz(builder: flatbuffers.Builder, VZ: number): void;
    static addAx(builder: flatbuffers.Builder, AX: number): void;
    static addAy(builder: flatbuffers.Builder, AY: number): void;
    static addAz(builder: flatbuffers.Builder, AZ: number): void;
    static addToe(builder: flatbuffers.Builder, TOE: number): void;
    static addFrequencyNumber(builder: flatbuffers.Builder, FREQUENCY_NUMBER: number): void;
    static addHasFrequencyNumber(builder: flatbuffers.Builder, HAS_FREQUENCY_NUMBER: boolean): void;
    static addMessageFrameTime(builder: flatbuffers.Builder, MESSAGE_FRAME_TIME: number): void;
    static endgnssStateBroadcast(builder: flatbuffers.Builder): flatbuffers.Offset;
    static creategnssStateBroadcast(builder: flatbuffers.Builder, X: number, Y: number, Z: number, VX: number, VY: number, VZ: number, AX: number, AY: number, AZ: number, TOE: number, FREQUENCY_NUMBER: number, HAS_FREQUENCY_NUMBER: boolean, MESSAGE_FRAME_TIME: number): flatbuffers.Offset;
    unpack(): gnssStateBroadcastT;
    unpackTo(_o: gnssStateBroadcastT): void;
}
export declare class gnssStateBroadcastT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    VX: number;
    VY: number;
    VZ: number;
    AX: number;
    AY: number;
    AZ: number;
    TOE: number;
    FREQUENCY_NUMBER: number;
    HAS_FREQUENCY_NUMBER: boolean;
    MESSAGE_FRAME_TIME: number;
    constructor(X?: number, Y?: number, Z?: number, VX?: number, VY?: number, VZ?: number, AX?: number, AY?: number, AZ?: number, TOE?: number, FREQUENCY_NUMBER?: number, HAS_FREQUENCY_NUMBER?: boolean, MESSAGE_FRAME_TIME?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=gnssStateBroadcast.d.ts.map