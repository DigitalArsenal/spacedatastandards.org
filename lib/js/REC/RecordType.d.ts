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
import { TDM } from './TDM.js';
import { TIM } from './TIM.js';
import { VCM } from './VCM.js';
export declare enum RecordType {
    NONE = 0,
    BOV = 1,
    CAT = 2,
    CDM = 3,
    CRM = 4,
    CSM = 5,
    CTR = 6,
    EME = 7,
    EOO = 8,
    EOP = 9,
    EPM = 10,
    HYP = 11,
    IDM = 12,
    LCC = 13,
    LDM = 14,
    MET = 15,
    MPE = 16,
    OCM = 17,
    OEM = 18,
    OMM = 19,
    OSM = 20,
    PLD = 21,
    PNM = 22,
    PRG = 23,
    RFM = 24,
    ROC = 25,
    SCM = 26,
    SIT = 27,
    TDM = 28,
    TIM = 29,
    VCM = 30
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null, index: number): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null;
//# sourceMappingURL=RecordType.d.ts.map