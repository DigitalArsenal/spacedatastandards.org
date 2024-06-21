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
export declare enum RecordType {
    NONE = 0,
    LCC = 1,
    MPE = 2,
    OMM = 3,
    PLD = 4,
    RFM = 5,
    CSM = 6,
    OSM = 7,
    CAT = 8,
    CRM = 9,
    SCM = 10,
    TDM = 11,
    IDM = 12,
    MET = 13,
    ROC = 14,
    BOV = 15,
    EOP = 16,
    EOO = 17,
    EME = 18,
    LDM = 19,
    PNM = 20,
    HYP = 21,
    CTR = 22,
    CDM = 23,
    SIT = 24,
    OEM = 25,
    TIM = 26,
    EPM = 27,
    PRG = 28
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null, index: number): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LCC | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null;
//# sourceMappingURL=RecordType.d.ts.map