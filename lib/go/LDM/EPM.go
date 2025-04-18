// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package LDM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Entity Profile Message
type EPM struct {
	_tab flatbuffers.Table
}

const EPMIdentifier = "$EPM"

func GetRootAsEPM(buf []byte, offset flatbuffers.UOffsetT) *EPM {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &EPM{}
	x.Init(buf, n+offset)
	return x
}

func FinishEPMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(EPMIdentifier)
	builder.FinishWithFileIdentifier(offset, identifierBytes)
}

func EPMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.BufferHasIdentifier(buf, EPMIdentifier)
}

func GetSizePrefixedRootAsEPM(buf []byte, offset flatbuffers.UOffsetT) *EPM {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &EPM{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedEPMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(EPMIdentifier)
	builder.FinishSizePrefixedWithFileIdentifier(offset, identifierBytes)
}

func SizePrefixedEPMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.SizePrefixedBufferHasIdentifier(buf, EPMIdentifier)
}

func (rcv *EPM) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *EPM) Table() flatbuffers.Table {
	return rcv._tab
}

/// Distinguished Name of the entity
func (rcv *EPM) DN() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Distinguished Name of the entity
/// Common name of the entity (person or organization)
func (rcv *EPM) LEGAL_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Common name of the entity (person or organization)
/// Family name or surname of the person
func (rcv *EPM) FAMILY_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Family name or surname of the person
/// Given name or first name of the person
func (rcv *EPM) GIVEN_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Given name or first name of the person
/// Additional name or middle name of the person
func (rcv *EPM) ADDITIONAL_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Additional name or middle name of the person
/// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
func (rcv *EPM) HONORIFIC_PREFIX() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
/// Honorific suffix following the person's name (e.g., Jr., Sr.)
func (rcv *EPM) HONORIFIC_SUFFIX() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Honorific suffix following the person's name (e.g., Jr., Sr.)
/// Job title of the person
func (rcv *EPM) JOB_TITLE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Job title of the person
/// Occupation of the person
func (rcv *EPM) OCCUPATION() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Occupation of the person
/// Physical Address
func (rcv *EPM) ADDRESS(obj *Address) *Address {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(Address)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Physical Address
/// Alternate names for the entity
func (rcv *EPM) ALTERNATE_NAMES(j int) []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.ByteVector(a + flatbuffers.UOffsetT(j*4))
	}
	return nil
}

func (rcv *EPM) ALTERNATE_NAMESLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Alternate names for the entity
/// Email address of the entity
func (rcv *EPM) EMAIL() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(26))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Email address of the entity
/// Telephone number of the entity
func (rcv *EPM) TELEPHONE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(28))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Telephone number of the entity
/// Cryptographic keys associated with the entity
func (rcv *EPM) KEYS(obj *CryptoKey, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(30))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *EPM) KEYSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(30))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Cryptographic keys associated with the entity
/// Multiformat addresses associated with the entity
func (rcv *EPM) MULTIFORMAT_ADDRESS(j int) []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(32))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.ByteVector(a + flatbuffers.UOffsetT(j*4))
	}
	return nil
}

func (rcv *EPM) MULTIFORMAT_ADDRESSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(32))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Multiformat addresses associated with the entity
func EPMStart(builder *flatbuffers.Builder) {
	builder.StartObject(15)
}
func EPMAddDN(builder *flatbuffers.Builder, DN flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(DN), 0)
}
func EPMAddLEGAL_NAME(builder *flatbuffers.Builder, LEGAL_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(LEGAL_NAME), 0)
}
func EPMAddFAMILY_NAME(builder *flatbuffers.Builder, FAMILY_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(FAMILY_NAME), 0)
}
func EPMAddGIVEN_NAME(builder *flatbuffers.Builder, GIVEN_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(GIVEN_NAME), 0)
}
func EPMAddADDITIONAL_NAME(builder *flatbuffers.Builder, ADDITIONAL_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(ADDITIONAL_NAME), 0)
}
func EPMAddHONORIFIC_PREFIX(builder *flatbuffers.Builder, HONORIFIC_PREFIX flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(HONORIFIC_PREFIX), 0)
}
func EPMAddHONORIFIC_SUFFIX(builder *flatbuffers.Builder, HONORIFIC_SUFFIX flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(HONORIFIC_SUFFIX), 0)
}
func EPMAddJOB_TITLE(builder *flatbuffers.Builder, JOB_TITLE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(JOB_TITLE), 0)
}
func EPMAddOCCUPATION(builder *flatbuffers.Builder, OCCUPATION flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(8, flatbuffers.UOffsetT(OCCUPATION), 0)
}
func EPMAddADDRESS(builder *flatbuffers.Builder, ADDRESS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(9, flatbuffers.UOffsetT(ADDRESS), 0)
}
func EPMAddALTERNATE_NAMES(builder *flatbuffers.Builder, ALTERNATE_NAMES flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(10, flatbuffers.UOffsetT(ALTERNATE_NAMES), 0)
}
func EPMStartALTERNATE_NAMESVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func EPMAddEMAIL(builder *flatbuffers.Builder, EMAIL flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(11, flatbuffers.UOffsetT(EMAIL), 0)
}
func EPMAddTELEPHONE(builder *flatbuffers.Builder, TELEPHONE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(12, flatbuffers.UOffsetT(TELEPHONE), 0)
}
func EPMAddKEYS(builder *flatbuffers.Builder, KEYS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(13, flatbuffers.UOffsetT(KEYS), 0)
}
func EPMStartKEYSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func EPMAddMULTIFORMAT_ADDRESS(builder *flatbuffers.Builder, MULTIFORMAT_ADDRESS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(14, flatbuffers.UOffsetT(MULTIFORMAT_ADDRESS), 0)
}
func EPMStartMULTIFORMAT_ADDRESSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func EPMEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
