import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
/**
 * One covariance realism model of an asset: the realism entry its records
 * would otherwise each repeat.
 */
export declare class DPMRealismModel implements flatbuffers.IUnpackableObject<DPMRealismModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMRealismModel;
    static getRootAsDPMRealismModel(bb: flatbuffers.ByteBuffer, obj?: DPMRealismModel): DPMRealismModel;
    static getSizePrefixedRootAsDPMRealismModel(bb: flatbuffers.ByteBuffer, obj?: DPMRealismModel): DPMRealismModel;
    /**
     * The model's number within the asset, 1 or more; a record names it.
     */
    ID(): number;
    /**
     * The realism entry, MODEL_ID and figures, exactly as an $OCM COV_REALISM
     * entry of each record that names this ID.
     */
    REALISM(obj?: CVR): CVR | null;
    static startDPMRealismModel(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, ID: number): void;
    static addRealism(builder: flatbuffers.Builder, REALISMOffset: flatbuffers.Offset): void;
    static endDPMRealismModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): DPMRealismModelT;
    unpackTo(_o: DPMRealismModelT): void;
}
export declare class DPMRealismModelT implements flatbuffers.IGeneratedObject {
    ID: number;
    REALISM: CVRT | null;
    constructor(ID?: number, REALISM?: CVRT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMRealismModel.d.ts.map