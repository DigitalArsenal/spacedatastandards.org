#pragma once
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct CotPoint {
    double LATITUDE = 0;
    double LONGITUDE = 0;
    double HAE = 0;
    double CE = 9999999;
    double LE = 9999999;
};

struct CotDetail {
    std::string CALLSIGN;
    std::string ENDPOINT;
    std::string PHONE;
    std::optional<double> COURSE;
    std::optional<double> SPEED;
    std::string GROUP_NAME;
    std::string GROUP_ROLE;
    std::optional<double> STATUS_BATTERY;
    std::string PREC_LOCATION_SOURCE;
    std::string PREC_ALTSRC;
    std::string UID_DROID;
    std::string REMARKS;
    std::string REMARKS_SOURCE;
    std::string REMARKS_TIME;
    std::string LINK_UID;
    std::string LINK_TYPE;
    std::string LINK_RELATION;
    std::optional<int32_t> COLOR;
    std::optional<double> STROKE_WEIGHT;
    std::optional<int32_t> FILL_COLOR;
    std::string RAW_XML;
};

struct CotMessage {
    std::string VERSION;
    std::string UID;
    std::string TYPE;
    std::string HOW;
    std::string TIME;
    std::string START;
    std::string STALE;
    std::string ACCESS;
    std::string QOS;
    std::string OPEX;
    CotPoint POINT;
    std::optional<CotDetail> DETAIL;
};

CotMessage parse_cot_xml(std::string_view text);
std::string write_cot_xml(const CotMessage& msg);

} // namespace ccsds
