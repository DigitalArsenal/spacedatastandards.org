// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package REC

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Orbit Comprehensive Message
type OCM struct {
	_tab flatbuffers.Table
}

const OCMIdentifier = "$OCM"

func GetRootAsOCM(buf []byte, offset flatbuffers.UOffsetT) *OCM {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &OCM{}
	x.Init(buf, n+offset)
	return x
}

func FinishOCMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(OCMIdentifier)
	builder.FinishWithFileIdentifier(offset, identifierBytes)
}

func OCMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.BufferHasIdentifier(buf, OCMIdentifier)
}

func GetSizePrefixedRootAsOCM(buf []byte, offset flatbuffers.UOffsetT) *OCM {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &OCM{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedOCMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	identifierBytes := []byte(OCMIdentifier)
	builder.FinishSizePrefixedWithFileIdentifier(offset, identifierBytes)
}

func SizePrefixedOCMBufferHasIdentifier(buf []byte) bool {
	return flatbuffers.SizePrefixedBufferHasIdentifier(buf, OCMIdentifier)
}

func (rcv *OCM) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *OCM) Table() flatbuffers.Table {
	return rcv._tab
}

/// Header section of the OCM.
func (rcv *OCM) HEADER(obj *Header) *Header {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(Header)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Header section of the OCM.
/// Metadata section of the OCM.
func (rcv *OCM) METADATA(obj *Metadata) *Metadata {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(Metadata)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Metadata section of the OCM.
/// Trajectory type (e.g., PROPAGATED, ESTIMATED).
func (rcv *OCM) TRAJ_TYPE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Trajectory type (e.g., PROPAGATED, ESTIMATED).
/// State vector data.
func (rcv *OCM) STATE_DATA(obj *StateVector, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *OCM) STATE_DATALength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// State vector data.
/// Physical properties of the space object.
func (rcv *OCM) PHYSICAL_PROPERTIES(obj *PhysicalProperties) *PhysicalProperties {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(PhysicalProperties)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Physical properties of the space object.
/// Covariance data associated with the state vectors.
func (rcv *OCM) COVARIANCE_DATA(obj *StateVector, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *OCM) COVARIANCE_DATALength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Covariance data associated with the state vectors.
/// Maneuver data.
func (rcv *OCM) MANEUVER_DATA(obj *Maneuver, j int) bool {
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

func (rcv *OCM) MANEUVER_DATALength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Maneuver data.
/// Perturbations parameters used.
func (rcv *OCM) PERTURBATIONS(obj *Perturbations) *Perturbations {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(Perturbations)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Perturbations parameters used.
/// Orbit determination data.
func (rcv *OCM) ORBIT_DETERMINATION(obj *OrbitDetermination) *OrbitDetermination {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(OrbitDetermination)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

/// Orbit determination data.
/// User-defined parameters and supplemental comments.
func (rcv *OCM) USER_DEFINED_PARAMETERS(obj *UserDefinedParameters, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *OCM) USER_DEFINED_PARAMETERSLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// User-defined parameters and supplemental comments.
func OCMStart(builder *flatbuffers.Builder) {
	builder.StartObject(10)
}
func OCMAddHEADER(builder *flatbuffers.Builder, HEADER flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(HEADER), 0)
}
func OCMAddMETADATA(builder *flatbuffers.Builder, METADATA flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(METADATA), 0)
}
func OCMAddTRAJ_TYPE(builder *flatbuffers.Builder, TRAJ_TYPE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(TRAJ_TYPE), 0)
}
func OCMAddSTATE_DATA(builder *flatbuffers.Builder, STATE_DATA flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(STATE_DATA), 0)
}
func OCMStartSTATE_DATAVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func OCMAddPHYSICAL_PROPERTIES(builder *flatbuffers.Builder, PHYSICAL_PROPERTIES flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(PHYSICAL_PROPERTIES), 0)
}
func OCMAddCOVARIANCE_DATA(builder *flatbuffers.Builder, COVARIANCE_DATA flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(COVARIANCE_DATA), 0)
}
func OCMStartCOVARIANCE_DATAVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func OCMAddMANEUVER_DATA(builder *flatbuffers.Builder, MANEUVER_DATA flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(MANEUVER_DATA), 0)
}
func OCMStartMANEUVER_DATAVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func OCMAddPERTURBATIONS(builder *flatbuffers.Builder, PERTURBATIONS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(PERTURBATIONS), 0)
}
func OCMAddORBIT_DETERMINATION(builder *flatbuffers.Builder, ORBIT_DETERMINATION flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(8, flatbuffers.UOffsetT(ORBIT_DETERMINATION), 0)
}
func OCMAddUSER_DEFINED_PARAMETERS(builder *flatbuffers.Builder, USER_DEFINED_PARAMETERS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(9, flatbuffers.UOffsetT(USER_DEFINED_PARAMETERS), 0)
}
func OCMStartUSER_DEFINED_PARAMETERSVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func OCMEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
