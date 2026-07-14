import * as flatbuffers from 'flatbuffers';
import { appContentEncoding } from './appContentEncoding.js';
import { appFlowDirection } from './appFlowDirection.js';
import { appFlowTransport } from './appFlowTransport.js';
/**
 * One unit of the page's data contract: a named flow describing what data
 * enters or leaves the running page, the SDS standard it carries, how it is
 * transported, and — when applicable — the loaded module method port bound
 * to it. Standards-only rule: every flow payload is an SDS record (a
 * canonical size-prefixed FlatBuffer) or a CID pointing at one; this table
 * defines no data shapes of its own, it only references an existing
 * spacedatastandards.org schema by its established code. Locators are
 * content-addressed and IPFS-first.
 */
export declare class APPDataflow implements flatbuffers.IUnpackableObject<APPDataflowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APPDataflow;
    static getRootAsAPPDataflow(bb: flatbuffers.ByteBuffer, obj?: APPDataflow): APPDataflow;
    static getSizePrefixedRootAsAPPDataflow(bb: flatbuffers.ByteBuffer, obj?: APPDataflow): APPDataflow;
    /**
     * App-local stable name for this flow. Required, unique within the
     * manifest.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Which way the payload crosses the page boundary at runtime.
     */
    DIRECTION(): appFlowDirection;
    /**
     * Existing SDS schema code carried by this flow, for example OMM, OEM, or
     * PNM. Required. Mirrors APPDataRef.SDS_TYPE but named for the standard
     * the flow carries; the app defines no schema of its own.
     */
    SDS_SCHEMA(): string;
    SDS_SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Transport that moves the payload. Defaults to IPFS_CID per the
     * content-addressed, IPFS-first rule.
     */
    TRANSPORT(): appFlowTransport;
    /**
     * Where to fetch or reach the payload, interpreted per TRANSPORT: a CID
     * for IPFS_CID, a gossip topic name for PUBSUB_TOPIC, or a same-origin
     * route template for GATEWAY_ROUTE.
     */
    LOCATOR(): string | null;
    LOCATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When present, must equal an APPModuleRef.ID in the same manifest — the
     * loaded module that produces or consumes this flow. Binds the flow to a
     * specific module method port together with METHOD_ID and PORT_ID.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When present, the PLG.PLGMethodManifest.METHOD_ID on MODULE_ID that
     * this flow is bound to.
     */
    METHOD_ID(): string | null;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When present, the PLG.PLGPortManifest.PORT_ID on METHOD_ID that this
     * flow is bound to.
     */
    PORT_ID(): string | null;
    PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * String/compression form of the payload as it crosses the channel,
     * reusing the page content-encoding vocabulary. For flows carrying
     * canonical SDS FlatBuffer bytes (or a CID string), UTF8 denotes the raw
     * bytes/string with no extra wrapper; BASE64, BASE64_GZIP, and
     * BASE64_BROTLI denote a base64 text wrapper (optionally compressed)
     * applied when the channel is text-only.
     */
    CONTENT_ENCODING(): appContentEncoding;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPPDataflow(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: appFlowDirection): void;
    static addSdsSchema(builder: flatbuffers.Builder, SDS_SCHEMAOffset: flatbuffers.Offset): void;
    static addTransport(builder: flatbuffers.Builder, TRANSPORT: appFlowTransport): void;
    static addLocator(builder: flatbuffers.Builder, LOCATOROffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addPortId(builder: flatbuffers.Builder, PORT_IDOffset: flatbuffers.Offset): void;
    static addContentEncoding(builder: flatbuffers.Builder, CONTENT_ENCODING: appContentEncoding): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAPPDataflow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPPDataflow(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DIRECTION: appFlowDirection, SDS_SCHEMAOffset: flatbuffers.Offset, TRANSPORT: appFlowTransport, LOCATOROffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, METHOD_IDOffset: flatbuffers.Offset, PORT_IDOffset: flatbuffers.Offset, CONTENT_ENCODING: appContentEncoding, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APPDataflowT;
    unpackTo(_o: APPDataflowT): void;
}
export declare class APPDataflowT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DIRECTION: appFlowDirection;
    SDS_SCHEMA: string | Uint8Array | null;
    TRANSPORT: appFlowTransport;
    LOCATOR: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    METHOD_ID: string | Uint8Array | null;
    PORT_ID: string | Uint8Array | null;
    CONTENT_ENCODING: appContentEncoding;
    DESCRIPTION: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, DIRECTION?: appFlowDirection, SDS_SCHEMA?: string | Uint8Array | null, TRANSPORT?: appFlowTransport, LOCATOR?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, METHOD_ID?: string | Uint8Array | null, PORT_ID?: string | Uint8Array | null, CONTENT_ENCODING?: appContentEncoding, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APPDataflow.d.ts.map