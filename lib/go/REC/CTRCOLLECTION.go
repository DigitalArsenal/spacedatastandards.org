// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package REC

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type CTRCOLLECTION struct {
	_tab flatbuffers.Table
}

func GetRootAsCTRCOLLECTION(buf []byte, offset flatbuffers.UOffsetT) *CTRCOLLECTION {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &CTRCOLLECTION{}
	x.Init(buf, n+offset)
	return x
}

func GetSizePrefixedRootAsCTRCOLLECTION(buf []byte, offset flatbuffers.UOffsetT) *CTRCOLLECTION {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &CTRCOLLECTION{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func (rcv *CTRCOLLECTION) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *CTRCOLLECTION) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *CTRCOLLECTION) RECORDS(obj *CTR, j int) bool {
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

func (rcv *CTRCOLLECTION) RECORDSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func CTRCOLLECTIONStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func CTRCOLLECTIONAddRECORDS(builder *flatbuffers.Builder, RECORDS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(RECORDS), 0)
}
func CTRCOLLECTIONStartRECORDSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func CTRCOLLECTIONEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}