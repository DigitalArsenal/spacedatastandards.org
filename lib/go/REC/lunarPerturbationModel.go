// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package REC

import "strconv"

/// Enum to represent common lunar perturbation models
type lunarPerturbationModel int8

const (
	lunarPerturbationModelNONE   lunarPerturbationModel = 0
	lunarPerturbationModelDE430  lunarPerturbationModel = 1
	lunarPerturbationModelDE431  lunarPerturbationModel = 2
	lunarPerturbationModelLP150Q lunarPerturbationModel = 3
)

var EnumNameslunarPerturbationModel = map[lunarPerturbationModel]string{
	lunarPerturbationModelNONE:   "NONE",
	lunarPerturbationModelDE430:  "DE430",
	lunarPerturbationModelDE431:  "DE431",
	lunarPerturbationModelLP150Q: "LP150Q",
}

var EnumValueslunarPerturbationModel = map[string]lunarPerturbationModel{
	"NONE":   lunarPerturbationModelNONE,
	"DE430":  lunarPerturbationModelDE430,
	"DE431":  lunarPerturbationModelDE431,
	"LP150Q": lunarPerturbationModelLP150Q,
}

func (v lunarPerturbationModel) String() string {
	if s, ok := EnumNameslunarPerturbationModel[v]; ok {
		return s
	}
	return "lunarPerturbationModel(" + strconv.FormatInt(int64(v), 10) + ")"
}