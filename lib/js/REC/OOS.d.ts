import * as flatbuffers from 'flatbuffers';
/**
 * On-Orbit Solar Array
 */
export declare class OOS implements flatbuffers.IUnpackableObject<OOST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOS;
    static getRootAsOOS(bb: flatbuffers.ByteBuffer, obj?: OOS): OOS;
    static getSizePrefixedRootAsOOS(bb: flatbuffers.ByteBuffer, obj?: OOS): OOS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent on-orbit object
     */
    ID_ON_ORBIT(): string | null;
    ID_ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to solar array specification
     */
    ID_SOLAR_ARRAY(): string | null;
    ID_SOLAR_ARRAY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar array name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar cell type (e.g., SILICON, GAAS, MULTI_JUNCTION, THIN_FILM, PEROVSKITE)
     */
    CELL_TYPE(): string | null;
    CELL_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of solar arrays of this type
     */
    QUANTITY(): number;
    /**
     * Total array area in square meters
     */
    AREA(): number;
    /**
     * Beginning of life power output in Watts
     */
    POWER_BOL(): number;
    /**
     * End of life power output in Watts
     */
    POWER_EOL(): number;
    /**
     * Conversion efficiency as fraction (0.0-1.0)
     */
    EFFICIENCY(): number;
    /**
     * Degradation rate per year as fraction
     */
    DEGRADATION_RATE(): number;
    /**
     * Number of panels per array
     */
    NUM_PANELS(): number;
    /**
     * Whether the array is deployable
     */
    DEPLOYABLE(): boolean;
    /**
     * Whether the array is articulable/tracking
     */
    TRACKING(): boolean;
    /**
     * Array mass in kg
     */
    MASS(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOOS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addIdSolarArray(builder: flatbuffers.Builder, ID_SOLAR_ARRAYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addCellType(builder: flatbuffers.Builder, CELL_TYPEOffset: flatbuffers.Offset): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: number): void;
    static addArea(builder: flatbuffers.Builder, AREA: number): void;
    static addPowerBol(builder: flatbuffers.Builder, POWER_BOL: number): void;
    static addPowerEol(builder: flatbuffers.Builder, POWER_EOL: number): void;
    static addEfficiency(builder: flatbuffers.Builder, EFFICIENCY: number): void;
    static addDegradationRate(builder: flatbuffers.Builder, DEGRADATION_RATE: number): void;
    static addNumPanels(builder: flatbuffers.Builder, NUM_PANELS: number): void;
    static addDeployable(builder: flatbuffers.Builder, DEPLOYABLE: boolean): void;
    static addTracking(builder: flatbuffers.Builder, TRACKING: boolean): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOOS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOS(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ON_ORBITOffset: flatbuffers.Offset, ID_SOLAR_ARRAYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, CELL_TYPEOffset: flatbuffers.Offset, QUANTITY: number, AREA: number, POWER_BOL: number, POWER_EOL: number, EFFICIENCY: number, DEGRADATION_RATE: number, NUM_PANELS: number, DEPLOYABLE: boolean, TRACKING: boolean, MASS: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOST;
    unpackTo(_o: OOST): void;
}
export declare class OOST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ON_ORBIT: string | Uint8Array | null;
    ID_SOLAR_ARRAY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    CELL_TYPE: string | Uint8Array | null;
    QUANTITY: number;
    AREA: number;
    POWER_BOL: number;
    POWER_EOL: number;
    EFFICIENCY: number;
    DEGRADATION_RATE: number;
    NUM_PANELS: number;
    DEPLOYABLE: boolean;
    TRACKING: boolean;
    MASS: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ON_ORBIT?: string | Uint8Array | null, ID_SOLAR_ARRAY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, CELL_TYPE?: string | Uint8Array | null, QUANTITY?: number, AREA?: number, POWER_BOL?: number, POWER_EOL?: number, EFFICIENCY?: number, DEGRADATION_RATE?: number, NUM_PANELS?: number, DEPLOYABLE?: boolean, TRACKING?: boolean, MASS?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOS.d.ts.map