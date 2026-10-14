import * as flatbuffers from 'flatbuffers';
import { XMTManeuverPolicy, XMTManeuverPolicyT } from './XMTManeuverPolicy.js';
import { XMTMatchRequest, XMTMatchRequestT } from './XMTMatchRequest.js';
import { XMTSelectionPolicy, XMTSelectionPolicyT } from './XMTSelectionPolicy.js';
/**
 * Recipe of a catalog integration.
 */
export declare class XMTIntegrateRecipe implements flatbuffers.IUnpackableObject<XMTIntegrateRecipeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTIntegrateRecipe;
    static getRootAsXMTIntegrateRecipe(bb: flatbuffers.ByteBuffer, obj?: XMTIntegrateRecipe): XMTIntegrateRecipe;
    static getSizePrefixedRootAsXMTIntegrateRecipe(bb: flatbuffers.ByteBuffer, obj?: XMTIntegrateRecipe): XMTIntegrateRecipe;
    /**
     * Unix milliseconds the integration is as of.
     */
    AS_OF_MS(): bigint;
    /**
     * Identity links to test on trajectories; absent = no native identities.
     */
    IDENTITY(obj?: XMTMatchRequest): XMTMatchRequest | null;
    SELECTION(obj?: XMTSelectionPolicy): XMTSelectionPolicy | null;
    MANEUVERS(obj?: XMTManeuverPolicy): XMTManeuverPolicy | null;
    static startXMTIntegrateRecipe(builder: flatbuffers.Builder): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addIdentity(builder: flatbuffers.Builder, IDENTITYOffset: flatbuffers.Offset): void;
    static addSelection(builder: flatbuffers.Builder, SELECTIONOffset: flatbuffers.Offset): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static endXMTIntegrateRecipe(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTIntegrateRecipeT;
    unpackTo(_o: XMTIntegrateRecipeT): void;
}
export declare class XMTIntegrateRecipeT implements flatbuffers.IGeneratedObject {
    AS_OF_MS: bigint;
    IDENTITY: XMTMatchRequestT | null;
    SELECTION: XMTSelectionPolicyT | null;
    MANEUVERS: XMTManeuverPolicyT | null;
    constructor(AS_OF_MS?: bigint, IDENTITY?: XMTMatchRequestT | null, SELECTION?: XMTSelectionPolicyT | null, MANEUVERS?: XMTManeuverPolicyT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTIntegrateRecipe.d.ts.map