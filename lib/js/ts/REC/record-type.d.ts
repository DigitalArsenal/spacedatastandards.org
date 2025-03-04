import { BOV } from './bov.js';
import { CAT } from './cat.js';
import { CDM } from './cdm.js';
import { CRM } from './crm.js';
import { CSM } from './csm.js';
import { CTR } from './ctr.js';
import { EME } from './eme.js';
import { EOO } from './eoo.js';
import { EOP } from './eop.js';
import { EPM } from './epm.js';
import { HYP } from './hyp.js';
import { IDM } from './idm.js';
import { LCC } from './lcc.js';
import { LDM } from './ldm.js';
import { MET } from './met.js';
import { MPE } from './mpe.js';
import { OCM } from './ocm.js';
import { OEM } from './oem.js';
import { OMM } from './omm.js';
import { OSM } from './osm.js';
import { PLD } from './pld.js';
import { PNM } from './pnm.js';
import { PRG } from './prg.js';
import { RFM } from './rfm.js';
import { ROC } from './roc.js';
import { SCM } from './scm.js';
import { SIT } from './sit.js';
import { SPW } from './spw.js';
import { TDM } from './tdm.js';
import { TIM } from './tim.js';
import { VCM } from './vcm.js';
export declare enum RecordType {
    NONE = 0,
    CRM = 1,
    OMM = 2,
    PRG = 3,
    OSM = 4,
    EPM = 5,
    MPE = 6,
    EME = 7,
    OEM = 8,
    VCM = 9,
    CDM = 10,
    IDM = 11,
    SCM = 12,
    PNM = 13,
    CSM = 14,
    HYP = 15,
    LCC = 16,
    ROC = 17,
    EOP = 18,
    CAT = 19,
    OCM = 20,
    CTR = 21,
    TIM = 22,
    MET = 23,
    PLD = 24,
    EOO = 25,
    SIT = 26,
    RFM = 27,
    BOV = 28,
    LDM = 29,
    TDM = 30,
    SPW = 31
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM | null): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM | null, index: number): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | SPW | TDM | TIM | VCM | null;
//# sourceMappingURL=record-type.d.ts.map