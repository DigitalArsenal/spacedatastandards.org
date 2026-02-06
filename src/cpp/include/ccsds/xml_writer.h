#pragma once
#include "ccsds/xml_sax_parser.h"
#include <string>

namespace ccsds {

struct XmlWriterOptions {
    int indent = 2;
    bool declaration = true;
};

/// Write XML element tree to string
std::string write_xml(const XmlElement& root, const XmlWriterOptions& opts = {});

/// Convenience: create an element
inline XmlElement xml_elem(std::string tag,
                           std::map<std::string, std::string> attrs = {},
                           std::vector<XmlElement> children = {},
                           std::string text = {}) {
    return XmlElement{std::move(tag), std::move(attrs), std::move(children), std::move(text)};
}

} // namespace ccsds
