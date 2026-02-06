#include "ccsds/navigation/oem_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_writer.h"
#include <stdexcept>
#include <sstream>

namespace ccsds {

static std::string req_str(const std::optional<std::string>& v, const char* f) {
    if (!v) throw std::runtime_error(std::string("Missing: ") + f);
    return *v;
}
static std::optional<double> opt_num(const std::optional<std::string>& v) {
    return v ? std::optional<double>(std::stod(*v)) : std::nullopt;
}
static std::optional<int> opt_int(const std::optional<std::string>& v) {
    return v ? std::optional<int>(std::stoi(*v)) : std::nullopt;
}

static std::vector<OemEphemerisLine> parse_ephemeris_lines(const std::vector<KvnToken>& tokens) {
    std::vector<OemEphemerisLine> lines;
    for (const auto& t : tokens) {
        if (t.type != KvnToken::COMMENT) continue;
        std::istringstream iss(t.value);
        std::vector<std::string> parts;
        std::string p;
        while (iss >> p) parts.push_back(p);
        if (parts.size() >= 7 && parts[0].size() >= 4 && std::isdigit(parts[0][0])) {
            OemEphemerisLine line;
            line.epoch = parts[0];
            line.x = std::stod(parts[1]); line.y = std::stod(parts[2]); line.z = std::stod(parts[3]);
            line.x_dot = std::stod(parts[4]); line.y_dot = std::stod(parts[5]); line.z_dot = std::stod(parts[6]);
            if (parts.size() >= 10) {
                line.x_ddot = std::stod(parts[7]); line.y_ddot = std::stod(parts[8]); line.z_ddot = std::stod(parts[9]);
            }
            lines.push_back(std::move(line));
        }
    }
    return lines;
}

OemMessage parse_oem_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    auto find_block = [&](const std::string& name) -> const KvnBlock* {
        for (const auto& b : blocks) if (b.name == name) return &b;
        return nullptr;
    };

    auto* hb = find_block("HEADER");
    const auto& ht = hb ? hb->tokens : std::vector<KvnToken>{};

    OemHeader header;
    header.CCSDS_OEM_VERS = req_str(get_kvn_value(ht, "CCSDS_OEM_VERS"), "CCSDS_OEM_VERS");
    header.CREATION_DATE = req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");
    header.comments = get_kvn_comments(ht);

    std::vector<const KvnBlock*> meta_blocks, data_blocks;
    for (const auto& b : blocks) {
        if (b.name == "META") meta_blocks.push_back(&b);
        else if (b.name == "DATA") data_blocks.push_back(&b);
    }

    std::vector<OemSegment> segments;
    for (size_t i = 0; i < meta_blocks.size(); i++) {
        const auto& mt = meta_blocks[i]->tokens;
        OemMetadata meta;
        meta.OBJECT_NAME = req_str(get_kvn_value(mt, "OBJECT_NAME"), "OBJECT_NAME");
        meta.OBJECT_ID = req_str(get_kvn_value(mt, "OBJECT_ID"), "OBJECT_ID");
        meta.CENTER_NAME = req_str(get_kvn_value(mt, "CENTER_NAME"), "CENTER_NAME");
        meta.REF_FRAME = req_str(get_kvn_value(mt, "REF_FRAME"), "REF_FRAME");
        meta.REF_FRAME_EPOCH = get_kvn_value(mt, "REF_FRAME_EPOCH");
        meta.TIME_SYSTEM = req_str(get_kvn_value(mt, "TIME_SYSTEM"), "TIME_SYSTEM");
        meta.START_TIME = req_str(get_kvn_value(mt, "START_TIME"), "START_TIME");
        meta.USEABLE_START_TIME = get_kvn_value(mt, "USEABLE_START_TIME");
        meta.USEABLE_STOP_TIME = get_kvn_value(mt, "USEABLE_STOP_TIME");
        meta.STOP_TIME = req_str(get_kvn_value(mt, "STOP_TIME"), "STOP_TIME");
        meta.INTERPOLATION = get_kvn_value(mt, "INTERPOLATION");
        meta.INTERPOLATION_DEGREE = opt_int(get_kvn_value(mt, "INTERPOLATION_DEGREE"));
        meta.comments = get_kvn_comments(mt);

        OemData data;
        if (i < data_blocks.size()) {
            data.ephemeris = parse_ephemeris_lines(data_blocks[i]->tokens);
            data.comments = get_kvn_comments(data_blocks[i]->tokens);
        }

        segments.push_back({std::move(meta), std::move(data)});
    }

    return {std::move(header), std::move(segments)};
}

OemMessage parse_oem_xml(std::string_view text) {
    auto root = parse_xml_string(text);
    auto oem_els = find_elements(root, "oem");
    const auto& oem = oem_els.empty() ? root : *oem_els[0];

    auto* header_el = find_child(oem, "header");
    if (!header_el) throw std::runtime_error("Missing <header>");

    OemHeader header;
    header.CCSDS_OEM_VERS = get_attribute(oem, "version").value_or("3.0");
    header.CREATION_DATE = get_child_text(*header_el, "CREATION_DATE").value_or("");
    header.ORIGINATOR = get_child_text(*header_el, "ORIGINATOR").value_or("");

    auto* body_el = find_child(oem, "body");
    const auto& body = body_el ? *body_el : oem;
    auto seg_els = find_elements(body, "segment");

    std::vector<OemSegment> segments;
    for (auto* seg : seg_els) {
        auto* meta_el = find_child(*seg, "metadata");
        auto* data_el = find_child(*seg, "data");
        if (!meta_el || !data_el) continue;

        OemMetadata meta;
        meta.OBJECT_NAME = get_child_text(*meta_el, "OBJECT_NAME").value_or("");
        meta.OBJECT_ID = get_child_text(*meta_el, "OBJECT_ID").value_or("");
        meta.CENTER_NAME = get_child_text(*meta_el, "CENTER_NAME").value_or("");
        meta.REF_FRAME = get_child_text(*meta_el, "REF_FRAME").value_or("");
        meta.TIME_SYSTEM = get_child_text(*meta_el, "TIME_SYSTEM").value_or("");
        meta.START_TIME = get_child_text(*meta_el, "START_TIME").value_or("");
        meta.STOP_TIME = get_child_text(*meta_el, "STOP_TIME").value_or("");
        meta.INTERPOLATION = get_child_text(*meta_el, "INTERPOLATION");
        meta.INTERPOLATION_DEGREE = opt_int(get_child_text(*meta_el, "INTERPOLATION_DEGREE"));

        OemData data;
        auto sv_els = find_elements(*data_el, "stateVector");
        for (auto* sv : sv_els) {
            OemEphemerisLine line;
            line.epoch = get_child_text(*sv, "EPOCH").value_or("");
            auto gv = [&](const char* tag) { auto v = get_child_text(*sv, tag); return v ? std::stod(*v) : 0.0; };
            line.x = gv("X"); line.y = gv("Y"); line.z = gv("Z");
            line.x_dot = gv("X_DOT"); line.y_dot = gv("Y_DOT"); line.z_dot = gv("Z_DOT");
            auto xdd = get_child_text(*sv, "X_DDOT");
            if (xdd) { line.x_ddot = std::stod(*xdd); line.y_ddot = gv("Y_DDOT"); line.z_ddot = gv("Z_DDOT"); }
            data.ephemeris.push_back(std::move(line));
        }

        segments.push_back({std::move(meta), std::move(data)});
    }

    return {std::move(header), std::move(segments)};
}

std::string write_oem_kvn(const OemMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_OEM_VERS", msg.header.CCSDS_OEM_VERS));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));

    for (const auto& seg : msg.segments) {
        e.push_back(kvn_blank());
        e.push_back(kvn_section_start("META"));
        e.push_back(kvn_kv("OBJECT_NAME", seg.metadata.OBJECT_NAME));
        e.push_back(kvn_kv("OBJECT_ID", seg.metadata.OBJECT_ID));
        e.push_back(kvn_kv("CENTER_NAME", seg.metadata.CENTER_NAME));
        e.push_back(kvn_kv("REF_FRAME", seg.metadata.REF_FRAME));
        e.push_back(kvn_kv("TIME_SYSTEM", seg.metadata.TIME_SYSTEM));
        e.push_back(kvn_kv("START_TIME", seg.metadata.START_TIME));
        e.push_back(kvn_kv("STOP_TIME", seg.metadata.STOP_TIME));
        push_opt(e, "INTERPOLATION", seg.metadata.INTERPOLATION);
        e.push_back(kvn_section_stop("META"));

        e.push_back(kvn_section_start("DATA"));
        for (const auto& eph : seg.data.ephemeris) {
            std::string line = eph.epoch + " " + std::to_string(eph.x) + " " + std::to_string(eph.y) + " " + std::to_string(eph.z)
                + " " + std::to_string(eph.x_dot) + " " + std::to_string(eph.y_dot) + " " + std::to_string(eph.z_dot);
            e.push_back(kvn_comment(line));
        }
        e.push_back(kvn_section_stop("DATA"));
    }

    return write_kvn(e);
}

std::string write_oem_xml(const OemMessage& msg) {
    auto el = [](const std::string& tag, const std::string& val) { return xml_elem(tag, {}, {}, val); };

    std::vector<XmlElement> seg_els;
    for (const auto& seg : msg.segments) {
        std::vector<XmlElement> sv_els;
        for (const auto& eph : seg.data.ephemeris) {
            sv_els.push_back(xml_elem("stateVector", {}, {
                el("EPOCH", eph.epoch), el("X", std::to_string(eph.x)), el("Y", std::to_string(eph.y)), el("Z", std::to_string(eph.z)),
                el("X_DOT", std::to_string(eph.x_dot)), el("Y_DOT", std::to_string(eph.y_dot)), el("Z_DOT", std::to_string(eph.z_dot)),
            }));
        }
        seg_els.push_back(xml_elem("segment", {}, {
            xml_elem("metadata", {}, {
                el("OBJECT_NAME", seg.metadata.OBJECT_NAME), el("OBJECT_ID", seg.metadata.OBJECT_ID),
                el("CENTER_NAME", seg.metadata.CENTER_NAME), el("REF_FRAME", seg.metadata.REF_FRAME),
                el("TIME_SYSTEM", seg.metadata.TIME_SYSTEM), el("START_TIME", seg.metadata.START_TIME), el("STOP_TIME", seg.metadata.STOP_TIME),
            }),
            xml_elem("data", {}, std::move(sv_els)),
        }));
    }

    return write_xml(xml_elem("oem", {{"version", msg.header.CCSDS_OEM_VERS}}, {
        xml_elem("header", {}, { el("CREATION_DATE", msg.header.CREATION_DATE), el("ORIGINATOR", msg.header.ORIGINATOR) }),
        xml_elem("body", {}, std::move(seg_els)),
    }));
}

} // namespace ccsds
