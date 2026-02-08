#pragma once
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <string>
#include <string_view>
#include <optional>
#include <vector>

namespace ccsds {

struct KmlCoordinate {
    double LONGITUDE = 0;
    double LATITUDE = 0;
    double ALTITUDE = 0;
};

struct KmlLookAt {
    double LONGITUDE = 0;
    double LATITUDE = 0;
    double ALTITUDE = 0;
    double HEADING = 0;
    double TILT = 0;
    double RANGE = 0;
    std::string ALTITUDE_MODE;
};

struct KmlIconStyle {
    std::string COLOR;
    double SCALE = 1.0;
    double HEADING = 0;
    std::string ICON_HREF;
};

struct KmlLineStyle {
    std::string COLOR;
    double WIDTH = 1.0;
};

struct KmlPolyStyle {
    std::string COLOR;
    bool FILL = true;
    bool OUTLINE = true;
};

struct KmlLabelStyle {
    std::string COLOR;
    double SCALE = 1.0;
};

struct KmlBalloonStyle {
    std::string BG_COLOR;
    std::string TEXT_COLOR;
    std::string TEXT;
};

struct KmlStyle {
    std::string ID;
    std::optional<KmlIconStyle> ICON_STYLE;
    std::optional<KmlLabelStyle> LABEL_STYLE;
    std::optional<KmlLineStyle> LINE_STYLE;
    std::optional<KmlPolyStyle> POLY_STYLE;
    std::optional<KmlBalloonStyle> BALLOON_STYLE;
};

struct KmlStyleMapPair {
    std::string STATE; // normal or highlight
    std::string STYLE_URL;
};

struct KmlStyleMap {
    std::string ID;
    std::vector<KmlStyleMapPair> PAIRS;
};

struct KmlPoint {
    KmlCoordinate COORDINATES;
    std::string ALTITUDE_MODE;
    bool EXTRUDE = false;
};

struct KmlLineString {
    std::vector<KmlCoordinate> COORDINATES;
    std::string ALTITUDE_MODE;
    bool EXTRUDE = false;
    bool TESSELLATE = false;
};

struct KmlLinearRing {
    std::vector<KmlCoordinate> COORDINATES;
};

struct KmlPolygon {
    KmlLinearRing OUTER_BOUNDARY;
    std::vector<KmlLinearRing> INNER_BOUNDARIES;
    std::string ALTITUDE_MODE;
    bool EXTRUDE = false;
    bool TESSELLATE = false;
};

struct KmlMultiGeometry {
    std::vector<KmlPoint> POINTS;
    std::vector<KmlLineString> LINE_STRINGS;
    std::vector<KmlPolygon> POLYGONS;
};

struct KmlTimeSpan {
    std::string BEGIN;
    std::string END;
};

struct KmlTimeStamp {
    std::string WHEN;
};

struct KmlData {
    std::string NAME;
    std::string DISPLAY_NAME;
    std::string VALUE;
};

struct KmlGroundOverlay {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::string ICON_HREF;
    std::string COLOR;
    double NORTH = 0;
    double SOUTH = 0;
    double EAST = 0;
    double WEST = 0;
    double ROTATION = 0;
    double ALTITUDE = 0;
    std::string ALTITUDE_MODE;
};

struct KmlPlacemark {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::string STYLE_URL;
    std::optional<KmlStyle> STYLE;
    std::string SNIPPET;
    std::optional<KmlPoint> POINT;
    std::optional<KmlLineString> LINE_STRING;
    std::optional<KmlPolygon> POLYGON;
    std::optional<KmlMultiGeometry> MULTI_GEOMETRY;
    std::optional<KmlLookAt> LOOK_AT;
    std::optional<KmlTimeSpan> TIME_SPAN;
    std::optional<KmlTimeStamp> TIME_STAMP;
    std::vector<KmlData> EXTENDED_DATA;
};

struct KmlFolder {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    bool OPEN = false;
    std::vector<KmlPlacemark> PLACEMARKS;
    std::vector<KmlFolder> FOLDERS;
    std::vector<KmlGroundOverlay> GROUND_OVERLAYS;
};

struct KmlMessage {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    bool OPEN = false;
    std::vector<KmlStyle> STYLES;
    std::vector<KmlStyleMap> STYLE_MAPS;
    std::vector<KmlPlacemark> PLACEMARKS;
    std::vector<KmlFolder> FOLDERS;
    std::vector<KmlGroundOverlay> GROUND_OVERLAYS;
};

KmlMessage parse_kml_xml(std::string_view text);
std::string write_kml_xml(const KmlMessage& msg);

} // namespace ccsds
