// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
/**
 * Enum for the mode of data (real, simulated, synthetic)
 */
export var DataMode;
(function (DataMode) {
    /**
     * Data collected during an exercise scenario.
     */
    DataMode[DataMode["EXERCISE"] = 0] = "EXERCISE";
    /**
     * Data collected from real-world observations.
     */
    DataMode[DataMode["REAL"] = 1] = "REAL";
    /**
     * Data generated through simulation.
     */
    DataMode[DataMode["SIMULATED"] = 2] = "SIMULATED";
    /**
     * Data collected for testing purposes.
     */
    DataMode[DataMode["TEST"] = 3] = "TEST";
})(DataMode || (DataMode = {}));
