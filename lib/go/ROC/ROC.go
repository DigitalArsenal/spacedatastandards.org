// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package ROC

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Rocket Configuration
type ROC struct {
	_tab flatbuffers.Table
}

const ROCIdentifier = "$ROC"

func GetRootAsROC(buf []byte, offset flatbuffers.UOffsetT) *ROC {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &ROC{}
	x.Init(buf, n+offset)
	return x
}

func FinishROCBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(ROCIdentifier)
	builder.FinishWithFileIdentifier(offset, identifierBytes)
}

func ROCBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.BufferHasIdentifier(buf, ROCIdentifier)
}

func GetSizePrefixedRootAsROC(buf []byte, offset flatbuffers.UOffsetT) *ROC {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &ROC{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedROCBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(ROCIdentifier)
	builder.FinishSizePrefixedWithFileIdentifier(offset, identifierBytes)
}

func SizePrefixedROCBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.SizePrefixedBufferHasIdentifier(buf, ROCIdentifier)
}

func (rcv *ROC) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *ROC) Table() flatbuffers.Table {
	return rcv._tab
}

/// Rocket Name
func (rcv *ROC) NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Rocket Name
/// Rocket Family
func (rcv *ROC) FAMILY() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Rocket Family
/// Rocket Variant
func (rcv *ROC) VARIANT() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Rocket Variant
/// Stages in the Rocket
func (rcv *ROC) STAGES(obj *STAGE, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *ROC) STAGESLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Stages in the Rocket
/// Sustainers in the Rocket
func (rcv *ROC) SUSTAINERS(obj *SUSTAINER, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *ROC) SUSTAINERSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Sustainers in the Rocket
func ROCStart(builder *flatbuffers.Builder) {
	builder.StartObject(5)
}
func ROCAddNAME(builder *flatbuffers.Builder, NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(NAME), 0)
}
func ROCAddFAMILY(builder *flatbuffers.Builder, FAMILY flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(FAMILY), 0)
}
func ROCAddVARIANT(builder *flatbuffers.Builder, VARIANT flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(VARIANT), 0)
}
func ROCAddSTAGES(builder *flatbuffers.Builder, STAGES flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(STAGES), 0)
}
func ROCStartSTAGESVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func ROCAddSUSTAINERS(builder *flatbuffers.Builder, SUSTAINERS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(SUSTAINERS), 0)
}
func ROCStartSUSTAINERSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func ROCEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
