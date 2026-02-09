#include "ccsds/navigation/omm_parser.h"
#include "ccsds/navigation/oem_parser.h"
#include "ccsds/navigation/cdm_parser.h"
#include "ccsds/navigation/opm_parser.h"
#include "ccsds/navigation/aem_parser.h"
#include "ccsds/navigation/tdm_parser.h"
#include "ccsds/navigation/xtce_parser.h"
#include "ccsds/navigation/gjn_parser.h"
#include "ccsds/navigation/czm_parser.h"
#include "ccsds/navigation/kml_parser.h"
#include "ccsds/navigation/gpx_parser.h"
#include "ccsds/navigation/cot_parser.h"

#include <iostream>
#include <cassert>
#include <cmath>
#include <fstream>
#include <sstream>

static int pass_count = 0;
static int fail_count = 0;

#define TEST(name) \
    std::cout << "  " << name << "... "; \
    try {

#define END_TEST \
        std::cout << "PASS" << std::endl; \
        pass_count++; \
    } catch (const std::exception& e) { \
        std::cout << "FAIL: " << e.what() << std::endl; \
        fail_count++; \
    }

#define ASSERT_EQ(a, b) \
    if ((a) != (b)) { \
        std::ostringstream _oss; \
        _oss << "Expected '" << (b) << "' but got '" << (a) << "'"; \
        throw std::runtime_error(_oss.str()); \
    }

#define ASSERT_NEAR(a, b, tol) \
    if (std::abs((a) - (b)) > (tol)) { \
        std::ostringstream _oss; \
        _oss << "Expected ~" << (b) << " but got " << (a); \
        throw std::runtime_error(_oss.str()); \
    }

#define ASSERT_TRUE(cond) \
    if (!(cond)) throw std::runtime_error("Assertion failed: " #cond);

void test_gjn() {
    std::cout << "GeoJSON (GJN):" << std::endl;

    TEST("parse FeatureCollection")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "id": "pt1",
                    "geometry": { "type": "Point", "coordinates": [-95.364, 29.7604, 408000] },
                    "properties": { "name": "ISS", "altitude_km": 408 }
                }
            ]
        })");
        ASSERT_EQ(msg.FEATURES.size(), 1u);
        ASSERT_EQ(msg.FEATURES[0].ID, "pt1");
        ASSERT_TRUE(msg.FEATURES[0].HAS_GEOMETRY);
        ASSERT_EQ(msg.FEATURES[0].GEOMETRY->TYPE, "Point");
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY->point.LONGITUDE, -95.364, 0.001);
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY->point.LATITUDE, 29.7604, 0.001);
        ASSERT_TRUE(msg.FEATURES[0].GEOMETRY->point.HAS_ALTITUDE);
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY->point.ALTITUDE, 408000, 0.1);
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES.size(), 2u);
    END_TEST

    TEST("roundtrip preserves features")
        std::string input = R"({"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-95.0,29.0],[-80.0,25.0]]},"properties":{"name":"track"}}]})";
        auto msg = ccsds::parse_gjn_json(input);
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_EQ(msg2.FEATURES.size(), 1u);
        ASSERT_EQ(msg2.FEATURES[0].GEOMETRY->TYPE, "LineString");
        ASSERT_EQ(msg2.FEATURES[0].GEOMETRY->positions.size(), 2u);
    END_TEST

    TEST("null geometry feature")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "geometry": null,
            "properties": {"name": "unlocated"}
        })");
        ASSERT_EQ(msg.FEATURES.size(), 1u);
        ASSERT_TRUE(!msg.FEATURES[0].HAS_GEOMETRY);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(!msg2.FEATURES[0].HAS_GEOMETRY);
    END_TEST

    TEST("null properties feature")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [0, 0]},
            "properties": null
        })");
        ASSERT_EQ(msg.FEATURES.size(), 1u);
        ASSERT_TRUE(msg.FEATURES[0].PROPERTIES_IS_NULL);
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES.size(), 0u);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(msg2.FEATURES[0].PROPERTIES_IS_NULL);
    END_TEST

    TEST("numeric feature id")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "id": 42,
            "geometry": {"type": "Point", "coordinates": [1, 2]},
            "properties": {}
        })");
        ASSERT_EQ(msg.FEATURES.size(), 1u);
        ASSERT_TRUE(msg.FEATURES[0].ID_IS_NUMERIC);
        ASSERT_NEAR(msg.FEATURES[0].NUM_ID, 42.0, 0.001);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(msg2.FEATURES[0].ID_IS_NUMERIC);
        ASSERT_NEAR(msg2.FEATURES[0].NUM_ID, 42.0, 0.001);
    END_TEST

    TEST("property types: bool, null, nested object, array")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [0, 0]},
            "properties": {
                "active": true,
                "deleted": false,
                "notes": null,
                "meta": {"source": "gps", "accuracy": 3.5},
                "tags": ["orbit", "leo"]
            }
        })");
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES.size(), 5u);
        // Properties are stored in map order (alphabetical): active, deleted, meta, notes, tags
        // active = true (bool)
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES[0].KEY, "active");
        ASSERT_TRUE(msg.FEATURES[0].PROPERTIES[0].IS_BOOL);
        ASSERT_TRUE(msg.FEATURES[0].PROPERTIES[0].BOOL_VALUE);
        // deleted = false (bool)
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES[1].KEY, "deleted");
        ASSERT_TRUE(msg.FEATURES[0].PROPERTIES[1].IS_BOOL);
        ASSERT_TRUE(!msg.FEATURES[0].PROPERTIES[1].BOOL_VALUE);
        // meta = nested object (stored as JSON_VALUE)
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES[2].KEY, "meta");
        ASSERT_TRUE(!msg.FEATURES[0].PROPERTIES[2].JSON_VALUE.empty());
        // notes = null
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES[3].KEY, "notes");
        ASSERT_TRUE(msg.FEATURES[0].PROPERTIES[3].IS_NULL);
        // tags = array (stored as JSON_VALUE)
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES[4].KEY, "tags");
        ASSERT_TRUE(!msg.FEATURES[0].PROPERTIES[4].JSON_VALUE.empty());
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_EQ(msg2.FEATURES[0].PROPERTIES[0].KEY, "active");
        ASSERT_TRUE(msg2.FEATURES[0].PROPERTIES[0].IS_BOOL);
        ASSERT_TRUE(msg2.FEATURES[0].PROPERTIES[0].BOOL_VALUE);
        ASSERT_EQ(msg2.FEATURES[0].PROPERTIES[3].KEY, "notes");
        ASSERT_TRUE(msg2.FEATURES[0].PROPERTIES[3].IS_NULL);
    END_TEST

    TEST("bbox on feature")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "bbox": [-100, 25, -90, 35],
                "geometry": {"type": "Point", "coordinates": [-95, 30]},
                "properties": {}
            }]
        })");
        ASSERT_TRUE(msg.FEATURES[0].BBOX.has_value());
        ASSERT_NEAR(msg.FEATURES[0].BBOX->WEST, -100.0, 0.001);
        ASSERT_NEAR(msg.FEATURES[0].BBOX->NORTH, 35.0, 0.001);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(msg2.FEATURES[0].BBOX.has_value());
        ASSERT_NEAR(msg2.FEATURES[0].BBOX->WEST, -100.0, 0.001);
    END_TEST

    TEST("altitude zero preserved with HAS_ALTITUDE")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [10, 20, 0]},
            "properties": {}
        })");
        ASSERT_TRUE(msg.FEATURES[0].GEOMETRY->point.HAS_ALTITUDE);
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY->point.ALTITUDE, 0.0, 0.001);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(msg2.FEATURES[0].GEOMETRY->point.HAS_ALTITUDE);
        ASSERT_NEAR(msg2.FEATURES[0].GEOMETRY->point.ALTITUDE, 0.0, 0.001);
    END_TEST

    TEST("2D position has no altitude")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [10, 20]},
            "properties": {}
        })");
        ASSERT_TRUE(!msg.FEATURES[0].GEOMETRY->point.HAS_ALTITUDE);
        // Roundtrip - altitude should not appear
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(!msg2.FEATURES[0].GEOMETRY->point.HAS_ALTITUDE);
    END_TEST

    TEST("bbox with altitude (6 values)")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "FeatureCollection",
            "bbox": [-100, -10, 0, -25, 35, 408000],
            "features": []
        })");
        ASSERT_TRUE(msg.BBOX.has_value());
        ASSERT_TRUE(msg.BBOX->HAS_ALTITUDE);
        ASSERT_NEAR(msg.BBOX->MIN_ALTITUDE, 0.0, 0.001);
        ASSERT_NEAR(msg.BBOX->MAX_ALTITUDE, 408000.0, 0.1);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(msg2.BBOX->HAS_ALTITUDE);
        ASSERT_NEAR(msg2.BBOX->MIN_ALTITUDE, 0.0, 0.001);
    END_TEST

    TEST("bbox without altitude (4 values)")
        auto msg = ccsds::parse_gjn_json(R"({
            "type": "FeatureCollection",
            "bbox": [-100, -10, -25, 35],
            "features": []
        })");
        ASSERT_TRUE(msg.BBOX.has_value());
        ASSERT_TRUE(!msg.BBOX->HAS_ALTITUDE);
        // Roundtrip
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_TRUE(!msg2.BBOX->HAS_ALTITUDE);
    END_TEST
}

void test_czm() {
    std::cout << "CZML (CZM):" << std::endl;

    TEST("parse CZML document")
        auto msg = ccsds::parse_czm_json(R"([
            {
                "id": "document",
                "name": "Test",
                "version": "1.0",
                "clock": { "currentTime": "2024-01-15T00:00:00Z", "multiplier": 60 }
            },
            {
                "id": "sat1",
                "name": "Satellite 1",
                "position": {
                    "cartographicDegrees": [-95.364, 29.7604, 408000]
                },
                "billboard": {
                    "show": true,
                    "image": "icon.png",
                    "scale": 1.5
                }
            }
        ])");
        ASSERT_EQ(msg.NAME, "Test");
        ASSERT_EQ(msg.VERSION, "1.0");
        ASSERT_EQ(msg.CLOCK_MULTIPLIER, 60.0);
        ASSERT_EQ(msg.PACKETS.size(), 1u);
        ASSERT_EQ(msg.PACKETS[0].ID, "sat1");
        ASSERT_TRUE(msg.PACKETS[0].BILLBOARD.has_value());
        ASSERT_NEAR(msg.PACKETS[0].BILLBOARD->SCALE, 1.5, 0.001);
    END_TEST

    TEST("parse ellipse and heightReference")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Ellipse Test","version":"1.0"},
            {
                "id": "zone1",
                "name": "Coverage Zone",
                "position": { "cartographicDegrees": [-95.0, 29.0, 0] },
                "ellipse": {
                    "show": true,
                    "semiMajorAxis": 500000,
                    "semiMinorAxis": 300000,
                    "rotation": 0.785,
                    "fill": true,
                    "outline": true,
                    "height": 100,
                    "heightReference": "CLAMP_TO_GROUND",
                    "material": { "solidColor": { "color": { "rgba": [0, 255, 0, 128] } } },
                    "outlineColor": { "rgba": [0, 255, 0, 255] }
                }
            }
        ])");
        ASSERT_EQ(msg.PACKETS.size(), 1u);
        ASSERT_TRUE(msg.PACKETS[0].ELLIPSE.has_value());
        const auto& e = *msg.PACKETS[0].ELLIPSE;
        ASSERT_NEAR(e.SEMI_MAJOR_AXIS, 500000, 1);
        ASSERT_NEAR(e.SEMI_MINOR_AXIS, 300000, 1);
        ASSERT_NEAR(e.ROTATION, 0.785, 0.001);
        ASSERT_TRUE(e.FILL);
        ASSERT_TRUE(e.OUTLINE);
        ASSERT_NEAR(e.HEIGHT, 100, 0.1);
        ASSERT_EQ(e.HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_TRUE(e.COLOR.has_value());
        ASSERT_EQ(e.COLOR->GREEN, 255);
        ASSERT_TRUE(e.OUTLINE_COLOR.has_value());
    END_TEST

    TEST("parse billboard with heightReference and pixelOffset")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"BB Test","version":"1.0"},
            {
                "id": "bb1",
                "billboard": {
                    "show": true,
                    "image": "icon.png",
                    "heightReference": "CLAMP_TO_GROUND",
                    "pixelOffset": { "cartesian2": [10, -20] },
                    "horizontalOrigin": "CENTER",
                    "verticalOrigin": "BOTTOM",
                    "translucencyByDistance": {
                        "nearFarScalar": [100, 1.0, 50000, 0.1]
                    }
                }
            }
        ])");
        const auto& bb = *msg.PACKETS[0].BILLBOARD;
        ASSERT_EQ(bb.HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_NEAR(bb.PIXEL_OFFSET_X, 10, 0.1);
        ASSERT_NEAR(bb.PIXEL_OFFSET_Y, -20, 0.1);
        ASSERT_EQ(bb.HORIZONTAL_ORIGIN, "CENTER");
        ASSERT_EQ(bb.VERTICAL_ORIGIN, "BOTTOM");
        ASSERT_TRUE(bb.TRANSLUCENCY_BY_DISTANCE.has_value());
        ASSERT_NEAR(bb.TRANSLUCENCY_BY_DISTANCE->NEAR_DISTANCE, 100, 0.1);
        ASSERT_NEAR(bb.TRANSLUCENCY_BY_DISTANCE->FAR_VALUE, 0.1, 0.01);
    END_TEST

    TEST("parse label with style and origins")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Label Test","version":"1.0"},
            {
                "id": "lbl1",
                "label": {
                    "show": true,
                    "text": "Test Label",
                    "style": "FILL_AND_OUTLINE",
                    "horizontalOrigin": "LEFT",
                    "verticalOrigin": "TOP",
                    "heightReference": "RELATIVE_TO_GROUND",
                    "pixelOffset": { "cartesian2": [5, -10] }
                }
            }
        ])");
        const auto& lbl = *msg.PACKETS[0].LABEL;
        ASSERT_EQ(lbl.STYLE, "FILL_AND_OUTLINE");
        ASSERT_EQ(lbl.HORIZONTAL_ORIGIN, "LEFT");
        ASSERT_EQ(lbl.VERTICAL_ORIGIN, "TOP");
        ASSERT_EQ(lbl.HEIGHT_REFERENCE, "RELATIVE_TO_GROUND");
        ASSERT_NEAR(lbl.PIXEL_OFFSET_X, 5, 0.1);
        ASSERT_NEAR(lbl.PIXEL_OFFSET_Y, -10, 0.1);
    END_TEST

    TEST("parse point/polygon/model with heightReference")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"HR Test","version":"1.0"},
            {
                "id": "pt1",
                "point": { "show": true, "heightReference": "CLAMP_TO_GROUND" }
            },
            {
                "id": "pg1",
                "polygon": {
                    "show": true,
                    "heightReference": "RELATIVE_TO_GROUND",
                    "classificationType": "BOTH",
                    "positions": { "cartographicDegrees": [-95,29,0,-94,29,0,-94,30,0] }
                }
            },
            {
                "id": "mdl1",
                "model": {
                    "show": true,
                    "gltf": "model.glb",
                    "heightReference": "CLAMP_TO_GROUND",
                    "color": { "rgba": [255, 0, 0, 255] }
                }
            }
        ])");
        ASSERT_EQ(msg.PACKETS[0].POINT->HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_EQ(msg.PACKETS[1].POLYGON->HEIGHT_REFERENCE, "RELATIVE_TO_GROUND");
        ASSERT_EQ(msg.PACKETS[1].POLYGON->CLASSIFICATION_TYPE, "BOTH");
        ASSERT_EQ(msg.PACKETS[2].MODEL->HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_TRUE(msg.PACKETS[2].MODEL->COLOR.has_value());
        ASSERT_EQ(msg.PACKETS[2].MODEL->COLOR->RED, 255);
    END_TEST

    TEST("roundtrip preserves ellipse and new fields")
        std::string input = R"([{"id":"document","name":"RT","version":"1.0"},{"id":"e1","ellipse":{"show":true,"semiMajorAxis":1000,"semiMinorAxis":500,"rotation":1.57,"outline":true,"heightReference":"CLAMP_TO_GROUND"},"billboard":{"show":true,"image":"x.png","heightReference":"NONE","horizontalOrigin":"CENTER","verticalOrigin":"BOTTOM","pixelOffset":{"cartesian2":[5,-10]}}}])";
        auto msg = ccsds::parse_czm_json(input);
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS.size(), 1u);
        ASSERT_TRUE(msg2.PACKETS[0].ELLIPSE.has_value());
        ASSERT_NEAR(msg2.PACKETS[0].ELLIPSE->SEMI_MAJOR_AXIS, 1000, 0.1);
        ASSERT_NEAR(msg2.PACKETS[0].ELLIPSE->ROTATION, 1.57, 0.01);
        ASSERT_EQ(msg2.PACKETS[0].ELLIPSE->HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_TRUE(msg2.PACKETS[0].BILLBOARD.has_value());
        ASSERT_EQ(msg2.PACKETS[0].BILLBOARD->HEIGHT_REFERENCE, "NONE");
        ASSERT_EQ(msg2.PACKETS[0].BILLBOARD->HORIZONTAL_ORIGIN, "CENTER");
        ASSERT_NEAR(msg2.PACKETS[0].BILLBOARD->PIXEL_OFFSET_X, 5, 0.1);
    END_TEST

    TEST("roundtrip preserves packets")
        std::string input = R"([{"id":"document","name":"RT","version":"1.0"},{"id":"obj1","name":"Object"}])";
        auto msg = ccsds::parse_czm_json(input);
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.NAME, "RT");
        ASSERT_EQ(msg2.PACKETS.size(), 1u);
        ASSERT_EQ(msg2.PACKETS[0].ID, "obj1");
    END_TEST

    TEST("parse box entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Box","version":"1.0"},
            {"id":"b1","box":{
                "show":true,
                "dimensions":{"cartesian":[10,20,30]},
                "heightReference":"CLAMP_TO_GROUND",
                "fill":true,
                "material":{"solidColor":{"color":{"rgba":[255,0,0,128]}}},
                "outline":true,
                "outlineColor":{"rgba":[255,0,0,255]},
                "outlineWidth":2,
                "shadows":"ENABLED",
                "distanceDisplayCondition":{"distanceDisplayCondition":[0,50000]}
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].BOX.has_value());
        const auto& box = *msg.PACKETS[0].BOX;
        ASSERT_NEAR(box.DIMENSIONS_X, 10, 0.1);
        ASSERT_NEAR(box.DIMENSIONS_Y, 20, 0.1);
        ASSERT_NEAR(box.DIMENSIONS_Z, 30, 0.1);
        ASSERT_EQ(box.HEIGHT_REFERENCE, "CLAMP_TO_GROUND");
        ASSERT_TRUE(box.FILL);
        ASSERT_TRUE(box.OUTLINE);
        ASSERT_NEAR(box.OUTLINE_WIDTH, 2, 0.1);
        ASSERT_EQ(box.SHADOWS, "ENABLED");
        ASSERT_NEAR(box.DISTANCE_DISPLAY_CONDITION_FAR, 50000, 1);
        ASSERT_TRUE(box.MATERIAL.has_value());
    END_TEST

    TEST("parse corridor entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Corridor","version":"1.0"},
            {"id":"c1","corridor":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0,-93,29,0]},
                "width":200000,
                "height":10,
                "heightReference":"RELATIVE_TO_GROUND",
                "extrudedHeight":100,
                "cornerType":"ROUNDED",
                "fill":true,
                "outline":true,
                "shadows":"CAST_ONLY",
                "classificationType":"TERRAIN",
                "zIndex":5
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].CORRIDOR.has_value());
        const auto& cor = *msg.PACKETS[0].CORRIDOR;
        ASSERT_EQ(cor.POSITIONS_CARTOGRAPHIC_DEGREES.size(), 9u);
        ASSERT_NEAR(cor.WIDTH, 200000, 1);
        ASSERT_NEAR(cor.HEIGHT, 10, 0.1);
        ASSERT_EQ(cor.HEIGHT_REFERENCE, "RELATIVE_TO_GROUND");
        ASSERT_NEAR(cor.EXTRUDED_HEIGHT, 100, 0.1);
        ASSERT_EQ(cor.CORNER_TYPE, "ROUNDED");
        ASSERT_EQ(cor.SHADOWS, "CAST_ONLY");
        ASSERT_EQ(cor.CLASSIFICATION_TYPE, "TERRAIN");
        ASSERT_EQ(cor.Z_INDEX, 5);
    END_TEST

    TEST("parse cylinder entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Cyl","version":"1.0"},
            {"id":"cy1","cylinder":{
                "show":true,
                "length":500,
                "topRadius":100,
                "bottomRadius":200,
                "fill":true,
                "outline":true,
                "outlineColor":{"rgba":[0,255,0,255]},
                "numberOfVerticalLines":32,
                "slices":64,
                "shadows":"RECEIVE_ONLY"
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].CYLINDER.has_value());
        const auto& cyl = *msg.PACKETS[0].CYLINDER;
        ASSERT_NEAR(cyl.LENGTH, 500, 0.1);
        ASSERT_NEAR(cyl.TOP_RADIUS, 100, 0.1);
        ASSERT_NEAR(cyl.BOTTOM_RADIUS, 200, 0.1);
        ASSERT_TRUE(cyl.OUTLINE);
        ASSERT_EQ(cyl.NUMBER_OF_VERTICAL_LINES, 32);
        ASSERT_EQ(cyl.SLICES, 64);
        ASSERT_EQ(cyl.SHADOWS, "RECEIVE_ONLY");
    END_TEST

    TEST("parse ellipsoid entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Ell","version":"1.0"},
            {"id":"el1","ellipsoid":{
                "show":true,
                "radii":{"cartesian":[500000,500000,300000]},
                "innerRadii":{"cartesian":[400000,400000,200000]},
                "minimumClock":0,
                "maximumClock":6.283,
                "minimumCone":0,
                "maximumCone":3.14,
                "fill":true,
                "outline":true,
                "stackPartitions":32,
                "slicePartitions":32,
                "subdivisions":64
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].ELLIPSOID.has_value());
        const auto& el = *msg.PACKETS[0].ELLIPSOID;
        ASSERT_NEAR(el.RADII_X, 500000, 1);
        ASSERT_NEAR(el.RADII_Z, 300000, 1);
        ASSERT_NEAR(el.INNER_RADII_X, 400000, 1);
        ASSERT_NEAR(el.MAXIMUM_CLOCK, 6.283, 0.001);
        ASSERT_NEAR(el.MAXIMUM_CONE, 3.14, 0.01);
        ASSERT_EQ(el.STACK_PARTITIONS, 32);
        ASSERT_EQ(el.SLICE_PARTITIONS, 32);
        ASSERT_EQ(el.SUBDIVISIONS, 64);
    END_TEST

    TEST("parse rectangle entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Rect","version":"1.0"},
            {"id":"r1","rectangle":{
                "show":true,
                "coordinates":{"wsenDegrees":[-110,20,-100,30]},
                "height":100,
                "extrudedHeight":5000,
                "rotation":0.5,
                "fill":true,
                "outline":true,
                "shadows":"DISABLED",
                "classificationType":"BOTH",
                "zIndex":3
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].RECTANGLE.has_value());
        const auto& rect = *msg.PACKETS[0].RECTANGLE;
        ASSERT_EQ(rect.COORDINATES_WSEN_DEGREES.size(), 4u);
        ASSERT_NEAR(rect.COORDINATES_WSEN_DEGREES[0], -110, 0.1);
        ASSERT_NEAR(rect.COORDINATES_WSEN_DEGREES[3], 30, 0.1);
        ASSERT_NEAR(rect.HEIGHT, 100, 0.1);
        ASSERT_NEAR(rect.EXTRUDED_HEIGHT, 5000, 0.1);
        ASSERT_NEAR(rect.ROTATION, 0.5, 0.01);
        ASSERT_EQ(rect.SHADOWS, "DISABLED");
        ASSERT_EQ(rect.Z_INDEX, 3);
    END_TEST

    TEST("parse wall entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Wall","version":"1.0"},
            {"id":"w1","wall":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0,-93,29,0]},
                "minimumHeights":[0,0,0],
                "maximumHeights":[100000,200000,150000],
                "fill":true,
                "outline":true,
                "material":{"solidColor":{"color":{"rgba":[128,0,128,200]}}},
                "outlineColor":{"rgba":[128,0,128,255]}
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].WALL.has_value());
        const auto& wall = *msg.PACKETS[0].WALL;
        ASSERT_EQ(wall.POSITIONS_CARTOGRAPHIC_DEGREES.size(), 9u);
        ASSERT_EQ(wall.MINIMUM_HEIGHTS.size(), 3u);
        ASSERT_EQ(wall.MAXIMUM_HEIGHTS.size(), 3u);
        ASSERT_NEAR(wall.MAXIMUM_HEIGHTS[1], 200000, 1);
        ASSERT_TRUE(wall.MATERIAL.has_value());
    END_TEST

    TEST("parse polyline volume entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"PV","version":"1.0"},
            {"id":"pv1","polylineVolume":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0]},
                "shape":[-50000,-50000,50000,-50000,50000,50000,-50000,50000],
                "cornerType":"MITERED",
                "fill":true,
                "outline":true,
                "shadows":"ENABLED"
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].POLYLINE_VOLUME.has_value());
        const auto& pv = *msg.PACKETS[0].POLYLINE_VOLUME;
        ASSERT_EQ(pv.POSITIONS_CARTOGRAPHIC_DEGREES.size(), 6u);
        ASSERT_EQ(pv.SHAPE.size(), 8u);
        ASSERT_EQ(pv.CORNER_TYPE, "MITERED");
        ASSERT_EQ(pv.SHADOWS, "ENABLED");
    END_TEST

    TEST("parse tileset entity")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Tile","version":"1.0"},
            {"id":"t1","tileset":{
                "show":true,
                "uri":"tileset.json",
                "maximumScreenSpaceError":16
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].TILESET.has_value());
        const auto& ts = *msg.PACKETS[0].TILESET;
        ASSERT_EQ(ts.URI, "tileset.json");
        ASSERT_NEAR(ts.MAXIMUM_SCREEN_SPACE_ERROR, 16, 0.1);
    END_TEST

    TEST("parse orientation and viewFrom")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Orient","version":"1.0"},
            {"id":"o1",
             "orientation":{"unitQuaternion":[0,0,0.707,0.707]},
             "viewFrom":{"cartesian":[-1000,-1000,500]}
            }
        ])");
        ASSERT_TRUE(msg.PACKETS[0].ORIENTATION.has_value());
        ASSERT_NEAR(msg.PACKETS[0].ORIENTATION->UNIT_QUATERNION_Z, 0.707, 0.001);
        ASSERT_NEAR(msg.PACKETS[0].ORIENTATION->UNIT_QUATERNION_W, 0.707, 0.001);
        ASSERT_TRUE(msg.PACKETS[0].VIEW_FROM.has_value());
        ASSERT_NEAR(msg.PACKETS[0].VIEW_FROM->X, -1000, 0.1);
        ASSERT_NEAR(msg.PACKETS[0].VIEW_FROM->Z, 500, 0.1);
    END_TEST

    TEST("parse delete flag and clock range/step")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Del","version":"1.0",
             "clock":{"currentTime":"2024-01-15T00:00:00Z","multiplier":1,"range":"LOOP_STOP","step":"SYSTEM_CLOCK_MULTIPLIER"}},
            {"id":"del1","delete":true}
        ])");
        ASSERT_EQ(msg.CLOCK_RANGE, "LOOP_STOP");
        ASSERT_EQ(msg.CLOCK_STEP, "SYSTEM_CLOCK_MULTIPLIER");
        ASSERT_EQ(msg.PACKETS.size(), 1u);
        ASSERT_TRUE(msg.PACKETS[0].DELETE);
    END_TEST

    TEST("parse polygon with holes")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Holes","version":"1.0"},
            {"id":"ph1","polygon":{
                "show":true,
                "positions":{"cartographicDegrees":[-100,30,0,-90,30,0,-90,40,0,-100,40,0]},
                "holes":{"cartographicDegrees":[[-98,32,0,-92,32,0,-92,38,0,-98,38,0]]},
                "fill":true,
                "perPositionHeight":true,
                "closeTop":true,
                "closeBottom":false,
                "arcType":"GEODESIC",
                "shadows":"ENABLED",
                "zIndex":2
            }}
        ])");
        const auto& pg = *msg.PACKETS[0].POLYGON;
        ASSERT_EQ(pg.POSITIONS_CARTOGRAPHIC_DEGREES.size(), 12u);
        ASSERT_EQ(pg.HOLES.size(), 1u);
        ASSERT_EQ(pg.HOLES[0].POSITIONS_CARTOGRAPHIC_DEGREES.size(), 12u);
        ASSERT_TRUE(pg.PER_POSITION_HEIGHT);
        ASSERT_TRUE(pg.CLOSE_TOP);
        ASSERT_TRUE(!pg.CLOSE_BOTTOM);
        ASSERT_EQ(pg.ARC_TYPE, "GEODESIC");
        ASSERT_EQ(pg.SHADOWS, "ENABLED");
        ASSERT_EQ(pg.Z_INDEX, 2);
    END_TEST

    TEST("parse billboard with new fields")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"BB2","version":"1.0"},
            {"id":"bb2","billboard":{
                "show":true,
                "image":"icon.png",
                "rotation":1.57,
                "sizeInMeters":true,
                "width":64,
                "height":64,
                "eyeOffset":{"cartesian":[0,0,-100]},
                "scaleByDistance":{"nearFarScalar":[100,2.0,50000,0.5]},
                "pixelOffsetScaleByDistance":{"nearFarScalar":[100,1.0,50000,0.1]},
                "distanceDisplayCondition":{"distanceDisplayCondition":[10,100000]},
                "disableDepthTestDistance":5000
            }}
        ])");
        const auto& bb = *msg.PACKETS[0].BILLBOARD;
        ASSERT_NEAR(bb.ROTATION, 1.57, 0.01);
        ASSERT_TRUE(bb.SIZE_IN_METERS);
        ASSERT_NEAR(bb.WIDTH, 64, 0.1);
        ASSERT_NEAR(bb.HEIGHT, 64, 0.1);
        ASSERT_NEAR(bb.EYE_OFFSET_Z, -100, 0.1);
        ASSERT_TRUE(bb.SCALE_BY_DISTANCE.has_value());
        ASSERT_NEAR(bb.SCALE_BY_DISTANCE->NEAR_VALUE, 2.0, 0.01);
        ASSERT_TRUE(bb.PIXEL_OFFSET_SCALE_BY_DISTANCE.has_value());
        ASSERT_NEAR(bb.DISTANCE_DISPLAY_CONDITION_NEAR, 10, 0.1);
        ASSERT_NEAR(bb.DISTANCE_DISPLAY_CONDITION_FAR, 100000, 1);
        ASSERT_NEAR(bb.DISABLE_DEPTH_TEST_DISTANCE, 5000, 0.1);
    END_TEST

    TEST("parse label with background and eyeOffset")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Lbl2","version":"1.0"},
            {"id":"lbl2","label":{
                "show":true,
                "text":"Hello",
                "showBackground":true,
                "backgroundColor":{"rgba":[0,0,0,200]},
                "backgroundPadding":{"cartesian2":[8,4]},
                "eyeOffset":{"cartesian":[0,0,-50]},
                "scaleByDistance":{"nearFarScalar":[500,1.5,100000,0.2]},
                "distanceDisplayCondition":{"distanceDisplayCondition":[0,200000]},
                "disableDepthTestDistance":3000
            }}
        ])");
        const auto& lbl = *msg.PACKETS[0].LABEL;
        ASSERT_TRUE(lbl.SHOW_BACKGROUND);
        ASSERT_TRUE(lbl.BACKGROUND_COLOR.has_value());
        ASSERT_EQ(lbl.BACKGROUND_COLOR->ALPHA, 200);
        ASSERT_NEAR(lbl.BACKGROUND_PADDING_X, 8, 0.1);
        ASSERT_NEAR(lbl.BACKGROUND_PADDING_Y, 4, 0.1);
        ASSERT_NEAR(lbl.EYE_OFFSET_Z, -50, 0.1);
        ASSERT_TRUE(lbl.SCALE_BY_DISTANCE.has_value());
        ASSERT_NEAR(lbl.DISTANCE_DISPLAY_CONDITION_FAR, 200000, 1);
        ASSERT_NEAR(lbl.DISABLE_DEPTH_TEST_DISTANCE, 3000, 0.1);
    END_TEST

    TEST("parse model with new fields")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Mdl2","version":"1.0"},
            {"id":"m2","model":{
                "show":true,
                "gltf":"sat.glb",
                "scale":2.0,
                "minimumPixelSize":64,
                "maximumScale":1000,
                "incrementallyLoadTextures":false,
                "runAnimations":false,
                "shadows":"CAST_ONLY",
                "silhouetteColor":{"rgba":[0,255,0,255]},
                "silhouetteSize":3,
                "colorBlendMode":"MIX",
                "colorBlendAmount":0.75
            }}
        ])");
        const auto& mdl = *msg.PACKETS[0].MODEL;
        ASSERT_NEAR(mdl.SCALE, 2.0, 0.01);
        ASSERT_NEAR(mdl.MINIMUM_PIXEL_SIZE, 64, 0.1);
        ASSERT_NEAR(mdl.MAXIMUM_SCALE, 1000, 0.1);
        ASSERT_TRUE(!mdl.INCREMENTALLY_LOAD_TEXTURES);
        ASSERT_TRUE(!mdl.RUN_ANIMATIONS);
        ASSERT_EQ(mdl.SHADOWS, "CAST_ONLY");
        ASSERT_TRUE(mdl.SILHOUETTE_COLOR.has_value());
        ASSERT_EQ(mdl.SILHOUETTE_COLOR->GREEN, 255);
        ASSERT_NEAR(mdl.SILHOUETTE_SIZE, 3, 0.1);
        ASSERT_EQ(mdl.COLOR_BLEND_MODE, "MIX");
        ASSERT_NEAR(mdl.COLOR_BLEND_AMOUNT, 0.75, 0.01);
    END_TEST

    TEST("parse polyline with material system")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"PL","version":"1.0"},
            {"id":"pl1","polyline":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0]},
                "width":3,
                "arcType":"GEODESIC",
                "granularity":0.001,
                "material":{"polylineDash":{"color":{"rgba":[255,0,0,255]},"gapColor":{"rgba":[0,0,0,0]},"dashLength":32,"dashPattern":255}},
                "shadows":"ENABLED",
                "classificationType":"BOTH",
                "zIndex":1
            }}
        ])");
        const auto& pl = *msg.PACKETS[0].POLYLINE;
        ASSERT_EQ(pl.ARC_TYPE, "GEODESIC");
        ASSERT_NEAR(pl.GRANULARITY, 0.001, 0.0001);
        ASSERT_TRUE(pl.MATERIAL.has_value());
        ASSERT_TRUE(pl.MATERIAL->POLYLINE_DASH.has_value());
        ASSERT_NEAR(pl.MATERIAL->POLYLINE_DASH->DASH_LENGTH, 32, 0.1);
        ASSERT_EQ(pl.SHADOWS, "ENABLED");
        ASSERT_EQ(pl.CLASSIFICATION_TYPE, "BOTH");
        ASSERT_EQ(pl.Z_INDEX, 1);
    END_TEST

    TEST("parse surface material types (grid/stripe/image)")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Mat","version":"1.0"},
            {"id":"mat1","polygon":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,29,0,-94,30,0]},
                "material":{
                    "grid":{
                        "color":{"rgba":[255,255,0,128]},
                        "cellAlpha":0.2,
                        "lineCount":{"cartesian2":[16,16]},
                        "lineThickness":{"cartesian2":[2,2]}
                    }
                }
            }},
            {"id":"mat2","polygon":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,29,0,-94,30,0]},
                "material":{
                    "stripe":{
                        "orientation":"VERTICAL",
                        "evenColor":{"rgba":[255,0,0,255]},
                        "oddColor":{"rgba":[0,0,255,255]},
                        "offset":0.5,
                        "repeat":4
                    }
                }
            }},
            {"id":"mat3","polygon":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,29,0,-94,30,0]},
                "material":{
                    "image":{
                        "image":"texture.png",
                        "repeat":{"cartesian2":[4,4]},
                        "color":{"rgba":[255,255,255,200]},
                        "transparent":true
                    }
                }
            }}
        ])");
        // Grid material
        const auto& m1 = msg.PACKETS[0].POLYGON->MATERIAL;
        ASSERT_TRUE(m1.has_value());
        ASSERT_TRUE(m1->GRID.has_value());
        ASSERT_NEAR(m1->GRID->CELL_ALPHA, 0.2, 0.01);
        ASSERT_NEAR(m1->GRID->LINE_COUNT_X, 16, 0.1);
        ASSERT_NEAR(m1->GRID->LINE_THICKNESS_X, 2, 0.1);
        // Stripe material
        const auto& m2 = msg.PACKETS[1].POLYGON->MATERIAL;
        ASSERT_TRUE(m2.has_value());
        ASSERT_TRUE(m2->STRIPE.has_value());
        ASSERT_EQ(m2->STRIPE->ORIENTATION, "VERTICAL");
        ASSERT_TRUE(m2->STRIPE->EVEN_COLOR.has_value());
        ASSERT_NEAR(m2->STRIPE->REPEAT_COUNT, 4, 0.1);
        // Image material
        const auto& m3 = msg.PACKETS[2].POLYGON->MATERIAL;
        ASSERT_TRUE(m3.has_value());
        ASSERT_TRUE(m3->IMAGE.has_value());
        ASSERT_EQ(m3->IMAGE->IMAGE, "texture.png");
        ASSERT_NEAR(m3->IMAGE->REPEAT_X, 4, 0.1);
        ASSERT_TRUE(m3->IMAGE->TRANSPARENT);
    END_TEST

    TEST("roundtrip new entity types")
        std::string input = R"([{"id":"document","name":"RT2","version":"1.0","clock":{"currentTime":"2024-01-15T00:00:00Z","multiplier":1,"range":"LOOP_STOP","step":"TICK_DEPENDENT"}},{"id":"b1","box":{"show":true,"dimensions":{"cartesian":[10,20,30]},"fill":true,"outline":true}},{"id":"cy1","cylinder":{"show":true,"length":100,"topRadius":50,"bottomRadius":50}},{"id":"r1","rectangle":{"show":true,"coordinates":{"wsenDegrees":[-110,20,-100,30]}}},{"id":"t1","tileset":{"show":true,"uri":"tiles.json"}},{"id":"o1","orientation":{"unitQuaternion":[0,0,0,1]},"viewFrom":{"cartesian":[0,0,1000]},"delete":false}])";
        auto msg = ccsds::parse_czm_json(input);
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.CLOCK_RANGE, "LOOP_STOP");
        ASSERT_EQ(msg2.CLOCK_STEP, "TICK_DEPENDENT");
        ASSERT_EQ(msg2.PACKETS.size(), 5u);
        // Box roundtrip
        ASSERT_TRUE(msg2.PACKETS[0].BOX.has_value());
        ASSERT_NEAR(msg2.PACKETS[0].BOX->DIMENSIONS_X, 10, 0.1);
        ASSERT_NEAR(msg2.PACKETS[0].BOX->DIMENSIONS_Z, 30, 0.1);
        // Cylinder roundtrip
        ASSERT_TRUE(msg2.PACKETS[1].CYLINDER.has_value());
        ASSERT_NEAR(msg2.PACKETS[1].CYLINDER->LENGTH, 100, 0.1);
        // Rectangle roundtrip
        ASSERT_TRUE(msg2.PACKETS[2].RECTANGLE.has_value());
        ASSERT_EQ(msg2.PACKETS[2].RECTANGLE->COORDINATES_WSEN_DEGREES.size(), 4u);
        // Tileset roundtrip
        ASSERT_TRUE(msg2.PACKETS[3].TILESET.has_value());
        ASSERT_EQ(msg2.PACKETS[3].TILESET->URI, "tiles.json");
        // Orientation + viewFrom roundtrip
        ASSERT_TRUE(msg2.PACKETS[4].ORIENTATION.has_value());
        ASSERT_NEAR(msg2.PACKETS[4].ORIENTATION->UNIT_QUATERNION_W, 1, 0.01);
        ASSERT_TRUE(msg2.PACKETS[4].VIEW_FROM.has_value());
        ASSERT_NEAR(msg2.PACKETS[4].VIEW_FROM->Z, 1000, 0.1);
    END_TEST

    TEST("parse polyline glow and arrow materials")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"PLMat","version":"1.0"},
            {"id":"pl1","polyline":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0]},
                "material":{"polylineGlow":{"color":{"rgba":[0,128,255,255]},"glowPower":0.5,"taperPower":0.8}}
            }},
            {"id":"pl2","polyline":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0]},
                "material":{"polylineArrow":{"color":{"rgba":[255,0,0,255]}}}
            }},
            {"id":"pl3","polyline":{
                "show":true,
                "positions":{"cartographicDegrees":[-95,29,0,-94,30,0]},
                "material":{"polylineOutline":{"color":{"rgba":[255,255,0,255]},"outlineColor":{"rgba":[0,0,0,255]},"outlineWidth":3}}
            }}
        ])");
        // Glow
        ASSERT_TRUE(msg.PACKETS[0].POLYLINE->MATERIAL.has_value());
        ASSERT_TRUE(msg.PACKETS[0].POLYLINE->MATERIAL->POLYLINE_GLOW.has_value());
        ASSERT_NEAR(msg.PACKETS[0].POLYLINE->MATERIAL->POLYLINE_GLOW->GLOW_POWER, 0.5, 0.01);
        ASSERT_NEAR(msg.PACKETS[0].POLYLINE->MATERIAL->POLYLINE_GLOW->TAPER_POWER, 0.8, 0.01);
        // Arrow
        ASSERT_TRUE(msg.PACKETS[1].POLYLINE->MATERIAL.has_value());
        ASSERT_TRUE(msg.PACKETS[1].POLYLINE->MATERIAL->POLYLINE_ARROW.has_value());
        ASSERT_EQ(msg.PACKETS[1].POLYLINE->MATERIAL->POLYLINE_ARROW->COLOR->RED, 255);
        // Outline
        ASSERT_TRUE(msg.PACKETS[2].POLYLINE->MATERIAL.has_value());
        ASSERT_TRUE(msg.PACKETS[2].POLYLINE->MATERIAL->POLYLINE_OUTLINE.has_value());
        ASSERT_NEAR(msg.PACKETS[2].POLYLINE->MATERIAL->POLYLINE_OUTLINE->OUTLINE_WIDTH, 3, 0.1);
    END_TEST

    TEST("parse point with scaleByDistance and translucency")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Pt2","version":"1.0"},
            {"id":"pt2","point":{
                "show":true,
                "pixelSize":8,
                "scaleByDistance":{"nearFarScalar":[500,2.0,100000,0.5]},
                "translucencyByDistance":{"nearFarScalar":[500,1.0,100000,0.1]},
                "distanceDisplayCondition":{"distanceDisplayCondition":[0,500000]},
                "disableDepthTestDistance":10000
            }}
        ])");
        const auto& pt = *msg.PACKETS[0].POINT;
        ASSERT_NEAR(pt.PIXEL_SIZE, 8, 0.1);
        ASSERT_TRUE(pt.SCALE_BY_DISTANCE.has_value());
        ASSERT_NEAR(pt.SCALE_BY_DISTANCE->NEAR_VALUE, 2.0, 0.01);
        ASSERT_TRUE(pt.TRANSLUCENCY_BY_DISTANCE.has_value());
        ASSERT_NEAR(pt.DISTANCE_DISPLAY_CONDITION_FAR, 500000, 1);
        ASSERT_NEAR(pt.DISABLE_DEPTH_TEST_DISTANCE, 10000, 0.1);
    END_TEST

    TEST("sampled position with interpolation")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"Sampled","version":"1.0"},
            {"id":"sat1",
             "position":{
                "epoch":"2024-01-15T00:00:00Z",
                "cartographicDegrees":[0,-95,29,408000,60,-94,30,408100,120,-93,31,408200],
                "interpolationAlgorithm":"LAGRANGE",
                "interpolationDegree":5,
                "referenceFrame":"INERTIAL"
             }
            }
        ])");
        ASSERT_EQ(msg.PACKETS[0].POSITION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg.PACKETS[0].POSITION_CARTOGRAPHIC_DEGREES_ARRAY.size(), 12u);
        ASSERT_TRUE(msg.PACKETS[0].POSITION_INTERPOLATION.has_value());
        ASSERT_EQ(msg.PACKETS[0].POSITION_INTERPOLATION->ALGORITHM, "LAGRANGE");
        ASSERT_EQ(msg.PACKETS[0].POSITION_INTERPOLATION->DEGREE, 5);
        ASSERT_EQ(msg.PACKETS[0].POSITION_REFERENCE_FRAME, "INERTIAL");
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].POSITION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg2.PACKETS[0].POSITION_CARTOGRAPHIC_DEGREES_ARRAY.size(), 12u);
        ASSERT_EQ(msg2.PACKETS[0].POSITION_INTERPOLATION->ALGORITHM, "LAGRANGE");
        ASSERT_EQ(msg2.PACKETS[0].POSITION_INTERPOLATION->DEGREE, 5);
        ASSERT_EQ(msg2.PACKETS[0].POSITION_REFERENCE_FRAME, "INERTIAL");
    END_TEST

    TEST("position reference")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"PosRef","version":"1.0"},
            {"id":"follower","position":{"reference":"Satellite#position"}}
        ])");
        ASSERT_EQ(msg.PACKETS[0].POSITION_REFERENCE, "Satellite#position");
        ASSERT_TRUE(!msg.PACKETS[0].POSITION_CARTOGRAPHIC_DEGREES.has_value());
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].POSITION_REFERENCE, "Satellite#position");
    END_TEST

    TEST("sampled orientation")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"OrientSampled","version":"1.0"},
            {"id":"sat1","orientation":{
                "epoch":"2024-01-15T00:00:00Z",
                "unitQuaternion":[0,0,0,0.707,0.707,60,0,0,1,0],
                "interpolationAlgorithm":"LINEAR",
                "interpolationDegree":1
            }}
        ])");
        ASSERT_TRUE(!msg.PACKETS[0].ORIENTATION.has_value());
        ASSERT_EQ(msg.PACKETS[0].ORIENTATION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg.PACKETS[0].ORIENTATION_ARRAY.size(), 10u);
        ASSERT_NEAR(msg.PACKETS[0].ORIENTATION_ARRAY[3], 0.707, 0.001);
        ASSERT_TRUE(msg.PACKETS[0].ORIENTATION_INTERPOLATION.has_value());
        ASSERT_EQ(msg.PACKETS[0].ORIENTATION_INTERPOLATION->ALGORITHM, "LINEAR");
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].ORIENTATION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg2.PACKETS[0].ORIENTATION_ARRAY.size(), 10u);
        ASSERT_EQ(msg2.PACKETS[0].ORIENTATION_INTERPOLATION->ALGORITHM, "LINEAR");
    END_TEST

    TEST("orientation reference")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"OrientRef","version":"1.0"},
            {"id":"follower","orientation":{"reference":"Satellite#orientation"}}
        ])");
        ASSERT_EQ(msg.PACKETS[0].ORIENTATION_REFERENCE, "Satellite#orientation");
        ASSERT_TRUE(!msg.PACKETS[0].ORIENTATION.has_value());
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].ORIENTATION_REFERENCE, "Satellite#orientation");
    END_TEST

    TEST("interval-based billboard show")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"IntervalShow","version":"1.0"},
            {"id":"sat1","billboard":{
                "show":[
                    {"interval":"2024-01-15T00:00:00Z/2024-01-15T06:00:00Z","boolean":true},
                    {"interval":"2024-01-15T06:00:00Z/2024-01-15T12:00:00Z","boolean":false}
                ],
                "image":"icon.png"
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].BILLBOARD.has_value());
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES[0].NAME, "billboard.show");
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS.size(), 2u);
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS[0].VALUE_TYPE, "BOOLEAN");
        ASSERT_TRUE(msg.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS[0].BOOLEAN_VALUE);
        ASSERT_TRUE(!msg.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS[1].BOOLEAN_VALUE);
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS.size(), 2u);
        ASSERT_TRUE(msg2.PACKETS[0].DYNAMIC_PROPERTIES[0].INTERVALS[0].BOOLEAN_VALUE);
    END_TEST

    TEST("sampled billboard scale")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"SampledScale","version":"1.0"},
            {"id":"sat1","billboard":{
                "show":true,
                "image":"icon.png",
                "scale":{"epoch":"2024-01-15T00:00:00Z","number":[0,1.0,60,1.5,120,2.0]}
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].BILLBOARD.has_value());
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        const auto& dp = msg.PACKETS[0].DYNAMIC_PROPERTIES[0];
        ASSERT_EQ(dp.NAME, "billboard.scale");
        ASSERT_TRUE(dp.SAMPLED.has_value());
        ASSERT_EQ(dp.SAMPLED->EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(dp.SAMPLED->VALUE_TYPE, "NUMBER");
        ASSERT_EQ(dp.SAMPLED->DATA.size(), 6u);
        ASSERT_NEAR(dp.SAMPLED->DATA[1], 1.0, 0.01);
        ASSERT_NEAR(dp.SAMPLED->DATA[3], 1.5, 0.01);
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES[0].SAMPLED->DATA.size(), 6u);
    END_TEST

    TEST("sampled point color")
        auto msg = ccsds::parse_czm_json(R"([
            {"id":"document","name":"SampledColor","version":"1.0"},
            {"id":"pt1","point":{
                "show":true,
                "pixelSize":10,
                "color":{"epoch":"2024-01-15T00:00:00Z","rgba":[0,255,0,0,255,60,0,255,0,255]}
            }}
        ])");
        ASSERT_TRUE(msg.PACKETS[0].POINT.has_value());
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        const auto& dp = msg.PACKETS[0].DYNAMIC_PROPERTIES[0];
        ASSERT_EQ(dp.NAME, "point.color");
        ASSERT_TRUE(dp.SAMPLED.has_value());
        ASSERT_EQ(dp.SAMPLED->VALUE_TYPE, "COLOR");
        ASSERT_EQ(dp.SAMPLED->DATA.size(), 10u);
        // Roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES[0].SAMPLED->VALUE_TYPE, "COLOR");
    END_TEST

    TEST("mixed static and dynamic roundtrip")
        std::string input = R"([
            {"id":"document","name":"Mixed","version":"1.0"},
            {"id":"sat1",
             "position":{
                "epoch":"2024-01-15T00:00:00Z",
                "cartographicDegrees":[0,-95,29,408000,60,-94,30,408100],
                "interpolationAlgorithm":"LAGRANGE",
                "interpolationDegree":5
             },
             "billboard":{
                "show":true,
                "image":"icon.png",
                "scale":{"epoch":"2024-01-15T00:00:00Z","number":[0,1.0,60,2.0]}
             },
             "point":{
                "show":true,
                "pixelSize":10,
                "color":{"rgba":[255,0,0,255]}
             }
            }
        ])";
        auto msg = ccsds::parse_czm_json(input);
        ASSERT_EQ(msg.PACKETS.size(), 1u);
        // Position sampled
        ASSERT_EQ(msg.PACKETS[0].POSITION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg.PACKETS[0].POSITION_CARTOGRAPHIC_DEGREES_ARRAY.size(), 8u);
        ASSERT_EQ(msg.PACKETS[0].POSITION_INTERPOLATION->ALGORITHM, "LAGRANGE");
        // Billboard scale is dynamic
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg.PACKETS[0].DYNAMIC_PROPERTIES[0].NAME, "billboard.scale");
        // Point color is static (should have no dynamic props for it)
        ASSERT_TRUE(msg.PACKETS[0].POINT->COLOR.has_value());
        ASSERT_EQ(msg.PACKETS[0].POINT->COLOR->RED, 255);
        // Full roundtrip
        auto output = ccsds::write_czm_json(msg);
        auto msg2 = ccsds::parse_czm_json(output);
        ASSERT_EQ(msg2.PACKETS[0].POSITION_EPOCH, "2024-01-15T00:00:00Z");
        ASSERT_EQ(msg2.PACKETS[0].POSITION_INTERPOLATION->ALGORITHM, "LAGRANGE");
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES.size(), 1u);
        ASSERT_EQ(msg2.PACKETS[0].DYNAMIC_PROPERTIES[0].SAMPLED->DATA.size(), 4u);
        ASSERT_TRUE(msg2.PACKETS[0].POINT->COLOR.has_value());
    END_TEST
}

void test_kml() {
    std::cout << "KML:" << std::endl;

    TEST("parse KML document")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>Test KML</name>
                    <Style id="s1">
                        <LineStyle><color>ff0000ff</color><width>2</width></LineStyle>
                    </Style>
                    <Placemark>
                        <name>Houston</name>
                        <Point><coordinates>-95.0933,29.5593,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.NAME, "Test KML");
        ASSERT_EQ(msg.STYLES.size(), 1u);
        ASSERT_EQ(msg.STYLES[0].ID, "s1");
        ASSERT_EQ(msg.PLACEMARKS.size(), 1u);
        ASSERT_EQ(msg.PLACEMARKS[0].NAME, "Houston");
        ASSERT_TRUE(msg.PLACEMARKS[0].POINT.has_value());
        ASSERT_NEAR(msg.PLACEMARKS[0].POINT->COORDINATES.LONGITUDE, -95.0933, 0.001);
    END_TEST

    TEST("parse Camera")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>Camera Test</name>
                    <Placemark>
                        <name>Orbital View</name>
                        <Camera>
                            <longitude>-95.364</longitude>
                            <latitude>29.76</latitude>
                            <altitude>408000</altitude>
                            <heading>45</heading>
                            <tilt>60</tilt>
                            <roll>10</roll>
                            <altitudeMode>absolute</altitudeMode>
                        </Camera>
                        <Point><coordinates>-95.364,29.76,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.PLACEMARKS.size(), 1u);
        ASSERT_TRUE(msg.PLACEMARKS[0].CAMERA.has_value());
        const auto& cam = *msg.PLACEMARKS[0].CAMERA;
        ASSERT_NEAR(cam.LONGITUDE, -95.364, 0.001);
        ASSERT_NEAR(cam.LATITUDE, 29.76, 0.01);
        ASSERT_NEAR(cam.ALTITUDE, 408000, 1);
        ASSERT_NEAR(cam.HEADING, 45, 0.1);
        ASSERT_NEAR(cam.TILT, 60, 0.1);
        ASSERT_NEAR(cam.ROLL, 10, 0.1);
        ASSERT_EQ(cam.ALTITUDE_MODE, "absolute");
    END_TEST

    TEST("parse NetworkLink")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>NL Test</name>
                    <NetworkLink>
                        <name>Live Data</name>
                        <Link>
                            <href>http://example.com/data.kml</href>
                            <refreshMode>onInterval</refreshMode>
                            <refreshInterval>30</refreshInterval>
                            <viewRefreshMode>onStop</viewRefreshMode>
                            <viewRefreshTime>5</viewRefreshTime>
                        </Link>
                    </NetworkLink>
                    <Folder>
                        <name>Links Folder</name>
                        <NetworkLink>
                            <name>Folder Link</name>
                            <Link><href>http://example.com/folder.kml</href></Link>
                        </NetworkLink>
                    </Folder>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.NETWORK_LINKS.size(), 1u);
        ASSERT_EQ(msg.NETWORK_LINKS[0].NAME, "Live Data");
        ASSERT_EQ(msg.NETWORK_LINKS[0].HREF, "http://example.com/data.kml");
        ASSERT_EQ(msg.NETWORK_LINKS[0].REFRESH_MODE, "onInterval");
        ASSERT_NEAR(msg.NETWORK_LINKS[0].REFRESH_INTERVAL, 30, 0.1);
        ASSERT_EQ(msg.NETWORK_LINKS[0].VIEW_REFRESH_MODE, "onStop");
        ASSERT_NEAR(msg.NETWORK_LINKS[0].VIEW_REFRESH_TIME, 5, 0.1);
        ASSERT_EQ(msg.FOLDERS.size(), 1u);
        ASSERT_EQ(msg.FOLDERS[0].NETWORK_LINKS.size(), 1u);
        ASSERT_EQ(msg.FOLDERS[0].NETWORK_LINKS[0].NAME, "Folder Link");
    END_TEST

    TEST("parse colorMode and hotSpot")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>Style Test</name>
                    <Style id="s1">
                        <IconStyle>
                            <color>ff0000ff</color>
                            <colorMode>random</colorMode>
                            <hotSpot x="0.5" y="0.5" xunits="fraction" yunits="fraction"/>
                            <Icon><href>icon.png</href></Icon>
                        </IconStyle>
                        <LineStyle>
                            <color>ff00ff00</color>
                            <colorMode>normal</colorMode>
                        </LineStyle>
                        <PolyStyle>
                            <color>7f0000ff</color>
                            <colorMode>random</colorMode>
                        </PolyStyle>
                        <LabelStyle>
                            <color>ffffffff</color>
                            <colorMode>normal</colorMode>
                        </LabelStyle>
                    </Style>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.STYLES.size(), 1u);
        ASSERT_TRUE(msg.STYLES[0].ICON_STYLE.has_value());
        ASSERT_EQ(msg.STYLES[0].ICON_STYLE->COLOR_MODE, "random");
        ASSERT_NEAR(msg.STYLES[0].ICON_STYLE->HOTSPOT_X, 0.5, 0.01);
        ASSERT_NEAR(msg.STYLES[0].ICON_STYLE->HOTSPOT_Y, 0.5, 0.01);
        ASSERT_EQ(msg.STYLES[0].ICON_STYLE->HOTSPOT_X_UNITS, "fraction");
        ASSERT_EQ(msg.STYLES[0].ICON_STYLE->HOTSPOT_Y_UNITS, "fraction");
        ASSERT_EQ(msg.STYLES[0].LINE_STYLE->COLOR_MODE, "normal");
        ASSERT_EQ(msg.STYLES[0].POLY_STYLE->COLOR_MODE, "random");
        ASSERT_EQ(msg.STYLES[0].LABEL_STYLE->COLOR_MODE, "normal");
    END_TEST

    TEST("parse nested MultiGeometry")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>MG Test</name>
                    <Placemark>
                        <name>Nested MG</name>
                        <MultiGeometry>
                            <Point><coordinates>1,2,3</coordinates></Point>
                            <MultiGeometry>
                                <LineString><coordinates>4,5,0 6,7,0</coordinates></LineString>
                            </MultiGeometry>
                        </MultiGeometry>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].MULTI_GEOMETRY.has_value());
        const auto& mg = *msg.PLACEMARKS[0].MULTI_GEOMETRY;
        ASSERT_EQ(mg.POINTS.size(), 1u);
        ASSERT_EQ(mg.MULTI_GEOMETRIES.size(), 1u);
        ASSERT_EQ(mg.MULTI_GEOMETRIES[0].LINE_STRINGS.size(), 1u);
    END_TEST

    TEST("roundtrip preserves Camera and NetworkLink")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>RT Test</name>
                    <NetworkLink>
                        <name>Link1</name>
                        <Link><href>http://example.com/a.kml</href><refreshMode>onInterval</refreshMode><refreshInterval>60</refreshInterval></Link>
                    </NetworkLink>
                    <Placemark>
                        <name>PM1</name>
                        <Camera>
                            <longitude>10</longitude><latitude>20</latitude><altitude>500</altitude>
                            <heading>90</heading><tilt>45</tilt><roll>5</roll>
                            <altitudeMode>absolute</altitudeMode>
                        </Camera>
                        <Point><coordinates>10,20,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.NETWORK_LINKS.size(), 1u);
        ASSERT_EQ(msg2.NETWORK_LINKS[0].NAME, "Link1");
        ASSERT_EQ(msg2.NETWORK_LINKS[0].HREF, "http://example.com/a.kml");
        ASSERT_EQ(msg2.NETWORK_LINKS[0].REFRESH_MODE, "onInterval");
        ASSERT_TRUE(msg2.PLACEMARKS[0].CAMERA.has_value());
        ASSERT_NEAR(msg2.PLACEMARKS[0].CAMERA->HEADING, 90, 0.1);
        ASSERT_NEAR(msg2.PLACEMARKS[0].CAMERA->ROLL, 5, 0.1);
    END_TEST

    TEST("roundtrip preserves structure")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <name>RT Test</name>
                    <Folder>
                        <name>Folder 1</name>
                        <Placemark><name>PM1</name><Point><coordinates>1,2,3</coordinates></Point></Placemark>
                    </Folder>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.NAME, "RT Test");
        ASSERT_EQ(msg2.FOLDERS.size(), 1u);
        ASSERT_EQ(msg2.FOLDERS[0].NAME, "Folder 1");
        ASSERT_EQ(msg2.FOLDERS[0].PLACEMARKS.size(), 1u);
    END_TEST

    TEST("parse Model geometry")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>3D Model</name>
                        <Model>
                            <altitudeMode>absolute</altitudeMode>
                            <Location>
                                <longitude>-95.5</longitude>
                                <latitude>29.8</latitude>
                                <altitude>1000</altitude>
                            </Location>
                            <Orientation>
                                <heading>45</heading>
                                <tilt>10</tilt>
                                <roll>5</roll>
                            </Orientation>
                            <Scale>
                                <x>2</x>
                                <y>2</y>
                                <z>3</z>
                            </Scale>
                            <Link><href>model.dae</href></Link>
                            <ResourceMap>
                                <Alias>
                                    <targetHref>texture.png</targetHref>
                                    <sourceHref>../images/texture.png</sourceHref>
                                </Alias>
                            </ResourceMap>
                        </Model>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].MODEL.has_value());
        const auto& model = *msg.PLACEMARKS[0].MODEL;
        ASSERT_EQ(model.ALTITUDE_MODE, "absolute");
        ASSERT_NEAR(model.LOCATION_LON, -95.5, 0.01);
        ASSERT_NEAR(model.LOCATION_LAT, 29.8, 0.01);
        ASSERT_NEAR(model.LOCATION_ALT, 1000, 0.1);
        ASSERT_NEAR(model.ORIENTATION_HEADING, 45, 0.1);
        ASSERT_NEAR(model.ORIENTATION_TILT, 10, 0.1);
        ASSERT_NEAR(model.ORIENTATION_ROLL, 5, 0.1);
        ASSERT_NEAR(model.SCALE_X, 2, 0.01);
        ASSERT_NEAR(model.SCALE_Y, 2, 0.01);
        ASSERT_NEAR(model.SCALE_Z, 3, 0.01);
        ASSERT_EQ(model.LINK_HREF, "model.dae");
        ASSERT_EQ(model.RESOURCE_MAP.size(), 1u);
        ASSERT_EQ(model.RESOURCE_MAP[0].TARGET_HREF, "texture.png");
        ASSERT_EQ(model.RESOURCE_MAP[0].SOURCE_HREF, "../images/texture.png");
    END_TEST

    TEST("parse gx:Track")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <Placemark>
                        <name>Satellite Track</name>
                        <gx:Track>
                            <altitudeMode>absolute</altitudeMode>
                            <when>2024-01-15T00:00:00Z</when>
                            <when>2024-01-15T01:00:00Z</when>
                            <gx:coord>-95.5 29.8 408000</gx:coord>
                            <gx:coord>-80.0 25.0 408000</gx:coord>
                            <gx:angles>45 10 0</gx:angles>
                            <gx:angles>90 20 5</gx:angles>
                        </gx:Track>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].TRACK.has_value());
        const auto& trk = *msg.PLACEMARKS[0].TRACK;
        ASSERT_EQ(trk.ALTITUDE_MODE, "absolute");
        ASSERT_EQ(trk.WHEN.size(), 2u);
        ASSERT_EQ(trk.WHEN[0], "2024-01-15T00:00:00Z");
        ASSERT_EQ(trk.COORDS.size(), 2u);
        ASSERT_NEAR(trk.COORDS[0].LONGITUDE, -95.5, 0.01);
        ASSERT_NEAR(trk.COORDS[0].LATITUDE, 29.8, 0.01);
        ASSERT_NEAR(trk.COORDS[0].ALTITUDE, 408000, 1);
        ASSERT_EQ(trk.ANGLES.size(), 2u);
        ASSERT_NEAR(trk.ANGLES[0].LONGITUDE, 45, 0.1);
        ASSERT_NEAR(trk.ANGLES[1].LONGITUDE, 90, 0.1);
    END_TEST

    TEST("parse gx:MultiTrack")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <Placemark>
                        <name>Multi Track</name>
                        <gx:MultiTrack>
                            <altitudeMode>clampToGround</altitudeMode>
                            <gx:interpolate>1</gx:interpolate>
                            <gx:Track>
                                <when>2024-01-15T00:00:00Z</when>
                                <gx:coord>-95.5 29.8 0</gx:coord>
                            </gx:Track>
                            <gx:Track>
                                <when>2024-01-15T01:00:00Z</when>
                                <gx:coord>-80.0 25.0 0</gx:coord>
                            </gx:Track>
                        </gx:MultiTrack>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].MULTI_TRACK.has_value());
        const auto& mt = *msg.PLACEMARKS[0].MULTI_TRACK;
        ASSERT_EQ(mt.ALTITUDE_MODE, "clampToGround");
        ASSERT_TRUE(mt.INTERPOLATE);
        ASSERT_EQ(mt.TRACKS.size(), 2u);
        ASSERT_EQ(mt.TRACKS[0].WHEN.size(), 1u);
    END_TEST

    TEST("parse ScreenOverlay")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <ScreenOverlay>
                        <name>Logo</name>
                        <Icon><href>logo.png</href></Icon>
                        <overlayXY x="0" y="1" xunits="fraction" yunits="fraction"/>
                        <screenXY x="0" y="1" xunits="fraction" yunits="fraction"/>
                        <size x="100" y="50" xunits="pixels" yunits="pixels"/>
                        <rotation>15</rotation>
                    </ScreenOverlay>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.SCREEN_OVERLAYS.size(), 1u);
        const auto& so = msg.SCREEN_OVERLAYS[0];
        ASSERT_EQ(so.NAME, "Logo");
        ASSERT_EQ(so.ICON_HREF, "logo.png");
        ASSERT_NEAR(so.OVERLAY_XY_Y, 1.0, 0.01);
        ASSERT_EQ(so.OVERLAY_XY_YUNITS, "fraction");
        ASSERT_NEAR(so.SCREEN_XY_Y, 1.0, 0.01);
        ASSERT_NEAR(so.SIZE_X, 100, 0.01);
        ASSERT_NEAR(so.SIZE_Y, 50, 0.01);
        ASSERT_EQ(so.SIZE_XUNITS, "pixels");
        ASSERT_NEAR(so.ROTATION, 15, 0.1);
    END_TEST

    TEST("parse PhotoOverlay with ViewVolume")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <PhotoOverlay>
                        <name>Photo</name>
                        <Icon><href>photo.jpg</href></Icon>
                        <ViewVolume>
                            <leftFov>-60</leftFov>
                            <rightFov>60</rightFov>
                            <bottomFov>-45</bottomFov>
                            <topFov>45</topFov>
                            <near>1000</near>
                        </ViewVolume>
                        <ImagePyramid>
                            <tileSize>512</tileSize>
                            <maxWidth>4096</maxWidth>
                            <maxHeight>2048</maxHeight>
                            <gridOrigin>lowerLeft</gridOrigin>
                        </ImagePyramid>
                        <Point><coordinates>10,20,0</coordinates></Point>
                        <shape>cylinder</shape>
                    </PhotoOverlay>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.PHOTO_OVERLAYS.size(), 1u);
        const auto& po = msg.PHOTO_OVERLAYS[0];
        ASSERT_EQ(po.NAME, "Photo");
        ASSERT_TRUE(po.VIEW_VOLUME.has_value());
        ASSERT_NEAR(po.VIEW_VOLUME->LEFT_FOV, -60, 0.1);
        ASSERT_NEAR(po.VIEW_VOLUME->RIGHT_FOV, 60, 0.1);
        ASSERT_NEAR(po.VIEW_VOLUME->NEAR, 1000, 0.1);
        ASSERT_TRUE(po.IMAGE_PYRAMID.has_value());
        ASSERT_EQ(po.IMAGE_PYRAMID->TILE_SIZE, 512);
        ASSERT_EQ(po.IMAGE_PYRAMID->MAX_WIDTH, 4096);
        ASSERT_EQ(po.IMAGE_PYRAMID->GRID_ORIGIN, "lowerLeft");
        ASSERT_TRUE(po.POINT.has_value());
        ASSERT_EQ(po.SHAPE, "cylinder");
    END_TEST

    TEST("parse gx:Tour with playlist")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <gx:Tour>
                        <name>City Tour</name>
                        <gx:Playlist>
                            <gx:FlyTo>
                                <gx:duration>5</gx:duration>
                                <gx:flyToMode>smooth</gx:flyToMode>
                                <LookAt>
                                    <longitude>-95.5</longitude>
                                    <latitude>29.8</latitude>
                                    <altitude>0</altitude>
                                    <heading>0</heading>
                                    <tilt>45</tilt>
                                    <range>10000</range>
                                </LookAt>
                            </gx:FlyTo>
                            <gx:Wait><gx:duration>3</gx:duration></gx:Wait>
                            <gx:TourControl><gx:playMode>pause</gx:playMode></gx:TourControl>
                            <gx:SoundCue>
                                <href>audio.mp3</href>
                                <gx:delayedStart>1.5</gx:delayedStart>
                            </gx:SoundCue>
                        </gx:Playlist>
                    </gx:Tour>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.TOURS.size(), 1u);
        const auto& tour = msg.TOURS[0];
        ASSERT_EQ(tour.NAME, "City Tour");
        ASSERT_TRUE(tour.PLAYLIST.has_value());
        ASSERT_EQ(tour.PLAYLIST->PRIMITIVES.size(), 4u);
        ASSERT_TRUE(tour.PLAYLIST->PRIMITIVES[0].FLY_TO.has_value());
        ASSERT_NEAR(tour.PLAYLIST->PRIMITIVES[0].FLY_TO->DURATION, 5, 0.1);
        ASSERT_EQ(tour.PLAYLIST->PRIMITIVES[0].FLY_TO->FLY_TO_MODE, "smooth");
        ASSERT_TRUE(tour.PLAYLIST->PRIMITIVES[0].FLY_TO->LOOK_AT.has_value());
        ASSERT_TRUE(tour.PLAYLIST->PRIMITIVES[1].WAIT.has_value());
        ASSERT_NEAR(tour.PLAYLIST->PRIMITIVES[1].WAIT->DURATION, 3, 0.1);
        ASSERT_TRUE(tour.PLAYLIST->PRIMITIVES[2].TOUR_CONTROL.has_value());
        ASSERT_EQ(tour.PLAYLIST->PRIMITIVES[2].TOUR_CONTROL->PLAY_MODE, "pause");
        ASSERT_TRUE(tour.PLAYLIST->PRIMITIVES[3].SOUND_CUE.has_value());
        ASSERT_EQ(tour.PLAYLIST->PRIMITIVES[3].SOUND_CUE->HREF, "audio.mp3");
        ASSERT_NEAR(tour.PLAYLIST->PRIMITIVES[3].SOUND_CUE->DELAYED_START, 1.5, 0.01);
    END_TEST

    TEST("parse Region with LatLonAltBox and Lod")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>Regional</name>
                        <Region>
                            <LatLonAltBox>
                                <north>30</north>
                                <south>29</south>
                                <east>-94</east>
                                <west>-96</west>
                                <minAltitude>0</minAltitude>
                                <maxAltitude>1000</maxAltitude>
                                <altitudeMode>absolute</altitudeMode>
                            </LatLonAltBox>
                            <Lod>
                                <minLodPixels>128</minLodPixels>
                                <maxLodPixels>1024</maxLodPixels>
                                <minFadeExtent>64</minFadeExtent>
                                <maxFadeExtent>128</maxFadeExtent>
                            </Lod>
                        </Region>
                        <Point><coordinates>-95,29.5,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].REGION.has_value());
        const auto& r = *msg.PLACEMARKS[0].REGION;
        ASSERT_TRUE(r.LAT_LON_ALT_BOX.has_value());
        ASSERT_NEAR(r.LAT_LON_ALT_BOX->NORTH, 30, 0.1);
        ASSERT_NEAR(r.LAT_LON_ALT_BOX->SOUTH, 29, 0.1);
        ASSERT_NEAR(r.LAT_LON_ALT_BOX->MAX_ALTITUDE, 1000, 0.1);
        ASSERT_EQ(r.LAT_LON_ALT_BOX->ALTITUDE_MODE, "absolute");
        ASSERT_TRUE(r.LOD.has_value());
        ASSERT_NEAR(r.LOD->MIN_LOD_PIXELS, 128, 0.1);
        ASSERT_NEAR(r.LOD->MAX_LOD_PIXELS, 1024, 0.1);
    END_TEST

    TEST("parse Schema and SchemaData")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Schema name="TrailSchema" id="TrailSchemaId">
                        <SimpleField name="speed" type="xsd:double">
                            <displayName>Speed</displayName>
                        </SimpleField>
                        <SimpleField name="label" type="xsd:string">
                            <displayName>Label</displayName>
                        </SimpleField>
                    </Schema>
                    <Placemark>
                        <name>Trail Point</name>
                        <ExtendedData>
                            <SchemaData schemaUrl="#TrailSchemaId">
                                <SimpleData name="speed">65.5</SimpleData>
                                <SimpleData name="label">Fast</SimpleData>
                            </SchemaData>
                        </ExtendedData>
                        <Point><coordinates>-95,29.5,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.SCHEMAS.size(), 1u);
        ASSERT_EQ(msg.SCHEMAS[0].NAME, "TrailSchema");
        ASSERT_EQ(msg.SCHEMAS[0].ID, "TrailSchemaId");
        ASSERT_EQ(msg.SCHEMAS[0].SIMPLE_FIELDS.size(), 2u);
        ASSERT_EQ(msg.SCHEMAS[0].SIMPLE_FIELDS[0].NAME, "speed");
        ASSERT_EQ(msg.SCHEMAS[0].SIMPLE_FIELDS[0].FIELD_TYPE, "xsd:double");
        ASSERT_EQ(msg.SCHEMAS[0].SIMPLE_FIELDS[0].DISPLAY_NAME, "Speed");
        ASSERT_TRUE(msg.PLACEMARKS[0].SCHEMA_DATA.has_value());
        ASSERT_EQ(msg.PLACEMARKS[0].SCHEMA_DATA->SCHEMA_URL, "#TrailSchemaId");
        ASSERT_EQ(msg.PLACEMARKS[0].SCHEMA_DATA->SIMPLE_DATA.size(), 2u);
        ASSERT_EQ(msg.PLACEMARKS[0].SCHEMA_DATA->SIMPLE_DATA[0].NAME, "speed");
        ASSERT_EQ(msg.PLACEMARKS[0].SCHEMA_DATA->SIMPLE_DATA[0].VALUE, "65.5");
    END_TEST

    TEST("parse NetworkLinkControl")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <NetworkLinkControl>
                    <minRefreshPeriod>5</minRefreshPeriod>
                    <maxSessionLength>3600</maxSessionLength>
                    <cookie>session=abc123</cookie>
                    <message>Welcome to the feed</message>
                    <linkName>Live Feed</linkName>
                    <expires>2025-12-31T23:59:59Z</expires>
                    <Update>
                        <targetHref>http://example.com/data.kml</targetHref>
                    </Update>
                    <LookAt>
                        <longitude>-95.5</longitude>
                        <latitude>29.8</latitude>
                        <altitude>0</altitude>
                        <heading>0</heading>
                        <tilt>45</tilt>
                        <range>5000</range>
                    </LookAt>
                </NetworkLinkControl>
                <Document>
                    <name>NLC Test</name>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.NAME, "NLC Test");
        ASSERT_TRUE(msg.NETWORK_LINK_CONTROL.has_value());
        const auto& nlc = *msg.NETWORK_LINK_CONTROL;
        ASSERT_NEAR(nlc.MIN_REFRESH_PERIOD, 5, 0.1);
        ASSERT_NEAR(nlc.MAX_SESSION_LENGTH, 3600, 0.1);
        ASSERT_EQ(nlc.COOKIE, "session=abc123");
        ASSERT_EQ(nlc.MESSAGE, "Welcome to the feed");
        ASSERT_EQ(nlc.LINK_NAME, "Live Feed");
        ASSERT_EQ(nlc.EXPIRES, "2025-12-31T23:59:59Z");
        ASSERT_TRUE(nlc.UPDATE.has_value());
        ASSERT_EQ(nlc.UPDATE->TARGET_HREF, "http://example.com/data.kml");
        ASSERT_TRUE(nlc.LOOK_AT.has_value());
        ASSERT_NEAR(nlc.LOOK_AT->TILT, 45, 0.1);
    END_TEST

    TEST("parse ListStyle and BalloonStyle")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Style id="full-style">
                        <BalloonStyle>
                            <bgColor>ff0000ff</bgColor>
                            <textColor>ffffffff</textColor>
                            <text>$[name]</text>
                            <displayMode>default</displayMode>
                        </BalloonStyle>
                        <ListStyle>
                            <listItemType>check</listItemType>
                            <bgColor>ff00ff00</bgColor>
                            <maxSnippetLines>3</maxSnippetLines>
                            <ItemIcon>
                                <state>open</state>
                                <href>icon-open.png</href>
                            </ItemIcon>
                        </ListStyle>
                    </Style>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.STYLES.size(), 1u);
        const auto& s = msg.STYLES[0];
        ASSERT_TRUE(s.BALLOON_STYLE.has_value());
        ASSERT_EQ(s.BALLOON_STYLE->BG_COLOR, "ff0000ff");
        ASSERT_EQ(s.BALLOON_STYLE->TEXT, "$[name]");
        ASSERT_EQ(s.BALLOON_STYLE->DISPLAY_MODE, "default");
        ASSERT_TRUE(s.LIST_STYLE.has_value());
        ASSERT_EQ(s.LIST_STYLE->LIST_ITEM_TYPE, "check");
        ASSERT_EQ(s.LIST_STYLE->BG_COLOR, "ff00ff00");
        ASSERT_EQ(s.LIST_STYLE->MAX_SNIPPET_LINES, 3);
        ASSERT_EQ(s.LIST_STYLE->ITEM_ICONS.size(), 1u);
        ASSERT_EQ(s.LIST_STYLE->ITEM_ICONS[0].STATE, "open");
        ASSERT_EQ(s.LIST_STYLE->ITEM_ICONS[0].HREF, "icon-open.png");
    END_TEST

    TEST("parse gx:LineStyle extensions")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <Style id="gx-line">
                        <LineStyle>
                            <color>ff0000ff</color>
                            <width>3</width>
                            <gx:outerColor>ff00ff00</gx:outerColor>
                            <gx:outerWidth>0.5</gx:outerWidth>
                            <gx:physicalWidth>100</gx:physicalWidth>
                            <gx:labelVisibility>1</gx:labelVisibility>
                        </LineStyle>
                    </Style>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.STYLES[0].LINE_STYLE.has_value());
        const auto& ls = *msg.STYLES[0].LINE_STYLE;
        ASSERT_EQ(ls.COLOR, "ff0000ff");
        ASSERT_NEAR(ls.WIDTH, 3, 0.1);
        ASSERT_EQ(ls.GX_OUTER_COLOR, "ff00ff00");
        ASSERT_NEAR(ls.GX_OUTER_WIDTH, 0.5, 0.01);
        ASSERT_NEAR(ls.GX_PHYSICAL_WIDTH, 100, 0.1);
        ASSERT_TRUE(ls.GX_LABEL_VISIBILITY);
    END_TEST

    TEST("parse TimeSpan and TimeStamp")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>Timed Event</name>
                        <TimeSpan>
                            <begin>2024-01-01T00:00:00Z</begin>
                            <end>2024-12-31T23:59:59Z</end>
                        </TimeSpan>
                        <Point><coordinates>0,0,0</coordinates></Point>
                    </Placemark>
                    <Placemark>
                        <name>Instant Event</name>
                        <TimeStamp>
                            <when>2024-06-15T12:00:00Z</when>
                        </TimeStamp>
                        <Point><coordinates>1,1,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].TIME_SPAN.has_value());
        ASSERT_EQ(msg.PLACEMARKS[0].TIME_SPAN->BEGIN, "2024-01-01T00:00:00Z");
        ASSERT_EQ(msg.PLACEMARKS[0].TIME_SPAN->END, "2024-12-31T23:59:59Z");
        ASSERT_TRUE(msg.PLACEMARKS[1].TIME_STAMP.has_value());
        ASSERT_EQ(msg.PLACEMARKS[1].TIME_STAMP->WHEN, "2024-06-15T12:00:00Z");
    END_TEST

    TEST("parse ExtendedData")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>Extended</name>
                        <ExtendedData>
                            <Data name="altitude_km">
                                <displayName>Altitude (km)</displayName>
                                <value>408</value>
                            </Data>
                            <Data name="velocity">
                                <value>7.66</value>
                            </Data>
                        </ExtendedData>
                        <Point><coordinates>0,0,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA.size(), 2u);
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA[0].NAME, "altitude_km");
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA[0].DISPLAY_NAME, "Altitude (km)");
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA[0].VALUE, "408");
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA[1].NAME, "velocity");
        ASSERT_EQ(msg.PLACEMARKS[0].EXTENDED_DATA[1].VALUE, "7.66");
    END_TEST

    TEST("parse GroundOverlay with LatLonQuad")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <GroundOverlay>
                        <name>Rotated Overlay</name>
                        <Icon><href>overlay.png</href></Icon>
                        <altitude>1000</altitude>
                        <altitudeMode>absolute</altitudeMode>
                        <drawOrder>3</drawOrder>
                        <gx:LatLonQuad>
                            <coordinates>-95.5,29.5,0 -94.5,29.5,0 -94.5,30.5,0 -95.5,30.5,0</coordinates>
                        </gx:LatLonQuad>
                    </GroundOverlay>
                </Document>
            </kml>)");
        ASSERT_EQ(msg.GROUND_OVERLAYS.size(), 1u);
        const auto& go = msg.GROUND_OVERLAYS[0];
        ASSERT_EQ(go.NAME, "Rotated Overlay");
        ASSERT_EQ(go.ICON_HREF, "overlay.png");
        ASSERT_NEAR(go.ALTITUDE, 1000, 0.1);
        ASSERT_EQ(go.ALTITUDE_MODE, "absolute");
        ASSERT_EQ(go.DRAW_ORDER, 3);
        ASSERT_TRUE(go.LAT_LON_QUAD.has_value());
        ASSERT_EQ(go.LAT_LON_QUAD->COORDINATES.size(), 4u);
        ASSERT_NEAR(go.LAT_LON_QUAD->COORDINATES[0].LONGITUDE, -95.5, 0.01);
    END_TEST

    TEST("parse Placemark with address and open")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>HQ</name>
                        <open>1</open>
                        <address>123 Main St, Houston TX</address>
                        <Point><coordinates>-95,29.5,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        ASSERT_TRUE(msg.PLACEMARKS[0].OPEN);
        ASSERT_EQ(msg.PLACEMARKS[0].ADDRESS, "123 Main St, Houston TX");
    END_TEST

    TEST("roundtrip preserves Model")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Placemark>
                        <name>Model RT</name>
                        <Model>
                            <altitudeMode>absolute</altitudeMode>
                            <Location><longitude>10</longitude><latitude>20</latitude><altitude>500</altitude></Location>
                            <Orientation><heading>90</heading><tilt>15</tilt><roll>5</roll></Orientation>
                            <Scale><x>2</x><y>2</y><z>3</z></Scale>
                            <Link><href>satellite.dae</href></Link>
                        </Model>
                    </Placemark>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_TRUE(msg2.PLACEMARKS[0].MODEL.has_value());
        ASSERT_EQ(msg2.PLACEMARKS[0].MODEL->ALTITUDE_MODE, "absolute");
        ASSERT_NEAR(msg2.PLACEMARKS[0].MODEL->LOCATION_LON, 10, 0.1);
        ASSERT_NEAR(msg2.PLACEMARKS[0].MODEL->ORIENTATION_HEADING, 90, 0.1);
        ASSERT_NEAR(msg2.PLACEMARKS[0].MODEL->SCALE_Z, 3, 0.01);
        ASSERT_EQ(msg2.PLACEMARKS[0].MODEL->LINK_HREF, "satellite.dae");
    END_TEST

    TEST("roundtrip preserves Tour")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <gx:Tour>
                        <name>RT Tour</name>
                        <gx:Playlist>
                            <gx:FlyTo>
                                <gx:duration>3</gx:duration>
                                <gx:flyToMode>bounce</gx:flyToMode>
                                <Camera>
                                    <longitude>10</longitude><latitude>20</latitude><altitude>1000</altitude>
                                    <heading>0</heading><tilt>60</tilt><roll>0</roll>
                                </Camera>
                            </gx:FlyTo>
                            <gx:Wait><gx:duration>2</gx:duration></gx:Wait>
                        </gx:Playlist>
                    </gx:Tour>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.TOURS.size(), 1u);
        ASSERT_EQ(msg2.TOURS[0].NAME, "RT Tour");
        ASSERT_TRUE(msg2.TOURS[0].PLAYLIST.has_value());
        ASSERT_EQ(msg2.TOURS[0].PLAYLIST->PRIMITIVES.size(), 2u);
        ASSERT_TRUE(msg2.TOURS[0].PLAYLIST->PRIMITIVES[0].FLY_TO.has_value());
        ASSERT_NEAR(msg2.TOURS[0].PLAYLIST->PRIMITIVES[0].FLY_TO->DURATION, 3, 0.1);
        ASSERT_EQ(msg2.TOURS[0].PLAYLIST->PRIMITIVES[0].FLY_TO->FLY_TO_MODE, "bounce");
        ASSERT_TRUE(msg2.TOURS[0].PLAYLIST->PRIMITIVES[0].FLY_TO->CAMERA.has_value());
        ASSERT_TRUE(msg2.TOURS[0].PLAYLIST->PRIMITIVES[1].WAIT.has_value());
        ASSERT_NEAR(msg2.TOURS[0].PLAYLIST->PRIMITIVES[1].WAIT->DURATION, 2, 0.1);
    END_TEST

    TEST("roundtrip preserves Track and ScreenOverlay")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2">
                <Document>
                    <ScreenOverlay>
                        <name>Logo</name>
                        <Icon><href>logo.png</href></Icon>
                        <overlayXY x="0.5" y="0.5" xunits="fraction" yunits="fraction"/>
                        <screenXY x="0.5" y="0.5" xunits="fraction" yunits="fraction"/>
                    </ScreenOverlay>
                    <Placemark>
                        <name>Tracked</name>
                        <gx:Track>
                            <when>2024-01-15T00:00:00Z</when>
                            <gx:coord>10 20 500</gx:coord>
                        </gx:Track>
                    </Placemark>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.SCREEN_OVERLAYS.size(), 1u);
        ASSERT_EQ(msg2.SCREEN_OVERLAYS[0].NAME, "Logo");
        ASSERT_EQ(msg2.SCREEN_OVERLAYS[0].ICON_HREF, "logo.png");
        ASSERT_TRUE(msg2.PLACEMARKS[0].TRACK.has_value());
        ASSERT_EQ(msg2.PLACEMARKS[0].TRACK->WHEN.size(), 1u);
        ASSERT_NEAR(msg2.PLACEMARKS[0].TRACK->COORDS[0].LONGITUDE, 10, 0.1);
    END_TEST

    TEST("roundtrip preserves NetworkLinkControl")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <NetworkLinkControl>
                    <minRefreshPeriod>10</minRefreshPeriod>
                    <cookie>tok=xyz</cookie>
                    <message>Hello</message>
                    <linkName>Feed</linkName>
                </NetworkLinkControl>
                <Document><name>NLC RT</name></Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.NAME, "NLC RT");
        ASSERT_TRUE(msg2.NETWORK_LINK_CONTROL.has_value());
        ASSERT_NEAR(msg2.NETWORK_LINK_CONTROL->MIN_REFRESH_PERIOD, 10, 0.1);
        ASSERT_EQ(msg2.NETWORK_LINK_CONTROL->COOKIE, "tok=xyz");
        ASSERT_EQ(msg2.NETWORK_LINK_CONTROL->MESSAGE, "Hello");
        ASSERT_EQ(msg2.NETWORK_LINK_CONTROL->LINK_NAME, "Feed");
    END_TEST

    TEST("roundtrip preserves Schema and SchemaData")
        auto msg = ccsds::parse_kml_xml(R"(<?xml version="1.0"?>
            <kml xmlns="http://www.opengis.net/kml/2.2">
                <Document>
                    <Schema name="MySchema" id="S1">
                        <SimpleField name="speed" type="xsd:double">
                            <displayName>Speed</displayName>
                        </SimpleField>
                    </Schema>
                    <Placemark>
                        <name>Data PM</name>
                        <ExtendedData>
                            <SchemaData schemaUrl="#S1">
                                <SimpleData name="speed">42.5</SimpleData>
                            </SchemaData>
                        </ExtendedData>
                        <Point><coordinates>0,0,0</coordinates></Point>
                    </Placemark>
                </Document>
            </kml>)");
        auto output = ccsds::write_kml_xml(msg);
        auto msg2 = ccsds::parse_kml_xml(output);
        ASSERT_EQ(msg2.SCHEMAS.size(), 1u);
        ASSERT_EQ(msg2.SCHEMAS[0].NAME, "MySchema");
        ASSERT_EQ(msg2.SCHEMAS[0].SIMPLE_FIELDS.size(), 1u);
        ASSERT_EQ(msg2.SCHEMAS[0].SIMPLE_FIELDS[0].FIELD_TYPE, "xsd:double");
        ASSERT_TRUE(msg2.PLACEMARKS[0].SCHEMA_DATA.has_value());
        ASSERT_EQ(msg2.PLACEMARKS[0].SCHEMA_DATA->SCHEMA_URL, "#S1");
        ASSERT_EQ(msg2.PLACEMARKS[0].SCHEMA_DATA->SIMPLE_DATA[0].VALUE, "42.5");
    END_TEST
}

void test_gpx() {
    std::cout << "GPX:" << std::endl;

    TEST("parse GPX document")
        auto msg = ccsds::parse_gpx_xml(R"(<?xml version="1.0"?>
            <gpx version="1.1" creator="test" xmlns="http://www.topografix.com/GPX/1/1">
                <metadata>
                    <name>Test GPX</name>
                    <desc>Test description</desc>
                    <time>2024-01-15T12:00:00Z</time>
                </metadata>
                <wpt lat="29.7604" lon="-95.3631">
                    <ele>15</ele>
                    <name>Point A</name>
                </wpt>
                <trk>
                    <name>Track 1</name>
                    <trkseg>
                        <trkpt lat="29.50" lon="-95.80"><ele>408000</ele></trkpt>
                        <trkpt lat="29.80" lon="-95.20"><ele>408000</ele></trkpt>
                    </trkseg>
                </trk>
            </gpx>)");
        ASSERT_EQ(msg.VERSION, "1.1");
        ASSERT_EQ(msg.CREATOR, "test");
        ASSERT_EQ(msg.NAME, "Test GPX");
        ASSERT_EQ(msg.WAYPOINTS.size(), 1u);
        ASSERT_EQ(msg.WAYPOINTS[0].NAME, "Point A");
        ASSERT_NEAR(msg.WAYPOINTS[0].LATITUDE, 29.7604, 0.001);
        ASSERT_EQ(msg.TRACKS.size(), 1u);
        ASSERT_EQ(msg.TRACKS[0].SEGMENTS.size(), 1u);
        ASSERT_EQ(msg.TRACKS[0].SEGMENTS[0].POINTS.size(), 2u);
    END_TEST

    TEST("roundtrip preserves waypoints and tracks")
        auto msg = ccsds::parse_gpx_xml(R"(<?xml version="1.0"?>
            <gpx version="1.1" xmlns="http://www.topografix.com/GPX/1/1">
                <wpt lat="10.0" lon="20.0"><name>WP1</name></wpt>
                <trk><name>T1</name><trkseg>
                    <trkpt lat="11.0" lon="21.0"><ele>100</ele></trkpt>
                </trkseg></trk>
            </gpx>)");
        auto output = ccsds::write_gpx_xml(msg);
        auto msg2 = ccsds::parse_gpx_xml(output);
        ASSERT_EQ(msg2.WAYPOINTS.size(), 1u);
        ASSERT_EQ(msg2.WAYPOINTS[0].NAME, "WP1");
        ASSERT_EQ(msg2.TRACKS.size(), 1u);
        ASSERT_EQ(msg2.TRACKS[0].NAME, "T1");
    END_TEST
}

void test_cot() {
    std::cout << "CoT:" << std::endl;

    TEST("parse CoT event")
        auto msg = ccsds::parse_cot_xml(R"(<?xml version="1.0"?>
            <event version="2.0" uid="TEST-001" type="a-f-G" how="m-g"
                   time="2024-01-15T12:00:00Z" start="2024-01-15T12:00:00Z"
                   stale="2024-01-15T12:05:00Z">
                <point lat="29.7604" lon="-95.364" hae="408000" ce="50" le="100"/>
                <detail>
                    <contact callsign="TEST"/>
                    <track course="45.2" speed="7660"/>
                    <remarks>Test event</remarks>
                </detail>
            </event>)");
        ASSERT_EQ(msg.UID, "TEST-001");
        ASSERT_EQ(msg.TYPE, "a-f-G");
        ASSERT_EQ(msg.HOW, "m-g");
        ASSERT_NEAR(msg.POINT.LATITUDE, 29.7604, 0.001);
        ASSERT_NEAR(msg.POINT.LONGITUDE, -95.364, 0.001);
        ASSERT_NEAR(msg.POINT.HAE, 408000, 1);
        ASSERT_TRUE(msg.DETAIL.has_value());
        ASSERT_EQ(msg.DETAIL->CALLSIGN, "TEST");
        ASSERT_NEAR(msg.DETAIL->COURSE.value_or(0), 45.2, 0.1);
        ASSERT_EQ(msg.DETAIL->REMARKS, "Test event");
    END_TEST

    TEST("roundtrip preserves fields")
        auto msg = ccsds::parse_cot_xml(R"(<?xml version="1.0"?>
            <event version="2.0" uid="RT-001" type="a-f-S" how="m-g"
                   time="2024-01-15T12:00:00Z" start="2024-01-15T12:00:00Z"
                   stale="2024-01-15T12:05:00Z">
                <point lat="10.0" lon="20.0" hae="500" ce="10" le="20"/>
                <detail>
                    <contact callsign="SAT1"/>
                </detail>
            </event>)");
        auto output = ccsds::write_cot_xml(msg);
        auto msg2 = ccsds::parse_cot_xml(output);
        ASSERT_EQ(msg2.UID, "RT-001");
        ASSERT_EQ(msg2.TYPE, "a-f-S");
        ASSERT_NEAR(msg2.POINT.LATITUDE, 10.0, 0.001);
        ASSERT_TRUE(msg2.DETAIL.has_value());
        ASSERT_EQ(msg2.DETAIL->CALLSIGN, "SAT1");
    END_TEST
}

int main() {
    std::cout << "\n=== SDS Parser Round-Trip Tests ===\n" << std::endl;

    test_gjn();
    test_czm();
    test_kml();
    test_gpx();
    test_cot();

    std::cout << "\n=== Results: " << pass_count << " passed, " << fail_count << " failed ===" << std::endl;
    return fail_count > 0 ? 1 : 0;
}
