import * as flatbuffers from 'flatbuffers';
/**
 * One sampled state of an object with its possibility degree.
 */
export declare class SCRPossibilityPoint implements flatbuffers.IUnpackableObject<SCRPossibilityPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRPossibilityPoint;
    /**
     * Position, m, in one inertial frame shared by both objects.
     */
    X_M(): number;
    Y_M(): number;
    Z_M(): number;
    /**
     * Velocity, m/s.
     */
    VX_M_S(): number;
    VY_M_S(): number;
    VZ_M_S(): number;
    /**
     * Possibility degree, (0, 1].
     */
    POSSIBILITY(): number;
    static sizeOf(): number;
    static createSCRPossibilityPoint(builder: flatbuffers.Builder, X_M: number, Y_M: number, Z_M: number, VX_M_S: number, VY_M_S: number, VZ_M_S: number, POSSIBILITY: number): flatbuffers.Offset;
    unpack(): SCRPossibilityPointT;
    unpackTo(_o: SCRPossibilityPointT): void;
}
export declare class SCRPossibilityPointT implements flatbuffers.IGeneratedObject {
    X_M: number;
    Y_M: number;
    Z_M: number;
    VX_M_S: number;
    VY_M_S: number;
    VZ_M_S: number;
    POSSIBILITY: number;
    constructor(X_M?: number, Y_M?: number, Z_M?: number, VX_M_S?: number, VY_M_S?: number, VZ_M_S?: number, POSSIBILITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRPossibilityPoint.d.ts.map