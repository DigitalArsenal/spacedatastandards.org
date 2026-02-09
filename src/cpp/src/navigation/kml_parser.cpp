#include "ccsds/navigation/kml_parser.h"
#include <stdexcept>
#include <sstream>

namespace ccsds {

static std::optional<double> opt_num(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stod(*v);
}

static std::optional<int> opt_int(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stoi(*v);
}

static std::string strip_ns(const std::string& tag) {
    auto colon = tag.rfind(':');
    if (colon != std::string::npos) return tag.substr(colon + 1);
    return tag;
}

static std::vector<KmlCoordinate> parse_coordinates(const std::string& text) {
    std::vector<KmlCoordinate> coords;
    std::istringstream iss(text);
    std::string tuple;
    while (iss >> tuple) {
        if (tuple.empty()) continue;
        KmlCoordinate c;
        // Format: lon,lat,alt or lon,lat
        auto p1 = tuple.find(',');
        if (p1 == std::string::npos) continue;
        c.LONGITUDE = std::stod(tuple.substr(0, p1));
        auto p2 = tuple.find(',', p1 + 1);
        if (p2 == std::string::npos) {
            c.LATITUDE = std::stod(tuple.substr(p1 + 1));
        } else {
            c.LATITUDE = std::stod(tuple.substr(p1 + 1, p2 - p1 - 1));
            c.ALTITUDE = std::stod(tuple.substr(p2 + 1));
        }
        coords.push_back(c);
    }
    return coords;
}

static std::string coords_to_string(const std::vector<KmlCoordinate>& coords) {
    std::string result;
    for (size_t i = 0; i < coords.size(); i++) {
        if (i > 0) result += " ";
        result += std::to_string(coords[i].LONGITUDE) + "," +
                  std::to_string(coords[i].LATITUDE) + "," +
                  std::to_string(coords[i].ALTITUDE);
    }
    return result;
}

static std::string coord_to_string(const KmlCoordinate& c) {
    return std::to_string(c.LONGITUDE) + "," + std::to_string(c.LATITUDE) + "," + std::to_string(c.ALTITUDE);
}

// Parse a gx:coord element: "lon lat alt" (space separated, unlike coordinates which is comma separated)
static KmlCoordinate parse_gx_coord(const std::string& text) {
    KmlCoordinate c;
    std::istringstream iss(text);
    iss >> c.LONGITUDE >> c.LATITUDE >> c.ALTITUDE;
    return c;
}

static std::string gx_coord_to_string(const KmlCoordinate& c) {
    return std::to_string(c.LONGITUDE) + " " + std::to_string(c.LATITUDE) + " " + std::to_string(c.ALTITUDE);
}

// Parse a gx:angles element: "heading tilt roll" (space separated)
static KmlCoordinate parse_gx_angles(const std::string& text) {
    KmlCoordinate c;
    std::istringstream iss(text);
    iss >> c.LONGITUDE >> c.LATITUDE >> c.ALTITUDE; // heading=LON, tilt=LAT, roll=ALT
    return c;
}

// ===================== Style Parsers =====================

static KmlIconStyle parse_icon_style(const XmlElement& el) {
    KmlIconStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.COLOR_MODE = get_child_text(el, "colorMode").value_or("");
    s.SCALE = opt_num(get_child_text(el, "scale")).value_or(1.0);
    s.HEADING = opt_num(get_child_text(el, "heading")).value_or(0);
    auto* icon = find_child(el, "Icon");
    if (icon) s.ICON_HREF = get_child_text(*icon, "href").value_or("");
    auto* hotSpot = find_child(el, "hotSpot");
    if (hotSpot) {
        s.HOTSPOT_X = opt_num(get_attribute(*hotSpot, "x")).value_or(0);
        s.HOTSPOT_Y = opt_num(get_attribute(*hotSpot, "y")).value_or(0);
        s.HOTSPOT_X_UNITS = get_attribute(*hotSpot, "xunits").value_or("");
        s.HOTSPOT_Y_UNITS = get_attribute(*hotSpot, "yunits").value_or("");
    }
    return s;
}

static KmlLineStyle parse_line_style(const XmlElement& el) {
    KmlLineStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.COLOR_MODE = get_child_text(el, "colorMode").value_or("");
    s.WIDTH = opt_num(get_child_text(el, "width")).value_or(1.0);
    // gx: extensions
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "outerColor") s.GX_OUTER_COLOR = child.text;
        else if (tag == "outerWidth") s.GX_OUTER_WIDTH = std::stod(child.text);
        else if (tag == "physicalWidth") s.GX_PHYSICAL_WIDTH = std::stod(child.text);
        else if (tag == "labelVisibility") s.GX_LABEL_VISIBILITY = child.text == "1";
    }
    return s;
}

static KmlPolyStyle parse_poly_style(const XmlElement& el) {
    KmlPolyStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.COLOR_MODE = get_child_text(el, "colorMode").value_or("");
    auto fill_str = get_child_text(el, "fill");
    s.FILL = !fill_str || *fill_str != "0";
    auto outline_str = get_child_text(el, "outline");
    s.OUTLINE = !outline_str || *outline_str != "0";
    return s;
}

static KmlLabelStyle parse_label_style(const XmlElement& el) {
    KmlLabelStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.COLOR_MODE = get_child_text(el, "colorMode").value_or("");
    s.SCALE = opt_num(get_child_text(el, "scale")).value_or(1.0);
    return s;
}

static KmlBalloonStyle parse_balloon_style(const XmlElement& el) {
    KmlBalloonStyle s;
    s.BG_COLOR = get_child_text(el, "bgColor").value_or("");
    s.TEXT_COLOR = get_child_text(el, "textColor").value_or("");
    s.TEXT = get_child_text(el, "text").value_or("");
    s.DISPLAY_MODE = get_child_text(el, "displayMode").value_or("");
    return s;
}

static KmlListStyle parse_list_style(const XmlElement& el) {
    KmlListStyle s;
    s.LIST_ITEM_TYPE = get_child_text(el, "listItemType").value_or("");
    s.BG_COLOR = get_child_text(el, "bgColor").value_or("");
    s.MAX_SNIPPET_LINES = opt_int(get_child_text(el, "maxSnippetLines")).value_or(2);
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "ItemIcon") {
            KmlItemIcon ii;
            ii.STATE = get_child_text(child, "state").value_or("");
            ii.HREF = get_child_text(child, "href").value_or("");
            s.ITEM_ICONS.push_back(std::move(ii));
        }
    }
    return s;
}

static KmlStyle parse_style(const XmlElement& el) {
    KmlStyle style;
    style.ID = get_attribute(el, "id").value_or("");
    auto* iconStyle = find_child(el, "IconStyle");
    if (iconStyle) style.ICON_STYLE = parse_icon_style(*iconStyle);
    auto* labelStyle = find_child(el, "LabelStyle");
    if (labelStyle) style.LABEL_STYLE = parse_label_style(*labelStyle);
    auto* lineStyle = find_child(el, "LineStyle");
    if (lineStyle) style.LINE_STYLE = parse_line_style(*lineStyle);
    auto* polyStyle = find_child(el, "PolyStyle");
    if (polyStyle) style.POLY_STYLE = parse_poly_style(*polyStyle);
    auto* balloonStyle = find_child(el, "BalloonStyle");
    if (balloonStyle) style.BALLOON_STYLE = parse_balloon_style(*balloonStyle);
    auto* listStyle = find_child(el, "ListStyle");
    if (listStyle) style.LIST_STYLE = parse_list_style(*listStyle);
    return style;
}

static KmlStyleMap parse_style_map(const XmlElement& el) {
    KmlStyleMap sm;
    sm.ID = get_attribute(el, "id").value_or("");
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "Pair") {
            KmlStyleMapPair pair;
            pair.STATE = get_child_text(child, "key").value_or("");
            pair.STYLE_URL = get_child_text(child, "styleUrl").value_or("");
            sm.PAIRS.push_back(std::move(pair));
        }
    }
    return sm;
}

// ===================== Geometry Parsers =====================

static KmlPoint parse_point(const XmlElement& el) {
    KmlPoint pt;
    auto coord_text = get_child_text(el, "coordinates").value_or("");
    auto coords = parse_coordinates(coord_text);
    if (!coords.empty()) pt.COORDINATES = coords[0];
    pt.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    auto extrude_str = get_child_text(el, "extrude");
    pt.EXTRUDE = extrude_str && *extrude_str == "1";
    return pt;
}

static KmlLineString parse_line_string(const XmlElement& el) {
    KmlLineString ls;
    auto coord_text = get_child_text(el, "coordinates").value_or("");
    ls.COORDINATES = parse_coordinates(coord_text);
    ls.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    auto extrude_str = get_child_text(el, "extrude");
    ls.EXTRUDE = extrude_str && *extrude_str == "1";
    auto tess_str = get_child_text(el, "tessellate");
    ls.TESSELLATE = tess_str && *tess_str == "1";
    // gx:drawOrder
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "drawOrder") ls.GX_DRAW_ORDER = std::stoi(child.text);
    }
    return ls;
}

static KmlLinearRing parse_linear_ring(const XmlElement& el) {
    KmlLinearRing ring;
    auto coord_text = get_child_text(el, "coordinates").value_or("");
    ring.COORDINATES = parse_coordinates(coord_text);
    auto extrude_str = get_child_text(el, "extrude");
    ring.EXTRUDE = extrude_str && *extrude_str == "1";
    auto tess_str = get_child_text(el, "tessellate");
    ring.TESSELLATE = tess_str && *tess_str == "1";
    ring.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    return ring;
}

static KmlPolygon parse_polygon(const XmlElement& el) {
    KmlPolygon pg;
    auto* outer = find_child(el, "outerBoundaryIs");
    if (outer) {
        auto* ring = find_child(*outer, "LinearRing");
        if (ring) pg.OUTER_BOUNDARY = parse_linear_ring(*ring);
    }
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "innerBoundaryIs") {
            auto* ring = find_child(child, "LinearRing");
            if (ring) pg.INNER_BOUNDARIES.push_back(parse_linear_ring(*ring));
        }
    }
    pg.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    auto extrude_str = get_child_text(el, "extrude");
    pg.EXTRUDE = extrude_str && *extrude_str == "1";
    auto tess_str = get_child_text(el, "tessellate");
    pg.TESSELLATE = tess_str && *tess_str == "1";
    return pg;
}

static KmlModel parse_model(const XmlElement& el) {
    KmlModel m;
    m.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    auto* loc = find_child(el, "Location");
    if (loc) {
        m.LOCATION_LON = opt_num(get_child_text(*loc, "longitude")).value_or(0);
        m.LOCATION_LAT = opt_num(get_child_text(*loc, "latitude")).value_or(0);
        m.LOCATION_ALT = opt_num(get_child_text(*loc, "altitude")).value_or(0);
    }
    auto* orient = find_child(el, "Orientation");
    if (orient) {
        m.ORIENTATION_HEADING = opt_num(get_child_text(*orient, "heading")).value_or(0);
        m.ORIENTATION_TILT = opt_num(get_child_text(*orient, "tilt")).value_or(0);
        m.ORIENTATION_ROLL = opt_num(get_child_text(*orient, "roll")).value_or(0);
    }
    auto* scale = find_child(el, "Scale");
    if (scale) {
        m.SCALE_X = opt_num(get_child_text(*scale, "x")).value_or(1.0);
        m.SCALE_Y = opt_num(get_child_text(*scale, "y")).value_or(1.0);
        m.SCALE_Z = opt_num(get_child_text(*scale, "z")).value_or(1.0);
    }
    auto* link = find_child(el, "Link");
    if (link) m.LINK_HREF = get_child_text(*link, "href").value_or("");
    auto* resMap = find_child(el, "ResourceMap");
    if (resMap) {
        for (const auto& child : resMap->children) {
            std::string tag = strip_ns(child.tag);
            if (tag == "Alias") {
                KmlResourceMapAlias alias;
                alias.TARGET_HREF = get_child_text(child, "targetHref").value_or("");
                alias.SOURCE_HREF = get_child_text(child, "sourceHref").value_or("");
                m.RESOURCE_MAP.push_back(std::move(alias));
            }
        }
    }
    return m;
}

static KmlTrack parse_track(const XmlElement& el) {
    KmlTrack t;
    auto extrude_str = get_child_text(el, "extrude");
    t.EXTRUDE = extrude_str && *extrude_str == "1";
    auto tess_str = get_child_text(el, "tessellate");
    t.TESSELLATE = tess_str && *tess_str == "1";
    t.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "when") {
            t.WHEN.push_back(child.text);
        } else if (tag == "coord") {
            t.COORDS.push_back(parse_gx_coord(child.text));
        } else if (tag == "angles") {
            t.ANGLES.push_back(parse_gx_angles(child.text));
        } else if (tag == "Model") {
            t.MODEL = parse_model(child);
        }
    }
    return t;
}

static KmlMultiTrack parse_multi_track(const XmlElement& el) {
    KmlMultiTrack mt;
    mt.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    auto interp = get_child_text(el, "interpolate");
    mt.INTERPOLATE = interp && *interp == "1";
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "Track") mt.TRACKS.push_back(parse_track(child));
    }
    return mt;
}

static KmlMultiGeometry parse_multi_geometry(const XmlElement& el) {
    KmlMultiGeometry mg;
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "Point") mg.POINTS.push_back(parse_point(child));
        else if (tag == "LineString") mg.LINE_STRINGS.push_back(parse_line_string(child));
        else if (tag == "Polygon") mg.POLYGONS.push_back(parse_polygon(child));
        else if (tag == "MultiGeometry") mg.MULTI_GEOMETRIES.push_back(parse_multi_geometry(child));
        else if (tag == "LinearRing") mg.LINEAR_RINGS.push_back(parse_linear_ring(child));
        else if (tag == "Model") mg.MODELS.push_back(parse_model(child));
        else if (tag == "Track") mg.TRACKS.push_back(parse_track(child));
        else if (tag == "MultiTrack") mg.MULTI_TRACKS.push_back(parse_multi_track(child));
    }
    return mg;
}

// ===================== View & Region Parsers =====================

static KmlLookAt parse_look_at(const XmlElement& el) {
    KmlLookAt la;
    la.LONGITUDE = opt_num(get_child_text(el, "longitude")).value_or(0);
    la.LATITUDE = opt_num(get_child_text(el, "latitude")).value_or(0);
    la.ALTITUDE = opt_num(get_child_text(el, "altitude")).value_or(0);
    la.HEADING = opt_num(get_child_text(el, "heading")).value_or(0);
    la.TILT = opt_num(get_child_text(el, "tilt")).value_or(0);
    la.RANGE = opt_num(get_child_text(el, "range")).value_or(0);
    la.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    return la;
}

static KmlCamera parse_camera(const XmlElement& el) {
    KmlCamera cam;
    cam.LONGITUDE = opt_num(get_child_text(el, "longitude")).value_or(0);
    cam.LATITUDE = opt_num(get_child_text(el, "latitude")).value_or(0);
    cam.ALTITUDE = opt_num(get_child_text(el, "altitude")).value_or(0);
    cam.HEADING = opt_num(get_child_text(el, "heading")).value_or(0);
    cam.TILT = opt_num(get_child_text(el, "tilt")).value_or(0);
    cam.ROLL = opt_num(get_child_text(el, "roll")).value_or(0);
    cam.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    return cam;
}

static KmlRegion parse_region(const XmlElement& el) {
    KmlRegion r;
    auto* llab = find_child(el, "LatLonAltBox");
    if (llab) {
        KmlLatLonAltBox box;
        box.NORTH = opt_num(get_child_text(*llab, "north")).value_or(0);
        box.SOUTH = opt_num(get_child_text(*llab, "south")).value_or(0);
        box.EAST = opt_num(get_child_text(*llab, "east")).value_or(0);
        box.WEST = opt_num(get_child_text(*llab, "west")).value_or(0);
        box.MIN_ALTITUDE = opt_num(get_child_text(*llab, "minAltitude")).value_or(0);
        box.MAX_ALTITUDE = opt_num(get_child_text(*llab, "maxAltitude")).value_or(0);
        box.ALTITUDE_MODE = get_child_text(*llab, "altitudeMode").value_or("");
        r.LAT_LON_ALT_BOX = std::move(box);
    }
    auto* lod = find_child(el, "Lod");
    if (lod) {
        KmlLod l;
        l.MIN_LOD_PIXELS = opt_num(get_child_text(*lod, "minLodPixels")).value_or(0);
        l.MAX_LOD_PIXELS = opt_num(get_child_text(*lod, "maxLodPixels")).value_or(-1);
        l.MIN_FADE_EXTENT = opt_num(get_child_text(*lod, "minFadeExtent")).value_or(0);
        l.MAX_FADE_EXTENT = opt_num(get_child_text(*lod, "maxFadeExtent")).value_or(0);
        r.LOD = std::move(l);
    }
    return r;
}

// ===================== Overlay Parsers =====================

static KmlGroundOverlay parse_ground_overlay(const XmlElement& el) {
    KmlGroundOverlay go;
    go.NAME = get_child_text(el, "name").value_or("");
    go.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    go.VISIBILITY = !vis_str || *vis_str != "0";
    auto open_str = get_child_text(el, "open");
    go.OPEN = open_str && *open_str == "1";
    auto* icon = find_child(el, "Icon");
    if (icon) go.ICON_HREF = get_child_text(*icon, "href").value_or("");
    go.COLOR = get_child_text(el, "color").value_or("");
    auto* latLonBox = find_child(el, "LatLonBox");
    if (latLonBox) {
        go.NORTH = opt_num(get_child_text(*latLonBox, "north")).value_or(0);
        go.SOUTH = opt_num(get_child_text(*latLonBox, "south")).value_or(0);
        go.EAST = opt_num(get_child_text(*latLonBox, "east")).value_or(0);
        go.WEST = opt_num(get_child_text(*latLonBox, "west")).value_or(0);
        go.ROTATION = opt_num(get_child_text(*latLonBox, "rotation")).value_or(0);
    }
    go.ALTITUDE = opt_num(get_child_text(el, "altitude")).value_or(0);
    go.ALTITUDE_MODE = get_child_text(el, "altitudeMode").value_or("");
    go.DRAW_ORDER = opt_int(get_child_text(el, "drawOrder")).value_or(0);
    go.STYLE_URL = get_child_text(el, "styleUrl").value_or("");
    // LatLonQuad (gx:LatLonQuad)
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "LatLonQuad") {
            KmlLatLonQuad llq;
            auto ct = get_child_text(child, "coordinates").value_or("");
            llq.COORDINATES = parse_coordinates(ct);
            go.LAT_LON_QUAD = std::move(llq);
        } else if (tag == "Region") {
            go.REGION = parse_region(child);
        }
    }
    return go;
}

static KmlScreenOverlay parse_screen_overlay(const XmlElement& el) {
    KmlScreenOverlay so;
    so.NAME = get_child_text(el, "name").value_or("");
    so.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    so.VISIBILITY = !vis_str || *vis_str != "0";
    auto* icon = find_child(el, "Icon");
    if (icon) so.ICON_HREF = get_child_text(*icon, "href").value_or("");
    so.COLOR = get_child_text(el, "color").value_or("");
    so.DRAW_ORDER = opt_int(get_child_text(el, "drawOrder")).value_or(0);
    so.ROTATION = opt_num(get_child_text(el, "rotation")).value_or(0);

    auto parse_xy = [](const XmlElement& xy, double& x, double& y, std::string& xu, std::string& yu) {
        x = opt_num(get_attribute(xy, "x")).value_or(0);
        y = opt_num(get_attribute(xy, "y")).value_or(0);
        xu = get_attribute(xy, "xunits").value_or("");
        yu = get_attribute(xy, "yunits").value_or("");
    };

    auto* oxy = find_child(el, "overlayXY");
    if (oxy) parse_xy(*oxy, so.OVERLAY_XY_X, so.OVERLAY_XY_Y, so.OVERLAY_XY_XUNITS, so.OVERLAY_XY_YUNITS);
    auto* sxy = find_child(el, "screenXY");
    if (sxy) parse_xy(*sxy, so.SCREEN_XY_X, so.SCREEN_XY_Y, so.SCREEN_XY_XUNITS, so.SCREEN_XY_YUNITS);
    auto* rxy = find_child(el, "rotationXY");
    if (rxy) parse_xy(*rxy, so.ROTATION_XY_X, so.ROTATION_XY_Y, so.ROTATION_XY_XUNITS, so.ROTATION_XY_YUNITS);
    auto* sz = find_child(el, "size");
    if (sz) parse_xy(*sz, so.SIZE_X, so.SIZE_Y, so.SIZE_XUNITS, so.SIZE_YUNITS);

    return so;
}

static KmlPhotoOverlay parse_photo_overlay(const XmlElement& el) {
    KmlPhotoOverlay po;
    po.NAME = get_child_text(el, "name").value_or("");
    po.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    po.VISIBILITY = !vis_str || *vis_str != "0";
    auto* icon = find_child(el, "Icon");
    if (icon) po.ICON_HREF = get_child_text(*icon, "href").value_or("");
    po.COLOR = get_child_text(el, "color").value_or("");
    po.DRAW_ORDER = opt_int(get_child_text(el, "drawOrder")).value_or(0);
    po.ROTATION = opt_num(get_child_text(el, "rotation")).value_or(0);
    po.SHAPE = get_child_text(el, "shape").value_or("");

    auto* vv = find_child(el, "ViewVolume");
    if (vv) {
        KmlViewVolume v;
        v.LEFT_FOV = opt_num(get_child_text(*vv, "leftFov")).value_or(0);
        v.RIGHT_FOV = opt_num(get_child_text(*vv, "rightFov")).value_or(0);
        v.BOTTOM_FOV = opt_num(get_child_text(*vv, "bottomFov")).value_or(0);
        v.TOP_FOV = opt_num(get_child_text(*vv, "topFov")).value_or(0);
        v.NEAR = opt_num(get_child_text(*vv, "near")).value_or(0);
        po.VIEW_VOLUME = std::move(v);
    }

    auto* ip = find_child(el, "ImagePyramid");
    if (ip) {
        KmlImagePyramid p;
        p.TILE_SIZE = opt_int(get_child_text(*ip, "tileSize")).value_or(256);
        p.MAX_WIDTH = opt_int(get_child_text(*ip, "maxWidth")).value_or(0);
        p.MAX_HEIGHT = opt_int(get_child_text(*ip, "maxHeight")).value_or(0);
        p.GRID_ORIGIN = get_child_text(*ip, "gridOrigin").value_or("");
        po.IMAGE_PYRAMID = std::move(p);
    }

    auto* pt = find_child(el, "Point");
    if (pt) po.POINT = parse_point(*pt);

    return po;
}

// ===================== NetworkLink Parser =====================

static KmlLink parse_link(const XmlElement& el) {
    KmlLink lnk;
    lnk.HREF = get_child_text(el, "href").value_or("");
    lnk.REFRESH_MODE = get_child_text(el, "refreshMode").value_or("");
    lnk.REFRESH_INTERVAL = opt_num(get_child_text(el, "refreshInterval")).value_or(0);
    lnk.VIEW_REFRESH_MODE = get_child_text(el, "viewRefreshMode").value_or("");
    lnk.VIEW_REFRESH_TIME = opt_num(get_child_text(el, "viewRefreshTime")).value_or(0);
    lnk.VIEW_BOUND_SCALE = opt_num(get_child_text(el, "viewBoundScale")).value_or(1.0);
    lnk.VIEW_FORMAT = get_child_text(el, "viewFormat").value_or("");
    lnk.HTTP_QUERY = get_child_text(el, "httpQuery").value_or("");
    return lnk;
}

static KmlNetworkLink parse_network_link(const XmlElement& el) {
    KmlNetworkLink nl;
    nl.NAME = get_child_text(el, "name").value_or("");
    nl.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    nl.VISIBILITY = !vis_str || *vis_str != "0";
    auto open_str = get_child_text(el, "open");
    nl.OPEN = open_str && *open_str == "1";
    auto rv_str = get_child_text(el, "refreshVisibility");
    nl.REFRESH_VISIBILITY = rv_str && *rv_str == "1";
    auto ftv_str = get_child_text(el, "flyToView");
    nl.FLY_TO_VIEW = ftv_str && *ftv_str == "1";

    auto* link = find_child(el, "Link");
    if (!link) link = find_child(el, "Url"); // legacy KML support
    if (link) {
        nl.HREF = get_child_text(*link, "href").value_or("");
        nl.REFRESH_MODE = get_child_text(*link, "refreshMode").value_or("");
        nl.REFRESH_INTERVAL = opt_num(get_child_text(*link, "refreshInterval")).value_or(0);
        nl.VIEW_REFRESH_MODE = get_child_text(*link, "viewRefreshMode").value_or("");
        nl.VIEW_REFRESH_TIME = opt_num(get_child_text(*link, "viewRefreshTime")).value_or(0);
        nl.LINK = parse_link(*link);
    }
    return nl;
}

// ===================== Schema/Data Parsers =====================

static KmlSchema parse_schema(const XmlElement& el) {
    KmlSchema s;
    s.NAME = get_attribute(el, "name").value_or("");
    s.ID = get_attribute(el, "id").value_or("");
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "SimpleField") {
            KmlSimpleField sf;
            sf.NAME = get_attribute(child, "name").value_or("");
            sf.FIELD_TYPE = get_attribute(child, "type").value_or("");
            sf.DISPLAY_NAME = get_child_text(child, "displayName").value_or("");
            s.SIMPLE_FIELDS.push_back(std::move(sf));
        }
    }
    return s;
}

static KmlSchemaData parse_schema_data(const XmlElement& el) {
    KmlSchemaData sd;
    sd.SCHEMA_URL = get_attribute(el, "schemaUrl").value_or("");
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "SimpleData") {
            KmlSimpleData d;
            d.NAME = get_attribute(child, "name").value_or("");
            d.VALUE = child.text;
            sd.SIMPLE_DATA.push_back(std::move(d));
        }
    }
    return sd;
}

// ===================== NetworkLinkControl Parser =====================

static KmlUpdate parse_update(const XmlElement& el) {
    KmlUpdate u;
    u.TARGET_HREF = get_child_text(el, "targetHref").value_or("");
    // For Change/Create/Delete, store raw XML text
    auto* change = find_child(el, "Change");
    if (change) u.CHANGE_KML = change->text;
    auto* create = find_child(el, "Create");
    if (create) u.CREATE_KML = create->text;
    auto* del = find_child(el, "Delete");
    if (del) u.DELETE_KML = del->text;
    return u;
}

static KmlNetworkLinkControl parse_network_link_control(const XmlElement& el) {
    KmlNetworkLinkControl nlc;
    nlc.MIN_REFRESH_PERIOD = opt_num(get_child_text(el, "minRefreshPeriod")).value_or(0);
    nlc.MAX_SESSION_LENGTH = opt_num(get_child_text(el, "maxSessionLength")).value_or(-1);
    nlc.COOKIE = get_child_text(el, "cookie").value_or("");
    nlc.MESSAGE = get_child_text(el, "message").value_or("");
    nlc.LINK_NAME = get_child_text(el, "linkName").value_or("");
    nlc.LINK_DESCRIPTION = get_child_text(el, "linkDescription").value_or("");
    nlc.LINK_SNIPPET = get_child_text(el, "linkSnippet").value_or("");
    nlc.EXPIRES = get_child_text(el, "expires").value_or("");
    auto* update = find_child(el, "Update");
    if (update) nlc.UPDATE = parse_update(*update);
    auto* la = find_child(el, "LookAt");
    if (la) nlc.LOOK_AT = parse_look_at(*la);
    auto* cam = find_child(el, "Camera");
    if (cam) nlc.CAMERA = parse_camera(*cam);
    return nlc;
}

// ===================== Tour Parsers =====================

static KmlTour parse_tour(const XmlElement& el) {
    KmlTour tour;
    tour.NAME = get_child_text(el, "name").value_or("");
    tour.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    tour.VISIBILITY = !vis_str || *vis_str != "0";

    auto* playlist = find_child(el, "Playlist");
    if (playlist) {
        KmlPlaylist pl;
        for (const auto& child : playlist->children) {
            std::string tag = strip_ns(child.tag);
            KmlTourPrimitive prim;
            if (tag == "FlyTo") {
                KmlFlyTo ft;
                ft.DURATION = opt_num(get_child_text(child, "duration")).value_or(0);
                ft.FLY_TO_MODE = get_child_text(child, "flyToMode").value_or("");
                auto* la = find_child(child, "LookAt");
                if (la) ft.LOOK_AT = parse_look_at(*la);
                auto* cam = find_child(child, "Camera");
                if (cam) ft.CAMERA = parse_camera(*cam);
                prim.FLY_TO = std::move(ft);
            } else if (tag == "Wait") {
                KmlWait w;
                w.DURATION = opt_num(get_child_text(child, "duration")).value_or(0);
                prim.WAIT = std::move(w);
            } else if (tag == "AnimatedUpdate") {
                KmlAnimatedUpdate au;
                au.DURATION = opt_num(get_child_text(child, "duration")).value_or(0);
                au.DELAYED_START = opt_num(get_child_text(child, "delayedStart")).value_or(0);
                auto* upd = find_child(child, "Update");
                if (upd) au.UPDATE = parse_update(*upd);
                prim.ANIMATED_UPDATE = std::move(au);
            } else if (tag == "TourControl") {
                KmlTourControl tc;
                tc.PLAY_MODE = get_child_text(child, "playMode").value_or("");
                prim.TOUR_CONTROL = std::move(tc);
            } else if (tag == "SoundCue") {
                KmlSoundCue sc;
                sc.HREF = get_child_text(child, "href").value_or("");
                sc.DELAYED_START = opt_num(get_child_text(child, "delayedStart")).value_or(0);
                prim.SOUND_CUE = std::move(sc);
            } else {
                continue;
            }
            pl.PRIMITIVES.push_back(std::move(prim));
        }
        tour.PLAYLIST = std::move(pl);
    }
    return tour;
}

// ===================== Placemark Parser =====================

static KmlPlacemark parse_placemark(const XmlElement& el) {
    KmlPlacemark pm;
    pm.NAME = get_child_text(el, "name").value_or("");
    pm.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    pm.VISIBILITY = !vis_str || *vis_str != "0";
    pm.STYLE_URL = get_child_text(el, "styleUrl").value_or("");
    pm.SNIPPET = get_child_text(el, "Snippet").value_or("");
    auto open_str = get_child_text(el, "open");
    pm.OPEN = open_str && *open_str == "1";
    pm.ADDRESS = get_child_text(el, "address").value_or("");

    auto* style_el = find_child(el, "Style");
    if (style_el) pm.STYLE = parse_style(*style_el);

    auto* sm_el = find_child(el, "StyleMap");
    if (sm_el) pm.STYLE_MAP = parse_style_map(*sm_el);

    auto* point_el = find_child(el, "Point");
    if (point_el) pm.POINT = parse_point(*point_el);

    auto* ls_el = find_child(el, "LineString");
    if (ls_el) pm.LINE_STRING = parse_line_string(*ls_el);

    auto* pg_el = find_child(el, "Polygon");
    if (pg_el) pm.POLYGON = parse_polygon(*pg_el);

    auto* lr_el = find_child(el, "LinearRing");
    if (lr_el) pm.LINEAR_RING = parse_linear_ring(*lr_el);

    auto* mg_el = find_child(el, "MultiGeometry");
    if (mg_el) pm.MULTI_GEOMETRY = parse_multi_geometry(*mg_el);

    auto* model_el = find_child(el, "Model");
    if (model_el) pm.MODEL = parse_model(*model_el);

    // gx:Track and gx:MultiTrack (try with and without namespace)
    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "Track" && !pm.TRACK) pm.TRACK = parse_track(child);
        else if (tag == "MultiTrack" && !pm.MULTI_TRACK) pm.MULTI_TRACK = parse_multi_track(child);
    }

    auto* la_el = find_child(el, "LookAt");
    if (la_el) pm.LOOK_AT = parse_look_at(*la_el);

    auto* cam_el = find_child(el, "Camera");
    if (cam_el) pm.CAMERA = parse_camera(*cam_el);

    auto* ts_el = find_child(el, "TimeSpan");
    if (ts_el) {
        KmlTimeSpan ts;
        ts.BEGIN = get_child_text(*ts_el, "begin").value_or("");
        ts.END = get_child_text(*ts_el, "end").value_or("");
        pm.TIME_SPAN = std::move(ts);
    }

    auto* tstamp_el = find_child(el, "TimeStamp");
    if (tstamp_el) {
        KmlTimeStamp ts;
        ts.WHEN = get_child_text(*tstamp_el, "when").value_or("");
        pm.TIME_STAMP = std::move(ts);
    }

    auto* region_el = find_child(el, "Region");
    if (region_el) pm.REGION = parse_region(*region_el);

    auto* ed_el = find_child(el, "ExtendedData");
    if (ed_el) {
        for (const auto& child : ed_el->children) {
            std::string tag = strip_ns(child.tag);
            if (tag == "Data") {
                KmlData data;
                data.NAME = get_attribute(child, "name").value_or("");
                data.DISPLAY_NAME = get_child_text(child, "displayName").value_or("");
                data.VALUE = get_child_text(child, "value").value_or("");
                pm.EXTENDED_DATA.push_back(std::move(data));
            } else if (tag == "SchemaData") {
                pm.SCHEMA_DATA = parse_schema_data(child);
            }
        }
    }

    return pm;
}

// ===================== Folder Parser =====================

static KmlFolder parse_folder(const XmlElement& el) {
    KmlFolder folder;
    folder.NAME = get_child_text(el, "name").value_or("");
    folder.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    folder.VISIBILITY = !vis_str || *vis_str != "0";
    auto open_str = get_child_text(el, "open");
    folder.OPEN = open_str && *open_str == "1";
    folder.STYLE_URL = get_child_text(el, "styleUrl").value_or("");

    for (const auto& child : el.children) {
        std::string tag = strip_ns(child.tag);
        if (tag == "Placemark") folder.PLACEMARKS.push_back(parse_placemark(child));
        else if (tag == "Folder") folder.FOLDERS.push_back(parse_folder(child));
        else if (tag == "NetworkLink") folder.NETWORK_LINKS.push_back(parse_network_link(child));
        else if (tag == "GroundOverlay") folder.GROUND_OVERLAYS.push_back(parse_ground_overlay(child));
        else if (tag == "Style") folder.STYLES.push_back(parse_style(child));
        else if (tag == "StyleMap") folder.STYLE_MAPS.push_back(parse_style_map(child));
        else if (tag == "ScreenOverlay") folder.SCREEN_OVERLAYS.push_back(parse_screen_overlay(child));
        else if (tag == "PhotoOverlay") folder.PHOTO_OVERLAYS.push_back(parse_photo_overlay(child));
        else if (tag == "Tour") folder.TOURS.push_back(parse_tour(child));
        else if (tag == "Region") folder.REGION = parse_region(child);
        else if (tag == "LookAt") folder.LOOK_AT = parse_look_at(child);
        else if (tag == "Camera") folder.CAMERA = parse_camera(child);
        else if (tag == "TimeSpan") {
            KmlTimeSpan ts;
            ts.BEGIN = get_child_text(child, "begin").value_or("");
            ts.END = get_child_text(child, "end").value_or("");
            folder.TIME_SPAN = std::move(ts);
        } else if (tag == "TimeStamp") {
            KmlTimeStamp ts;
            ts.WHEN = get_child_text(child, "when").value_or("");
            folder.TIME_STAMP = std::move(ts);
        }
    }

    // Extended data
    auto* ed_el = find_child(el, "ExtendedData");
    if (ed_el) {
        for (const auto& child : ed_el->children) {
            std::string tag = strip_ns(child.tag);
            if (tag == "Data") {
                KmlData data;
                data.NAME = get_attribute(child, "name").value_or("");
                data.DISPLAY_NAME = get_child_text(child, "displayName").value_or("");
                data.VALUE = get_child_text(child, "value").value_or("");
                folder.EXTENDED_DATA.push_back(std::move(data));
            }
        }
    }

    return folder;
}

// ===================== Main Parser =====================

KmlMessage parse_kml_xml(std::string_view text) {
    auto root = parse_xml_string(text);

    // Navigate to Document element
    const XmlElement* kml = &root;
    const XmlElement* nlc_source = nullptr;
    if (root.tag == "kml" || root.tag.find(":kml") != std::string::npos ||
        root.tag.find("kml") != std::string::npos) {
        // Check for NetworkLinkControl at kml level
        for (const auto& child : root.children) {
            std::string tag = strip_ns(child.tag);
            if (tag == "NetworkLinkControl") nlc_source = &child;
        }
        auto* doc = find_child(root, "Document");
        if (doc) kml = doc;
    }

    KmlMessage msg;
    msg.NAME = get_child_text(*kml, "name").value_or("");
    msg.DESCRIPTION = get_child_text(*kml, "description").value_or("");
    auto vis_str = get_child_text(*kml, "visibility");
    msg.VISIBILITY = !vis_str || *vis_str != "0";
    auto open_str = get_child_text(*kml, "open");
    msg.OPEN = open_str && *open_str == "1";

    for (const auto& child : kml->children) {
        std::string tag = strip_ns(child.tag);

        if (tag == "Style") msg.STYLES.push_back(parse_style(child));
        else if (tag == "StyleMap") msg.STYLE_MAPS.push_back(parse_style_map(child));
        else if (tag == "Placemark") msg.PLACEMARKS.push_back(parse_placemark(child));
        else if (tag == "Folder") msg.FOLDERS.push_back(parse_folder(child));
        else if (tag == "NetworkLink") msg.NETWORK_LINKS.push_back(parse_network_link(child));
        else if (tag == "GroundOverlay") msg.GROUND_OVERLAYS.push_back(parse_ground_overlay(child));
        else if (tag == "Schema") msg.SCHEMAS.push_back(parse_schema(child));
        else if (tag == "ScreenOverlay") msg.SCREEN_OVERLAYS.push_back(parse_screen_overlay(child));
        else if (tag == "PhotoOverlay") msg.PHOTO_OVERLAYS.push_back(parse_photo_overlay(child));
        else if (tag == "Tour") msg.TOURS.push_back(parse_tour(child));
    }

    if (nlc_source) msg.NETWORK_LINK_CONTROL = parse_network_link_control(*nlc_source);

    return msg;
}

// ===================== Writer Helpers =====================

static auto txt_fn() {
    return [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };
}

// Forward declarations for recursive writers
static XmlElement write_multi_geometry_el(const KmlMultiGeometry& mg);
static XmlElement write_model_el(const KmlModel& m);
static XmlElement write_track_el(const KmlTrack& t);
static XmlElement write_multi_track_el(const KmlMultiTrack& mt);

static XmlElement write_look_at_el(const KmlLookAt& la) {
    auto txt = txt_fn();
    XmlElement lae;
    lae.tag = "LookAt";
    lae.children.push_back(txt("longitude", std::to_string(la.LONGITUDE)));
    lae.children.push_back(txt("latitude", std::to_string(la.LATITUDE)));
    lae.children.push_back(txt("altitude", std::to_string(la.ALTITUDE)));
    lae.children.push_back(txt("heading", std::to_string(la.HEADING)));
    lae.children.push_back(txt("tilt", std::to_string(la.TILT)));
    lae.children.push_back(txt("range", std::to_string(la.RANGE)));
    if (!la.ALTITUDE_MODE.empty()) lae.children.push_back(txt("altitudeMode", la.ALTITUDE_MODE));
    return lae;
}

static XmlElement write_camera_el(const KmlCamera& cam) {
    auto txt = txt_fn();
    XmlElement ce;
    ce.tag = "Camera";
    ce.children.push_back(txt("longitude", std::to_string(cam.LONGITUDE)));
    ce.children.push_back(txt("latitude", std::to_string(cam.LATITUDE)));
    ce.children.push_back(txt("altitude", std::to_string(cam.ALTITUDE)));
    ce.children.push_back(txt("heading", std::to_string(cam.HEADING)));
    ce.children.push_back(txt("tilt", std::to_string(cam.TILT)));
    ce.children.push_back(txt("roll", std::to_string(cam.ROLL)));
    if (!cam.ALTITUDE_MODE.empty()) ce.children.push_back(txt("altitudeMode", cam.ALTITUDE_MODE));
    return ce;
}

static XmlElement write_region_el(const KmlRegion& r) {
    auto txt = txt_fn();
    XmlElement re;
    re.tag = "Region";
    if (r.LAT_LON_ALT_BOX) {
        const auto& b = *r.LAT_LON_ALT_BOX;
        XmlElement be;
        be.tag = "LatLonAltBox";
        be.children.push_back(txt("north", std::to_string(b.NORTH)));
        be.children.push_back(txt("south", std::to_string(b.SOUTH)));
        be.children.push_back(txt("east", std::to_string(b.EAST)));
        be.children.push_back(txt("west", std::to_string(b.WEST)));
        if (b.MIN_ALTITUDE != 0) be.children.push_back(txt("minAltitude", std::to_string(b.MIN_ALTITUDE)));
        if (b.MAX_ALTITUDE != 0) be.children.push_back(txt("maxAltitude", std::to_string(b.MAX_ALTITUDE)));
        if (!b.ALTITUDE_MODE.empty()) be.children.push_back(txt("altitudeMode", b.ALTITUDE_MODE));
        re.children.push_back(std::move(be));
    }
    if (r.LOD) {
        const auto& l = *r.LOD;
        XmlElement le;
        le.tag = "Lod";
        le.children.push_back(txt("minLodPixels", std::to_string(l.MIN_LOD_PIXELS)));
        le.children.push_back(txt("maxLodPixels", std::to_string(l.MAX_LOD_PIXELS)));
        if (l.MIN_FADE_EXTENT != 0) le.children.push_back(txt("minFadeExtent", std::to_string(l.MIN_FADE_EXTENT)));
        if (l.MAX_FADE_EXTENT != 0) le.children.push_back(txt("maxFadeExtent", std::to_string(l.MAX_FADE_EXTENT)));
        re.children.push_back(std::move(le));
    }
    return re;
}

static XmlElement write_style_el(const KmlStyle& style) {
    XmlElement el;
    el.tag = "Style";
    if (!style.ID.empty()) el.attributes["id"] = style.ID;

    auto txt = txt_fn();

    if (style.ICON_STYLE) {
        const auto& is = *style.ICON_STYLE;
        XmlElement ise;
        ise.tag = "IconStyle";
        if (!is.COLOR.empty()) ise.children.push_back(txt("color", is.COLOR));
        if (!is.COLOR_MODE.empty()) ise.children.push_back(txt("colorMode", is.COLOR_MODE));
        if (is.SCALE != 1.0) ise.children.push_back(txt("scale", std::to_string(is.SCALE)));
        if (is.HEADING != 0) ise.children.push_back(txt("heading", std::to_string(is.HEADING)));
        if (!is.ICON_HREF.empty()) {
            ise.children.push_back(xml_elem("Icon", {}, {txt("href", is.ICON_HREF)}));
        }
        if (is.HOTSPOT_X != 0 || is.HOTSPOT_Y != 0 || !is.HOTSPOT_X_UNITS.empty() || !is.HOTSPOT_Y_UNITS.empty()) {
            XmlElement hs;
            hs.tag = "hotSpot";
            hs.attributes["x"] = std::to_string(is.HOTSPOT_X);
            hs.attributes["y"] = std::to_string(is.HOTSPOT_Y);
            if (!is.HOTSPOT_X_UNITS.empty()) hs.attributes["xunits"] = is.HOTSPOT_X_UNITS;
            if (!is.HOTSPOT_Y_UNITS.empty()) hs.attributes["yunits"] = is.HOTSPOT_Y_UNITS;
            ise.children.push_back(std::move(hs));
        }
        el.children.push_back(std::move(ise));
    }

    if (style.LABEL_STYLE) {
        const auto& ls = *style.LABEL_STYLE;
        XmlElement lse;
        lse.tag = "LabelStyle";
        if (!ls.COLOR.empty()) lse.children.push_back(txt("color", ls.COLOR));
        if (!ls.COLOR_MODE.empty()) lse.children.push_back(txt("colorMode", ls.COLOR_MODE));
        if (ls.SCALE != 1.0) lse.children.push_back(txt("scale", std::to_string(ls.SCALE)));
        el.children.push_back(std::move(lse));
    }

    if (style.LINE_STYLE) {
        const auto& ls = *style.LINE_STYLE;
        XmlElement lse;
        lse.tag = "LineStyle";
        if (!ls.COLOR.empty()) lse.children.push_back(txt("color", ls.COLOR));
        if (!ls.COLOR_MODE.empty()) lse.children.push_back(txt("colorMode", ls.COLOR_MODE));
        if (ls.WIDTH != 1.0) lse.children.push_back(txt("width", std::to_string(ls.WIDTH)));
        if (!ls.GX_OUTER_COLOR.empty()) lse.children.push_back(txt("gx:outerColor", ls.GX_OUTER_COLOR));
        if (ls.GX_OUTER_WIDTH != 0) lse.children.push_back(txt("gx:outerWidth", std::to_string(ls.GX_OUTER_WIDTH)));
        if (ls.GX_PHYSICAL_WIDTH != 0) lse.children.push_back(txt("gx:physicalWidth", std::to_string(ls.GX_PHYSICAL_WIDTH)));
        if (ls.GX_LABEL_VISIBILITY) lse.children.push_back(txt("gx:labelVisibility", "1"));
        el.children.push_back(std::move(lse));
    }

    if (style.POLY_STYLE) {
        const auto& ps = *style.POLY_STYLE;
        XmlElement pse;
        pse.tag = "PolyStyle";
        if (!ps.COLOR.empty()) pse.children.push_back(txt("color", ps.COLOR));
        if (!ps.COLOR_MODE.empty()) pse.children.push_back(txt("colorMode", ps.COLOR_MODE));
        pse.children.push_back(txt("fill", ps.FILL ? "1" : "0"));
        pse.children.push_back(txt("outline", ps.OUTLINE ? "1" : "0"));
        el.children.push_back(std::move(pse));
    }

    if (style.BALLOON_STYLE) {
        const auto& bs = *style.BALLOON_STYLE;
        XmlElement bse;
        bse.tag = "BalloonStyle";
        if (!bs.BG_COLOR.empty()) bse.children.push_back(txt("bgColor", bs.BG_COLOR));
        if (!bs.TEXT_COLOR.empty()) bse.children.push_back(txt("textColor", bs.TEXT_COLOR));
        if (!bs.TEXT.empty()) bse.children.push_back(txt("text", bs.TEXT));
        if (!bs.DISPLAY_MODE.empty()) bse.children.push_back(txt("displayMode", bs.DISPLAY_MODE));
        el.children.push_back(std::move(bse));
    }

    if (style.LIST_STYLE) {
        const auto& ls = *style.LIST_STYLE;
        XmlElement lse;
        lse.tag = "ListStyle";
        if (!ls.LIST_ITEM_TYPE.empty()) lse.children.push_back(txt("listItemType", ls.LIST_ITEM_TYPE));
        if (!ls.BG_COLOR.empty()) lse.children.push_back(txt("bgColor", ls.BG_COLOR));
        if (ls.MAX_SNIPPET_LINES != 2) lse.children.push_back(txt("maxSnippetLines", std::to_string(ls.MAX_SNIPPET_LINES)));
        for (const auto& ii : ls.ITEM_ICONS) {
            XmlElement iie;
            iie.tag = "ItemIcon";
            if (!ii.STATE.empty()) iie.children.push_back(txt("state", ii.STATE));
            if (!ii.HREF.empty()) iie.children.push_back(txt("href", ii.HREF));
            lse.children.push_back(std::move(iie));
        }
        el.children.push_back(std::move(lse));
    }

    return el;
}

static XmlElement write_point_el(const KmlPoint& pt) {
    auto txt = txt_fn();
    XmlElement pte;
    pte.tag = "Point";
    if (pt.EXTRUDE) pte.children.push_back(txt("extrude", "1"));
    if (!pt.ALTITUDE_MODE.empty()) pte.children.push_back(txt("altitudeMode", pt.ALTITUDE_MODE));
    pte.children.push_back(txt("coordinates", coord_to_string(pt.COORDINATES)));
    return pte;
}

static XmlElement write_line_string_el(const KmlLineString& ls) {
    auto txt = txt_fn();
    XmlElement lse;
    lse.tag = "LineString";
    if (ls.EXTRUDE) lse.children.push_back(txt("extrude", "1"));
    if (ls.TESSELLATE) lse.children.push_back(txt("tessellate", "1"));
    if (!ls.ALTITUDE_MODE.empty()) lse.children.push_back(txt("altitudeMode", ls.ALTITUDE_MODE));
    if (ls.GX_DRAW_ORDER != 0) lse.children.push_back(txt("gx:drawOrder", std::to_string(ls.GX_DRAW_ORDER)));
    lse.children.push_back(txt("coordinates", coords_to_string(ls.COORDINATES)));
    return lse;
}

static XmlElement write_linear_ring_el(const KmlLinearRing& ring) {
    auto txt = txt_fn();
    XmlElement re;
    re.tag = "LinearRing";
    if (ring.EXTRUDE) re.children.push_back(txt("extrude", "1"));
    if (ring.TESSELLATE) re.children.push_back(txt("tessellate", "1"));
    if (!ring.ALTITUDE_MODE.empty()) re.children.push_back(txt("altitudeMode", ring.ALTITUDE_MODE));
    re.children.push_back(txt("coordinates", coords_to_string(ring.COORDINATES)));
    return re;
}

static XmlElement write_polygon_el(const KmlPolygon& pg) {
    auto txt = txt_fn();
    XmlElement pge;
    pge.tag = "Polygon";
    if (pg.EXTRUDE) pge.children.push_back(txt("extrude", "1"));
    if (pg.TESSELLATE) pge.children.push_back(txt("tessellate", "1"));
    if (!pg.ALTITUDE_MODE.empty()) pge.children.push_back(txt("altitudeMode", pg.ALTITUDE_MODE));
    XmlElement outer;
    outer.tag = "outerBoundaryIs";
    outer.children.push_back(write_linear_ring_el(pg.OUTER_BOUNDARY));
    pge.children.push_back(std::move(outer));
    for (const auto& inner : pg.INNER_BOUNDARIES) {
        XmlElement innerEl;
        innerEl.tag = "innerBoundaryIs";
        innerEl.children.push_back(write_linear_ring_el(inner));
        pge.children.push_back(std::move(innerEl));
    }
    return pge;
}

static XmlElement write_model_el(const KmlModel& m) {
    auto txt = txt_fn();
    XmlElement me;
    me.tag = "Model";
    if (!m.ALTITUDE_MODE.empty()) me.children.push_back(txt("altitudeMode", m.ALTITUDE_MODE));
    {
        XmlElement loc;
        loc.tag = "Location";
        loc.children.push_back(txt("longitude", std::to_string(m.LOCATION_LON)));
        loc.children.push_back(txt("latitude", std::to_string(m.LOCATION_LAT)));
        loc.children.push_back(txt("altitude", std::to_string(m.LOCATION_ALT)));
        me.children.push_back(std::move(loc));
    }
    if (m.ORIENTATION_HEADING != 0 || m.ORIENTATION_TILT != 0 || m.ORIENTATION_ROLL != 0) {
        XmlElement orient;
        orient.tag = "Orientation";
        orient.children.push_back(txt("heading", std::to_string(m.ORIENTATION_HEADING)));
        orient.children.push_back(txt("tilt", std::to_string(m.ORIENTATION_TILT)));
        orient.children.push_back(txt("roll", std::to_string(m.ORIENTATION_ROLL)));
        me.children.push_back(std::move(orient));
    }
    if (m.SCALE_X != 1.0 || m.SCALE_Y != 1.0 || m.SCALE_Z != 1.0) {
        XmlElement scale;
        scale.tag = "Scale";
        scale.children.push_back(txt("x", std::to_string(m.SCALE_X)));
        scale.children.push_back(txt("y", std::to_string(m.SCALE_Y)));
        scale.children.push_back(txt("z", std::to_string(m.SCALE_Z)));
        me.children.push_back(std::move(scale));
    }
    if (!m.LINK_HREF.empty()) {
        me.children.push_back(xml_elem("Link", {}, {txt("href", m.LINK_HREF)}));
    }
    if (!m.RESOURCE_MAP.empty()) {
        XmlElement rm;
        rm.tag = "ResourceMap";
        for (const auto& alias : m.RESOURCE_MAP) {
            XmlElement ae;
            ae.tag = "Alias";
            ae.children.push_back(txt("targetHref", alias.TARGET_HREF));
            ae.children.push_back(txt("sourceHref", alias.SOURCE_HREF));
            rm.children.push_back(std::move(ae));
        }
        me.children.push_back(std::move(rm));
    }
    return me;
}

static XmlElement write_track_el(const KmlTrack& t) {
    auto txt = txt_fn();
    XmlElement te;
    te.tag = "gx:Track";
    if (t.EXTRUDE) te.children.push_back(txt("extrude", "1"));
    if (t.TESSELLATE) te.children.push_back(txt("tessellate", "1"));
    if (!t.ALTITUDE_MODE.empty()) te.children.push_back(txt("altitudeMode", t.ALTITUDE_MODE));
    for (const auto& w : t.WHEN) te.children.push_back(txt("when", w));
    for (const auto& c : t.COORDS) te.children.push_back(txt("gx:coord", gx_coord_to_string(c)));
    for (const auto& a : t.ANGLES) te.children.push_back(txt("gx:angles", gx_coord_to_string(a)));
    if (t.MODEL) te.children.push_back(write_model_el(*t.MODEL));
    return te;
}

static XmlElement write_multi_track_el(const KmlMultiTrack& mt) {
    auto txt = txt_fn();
    XmlElement mte;
    mte.tag = "gx:MultiTrack";
    if (!mt.ALTITUDE_MODE.empty()) mte.children.push_back(txt("altitudeMode", mt.ALTITUDE_MODE));
    if (mt.INTERPOLATE) mte.children.push_back(txt("gx:interpolate", "1"));
    for (const auto& t : mt.TRACKS) mte.children.push_back(write_track_el(t));
    return mte;
}

static XmlElement write_multi_geometry_el(const KmlMultiGeometry& mg) {
    XmlElement mge;
    mge.tag = "MultiGeometry";
    for (const auto& pt : mg.POINTS) mge.children.push_back(write_point_el(pt));
    for (const auto& ls : mg.LINE_STRINGS) mge.children.push_back(write_line_string_el(ls));
    for (const auto& pg : mg.POLYGONS) mge.children.push_back(write_polygon_el(pg));
    for (const auto& nested : mg.MULTI_GEOMETRIES) mge.children.push_back(write_multi_geometry_el(nested));
    for (const auto& lr : mg.LINEAR_RINGS) mge.children.push_back(write_linear_ring_el(lr));
    for (const auto& m : mg.MODELS) mge.children.push_back(write_model_el(m));
    for (const auto& t : mg.TRACKS) mge.children.push_back(write_track_el(t));
    for (const auto& mt : mg.MULTI_TRACKS) mge.children.push_back(write_multi_track_el(mt));
    return mge;
}

static XmlElement write_update_el(const KmlUpdate& u) {
    auto txt = txt_fn();
    XmlElement ue;
    ue.tag = "Update";
    if (!u.TARGET_HREF.empty()) ue.children.push_back(txt("targetHref", u.TARGET_HREF));
    if (!u.CHANGE_KML.empty()) ue.children.push_back(txt("Change", u.CHANGE_KML));
    if (!u.CREATE_KML.empty()) ue.children.push_back(txt("Create", u.CREATE_KML));
    if (!u.DELETE_KML.empty()) ue.children.push_back(txt("Delete", u.DELETE_KML));
    return ue;
}

static XmlElement write_placemark_el(const KmlPlacemark& pm) {
    XmlElement el;
    el.tag = "Placemark";

    auto txt = txt_fn();

    if (!pm.NAME.empty()) el.children.push_back(txt("name", pm.NAME));
    if (!pm.DESCRIPTION.empty()) el.children.push_back(txt("description", pm.DESCRIPTION));
    if (!pm.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (pm.OPEN) el.children.push_back(txt("open", "1"));
    if (!pm.STYLE_URL.empty()) el.children.push_back(txt("styleUrl", pm.STYLE_URL));
    if (!pm.SNIPPET.empty()) el.children.push_back(txt("Snippet", pm.SNIPPET));
    if (!pm.ADDRESS.empty()) el.children.push_back(txt("address", pm.ADDRESS));

    if (pm.STYLE) el.children.push_back(write_style_el(*pm.STYLE));
    if (pm.STYLE_MAP) {
        XmlElement sme;
        sme.tag = "StyleMap";
        sme.attributes["id"] = pm.STYLE_MAP->ID;
        for (const auto& pair : pm.STYLE_MAP->PAIRS) {
            XmlElement pe;
            pe.tag = "Pair";
            pe.children.push_back(txt("key", pair.STATE));
            pe.children.push_back(txt("styleUrl", pair.STYLE_URL));
            sme.children.push_back(std::move(pe));
        }
        el.children.push_back(std::move(sme));
    }

    if (pm.POINT) el.children.push_back(write_point_el(*pm.POINT));
    if (pm.LINE_STRING) el.children.push_back(write_line_string_el(*pm.LINE_STRING));
    if (pm.POLYGON) el.children.push_back(write_polygon_el(*pm.POLYGON));
    if (pm.LINEAR_RING) el.children.push_back(write_linear_ring_el(*pm.LINEAR_RING));
    if (pm.MULTI_GEOMETRY) el.children.push_back(write_multi_geometry_el(*pm.MULTI_GEOMETRY));
    if (pm.MODEL) el.children.push_back(write_model_el(*pm.MODEL));
    if (pm.TRACK) el.children.push_back(write_track_el(*pm.TRACK));
    if (pm.MULTI_TRACK) el.children.push_back(write_multi_track_el(*pm.MULTI_TRACK));

    if (pm.LOOK_AT) el.children.push_back(write_look_at_el(*pm.LOOK_AT));
    if (pm.CAMERA) el.children.push_back(write_camera_el(*pm.CAMERA));

    if (pm.TIME_SPAN) {
        XmlElement tse;
        tse.tag = "TimeSpan";
        if (!pm.TIME_SPAN->BEGIN.empty()) tse.children.push_back(txt("begin", pm.TIME_SPAN->BEGIN));
        if (!pm.TIME_SPAN->END.empty()) tse.children.push_back(txt("end", pm.TIME_SPAN->END));
        el.children.push_back(std::move(tse));
    }

    if (pm.TIME_STAMP) {
        XmlElement tse;
        tse.tag = "TimeStamp";
        tse.children.push_back(txt("when", pm.TIME_STAMP->WHEN));
        el.children.push_back(std::move(tse));
    }

    if (pm.REGION) el.children.push_back(write_region_el(*pm.REGION));

    if (!pm.EXTENDED_DATA.empty() || pm.SCHEMA_DATA) {
        XmlElement ed;
        ed.tag = "ExtendedData";
        for (const auto& data : pm.EXTENDED_DATA) {
            XmlElement de;
            de.tag = "Data";
            de.attributes["name"] = data.NAME;
            if (!data.DISPLAY_NAME.empty()) de.children.push_back(txt("displayName", data.DISPLAY_NAME));
            de.children.push_back(txt("value", data.VALUE));
            ed.children.push_back(std::move(de));
        }
        if (pm.SCHEMA_DATA) {
            XmlElement sde;
            sde.tag = "SchemaData";
            sde.attributes["schemaUrl"] = pm.SCHEMA_DATA->SCHEMA_URL;
            for (const auto& sd : pm.SCHEMA_DATA->SIMPLE_DATA) {
                XmlElement sdi;
                sdi.tag = "SimpleData";
                sdi.attributes["name"] = sd.NAME;
                sdi.text = sd.VALUE;
                sde.children.push_back(std::move(sdi));
            }
            ed.children.push_back(std::move(sde));
        }
        el.children.push_back(std::move(ed));
    }

    return el;
}

static XmlElement write_network_link_el(const KmlNetworkLink& nl) {
    auto txt = txt_fn();

    XmlElement el;
    el.tag = "NetworkLink";
    if (!nl.NAME.empty()) el.children.push_back(txt("name", nl.NAME));
    if (!nl.DESCRIPTION.empty()) el.children.push_back(txt("description", nl.DESCRIPTION));
    if (!nl.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (nl.OPEN) el.children.push_back(txt("open", "1"));
    if (nl.REFRESH_VISIBILITY) el.children.push_back(txt("refreshVisibility", "1"));
    if (nl.FLY_TO_VIEW) el.children.push_back(txt("flyToView", "1"));

    if (!nl.HREF.empty() || !nl.REFRESH_MODE.empty() || !nl.VIEW_REFRESH_MODE.empty() || nl.LINK) {
        XmlElement link;
        link.tag = "Link";
        if (nl.LINK) {
            const auto& lnk = *nl.LINK;
            if (!lnk.HREF.empty()) link.children.push_back(txt("href", lnk.HREF));
            if (!lnk.REFRESH_MODE.empty()) link.children.push_back(txt("refreshMode", lnk.REFRESH_MODE));
            if (lnk.REFRESH_INTERVAL != 0) link.children.push_back(txt("refreshInterval", std::to_string(lnk.REFRESH_INTERVAL)));
            if (!lnk.VIEW_REFRESH_MODE.empty()) link.children.push_back(txt("viewRefreshMode", lnk.VIEW_REFRESH_MODE));
            if (lnk.VIEW_REFRESH_TIME != 0) link.children.push_back(txt("viewRefreshTime", std::to_string(lnk.VIEW_REFRESH_TIME)));
            if (lnk.VIEW_BOUND_SCALE != 1.0) link.children.push_back(txt("viewBoundScale", std::to_string(lnk.VIEW_BOUND_SCALE)));
            if (!lnk.VIEW_FORMAT.empty()) link.children.push_back(txt("viewFormat", lnk.VIEW_FORMAT));
            if (!lnk.HTTP_QUERY.empty()) link.children.push_back(txt("httpQuery", lnk.HTTP_QUERY));
        } else {
            if (!nl.HREF.empty()) link.children.push_back(txt("href", nl.HREF));
            if (!nl.REFRESH_MODE.empty()) link.children.push_back(txt("refreshMode", nl.REFRESH_MODE));
            if (nl.REFRESH_INTERVAL != 0) link.children.push_back(txt("refreshInterval", std::to_string(nl.REFRESH_INTERVAL)));
            if (!nl.VIEW_REFRESH_MODE.empty()) link.children.push_back(txt("viewRefreshMode", nl.VIEW_REFRESH_MODE));
            if (nl.VIEW_REFRESH_TIME != 0) link.children.push_back(txt("viewRefreshTime", std::to_string(nl.VIEW_REFRESH_TIME)));
        }
        el.children.push_back(std::move(link));
    }
    return el;
}

static XmlElement write_ground_overlay_el(const KmlGroundOverlay& go) {
    auto txt = txt_fn();

    XmlElement el;
    el.tag = "GroundOverlay";
    if (!go.NAME.empty()) el.children.push_back(txt("name", go.NAME));
    if (!go.DESCRIPTION.empty()) el.children.push_back(txt("description", go.DESCRIPTION));
    if (!go.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (go.OPEN) el.children.push_back(txt("open", "1"));
    if (!go.STYLE_URL.empty()) el.children.push_back(txt("styleUrl", go.STYLE_URL));
    if (!go.ICON_HREF.empty()) {
        el.children.push_back(xml_elem("Icon", {}, {txt("href", go.ICON_HREF)}));
    }
    if (!go.COLOR.empty()) el.children.push_back(txt("color", go.COLOR));
    if (go.NORTH != 0 || go.SOUTH != 0 || go.EAST != 0 || go.WEST != 0) {
        XmlElement llb;
        llb.tag = "LatLonBox";
        llb.children.push_back(txt("north", std::to_string(go.NORTH)));
        llb.children.push_back(txt("south", std::to_string(go.SOUTH)));
        llb.children.push_back(txt("east", std::to_string(go.EAST)));
        llb.children.push_back(txt("west", std::to_string(go.WEST)));
        if (go.ROTATION != 0) llb.children.push_back(txt("rotation", std::to_string(go.ROTATION)));
        el.children.push_back(std::move(llb));
    }
    if (go.ALTITUDE != 0) el.children.push_back(txt("altitude", std::to_string(go.ALTITUDE)));
    if (!go.ALTITUDE_MODE.empty()) el.children.push_back(txt("altitudeMode", go.ALTITUDE_MODE));
    if (go.DRAW_ORDER != 0) el.children.push_back(txt("drawOrder", std::to_string(go.DRAW_ORDER)));
    if (go.LAT_LON_QUAD) {
        XmlElement llq;
        llq.tag = "gx:LatLonQuad";
        llq.children.push_back(txt("coordinates", coords_to_string(go.LAT_LON_QUAD->COORDINATES)));
        el.children.push_back(std::move(llq));
    }
    if (go.REGION) el.children.push_back(write_region_el(*go.REGION));
    return el;
}

static XmlElement write_screen_overlay_el(const KmlScreenOverlay& so) {
    auto txt = txt_fn();

    XmlElement el;
    el.tag = "ScreenOverlay";
    if (!so.NAME.empty()) el.children.push_back(txt("name", so.NAME));
    if (!so.DESCRIPTION.empty()) el.children.push_back(txt("description", so.DESCRIPTION));
    if (!so.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (!so.ICON_HREF.empty()) {
        el.children.push_back(xml_elem("Icon", {}, {txt("href", so.ICON_HREF)}));
    }
    if (!so.COLOR.empty()) el.children.push_back(txt("color", so.COLOR));
    if (so.DRAW_ORDER != 0) el.children.push_back(txt("drawOrder", std::to_string(so.DRAW_ORDER)));

    auto write_xy = [](const std::string& tag, double x, double y, const std::string& xu, const std::string& yu) -> std::optional<XmlElement> {
        if (x == 0 && y == 0 && xu.empty() && yu.empty()) return std::nullopt;
        XmlElement e;
        e.tag = tag;
        e.attributes["x"] = std::to_string(x);
        e.attributes["y"] = std::to_string(y);
        if (!xu.empty()) e.attributes["xunits"] = xu;
        if (!yu.empty()) e.attributes["yunits"] = yu;
        return e;
    };

    auto oxy = write_xy("overlayXY", so.OVERLAY_XY_X, so.OVERLAY_XY_Y, so.OVERLAY_XY_XUNITS, so.OVERLAY_XY_YUNITS);
    if (oxy) el.children.push_back(std::move(*oxy));
    auto sxy = write_xy("screenXY", so.SCREEN_XY_X, so.SCREEN_XY_Y, so.SCREEN_XY_XUNITS, so.SCREEN_XY_YUNITS);
    if (sxy) el.children.push_back(std::move(*sxy));
    auto rxy = write_xy("rotationXY", so.ROTATION_XY_X, so.ROTATION_XY_Y, so.ROTATION_XY_XUNITS, so.ROTATION_XY_YUNITS);
    if (rxy) el.children.push_back(std::move(*rxy));
    auto sz = write_xy("size", so.SIZE_X, so.SIZE_Y, so.SIZE_XUNITS, so.SIZE_YUNITS);
    if (sz) el.children.push_back(std::move(*sz));

    if (so.ROTATION != 0) el.children.push_back(txt("rotation", std::to_string(so.ROTATION)));
    return el;
}

static XmlElement write_photo_overlay_el(const KmlPhotoOverlay& po) {
    auto txt = txt_fn();

    XmlElement el;
    el.tag = "PhotoOverlay";
    if (!po.NAME.empty()) el.children.push_back(txt("name", po.NAME));
    if (!po.DESCRIPTION.empty()) el.children.push_back(txt("description", po.DESCRIPTION));
    if (!po.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (!po.ICON_HREF.empty()) {
        el.children.push_back(xml_elem("Icon", {}, {txt("href", po.ICON_HREF)}));
    }
    if (!po.COLOR.empty()) el.children.push_back(txt("color", po.COLOR));
    if (po.DRAW_ORDER != 0) el.children.push_back(txt("drawOrder", std::to_string(po.DRAW_ORDER)));
    if (po.ROTATION != 0) el.children.push_back(txt("rotation", std::to_string(po.ROTATION)));
    if (!po.SHAPE.empty()) el.children.push_back(txt("shape", po.SHAPE));

    if (po.VIEW_VOLUME) {
        const auto& vv = *po.VIEW_VOLUME;
        XmlElement ve;
        ve.tag = "ViewVolume";
        ve.children.push_back(txt("leftFov", std::to_string(vv.LEFT_FOV)));
        ve.children.push_back(txt("rightFov", std::to_string(vv.RIGHT_FOV)));
        ve.children.push_back(txt("bottomFov", std::to_string(vv.BOTTOM_FOV)));
        ve.children.push_back(txt("topFov", std::to_string(vv.TOP_FOV)));
        ve.children.push_back(txt("near", std::to_string(vv.NEAR)));
        el.children.push_back(std::move(ve));
    }

    if (po.IMAGE_PYRAMID) {
        const auto& ip = *po.IMAGE_PYRAMID;
        XmlElement ipe;
        ipe.tag = "ImagePyramid";
        ipe.children.push_back(txt("tileSize", std::to_string(ip.TILE_SIZE)));
        if (ip.MAX_WIDTH != 0) ipe.children.push_back(txt("maxWidth", std::to_string(ip.MAX_WIDTH)));
        if (ip.MAX_HEIGHT != 0) ipe.children.push_back(txt("maxHeight", std::to_string(ip.MAX_HEIGHT)));
        if (!ip.GRID_ORIGIN.empty()) ipe.children.push_back(txt("gridOrigin", ip.GRID_ORIGIN));
        el.children.push_back(std::move(ipe));
    }

    if (po.POINT) el.children.push_back(write_point_el(*po.POINT));

    return el;
}

static XmlElement write_tour_el(const KmlTour& tour) {
    auto txt = txt_fn();

    XmlElement el;
    el.tag = "gx:Tour";
    if (!tour.NAME.empty()) el.children.push_back(txt("name", tour.NAME));
    if (!tour.DESCRIPTION.empty()) el.children.push_back(txt("description", tour.DESCRIPTION));
    if (!tour.VISIBILITY) el.children.push_back(txt("visibility", "0"));

    if (tour.PLAYLIST) {
        XmlElement ple;
        ple.tag = "gx:Playlist";
        for (const auto& prim : tour.PLAYLIST->PRIMITIVES) {
            if (prim.FLY_TO) {
                const auto& ft = *prim.FLY_TO;
                XmlElement fte;
                fte.tag = "gx:FlyTo";
                fte.children.push_back(txt("gx:duration", std::to_string(ft.DURATION)));
                if (!ft.FLY_TO_MODE.empty()) fte.children.push_back(txt("gx:flyToMode", ft.FLY_TO_MODE));
                if (ft.LOOK_AT) fte.children.push_back(write_look_at_el(*ft.LOOK_AT));
                if (ft.CAMERA) fte.children.push_back(write_camera_el(*ft.CAMERA));
                ple.children.push_back(std::move(fte));
            } else if (prim.WAIT) {
                XmlElement we;
                we.tag = "gx:Wait";
                we.children.push_back(txt("gx:duration", std::to_string(prim.WAIT->DURATION)));
                ple.children.push_back(std::move(we));
            } else if (prim.ANIMATED_UPDATE) {
                const auto& au = *prim.ANIMATED_UPDATE;
                XmlElement aue;
                aue.tag = "gx:AnimatedUpdate";
                aue.children.push_back(txt("gx:duration", std::to_string(au.DURATION)));
                if (au.DELAYED_START != 0) aue.children.push_back(txt("gx:delayedStart", std::to_string(au.DELAYED_START)));
                if (au.UPDATE) aue.children.push_back(write_update_el(*au.UPDATE));
                ple.children.push_back(std::move(aue));
            } else if (prim.TOUR_CONTROL) {
                XmlElement tce;
                tce.tag = "gx:TourControl";
                if (!prim.TOUR_CONTROL->PLAY_MODE.empty()) tce.children.push_back(txt("gx:playMode", prim.TOUR_CONTROL->PLAY_MODE));
                ple.children.push_back(std::move(tce));
            } else if (prim.SOUND_CUE) {
                XmlElement sce;
                sce.tag = "gx:SoundCue";
                if (!prim.SOUND_CUE->HREF.empty()) sce.children.push_back(txt("href", prim.SOUND_CUE->HREF));
                if (prim.SOUND_CUE->DELAYED_START != 0) sce.children.push_back(txt("gx:delayedStart", std::to_string(prim.SOUND_CUE->DELAYED_START)));
                ple.children.push_back(std::move(sce));
            }
        }
        el.children.push_back(std::move(ple));
    }
    return el;
}

static XmlElement write_folder_el(const KmlFolder& folder) {
    XmlElement el;
    el.tag = "Folder";

    auto txt = txt_fn();

    if (!folder.NAME.empty()) el.children.push_back(txt("name", folder.NAME));
    if (!folder.DESCRIPTION.empty()) el.children.push_back(txt("description", folder.DESCRIPTION));
    if (!folder.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (folder.OPEN) el.children.push_back(txt("open", "1"));
    if (!folder.STYLE_URL.empty()) el.children.push_back(txt("styleUrl", folder.STYLE_URL));

    for (const auto& s : folder.STYLES) el.children.push_back(write_style_el(s));
    for (const auto& sm : folder.STYLE_MAPS) {
        XmlElement sme;
        sme.tag = "StyleMap";
        sme.attributes["id"] = sm.ID;
        for (const auto& pair : sm.PAIRS) {
            XmlElement pe;
            pe.tag = "Pair";
            pe.children.push_back(txt("key", pair.STATE));
            pe.children.push_back(txt("styleUrl", pair.STYLE_URL));
            sme.children.push_back(std::move(pe));
        }
        el.children.push_back(std::move(sme));
    }

    if (folder.LOOK_AT) el.children.push_back(write_look_at_el(*folder.LOOK_AT));
    if (folder.CAMERA) el.children.push_back(write_camera_el(*folder.CAMERA));

    if (folder.TIME_SPAN) {
        XmlElement tse;
        tse.tag = "TimeSpan";
        if (!folder.TIME_SPAN->BEGIN.empty()) tse.children.push_back(txt("begin", folder.TIME_SPAN->BEGIN));
        if (!folder.TIME_SPAN->END.empty()) tse.children.push_back(txt("end", folder.TIME_SPAN->END));
        el.children.push_back(std::move(tse));
    }
    if (folder.TIME_STAMP) {
        XmlElement tse;
        tse.tag = "TimeStamp";
        tse.children.push_back(txt("when", folder.TIME_STAMP->WHEN));
        el.children.push_back(std::move(tse));
    }

    if (folder.REGION) el.children.push_back(write_region_el(*folder.REGION));

    for (const auto& pm : folder.PLACEMARKS) el.children.push_back(write_placemark_el(pm));
    for (const auto& f : folder.FOLDERS) el.children.push_back(write_folder_el(f));
    for (const auto& nl : folder.NETWORK_LINKS) el.children.push_back(write_network_link_el(nl));
    for (const auto& go : folder.GROUND_OVERLAYS) el.children.push_back(write_ground_overlay_el(go));
    for (const auto& so : folder.SCREEN_OVERLAYS) el.children.push_back(write_screen_overlay_el(so));
    for (const auto& po : folder.PHOTO_OVERLAYS) el.children.push_back(write_photo_overlay_el(po));
    for (const auto& t : folder.TOURS) el.children.push_back(write_tour_el(t));

    if (!folder.EXTENDED_DATA.empty()) {
        XmlElement ed;
        ed.tag = "ExtendedData";
        for (const auto& data : folder.EXTENDED_DATA) {
            XmlElement de;
            de.tag = "Data";
            de.attributes["name"] = data.NAME;
            if (!data.DISPLAY_NAME.empty()) de.children.push_back(txt("displayName", data.DISPLAY_NAME));
            de.children.push_back(txt("value", data.VALUE));
            ed.children.push_back(std::move(de));
        }
        el.children.push_back(std::move(ed));
    }

    return el;
}

// ===================== Main Writer =====================

std::string write_kml_xml(const KmlMessage& msg) {
    auto txt = txt_fn();

    XmlElement doc;
    doc.tag = "Document";
    if (!msg.NAME.empty()) doc.children.push_back(txt("name", msg.NAME));
    if (!msg.DESCRIPTION.empty()) doc.children.push_back(txt("description", msg.DESCRIPTION));
    if (!msg.VISIBILITY) doc.children.push_back(txt("visibility", "0"));
    if (msg.OPEN) doc.children.push_back(txt("open", "1"));

    for (const auto& s : msg.SCHEMAS) {
        XmlElement se;
        se.tag = "Schema";
        if (!s.NAME.empty()) se.attributes["name"] = s.NAME;
        if (!s.ID.empty()) se.attributes["id"] = s.ID;
        for (const auto& sf : s.SIMPLE_FIELDS) {
            XmlElement sfe;
            sfe.tag = "SimpleField";
            if (!sf.NAME.empty()) sfe.attributes["name"] = sf.NAME;
            if (!sf.FIELD_TYPE.empty()) sfe.attributes["type"] = sf.FIELD_TYPE;
            if (!sf.DISPLAY_NAME.empty()) sfe.children.push_back(txt("displayName", sf.DISPLAY_NAME));
            se.children.push_back(std::move(sfe));
        }
        doc.children.push_back(std::move(se));
    }

    for (const auto& style : msg.STYLES) doc.children.push_back(write_style_el(style));

    for (const auto& sm : msg.STYLE_MAPS) {
        XmlElement sme;
        sme.tag = "StyleMap";
        sme.attributes["id"] = sm.ID;
        for (const auto& pair : sm.PAIRS) {
            XmlElement pe;
            pe.tag = "Pair";
            pe.children.push_back(txt("key", pair.STATE));
            pe.children.push_back(txt("styleUrl", pair.STYLE_URL));
            sme.children.push_back(std::move(pe));
        }
        doc.children.push_back(std::move(sme));
    }

    for (const auto& pm : msg.PLACEMARKS) doc.children.push_back(write_placemark_el(pm));
    for (const auto& f : msg.FOLDERS) doc.children.push_back(write_folder_el(f));
    for (const auto& nl : msg.NETWORK_LINKS) doc.children.push_back(write_network_link_el(nl));
    for (const auto& go : msg.GROUND_OVERLAYS) doc.children.push_back(write_ground_overlay_el(go));
    for (const auto& so : msg.SCREEN_OVERLAYS) doc.children.push_back(write_screen_overlay_el(so));
    for (const auto& po : msg.PHOTO_OVERLAYS) doc.children.push_back(write_photo_overlay_el(po));
    for (const auto& t : msg.TOURS) doc.children.push_back(write_tour_el(t));

    XmlElement kml;
    kml.tag = "kml";
    kml.attributes["xmlns"] = "http://www.opengis.net/kml/2.2";
    kml.attributes["xmlns:gx"] = "http://www.google.com/kml/ext/2.2";

    if (msg.NETWORK_LINK_CONTROL) {
        const auto& nlc = *msg.NETWORK_LINK_CONTROL;
        XmlElement nlce;
        nlce.tag = "NetworkLinkControl";
        if (nlc.MIN_REFRESH_PERIOD != 0) nlce.children.push_back(txt("minRefreshPeriod", std::to_string(nlc.MIN_REFRESH_PERIOD)));
        if (nlc.MAX_SESSION_LENGTH != -1) nlce.children.push_back(txt("maxSessionLength", std::to_string(nlc.MAX_SESSION_LENGTH)));
        if (!nlc.COOKIE.empty()) nlce.children.push_back(txt("cookie", nlc.COOKIE));
        if (!nlc.MESSAGE.empty()) nlce.children.push_back(txt("message", nlc.MESSAGE));
        if (!nlc.LINK_NAME.empty()) nlce.children.push_back(txt("linkName", nlc.LINK_NAME));
        if (!nlc.LINK_DESCRIPTION.empty()) nlce.children.push_back(txt("linkDescription", nlc.LINK_DESCRIPTION));
        if (!nlc.LINK_SNIPPET.empty()) nlce.children.push_back(txt("linkSnippet", nlc.LINK_SNIPPET));
        if (!nlc.EXPIRES.empty()) nlce.children.push_back(txt("expires", nlc.EXPIRES));
        if (nlc.UPDATE) nlce.children.push_back(write_update_el(*nlc.UPDATE));
        if (nlc.LOOK_AT) nlce.children.push_back(write_look_at_el(*nlc.LOOK_AT));
        if (nlc.CAMERA) nlce.children.push_back(write_camera_el(*nlc.CAMERA));
        kml.children.push_back(std::move(nlce));
    }

    kml.children.push_back(std::move(doc));

    return write_xml(kml);
}

} // namespace ccsds
