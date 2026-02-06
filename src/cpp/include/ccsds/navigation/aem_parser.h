#pragma once
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct AemHeader {
    std::string CCSDS_AEM_VERS, CREATION_DATE, ORIGINATOR;
};

struct AemMetadata {
    std::string OBJECT_NAME, OBJECT_ID, CENTER_NAME;
    std::string REF_FRAME_A, REF_FRAME_B;
    std::string ATTITUDE_DIR, TIME_SYSTEM, ATTITUDE_TYPE;
    std::string START_TIME, STOP_TIME;
    std::optional<std::string> INTERPOLATION;
    std::optional<int> INTERPOLATION_DEGREE;
};

struct AemAttitudeEntry {
    std::string epoch;
    double q1 = 0, q2 = 0, q3 = 0, qc = 0; // quaternion
    std::optional<double> rate_x, rate_y, rate_z;
};

struct AemSegment {
    AemMetadata metadata;
    std::vector<AemAttitudeEntry> data;
};

struct AemMessage {
    AemHeader header;
    std::vector<AemSegment> segments;
};

AemMessage parse_aem_kvn(std::string_view text);
AemMessage parse_aem_xml(std::string_view text);
std::string write_aem_kvn(const AemMessage& msg);

} // namespace ccsds
