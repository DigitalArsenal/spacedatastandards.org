// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package TDM

import "strconv"

type refFrame int8

const (
	/// Earth-Centered-Earth-Fixed: Rotates with Earth. X-axis at prime meridian, Y eastward, Z towards North Pole.
	refFrameECEF            refFrame = 0
	/// International Celestial Reference Frame: Fixed relative to distant stars. Used in astronomy.
	refFrameICRF            refFrame = 1
	/// True Equator Mean Equinox: Dynamic frame for SGP4 satellite tracking.
	refFrameTEME            refFrame = 2
	/// East-North-Up: Local tangent plane for surface points. Suitable for stationary objects.
	refFrameENU             refFrame = 3
	/// North-East-Down: Aviation/navigation frame aligned with gravity.
	refFrameNED             refFrame = 4
	/// North-East-Up: Similar to NED, with "Up" opposite gravity.
	refFrameNEU             refFrame = 5
	/// Radial-Intrack-Cross-track: Spacecraft orientation aligned with orbit.
	refFrameRIC             refFrame = 6
	/// Earth Mean Equator and Equinox of J2000: Fixed relative to stars, used for celestial mechanics.
	refFrameJ2000           refFrame = 7
	/// Geocentric Celestial Reference Frame: Inertial Earth-centered frame.
	refFrameGCRF            refFrame = 8
	/// Greenwich Rotating Coordinates: Rotates with Earth's true equator.
	refFrameGRC             refFrame = 9
	/// International Terrestrial Reference Frame 2000: Rotating Earth-fixed frame.
	refFrameITRF2000        refFrame = 10
	/// International Terrestrial Reference Frame 1993: Older ITRF realization.
	refFrameITRF93          refFrame = 11
	/// International Terrestrial Reference Frame 1997: Intermediate ITRF realization.
	refFrameITRF97          refFrame = 12
	/// True of Date, Rotating: Rotates with Earth's true equator.
	refFrameTDR             refFrame = 13
	/// True of Date: Similar to TDR, without rotation.
	refFrameTOD             refFrame = 14
	/// Radial, Transverse, Normal: Orbit frame for spacecraft dynamics.
	refFrameRTN             refFrame = 15
	/// Transverse, Velocity, Normal: Alternative orbit frame.
	refFrameTVN             refFrame = 16
	/// Vehicle-Body-Local-Horizontal: Orbit frame aligned with spacecraft.
	refFrameVVLH            refFrame = 17
	/// Vehicle-Local-Vertical-Local-Horizontal: Used in surface or proximity ops.
	refFrameVLVH            refFrame = 18
	/// Local Tangent Plane: Surface-fixed frame for terrestrial uses.
	refFrameLTP             refFrame = 19
	/// Local Vertical-Local Horizontal: Orbit frame with Z towards Earth center.
	refFrameLVLH            refFrame = 20
	/// Polar-North-East: Polar coordinate frame.
	refFramePNE             refFrame = 21
	/// Body-Fixed Reference Frame: Fixed to a spacecraft or celestial object.
	refFrameBRF             refFrame = 22
	/// Radial, Down-track, Cross-track: Alternate name for RTN.
	refFrameRSW             refFrame = 23
	/// Tangential, Normal, Cross-track: Local orbit frame.
	refFrameTNW             refFrame = 24
	/// Radial, Along-track, Cross-track: Satellite motion frame.
	refFrameUVW             refFrame = 25
	/// Equinoctial Inertial: Frame with axes aligned to orbital properties.
	refFrameEQW_INERTIAL    refFrame = 26
	/// Inertial version of LVLH.
	refFrameLVLH_INERTIAL   refFrame = 27
	/// Rotating LVLH frame.
	refFrameLVLH_ROTATING   refFrame = 28
	/// Inertial Nadir-Sun-Normal frame.
	refFrameNSW_INERTIAL    refFrame = 29
	/// Rotating Nadir-Sun-Normal frame.
	refFrameNSW_ROTATING    refFrame = 30
	/// Inertial Transverse-Velocity-Normal frame.
	refFrameNTW_INERTIAL    refFrame = 31
	/// Rotating Transverse-Velocity-Normal frame.
	refFrameNTW_ROTATING    refFrame = 32
	/// Perifocal Coordinate System: Inertial frame aligned to periapsis.
	refFramePQW_INERTIAL    refFrame = 33
	/// Inertial Radial, Transverse, Normal frame.
	refFrameRSW_INERTIAL    refFrame = 34
	/// Rotating RSW frame: Aligned with orbit angular momentum.
	refFrameRSW_ROTATING    refFrame = 35
	/// South/East/Zenith inertial frame.
	refFrameSEZ_INERTIAL    refFrame = 36
	/// Rotating South/East/Zenith frame.
	refFrameSEZ_ROTATING    refFrame = 37
	/// Inertial Tangential, Normal, Cross-track frame.
	refFrameTNW_INERTIAL    refFrame = 38
	/// Rotating Tangential, Normal, Cross-track frame.
	refFrameTNW_ROTATING    refFrame = 39
	/// Velocity, Normal, Co-normal inertial frame.
	refFrameVNC_INERTIAL    refFrame = 40
	/// Rotating Velocity, Normal, Co-normal frame.
	refFrameVNC_ROTATING    refFrame = 41
	/// Central Body alignment inertial frame.
	refFrameALIGN_CB        refFrame = 42
	/// Earth alignment inertial frame.
	refFrameALIGN_EARTH     refFrame = 43
	/// Inertial realization of B1950 epoch.
	refFrameB1950           refFrame = 44
	/// Celestial Intermediate Reference System.
	refFrameCIRS            refFrame = 45
	/// DTRF Inertial frame with corrections.
	refFrameDTRFyyyy        refFrame = 46
	/// Earth-Fixed Greenwich rotating frame.
	refFrameEFG             refFrame = 47
	/// Earth Mean Equator and Equinox of 2000 epoch.
	refFrameEME2000         refFrame = 48
	/// Central Body fixed rotating frame.
	refFrameFIXED_CB        refFrame = 49
	/// Earth-fixed rotating frame.
	refFrameFIXED_EARTH     refFrame = 50
	/// Geocentric Celestial Reference Frame with versioning.
	refFrameGCRFn           refFrame = 51
	/// Greenwich True-of-Date rotating frame.
	refFrameGTOD            refFrame = 52
	/// Mean of Date for all central bodies except Earth and Moon.
	refFrameMOD_CB          refFrame = 53
	/// Mean of Date for Earth.
	refFrameMOD_EARTH       refFrame = 54
	/// Mean of Date for Moon.
	refFrameMOD_MOON        refFrame = 55
	/// Mean of Epoch for central bodies.
	refFrameMOE_CB          refFrame = 56
	/// Mean of Epoch for Earth.
	refFrameMOE_EARTH       refFrame = 57
	/// Lunar Moon Mean Earth reference frame.
	refFrameMOON_ME         refFrame = 58
	/// Lunar Mean Equator and IAU Node reference frame.
	refFrameMOON_MEIAUE     refFrame = 59
	/// Lunar Principal Axis rotating frame.
	refFrameMOON_PAxxx      refFrame = 60
	/// True Equator Mean Equinox of Date.
	refFrameTEMEOFDATE      refFrame = 61
	/// True Equator Mean Equinox of Epoch.
	refFrameTEMEOFEPOCH     refFrame = 62
	/// Terrestrial Intermediate Reference System.
	refFrameTIRS            refFrame = 63
	/// True of Date for central bodies.
	refFrameTOD_CB          refFrame = 64
	/// True of Date for Earth.
	refFrameTOD_EARTH       refFrame = 65
	/// True of Date for Moon.
	refFrameTOD_MOON        refFrame = 66
	/// True of Epoch for central bodies.
	refFrameTOE_CB          refFrame = 67
	/// True of Epoch for Earth.
	refFrameTOE_EARTH       refFrame = 68
	/// True of Epoch for Moon.
	refFrameTOE_MOON        refFrame = 69
	/// True Ecliptic reference frame.
	refFrameTRUE_ECLIPTIC   refFrame = 70
	/// Launch go-inertial reference frame.
	refFrameUVW_GO_INERTIAL refFrame = 71
	/// WGS 84 Earth-fixed terrestrial system.
	refFrameWGS84           refFrame = 72
	/// Accelerometer reference frame.
	refFrameACC_i           refFrame = 73
	/// Actuator reference frame.
	refFrameACTUATOR_i      refFrame = 74
	/// Autonomous Star Tracker reference frame.
	refFrameAST_i           refFrame = 75
	/// Coarse Sun Sensor reference frame.
	refFrameCSS_i           refFrame = 76
	/// Digital Sun Sensor reference frame.
	refFrameDSS_i           refFrame = 77
	/// Earth Sensor Assembly reference frame.
	refFrameESA_i           refFrame = 78
	/// Gyro reference frame.
	refFrameGYRO_FRAME_i    refFrame = 79
	/// Inertial Measurement Unit reference frame.
	refFrameIMU_FRAME_i     refFrame = 80
	/// Instrument reference frame.
	refFrameINSTRUMENT_i    refFrame = 81
	/// Magnetic Torque Assembly reference frame.
	refFrameMTA_i           refFrame = 82
	/// Reaction Wheel reference frame.
	refFrameRW_i            refFrame = 83
	/// Solar Array reference frame.
	refFrameSA_i            refFrame = 84
	/// Spacecraft Body reference frame.
	refFrameSC_BODY_i       refFrame = 85
	/// Sensor reference frame.
	refFrameSENSOR_i        refFrame = 86
	/// Star Tracker reference frame.
	refFrameSTARTRACKER_i   refFrame = 87
	/// Three Axis Magnetometer reference frame.
	refFrameTAM_i           refFrame = 88
)

var EnumNamesrefFrame = map[refFrame]string{
	refFrameECEF:            "ECEF",
	refFrameICRF:            "ICRF",
	refFrameTEME:            "TEME",
	refFrameENU:             "ENU",
	refFrameNED:             "NED",
	refFrameNEU:             "NEU",
	refFrameRIC:             "RIC",
	refFrameJ2000:           "J2000",
	refFrameGCRF:            "GCRF",
	refFrameGRC:             "GRC",
	refFrameITRF2000:        "ITRF2000",
	refFrameITRF93:          "ITRF93",
	refFrameITRF97:          "ITRF97",
	refFrameTDR:             "TDR",
	refFrameTOD:             "TOD",
	refFrameRTN:             "RTN",
	refFrameTVN:             "TVN",
	refFrameVVLH:            "VVLH",
	refFrameVLVH:            "VLVH",
	refFrameLTP:             "LTP",
	refFrameLVLH:            "LVLH",
	refFramePNE:             "PNE",
	refFrameBRF:             "BRF",
	refFrameRSW:             "RSW",
	refFrameTNW:             "TNW",
	refFrameUVW:             "UVW",
	refFrameEQW_INERTIAL:    "EQW_INERTIAL",
	refFrameLVLH_INERTIAL:   "LVLH_INERTIAL",
	refFrameLVLH_ROTATING:   "LVLH_ROTATING",
	refFrameNSW_INERTIAL:    "NSW_INERTIAL",
	refFrameNSW_ROTATING:    "NSW_ROTATING",
	refFrameNTW_INERTIAL:    "NTW_INERTIAL",
	refFrameNTW_ROTATING:    "NTW_ROTATING",
	refFramePQW_INERTIAL:    "PQW_INERTIAL",
	refFrameRSW_INERTIAL:    "RSW_INERTIAL",
	refFrameRSW_ROTATING:    "RSW_ROTATING",
	refFrameSEZ_INERTIAL:    "SEZ_INERTIAL",
	refFrameSEZ_ROTATING:    "SEZ_ROTATING",
	refFrameTNW_INERTIAL:    "TNW_INERTIAL",
	refFrameTNW_ROTATING:    "TNW_ROTATING",
	refFrameVNC_INERTIAL:    "VNC_INERTIAL",
	refFrameVNC_ROTATING:    "VNC_ROTATING",
	refFrameALIGN_CB:        "ALIGN_CB",
	refFrameALIGN_EARTH:     "ALIGN_EARTH",
	refFrameB1950:           "B1950",
	refFrameCIRS:            "CIRS",
	refFrameDTRFyyyy:        "DTRFyyyy",
	refFrameEFG:             "EFG",
	refFrameEME2000:         "EME2000",
	refFrameFIXED_CB:        "FIXED_CB",
	refFrameFIXED_EARTH:     "FIXED_EARTH",
	refFrameGCRFn:           "GCRFn",
	refFrameGTOD:            "GTOD",
	refFrameMOD_CB:          "MOD_CB",
	refFrameMOD_EARTH:       "MOD_EARTH",
	refFrameMOD_MOON:        "MOD_MOON",
	refFrameMOE_CB:          "MOE_CB",
	refFrameMOE_EARTH:       "MOE_EARTH",
	refFrameMOON_ME:         "MOON_ME",
	refFrameMOON_MEIAUE:     "MOON_MEIAUE",
	refFrameMOON_PAxxx:      "MOON_PAxxx",
	refFrameTEMEOFDATE:      "TEMEOFDATE",
	refFrameTEMEOFEPOCH:     "TEMEOFEPOCH",
	refFrameTIRS:            "TIRS",
	refFrameTOD_CB:          "TOD_CB",
	refFrameTOD_EARTH:       "TOD_EARTH",
	refFrameTOD_MOON:        "TOD_MOON",
	refFrameTOE_CB:          "TOE_CB",
	refFrameTOE_EARTH:       "TOE_EARTH",
	refFrameTOE_MOON:        "TOE_MOON",
	refFrameTRUE_ECLIPTIC:   "TRUE_ECLIPTIC",
	refFrameUVW_GO_INERTIAL: "UVW_GO_INERTIAL",
	refFrameWGS84:           "WGS84",
	refFrameACC_i:           "ACC_i",
	refFrameACTUATOR_i:      "ACTUATOR_i",
	refFrameAST_i:           "AST_i",
	refFrameCSS_i:           "CSS_i",
	refFrameDSS_i:           "DSS_i",
	refFrameESA_i:           "ESA_i",
	refFrameGYRO_FRAME_i:    "GYRO_FRAME_i",
	refFrameIMU_FRAME_i:     "IMU_FRAME_i",
	refFrameINSTRUMENT_i:    "INSTRUMENT_i",
	refFrameMTA_i:           "MTA_i",
	refFrameRW_i:            "RW_i",
	refFrameSA_i:            "SA_i",
	refFrameSC_BODY_i:       "SC_BODY_i",
	refFrameSENSOR_i:        "SENSOR_i",
	refFrameSTARTRACKER_i:   "STARTRACKER_i",
	refFrameTAM_i:           "TAM_i",
}

var EnumValuesrefFrame = map[string]refFrame{
	"ECEF":            refFrameECEF,
	"ICRF":            refFrameICRF,
	"TEME":            refFrameTEME,
	"ENU":             refFrameENU,
	"NED":             refFrameNED,
	"NEU":             refFrameNEU,
	"RIC":             refFrameRIC,
	"J2000":           refFrameJ2000,
	"GCRF":            refFrameGCRF,
	"GRC":             refFrameGRC,
	"ITRF2000":        refFrameITRF2000,
	"ITRF93":          refFrameITRF93,
	"ITRF97":          refFrameITRF97,
	"TDR":             refFrameTDR,
	"TOD":             refFrameTOD,
	"RTN":             refFrameRTN,
	"TVN":             refFrameTVN,
	"VVLH":            refFrameVVLH,
	"VLVH":            refFrameVLVH,
	"LTP":             refFrameLTP,
	"LVLH":            refFrameLVLH,
	"PNE":             refFramePNE,
	"BRF":             refFrameBRF,
	"RSW":             refFrameRSW,
	"TNW":             refFrameTNW,
	"UVW":             refFrameUVW,
	"EQW_INERTIAL":    refFrameEQW_INERTIAL,
	"LVLH_INERTIAL":   refFrameLVLH_INERTIAL,
	"LVLH_ROTATING":   refFrameLVLH_ROTATING,
	"NSW_INERTIAL":    refFrameNSW_INERTIAL,
	"NSW_ROTATING":    refFrameNSW_ROTATING,
	"NTW_INERTIAL":    refFrameNTW_INERTIAL,
	"NTW_ROTATING":    refFrameNTW_ROTATING,
	"PQW_INERTIAL":    refFramePQW_INERTIAL,
	"RSW_INERTIAL":    refFrameRSW_INERTIAL,
	"RSW_ROTATING":    refFrameRSW_ROTATING,
	"SEZ_INERTIAL":    refFrameSEZ_INERTIAL,
	"SEZ_ROTATING":    refFrameSEZ_ROTATING,
	"TNW_INERTIAL":    refFrameTNW_INERTIAL,
	"TNW_ROTATING":    refFrameTNW_ROTATING,
	"VNC_INERTIAL":    refFrameVNC_INERTIAL,
	"VNC_ROTATING":    refFrameVNC_ROTATING,
	"ALIGN_CB":        refFrameALIGN_CB,
	"ALIGN_EARTH":     refFrameALIGN_EARTH,
	"B1950":           refFrameB1950,
	"CIRS":            refFrameCIRS,
	"DTRFyyyy":        refFrameDTRFyyyy,
	"EFG":             refFrameEFG,
	"EME2000":         refFrameEME2000,
	"FIXED_CB":        refFrameFIXED_CB,
	"FIXED_EARTH":     refFrameFIXED_EARTH,
	"GCRFn":           refFrameGCRFn,
	"GTOD":            refFrameGTOD,
	"MOD_CB":          refFrameMOD_CB,
	"MOD_EARTH":       refFrameMOD_EARTH,
	"MOD_MOON":        refFrameMOD_MOON,
	"MOE_CB":          refFrameMOE_CB,
	"MOE_EARTH":       refFrameMOE_EARTH,
	"MOON_ME":         refFrameMOON_ME,
	"MOON_MEIAUE":     refFrameMOON_MEIAUE,
	"MOON_PAxxx":      refFrameMOON_PAxxx,
	"TEMEOFDATE":      refFrameTEMEOFDATE,
	"TEMEOFEPOCH":     refFrameTEMEOFEPOCH,
	"TIRS":            refFrameTIRS,
	"TOD_CB":          refFrameTOD_CB,
	"TOD_EARTH":       refFrameTOD_EARTH,
	"TOD_MOON":        refFrameTOD_MOON,
	"TOE_CB":          refFrameTOE_CB,
	"TOE_EARTH":       refFrameTOE_EARTH,
	"TOE_MOON":        refFrameTOE_MOON,
	"TRUE_ECLIPTIC":   refFrameTRUE_ECLIPTIC,
	"UVW_GO_INERTIAL": refFrameUVW_GO_INERTIAL,
	"WGS84":           refFrameWGS84,
	"ACC_i":           refFrameACC_i,
	"ACTUATOR_i":      refFrameACTUATOR_i,
	"AST_i":           refFrameAST_i,
	"CSS_i":           refFrameCSS_i,
	"DSS_i":           refFrameDSS_i,
	"ESA_i":           refFrameESA_i,
	"GYRO_FRAME_i":    refFrameGYRO_FRAME_i,
	"IMU_FRAME_i":     refFrameIMU_FRAME_i,
	"INSTRUMENT_i":    refFrameINSTRUMENT_i,
	"MTA_i":           refFrameMTA_i,
	"RW_i":            refFrameRW_i,
	"SA_i":            refFrameSA_i,
	"SC_BODY_i":       refFrameSC_BODY_i,
	"SENSOR_i":        refFrameSENSOR_i,
	"STARTRACKER_i":   refFrameSTARTRACKER_i,
	"TAM_i":           refFrameTAM_i,
}

func (v refFrame) String() string {
	if s, ok := EnumNamesrefFrame[v]; ok {
		return s
	}
	return "refFrame(" + strconv.FormatInt(int64(v), 10) + ")"
}
