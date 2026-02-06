#pragma once
#include "ccsds/kvn_parser.h"
#include "ccsds/xml_sax_parser.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct CdmHeader {
    std::string CCSDS_CDM_VERS, CREATION_DATE, ORIGINATOR;
    std::optional<std::string> MESSAGE_FOR;
    std::string MESSAGE_ID;
    std::vector<std::string> comments;
};

struct CdmRelativeMetadata {
    std::string TCA;
    double MISS_DISTANCE = 0;
    std::optional<double> RELATIVE_SPEED;
    std::optional<double> RELATIVE_POSITION_R, RELATIVE_POSITION_T, RELATIVE_POSITION_N;
    std::optional<double> RELATIVE_VELOCITY_R, RELATIVE_VELOCITY_T, RELATIVE_VELOCITY_N;
    std::optional<std::string> START_SCREEN_PERIOD, STOP_SCREEN_PERIOD;
    std::optional<std::string> SCREEN_VOLUME_FRAME, SCREEN_VOLUME_SHAPE;
    std::optional<double> SCREEN_VOLUME_X, SCREEN_VOLUME_Y, SCREEN_VOLUME_Z;
    std::optional<std::string> SCREEN_ENTRY_TIME, SCREEN_EXIT_TIME;
    std::optional<double> COLLISION_PROBABILITY;
    std::optional<std::string> COLLISION_PROBABILITY_METHOD;
    std::vector<std::string> comments;
};

struct CdmObject {
    std::string OBJECT, OBJECT_DESIGNATOR, CATALOG_NAME, OBJECT_NAME, INTERNATIONAL_DESIGNATOR;
    std::optional<std::string> OBJECT_TYPE;
    std::optional<std::string> OPERATOR_CONTACT_POSITION, OPERATOR_ORGANIZATION, OPERATOR_PHONE, OPERATOR_EMAIL;
    std::optional<std::string> EPHEMERIS_NAME, COVARIANCE_METHOD, MANEUVERABLE, ORBIT_CENTER;
    std::string REF_FRAME;
    std::optional<std::string> GRAVITY_MODEL, ATMOSPHERIC_MODEL, N_BODY_PERTURBATIONS;
    std::optional<std::string> SOLAR_RAD_PRESSURE, EARTH_TIDES, INTRACK_THRUST;
    std::optional<std::string> TIME_LASTOB_START, TIME_LASTOB_END;
    std::optional<double> RECOMMENDED_OD_SPAN, ACTUAL_OD_SPAN;
    std::optional<double> OBS_AVAILABLE, OBS_USED, TRACKS_AVAILABLE, TRACKS_USED;
    std::optional<double> RESIDUALS_ACCEPTED, WEIGHTED_RMS;
    std::optional<double> AREA_PC, AREA_DRG, AREA_SRP, MASS, CR_AREA_OVER_MASS;
    std::optional<double> THRUST_ACCELERATION, SEDR;
    double X = 0, Y = 0, Z = 0, X_DOT = 0, Y_DOT = 0, Z_DOT = 0;
    std::optional<double> CR_R, CT_R, CT_T, CN_R, CN_T, CN_N;
    std::optional<double> CRDOT_R, CRDOT_T, CRDOT_N, CRDOT_RDOT;
    std::optional<double> CTDOT_R, CTDOT_T, CTDOT_N, CTDOT_RDOT, CTDOT_TDOT;
    std::optional<double> CNDOT_R, CNDOT_T, CNDOT_N, CNDOT_RDOT, CNDOT_TDOT, CNDOT_NDOT;
    std::optional<double> CDRG_R, CDRG_T, CDRG_N, CDRG_RDOT, CDRG_TDOT, CDRG_NDOT, CDRG_DRG;
    std::optional<double> CSRP_R, CSRP_T, CSRP_N, CSRP_RDOT, CSRP_TDOT, CSRP_NDOT, CSRP_DRG, CSRP_SRP;
    std::vector<std::string> comments;
};

struct CdmMessage {
    CdmHeader header;
    CdmRelativeMetadata relative_metadata;
    CdmObject object1;
    CdmObject object2;
};

CdmMessage parse_cdm_kvn(std::string_view text);
CdmMessage parse_cdm_xml(std::string_view text);
std::string write_cdm_kvn(const CdmMessage& msg);
std::string write_cdm_xml(const CdmMessage& msg);

} // namespace ccsds
