#pragma once
#include "ccsds/kvn_parser.h"
#include "ccsds/xml_sax_parser.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct TdmHeader {
    std::string CCSDS_TDM_VERS, CREATION_DATE, ORIGINATOR;
    std::vector<std::string> comments;
};

struct TdmMetadata {
    std::string TIME_SYSTEM;
    std::optional<std::string> PARTICIPANT_1, PARTICIPANT_2, PARTICIPANT_3, PARTICIPANT_4, PARTICIPANT_5;
    std::optional<std::string> MODE, PATH, PATH_1, PATH_2;
    std::optional<std::string> TRANSMIT_BAND, RECEIVE_BAND;
    std::optional<double> TURNAROUND_NUMERATOR, TURNAROUND_DENOMINATOR;
    std::optional<std::string> TIMETAG_REF;
    std::optional<double> INTEGRATION_INTERVAL;
    std::optional<std::string> INTEGRATION_REF;
    std::optional<double> FREQ_OFFSET;
    std::optional<std::string> RANGE_MODE;
    std::optional<double> RANGE_MODULUS;
    std::optional<std::string> RANGE_UNITS, ANGLE_TYPE, REFERENCE_FRAME;
    std::optional<std::string> INTERPOLATION;
    std::optional<int> INTERPOLATION_DEGREE;
    std::optional<std::string> START_TIME, STOP_TIME;
    std::vector<std::string> comments;
};

struct TdmObservation {
    std::string epoch;
    std::string keyword;
    double value = 0;
};

struct TdmSegment {
    TdmMetadata metadata;
    std::vector<TdmObservation> observations;
};

struct TdmMessage {
    TdmHeader header;
    std::vector<TdmSegment> segments;
};

TdmMessage parse_tdm_kvn(std::string_view text);
TdmMessage parse_tdm_xml(std::string_view text);
std::string write_tdm_kvn(const TdmMessage& msg);
std::string write_tdm_xml(const TdmMessage& msg);

} // namespace ccsds
