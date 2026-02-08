#include "ccsds/navigation/gpx_parser.h"
#include <stdexcept>

namespace ccsds {

static std::optional<double> opt_num(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stod(*v);
}

static std::optional<int> opt_int(const std::optional<std::string>& v) {
    if (!v || v->empty()) return std::nullopt;
    return std::stoi(*v);
}

static GpxLink parse_link(const XmlElement& el) {
    GpxLink link;
    link.HREF = get_attribute(el, "href").value_or("");
    link.TEXT = get_child_text(el, "text").value_or("");
    link.TYPE = get_child_text(el, "type").value_or("");
    return link;
}

static GpxWaypoint parse_waypoint(const XmlElement& el) {
    GpxWaypoint wpt;
    wpt.LATITUDE = std::stod(get_attribute(el, "lat").value_or("0"));
    wpt.LONGITUDE = std::stod(get_attribute(el, "lon").value_or("0"));
    wpt.ELEVATION = opt_num(get_child_text(el, "ele"));
    wpt.TIME = get_child_text(el, "time").value_or("");
    wpt.NAME = get_child_text(el, "name").value_or("");
    wpt.COMMENT = get_child_text(el, "cmt").value_or("");
    wpt.DESCRIPTION = get_child_text(el, "desc").value_or("");
    wpt.SOURCE = get_child_text(el, "src").value_or("");
    wpt.SYMBOL = get_child_text(el, "sym").value_or("");
    wpt.TYPE = get_child_text(el, "type").value_or("");
    wpt.FIX = get_child_text(el, "fix").value_or("");
    wpt.SAT = opt_int(get_child_text(el, "sat"));
    wpt.HDOP = opt_num(get_child_text(el, "hdop"));
    wpt.VDOP = opt_num(get_child_text(el, "vdop"));
    wpt.PDOP = opt_num(get_child_text(el, "pdop"));
    wpt.SPEED = opt_num(get_child_text(el, "speed"));
    wpt.COURSE = opt_num(get_child_text(el, "course"));

    for (const auto& child : el.children) {
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag == "link") {
            wpt.LINKS.push_back(parse_link(child));
        }
    }
    return wpt;
}

GpxMessage parse_gpx_xml(std::string_view text) {
    auto root = parse_xml_string(text);

    // Find <gpx> element
    const XmlElement* gpx = nullptr;
    if (root.tag == "gpx" || root.tag.find(":gpx") != std::string::npos ||
        root.tag.find("gpx") != std::string::npos) {
        gpx = &root;
    } else {
        gpx = find_child(root, "gpx");
    }
    if (!gpx) throw std::runtime_error("No <gpx> element found");

    GpxMessage msg;
    msg.VERSION = get_attribute(*gpx, "version").value_or("1.1");
    msg.CREATOR = get_attribute(*gpx, "creator").value_or("");

    // Metadata
    auto* metadata = find_child(*gpx, "metadata");
    if (metadata) {
        msg.NAME = get_child_text(*metadata, "name").value_or("");
        msg.DESCRIPTION = get_child_text(*metadata, "desc").value_or("");
        msg.TIME = get_child_text(*metadata, "time").value_or("");
        msg.KEYWORDS = get_child_text(*metadata, "keywords").value_or("");

        auto* author = find_child(*metadata, "author");
        if (author) {
            msg.AUTHOR_NAME = get_child_text(*author, "name").value_or("");
            auto* email = find_child(*author, "email");
            if (email) {
                auto id = get_attribute(*email, "id").value_or("");
                auto domain = get_attribute(*email, "domain").value_or("");
                if (!id.empty() && !domain.empty()) msg.AUTHOR_EMAIL = id + "@" + domain;
            }
            auto* link = find_child(*author, "link");
            if (link) {
                msg.AUTHOR_LINK = parse_link(*link);
            }
        }

        auto* copyright = find_child(*metadata, "copyright");
        if (copyright) {
            msg.COPYRIGHT_AUTHOR = get_attribute(*copyright, "author").value_or("");
            msg.COPYRIGHT_YEAR = get_child_text(*copyright, "year").value_or("");
            msg.COPYRIGHT_LICENSE = get_child_text(*copyright, "license").value_or("");
        }

        for (const auto& child : metadata->children) {
            std::string tag = child.tag;
            auto colon = tag.rfind(':');
            if (colon != std::string::npos) tag = tag.substr(colon + 1);
            if (tag == "link") msg.LINKS.push_back(parse_link(child));
        }

        auto* bounds = find_child(*metadata, "bounds");
        if (bounds) {
            msg.BOUNDS_MIN_LAT = opt_num(get_attribute(*bounds, "minlat"));
            msg.BOUNDS_MIN_LON = opt_num(get_attribute(*bounds, "minlon"));
            msg.BOUNDS_MAX_LAT = opt_num(get_attribute(*bounds, "maxlat"));
            msg.BOUNDS_MAX_LON = opt_num(get_attribute(*bounds, "maxlon"));
        }
    }

    // Waypoints, tracks, routes
    for (const auto& child : gpx->children) {
        std::string tag = child.tag;
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "wpt") {
            msg.WAYPOINTS.push_back(parse_waypoint(child));
        } else if (tag == "trk") {
            GpxTrack trk;
            trk.NAME = get_child_text(child, "name").value_or("");
            trk.COMMENT = get_child_text(child, "cmt").value_or("");
            trk.DESCRIPTION = get_child_text(child, "desc").value_or("");
            trk.SOURCE = get_child_text(child, "src").value_or("");
            trk.NUMBER = opt_int(get_child_text(child, "number"));
            trk.TYPE = get_child_text(child, "type").value_or("");

            for (const auto& trkChild : child.children) {
                std::string ctag = trkChild.tag;
                auto cc = ctag.rfind(':');
                if (cc != std::string::npos) ctag = ctag.substr(cc + 1);
                if (ctag == "link") trk.LINKS.push_back(parse_link(trkChild));
                if (ctag == "trkseg") {
                    GpxTrackSegment seg;
                    for (const auto& pt : trkChild.children) {
                        std::string ptag = pt.tag;
                        auto pc = ptag.rfind(':');
                        if (pc != std::string::npos) ptag = ptag.substr(pc + 1);
                        if (ptag == "trkpt") seg.POINTS.push_back(parse_waypoint(pt));
                    }
                    trk.SEGMENTS.push_back(std::move(seg));
                }
            }
            msg.TRACKS.push_back(std::move(trk));
        } else if (tag == "rte") {
            GpxRoute rte;
            rte.NAME = get_child_text(child, "name").value_or("");
            rte.COMMENT = get_child_text(child, "cmt").value_or("");
            rte.DESCRIPTION = get_child_text(child, "desc").value_or("");
            rte.SOURCE = get_child_text(child, "src").value_or("");
            rte.NUMBER = opt_int(get_child_text(child, "number"));
            rte.TYPE = get_child_text(child, "type").value_or("");

            for (const auto& rteChild : child.children) {
                std::string rtag = rteChild.tag;
                auto rc = rtag.rfind(':');
                if (rc != std::string::npos) rtag = rtag.substr(rc + 1);
                if (rtag == "link") rte.LINKS.push_back(parse_link(rteChild));
                if (rtag == "rtept") rte.POINTS.push_back(parse_waypoint(rteChild));
            }
            msg.ROUTES.push_back(std::move(rte));
        }
    }

    return msg;
}

static XmlElement write_wpt_el(const std::string& tag, const GpxWaypoint& wpt) {
    XmlElement el;
    el.tag = tag;
    el.attributes["lat"] = std::to_string(wpt.LATITUDE);
    el.attributes["lon"] = std::to_string(wpt.LONGITUDE);

    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    if (wpt.ELEVATION) el.children.push_back(txt("ele", std::to_string(*wpt.ELEVATION)));
    if (!wpt.TIME.empty()) el.children.push_back(txt("time", wpt.TIME));
    if (!wpt.NAME.empty()) el.children.push_back(txt("name", wpt.NAME));
    if (!wpt.COMMENT.empty()) el.children.push_back(txt("cmt", wpt.COMMENT));
    if (!wpt.DESCRIPTION.empty()) el.children.push_back(txt("desc", wpt.DESCRIPTION));
    if (!wpt.SOURCE.empty()) el.children.push_back(txt("src", wpt.SOURCE));

    for (const auto& link : wpt.LINKS) {
        XmlElement linkEl;
        linkEl.tag = "link";
        linkEl.attributes["href"] = link.HREF;
        if (!link.TEXT.empty()) linkEl.children.push_back(txt("text", link.TEXT));
        if (!link.TYPE.empty()) linkEl.children.push_back(txt("type", link.TYPE));
        el.children.push_back(std::move(linkEl));
    }

    if (!wpt.SYMBOL.empty()) el.children.push_back(txt("sym", wpt.SYMBOL));
    if (!wpt.TYPE.empty()) el.children.push_back(txt("type", wpt.TYPE));
    if (!wpt.FIX.empty()) el.children.push_back(txt("fix", wpt.FIX));
    if (wpt.SAT) el.children.push_back(txt("sat", std::to_string(*wpt.SAT)));
    if (wpt.HDOP) el.children.push_back(txt("hdop", std::to_string(*wpt.HDOP)));
    if (wpt.VDOP) el.children.push_back(txt("vdop", std::to_string(*wpt.VDOP)));
    if (wpt.PDOP) el.children.push_back(txt("pdop", std::to_string(*wpt.PDOP)));
    if (wpt.SPEED) el.children.push_back(txt("speed", std::to_string(*wpt.SPEED)));
    if (wpt.COURSE) el.children.push_back(txt("course", std::to_string(*wpt.COURSE)));

    return el;
}

std::string write_gpx_xml(const GpxMessage& msg) {
    auto txt = [](const std::string& t, const std::string& v) {
        return xml_elem(t, {}, {}, v);
    };

    XmlElement gpx;
    gpx.tag = "gpx";
    gpx.attributes["version"] = msg.VERSION.empty() ? "1.1" : msg.VERSION;
    if (!msg.CREATOR.empty()) gpx.attributes["creator"] = msg.CREATOR;
    gpx.attributes["xmlns"] = "http://www.topografix.com/GPX/1/1";

    // Metadata
    XmlElement metadata;
    metadata.tag = "metadata";
    bool has_metadata = false;

    if (!msg.NAME.empty()) { metadata.children.push_back(txt("name", msg.NAME)); has_metadata = true; }
    if (!msg.DESCRIPTION.empty()) { metadata.children.push_back(txt("desc", msg.DESCRIPTION)); has_metadata = true; }

    if (!msg.AUTHOR_NAME.empty()) {
        XmlElement author;
        author.tag = "author";
        author.children.push_back(txt("name", msg.AUTHOR_NAME));
        if (!msg.AUTHOR_EMAIL.empty()) {
            auto at = msg.AUTHOR_EMAIL.find('@');
            if (at != std::string::npos) {
                XmlElement email;
                email.tag = "email";
                email.attributes["id"] = msg.AUTHOR_EMAIL.substr(0, at);
                email.attributes["domain"] = msg.AUTHOR_EMAIL.substr(at + 1);
                author.children.push_back(std::move(email));
            }
        }
        metadata.children.push_back(std::move(author));
        has_metadata = true;
    }

    if (!msg.COPYRIGHT_AUTHOR.empty()) {
        XmlElement copyright;
        copyright.tag = "copyright";
        copyright.attributes["author"] = msg.COPYRIGHT_AUTHOR;
        if (!msg.COPYRIGHT_YEAR.empty()) copyright.children.push_back(txt("year", msg.COPYRIGHT_YEAR));
        if (!msg.COPYRIGHT_LICENSE.empty()) copyright.children.push_back(txt("license", msg.COPYRIGHT_LICENSE));
        metadata.children.push_back(std::move(copyright));
        has_metadata = true;
    }

    for (const auto& link : msg.LINKS) {
        XmlElement linkEl;
        linkEl.tag = "link";
        linkEl.attributes["href"] = link.HREF;
        if (!link.TEXT.empty()) linkEl.children.push_back(txt("text", link.TEXT));
        if (!link.TYPE.empty()) linkEl.children.push_back(txt("type", link.TYPE));
        metadata.children.push_back(std::move(linkEl));
        has_metadata = true;
    }

    if (!msg.TIME.empty()) { metadata.children.push_back(txt("time", msg.TIME)); has_metadata = true; }
    if (!msg.KEYWORDS.empty()) { metadata.children.push_back(txt("keywords", msg.KEYWORDS)); has_metadata = true; }

    if (msg.BOUNDS_MIN_LAT || msg.BOUNDS_MIN_LON || msg.BOUNDS_MAX_LAT || msg.BOUNDS_MAX_LON) {
        XmlElement bounds;
        bounds.tag = "bounds";
        if (msg.BOUNDS_MIN_LAT) bounds.attributes["minlat"] = std::to_string(*msg.BOUNDS_MIN_LAT);
        if (msg.BOUNDS_MIN_LON) bounds.attributes["minlon"] = std::to_string(*msg.BOUNDS_MIN_LON);
        if (msg.BOUNDS_MAX_LAT) bounds.attributes["maxlat"] = std::to_string(*msg.BOUNDS_MAX_LAT);
        if (msg.BOUNDS_MAX_LON) bounds.attributes["maxlon"] = std::to_string(*msg.BOUNDS_MAX_LON);
        metadata.children.push_back(std::move(bounds));
        has_metadata = true;
    }

    if (has_metadata) gpx.children.push_back(std::move(metadata));

    // Waypoints
    for (const auto& wpt : msg.WAYPOINTS) {
        gpx.children.push_back(write_wpt_el("wpt", wpt));
    }

    // Routes
    for (const auto& rte : msg.ROUTES) {
        XmlElement rteEl;
        rteEl.tag = "rte";
        if (!rte.NAME.empty()) rteEl.children.push_back(txt("name", rte.NAME));
        if (!rte.COMMENT.empty()) rteEl.children.push_back(txt("cmt", rte.COMMENT));
        if (!rte.DESCRIPTION.empty()) rteEl.children.push_back(txt("desc", rte.DESCRIPTION));
        if (!rte.SOURCE.empty()) rteEl.children.push_back(txt("src", rte.SOURCE));
        if (rte.NUMBER) rteEl.children.push_back(txt("number", std::to_string(*rte.NUMBER)));
        if (!rte.TYPE.empty()) rteEl.children.push_back(txt("type", rte.TYPE));
        for (const auto& pt : rte.POINTS) rteEl.children.push_back(write_wpt_el("rtept", pt));
        gpx.children.push_back(std::move(rteEl));
    }

    // Tracks
    for (const auto& trk : msg.TRACKS) {
        XmlElement trkEl;
        trkEl.tag = "trk";
        if (!trk.NAME.empty()) trkEl.children.push_back(txt("name", trk.NAME));
        if (!trk.COMMENT.empty()) trkEl.children.push_back(txt("cmt", trk.COMMENT));
        if (!trk.DESCRIPTION.empty()) trkEl.children.push_back(txt("desc", trk.DESCRIPTION));
        if (!trk.SOURCE.empty()) trkEl.children.push_back(txt("src", trk.SOURCE));
        if (trk.NUMBER) trkEl.children.push_back(txt("number", std::to_string(*trk.NUMBER)));
        if (!trk.TYPE.empty()) trkEl.children.push_back(txt("type", trk.TYPE));
        for (const auto& seg : trk.SEGMENTS) {
            XmlElement segEl;
            segEl.tag = "trkseg";
            for (const auto& pt : seg.POINTS) segEl.children.push_back(write_wpt_el("trkpt", pt));
            trkEl.children.push_back(std::move(segEl));
        }
        gpx.children.push_back(std::move(trkEl));
    }

    return write_xml(gpx);
}

} // namespace ccsds
