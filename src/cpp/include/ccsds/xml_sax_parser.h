#pragma once
#include <string>
#include <string_view>
#include <vector>
#include <map>
#include <optional>
#include <memory>
#include <algorithm>

namespace ccsds {

/// XML element node
struct XmlElement {
    std::string tag;
    std::map<std::string, std::string> attributes;
    std::vector<XmlElement> children;
    std::string text;
};

/// Parse XML string into element tree
XmlElement parse_xml_string(std::string_view text);

/// Find descendant elements by slash-separated tag path
std::vector<const XmlElement*> find_elements(const XmlElement& root, std::string_view tag_path);

/// Find direct child by tag name (case-insensitive)
const XmlElement* find_child(const XmlElement& parent, std::string_view tag);

/// Get text content of element
std::optional<std::string> get_text_content(const XmlElement& elem);

/// Get child text
std::optional<std::string> get_child_text(const XmlElement& parent, std::string_view tag);

/// Get attribute value
std::optional<std::string> get_attribute(const XmlElement& elem, std::string_view name);

} // namespace ccsds
