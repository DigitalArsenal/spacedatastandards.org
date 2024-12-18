// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package OCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type UserDefinedParameters struct {
	_tab flatbuffers.Table
}

func GetRootAsUserDefinedParameters(buf []byte, offset flatbuffers.UOffsetT) *UserDefinedParameters {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &UserDefinedParameters{}
	x.Init(buf, n+offset)
	return x
}

func FinishUserDefinedParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsUserDefinedParameters(buf []byte, offset flatbuffers.UOffsetT) *UserDefinedParameters {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &UserDefinedParameters{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedUserDefinedParametersBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *UserDefinedParameters) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *UserDefinedParameters) Table() flatbuffers.Table {
	return rcv._tab
}

/// Name of the user-defined parameter.
func (rcv *UserDefinedParameters) PARAM_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Name of the user-defined parameter.
/// Value of the user-defined parameter.
func (rcv *UserDefinedParameters) PARAM_VALUE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Value of the user-defined parameter.
func UserDefinedParametersStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func UserDefinedParametersAddPARAM_NAME(builder *flatbuffers.Builder, PARAM_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(PARAM_NAME), 0)
}
func UserDefinedParametersAddPARAM_VALUE(builder *flatbuffers.Builder, PARAM_VALUE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(PARAM_VALUE), 0)
}
func UserDefinedParametersEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
