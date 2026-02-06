#include "ccsds/navigation/tdm_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_writer.h"
#include <stdexcept>
#include <sstream>
#include <set>

namespace ccsds {

static std::string tdm_req_str(const std::optional<std::string>& v, const char* f) {
    if (!v) throw std::runtime_error(std::string("Missing: ") + f);
    return *v;
}
static std::optional<double> tdm_opt_num(const std::optional<std::string>& v) {
    return v ? std::optional<double>(std::stod(*v)) : std::nullopt;
}
static std::optional<int> tdm_opt_int(const std::optional<std::string>& v) {
    return v ? std::optional<int>(std::stoi(*v)) : std::nullopt;
}

static const std::set<std::string> TDM_OBS_KEYWORDS = {
    "CARRIER_POWER", "DOPPLER_COUNT", "DOPPLER_INSTANTANEOUS", "DOPPLER_INTEGRATED",
    "RANGE", "RECEIVE_FREQ", "TRANSMIT_FREQ", "ANGLE_1", "ANGLE_2",
    "RECEIVE_FREQ_1", "RECEIVE_FREQ_2", "RECEIVE_FREQ_3", "RECEIVE_FREQ_4", "RECEIVE_FREQ_5",
    "TRANSMIT_FREQ_1", "TRANSMIT_FREQ_2", "TRANSMIT_FREQ_3", "TRANSMIT_FREQ_4", "TRANSMIT_FREQ_5",
    "TRANSMIT_FREQ_RATE_1", "TRANSMIT_FREQ_RATE_2", "TRANSMIT_FREQ_RATE_3",
    "TRANSMIT_FREQ_RATE_4", "TRANSMIT_FREQ_RATE_5",
    "DOR", "VLBI_DELAY", "PC_N0", "PR_N0",
    "CLOCK_BIAS", "CLOCK_DRIFT", "STEC", "TROPO_DRY", "TROPO_WET",
    "PRESSURE", "RHUMIDITY", "TEMPERATURE",
};

// ---------------------------------------------------------------------------
// Parse TDM metadata from KVN tokens (shared helper)
// ---------------------------------------------------------------------------

static TdmMetadata parse_tdm_meta_kvn(const std::vector<KvnToken>& mt) {
    TdmMetadata meta;
    meta.TIME_SYSTEM = tdm_req_str(get_kvn_value(mt, "TIME_SYSTEM"), "TIME_SYSTEM");
    meta.PARTICIPANT_1 = get_kvn_value(mt, "PARTICIPANT_1");
    meta.PARTICIPANT_2 = get_kvn_value(mt, "PARTICIPANT_2");
    meta.PARTICIPANT_3 = get_kvn_value(mt, "PARTICIPANT_3");
    meta.PARTICIPANT_4 = get_kvn_value(mt, "PARTICIPANT_4");
    meta.PARTICIPANT_5 = get_kvn_value(mt, "PARTICIPANT_5");
    meta.MODE = get_kvn_value(mt, "MODE");
    meta.PATH = get_kvn_value(mt, "PATH");
    meta.PATH_1 = get_kvn_value(mt, "PATH_1");
    meta.PATH_2 = get_kvn_value(mt, "PATH_2");
    meta.TRANSMIT_BAND = get_kvn_value(mt, "TRANSMIT_BAND");
    meta.RECEIVE_BAND = get_kvn_value(mt, "RECEIVE_BAND");
    meta.TURNAROUND_NUMERATOR = tdm_opt_num(get_kvn_value(mt, "TURNAROUND_NUMERATOR"));
    meta.TURNAROUND_DENOMINATOR = tdm_opt_num(get_kvn_value(mt, "TURNAROUND_DENOMINATOR"));
    meta.TIMETAG_REF = get_kvn_value(mt, "TIMETAG_REF");
    meta.INTEGRATION_INTERVAL = tdm_opt_num(get_kvn_value(mt, "INTEGRATION_INTERVAL"));
    meta.INTEGRATION_REF = get_kvn_value(mt, "INTEGRATION_REF");
    meta.FREQ_OFFSET = tdm_opt_num(get_kvn_value(mt, "FREQ_OFFSET"));
    meta.RANGE_MODE = get_kvn_value(mt, "RANGE_MODE");
    meta.RANGE_MODULUS = tdm_opt_num(get_kvn_value(mt, "RANGE_MODULUS"));
    meta.RANGE_UNITS = get_kvn_value(mt, "RANGE_UNITS");
    meta.ANGLE_TYPE = get_kvn_value(mt, "ANGLE_TYPE");
    meta.REFERENCE_FRAME = get_kvn_value(mt, "REFERENCE_FRAME");
    meta.INTERPOLATION = get_kvn_value(mt, "INTERPOLATION");
    meta.INTERPOLATION_DEGREE = tdm_opt_int(get_kvn_value(mt, "INTERPOLATION_DEGREE"));
    meta.START_TIME = get_kvn_value(mt, "START_TIME");
    meta.STOP_TIME = get_kvn_value(mt, "STOP_TIME");
    meta.comments = get_kvn_comments(mt);
    return meta;
}

// ---------------------------------------------------------------------------
// KVN parsing
// ---------------------------------------------------------------------------

TdmMessage parse_tdm_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    const KvnBlock* hb = nullptr;
    for (const auto& b : blocks) if (b.name == "HEADER") { hb = &b; break; }
    const auto& ht = hb ? hb->tokens : blocks[0].tokens;

    TdmHeader header;
    header.CCSDS_TDM_VERS = tdm_req_str(get_kvn_value(ht, "CCSDS_TDM_VERS"), "CCSDS_TDM_VERS");
    header.CREATION_DATE = tdm_req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = tdm_req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");
    header.comments = get_kvn_comments(ht);

    std::vector<const KvnBlock*> meta_blocks, data_blocks;
    for (const auto& b : blocks) {
        if (b.name == "META") meta_blocks.push_back(&b);
        else if (b.name == "DATA") data_blocks.push_back(&b);
    }

    std::vector<TdmSegment> segments;
    for (size_t i = 0; i < meta_blocks.size(); i++) {
        TdmMetadata meta = parse_tdm_meta_kvn(meta_blocks[i]->tokens);

        std::vector<TdmObservation> obs;
        if (i < data_blocks.size()) {
            for (const auto& t : data_blocks[i]->tokens) {
                if (t.type == KvnToken::KV && TDM_OBS_KEYWORDS.count(t.keyword)) {
                    std::istringstream iss(t.value);
                    std::string epoch; double val;
                    if (iss >> epoch >> val) {
                        obs.push_back({epoch, t.keyword, val});
                    }
                }
            }
        }
        segments.push_back({std::move(meta), std::move(obs)});
    }

    return {std::move(header), std::move(segments)};
}

// ---------------------------------------------------------------------------
// XML parsing
// ---------------------------------------------------------------------------

TdmMessage parse_tdm_xml(std::string_view text) {
    auto root = parse_xml_string(text);
    auto tdm_els = find_elements(root, "tdm");
    const auto& tdm = tdm_els.empty() ? root : *tdm_els[0];

    auto* header_el = find_child(tdm, "header");
    if (!header_el) throw std::runtime_error("Missing <header>");

    TdmHeader header;
    header.CCSDS_TDM_VERS = get_attribute(tdm, "version").value_or("2.0");
    header.CREATION_DATE = get_child_text(*header_el, "CREATION_DATE").value_or("");
    header.ORIGINATOR = get_child_text(*header_el, "ORIGINATOR").value_or("");

    auto* body_el = find_child(tdm, "body");
    const auto& body = body_el ? *body_el : tdm;
    auto seg_els = find_elements(body, "segment");

    std::vector<TdmSegment> segments;
    for (auto* seg : seg_els) {
        auto* meta_el = find_child(*seg, "metadata");
        auto* data_el = find_child(*seg, "data");
        if (!meta_el) continue;

        TdmMetadata meta;
        meta.TIME_SYSTEM = get_child_text(*meta_el, "TIME_SYSTEM").value_or("");
        meta.PARTICIPANT_1 = get_child_text(*meta_el, "PARTICIPANT_1");
        meta.PARTICIPANT_2 = get_child_text(*meta_el, "PARTICIPANT_2");
        meta.PARTICIPANT_3 = get_child_text(*meta_el, "PARTICIPANT_3");
        meta.PARTICIPANT_4 = get_child_text(*meta_el, "PARTICIPANT_4");
        meta.PARTICIPANT_5 = get_child_text(*meta_el, "PARTICIPANT_5");
        meta.MODE = get_child_text(*meta_el, "MODE");
        meta.PATH = get_child_text(*meta_el, "PATH");
        meta.PATH_1 = get_child_text(*meta_el, "PATH_1");
        meta.PATH_2 = get_child_text(*meta_el, "PATH_2");
        meta.TRANSMIT_BAND = get_child_text(*meta_el, "TRANSMIT_BAND");
        meta.RECEIVE_BAND = get_child_text(*meta_el, "RECEIVE_BAND");
        auto ta_num = get_child_text(*meta_el, "TURNAROUND_NUMERATOR");
        if (ta_num) meta.TURNAROUND_NUMERATOR = std::stod(*ta_num);
        auto ta_den = get_child_text(*meta_el, "TURNAROUND_DENOMINATOR");
        if (ta_den) meta.TURNAROUND_DENOMINATOR = std::stod(*ta_den);
        meta.TIMETAG_REF = get_child_text(*meta_el, "TIMETAG_REF");
        auto int_int = get_child_text(*meta_el, "INTEGRATION_INTERVAL");
        if (int_int) meta.INTEGRATION_INTERVAL = std::stod(*int_int);
        meta.INTEGRATION_REF = get_child_text(*meta_el, "INTEGRATION_REF");
        auto freq_off = get_child_text(*meta_el, "FREQ_OFFSET");
        if (freq_off) meta.FREQ_OFFSET = std::stod(*freq_off);
        meta.RANGE_MODE = get_child_text(*meta_el, "RANGE_MODE");
        auto range_mod = get_child_text(*meta_el, "RANGE_MODULUS");
        if (range_mod) meta.RANGE_MODULUS = std::stod(*range_mod);
        meta.RANGE_UNITS = get_child_text(*meta_el, "RANGE_UNITS");
        meta.ANGLE_TYPE = get_child_text(*meta_el, "ANGLE_TYPE");
        meta.REFERENCE_FRAME = get_child_text(*meta_el, "REFERENCE_FRAME");
        meta.INTERPOLATION = get_child_text(*meta_el, "INTERPOLATION");
        auto interp_deg = get_child_text(*meta_el, "INTERPOLATION_DEGREE");
        if (interp_deg) meta.INTERPOLATION_DEGREE = std::stoi(*interp_deg);
        meta.START_TIME = get_child_text(*meta_el, "START_TIME");
        meta.STOP_TIME = get_child_text(*meta_el, "STOP_TIME");

        std::vector<TdmObservation> obs;
        if (data_el) {
            auto obs_els = find_elements(*data_el, "observation");
            for (auto* ob_el : obs_els) {
                TdmObservation o;
                o.epoch = get_child_text(*ob_el, "EPOCH").value_or("");
                o.keyword = get_child_text(*ob_el, "KEYWORD").value_or("");
                auto val = get_child_text(*ob_el, "VALUE");
                o.value = val ? std::stod(*val) : 0.0;
                obs.push_back(std::move(o));
            }
        }

        segments.push_back({std::move(meta), std::move(obs)});
    }

    return {std::move(header), std::move(segments)};
}

// ---------------------------------------------------------------------------
// KVN writing
// ---------------------------------------------------------------------------

std::string write_tdm_kvn(const TdmMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_TDM_VERS", msg.header.CCSDS_TDM_VERS));
    for (const auto& c : msg.header.comments) e.push_back(kvn_comment(c));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));

    for (const auto& seg : msg.segments) {
        e.push_back(kvn_blank());
        e.push_back(kvn_section_start("META"));
        e.push_back(kvn_kv("TIME_SYSTEM", seg.metadata.TIME_SYSTEM));
        push_opt(e, "PARTICIPANT_1", seg.metadata.PARTICIPANT_1);
        push_opt(e, "PARTICIPANT_2", seg.metadata.PARTICIPANT_2);
        push_opt(e, "PARTICIPANT_3", seg.metadata.PARTICIPANT_3);
        push_opt(e, "PARTICIPANT_4", seg.metadata.PARTICIPANT_4);
        push_opt(e, "PARTICIPANT_5", seg.metadata.PARTICIPANT_5);
        push_opt(e, "MODE", seg.metadata.MODE);
        push_opt(e, "PATH", seg.metadata.PATH);
        push_opt(e, "PATH_1", seg.metadata.PATH_1);
        push_opt(e, "PATH_2", seg.metadata.PATH_2);
        push_opt(e, "TRANSMIT_BAND", seg.metadata.TRANSMIT_BAND);
        push_opt(e, "RECEIVE_BAND", seg.metadata.RECEIVE_BAND);
        push_opt_num(e, "TURNAROUND_NUMERATOR", seg.metadata.TURNAROUND_NUMERATOR);
        push_opt_num(e, "TURNAROUND_DENOMINATOR", seg.metadata.TURNAROUND_DENOMINATOR);
        push_opt(e, "TIMETAG_REF", seg.metadata.TIMETAG_REF);
        push_opt_num(e, "INTEGRATION_INTERVAL", seg.metadata.INTEGRATION_INTERVAL);
        push_opt(e, "INTEGRATION_REF", seg.metadata.INTEGRATION_REF);
        push_opt_num(e, "FREQ_OFFSET", seg.metadata.FREQ_OFFSET);
        push_opt(e, "RANGE_MODE", seg.metadata.RANGE_MODE);
        push_opt_num(e, "RANGE_MODULUS", seg.metadata.RANGE_MODULUS);
        push_opt(e, "RANGE_UNITS", seg.metadata.RANGE_UNITS);
        push_opt(e, "ANGLE_TYPE", seg.metadata.ANGLE_TYPE);
        push_opt(e, "REFERENCE_FRAME", seg.metadata.REFERENCE_FRAME);
        push_opt(e, "INTERPOLATION", seg.metadata.INTERPOLATION);
        if (seg.metadata.INTERPOLATION_DEGREE)
            e.push_back(kvn_kv("INTERPOLATION_DEGREE", std::to_string(*seg.metadata.INTERPOLATION_DEGREE)));
        push_opt(e, "START_TIME", seg.metadata.START_TIME);
        push_opt(e, "STOP_TIME", seg.metadata.STOP_TIME);
        for (const auto& c : seg.metadata.comments) e.push_back(kvn_comment(c));
        e.push_back(kvn_section_stop("META"));

        e.push_back(kvn_section_start("DATA"));
        for (const auto& ob : seg.observations) {
            e.push_back(kvn_kv(ob.keyword, ob.epoch + " " + std::to_string(ob.value)));
        }
        e.push_back(kvn_section_stop("DATA"));
    }
    return write_kvn(e);
}

// ---------------------------------------------------------------------------
// XML writing
// ---------------------------------------------------------------------------

std::string write_tdm_xml(const TdmMessage& msg) {
    auto el = [](const std::string& tag, const std::string& val) {
        return xml_elem(tag, {}, {}, val);
    };

    std::vector<XmlElement> seg_els;
    for (const auto& seg : msg.segments) {
        // Build metadata element
        std::vector<XmlElement> meta_children;
        meta_children.push_back(el("TIME_SYSTEM", seg.metadata.TIME_SYSTEM));
        if (seg.metadata.PARTICIPANT_1) meta_children.push_back(el("PARTICIPANT_1", *seg.metadata.PARTICIPANT_1));
        if (seg.metadata.PARTICIPANT_2) meta_children.push_back(el("PARTICIPANT_2", *seg.metadata.PARTICIPANT_2));
        if (seg.metadata.PARTICIPANT_3) meta_children.push_back(el("PARTICIPANT_3", *seg.metadata.PARTICIPANT_3));
        if (seg.metadata.PARTICIPANT_4) meta_children.push_back(el("PARTICIPANT_4", *seg.metadata.PARTICIPANT_4));
        if (seg.metadata.PARTICIPANT_5) meta_children.push_back(el("PARTICIPANT_5", *seg.metadata.PARTICIPANT_5));
        if (seg.metadata.MODE) meta_children.push_back(el("MODE", *seg.metadata.MODE));
        if (seg.metadata.PATH) meta_children.push_back(el("PATH", *seg.metadata.PATH));
        if (seg.metadata.PATH_1) meta_children.push_back(el("PATH_1", *seg.metadata.PATH_1));
        if (seg.metadata.PATH_2) meta_children.push_back(el("PATH_2", *seg.metadata.PATH_2));
        if (seg.metadata.TRANSMIT_BAND) meta_children.push_back(el("TRANSMIT_BAND", *seg.metadata.TRANSMIT_BAND));
        if (seg.metadata.RECEIVE_BAND) meta_children.push_back(el("RECEIVE_BAND", *seg.metadata.RECEIVE_BAND));
        if (seg.metadata.TURNAROUND_NUMERATOR) meta_children.push_back(el("TURNAROUND_NUMERATOR", std::to_string(*seg.metadata.TURNAROUND_NUMERATOR)));
        if (seg.metadata.TURNAROUND_DENOMINATOR) meta_children.push_back(el("TURNAROUND_DENOMINATOR", std::to_string(*seg.metadata.TURNAROUND_DENOMINATOR)));
        if (seg.metadata.TIMETAG_REF) meta_children.push_back(el("TIMETAG_REF", *seg.metadata.TIMETAG_REF));
        if (seg.metadata.INTEGRATION_INTERVAL) meta_children.push_back(el("INTEGRATION_INTERVAL", std::to_string(*seg.metadata.INTEGRATION_INTERVAL)));
        if (seg.metadata.INTEGRATION_REF) meta_children.push_back(el("INTEGRATION_REF", *seg.metadata.INTEGRATION_REF));
        if (seg.metadata.FREQ_OFFSET) meta_children.push_back(el("FREQ_OFFSET", std::to_string(*seg.metadata.FREQ_OFFSET)));
        if (seg.metadata.RANGE_MODE) meta_children.push_back(el("RANGE_MODE", *seg.metadata.RANGE_MODE));
        if (seg.metadata.RANGE_MODULUS) meta_children.push_back(el("RANGE_MODULUS", std::to_string(*seg.metadata.RANGE_MODULUS)));
        if (seg.metadata.RANGE_UNITS) meta_children.push_back(el("RANGE_UNITS", *seg.metadata.RANGE_UNITS));
        if (seg.metadata.ANGLE_TYPE) meta_children.push_back(el("ANGLE_TYPE", *seg.metadata.ANGLE_TYPE));
        if (seg.metadata.REFERENCE_FRAME) meta_children.push_back(el("REFERENCE_FRAME", *seg.metadata.REFERENCE_FRAME));
        if (seg.metadata.INTERPOLATION) meta_children.push_back(el("INTERPOLATION", *seg.metadata.INTERPOLATION));
        if (seg.metadata.INTERPOLATION_DEGREE) meta_children.push_back(el("INTERPOLATION_DEGREE", std::to_string(*seg.metadata.INTERPOLATION_DEGREE)));
        if (seg.metadata.START_TIME) meta_children.push_back(el("START_TIME", *seg.metadata.START_TIME));
        if (seg.metadata.STOP_TIME) meta_children.push_back(el("STOP_TIME", *seg.metadata.STOP_TIME));

        // Build data element with observation sub-elements
        std::vector<XmlElement> data_children;
        for (const auto& ob : seg.observations) {
            data_children.push_back(xml_elem("observation", {}, {
                el("EPOCH", ob.epoch),
                el("KEYWORD", ob.keyword),
                el("VALUE", std::to_string(ob.value)),
            }));
        }

        seg_els.push_back(xml_elem("segment", {}, {
            xml_elem("metadata", {}, std::move(meta_children)),
            xml_elem("data", {}, std::move(data_children)),
        }));
    }

    auto header_el = xml_elem("header", {}, {
        el("CREATION_DATE", msg.header.CREATION_DATE),
        el("ORIGINATOR", msg.header.ORIGINATOR),
    });

    auto body = xml_elem("body", {}, std::move(seg_els));
    auto tdm_root = xml_elem("tdm", {{"id", "CCSDS_TDM_VERS"}, {"version", msg.header.CCSDS_TDM_VERS}},
        {std::move(header_el), std::move(body)});

    return write_xml(tdm_root);
}

} // namespace ccsds
