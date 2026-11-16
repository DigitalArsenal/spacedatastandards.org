import * as flatbuffers from 'flatbuffers';
import { CLGDefinition, CLGDefinitionT } from './CLGDefinition.js';
import { CLGResult, CLGResultT } from './CLGResult.js';
import { CLGStateBlock, CLGStateBlockT } from './CLGStateBlock.js';
import { clgPayloadClass } from './clgPayloadClass.js';
/**
 * Exactly one payload; every frame uses the same GRAPH_ID. COMPLETE requires
 * all chunks, definition, implemented scope/enums and host-stamped producer.
 */
export declare class CLG implements flatbuffers.IUnpackableObject<CLGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLG;
    static getRootAsCLG(bb: flatbuffers.ByteBuffer, obj?: CLG): CLG;
    static getSizePrefixedRootAsCLG(bb: flatbuffers.ByteBuffer, obj?: CLG): CLG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Globally unique across exchanging producers/stores; names one dictionary
     * forever. A known ID with a different definition SHA256 is rejected,
     * never merged or rebound. docs/clg-contract.md section 2 defines allocation and hashing.
     */
    GRAPH_ID(): string;
    GRAPH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PAYLOAD(): clgPayloadClass;
    DEFINITION(obj?: CLGDefinition): CLGDefinition | null;
    STATE_BLOCK(obj?: CLGStateBlock): CLGStateBlock | null;
    RESULT(obj?: CLGResult): CLGResult | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_PAYLOAD(): boolean;
    static startCLG(builder: flatbuffers.Builder): void;
    static addGraphId(builder: flatbuffers.Builder, GRAPH_IDOffset: flatbuffers.Offset): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOAD: clgPayloadClass): void;
    static addDefinition(builder: flatbuffers.Builder, DEFINITIONOffset: flatbuffers.Offset): void;
    static addStateBlock(builder: flatbuffers.Builder, STATE_BLOCKOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static addHasPayload(builder: flatbuffers.Builder, HAS_PAYLOAD: boolean): void;
    static endCLG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCLGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CLGT;
    unpackTo(_o: CLGT): void;
}
export declare class CLGT implements flatbuffers.IGeneratedObject {
    GRAPH_ID: string | Uint8Array | null;
    PAYLOAD: clgPayloadClass;
    DEFINITION: CLGDefinitionT | null;
    STATE_BLOCK: CLGStateBlockT | null;
    RESULT: CLGResultT | null;
    HAS_PAYLOAD: boolean;
    constructor(GRAPH_ID?: string | Uint8Array | null, PAYLOAD?: clgPayloadClass, DEFINITION?: CLGDefinitionT | null, STATE_BLOCK?: CLGStateBlockT | null, RESULT?: CLGResultT | null, HAS_PAYLOAD?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLG.d.ts.map