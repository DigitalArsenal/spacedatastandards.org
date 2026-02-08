#pragma once
#include <string>
#include <string_view>
#include <vector>
#include <map>
#include <optional>
#include <stdexcept>

namespace ccsds {

enum class JsonType { NUL, BOOL, NUMBER, STRING, ARRAY, OBJECT };

struct JsonValue {
    JsonType type = JsonType::NUL;
    double num = 0;
    bool boolean = false;
    std::string str;
    std::vector<JsonValue> arr;
    std::map<std::string, JsonValue> obj;

    bool is_null() const { return type == JsonType::NUL; }
    bool is_bool() const { return type == JsonType::BOOL; }
    bool is_number() const { return type == JsonType::NUMBER; }
    bool is_string() const { return type == JsonType::STRING; }
    bool is_array() const { return type == JsonType::ARRAY; }
    bool is_object() const { return type == JsonType::OBJECT; }

    const std::string& as_string() const { return str; }
    double as_number() const { return num; }
    bool as_bool() const { return boolean; }
    const std::vector<JsonValue>& as_array() const { return arr; }
    const std::map<std::string, JsonValue>& as_object() const { return obj; }

    // Convenience accessors
    const JsonValue* get(const std::string& key) const {
        if (type != JsonType::OBJECT) return nullptr;
        auto it = obj.find(key);
        return it != obj.end() ? &it->second : nullptr;
    }

    std::optional<std::string> get_string(const std::string& key) const {
        auto* v = get(key);
        if (!v || !v->is_string()) return std::nullopt;
        return v->str;
    }

    std::optional<double> get_number(const std::string& key) const {
        auto* v = get(key);
        if (!v || !v->is_number()) return std::nullopt;
        return v->num;
    }

    std::optional<bool> get_bool(const std::string& key) const {
        auto* v = get(key);
        if (!v || !v->is_bool()) return std::nullopt;
        return v->boolean;
    }

    const std::vector<JsonValue>* get_array(const std::string& key) const {
        auto* v = get(key);
        if (!v || !v->is_array()) return nullptr;
        return &v->arr;
    }

    const JsonValue* get_object(const std::string& key) const {
        auto* v = get(key);
        if (!v || !v->is_object()) return nullptr;
        return v;
    }

    size_t size() const {
        if (type == JsonType::ARRAY) return arr.size();
        if (type == JsonType::OBJECT) return obj.size();
        return 0;
    }
};

/// Parse a JSON string into a JsonValue tree
JsonValue parse_json_string(std::string_view text);

} // namespace ccsds
