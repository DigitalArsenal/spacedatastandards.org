import * as flatbuffers from 'flatbuffers';
import { BOVT } from './bov.js';
import { CATT } from './cat.js';
import { CDMT } from './cdm.js';
import { CRMT } from './crm.js';
import { CSMT } from './csm.js';
import { CTRT } from './ctr.js';
import { EMET } from './eme.js';
import { EOOT } from './eoo.js';
import { EOPT } from './eop.js';
import { EPMT } from './epm.js';
import { HYPT } from './hyp.js';
import { IDMT } from './idm.js';
import { LCCT } from './lcc.js';
import { LDMT } from './ldm.js';
import { METT } from './met.js';
import { MPET } from './mpe.js';
import { OCMT } from './ocm.js';
import { OEMT } from './oem.js';
import { OMMT } from './omm.js';
import { OSMT } from './osm.js';
import { PLDT } from './pld.js';
import { PNMT } from './pnm.js';
import { PRGT } from './prg.js';
import { RFMT } from './rfm.js';
import { ROCT } from './roc.js';
import { RecordType } from './record-type.js';
import { SCMT } from './scm.js';
import { SITT } from './sit.js';
import { SPWT } from './spw.js';
import { TDMT } from './tdm.js';
import { TIMT } from './tim.js';
import { VCMT } from './vcm.js';
export declare class Record implements flatbuffers.IUnpackableObject<RecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Record;
    static getRootAsRecord(bb: flatbuffers.ByteBuffer, obj?: Record): Record;
    static getSizePrefixedRootAsRecord(bb: flatbuffers.ByteBuffer, obj?: Record): Record;
    valueType(): RecordType;
    value<T extends flatbuffers.Table>(obj: any): any | null;
    static startRecord(builder: flatbuffers.Builder): void;
    static addValueType(builder: flatbuffers.Builder, valueType: RecordType): void;
    static addValue(builder: flatbuffers.Builder, valueOffset: flatbuffers.Offset): void;
    static endRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRecord(builder: flatbuffers.Builder, valueType: RecordType, valueOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RecordT;
    unpackTo(_o: RecordT): void;
}
export declare class RecordT implements flatbuffers.IGeneratedObject {
    valueType: RecordType;
    value: BOVT | CATT | CDMT | CRMT | CSMT | CTRT | EMET | EOOT | EOPT | EPMT | HYPT | IDMT | LCCT | LDMT | METT | MPET | OCMT | OEMT | OMMT | OSMT | PLDT | PNMT | PRGT | RFMT | ROCT | SCMT | SITT | SPWT | TDMT | TIMT | VCMT | null;
    constructor(valueType?: RecordType, value?: BOVT | CATT | CDMT | CRMT | CSMT | CTRT | EMET | EOOT | EOPT | EPMT | HYPT | IDMT | LCCT | LDMT | METT | MPET | OCMT | OEMT | OMMT | OSMT | PLDT | PNMT | PRGT | RFMT | ROCT | SCMT | SITT | SPWT | TDMT | TIMT | VCMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=record.d.ts.map