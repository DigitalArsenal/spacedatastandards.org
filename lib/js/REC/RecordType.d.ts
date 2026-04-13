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
import { KML } from './KML.js';
import { LCC } from './LCC.js';
import { LCH } from './LCH.js';
import { LDM } from './LDM.js';
import { LGR } from './LGR.js';
import { LKS } from './LKS.js';
import { LMR } from './LMR.js';
import { LND } from './LND.js';
import { LNE } from './LNE.js';
import { LPF } from './LPF.js';
import { LWK } from './LWK.js';
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
    KML = 53,
    LCC = 54,
    LCH = 55,
    LDM = 56,
    LGR = 57,
    LKS = 58,
    LMR = 59,
    LND = 60,
    LNE = 61,
    LPF = 62,
    LWK = 63,
    MET = 64,
    MFE = 65,
    MNF = 66,
    MNV = 67,
    MPE = 68,
    MSL = 69,
    MST = 70,
    MTI = 71,
    NAV = 72,
    OBD = 73,
    OBT = 74,
    OCM = 75,
    OEM = 76,
    OMM = 77,
    OOA = 78,
    OOB = 79,
    OOD = 80,
    OOE = 81,
    OOI = 82,
    OOL = 83,
    OON = 84,
    OOS = 85,
    OOT = 86,
    OPM = 87,
    OSM = 88,
    PCF = 89,
    PHY = 90,
    PLD = 91,
    PLG = 92,
    PLK = 93,
    PNM = 94,
    PPE = 95,
    PRG = 96,
    PUR = 97,
    RAF = 98,
    RCF = 99,
    RDM = 100,
    RDO = 101,
    REV = 102,
    RFB = 103,
    RFE = 104,
    RFM = 105,
    RFO = 106,
    ROC = 107,
    SAR = 108,
    SCM = 109,
    SDL = 110,
    SEN = 111,
    SEO = 112,
    SEV = 113,
    SIT = 114,
    SKI = 115,
    SNR = 116,
    SOI = 117,
    SON = 118,
    SPP = 119,
    SPW = 120,
    STF = 121,
    STR = 122,
    STV = 123,
    SWR = 124,
    TCF = 125,
    TDM = 126,
    TIM = 127,
    TKG = 128,
    TME = 129,
    TMF = 130,
    TPN = 131,
    TRK = 132,
    TRN = 133,
    VCM = 134,
    WPN = 135,
    WTH = 136,
    XTC = 137
}
export declare function unionToRecordType(type: RecordType, accessor: (obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
export declare function unionListToRecordType(type: RecordType, accessor: (index: number, obj: ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC) => ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null, index: number): ACL | ACM | ACR | AEM | ANI | AOF | APM | ARM | AST | ATD | ATM | BAL | BEM | BMC | BOV | BUS | CAT | CDM | CFP | CHN | CLT | CMS | COM | COT | CRD | CRM | CSM | CTR | CZM | DFH | DMG | DOA | EME | ENC | ENV | EOO | EOP | EPM | EWR | FCS | GDI | GEO | GJN | GNO | GPX | GRV | GVH | HEL | HYP | IDM | ION | IRO | KML | LCC | LCH | LDM | LGR | LKS | LMR | LND | LNE | LPF | LWK | MET | MFE | MNF | MNV | MPE | MSL | MST | MTI | NAV | OBD | OBT | OCM | OEM | OMM | OOA | OOB | OOD | OOE | OOI | OOL | OON | OOS | OOT | OPM | OSM | PCF | PHY | PLD | PLG | PLK | PNM | PPE | PRG | PUR | RAF | RCF | RDM | RDO | REV | RFB | RFE | RFM | RFO | ROC | SAR | SCM | SDL | SEN | SEO | SEV | SIT | SKI | SNR | SOI | SON | SPP | SPW | STF | STR | STV | SWR | TCF | TDM | TIM | TKG | TME | TMF | TPN | TRK | TRN | VCM | WPN | WTH | XTC | null;
//# sourceMappingURL=RecordType.d.ts.map