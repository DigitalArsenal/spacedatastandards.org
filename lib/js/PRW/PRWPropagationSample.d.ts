import * as flatbuffers from 'flatbuffers';
import { PRWBurnReport, PRWBurnReportT } from './PRWBurnReport.js';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
import { PRWStateMatrix, PRWStateMatrixT } from './PRWStateMatrix.js';
export declare class PRWPropagationSample implements flatbuffers.IUnpackableObject<PRWPropagationSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWPropagationSample;
    static getRootAsPRWPropagationSample(bb: flatbuffers.ByteBuffer, obj?: PRWPropagationSample): PRWPropagationSample;
    static getSizePrefixedRootAsPRWPropagationSample(bb: flatbuffers.ByteBuffer, obj?: PRWPropagationSample): PRWPropagationSample;
    STATE(obj?: PRWResidentState): PRWResidentState | null;
    /**
     * Both STMs cumulative from request initial epoch; SI state units.
     */
    STM(obj?: PRWStateMatrix): PRWStateMatrix | null;
    MASS_STM(obj?: PRWStateMatrix): PRWStateMatrix | null;
    COVARIANCE(obj?: PRWStateMatrix): PRWStateMatrix | null;
    MASS_COVARIANCE(obj?: PRWStateMatrix): PRWStateMatrix | null;
    ACCEPTED_STEPS(): bigint;
    REJECTED_STEPS(): bigint;
    BURNS(index: number, obj?: PRWBurnReport): PRWBurnReport | null;
    burnsLength(): number;
    static startPRWPropagationSample(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addStm(builder: flatbuffers.Builder, STMOffset: flatbuffers.Offset): void;
    static addMassStm(builder: flatbuffers.Builder, MASS_STMOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static addMassCovariance(builder: flatbuffers.Builder, MASS_COVARIANCEOffset: flatbuffers.Offset): void;
    static addAcceptedSteps(builder: flatbuffers.Builder, ACCEPTED_STEPS: bigint): void;
    static addRejectedSteps(builder: flatbuffers.Builder, REJECTED_STEPS: bigint): void;
    static addBurns(builder: flatbuffers.Builder, BURNSOffset: flatbuffers.Offset): void;
    static createBurnsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWPropagationSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWPropagationSampleT;
    unpackTo(_o: PRWPropagationSampleT): void;
}
export declare class PRWPropagationSampleT implements flatbuffers.IGeneratedObject {
    STATE: PRWResidentStateT | null;
    STM: PRWStateMatrixT | null;
    MASS_STM: PRWStateMatrixT | null;
    COVARIANCE: PRWStateMatrixT | null;
    MASS_COVARIANCE: PRWStateMatrixT | null;
    ACCEPTED_STEPS: bigint;
    REJECTED_STEPS: bigint;
    BURNS: (PRWBurnReportT)[];
    constructor(STATE?: PRWResidentStateT | null, STM?: PRWStateMatrixT | null, MASS_STM?: PRWStateMatrixT | null, COVARIANCE?: PRWStateMatrixT | null, MASS_COVARIANCE?: PRWStateMatrixT | null, ACCEPTED_STEPS?: bigint, REJECTED_STEPS?: bigint, BURNS?: (PRWBurnReportT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWPropagationSample.d.ts.map