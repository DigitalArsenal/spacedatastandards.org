import * as flatbuffers from 'flatbuffers';
export declare class SCVSensorContribution implements flatbuffers.IUnpackableObject<SCVSensorContributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVSensorContribution;
    static getRootAsSCVSensorContribution(bb: flatbuffers.ByteBuffer, obj?: SCVSensorContribution): SCVSensorContribution;
    static getSizePrefixedRootAsSCVSensorContribution(bb: flatbuffers.ByteBuffer, obj?: SCVSensorContribution): SCVSensorContribution;
    SENSOR_ID(): number;
    FIRST_WINDOW_INDEX(): number;
    LAST_WINDOW_INDEX(): number;
    CONTRIBUTION_COUNT(): number;
    static startSCVSensorContribution(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addFirstWindowIndex(builder: flatbuffers.Builder, FIRST_WINDOW_INDEX: number): void;
    static addLastWindowIndex(builder: flatbuffers.Builder, LAST_WINDOW_INDEX: number): void;
    static addContributionCount(builder: flatbuffers.Builder, CONTRIBUTION_COUNT: number): void;
    static endSCVSensorContribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVSensorContribution(builder: flatbuffers.Builder, SENSOR_ID: number, FIRST_WINDOW_INDEX: number, LAST_WINDOW_INDEX: number, CONTRIBUTION_COUNT: number): flatbuffers.Offset;
    unpack(): SCVSensorContributionT;
    unpackTo(_o: SCVSensorContributionT): void;
}
export declare class SCVSensorContributionT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: number;
    FIRST_WINDOW_INDEX: number;
    LAST_WINDOW_INDEX: number;
    CONTRIBUTION_COUNT: number;
    constructor(SENSOR_ID?: number, FIRST_WINDOW_INDEX?: number, LAST_WINDOW_INDEX?: number, CONTRIBUTION_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVSensorContribution.d.ts.map