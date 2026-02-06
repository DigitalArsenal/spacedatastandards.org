#include "ccsds/kvn_parser.h"
#include <regex>
#include <sstream>
#include <algorithm>

namespace ccsds {

static std::string trim(std::string_view s) {
    auto start = s.find_first_not_of(" \t\r\n");
    if (start == std::string_view::npos) return {};
    auto end = s.find_last_not_of(" \t\r\n");
    return std::string(s.substr(start, end - start + 1));
}

static bool is_section_marker(const std::string& s) {
    static const std::regex re("^[A-Z][A-Z0-9_]*_(START|STOP)$");
    return std::regex_match(s, re);
}

std::vector<KvnToken> parse_kvn(std::string_view text) {
    std::vector<KvnToken> tokens;
    std::istringstream stream{std::string(text)};
    std::string raw;

    while (std::getline(stream, raw)) {
        if (!raw.empty() && raw.back() == '\r') raw.pop_back();
        std::string trimmed = trim(raw);

        if (trimmed.empty()) continue;

        if (trimmed.substr(0, 7) == "COMMENT") {
            std::string comment_text = trim(trimmed.substr(7));
            tokens.push_back({KvnToken::COMMENT, {}, std::move(comment_text)});
            continue;
        }

        if (is_section_marker(trimmed)) {
            tokens.push_back({KvnToken::SECTION, trimmed, {}});
            continue;
        }

        auto eq_pos = trimmed.find('=');
        if (eq_pos != std::string::npos) {
            std::string keyword = trim(trimmed.substr(0, eq_pos));
            std::string value = trim(trimmed.substr(eq_pos + 1));
            tokens.push_back({KvnToken::KV, std::move(keyword), std::move(value)});
            continue;
        }

        if (!tokens.empty() && tokens.back().type == KvnToken::KV) {
            tokens.back().value += " " + trimmed;
            continue;
        }

        tokens.push_back({KvnToken::COMMENT, {}, trimmed});
    }

    return tokens;
}

std::vector<KvnBlock> parse_kvn_blocks(const std::vector<KvnToken>& tokens) {
    std::vector<KvnBlock> blocks;
    KvnBlock current{"HEADER", {}};

    for (const auto& token : tokens) {
        if (token.type == KvnToken::SECTION) {
            const auto& marker = token.keyword;
            if (marker.size() > 6 && marker.substr(marker.size() - 6) == "_START") {
                if (!current.tokens.empty()) {
                    blocks.push_back(std::move(current));
                }
                std::string name = marker.substr(0, marker.size() - 6);
                current = KvnBlock{std::move(name), {}};
            } else if (marker.size() > 5 && marker.substr(marker.size() - 5) == "_STOP") {
                blocks.push_back(std::move(current));
                current = KvnBlock{"HEADER", {}};
            }
        } else {
            current.tokens.push_back(token);
        }
    }

    if (!current.tokens.empty()) {
        blocks.push_back(std::move(current));
    }

    return blocks;
}

std::optional<std::string> get_kvn_value(const std::vector<KvnToken>& tokens, std::string_view keyword) {
    for (const auto& t : tokens) {
        if (t.type == KvnToken::KV && t.keyword == keyword) {
            return t.value;
        }
    }
    return std::nullopt;
}

std::vector<std::string> get_kvn_values(const std::vector<KvnToken>& tokens, std::string_view keyword) {
    std::vector<std::string> results;
    for (const auto& t : tokens) {
        if (t.type == KvnToken::KV && t.keyword == keyword) {
            results.push_back(t.value);
        }
    }
    return results;
}

std::vector<std::string> get_kvn_comments(const std::vector<KvnToken>& tokens) {
    std::vector<std::string> results;
    for (const auto& t : tokens) {
        if (t.type == KvnToken::COMMENT) {
            results.push_back(t.value);
        }
    }
    return results;
}

} // namespace ccsds
