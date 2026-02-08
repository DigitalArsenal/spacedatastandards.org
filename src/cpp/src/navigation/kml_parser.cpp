#include "ccsds/navigation/kml_parser.h"
#include <stdexcept>
#include <sstream>

namespace ccsds {

static std::optional<double> opt_num(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stod(*v);
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

static KmlIconStyle parse_icon_style(const XmlElement& el) {
    KmlIconStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.SCALE = opt_num(get_child_text(el, "scale")).value_or(1.0);
    s.HEADING = opt_num(get_child_text(el, "heading")).value_or(0);
    auto* icon = find_child(el, "Icon");
    if (icon) s.ICON_HREF = get_child_text(*icon, "href").value_or("");
    return s;
}

static KmlLineStyle parse_line_style(const XmlElement& el) {
    KmlLineStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.WIDTH = opt_num(get_child_text(el, "width")).value_or(1.0);
    return s;
}

static KmlPolyStyle parse_poly_style(const XmlElement& el) {
    KmlPolyStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    auto fill_str = get_child_text(el, "fill");
    s.FILL = !fill_str || *fill_str != "0";
    auto outline_str = get_child_text(el, "outline");
    s.OUTLINE = !outline_str || *outline_str != "0";
    return s;
}

static KmlLabelStyle parse_label_style(const XmlElement& el) {
    KmlLabelStyle s;
    s.COLOR = get_child_text(el, "color").value_or("");
    s.SCALE = opt_num(get_child_text(el, "scale")).value_or(1.0);
    return s;
}

static KmlBalloonStyle parse_balloon_style(const XmlElement& el) {
    KmlBalloonStyle s;
    s.BG_COLOR = get_child_text(el, "bgColor").value_or("");
    s.TEXT_COLOR = get_child_text(el, "textColor").value_or("");
    s.TEXT = get_child_text(el, "text").value_or("");
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
    return style;
}

static KmlStyleMap parse_style_map(const XmlElement& el) {
    KmlStyleMap sm;
    sm.ID = get_attribute(el, "id").value_or("");
    for (const auto& child : el.children) {
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag == "Pair") {
            KmlStyleMapPair pair;
            pair.STATE = get_child_text(child, "key").value_or("");
            pair.STYLE_URL = get_child_text(child, "styleUrl").value_or("");
            sm.PAIRS.push_back(std::move(pair));
        }
    }
    return sm;
}

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
    return ls;
}

static KmlLinearRing parse_linear_ring(const XmlElement& el) {
    KmlLinearRing ring;
    auto coord_text = get_child_text(el, "coordinates").value_or("");
    ring.COORDINATES = parse_coordinates(coord_text);
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
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
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

static KmlMultiGeometry parse_multi_geometry(const XmlElement& el) {
    KmlMultiGeometry mg;
    for (const auto& child : el.children) {
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag == "Point") mg.POINTS.push_back(parse_point(child));
        else if (tag == "LineString") mg.LINE_STRINGS.push_back(parse_line_string(child));
        else if (tag == "Polygon") mg.POLYGONS.push_back(parse_polygon(child));
    }
    return mg;
}

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

static KmlGroundOverlay parse_ground_overlay(const XmlElement& el) {
    KmlGroundOverlay go;
    go.NAME = get_child_text(el, "name").value_or("");
    go.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    go.VISIBILITY = !vis_str || *vis_str != "0";
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
    return go;
}

static KmlPlacemark parse_placemark(const XmlElement& el) {
    KmlPlacemark pm;
    pm.NAME = get_child_text(el, "name").value_or("");
    pm.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    pm.VISIBILITY = !vis_str || *vis_str != "0";
    pm.STYLE_URL = get_child_text(el, "styleUrl").value_or("");
    pm.SNIPPET = get_child_text(el, "Snippet").value_or("");

    auto* style_el = find_child(el, "Style");
    if (style_el) pm.STYLE = parse_style(*style_el);

    auto* point_el = find_child(el, "Point");
    if (point_el) pm.POINT = parse_point(*point_el);

    auto* ls_el = find_child(el, "LineString");
    if (ls_el) pm.LINE_STRING = parse_line_string(*ls_el);

    auto* pg_el = find_child(el, "Polygon");
    if (pg_el) pm.POLYGON = parse_polygon(*pg_el);

    auto* mg_el = find_child(el, "MultiGeometry");
    if (mg_el) pm.MULTI_GEOMETRY = parse_multi_geometry(*mg_el);

    auto* la_el = find_child(el, "LookAt");
    if (la_el) pm.LOOK_AT = parse_look_at(*la_el);

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

    auto* ed_el = find_child(el, "ExtendedData");
    if (ed_el) {
        for (const auto& child : ed_el->children) {
            std::string tag = child.tag;
            auto colon = tag.rfind(':');
            if (colon != std::string::npos) tag = tag.substr(colon + 1);
            if (tag == "Data") {
                KmlData data;
                data.NAME = get_attribute(child, "name").value_or("");
                data.DISPLAY_NAME = get_child_text(child, "displayName").value_or("");
                data.VALUE = get_child_text(child, "value").value_or("");
                pm.EXTENDED_DATA.push_back(std::move(data));
            }
        }
    }

    return pm;
}

static KmlFolder parse_folder(const XmlElement& el) {
    KmlFolder folder;
    folder.NAME = get_child_text(el, "name").value_or("");
    folder.DESCRIPTION = get_child_text(el, "description").value_or("");
    auto vis_str = get_child_text(el, "visibility");
    folder.VISIBILITY = !vis_str || *vis_str != "0";
    auto open_str = get_child_text(el, "open");
    folder.OPEN = open_str && *open_str == "1";

    for (const auto& child : el.children) {
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag == "Placemark") folder.PLACEMARKS.push_back(parse_placemark(child));
        else if (tag == "Folder") folder.FOLDERS.push_back(parse_folder(child));
        else if (tag == "GroundOverlay") folder.GROUND_OVERLAYS.push_back(parse_ground_overlay(child));
    }
    return folder;
}

KmlMessage parse_kml_xml(std::string_view text) {
    auto root = parse_xml_string(text);

    // Navigate to Document element
    const XmlElement* kml = &root;
    if (root.tag == "kml" || root.tag.find(":kml") != std::string::npos ||
        root.tag.find("kml") != std::string::npos) {
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
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "Style") msg.STYLES.push_back(parse_style(child));
        else if (tag == "StyleMap") msg.STYLE_MAPS.push_back(parse_style_map(child));
        else if (tag == "Placemark") msg.PLACEMARKS.push_back(parse_placemark(child));
        else if (tag == "Folder") msg.FOLDERS.push_back(parse_folder(child));
        else if (tag == "GroundOverlay") msg.GROUND_OVERLAYS.push_back(parse_ground_overlay(child));
    }

    return msg;
}

// Writer helpers
static XmlElement write_style_el(const KmlStyle& style) {
    XmlElement el;
    el.tag = "Style";
    if (!style.ID.empty()) el.attributes["id"] = style.ID;

    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    if (style.ICON_STYLE) {
        const auto& is = *style.ICON_STYLE;
        XmlElement ise;
        ise.tag = "IconStyle";
        if (!is.COLOR.empty()) ise.children.push_back(txt("color", is.COLOR));
        if (is.SCALE != 1.0) ise.children.push_back(txt("scale", std::to_string(is.SCALE)));
        if (is.HEADING != 0) ise.children.push_back(txt("heading", std::to_string(is.HEADING)));
        if (!is.ICON_HREF.empty()) {
            ise.children.push_back(xml_elem("Icon", {}, {txt("href", is.ICON_HREF)}));
        }
        el.children.push_back(std::move(ise));
    }

    if (style.LABEL_STYLE) {
        const auto& ls = *style.LABEL_STYLE;
        XmlElement lse;
        lse.tag = "LabelStyle";
        if (!ls.COLOR.empty()) lse.children.push_back(txt("color", ls.COLOR));
        if (ls.SCALE != 1.0) lse.children.push_back(txt("scale", std::to_string(ls.SCALE)));
        el.children.push_back(std::move(lse));
    }

    if (style.LINE_STYLE) {
        const auto& ls = *style.LINE_STYLE;
        XmlElement lse;
        lse.tag = "LineStyle";
        if (!ls.COLOR.empty()) lse.children.push_back(txt("color", ls.COLOR));
        if (ls.WIDTH != 1.0) lse.children.push_back(txt("width", std::to_string(ls.WIDTH)));
        el.children.push_back(std::move(lse));
    }

    if (style.POLY_STYLE) {
        const auto& ps = *style.POLY_STYLE;
        XmlElement pse;
        pse.tag = "PolyStyle";
        if (!ps.COLOR.empty()) pse.children.push_back(txt("color", ps.COLOR));
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
        el.children.push_back(std::move(bse));
    }

    return el;
}

static XmlElement write_placemark_el(const KmlPlacemark& pm) {
    XmlElement el;
    el.tag = "Placemark";

    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    if (!pm.NAME.empty()) el.children.push_back(txt("name", pm.NAME));
    if (!pm.DESCRIPTION.empty()) el.children.push_back(txt("description", pm.DESCRIPTION));
    if (!pm.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (!pm.STYLE_URL.empty()) el.children.push_back(txt("styleUrl", pm.STYLE_URL));
    if (!pm.SNIPPET.empty()) el.children.push_back(txt("Snippet", pm.SNIPPET));

    if (pm.STYLE) el.children.push_back(write_style_el(*pm.STYLE));

    if (pm.POINT) {
        const auto& pt = *pm.POINT;
        XmlElement pte;
        pte.tag = "Point";
        if (pt.EXTRUDE) pte.children.push_back(txt("extrude", "1"));
        if (!pt.ALTITUDE_MODE.empty()) pte.children.push_back(txt("altitudeMode", pt.ALTITUDE_MODE));
        pte.children.push_back(txt("coordinates", coord_to_string(pt.COORDINATES)));
        el.children.push_back(std::move(pte));
    }

    if (pm.LINE_STRING) {
        const auto& ls = *pm.LINE_STRING;
        XmlElement lse;
        lse.tag = "LineString";
        if (ls.EXTRUDE) lse.children.push_back(txt("extrude", "1"));
        if (ls.TESSELLATE) lse.children.push_back(txt("tessellate", "1"));
        if (!ls.ALTITUDE_MODE.empty()) lse.children.push_back(txt("altitudeMode", ls.ALTITUDE_MODE));
        lse.children.push_back(txt("coordinates", coords_to_string(ls.COORDINATES)));
        el.children.push_back(std::move(lse));
    }

    if (pm.POLYGON) {
        const auto& pg = *pm.POLYGON;
        XmlElement pge;
        pge.tag = "Polygon";
        if (pg.EXTRUDE) pge.children.push_back(txt("extrude", "1"));
        if (pg.TESSELLATE) pge.children.push_back(txt("tessellate", "1"));
        if (!pg.ALTITUDE_MODE.empty()) pge.children.push_back(txt("altitudeMode", pg.ALTITUDE_MODE));
        XmlElement outer;
        outer.tag = "outerBoundaryIs";
        XmlElement outerRing;
        outerRing.tag = "LinearRing";
        outerRing.children.push_back(txt("coordinates", coords_to_string(pg.OUTER_BOUNDARY.COORDINATES)));
        outer.children.push_back(std::move(outerRing));
        pge.children.push_back(std::move(outer));
        for (const auto& inner : pg.INNER_BOUNDARIES) {
            XmlElement innerEl;
            innerEl.tag = "innerBoundaryIs";
            XmlElement innerRing;
            innerRing.tag = "LinearRing";
            innerRing.children.push_back(txt("coordinates", coords_to_string(inner.COORDINATES)));
            innerEl.children.push_back(std::move(innerRing));
            pge.children.push_back(std::move(innerEl));
        }
        el.children.push_back(std::move(pge));
    }

    if (pm.MULTI_GEOMETRY) {
        const auto& mg = *pm.MULTI_GEOMETRY;
        XmlElement mge;
        mge.tag = "MultiGeometry";
        for (const auto& pt : mg.POINTS) {
            XmlElement pte;
            pte.tag = "Point";
            pte.children.push_back(txt("coordinates", coord_to_string(pt.COORDINATES)));
            mge.children.push_back(std::move(pte));
        }
        for (const auto& ls : mg.LINE_STRINGS) {
            XmlElement lse;
            lse.tag = "LineString";
            lse.children.push_back(txt("coordinates", coords_to_string(ls.COORDINATES)));
            mge.children.push_back(std::move(lse));
        }
        for (const auto& pg : mg.POLYGONS) {
            XmlElement pge;
            pge.tag = "Polygon";
            XmlElement outer;
            outer.tag = "outerBoundaryIs";
            XmlElement outerRing;
            outerRing.tag = "LinearRing";
            outerRing.children.push_back(txt("coordinates", coords_to_string(pg.OUTER_BOUNDARY.COORDINATES)));
            outer.children.push_back(std::move(outerRing));
            pge.children.push_back(std::move(outer));
            mge.children.push_back(std::move(pge));
        }
        el.children.push_back(std::move(mge));
    }

    if (pm.LOOK_AT) {
        const auto& la = *pm.LOOK_AT;
        XmlElement lae;
        lae.tag = "LookAt";
        lae.children.push_back(txt("longitude", std::to_string(la.LONGITUDE)));
        lae.children.push_back(txt("latitude", std::to_string(la.LATITUDE)));
        lae.children.push_back(txt("altitude", std::to_string(la.ALTITUDE)));
        lae.children.push_back(txt("heading", std::to_string(la.HEADING)));
        lae.children.push_back(txt("tilt", std::to_string(la.TILT)));
        lae.children.push_back(txt("range", std::to_string(la.RANGE)));
        if (!la.ALTITUDE_MODE.empty()) lae.children.push_back(txt("altitudeMode", la.ALTITUDE_MODE));
        el.children.push_back(std::move(lae));
    }

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

    if (!pm.EXTENDED_DATA.empty()) {
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
        el.children.push_back(std::move(ed));
    }

    return el;
}

static XmlElement write_folder_el(const KmlFolder& folder) {
    XmlElement el;
    el.tag = "Folder";

    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    if (!folder.NAME.empty()) el.children.push_back(txt("name", folder.NAME));
    if (!folder.DESCRIPTION.empty()) el.children.push_back(txt("description", folder.DESCRIPTION));
    if (!folder.VISIBILITY) el.children.push_back(txt("visibility", "0"));
    if (folder.OPEN) el.children.push_back(txt("open", "1"));

    for (const auto& pm : folder.PLACEMARKS) el.children.push_back(write_placemark_el(pm));
    for (const auto& f : folder.FOLDERS) el.children.push_back(write_folder_el(f));

    return el;
}

std::string write_kml_xml(const KmlMessage& msg) {
    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    XmlElement doc;
    doc.tag = "Document";
    if (!msg.NAME.empty()) doc.children.push_back(txt("name", msg.NAME));
    if (!msg.DESCRIPTION.empty()) doc.children.push_back(txt("description", msg.DESCRIPTION));
    if (!msg.VISIBILITY) doc.children.push_back(txt("visibility", "0"));
    if (msg.OPEN) doc.children.push_back(txt("open", "1"));

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

    XmlElement kml;
    kml.tag = "kml";
    kml.attributes["xmlns"] = "http://www.opengis.net/kml/2.2";
    kml.children.push_back(std::move(doc));

    return write_xml(kml);
}

} // namespace ccsds
