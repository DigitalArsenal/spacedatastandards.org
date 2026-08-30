import * as flatbuffers from 'flatbuffers';
import { PCEParameterRef, PCEParameterRefT } from './PCEParameterRef.js';
import { odrParameterDisposition } from './odrParameterDisposition.js';
import { pceUnit } from './pceUnit.js';
export declare class ODREstimatedParameter implements flatbuffers.IUnpackableObject<ODREstimatedParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODREstimatedParameter;
    static getRootAsODREstimatedParameter(bb: flatbuffers.ByteBuffer, obj?: ODREstimatedParameter): ODREstimatedParameter;
    static getSizePrefixedRootAsODREstimatedParameter(bb: flatbuffers.ByteBuffer, obj?: ODREstimatedParameter): ODREstimatedParameter;
    PARAMETER(obj?: PCEParameterRef): PCEParameterRef | null;
    DISPOSITION(): odrParameterDisposition;
    A_PRIORI_VALUE(): number;
    A_PRIORI_SIGMA(): number;
    FINAL_VALUE(): number;
    FINAL_SIGMA(): number;
    UNIT(): pceUnit;
    static startODREstimatedParameter(builder: flatbuffers.Builder): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETEROffset: flatbuffers.Offset): void;
    static addDisposition(builder: flatbuffers.Builder, DISPOSITION: odrParameterDisposition): void;
    static addAPrioriValue(builder: flatbuffers.Builder, A_PRIORI_VALUE: number): void;
    static addAPrioriSigma(builder: flatbuffers.Builder, A_PRIORI_SIGMA: number): void;
    static addFinalValue(builder: flatbuffers.Builder, FINAL_VALUE: number): void;
    static addFinalSigma(builder: flatbuffers.Builder, FINAL_SIGMA: number): void;
    static addUnit(builder: flatbuffers.Builder, UNIT: pceUnit): void;
    static endODREstimatedParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createODREstimatedParameter(builder: flatbuffers.Builder, PARAMETEROffset: flatbuffers.Offset, DISPOSITION: odrParameterDisposition, A_PRIORI_VALUE: number, A_PRIORI_SIGMA: number, FINAL_VALUE: number, FINAL_SIGMA: number, UNIT: pceUnit): flatbuffers.Offset;
    unpack(): ODREstimatedParameterT;
    unpackTo(_o: ODREstimatedParameterT): void;
}
export declare class ODREstimatedParameterT implements flatbuffers.IGeneratedObject {
    PARAMETER: PCEParameterRefT | null;
    DISPOSITION: odrParameterDisposition;
    A_PRIORI_VALUE: number;
    A_PRIORI_SIGMA: number;
    FINAL_VALUE: number;
    FINAL_SIGMA: number;
    UNIT: pceUnit;
    constructor(PARAMETER?: PCEParameterRefT | null, DISPOSITION?: odrParameterDisposition, A_PRIORI_VALUE?: number, A_PRIORI_SIGMA?: number, FINAL_VALUE?: number, FINAL_SIGMA?: number, UNIT?: pceUnit);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODREstimatedParameter.d.ts.map