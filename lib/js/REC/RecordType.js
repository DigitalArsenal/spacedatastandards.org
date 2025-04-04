// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
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
export var RecordType;
(function (RecordType) {
    RecordType[RecordType["NONE"] = 0] = "NONE";
    RecordType[RecordType["CAT"] = 1] = "CAT";
    RecordType[RecordType["VCM"] = 2] = "VCM";
    RecordType[RecordType["CDM"] = 3] = "CDM";
    RecordType[RecordType["IDM"] = 4] = "IDM";
    RecordType[RecordType["PLD"] = 5] = "PLD";
    RecordType[RecordType["BOV"] = 6] = "BOV";
    RecordType[RecordType["EPM"] = 7] = "EPM";
    RecordType[RecordType["OSM"] = 8] = "OSM";
    RecordType[RecordType["PRG"] = 9] = "PRG";
    RecordType[RecordType["CTR"] = 10] = "CTR";
    RecordType[RecordType["SIT"] = 11] = "SIT";
    RecordType[RecordType["CRM"] = 12] = "CRM";
    RecordType[RecordType["EOP"] = 13] = "EOP";
    RecordType[RecordType["MET"] = 14] = "MET";
    RecordType[RecordType["OEM"] = 15] = "OEM";
    RecordType[RecordType["HYP"] = 16] = "HYP";
    RecordType[RecordType["TIM"] = 17] = "TIM";
    RecordType[RecordType["ROC"] = 18] = "ROC";
    RecordType[RecordType["EME"] = 19] = "EME";
    RecordType[RecordType["RFM"] = 20] = "RFM";
    RecordType[RecordType["OMM"] = 21] = "OMM";
    RecordType[RecordType["CSM"] = 22] = "CSM";
    RecordType[RecordType["LCC"] = 23] = "LCC";
    RecordType[RecordType["MPE"] = 24] = "MPE";
    RecordType[RecordType["LDM"] = 25] = "LDM";
    RecordType[RecordType["SCM"] = 26] = "SCM";
    RecordType[RecordType["EOO"] = 27] = "EOO";
    RecordType[RecordType["TDM"] = 28] = "TDM";
    RecordType[RecordType["OCM"] = 29] = "OCM";
    RecordType[RecordType["PNM"] = 30] = "PNM";
})(RecordType || (RecordType = {}));
export function unionToRecordType(type, accessor) {
    switch (RecordType[type]) {
        case 'NONE': return null;
        case 'CAT': return accessor(new CAT());
        case 'VCM': return accessor(new VCM());
        case 'CDM': return accessor(new CDM());
        case 'IDM': return accessor(new IDM());
        case 'PLD': return accessor(new PLD());
        case 'BOV': return accessor(new BOV());
        case 'EPM': return accessor(new EPM());
        case 'OSM': return accessor(new OSM());
        case 'PRG': return accessor(new PRG());
        case 'CTR': return accessor(new CTR());
        case 'SIT': return accessor(new SIT());
        case 'CRM': return accessor(new CRM());
        case 'EOP': return accessor(new EOP());
        case 'MET': return accessor(new MET());
        case 'OEM': return accessor(new OEM());
        case 'HYP': return accessor(new HYP());
        case 'TIM': return accessor(new TIM());
        case 'ROC': return accessor(new ROC());
        case 'EME': return accessor(new EME());
        case 'RFM': return accessor(new RFM());
        case 'OMM': return accessor(new OMM());
        case 'CSM': return accessor(new CSM());
        case 'LCC': return accessor(new LCC());
        case 'MPE': return accessor(new MPE());
        case 'LDM': return accessor(new LDM());
        case 'SCM': return accessor(new SCM());
        case 'EOO': return accessor(new EOO());
        case 'TDM': return accessor(new TDM());
        case 'OCM': return accessor(new OCM());
        case 'PNM': return accessor(new PNM());
        default: return null;
    }
}
export function unionListToRecordType(type, accessor, index) {
    switch (RecordType[type]) {
        case 'NONE': return null;
        case 'CAT': return accessor(index, new CAT());
        case 'VCM': return accessor(index, new VCM());
        case 'CDM': return accessor(index, new CDM());
        case 'IDM': return accessor(index, new IDM());
        case 'PLD': return accessor(index, new PLD());
        case 'BOV': return accessor(index, new BOV());
        case 'EPM': return accessor(index, new EPM());
        case 'OSM': return accessor(index, new OSM());
        case 'PRG': return accessor(index, new PRG());
        case 'CTR': return accessor(index, new CTR());
        case 'SIT': return accessor(index, new SIT());
        case 'CRM': return accessor(index, new CRM());
        case 'EOP': return accessor(index, new EOP());
        case 'MET': return accessor(index, new MET());
        case 'OEM': return accessor(index, new OEM());
        case 'HYP': return accessor(index, new HYP());
        case 'TIM': return accessor(index, new TIM());
        case 'ROC': return accessor(index, new ROC());
        case 'EME': return accessor(index, new EME());
        case 'RFM': return accessor(index, new RFM());
        case 'OMM': return accessor(index, new OMM());
        case 'CSM': return accessor(index, new CSM());
        case 'LCC': return accessor(index, new LCC());
        case 'MPE': return accessor(index, new MPE());
        case 'LDM': return accessor(index, new LDM());
        case 'SCM': return accessor(index, new SCM());
        case 'EOO': return accessor(index, new EOO());
        case 'TDM': return accessor(index, new TDM());
        case 'OCM': return accessor(index, new OCM());
        case 'PNM': return accessor(index, new PNM());
        default: return null;
    }
}
