// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package EOO

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Table representing a frequency band with a name and frequency range
type Band struct {
	_tab flatbuffers.Table
}

func GetRootAsBand(buf []byte, offset flatbuffers.UOffsetT) *Band {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &Band{}
	x.Init(buf, n+offset)
	return x
}

func FinishBandBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsBand(buf []byte, offset flatbuffers.UOffsetT) *Band {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &Band{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedBandBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *Band) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *Band) Table() flatbuffers.Table {
	return rcv._tab
}

/// Name of the band
func (rcv *Band) NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Name of the band
/// Frequency range of the band
func (rcv *Band) FREQUENCY_RANGE(obj *FrequencyRange) *FrequencyRange {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(FrequencyRange)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Frequency range of the band
func BandStart(builder *flatbuffers.Builder) {
	builder.StartObject(2)
}
func BandAddNAME(builder *flatbuffers.Builder, NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(NAME), 0)
}
func BandAddFREQUENCY_RANGE(builder *flatbuffers.Builder, FREQUENCY_RANGE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(FREQUENCY_RANGE), 0)
}
func BandEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
