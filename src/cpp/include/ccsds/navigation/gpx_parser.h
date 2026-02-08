#pragma once
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct GpxLink {
    std::string HREF;
    std::string TEXT;
    std::string TYPE;
};

struct GpxWaypoint {
    double LATITUDE = 0;
    double LONGITUDE = 0;
    std::optional<double> ELEVATION;
    std::string TIME;
    std::string NAME;
    std::string COMMENT;
    std::string DESCRIPTION;
    std::string SOURCE;
    std::vector<GpxLink> LINKS;
    std::string SYMBOL;
    std::string TYPE;
    std::string FIX;
    std::optional<int> SAT;
    std::optional<double> HDOP;
    std::optional<double> VDOP;
    std::optional<double> PDOP;
    std::optional<double> SPEED;
    std::optional<double> COURSE;
};

struct GpxTrackSegment {
    std::vector<GpxWaypoint> POINTS;
};

struct GpxTrack {
    std::string NAME;
    std::string COMMENT;
    std::string DESCRIPTION;
    std::string SOURCE;
    std::vector<GpxLink> LINKS;
    std::optional<int> NUMBER;
    std::string TYPE;
    std::vector<GpxTrackSegment> SEGMENTS;
};

struct GpxRoute {
    std::string NAME;
    std::string COMMENT;
    std::string DESCRIPTION;
    std::string SOURCE;
    std::vector<GpxLink> LINKS;
    std::optional<int> NUMBER;
    std::string TYPE;
    std::vector<GpxWaypoint> POINTS;
};

struct GpxMessage {
    std::string VERSION;
    std::string CREATOR;
    std::string NAME;
    std::string DESCRIPTION;
    std::string AUTHOR_NAME;
    std::string AUTHOR_EMAIL;
    std::optional<GpxLink> AUTHOR_LINK;
    std::string COPYRIGHT_AUTHOR;
    std::string COPYRIGHT_YEAR;
    std::string COPYRIGHT_LICENSE;
    std::vector<GpxLink> LINKS;
    std::string TIME;
    std::string KEYWORDS;
    std::optional<double> BOUNDS_MIN_LAT;
    std::optional<double> BOUNDS_MIN_LON;
    std::optional<double> BOUNDS_MAX_LAT;
    std::optional<double> BOUNDS_MAX_LON;
    std::vector<GpxWaypoint> WAYPOINTS;
    std::vector<GpxRoute> ROUTES;
    std::vector<GpxTrack> TRACKS;
};

GpxMessage parse_gpx_xml(std::string_view text);
std::string write_gpx_xml(const GpxMessage& msg);

} // namespace ccsds
