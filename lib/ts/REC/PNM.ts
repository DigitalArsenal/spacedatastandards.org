// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * Publish Notification Message
 */
export class PNM implements flatbuffers.IUnpackableObject<PNMT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PNM {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPNM(bb:flatbuffers.ByteBuffer, obj?:PNM):PNM {
  return (obj || new PNM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPNM(bb:flatbuffers.ByteBuffer, obj?:PNM):PNM {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PNM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$PNM');
}

/**
 * Multiformat Address
 * https://multiformats.io/multiaddr/
 * A universal address format for representing multiple network protocols. Examples include:
 * - /ip4/192.168.1.1/tcp/80 for an IPv4 address with TCP protocol
 * - /ip6zone/x/ip6/::1 for an IPv6 address with a zone
 * - /dns4/example.com for a domain name resolvable only to IPv4 addresses
 * - /ipfs/bafybeiccfclkdtucu6y4yc5cpr6y3yuinr67svmii46v5cfcrkp47ihehy/README.txt -IPFS address w/CID and path to `README.txt`.
 */
MULTIFORMAT_ADDRESS():string|null
MULTIFORMAT_ADDRESS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
MULTIFORMAT_ADDRESS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Publish Time OF THE Publish Notification Message
 */
PUBLISH_TIMESTAMP():string|null
PUBLISH_TIMESTAMP(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PUBLISH_TIMESTAMP(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Concatenated Content Identifier (CID)
 * This field is a unique ID for distributed systems (CID).
 * The CID provides a unique identifier within distributed systems, as detailed at https://github.com/multiformats/cid. 
 */
CID():string|null
CID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * File ID
 * This field is the Name
 */
FILE_NAME():string|null
FILE_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
FILE_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * File ID
 * This field is the file ID / Standard Type
 */
FILE_ID():string|null
FILE_ID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
FILE_ID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Digital Signature of the CID
 * This is the digital signature of the CID, signed using the specified cryptographic method.
 */
SIGNATURE():string|null
SIGNATURE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SIGNATURE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Timestamp Signature
 * Digital signature of the publish timestamp, using the specified cryptographic method for timestamp verification.
 */
TIMESTAMP_SIGNATURE():string|null
TIMESTAMP_SIGNATURE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
TIMESTAMP_SIGNATURE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Type of Cryptographic Signature Used
 * Specifies the type of cryptographic signature used for the SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
 */
SIGNATURE_TYPE():string|null
SIGNATURE_TYPE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SIGNATURE_TYPE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Type of Cryptographic Signature Used for Timestamp
 * Specifies the type of cryptographic signature used for the TIMESTAMP_SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
 */
TIMESTAMP_SIGNATURE_TYPE():string|null
TIMESTAMP_SIGNATURE_TYPE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
TIMESTAMP_SIGNATURE_TYPE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startPNM(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addMultiformatAddress(builder:flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, MULTIFORMAT_ADDRESSOffset, 0);
}

static addPublishTimestamp(builder:flatbuffers.Builder, PUBLISH_TIMESTAMPOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, PUBLISH_TIMESTAMPOffset, 0);
}

static addCid(builder:flatbuffers.Builder, CIDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, CIDOffset, 0);
}

static addFileName(builder:flatbuffers.Builder, FILE_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, FILE_NAMEOffset, 0);
}

static addFileId(builder:flatbuffers.Builder, FILE_IDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, FILE_IDOffset, 0);
}

static addSignature(builder:flatbuffers.Builder, SIGNATUREOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, SIGNATUREOffset, 0);
}

static addTimestampSignature(builder:flatbuffers.Builder, TIMESTAMP_SIGNATUREOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, TIMESTAMP_SIGNATUREOffset, 0);
}

static addSignatureType(builder:flatbuffers.Builder, SIGNATURE_TYPEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, SIGNATURE_TYPEOffset, 0);
}

static addTimestampSignatureType(builder:flatbuffers.Builder, TIMESTAMP_SIGNATURE_TYPEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, TIMESTAMP_SIGNATURE_TYPEOffset, 0);
}

static endPNM(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishPNMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$PNM');
}

static finishSizePrefixedPNMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$PNM', true);
}

static createPNM(builder:flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset:flatbuffers.Offset, PUBLISH_TIMESTAMPOffset:flatbuffers.Offset, CIDOffset:flatbuffers.Offset, FILE_NAMEOffset:flatbuffers.Offset, FILE_IDOffset:flatbuffers.Offset, SIGNATUREOffset:flatbuffers.Offset, TIMESTAMP_SIGNATUREOffset:flatbuffers.Offset, SIGNATURE_TYPEOffset:flatbuffers.Offset, TIMESTAMP_SIGNATURE_TYPEOffset:flatbuffers.Offset):flatbuffers.Offset {
  PNM.startPNM(builder);
  PNM.addMultiformatAddress(builder, MULTIFORMAT_ADDRESSOffset);
  PNM.addPublishTimestamp(builder, PUBLISH_TIMESTAMPOffset);
  PNM.addCid(builder, CIDOffset);
  PNM.addFileName(builder, FILE_NAMEOffset);
  PNM.addFileId(builder, FILE_IDOffset);
  PNM.addSignature(builder, SIGNATUREOffset);
  PNM.addTimestampSignature(builder, TIMESTAMP_SIGNATUREOffset);
  PNM.addSignatureType(builder, SIGNATURE_TYPEOffset);
  PNM.addTimestampSignatureType(builder, TIMESTAMP_SIGNATURE_TYPEOffset);
  return PNM.endPNM(builder);
}

unpack(): PNMT {
  return new PNMT(
    this.MULTIFORMAT_ADDRESS(),
    this.PUBLISH_TIMESTAMP(),
    this.CID(),
    this.FILE_NAME(),
    this.FILE_ID(),
    this.SIGNATURE(),
    this.TIMESTAMP_SIGNATURE(),
    this.SIGNATURE_TYPE(),
    this.TIMESTAMP_SIGNATURE_TYPE()
  );
}


unpackTo(_o: PNMT): void {
  _o.MULTIFORMAT_ADDRESS = this.MULTIFORMAT_ADDRESS();
  _o.PUBLISH_TIMESTAMP = this.PUBLISH_TIMESTAMP();
  _o.CID = this.CID();
  _o.FILE_NAME = this.FILE_NAME();
  _o.FILE_ID = this.FILE_ID();
  _o.SIGNATURE = this.SIGNATURE();
  _o.TIMESTAMP_SIGNATURE = this.TIMESTAMP_SIGNATURE();
  _o.SIGNATURE_TYPE = this.SIGNATURE_TYPE();
  _o.TIMESTAMP_SIGNATURE_TYPE = this.TIMESTAMP_SIGNATURE_TYPE();
}
}

export class PNMT implements flatbuffers.IGeneratedObject {
constructor(
  public MULTIFORMAT_ADDRESS: string|Uint8Array|null = null,
  public PUBLISH_TIMESTAMP: string|Uint8Array|null = null,
  public CID: string|Uint8Array|null = null,
  public FILE_NAME: string|Uint8Array|null = null,
  public FILE_ID: string|Uint8Array|null = null,
  public SIGNATURE: string|Uint8Array|null = null,
  public TIMESTAMP_SIGNATURE: string|Uint8Array|null = null,
  public SIGNATURE_TYPE: string|Uint8Array|null = null,
  public TIMESTAMP_SIGNATURE_TYPE: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const MULTIFORMAT_ADDRESS = (this.MULTIFORMAT_ADDRESS !== null ? builder.createString(this.MULTIFORMAT_ADDRESS!) : 0);
  const PUBLISH_TIMESTAMP = (this.PUBLISH_TIMESTAMP !== null ? builder.createString(this.PUBLISH_TIMESTAMP!) : 0);
  const CID = (this.CID !== null ? builder.createString(this.CID!) : 0);
  const FILE_NAME = (this.FILE_NAME !== null ? builder.createString(this.FILE_NAME!) : 0);
  const FILE_ID = (this.FILE_ID !== null ? builder.createString(this.FILE_ID!) : 0);
  const SIGNATURE = (this.SIGNATURE !== null ? builder.createString(this.SIGNATURE!) : 0);
  const TIMESTAMP_SIGNATURE = (this.TIMESTAMP_SIGNATURE !== null ? builder.createString(this.TIMESTAMP_SIGNATURE!) : 0);
  const SIGNATURE_TYPE = (this.SIGNATURE_TYPE !== null ? builder.createString(this.SIGNATURE_TYPE!) : 0);
  const TIMESTAMP_SIGNATURE_TYPE = (this.TIMESTAMP_SIGNATURE_TYPE !== null ? builder.createString(this.TIMESTAMP_SIGNATURE_TYPE!) : 0);

  return PNM.createPNM(builder,
    MULTIFORMAT_ADDRESS,
    PUBLISH_TIMESTAMP,
    CID,
    FILE_NAME,
    FILE_ID,
    SIGNATURE,
    TIMESTAMP_SIGNATURE,
    SIGNATURE_TYPE,
    TIMESTAMP_SIGNATURE_TYPE
  );
}
}