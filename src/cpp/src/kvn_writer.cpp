#include "ccsds/kvn_writer.h"
#include <sstream>
#include <iomanip>

namespace ccsds {

std::string write_kvn(const std::vector<KvnEntry>& entries, int pad_keyword) {
    std::ostringstream out;
    bool first = true;

    for (const auto& entry : entries) {
        if (!first) out << '\n';
        first = false;

        std::visit([&](auto&& arg) {
            using T = std::decay_t<decltype(arg)>;
            if constexpr (std::is_same_v<T, KvnBlank>) {
                // empty line
            } else if constexpr (std::is_same_v<T, KvnComment>) {
                out << "COMMENT " << arg.text;
            } else if constexpr (std::is_same_v<T, KvnSection>) {
                out << arg.marker;
            } else if constexpr (std::is_same_v<T, KvnKV>) {
                if (pad_keyword > 0) {
                    out << std::left << std::setw(pad_keyword) << arg.keyword;
                } else {
                    out << arg.keyword;
                }
                out << " = " << arg.value;
            }
        }, entry);
    }

    return out.str();
}

} // namespace ccsds
