// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package REC

import "strconv"

/// Enum for the type of site
type SiteType int8

const (
	SiteTypeLAUNCH_SITE              SiteType = 0
	SiteTypeOBSERVATION_STATION      SiteType = 1
	SiteTypeHOBBYIST_OBSERVER        SiteType = 2
	SiteTypeRESEARCH_FACILITY        SiteType = 3
	SiteTypeSATELLITE_GROUND_STATION SiteType = 4
	SiteTypeSPACEPORT                SiteType = 5
	SiteTypeMILITARY_BASE            SiteType = 6
	SiteTypeWEATHER_STATION          SiteType = 7
	SiteTypeASTRONOMICAL_OBSERVATORY SiteType = 8
	SiteTypeEDUCATIONAL_INSTITUTE    SiteType = 9
	SiteTypeCOMMUNICATION_HUB        SiteType = 10
	SiteTypePOWER_PLANT              SiteType = 11
	SiteTypeINDUSTRIAL_COMPLEX       SiteType = 12
	SiteTypeTRANSPORTATION_HUB       SiteType = 13
	SiteTypeURBAN_AREA               SiteType = 14
	SiteTypeNATIONAL_PARK            SiteType = 15
	SiteTypeHISTORICAL_SITE          SiteType = 16
	SiteTypeOTHER                    SiteType = 17
)

var EnumNamesSiteType = map[SiteType]string{
	SiteTypeLAUNCH_SITE:              "LAUNCH_SITE",
	SiteTypeOBSERVATION_STATION:      "OBSERVATION_STATION",
	SiteTypeHOBBYIST_OBSERVER:        "HOBBYIST_OBSERVER",
	SiteTypeRESEARCH_FACILITY:        "RESEARCH_FACILITY",
	SiteTypeSATELLITE_GROUND_STATION: "SATELLITE_GROUND_STATION",
	SiteTypeSPACEPORT:                "SPACEPORT",
	SiteTypeMILITARY_BASE:            "MILITARY_BASE",
	SiteTypeWEATHER_STATION:          "WEATHER_STATION",
	SiteTypeASTRONOMICAL_OBSERVATORY: "ASTRONOMICAL_OBSERVATORY",
	SiteTypeEDUCATIONAL_INSTITUTE:    "EDUCATIONAL_INSTITUTE",
	SiteTypeCOMMUNICATION_HUB:        "COMMUNICATION_HUB",
	SiteTypePOWER_PLANT:              "POWER_PLANT",
	SiteTypeINDUSTRIAL_COMPLEX:       "INDUSTRIAL_COMPLEX",
	SiteTypeTRANSPORTATION_HUB:       "TRANSPORTATION_HUB",
	SiteTypeURBAN_AREA:               "URBAN_AREA",
	SiteTypeNATIONAL_PARK:            "NATIONAL_PARK",
	SiteTypeHISTORICAL_SITE:          "HISTORICAL_SITE",
	SiteTypeOTHER:                    "OTHER",
}

var EnumValuesSiteType = map[string]SiteType{
	"LAUNCH_SITE":              SiteTypeLAUNCH_SITE,
	"OBSERVATION_STATION":      SiteTypeOBSERVATION_STATION,
	"HOBBYIST_OBSERVER":        SiteTypeHOBBYIST_OBSERVER,
	"RESEARCH_FACILITY":        SiteTypeRESEARCH_FACILITY,
	"SATELLITE_GROUND_STATION": SiteTypeSATELLITE_GROUND_STATION,
	"SPACEPORT":                SiteTypeSPACEPORT,
	"MILITARY_BASE":            SiteTypeMILITARY_BASE,
	"WEATHER_STATION":          SiteTypeWEATHER_STATION,
	"ASTRONOMICAL_OBSERVATORY": SiteTypeASTRONOMICAL_OBSERVATORY,
	"EDUCATIONAL_INSTITUTE":    SiteTypeEDUCATIONAL_INSTITUTE,
	"COMMUNICATION_HUB":        SiteTypeCOMMUNICATION_HUB,
	"POWER_PLANT":              SiteTypePOWER_PLANT,
	"INDUSTRIAL_COMPLEX":       SiteTypeINDUSTRIAL_COMPLEX,
	"TRANSPORTATION_HUB":       SiteTypeTRANSPORTATION_HUB,
	"URBAN_AREA":               SiteTypeURBAN_AREA,
	"NATIONAL_PARK":            SiteTypeNATIONAL_PARK,
	"HISTORICAL_SITE":          SiteTypeHISTORICAL_SITE,
	"OTHER":                    SiteTypeOTHER,
}

func (v SiteType) String() string {
	if s, ok := EnumNamesSiteType[v]; ok {
		return s
	}
	return "SiteType(" + strconv.FormatInt(int64(v), 10) + ")"
}