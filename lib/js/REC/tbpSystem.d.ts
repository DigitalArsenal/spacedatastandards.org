import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './RFM.js';
/**
 * The two-primary system.
 */
export declare class tbpSystem implements flatbuffers.IUnpackableObject<tbpSystemT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpSystem;
    static getRootAstbpSystem(bb: flatbuffers.ByteBuffer, obj?: tbpSystem): tbpSystem;
    static getSizePrefixedRootAstbpSystem(bb: flatbuffers.ByteBuffer, obj?: tbpSystem): tbpSystem;
    /**
     * Name, e.g. "Earth-Moon", "Sun-Earth".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris body codes of the larger and smaller primary (e.g. 399, 301);
     * 0 = not stated.
     */
    PRIMARY_BODY_ID(): number;
    SECONDARY_BODY_ID(): number;
    /**
     * Mass ratio mu = m2 / (m1 + m2), dimensionless. The larger primary sits
     * at x = -mu and the smaller at x = 1 - mu.
     */
    MASS_RATIO(): number;
    /**
     * Masses of the primaries, kg; 0 = not stated.
     */
    PRIMARY_MASS_KG(): number;
    SECONDARY_MASS_KG(): number;
    /**
     * Characteristic length: the distance between the primaries, km.
     */
    CHARACTERISTIC_LENGTH_KM(): number;
    /**
     * Characteristic time: 1 / (the primaries' angular rate), s.
     */
    CHARACTERISTIC_TIME_S(): number;
    /**
     * The synodic frame as an $RFM coordinate system; empty = the convention
     * above, barycentre origin.
     */
    SYNODIC_FRAME(obj?: RFM): RFM | null;
    static starttbpSystem(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addPrimaryBodyId(builder: flatbuffers.Builder, PRIMARY_BODY_ID: number): void;
    static addSecondaryBodyId(builder: flatbuffers.Builder, SECONDARY_BODY_ID: number): void;
    static addMassRatio(builder: flatbuffers.Builder, MASS_RATIO: number): void;
    static addPrimaryMassKg(builder: flatbuffers.Builder, PRIMARY_MASS_KG: number): void;
    static addSecondaryMassKg(builder: flatbuffers.Builder, SECONDARY_MASS_KG: number): void;
    static addCharacteristicLengthKm(builder: flatbuffers.Builder, CHARACTERISTIC_LENGTH_KM: number): void;
    static addCharacteristicTimeS(builder: flatbuffers.Builder, CHARACTERISTIC_TIME_S: number): void;
    static addSynodicFrame(builder: flatbuffers.Builder, SYNODIC_FRAMEOffset: flatbuffers.Offset): void;
    static endtbpSystem(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpSystemT;
    unpackTo(_o: tbpSystemT): void;
}
export declare class tbpSystemT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    PRIMARY_BODY_ID: number;
    SECONDARY_BODY_ID: number;
    MASS_RATIO: number;
    PRIMARY_MASS_KG: number;
    SECONDARY_MASS_KG: number;
    CHARACTERISTIC_LENGTH_KM: number;
    CHARACTERISTIC_TIME_S: number;
    SYNODIC_FRAME: RFMT | null;
    constructor(NAME?: string | Uint8Array | null, PRIMARY_BODY_ID?: number, SECONDARY_BODY_ID?: number, MASS_RATIO?: number, PRIMARY_MASS_KG?: number, SECONDARY_MASS_KG?: number, CHARACTERISTIC_LENGTH_KM?: number, CHARACTERISTIC_TIME_S?: number, SYNODIC_FRAME?: RFMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpSystem.d.ts.map