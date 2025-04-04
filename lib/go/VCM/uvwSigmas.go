// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package VCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// UVW Sigmas (Covariance matrix in UVW frame)
type uvwSigmas struct {
	_tab flatbuffers.Table
}

func GetRootAsuvwSigmas(buf []byte, offset flatbuffers.UOffsetT) *uvwSigmas {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &uvwSigmas{}
	x.Init(buf, n+offset)
	return x
}

func FinishuvwSigmasBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsuvwSigmas(buf []byte, offset flatbuffers.UOffsetT) *uvwSigmas {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &uvwSigmas{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixeduvwSigmasBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *uvwSigmas) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *uvwSigmas) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *uvwSigmas) U_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateU_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(4, n)
}

func (rcv *uvwSigmas) V_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateV_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(6, n)
}

func (rcv *uvwSigmas) W_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateW_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(8, n)
}

func (rcv *uvwSigmas) UD_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateUD_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(10, n)
}

func (rcv *uvwSigmas) VD_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateVD_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(12, n)
}

func (rcv *uvwSigmas) WD_SIGMA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *uvwSigmas) MutateWD_SIGMA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(14, n)
}

func uvwSigmasStart(builder *flatbuffers.Builder) {
	builder.StartObject(6)
}
func uvwSigmasAddU_SIGMA(builder *flatbuffers.Builder, U_SIGMA float64) {
	builder.PrependFloat64Slot(0, U_SIGMA, 0.0)
}
func uvwSigmasAddV_SIGMA(builder *flatbuffers.Builder, V_SIGMA float64) {
	builder.PrependFloat64Slot(1, V_SIGMA, 0.0)
}
func uvwSigmasAddW_SIGMA(builder *flatbuffers.Builder, W_SIGMA float64) {
	builder.PrependFloat64Slot(2, W_SIGMA, 0.0)
}
func uvwSigmasAddUD_SIGMA(builder *flatbuffers.Builder, UD_SIGMA float64) {
	builder.PrependFloat64Slot(3, UD_SIGMA, 0.0)
}
func uvwSigmasAddVD_SIGMA(builder *flatbuffers.Builder, VD_SIGMA float64) {
	builder.PrependFloat64Slot(4, VD_SIGMA, 0.0)
}
func uvwSigmasAddWD_SIGMA(builder *flatbuffers.Builder, WD_SIGMA float64) {
	builder.PrependFloat64Slot(5, WD_SIGMA, 0.0)
}
func uvwSigmasEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
