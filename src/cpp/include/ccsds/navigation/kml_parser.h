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

struct KmlCamera {
    double LONGITUDE = 0;
    double LATITUDE = 0;
    double ALTITUDE = 0;
    double HEADING = 0;
    double TILT = 0;
    double ROLL = 0;
    std::string ALTITUDE_MODE;
};

struct KmlIconStyle {
    std::string COLOR;
    std::string COLOR_MODE;
    double SCALE = 1.0;
    double HEADING = 0;
    std::string ICON_HREF;
    double HOTSPOT_X = 0;
    double HOTSPOT_Y = 0;
    std::string HOTSPOT_X_UNITS;
    std::string HOTSPOT_Y_UNITS;
};

struct KmlLineStyle {
    std::string COLOR;
    std::string COLOR_MODE;
    double WIDTH = 1.0;
    std::string GX_OUTER_COLOR;
    double GX_OUTER_WIDTH = 0;
    double GX_PHYSICAL_WIDTH = 0;
    bool GX_LABEL_VISIBILITY = false;
};

struct KmlPolyStyle {
    std::string COLOR;
    std::string COLOR_MODE;
    bool FILL = true;
    bool OUTLINE = true;
};

struct KmlLabelStyle {
    std::string COLOR;
    std::string COLOR_MODE;
    double SCALE = 1.0;
};

struct KmlBalloonStyle {
    std::string BG_COLOR;
    std::string TEXT_COLOR;
    std::string TEXT;
    std::string DISPLAY_MODE;
};

struct KmlItemIcon {
    std::string STATE;
    std::string HREF;
};

struct KmlListStyle {
    std::string LIST_ITEM_TYPE;
    std::string BG_COLOR;
    std::vector<KmlItemIcon> ITEM_ICONS;
    int MAX_SNIPPET_LINES = 2;
};

struct KmlStyle {
    std::string ID;
    std::optional<KmlIconStyle> ICON_STYLE;
    std::optional<KmlLabelStyle> LABEL_STYLE;
    std::optional<KmlLineStyle> LINE_STYLE;
    std::optional<KmlPolyStyle> POLY_STYLE;
    std::optional<KmlBalloonStyle> BALLOON_STYLE;
    std::optional<KmlListStyle> LIST_STYLE;
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
    int GX_DRAW_ORDER = 0;
};

struct KmlLinearRing {
    std::vector<KmlCoordinate> COORDINATES;
    bool EXTRUDE = false;
    bool TESSELLATE = false;
    std::string ALTITUDE_MODE;
};

struct KmlPolygon {
    KmlLinearRing OUTER_BOUNDARY;
    std::vector<KmlLinearRing> INNER_BOUNDARIES;
    std::string ALTITUDE_MODE;
    bool EXTRUDE = false;
    bool TESSELLATE = false;
};

struct KmlResourceMapAlias {
    std::string TARGET_HREF;
    std::string SOURCE_HREF;
};

struct KmlModel {
    std::string ALTITUDE_MODE;
    double LOCATION_LON = 0;
    double LOCATION_LAT = 0;
    double LOCATION_ALT = 0;
    double ORIENTATION_HEADING = 0;
    double ORIENTATION_TILT = 0;
    double ORIENTATION_ROLL = 0;
    double SCALE_X = 1.0;
    double SCALE_Y = 1.0;
    double SCALE_Z = 1.0;
    std::string LINK_HREF;
    std::vector<KmlResourceMapAlias> RESOURCE_MAP;
};

struct KmlTrack {
    bool EXTRUDE = false;
    bool TESSELLATE = false;
    std::string ALTITUDE_MODE;
    std::vector<std::string> WHEN;
    std::vector<KmlCoordinate> COORDS;
    std::vector<KmlCoordinate> ANGLES;
    std::optional<KmlModel> MODEL;
};

struct KmlMultiTrack {
    std::string ALTITUDE_MODE;
    bool INTERPOLATE = false;
    std::vector<KmlTrack> TRACKS;
};

struct KmlMultiGeometry {
    std::vector<KmlPoint> POINTS;
    std::vector<KmlLineString> LINE_STRINGS;
    std::vector<KmlPolygon> POLYGONS;
    std::vector<KmlMultiGeometry> MULTI_GEOMETRIES;
    std::vector<KmlLinearRing> LINEAR_RINGS;
    std::vector<KmlModel> MODELS;
    std::vector<KmlTrack> TRACKS;
    std::vector<KmlMultiTrack> MULTI_TRACKS;
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

struct KmlSimpleField {
    std::string NAME;
    std::string FIELD_TYPE;
    std::string DISPLAY_NAME;
};

struct KmlSchema {
    std::string NAME;
    std::string ID;
    std::vector<KmlSimpleField> SIMPLE_FIELDS;
};

struct KmlSimpleData {
    std::string NAME;
    std::string VALUE;
};

struct KmlSchemaData {
    std::string SCHEMA_URL;
    std::vector<KmlSimpleData> SIMPLE_DATA;
};

struct KmlLatLonQuad {
    std::vector<KmlCoordinate> COORDINATES;
};

struct KmlLatLonAltBox {
    double NORTH = 0;
    double SOUTH = 0;
    double EAST = 0;
    double WEST = 0;
    double MIN_ALTITUDE = 0;
    double MAX_ALTITUDE = 0;
    std::string ALTITUDE_MODE;
};

struct KmlLod {
    double MIN_LOD_PIXELS = 0;
    double MAX_LOD_PIXELS = -1;
    double MIN_FADE_EXTENT = 0;
    double MAX_FADE_EXTENT = 0;
};

struct KmlRegion {
    std::optional<KmlLatLonAltBox> LAT_LON_ALT_BOX;
    std::optional<KmlLod> LOD;
};

struct KmlLink {
    std::string HREF;
    std::string REFRESH_MODE;
    double REFRESH_INTERVAL = 0;
    std::string VIEW_REFRESH_MODE;
    double VIEW_REFRESH_TIME = 0;
    double VIEW_BOUND_SCALE = 1.0;
    std::string VIEW_FORMAT;
    std::string HTTP_QUERY;
};

struct KmlViewVolume {
    double LEFT_FOV = 0;
    double RIGHT_FOV = 0;
    double BOTTOM_FOV = 0;
    double TOP_FOV = 0;
    double NEAR = 0;
};

struct KmlImagePyramid {
    int TILE_SIZE = 256;
    int MAX_WIDTH = 0;
    int MAX_HEIGHT = 0;
    std::string GRID_ORIGIN;
};

struct KmlGroundOverlay {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    bool OPEN = false;
    std::string ICON_HREF;
    std::string COLOR;
    double NORTH = 0;
    double SOUTH = 0;
    double EAST = 0;
    double WEST = 0;
    double ROTATION = 0;
    double ALTITUDE = 0;
    std::string ALTITUDE_MODE;
    int DRAW_ORDER = 0;
    std::optional<KmlLatLonQuad> LAT_LON_QUAD;
    std::string STYLE_URL;
    std::optional<KmlRegion> REGION;
};

struct KmlNetworkLink {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    bool OPEN = false;
    std::string HREF;
    std::string REFRESH_MODE;
    double REFRESH_INTERVAL = 0;
    std::string VIEW_REFRESH_MODE;
    double VIEW_REFRESH_TIME = 0;
    bool REFRESH_VISIBILITY = false;
    bool FLY_TO_VIEW = false;
    std::optional<KmlLink> LINK;
};

struct KmlScreenOverlay {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::string ICON_HREF;
    std::string COLOR;
    int DRAW_ORDER = 0;
    double OVERLAY_XY_X = 0;
    double OVERLAY_XY_Y = 0;
    std::string OVERLAY_XY_XUNITS;
    std::string OVERLAY_XY_YUNITS;
    double SCREEN_XY_X = 0;
    double SCREEN_XY_Y = 0;
    std::string SCREEN_XY_XUNITS;
    std::string SCREEN_XY_YUNITS;
    double ROTATION_XY_X = 0;
    double ROTATION_XY_Y = 0;
    std::string ROTATION_XY_XUNITS;
    std::string ROTATION_XY_YUNITS;
    double SIZE_X = 0;
    double SIZE_Y = 0;
    std::string SIZE_XUNITS;
    std::string SIZE_YUNITS;
    double ROTATION = 0;
};

struct KmlPhotoOverlay {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::string ICON_HREF;
    std::string COLOR;
    int DRAW_ORDER = 0;
    double ROTATION = 0;
    std::optional<KmlViewVolume> VIEW_VOLUME;
    std::optional<KmlImagePyramid> IMAGE_PYRAMID;
    std::optional<KmlPoint> POINT;
    std::string SHAPE;
};

struct KmlUpdate {
    std::string TARGET_HREF;
    std::string CHANGE_KML;
    std::string CREATE_KML;
    std::string DELETE_KML;
};

struct KmlNetworkLinkControl {
    double MIN_REFRESH_PERIOD = 0;
    double MAX_SESSION_LENGTH = -1;
    std::string COOKIE;
    std::string MESSAGE;
    std::string LINK_NAME;
    std::string LINK_DESCRIPTION;
    std::string LINK_SNIPPET;
    std::string EXPIRES;
    std::optional<KmlUpdate> UPDATE;
    std::optional<KmlLookAt> LOOK_AT;
    std::optional<KmlCamera> CAMERA;
};

struct KmlFlyTo {
    double DURATION = 0;
    std::string FLY_TO_MODE;
    std::optional<KmlLookAt> LOOK_AT;
    std::optional<KmlCamera> CAMERA;
};

struct KmlWait {
    double DURATION = 0;
};

struct KmlAnimatedUpdate {
    double DURATION = 0;
    double DELAYED_START = 0;
    std::optional<KmlUpdate> UPDATE;
};

struct KmlTourControl {
    std::string PLAY_MODE;
};

struct KmlSoundCue {
    std::string HREF;
    double DELAYED_START = 0;
};

struct KmlTourPrimitive {
    std::optional<KmlFlyTo> FLY_TO;
    std::optional<KmlWait> WAIT;
    std::optional<KmlAnimatedUpdate> ANIMATED_UPDATE;
    std::optional<KmlTourControl> TOUR_CONTROL;
    std::optional<KmlSoundCue> SOUND_CUE;
};

struct KmlPlaylist {
    std::vector<KmlTourPrimitive> PRIMITIVES;
};

struct KmlTour {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::optional<KmlPlaylist> PLAYLIST;
};

struct KmlPlacemark {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    std::string STYLE_URL;
    std::optional<KmlStyle> STYLE;
    std::string SNIPPET;
    bool OPEN = false;
    std::string ADDRESS;
    std::optional<KmlPoint> POINT;
    std::optional<KmlLineString> LINE_STRING;
    std::optional<KmlPolygon> POLYGON;
    std::optional<KmlLinearRing> LINEAR_RING;
    std::optional<KmlMultiGeometry> MULTI_GEOMETRY;
    std::optional<KmlModel> MODEL;
    std::optional<KmlTrack> TRACK;
    std::optional<KmlMultiTrack> MULTI_TRACK;
    std::optional<KmlLookAt> LOOK_AT;
    std::optional<KmlCamera> CAMERA;
    std::optional<KmlTimeSpan> TIME_SPAN;
    std::optional<KmlTimeStamp> TIME_STAMP;
    std::vector<KmlData> EXTENDED_DATA;
    std::optional<KmlSchemaData> SCHEMA_DATA;
    std::optional<KmlRegion> REGION;
    std::optional<KmlStyleMap> STYLE_MAP;
};

struct KmlFolder {
    std::string NAME;
    std::string DESCRIPTION;
    bool VISIBILITY = true;
    bool OPEN = false;
    std::vector<KmlPlacemark> PLACEMARKS;
    std::vector<KmlFolder> FOLDERS;
    std::vector<KmlNetworkLink> NETWORK_LINKS;
    std::vector<KmlGroundOverlay> GROUND_OVERLAYS;
    std::vector<KmlStyle> STYLES;
    std::vector<KmlStyleMap> STYLE_MAPS;
    std::vector<KmlScreenOverlay> SCREEN_OVERLAYS;
    std::vector<KmlPhotoOverlay> PHOTO_OVERLAYS;
    std::vector<KmlTour> TOURS;
    std::string STYLE_URL;
    std::optional<KmlRegion> REGION;
    std::vector<KmlData> EXTENDED_DATA;
    std::optional<KmlLookAt> LOOK_AT;
    std::optional<KmlCamera> CAMERA;
    std::optional<KmlTimeSpan> TIME_SPAN;
    std::optional<KmlTimeStamp> TIME_STAMP;
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
    std::vector<KmlNetworkLink> NETWORK_LINKS;
    std::vector<KmlGroundOverlay> GROUND_OVERLAYS;
    std::vector<KmlSchema> SCHEMAS;
    std::vector<KmlScreenOverlay> SCREEN_OVERLAYS;
    std::vector<KmlPhotoOverlay> PHOTO_OVERLAYS;
    std::vector<KmlTour> TOURS;
    std::optional<KmlNetworkLinkControl> NETWORK_LINK_CONTROL;
};

KmlMessage parse_kml_xml(std::string_view text);
std::string write_kml_xml(const KmlMessage& msg);

} // namespace ccsds
