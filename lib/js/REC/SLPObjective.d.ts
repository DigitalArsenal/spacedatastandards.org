import * as flatbuffers from 'flatbuffers';
import { pceParameter } from './pceParameter.js';
import { slpObjectiveDirection } from './slpObjectiveDirection.js';
export declare class SLPObjective implements flatbuffers.IUnpackableObject<SLPObjectiveT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPObjective;
    static getRootAsSLPObjective(bb: flatbuffers.ByteBuffer, obj?: SLPObjective): SLPObjective;
    static getSizePrefixedRootAsSLPObjective(bb: flatbuffers.ByteBuffer, obj?: SLPObjective): SLPObjective;
    OBJECTIVE_ID(): string;
    OBJECTIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PARAMETER(): pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME(): string | null;
    PROVIDER_DEFINED_PARAMETER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DIRECTION(): slpObjectiveDirection;
    SCALE(): number;
    static startSLPObjective(builder: flatbuffers.Builder): void;
    static addObjectiveId(builder: flatbuffers.Builder, OBJECTIVE_IDOffset: flatbuffers.Offset): void;
    static addParameter(builder: flatbuffers.Builder, PARAMETER: pceParameter): void;
    static addProviderDefinedParameterName(builder: flatbuffers.Builder, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: slpObjectiveDirection): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static endSLPObjective(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPObjective(builder: flatbuffers.Builder, OBJECTIVE_IDOffset: flatbuffers.Offset, PARAMETER: pceParameter, PROVIDER_DEFINED_PARAMETER_NAMEOffset: flatbuffers.Offset, DIRECTION: slpObjectiveDirection, SCALE: number): flatbuffers.Offset;
    unpack(): SLPObjectiveT;
    unpackTo(_o: SLPObjectiveT): void;
}
export declare class SLPObjectiveT implements flatbuffers.IGeneratedObject {
    OBJECTIVE_ID: string | Uint8Array | null;
    PARAMETER: pceParameter;
    PROVIDER_DEFINED_PARAMETER_NAME: string | Uint8Array | null;
    DIRECTION: slpObjectiveDirection;
    SCALE: number;
    constructor(OBJECTIVE_ID?: string | Uint8Array | null, PARAMETER?: pceParameter, PROVIDER_DEFINED_PARAMETER_NAME?: string | Uint8Array | null, DIRECTION?: slpObjectiveDirection, SCALE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPObjective.d.ts.map