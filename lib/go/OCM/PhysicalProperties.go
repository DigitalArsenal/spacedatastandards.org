// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package OCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type PhysicalProperties struct {
	_tab flatbuffers.Table
}

func GetRootAsPhysicalProperties(buf []byte, offset flatbuffers.UOffsetT) *PhysicalProperties {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &PhysicalProperties{}
	x.Init(buf, n+offset)
	return x
}

func FinishPhysicalPropertiesBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsPhysicalProperties(buf []byte, offset flatbuffers.UOffsetT) *PhysicalProperties {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &PhysicalProperties{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedPhysicalPropertiesBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *PhysicalProperties) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *PhysicalProperties) Table() flatbuffers.Table {
	return rcv._tab
}

/// Comments in the Physical Properties section.
func (rcv *PhysicalProperties) COMMENT(j int) []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		a := rcv._tab.Vector(o)
		return rcv._tab.ByteVector(a + flatbuffers.UOffsetT(j*4))
	}
	return nil
}

func (rcv *PhysicalProperties) COMMENTLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

/// Comments in the Physical Properties section.
/// Wet mass of the space object.
func (rcv *PhysicalProperties) WET_MASS() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Wet mass of the space object.
func (rcv *PhysicalProperties) MutateWET_MASS(n float64) bool {
	return rcv._tab.MutateFloat64Slot(6, n)
}

/// Dry mass of the space object.
func (rcv *PhysicalProperties) DRY_MASS() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Dry mass of the space object.
func (rcv *PhysicalProperties) MutateDRY_MASS(n float64) bool {
	return rcv._tab.MutateFloat64Slot(8, n)
}

/// Units for mass values.
func (rcv *PhysicalProperties) MASS_UNITS() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Units for mass values.
/// Quaternion component q1 of orientation from OEB to EME2000.
func (rcv *PhysicalProperties) OEB_Q1() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Quaternion component q1 of orientation from OEB to EME2000.
func (rcv *PhysicalProperties) MutateOEB_Q1(n float64) bool {
	return rcv._tab.MutateFloat64Slot(12, n)
}

/// Quaternion component q2.
func (rcv *PhysicalProperties) OEB_Q2() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Quaternion component q2.
func (rcv *PhysicalProperties) MutateOEB_Q2(n float64) bool {
	return rcv._tab.MutateFloat64Slot(14, n)
}

/// Quaternion component q3.
func (rcv *PhysicalProperties) OEB_Q3() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Quaternion component q3.
func (rcv *PhysicalProperties) MutateOEB_Q3(n float64) bool {
	return rcv._tab.MutateFloat64Slot(16, n)
}

/// Quaternion scalar component qc.
func (rcv *PhysicalProperties) OEB_QC() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Quaternion scalar component qc.
func (rcv *PhysicalProperties) MutateOEB_QC(n float64) bool {
	return rcv._tab.MutateFloat64Slot(18, n)
}

/// Maximum dimension of the object along OEB frame axes.
func (rcv *PhysicalProperties) OEB_MAX() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Maximum dimension of the object along OEB frame axes.
func (rcv *PhysicalProperties) MutateOEB_MAX(n float64) bool {
	return rcv._tab.MutateFloat64Slot(20, n)
}

/// Intermediate dimension along OEB frame axes.
func (rcv *PhysicalProperties) OEB_INT() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Intermediate dimension along OEB frame axes.
func (rcv *PhysicalProperties) MutateOEB_INT(n float64) bool {
	return rcv._tab.MutateFloat64Slot(22, n)
}

/// Minimum dimension of the object along OEB frame axes.
func (rcv *PhysicalProperties) OEB_MIN() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Minimum dimension of the object along OEB frame axes.
func (rcv *PhysicalProperties) MutateOEB_MIN(n float64) bool {
	return rcv._tab.MutateFloat64Slot(24, n)
}

/// Area along OEB_MAX axis.
func (rcv *PhysicalProperties) AREA_ALONG_OEB_MAX() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(26))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Area along OEB_MAX axis.
func (rcv *PhysicalProperties) MutateAREA_ALONG_OEB_MAX(n float64) bool {
	return rcv._tab.MutateFloat64Slot(26, n)
}

/// Area along OEB_INT axis.
func (rcv *PhysicalProperties) AREA_ALONG_OEB_INT() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(28))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Area along OEB_INT axis.
func (rcv *PhysicalProperties) MutateAREA_ALONG_OEB_INT(n float64) bool {
	return rcv._tab.MutateFloat64Slot(28, n)
}

/// Area along OEB_MIN axis.
func (rcv *PhysicalProperties) AREA_ALONG_OEB_MIN() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(30))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Area along OEB_MIN axis.
func (rcv *PhysicalProperties) MutateAREA_ALONG_OEB_MIN(n float64) bool {
	return rcv._tab.MutateFloat64Slot(30, n)
}

/// Units for area values.
func (rcv *PhysicalProperties) AREA_UNITS() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(32))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

/// Units for area values.
/// Constant area for drag computations.
func (rcv *PhysicalProperties) DRAG_CONST_AREA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(34))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Constant area for drag computations.
func (rcv *PhysicalProperties) MutateDRAG_CONST_AREA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(34, n)
}

/// Nominal drag coefficient.
func (rcv *PhysicalProperties) DRAG_COEFF_NOM() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(36))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Nominal drag coefficient.
func (rcv *PhysicalProperties) MutateDRAG_COEFF_NOM(n float64) bool {
	return rcv._tab.MutateFloat64Slot(36, n)
}

/// Uncertainty in the drag coefficient.
func (rcv *PhysicalProperties) DRAG_UNCERTAINTY() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(38))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Uncertainty in the drag coefficient.
func (rcv *PhysicalProperties) MutateDRAG_UNCERTAINTY(n float64) bool {
	return rcv._tab.MutateFloat64Slot(38, n)
}

/// Constant area for solar radiation pressure computations.
func (rcv *PhysicalProperties) SRP_CONST_AREA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(40))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Constant area for solar radiation pressure computations.
func (rcv *PhysicalProperties) MutateSRP_CONST_AREA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(40, n)
}

/// Nominal solar radiation pressure coefficient.
func (rcv *PhysicalProperties) SOLAR_RAD_COEFF() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(42))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Nominal solar radiation pressure coefficient.
func (rcv *PhysicalProperties) MutateSOLAR_RAD_COEFF(n float64) bool {
	return rcv._tab.MutateFloat64Slot(42, n)
}

/// Uncertainty in the solar radiation pressure coefficient.
func (rcv *PhysicalProperties) SRP_UNCERTAINTY() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(44))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

/// Uncertainty in the solar radiation pressure coefficient.
func (rcv *PhysicalProperties) MutateSRP_UNCERTAINTY(n float64) bool {
	return rcv._tab.MutateFloat64Slot(44, n)
}

func PhysicalPropertiesStart(builder *flatbuffers.Builder) {
	builder.StartObject(21)
}
func PhysicalPropertiesAddCOMMENT(builder *flatbuffers.Builder, COMMENT flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(COMMENT), 0)
}
func PhysicalPropertiesStartCOMMENTVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func PhysicalPropertiesAddWET_MASS(builder *flatbuffers.Builder, WET_MASS float64) {
	builder.PrependFloat64Slot(1, WET_MASS, 0.0)
}
func PhysicalPropertiesAddDRY_MASS(builder *flatbuffers.Builder, DRY_MASS float64) {
	builder.PrependFloat64Slot(2, DRY_MASS, 0.0)
}
func PhysicalPropertiesAddMASS_UNITS(builder *flatbuffers.Builder, MASS_UNITS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(MASS_UNITS), 0)
}
func PhysicalPropertiesAddOEB_Q1(builder *flatbuffers.Builder, OEB_Q1 float64) {
	builder.PrependFloat64Slot(4, OEB_Q1, 0.0)
}
func PhysicalPropertiesAddOEB_Q2(builder *flatbuffers.Builder, OEB_Q2 float64) {
	builder.PrependFloat64Slot(5, OEB_Q2, 0.0)
}
func PhysicalPropertiesAddOEB_Q3(builder *flatbuffers.Builder, OEB_Q3 float64) {
	builder.PrependFloat64Slot(6, OEB_Q3, 0.0)
}
func PhysicalPropertiesAddOEB_QC(builder *flatbuffers.Builder, OEB_QC float64) {
	builder.PrependFloat64Slot(7, OEB_QC, 0.0)
}
func PhysicalPropertiesAddOEB_MAX(builder *flatbuffers.Builder, OEB_MAX float64) {
	builder.PrependFloat64Slot(8, OEB_MAX, 0.0)
}
func PhysicalPropertiesAddOEB_INT(builder *flatbuffers.Builder, OEB_INT float64) {
	builder.PrependFloat64Slot(9, OEB_INT, 0.0)
}
func PhysicalPropertiesAddOEB_MIN(builder *flatbuffers.Builder, OEB_MIN float64) {
	builder.PrependFloat64Slot(10, OEB_MIN, 0.0)
}
func PhysicalPropertiesAddAREA_ALONG_OEB_MAX(builder *flatbuffers.Builder, AREA_ALONG_OEB_MAX float64) {
	builder.PrependFloat64Slot(11, AREA_ALONG_OEB_MAX, 0.0)
}
func PhysicalPropertiesAddAREA_ALONG_OEB_INT(builder *flatbuffers.Builder, AREA_ALONG_OEB_INT float64) {
	builder.PrependFloat64Slot(12, AREA_ALONG_OEB_INT, 0.0)
}
func PhysicalPropertiesAddAREA_ALONG_OEB_MIN(builder *flatbuffers.Builder, AREA_ALONG_OEB_MIN float64) {
	builder.PrependFloat64Slot(13, AREA_ALONG_OEB_MIN, 0.0)
}
func PhysicalPropertiesAddAREA_UNITS(builder *flatbuffers.Builder, AREA_UNITS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(14, flatbuffers.UOffsetT(AREA_UNITS), 0)
}
func PhysicalPropertiesAddDRAG_CONST_AREA(builder *flatbuffers.Builder, DRAG_CONST_AREA float64) {
	builder.PrependFloat64Slot(15, DRAG_CONST_AREA, 0.0)
}
func PhysicalPropertiesAddDRAG_COEFF_NOM(builder *flatbuffers.Builder, DRAG_COEFF_NOM float64) {
	builder.PrependFloat64Slot(16, DRAG_COEFF_NOM, 0.0)
}
func PhysicalPropertiesAddDRAG_UNCERTAINTY(builder *flatbuffers.Builder, DRAG_UNCERTAINTY float64) {
	builder.PrependFloat64Slot(17, DRAG_UNCERTAINTY, 0.0)
}
func PhysicalPropertiesAddSRP_CONST_AREA(builder *flatbuffers.Builder, SRP_CONST_AREA float64) {
	builder.PrependFloat64Slot(18, SRP_CONST_AREA, 0.0)
}
func PhysicalPropertiesAddSOLAR_RAD_COEFF(builder *flatbuffers.Builder, SOLAR_RAD_COEFF float64) {
	builder.PrependFloat64Slot(19, SOLAR_RAD_COEFF, 0.0)
}
func PhysicalPropertiesAddSRP_UNCERTAINTY(builder *flatbuffers.Builder, SRP_UNCERTAINTY float64) {
	builder.PrependFloat64Slot(20, SRP_UNCERTAINTY, 0.0)
}
func PhysicalPropertiesEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
