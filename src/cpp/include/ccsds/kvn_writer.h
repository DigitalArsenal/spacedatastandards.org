#pragma once
#include <string>
#include <string_view>
#include <vector>
#include <variant>
#include <optional>

namespace ccsds {

struct KvnKV { std::string keyword; std::string value; };
struct KvnComment { std::string text; };
struct KvnSection { std::string marker; };
struct KvnBlank {};

using KvnEntry = std::variant<KvnKV, KvnComment, KvnSection, KvnBlank>;

/// Write entries to KVN format
std::string write_kvn(const std::vector<KvnEntry>& entries, int pad_keyword = 0);

/// Convenience builders
inline KvnEntry kvn_kv(std::string keyword, std::string value) {
    return KvnKV{std::move(keyword), std::move(value)};
}
inline KvnEntry kvn_comment(std::string text) {
    return KvnComment{std::move(text)};
}
inline KvnEntry kvn_section_start(std::string name) {
    return KvnSection{name + "_START"};
}
inline KvnEntry kvn_section_stop(std::string name) {
    return KvnSection{name + "_STOP"};
}
inline KvnEntry kvn_blank() { return KvnBlank{}; }

/// Push optional value
inline void push_opt(std::vector<KvnEntry>& e, const std::string& k, const std::optional<std::string>& v) {
    if (v) e.push_back(kvn_kv(k, *v));
}
inline void push_opt_num(std::vector<KvnEntry>& e, const std::string& k, const std::optional<double>& v) {
    if (v) e.push_back(kvn_kv(k, std::to_string(*v)));
}

} // namespace ccsds
