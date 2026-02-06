#include "ccsds/navigation/aem_parser.h"
#include "ccsds/kvn_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <stdexcept>
#include <sstream>

namespace ccsds {

static std::string req_str(const std::optional<std::string>& v, const char* f) {
    if (!v) throw std::runtime_error(std::string("Missing: ") + f);
    return *v;
}
static std::optional<int> opt_int(const std::optional<std::string>& v) {
    return v ? std::optional<int>(std::stoi(*v)) : std::nullopt;
}

// ---------------------------------------------------------------------------
// Parse attitude data lines from KVN tokens.
// Data lines in AEM KVN are free-form (COMMENT tokens) of the form:
//   epoch q1 q2 q3 qc [rate_x rate_y rate_z]
// where the quaternion ordering depends on QUATERNION_TYPE (FIRST or LAST for
// the scalar component).  We store them as q1, q2, q3, qc as defined in the
// header struct (vector-first convention -- the caller can re-interpret).
// ---------------------------------------------------------------------------

static std::vector<AemAttitudeEntry> parse_attitude_lines(
        const std::vector<KvnToken>& tokens) {
    std::vector<AemAttitudeEntry> entries;
    for (const auto& t : tokens) {
        // Data lines are stored as COMMENT tokens by the KVN tokeniser
        // because they have no '=' sign.
        if (t.type != KvnToken::COMMENT) continue;
        std::istringstream iss(t.value);
        std::vector<std::string> parts;
        std::string p;
        while (iss >> p) parts.push_back(p);
        // Need at least epoch + 4 quaternion components
        if (parts.size() >= 5 && parts[0].size() >= 4 && std::isdigit(parts[0][0])) {
            AemAttitudeEntry entry;
            entry.epoch = parts[0];
            entry.q1 = std::stod(parts[1]);
            entry.q2 = std::stod(parts[2]);
            entry.q3 = std::stod(parts[3]);
            entry.qc = std::stod(parts[4]);
            if (parts.size() >= 8) {
                entry.rate_x = std::stod(parts[5]);
                entry.rate_y = std::stod(parts[6]);
                entry.rate_z = std::stod(parts[7]);
            }
            entries.push_back(std::move(entry));
        }
    }
    return entries;
}

// ---------------------------------------------------------------------------
// KVN parsing
// ---------------------------------------------------------------------------

AemMessage parse_aem_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    // --- Header ---
    const KvnBlock* hb = nullptr;
    for (const auto& b : blocks)
        if (b.name == "HEADER") { hb = &b; break; }
    const auto& ht = hb ? hb->tokens : blocks[0].tokens;

    AemHeader header;
    header.CCSDS_AEM_VERS = req_str(get_kvn_value(ht, "CCSDS_AEM_VERS"), "CCSDS_AEM_VERS");
    header.CREATION_DATE = req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");

    // Collect META and DATA blocks
    std::vector<const KvnBlock*> meta_blocks, data_blocks;
    for (const auto& b : blocks) {
        if (b.name == "META") meta_blocks.push_back(&b);
        else if (b.name == "DATA") data_blocks.push_back(&b);
    }

    std::vector<AemSegment> segments;
    for (size_t i = 0; i < meta_blocks.size(); i++) {
        const auto& mt = meta_blocks[i]->tokens;
        AemMetadata meta;
        meta.OBJECT_NAME = req_str(get_kvn_value(mt, "OBJECT_NAME"), "OBJECT_NAME");
        meta.OBJECT_ID = req_str(get_kvn_value(mt, "OBJECT_ID"), "OBJECT_ID");
        meta.CENTER_NAME = req_str(get_kvn_value(mt, "CENTER_NAME"), "CENTER_NAME");
        meta.REF_FRAME_A = req_str(get_kvn_value(mt, "REF_FRAME_A"), "REF_FRAME_A");
        meta.REF_FRAME_B = req_str(get_kvn_value(mt, "REF_FRAME_B"), "REF_FRAME_B");
        meta.ATTITUDE_DIR = req_str(get_kvn_value(mt, "ATTITUDE_DIR"), "ATTITUDE_DIR");
        meta.TIME_SYSTEM = req_str(get_kvn_value(mt, "TIME_SYSTEM"), "TIME_SYSTEM");
        meta.ATTITUDE_TYPE = req_str(get_kvn_value(mt, "ATTITUDE_TYPE"), "ATTITUDE_TYPE");
        meta.START_TIME = req_str(get_kvn_value(mt, "START_TIME"), "START_TIME");
        meta.STOP_TIME = req_str(get_kvn_value(mt, "STOP_TIME"), "STOP_TIME");
        meta.INTERPOLATION = get_kvn_value(mt, "INTERPOLATION");
        meta.INTERPOLATION_DEGREE = opt_int(get_kvn_value(mt, "INTERPOLATION_DEGREE"));

        std::vector<AemAttitudeEntry> data;
        if (i < data_blocks.size()) {
            data = parse_attitude_lines(data_blocks[i]->tokens);
        }

        segments.push_back({std::move(meta), std::move(data)});
    }

    return {std::move(header), std::move(segments)};
}

// ---------------------------------------------------------------------------
// XML parsing
// ---------------------------------------------------------------------------

AemMessage parse_aem_xml(std::string_view text) {
    auto root = parse_xml_string(text);
    auto aem_els = find_elements(root, "aem");
    const auto& aem = aem_els.empty() ? root : *aem_els[0];

    auto* header_el = find_child(aem, "header");
    if (!header_el) throw std::runtime_error("Missing <header>");

    AemHeader header;
    header.CCSDS_AEM_VERS = get_attribute(aem, "version").value_or("2.0");
    header.CREATION_DATE = get_child_text(*header_el, "CREATION_DATE").value_or("");
    header.ORIGINATOR = get_child_text(*header_el, "ORIGINATOR").value_or("");

    auto* body_el = find_child(aem, "body");
    const auto& body = body_el ? *body_el : aem;
    auto seg_els = find_elements(body, "segment");

    auto gv = [](const XmlElement& e, const char* tag) -> double {
        auto v = get_child_text(e, tag);
        return v ? std::stod(*v) : 0.0;
    };

    std::vector<AemSegment> segments;
    for (auto* seg : seg_els) {
        auto* meta_el = find_child(*seg, "metadata");
        auto* data_el = find_child(*seg, "data");
        if (!meta_el) continue;

        AemMetadata meta;
        meta.OBJECT_NAME = get_child_text(*meta_el, "OBJECT_NAME").value_or("");
        meta.OBJECT_ID = get_child_text(*meta_el, "OBJECT_ID").value_or("");
        meta.CENTER_NAME = get_child_text(*meta_el, "CENTER_NAME").value_or("");
        meta.REF_FRAME_A = get_child_text(*meta_el, "REF_FRAME_A").value_or("");
        meta.REF_FRAME_B = get_child_text(*meta_el, "REF_FRAME_B").value_or("");
        meta.ATTITUDE_DIR = get_child_text(*meta_el, "ATTITUDE_DIR").value_or("");
        meta.TIME_SYSTEM = get_child_text(*meta_el, "TIME_SYSTEM").value_or("");
        meta.ATTITUDE_TYPE = get_child_text(*meta_el, "ATTITUDE_TYPE").value_or("");
        meta.START_TIME = get_child_text(*meta_el, "START_TIME").value_or("");
        meta.STOP_TIME = get_child_text(*meta_el, "STOP_TIME").value_or("");
        meta.INTERPOLATION = get_child_text(*meta_el, "INTERPOLATION");
        auto interp_deg = get_child_text(*meta_el, "INTERPOLATION_DEGREE");
        if (interp_deg) meta.INTERPOLATION_DEGREE = std::stoi(*interp_deg);

        std::vector<AemAttitudeEntry> data;
        if (data_el) {
            // Look for <attitudeState> elements or <quaternionState> elements
            auto att_els = find_elements(*data_el, "attitudeState");
            if (att_els.empty()) att_els = find_elements(*data_el, "quaternionState");
            for (auto* ae : att_els) {
                AemAttitudeEntry entry;
                entry.epoch = get_child_text(*ae, "EPOCH").value_or("");
                // Try <quaternion> sub-element first
                auto* quat_el = find_child(*ae, "quaternion");
                if (quat_el) {
                    entry.q1 = gv(*quat_el, "Q1");
                    entry.q2 = gv(*quat_el, "Q2");
                    entry.q3 = gv(*quat_el, "Q3");
                    entry.qc = gv(*quat_el, "QC");
                } else {
                    // Quaternion components directly in the attitude state
                    entry.q1 = gv(*ae, "Q1");
                    entry.q2 = gv(*ae, "Q2");
                    entry.q3 = gv(*ae, "Q3");
                    entry.qc = gv(*ae, "QC");
                }
                // Optional rotation rates
                auto* rate_el = find_child(*ae, "rotationRates");
                if (rate_el) {
                    auto rx = get_child_text(*rate_el, "ROTATION_RATE_X");
                    auto ry = get_child_text(*rate_el, "ROTATION_RATE_Y");
                    auto rz = get_child_text(*rate_el, "ROTATION_RATE_Z");
                    if (rx) entry.rate_x = std::stod(*rx);
                    if (ry) entry.rate_y = std::stod(*ry);
                    if (rz) entry.rate_z = std::stod(*rz);
                } else {
                    auto rx = get_child_text(*ae, "ROTATION_RATE_X");
                    auto ry = get_child_text(*ae, "ROTATION_RATE_Y");
                    auto rz = get_child_text(*ae, "ROTATION_RATE_Z");
                    if (rx) entry.rate_x = std::stod(*rx);
                    if (ry) entry.rate_y = std::stod(*ry);
                    if (rz) entry.rate_z = std::stod(*rz);
                }
                data.push_back(std::move(entry));
            }
        }

        segments.push_back({std::move(meta), std::move(data)});
    }

    return {std::move(header), std::move(segments)};
}

// ---------------------------------------------------------------------------
// KVN writing
// ---------------------------------------------------------------------------

std::string write_aem_kvn(const AemMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_AEM_VERS", msg.header.CCSDS_AEM_VERS));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));

    for (const auto& seg : msg.segments) {
        e.push_back(kvn_blank());
        e.push_back(kvn_section_start("META"));
        e.push_back(kvn_kv("OBJECT_NAME", seg.metadata.OBJECT_NAME));
        e.push_back(kvn_kv("OBJECT_ID", seg.metadata.OBJECT_ID));
        e.push_back(kvn_kv("CENTER_NAME", seg.metadata.CENTER_NAME));
        e.push_back(kvn_kv("REF_FRAME_A", seg.metadata.REF_FRAME_A));
        e.push_back(kvn_kv("REF_FRAME_B", seg.metadata.REF_FRAME_B));
        e.push_back(kvn_kv("ATTITUDE_DIR", seg.metadata.ATTITUDE_DIR));
        e.push_back(kvn_kv("TIME_SYSTEM", seg.metadata.TIME_SYSTEM));
        e.push_back(kvn_kv("ATTITUDE_TYPE", seg.metadata.ATTITUDE_TYPE));
        e.push_back(kvn_kv("START_TIME", seg.metadata.START_TIME));
        e.push_back(kvn_kv("STOP_TIME", seg.metadata.STOP_TIME));
        push_opt(e, "INTERPOLATION", seg.metadata.INTERPOLATION);
        if (seg.metadata.INTERPOLATION_DEGREE)
            e.push_back(kvn_kv("INTERPOLATION_DEGREE", std::to_string(*seg.metadata.INTERPOLATION_DEGREE)));
        e.push_back(kvn_section_stop("META"));

        e.push_back(kvn_section_start("DATA"));
        for (const auto& att : seg.data) {
            std::string line = att.epoch
                + " " + std::to_string(att.q1)
                + " " + std::to_string(att.q2)
                + " " + std::to_string(att.q3)
                + " " + std::to_string(att.qc);
            if (att.rate_x) {
                line += " " + std::to_string(*att.rate_x)
                     +  " " + std::to_string(*att.rate_y)
                     +  " " + std::to_string(*att.rate_z);
            }
            e.push_back(kvn_comment(line));
        }
        e.push_back(kvn_section_stop("DATA"));
    }

    return write_kvn(e);
}

} // namespace ccsds
