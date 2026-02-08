#include "ccsds/navigation/cot_parser.h"
#include <stdexcept>

namespace ccsds {

static std::optional<double> opt_num(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stod(*v);
}

static std::optional<int32_t> opt_int32(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return static_cast<int32_t>(std::stol(*v));
}

CotMessage parse_cot_xml(std::string_view text) {
    auto root = parse_xml_string(text);

    // Find the <event> element (root might be it)
    const XmlElement* event = nullptr;
    if (root.tag == "event") {
        event = &root;
    } else {
        event = find_child(root, "event");
    }
    if (!event) throw std::runtime_error("No <event> element found in CoT XML");

    CotMessage msg;
    msg.VERSION = get_attribute(*event, "version").value_or("2.0");
    msg.UID = get_attribute(*event, "uid").value_or("");
    msg.TYPE = get_attribute(*event, "type").value_or("");
    msg.HOW = get_attribute(*event, "how").value_or("");
    msg.TIME = get_attribute(*event, "time").value_or("");
    msg.START = get_attribute(*event, "start").value_or("");
    msg.STALE = get_attribute(*event, "stale").value_or("");
    msg.ACCESS = get_attribute(*event, "access").value_or("");
    msg.QOS = get_attribute(*event, "qos").value_or("");
    msg.OPEX = get_attribute(*event, "opex").value_or("");

    auto* point_el = find_child(*event, "point");
    if (point_el) {
        msg.POINT.LATITUDE = std::stod(get_attribute(*point_el, "lat").value_or("0"));
        msg.POINT.LONGITUDE = std::stod(get_attribute(*point_el, "lon").value_or("0"));
        msg.POINT.HAE = std::stod(get_attribute(*point_el, "hae").value_or("0"));
        msg.POINT.CE = std::stod(get_attribute(*point_el, "ce").value_or("9999999"));
        msg.POINT.LE = std::stod(get_attribute(*point_el, "le").value_or("9999999"));
    }

    auto* detail_el = find_child(*event, "detail");
    if (detail_el) {
        CotDetail d;
        auto* contact = find_child(*detail_el, "contact");
        if (contact) {
            d.CALLSIGN = get_attribute(*contact, "callsign").value_or("");
            d.ENDPOINT = get_attribute(*contact, "endpoint").value_or("");
            d.PHONE = get_attribute(*contact, "phone").value_or("");
        }

        auto* track = find_child(*detail_el, "track");
        if (track) {
            d.COURSE = opt_num(get_attribute(*track, "course"));
            d.SPEED = opt_num(get_attribute(*track, "speed"));
        }

        auto* group = find_child(*detail_el, "__group");
        if (group) {
            d.GROUP_NAME = get_attribute(*group, "name").value_or("");
            d.GROUP_ROLE = get_attribute(*group, "role").value_or("");
        }

        auto* status = find_child(*detail_el, "status");
        if (status) {
            d.STATUS_BATTERY = opt_num(get_attribute(*status, "battery"));
        }

        auto* precisionlocation = find_child(*detail_el, "precisionlocation");
        if (precisionlocation) {
            d.PREC_LOCATION_SOURCE = get_attribute(*precisionlocation, "geopointsrc").value_or("");
            d.PREC_ALTSRC = get_attribute(*precisionlocation, "altsrc").value_or("");
        }

        auto* uid = find_child(*detail_el, "uid");
        if (uid) {
            d.UID_DROID = get_attribute(*uid, "Droid").value_or("");
        }

        auto* remarks = find_child(*detail_el, "remarks");
        if (remarks) {
            d.REMARKS = get_text_content(*remarks).value_or("");
            d.REMARKS_SOURCE = get_attribute(*remarks, "source").value_or("");
            d.REMARKS_TIME = get_attribute(*remarks, "time").value_or("");
        }

        auto* link = find_child(*detail_el, "link");
        if (link) {
            d.LINK_UID = get_attribute(*link, "uid").value_or("");
            d.LINK_TYPE = get_attribute(*link, "type").value_or("");
            d.LINK_RELATION = get_attribute(*link, "relation").value_or("");
        }

        auto* color_el = find_child(*detail_el, "color");
        if (color_el) {
            d.COLOR = opt_int32(get_attribute(*color_el, "argb"));
        }

        auto* strokeWeight = find_child(*detail_el, "strokeWeight");
        if (strokeWeight) {
            d.STROKE_WEIGHT = opt_num(get_attribute(*strokeWeight, "value"));
        }

        auto* fillColor = find_child(*detail_el, "fillColor");
        if (fillColor) {
            d.FILL_COLOR = opt_int32(get_attribute(*fillColor, "value"));
        }

        msg.DETAIL = std::move(d);
    }

    return msg;
}

std::string write_cot_xml(const CotMessage& msg) {
    // Build point element
    XmlElement point_el;
    point_el.tag = "point";
    point_el.attributes["lat"] = std::to_string(msg.POINT.LATITUDE);
    point_el.attributes["lon"] = std::to_string(msg.POINT.LONGITUDE);
    point_el.attributes["hae"] = std::to_string(msg.POINT.HAE);
    point_el.attributes["ce"] = std::to_string(msg.POINT.CE);
    point_el.attributes["le"] = std::to_string(msg.POINT.LE);

    std::vector<XmlElement> event_children;
    event_children.push_back(std::move(point_el));

    if (msg.DETAIL) {
        const auto& d = *msg.DETAIL;
        XmlElement detail_el;
        detail_el.tag = "detail";

        if (!d.CALLSIGN.empty() || !d.ENDPOINT.empty()) {
            XmlElement contact;
            contact.tag = "contact";
            if (!d.CALLSIGN.empty()) contact.attributes["callsign"] = d.CALLSIGN;
            if (!d.ENDPOINT.empty()) contact.attributes["endpoint"] = d.ENDPOINT;
            if (!d.PHONE.empty()) contact.attributes["phone"] = d.PHONE;
            detail_el.children.push_back(std::move(contact));
        }

        if (d.COURSE || d.SPEED) {
            XmlElement track;
            track.tag = "track";
            if (d.COURSE) track.attributes["course"] = std::to_string(*d.COURSE);
            if (d.SPEED) track.attributes["speed"] = std::to_string(*d.SPEED);
            detail_el.children.push_back(std::move(track));
        }

        if (!d.GROUP_NAME.empty()) {
            XmlElement group;
            group.tag = "__group";
            group.attributes["name"] = d.GROUP_NAME;
            if (!d.GROUP_ROLE.empty()) group.attributes["role"] = d.GROUP_ROLE;
            detail_el.children.push_back(std::move(group));
        }

        if (d.STATUS_BATTERY) {
            XmlElement status;
            status.tag = "status";
            status.attributes["battery"] = std::to_string(*d.STATUS_BATTERY);
            detail_el.children.push_back(std::move(status));
        }

        if (!d.PREC_LOCATION_SOURCE.empty()) {
            XmlElement prec;
            prec.tag = "precisionlocation";
            prec.attributes["geopointsrc"] = d.PREC_LOCATION_SOURCE;
            if (!d.PREC_ALTSRC.empty()) prec.attributes["altsrc"] = d.PREC_ALTSRC;
            detail_el.children.push_back(std::move(prec));
        }

        if (!d.UID_DROID.empty()) {
            XmlElement uid_el;
            uid_el.tag = "uid";
            uid_el.attributes["Droid"] = d.UID_DROID;
            detail_el.children.push_back(std::move(uid_el));
        }

        if (!d.REMARKS.empty()) {
            XmlElement remarks;
            remarks.tag = "remarks";
            remarks.text = d.REMARKS;
            if (!d.REMARKS_SOURCE.empty()) remarks.attributes["source"] = d.REMARKS_SOURCE;
            if (!d.REMARKS_TIME.empty()) remarks.attributes["time"] = d.REMARKS_TIME;
            detail_el.children.push_back(std::move(remarks));
        }

        if (!d.LINK_UID.empty()) {
            XmlElement link;
            link.tag = "link";
            link.attributes["uid"] = d.LINK_UID;
            if (!d.LINK_TYPE.empty()) link.attributes["type"] = d.LINK_TYPE;
            if (!d.LINK_RELATION.empty()) link.attributes["relation"] = d.LINK_RELATION;
            detail_el.children.push_back(std::move(link));
        }

        event_children.push_back(std::move(detail_el));
    }

    XmlElement event;
    event.tag = "event";
    event.attributes["version"] = msg.VERSION.empty() ? "2.0" : msg.VERSION;
    event.attributes["uid"] = msg.UID;
    event.attributes["type"] = msg.TYPE;
    event.attributes["how"] = msg.HOW;
    event.attributes["time"] = msg.TIME;
    event.attributes["start"] = msg.START;
    event.attributes["stale"] = msg.STALE;
    if (!msg.ACCESS.empty()) event.attributes["access"] = msg.ACCESS;
    if (!msg.QOS.empty()) event.attributes["qos"] = msg.QOS;
    if (!msg.OPEX.empty()) event.attributes["opex"] = msg.OPEX;
    event.children = std::move(event_children);

    return write_xml(event);
}

} // namespace ccsds
