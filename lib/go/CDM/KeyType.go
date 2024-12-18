// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package CDM

import "strconv"

type KeyType int8

const (
	KeyTypeSigning    KeyType = 0
	KeyTypeEncryption KeyType = 1
)

var EnumNamesKeyType = map[KeyType]string{
	KeyTypeSigning:    "Signing",
	KeyTypeEncryption: "Encryption",
}

var EnumValuesKeyType = map[string]KeyType{
	"Signing":    KeyTypeSigning,
	"Encryption": KeyTypeEncryption,
}

func (v KeyType) String() string {
	if s, ok := EnumNamesKeyType[v]; ok {
		return s
	}
	return "KeyType(" + strconv.FormatInt(int64(v), 10) + ")"
}
