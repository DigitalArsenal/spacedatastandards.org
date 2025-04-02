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
    CAT = 1,
    VCM = 2,
    CDM = 3,
    IDM = 4,
    PLD = 5,
    BOV = 6,
    EPM = 7,
    OSM = 8,
    PRG = 9,
    CTR = 10,
    SIT = 11,
    CRM = 12,
    EOP = 13,
    MET = 14,
    OEM = 15,
    HYP = 16,
    TIM = 17,
    ROC = 18,
    EME = 19,
    RFM = 20,
    OMM = 21,
    CSM = 22,
    LCC = 23,
    MPE = 24,
    LDM = 25,
    SCM = 26,
    EOO = 27,
    TDM = 28,
    OCM = 29,
    PNM = 30
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null, index: number): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OCM | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | VCM | null;
//# sourceMappingURL=RecordType.d.ts.map