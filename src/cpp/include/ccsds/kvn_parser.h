#pragma once
#include <string>
#include <string_view>
#include <vector>
#include <optional>
#include <variant>

namespace ccsds {

/// A single KVN token
struct KvnToken {
    enum Type { KV, COMMENT, SECTION };
    Type type;
    std::string keyword;  // For KV: keyword; For SECTION: marker
    std::string value;    // For KV: value; For COMMENT: text
};

/// A named block of tokens delimited by *_START / *_STOP
struct KvnBlock {
    std::string name;
    std::vector<KvnToken> tokens;
};

/// Tokenize raw KVN text
std::vector<KvnToken> parse_kvn(std::string_view text);

/// Group tokens into blocks
std::vector<KvnBlock> parse_kvn_blocks(const std::vector<KvnToken>& tokens);

/// Get value for a keyword
std::optional<std::string> get_kvn_value(const std::vector<KvnToken>& tokens, std::string_view keyword);

/// Get all values for a keyword
std::vector<std::string> get_kvn_values(const std::vector<KvnToken>& tokens, std::string_view keyword);

/// Get all comments
std::vector<std::string> get_kvn_comments(const std::vector<KvnToken>& tokens);

} // namespace ccsds
