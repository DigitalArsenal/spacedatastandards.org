#include "ccsds/navigation/gjn_parser.h"
#include <stdexcept>

namespace ccsds {

static GjnPosition parse_position(const JsonValue& val) {
    GjnPosition pos;
    if (!val.is_array() || val.arr.size() < 2) return pos;
    pos.LONGITUDE = val.arr[0].as_number();
    pos.LATITUDE = val.arr[1].as_number();
    if (val.arr.size() >= 3) {
        pos.ALTITUDE = val.arr[2].as_number();
        pos.HAS_ALTITUDE = true;
    }
    return pos;
}

static std::vector<GjnPosition> parse_positions(const JsonValue& val) {
    std::vector<GjnPosition> result;
    if (!val.is_array()) return result;
    for (const auto& item : val.arr) {
        result.push_back(parse_position(item));
    }
    return result;
}

static std::vector<std::vector<GjnPosition>> parse_rings(const JsonValue& val) {
    std::vector<std::vector<GjnPosition>> result;
    if (!val.is_array()) return result;
    for (const auto& ring : val.arr) {
        result.push_back(parse_positions(ring));
    }
    return result;
}

static std::optional<GjnBoundingBox> parse_bbox(const JsonValue& parent) {
    auto* bbox = parent.get("bbox");
    if (!bbox || !bbox->is_array() || bbox->arr.size() < 4) return std::nullopt;
    GjnBoundingBox b;
    b.WEST = bbox->arr[0].as_number();
    b.SOUTH = bbox->arr[1].as_number();
    if (bbox->arr.size() == 6) {
        b.MIN_ALTITUDE = bbox->arr[2].as_number();
        b.EAST = bbox->arr[3].as_number();
        b.NORTH = bbox->arr[4].as_number();
        b.MAX_ALTITUDE = bbox->arr[5].as_number();
        b.HAS_ALTITUDE = true;
    } else {
        b.EAST = bbox->arr[2].as_number();
        b.NORTH = bbox->arr[3].as_number();
    }
    return b;
}

static GjnGeometry parse_geometry(const JsonValue& val) {
    GjnGeometry geom;
    if (!val.is_object()) return geom;

    geom.TYPE = val.get_string("type").value_or("");

    auto* coords = val.get("coordinates");

    if (geom.TYPE == "Point" && coords) {
        geom.point = parse_position(*coords);
    } else if ((geom.TYPE == "MultiPoint" || geom.TYPE == "LineString") && coords) {
        geom.positions = parse_positions(*coords);
    } else if ((geom.TYPE == "MultiLineString" || geom.TYPE == "Polygon") && coords) {
        geom.rings = parse_rings(*coords);
    } else if (geom.TYPE == "MultiPolygon" && coords) {
        if (coords->is_array()) {
            for (const auto& poly : coords->arr) {
                geom.polygon_rings.push_back(parse_rings(poly));
            }
        }
    } else if (geom.TYPE == "GeometryCollection") {
        auto* geometries = val.get("geometries");
        if (geometries && geometries->is_array()) {
            for (const auto& g : geometries->arr) {
                geom.geometries.push_back(parse_geometry(g));
            }
        }
    }

    geom.BBOX = parse_bbox(val);

    return geom;
}

static std::vector<GjnProperty> parse_properties(const JsonValue& val) {
    std::vector<GjnProperty> result;
    if (!val.is_object()) return result;

    for (const auto& [key, value] : val.obj) {
        GjnProperty prop;
        prop.KEY = key;
        if (value.is_number()) {
            prop.NUM_VALUE = value.as_number();
            prop.IS_NUMERIC = true;
        } else if (value.is_string()) {
            prop.VALUE = value.as_string();
        } else if (value.is_bool()) {
            prop.IS_BOOL = true;
            prop.BOOL_VALUE = value.as_bool();
        } else if (value.is_null()) {
            prop.IS_NULL = true;
        } else if (value.is_object() || value.is_array()) {
            prop.JSON_VALUE = write_json(value);
        }
        result.push_back(std::move(prop));
    }
    return result;
}

static GjnFeature parse_feature(const JsonValue& val) {
    GjnFeature feat;
    if (!val.is_object()) return feat;

    auto id_str = val.get_string("id");
    if (id_str) {
        feat.ID = *id_str;
    } else {
        auto id_num = val.get_number("id");
        if (id_num) {
            feat.NUM_ID = *id_num;
            feat.ID_IS_NUMERIC = true;
        }
    }

    auto* geom = val.get("geometry");
    if (geom && !geom->is_null()) {
        feat.GEOMETRY = parse_geometry(*geom);
        feat.HAS_GEOMETRY = true;
    } else {
        feat.HAS_GEOMETRY = false;
    }

    auto* props = val.get("properties");
    if (props && !props->is_null()) {
        feat.PROPERTIES = parse_properties(*props);
        feat.PROPERTIES_IS_NULL = false;
    } else if (props && props->is_null()) {
        feat.PROPERTIES_IS_NULL = true;
    } else {
        feat.PROPERTIES_IS_NULL = false;
    }

    feat.BBOX = parse_bbox(val);

    return feat;
}

GjnMessage parse_gjn_json(std::string_view text) {
    auto root = parse_json_string(text);
    GjnMessage msg;

    auto type = root.get_string("type").value_or("");

    if (type == "FeatureCollection") {
        auto* features = root.get("features");
        if (features && features->is_array()) {
            for (const auto& f : features->arr) {
                msg.FEATURES.push_back(parse_feature(f));
            }
        }
    } else if (type == "Feature") {
        msg.FEATURES.push_back(parse_feature(root));
    } else {
        // Bare geometry
        GjnFeature feat;
        feat.GEOMETRY = parse_geometry(root);
        feat.HAS_GEOMETRY = true;
        msg.FEATURES.push_back(std::move(feat));
    }

    msg.BBOX = parse_bbox(root);

    return msg;
}

// Writer helpers
static JsonValue bbox_to_json(const GjnBoundingBox& b) {
    std::vector<JsonValue> bbox;
    bbox.push_back(json_number(b.WEST));
    bbox.push_back(json_number(b.SOUTH));
    if (b.HAS_ALTITUDE) {
        bbox.push_back(json_number(b.MIN_ALTITUDE));
        bbox.push_back(json_number(b.EAST));
        bbox.push_back(json_number(b.NORTH));
        bbox.push_back(json_number(b.MAX_ALTITUDE));
    } else {
        bbox.push_back(json_number(b.EAST));
        bbox.push_back(json_number(b.NORTH));
    }
    return json_array(std::move(bbox));
}

static JsonValue pos_to_json(const GjnPosition& pos) {
    std::vector<JsonValue> arr;
    arr.push_back(json_number(pos.LONGITUDE));
    arr.push_back(json_number(pos.LATITUDE));
    if (pos.HAS_ALTITUDE) arr.push_back(json_number(pos.ALTITUDE));
    return json_array(std::move(arr));
}

static JsonValue positions_to_json(const std::vector<GjnPosition>& positions) {
    std::vector<JsonValue> arr;
    for (const auto& p : positions) arr.push_back(pos_to_json(p));
    return json_array(std::move(arr));
}

static JsonValue rings_to_json(const std::vector<std::vector<GjnPosition>>& rings) {
    std::vector<JsonValue> arr;
    for (const auto& ring : rings) arr.push_back(positions_to_json(ring));
    return json_array(std::move(arr));
}

static JsonValue geometry_to_json(const GjnGeometry& geom) {
    std::map<std::string, JsonValue> obj;
    obj["type"] = json_string(geom.TYPE);

    if (geom.TYPE == "Point") {
        obj["coordinates"] = pos_to_json(geom.point);
    } else if (geom.TYPE == "MultiPoint" || geom.TYPE == "LineString") {
        obj["coordinates"] = positions_to_json(geom.positions);
    } else if (geom.TYPE == "MultiLineString" || geom.TYPE == "Polygon") {
        obj["coordinates"] = rings_to_json(geom.rings);
    } else if (geom.TYPE == "MultiPolygon") {
        std::vector<JsonValue> polys;
        for (const auto& poly : geom.polygon_rings) {
            polys.push_back(rings_to_json(poly));
        }
        obj["coordinates"] = json_array(std::move(polys));
    } else if (geom.TYPE == "GeometryCollection") {
        std::vector<JsonValue> geoms;
        for (const auto& g : geom.geometries) {
            geoms.push_back(geometry_to_json(g));
        }
        obj["geometries"] = json_array(std::move(geoms));
    }

    if (geom.BBOX) {
        obj["bbox"] = bbox_to_json(*geom.BBOX);
    }

    return json_object(std::move(obj));
}

static JsonValue properties_to_json(const std::vector<GjnProperty>& props) {
    std::map<std::string, JsonValue> obj;
    for (const auto& p : props) {
        if (p.IS_NUMERIC) {
            obj[p.KEY] = json_number(p.NUM_VALUE);
        } else if (p.IS_BOOL) {
            obj[p.KEY] = json_bool(p.BOOL_VALUE);
        } else if (p.IS_NULL) {
            obj[p.KEY] = json_null();
        } else if (!p.JSON_VALUE.empty()) {
            obj[p.KEY] = parse_json_string(p.JSON_VALUE);
        } else {
            obj[p.KEY] = json_string(p.VALUE);
        }
    }
    return json_object(std::move(obj));
}

static JsonValue feature_to_json(const GjnFeature& feat) {
    std::map<std::string, JsonValue> obj;
    obj["type"] = json_string("Feature");

    if (feat.ID_IS_NUMERIC) {
        obj["id"] = json_number(feat.NUM_ID);
    } else if (!feat.ID.empty()) {
        obj["id"] = json_string(feat.ID);
    }

    if (feat.HAS_GEOMETRY && feat.GEOMETRY) {
        obj["geometry"] = geometry_to_json(*feat.GEOMETRY);
    } else {
        obj["geometry"] = json_null();
    }

    if (feat.PROPERTIES_IS_NULL) {
        obj["properties"] = json_null();
    } else {
        obj["properties"] = properties_to_json(feat.PROPERTIES);
    }

    if (feat.BBOX) {
        obj["bbox"] = bbox_to_json(*feat.BBOX);
    }

    return json_object(std::move(obj));
}

std::string write_gjn_json(const GjnMessage& msg) {
    std::map<std::string, JsonValue> obj;
    obj["type"] = json_string("FeatureCollection");

    std::vector<JsonValue> features;
    for (const auto& f : msg.FEATURES) {
        features.push_back(feature_to_json(f));
    }
    obj["features"] = json_array(std::move(features));

    if (msg.BBOX) {
        obj["bbox"] = bbox_to_json(*msg.BBOX);
    }

    return write_json(json_object(std::move(obj)));
}

} // namespace ccsds
