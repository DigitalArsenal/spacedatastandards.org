#include "ccsds/xml_writer.h"
#include <sstream>

namespace ccsds {

static std::string escape_text(const std::string& s) {
    std::string result;
    result.reserve(s.size());
    for (char c : s) {
        switch (c) {
            case '&': result += "&amp;"; break;
            case '<': result += "&lt;"; break;
            case '>': result += "&gt;"; break;
            default: result += c;
        }
    }
    return result;
}

static std::string escape_attr(const std::string& s) {
    std::string result;
    result.reserve(s.size());
    for (char c : s) {
        switch (c) {
            case '&': result += "&amp;"; break;
            case '<': result += "&lt;"; break;
            case '>': result += "&gt;"; break;
            case '"': result += "&quot;"; break;
            default: result += c;
        }
    }
    return result;
}

static void write_element(const XmlElement& elem, int depth, std::string& out, int indent_size) {
    std::string indent(depth * indent_size, ' ');
    std::string nl = indent_size > 0 ? "\n" : "";

    out += indent + "<" + elem.tag;

    for (const auto& [key, val] : elem.attributes) {
        out += " " + key + "=\"" + escape_attr(val) + "\"";
    }

    bool has_children = !elem.children.empty();
    bool has_text = !elem.text.empty();

    if (!has_children && !has_text) {
        out += "/>" + nl;
        return;
    }

    out += ">";

    if (!has_children && has_text) {
        out += escape_text(elem.text);
        out += "</" + elem.tag + ">" + nl;
        return;
    }

    out += nl;

    if (has_text) {
        std::string child_indent((depth + 1) * indent_size, ' ');
        out += child_indent + escape_text(elem.text) + nl;
    }

    for (const auto& child : elem.children) {
        write_element(child, depth + 1, out, indent_size);
    }

    out += indent + "</" + elem.tag + ">" + nl;
}

std::string write_xml(const XmlElement& root, const XmlWriterOptions& opts) {
    std::string result;
    if (opts.declaration) {
        result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        if (opts.indent > 0) result += "\n";
    }
    write_element(root, 0, result, opts.indent);
    return result;
}

} // namespace ccsds
