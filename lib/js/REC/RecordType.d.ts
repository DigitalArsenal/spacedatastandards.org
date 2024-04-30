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
    MPE = 1,
    OMM = 2,
    PLD = 3,
    RFM = 4,
    CSM = 5,
    OSM = 6,
    CAT = 7,
    CRM = 8,
    SCM = 9,
    TDM = 10,
    IDM = 11,
    MET = 12,
    ROC = 13,
    BOV = 14,
    EOP = 15,
    EOO = 16,
    EME = 17,
    LDM = 18,
    PNM = 19,
    HYP = 20,
    CTR = 21,
    CDM = 22,
    SIT = 23,
    OEM = 24,
    TIM = 25,
    EPM = 26,
    PRG = 27
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM) => BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null, index: number): BOV | CAT | CDM | CRM | CSM | CTR | EME | EOO | EOP | EPM | HYP | IDM | LDM | MET | MPE | OEM | OMM | OSM | PLD | PNM | PRG | RFM | ROC | SCM | SIT | TDM | TIM | null;
//# sourceMappingURL=RecordType.d.ts.map