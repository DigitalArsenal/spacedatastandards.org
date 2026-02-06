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
        if (c == '{') return "json";
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

// XML message type detection
static std::string detect_xml_type(const std::string& input) {
    if (input.find("<SpaceSystem") != std::string::npos || input.find(":SpaceSystem") != std::string::npos) return "XTCE";
    if (input.find("<omm") != std::string::npos || input.find("<OMM") != std::string::npos) return "OMM";
    if (input.find("<oem") != std::string::npos || input.find("<OEM") != std::string::npos) return "OEM";
    if (input.find("<cdm") != std::string::npos || input.find("<CDM") != std::string::npos) return "CDM";
    if (input.find("<opm") != std::string::npos || input.find("<OPM") != std::string::npos) return "OPM";
    if (input.find("<aem") != std::string::npos || input.find("<AEM") != std::string::npos) return "AEM";
    if (input.find("<tdm") != std::string::npos || input.find("<TDM") != std::string::npos) return "TDM";
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

    throw std::runtime_error("Unsupported message type or format: " + msg_type + "/" + fmt + " -> " + target_format);
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_BINDINGS(sds_parsers) {
    function("convert", &convert);
    function("detectFormat", &detect_format);
    function("detectKvnType", &detect_kvn_type);
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
    function("detectXmlType", &detect_xml_type);
}
#endif
