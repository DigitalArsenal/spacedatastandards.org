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
import { COT } from './COT.js';
import { CRD } from './CRD.js';
import { CRM } from './CRM.js';
import { CSM } from './CSM.js';
import { CTR } from './CTR.js';
import { CZM } from './CZM.js';
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
import { GJN } from './GJN.js';
import { GNO } from './GNO.js';
import { GPX } from './GPX.js';
import { GRV } from './GRV.js';
import { GVH } from './GVH.js';
import { HEL } from './HEL.js';
import { HYP } from './HYP.js';
import { IDM } from './IDM.js';
import { ION } from './ION.js';
import { IRO } from './IRO.js';
import { KMF } from './KMF.js';
import { KML } from './KML.js';
import { KRF } from './KRF.js';
import { LCC } from './LCC.js';
import { LCF } from './LCF.js';
import { LCH } from './LCH.js';
import { LDM } from './LDM.js';
import { LGR } from './LGR.js';
import { LKS } from './LKS.js';
import { LMR } from './LMR.js';
import { LND } from './LND.js';
import { LNE } from './LNE.js';
import { LPF } from './LPF.js';
import { LWK } from './LWK.js';
import { MBL } from './MBL.js';
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
import { PPE } from './PPE.js';
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
    COT = 24,
    CRD = 25,
    CRM = 26,
    CSM = 27,
    CTR = 28,
    CZM = 29,
    DFH = 30,
    DMG = 31,
    DOA = 32,
    EME = 33,
    ENC = 34,
    ENV = 35,
    EOO = 36,
    EOP = 37,
    EPM = 38,
    EWR = 39,
    FCS = 40,
    GDI = 41,
    GEO = 42,
    GJN = 43,
    GNO = 44,
    GPX = 45,
    GRV = 46,
    GVH = 47,
    HEL = 48,
    HYP = 49,
    IDM = 50,
    ION = 51,
    IRO = 52,
    KMF = 53,
    KML = 54,
    KRF = 55,
    LCC = 56,
    LCF = 57,
    LCH = 58,
    LDM = 59,
    LGR = 60,
    LKS = 61,
    LMR = 62,
    LND = 63,
    LNE = 64,
    LPF = 65,
    LWK = 66,
    MBL = 67,
    MET = 68,
    MFE = 69,
    MNF = 70,
    MNV = 71,
    MPE = 72,
    MSL = 73,
    MST = 74,
    MTI = 75,
    NAV = 76,
    OBD = 77,
    OBT = 78,
    OCM = 79,
    OEM = 80,
    OMM = 81,
    OOA = 82,
    OOB = 83,
    OOD = 84,
    OOE = 85,
    OOI = 86,
    OOL = 87,
    OON = 88,
    OOS = 89,
    OOT = 90,
    OPM = 91,
    OSM = 92,
    PCF = 93,
    PHY = 94,
    PLD = 95,
    PLG = 96,
    PLK = 97,
    PNM = 98,
    PPE = 99,
    PRG = 100,
    PUR = 101,
    RAF = 102,
    RCF = 103,
    RDM = 104,
    RDO = 105,
    REV = 106,
    RFB = 107,
    RFE = 108,
    RFM = 109,
    RFO = 110,
    ROC = 111,
    SAR = 112,
    SCM = 113,
    SDL = 114,
    SEN = 115,
    SEO = 116,
    SEV = 117,
    SIT = 118,
    SKI = 119,
    SNR = 120,
    SOI = 121,
    SON = 122,
    SPP = 123,
    SPW = 124,
    STF = 125,
    STR = 126,
    STV = 127,
    SWR = 128,
    TCF = 129,
    TDM = 130,
    TIM = 131,
    TKG = 132,
    TME = 133,
    TMF = 134,
    TPN = 135,
    TRK = 136,
    TRN = 137,
    VCM = 138,
    WPN = 139,
    WTH = 140,
    XTC = 141
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null, index: number): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KMF | KML | KRF | LCC | LCF | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MBL | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map