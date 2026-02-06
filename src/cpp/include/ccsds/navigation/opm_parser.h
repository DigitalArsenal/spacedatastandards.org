#pragma once
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct OpmHeader {
    std::string CCSDS_OPM_VERS, CREATION_DATE, ORIGINATOR;
    std::vector<std::string> comments;
};

struct OpmMetadata {
    std::string OBJECT_NAME, OBJECT_ID, CENTER_NAME, REF_FRAME, TIME_SYSTEM;
    std::vector<std::string> comments;
};

struct OpmStateVector {
    std::string EPOCH;
    double X = 0, Y = 0, Z = 0, X_DOT = 0, Y_DOT = 0, Z_DOT = 0;
};

struct OpmKeplerian {
    double SEMI_MAJOR_AXIS = 0, ECCENTRICITY = 0, INCLINATION = 0;
    double RA_OF_ASC_NODE = 0, ARG_OF_PERICENTER = 0;
    double TRUE_ANOMALY = 0;
    std::optional<double> MEAN_ANOMALY, GM;
};

struct OpmSpacecraftParams {
    std::optional<double> MASS, SOLAR_RAD_AREA, SOLAR_RAD_COEFF, DRAG_AREA, DRAG_COEFF;
};

struct OpmManeuver {
    std::string MAN_EPOCH_IGNITION;
    double MAN_DURATION = 0;
    double MAN_DELTA_MASS = 0;
    std::string MAN_REF_FRAME;
    double MAN_DV_1 = 0, MAN_DV_2 = 0, MAN_DV_3 = 0;
};

struct OpmMessage {
    OpmHeader header;
    OpmMetadata metadata;
    OpmStateVector state_vector;
    std::optional<OpmKeplerian> keplerian;
    std::optional<OpmSpacecraftParams> spacecraft;
    std::vector<OpmManeuver> maneuvers;
};

OpmMessage parse_opm_kvn(std::string_view text);
OpmMessage parse_opm_xml(std::string_view text);
std::string write_opm_kvn(const OpmMessage& msg);
std::string write_opm_xml(const OpmMessage& msg);

} // namespace ccsds
