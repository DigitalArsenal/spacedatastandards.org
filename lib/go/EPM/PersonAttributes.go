// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package PersonAttributes

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Specific attributes for a Person
type PersonAttributes struct {
	_tab flatbuffers.Table
}

func GetRootAsPersonAttributes(buf []byte, offset flatbuffers.UOffsetT) *PersonAttributes {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &PersonAttributes{}
	x.Init(buf, n+offset)
	return x
}

func GetSizePrefixedRootAsPersonAttributes(buf []byte, offset flatbuffers.UOffsetT) *PersonAttributes {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &PersonAttributes{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func (rcv *PersonAttributes) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *PersonAttributes) Table() flatbuffers.Table {
	return rcv._tab
}

/// Family name or surname of the person
func (rcv *PersonAttributes) FAMILY_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Family name or surname of the person
/// Given name or first name of the person
func (rcv *PersonAttributes) GIVEN_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Given name or first name of the person
/// Additional name or middle name of the person
func (rcv *PersonAttributes) ADDITIONAL_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Additional name or middle name of the person
/// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
func (rcv *PersonAttributes) HONORIFIC_PREFIX() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
/// Honorific suffix following the person's name (e.g., Jr., Sr.)
func (rcv *PersonAttributes) HONORIFIC_SUFFIX() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Honorific suffix following the person's name (e.g., Jr., Sr.)
/// Job title of the person
func (rcv *PersonAttributes) JOB_TITLE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Job title of the person
/// Occupation of the person
func (rcv *PersonAttributes) OCCUPATION() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Occupation of the person
func PersonAttributesStart(builder *flatbuffers.Builder) {
	builder.StartObject(7)
}
func PersonAttributesAddFAMILY_NAME(builder *flatbuffers.Builder, FAMILY_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(FAMILY_NAME), 0)
}
func PersonAttributesAddGIVEN_NAME(builder *flatbuffers.Builder, GIVEN_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(GIVEN_NAME), 0)
}
func PersonAttributesAddADDITIONAL_NAME(builder *flatbuffers.Builder, ADDITIONAL_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(ADDITIONAL_NAME), 0)
}
func PersonAttributesAddHONORIFIC_PREFIX(builder *flatbuffers.Builder, HONORIFIC_PREFIX flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(HONORIFIC_PREFIX), 0)
}
func PersonAttributesAddHONORIFIC_SUFFIX(builder *flatbuffers.Builder, HONORIFIC_SUFFIX flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(HONORIFIC_SUFFIX), 0)
}
func PersonAttributesAddJOB_TITLE(builder *flatbuffers.Builder, JOB_TITLE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(JOB_TITLE), 0)
}
func PersonAttributesAddOCCUPATION(builder *flatbuffers.Builder, OCCUPATION flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(OCCUPATION), 0)
}
func PersonAttributesEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}