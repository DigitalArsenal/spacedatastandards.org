// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package VCM

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

/// Orbit Parameter Message
type VCM struct {
	_tab flatbuffers.Table
}

func GetRootAsVCM(buf []byte, offset flatbuffers.UOffsetT) *VCM {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &VCM{}
	x.Init(buf, n+offset)
	return x
}

func FinishVCMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.Finish(offset)
}

func GetSizePrefixedRootAsVCM(buf []byte, offset flatbuffers.UOffsetT) *VCM {
	n := flatbuffers.GetUOffsetT(buf[offset+flatbuffers.SizeUint32:])
	x := &VCM{}
	x.Init(buf, n+offset+flatbuffers.SizeUint32)
	return x
}

func FinishSizePrefixedVCMBuffer(builder *flatbuffers.Builder, offset flatbuffers.UOffsetT) {
	builder.FinishSizePrefixed(offset)
}

func (rcv *VCM) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *VCM) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *VCM) CCSDS_OMM_VERS() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateCCSDS_OMM_VERS(n float64) bool {
	return rcv._tab.MutateFloat64Slot(4, n)
}

func (rcv *VCM) CREATION_DATE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) ORIGINATOR() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) OBJECT_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) OBJECT_ID() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) CENTER_NAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) REF_FRAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) TIME_SYSTEM() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) STATE_VECTOR(obj *VCMStateVector) *VCMStateVector {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(VCMStateVector)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) KEPLERIAN_ELEMENTS(obj *keplerianElements) *keplerianElements {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(keplerianElements)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) EQUINOCTIAL_ELEMENTS(obj *equinoctialElements) *equinoctialElements {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(24))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(equinoctialElements)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) GM() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(26))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateGM(n float64) bool {
	return rcv._tab.MutateFloat64Slot(26, n)
}

func (rcv *VCM) ATMOSPHERIC_MODEL_DATA(obj *VCMAtmosphericModelData) *VCMAtmosphericModelData {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(28))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(VCMAtmosphericModelData)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) PROPAGATOR_SETTINGS(obj *propagatorConfig) *propagatorConfig {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(30))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(propagatorConfig)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) COVARIANCE_MATRIX(obj *VCMCovarianceMatrixLine, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(32))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *VCM) COVARIANCE_MATRIXLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(32))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func (rcv *VCM) UVW_SIGMAS(obj *uvwSigmas) *uvwSigmas {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(34))
	if o != 0 {
		x := rcv._tab.Indirect(o + rcv._tab.Pos)
		if obj == nil {
			obj = new(uvwSigmas)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *VCM) MASS() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(36))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateMASS(n float64) bool {
	return rcv._tab.MutateFloat64Slot(36, n)
}

func (rcv *VCM) SOLAR_RAD_AREA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(38))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateSOLAR_RAD_AREA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(38, n)
}

func (rcv *VCM) SOLAR_RAD_COEFF() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(40))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateSOLAR_RAD_COEFF(n float64) bool {
	return rcv._tab.MutateFloat64Slot(40, n)
}

func (rcv *VCM) DRAG_AREA() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(42))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateDRAG_AREA(n float64) bool {
	return rcv._tab.MutateFloat64Slot(42, n)
}

func (rcv *VCM) DRAG_COEFF() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(44))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateDRAG_COEFF(n float64) bool {
	return rcv._tab.MutateFloat64Slot(44, n)
}

func (rcv *VCM) SRP() perturbationStatus {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(46))
	if o != 0 {
		return perturbationStatus(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *VCM) MutateSRP(n perturbationStatus) bool {
	return rcv._tab.MutateInt8Slot(46, int8(n))
}

func (rcv *VCM) CLASSIFICATION_TYPE() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(48))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) NORAD_CAT_ID() uint32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(50))
	if o != 0 {
		return rcv._tab.GetUint32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *VCM) MutateNORAD_CAT_ID(n uint32) bool {
	return rcv._tab.MutateUint32Slot(50, n)
}

func (rcv *VCM) ELEMENT_SET_NO() uint32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(52))
	if o != 0 {
		return rcv._tab.GetUint32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *VCM) MutateELEMENT_SET_NO(n uint32) bool {
	return rcv._tab.MutateUint32Slot(52, n)
}

func (rcv *VCM) REV_AT_EPOCH() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(54))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateREV_AT_EPOCH(n float64) bool {
	return rcv._tab.MutateFloat64Slot(54, n)
}

func (rcv *VCM) BSTAR() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(56))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateBSTAR(n float64) bool {
	return rcv._tab.MutateFloat64Slot(56, n)
}

func (rcv *VCM) MEAN_MOTION_DOT() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(58))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateMEAN_MOTION_DOT(n float64) bool {
	return rcv._tab.MutateFloat64Slot(58, n)
}

func (rcv *VCM) MEAN_MOTION_DDOT() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(60))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateMEAN_MOTION_DDOT(n float64) bool {
	return rcv._tab.MutateFloat64Slot(60, n)
}

func (rcv *VCM) COV_REFERENCE_FRAME() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(62))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) CX_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(64))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateCX_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(64, n)
}

func (rcv *VCM) CY_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(66))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateCY_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(66, n)
}

func (rcv *VCM) CZ_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(68))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateCZ_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(68, n)
}

func (rcv *VCM) CX_DOT_X() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(70))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateCX_DOT_X(n float64) bool {
	return rcv._tab.MutateFloat64Slot(70, n)
}

func (rcv *VCM) USER_DEFINED_BIP_0044_TYPE() uint32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(72))
	if o != 0 {
		return rcv._tab.GetUint32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *VCM) MutateUSER_DEFINED_BIP_0044_TYPE(n uint32) bool {
	return rcv._tab.MutateUint32Slot(72, n)
}

func (rcv *VCM) USER_DEFINED_OBJECT_DESIGNATOR() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(74))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) USER_DEFINED_EARTH_MODEL() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(76))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *VCM) USER_DEFINED_EPOCH_TIMESTAMP() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(78))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateUSER_DEFINED_EPOCH_TIMESTAMP(n float64) bool {
	return rcv._tab.MutateFloat64Slot(78, n)
}

func (rcv *VCM) USER_DEFINED_MICROSECONDS() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(80))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *VCM) MutateUSER_DEFINED_MICROSECONDS(n float64) bool {
	return rcv._tab.MutateFloat64Slot(80, n)
}

func VCMStart(builder *flatbuffers.Builder) {
	builder.StartObject(39)
}
func VCMAddCCSDS_OMM_VERS(builder *flatbuffers.Builder, CCSDS_OMM_VERS float64) {
	builder.PrependFloat64Slot(0, CCSDS_OMM_VERS, 0.0)
}
func VCMAddCREATION_DATE(builder *flatbuffers.Builder, CREATION_DATE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(CREATION_DATE), 0)
}
func VCMAddORIGINATOR(builder *flatbuffers.Builder, ORIGINATOR flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(ORIGINATOR), 0)
}
func VCMAddOBJECT_NAME(builder *flatbuffers.Builder, OBJECT_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(3, flatbuffers.UOffsetT(OBJECT_NAME), 0)
}
func VCMAddOBJECT_ID(builder *flatbuffers.Builder, OBJECT_ID flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(OBJECT_ID), 0)
}
func VCMAddCENTER_NAME(builder *flatbuffers.Builder, CENTER_NAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(5, flatbuffers.UOffsetT(CENTER_NAME), 0)
}
func VCMAddREF_FRAME(builder *flatbuffers.Builder, REF_FRAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(6, flatbuffers.UOffsetT(REF_FRAME), 0)
}
func VCMAddTIME_SYSTEM(builder *flatbuffers.Builder, TIME_SYSTEM flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(7, flatbuffers.UOffsetT(TIME_SYSTEM), 0)
}
func VCMAddSTATE_VECTOR(builder *flatbuffers.Builder, STATE_VECTOR flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(8, flatbuffers.UOffsetT(STATE_VECTOR), 0)
}
func VCMAddKEPLERIAN_ELEMENTS(builder *flatbuffers.Builder, KEPLERIAN_ELEMENTS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(9, flatbuffers.UOffsetT(KEPLERIAN_ELEMENTS), 0)
}
func VCMAddEQUINOCTIAL_ELEMENTS(builder *flatbuffers.Builder, EQUINOCTIAL_ELEMENTS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(10, flatbuffers.UOffsetT(EQUINOCTIAL_ELEMENTS), 0)
}
func VCMAddGM(builder *flatbuffers.Builder, GM float64) {
	builder.PrependFloat64Slot(11, GM, 0.0)
}
func VCMAddATMOSPHERIC_MODEL_DATA(builder *flatbuffers.Builder, ATMOSPHERIC_MODEL_DATA flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(12, flatbuffers.UOffsetT(ATMOSPHERIC_MODEL_DATA), 0)
}
func VCMAddPROPAGATOR_SETTINGS(builder *flatbuffers.Builder, PROPAGATOR_SETTINGS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(13, flatbuffers.UOffsetT(PROPAGATOR_SETTINGS), 0)
}
func VCMAddCOVARIANCE_MATRIX(builder *flatbuffers.Builder, COVARIANCE_MATRIX flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(14, flatbuffers.UOffsetT(COVARIANCE_MATRIX), 0)
}
func VCMStartCOVARIANCE_MATRIXVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func VCMAddUVW_SIGMAS(builder *flatbuffers.Builder, UVW_SIGMAS flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(15, flatbuffers.UOffsetT(UVW_SIGMAS), 0)
}
func VCMAddMASS(builder *flatbuffers.Builder, MASS float64) {
	builder.PrependFloat64Slot(16, MASS, 0.0)
}
func VCMAddSOLAR_RAD_AREA(builder *flatbuffers.Builder, SOLAR_RAD_AREA float64) {
	builder.PrependFloat64Slot(17, SOLAR_RAD_AREA, 0.0)
}
func VCMAddSOLAR_RAD_COEFF(builder *flatbuffers.Builder, SOLAR_RAD_COEFF float64) {
	builder.PrependFloat64Slot(18, SOLAR_RAD_COEFF, 0.0)
}
func VCMAddDRAG_AREA(builder *flatbuffers.Builder, DRAG_AREA float64) {
	builder.PrependFloat64Slot(19, DRAG_AREA, 0.0)
}
func VCMAddDRAG_COEFF(builder *flatbuffers.Builder, DRAG_COEFF float64) {
	builder.PrependFloat64Slot(20, DRAG_COEFF, 0.0)
}
func VCMAddSRP(builder *flatbuffers.Builder, SRP perturbationStatus) {
	builder.PrependInt8Slot(21, int8(SRP), 0)
}
func VCMAddCLASSIFICATION_TYPE(builder *flatbuffers.Builder, CLASSIFICATION_TYPE flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(22, flatbuffers.UOffsetT(CLASSIFICATION_TYPE), 0)
}
func VCMAddNORAD_CAT_ID(builder *flatbuffers.Builder, NORAD_CAT_ID uint32) {
	builder.PrependUint32Slot(23, NORAD_CAT_ID, 0)
}
func VCMAddELEMENT_SET_NO(builder *flatbuffers.Builder, ELEMENT_SET_NO uint32) {
	builder.PrependUint32Slot(24, ELEMENT_SET_NO, 0)
}
func VCMAddREV_AT_EPOCH(builder *flatbuffers.Builder, REV_AT_EPOCH float64) {
	builder.PrependFloat64Slot(25, REV_AT_EPOCH, 0.0)
}
func VCMAddBSTAR(builder *flatbuffers.Builder, BSTAR float64) {
	builder.PrependFloat64Slot(26, BSTAR, 0.0)
}
func VCMAddMEAN_MOTION_DOT(builder *flatbuffers.Builder, MEAN_MOTION_DOT float64) {
	builder.PrependFloat64Slot(27, MEAN_MOTION_DOT, 0.0)
}
func VCMAddMEAN_MOTION_DDOT(builder *flatbuffers.Builder, MEAN_MOTION_DDOT float64) {
	builder.PrependFloat64Slot(28, MEAN_MOTION_DDOT, 0.0)
}
func VCMAddCOV_REFERENCE_FRAME(builder *flatbuffers.Builder, COV_REFERENCE_FRAME flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(29, flatbuffers.UOffsetT(COV_REFERENCE_FRAME), 0)
}
func VCMAddCX_X(builder *flatbuffers.Builder, CX_X float64) {
	builder.PrependFloat64Slot(30, CX_X, 0.0)
}
func VCMAddCY_X(builder *flatbuffers.Builder, CY_X float64) {
	builder.PrependFloat64Slot(31, CY_X, 0.0)
}
func VCMAddCZ_X(builder *flatbuffers.Builder, CZ_X float64) {
	builder.PrependFloat64Slot(32, CZ_X, 0.0)
}
func VCMAddCX_DOT_X(builder *flatbuffers.Builder, CX_DOT_X float64) {
	builder.PrependFloat64Slot(33, CX_DOT_X, 0.0)
}
func VCMAddUSER_DEFINED_BIP_0044_TYPE(builder *flatbuffers.Builder, USER_DEFINED_BIP_0044_TYPE uint32) {
	builder.PrependUint32Slot(34, USER_DEFINED_BIP_0044_TYPE, 0)
}
func VCMAddUSER_DEFINED_OBJECT_DESIGNATOR(builder *flatbuffers.Builder, USER_DEFINED_OBJECT_DESIGNATOR flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(35, flatbuffers.UOffsetT(USER_DEFINED_OBJECT_DESIGNATOR), 0)
}
func VCMAddUSER_DEFINED_EARTH_MODEL(builder *flatbuffers.Builder, USER_DEFINED_EARTH_MODEL flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(36, flatbuffers.UOffsetT(USER_DEFINED_EARTH_MODEL), 0)
}
func VCMAddUSER_DEFINED_EPOCH_TIMESTAMP(builder *flatbuffers.Builder, USER_DEFINED_EPOCH_TIMESTAMP float64) {
	builder.PrependFloat64Slot(37, USER_DEFINED_EPOCH_TIMESTAMP, 0.0)
}
func VCMAddUSER_DEFINED_MICROSECONDS(builder *flatbuffers.Builder, USER_DEFINED_MICROSECONDS float64) {
	builder.PrependFloat64Slot(38, USER_DEFINED_MICROSECONDS, 0.0)
}
func VCMEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}