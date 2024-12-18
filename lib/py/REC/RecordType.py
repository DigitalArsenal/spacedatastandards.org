# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

class RecordType(object):
    NONE = 0
    CRM = 1
    OMM = 2
    PRG = 3
    OSM = 4
    EPM = 5
    MPE = 6
    EME = 7
    OEM = 8
    VCM = 9
    CDM = 10
    IDM = 11
    SCM = 12
    PNM = 13
    CSM = 14
    HYP = 15
    LCC = 16
    ROC = 17
    EOP = 18
    CAT = 19
    OCM = 20
    CTR = 21
    TIM = 22
    MET = 23
    PLD = 24
    EOO = 25
    SIT = 26
    RFM = 27
    BOV = 28
    LDM = 29
    TDM = 30

def RecordTypeCreator(unionType, table):
    from flatbuffers.table import Table
    if not isinstance(table, Table):
        return None
    if unionType == RecordType.CRM:
        import CRM
        return CRM.CRMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.OMM:
        import OMM
        return OMM.OMMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.PRG:
        import PRG
        return PRG.PRGT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.OSM:
        import OSM
        return OSM.OSMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.EPM:
        import EPM
        return EPM.EPMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.MPE:
        import MPE
        return MPE.MPET.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.EME:
        import EME
        return EME.EMET.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.OEM:
        import OEM
        return OEM.OEMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.VCM:
        import VCM
        return VCM.VCMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.CDM:
        import CDM
        return CDM.CDMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.IDM:
        import IDM
        return IDM.IDMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.SCM:
        import SCM
        return SCM.SCMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.PNM:
        import PNM
        return PNM.PNMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.CSM:
        import CSM
        return CSM.CSMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.HYP:
        import HYP
        return HYP.HYPT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.LCC:
        import LCC
        return LCC.LCCT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.ROC:
        import ROC
        return ROC.ROCT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.EOP:
        import EOP
        return EOP.EOPT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.CAT:
        import CAT
        return CAT.CATT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.OCM:
        import OCM
        return OCM.OCMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.CTR:
        import CTR
        return CTR.CTRT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.TIM:
        import TIM
        return TIM.TIMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.MET:
        import MET
        return MET.METT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.PLD:
        import PLD
        return PLD.PLDT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.EOO:
        import EOO
        return EOO.EOOT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.SIT:
        import SIT
        return SIT.SITT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.RFM:
        import RFM
        return RFM.RFMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.BOV:
        import BOV
        return BOV.BOVT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.LDM:
        import LDM
        return LDM.LDMT.InitFromBuf(table.Bytes, table.Pos)
    if unionType == RecordType.TDM:
        import TDM
        return TDM.TDMT.InitFromBuf(table.Bytes, table.Pos)
    return None
