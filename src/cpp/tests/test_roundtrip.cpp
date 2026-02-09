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
        ASSERT_EQ(msg.FEATURES[0].GEOMETRY.TYPE, "Point");
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY.point.LONGITUDE, -95.364, 0.001);
        ASSERT_NEAR(msg.FEATURES[0].GEOMETRY.point.LATITUDE, 29.7604, 0.001);
        ASSERT_EQ(msg.FEATURES[0].PROPERTIES.size(), 2u);
    END_TEST

    TEST("roundtrip preserves features")
        std::string input = R"({"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-95.0,29.0],[-80.0,25.0]]},"properties":{"name":"track"}}]})";
        auto msg = ccsds::parse_gjn_json(input);
        auto output = ccsds::write_gjn_json(msg);
        auto msg2 = ccsds::parse_gjn_json(output);
        ASSERT_EQ(msg2.FEATURES.size(), 1u);
        ASSERT_EQ(msg2.FEATURES[0].GEOMETRY.TYPE, "LineString");
        ASSERT_EQ(msg2.FEATURES[0].GEOMETRY.positions.size(), 2u);
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
