# automatically generated by the FlatBuffers compiler, do not modify

# namespace: 

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

# Represents cryptographic key information
class CryptoKey(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = CryptoKey()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsCryptoKey(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)
    @classmethod
    def CryptoKeyBufferHasIdentifier(cls, buf, offset, size_prefixed=False):
        return flatbuffers.util.BufferHasIdentifier(buf, offset, b"\x24\x45\x50\x4D", size_prefixed=size_prefixed)

    # CryptoKey
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Public part of the cryptographic key, in hexidecimal format
    # CryptoKey
    def PUBLIC_KEY(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Extended public key https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
    # CryptoKey
    def XPUB(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Private part of the cryptographic key in hexidecimal format, should be kept secret 
    # CryptoKey
    def PRIVATE_KEY(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Extended private key https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
    # CryptoKey
    def XPRIV(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Address generated from the cryptographic key
    # CryptoKey
    def KEY_ADDRESS(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Type of the address generated from the cryptographic key
    # CryptoKey
    def ADDRESS_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # Type of the cryptographic key (signing or encryption)
    # CryptoKey
    def KEY_TYPE(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def CryptoKeyStart(builder):
    builder.StartObject(7)

def Start(builder):
    CryptoKeyStart(builder)

def CryptoKeyAddPUBLIC_KEY(builder, PUBLIC_KEY):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(PUBLIC_KEY), 0)

def AddPUBLIC_KEY(builder, PUBLIC_KEY):
    CryptoKeyAddPUBLIC_KEY(builder, PUBLIC_KEY)

def CryptoKeyAddXPUB(builder, XPUB):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(XPUB), 0)

def AddXPUB(builder, XPUB):
    CryptoKeyAddXPUB(builder, XPUB)

def CryptoKeyAddPRIVATE_KEY(builder, PRIVATE_KEY):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(PRIVATE_KEY), 0)

def AddPRIVATE_KEY(builder, PRIVATE_KEY):
    CryptoKeyAddPRIVATE_KEY(builder, PRIVATE_KEY)

def CryptoKeyAddXPRIV(builder, XPRIV):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(XPRIV), 0)

def AddXPRIV(builder, XPRIV):
    CryptoKeyAddXPRIV(builder, XPRIV)

def CryptoKeyAddKEY_ADDRESS(builder, KEY_ADDRESS):
    builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(KEY_ADDRESS), 0)

def AddKEY_ADDRESS(builder, KEY_ADDRESS):
    CryptoKeyAddKEY_ADDRESS(builder, KEY_ADDRESS)

def CryptoKeyAddADDRESS_TYPE(builder, ADDRESS_TYPE):
    builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(ADDRESS_TYPE), 0)

def AddADDRESS_TYPE(builder, ADDRESS_TYPE):
    CryptoKeyAddADDRESS_TYPE(builder, ADDRESS_TYPE)

def CryptoKeyAddKEY_TYPE(builder, KEY_TYPE):
    builder.PrependInt8Slot(6, KEY_TYPE, 0)

def AddKEY_TYPE(builder, KEY_TYPE):
    CryptoKeyAddKEY_TYPE(builder, KEY_TYPE)

def CryptoKeyEnd(builder):
    return builder.EndObject()

def End(builder):
    return CryptoKeyEnd(builder)


class CryptoKeyT(object):

    # CryptoKeyT
    def __init__(self):
        self.PUBLIC_KEY = None  # type: str
        self.XPUB = None  # type: str
        self.PRIVATE_KEY = None  # type: str
        self.XPRIV = None  # type: str
        self.KEY_ADDRESS = None  # type: str
        self.ADDRESS_TYPE = None  # type: str
        self.KEY_TYPE = 0  # type: int

    @classmethod
    def InitFromBuf(cls, buf, pos):
        cryptoKey = CryptoKey()
        cryptoKey.Init(buf, pos)
        return cls.InitFromObj(cryptoKey)

    @classmethod
    def InitFromPackedBuf(cls, buf, pos=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, pos)
        return cls.InitFromBuf(buf, pos+n)

    @classmethod
    def InitFromObj(cls, cryptoKey):
        x = CryptoKeyT()
        x._UnPack(cryptoKey)
        return x

    # CryptoKeyT
    def _UnPack(self, cryptoKey):
        if cryptoKey is None:
            return
        self.PUBLIC_KEY = cryptoKey.PUBLIC_KEY()
        self.XPUB = cryptoKey.XPUB()
        self.PRIVATE_KEY = cryptoKey.PRIVATE_KEY()
        self.XPRIV = cryptoKey.XPRIV()
        self.KEY_ADDRESS = cryptoKey.KEY_ADDRESS()
        self.ADDRESS_TYPE = cryptoKey.ADDRESS_TYPE()
        self.KEY_TYPE = cryptoKey.KEY_TYPE()

    # CryptoKeyT
    def Pack(self, builder):
        if self.PUBLIC_KEY is not None:
            PUBLIC_KEY = builder.CreateString(self.PUBLIC_KEY)
        if self.XPUB is not None:
            XPUB = builder.CreateString(self.XPUB)
        if self.PRIVATE_KEY is not None:
            PRIVATE_KEY = builder.CreateString(self.PRIVATE_KEY)
        if self.XPRIV is not None:
            XPRIV = builder.CreateString(self.XPRIV)
        if self.KEY_ADDRESS is not None:
            KEY_ADDRESS = builder.CreateString(self.KEY_ADDRESS)
        if self.ADDRESS_TYPE is not None:
            ADDRESS_TYPE = builder.CreateString(self.ADDRESS_TYPE)
        CryptoKeyStart(builder)
        if self.PUBLIC_KEY is not None:
            CryptoKeyAddPUBLIC_KEY(builder, PUBLIC_KEY)
        if self.XPUB is not None:
            CryptoKeyAddXPUB(builder, XPUB)
        if self.PRIVATE_KEY is not None:
            CryptoKeyAddPRIVATE_KEY(builder, PRIVATE_KEY)
        if self.XPRIV is not None:
            CryptoKeyAddXPRIV(builder, XPRIV)
        if self.KEY_ADDRESS is not None:
            CryptoKeyAddKEY_ADDRESS(builder, KEY_ADDRESS)
        if self.ADDRESS_TYPE is not None:
            CryptoKeyAddADDRESS_TYPE(builder, ADDRESS_TYPE)
        CryptoKeyAddKEY_TYPE(builder, self.KEY_TYPE)
        cryptoKey = CryptoKeyEnd(builder)
        return cryptoKey
