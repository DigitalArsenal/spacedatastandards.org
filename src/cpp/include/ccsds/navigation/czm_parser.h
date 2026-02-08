#pragma once
#include "ccsds/json_parser.h"
#include "ccsds/json_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct CzmColor {
    int RED = 255;
    int GREEN = 255;
    int BLUE = 255;
    int ALPHA = 255;
};

struct CzmCartographicDegrees {
    double LONGITUDE = 0;
    double LATITUDE = 0;
    double HEIGHT = 0;
};

struct CzmCartesian {
    double X = 0;
    double Y = 0;
    double Z = 0;
};

struct CzmBillboard {
    bool SHOW = true;
    std::string IMAGE;
    double SCALE = 1.0;
    std::optional<CzmColor> COLOR;
};

struct CzmLabel {
    bool SHOW = true;
    std::string TEXT;
    std::string FONT;
    double SCALE = 1.0;
    std::optional<CzmColor> FILL_COLOR;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 0;
    double PIXEL_OFFSET_X = 0;
    double PIXEL_OFFSET_Y = 0;
};

struct CzmPoint {
    bool SHOW = true;
    std::optional<CzmColor> COLOR;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 0;
    double PIXEL_SIZE = 1;
};

struct CzmPolyline {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    double WIDTH = 1;
    std::optional<CzmColor> COLOR;
    bool CLAMP_TO_GROUND = false;
};

struct CzmPolygon {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    bool FILL = true;
    std::optional<CzmColor> COLOR;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double EXTRUDED_HEIGHT = 0;
};

struct CzmPath {
    bool SHOW = true;
    double LEAD_TIME = 0;
    double TRAIL_TIME = 0;
    double WIDTH = 1;
    std::optional<CzmColor> COLOR;
    double RESOLUTION = 60;
};

struct CzmModel {
    bool SHOW = true;
    std::string GLTF;
    double SCALE = 1.0;
    double MINIMUM_PIXEL_SIZE = 0;
    double MAXIMUM_SCALE = 0;
};

struct CzmPacket {
    std::string ID;
    std::string NAME;
    std::string PARENT;
    std::string DESCRIPTION;
    std::string AVAILABILITY;
    std::optional<CzmCartographicDegrees> POSITION_CARTOGRAPHIC_DEGREES;
    std::optional<CzmCartesian> POSITION_CARTESIAN;
    std::string POSITION_EPOCH;
    std::vector<double> POSITION_CARTOGRAPHIC_DEGREES_ARRAY;
    std::vector<double> POSITION_CARTESIAN_ARRAY;
    std::optional<CzmBillboard> BILLBOARD;
    std::optional<CzmLabel> LABEL;
    std::optional<CzmPoint> POINT;
    std::optional<CzmPolyline> POLYLINE;
    std::optional<CzmPolygon> POLYGON;
    std::optional<CzmModel> MODEL;
    std::optional<CzmPath> PATH;
};

struct CzmMessage {
    std::string NAME;
    std::string VERSION;
    std::string CLOCK_CURRENT_TIME;
    std::string CLOCK_INTERVAL;
    double CLOCK_MULTIPLIER = 1.0;
    std::vector<CzmPacket> PACKETS;
};

CzmMessage parse_czm_json(std::string_view text);
std::string write_czm_json(const CzmMessage& msg);

} // namespace ccsds
