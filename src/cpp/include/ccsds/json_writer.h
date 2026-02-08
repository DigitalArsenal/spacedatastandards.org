#pragma once
#include "ccsds/json_parser.h"
#include <string>
#include <sstream>

namespace ccsds {

struct JsonWriterOptions {
    int indent = 2;
};

/// Write a JsonValue tree back to a JSON string
std::string write_json(const JsonValue& val, const JsonWriterOptions& opts = {});

/// Convenience builders
inline JsonValue json_string(const std::string& s) {
    JsonValue v;
    v.type = JsonType::STRING;
    v.str = s;
    return v;
}

inline JsonValue json_number(double n) {
    JsonValue v;
    v.type = JsonType::NUMBER;
    v.num = n;
    return v;
}

inline JsonValue json_bool(bool b) {
    JsonValue v;
    v.type = JsonType::BOOL;
    v.boolean = b;
    return v;
}

inline JsonValue json_null() {
    return JsonValue{};
}

inline JsonValue json_array(std::vector<JsonValue> items = {}) {
    JsonValue v;
    v.type = JsonType::ARRAY;
    v.arr = std::move(items);
    return v;
}

inline JsonValue json_object(std::map<std::string, JsonValue> fields = {}) {
    JsonValue v;
    v.type = JsonType::OBJECT;
    v.obj = std::move(fields);
    return v;
}

} // namespace ccsds
