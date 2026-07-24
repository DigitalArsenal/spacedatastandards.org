import * as flatbuffers from 'flatbuffers';
import { ACL, ACLT } from './ACL.js';
import { CZM, CZMT } from './CZM.js';
import { WKSQuery, WKSQueryT } from './WKSQuery.js';
/**
 * Workspace — named scene snapshot + FlatSQL query state + share grants
 */
export declare class WKS implements flatbuffers.IUnpackableObject<WKST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WKS;
    static getRootAsWKS(bb: flatbuffers.ByteBuffer, obj?: WKS): WKS;
    static getSizePrefixedRootAsWKS(bb: flatbuffers.ByteBuffer, obj?: WKS): WKS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable workspace identifier
     */
    WORKSPACE_ID(): string;
    WORKSPACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the owning `$EPM`
     */
    OWNER_EPM_CID(): string | null;
    OWNER_EPM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$APP.ID` of the application this workspace belongs to
     */
    APP_ID(): string | null;
    APP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The named `$CZM` scene snapshot
     */
    SCENE(obj?: CZM): CZM | null;
    /**
     * FlatSQL query state captured with the scene
     */
    QUERIES(index: number, obj?: WKSQuery): WKSQuery | null;
    queriesLength(): number;
    /**
     * Share grants to other `$EPM` identities
     */
    SHARE_GRANTS(index: number, obj?: ACL): ACL | null;
    shareGrantsLength(): number;
    /**
     * Unix ms the workspace was created
     */
    CREATED_AT(): bigint;
    /**
     * Unix ms the workspace was last updated
     */
    UPDATED_AT(): bigint;
    /**
     * Ed25519 signature by the owner `$EPM`
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startWKS(builder: flatbuffers.Builder): void;
    static addWorkspaceId(builder: flatbuffers.Builder, WORKSPACE_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addOwnerEpmCid(builder: flatbuffers.Builder, OWNER_EPM_CIDOffset: flatbuffers.Offset): void;
    static addAppId(builder: flatbuffers.Builder, APP_IDOffset: flatbuffers.Offset): void;
    static addScene(builder: flatbuffers.Builder, SCENEOffset: flatbuffers.Offset): void;
    static addQueries(builder: flatbuffers.Builder, QUERIESOffset: flatbuffers.Offset): void;
    static createQueriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startQueriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShareGrants(builder: flatbuffers.Builder, SHARE_GRANTSOffset: flatbuffers.Offset): void;
    static createShareGrantsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startShareGrantsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endWKS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishWKSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedWKSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): WKST;
    unpackTo(_o: WKST): void;
}
export declare class WKST implements flatbuffers.IGeneratedObject {
    WORKSPACE_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    OWNER_EPM_CID: string | Uint8Array | null;
    APP_ID: string | Uint8Array | null;
    SCENE: CZMT | null;
    QUERIES: (WKSQueryT)[];
    SHARE_GRANTS: (ACLT)[];
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    SIGNATURE: (number)[];
    constructor(WORKSPACE_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, OWNER_EPM_CID?: string | Uint8Array | null, APP_ID?: string | Uint8Array | null, SCENE?: CZMT | null, QUERIES?: (WKSQueryT)[], SHARE_GRANTS?: (ACLT)[], CREATED_AT?: bigint, UPDATED_AT?: bigint, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WKS.d.ts.map