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
import { RFM } from './RFM.js';
import { ROC } from './ROC.js';
import { SCM } from './SCM.js';
import { SIT } from './SIT.js';
import { SPW } from './SPW.js';
import { TDM } from './TDM.js';
import { TIM } from './TIM.js';
import { VCM } from './VCM.js';
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
//# sourceMappingURL=RecordType.d.ts.map