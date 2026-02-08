#include "ccsds/kvn_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include "ccsds/navigation/omm_parser.h"
#include "ccsds/navigation/oem_parser.h"
#include "ccsds/navigation/cdm_parser.h"
#include "ccsds/navigation/opm_parser.h"
#include "ccsds/navigation/aem_parser.h"
#include "ccsds/navigation/tdm_parser.h"
#include "ccsds/navigation/xtce_parser.h"
#include "ccsds/navigation/gjn_parser.h"
#include "ccsds/navigation/czm_parser.h"
#include "ccsds/navigation/kml_parser.h"
#include "ccsds/navigation/gpx_parser.h"
#include "ccsds/navigation/cot_parser.h"

#ifdef __EMSCRIPTEN__
#include <emscripten/bind.h>
using namespace emscripten;
#endif

#include <string>
#include <stdexcept>

// Format detection
static std::string detect_format(const std::string& input) {
    for (size_t i = 0; i < input.size(); i++) {
        char c = input[i];
        if (c == ' ' || c == '\t' || c == '\r' || c == '\n') continue;
        if (c == '<') return "xml";
        if (c == '{' || c == '[') return "json";
        return "kvn";
    }
    return "kvn";
}

// Message type detection for KVN
static std::string detect_kvn_type(const std::string& input) {
    if (input.find("CCSDS_OMM_VERS") != std::string::npos) return "OMM";
    if (input.find("CCSDS_OEM_VERS") != std::string::npos) return "OEM";
    if (input.find("CCSDS_CDM_VERS") != std::string::npos) return "CDM";
    if (input.find("CCSDS_OPM_VERS") != std::string::npos) return "OPM";
    if (input.find("CCSDS_AEM_VERS") != std::string::npos) return "AEM";
    if (input.find("CCSDS_TDM_VERS") != std::string::npos) return "TDM";
    return "";
}

// OMM: KVN -> KVN round-trip
static std::string omm_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_omm_kvn(input);
    return ccsds::write_omm_kvn(msg);
}

// OMM: XML -> XML round-trip
static std::string omm_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_omm_xml(input);
    return ccsds::write_omm_xml(msg);
}

// OMM: KVN -> XML
static std::string omm_kvn_to_xml(const std::string& input) {
    auto msg = ccsds::parse_omm_kvn(input);
    return ccsds::write_omm_xml(msg);
}

// OMM: XML -> KVN
static std::string omm_xml_to_kvn(const std::string& input) {
    auto msg = ccsds::parse_omm_xml(input);
    return ccsds::write_omm_kvn(msg);
}

// OEM: KVN -> KVN round-trip
static std::string oem_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_oem_kvn(input);
    return ccsds::write_oem_kvn(msg);
}

// OEM: XML -> XML round-trip
static std::string oem_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_oem_xml(input);
    return ccsds::write_oem_xml(msg);
}

// CDM: KVN -> KVN round-trip
static std::string cdm_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_cdm_kvn(input);
    return ccsds::write_cdm_kvn(msg);
}

// OPM: KVN -> KVN round-trip
static std::string opm_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_opm_kvn(input);
    return ccsds::write_opm_kvn(msg);
}

// OPM: XML -> XML round-trip
static std::string opm_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_opm_xml(input);
    return ccsds::write_opm_xml(msg);
}

// OPM: KVN -> XML
static std::string opm_kvn_to_xml(const std::string& input) {
    auto msg = ccsds::parse_opm_kvn(input);
    return ccsds::write_opm_xml(msg);
}

// OPM: XML -> KVN
static std::string opm_xml_to_kvn(const std::string& input) {
    auto msg = ccsds::parse_opm_xml(input);
    return ccsds::write_opm_kvn(msg);
}

// AEM: KVN -> KVN round-trip
static std::string aem_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_aem_kvn(input);
    return ccsds::write_aem_kvn(msg);
}

// TDM: KVN -> KVN round-trip
static std::string tdm_kvn_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_tdm_kvn(input);
    return ccsds::write_tdm_kvn(msg);
}

// TDM: XML -> XML round-trip
static std::string tdm_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_tdm_xml(input);
    return ccsds::write_tdm_xml(msg);
}

// XTCE: XML -> XML round-trip
static std::string xtce_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_xtce_xml(input);
    return ccsds::write_xtce_xml(msg);
}

// GJN: JSON -> JSON round-trip (GeoJSON)
static std::string gjn_json_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_gjn_json(input);
    return ccsds::write_gjn_json(msg);
}

// CZM: JSON -> JSON round-trip (CZML)
static std::string czm_json_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_czm_json(input);
    return ccsds::write_czm_json(msg);
}

// KML: XML -> XML round-trip
static std::string kml_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_kml_xml(input);
    return ccsds::write_kml_xml(msg);
}

// GPX: XML -> XML round-trip
static std::string gpx_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_gpx_xml(input);
    return ccsds::write_gpx_xml(msg);
}

// COT: XML -> XML round-trip
static std::string cot_xml_roundtrip(const std::string& input) {
    auto msg = ccsds::parse_cot_xml(input);
    return ccsds::write_cot_xml(msg);
}

// XML message type detection
static std::string detect_xml_type(const std::string& input) {
    if (input.find("<SpaceSystem") != std::string::npos || input.find(":SpaceSystem") != std::string::npos) return "XTCE";
    if (input.find("<omm") != std::string::npos || input.find("<OMM") != std::string::npos) return "OMM";
    if (input.find("<oem") != std::string::npos || input.find("<OEM") != std::string::npos) return "OEM";
    if (input.find("<cdm") != std::string::npos || input.find("<CDM") != std::string::npos) return "CDM";
    if (input.find("<opm") != std::string::npos || input.find("<OPM") != std::string::npos) return "OPM";
    if (input.find("<aem") != std::string::npos || input.find("<AEM") != std::string::npos) return "AEM";
    if (input.find("<tdm") != std::string::npos || input.find("<TDM") != std::string::npos) return "TDM";
    if (input.find("<kml") != std::string::npos || input.find("<KML") != std::string::npos) return "KML";
    if (input.find("<gpx") != std::string::npos || input.find("<GPX") != std::string::npos) return "GPX";
    if (input.find("<event") != std::string::npos) return "COT";
    return "";
}

// JSON message type detection
static std::string detect_json_type(const std::string& input) {
    if (input.find("\"FeatureCollection\"") != std::string::npos ||
        input.find("\"Feature\"") != std::string::npos ||
        input.find("\"Point\"") != std::string::npos ||
        input.find("\"LineString\"") != std::string::npos ||
        input.find("\"Polygon\"") != std::string::npos) return "GJN";
    if (input.find("\"id\"") != std::string::npos &&
        input.find("\"document\"") != std::string::npos) return "CZM";
    // Check for CZML array pattern: starts with [ and has "id":"document"
    for (size_t i = 0; i < input.size(); i++) {
        char c = input[i];
        if (c == ' ' || c == '\t' || c == '\r' || c == '\n') continue;
        if (c == '[') {
            if (input.find("\"document\"") != std::string::npos) return "CZM";
        }
        break;
    }
    return "";
}

// Generic convert: auto-detect format and message type
static std::string convert(const std::string& input, const std::string& target_format) {
    std::string fmt = detect_format(input);
    std::string msg_type;

    if (fmt == "kvn") {
        msg_type = detect_kvn_type(input);
    } else if (fmt == "xml") {
        msg_type = detect_xml_type(input);
    } else if (fmt == "json") {
        msg_type = detect_json_type(input);
    }

    if (msg_type == "XTCE") {
        return xtce_xml_roundtrip(input);
    }
    if (msg_type == "OMM") {
        if (fmt == "kvn" && target_format == "kvn") return omm_kvn_roundtrip(input);
        if (fmt == "kvn" && target_format == "xml") return omm_kvn_to_xml(input);
        if (fmt == "xml" && target_format == "kvn") return omm_xml_to_kvn(input);
        if (fmt == "xml" && target_format == "xml") return omm_xml_roundtrip(input);
    }
    if (msg_type == "OEM") {
        if (fmt == "kvn") return oem_kvn_roundtrip(input);
        if (fmt == "xml") return oem_xml_roundtrip(input);
    }
    if (msg_type == "OPM") {
        if (fmt == "kvn" && target_format == "kvn") return opm_kvn_roundtrip(input);
        if (fmt == "kvn" && target_format == "xml") return opm_kvn_to_xml(input);
        if (fmt == "xml" && target_format == "kvn") return opm_xml_to_kvn(input);
        if (fmt == "xml" && target_format == "xml") return opm_xml_roundtrip(input);
    }
    if (msg_type == "AEM") {
        if (fmt == "kvn") return aem_kvn_roundtrip(input);
    }
    if (msg_type == "CDM") {
        if (fmt == "kvn") return cdm_kvn_roundtrip(input);
    }
    if (msg_type == "TDM") {
        if (fmt == "kvn" && target_format == "kvn") return tdm_kvn_roundtrip(input);
        if (fmt == "kvn" && target_format == "xml") {
            auto msg = ccsds::parse_tdm_kvn(input);
            return ccsds::write_tdm_xml(msg);
        }
        if (fmt == "xml" && target_format == "xml") return tdm_xml_roundtrip(input);
        if (fmt == "xml" && target_format == "kvn") {
            auto msg = ccsds::parse_tdm_xml(input);
            return ccsds::write_tdm_kvn(msg);
        }
    }
    if (msg_type == "GJN") {
        return gjn_json_roundtrip(input);
    }
    if (msg_type == "CZM") {
        return czm_json_roundtrip(input);
    }
    if (msg_type == "KML") {
        return kml_xml_roundtrip(input);
    }
    if (msg_type == "GPX") {
        return gpx_xml_roundtrip(input);
    }
    if (msg_type == "COT") {
        return cot_xml_roundtrip(input);
    }

    throw std::runtime_error("Unsupported message type or format: " + msg_type + "/" + fmt + " -> " + target_format);
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_BINDINGS(sds_parsers) {
    function("convert", &convert);
    function("detectFormat", &detect_format);
    function("detectKvnType", &detect_kvn_type);
    function("detectXmlType", &detect_xml_type);
    function("detectJsonType", &detect_json_type);
    function("ommKvnRoundtrip", &omm_kvn_roundtrip);
    function("ommXmlRoundtrip", &omm_xml_roundtrip);
    function("ommKvnToXml", &omm_kvn_to_xml);
    function("ommXmlToKvn", &omm_xml_to_kvn);
    function("oemKvnRoundtrip", &oem_kvn_roundtrip);
    function("oemXmlRoundtrip", &oem_xml_roundtrip);
    function("opmKvnRoundtrip", &opm_kvn_roundtrip);
    function("opmXmlRoundtrip", &opm_xml_roundtrip);
    function("opmKvnToXml", &opm_kvn_to_xml);
    function("opmXmlToKvn", &opm_xml_to_kvn);
    function("aemKvnRoundtrip", &aem_kvn_roundtrip);
    function("cdmKvnRoundtrip", &cdm_kvn_roundtrip);
    function("tdmKvnRoundtrip", &tdm_kvn_roundtrip);
    function("tdmXmlRoundtrip", &tdm_xml_roundtrip);
    function("xtceXmlRoundtrip", &xtce_xml_roundtrip);
    function("gjnJsonRoundtrip", &gjn_json_roundtrip);
    function("czmJsonRoundtrip", &czm_json_roundtrip);
    function("kmlXmlRoundtrip", &kml_xml_roundtrip);
    function("gpxXmlRoundtrip", &gpx_xml_roundtrip);
    function("cotXmlRoundtrip", &cot_xml_roundtrip);
}
#endif
