import * as flatbuffers from 'flatbuffers';
/**
 * ECOM2 empirical solar radiation pressure (Arnold et al. 2015, J. Geod. 89,
 * doi:10.1007/s00190-015-0814-4, eq. 5), in m/s^2 in the D-Y-B frame,
 * added to the a priori model and scaled by the visible Sun fraction.
 */
export declare class PRWEcom2 implements flatbuffers.IUnpackableObject<PRWEcom2T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWEcom2;
    static getRootAsPRWEcom2(bb: flatbuffers.ByteBuffer, obj?: PRWEcom2): PRWEcom2;
    static getSizePrefixedRootAsPRWEcom2(bb: flatbuffers.ByteBuffer, obj?: PRWEcom2): PRWEcom2;
    D0_M_S2(): number;
    Y0_M_S2(): number;
    B0_M_S2(): number;
    D2_COS_M_S2(): number;
    D2_SIN_M_S2(): number;
    D4_COS_M_S2(): number;
    D4_SIN_M_S2(): number;
    B1_COS_M_S2(): number;
    B1_SIN_M_S2(): number;
    B3_COS_M_S2(): number;
    B3_SIN_M_S2(): number;
    static startPRWEcom2(builder: flatbuffers.Builder): void;
    static addD0MS2(builder: flatbuffers.Builder, D0_M_S2: number): void;
    static addY0MS2(builder: flatbuffers.Builder, Y0_M_S2: number): void;
    static addB0MS2(builder: flatbuffers.Builder, B0_M_S2: number): void;
    static addD2CosMS2(builder: flatbuffers.Builder, D2_COS_M_S2: number): void;
    static addD2SinMS2(builder: flatbuffers.Builder, D2_SIN_M_S2: number): void;
    static addD4CosMS2(builder: flatbuffers.Builder, D4_COS_M_S2: number): void;
    static addD4SinMS2(builder: flatbuffers.Builder, D4_SIN_M_S2: number): void;
    static addB1CosMS2(builder: flatbuffers.Builder, B1_COS_M_S2: number): void;
    static addB1SinMS2(builder: flatbuffers.Builder, B1_SIN_M_S2: number): void;
    static addB3CosMS2(builder: flatbuffers.Builder, B3_COS_M_S2: number): void;
    static addB3SinMS2(builder: flatbuffers.Builder, B3_SIN_M_S2: number): void;
    static endPRWEcom2(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWEcom2(builder: flatbuffers.Builder, D0_M_S2: number, Y0_M_S2: number, B0_M_S2: number, D2_COS_M_S2: number, D2_SIN_M_S2: number, D4_COS_M_S2: number, D4_SIN_M_S2: number, B1_COS_M_S2: number, B1_SIN_M_S2: number, B3_COS_M_S2: number, B3_SIN_M_S2: number): flatbuffers.Offset;
    unpack(): PRWEcom2T;
    unpackTo(_o: PRWEcom2T): void;
}
export declare class PRWEcom2T implements flatbuffers.IGeneratedObject {
    D0_M_S2: number;
    Y0_M_S2: number;
    B0_M_S2: number;
    D2_COS_M_S2: number;
    D2_SIN_M_S2: number;
    D4_COS_M_S2: number;
    D4_SIN_M_S2: number;
    B1_COS_M_S2: number;
    B1_SIN_M_S2: number;
    B3_COS_M_S2: number;
    B3_SIN_M_S2: number;
    constructor(D0_M_S2?: number, Y0_M_S2?: number, B0_M_S2?: number, D2_COS_M_S2?: number, D2_SIN_M_S2?: number, D4_COS_M_S2?: number, D4_SIN_M_S2?: number, B1_COS_M_S2?: number, B1_SIN_M_S2?: number, B3_COS_M_S2?: number, B3_SIN_M_S2?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWEcom2.d.ts.map