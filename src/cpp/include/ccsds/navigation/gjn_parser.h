#pragma once
#include "ccsds/json_parser.h"
#include "ccsds/json_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct GjnPosition {
    double LONGITUDE = 0;
    double LATITUDE = 0;
    double ALTITUDE = 0;
};

struct GjnProperty {
    std::string KEY;
    std::string VALUE;
    double NUM_VALUE = 0;
    bool IS_NUMERIC = false;
};

struct GjnGeometry {
    std::string TYPE; // Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection
    GjnPosition point;
    std::vector<GjnPosition> positions;
    std::vector<std::vector<GjnPosition>> rings;
    std::vector<std::vector<std::vector<GjnPosition>>> polygon_rings;
    std::vector<GjnGeometry> geometries;
};

struct GjnFeature {
    std::string ID;
    GjnGeometry GEOMETRY;
    std::vector<GjnProperty> PROPERTIES;
};

struct GjnBoundingBox {
    double WEST = 0;
    double SOUTH = 0;
    double EAST = 0;
    double NORTH = 0;
    double MIN_ALTITUDE = 0;
    double MAX_ALTITUDE = 0;
};

struct GjnMessage {
    std::vector<GjnFeature> FEATURES;
    std::optional<GjnBoundingBox> BBOX;
};

GjnMessage parse_gjn_json(std::string_view text);
std::string write_gjn_json(const GjnMessage& msg);

} // namespace ccsds
