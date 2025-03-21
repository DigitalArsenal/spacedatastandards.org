// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package LDM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Stage Details
type STAGE struct {
	_tab flatbuffers.Table
}

func GetRootAsSTAGE(buf []byte, offset flatbuffers.UOffsetT) *STAGE {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &STAGE{}
	x.Init(buf, n+offset)
	return x
}

func FinishSTAGEBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsSTAGE(buf []byte, offset flatbuffers.UOffsetT) *STAGE {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &STAGE{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedSTAGEBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *STAGE) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *STAGE) Table() flatbuffers.Table {
	return rcv._tab
}

/// Stage Number
func (rcv *STAGE) STAGE_NUMBER() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

/// Stage Number
func (rcv *STAGE) MutateSTAGE_NUMBER(n int32) bool {
	return rcv._tab.MutateInt32Slot(4, n)
}

/// Engines Used in This Stage
func (rcv *STAGE) ENGINES(obj *ENGINE, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *STAGE) ENGINESLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Engines Used in This Stage
/// Fuel Type Used in This Stage
func (rcv *STAGE) FUEL_TYPE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Fuel Type Used in This Stage
/// Thrust Produced by This Stage (in Newtons)
func (rcv *STAGE) THRUST() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Thrust Produced by This Stage (in Newtons)
func (rcv *STAGE) MutateTHRUST(n float64) bool {
	return rcv._tab.MutateFloat64Slot(10, n)
}

/// Duration of the Burn (in Seconds)
func (rcv *STAGE) BURN_DURATION() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Duration of the Burn (in Seconds)
func (rcv *STAGE) MutateBURN_DURATION(n float64) bool {
	return rcv._tab.MutateFloat64Slot(12, n)
}

func STAGEStart(builder *flatbuffers.Builder) {
	builder.StartObject(5)
}
func STAGEAddSTAGE_NUMBER(builder *flatbuffers.Builder, STAGE_NUMBER int32) {
	builder.PrependInt32Slot(0, STAGE_NUMBER, 0)
}
func STAGEAddENGINES(builder *flatbuffers.Builder, ENGINES flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(ENGINES), 0)
}
func STAGEStartENGINESVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func STAGEAddFUEL_TYPE(builder *flatbuffers.Builder, FUEL_TYPE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(FUEL_TYPE), 0)
}
func STAGEAddTHRUST(builder *flatbuffers.Builder, THRUST float64) {
	builder.PrependFloat64Slot(3, THRUST, 0.0)
}
func STAGEAddBURN_DURATION(builder *flatbuffers.Builder, BURN_DURATION float64) {
	builder.PrependFloat64Slot(4, BURN_DURATION, 0.0)
}
func STAGEEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
