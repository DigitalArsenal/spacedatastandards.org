// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package OMM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type TIM struct {
	_tab flatbuffers.Table
}

func GetRootAsTIM(buf []byte, offset flatbuffers.UOffsetT) *TIM {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &TIM{}
	x.Init(buf, n+offset)
	return x
}

func GetSizePrefixedRootAsTIM(buf []byte, offset flatbuffers.UOffsetT) *TIM {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &TIM{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func (rcv *TIM) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *TIM) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *TIM) TIME_SYSTEM() timeSystem {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return timeSystem(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *TIM) MutateTIME_SYSTEM(n timeSystem) bool {
	return rcv._tab.MutateInt8Slot(4, int8(n))
}

func TIMStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func TIMAddTIME_SYSTEM(builder *flatbuffers.Builder, TIME_SYSTEM timeSystem) {
	builder.PrependInt8Slot(0, int8(TIME_SYSTEM), 0)
}
func TIMEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}