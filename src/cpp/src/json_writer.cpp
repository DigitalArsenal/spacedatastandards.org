#include "ccsds/json_writer.h"
#include <cmath>
#include <iomanip>
#include <sstream>

namespace ccsds {

namespace {

void escape_string(std::ostream& os, const std::string& s) {
    os << '"';
    for (char c : s) {
        switch (c) {
            case '"': os << "\\\""; break;
            case '\\': os << "\\\\"; break;
            case '\b': os << "\\b"; break;
            case '\f': os << "\\f"; break;
            case '\n': os << "\\n"; break;
            case '\r': os << "\\r"; break;
            case '\t': os << "\\t"; break;
            default:
                if (static_cast<unsigned char>(c) < 0x20) {
                    os << "\\u" << std::hex << std::setfill('0') << std::setw(4) << static_cast<int>(c);
                    os << std::dec;
                } else {
                    os << c;
                }
        }
    }
    os << '"';
}

void write_indent(std::ostream& os, int level, int indent) {
    for (int i = 0; i < level * indent; i++) os << ' ';
}

void write_value(std::ostream& os, const JsonValue& val, int level, int indent) {
    switch (val.type) {
        case JsonType::NUL:
            os << "null";
            break;
        case JsonType::BOOL:
            os << (val.boolean ? "true" : "false");
            break;
        case JsonType::NUMBER: {
            if (std::floor(val.num) == val.num && std::abs(val.num) < 1e15) {
                os << std::fixed << std::setprecision(0) << val.num;
            } else {
                os << std::setprecision(15) << val.num;
            }
            break;
        }
        case JsonType::STRING:
            escape_string(os, val.str);
            break;
        case JsonType::ARRAY:
            if (val.arr.empty()) {
                os << "[]";
            } else {
                os << "[\n";
                for (size_t i = 0; i < val.arr.size(); i++) {
                    write_indent(os, level + 1, indent);
                    write_value(os, val.arr[i], level + 1, indent);
                    if (i + 1 < val.arr.size()) os << ',';
                    os << '\n';
                }
                write_indent(os, level, indent);
                os << ']';
            }
            break;
        case JsonType::OBJECT:
            if (val.obj.empty()) {
                os << "{}";
            } else {
                os << "{\n";
                size_t idx = 0;
                for (const auto& [k, v] : val.obj) {
                    write_indent(os, level + 1, indent);
                    escape_string(os, k);
                    os << ": ";
                    write_value(os, v, level + 1, indent);
                    if (++idx < val.obj.size()) os << ',';
                    os << '\n';
                }
                write_indent(os, level, indent);
                os << '}';
            }
            break;
    }
}

} // anonymous namespace

std::string write_json(const JsonValue& val, const JsonWriterOptions& opts) {
    std::ostringstream os;
    write_value(os, val, 0, opts.indent);
    return os.str();
}

} // namespace ccsds
