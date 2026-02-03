import { ACL } from './ACL.js';
import { ACM } from './ACM.js';
import { ACR } from './ACR.js';
import { AEM } from './AEM.js';
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
import { OOD } from './OOD.js';
import { OOE } from './OOE.js';
import { OOI } from './OOI.js';
import { OOL } from './OOL.js';
import { OON } from './OON.js';
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
    AOF = 5,
    APM = 6,
    ARM = 7,
    AST = 8,
    ATD = 9,
    ATM = 10,
    BAL = 11,
    BEM = 12,
    BMC = 13,
    BOV = 14,
    CAT = 15,
    CDM = 16,
    CFP = 17,
    CHN = 18,
    CLT = 19,
    CMS = 20,
    COM = 21,
    CRD = 22,
    CRM = 23,
    CSM = 24,
    CTR = 25,
    DFH = 26,
    DMG = 27,
    DOA = 28,
    EME = 29,
    ENV = 30,
    EOO = 31,
    EOP = 32,
    EPM = 33,
    EWR = 34,
    FCS = 35,
    GDI = 36,
    GEO = 37,
    GNO = 38,
    GRV = 39,
    GVH = 40,
    HEL = 41,
    HYP = 42,
    IDM = 43,
    IRO = 44,
    LCC = 45,
    LDM = 46,
    LKS = 47,
    LND = 48,
    LNE = 49,
    MET = 50,
    MFE = 51,
    MNF = 52,
    MNV = 53,
    MPE = 54,
    MSL = 55,
    MST = 56,
    MTI = 57,
    NAV = 58,
    OBD = 59,
    OBT = 60,
    OCM = 61,
    OEM = 62,
    OMM = 63,
    OOD = 64,
    OOE = 65,
    OOI = 66,
    OOL = 67,
    OON = 68,
    OPM = 69,
    OSM = 70,
    PCF = 71,
    PHY = 72,
    PLD = 73,
    PLG = 74,
    PLK = 75,
    PNM = 76,
    PRG = 77,
    PUR = 78,
    RAF = 79,
    RCF = 80,
    RDM = 81,
    RDO = 82,
    REV = 83,
    RFB = 84,
    RFE = 85,
    RFM = 86,
    RFO = 87,
    ROC = 88,
    SAR = 89,
    SCM = 90,
    SDL = 91,
    SEO = 92,
    SEV = 93,
    SIT = 94,
    SKI = 95,
    SNR = 96,
    SOI = 97,
    SON = 98,
    SPP = 99,
    SPW = 100,
    STF = 101,
    STR = 102,
    STV = 103,
    SWR = 104,
    TCF = 105,
    TDM = 106,
    TIM = 107,
    TKG = 108,
    TME = 109,
    TMF = 110,
    TPN = 111,
    TRK = 112,
    TRN = 113,
    VCM = 114,
    WPN = 115,
    WTH = 116,
    XTC = 117
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null): ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null, index: number): ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map