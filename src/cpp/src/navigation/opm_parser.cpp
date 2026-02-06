#include "ccsds/navigation/opm_parser.h"
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
static double req_num(const std::optional<std::string>& v, const char* f) {
    return std::stod(req_str(v, f));
}
static std::optional<double> opt_num(const std::optional<std::string>& v) {
    return v ? std::optional<double>(std::stod(*v)) : std::nullopt;
}

// ---------------------------------------------------------------------------
// KVN parsing
// ---------------------------------------------------------------------------

OpmMessage parse_opm_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    auto find_block = [&](const std::string& name) -> const KvnBlock* {
        for (const auto& b : blocks)
            if (b.name == name) return &b;
        return nullptr;
    };

    // Collect all blocks matching a name
    auto find_blocks = [&](const std::string& name) {
        std::vector<const KvnBlock*> result;
        for (const auto& b : blocks)
            if (b.name == name) result.push_back(&b);
        return result;
    };

    // --- Header ---
    auto* hb = find_block("HEADER");
    const auto& ht = hb ? hb->tokens : blocks[0].tokens;

    OpmHeader header;
    header.CCSDS_OPM_VERS = req_str(get_kvn_value(ht, "CCSDS_OPM_VERS"), "CCSDS_OPM_VERS");
    header.CREATION_DATE = req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");
    header.comments = get_kvn_comments(ht);

    // --- Metadata ---
    auto* mb = find_block("META");
    const auto& mt = mb ? mb->tokens : std::vector<KvnToken>{};

    OpmMetadata metadata;
    metadata.OBJECT_NAME = req_str(get_kvn_value(mt, "OBJECT_NAME"), "OBJECT_NAME");
    metadata.OBJECT_ID = req_str(get_kvn_value(mt, "OBJECT_ID"), "OBJECT_ID");
    metadata.CENTER_NAME = req_str(get_kvn_value(mt, "CENTER_NAME"), "CENTER_NAME");
    metadata.REF_FRAME = req_str(get_kvn_value(mt, "REF_FRAME"), "REF_FRAME");
    metadata.TIME_SYSTEM = req_str(get_kvn_value(mt, "TIME_SYSTEM"), "TIME_SYSTEM");
    metadata.comments = get_kvn_comments(mt);

    // --- State vector ---
    // Look in a DATA or STATE_VECTOR block, or fall back to non-header/meta blocks
    auto* svb = find_block("STATE_VECTOR");
    if (!svb) svb = find_block("DATA");
    std::vector<KvnToken> fallback_tokens;
    if (!svb) {
        // Collect all tokens from blocks after the first HEADER and META blocks.
        // After META_STOP, the block parser resets the block name to "HEADER",
        // so data tokens (EPOCH, X, Y, etc.) end up in subsequent "HEADER" blocks.
        bool past_meta = false;
        for (const auto& b : blocks) {
            if (b.name == "META") { past_meta = true; continue; }
            if (!past_meta && b.name == "HEADER") continue;
            fallback_tokens.insert(fallback_tokens.end(), b.tokens.begin(), b.tokens.end());
        }
    }
    const auto& dt = svb ? svb->tokens : fallback_tokens;

    OpmStateVector sv;
    sv.EPOCH = req_str(get_kvn_value(dt, "EPOCH"), "EPOCH");
    sv.X = req_num(get_kvn_value(dt, "X"), "X");
    sv.Y = req_num(get_kvn_value(dt, "Y"), "Y");
    sv.Z = req_num(get_kvn_value(dt, "Z"), "Z");
    sv.X_DOT = req_num(get_kvn_value(dt, "X_DOT"), "X_DOT");
    sv.Y_DOT = req_num(get_kvn_value(dt, "Y_DOT"), "Y_DOT");
    sv.Z_DOT = req_num(get_kvn_value(dt, "Z_DOT"), "Z_DOT");

    // --- Optional Keplerian elements ---
    auto* kb = find_block("KEPLERIAN");
    // If no explicit KEPLERIAN block, look in the fallback data tokens
    const auto& kt = kb ? kb->tokens : dt;
    std::optional<OpmKeplerian> keplerian;
    if (get_kvn_value(kt, "SEMI_MAJOR_AXIS")) {
        OpmKeplerian kep;
        kep.SEMI_MAJOR_AXIS = req_num(get_kvn_value(kt, "SEMI_MAJOR_AXIS"), "SEMI_MAJOR_AXIS");
        kep.ECCENTRICITY = req_num(get_kvn_value(kt, "ECCENTRICITY"), "ECCENTRICITY");
        kep.INCLINATION = req_num(get_kvn_value(kt, "INCLINATION"), "INCLINATION");
        kep.RA_OF_ASC_NODE = req_num(get_kvn_value(kt, "RA_OF_ASC_NODE"), "RA_OF_ASC_NODE");
        kep.ARG_OF_PERICENTER = req_num(get_kvn_value(kt, "ARG_OF_PERICENTER"), "ARG_OF_PERICENTER");
        kep.TRUE_ANOMALY = req_num(get_kvn_value(kt, "TRUE_ANOMALY"), "TRUE_ANOMALY");
        kep.MEAN_ANOMALY = opt_num(get_kvn_value(kt, "MEAN_ANOMALY"));
        kep.GM = opt_num(get_kvn_value(kt, "GM"));
        keplerian = std::move(kep);
    }

    // --- Optional spacecraft parameters ---
    auto* spb = find_block("SPACECRAFT");
    const auto& spt = spb ? spb->tokens : dt;
    std::optional<OpmSpacecraftParams> spacecraft;
    if (get_kvn_value(spt, "MASS") || get_kvn_value(spt, "SOLAR_RAD_AREA") ||
        get_kvn_value(spt, "DRAG_AREA")) {
        OpmSpacecraftParams sp;
        sp.MASS = opt_num(get_kvn_value(spt, "MASS"));
        sp.SOLAR_RAD_AREA = opt_num(get_kvn_value(spt, "SOLAR_RAD_AREA"));
        sp.SOLAR_RAD_COEFF = opt_num(get_kvn_value(spt, "SOLAR_RAD_COEFF"));
        sp.DRAG_AREA = opt_num(get_kvn_value(spt, "DRAG_AREA"));
        sp.DRAG_COEFF = opt_num(get_kvn_value(spt, "DRAG_COEFF"));
        spacecraft = std::move(sp);
    }

    // --- Optional maneuvers ---
    std::vector<OpmManeuver> maneuvers;
    auto man_blocks = find_blocks("MANEUVER");
    if (!man_blocks.empty()) {
        for (const auto* manb : man_blocks) {
            const auto& mant = manb->tokens;
            OpmManeuver man;
            man.MAN_EPOCH_IGNITION = req_str(get_kvn_value(mant, "MAN_EPOCH_IGNITION"), "MAN_EPOCH_IGNITION");
            man.MAN_DURATION = req_num(get_kvn_value(mant, "MAN_DURATION"), "MAN_DURATION");
            man.MAN_DELTA_MASS = req_num(get_kvn_value(mant, "MAN_DELTA_MASS"), "MAN_DELTA_MASS");
            man.MAN_REF_FRAME = req_str(get_kvn_value(mant, "MAN_REF_FRAME"), "MAN_REF_FRAME");
            man.MAN_DV_1 = req_num(get_kvn_value(mant, "MAN_DV_1"), "MAN_DV_1");
            man.MAN_DV_2 = req_num(get_kvn_value(mant, "MAN_DV_2"), "MAN_DV_2");
            man.MAN_DV_3 = req_num(get_kvn_value(mant, "MAN_DV_3"), "MAN_DV_3");
            maneuvers.push_back(std::move(man));
        }
    } else {
        // Flat format -- look for MAN_EPOCH_IGNITION in data tokens
        auto epochs = get_kvn_values(dt, "MAN_EPOCH_IGNITION");
        if (!epochs.empty()) {
            // Single maneuver in flat data
            OpmManeuver man;
            man.MAN_EPOCH_IGNITION = epochs[0];
            man.MAN_DURATION = req_num(get_kvn_value(dt, "MAN_DURATION"), "MAN_DURATION");
            man.MAN_DELTA_MASS = req_num(get_kvn_value(dt, "MAN_DELTA_MASS"), "MAN_DELTA_MASS");
            man.MAN_REF_FRAME = req_str(get_kvn_value(dt, "MAN_REF_FRAME"), "MAN_REF_FRAME");
            man.MAN_DV_1 = req_num(get_kvn_value(dt, "MAN_DV_1"), "MAN_DV_1");
            man.MAN_DV_2 = req_num(get_kvn_value(dt, "MAN_DV_2"), "MAN_DV_2");
            man.MAN_DV_3 = req_num(get_kvn_value(dt, "MAN_DV_3"), "MAN_DV_3");
            maneuvers.push_back(std::move(man));
        }
    }

    return {std::move(header), std::move(metadata), std::move(sv),
            std::move(keplerian), std::move(spacecraft), std::move(maneuvers)};
}

// ---------------------------------------------------------------------------
// XML parsing
// ---------------------------------------------------------------------------

OpmMessage parse_opm_xml(std::string_view text) {
    auto root = parse_xml_string(text);
    auto opm_els = find_elements(root, "opm");
    const auto& opm = opm_els.empty() ? root : *opm_els[0];

    auto* header_el = find_child(opm, "header");
    if (!header_el) throw std::runtime_error("Missing <header>");

    OpmHeader header;
    header.CCSDS_OPM_VERS = get_attribute(opm, "version").value_or("2.0");
    header.CREATION_DATE = get_child_text(*header_el, "CREATION_DATE").value_or("");
    header.ORIGINATOR = get_child_text(*header_el, "ORIGINATOR").value_or("");

    auto* body_el = find_child(opm, "body");
    const auto& body = body_el ? *body_el : opm;
    auto seg_els = find_elements(body, "segment");
    const auto& seg = seg_els.empty() ? body : *seg_els[0];

    auto* meta_el = find_child(seg, "metadata");
    auto* data_el = find_child(seg, "data");
    const auto& meta_src = meta_el ? *meta_el : seg;
    const auto& data_src = data_el ? *data_el : seg;

    OpmMetadata metadata;
    metadata.OBJECT_NAME = get_child_text(meta_src, "OBJECT_NAME").value_or("");
    metadata.OBJECT_ID = get_child_text(meta_src, "OBJECT_ID").value_or("");
    metadata.CENTER_NAME = get_child_text(meta_src, "CENTER_NAME").value_or("");
    metadata.REF_FRAME = get_child_text(meta_src, "REF_FRAME").value_or("");
    metadata.TIME_SYSTEM = get_child_text(meta_src, "TIME_SYSTEM").value_or("");

    // State vector
    auto* sv_el = find_child(data_src, "stateVector");
    const auto& sv_src = sv_el ? *sv_el : data_src;

    auto gv = [](const XmlElement& e, const char* tag) -> double {
        auto v = get_child_text(e, tag);
        return v ? std::stod(*v) : 0.0;
    };

    OpmStateVector sv;
    sv.EPOCH = get_child_text(sv_src, "EPOCH").value_or("");
    sv.X = gv(sv_src, "X"); sv.Y = gv(sv_src, "Y"); sv.Z = gv(sv_src, "Z");
    sv.X_DOT = gv(sv_src, "X_DOT"); sv.Y_DOT = gv(sv_src, "Y_DOT"); sv.Z_DOT = gv(sv_src, "Z_DOT");

    // Optional Keplerian elements
    std::optional<OpmKeplerian> keplerian;
    auto* kep_el = find_child(data_src, "keplerianElements");
    if (kep_el) {
        OpmKeplerian kep;
        kep.SEMI_MAJOR_AXIS = gv(*kep_el, "SEMI_MAJOR_AXIS");
        kep.ECCENTRICITY = gv(*kep_el, "ECCENTRICITY");
        kep.INCLINATION = gv(*kep_el, "INCLINATION");
        kep.RA_OF_ASC_NODE = gv(*kep_el, "RA_OF_ASC_NODE");
        kep.ARG_OF_PERICENTER = gv(*kep_el, "ARG_OF_PERICENTER");
        kep.TRUE_ANOMALY = gv(*kep_el, "TRUE_ANOMALY");
        auto ma = get_child_text(*kep_el, "MEAN_ANOMALY");
        if (ma) kep.MEAN_ANOMALY = std::stod(*ma);
        auto gm = get_child_text(*kep_el, "GM");
        if (gm) kep.GM = std::stod(*gm);
        keplerian = std::move(kep);
    }

    // Optional spacecraft parameters
    std::optional<OpmSpacecraftParams> spacecraft;
    auto* sp_el = find_child(data_src, "spacecraftParameters");
    if (sp_el) {
        OpmSpacecraftParams sp;
        auto ov = [](const XmlElement& e, const char* tag) -> std::optional<double> {
            auto v = get_child_text(e, tag);
            return v ? std::optional<double>(std::stod(*v)) : std::nullopt;
        };
        sp.MASS = ov(*sp_el, "MASS");
        sp.SOLAR_RAD_AREA = ov(*sp_el, "SOLAR_RAD_AREA");
        sp.SOLAR_RAD_COEFF = ov(*sp_el, "SOLAR_RAD_COEFF");
        sp.DRAG_AREA = ov(*sp_el, "DRAG_AREA");
        sp.DRAG_COEFF = ov(*sp_el, "DRAG_COEFF");
        spacecraft = std::move(sp);
    }

    // Optional maneuvers
    std::vector<OpmManeuver> maneuvers;
    auto man_els = find_elements(data_src, "maneuverParameters");
    for (auto* me : man_els) {
        OpmManeuver man;
        man.MAN_EPOCH_IGNITION = get_child_text(*me, "MAN_EPOCH_IGNITION").value_or("");
        man.MAN_DURATION = gv(*me, "MAN_DURATION");
        man.MAN_DELTA_MASS = gv(*me, "MAN_DELTA_MASS");
        man.MAN_REF_FRAME = get_child_text(*me, "MAN_REF_FRAME").value_or("");
        man.MAN_DV_1 = gv(*me, "MAN_DV_1");
        man.MAN_DV_2 = gv(*me, "MAN_DV_2");
        man.MAN_DV_3 = gv(*me, "MAN_DV_3");
        maneuvers.push_back(std::move(man));
    }

    return {std::move(header), std::move(metadata), std::move(sv),
            std::move(keplerian), std::move(spacecraft), std::move(maneuvers)};
}

// ---------------------------------------------------------------------------
// KVN writing
// ---------------------------------------------------------------------------

std::string write_opm_kvn(const OpmMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_OPM_VERS", msg.header.CCSDS_OPM_VERS));
    for (const auto& c : msg.header.comments) e.push_back(kvn_comment(c));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));
    e.push_back(kvn_blank());

    // Metadata
    e.push_back(kvn_section_start("META"));
    for (const auto& c : msg.metadata.comments) e.push_back(kvn_comment(c));
    e.push_back(kvn_kv("OBJECT_NAME", msg.metadata.OBJECT_NAME));
    e.push_back(kvn_kv("OBJECT_ID", msg.metadata.OBJECT_ID));
    e.push_back(kvn_kv("CENTER_NAME", msg.metadata.CENTER_NAME));
    e.push_back(kvn_kv("REF_FRAME", msg.metadata.REF_FRAME));
    e.push_back(kvn_kv("TIME_SYSTEM", msg.metadata.TIME_SYSTEM));
    e.push_back(kvn_section_stop("META"));
    e.push_back(kvn_blank());

    // State vector
    e.push_back(kvn_kv("EPOCH", msg.state_vector.EPOCH));
    e.push_back(kvn_kv("X", std::to_string(msg.state_vector.X)));
    e.push_back(kvn_kv("Y", std::to_string(msg.state_vector.Y)));
    e.push_back(kvn_kv("Z", std::to_string(msg.state_vector.Z)));
    e.push_back(kvn_kv("X_DOT", std::to_string(msg.state_vector.X_DOT)));
    e.push_back(kvn_kv("Y_DOT", std::to_string(msg.state_vector.Y_DOT)));
    e.push_back(kvn_kv("Z_DOT", std::to_string(msg.state_vector.Z_DOT)));

    // Keplerian elements
    if (msg.keplerian) {
        e.push_back(kvn_blank());
        const auto& k = *msg.keplerian;
        e.push_back(kvn_kv("SEMI_MAJOR_AXIS", std::to_string(k.SEMI_MAJOR_AXIS)));
        e.push_back(kvn_kv("ECCENTRICITY", std::to_string(k.ECCENTRICITY)));
        e.push_back(kvn_kv("INCLINATION", std::to_string(k.INCLINATION)));
        e.push_back(kvn_kv("RA_OF_ASC_NODE", std::to_string(k.RA_OF_ASC_NODE)));
        e.push_back(kvn_kv("ARG_OF_PERICENTER", std::to_string(k.ARG_OF_PERICENTER)));
        e.push_back(kvn_kv("TRUE_ANOMALY", std::to_string(k.TRUE_ANOMALY)));
        push_opt_num(e, "MEAN_ANOMALY", k.MEAN_ANOMALY);
        push_opt_num(e, "GM", k.GM);
    }

    // Spacecraft parameters
    if (msg.spacecraft) {
        e.push_back(kvn_blank());
        const auto& sp = *msg.spacecraft;
        push_opt_num(e, "MASS", sp.MASS);
        push_opt_num(e, "SOLAR_RAD_AREA", sp.SOLAR_RAD_AREA);
        push_opt_num(e, "SOLAR_RAD_COEFF", sp.SOLAR_RAD_COEFF);
        push_opt_num(e, "DRAG_AREA", sp.DRAG_AREA);
        push_opt_num(e, "DRAG_COEFF", sp.DRAG_COEFF);
    }

    // Maneuvers
    for (const auto& man : msg.maneuvers) {
        e.push_back(kvn_blank());
        e.push_back(kvn_kv("MAN_EPOCH_IGNITION", man.MAN_EPOCH_IGNITION));
        e.push_back(kvn_kv("MAN_DURATION", std::to_string(man.MAN_DURATION)));
        e.push_back(kvn_kv("MAN_DELTA_MASS", std::to_string(man.MAN_DELTA_MASS)));
        e.push_back(kvn_kv("MAN_REF_FRAME", man.MAN_REF_FRAME));
        e.push_back(kvn_kv("MAN_DV_1", std::to_string(man.MAN_DV_1)));
        e.push_back(kvn_kv("MAN_DV_2", std::to_string(man.MAN_DV_2)));
        e.push_back(kvn_kv("MAN_DV_3", std::to_string(man.MAN_DV_3)));
    }

    return write_kvn(e);
}

// ---------------------------------------------------------------------------
// XML writing
// ---------------------------------------------------------------------------

std::string write_opm_xml(const OpmMessage& msg) {
    auto el = [](const std::string& tag, const std::string& val) {
        return xml_elem(tag, {}, {}, val);
    };

    // State vector
    std::vector<XmlElement> sv_children;
    sv_children.push_back(el("EPOCH", msg.state_vector.EPOCH));
    sv_children.push_back(el("X", std::to_string(msg.state_vector.X)));
    sv_children.push_back(el("Y", std::to_string(msg.state_vector.Y)));
    sv_children.push_back(el("Z", std::to_string(msg.state_vector.Z)));
    sv_children.push_back(el("X_DOT", std::to_string(msg.state_vector.X_DOT)));
    sv_children.push_back(el("Y_DOT", std::to_string(msg.state_vector.Y_DOT)));
    sv_children.push_back(el("Z_DOT", std::to_string(msg.state_vector.Z_DOT)));

    std::vector<XmlElement> data_children;
    data_children.push_back(xml_elem("stateVector", {}, std::move(sv_children)));

    // Keplerian elements
    if (msg.keplerian) {
        const auto& k = *msg.keplerian;
        std::vector<XmlElement> kep_children;
        kep_children.push_back(el("SEMI_MAJOR_AXIS", std::to_string(k.SEMI_MAJOR_AXIS)));
        kep_children.push_back(el("ECCENTRICITY", std::to_string(k.ECCENTRICITY)));
        kep_children.push_back(el("INCLINATION", std::to_string(k.INCLINATION)));
        kep_children.push_back(el("RA_OF_ASC_NODE", std::to_string(k.RA_OF_ASC_NODE)));
        kep_children.push_back(el("ARG_OF_PERICENTER", std::to_string(k.ARG_OF_PERICENTER)));
        kep_children.push_back(el("TRUE_ANOMALY", std::to_string(k.TRUE_ANOMALY)));
        if (k.MEAN_ANOMALY) kep_children.push_back(el("MEAN_ANOMALY", std::to_string(*k.MEAN_ANOMALY)));
        if (k.GM) kep_children.push_back(el("GM", std::to_string(*k.GM)));
        data_children.push_back(xml_elem("keplerianElements", {}, std::move(kep_children)));
    }

    // Spacecraft parameters
    if (msg.spacecraft) {
        const auto& sp = *msg.spacecraft;
        std::vector<XmlElement> sp_children;
        if (sp.MASS) sp_children.push_back(el("MASS", std::to_string(*sp.MASS)));
        if (sp.SOLAR_RAD_AREA) sp_children.push_back(el("SOLAR_RAD_AREA", std::to_string(*sp.SOLAR_RAD_AREA)));
        if (sp.SOLAR_RAD_COEFF) sp_children.push_back(el("SOLAR_RAD_COEFF", std::to_string(*sp.SOLAR_RAD_COEFF)));
        if (sp.DRAG_AREA) sp_children.push_back(el("DRAG_AREA", std::to_string(*sp.DRAG_AREA)));
        if (sp.DRAG_COEFF) sp_children.push_back(el("DRAG_COEFF", std::to_string(*sp.DRAG_COEFF)));
        data_children.push_back(xml_elem("spacecraftParameters", {}, std::move(sp_children)));
    }

    // Maneuvers
    for (const auto& man : msg.maneuvers) {
        std::vector<XmlElement> man_children;
        man_children.push_back(el("MAN_EPOCH_IGNITION", man.MAN_EPOCH_IGNITION));
        man_children.push_back(el("MAN_DURATION", std::to_string(man.MAN_DURATION)));
        man_children.push_back(el("MAN_DELTA_MASS", std::to_string(man.MAN_DELTA_MASS)));
        man_children.push_back(el("MAN_REF_FRAME", man.MAN_REF_FRAME));
        man_children.push_back(el("MAN_DV_1", std::to_string(man.MAN_DV_1)));
        man_children.push_back(el("MAN_DV_2", std::to_string(man.MAN_DV_2)));
        man_children.push_back(el("MAN_DV_3", std::to_string(man.MAN_DV_3)));
        data_children.push_back(xml_elem("maneuverParameters", {}, std::move(man_children)));
    }

    auto seg = xml_elem("segment", {}, {
        xml_elem("metadata", {}, {
            el("OBJECT_NAME", msg.metadata.OBJECT_NAME),
            el("OBJECT_ID", msg.metadata.OBJECT_ID),
            el("CENTER_NAME", msg.metadata.CENTER_NAME),
            el("REF_FRAME", msg.metadata.REF_FRAME),
            el("TIME_SYSTEM", msg.metadata.TIME_SYSTEM),
        }),
        xml_elem("data", {}, std::move(data_children)),
    });

    auto header_el = xml_elem("header", {}, {
        el("CREATION_DATE", msg.header.CREATION_DATE),
        el("ORIGINATOR", msg.header.ORIGINATOR),
    });

    auto body = xml_elem("body", {}, {std::move(seg)});
    auto opm_root = xml_elem("opm", {{"id", "CCSDS_OPM_VERS"}, {"version", msg.header.CCSDS_OPM_VERS}},
        {std::move(header_el), std::move(body)});

    return write_xml(opm_root);
}

} // namespace ccsds
