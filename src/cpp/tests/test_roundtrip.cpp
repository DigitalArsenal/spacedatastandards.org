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
