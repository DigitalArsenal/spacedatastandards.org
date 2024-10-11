import * as flatbuffers from 'flatbuffers';
import { BOVT } from './BOV.js';
import { CATT } from './CAT.js';
import { CDMT } from './CDM.js';
import { CRMT } from './CRM.js';
import { CSMT } from './CSM.js';
import { CTRT } from './CTR.js';
import { EMET } from './EME.js';
import { EOOT } from './EOO.js';
import { EOPT } from './EOP.js';
import { EPMT } from './EPM.js';
import { HYPT } from './HYP.js';
import { IDMT } from './IDM.js';
import { LCCT } from './LCC.js';
import { LDMT } from './LDM.js';
import { METT } from './MET.js';
import { MPET } from './MPE.js';
import { OEMT } from './OEM.js';
import { OMMT } from './OMM.js';
import { OSMT } from './OSM.js';
import { PLDT } from './PLD.js';
import { PNMT } from './PNM.js';
import { PRGT } from './PRG.js';
import { RFMT } from './RFM.js';
import { ROCT } from './ROC.js';
import { RecordType } from './RecordType.js';
import { SCMT } from './SCM.js';
import { SITT } from './SIT.js';
import { TDMT } from './TDM.js';
import { TIMT } from './TIM.js';
import { VCMT } from './VCM.js';
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
    value: BOVT | CATT | CDMT | CRMT | CSMT | CTRT | EMET | EOOT | EOPT | EPMT | HYPT | IDMT | LCCT | LDMT | METT | MPET | OEMT | OMMT | OSMT | PLDT | PNMT | PRGT | RFMT | ROCT | SCMT | SITT | TDMT | TIMT | VCMT | null;
    constructor(valueType?: RecordType, value?: BOVT | CATT | CDMT | CRMT | CSMT | CTRT | EMET | EOOT | EOPT | EPMT | HYPT | IDMT | LCCT | LDMT | METT | MPET | OEMT | OMMT | OSMT | PLDT | PNMT | PRGT | RFMT | ROCT | SCMT | SITT | TDMT | TIMT | VCMT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Record.d.ts.map