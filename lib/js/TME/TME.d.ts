import * as flatbuffers from 'flatbuffers';
/**
 * Time Systems
 */
export declare class TME implements flatbuffers.IUnpackableObject<TMET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TME;
    static getRootAsTME(bb: flatbuffers.ByteBuffer, obj?: TME): TME;
    static getSizePrefixedRootAsTME(bb: flatbuffers.ByteBuffer, obj?: TME): TME;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONVERSION_REQUEST(): string | null;
    CONVERSION_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LEAP_SECOND_QUERY(): string | null;
    LEAP_SECOND_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EOP_QUERY(): string | null;
    EOP_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SIDEREAL_QUERY(): string | null;
    SIDEREAL_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INTERVAL_REQUEST(): string | null;
    INTERVAL_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLAR_POSITION_QUERY(): string | null;
    SOLAR_POSITION_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LUNAR_POSITION_QUERY(): string | null;
    LUNAR_POSITION_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SUNRISE_SUNSET_QUERY(index: number): number | null;
    sunriseSunsetQueryLength(): number;
    sunriseSunsetQueryArray(): Float64Array | null;
    CLOCK_PROPAGATION(): string | null;
    CLOCK_PROPAGATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTME(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addConversionRequest(builder: flatbuffers.Builder, CONVERSION_REQUESTOffset: flatbuffers.Offset): void;
    static addLeapSecondQuery(builder: flatbuffers.Builder, LEAP_SECOND_QUERYOffset: flatbuffers.Offset): void;
    static addEopQuery(builder: flatbuffers.Builder, EOP_QUERYOffset: flatbuffers.Offset): void;
    static addSiderealQuery(builder: flatbuffers.Builder, SIDEREAL_QUERYOffset: flatbuffers.Offset): void;
    static addIntervalRequest(builder: flatbuffers.Builder, INTERVAL_REQUESTOffset: flatbuffers.Offset): void;
    static addSolarPositionQuery(builder: flatbuffers.Builder, SOLAR_POSITION_QUERYOffset: flatbuffers.Offset): void;
    static addLunarPositionQuery(builder: flatbuffers.Builder, LUNAR_POSITION_QUERYOffset: flatbuffers.Offset): void;
    static addSunriseSunsetQuery(builder: flatbuffers.Builder, SUNRISE_SUNSET_QUERYOffset: flatbuffers.Offset): void;
    static createSunriseSunsetQueryVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunriseSunsetQueryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunriseSunsetQueryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockPropagation(builder: flatbuffers.Builder, CLOCK_PROPAGATIONOffset: flatbuffers.Offset): void;
    static endTME(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTME(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, CONVERSION_REQUESTOffset: flatbuffers.Offset, LEAP_SECOND_QUERYOffset: flatbuffers.Offset, EOP_QUERYOffset: flatbuffers.Offset, SIDEREAL_QUERYOffset: flatbuffers.Offset, INTERVAL_REQUESTOffset: flatbuffers.Offset, SOLAR_POSITION_QUERYOffset: flatbuffers.Offset, LUNAR_POSITION_QUERYOffset: flatbuffers.Offset, SUNRISE_SUNSET_QUERYOffset: flatbuffers.Offset, CLOCK_PROPAGATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMET;
    unpackTo(_o: TMET): void;
}
export declare class TMET implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    CONVERSION_REQUEST: string | Uint8Array | null;
    LEAP_SECOND_QUERY: string | Uint8Array | null;
    EOP_QUERY: string | Uint8Array | null;
    SIDEREAL_QUERY: string | Uint8Array | null;
    INTERVAL_REQUEST: string | Uint8Array | null;
    SOLAR_POSITION_QUERY: string | Uint8Array | null;
    LUNAR_POSITION_QUERY: string | Uint8Array | null;
    SUNRISE_SUNSET_QUERY: (number)[];
    CLOCK_PROPAGATION: string | Uint8Array | null;
    constructor(COMMAND?: string | Uint8Array | null, CONVERSION_REQUEST?: string | Uint8Array | null, LEAP_SECOND_QUERY?: string | Uint8Array | null, EOP_QUERY?: string | Uint8Array | null, SIDEREAL_QUERY?: string | Uint8Array | null, INTERVAL_REQUEST?: string | Uint8Array | null, SOLAR_POSITION_QUERY?: string | Uint8Array | null, LUNAR_POSITION_QUERY?: string | Uint8Array | null, SUNRISE_SUNSET_QUERY?: (number)[], CLOCK_PROPAGATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TME.d.ts.map