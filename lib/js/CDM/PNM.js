// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message
 */
export class PNM {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsPNM(bb, obj) {
        return (obj || new PNM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsPNM(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PNM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    IPFS_CID(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    KEY_ADDRESS(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    ETH_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    BTC_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    LTC_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    XRP_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    ADA_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    XLM_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    DOGE_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    XMR_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    DOT_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    FIL_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    XTZ_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    ATOM_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    TRX_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    BNB_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 34);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    AVAX_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 36);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    SOL_DIGITAL_SIGNATURE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 38);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    static startPNM(builder) {
        builder.startObject(18);
    }
    static addIpfsCid(builder, IPFS_CIDOffset) {
        builder.addFieldOffset(0, IPFS_CIDOffset, 0);
    }
    static addKeyAddress(builder, KEY_ADDRESSOffset) {
        builder.addFieldOffset(1, KEY_ADDRESSOffset, 0);
    }
    static addEthDigitalSignature(builder, ETH_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(2, ETH_DIGITAL_SIGNATUREOffset, 0);
    }
    static addBtcDigitalSignature(builder, BTC_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(3, BTC_DIGITAL_SIGNATUREOffset, 0);
    }
    static addLtcDigitalSignature(builder, LTC_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(4, LTC_DIGITAL_SIGNATUREOffset, 0);
    }
    static addXrpDigitalSignature(builder, XRP_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(5, XRP_DIGITAL_SIGNATUREOffset, 0);
    }
    static addAdaDigitalSignature(builder, ADA_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(6, ADA_DIGITAL_SIGNATUREOffset, 0);
    }
    static addXlmDigitalSignature(builder, XLM_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(7, XLM_DIGITAL_SIGNATUREOffset, 0);
    }
    static addDogeDigitalSignature(builder, DOGE_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(8, DOGE_DIGITAL_SIGNATUREOffset, 0);
    }
    static addXmrDigitalSignature(builder, XMR_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(9, XMR_DIGITAL_SIGNATUREOffset, 0);
    }
    static addDotDigitalSignature(builder, DOT_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(10, DOT_DIGITAL_SIGNATUREOffset, 0);
    }
    static addFilDigitalSignature(builder, FIL_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(11, FIL_DIGITAL_SIGNATUREOffset, 0);
    }
    static addXtzDigitalSignature(builder, XTZ_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(12, XTZ_DIGITAL_SIGNATUREOffset, 0);
    }
    static addAtomDigitalSignature(builder, ATOM_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(13, ATOM_DIGITAL_SIGNATUREOffset, 0);
    }
    static addTrxDigitalSignature(builder, TRX_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(14, TRX_DIGITAL_SIGNATUREOffset, 0);
    }
    static addBnbDigitalSignature(builder, BNB_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(15, BNB_DIGITAL_SIGNATUREOffset, 0);
    }
    static addAvaxDigitalSignature(builder, AVAX_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(16, AVAX_DIGITAL_SIGNATUREOffset, 0);
    }
    static addSolDigitalSignature(builder, SOL_DIGITAL_SIGNATUREOffset) {
        builder.addFieldOffset(17, SOL_DIGITAL_SIGNATUREOffset, 0);
    }
    static endPNM(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createPNM(builder, IPFS_CIDOffset, KEY_ADDRESSOffset, ETH_DIGITAL_SIGNATUREOffset, BTC_DIGITAL_SIGNATUREOffset, LTC_DIGITAL_SIGNATUREOffset, XRP_DIGITAL_SIGNATUREOffset, ADA_DIGITAL_SIGNATUREOffset, XLM_DIGITAL_SIGNATUREOffset, DOGE_DIGITAL_SIGNATUREOffset, XMR_DIGITAL_SIGNATUREOffset, DOT_DIGITAL_SIGNATUREOffset, FIL_DIGITAL_SIGNATUREOffset, XTZ_DIGITAL_SIGNATUREOffset, ATOM_DIGITAL_SIGNATUREOffset, TRX_DIGITAL_SIGNATUREOffset, BNB_DIGITAL_SIGNATUREOffset, AVAX_DIGITAL_SIGNATUREOffset, SOL_DIGITAL_SIGNATUREOffset) {
        PNM.startPNM(builder);
        PNM.addIpfsCid(builder, IPFS_CIDOffset);
        PNM.addKeyAddress(builder, KEY_ADDRESSOffset);
        PNM.addEthDigitalSignature(builder, ETH_DIGITAL_SIGNATUREOffset);
        PNM.addBtcDigitalSignature(builder, BTC_DIGITAL_SIGNATUREOffset);
        PNM.addLtcDigitalSignature(builder, LTC_DIGITAL_SIGNATUREOffset);
        PNM.addXrpDigitalSignature(builder, XRP_DIGITAL_SIGNATUREOffset);
        PNM.addAdaDigitalSignature(builder, ADA_DIGITAL_SIGNATUREOffset);
        PNM.addXlmDigitalSignature(builder, XLM_DIGITAL_SIGNATUREOffset);
        PNM.addDogeDigitalSignature(builder, DOGE_DIGITAL_SIGNATUREOffset);
        PNM.addXmrDigitalSignature(builder, XMR_DIGITAL_SIGNATUREOffset);
        PNM.addDotDigitalSignature(builder, DOT_DIGITAL_SIGNATUREOffset);
        PNM.addFilDigitalSignature(builder, FIL_DIGITAL_SIGNATUREOffset);
        PNM.addXtzDigitalSignature(builder, XTZ_DIGITAL_SIGNATUREOffset);
        PNM.addAtomDigitalSignature(builder, ATOM_DIGITAL_SIGNATUREOffset);
        PNM.addTrxDigitalSignature(builder, TRX_DIGITAL_SIGNATUREOffset);
        PNM.addBnbDigitalSignature(builder, BNB_DIGITAL_SIGNATUREOffset);
        PNM.addAvaxDigitalSignature(builder, AVAX_DIGITAL_SIGNATUREOffset);
        PNM.addSolDigitalSignature(builder, SOL_DIGITAL_SIGNATUREOffset);
        return PNM.endPNM(builder);
    }
    unpack() {
        return new PNMT(this.IPFS_CID(), this.KEY_ADDRESS(), this.ETH_DIGITAL_SIGNATURE(), this.BTC_DIGITAL_SIGNATURE(), this.LTC_DIGITAL_SIGNATURE(), this.XRP_DIGITAL_SIGNATURE(), this.ADA_DIGITAL_SIGNATURE(), this.XLM_DIGITAL_SIGNATURE(), this.DOGE_DIGITAL_SIGNATURE(), this.XMR_DIGITAL_SIGNATURE(), this.DOT_DIGITAL_SIGNATURE(), this.FIL_DIGITAL_SIGNATURE(), this.XTZ_DIGITAL_SIGNATURE(), this.ATOM_DIGITAL_SIGNATURE(), this.TRX_DIGITAL_SIGNATURE(), this.BNB_DIGITAL_SIGNATURE(), this.AVAX_DIGITAL_SIGNATURE(), this.SOL_DIGITAL_SIGNATURE());
    }
    unpackTo(_o) {
        _o.IPFS_CID = this.IPFS_CID();
        _o.KEY_ADDRESS = this.KEY_ADDRESS();
        _o.ETH_DIGITAL_SIGNATURE = this.ETH_DIGITAL_SIGNATURE();
        _o.BTC_DIGITAL_SIGNATURE = this.BTC_DIGITAL_SIGNATURE();
        _o.LTC_DIGITAL_SIGNATURE = this.LTC_DIGITAL_SIGNATURE();
        _o.XRP_DIGITAL_SIGNATURE = this.XRP_DIGITAL_SIGNATURE();
        _o.ADA_DIGITAL_SIGNATURE = this.ADA_DIGITAL_SIGNATURE();
        _o.XLM_DIGITAL_SIGNATURE = this.XLM_DIGITAL_SIGNATURE();
        _o.DOGE_DIGITAL_SIGNATURE = this.DOGE_DIGITAL_SIGNATURE();
        _o.XMR_DIGITAL_SIGNATURE = this.XMR_DIGITAL_SIGNATURE();
        _o.DOT_DIGITAL_SIGNATURE = this.DOT_DIGITAL_SIGNATURE();
        _o.FIL_DIGITAL_SIGNATURE = this.FIL_DIGITAL_SIGNATURE();
        _o.XTZ_DIGITAL_SIGNATURE = this.XTZ_DIGITAL_SIGNATURE();
        _o.ATOM_DIGITAL_SIGNATURE = this.ATOM_DIGITAL_SIGNATURE();
        _o.TRX_DIGITAL_SIGNATURE = this.TRX_DIGITAL_SIGNATURE();
        _o.BNB_DIGITAL_SIGNATURE = this.BNB_DIGITAL_SIGNATURE();
        _o.AVAX_DIGITAL_SIGNATURE = this.AVAX_DIGITAL_SIGNATURE();
        _o.SOL_DIGITAL_SIGNATURE = this.SOL_DIGITAL_SIGNATURE();
    }
}
export class PNMT {
    constructor(IPFS_CID = null, KEY_ADDRESS = null, ETH_DIGITAL_SIGNATURE = null, BTC_DIGITAL_SIGNATURE = null, LTC_DIGITAL_SIGNATURE = null, XRP_DIGITAL_SIGNATURE = null, ADA_DIGITAL_SIGNATURE = null, XLM_DIGITAL_SIGNATURE = null, DOGE_DIGITAL_SIGNATURE = null, XMR_DIGITAL_SIGNATURE = null, DOT_DIGITAL_SIGNATURE = null, FIL_DIGITAL_SIGNATURE = null, XTZ_DIGITAL_SIGNATURE = null, ATOM_DIGITAL_SIGNATURE = null, TRX_DIGITAL_SIGNATURE = null, BNB_DIGITAL_SIGNATURE = null, AVAX_DIGITAL_SIGNATURE = null, SOL_DIGITAL_SIGNATURE = null) {
        this.IPFS_CID = IPFS_CID;
        this.KEY_ADDRESS = KEY_ADDRESS;
        this.ETH_DIGITAL_SIGNATURE = ETH_DIGITAL_SIGNATURE;
        this.BTC_DIGITAL_SIGNATURE = BTC_DIGITAL_SIGNATURE;
        this.LTC_DIGITAL_SIGNATURE = LTC_DIGITAL_SIGNATURE;
        this.XRP_DIGITAL_SIGNATURE = XRP_DIGITAL_SIGNATURE;
        this.ADA_DIGITAL_SIGNATURE = ADA_DIGITAL_SIGNATURE;
        this.XLM_DIGITAL_SIGNATURE = XLM_DIGITAL_SIGNATURE;
        this.DOGE_DIGITAL_SIGNATURE = DOGE_DIGITAL_SIGNATURE;
        this.XMR_DIGITAL_SIGNATURE = XMR_DIGITAL_SIGNATURE;
        this.DOT_DIGITAL_SIGNATURE = DOT_DIGITAL_SIGNATURE;
        this.FIL_DIGITAL_SIGNATURE = FIL_DIGITAL_SIGNATURE;
        this.XTZ_DIGITAL_SIGNATURE = XTZ_DIGITAL_SIGNATURE;
        this.ATOM_DIGITAL_SIGNATURE = ATOM_DIGITAL_SIGNATURE;
        this.TRX_DIGITAL_SIGNATURE = TRX_DIGITAL_SIGNATURE;
        this.BNB_DIGITAL_SIGNATURE = BNB_DIGITAL_SIGNATURE;
        this.AVAX_DIGITAL_SIGNATURE = AVAX_DIGITAL_SIGNATURE;
        this.SOL_DIGITAL_SIGNATURE = SOL_DIGITAL_SIGNATURE;
    }
    pack(builder) {
        const IPFS_CID = (this.IPFS_CID !== null ? builder.createString(this.IPFS_CID) : 0);
        const KEY_ADDRESS = (this.KEY_ADDRESS !== null ? builder.createString(this.KEY_ADDRESS) : 0);
        const ETH_DIGITAL_SIGNATURE = (this.ETH_DIGITAL_SIGNATURE !== null ? builder.createString(this.ETH_DIGITAL_SIGNATURE) : 0);
        const BTC_DIGITAL_SIGNATURE = (this.BTC_DIGITAL_SIGNATURE !== null ? builder.createString(this.BTC_DIGITAL_SIGNATURE) : 0);
        const LTC_DIGITAL_SIGNATURE = (this.LTC_DIGITAL_SIGNATURE !== null ? builder.createString(this.LTC_DIGITAL_SIGNATURE) : 0);
        const XRP_DIGITAL_SIGNATURE = (this.XRP_DIGITAL_SIGNATURE !== null ? builder.createString(this.XRP_DIGITAL_SIGNATURE) : 0);
        const ADA_DIGITAL_SIGNATURE = (this.ADA_DIGITAL_SIGNATURE !== null ? builder.createString(this.ADA_DIGITAL_SIGNATURE) : 0);
        const XLM_DIGITAL_SIGNATURE = (this.XLM_DIGITAL_SIGNATURE !== null ? builder.createString(this.XLM_DIGITAL_SIGNATURE) : 0);
        const DOGE_DIGITAL_SIGNATURE = (this.DOGE_DIGITAL_SIGNATURE !== null ? builder.createString(this.DOGE_DIGITAL_SIGNATURE) : 0);
        const XMR_DIGITAL_SIGNATURE = (this.XMR_DIGITAL_SIGNATURE !== null ? builder.createString(this.XMR_DIGITAL_SIGNATURE) : 0);
        const DOT_DIGITAL_SIGNATURE = (this.DOT_DIGITAL_SIGNATURE !== null ? builder.createString(this.DOT_DIGITAL_SIGNATURE) : 0);
        const FIL_DIGITAL_SIGNATURE = (this.FIL_DIGITAL_SIGNATURE !== null ? builder.createString(this.FIL_DIGITAL_SIGNATURE) : 0);
        const XTZ_DIGITAL_SIGNATURE = (this.XTZ_DIGITAL_SIGNATURE !== null ? builder.createString(this.XTZ_DIGITAL_SIGNATURE) : 0);
        const ATOM_DIGITAL_SIGNATURE = (this.ATOM_DIGITAL_SIGNATURE !== null ? builder.createString(this.ATOM_DIGITAL_SIGNATURE) : 0);
        const TRX_DIGITAL_SIGNATURE = (this.TRX_DIGITAL_SIGNATURE !== null ? builder.createString(this.TRX_DIGITAL_SIGNATURE) : 0);
        const BNB_DIGITAL_SIGNATURE = (this.BNB_DIGITAL_SIGNATURE !== null ? builder.createString(this.BNB_DIGITAL_SIGNATURE) : 0);
        const AVAX_DIGITAL_SIGNATURE = (this.AVAX_DIGITAL_SIGNATURE !== null ? builder.createString(this.AVAX_DIGITAL_SIGNATURE) : 0);
        const SOL_DIGITAL_SIGNATURE = (this.SOL_DIGITAL_SIGNATURE !== null ? builder.createString(this.SOL_DIGITAL_SIGNATURE) : 0);
        return PNM.createPNM(builder, IPFS_CID, KEY_ADDRESS, ETH_DIGITAL_SIGNATURE, BTC_DIGITAL_SIGNATURE, LTC_DIGITAL_SIGNATURE, XRP_DIGITAL_SIGNATURE, ADA_DIGITAL_SIGNATURE, XLM_DIGITAL_SIGNATURE, DOGE_DIGITAL_SIGNATURE, XMR_DIGITAL_SIGNATURE, DOT_DIGITAL_SIGNATURE, FIL_DIGITAL_SIGNATURE, XTZ_DIGITAL_SIGNATURE, ATOM_DIGITAL_SIGNATURE, TRX_DIGITAL_SIGNATURE, BNB_DIGITAL_SIGNATURE, AVAX_DIGITAL_SIGNATURE, SOL_DIGITAL_SIGNATURE);
    }
}