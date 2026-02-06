#pragma once
#include "ccsds/kvn_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct OmmHeader {
    std::string CCSDS_OMM_VERS;
    std::string CREATION_DATE;
    std::string ORIGINATOR;
    std::vector<std::string> comments;
};

struct OmmMetadata {
    std::string OBJECT_NAME;
    std::string OBJECT_ID;
    std::string CENTER_NAME;
    std::string REF_FRAME;
    std::string TIME_SYSTEM;
    std::string MEAN_ELEMENT_THEORY;
    std::vector<std::string> comments;
};

struct OmmMeanElements {
    std::string EPOCH;
    std::optional<double> SEMI_MAJOR_AXIS;
    std::optional<double> MEAN_MOTION;
    double ECCENTRICITY = 0;
    double INCLINATION = 0;
    double RA_OF_ASC_NODE = 0;
    double ARG_OF_PERICENTER = 0;
    double MEAN_ANOMALY = 0;
    std::optional<double> GM;
    std::vector<std::string> comments;
};

struct OmmTleParameters {
    std::optional<int> EPHEMERIS_TYPE;
    std::optional<std::string> CLASSIFICATION_TYPE;
    std::optional<int> NORAD_CAT_ID;
    std::optional<int> ELEMENT_SET_NO;
    std::optional<int> REV_AT_EPOCH;
    std::optional<double> BSTAR;
    std::optional<double> MEAN_MOTION_DOT;
    std::optional<double> MEAN_MOTION_DDOT;
    std::vector<std::string> comments;
};

struct OmmCovarianceMatrix {
    std::optional<std::string> COV_REF_FRAME;
    double CX_X = 0, CY_X = 0, CY_Y = 0;
    double CZ_X = 0, CZ_Y = 0, CZ_Z = 0;
    double CX_DOT_X = 0, CX_DOT_Y = 0, CX_DOT_Z = 0, CX_DOT_X_DOT = 0;
    double CY_DOT_X = 0, CY_DOT_Y = 0, CY_DOT_Z = 0, CY_DOT_X_DOT = 0, CY_DOT_Y_DOT = 0;
    double CZ_DOT_X = 0, CZ_DOT_Y = 0, CZ_DOT_Z = 0, CZ_DOT_X_DOT = 0, CZ_DOT_Y_DOT = 0, CZ_DOT_Z_DOT = 0;
};

struct OmmMessage {
    OmmHeader header;
    OmmMetadata metadata;
    OmmMeanElements mean_elements;
    std::optional<OmmTleParameters> tle_parameters;
    std::optional<OmmCovarianceMatrix> covariance_matrix;
};

OmmMessage parse_omm_kvn(std::string_view text);
OmmMessage parse_omm_xml(std::string_view text);
std::string write_omm_kvn(const OmmMessage& msg);
std::string write_omm_xml(const OmmMessage& msg);

} // namespace ccsds
