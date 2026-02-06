#pragma once
#include "ccsds/kvn_parser.h"
#include "ccsds/xml_sax_parser.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct OemHeader {
    std::string CCSDS_OEM_VERS;
    std::string CREATION_DATE;
    std::string ORIGINATOR;
    std::vector<std::string> comments;
};

struct OemMetadata {
    std::string OBJECT_NAME, OBJECT_ID, CENTER_NAME;
    std::string REF_FRAME, TIME_SYSTEM;
    std::optional<std::string> REF_FRAME_EPOCH;
    std::string START_TIME, STOP_TIME;
    std::optional<std::string> USEABLE_START_TIME, USEABLE_STOP_TIME;
    std::optional<std::string> INTERPOLATION;
    std::optional<int> INTERPOLATION_DEGREE;
    std::vector<std::string> comments;
};

struct OemEphemerisLine {
    std::string epoch;
    double x = 0, y = 0, z = 0;
    double x_dot = 0, y_dot = 0, z_dot = 0;
    std::optional<double> x_ddot, y_ddot, z_ddot;
};

struct OemCovarianceBlock {
    std::string EPOCH;
    std::optional<std::string> COV_REF_FRAME;
    double CX_X = 0, CY_X = 0, CY_Y = 0, CZ_X = 0, CZ_Y = 0, CZ_Z = 0;
    double CX_DOT_X = 0, CX_DOT_Y = 0, CX_DOT_Z = 0, CX_DOT_X_DOT = 0;
    double CY_DOT_X = 0, CY_DOT_Y = 0, CY_DOT_Z = 0, CY_DOT_X_DOT = 0, CY_DOT_Y_DOT = 0;
    double CZ_DOT_X = 0, CZ_DOT_Y = 0, CZ_DOT_Z = 0, CZ_DOT_X_DOT = 0, CZ_DOT_Y_DOT = 0, CZ_DOT_Z_DOT = 0;
};

struct OemData {
    std::vector<OemEphemerisLine> ephemeris;
    std::vector<OemCovarianceBlock> covariance_blocks;
    std::vector<std::string> comments;
};

struct OemSegment {
    OemMetadata metadata;
    OemData data;
};

struct OemMessage {
    OemHeader header;
    std::vector<OemSegment> segments;
};

OemMessage parse_oem_kvn(std::string_view text);
OemMessage parse_oem_xml(std::string_view text);
std::string write_oem_kvn(const OemMessage& msg);
std::string write_oem_xml(const OemMessage& msg);

} // namespace ccsds
