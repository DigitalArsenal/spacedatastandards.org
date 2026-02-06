#include "ccsds/xml_sax_parser.h"
#include <algorithm>
#include <cctype>

namespace ccsds {

static std::string to_lower(std::string_view s) {
    std::string result(s);
    std::transform(result.begin(), result.end(), result.begin(), ::tolower);
    return result;
}

static std::string decode_entities(std::string_view s) {
    std::string result;
    result.reserve(s.size());
    for (size_t i = 0; i < s.size(); ++i) {
        if (s[i] == '&') {
            if (s.substr(i, 5) == "&amp;") { result += '&'; i += 4; }
            else if (s.substr(i, 4) == "&lt;") { result += '<'; i += 3; }
            else if (s.substr(i, 4) == "&gt;") { result += '>'; i += 3; }
            else if (s.substr(i, 6) == "&quot;") { result += '"'; i += 5; }
            else if (s.substr(i, 6) == "&apos;") { result += '\''; i += 5; }
            else result += s[i];
        } else {
            result += s[i];
        }
    }
    return result;
}

static std::string trim(const std::string& s) {
    auto start = s.find_first_not_of(" \t\r\n");
    if (start == std::string::npos) return {};
    auto end = s.find_last_not_of(" \t\r\n");
    return s.substr(start, end - start + 1);
}

XmlElement parse_xml_string(std::string_view text) {
    size_t pos = 0;
    size_t len = text.size();
    std::vector<XmlElement*> stack;
    XmlElement root;
    root.tag = "__root__";
    stack.push_back(&root);

    auto current = [&]() -> XmlElement* { return stack.back(); };

    while (pos < len) {
        auto next_lt = text.find('<', pos);
        if (next_lt == std::string_view::npos) {
            std::string rest = trim(decode_entities(std::string(text.substr(pos))));
            if (!rest.empty()) {
                current()->text += rest;
            }
            break;
        }

        if (next_lt > pos) {
            std::string content = decode_entities(std::string(text.substr(pos, next_lt - pos)));
            std::string trimmed = trim(content);
            if (!trimmed.empty()) {
                current()->text += content;
            }
        }

        pos = next_lt + 1;
        if (pos >= len) break;

        // Processing instruction
        if (text[pos] == '?') {
            auto end_pi = text.find("?>", pos);
            if (end_pi == std::string_view::npos) break;
            pos = end_pi + 2;
            continue;
        }

        // Comment
        if (pos + 2 < len && text.substr(pos, 3) == "!--") {
            auto end_comment = text.find("-->", pos + 3);
            if (end_comment == std::string_view::npos) break;
            pos = end_comment + 3;
            continue;
        }

        // DOCTYPE
        if (text[pos] == '!') {
            int depth = 1;
            pos++;
            while (pos < len && depth > 0) {
                if (text[pos] == '<') depth++;
                else if (text[pos] == '>') depth--;
                pos++;
            }
            continue;
        }

        // Closing tag
        if (text[pos] == '/') {
            pos++;
            while (pos < len && text[pos] != '>') pos++;
            pos++;
            if (stack.size() > 1) stack.pop_back();
            continue;
        }

        // Opening or self-closing tag
        size_t tag_start = pos;
        bool in_quote = false;
        char quote_char = 0;
        while (pos < len) {
            if (in_quote) {
                if (text[pos] == quote_char) in_quote = false;
            } else {
                if (text[pos] == '"' || text[pos] == '\'') {
                    in_quote = true;
                    quote_char = text[pos];
                }
                if (text[pos] == '>') {
                    break;
                }
            }
            pos++;
        }

        std::string tag_content(text.substr(tag_start, pos - tag_start));
        pos++; // skip '>'

        bool self_closing = !tag_content.empty() && tag_content.back() == '/';
        if (self_closing) tag_content.pop_back();

        while (!tag_content.empty() && std::isspace(tag_content.back())) tag_content.pop_back();

        size_t name_end = tag_content.find_first_of(" \t\r\n");
        std::string tag_name;
        std::string remaining;
        if (name_end != std::string::npos) {
            tag_name = tag_content.substr(0, name_end);
            remaining = tag_content.substr(name_end);
        } else {
            tag_name = tag_content;
        }

        XmlElement elem;
        elem.tag = tag_name;

        if (!remaining.empty()) {
            size_t apos = 0;
            while (apos < remaining.size()) {
                while (apos < remaining.size() && std::isspace(remaining[apos])) apos++;
                if (apos >= remaining.size()) break;

                size_t eq = remaining.find('=', apos);
                if (eq == std::string::npos) break;

                std::string attr_name = trim(remaining.substr(apos, eq - apos));
                apos = eq + 1;
                while (apos < remaining.size() && std::isspace(remaining[apos])) apos++;
                if (apos >= remaining.size()) break;

                char q = remaining[apos];
                if (q != '"' && q != '\'') break;
                apos++;
                size_t end_q = remaining.find(q, apos);
                if (end_q == std::string::npos) break;

                std::string attr_val = decode_entities(remaining.substr(apos, end_q - apos));
                elem.attributes[attr_name] = attr_val;
                apos = end_q + 1;
            }
        }

        current()->children.push_back(std::move(elem));

        if (!self_closing) {
            stack.push_back(&current()->children.back());
        }
    }

    if (root.children.size() == 1) {
        return std::move(root.children[0]);
    }
    return root;
}

static void collect_descendants(const XmlElement& elem, const std::string& tag_lower, std::vector<const XmlElement*>& out) {
    for (const auto& child : elem.children) {
        std::string child_lower = to_lower(child.tag);
        if (child_lower == tag_lower) {
            out.push_back(&child);
        } else {
            auto colon = child_lower.rfind(':');
            if (colon != std::string::npos && child_lower.substr(colon + 1) == tag_lower) {
                out.push_back(&child);
            }
        }
        collect_descendants(child, tag_lower, out);
    }
}

std::vector<const XmlElement*> find_elements(const XmlElement& root, std::string_view tag_path) {
    std::vector<const XmlElement*> candidates = {&root};

    size_t start = 0;
    while (start < tag_path.size()) {
        auto slash = tag_path.find('/', start);
        std::string part;
        if (slash != std::string_view::npos) {
            part = to_lower(tag_path.substr(start, slash - start));
            start = slash + 1;
        } else {
            part = to_lower(tag_path.substr(start));
            start = tag_path.size();
        }
        if (part.empty()) continue;

        std::vector<const XmlElement*> next;
        for (auto* c : candidates) {
            collect_descendants(*c, part, next);
        }
        candidates = std::move(next);
    }

    return candidates;
}

const XmlElement* find_child(const XmlElement& parent, std::string_view tag) {
    std::string lower = to_lower(tag);
    for (const auto& child : parent.children) {
        std::string child_lower = to_lower(child.tag);
        if (child_lower == lower) return &child;
        auto colon = child_lower.rfind(':');
        if (colon != std::string::npos && child_lower.substr(colon + 1) == lower) {
            return &child;
        }
    }
    return nullptr;
}

std::optional<std::string> get_text_content(const XmlElement& elem) {
    if (elem.text.empty()) return std::nullopt;
    return elem.text;
}

std::optional<std::string> get_child_text(const XmlElement& parent, std::string_view tag) {
    auto* child = find_child(parent, tag);
    if (!child) return std::nullopt;
    return get_text_content(*child);
}

std::optional<std::string> get_attribute(const XmlElement& elem, std::string_view name) {
    auto it = elem.attributes.find(std::string(name));
    if (it == elem.attributes.end()) return std::nullopt;
    return it->second;
}

} // namespace ccsds
