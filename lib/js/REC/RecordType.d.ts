import { ACL } from './ACL.js';
import { ACM } from './ACM.js';
import { ACR } from './ACR.js';
import { AEM } from './AEM.js';
import { ANI } from './ANI.js';
import { AOF } from './AOF.js';
import { APM } from './APM.js';
import { ARM } from './ARM.js';
import { AST } from './AST.js';
import { ATD } from './ATD.js';
import { ATM } from './ATM.js';
import { BAL } from './BAL.js';
import { BEM } from './BEM.js';
import { BMC } from './BMC.js';
import { BOV } from './BOV.js';
import { BUS } from './BUS.js';
import { CAT } from './CAT.js';
import { CDM } from './CDM.js';
import { CFP } from './CFP.js';
import { CHN } from './CHN.js';
import { CLT } from './CLT.js';
import { CMS } from './CMS.js';
import { COM } from './COM.js';
import { CRD } from './CRD.js';
import { CRM } from './CRM.js';
import { CSM } from './CSM.js';
import { CTR } from './CTR.js';
import { DFH } from './DFH.js';
import { DMG } from './DMG.js';
import { DOA } from './DOA.js';
import { EME } from './EME.js';
import { ENC } from './ENC.js';
import { ENV } from './ENV.js';
import { EOO } from './EOO.js';
import { EOP } from './EOP.js';
import { EPM } from './EPM.js';
import { EWR } from './EWR.js';
import { FCS } from './FCS.js';
import { GDI } from './GDI.js';
import { GEO } from './GEO.js';
import { GNO } from './GNO.js';
import { GRV } from './GRV.js';
import { GVH } from './GVH.js';
import { HEL } from './HEL.js';
import { HYP } from './HYP.js';
import { IDM } from './IDM.js';
import { ION } from './ION.js';
import { IRO } from './IRO.js';
import { LCC } from './LCC.js';
import { LDM } from './LDM.js';
import { LKS } from './LKS.js';
import { LND } from './LND.js';
import { LNE } from './LNE.js';
import { MET } from './MET.js';
import { MFE } from './MFE.js';
import { MNF } from './MNF.js';
import { MNV } from './MNV.js';
import { MPE } from './MPE.js';
import { MSL } from './MSL.js';
import { MST } from './MST.js';
import { MTI } from './MTI.js';
import { NAV } from './NAV.js';
import { OBD } from './OBD.js';
import { OBT } from './OBT.js';
import { OCM } from './OCM.js';
import { OEM } from './OEM.js';
import { OMM } from './OMM.js';
import { OOA } from './OOA.js';
import { OOB } from './OOB.js';
import { OOD } from './OOD.js';
import { OOE } from './OOE.js';
import { OOI } from './OOI.js';
import { OOL } from './OOL.js';
import { OON } from './OON.js';
import { OOS } from './OOS.js';
import { OOT } from './OOT.js';
import { OPM } from './OPM.js';
import { OSM } from './OSM.js';
import { PCF } from './PCF.js';
import { PHY } from './PHY.js';
import { PLD } from './PLD.js';
import { PLG } from './PLG.js';
import { PLK } from './PLK.js';
import { PNM } from './PNM.js';
import { PRG } from './PRG.js';
import { PUR } from './PUR.js';
import { RAF } from './RAF.js';
import { RCF } from './RCF.js';
import { RDM } from './RDM.js';
import { RDO } from './RDO.js';
import { REV } from './REV.js';
import { RFB } from './RFB.js';
import { RFE } from './RFE.js';
import { RFM } from './RFM.js';
import { RFO } from './RFO.js';
import { ROC } from './ROC.js';
import { SAR } from './SAR.js';
import { SCM } from './SCM.js';
import { SDL } from './SDL.js';
import { SEN } from './SEN.js';
import { SEO } from './SEO.js';
import { SEV } from './SEV.js';
import { SIT } from './SIT.js';
import { SKI } from './SKI.js';
import { SNR } from './SNR.js';
import { SOI } from './SOI.js';
import { SON } from './SON.js';
import { SPP } from './SPP.js';
import { SPW } from './SPW.js';
import { STF } from './STF.js';
import { STR } from './STR.js';
import { STV } from './STV.js';
import { SWR } from './SWR.js';
import { TCF } from './TCF.js';
import { TDM } from './TDM.js';
import { TIM } from './TIM.js';
import { TKG } from './TKG.js';
import { TME } from './TME.js';
import { TMF } from './TMF.js';
import { TPN } from './TPN.js';
import { TRK } from './TRK.js';
import { TRN } from './TRN.js';
import { VCM } from './VCM.js';
import { WPN } from './WPN.js';
import { WTH } from './WTH.js';
import { XTC } from './XTC.js';
export declare enum RecordType {
    NONE = 0,
    ACL = 1,
    ACM = 2,
    ACR = 3,
    AEM = 4,
    ANI = 5,
    AOF = 6,
    APM = 7,
    ARM = 8,
    AST = 9,
    ATD = 10,
    ATM = 11,
    BAL = 12,
    BEM = 13,
    BMC = 14,
    BOV = 15,
    BUS = 16,
    CAT = 17,
    CDM = 18,
    CFP = 19,
    CHN = 20,
    CLT = 21,
    CMS = 22,
    COM = 23,
    CRD = 24,
    CRM = 25,
    CSM = 26,
    CTR = 27,
    DFH = 28,
    DMG = 29,
    DOA = 30,
    EME = 31,
    ENC = 32,
    ENV = 33,
    EOO = 34,
    EOP = 35,
    EPM = 36,
    EWR = 37,
    FCS = 38,
    GDI = 39,
    GEO = 40,
    GNO = 41,
    GRV = 42,
    GVH = 43,
    HEL = 44,
    HYP = 45,
    IDM = 46,
    ION = 47,
    IRO = 48,
    LCC = 49,
    LDM = 50,
    LKS = 51,
    LND = 52,
    LNE = 53,
    MET = 54,
    MFE = 55,
    MNF = 56,
    MNV = 57,
    MPE = 58,
    MSL = 59,
    MST = 60,
    MTI = 61,
    NAV = 62,
    OBD = 63,
    OBT = 64,
    OCM = 65,
    OEM = 66,
    OMM = 67,
    OOA = 68,
    OOB = 69,
    OOD = 70,
    OOE = 71,
    OOI = 72,
    OOL = 73,
    OON = 74,
    OOS = 75,
    OOT = 76,
    OPM = 77,
    OSM = 78,
    PCF = 79,
    PHY = 80,
    PLD = 81,
    PLG = 82,
    PLK = 83,
    PNM = 84,
    PRG = 85,
    PUR = 86,
    RAF = 87,
    RCF = 88,
    RDM = 89,
    RDO = 90,
    REV = 91,
    RFB = 92,
    RFE = 93,
    RFM = 94,
    RFO = 95,
    ROC = 96,
    SAR = 97,
    SCM = 98,
    SDL = 99,
    SEN = 100,
    SEO = 101,
    SEV = 102,
    SIT = 103,
    SKI = 104,
    SNR = 105,
    SOI = 106,
    SON = 107,
    SPP = 108,
    SPW = 109,
    STF = 110,
    STR = 111,
    STV = 112,
    SWR = 113,
    TCF = 114,
    TDM = 115,
    TIM = 116,
    TKG = 117,
    TME = 118,
    TMF = 119,
    TPN = 120,
    TRK = 121,
    TRN = 122,
    VCM = 123,
    WPN = 124,
    WTH = 125,
    XTC = 126
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null, index: number): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | ION | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map