import * as flatbuffers from 'flatbuffers';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
/**
 * Base container reference with restriction
 */
export declare class BaseContainer implements flatbuffers.IUnpackableObject<BaseContainerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BaseContainer;
    static getRootAsBaseContainer(bb: flatbuffers.ByteBuffer, obj?: BaseContainer): BaseContainer;
    static getSizePrefixedRootAsBaseContainer(bb: flatbuffers.ByteBuffer, obj?: BaseContainer): BaseContainer;
    /**
     * Container reference path
     */
    CONTAINER_REF(): string | null;
    CONTAINER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Restriction criteria
     */
    RESTRICTION_CRITERIA(obj?: MatchCriteria): MatchCriteria | null;
    static startBaseContainer(builder: flatbuffers.Builder): void;
    static addContainerRef(builder: flatbuffers.Builder, CONTAINER_REFOffset: flatbuffers.Offset): void;
    static addRestrictionCriteria(builder: flatbuffers.Builder, RESTRICTION_CRITERIAOffset: flatbuffers.Offset): void;
    static endBaseContainer(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BaseContainerT;
    unpackTo(_o: BaseContainerT): void;
}
export declare class BaseContainerT implements flatbuffers.IGeneratedObject {
    CONTAINER_REF: string | Uint8Array | null;
    RESTRICTION_CRITERIA: MatchCriteriaT | null;
    constructor(CONTAINER_REF?: string | Uint8Array | null, RESTRICTION_CRITERIA?: MatchCriteriaT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BaseContainer.d.ts.map