// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package LDM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Payload Information
type PLD struct {
	_tab flatbuffers.Table
}

func GetRootAsPLD(buf []byte, offset flatbuffers.UOffsetT) *PLD {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &PLD{}
	x.Init(buf, n+offset)
	return x
}

func GetSizePrefixedRootAsPLD(buf []byte, offset flatbuffers.UOffsetT) *PLD {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &PLD{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func (rcv *PLD) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *PLD) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *PLD) PAYLOAD_DURATION() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PLD) MASS_AT_LAUNCH() float32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetFloat32(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *PLD) MutateMASS_AT_LAUNCH(n float32) bool {
	return rcv._tab.MutateFloat32Slot(6, n)
}

func (rcv *PLD) DIMENSIONS() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PLD) SOLAR_ARRAY_AREA() float32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetFloat32(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *PLD) MutateSOLAR_ARRAY_AREA(n float32) bool {
	return rcv._tab.MutateFloat32Slot(10, n)
}

func (rcv *PLD) SOLAR_ARRAY_DIMENSIONS() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PLD) NOMINAL_OPERATIONAL_LIFETIME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PLD) INSTRUMENTS(obj *IDM, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *PLD) INSTRUMENTSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func PLDStart(builder *flatbuffers.Builder) {
	builder.StartObject(7)
}
func PLDAddPAYLOAD_DURATION(builder *flatbuffers.Builder, PAYLOAD_DURATION flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(PAYLOAD_DURATION), 0)
}
func PLDAddMASS_AT_LAUNCH(builder *flatbuffers.Builder, MASS_AT_LAUNCH float32) {
	builder.PrependFloat32Slot(1, MASS_AT_LAUNCH, 0.0)
}
func PLDAddDIMENSIONS(builder *flatbuffers.Builder, DIMENSIONS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(DIMENSIONS), 0)
}
func PLDAddSOLAR_ARRAY_AREA(builder *flatbuffers.Builder, SOLAR_ARRAY_AREA float32) {
	builder.PrependFloat32Slot(3, SOLAR_ARRAY_AREA, 0.0)
}
func PLDAddSOLAR_ARRAY_DIMENSIONS(builder *flatbuffers.Builder, SOLAR_ARRAY_DIMENSIONS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(SOLAR_ARRAY_DIMENSIONS), 0)
}
func PLDAddNOMINAL_OPERATIONAL_LIFETIME(builder *flatbuffers.Builder, NOMINAL_OPERATIONAL_LIFETIME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(NOMINAL_OPERATIONAL_LIFETIME), 0)
}
func PLDAddINSTRUMENTS(builder *flatbuffers.Builder, INSTRUMENTS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(INSTRUMENTS), 0)
}
func PLDStartINSTRUMENTSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func PLDEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}