import * as flatbuffers from 'flatbuffers';
import { CQRScreeningControls, CQRScreeningControlsT } from './CQRScreeningControls.js';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
export declare class CQRWindowRequest implements flatbuffers.IUnpackableObject<CQRWindowRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRWindowRequest;
    static getRootAsCQRWindowRequest(bb: flatbuffers.ByteBuffer, obj?: CQRWindowRequest): CQRWindowRequest;
    static getSizePrefixedRootAsCQRWindowRequest(bb: flatbuffers.ByteBuffer, obj?: CQRWindowRequest): CQRWindowRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SCREENING_INDEX_HANDLE(): number;
    CONTROLS(obj?: CQRScreeningControls): CQRScreeningControls | null;
    EVALUATION_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    static startCQRWindowRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addScreeningIndexHandle(builder: flatbuffers.Builder, SCREENING_INDEX_HANDLE: number): void;
    static addControls(builder: flatbuffers.Builder, CONTROLSOffset: flatbuffers.Offset): void;
    static addEvaluationFrame(builder: flatbuffers.Builder, EVALUATION_FRAMEOffset: flatbuffers.Offset): void;
    static endCQRWindowRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRWindowRequestT;
    unpackTo(_o: CQRWindowRequestT): void;
}
export declare class CQRWindowRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SCREENING_INDEX_HANDLE: number;
    CONTROLS: CQRScreeningControlsT | null;
    EVALUATION_FRAME: RFMCoordinateSystemT | null;
    constructor(INSTANCE?: PRWInstanceT | null, SCREENING_INDEX_HANDLE?: number, CONTROLS?: CQRScreeningControlsT | null, EVALUATION_FRAME?: RFMCoordinateSystemT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRWindowRequest.d.ts.map