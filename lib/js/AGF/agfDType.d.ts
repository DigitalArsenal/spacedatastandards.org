/**
 * Element type of the packed payload array. The width and signedness here
 * are the only way to parse the bytes; there is no self-describing header.
 *
 * ORDINALS ARE WIRE VALUES. New types are APPENDED ONLY.
 */
export declare enum agfDType {
    UNSPECIFIED = 0,
    UINT8 = 1,
    INT8 = 2,
    UINT16 = 3,
    INT16 = 4,
    UINT32 = 5,
    INT32 = 6,
    /**
     * IEEE 754 binary32, little-endian.
     */
    FLOAT32 = 7,
    /**
     * IEEE 754 binary64, little-endian.
     */
    FLOAT64 = 8
}
//# sourceMappingURL=agfDType.d.ts.map