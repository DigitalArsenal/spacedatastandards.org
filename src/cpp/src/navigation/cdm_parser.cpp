#include "ccsds/navigation/cdm_parser.h"
#include "ccsds/kvn_writer.h"
#include "ccsds/xml_writer.h"
#include <stdexcept>

namespace ccsds {

static std::string req_str(const std::optional<std::string>& v, const char* f) {
    if (!v) throw std::runtime_error(std::string("Missing: ") + f);
    return *v;
}
static double req_num(const std::optional<std::string>& v, const char* f) { return std::stod(req_str(v, f)); }
static std::optional<double> opt_num(const std::optional<std::string>& v) { return v ? std::optional<double>(std::stod(*v)) : std::nullopt; }

static CdmObject parse_object_kvn(const std::vector<KvnToken>& tokens) {
    CdmObject obj;
    auto g = [&](const char* k) { return get_kvn_value(tokens, k); };
    obj.OBJECT = req_str(g("OBJECT"), "OBJECT");
    obj.OBJECT_DESIGNATOR = req_str(g("OBJECT_DESIGNATOR"), "OBJECT_DESIGNATOR");
    obj.CATALOG_NAME = req_str(g("CATALOG_NAME"), "CATALOG_NAME");
    obj.OBJECT_NAME = req_str(g("OBJECT_NAME"), "OBJECT_NAME");
    obj.INTERNATIONAL_DESIGNATOR = req_str(g("INTERNATIONAL_DESIGNATOR"), "INTERNATIONAL_DESIGNATOR");
    obj.REF_FRAME = req_str(g("REF_FRAME"), "REF_FRAME");
    obj.X = req_num(g("X"), "X"); obj.Y = req_num(g("Y"), "Y"); obj.Z = req_num(g("Z"), "Z");
    obj.X_DOT = req_num(g("X_DOT"), "X_DOT"); obj.Y_DOT = req_num(g("Y_DOT"), "Y_DOT"); obj.Z_DOT = req_num(g("Z_DOT"), "Z_DOT");
    obj.OBJECT_TYPE = g("OBJECT_TYPE"); obj.COVARIANCE_METHOD = g("COVARIANCE_METHOD"); obj.MANEUVERABLE = g("MANEUVERABLE");
    obj.RECOMMENDED_OD_SPAN = opt_num(g("RECOMMENDED_OD_SPAN")); obj.ACTUAL_OD_SPAN = opt_num(g("ACTUAL_OD_SPAN"));
    obj.OBS_AVAILABLE = opt_num(g("OBS_AVAILABLE")); obj.OBS_USED = opt_num(g("OBS_USED"));
    obj.MASS = opt_num(g("MASS")); obj.AREA_PC = opt_num(g("AREA_PC"));
    obj.CR_R = opt_num(g("CR_R")); obj.CT_R = opt_num(g("CT_R")); obj.CT_T = opt_num(g("CT_T"));
    obj.CN_R = opt_num(g("CN_R")); obj.CN_T = opt_num(g("CN_T")); obj.CN_N = opt_num(g("CN_N"));
    obj.CRDOT_R = opt_num(g("CRDOT_R")); obj.CRDOT_T = opt_num(g("CRDOT_T")); obj.CRDOT_N = opt_num(g("CRDOT_N")); obj.CRDOT_RDOT = opt_num(g("CRDOT_RDOT"));
    obj.CTDOT_R = opt_num(g("CTDOT_R")); obj.CTDOT_T = opt_num(g("CTDOT_T")); obj.CTDOT_N = opt_num(g("CTDOT_N")); obj.CTDOT_RDOT = opt_num(g("CTDOT_RDOT")); obj.CTDOT_TDOT = opt_num(g("CTDOT_TDOT"));
    obj.CNDOT_R = opt_num(g("CNDOT_R")); obj.CNDOT_T = opt_num(g("CNDOT_T")); obj.CNDOT_N = opt_num(g("CNDOT_N")); obj.CNDOT_RDOT = opt_num(g("CNDOT_RDOT")); obj.CNDOT_TDOT = opt_num(g("CNDOT_TDOT")); obj.CNDOT_NDOT = opt_num(g("CNDOT_NDOT"));
    obj.comments = get_kvn_comments(tokens);
    return obj;
}

static void split_cdm_flat(const std::vector<KvnToken>& tokens,
                           std::vector<KvnToken>& header_tokens,
                           std::vector<KvnToken>& rel_tokens,
                           std::vector<KvnToken>& obj1_tokens,
                           std::vector<KvnToken>& obj2_tokens) {
    size_t obj1_pos = tokens.size(), obj2_pos = tokens.size();
    for (size_t i = 0; i < tokens.size(); i++) {
        if (tokens[i].type == KvnToken::KV && tokens[i].keyword == "OBJECT") {
            if (tokens[i].value == "OBJECT1") obj1_pos = i;
            else if (tokens[i].value == "OBJECT2") obj2_pos = i;
        }
    }
    for (size_t i = 0; i < obj1_pos && i < tokens.size(); i++) {
        auto& t = tokens[i];
        if (t.type == KvnToken::KV && (t.keyword == "CCSDS_CDM_VERS" || t.keyword == "CREATION_DATE" ||
            t.keyword == "ORIGINATOR" || t.keyword == "MESSAGE_FOR" || t.keyword == "MESSAGE_ID"))
            header_tokens.push_back(t);
        else if (t.type != KvnToken::SECTION)
            rel_tokens.push_back(t);
    }
    for (size_t i = obj1_pos; i < obj2_pos && i < tokens.size(); i++)
        obj1_tokens.push_back(tokens[i]);
    for (size_t i = obj2_pos; i < tokens.size(); i++)
        obj2_tokens.push_back(tokens[i]);
}

CdmMessage parse_cdm_kvn(std::string_view text) {
    auto tokens = parse_kvn(text);
    auto blocks = parse_kvn_blocks(tokens);

    const KvnBlock* hb = nullptr;
    const KvnBlock* rmb = nullptr;
    std::vector<const KvnBlock*> obj_blocks;
    for (const auto& b : blocks) {
        if (b.name == "HEADER") hb = &b;
        else if (b.name == "RELATIVE_METADATA") rmb = &b;
        else obj_blocks.push_back(&b);
    }

    if (!rmb) {
        std::vector<KvnToken> ht, rmt, o1t, o2t;
        split_cdm_flat(tokens, ht, rmt, o1t, o2t);

        CdmHeader header;
        header.CCSDS_CDM_VERS = req_str(get_kvn_value(ht, "CCSDS_CDM_VERS"), "CCSDS_CDM_VERS");
        header.CREATION_DATE = req_str(get_kvn_value(ht, "CREATION_DATE"), "CREATION_DATE");
        header.ORIGINATOR = req_str(get_kvn_value(ht, "ORIGINATOR"), "ORIGINATOR");
        header.MESSAGE_FOR = get_kvn_value(ht, "MESSAGE_FOR");
        header.MESSAGE_ID = req_str(get_kvn_value(ht, "MESSAGE_ID"), "MESSAGE_ID");

        CdmRelativeMetadata rm;
        rm.TCA = req_str(get_kvn_value(rmt, "TCA"), "TCA");
        rm.MISS_DISTANCE = req_num(get_kvn_value(rmt, "MISS_DISTANCE"), "MISS_DISTANCE");
        rm.RELATIVE_SPEED = opt_num(get_kvn_value(rmt, "RELATIVE_SPEED"));
        rm.COLLISION_PROBABILITY = opt_num(get_kvn_value(rmt, "COLLISION_PROBABILITY"));
        rm.COLLISION_PROBABILITY_METHOD = get_kvn_value(rmt, "COLLISION_PROBABILITY_METHOD");

        return {std::move(header), std::move(rm), parse_object_kvn(o1t), parse_object_kvn(o2t)};
    }

    if (!hb) throw std::runtime_error("Missing HEADER");

    CdmHeader header;
    header.CCSDS_CDM_VERS = req_str(get_kvn_value(hb->tokens, "CCSDS_CDM_VERS"), "CCSDS_CDM_VERS");
    header.CREATION_DATE = req_str(get_kvn_value(hb->tokens, "CREATION_DATE"), "CREATION_DATE");
    header.ORIGINATOR = req_str(get_kvn_value(hb->tokens, "ORIGINATOR"), "ORIGINATOR");
    header.MESSAGE_FOR = get_kvn_value(hb->tokens, "MESSAGE_FOR");
    header.MESSAGE_ID = req_str(get_kvn_value(hb->tokens, "MESSAGE_ID"), "MESSAGE_ID");

    CdmRelativeMetadata rm;
    const auto& rmt = rmb->tokens;
    rm.TCA = req_str(get_kvn_value(rmt, "TCA"), "TCA");
    rm.MISS_DISTANCE = req_num(get_kvn_value(rmt, "MISS_DISTANCE"), "MISS_DISTANCE");
    rm.RELATIVE_SPEED = opt_num(get_kvn_value(rmt, "RELATIVE_SPEED"));
    rm.COLLISION_PROBABILITY = opt_num(get_kvn_value(rmt, "COLLISION_PROBABILITY"));
    rm.COLLISION_PROBABILITY_METHOD = get_kvn_value(rmt, "COLLISION_PROBABILITY_METHOD");

    std::vector<KvnToken> obj1_tokens, obj2_tokens;
    if (obj_blocks.size() == 2) {
        obj1_tokens = obj_blocks[0]->tokens;
        obj2_tokens = obj_blocks[1]->tokens;
    } else if (obj_blocks.size() >= 4) {
        for (size_t i = 0; i < obj_blocks.size() / 2; i++)
            obj1_tokens.insert(obj1_tokens.end(), obj_blocks[i]->tokens.begin(), obj_blocks[i]->tokens.end());
        for (size_t i = obj_blocks.size() / 2; i < obj_blocks.size(); i++)
            obj2_tokens.insert(obj2_tokens.end(), obj_blocks[i]->tokens.begin(), obj_blocks[i]->tokens.end());
    }

    return {std::move(header), std::move(rm), parse_object_kvn(obj1_tokens), parse_object_kvn(obj2_tokens)};
}

CdmMessage parse_cdm_xml(std::string_view text) {
    (void)text;
    throw std::runtime_error("CDM XML parsing not yet implemented");
}

std::string write_cdm_kvn(const CdmMessage& msg) {
    std::vector<KvnEntry> e;
    e.push_back(kvn_kv("CCSDS_CDM_VERS", msg.header.CCSDS_CDM_VERS));
    e.push_back(kvn_kv("CREATION_DATE", msg.header.CREATION_DATE));
    e.push_back(kvn_kv("ORIGINATOR", msg.header.ORIGINATOR));
    e.push_back(kvn_kv("MESSAGE_ID", msg.header.MESSAGE_ID));
    return write_kvn(e);
}

std::string write_cdm_xml(const CdmMessage& msg) {
    (void)msg;
    throw std::runtime_error("CDM XML writing not yet implemented");
}

} // namespace ccsds
