#include "ccsds/navigation/omm_parser.h"
#include <stdexcept>
#include <algorithm>

namespace ccsds {

static std::string req_str(const std::optional<std::string>& v, const char* field) {
    if (!v) throw std::runtime_error(std::string("Missing: ") + field);
    return *v;
}

static double req_num(const std::optional<std::string>& v, const char* field) {
    return std::stod(req_str(v, field));
}

static std::optional<double> opt_num(const std::optional<std::string>& v) {
    if (!v) return std::nullopt;
    return std::stod(*v);
}

static std::optional<int> opt_int(const std::optional<std::string>& v) {
    if (!v) return std::nullopt;
    return std::stoi(*v);
}

static double get_cov_val(const std::vector<KvnToken>& tokens, const std::string& key) {
    auto v = get_kvn_value(tokens, key);
    return v ? std::stod(*v) : 0.0;
}

OmmMessage parse_omm_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    auto find_block = [&](const std::string& name) -> const KvnBlock* {
        for (const auto& b : blocks) {
            if (b.name == name) return &b;
        }
        return nullptr;
    };

    auto* hb = find_block("HEADER");
    const auto& ht = hb ? hb->tokens : blocks[0].tokens;

    OmmHeader header;
    header.CCSDS_OMM_VERS = req_str(get_kvn_value(ht, "CCSDS_OMM_VERS"), "CCSDS_OMM_VERS");
    header.CREATION_DATE = req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");
    header.comments = get_kvn_comments(ht);

    auto* mb = find_block("META");
    const auto& mt = mb ? mb->tokens : std::vector<KvnToken>{};

    OmmMetadata metadata;
    metadata.OBJECT_NAME = req_str(get_kvn_value(mt, "OBJECT_NAME"), "OBJECT_NAME");
    metadata.OBJECT_ID = req_str(get_kvn_value(mt, "OBJECT_ID"), "OBJECT_ID");
    metadata.CENTER_NAME = req_str(get_kvn_value(mt, "CENTER_NAME"), "CENTER_NAME");
    metadata.REF_FRAME = req_str(get_kvn_value(mt, "REF_FRAME"), "REF_FRAME");
    metadata.TIME_SYSTEM = req_str(get_kvn_value(mt, "TIME_SYSTEM"), "TIME_SYSTEM");
    metadata.MEAN_ELEMENT_THEORY = req_str(get_kvn_value(mt, "MEAN_ELEMENT_THEORY"), "MEAN_ELEMENT_THEORY");
    metadata.comments = get_kvn_comments(mt);

    auto* meb = find_block("MEAN_ELEMENTS");
    if (!meb) meb = find_block("DATA");
    std::vector<KvnToken> fallback_tokens;
    if (!meb) {
        bool seen_first_header = false;
        for (const auto& b : blocks) {
            if (b.name == "HEADER" && !seen_first_header) { seen_first_header = true; continue; }
            if (b.name == "META") continue;
            fallback_tokens.insert(fallback_tokens.end(), b.tokens.begin(), b.tokens.end());
        }
    }
    const auto& met = meb ? meb->tokens : fallback_tokens;

    OmmMeanElements mean_elements;
    mean_elements.EPOCH = req_str(get_kvn_value(met, "EPOCH"), "EPOCH");
    mean_elements.SEMI_MAJOR_AXIS = opt_num(get_kvn_value(met, "SEMI_MAJOR_AXIS"));
    mean_elements.MEAN_MOTION = opt_num(get_kvn_value(met, "MEAN_MOTION"));
    mean_elements.ECCENTRICITY = req_num(get_kvn_value(met, "ECCENTRICITY"), "ECCENTRICITY");
    mean_elements.INCLINATION = req_num(get_kvn_value(met, "INCLINATION"), "INCLINATION");
    mean_elements.RA_OF_ASC_NODE = req_num(get_kvn_value(met, "RA_OF_ASC_NODE"), "RA_OF_ASC_NODE");
    mean_elements.ARG_OF_PERICENTER = req_num(get_kvn_value(met, "ARG_OF_PERICENTER"), "ARG_OF_PERICENTER");
    mean_elements.MEAN_ANOMALY = req_num(get_kvn_value(met, "MEAN_ANOMALY"), "MEAN_ANOMALY");
    mean_elements.GM = opt_num(get_kvn_value(met, "GM"));
    mean_elements.comments = get_kvn_comments(met);

    std::optional<OmmTleParameters> tle_params;
    auto* tleb = find_block("TLE_PARAMETERS");
    const auto& tt = tleb ? tleb->tokens : met;
    if (get_kvn_value(tt, "EPHEMERIS_TYPE") || get_kvn_value(tt, "NORAD_CAT_ID")) {
        OmmTleParameters tp;
        tp.EPHEMERIS_TYPE = opt_int(get_kvn_value(tt, "EPHEMERIS_TYPE"));
        tp.CLASSIFICATION_TYPE = get_kvn_value(tt, "CLASSIFICATION_TYPE");
        tp.NORAD_CAT_ID = opt_int(get_kvn_value(tt, "NORAD_CAT_ID"));
        tp.ELEMENT_SET_NO = opt_int(get_kvn_value(tt, "ELEMENT_SET_NO"));
        tp.REV_AT_EPOCH = opt_int(get_kvn_value(tt, "REV_AT_EPOCH"));
        tp.BSTAR = opt_num(get_kvn_value(tt, "BSTAR"));
        tp.MEAN_MOTION_DOT = opt_num(get_kvn_value(tt, "MEAN_MOTION_DOT"));
        tp.MEAN_MOTION_DDOT = opt_num(get_kvn_value(tt, "MEAN_MOTION_DDOT"));
        tp.comments = get_kvn_comments(tt);
        tle_params = std::move(tp);
    }

    std::optional<OmmCovarianceMatrix> cov;
    auto* covb = find_block("COVARIANCE");
    if (covb) {
        const auto& ct = covb->tokens;
        OmmCovarianceMatrix cm;
        cm.COV_REF_FRAME = get_kvn_value(ct, "COV_REF_FRAME");
        cm.CX_X = get_cov_val(ct, "CX_X"); cm.CY_X = get_cov_val(ct, "CY_X"); cm.CY_Y = get_cov_val(ct, "CY_Y");
        cm.CZ_X = get_cov_val(ct, "CZ_X"); cm.CZ_Y = get_cov_val(ct, "CZ_Y"); cm.CZ_Z = get_cov_val(ct, "CZ_Z");
        cm.CX_DOT_X = get_cov_val(ct, "CX_DOT_X"); cm.CX_DOT_Y = get_cov_val(ct, "CX_DOT_Y");
        cm.CX_DOT_Z = get_cov_val(ct, "CX_DOT_Z"); cm.CX_DOT_X_DOT = get_cov_val(ct, "CX_DOT_X_DOT");
        cm.CY_DOT_X = get_cov_val(ct, "CY_DOT_X"); cm.CY_DOT_Y = get_cov_val(ct, "CY_DOT_Y");
        cm.CY_DOT_Z = get_cov_val(ct, "CY_DOT_Z"); cm.CY_DOT_X_DOT = get_cov_val(ct, "CY_DOT_X_DOT");
        cm.CY_DOT_Y_DOT = get_cov_val(ct, "CY_DOT_Y_DOT");
        cm.CZ_DOT_X = get_cov_val(ct, "CZ_DOT_X"); cm.CZ_DOT_Y = get_cov_val(ct, "CZ_DOT_Y");
        cm.CZ_DOT_Z = get_cov_val(ct, "CZ_DOT_Z"); cm.CZ_DOT_X_DOT = get_cov_val(ct, "CZ_DOT_X_DOT");
        cm.CZ_DOT_Y_DOT = get_cov_val(ct, "CZ_DOT_Y_DOT"); cm.CZ_DOT_Z_DOT = get_cov_val(ct, "CZ_DOT_Z_DOT");
        cov = std::move(cm);
    }

    return {std::move(header), std::move(metadata), std::move(mean_elements), std::move(tle_params), std::move(cov)};
}

OmmMessage parse_omm_xml(std::string_view text) {
    auto root = parse_xml_string(text);
    auto omm_els = find_elements(root, "omm");
    const auto& omm = omm_els.empty() ? root : *omm_els[0];

    auto* header_el = find_child(omm, "header");
    if (!header_el) throw std::runtime_error("Missing <header>");

    OmmHeader header;
    header.CCSDS_OMM_VERS = get_attribute(omm, "version").value_or("3.0");
    header.CREATION_DATE = get_child_text(*header_el, "CREATION_DATE").value_or("");
    header.ORIGINATOR = get_child_text(*header_el, "ORIGINATOR").value_or("");

    auto* body_el = find_child(omm, "body");
    const auto& body = body_el ? *body_el : omm;
    auto seg_els = find_elements(body, "segment");
    const auto& seg = seg_els.empty() ? body : *seg_els[0];
    auto* meta_el = find_child(seg, "metadata");
    auto* data_el = find_child(seg, "data");
    const auto& meta_src = meta_el ? *meta_el : seg;
    const auto& data_src = data_el ? *data_el : seg;

    OmmMetadata metadata;
    metadata.OBJECT_NAME = get_child_text(meta_src, "OBJECT_NAME").value_or("");
    metadata.OBJECT_ID = get_child_text(meta_src, "OBJECT_ID").value_or("");
    metadata.CENTER_NAME = get_child_text(meta_src, "CENTER_NAME").value_or("");
    metadata.REF_FRAME = get_child_text(meta_src, "REF_FRAME").value_or("");
    metadata.TIME_SYSTEM = get_child_text(meta_src, "TIME_SYSTEM").value_or("");
    metadata.MEAN_ELEMENT_THEORY = get_child_text(meta_src, "MEAN_ELEMENT_THEORY").value_or("");

    auto* me_el = find_child(data_src, "meanElements");
    const auto& me_src = me_el ? *me_el : data_src;

    OmmMeanElements me;
    me.EPOCH = get_child_text(me_src, "EPOCH").value_or("");
    me.SEMI_MAJOR_AXIS = opt_num(get_child_text(me_src, "SEMI_MAJOR_AXIS"));
    me.MEAN_MOTION = opt_num(get_child_text(me_src, "MEAN_MOTION"));
    auto ecc = get_child_text(me_src, "ECCENTRICITY"); me.ECCENTRICITY = ecc ? std::stod(*ecc) : 0;
    auto inc = get_child_text(me_src, "INCLINATION"); me.INCLINATION = inc ? std::stod(*inc) : 0;
    auto raan = get_child_text(me_src, "RA_OF_ASC_NODE"); me.RA_OF_ASC_NODE = raan ? std::stod(*raan) : 0;
    auto aop = get_child_text(me_src, "ARG_OF_PERICENTER"); me.ARG_OF_PERICENTER = aop ? std::stod(*aop) : 0;
    auto ma = get_child_text(me_src, "MEAN_ANOMALY"); me.MEAN_ANOMALY = ma ? std::stod(*ma) : 0;
    me.GM = opt_num(get_child_text(me_src, "GM"));

    std::optional<OmmTleParameters> tle;
    auto* tle_el = find_child(data_src, "tleParameters");
    if (tle_el) {
        OmmTleParameters tp;
        tp.EPHEMERIS_TYPE = opt_int(get_child_text(*tle_el, "EPHEMERIS_TYPE"));
        tp.CLASSIFICATION_TYPE = get_child_text(*tle_el, "CLASSIFICATION_TYPE");
        tp.NORAD_CAT_ID = opt_int(get_child_text(*tle_el, "NORAD_CAT_ID"));
        tp.ELEMENT_SET_NO = opt_int(get_child_text(*tle_el, "ELEMENT_SET_NO"));
        tp.REV_AT_EPOCH = opt_int(get_child_text(*tle_el, "REV_AT_EPOCH"));
        tp.BSTAR = opt_num(get_child_text(*tle_el, "BSTAR"));
        tp.MEAN_MOTION_DOT = opt_num(get_child_text(*tle_el, "MEAN_MOTION_DOT"));
        tp.MEAN_MOTION_DDOT = opt_num(get_child_text(*tle_el, "MEAN_MOTION_DDOT"));
        tle = std::move(tp);
    }

    return {std::move(header), std::move(metadata), std::move(me), std::move(tle), std::nullopt};
}

std::string write_omm_kvn(const OmmMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_OMM_VERS", msg.header.CCSDS_OMM_VERS));
    for (const auto& c : msg.header.comments) e.push_back(kvn_comment(c));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));
    e.push_back(kvn_blank());

    e.push_back(kvn_section_start("META"));
    e.push_back(kvn_kv("OBJECT_NAME", msg.metadata.OBJECT_NAME));
    e.push_back(kvn_kv("OBJECT_ID", msg.metadata.OBJECT_ID));
    e.push_back(kvn_kv("CENTER_NAME", msg.metadata.CENTER_NAME));
    e.push_back(kvn_kv("REF_FRAME", msg.metadata.REF_FRAME));
    e.push_back(kvn_kv("TIME_SYSTEM", msg.metadata.TIME_SYSTEM));
    e.push_back(kvn_kv("MEAN_ELEMENT_THEORY", msg.metadata.MEAN_ELEMENT_THEORY));
    e.push_back(kvn_section_stop("META"));
    e.push_back(kvn_blank());

    e.push_back(kvn_section_start("MEAN_ELEMENTS"));
    e.push_back(kvn_kv("EPOCH", msg.mean_elements.EPOCH));
    push_opt_num(e, "SEMI_MAJOR_AXIS", msg.mean_elements.SEMI_MAJOR_AXIS);
    push_opt_num(e, "MEAN_MOTION", msg.mean_elements.MEAN_MOTION);
    e.push_back(kvn_kv("ECCENTRICITY", std::to_string(msg.mean_elements.ECCENTRICITY)));
    e.push_back(kvn_kv("INCLINATION", std::to_string(msg.mean_elements.INCLINATION)));
    e.push_back(kvn_kv("RA_OF_ASC_NODE", std::to_string(msg.mean_elements.RA_OF_ASC_NODE)));
    e.push_back(kvn_kv("ARG_OF_PERICENTER", std::to_string(msg.mean_elements.ARG_OF_PERICENTER)));
    e.push_back(kvn_kv("MEAN_ANOMALY", std::to_string(msg.mean_elements.MEAN_ANOMALY)));
    push_opt_num(e, "GM", msg.mean_elements.GM);
    e.push_back(kvn_section_stop("MEAN_ELEMENTS"));

    if (msg.tle_parameters) {
        e.push_back(kvn_blank());
        const auto& t = *msg.tle_parameters;
        e.push_back(kvn_section_start("TLE_PARAMETERS"));
        if (t.EPHEMERIS_TYPE) push_opt_num(e, "EPHEMERIS_TYPE", static_cast<double>(*t.EPHEMERIS_TYPE));
        push_opt(e, "CLASSIFICATION_TYPE", t.CLASSIFICATION_TYPE);
        if (t.NORAD_CAT_ID) push_opt_num(e, "NORAD_CAT_ID", static_cast<double>(*t.NORAD_CAT_ID));
        if (t.ELEMENT_SET_NO) push_opt_num(e, "ELEMENT_SET_NO", static_cast<double>(*t.ELEMENT_SET_NO));
        if (t.REV_AT_EPOCH) push_opt_num(e, "REV_AT_EPOCH", static_cast<double>(*t.REV_AT_EPOCH));
        push_opt_num(e, "BSTAR", t.BSTAR);
        push_opt_num(e, "MEAN_MOTION_DOT", t.MEAN_MOTION_DOT);
        push_opt_num(e, "MEAN_MOTION_DDOT", t.MEAN_MOTION_DDOT);
        e.push_back(kvn_section_stop("TLE_PARAMETERS"));
    }

    return write_kvn(e);
}

std::string write_omm_xml(const OmmMessage& msg) {
    auto el = [](const std::string& tag, const std::string& val) {
        return xml_elem(tag, {}, {}, val);
    };

    std::vector<XmlElement> me_children;
    me_children.push_back(el("EPOCH", msg.mean_elements.EPOCH));
    if (msg.mean_elements.SEMI_MAJOR_AXIS) me_children.push_back(el("SEMI_MAJOR_AXIS", std::to_string(*msg.mean_elements.SEMI_MAJOR_AXIS)));
    if (msg.mean_elements.MEAN_MOTION) me_children.push_back(el("MEAN_MOTION", std::to_string(*msg.mean_elements.MEAN_MOTION)));
    me_children.push_back(el("ECCENTRICITY", std::to_string(msg.mean_elements.ECCENTRICITY)));
    me_children.push_back(el("INCLINATION", std::to_string(msg.mean_elements.INCLINATION)));
    me_children.push_back(el("RA_OF_ASC_NODE", std::to_string(msg.mean_elements.RA_OF_ASC_NODE)));
    me_children.push_back(el("ARG_OF_PERICENTER", std::to_string(msg.mean_elements.ARG_OF_PERICENTER)));
    me_children.push_back(el("MEAN_ANOMALY", std::to_string(msg.mean_elements.MEAN_ANOMALY)));

    std::vector<XmlElement> data_children;
    data_children.push_back(xml_elem("meanElements", {}, std::move(me_children)));

    auto seg = xml_elem("segment", {}, {
        xml_elem("metadata", {}, {
            el("OBJECT_NAME", msg.metadata.OBJECT_NAME),
            el("OBJECT_ID", msg.metadata.OBJECT_ID),
            el("CENTER_NAME", msg.metadata.CENTER_NAME),
            el("REF_FRAME", msg.metadata.REF_FRAME),
            el("TIME_SYSTEM", msg.metadata.TIME_SYSTEM),
            el("MEAN_ELEMENT_THEORY", msg.metadata.MEAN_ELEMENT_THEORY),
        }),
        xml_elem("data", {}, std::move(data_children)),
    });

    auto header_el = xml_elem("header", {}, {
        el("CREATION_DATE", msg.header.CREATION_DATE),
        el("ORIGINATOR", msg.header.ORIGINATOR),
    });

    auto body = xml_elem("body", {}, {std::move(seg)});
    auto omm_root = xml_elem("omm", {{"id", "CCSDS_OMM_VERS"}, {"version", msg.header.CCSDS_OMM_VERS}},
        {std::move(header_el), std::move(body)});

    return write_xml(omm_root);
}

} // namespace ccsds
