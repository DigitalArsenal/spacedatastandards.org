// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package REC

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type EMECOLLECTION struct {
	_tab flatbuffers.Table
}

func GetRootAsEMECOLLECTION(buf []byte, offset flatbuffers.UOffsetT) *EMECOLLECTION {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &EMECOLLECTION{}
	x.Init(buf, n+offset)
	return x
}

func FinishEMECOLLECTIONBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsEMECOLLECTION(buf []byte, offset flatbuffers.UOffsetT) *EMECOLLECTION {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &EMECOLLECTION{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedEMECOLLECTIONBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *EMECOLLECTION) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *EMECOLLECTION) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *EMECOLLECTION) RECORDS(obj *EME, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *EMECOLLECTION) RECORDSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func EMECOLLECTIONStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func EMECOLLECTIONAddRECORDS(builder *flatbuffers.Builder, RECORDS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(RECORDS), 0)
}
func EMECOLLECTIONStartRECORDSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func EMECOLLECTIONEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
