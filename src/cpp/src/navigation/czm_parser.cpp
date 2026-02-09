#include "ccsds/navigation/czm_parser.h"
#include <stdexcept>

namespace ccsds {

static CzmColor parse_color(const JsonValue& val) {
    CzmColor c;
    if (val.is_object()) {
        auto* rgba = val.get("rgba");
        if (rgba && rgba->is_array() && rgba->arr.size() >= 4) {
            c.RED = static_cast<int>(rgba->arr[0].as_number());
            c.GREEN = static_cast<int>(rgba->arr[1].as_number());
            c.BLUE = static_cast<int>(rgba->arr[2].as_number());
            c.ALPHA = static_cast<int>(rgba->arr[3].as_number());
        } else if (val.get("rgbaf")) {
            auto* rgbaf = val.get("rgbaf");
            if (rgbaf && rgbaf->is_array() && rgbaf->arr.size() >= 4) {
                c.RED = static_cast<int>(rgbaf->arr[0].as_number() * 255);
                c.GREEN = static_cast<int>(rgbaf->arr[1].as_number() * 255);
                c.BLUE = static_cast<int>(rgbaf->arr[2].as_number() * 255);
                c.ALPHA = static_cast<int>(rgbaf->arr[3].as_number() * 255);
            }
        }
    }
    return c;
}

static std::vector<double> parse_double_array(const JsonValue& val) {
    std::vector<double> result;
    if (val.is_array()) {
        for (const auto& item : val.arr) {
            if (item.is_number()) result.push_back(item.as_number());
        }
    }
    return result;
}

static std::optional<CzmColor> parse_opt_color(const JsonValue& parent, const std::string& key) {
    auto* v = parent.get(key);
    if (!v) return std::nullopt;
    return parse_color(*v);
}

static CzmNearFarScalar parse_near_far_scalar(const JsonValue& val) {
    CzmNearFarScalar nfs;
    if (val.is_object()) {
        auto* arr = val.get("nearFarScalar");
        if (arr && arr->is_array() && arr->arr.size() >= 4) {
            nfs.NEAR_DISTANCE = arr->arr[0].as_number();
            nfs.NEAR_VALUE = arr->arr[1].as_number();
            nfs.FAR_DISTANCE = arr->arr[2].as_number();
            nfs.FAR_VALUE = arr->arr[3].as_number();
        } else {
            nfs.NEAR_DISTANCE = val.get_number("nearDistance").value_or(0);
            nfs.NEAR_VALUE = val.get_number("nearValue").value_or(0);
            nfs.FAR_DISTANCE = val.get_number("farDistance").value_or(0);
            nfs.FAR_VALUE = val.get_number("farValue").value_or(0);
        }
    } else if (val.is_array() && val.arr.size() >= 4) {
        nfs.NEAR_DISTANCE = val.arr[0].as_number();
        nfs.NEAR_VALUE = val.arr[1].as_number();
        nfs.FAR_DISTANCE = val.arr[2].as_number();
        nfs.FAR_VALUE = val.arr[3].as_number();
    }
    return nfs;
}

static CzmBillboard parse_billboard(const JsonValue& val) {
    CzmBillboard bb;
    bb.SHOW = val.get_bool("show").value_or(true);
    bb.IMAGE = val.get_string("image").value_or("");
    bb.SCALE = val.get_number("scale").value_or(1.0);
    bb.COLOR = parse_opt_color(val, "color");
    bb.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    bb.HORIZONTAL_ORIGIN = val.get_string("horizontalOrigin").value_or("");
    bb.VERTICAL_ORIGIN = val.get_string("verticalOrigin").value_or("");

    auto* po = val.get("pixelOffset");
    if (po && po->is_object()) {
        auto* cart = po->get("cartesian2");
        if (cart && cart->is_array() && cart->arr.size() >= 2) {
            bb.PIXEL_OFFSET_X = cart->arr[0].as_number();
            bb.PIXEL_OFFSET_Y = cart->arr[1].as_number();
        }
    }

    auto* tbd = val.get("translucencyByDistance");
    if (tbd) {
        bb.TRANSLUCENCY_BY_DISTANCE = parse_near_far_scalar(*tbd);
    }

    return bb;
}

static CzmLabel parse_label(const JsonValue& val) {
    CzmLabel lbl;
    lbl.SHOW = val.get_bool("show").value_or(true);
    lbl.TEXT = val.get_string("text").value_or("");
    lbl.FONT = val.get_string("font").value_or("");
    lbl.STYLE = val.get_string("style").value_or("");
    lbl.SCALE = val.get_number("scale").value_or(1.0);
    lbl.FILL_COLOR = parse_opt_color(val, "fillColor");
    lbl.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    lbl.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(0);
    lbl.HORIZONTAL_ORIGIN = val.get_string("horizontalOrigin").value_or("");
    lbl.VERTICAL_ORIGIN = val.get_string("verticalOrigin").value_or("");
    lbl.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");

    auto* po = val.get("pixelOffset");
    if (po && po->is_object()) {
        auto* cart = po->get("cartesian2");
        if (cart && cart->is_array() && cart->arr.size() >= 2) {
            lbl.PIXEL_OFFSET_X = cart->arr[0].as_number();
            lbl.PIXEL_OFFSET_Y = cart->arr[1].as_number();
        }
    }
    return lbl;
}

static CzmPoint parse_czm_point(const JsonValue& val) {
    CzmPoint pt;
    pt.SHOW = val.get_bool("show").value_or(true);
    pt.COLOR = parse_opt_color(val, "color");
    pt.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    pt.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(0);
    pt.PIXEL_SIZE = val.get_number("pixelSize").value_or(1);
    pt.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    return pt;
}

static CzmPolyline parse_polyline(const JsonValue& val) {
    CzmPolyline pl;
    pl.SHOW = val.get_bool("show").value_or(true);
    pl.WIDTH = val.get_number("width").value_or(1);
    pl.CLAMP_TO_GROUND = val.get_bool("clampToGround").value_or(false);

    auto* positions = val.get("positions");
    if (positions) {
        auto* cd = positions->get("cartographicDegrees");
        if (cd) pl.POSITIONS_CARTOGRAPHIC_DEGREES = parse_double_array(*cd);
        auto* cart = positions->get("cartesian");
        if (cart) pl.POSITIONS_CARTESIAN = parse_double_array(*cart);
    }

    auto* material = val.get("material");
    if (material) {
        auto* solidColor = material->get("solidColor");
        if (solidColor) {
            pl.COLOR = parse_opt_color(*solidColor, "color");
        }
    }
    return pl;
}

static CzmPolygon parse_czm_polygon(const JsonValue& val) {
    CzmPolygon pg;
    pg.SHOW = val.get_bool("show").value_or(true);
    pg.FILL = val.get_bool("fill").value_or(true);
    pg.OUTLINE = val.get_bool("outline").value_or(false);
    pg.EXTRUDED_HEIGHT = val.get_number("extrudedHeight").value_or(0);
    pg.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    pg.CLASSIFICATION_TYPE = val.get_string("classificationType").value_or("");

    auto* positions = val.get("positions");
    if (positions) {
        auto* cd = positions->get("cartographicDegrees");
        if (cd) pg.POSITIONS_CARTOGRAPHIC_DEGREES = parse_double_array(*cd);
        auto* cart = positions->get("cartesian");
        if (cart) pg.POSITIONS_CARTESIAN = parse_double_array(*cart);
    }

    auto* material = val.get("material");
    if (material) {
        auto* solidColor = material->get("solidColor");
        if (solidColor) {
            pg.COLOR = parse_opt_color(*solidColor, "color");
        }
    }
    pg.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    return pg;
}

static CzmPath parse_path(const JsonValue& val) {
    CzmPath path;
    path.SHOW = val.get_bool("show").value_or(true);
    path.LEAD_TIME = val.get_number("leadTime").value_or(0);
    path.TRAIL_TIME = val.get_number("trailTime").value_or(0);
    path.WIDTH = val.get_number("width").value_or(1);
    path.RESOLUTION = val.get_number("resolution").value_or(60);

    auto* material = val.get("material");
    if (material) {
        auto* solidColor = material->get("solidColor");
        if (solidColor) {
            path.COLOR = parse_opt_color(*solidColor, "color");
        }
    }
    return path;
}

static CzmModel parse_model(const JsonValue& val) {
    CzmModel model;
    model.SHOW = val.get_bool("show").value_or(true);
    model.GLTF = val.get_string("gltf").value_or("");
    model.SCALE = val.get_number("scale").value_or(1.0);
    model.MINIMUM_PIXEL_SIZE = val.get_number("minimumPixelSize").value_or(0);
    model.MAXIMUM_SCALE = val.get_number("maximumScale").value_or(0);
    model.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    model.COLOR = parse_opt_color(val, "color");
    return model;
}

static CzmEllipse parse_ellipse(const JsonValue& val) {
    CzmEllipse e;
    e.SHOW = val.get_bool("show").value_or(true);
    e.SEMI_MAJOR_AXIS = val.get_number("semiMajorAxis").value_or(0);
    e.SEMI_MINOR_AXIS = val.get_number("semiMinorAxis").value_or(0);
    e.ROTATION = val.get_number("rotation").value_or(0);
    e.FILL = val.get_bool("fill").value_or(true);
    e.OUTLINE = val.get_bool("outline").value_or(false);
    e.HEIGHT = val.get_number("height").value_or(0);
    e.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");

    auto* material = val.get("material");
    if (material) {
        auto* solidColor = material->get("solidColor");
        if (solidColor) {
            e.COLOR = parse_opt_color(*solidColor, "color");
        }
    }
    e.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    return e;
}

static CzmPacket parse_packet(const JsonValue& val) {
    CzmPacket pkt;
    pkt.ID = val.get_string("id").value_or("");
    pkt.NAME = val.get_string("name").value_or("");
    pkt.PARENT = val.get_string("parent").value_or("");
    pkt.DESCRIPTION = val.get_string("description").value_or("");
    pkt.AVAILABILITY = val.get_string("availability").value_or("");

    auto* pos = val.get("position");
    if (pos) {
        pkt.POSITION_EPOCH = pos->get_string("epoch").value_or("");
        auto* cd = pos->get("cartographicDegrees");
        if (cd) {
            if (cd->is_array()) {
                if (cd->arr.size() == 3) {
                    // Single position [lon, lat, height]
                    CzmCartographicDegrees cDeg;
                    cDeg.LONGITUDE = cd->arr[0].as_number();
                    cDeg.LATITUDE = cd->arr[1].as_number();
                    cDeg.HEIGHT = cd->arr[2].as_number();
                    pkt.POSITION_CARTOGRAPHIC_DEGREES = cDeg;
                } else {
                    // Time-tagged array
                    pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY = parse_double_array(*cd);
                }
            }
        }
        auto* cart = pos->get("cartesian");
        if (cart) {
            if (cart->is_array()) {
                if (cart->arr.size() == 3) {
                    CzmCartesian c;
                    c.X = cart->arr[0].as_number();
                    c.Y = cart->arr[1].as_number();
                    c.Z = cart->arr[2].as_number();
                    pkt.POSITION_CARTESIAN = c;
                } else {
                    pkt.POSITION_CARTESIAN_ARRAY = parse_double_array(*cart);
                }
            }
        }
    }

    auto* bb = val.get("billboard");
    if (bb) pkt.BILLBOARD = parse_billboard(*bb);

    auto* lbl = val.get("label");
    if (lbl) pkt.LABEL = parse_label(*lbl);

    auto* pt = val.get("point");
    if (pt) pkt.POINT = parse_czm_point(*pt);

    auto* pl = val.get("polyline");
    if (pl) pkt.POLYLINE = parse_polyline(*pl);

    auto* pg = val.get("polygon");
    if (pg) pkt.POLYGON = parse_czm_polygon(*pg);

    auto* mdl = val.get("model");
    if (mdl) pkt.MODEL = parse_model(*mdl);

    auto* path = val.get("path");
    if (path) pkt.PATH = parse_path(*path);

    auto* ellipse = val.get("ellipse");
    if (ellipse) pkt.ELLIPSE = parse_ellipse(*ellipse);

    return pkt;
}

CzmMessage parse_czm_json(std::string_view text) {
    auto root = parse_json_string(text);
    CzmMessage msg;

    if (!root.is_array()) {
        throw std::runtime_error("CZML document must be a JSON array");
    }

    for (size_t i = 0; i < root.arr.size(); i++) {
        const auto& item = root.arr[i];
        if (!item.is_object()) continue;

        auto id = item.get_string("id").value_or("");
        if (id == "document") {
            msg.NAME = item.get_string("name").value_or("");
            msg.VERSION = item.get_string("version").value_or("1.0");
            auto* clock = item.get("clock");
            if (clock) {
                msg.CLOCK_CURRENT_TIME = clock->get_string("currentTime").value_or("");
                msg.CLOCK_INTERVAL = clock->get_string("interval").value_or("");
                msg.CLOCK_MULTIPLIER = clock->get_number("multiplier").value_or(1.0);
            }
        } else {
            msg.PACKETS.push_back(parse_packet(item));
        }
    }

    return msg;
}

// Writer helpers
static JsonValue color_to_json(const CzmColor& c) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> rgba;
    rgba.push_back(json_number(c.RED));
    rgba.push_back(json_number(c.GREEN));
    rgba.push_back(json_number(c.BLUE));
    rgba.push_back(json_number(c.ALPHA));
    obj["rgba"] = json_array(std::move(rgba));
    return json_object(std::move(obj));
}

static JsonValue double_array_to_json(const std::vector<double>& arr) {
    std::vector<JsonValue> items;
    for (double d : arr) items.push_back(json_number(d));
    return json_array(std::move(items));
}

static JsonValue material_solid_color(const CzmColor& c) {
    std::map<std::string, JsonValue> solidColor;
    solidColor["color"] = color_to_json(c);
    std::map<std::string, JsonValue> material;
    material["solidColor"] = json_object(std::move(solidColor));
    return json_object(std::move(material));
}

static JsonValue near_far_scalar_to_json(const CzmNearFarScalar& nfs) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(nfs.NEAR_DISTANCE));
    arr.push_back(json_number(nfs.NEAR_VALUE));
    arr.push_back(json_number(nfs.FAR_DISTANCE));
    arr.push_back(json_number(nfs.FAR_VALUE));
    obj["nearFarScalar"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

static JsonValue packet_to_json(const CzmPacket& pkt) {
    std::map<std::string, JsonValue> obj;
    obj["id"] = json_string(pkt.ID);
    if (!pkt.NAME.empty()) obj["name"] = json_string(pkt.NAME);
    if (!pkt.PARENT.empty()) obj["parent"] = json_string(pkt.PARENT);
    if (!pkt.DESCRIPTION.empty()) obj["description"] = json_string(pkt.DESCRIPTION);
    if (!pkt.AVAILABILITY.empty()) obj["availability"] = json_string(pkt.AVAILABILITY);

    // Position
    bool has_pos = pkt.POSITION_CARTOGRAPHIC_DEGREES || pkt.POSITION_CARTESIAN
        || !pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY.empty()
        || !pkt.POSITION_CARTESIAN_ARRAY.empty();
    if (has_pos) {
        std::map<std::string, JsonValue> pos;
        if (!pkt.POSITION_EPOCH.empty()) pos["epoch"] = json_string(pkt.POSITION_EPOCH);
        if (pkt.POSITION_CARTOGRAPHIC_DEGREES) {
            const auto& cd = *pkt.POSITION_CARTOGRAPHIC_DEGREES;
            std::vector<JsonValue> arr;
            arr.push_back(json_number(cd.LONGITUDE));
            arr.push_back(json_number(cd.LATITUDE));
            arr.push_back(json_number(cd.HEIGHT));
            pos["cartographicDegrees"] = json_array(std::move(arr));
        } else if (!pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY.empty()) {
            pos["cartographicDegrees"] = double_array_to_json(pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY);
        }
        if (pkt.POSITION_CARTESIAN) {
            const auto& c = *pkt.POSITION_CARTESIAN;
            std::vector<JsonValue> arr;
            arr.push_back(json_number(c.X));
            arr.push_back(json_number(c.Y));
            arr.push_back(json_number(c.Z));
            pos["cartesian"] = json_array(std::move(arr));
        } else if (!pkt.POSITION_CARTESIAN_ARRAY.empty()) {
            pos["cartesian"] = double_array_to_json(pkt.POSITION_CARTESIAN_ARRAY);
        }
        obj["position"] = json_object(std::move(pos));
    }

    if (pkt.BILLBOARD) {
        const auto& bb = *pkt.BILLBOARD;
        std::map<std::string, JsonValue> bobj;
        bobj["show"] = json_bool(bb.SHOW);
        if (!bb.IMAGE.empty()) bobj["image"] = json_string(bb.IMAGE);
        if (bb.SCALE != 1.0) bobj["scale"] = json_number(bb.SCALE);
        if (bb.COLOR) bobj["color"] = color_to_json(*bb.COLOR);
        if (!bb.HEIGHT_REFERENCE.empty()) bobj["heightReference"] = json_string(bb.HEIGHT_REFERENCE);
        if (bb.PIXEL_OFFSET_X != 0 || bb.PIXEL_OFFSET_Y != 0) {
            std::map<std::string, JsonValue> po;
            std::vector<JsonValue> cart2;
            cart2.push_back(json_number(bb.PIXEL_OFFSET_X));
            cart2.push_back(json_number(bb.PIXEL_OFFSET_Y));
            po["cartesian2"] = json_array(std::move(cart2));
            bobj["pixelOffset"] = json_object(std::move(po));
        }
        if (!bb.HORIZONTAL_ORIGIN.empty()) bobj["horizontalOrigin"] = json_string(bb.HORIZONTAL_ORIGIN);
        if (!bb.VERTICAL_ORIGIN.empty()) bobj["verticalOrigin"] = json_string(bb.VERTICAL_ORIGIN);
        if (bb.TRANSLUCENCY_BY_DISTANCE) bobj["translucencyByDistance"] = near_far_scalar_to_json(*bb.TRANSLUCENCY_BY_DISTANCE);
        obj["billboard"] = json_object(std::move(bobj));
    }

    if (pkt.LABEL) {
        const auto& lbl = *pkt.LABEL;
        std::map<std::string, JsonValue> lobj;
        lobj["show"] = json_bool(lbl.SHOW);
        if (!lbl.TEXT.empty()) lobj["text"] = json_string(lbl.TEXT);
        if (!lbl.FONT.empty()) lobj["font"] = json_string(lbl.FONT);
        if (!lbl.STYLE.empty()) lobj["style"] = json_string(lbl.STYLE);
        if (lbl.SCALE != 1.0) lobj["scale"] = json_number(lbl.SCALE);
        if (lbl.FILL_COLOR) lobj["fillColor"] = color_to_json(*lbl.FILL_COLOR);
        if (lbl.OUTLINE_COLOR) lobj["outlineColor"] = color_to_json(*lbl.OUTLINE_COLOR);
        if (lbl.OUTLINE_WIDTH != 0) lobj["outlineWidth"] = json_number(lbl.OUTLINE_WIDTH);
        if (lbl.PIXEL_OFFSET_X != 0 || lbl.PIXEL_OFFSET_Y != 0) {
            std::map<std::string, JsonValue> po;
            std::vector<JsonValue> cart2;
            cart2.push_back(json_number(lbl.PIXEL_OFFSET_X));
            cart2.push_back(json_number(lbl.PIXEL_OFFSET_Y));
            po["cartesian2"] = json_array(std::move(cart2));
            lobj["pixelOffset"] = json_object(std::move(po));
        }
        if (!lbl.HORIZONTAL_ORIGIN.empty()) lobj["horizontalOrigin"] = json_string(lbl.HORIZONTAL_ORIGIN);
        if (!lbl.VERTICAL_ORIGIN.empty()) lobj["verticalOrigin"] = json_string(lbl.VERTICAL_ORIGIN);
        if (!lbl.HEIGHT_REFERENCE.empty()) lobj["heightReference"] = json_string(lbl.HEIGHT_REFERENCE);
        obj["label"] = json_object(std::move(lobj));
    }

    if (pkt.POINT) {
        const auto& pt = *pkt.POINT;
        std::map<std::string, JsonValue> pobj;
        pobj["show"] = json_bool(pt.SHOW);
        if (pt.COLOR) pobj["color"] = color_to_json(*pt.COLOR);
        if (pt.OUTLINE_COLOR) pobj["outlineColor"] = color_to_json(*pt.OUTLINE_COLOR);
        if (pt.OUTLINE_WIDTH != 0) pobj["outlineWidth"] = json_number(pt.OUTLINE_WIDTH);
        if (pt.PIXEL_SIZE != 1) pobj["pixelSize"] = json_number(pt.PIXEL_SIZE);
        if (!pt.HEIGHT_REFERENCE.empty()) pobj["heightReference"] = json_string(pt.HEIGHT_REFERENCE);
        obj["point"] = json_object(std::move(pobj));
    }

    if (pkt.POLYLINE) {
        const auto& pl = *pkt.POLYLINE;
        std::map<std::string, JsonValue> plobj;
        plobj["show"] = json_bool(pl.SHOW);
        if (pl.WIDTH != 1) plobj["width"] = json_number(pl.WIDTH);
        if (pl.CLAMP_TO_GROUND) plobj["clampToGround"] = json_bool(true);
        std::map<std::string, JsonValue> positions;
        if (!pl.POSITIONS_CARTOGRAPHIC_DEGREES.empty())
            positions["cartographicDegrees"] = double_array_to_json(pl.POSITIONS_CARTOGRAPHIC_DEGREES);
        if (!pl.POSITIONS_CARTESIAN.empty())
            positions["cartesian"] = double_array_to_json(pl.POSITIONS_CARTESIAN);
        if (!positions.empty()) plobj["positions"] = json_object(std::move(positions));
        if (pl.COLOR) plobj["material"] = material_solid_color(*pl.COLOR);
        obj["polyline"] = json_object(std::move(plobj));
    }

    if (pkt.POLYGON) {
        const auto& pg = *pkt.POLYGON;
        std::map<std::string, JsonValue> pgobj;
        pgobj["show"] = json_bool(pg.SHOW);
        if (!pg.FILL) pgobj["fill"] = json_bool(false);
        if (pg.OUTLINE) pgobj["outline"] = json_bool(true);
        if (pg.EXTRUDED_HEIGHT != 0) pgobj["extrudedHeight"] = json_number(pg.EXTRUDED_HEIGHT);
        if (!pg.HEIGHT_REFERENCE.empty()) pgobj["heightReference"] = json_string(pg.HEIGHT_REFERENCE);
        if (!pg.CLASSIFICATION_TYPE.empty()) pgobj["classificationType"] = json_string(pg.CLASSIFICATION_TYPE);
        std::map<std::string, JsonValue> positions;
        if (!pg.POSITIONS_CARTOGRAPHIC_DEGREES.empty())
            positions["cartographicDegrees"] = double_array_to_json(pg.POSITIONS_CARTOGRAPHIC_DEGREES);
        if (!pg.POSITIONS_CARTESIAN.empty())
            positions["cartesian"] = double_array_to_json(pg.POSITIONS_CARTESIAN);
        if (!positions.empty()) pgobj["positions"] = json_object(std::move(positions));
        if (pg.COLOR) pgobj["material"] = material_solid_color(*pg.COLOR);
        if (pg.OUTLINE_COLOR) pgobj["outlineColor"] = color_to_json(*pg.OUTLINE_COLOR);
        obj["polygon"] = json_object(std::move(pgobj));
    }

    if (pkt.MODEL) {
        const auto& mdl = *pkt.MODEL;
        std::map<std::string, JsonValue> mobj;
        mobj["show"] = json_bool(mdl.SHOW);
        if (!mdl.GLTF.empty()) mobj["gltf"] = json_string(mdl.GLTF);
        if (mdl.SCALE != 1.0) mobj["scale"] = json_number(mdl.SCALE);
        if (mdl.MINIMUM_PIXEL_SIZE != 0) mobj["minimumPixelSize"] = json_number(mdl.MINIMUM_PIXEL_SIZE);
        if (mdl.MAXIMUM_SCALE != 0) mobj["maximumScale"] = json_number(mdl.MAXIMUM_SCALE);
        if (!mdl.HEIGHT_REFERENCE.empty()) mobj["heightReference"] = json_string(mdl.HEIGHT_REFERENCE);
        if (mdl.COLOR) mobj["color"] = color_to_json(*mdl.COLOR);
        obj["model"] = json_object(std::move(mobj));
    }

    if (pkt.PATH) {
        const auto& path = *pkt.PATH;
        std::map<std::string, JsonValue> pathobj;
        pathobj["show"] = json_bool(path.SHOW);
        if (path.LEAD_TIME != 0) pathobj["leadTime"] = json_number(path.LEAD_TIME);
        if (path.TRAIL_TIME != 0) pathobj["trailTime"] = json_number(path.TRAIL_TIME);
        if (path.WIDTH != 1) pathobj["width"] = json_number(path.WIDTH);
        if (path.RESOLUTION != 60) pathobj["resolution"] = json_number(path.RESOLUTION);
        if (path.COLOR) pathobj["material"] = material_solid_color(*path.COLOR);
        obj["path"] = json_object(std::move(pathobj));
    }

    if (pkt.ELLIPSE) {
        const auto& e = *pkt.ELLIPSE;
        std::map<std::string, JsonValue> eobj;
        eobj["show"] = json_bool(e.SHOW);
        if (e.SEMI_MAJOR_AXIS != 0) eobj["semiMajorAxis"] = json_number(e.SEMI_MAJOR_AXIS);
        if (e.SEMI_MINOR_AXIS != 0) eobj["semiMinorAxis"] = json_number(e.SEMI_MINOR_AXIS);
        if (e.ROTATION != 0) eobj["rotation"] = json_number(e.ROTATION);
        if (!e.FILL) eobj["fill"] = json_bool(false);
        if (e.OUTLINE) eobj["outline"] = json_bool(true);
        if (e.HEIGHT != 0) eobj["height"] = json_number(e.HEIGHT);
        if (!e.HEIGHT_REFERENCE.empty()) eobj["heightReference"] = json_string(e.HEIGHT_REFERENCE);
        if (e.COLOR) eobj["material"] = material_solid_color(*e.COLOR);
        if (e.OUTLINE_COLOR) eobj["outlineColor"] = color_to_json(*e.OUTLINE_COLOR);
        obj["ellipse"] = json_object(std::move(eobj));
    }

    return json_object(std::move(obj));
}

std::string write_czm_json(const CzmMessage& msg) {
    std::vector<JsonValue> items;

    // Document packet
    std::map<std::string, JsonValue> doc;
    doc["id"] = json_string("document");
    if (!msg.NAME.empty()) doc["name"] = json_string(msg.NAME);
    doc["version"] = json_string(msg.VERSION.empty() ? "1.0" : msg.VERSION);
    if (!msg.CLOCK_CURRENT_TIME.empty() || !msg.CLOCK_INTERVAL.empty()) {
        std::map<std::string, JsonValue> clock;
        if (!msg.CLOCK_CURRENT_TIME.empty()) clock["currentTime"] = json_string(msg.CLOCK_CURRENT_TIME);
        if (!msg.CLOCK_INTERVAL.empty()) clock["interval"] = json_string(msg.CLOCK_INTERVAL);
        if (msg.CLOCK_MULTIPLIER != 1.0) clock["multiplier"] = json_number(msg.CLOCK_MULTIPLIER);
        doc["clock"] = json_object(std::move(clock));
    }
    items.push_back(json_object(std::move(doc)));

    for (const auto& pkt : msg.PACKETS) {
        items.push_back(packet_to_json(pkt));
    }

    return write_json(json_array(std::move(items)));
}

} // namespace ccsds
