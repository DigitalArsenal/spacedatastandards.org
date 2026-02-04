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
    ENC = 30,
    ENV = 31,
    EOO = 32,
    EOP = 33,
    EPM = 34,
    EWR = 35,
    FCS = 36,
    GDI = 37,
    GEO = 38,
    GNO = 39,
    GRV = 40,
    GVH = 41,
    HEL = 42,
    HYP = 43,
    IDM = 44,
    IRO = 45,
    LCC = 46,
    LDM = 47,
    LKS = 48,
    LND = 49,
    LNE = 50,
    MET = 51,
    MFE = 52,
    MNF = 53,
    MNV = 54,
    MPE = 55,
    MSL = 56,
    MST = 57,
    MTI = 58,
    NAV = 59,
    OBD = 60,
    OBT = 61,
    OCM = 62,
    OEM = 63,
    OMM = 64,
    OOD = 65,
    OOE = 66,
    OOI = 67,
    OOL = 68,
    OON = 69,
    OPM = 70,
    OSM = 71,
    PCF = 72,
    PHY = 73,
    PLD = 74,
    PLG = 75,
    PLK = 76,
    PNM = 77,
    PRG = 78,
    PUR = 79,
    RAF = 80,
    RCF = 81,
    RDM = 82,
    RDO = 83,
    REV = 84,
    RFB = 85,
    RFE = 86,
    RFM = 87,
    RFO = 88,
    ROC = 89,
    SAR = 90,
    SCM = 91,
    SDL = 92,
    SEO = 93,
    SEV = 94,
    SIT = 95,
    SKI = 96,
    SNR = 97,
    SOI = 98,
    SON = 99,
    SPP = 100,
    SPW = 101,
    STF = 102,
    STR = 103,
    STV = 104,
    SWR = 105,
    TCF = 106,
    TDM = 107,
    TIM = 108,
    TKG = 109,
    TME = 110,
    TMF = 111,
    TPN = 112,
    TRK = 113,
    TRN = 114,
    VCM = 115,
    WPN = 116,
    WTH = 117,
    XTC = 118
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null): ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null, index: number): ACL | ACM | ACR | AEM | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | CAT | CDM | CFP | CHN | CLT | CMS | COM | CRD | CRM | CSM | CTR | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GNO | GRV | GVH | HEL | HYP | IDM | IRO | LCC | LDM | LKS | LND | LNE | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOD | OOE | OOI | OOL | OON | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map