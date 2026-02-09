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

struct CzmNearFarScalar {
    double NEAR_DISTANCE = 0;
    double NEAR_VALUE = 0;
    double FAR_DISTANCE = 0;
    double FAR_VALUE = 0;
};

struct CzmOrientation {
    double UNIT_QUATERNION_X = 0;
    double UNIT_QUATERNION_Y = 0;
    double UNIT_QUATERNION_Z = 0;
    double UNIT_QUATERNION_W = 1;
};

struct CzmViewFrom {
    double X = 0;
    double Y = 0;
    double Z = 0;
};

// ---- Interpolation & Time-Dynamic ----

struct CzmInterpolation {
    std::string ALGORITHM;
    int DEGREE = 1;
};

struct CzmDynInterval {
    std::string INTERVAL;
    std::string VALUE_TYPE; // NUMBER, BOOLEAN, STRING, COLOR, CARTESIAN3, CARTESIAN2, NEAR_FAR_SCALAR, UNIT_QUATERNION
    double NUMBER_VALUE = 0;
    bool BOOLEAN_VALUE = false;
    std::string STRING_VALUE;
    std::optional<CzmColor> COLOR_VALUE;
    std::vector<double> ARRAY_VALUE;
};

struct CzmDynSampled {
    std::string EPOCH;
    std::string VALUE_TYPE;
    std::vector<double> DATA;
    std::optional<CzmInterpolation> INTERPOLATION;
};

struct CzmDynamicProperty {
    std::string NAME;
    std::optional<CzmDynSampled> SAMPLED;
    std::vector<CzmDynInterval> INTERVALS;
    std::string REFERENCE;
};

// ---- Material System ----

struct CzmSolidColorMaterial {
    std::optional<CzmColor> COLOR;
};

struct CzmImageMaterial {
    std::string IMAGE;
    double REPEAT_X = 1;
    double REPEAT_Y = 1;
    std::optional<CzmColor> COLOR;
    bool TRANSPARENT = false;
};

struct CzmGridMaterial {
    std::optional<CzmColor> COLOR;
    double CELL_ALPHA = 0.1;
    double LINE_COUNT_X = 8;
    double LINE_COUNT_Y = 8;
    double LINE_THICKNESS_X = 1;
    double LINE_THICKNESS_Y = 1;
    double LINE_OFFSET_X = 0;
    double LINE_OFFSET_Y = 0;
};

struct CzmStripeMaterial {
    std::string ORIENTATION;
    std::optional<CzmColor> EVEN_COLOR;
    std::optional<CzmColor> ODD_COLOR;
    double OFFSET = 0;
    double REPEAT_COUNT = 1;
};

struct CzmCheckerboardMaterial {
    std::optional<CzmColor> EVEN_COLOR;
    std::optional<CzmColor> ODD_COLOR;
    double REPEAT_X = 2;
    double REPEAT_Y = 2;
};

struct CzmMaterial {
    std::optional<CzmSolidColorMaterial> SOLID_COLOR;
    std::optional<CzmImageMaterial> IMAGE;
    std::optional<CzmGridMaterial> GRID;
    std::optional<CzmStripeMaterial> STRIPE;
    std::optional<CzmCheckerboardMaterial> CHECKERBOARD;
};

struct CzmPolylineOutlineMaterial {
    std::optional<CzmColor> COLOR;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
};

struct CzmPolylineArrowMaterial {
    std::optional<CzmColor> COLOR;
};

struct CzmPolylineDashMaterial {
    std::optional<CzmColor> COLOR;
    std::optional<CzmColor> GAP_COLOR;
    double DASH_LENGTH = 16;
    int DASH_PATTERN = 255;
};

struct CzmPolylineGlowMaterial {
    std::optional<CzmColor> COLOR;
    double GLOW_POWER = 0.25;
    double TAPER_POWER = 1.0;
};

struct CzmPolylineMaterial {
    std::optional<CzmSolidColorMaterial> SOLID_COLOR;
    std::optional<CzmPolylineOutlineMaterial> POLYLINE_OUTLINE;
    std::optional<CzmPolylineArrowMaterial> POLYLINE_ARROW;
    std::optional<CzmPolylineDashMaterial> POLYLINE_DASH;
    std::optional<CzmPolylineGlowMaterial> POLYLINE_GLOW;
};

// ---- Entity Types ----

struct CzmBillboard {
    bool SHOW = true;
    std::string IMAGE;
    double SCALE = 1.0;
    std::optional<CzmColor> COLOR;
    std::string HEIGHT_REFERENCE;
    double PIXEL_OFFSET_X = 0;
    double PIXEL_OFFSET_Y = 0;
    std::string HORIZONTAL_ORIGIN;
    std::string VERTICAL_ORIGIN;
    std::optional<CzmNearFarScalar> TRANSLUCENCY_BY_DISTANCE;
    double ROTATION = 0;
    bool SIZE_IN_METERS = false;
    double WIDTH = 0;
    double HEIGHT = 0;
    double EYE_OFFSET_X = 0;
    double EYE_OFFSET_Y = 0;
    double EYE_OFFSET_Z = 0;
    std::optional<CzmNearFarScalar> SCALE_BY_DISTANCE;
    std::optional<CzmNearFarScalar> PIXEL_OFFSET_SCALE_BY_DISTANCE;
    double DISTANCE_DISPLAY_CONDITION_NEAR = 0;
    double DISTANCE_DISPLAY_CONDITION_FAR = 0;
    double DISABLE_DEPTH_TEST_DISTANCE = 0;
};

struct CzmLabel {
    bool SHOW = true;
    std::string TEXT;
    std::string FONT;
    std::string STYLE;
    double SCALE = 1.0;
    std::optional<CzmColor> FILL_COLOR;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 0;
    double PIXEL_OFFSET_X = 0;
    double PIXEL_OFFSET_Y = 0;
    std::string HORIZONTAL_ORIGIN;
    std::string VERTICAL_ORIGIN;
    std::string HEIGHT_REFERENCE;
    bool SHOW_BACKGROUND = false;
    std::optional<CzmColor> BACKGROUND_COLOR;
    double BACKGROUND_PADDING_X = 0;
    double BACKGROUND_PADDING_Y = 0;
    double EYE_OFFSET_X = 0;
    double EYE_OFFSET_Y = 0;
    double EYE_OFFSET_Z = 0;
    std::optional<CzmNearFarScalar> TRANSLUCENCY_BY_DISTANCE;
    std::optional<CzmNearFarScalar> PIXEL_OFFSET_SCALE_BY_DISTANCE;
    std::optional<CzmNearFarScalar> SCALE_BY_DISTANCE;
    double DISTANCE_DISPLAY_CONDITION_NEAR = 0;
    double DISTANCE_DISPLAY_CONDITION_FAR = 0;
    double DISABLE_DEPTH_TEST_DISTANCE = 0;
};

struct CzmPoint {
    bool SHOW = true;
    std::optional<CzmColor> COLOR;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 0;
    double PIXEL_SIZE = 1;
    std::string HEIGHT_REFERENCE;
    std::optional<CzmNearFarScalar> SCALE_BY_DISTANCE;
    std::optional<CzmNearFarScalar> TRANSLUCENCY_BY_DISTANCE;
    double DISTANCE_DISPLAY_CONDITION_NEAR = 0;
    double DISTANCE_DISPLAY_CONDITION_FAR = 0;
    double DISABLE_DEPTH_TEST_DISTANCE = 0;
};

struct CzmPolyline {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    double WIDTH = 1;
    std::optional<CzmColor> COLOR;
    bool CLAMP_TO_GROUND = false;
    std::string ARC_TYPE;
    double GRANULARITY = 0;
    std::optional<CzmPolylineMaterial> MATERIAL;
    std::string SHADOWS;
    std::optional<CzmPolylineMaterial> DEPTH_FAIL_MATERIAL;
    std::string CLASSIFICATION_TYPE;
    int Z_INDEX = 0;
};

struct CzmPolygonHole {
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
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
    std::string HEIGHT_REFERENCE;
    std::string CLASSIFICATION_TYPE;
    std::vector<CzmPolygonHole> HOLES;
    std::string ARC_TYPE;
    double HEIGHT = 0;
    std::string EXTRUDED_HEIGHT_REFERENCE;
    double ST_ROTATION = 0;
    double GRANULARITY = 0;
    std::optional<CzmMaterial> MATERIAL;
    double OUTLINE_WIDTH = 0;
    bool PER_POSITION_HEIGHT = false;
    bool CLOSE_TOP = true;
    bool CLOSE_BOTTOM = true;
    std::string SHADOWS;
    int Z_INDEX = 0;
};

struct CzmPath {
    bool SHOW = true;
    double LEAD_TIME = 0;
    double TRAIL_TIME = 0;
    double WIDTH = 1;
    std::optional<CzmColor> COLOR;
    double RESOLUTION = 60;
    std::optional<CzmPolylineMaterial> MATERIAL;
};

struct CzmModel {
    bool SHOW = true;
    std::string GLTF;
    double SCALE = 1.0;
    double MINIMUM_PIXEL_SIZE = 0;
    double MAXIMUM_SCALE = 0;
    std::string HEIGHT_REFERENCE;
    std::optional<CzmColor> COLOR;
    bool INCREMENTALLY_LOAD_TEXTURES = true;
    bool RUN_ANIMATIONS = true;
    std::string SHADOWS;
    std::optional<CzmColor> SILHOUETTE_COLOR;
    double SILHOUETTE_SIZE = 0;
    std::string COLOR_BLEND_MODE;
    double COLOR_BLEND_AMOUNT = 0.5;
};

struct CzmEllipse {
    bool SHOW = true;
    double SEMI_MAJOR_AXIS = 0;
    double SEMI_MINOR_AXIS = 0;
    double ROTATION = 0;
    bool FILL = true;
    std::optional<CzmColor> COLOR;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double HEIGHT = 0;
    std::string HEIGHT_REFERENCE;
    double EXTRUDED_HEIGHT = 0;
    std::string EXTRUDED_HEIGHT_REFERENCE;
    double ST_ROTATION = 0;
    double GRANULARITY = 0;
    std::optional<CzmMaterial> MATERIAL;
    double OUTLINE_WIDTH = 0;
    int NUMBER_OF_VERTICAL_LINES = 0;
    std::string SHADOWS;
    std::string CLASSIFICATION_TYPE;
    int Z_INDEX = 0;
};

// ---- New Entity Types ----

struct CzmBox {
    bool SHOW = true;
    double DIMENSIONS_X = 0;
    double DIMENSIONS_Y = 0;
    double DIMENSIONS_Z = 0;
    std::string HEIGHT_REFERENCE;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    std::string SHADOWS;
    double DISTANCE_DISPLAY_CONDITION_NEAR = 0;
    double DISTANCE_DISPLAY_CONDITION_FAR = 0;
};

struct CzmCorridor {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    double WIDTH = 0;
    double HEIGHT = 0;
    std::string HEIGHT_REFERENCE;
    double EXTRUDED_HEIGHT = 0;
    std::string EXTRUDED_HEIGHT_REFERENCE;
    std::string CORNER_TYPE;
    double GRANULARITY = 0;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    std::string SHADOWS;
    std::string CLASSIFICATION_TYPE;
    int Z_INDEX = 0;
};

struct CzmCylinder {
    bool SHOW = true;
    double LENGTH = 0;
    double TOP_RADIUS = 0;
    double BOTTOM_RADIUS = 0;
    std::string HEIGHT_REFERENCE;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    int NUMBER_OF_VERTICAL_LINES = 16;
    int SLICES = 128;
    std::string SHADOWS;
};

struct CzmEllipsoidEntity {
    bool SHOW = true;
    double RADII_X = 0;
    double RADII_Y = 0;
    double RADII_Z = 0;
    double INNER_RADII_X = 0;
    double INNER_RADII_Y = 0;
    double INNER_RADII_Z = 0;
    double MINIMUM_CLOCK = 0;
    double MAXIMUM_CLOCK = 0;
    double MINIMUM_CONE = 0;
    double MAXIMUM_CONE = 0;
    std::string HEIGHT_REFERENCE;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    int STACK_PARTITIONS = 64;
    int SLICE_PARTITIONS = 64;
    int SUBDIVISIONS = 128;
    std::string SHADOWS;
};

struct CzmPolylineVolume {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    std::vector<double> SHAPE;
    std::string CORNER_TYPE;
    double GRANULARITY = 0;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    std::string SHADOWS;
};

struct CzmRectangle {
    bool SHOW = true;
    std::vector<double> COORDINATES_WSEN_DEGREES;
    double HEIGHT = 0;
    std::string HEIGHT_REFERENCE;
    double EXTRUDED_HEIGHT = 0;
    std::string EXTRUDED_HEIGHT_REFERENCE;
    double ROTATION = 0;
    double ST_ROTATION = 0;
    double GRANULARITY = 0;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    std::string SHADOWS;
    std::string CLASSIFICATION_TYPE;
    int Z_INDEX = 0;
};

struct CzmTileset {
    bool SHOW = true;
    std::string URI;
    double MAXIMUM_SCREEN_SPACE_ERROR = 0;
};

struct CzmWall {
    bool SHOW = true;
    std::vector<double> POSITIONS_CARTOGRAPHIC_DEGREES;
    std::vector<double> POSITIONS_CARTESIAN;
    std::vector<double> MINIMUM_HEIGHTS;
    std::vector<double> MAXIMUM_HEIGHTS;
    double GRANULARITY = 0;
    bool FILL = true;
    std::optional<CzmMaterial> MATERIAL;
    bool OUTLINE = false;
    std::optional<CzmColor> OUTLINE_COLOR;
    double OUTLINE_WIDTH = 1;
    std::string SHADOWS;
};

// ---- Packet & Message ----

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
    std::optional<CzmEllipse> ELLIPSE;
    std::optional<CzmOrientation> ORIENTATION;
    std::optional<CzmViewFrom> VIEW_FROM;
    bool DELETE = false;
    std::optional<CzmBox> BOX;
    std::optional<CzmCorridor> CORRIDOR;
    std::optional<CzmCylinder> CYLINDER;
    std::optional<CzmEllipsoidEntity> ELLIPSOID;
    std::optional<CzmPolylineVolume> POLYLINE_VOLUME;
    std::optional<CzmRectangle> RECTANGLE;
    std::optional<CzmTileset> TILESET;
    std::optional<CzmWall> WALL;
    // Time-dynamic position
    std::optional<CzmInterpolation> POSITION_INTERPOLATION;
    std::string POSITION_REFERENCE_FRAME;
    std::string POSITION_REFERENCE;
    // Time-dynamic orientation
    std::string ORIENTATION_EPOCH;
    std::vector<double> ORIENTATION_ARRAY;
    std::optional<CzmInterpolation> ORIENTATION_INTERPOLATION;
    std::string ORIENTATION_REFERENCE;
    // Generic dynamic properties bag
    std::vector<CzmDynamicProperty> DYNAMIC_PROPERTIES;
};

struct CzmMessage {
    std::string NAME;
    std::string VERSION;
    std::string CLOCK_CURRENT_TIME;
    std::string CLOCK_INTERVAL;
    double CLOCK_MULTIPLIER = 1.0;
    std::string CLOCK_RANGE;
    std::string CLOCK_STEP;
    std::vector<CzmPacket> PACKETS;
};

CzmMessage parse_czm_json(std::string_view text);
std::string write_czm_json(const CzmMessage& msg);

} // namespace ccsds
