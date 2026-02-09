#include "ccsds/navigation/czm_parser.h"
#include <stdexcept>

namespace ccsds {

// ============ Parse Helpers ============

static CzmColor parse_color(const JsonValue& val) {
    CzmColor c;
    if (val.is_object()) {
        auto* rgba = val.get("rgba");
        if (rgba && rgba->is_array() && rgba->arr.size() >= 4) {
            c.RED = static_cast<int>(rgba->arr[0].as_number());
            c.GREEN = static_cast<int>(rgba->arr[1].as_number());
            c.BLUE = static_cast<int>(rgba->arr[2].as_number());
            c.ALPHA = static_cast<int>(rgba->arr[3].as_number());
        } else {
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

static std::optional<CzmNearFarScalar> parse_opt_nfs(const JsonValue& parent, const std::string& key) {
    auto* v = parent.get(key);
    if (!v) return std::nullopt;
    return parse_near_far_scalar(*v);
}

static void parse_cartesian2(const JsonValue& parent, const std::string& key, double& x, double& y) {
    auto* v = parent.get(key);
    if (!v) return;
    if (v->is_object()) {
        auto* cart = v->get("cartesian2");
        if (cart && cart->is_array() && cart->arr.size() >= 2) {
            x = cart->arr[0].as_number();
            y = cart->arr[1].as_number();
        }
    } else if (v->is_array() && v->arr.size() >= 2) {
        x = v->arr[0].as_number();
        y = v->arr[1].as_number();
    }
}

static void parse_cartesian3(const JsonValue& parent, const std::string& key, double& x, double& y, double& z) {
    auto* v = parent.get(key);
    if (!v) return;
    if (v->is_object()) {
        auto* cart = v->get("cartesian");
        if (cart && cart->is_array() && cart->arr.size() >= 3) {
            x = cart->arr[0].as_number();
            y = cart->arr[1].as_number();
            z = cart->arr[2].as_number();
        }
    } else if (v->is_array() && v->arr.size() >= 3) {
        x = v->arr[0].as_number();
        y = v->arr[1].as_number();
        z = v->arr[2].as_number();
    }
}

static void parse_dist_display(const JsonValue& parent, double& near_val, double& far_val) {
    auto* v = parent.get("distanceDisplayCondition");
    if (!v) return;
    if (v->is_object()) {
        auto* arr = v->get("distanceDisplayCondition");
        if (arr && arr->is_array() && arr->arr.size() >= 2) {
            near_val = arr->arr[0].as_number();
            far_val = arr->arr[1].as_number();
        }
    } else if (v->is_array() && v->arr.size() >= 2) {
        near_val = v->arr[0].as_number();
        far_val = v->arr[1].as_number();
    }
}

static void parse_positions_field(const JsonValue& parent, std::vector<double>& cd, std::vector<double>& cart) {
    auto* pos = parent.get("positions");
    if (!pos) return;
    auto* cdv = pos->get("cartographicDegrees");
    if (cdv) cd = parse_double_array(*cdv);
    auto* cv = pos->get("cartesian");
    if (cv) cart = parse_double_array(*cv);
}

// ============ Material Parse ============

static CzmSolidColorMaterial parse_solid_color_mat(const JsonValue& val) {
    CzmSolidColorMaterial m;
    m.COLOR = parse_opt_color(val, "color");
    return m;
}

static CzmImageMaterial parse_image_mat(const JsonValue& val) {
    CzmImageMaterial m;
    m.IMAGE = val.get_string("image").value_or("");
    m.COLOR = parse_opt_color(val, "color");
    m.TRANSPARENT = val.get_bool("transparent").value_or(false);
    parse_cartesian2(val, "repeat", m.REPEAT_X, m.REPEAT_Y);
    return m;
}

static CzmGridMaterial parse_grid_mat(const JsonValue& val) {
    CzmGridMaterial m;
    m.COLOR = parse_opt_color(val, "color");
    m.CELL_ALPHA = val.get_number("cellAlpha").value_or(0.1);
    parse_cartesian2(val, "lineCount", m.LINE_COUNT_X, m.LINE_COUNT_Y);
    parse_cartesian2(val, "lineThickness", m.LINE_THICKNESS_X, m.LINE_THICKNESS_Y);
    parse_cartesian2(val, "lineOffset", m.LINE_OFFSET_X, m.LINE_OFFSET_Y);
    return m;
}

static CzmStripeMaterial parse_stripe_mat(const JsonValue& val) {
    CzmStripeMaterial m;
    m.ORIENTATION = val.get_string("orientation").value_or("");
    m.EVEN_COLOR = parse_opt_color(val, "evenColor");
    m.ODD_COLOR = parse_opt_color(val, "oddColor");
    m.OFFSET = val.get_number("offset").value_or(0);
    m.REPEAT_COUNT = val.get_number("repeat").value_or(1);
    return m;
}

static CzmCheckerboardMaterial parse_checkerboard_mat(const JsonValue& val) {
    CzmCheckerboardMaterial m;
    m.EVEN_COLOR = parse_opt_color(val, "evenColor");
    m.ODD_COLOR = parse_opt_color(val, "oddColor");
    parse_cartesian2(val, "repeat", m.REPEAT_X, m.REPEAT_Y);
    return m;
}

static CzmMaterial parse_material(const JsonValue& val) {
    CzmMaterial mat;
    auto* sc = val.get("solidColor");
    if (sc) mat.SOLID_COLOR = parse_solid_color_mat(*sc);
    auto* img = val.get("image");
    if (img) mat.IMAGE = parse_image_mat(*img);
    auto* grid = val.get("grid");
    if (grid) mat.GRID = parse_grid_mat(*grid);
    auto* stripe = val.get("stripe");
    if (stripe) mat.STRIPE = parse_stripe_mat(*stripe);
    auto* cb = val.get("checkerboard");
    if (cb) mat.CHECKERBOARD = parse_checkerboard_mat(*cb);
    return mat;
}

static CzmPolylineMaterial parse_pl_material(const JsonValue& val) {
    CzmPolylineMaterial mat;
    auto* sc = val.get("solidColor");
    if (sc) mat.SOLID_COLOR = parse_solid_color_mat(*sc);
    auto* po = val.get("polylineOutline");
    if (po) {
        CzmPolylineOutlineMaterial m;
        m.COLOR = parse_opt_color(*po, "color");
        m.OUTLINE_COLOR = parse_opt_color(*po, "outlineColor");
        m.OUTLINE_WIDTH = po->get_number("outlineWidth").value_or(1);
        mat.POLYLINE_OUTLINE = m;
    }
    auto* pa = val.get("polylineArrow");
    if (pa) {
        CzmPolylineArrowMaterial m;
        m.COLOR = parse_opt_color(*pa, "color");
        mat.POLYLINE_ARROW = m;
    }
    auto* pd = val.get("polylineDash");
    if (pd) {
        CzmPolylineDashMaterial m;
        m.COLOR = parse_opt_color(*pd, "color");
        m.GAP_COLOR = parse_opt_color(*pd, "gapColor");
        m.DASH_LENGTH = pd->get_number("dashLength").value_or(16);
        m.DASH_PATTERN = static_cast<int>(pd->get_number("dashPattern").value_or(255));
        mat.POLYLINE_DASH = m;
    }
    auto* pg = val.get("polylineGlow");
    if (pg) {
        CzmPolylineGlowMaterial m;
        m.COLOR = parse_opt_color(*pg, "color");
        m.GLOW_POWER = pg->get_number("glowPower").value_or(0.25);
        m.TAPER_POWER = pg->get_number("taperPower").value_or(1.0);
        mat.POLYLINE_GLOW = m;
    }
    return mat;
}

static std::optional<CzmMaterial> parse_opt_material(const JsonValue& parent) {
    auto* m = parent.get("material");
    if (!m) return std::nullopt;
    return parse_material(*m);
}

static std::optional<CzmPolylineMaterial> parse_opt_pl_material(const JsonValue& parent) {
    auto* m = parent.get("material");
    if (!m) return std::nullopt;
    return parse_pl_material(*m);
}

static std::optional<CzmColor> extract_solid_color(const JsonValue& parent) {
    auto* m = parent.get("material");
    if (!m) return std::nullopt;
    auto* sc = m->get("solidColor");
    if (!sc) return std::nullopt;
    return parse_opt_color(*sc, "color");
}

// ============ Time-Dynamic Helpers ============

enum class CzmPropertyForm { STATIC, SAMPLED, INTERVALS, REFERENCE };

static CzmPropertyForm detect_property_form(const JsonValue& val) {
    if (val.is_object()) {
        if (val.get("reference")) return CzmPropertyForm::REFERENCE;
        // Has explicit epoch → sampled
        if (val.get("epoch")) return CzmPropertyForm::SAMPLED;
        // Has "number" array or "boolean" array → sampled (these are never used for static)
        if (val.get("number") || val.get("boolean")) return CzmPropertyForm::SAMPLED;
        // For rgba/rgbaf/cartesian/cartesian2/unitQuaternion/nearFarScalar:
        // These are also used for static values (e.g. {"rgba":[255,0,0,255]} is static).
        // Sampled versions have more values (interleaved with time offsets).
        // Static rgba has exactly 4 values, sampled has >4. Static cartesian has 3, etc.
        auto* rgba = val.get("rgba");
        if (rgba && rgba->is_array() && rgba->arr.size() > 4) return CzmPropertyForm::SAMPLED;
        auto* rgbaf = val.get("rgbaf");
        if (rgbaf && rgbaf->is_array() && rgbaf->arr.size() > 4) return CzmPropertyForm::SAMPLED;
        auto* cart = val.get("cartesian");
        if (cart && cart->is_array() && cart->arr.size() > 3) return CzmPropertyForm::SAMPLED;
        auto* cart2 = val.get("cartesian2");
        if (cart2 && cart2->is_array() && cart2->arr.size() > 2) return CzmPropertyForm::SAMPLED;
        auto* uq = val.get("unitQuaternion");
        if (uq && uq->is_array() && uq->arr.size() > 4) return CzmPropertyForm::SAMPLED;
        auto* nfs = val.get("nearFarScalar");
        if (nfs && nfs->is_array() && nfs->arr.size() > 4) return CzmPropertyForm::SAMPLED;
    }
    if (val.is_array() && !val.arr.empty() && val.arr[0].is_object()) {
        if (val.arr[0].get("interval")) return CzmPropertyForm::INTERVALS;
    }
    return CzmPropertyForm::STATIC;
}

static std::string detect_sampled_data_key(const JsonValue& val) {
    if (val.get("number")) return "number";
    if (val.get("rgba")) return "rgba";
    if (val.get("rgbaf")) return "rgbaf";
    if (val.get("cartesian")) return "cartesian";
    if (val.get("cartesian2")) return "cartesian2";
    if (val.get("unitQuaternion")) return "unitQuaternion";
    if (val.get("nearFarScalar")) return "nearFarScalar";
    if (val.get("boolean")) return "boolean";
    return "";
}

static std::string data_key_to_value_type(const std::string& key) {
    if (key == "number") return "NUMBER";
    if (key == "boolean") return "BOOLEAN";
    if (key == "rgba" || key == "rgbaf") return "COLOR";
    if (key == "cartesian") return "CARTESIAN3";
    if (key == "cartesian2") return "CARTESIAN2";
    if (key == "nearFarScalar") return "NEAR_FAR_SCALAR";
    if (key == "unitQuaternion") return "UNIT_QUATERNION";
    return "NUMBER";
}

static std::optional<CzmInterpolation> parse_interpolation(const JsonValue& val) {
    auto algo = val.get_string("interpolationAlgorithm");
    auto deg = val.get_number("interpolationDegree");
    if (!algo && !deg) return std::nullopt;
    CzmInterpolation interp;
    interp.ALGORITHM = algo.value_or("");
    interp.DEGREE = static_cast<int>(deg.value_or(1));
    return interp;
}

static CzmDynamicProperty extract_dynamic(const std::string& name, const JsonValue& val) {
    CzmDynamicProperty dp;
    dp.NAME = name;

    auto form = detect_property_form(val);

    if (form == CzmPropertyForm::REFERENCE) {
        dp.REFERENCE = val.get_string("reference").value_or("");
    } else if (form == CzmPropertyForm::SAMPLED) {
        CzmDynSampled sampled;
        sampled.EPOCH = val.get_string("epoch").value_or("");
        auto data_key = detect_sampled_data_key(val);
        sampled.VALUE_TYPE = data_key_to_value_type(data_key);
        auto* data = val.get(data_key);
        if (data) sampled.DATA = parse_double_array(*data);
        sampled.INTERPOLATION = parse_interpolation(val);
        dp.SAMPLED = std::move(sampled);
    } else if (form == CzmPropertyForm::INTERVALS) {
        for (const auto& item : val.arr) {
            CzmDynInterval interval;
            interval.INTERVAL = item.get_string("interval").value_or("");
            // Detect value type
            if (auto bv = item.get_bool("boolean")) {
                interval.VALUE_TYPE = "BOOLEAN";
                interval.BOOLEAN_VALUE = *bv;
            } else if (auto nv = item.get_number("number")) {
                interval.VALUE_TYPE = "NUMBER";
                interval.NUMBER_VALUE = *nv;
            } else if (auto sv = item.get_string("string")) {
                interval.VALUE_TYPE = "STRING";
                interval.STRING_VALUE = *sv;
            } else if (auto* rgba = item.get("rgba")) {
                interval.VALUE_TYPE = "COLOR";
                if (rgba->is_array() && rgba->arr.size() >= 4) {
                    CzmColor c;
                    c.RED = static_cast<int>(rgba->arr[0].as_number());
                    c.GREEN = static_cast<int>(rgba->arr[1].as_number());
                    c.BLUE = static_cast<int>(rgba->arr[2].as_number());
                    c.ALPHA = static_cast<int>(rgba->arr[3].as_number());
                    interval.COLOR_VALUE = c;
                }
            } else if (auto* cart = item.get("cartesian")) {
                interval.VALUE_TYPE = "CARTESIAN3";
                interval.ARRAY_VALUE = parse_double_array(*cart);
            } else if (auto* cart2 = item.get("cartesian2")) {
                interval.VALUE_TYPE = "CARTESIAN2";
                interval.ARRAY_VALUE = parse_double_array(*cart2);
            } else if (auto* nfs = item.get("nearFarScalar")) {
                interval.VALUE_TYPE = "NEAR_FAR_SCALAR";
                interval.ARRAY_VALUE = parse_double_array(*nfs);
            } else if (item.get_string("image")) {
                interval.VALUE_TYPE = "STRING";
                interval.STRING_VALUE = item.get_string("image").value_or("");
            }
            dp.INTERVALS.push_back(std::move(interval));
        }
    }

    return dp;
}

// ============ Entity Parse ============

static CzmBillboard parse_billboard(const JsonValue& val) {
    CzmBillboard bb;
    bb.SHOW = val.get_bool("show").value_or(true);
    bb.IMAGE = val.get_string("image").value_or("");
    bb.SCALE = val.get_number("scale").value_or(1.0);
    bb.COLOR = parse_opt_color(val, "color");
    bb.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    bb.HORIZONTAL_ORIGIN = val.get_string("horizontalOrigin").value_or("");
    bb.VERTICAL_ORIGIN = val.get_string("verticalOrigin").value_or("");
    bb.ROTATION = val.get_number("rotation").value_or(0);
    bb.SIZE_IN_METERS = val.get_bool("sizeInMeters").value_or(false);
    bb.WIDTH = val.get_number("width").value_or(0);
    bb.HEIGHT = val.get_number("height").value_or(0);
    parse_cartesian2(val, "pixelOffset", bb.PIXEL_OFFSET_X, bb.PIXEL_OFFSET_Y);
    parse_cartesian3(val, "eyeOffset", bb.EYE_OFFSET_X, bb.EYE_OFFSET_Y, bb.EYE_OFFSET_Z);
    bb.TRANSLUCENCY_BY_DISTANCE = parse_opt_nfs(val, "translucencyByDistance");
    bb.SCALE_BY_DISTANCE = parse_opt_nfs(val, "scaleByDistance");
    bb.PIXEL_OFFSET_SCALE_BY_DISTANCE = parse_opt_nfs(val, "pixelOffsetScaleByDistance");
    parse_dist_display(val, bb.DISTANCE_DISPLAY_CONDITION_NEAR, bb.DISTANCE_DISPLAY_CONDITION_FAR);
    bb.DISABLE_DEPTH_TEST_DISTANCE = val.get_number("disableDepthTestDistance").value_or(0);
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
    lbl.SHOW_BACKGROUND = val.get_bool("showBackground").value_or(false);
    lbl.BACKGROUND_COLOR = parse_opt_color(val, "backgroundColor");
    parse_cartesian2(val, "pixelOffset", lbl.PIXEL_OFFSET_X, lbl.PIXEL_OFFSET_Y);
    parse_cartesian2(val, "backgroundPadding", lbl.BACKGROUND_PADDING_X, lbl.BACKGROUND_PADDING_Y);
    parse_cartesian3(val, "eyeOffset", lbl.EYE_OFFSET_X, lbl.EYE_OFFSET_Y, lbl.EYE_OFFSET_Z);
    lbl.TRANSLUCENCY_BY_DISTANCE = parse_opt_nfs(val, "translucencyByDistance");
    lbl.PIXEL_OFFSET_SCALE_BY_DISTANCE = parse_opt_nfs(val, "pixelOffsetScaleByDistance");
    lbl.SCALE_BY_DISTANCE = parse_opt_nfs(val, "scaleByDistance");
    parse_dist_display(val, lbl.DISTANCE_DISPLAY_CONDITION_NEAR, lbl.DISTANCE_DISPLAY_CONDITION_FAR);
    lbl.DISABLE_DEPTH_TEST_DISTANCE = val.get_number("disableDepthTestDistance").value_or(0);
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
    pt.SCALE_BY_DISTANCE = parse_opt_nfs(val, "scaleByDistance");
    pt.TRANSLUCENCY_BY_DISTANCE = parse_opt_nfs(val, "translucencyByDistance");
    parse_dist_display(val, pt.DISTANCE_DISPLAY_CONDITION_NEAR, pt.DISTANCE_DISPLAY_CONDITION_FAR);
    pt.DISABLE_DEPTH_TEST_DISTANCE = val.get_number("disableDepthTestDistance").value_or(0);
    return pt;
}

static CzmPolyline parse_polyline(const JsonValue& val) {
    CzmPolyline pl;
    pl.SHOW = val.get_bool("show").value_or(true);
    pl.WIDTH = val.get_number("width").value_or(1);
    pl.CLAMP_TO_GROUND = val.get_bool("clampToGround").value_or(false);
    pl.ARC_TYPE = val.get_string("arcType").value_or("");
    pl.GRANULARITY = val.get_number("granularity").value_or(0);
    pl.SHADOWS = val.get_string("shadows").value_or("");
    pl.CLASSIFICATION_TYPE = val.get_string("classificationType").value_or("");
    pl.Z_INDEX = static_cast<int>(val.get_number("zIndex").value_or(0));
    parse_positions_field(val, pl.POSITIONS_CARTOGRAPHIC_DEGREES, pl.POSITIONS_CARTESIAN);
    pl.MATERIAL = parse_opt_pl_material(val);
    pl.COLOR = extract_solid_color(val);
    auto* dfm = val.get("depthFailMaterial");
    if (dfm) pl.DEPTH_FAIL_MATERIAL = parse_pl_material(*dfm);
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
    pg.ARC_TYPE = val.get_string("arcType").value_or("");
    pg.HEIGHT = val.get_number("height").value_or(0);
    pg.EXTRUDED_HEIGHT_REFERENCE = val.get_string("extrudedHeightReference").value_or("");
    pg.ST_ROTATION = val.get_number("stRotation").value_or(0);
    pg.GRANULARITY = val.get_number("granularity").value_or(0);
    pg.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(0);
    pg.PER_POSITION_HEIGHT = val.get_bool("perPositionHeight").value_or(false);
    pg.CLOSE_TOP = val.get_bool("closeTop").value_or(true);
    pg.CLOSE_BOTTOM = val.get_bool("closeBottom").value_or(true);
    pg.SHADOWS = val.get_string("shadows").value_or("");
    pg.Z_INDEX = static_cast<int>(val.get_number("zIndex").value_or(0));
    parse_positions_field(val, pg.POSITIONS_CARTOGRAPHIC_DEGREES, pg.POSITIONS_CARTESIAN);
    pg.MATERIAL = parse_opt_material(val);
    pg.COLOR = extract_solid_color(val);
    pg.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");

    auto* holes = val.get("holes");
    if (holes) {
        auto* cd = holes->get("cartographicDegrees");
        if (cd && cd->is_array()) {
            for (const auto& h : cd->arr) {
                CzmPolygonHole hole;
                if (h.is_array()) hole.POSITIONS_CARTOGRAPHIC_DEGREES = parse_double_array(h);
                pg.HOLES.push_back(std::move(hole));
            }
        }
        auto* cart = holes->get("cartesian");
        if (cart && cart->is_array()) {
            for (const auto& h : cart->arr) {
                CzmPolygonHole hole;
                if (h.is_array()) hole.POSITIONS_CARTESIAN = parse_double_array(h);
                pg.HOLES.push_back(std::move(hole));
            }
        }
    }

    return pg;
}

static CzmPath parse_path(const JsonValue& val) {
    CzmPath path;
    path.SHOW = val.get_bool("show").value_or(true);
    path.LEAD_TIME = val.get_number("leadTime").value_or(0);
    path.TRAIL_TIME = val.get_number("trailTime").value_or(0);
    path.WIDTH = val.get_number("width").value_or(1);
    path.RESOLUTION = val.get_number("resolution").value_or(60);
    path.MATERIAL = parse_opt_pl_material(val);
    path.COLOR = extract_solid_color(val);
    return path;
}

static CzmModel parse_model(const JsonValue& val) {
    CzmModel mdl;
    mdl.SHOW = val.get_bool("show").value_or(true);
    mdl.GLTF = val.get_string("gltf").value_or("");
    mdl.SCALE = val.get_number("scale").value_or(1.0);
    mdl.MINIMUM_PIXEL_SIZE = val.get_number("minimumPixelSize").value_or(0);
    mdl.MAXIMUM_SCALE = val.get_number("maximumScale").value_or(0);
    mdl.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    mdl.COLOR = parse_opt_color(val, "color");
    mdl.INCREMENTALLY_LOAD_TEXTURES = val.get_bool("incrementallyLoadTextures").value_or(true);
    mdl.RUN_ANIMATIONS = val.get_bool("runAnimations").value_or(true);
    mdl.SHADOWS = val.get_string("shadows").value_or("");
    mdl.SILHOUETTE_COLOR = parse_opt_color(val, "silhouetteColor");
    mdl.SILHOUETTE_SIZE = val.get_number("silhouetteSize").value_or(0);
    mdl.COLOR_BLEND_MODE = val.get_string("colorBlendMode").value_or("");
    mdl.COLOR_BLEND_AMOUNT = val.get_number("colorBlendAmount").value_or(0.5);
    return mdl;
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
    e.EXTRUDED_HEIGHT = val.get_number("extrudedHeight").value_or(0);
    e.EXTRUDED_HEIGHT_REFERENCE = val.get_string("extrudedHeightReference").value_or("");
    e.ST_ROTATION = val.get_number("stRotation").value_or(0);
    e.GRANULARITY = val.get_number("granularity").value_or(0);
    e.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(0);
    e.NUMBER_OF_VERTICAL_LINES = static_cast<int>(val.get_number("numberOfVerticalLines").value_or(0));
    e.SHADOWS = val.get_string("shadows").value_or("");
    e.CLASSIFICATION_TYPE = val.get_string("classificationType").value_or("");
    e.Z_INDEX = static_cast<int>(val.get_number("zIndex").value_or(0));
    e.MATERIAL = parse_opt_material(val);
    e.COLOR = extract_solid_color(val);
    e.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    return e;
}

static CzmBox parse_box(const JsonValue& val) {
    CzmBox b;
    b.SHOW = val.get_bool("show").value_or(true);
    parse_cartesian3(val, "dimensions", b.DIMENSIONS_X, b.DIMENSIONS_Y, b.DIMENSIONS_Z);
    b.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    b.FILL = val.get_bool("fill").value_or(true);
    b.MATERIAL = parse_opt_material(val);
    b.OUTLINE = val.get_bool("outline").value_or(false);
    b.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    b.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    b.SHADOWS = val.get_string("shadows").value_or("");
    parse_dist_display(val, b.DISTANCE_DISPLAY_CONDITION_NEAR, b.DISTANCE_DISPLAY_CONDITION_FAR);
    return b;
}

static CzmCorridor parse_corridor(const JsonValue& val) {
    CzmCorridor c;
    c.SHOW = val.get_bool("show").value_or(true);
    parse_positions_field(val, c.POSITIONS_CARTOGRAPHIC_DEGREES, c.POSITIONS_CARTESIAN);
    c.WIDTH = val.get_number("width").value_or(0);
    c.HEIGHT = val.get_number("height").value_or(0);
    c.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    c.EXTRUDED_HEIGHT = val.get_number("extrudedHeight").value_or(0);
    c.EXTRUDED_HEIGHT_REFERENCE = val.get_string("extrudedHeightReference").value_or("");
    c.CORNER_TYPE = val.get_string("cornerType").value_or("");
    c.GRANULARITY = val.get_number("granularity").value_or(0);
    c.FILL = val.get_bool("fill").value_or(true);
    c.MATERIAL = parse_opt_material(val);
    c.OUTLINE = val.get_bool("outline").value_or(false);
    c.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    c.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    c.SHADOWS = val.get_string("shadows").value_or("");
    c.CLASSIFICATION_TYPE = val.get_string("classificationType").value_or("");
    c.Z_INDEX = static_cast<int>(val.get_number("zIndex").value_or(0));
    return c;
}

static CzmCylinder parse_cylinder(const JsonValue& val) {
    CzmCylinder c;
    c.SHOW = val.get_bool("show").value_or(true);
    c.LENGTH = val.get_number("length").value_or(0);
    c.TOP_RADIUS = val.get_number("topRadius").value_or(0);
    c.BOTTOM_RADIUS = val.get_number("bottomRadius").value_or(0);
    c.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    c.FILL = val.get_bool("fill").value_or(true);
    c.MATERIAL = parse_opt_material(val);
    c.OUTLINE = val.get_bool("outline").value_or(false);
    c.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    c.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    c.NUMBER_OF_VERTICAL_LINES = static_cast<int>(val.get_number("numberOfVerticalLines").value_or(16));
    c.SLICES = static_cast<int>(val.get_number("slices").value_or(128));
    c.SHADOWS = val.get_string("shadows").value_or("");
    return c;
}

static CzmEllipsoidEntity parse_ellipsoid(const JsonValue& val) {
    CzmEllipsoidEntity e;
    e.SHOW = val.get_bool("show").value_or(true);
    parse_cartesian3(val, "radii", e.RADII_X, e.RADII_Y, e.RADII_Z);
    parse_cartesian3(val, "innerRadii", e.INNER_RADII_X, e.INNER_RADII_Y, e.INNER_RADII_Z);
    e.MINIMUM_CLOCK = val.get_number("minimumClock").value_or(0);
    e.MAXIMUM_CLOCK = val.get_number("maximumClock").value_or(0);
    e.MINIMUM_CONE = val.get_number("minimumCone").value_or(0);
    e.MAXIMUM_CONE = val.get_number("maximumCone").value_or(0);
    e.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    e.FILL = val.get_bool("fill").value_or(true);
    e.MATERIAL = parse_opt_material(val);
    e.OUTLINE = val.get_bool("outline").value_or(false);
    e.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    e.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    e.STACK_PARTITIONS = static_cast<int>(val.get_number("stackPartitions").value_or(64));
    e.SLICE_PARTITIONS = static_cast<int>(val.get_number("slicePartitions").value_or(64));
    e.SUBDIVISIONS = static_cast<int>(val.get_number("subdivisions").value_or(128));
    e.SHADOWS = val.get_string("shadows").value_or("");
    return e;
}

static CzmPolylineVolume parse_polyline_volume(const JsonValue& val) {
    CzmPolylineVolume pv;
    pv.SHOW = val.get_bool("show").value_or(true);
    parse_positions_field(val, pv.POSITIONS_CARTOGRAPHIC_DEGREES, pv.POSITIONS_CARTESIAN);
    auto* shape = val.get("shape");
    if (shape) {
        if (shape->is_object()) {
            auto* cart = shape->get("cartesian2");
            if (cart) pv.SHAPE = parse_double_array(*cart);
        } else if (shape->is_array()) {
            pv.SHAPE = parse_double_array(*shape);
        }
    }
    pv.CORNER_TYPE = val.get_string("cornerType").value_or("");
    pv.GRANULARITY = val.get_number("granularity").value_or(0);
    pv.FILL = val.get_bool("fill").value_or(true);
    pv.MATERIAL = parse_opt_material(val);
    pv.OUTLINE = val.get_bool("outline").value_or(false);
    pv.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    pv.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    pv.SHADOWS = val.get_string("shadows").value_or("");
    return pv;
}

static CzmRectangle parse_rectangle(const JsonValue& val) {
    CzmRectangle r;
    r.SHOW = val.get_bool("show").value_or(true);
    auto* coords = val.get("coordinates");
    if (coords) {
        if (coords->is_object()) {
            auto* wsen = coords->get("wsenDegrees");
            if (wsen) r.COORDINATES_WSEN_DEGREES = parse_double_array(*wsen);
        } else if (coords->is_array()) {
            r.COORDINATES_WSEN_DEGREES = parse_double_array(*coords);
        }
    }
    r.HEIGHT = val.get_number("height").value_or(0);
    r.HEIGHT_REFERENCE = val.get_string("heightReference").value_or("");
    r.EXTRUDED_HEIGHT = val.get_number("extrudedHeight").value_or(0);
    r.EXTRUDED_HEIGHT_REFERENCE = val.get_string("extrudedHeightReference").value_or("");
    r.ROTATION = val.get_number("rotation").value_or(0);
    r.ST_ROTATION = val.get_number("stRotation").value_or(0);
    r.GRANULARITY = val.get_number("granularity").value_or(0);
    r.FILL = val.get_bool("fill").value_or(true);
    r.MATERIAL = parse_opt_material(val);
    r.OUTLINE = val.get_bool("outline").value_or(false);
    r.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    r.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    r.SHADOWS = val.get_string("shadows").value_or("");
    r.CLASSIFICATION_TYPE = val.get_string("classificationType").value_or("");
    r.Z_INDEX = static_cast<int>(val.get_number("zIndex").value_or(0));
    return r;
}

static CzmTileset parse_tileset(const JsonValue& val) {
    CzmTileset t;
    t.SHOW = val.get_bool("show").value_or(true);
    t.URI = val.get_string("uri").value_or("");
    t.MAXIMUM_SCREEN_SPACE_ERROR = val.get_number("maximumScreenSpaceError").value_or(0);
    return t;
}

static CzmWall parse_wall(const JsonValue& val) {
    CzmWall w;
    w.SHOW = val.get_bool("show").value_or(true);
    parse_positions_field(val, w.POSITIONS_CARTOGRAPHIC_DEGREES, w.POSITIONS_CARTESIAN);
    auto* mh = val.get("minimumHeights");
    if (mh) {
        if (mh->is_object()) {
            auto* arr = mh->get("array");
            if (arr) w.MINIMUM_HEIGHTS = parse_double_array(*arr);
        } else {
            w.MINIMUM_HEIGHTS = parse_double_array(*mh);
        }
    }
    auto* xh = val.get("maximumHeights");
    if (xh) {
        if (xh->is_object()) {
            auto* arr = xh->get("array");
            if (arr) w.MAXIMUM_HEIGHTS = parse_double_array(*arr);
        } else {
            w.MAXIMUM_HEIGHTS = parse_double_array(*xh);
        }
    }
    w.GRANULARITY = val.get_number("granularity").value_or(0);
    w.FILL = val.get_bool("fill").value_or(true);
    w.MATERIAL = parse_opt_material(val);
    w.OUTLINE = val.get_bool("outline").value_or(false);
    w.OUTLINE_COLOR = parse_opt_color(val, "outlineColor");
    w.OUTLINE_WIDTH = val.get_number("outlineWidth").value_or(1);
    w.SHADOWS = val.get_string("shadows").value_or("");
    return w;
}

static CzmOrientation parse_orientation(const JsonValue& val) {
    CzmOrientation o;
    auto* uq = val.get("unitQuaternion");
    if (uq && uq->is_array() && uq->arr.size() >= 4) {
        o.UNIT_QUATERNION_X = uq->arr[0].as_number();
        o.UNIT_QUATERNION_Y = uq->arr[1].as_number();
        o.UNIT_QUATERNION_Z = uq->arr[2].as_number();
        o.UNIT_QUATERNION_W = uq->arr[3].as_number();
    }
    return o;
}

static CzmViewFrom parse_view_from(const JsonValue& val) {
    CzmViewFrom vf;
    auto* cart = val.get("cartesian");
    if (cart && cart->is_array() && cart->arr.size() >= 3) {
        vf.X = cart->arr[0].as_number();
        vf.Y = cart->arr[1].as_number();
        vf.Z = cart->arr[2].as_number();
    }
    return vf;
}

// ============ Packet/Message Parse ============

static CzmPacket parse_packet(const JsonValue& val) {
    CzmPacket pkt;
    pkt.ID = val.get_string("id").value_or("");
    pkt.NAME = val.get_string("name").value_or("");
    pkt.PARENT = val.get_string("parent").value_or("");
    pkt.DESCRIPTION = val.get_string("description").value_or("");
    pkt.AVAILABILITY = val.get_string("availability").value_or("");
    pkt.DELETE = val.get_bool("delete").value_or(false);

    auto* pos = val.get("position");
    if (pos) {
        auto pos_form = detect_property_form(*pos);
        if (pos_form == CzmPropertyForm::REFERENCE) {
            pkt.POSITION_REFERENCE = pos->get_string("reference").value_or("");
        } else {
            pkt.POSITION_EPOCH = pos->get_string("epoch").value_or("");
            pkt.POSITION_REFERENCE_FRAME = pos->get_string("referenceFrame").value_or("");
            pkt.POSITION_INTERPOLATION = parse_interpolation(*pos);
            auto* cd = pos->get("cartographicDegrees");
            if (cd && cd->is_array()) {
                if (cd->arr.size() == 3) {
                    CzmCartographicDegrees cDeg;
                    cDeg.LONGITUDE = cd->arr[0].as_number();
                    cDeg.LATITUDE = cd->arr[1].as_number();
                    cDeg.HEIGHT = cd->arr[2].as_number();
                    pkt.POSITION_CARTOGRAPHIC_DEGREES = cDeg;
                } else {
                    pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY = parse_double_array(*cd);
                }
            }
            auto* cart = pos->get("cartesian");
            if (cart && cart->is_array()) {
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
    auto* orient = val.get("orientation");
    if (orient) {
        if (orient->is_object() && orient->get("reference")) {
            pkt.ORIENTATION_REFERENCE = orient->get_string("reference").value_or("");
        } else if (orient->is_object() && orient->get("epoch")) {
            // Sampled orientation (has epoch + unitQuaternion array with >4 values)
            pkt.ORIENTATION_EPOCH = orient->get_string("epoch").value_or("");
            auto* uq = orient->get("unitQuaternion");
            if (uq) pkt.ORIENTATION_ARRAY = parse_double_array(*uq);
            pkt.ORIENTATION_INTERPOLATION = parse_interpolation(*orient);
        } else if (orient->is_object()) {
            auto* uq = orient->get("unitQuaternion");
            if (uq && uq->is_array() && uq->arr.size() > 4) {
                // Sampled without epoch (time values embedded)
                pkt.ORIENTATION_ARRAY = parse_double_array(*uq);
                pkt.ORIENTATION_INTERPOLATION = parse_interpolation(*orient);
            } else {
                // Static quaternion
                pkt.ORIENTATION = parse_orientation(*orient);
            }
        }
    }
    auto* vf = val.get("viewFrom");
    if (vf) pkt.VIEW_FROM = parse_view_from(*vf);
    auto* box = val.get("box");
    if (box) pkt.BOX = parse_box(*box);
    auto* corridor = val.get("corridor");
    if (corridor) pkt.CORRIDOR = parse_corridor(*corridor);
    auto* cylinder = val.get("cylinder");
    if (cylinder) pkt.CYLINDER = parse_cylinder(*cylinder);
    auto* ellipsoid = val.get("ellipsoid");
    if (ellipsoid) pkt.ELLIPSOID = parse_ellipsoid(*ellipsoid);
    auto* pv = val.get("polylineVolume");
    if (pv) pkt.POLYLINE_VOLUME = parse_polyline_volume(*pv);
    auto* rect = val.get("rectangle");
    if (rect) pkt.RECTANGLE = parse_rectangle(*rect);
    auto* tileset = val.get("tileset");
    if (tileset) pkt.TILESET = parse_tileset(*tileset);
    auto* wall = val.get("wall");
    if (wall) pkt.WALL = parse_wall(*wall);

    // Scan entity objects for time-dynamic (non-static) properties
    static const std::vector<std::pair<std::string, std::vector<std::string>>> entity_props = {
        {"billboard", {"show","image","scale","color","heightReference","rotation","sizeInMeters","width","height"}},
        {"label", {"show","text","font","style","scale","fillColor","outlineColor","outlineWidth"}},
        {"point", {"show","color","outlineColor","outlineWidth","pixelSize","heightReference"}},
        {"polyline", {"show","width","clampToGround"}},
        {"polygon", {"show","fill","outline","extrudedHeight","height"}},
        {"model", {"show","scale","minimumPixelSize","maximumScale","color"}},
        {"path", {"show","leadTime","trailTime","width"}},
        {"ellipse", {"show","semiMajorAxis","semiMinorAxis","rotation","fill","outline","height"}},
        {"box", {"show","fill","outline"}},
        {"corridor", {"show","width","fill","outline"}},
        {"cylinder", {"show","length","topRadius","bottomRadius","fill","outline"}},
        {"rectangle", {"show","fill","outline","height","extrudedHeight","rotation"}},
        {"wall", {"show","fill","outline"}},
    };
    for (const auto& [entity_key, prop_keys] : entity_props) {
        auto* entity = val.get(entity_key);
        if (!entity || !entity->is_object()) continue;
        for (const auto& prop_key : prop_keys) {
            auto* pv = entity->get(prop_key);
            if (!pv) continue;
            auto form = detect_property_form(*pv);
            if (form != CzmPropertyForm::STATIC) {
                pkt.DYNAMIC_PROPERTIES.push_back(
                    extract_dynamic(entity_key + "." + prop_key, *pv));
            }
        }
    }

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
                msg.CLOCK_RANGE = clock->get_string("range").value_or("");
                msg.CLOCK_STEP = clock->get_string("step").value_or("");
            }
        } else {
            msg.PACKETS.push_back(parse_packet(item));
        }
    }

    return msg;
}

// ============ Write Helpers ============

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

static JsonValue cartesian2_to_json(double x, double y) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(x));
    arr.push_back(json_number(y));
    obj["cartesian2"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

static JsonValue cartesian3_to_json(double x, double y, double z) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(x));
    arr.push_back(json_number(y));
    arr.push_back(json_number(z));
    obj["cartesian"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

static JsonValue dist_display_to_json(double near_val, double far_val) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(near_val));
    arr.push_back(json_number(far_val));
    obj["distanceDisplayCondition"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

static void add_positions(std::map<std::string, JsonValue>& obj,
                          const std::vector<double>& cd, const std::vector<double>& cart) {
    if (cd.empty() && cart.empty()) return;
    std::map<std::string, JsonValue> pos;
    if (!cd.empty()) pos["cartographicDegrees"] = double_array_to_json(cd);
    if (!cart.empty()) pos["cartesian"] = double_array_to_json(cart);
    obj["positions"] = json_object(std::move(pos));
}

static JsonValue wrap_solid_color(const CzmColor& c) {
    std::map<std::string, JsonValue> sc;
    sc["color"] = color_to_json(c);
    std::map<std::string, JsonValue> mat;
    mat["solidColor"] = json_object(std::move(sc));
    return json_object(std::move(mat));
}

// ============ Material Write ============

static JsonValue solid_color_mat_to_json(const CzmSolidColorMaterial& m) {
    std::map<std::string, JsonValue> obj;
    if (m.COLOR) obj["color"] = color_to_json(*m.COLOR);
    return json_object(std::move(obj));
}

static JsonValue image_mat_to_json(const CzmImageMaterial& m) {
    std::map<std::string, JsonValue> obj;
    if (!m.IMAGE.empty()) obj["image"] = json_string(m.IMAGE);
    if (m.REPEAT_X != 1 || m.REPEAT_Y != 1)
        obj["repeat"] = cartesian2_to_json(m.REPEAT_X, m.REPEAT_Y);
    if (m.COLOR) obj["color"] = color_to_json(*m.COLOR);
    if (m.TRANSPARENT) obj["transparent"] = json_bool(true);
    return json_object(std::move(obj));
}

static JsonValue grid_mat_to_json(const CzmGridMaterial& m) {
    std::map<std::string, JsonValue> obj;
    if (m.COLOR) obj["color"] = color_to_json(*m.COLOR);
    if (m.CELL_ALPHA != 0.1) obj["cellAlpha"] = json_number(m.CELL_ALPHA);
    if (m.LINE_COUNT_X != 8 || m.LINE_COUNT_Y != 8)
        obj["lineCount"] = cartesian2_to_json(m.LINE_COUNT_X, m.LINE_COUNT_Y);
    if (m.LINE_THICKNESS_X != 1 || m.LINE_THICKNESS_Y != 1)
        obj["lineThickness"] = cartesian2_to_json(m.LINE_THICKNESS_X, m.LINE_THICKNESS_Y);
    if (m.LINE_OFFSET_X != 0 || m.LINE_OFFSET_Y != 0)
        obj["lineOffset"] = cartesian2_to_json(m.LINE_OFFSET_X, m.LINE_OFFSET_Y);
    return json_object(std::move(obj));
}

static JsonValue stripe_mat_to_json(const CzmStripeMaterial& m) {
    std::map<std::string, JsonValue> obj;
    if (!m.ORIENTATION.empty()) obj["orientation"] = json_string(m.ORIENTATION);
    if (m.EVEN_COLOR) obj["evenColor"] = color_to_json(*m.EVEN_COLOR);
    if (m.ODD_COLOR) obj["oddColor"] = color_to_json(*m.ODD_COLOR);
    if (m.OFFSET != 0) obj["offset"] = json_number(m.OFFSET);
    if (m.REPEAT_COUNT != 1) obj["repeat"] = json_number(m.REPEAT_COUNT);
    return json_object(std::move(obj));
}

static JsonValue checkerboard_mat_to_json(const CzmCheckerboardMaterial& m) {
    std::map<std::string, JsonValue> obj;
    if (m.EVEN_COLOR) obj["evenColor"] = color_to_json(*m.EVEN_COLOR);
    if (m.ODD_COLOR) obj["oddColor"] = color_to_json(*m.ODD_COLOR);
    if (m.REPEAT_X != 2 || m.REPEAT_Y != 2)
        obj["repeat"] = cartesian2_to_json(m.REPEAT_X, m.REPEAT_Y);
    return json_object(std::move(obj));
}

static JsonValue material_to_json(const CzmMaterial& mat) {
    std::map<std::string, JsonValue> obj;
    if (mat.SOLID_COLOR) obj["solidColor"] = solid_color_mat_to_json(*mat.SOLID_COLOR);
    if (mat.IMAGE) obj["image"] = image_mat_to_json(*mat.IMAGE);
    if (mat.GRID) obj["grid"] = grid_mat_to_json(*mat.GRID);
    if (mat.STRIPE) obj["stripe"] = stripe_mat_to_json(*mat.STRIPE);
    if (mat.CHECKERBOARD) obj["checkerboard"] = checkerboard_mat_to_json(*mat.CHECKERBOARD);
    return json_object(std::move(obj));
}

static JsonValue pl_material_to_json(const CzmPolylineMaterial& mat) {
    std::map<std::string, JsonValue> obj;
    if (mat.SOLID_COLOR) obj["solidColor"] = solid_color_mat_to_json(*mat.SOLID_COLOR);
    if (mat.POLYLINE_OUTLINE) {
        const auto& m = *mat.POLYLINE_OUTLINE;
        std::map<std::string, JsonValue> po;
        if (m.COLOR) po["color"] = color_to_json(*m.COLOR);
        if (m.OUTLINE_COLOR) po["outlineColor"] = color_to_json(*m.OUTLINE_COLOR);
        if (m.OUTLINE_WIDTH != 1) po["outlineWidth"] = json_number(m.OUTLINE_WIDTH);
        obj["polylineOutline"] = json_object(std::move(po));
    }
    if (mat.POLYLINE_ARROW) {
        std::map<std::string, JsonValue> pa;
        if (mat.POLYLINE_ARROW->COLOR) pa["color"] = color_to_json(*mat.POLYLINE_ARROW->COLOR);
        obj["polylineArrow"] = json_object(std::move(pa));
    }
    if (mat.POLYLINE_DASH) {
        const auto& m = *mat.POLYLINE_DASH;
        std::map<std::string, JsonValue> pd;
        if (m.COLOR) pd["color"] = color_to_json(*m.COLOR);
        if (m.GAP_COLOR) pd["gapColor"] = color_to_json(*m.GAP_COLOR);
        if (m.DASH_LENGTH != 16) pd["dashLength"] = json_number(m.DASH_LENGTH);
        if (m.DASH_PATTERN != 255) pd["dashPattern"] = json_number(m.DASH_PATTERN);
        obj["polylineDash"] = json_object(std::move(pd));
    }
    if (mat.POLYLINE_GLOW) {
        const auto& m = *mat.POLYLINE_GLOW;
        std::map<std::string, JsonValue> pg;
        if (m.COLOR) pg["color"] = color_to_json(*m.COLOR);
        if (m.GLOW_POWER != 0.25) pg["glowPower"] = json_number(m.GLOW_POWER);
        if (m.TAPER_POWER != 1.0) pg["taperPower"] = json_number(m.TAPER_POWER);
        obj["polylineGlow"] = json_object(std::move(pg));
    }
    return json_object(std::move(obj));
}

// ============ Entity Write ============

static JsonValue billboard_to_json(const CzmBillboard& bb) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(bb.SHOW);
    if (!bb.IMAGE.empty()) obj["image"] = json_string(bb.IMAGE);
    if (bb.SCALE != 1.0) obj["scale"] = json_number(bb.SCALE);
    if (bb.COLOR) obj["color"] = color_to_json(*bb.COLOR);
    if (!bb.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(bb.HEIGHT_REFERENCE);
    if (bb.PIXEL_OFFSET_X != 0 || bb.PIXEL_OFFSET_Y != 0)
        obj["pixelOffset"] = cartesian2_to_json(bb.PIXEL_OFFSET_X, bb.PIXEL_OFFSET_Y);
    if (!bb.HORIZONTAL_ORIGIN.empty()) obj["horizontalOrigin"] = json_string(bb.HORIZONTAL_ORIGIN);
    if (!bb.VERTICAL_ORIGIN.empty()) obj["verticalOrigin"] = json_string(bb.VERTICAL_ORIGIN);
    if (bb.TRANSLUCENCY_BY_DISTANCE) obj["translucencyByDistance"] = near_far_scalar_to_json(*bb.TRANSLUCENCY_BY_DISTANCE);
    if (bb.ROTATION != 0) obj["rotation"] = json_number(bb.ROTATION);
    if (bb.SIZE_IN_METERS) obj["sizeInMeters"] = json_bool(true);
    if (bb.WIDTH != 0) obj["width"] = json_number(bb.WIDTH);
    if (bb.HEIGHT != 0) obj["height"] = json_number(bb.HEIGHT);
    if (bb.EYE_OFFSET_X != 0 || bb.EYE_OFFSET_Y != 0 || bb.EYE_OFFSET_Z != 0)
        obj["eyeOffset"] = cartesian3_to_json(bb.EYE_OFFSET_X, bb.EYE_OFFSET_Y, bb.EYE_OFFSET_Z);
    if (bb.SCALE_BY_DISTANCE) obj["scaleByDistance"] = near_far_scalar_to_json(*bb.SCALE_BY_DISTANCE);
    if (bb.PIXEL_OFFSET_SCALE_BY_DISTANCE) obj["pixelOffsetScaleByDistance"] = near_far_scalar_to_json(*bb.PIXEL_OFFSET_SCALE_BY_DISTANCE);
    if (bb.DISTANCE_DISPLAY_CONDITION_NEAR != 0 || bb.DISTANCE_DISPLAY_CONDITION_FAR != 0)
        obj["distanceDisplayCondition"] = dist_display_to_json(bb.DISTANCE_DISPLAY_CONDITION_NEAR, bb.DISTANCE_DISPLAY_CONDITION_FAR);
    if (bb.DISABLE_DEPTH_TEST_DISTANCE != 0) obj["disableDepthTestDistance"] = json_number(bb.DISABLE_DEPTH_TEST_DISTANCE);
    return json_object(std::move(obj));
}

static JsonValue label_to_json(const CzmLabel& lbl) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(lbl.SHOW);
    if (!lbl.TEXT.empty()) obj["text"] = json_string(lbl.TEXT);
    if (!lbl.FONT.empty()) obj["font"] = json_string(lbl.FONT);
    if (!lbl.STYLE.empty()) obj["style"] = json_string(lbl.STYLE);
    if (lbl.SCALE != 1.0) obj["scale"] = json_number(lbl.SCALE);
    if (lbl.FILL_COLOR) obj["fillColor"] = color_to_json(*lbl.FILL_COLOR);
    if (lbl.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*lbl.OUTLINE_COLOR);
    if (lbl.OUTLINE_WIDTH != 0) obj["outlineWidth"] = json_number(lbl.OUTLINE_WIDTH);
    if (lbl.PIXEL_OFFSET_X != 0 || lbl.PIXEL_OFFSET_Y != 0)
        obj["pixelOffset"] = cartesian2_to_json(lbl.PIXEL_OFFSET_X, lbl.PIXEL_OFFSET_Y);
    if (!lbl.HORIZONTAL_ORIGIN.empty()) obj["horizontalOrigin"] = json_string(lbl.HORIZONTAL_ORIGIN);
    if (!lbl.VERTICAL_ORIGIN.empty()) obj["verticalOrigin"] = json_string(lbl.VERTICAL_ORIGIN);
    if (!lbl.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(lbl.HEIGHT_REFERENCE);
    if (lbl.SHOW_BACKGROUND) obj["showBackground"] = json_bool(true);
    if (lbl.BACKGROUND_COLOR) obj["backgroundColor"] = color_to_json(*lbl.BACKGROUND_COLOR);
    if (lbl.BACKGROUND_PADDING_X != 0 || lbl.BACKGROUND_PADDING_Y != 0)
        obj["backgroundPadding"] = cartesian2_to_json(lbl.BACKGROUND_PADDING_X, lbl.BACKGROUND_PADDING_Y);
    if (lbl.EYE_OFFSET_X != 0 || lbl.EYE_OFFSET_Y != 0 || lbl.EYE_OFFSET_Z != 0)
        obj["eyeOffset"] = cartesian3_to_json(lbl.EYE_OFFSET_X, lbl.EYE_OFFSET_Y, lbl.EYE_OFFSET_Z);
    if (lbl.TRANSLUCENCY_BY_DISTANCE) obj["translucencyByDistance"] = near_far_scalar_to_json(*lbl.TRANSLUCENCY_BY_DISTANCE);
    if (lbl.PIXEL_OFFSET_SCALE_BY_DISTANCE) obj["pixelOffsetScaleByDistance"] = near_far_scalar_to_json(*lbl.PIXEL_OFFSET_SCALE_BY_DISTANCE);
    if (lbl.SCALE_BY_DISTANCE) obj["scaleByDistance"] = near_far_scalar_to_json(*lbl.SCALE_BY_DISTANCE);
    if (lbl.DISTANCE_DISPLAY_CONDITION_NEAR != 0 || lbl.DISTANCE_DISPLAY_CONDITION_FAR != 0)
        obj["distanceDisplayCondition"] = dist_display_to_json(lbl.DISTANCE_DISPLAY_CONDITION_NEAR, lbl.DISTANCE_DISPLAY_CONDITION_FAR);
    if (lbl.DISABLE_DEPTH_TEST_DISTANCE != 0) obj["disableDepthTestDistance"] = json_number(lbl.DISABLE_DEPTH_TEST_DISTANCE);
    return json_object(std::move(obj));
}

static JsonValue point_to_json(const CzmPoint& pt) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(pt.SHOW);
    if (pt.COLOR) obj["color"] = color_to_json(*pt.COLOR);
    if (pt.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*pt.OUTLINE_COLOR);
    if (pt.OUTLINE_WIDTH != 0) obj["outlineWidth"] = json_number(pt.OUTLINE_WIDTH);
    if (pt.PIXEL_SIZE != 1) obj["pixelSize"] = json_number(pt.PIXEL_SIZE);
    if (!pt.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(pt.HEIGHT_REFERENCE);
    if (pt.SCALE_BY_DISTANCE) obj["scaleByDistance"] = near_far_scalar_to_json(*pt.SCALE_BY_DISTANCE);
    if (pt.TRANSLUCENCY_BY_DISTANCE) obj["translucencyByDistance"] = near_far_scalar_to_json(*pt.TRANSLUCENCY_BY_DISTANCE);
    if (pt.DISTANCE_DISPLAY_CONDITION_NEAR != 0 || pt.DISTANCE_DISPLAY_CONDITION_FAR != 0)
        obj["distanceDisplayCondition"] = dist_display_to_json(pt.DISTANCE_DISPLAY_CONDITION_NEAR, pt.DISTANCE_DISPLAY_CONDITION_FAR);
    if (pt.DISABLE_DEPTH_TEST_DISTANCE != 0) obj["disableDepthTestDistance"] = json_number(pt.DISABLE_DEPTH_TEST_DISTANCE);
    return json_object(std::move(obj));
}

static JsonValue polyline_to_json(const CzmPolyline& pl) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(pl.SHOW);
    if (pl.WIDTH != 1) obj["width"] = json_number(pl.WIDTH);
    if (pl.CLAMP_TO_GROUND) obj["clampToGround"] = json_bool(true);
    if (!pl.ARC_TYPE.empty()) obj["arcType"] = json_string(pl.ARC_TYPE);
    if (pl.GRANULARITY != 0) obj["granularity"] = json_number(pl.GRANULARITY);
    if (!pl.SHADOWS.empty()) obj["shadows"] = json_string(pl.SHADOWS);
    if (!pl.CLASSIFICATION_TYPE.empty()) obj["classificationType"] = json_string(pl.CLASSIFICATION_TYPE);
    if (pl.Z_INDEX != 0) obj["zIndex"] = json_number(pl.Z_INDEX);
    add_positions(obj, pl.POSITIONS_CARTOGRAPHIC_DEGREES, pl.POSITIONS_CARTESIAN);
    if (pl.MATERIAL) {
        obj["material"] = pl_material_to_json(*pl.MATERIAL);
    } else if (pl.COLOR) {
        obj["material"] = wrap_solid_color(*pl.COLOR);
    }
    if (pl.DEPTH_FAIL_MATERIAL) obj["depthFailMaterial"] = pl_material_to_json(*pl.DEPTH_FAIL_MATERIAL);
    return json_object(std::move(obj));
}

static JsonValue polygon_to_json(const CzmPolygon& pg) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(pg.SHOW);
    if (!pg.FILL) obj["fill"] = json_bool(false);
    if (pg.OUTLINE) obj["outline"] = json_bool(true);
    if (pg.EXTRUDED_HEIGHT != 0) obj["extrudedHeight"] = json_number(pg.EXTRUDED_HEIGHT);
    if (!pg.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(pg.HEIGHT_REFERENCE);
    if (!pg.CLASSIFICATION_TYPE.empty()) obj["classificationType"] = json_string(pg.CLASSIFICATION_TYPE);
    if (!pg.ARC_TYPE.empty()) obj["arcType"] = json_string(pg.ARC_TYPE);
    if (pg.HEIGHT != 0) obj["height"] = json_number(pg.HEIGHT);
    if (!pg.EXTRUDED_HEIGHT_REFERENCE.empty()) obj["extrudedHeightReference"] = json_string(pg.EXTRUDED_HEIGHT_REFERENCE);
    if (pg.ST_ROTATION != 0) obj["stRotation"] = json_number(pg.ST_ROTATION);
    if (pg.GRANULARITY != 0) obj["granularity"] = json_number(pg.GRANULARITY);
    if (pg.OUTLINE_WIDTH != 0) obj["outlineWidth"] = json_number(pg.OUTLINE_WIDTH);
    if (pg.PER_POSITION_HEIGHT) obj["perPositionHeight"] = json_bool(true);
    if (!pg.CLOSE_TOP) obj["closeTop"] = json_bool(false);
    if (!pg.CLOSE_BOTTOM) obj["closeBottom"] = json_bool(false);
    if (!pg.SHADOWS.empty()) obj["shadows"] = json_string(pg.SHADOWS);
    if (pg.Z_INDEX != 0) obj["zIndex"] = json_number(pg.Z_INDEX);
    add_positions(obj, pg.POSITIONS_CARTOGRAPHIC_DEGREES, pg.POSITIONS_CARTESIAN);
    if (pg.MATERIAL) {
        obj["material"] = material_to_json(*pg.MATERIAL);
    } else if (pg.COLOR) {
        obj["material"] = wrap_solid_color(*pg.COLOR);
    }
    if (pg.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*pg.OUTLINE_COLOR);

    if (!pg.HOLES.empty()) {
        bool use_cd = !pg.HOLES[0].POSITIONS_CARTOGRAPHIC_DEGREES.empty();
        std::map<std::string, JsonValue> holes_obj;
        std::vector<JsonValue> hole_arrays;
        for (const auto& hole : pg.HOLES) {
            if (use_cd)
                hole_arrays.push_back(double_array_to_json(hole.POSITIONS_CARTOGRAPHIC_DEGREES));
            else
                hole_arrays.push_back(double_array_to_json(hole.POSITIONS_CARTESIAN));
        }
        holes_obj[use_cd ? "cartographicDegrees" : "cartesian"] = json_array(std::move(hole_arrays));
        obj["holes"] = json_object(std::move(holes_obj));
    }

    return json_object(std::move(obj));
}

static JsonValue path_to_json(const CzmPath& path) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(path.SHOW);
    if (path.LEAD_TIME != 0) obj["leadTime"] = json_number(path.LEAD_TIME);
    if (path.TRAIL_TIME != 0) obj["trailTime"] = json_number(path.TRAIL_TIME);
    if (path.WIDTH != 1) obj["width"] = json_number(path.WIDTH);
    if (path.RESOLUTION != 60) obj["resolution"] = json_number(path.RESOLUTION);
    if (path.MATERIAL) {
        obj["material"] = pl_material_to_json(*path.MATERIAL);
    } else if (path.COLOR) {
        obj["material"] = wrap_solid_color(*path.COLOR);
    }
    return json_object(std::move(obj));
}

static JsonValue model_to_json(const CzmModel& mdl) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(mdl.SHOW);
    if (!mdl.GLTF.empty()) obj["gltf"] = json_string(mdl.GLTF);
    if (mdl.SCALE != 1.0) obj["scale"] = json_number(mdl.SCALE);
    if (mdl.MINIMUM_PIXEL_SIZE != 0) obj["minimumPixelSize"] = json_number(mdl.MINIMUM_PIXEL_SIZE);
    if (mdl.MAXIMUM_SCALE != 0) obj["maximumScale"] = json_number(mdl.MAXIMUM_SCALE);
    if (!mdl.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(mdl.HEIGHT_REFERENCE);
    if (mdl.COLOR) obj["color"] = color_to_json(*mdl.COLOR);
    if (!mdl.INCREMENTALLY_LOAD_TEXTURES) obj["incrementallyLoadTextures"] = json_bool(false);
    if (!mdl.RUN_ANIMATIONS) obj["runAnimations"] = json_bool(false);
    if (!mdl.SHADOWS.empty()) obj["shadows"] = json_string(mdl.SHADOWS);
    if (mdl.SILHOUETTE_COLOR) obj["silhouetteColor"] = color_to_json(*mdl.SILHOUETTE_COLOR);
    if (mdl.SILHOUETTE_SIZE != 0) obj["silhouetteSize"] = json_number(mdl.SILHOUETTE_SIZE);
    if (!mdl.COLOR_BLEND_MODE.empty()) obj["colorBlendMode"] = json_string(mdl.COLOR_BLEND_MODE);
    if (mdl.COLOR_BLEND_AMOUNT != 0.5) obj["colorBlendAmount"] = json_number(mdl.COLOR_BLEND_AMOUNT);
    return json_object(std::move(obj));
}

static JsonValue ellipse_to_json(const CzmEllipse& e) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(e.SHOW);
    if (e.SEMI_MAJOR_AXIS != 0) obj["semiMajorAxis"] = json_number(e.SEMI_MAJOR_AXIS);
    if (e.SEMI_MINOR_AXIS != 0) obj["semiMinorAxis"] = json_number(e.SEMI_MINOR_AXIS);
    if (e.ROTATION != 0) obj["rotation"] = json_number(e.ROTATION);
    if (!e.FILL) obj["fill"] = json_bool(false);
    if (e.OUTLINE) obj["outline"] = json_bool(true);
    if (e.HEIGHT != 0) obj["height"] = json_number(e.HEIGHT);
    if (!e.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(e.HEIGHT_REFERENCE);
    if (e.EXTRUDED_HEIGHT != 0) obj["extrudedHeight"] = json_number(e.EXTRUDED_HEIGHT);
    if (!e.EXTRUDED_HEIGHT_REFERENCE.empty()) obj["extrudedHeightReference"] = json_string(e.EXTRUDED_HEIGHT_REFERENCE);
    if (e.ST_ROTATION != 0) obj["stRotation"] = json_number(e.ST_ROTATION);
    if (e.GRANULARITY != 0) obj["granularity"] = json_number(e.GRANULARITY);
    if (e.OUTLINE_WIDTH != 0) obj["outlineWidth"] = json_number(e.OUTLINE_WIDTH);
    if (e.NUMBER_OF_VERTICAL_LINES != 0) obj["numberOfVerticalLines"] = json_number(e.NUMBER_OF_VERTICAL_LINES);
    if (!e.SHADOWS.empty()) obj["shadows"] = json_string(e.SHADOWS);
    if (!e.CLASSIFICATION_TYPE.empty()) obj["classificationType"] = json_string(e.CLASSIFICATION_TYPE);
    if (e.Z_INDEX != 0) obj["zIndex"] = json_number(e.Z_INDEX);
    if (e.MATERIAL) {
        obj["material"] = material_to_json(*e.MATERIAL);
    } else if (e.COLOR) {
        obj["material"] = wrap_solid_color(*e.COLOR);
    }
    if (e.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*e.OUTLINE_COLOR);
    return json_object(std::move(obj));
}

static JsonValue box_to_json(const CzmBox& b) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(b.SHOW);
    if (b.DIMENSIONS_X != 0 || b.DIMENSIONS_Y != 0 || b.DIMENSIONS_Z != 0)
        obj["dimensions"] = cartesian3_to_json(b.DIMENSIONS_X, b.DIMENSIONS_Y, b.DIMENSIONS_Z);
    if (!b.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(b.HEIGHT_REFERENCE);
    if (!b.FILL) obj["fill"] = json_bool(false);
    if (b.MATERIAL) obj["material"] = material_to_json(*b.MATERIAL);
    if (b.OUTLINE) obj["outline"] = json_bool(true);
    if (b.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*b.OUTLINE_COLOR);
    if (b.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(b.OUTLINE_WIDTH);
    if (!b.SHADOWS.empty()) obj["shadows"] = json_string(b.SHADOWS);
    if (b.DISTANCE_DISPLAY_CONDITION_NEAR != 0 || b.DISTANCE_DISPLAY_CONDITION_FAR != 0)
        obj["distanceDisplayCondition"] = dist_display_to_json(b.DISTANCE_DISPLAY_CONDITION_NEAR, b.DISTANCE_DISPLAY_CONDITION_FAR);
    return json_object(std::move(obj));
}

static JsonValue corridor_to_json(const CzmCorridor& c) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(c.SHOW);
    add_positions(obj, c.POSITIONS_CARTOGRAPHIC_DEGREES, c.POSITIONS_CARTESIAN);
    if (c.WIDTH != 0) obj["width"] = json_number(c.WIDTH);
    if (c.HEIGHT != 0) obj["height"] = json_number(c.HEIGHT);
    if (!c.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(c.HEIGHT_REFERENCE);
    if (c.EXTRUDED_HEIGHT != 0) obj["extrudedHeight"] = json_number(c.EXTRUDED_HEIGHT);
    if (!c.EXTRUDED_HEIGHT_REFERENCE.empty()) obj["extrudedHeightReference"] = json_string(c.EXTRUDED_HEIGHT_REFERENCE);
    if (!c.CORNER_TYPE.empty()) obj["cornerType"] = json_string(c.CORNER_TYPE);
    if (c.GRANULARITY != 0) obj["granularity"] = json_number(c.GRANULARITY);
    if (!c.FILL) obj["fill"] = json_bool(false);
    if (c.MATERIAL) obj["material"] = material_to_json(*c.MATERIAL);
    if (c.OUTLINE) obj["outline"] = json_bool(true);
    if (c.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*c.OUTLINE_COLOR);
    if (c.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(c.OUTLINE_WIDTH);
    if (!c.SHADOWS.empty()) obj["shadows"] = json_string(c.SHADOWS);
    if (!c.CLASSIFICATION_TYPE.empty()) obj["classificationType"] = json_string(c.CLASSIFICATION_TYPE);
    if (c.Z_INDEX != 0) obj["zIndex"] = json_number(c.Z_INDEX);
    return json_object(std::move(obj));
}

static JsonValue cylinder_to_json(const CzmCylinder& c) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(c.SHOW);
    if (c.LENGTH != 0) obj["length"] = json_number(c.LENGTH);
    if (c.TOP_RADIUS != 0) obj["topRadius"] = json_number(c.TOP_RADIUS);
    if (c.BOTTOM_RADIUS != 0) obj["bottomRadius"] = json_number(c.BOTTOM_RADIUS);
    if (!c.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(c.HEIGHT_REFERENCE);
    if (!c.FILL) obj["fill"] = json_bool(false);
    if (c.MATERIAL) obj["material"] = material_to_json(*c.MATERIAL);
    if (c.OUTLINE) obj["outline"] = json_bool(true);
    if (c.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*c.OUTLINE_COLOR);
    if (c.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(c.OUTLINE_WIDTH);
    if (c.NUMBER_OF_VERTICAL_LINES != 16) obj["numberOfVerticalLines"] = json_number(c.NUMBER_OF_VERTICAL_LINES);
    if (c.SLICES != 128) obj["slices"] = json_number(c.SLICES);
    if (!c.SHADOWS.empty()) obj["shadows"] = json_string(c.SHADOWS);
    return json_object(std::move(obj));
}

static JsonValue ellipsoid_to_json(const CzmEllipsoidEntity& e) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(e.SHOW);
    if (e.RADII_X != 0 || e.RADII_Y != 0 || e.RADII_Z != 0)
        obj["radii"] = cartesian3_to_json(e.RADII_X, e.RADII_Y, e.RADII_Z);
    if (e.INNER_RADII_X != 0 || e.INNER_RADII_Y != 0 || e.INNER_RADII_Z != 0)
        obj["innerRadii"] = cartesian3_to_json(e.INNER_RADII_X, e.INNER_RADII_Y, e.INNER_RADII_Z);
    if (e.MINIMUM_CLOCK != 0) obj["minimumClock"] = json_number(e.MINIMUM_CLOCK);
    if (e.MAXIMUM_CLOCK != 0) obj["maximumClock"] = json_number(e.MAXIMUM_CLOCK);
    if (e.MINIMUM_CONE != 0) obj["minimumCone"] = json_number(e.MINIMUM_CONE);
    if (e.MAXIMUM_CONE != 0) obj["maximumCone"] = json_number(e.MAXIMUM_CONE);
    if (!e.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(e.HEIGHT_REFERENCE);
    if (!e.FILL) obj["fill"] = json_bool(false);
    if (e.MATERIAL) obj["material"] = material_to_json(*e.MATERIAL);
    if (e.OUTLINE) obj["outline"] = json_bool(true);
    if (e.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*e.OUTLINE_COLOR);
    if (e.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(e.OUTLINE_WIDTH);
    if (e.STACK_PARTITIONS != 64) obj["stackPartitions"] = json_number(e.STACK_PARTITIONS);
    if (e.SLICE_PARTITIONS != 64) obj["slicePartitions"] = json_number(e.SLICE_PARTITIONS);
    if (e.SUBDIVISIONS != 128) obj["subdivisions"] = json_number(e.SUBDIVISIONS);
    if (!e.SHADOWS.empty()) obj["shadows"] = json_string(e.SHADOWS);
    return json_object(std::move(obj));
}

static JsonValue polyline_volume_to_json(const CzmPolylineVolume& pv) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(pv.SHOW);
    add_positions(obj, pv.POSITIONS_CARTOGRAPHIC_DEGREES, pv.POSITIONS_CARTESIAN);
    if (!pv.SHAPE.empty()) {
        std::map<std::string, JsonValue> shape;
        shape["cartesian2"] = double_array_to_json(pv.SHAPE);
        obj["shape"] = json_object(std::move(shape));
    }
    if (!pv.CORNER_TYPE.empty()) obj["cornerType"] = json_string(pv.CORNER_TYPE);
    if (pv.GRANULARITY != 0) obj["granularity"] = json_number(pv.GRANULARITY);
    if (!pv.FILL) obj["fill"] = json_bool(false);
    if (pv.MATERIAL) obj["material"] = material_to_json(*pv.MATERIAL);
    if (pv.OUTLINE) obj["outline"] = json_bool(true);
    if (pv.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*pv.OUTLINE_COLOR);
    if (pv.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(pv.OUTLINE_WIDTH);
    if (!pv.SHADOWS.empty()) obj["shadows"] = json_string(pv.SHADOWS);
    return json_object(std::move(obj));
}

static JsonValue rectangle_to_json(const CzmRectangle& r) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(r.SHOW);
    if (!r.COORDINATES_WSEN_DEGREES.empty()) {
        std::map<std::string, JsonValue> coords;
        coords["wsenDegrees"] = double_array_to_json(r.COORDINATES_WSEN_DEGREES);
        obj["coordinates"] = json_object(std::move(coords));
    }
    if (r.HEIGHT != 0) obj["height"] = json_number(r.HEIGHT);
    if (!r.HEIGHT_REFERENCE.empty()) obj["heightReference"] = json_string(r.HEIGHT_REFERENCE);
    if (r.EXTRUDED_HEIGHT != 0) obj["extrudedHeight"] = json_number(r.EXTRUDED_HEIGHT);
    if (!r.EXTRUDED_HEIGHT_REFERENCE.empty()) obj["extrudedHeightReference"] = json_string(r.EXTRUDED_HEIGHT_REFERENCE);
    if (r.ROTATION != 0) obj["rotation"] = json_number(r.ROTATION);
    if (r.ST_ROTATION != 0) obj["stRotation"] = json_number(r.ST_ROTATION);
    if (r.GRANULARITY != 0) obj["granularity"] = json_number(r.GRANULARITY);
    if (!r.FILL) obj["fill"] = json_bool(false);
    if (r.MATERIAL) obj["material"] = material_to_json(*r.MATERIAL);
    if (r.OUTLINE) obj["outline"] = json_bool(true);
    if (r.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*r.OUTLINE_COLOR);
    if (r.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(r.OUTLINE_WIDTH);
    if (!r.SHADOWS.empty()) obj["shadows"] = json_string(r.SHADOWS);
    if (!r.CLASSIFICATION_TYPE.empty()) obj["classificationType"] = json_string(r.CLASSIFICATION_TYPE);
    if (r.Z_INDEX != 0) obj["zIndex"] = json_number(r.Z_INDEX);
    return json_object(std::move(obj));
}

static JsonValue tileset_to_json(const CzmTileset& t) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(t.SHOW);
    if (!t.URI.empty()) obj["uri"] = json_string(t.URI);
    if (t.MAXIMUM_SCREEN_SPACE_ERROR != 0) obj["maximumScreenSpaceError"] = json_number(t.MAXIMUM_SCREEN_SPACE_ERROR);
    return json_object(std::move(obj));
}

static JsonValue wall_to_json(const CzmWall& w) {
    std::map<std::string, JsonValue> obj;
    obj["show"] = json_bool(w.SHOW);
    add_positions(obj, w.POSITIONS_CARTOGRAPHIC_DEGREES, w.POSITIONS_CARTESIAN);
    if (!w.MINIMUM_HEIGHTS.empty()) obj["minimumHeights"] = double_array_to_json(w.MINIMUM_HEIGHTS);
    if (!w.MAXIMUM_HEIGHTS.empty()) obj["maximumHeights"] = double_array_to_json(w.MAXIMUM_HEIGHTS);
    if (w.GRANULARITY != 0) obj["granularity"] = json_number(w.GRANULARITY);
    if (!w.FILL) obj["fill"] = json_bool(false);
    if (w.MATERIAL) obj["material"] = material_to_json(*w.MATERIAL);
    if (w.OUTLINE) obj["outline"] = json_bool(true);
    if (w.OUTLINE_COLOR) obj["outlineColor"] = color_to_json(*w.OUTLINE_COLOR);
    if (w.OUTLINE_WIDTH != 1) obj["outlineWidth"] = json_number(w.OUTLINE_WIDTH);
    if (!w.SHADOWS.empty()) obj["shadows"] = json_string(w.SHADOWS);
    return json_object(std::move(obj));
}

static JsonValue orientation_to_json(const CzmOrientation& o) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(o.UNIT_QUATERNION_X));
    arr.push_back(json_number(o.UNIT_QUATERNION_Y));
    arr.push_back(json_number(o.UNIT_QUATERNION_Z));
    arr.push_back(json_number(o.UNIT_QUATERNION_W));
    obj["unitQuaternion"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

static JsonValue view_from_to_json(const CzmViewFrom& vf) {
    std::map<std::string, JsonValue> obj;
    std::vector<JsonValue> arr;
    arr.push_back(json_number(vf.X));
    arr.push_back(json_number(vf.Y));
    arr.push_back(json_number(vf.Z));
    obj["cartesian"] = json_array(std::move(arr));
    return json_object(std::move(obj));
}

// ============ Dynamic Property Write ============

static void add_interpolation(std::map<std::string, JsonValue>& obj, const CzmInterpolation& interp) {
    if (!interp.ALGORITHM.empty()) obj["interpolationAlgorithm"] = json_string(interp.ALGORITHM);
    if (interp.DEGREE != 1) obj["interpolationDegree"] = json_number(interp.DEGREE);
}

static std::string value_type_to_data_key(const std::string& vt) {
    if (vt == "NUMBER") return "number";
    if (vt == "BOOLEAN") return "boolean";
    if (vt == "COLOR") return "rgba";
    if (vt == "CARTESIAN3") return "cartesian";
    if (vt == "CARTESIAN2") return "cartesian2";
    if (vt == "NEAR_FAR_SCALAR") return "nearFarScalar";
    if (vt == "UNIT_QUATERNION") return "unitQuaternion";
    return "number";
}

static JsonValue dynamic_property_value_to_json(const CzmDynamicProperty& dp) {
    if (!dp.REFERENCE.empty()) {
        std::map<std::string, JsonValue> obj;
        obj["reference"] = json_string(dp.REFERENCE);
        return json_object(std::move(obj));
    }
    if (dp.SAMPLED) {
        const auto& s = *dp.SAMPLED;
        std::map<std::string, JsonValue> obj;
        if (!s.EPOCH.empty()) obj["epoch"] = json_string(s.EPOCH);
        auto key = value_type_to_data_key(s.VALUE_TYPE);
        if (!s.DATA.empty()) obj[key] = double_array_to_json(s.DATA);
        if (s.INTERPOLATION) add_interpolation(obj, *s.INTERPOLATION);
        return json_object(std::move(obj));
    }
    if (!dp.INTERVALS.empty()) {
        std::vector<JsonValue> arr;
        for (const auto& iv : dp.INTERVALS) {
            std::map<std::string, JsonValue> obj;
            if (!iv.INTERVAL.empty()) obj["interval"] = json_string(iv.INTERVAL);
            if (iv.VALUE_TYPE == "BOOLEAN") {
                obj["boolean"] = json_bool(iv.BOOLEAN_VALUE);
            } else if (iv.VALUE_TYPE == "NUMBER") {
                obj["number"] = json_number(iv.NUMBER_VALUE);
            } else if (iv.VALUE_TYPE == "STRING") {
                obj["string"] = json_string(iv.STRING_VALUE);
            } else if (iv.VALUE_TYPE == "COLOR" && iv.COLOR_VALUE) {
                std::vector<JsonValue> rgba;
                rgba.push_back(json_number(iv.COLOR_VALUE->RED));
                rgba.push_back(json_number(iv.COLOR_VALUE->GREEN));
                rgba.push_back(json_number(iv.COLOR_VALUE->BLUE));
                rgba.push_back(json_number(iv.COLOR_VALUE->ALPHA));
                obj["rgba"] = json_array(std::move(rgba));
            } else if (!iv.ARRAY_VALUE.empty()) {
                auto key = value_type_to_data_key(iv.VALUE_TYPE);
                obj[key] = double_array_to_json(iv.ARRAY_VALUE);
            }
            arr.push_back(json_object(std::move(obj)));
        }
        return json_array(std::move(arr));
    }
    return json_null();
}

// ============ Packet/Message Write ============

static JsonValue packet_to_json(const CzmPacket& pkt) {
    std::map<std::string, JsonValue> obj;
    obj["id"] = json_string(pkt.ID);
    if (!pkt.NAME.empty()) obj["name"] = json_string(pkt.NAME);
    if (!pkt.PARENT.empty()) obj["parent"] = json_string(pkt.PARENT);
    if (!pkt.DESCRIPTION.empty()) obj["description"] = json_string(pkt.DESCRIPTION);
    if (!pkt.AVAILABILITY.empty()) obj["availability"] = json_string(pkt.AVAILABILITY);
    if (pkt.DELETE) obj["delete"] = json_bool(true);

    // Position
    bool has_pos = pkt.POSITION_CARTOGRAPHIC_DEGREES || pkt.POSITION_CARTESIAN
        || !pkt.POSITION_CARTOGRAPHIC_DEGREES_ARRAY.empty()
        || !pkt.POSITION_CARTESIAN_ARRAY.empty()
        || !pkt.POSITION_REFERENCE.empty();
    if (has_pos) {
        if (!pkt.POSITION_REFERENCE.empty()) {
            std::map<std::string, JsonValue> pos;
            pos["reference"] = json_string(pkt.POSITION_REFERENCE);
            obj["position"] = json_object(std::move(pos));
        } else {
            std::map<std::string, JsonValue> pos;
            if (!pkt.POSITION_EPOCH.empty()) pos["epoch"] = json_string(pkt.POSITION_EPOCH);
            if (!pkt.POSITION_REFERENCE_FRAME.empty()) pos["referenceFrame"] = json_string(pkt.POSITION_REFERENCE_FRAME);
            if (pkt.POSITION_INTERPOLATION) add_interpolation(pos, *pkt.POSITION_INTERPOLATION);
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
    }

    if (pkt.BILLBOARD) obj["billboard"] = billboard_to_json(*pkt.BILLBOARD);
    if (pkt.LABEL) obj["label"] = label_to_json(*pkt.LABEL);
    if (pkt.POINT) obj["point"] = point_to_json(*pkt.POINT);
    if (pkt.POLYLINE) obj["polyline"] = polyline_to_json(*pkt.POLYLINE);
    if (pkt.POLYGON) obj["polygon"] = polygon_to_json(*pkt.POLYGON);
    if (pkt.MODEL) obj["model"] = model_to_json(*pkt.MODEL);
    if (pkt.PATH) obj["path"] = path_to_json(*pkt.PATH);
    if (pkt.ELLIPSE) obj["ellipse"] = ellipse_to_json(*pkt.ELLIPSE);
    if (!pkt.ORIENTATION_REFERENCE.empty()) {
        std::map<std::string, JsonValue> orient;
        orient["reference"] = json_string(pkt.ORIENTATION_REFERENCE);
        obj["orientation"] = json_object(std::move(orient));
    } else if (!pkt.ORIENTATION_ARRAY.empty()) {
        std::map<std::string, JsonValue> orient;
        if (!pkt.ORIENTATION_EPOCH.empty()) orient["epoch"] = json_string(pkt.ORIENTATION_EPOCH);
        orient["unitQuaternion"] = double_array_to_json(pkt.ORIENTATION_ARRAY);
        if (pkt.ORIENTATION_INTERPOLATION) add_interpolation(orient, *pkt.ORIENTATION_INTERPOLATION);
        obj["orientation"] = json_object(std::move(orient));
    } else if (pkt.ORIENTATION) {
        obj["orientation"] = orientation_to_json(*pkt.ORIENTATION);
    }
    if (pkt.VIEW_FROM) obj["viewFrom"] = view_from_to_json(*pkt.VIEW_FROM);
    if (pkt.BOX) obj["box"] = box_to_json(*pkt.BOX);
    if (pkt.CORRIDOR) obj["corridor"] = corridor_to_json(*pkt.CORRIDOR);
    if (pkt.CYLINDER) obj["cylinder"] = cylinder_to_json(*pkt.CYLINDER);
    if (pkt.ELLIPSOID) obj["ellipsoid"] = ellipsoid_to_json(*pkt.ELLIPSOID);
    if (pkt.POLYLINE_VOLUME) obj["polylineVolume"] = polyline_volume_to_json(*pkt.POLYLINE_VOLUME);
    if (pkt.RECTANGLE) obj["rectangle"] = rectangle_to_json(*pkt.RECTANGLE);
    if (pkt.TILESET) obj["tileset"] = tileset_to_json(*pkt.TILESET);
    if (pkt.WALL) obj["wall"] = wall_to_json(*pkt.WALL);

    // Write dynamic properties back into entity objects
    for (const auto& dp : pkt.DYNAMIC_PROPERTIES) {
        auto dot_pos = dp.NAME.find('.');
        if (dot_pos == std::string::npos) continue;
        auto entity_key = dp.NAME.substr(0, dot_pos);
        auto prop_key = dp.NAME.substr(dot_pos + 1);

        // Get or create the entity object
        auto it = obj.find(entity_key);
        if (it == obj.end()) {
            // Create entity object with just show:true
            std::map<std::string, JsonValue> entity_obj;
            entity_obj["show"] = json_bool(true);
            obj[entity_key] = json_object(std::move(entity_obj));
            it = obj.find(entity_key);
        }
        // Inject the dynamic property value
        if (it->second.is_object()) {
            it->second.obj[prop_key] = dynamic_property_value_to_json(dp);
        }
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
    bool has_clock = !msg.CLOCK_CURRENT_TIME.empty() || !msg.CLOCK_INTERVAL.empty()
        || msg.CLOCK_MULTIPLIER != 1.0 || !msg.CLOCK_RANGE.empty() || !msg.CLOCK_STEP.empty();
    if (has_clock) {
        std::map<std::string, JsonValue> clock;
        if (!msg.CLOCK_CURRENT_TIME.empty()) clock["currentTime"] = json_string(msg.CLOCK_CURRENT_TIME);
        if (!msg.CLOCK_INTERVAL.empty()) clock["interval"] = json_string(msg.CLOCK_INTERVAL);
        if (msg.CLOCK_MULTIPLIER != 1.0) clock["multiplier"] = json_number(msg.CLOCK_MULTIPLIER);
        if (!msg.CLOCK_RANGE.empty()) clock["range"] = json_string(msg.CLOCK_RANGE);
        if (!msg.CLOCK_STEP.empty()) clock["step"] = json_string(msg.CLOCK_STEP);
        doc["clock"] = json_object(std::move(clock));
    }
    items.push_back(json_object(std::move(doc)));

    for (const auto& pkt : msg.PACKETS) {
        items.push_back(packet_to_json(pkt));
    }

    return write_json(json_array(std::move(items)));
}

} // namespace ccsds
