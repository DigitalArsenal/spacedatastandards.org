#include "ccsds/json_parser.h"
#include <cstring>
#include <cmath>

namespace ccsds {

namespace {

struct Parser {
    const char* p;
    const char* end;

    Parser(std::string_view text) : p(text.data()), end(text.data() + text.size()) {}

    void skip_ws() {
        while (p < end && (*p == ' ' || *p == '\t' || *p == '\r' || *p == '\n')) ++p;
    }

    char peek() {
        skip_ws();
        if (p >= end) throw std::runtime_error("Unexpected end of JSON");
        return *p;
    }

    char next() {
        skip_ws();
        if (p >= end) throw std::runtime_error("Unexpected end of JSON");
        return *p++;
    }

    void expect(char c) {
        char got = next();
        if (got != c) {
            throw std::runtime_error(std::string("Expected '") + c + "' but got '" + got + "'");
        }
    }

    std::string parse_string_value() {
        expect('"');
        std::string result;
        while (p < end && *p != '"') {
            if (*p == '\\') {
                ++p;
                if (p >= end) throw std::runtime_error("Unterminated string escape");
                switch (*p) {
                    case '"': result += '"'; break;
                    case '\\': result += '\\'; break;
                    case '/': result += '/'; break;
                    case 'b': result += '\b'; break;
                    case 'f': result += '\f'; break;
                    case 'n': result += '\n'; break;
                    case 'r': result += '\r'; break;
                    case 't': result += '\t'; break;
                    case 'u': {
                        ++p;
                        if (p + 4 > end) throw std::runtime_error("Invalid unicode escape");
                        unsigned code = 0;
                        for (int i = 0; i < 4; i++) {
                            code <<= 4;
                            char h = p[i];
                            if (h >= '0' && h <= '9') code |= (h - '0');
                            else if (h >= 'a' && h <= 'f') code |= (h - 'a' + 10);
                            else if (h >= 'A' && h <= 'F') code |= (h - 'A' + 10);
                            else throw std::runtime_error("Invalid hex in unicode escape");
                        }
                        p += 3; // will be incremented below
                        if (code < 0x80) {
                            result += static_cast<char>(code);
                        } else if (code < 0x800) {
                            result += static_cast<char>(0xC0 | (code >> 6));
                            result += static_cast<char>(0x80 | (code & 0x3F));
                        } else {
                            result += static_cast<char>(0xE0 | (code >> 12));
                            result += static_cast<char>(0x80 | ((code >> 6) & 0x3F));
                            result += static_cast<char>(0x80 | (code & 0x3F));
                        }
                        break;
                    }
                    default: result += *p; break;
                }
            } else {
                result += *p;
            }
            ++p;
        }
        if (p >= end) throw std::runtime_error("Unterminated string");
        ++p; // skip closing quote
        return result;
    }

    JsonValue parse_value() {
        char c = peek();
        if (c == '"') return parse_string();
        if (c == '{') return parse_object();
        if (c == '[') return parse_array();
        if (c == 't' || c == 'f') return parse_bool();
        if (c == 'n') return parse_null();
        if (c == '-' || (c >= '0' && c <= '9')) return parse_number();
        throw std::runtime_error(std::string("Unexpected character: '") + c + "'");
    }

    JsonValue parse_string() {
        JsonValue v;
        v.type = JsonType::STRING;
        v.str = parse_string_value();
        return v;
    }

    JsonValue parse_number() {
        skip_ws();
        const char* start = p;
        if (*p == '-') ++p;
        while (p < end && *p >= '0' && *p <= '9') ++p;
        if (p < end && *p == '.') {
            ++p;
            while (p < end && *p >= '0' && *p <= '9') ++p;
        }
        if (p < end && (*p == 'e' || *p == 'E')) {
            ++p;
            if (p < end && (*p == '+' || *p == '-')) ++p;
            while (p < end && *p >= '0' && *p <= '9') ++p;
        }
        JsonValue v;
        v.type = JsonType::NUMBER;
        std::string numstr(start, p);
        v.num = std::stod(numstr);
        return v;
    }

    JsonValue parse_bool() {
        skip_ws();
        JsonValue v;
        v.type = JsonType::BOOL;
        if (end - p >= 4 && std::strncmp(p, "true", 4) == 0) {
            v.boolean = true;
            p += 4;
        } else if (end - p >= 5 && std::strncmp(p, "false", 5) == 0) {
            v.boolean = false;
            p += 5;
        } else {
            throw std::runtime_error("Invalid boolean");
        }
        return v;
    }

    JsonValue parse_null() {
        skip_ws();
        if (end - p >= 4 && std::strncmp(p, "null", 4) == 0) {
            p += 4;
            return JsonValue{};
        }
        throw std::runtime_error("Invalid null");
    }

    JsonValue parse_array() {
        expect('[');
        JsonValue v;
        v.type = JsonType::ARRAY;
        if (peek() == ']') { ++p; return v; }
        while (true) {
            v.arr.push_back(parse_value());
            char c = next();
            if (c == ']') break;
            if (c != ',') throw std::runtime_error("Expected ',' or ']' in array");
        }
        return v;
    }

    JsonValue parse_object() {
        expect('{');
        JsonValue v;
        v.type = JsonType::OBJECT;
        if (peek() == '}') { ++p; return v; }
        while (true) {
            std::string key = parse_string_value();
            expect(':');
            v.obj[key] = parse_value();
            char c = next();
            if (c == '}') break;
            if (c != ',') throw std::runtime_error("Expected ',' or '}' in object");
        }
        return v;
    }
};

} // anonymous namespace

JsonValue parse_json_string(std::string_view text) {
    Parser parser(text);
    return parser.parse_value();
}

} // namespace ccsds
