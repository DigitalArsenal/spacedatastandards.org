// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package VCM

import "strconv"

/// Enum to represent propagator types
type propagatorType int8

const (
	propagatorTypeNONE            propagatorType = 0
	propagatorTypeSEMI_ANALYTICAL propagatorType = 1
	propagatorTypeVINTI           propagatorType = 2
	propagatorTypeSGP4            propagatorType = 3
	propagatorTypeCOWELL          propagatorType = 4
	propagatorTypeRK4             propagatorType = 5
	propagatorTypeNYX             propagatorType = 6
	propagatorTypeGMAT            propagatorType = 7
	propagatorTypeSPICE           propagatorType = 8
	propagatorTypeSGP             propagatorType = 9
	propagatorTypeSDP4            propagatorType = 10
	propagatorTypeSGP8            propagatorType = 11
	propagatorTypeSDP8            propagatorType = 12
)

var EnumNamespropagatorType = map[propagatorType]string{
	propagatorTypeNONE:            "NONE",
	propagatorTypeSEMI_ANALYTICAL: "SEMI_ANALYTICAL",
	propagatorTypeVINTI:           "VINTI",
	propagatorTypeSGP4:            "SGP4",
	propagatorTypeCOWELL:          "COWELL",
	propagatorTypeRK4:             "RK4",
	propagatorTypeNYX:             "NYX",
	propagatorTypeGMAT:            "GMAT",
	propagatorTypeSPICE:           "SPICE",
	propagatorTypeSGP:             "SGP",
	propagatorTypeSDP4:            "SDP4",
	propagatorTypeSGP8:            "SGP8",
	propagatorTypeSDP8:            "SDP8",
}

var EnumValuespropagatorType = map[string]propagatorType{
	"NONE":            propagatorTypeNONE,
	"SEMI_ANALYTICAL": propagatorTypeSEMI_ANALYTICAL,
	"VINTI":           propagatorTypeVINTI,
	"SGP4":            propagatorTypeSGP4,
	"COWELL":          propagatorTypeCOWELL,
	"RK4":             propagatorTypeRK4,
	"NYX":             propagatorTypeNYX,
	"GMAT":            propagatorTypeGMAT,
	"SPICE":           propagatorTypeSPICE,
	"SGP":             propagatorTypeSGP,
	"SDP4":            propagatorTypeSDP4,
	"SGP8":            propagatorTypeSGP8,
	"SDP8":            propagatorTypeSDP8,
}

func (v propagatorType) String() string {
	if s, ok := EnumNamespropagatorType[v]; ok {
		return s
	}
	return "propagatorType(" + strconv.FormatInt(int64(v), 10) + ")"
}