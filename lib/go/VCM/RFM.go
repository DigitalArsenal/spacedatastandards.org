// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package VCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Reference Frame Message
type RFM struct {
	_tab flatbuffers.Table
}

const RFMIdentifier = "$RFM"

func GetRootAsRFM(buf []byte, offset flatbuffers.UOffsetT) *RFM {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &RFM{}
	x.Init(buf, n+offset)
	return x
}

func FinishRFMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(RFMIdentifier)
	builder.FinishWithFileIdentifier(offset, identifierBytes)
}

func RFMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.BufferHasIdentifier(buf, RFMIdentifier)
}

func GetSizePrefixedRootAsRFM(buf []byte, offset flatbuffers.UOffsetT) *RFM {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &RFM{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedRFMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(RFMIdentifier)
	builder.FinishSizePrefixedWithFileIdentifier(offset, identifierBytes)
}

func SizePrefixedRFMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.SizePrefixedBufferHasIdentifier(buf, RFMIdentifier)
}

func (rcv *RFM) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *RFM) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *RFM) REFERENCE_FRAME() refFrame {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return refFrame(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *RFM) MutateREFERENCE_FRAME(n refFrame) bool {
	return rcv._tab.MutateInt8Slot(4, int8(n))
}

func RFMStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func RFMAddREFERENCE_FRAME(builder *flatbuffers.Builder, REFERENCE_FRAME refFrame) {
	builder.PrependInt8Slot(0, int8(REFERENCE_FRAME), 0)
}
func RFMEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}