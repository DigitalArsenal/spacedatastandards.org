// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package VCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// VCM Covariance Matrix Line
type VCMCovarianceMatrixLine struct {
	_tab flatbuffers.Table
}

func GetRootAsVCMCovarianceMatrixLine(buf []byte, offset flatbuffers.UOffsetT) *VCMCovarianceMatrixLine {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &VCMCovarianceMatrixLine{}
	x.Init(buf, n+offset)
	return x
}

func FinishVCMCovarianceMatrixLineBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsVCMCovarianceMatrixLine(buf []byte, offset flatbuffers.UOffsetT) *VCMCovarianceMatrixLine {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &VCMCovarianceMatrixLine{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedVCMCovarianceMatrixLineBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *VCMCovarianceMatrixLine) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *VCMCovarianceMatrixLine) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *VCMCovarianceMatrixLine) CX_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCMCovarianceMatrixLine) MutateCX_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(4, n)
}

func (rcv *VCMCovarianceMatrixLine) CY_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCMCovarianceMatrixLine) MutateCY_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(6, n)
}

func (rcv *VCMCovarianceMatrixLine) CZ_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCMCovarianceMatrixLine) MutateCZ_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(8, n)
}

func (rcv *VCMCovarianceMatrixLine) CX_DOT_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCMCovarianceMatrixLine) MutateCX_DOT_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(10, n)
}

func VCMCovarianceMatrixLineStart(builder *flatbuffers.Builder) {
	builder.StartObject(4)
}
func VCMCovarianceMatrixLineAddCX_X(builder *flatbuffers.Builder, CX_X float64) {
	builder.PrependFloat64Slot(0, CX_X, 0.0)
}
func VCMCovarianceMatrixLineAddCY_X(builder *flatbuffers.Builder, CY_X float64) {
	builder.PrependFloat64Slot(1, CY_X, 0.0)
}
func VCMCovarianceMatrixLineAddCZ_X(builder *flatbuffers.Builder, CZ_X float64) {
	builder.PrependFloat64Slot(2, CZ_X, 0.0)
}
func VCMCovarianceMatrixLineAddCX_DOT_X(builder *flatbuffers.Builder, CX_DOT_X float64) {
	builder.PrependFloat64Slot(3, CX_DOT_X, 0.0)
}
func VCMCovarianceMatrixLineEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
