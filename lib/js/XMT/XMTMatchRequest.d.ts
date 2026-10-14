import * as flatbuffers from 'flatbuffers';
import { OILLink, OILLinkT } from './OILLink.js';
import { XMTMatchPolicy, XMTMatchPolicyT } from './XMTMatchPolicy.js';
import { XMTTrajectory, XMTTrajectoryT } from './XMTTrajectory.js';
/**
 * A request to compare proposed identity pairs over trajectories.
 */
export declare class XMTMatchRequest implements flatbuffers.IUnpackableObject<XMTMatchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTMatchRequest;
    static getRootAsXMTMatchRequest(bb: flatbuffers.ByteBuffer, obj?: XMTMatchRequest): XMTMatchRequest;
    static getSizePrefixedRootAsXMTMatchRequest(bb: flatbuffers.ByteBuffer, obj?: XMTMatchRequest): XMTMatchRequest;
    POLICY(obj?: XMTMatchPolicy): XMTMatchPolicy | null;
    /**
     * The trajectories, in the order their records are passed.
     */
    TRAJECTORIES(index: number, obj?: XMTTrajectory): XMTTrajectory | null;
    trajectoriesLength(): number;
    /**
     * Proposed pairs: LEFT.TRAJECTORY_ID and RIGHT.TRAJECTORY_ID name
     * trajectories; RIGHT may also name the catalog object the left identity
     * would bind to (NORAD_CAT_ID or INTERNATIONAL_DESIGNATOR); EVIDENCE is the
     * declaration's.
     */
    PAIRS(index: number, obj?: OILLink): OILLink | null;
    pairsLength(): number;
    static startXMTMatchRequest(builder: flatbuffers.Builder): void;
    static addPolicy(builder: flatbuffers.Builder, POLICYOffset: flatbuffers.Offset): void;
    static addTrajectories(builder: flatbuffers.Builder, TRAJECTORIESOffset: flatbuffers.Offset): void;
    static createTrajectoriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrajectoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static createPairsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTMatchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTMatchRequest(builder: flatbuffers.Builder, POLICYOffset: flatbuffers.Offset, TRAJECTORIESOffset: flatbuffers.Offset, PAIRSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTMatchRequestT;
    unpackTo(_o: XMTMatchRequestT): void;
}
export declare class XMTMatchRequestT implements flatbuffers.IGeneratedObject {
    POLICY: XMTMatchPolicyT | null;
    TRAJECTORIES: (XMTTrajectoryT)[];
    PAIRS: (OILLinkT)[];
    constructor(POLICY?: XMTMatchPolicyT | null, TRAJECTORIES?: (XMTTrajectoryT)[], PAIRS?: (OILLinkT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTMatchRequest.d.ts.map