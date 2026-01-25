import { ACL } from './ACL.js';
import { ATM } from './ATM.js';
import { BOV } from './BOV.js';
import { CAT } from './CAT.js';
import { CDM } from './CDM.js';
import { CRM } from './CRM.js';
import { CSM } from './CSM.js';
import { CTR } from './CTR.js';
import { EME } from './EME.js';
import { EOO } from './EOO.js';
import { EOP } from './EOP.js';
import { EPM } from './EPM.js';
import { HYP } from './HYP.js';
import { IDM } from './IDM.js';
import { LCC } from './LCC.js';
import { LDM } from './LDM.js';
import { MET } from './MET.js';
import { MPE } from './MPE.js';
import { OCM } from './OCM.js';
import { OEM } from './OEM.js';
import { OMM } from './OMM.js';
import { OSM } from './OSM.js';
import { PLD } from './PLD.js';
import { PNM } from './PNM.js';
import { PRG } from './PRG.js';
import { PUR } from './PUR.js';
import { REV } from './REV.js';
import { RFM } from './RFM.js';
import { ROC } from './ROC.js';
import { SCM } from './SCM.js';
import { SIT } from './SIT.js';
import { STF } from './STF.js';
import { TDM } from './TDM.js';
import { TIM } from './TIM.js';
import { VCM } from './VCM.js';
import { XTC } from './XTC.js';
export declare enum RecordType {
    NONE = 0,
    ACL = 1,
    ATM = 2,
    BOV = 3,
    CAT = 4,
    CDM = 5,
    CRM = 6,
    CSM = 7,
    CTR = 8,
    EME = 9,
    EOO = 10,
    EOP = 11,
    EPM = 12,
    HYP = 13,
    IDM = 14,
    LCC = 15,
    LDM = 16,
    MET = 17,
    MPE = 18,
    OCM = 19,
    OEM = 20,
    OMM = 21,
    OSM = 22,
    PLD = 23,
    PNM = 24,
    PRG = 25,
    PUR = 26,
    REV = 27,
    RFM = 28,
    ROC = 29,
    SCM = 30,
    SIT = 31,
    STF = 32,
    TDM = 33,
    TIM = 34,
    VCM = 35,
    XTC = 36
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC) => ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC | null): ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC) => ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC | null, index: number): ACL | ATM | BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | PUR | REV | RFM | ROC | SCM | SIT | STF | TDM | TIM | VCM | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map