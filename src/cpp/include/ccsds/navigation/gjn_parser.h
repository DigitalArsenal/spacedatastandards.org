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
    bool HAS_ALTITUDE = false;
};

struct GjnProperty {
    std::string KEY;
    std::string VALUE;
    double NUM_VALUE = 0;
    bool IS_NUMERIC = false;
    bool IS_BOOL = false;
    bool BOOL_VALUE = false;
    bool IS_NULL = false;
    std::string JSON_VALUE;
};

struct GjnBoundingBox {
    double WEST = 0;
    double SOUTH = 0;
    double EAST = 0;
    double NORTH = 0;
    double MIN_ALTITUDE = 0;
    double MAX_ALTITUDE = 0;
    bool HAS_ALTITUDE = false;
};

struct GjnGeometry {
    std::string TYPE; // Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection
    GjnPosition point;
    std::vector<GjnPosition> positions;
    std::vector<std::vector<GjnPosition>> rings;
    std::vector<std::vector<std::vector<GjnPosition>>> polygon_rings;
    std::vector<GjnGeometry> geometries;
    std::optional<GjnBoundingBox> BBOX;
};

struct GjnFeature {
    std::string ID;
    double NUM_ID = 0;
    bool ID_IS_NUMERIC = false;
    std::optional<GjnGeometry> GEOMETRY;
    bool HAS_GEOMETRY = true;
    std::vector<GjnProperty> PROPERTIES;
    bool PROPERTIES_IS_NULL = false;
    std::optional<GjnBoundingBox> BBOX;
};

struct GjnMessage {
    std::vector<GjnFeature> FEATURES;
    std::optional<GjnBoundingBox> BBOX;
};

GjnMessage parse_gjn_json(std::string_view text);
std::string write_gjn_json(const GjnMessage& msg);

} // namespace ccsds
