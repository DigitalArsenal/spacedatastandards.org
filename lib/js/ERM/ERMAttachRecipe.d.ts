import * as flatbuffers from 'flatbuffers';
import { ERMModel, ERMModelT } from './ERMModel.js';
import { ERMRealismFactor, ERMRealismFactorT } from './ERMRealismFactor.js';
import { PVN, PVNT } from './PVN.js';
/**
 * Recipe for attaching covariances to one source's products.
 */
export declare class ERMAttachRecipe implements flatbuffers.IUnpackableObject<ERMAttachRecipeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAttachRecipe;
    static getRootAsERMAttachRecipe(bb: flatbuffers.ByteBuffer, obj?: ERMAttachRecipe): ERMAttachRecipe;
    static getSizePrefixedRootAsERMAttachRecipe(bb: flatbuffers.ByteBuffer, obj?: ERMAttachRecipe): ERMAttachRecipe;
    /**
     * The source (SOURCE_ID, SOURCE_KIND, LINEAGE, ORIGINATOR, PROVIDER_ID,
     * LICENSE_CLASS, LICENSE_ID) and the producer.
     */
    SOURCE(obj?: PVN): PVN | null;
    FIT_CLASS(): string | null;
    FIT_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creation date written to the products, ISO 8601.
     */
    CREATED(): string | null;
    CREATED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Only the newest set of each object.
     */
    LATEST_ONLY(): boolean;
    MAX_OPERATOR_ROWS(): number;
    REALISM(index: number, obj?: ERMRealismFactor): ERMRealismFactor | null;
    realismLength(): number;
    MODELS(index: number, obj?: ERMModel): ERMModel | null;
    modelsLength(): number;
    static startERMAttachRecipe(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addFitClass(builder: flatbuffers.Builder, FIT_CLASSOffset: flatbuffers.Offset): void;
    static addCreated(builder: flatbuffers.Builder, CREATEDOffset: flatbuffers.Offset): void;
    static addLatestOnly(builder: flatbuffers.Builder, LATEST_ONLY: boolean): void;
    static addMaxOperatorRows(builder: flatbuffers.Builder, MAX_OPERATOR_ROWS: number): void;
    static addRealism(builder: flatbuffers.Builder, REALISMOffset: flatbuffers.Offset): void;
    static createRealismVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRealismVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModels(builder: flatbuffers.Builder, MODELSOffset: flatbuffers.Offset): void;
    static createModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMAttachRecipe(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMAttachRecipe(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, FIT_CLASSOffset: flatbuffers.Offset, CREATEDOffset: flatbuffers.Offset, LATEST_ONLY: boolean, MAX_OPERATOR_ROWS: number, REALISMOffset: flatbuffers.Offset, MODELSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMAttachRecipeT;
    unpackTo(_o: ERMAttachRecipeT): void;
}
export declare class ERMAttachRecipeT implements flatbuffers.IGeneratedObject {
    SOURCE: PVNT | null;
    FIT_CLASS: string | Uint8Array | null;
    CREATED: string | Uint8Array | null;
    LATEST_ONLY: boolean;
    MAX_OPERATOR_ROWS: number;
    REALISM: (ERMRealismFactorT)[];
    MODELS: (ERMModelT)[];
    constructor(SOURCE?: PVNT | null, FIT_CLASS?: string | Uint8Array | null, CREATED?: string | Uint8Array | null, LATEST_ONLY?: boolean, MAX_OPERATOR_ROWS?: number, REALISM?: (ERMRealismFactorT)[], MODELS?: (ERMModelT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAttachRecipe.d.ts.map