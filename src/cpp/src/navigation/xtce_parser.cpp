#include "ccsds/navigation/xtce_parser.h"
#include "ccsds/xml_sax_parser.h"
#include "ccsds/xml_writer.h"
#include <stdexcept>
#include <sstream>
#include <algorithm>
#include <cctype>

namespace ccsds {

// ============================================================================
// STRING / ENUM HELPERS
// ============================================================================

static std::string str_upper(const std::string& s) {
    std::string r = s;
    std::transform(r.begin(), r.end(), r.begin(), ::toupper);
    return r;
}

static std::string str_lower(const std::string& s) {
    std::string r = s;
    std::transform(r.begin(), r.end(), r.begin(), ::tolower);
    return r;
}

static std::string dtos(double v) {
    std::ostringstream os;
    os << v;
    return os.str();
}

static std::string i64tos(int64_t v) { return std::to_string(v); }
static std::string u32tos(uint32_t v) { return std::to_string(v); }
static std::string u16tos(uint16_t v) { return std::to_string(v); }
static std::string u8tos(uint8_t v) { return std::to_string(static_cast<unsigned>(v)); }

static double to_double(const std::string& s) { return std::stod(s); }
static int64_t to_i64(const std::string& s) { return std::stoll(s); }
static uint32_t to_u32(const std::string& s) { return static_cast<uint32_t>(std::stoul(s)); }
static uint16_t to_u16(const std::string& s) { return static_cast<uint16_t>(std::stoul(s)); }
static uint8_t to_u8(const std::string& s) { return static_cast<uint8_t>(std::stoul(s)); }
static int32_t to_i32(const std::string& s) { return static_cast<int32_t>(std::stol(s)); }

// --- Enum parse/write helpers ---

static ComparisonOperator parse_comparison_op(const std::string& s) {
    auto u = str_upper(s);
    if (u == "==" || u == "EQ") return ComparisonOperator::EQ;
    if (u == "!=" || u == "NE") return ComparisonOperator::NE;
    if (u == ">" || u == "GT") return ComparisonOperator::GT;
    if (u == "<" || u == "LT") return ComparisonOperator::LT;
    if (u == ">=" || u == "GE") return ComparisonOperator::GE;
    if (u == "<=" || u == "LE") return ComparisonOperator::LE;
    if (u == "STARTS_WITH") return ComparisonOperator::STARTS_WITH;
    if (u == "ENDS_WITH") return ComparisonOperator::ENDS_WITH;
    if (u == "CONTAINS") return ComparisonOperator::CONTAINS;
    if (u == "NOT_STARTS_WITH") return ComparisonOperator::NOT_STARTS_WITH;
    if (u == "NOT_ENDS_WITH") return ComparisonOperator::NOT_ENDS_WITH;
    if (u == "NOT_CONTAINS") return ComparisonOperator::NOT_CONTAINS;
    return ComparisonOperator::EQ;
}

static std::string write_comparison_op(ComparisonOperator op) {
    switch (op) {
        case ComparisonOperator::EQ: return "==";
        case ComparisonOperator::NE: return "!=";
        case ComparisonOperator::GT: return "&gt;";
        case ComparisonOperator::LT: return "&lt;";
        case ComparisonOperator::GE: return "&gt;=";
        case ComparisonOperator::LE: return "&lt;=";
        case ComparisonOperator::STARTS_WITH: return "STARTS_WITH";
        case ComparisonOperator::ENDS_WITH: return "ENDS_WITH";
        case ComparisonOperator::CONTAINS: return "CONTAINS";
        case ComparisonOperator::NOT_STARTS_WITH: return "NOT_STARTS_WITH";
        case ComparisonOperator::NOT_ENDS_WITH: return "NOT_ENDS_WITH";
        case ComparisonOperator::NOT_CONTAINS: return "NOT_CONTAINS";
    }
    return "==";
}

static DataSourceType parse_data_source(const std::string& s) {
    auto u = str_lower(s);
    if (u == "telemetered") return DataSourceType::TELEMETERED;
    if (u == "derived") return DataSourceType::DERIVED;
    if (u == "constant") return DataSourceType::CONSTANT;
    if (u == "local") return DataSourceType::LOCAL;
    if (u == "ground") return DataSourceType::GROUND;
    return DataSourceType::TELEMETERED;
}

static std::string write_data_source(DataSourceType t) {
    switch (t) {
        case DataSourceType::TELEMETERED: return "telemetered";
        case DataSourceType::DERIVED: return "derived";
        case DataSourceType::CONSTANT: return "constant";
        case DataSourceType::LOCAL: return "local";
        case DataSourceType::GROUND: return "ground";
    }
    return "telemetered";
}

static ByteOrderType parse_byte_order(const std::string& s) {
    auto u = str_lower(s);
    if (u == "littleendian" || u == "little_endian") return ByteOrderType::LITTLE_ENDIAN;
    return ByteOrderType::BIG_ENDIAN;
}

static std::string write_byte_order(ByteOrderType t) {
    return t == ByteOrderType::LITTLE_ENDIAN ? "littleEndian" : "bigEndian";
}

static IntegerEncodingType parse_int_encoding(const std::string& s) {
    auto u = str_lower(s);
    if (u == "unsigned") return IntegerEncodingType::UNSIGNED;
    if (u == "twoscomplement" || u == "twos_complement") return IntegerEncodingType::TWOS_COMPLEMENT;
    if (u == "signmagnitude" || u == "sign_magnitude") return IntegerEncodingType::SIGN_MAGNITUDE;
    if (u == "onescomplement" || u == "ones_complement") return IntegerEncodingType::ONES_COMPLEMENT;
    if (u == "bcd") return IntegerEncodingType::BCD;
    if (u == "packedbcd" || u == "packed_bcd") return IntegerEncodingType::PACKED_BCD;
    return IntegerEncodingType::UNSIGNED;
}

static std::string write_int_encoding(IntegerEncodingType t) {
    switch (t) {
        case IntegerEncodingType::UNSIGNED: return "unsigned";
        case IntegerEncodingType::TWOS_COMPLEMENT: return "twosComplement";
        case IntegerEncodingType::SIGN_MAGNITUDE: return "signMagnitude";
        case IntegerEncodingType::ONES_COMPLEMENT: return "onesComplement";
        case IntegerEncodingType::BCD: return "BCD";
        case IntegerEncodingType::PACKED_BCD: return "packedBCD";
    }
    return "unsigned";
}

static FloatEncodingType parse_float_encoding(const std::string& s) {
    auto u = str_lower(s);
    if (u == "ieee754_1985" || u == "ieee754") return FloatEncodingType::IEEE754_1985;
    if (u == "milstd_1750a" || u == "milstd1750a") return FloatEncodingType::MILSTD_1750A;
    if (u == "dec") return FloatEncodingType::DEC;
    if (u == "ibm") return FloatEncodingType::IBM;
    if (u == "ti") return FloatEncodingType::TI;
    return FloatEncodingType::IEEE754_1985;
}

static std::string write_float_encoding(FloatEncodingType t) {
    switch (t) {
        case FloatEncodingType::IEEE754_1985: return "IEEE754_1985";
        case FloatEncodingType::MILSTD_1750A: return "MILSTD_1750A";
        case FloatEncodingType::DEC: return "DEC";
        case FloatEncodingType::IBM: return "IBM";
        case FloatEncodingType::TI: return "TI";
    }
    return "IEEE754_1985";
}

static EpochType parse_epoch(const std::string& s) {
    auto u = str_upper(s);
    if (u == "TAI") return EpochType::TAI;
    if (u == "J2000") return EpochType::J2000;
    if (u == "UNIX") return EpochType::UNIX;
    if (u == "GPS") return EpochType::GPS;
    return EpochType::CUSTOM;
}

static std::string write_epoch(EpochType t) {
    switch (t) {
        case EpochType::TAI: return "TAI";
        case EpochType::J2000: return "J2000";
        case EpochType::UNIX: return "UNIX";
        case EpochType::GPS: return "GPS";
        case EpochType::CUSTOM: return "CUSTOM";
    }
    return "UNIX";
}

static ReferenceLocationType parse_ref_location(const std::string& s) {
    auto u = str_lower(s);
    if (u == "containerstart" || u == "container_start") return ReferenceLocationType::CONTAINER_START;
    if (u == "containerend" || u == "container_end") return ReferenceLocationType::CONTAINER_END;
    if (u == "previousentry" || u == "previous_entry") return ReferenceLocationType::PREVIOUS_ENTRY;
    if (u == "nextentry" || u == "next_entry") return ReferenceLocationType::NEXT_ENTRY;
    return ReferenceLocationType::PREVIOUS_ENTRY;
}

static std::string write_ref_location(ReferenceLocationType t) {
    switch (t) {
        case ReferenceLocationType::CONTAINER_START: return "containerStart";
        case ReferenceLocationType::CONTAINER_END: return "containerEnd";
        case ReferenceLocationType::PREVIOUS_ENTRY: return "previousEntry";
        case ReferenceLocationType::NEXT_ENTRY: return "nextEntry";
    }
    return "previousEntry";
}

static VerifierType parse_verifier_type(const std::string& s) {
    auto u = str_lower(s);
    if (u == "start") return VerifierType::START;
    if (u == "progress") return VerifierType::PROGRESS;
    if (u == "complete") return VerifierType::COMPLETE;
    if (u == "failed") return VerifierType::FAILED;
    return VerifierType::COMPLETE;
}

static AlarmSeverityType parse_alarm_severity(const std::string& s) {
    auto u = str_lower(s);
    if (u == "watch") return AlarmSeverityType::WATCH;
    if (u == "warning") return AlarmSeverityType::WARNING;
    if (u == "distress") return AlarmSeverityType::DISTRESS;
    if (u == "critical") return AlarmSeverityType::CRITICAL;
    if (u == "severe") return AlarmSeverityType::SEVERE;
    return AlarmSeverityType::NORMAL;
}

static std::string write_alarm_severity(AlarmSeverityType t) {
    switch (t) {
        case AlarmSeverityType::NORMAL: return "normal";
        case AlarmSeverityType::WATCH: return "watch";
        case AlarmSeverityType::WARNING: return "warning";
        case AlarmSeverityType::DISTRESS: return "distress";
        case AlarmSeverityType::CRITICAL: return "critical";
        case AlarmSeverityType::SEVERE: return "severe";
    }
    return "normal";
}

static BooleanOperatorType parse_bool_op(const std::string& s) {
    auto u = str_upper(s);
    if (u == "OR") return BooleanOperatorType::BOOL_OR;
    if (u == "XOR") return BooleanOperatorType::BOOL_XOR;
    return BooleanOperatorType::BOOL_AND;
}

static ErrorDetectionType parse_error_detection(const std::string& s) {
    auto u = str_upper(s);
    if (u == "CRC") return ErrorDetectionType::CRC;
    if (u == "CHECKSUM") return ErrorDetectionType::CHECKSUM;
    if (u == "PARITY") return ErrorDetectionType::PARITY;
    return ErrorDetectionType::NONE;
}

static RateBasisType parse_rate_basis(const std::string& s) {
    auto u = str_lower(s);
    if (u == "percontainer" || u == "per_container") return RateBasisType::PER_CONTAINER;
    return RateBasisType::PER_SECOND;
}

// ============================================================================
// XML PARSE HELPERS
// ============================================================================

static XtceIntegerDataEncoding parse_int_data_enc(const XmlElement& el) {
    XtceIntegerDataEncoding enc;
    auto sb = get_attribute(el, "sizeInBits");
    if (sb) enc.SIZE_IN_BITS = to_u16(*sb);
    auto bo = get_attribute(el, "byteOrder");
    if (bo) enc.BYTE_ORDER = parse_byte_order(*bo);
    auto et = get_attribute(el, "encoding");
    if (et) enc.ENCODING = parse_int_encoding(*et);
    auto dc = get_child_text(el, "DefaultCalibrator");
    if (dc) enc.DEFAULT_CALIBRATOR = *dc;
    return enc;
}

static XtceFloatDataEncoding parse_float_data_enc(const XmlElement& el) {
    XtceFloatDataEncoding enc;
    auto sb = get_attribute(el, "sizeInBits");
    if (sb) enc.SIZE_IN_BITS = to_u16(*sb);
    auto bo = get_attribute(el, "byteOrder");
    if (bo) enc.BYTE_ORDER = parse_byte_order(*bo);
    auto et = get_attribute(el, "encoding");
    if (et) enc.ENCODING = parse_float_encoding(*et);
    return enc;
}

static XtceStringDataEncoding parse_string_data_enc(const XmlElement& el) {
    XtceStringDataEncoding enc;
    auto et = get_attribute(el, "encoding");
    if (et) {
        auto u = str_upper(*et);
        if (u == "US-ASCII" || u == "US_ASCII") enc.ENCODING = StringEncodingType::US_ASCII;
        else if (u == "UTF-8" || u == "UTF_8") enc.ENCODING = StringEncodingType::UTF_8;
        else if (u == "UTF-16" || u == "UTF_16") enc.ENCODING = StringEncodingType::UTF_16;
    }
    auto* sz = find_child(el, "SizeInBits");
    if (sz) {
        auto* fixed = find_child(*sz, "Fixed");
        if (fixed) {
            auto* fv = find_child(*fixed, "FixedValue");
            if (fv && !fv->text.empty()) enc.SIZE_IN_BITS = to_u16(fv->text);
        }
        auto* tc = find_child(*sz, "TerminationChar");
        if (tc) {
            enc.SIZE_TYPE = StringSizeType::TERMINATION_CHAR;
            if (!tc->text.empty()) enc.TERMINATION_CHAR = to_u8(tc->text);
        }
        auto* ls = find_child(*sz, "LeadingSize");
        if (ls) {
            enc.SIZE_TYPE = StringSizeType::LEADING_SIZE;
            auto sb2 = get_attribute(*ls, "sizeInBitsOfSizeTag");
            if (sb2) enc.LEADING_SIZE_BITS = to_u8(*sb2);
        }
    }
    return enc;
}

static XtceBinaryDataEncoding parse_binary_data_enc(const XmlElement& el) {
    XtceBinaryDataEncoding enc;
    auto sb = get_attribute(el, "sizeInBits");
    if (sb) enc.SIZE_IN_BITS = to_u16(*sb);
    auto mx = get_attribute(el, "maxSizeInBits");
    if (mx) enc.MAX_SIZE_IN_BITS = to_u16(*mx);
    return enc;
}

static XtceParameterComparison parse_comparison(const XmlElement& el) {
    XtceParameterComparison c;
    auto pr = get_attribute(el, "parameterRef");
    if (pr) c.PARAMETER_REF = *pr;
    auto op = get_attribute(el, "comparisonOperator");
    if (op) c.OPERATOR = parse_comparison_op(*op);
    auto v = get_attribute(el, "value");
    if (v) c.VALUE = *v;
    auto uc = get_attribute(el, "useCalibratedValue");
    if (uc) c.USE_CALIBRATED_VALUE = (*uc != "false" && *uc != "0");
    return c;
}

static XtceMatchCriteria parse_match_criteria(const XmlElement& el) {
    XtceMatchCriteria mc;
    auto* comp = find_child(el, "Comparison");
    if (comp) mc.COMPARISON = parse_comparison(*comp);
    auto* cl = find_child(el, "ComparisonList");
    if (cl) {
        for (const auto& ch : cl->children) {
            if (str_lower(ch.tag).find("comparison") != std::string::npos)
                mc.COMPARISON_LIST.push_back(parse_comparison(ch));
        }
    }
    auto ca = get_attribute(el, "customAlgorithm");
    if (ca) mc.CUSTOM_ALGORITHM = *ca;
    return mc;
}

static XtceAlarmRange parse_alarm_range(const XmlElement& el) {
    XtceAlarmRange r;
    auto v = get_attribute(el, "minInclusive");
    if (v) r.MIN_INCLUSIVE = to_double(*v);
    v = get_attribute(el, "maxInclusive");
    if (v) r.MAX_INCLUSIVE = to_double(*v);
    v = get_attribute(el, "minExclusive");
    if (v) r.MIN_EXCLUSIVE = to_double(*v);
    v = get_attribute(el, "maxExclusive");
    if (v) r.MAX_EXCLUSIVE = to_double(*v);
    return r;
}

static XtceDefaultAlarm parse_default_alarm(const XmlElement& el) {
    XtceDefaultAlarm a;
    auto mv = get_attribute(el, "minViolations");
    if (mv) a.MIN_VIOLATIONS = to_u16(*mv);
    auto* sar = find_child(el, "StaticAlarmRanges");
    if (sar) {
        XtceStaticAlarmRanges ranges;
        auto* w = find_child(*sar, "WatchRange");
        if (w) ranges.WATCH_RANGE = parse_alarm_range(*w);
        auto* wr = find_child(*sar, "WarningRange");
        if (wr) ranges.WARNING_RANGE = parse_alarm_range(*wr);
        auto* d = find_child(*sar, "DistressRange");
        if (d) ranges.DISTRESS_RANGE = parse_alarm_range(*d);
        auto* cr = find_child(*sar, "CriticalRange");
        if (cr) ranges.CRITICAL_RANGE = parse_alarm_range(*cr);
        auto* sv = find_child(*sar, "SevereRange");
        if (sv) ranges.SEVERE_RANGE = parse_alarm_range(*sv);
        a.STATIC_ALARM_RANGES = ranges;
    }
    auto* eal = find_child(el, "EnumerationAlarmList");
    if (eal) {
        for (const auto& ch : eal->children) {
            XtceEnumerationAlarm ea;
            auto lb = get_attribute(ch, "enumerationLabel");
            if (lb) ea.LABEL = *lb;
            auto al = get_attribute(ch, "alarmLevel");
            if (al) ea.ALARM_LEVEL = parse_alarm_severity(*al);
            a.ENUMERATION_ALARMS.push_back(std::move(ea));
        }
    }
    return a;
}

static std::vector<XtceUnit> parse_units(const XmlElement& el) {
    std::vector<XtceUnit> units;
    auto* us = find_child(el, "UnitSet");
    if (!us) return units;
    for (const auto& ch : us->children) {
        if (str_lower(ch.tag).find("unit") == std::string::npos) continue;
        XtceUnit u;
        if (!ch.text.empty()) u.DESCRIPTION = ch.text;
        auto sym = get_attribute(ch, "symbol");
        if (sym) u.SYMBOL = *sym;
        auto pw = get_attribute(ch, "power");
        if (pw) u.POWER = to_double(*pw);
        auto fc = get_attribute(ch, "factor");
        if (fc) u.FACTOR = to_double(*fc);
        units.push_back(std::move(u));
    }
    return units;
}

static std::vector<XtceEnumerationValue> parse_enum_list(const XmlElement& el) {
    std::vector<XtceEnumerationValue> list;
    auto* es = find_child(el, "EnumerationList");
    if (!es) return list;
    for (const auto& ch : es->children) {
        XtceEnumerationValue ev;
        auto lb = get_attribute(ch, "label");
        if (lb) ev.LABEL = *lb;
        auto v = get_attribute(ch, "value");
        if (v) ev.VALUE = to_i64(*v);
        auto mx = get_attribute(ch, "maxValue");
        if (mx) ev.MAX_VALUE = to_i64(*mx);
        auto desc = get_attribute(ch, "shortDescription");
        if (desc) ev.DESCRIPTION = *desc;
        list.push_back(std::move(ev));
    }
    return list;
}

// ============================================================================
// PARSE PARAMETER TYPES
// ============================================================================

static XtceParameterTypeSet parse_param_type_set(const XmlElement& el) {
    XtceParameterTypeSet pts;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        // Strip namespace prefix
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "integerparametertype") {
            XtceIntegerParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            t.UNITS = parse_units(ch);
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            auto* da = find_child(ch, "DefaultAlarm");
            if (da) t.DEFAULT_ALARM = parse_default_alarm(*da);
            auto sgn = get_attribute(ch, "signed");
            if (sgn) t.SIGNED = (*sgn == "true" || *sgn == "1");
            auto sb = get_attribute(ch, "sizeInBits");
            if (sb) t.SIZE_IN_BITS = to_u16(*sb);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = to_i64(*iv);
            pts.INTEGER_TYPES.push_back(std::move(t));
        } else if (tag == "floatparametertype") {
            XtceFloatParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            t.UNITS = parse_units(ch);
            auto* de = find_child(ch, "FloatDataEncoding");
            if (de) t.DATA_ENCODING = parse_float_data_enc(*de);
            auto* da = find_child(ch, "DefaultAlarm");
            if (da) t.DEFAULT_ALARM = parse_default_alarm(*da);
            auto sb = get_attribute(ch, "sizeInBits");
            if (sb) t.SIZE_IN_BITS = to_u16(*sb);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = to_double(*iv);
            pts.FLOAT_TYPES.push_back(std::move(t));
        } else if (tag == "stringparametertype") {
            XtceStringParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "StringDataEncoding");
            if (de) t.DATA_ENCODING = parse_string_data_enc(*de);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            pts.STRING_TYPES.push_back(std::move(t));
        } else if (tag == "booleanparametertype") {
            XtceBooleanParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            auto os = get_attribute(ch, "oneStringValue");
            if (os) t.ONE_STRING_VALUE = *os;
            auto zs = get_attribute(ch, "zeroStringValue");
            if (zs) t.ZERO_STRING_VALUE = *zs;
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = (*iv == "true" || *iv == "1");
            pts.BOOLEAN_TYPES.push_back(std::move(t));
        } else if (tag == "enumeratedparametertype") {
            XtceEnumeratedParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            auto* da = find_child(ch, "DefaultAlarm");
            if (da) t.DEFAULT_ALARM = parse_default_alarm(*da);
            t.ENUMERATION_LIST = parse_enum_list(ch);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            pts.ENUMERATED_TYPES.push_back(std::move(t));
        } else if (tag == "binaryparametertype") {
            XtceBinaryParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "BinaryDataEncoding");
            if (de) t.DATA_ENCODING = parse_binary_data_enc(*de);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            pts.BINARY_TYPES.push_back(std::move(t));
        } else if (tag == "absolutetimeparametertype") {
            XtceAbsoluteTimeParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* re = find_child(ch, "ReferenceTime");
            if (re) {
                auto* ep = find_child(*re, "Epoch");
                if (ep && !ep->text.empty()) {
                    auto eu = str_upper(ep->text);
                    if (eu == "TAI" || eu == "J2000" || eu == "UNIX" || eu == "GPS")
                        t.EPOCH = parse_epoch(eu);
                    else { t.EPOCH = EpochType::CUSTOM; t.EPOCH_DATE = ep->text; }
                }
            }
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            pts.ABSOLUTE_TIME_TYPES.push_back(std::move(t));
        } else if (tag == "relativetimeparametertype") {
            XtceRelativeTimeParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            t.UNITS = parse_units(ch);
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            pts.RELATIVE_TIME_TYPES.push_back(std::move(t));
        } else if (tag == "arrayparametertype") {
            XtceArrayParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto atr = get_attribute(ch, "arrayTypeRef");
            if (atr) t.ARRAY_TYPE_REF = *atr;
            auto* dl = find_child(ch, "DimensionList");
            if (dl) {
                for (const auto& dc : dl->children) {
                    XtceArrayDimension dim;
                    auto* sz = find_child(dc, "Size");
                    if (sz) {
                        auto* fv = find_child(*sz, "FixedValue");
                        if (fv && !fv->text.empty()) dim.SIZE = to_u32(fv->text);
                        auto* dpr = find_child(*sz, "DynamicValue");
                        if (dpr) {
                            auto pr = get_attribute(*dpr, "parameterRef");
                            if (pr) dim.SIZE_PARAMETER_REF = *pr;
                        }
                    }
                    t.DIMENSIONS.push_back(std::move(dim));
                }
            }
            pts.ARRAY_TYPES.push_back(std::move(t));
        } else if (tag == "aggregateparametertype") {
            XtceAggregateParameterType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* ml = find_child(ch, "MemberList");
            if (ml) {
                for (const auto& mc : ml->children) {
                    XtceAggregateMember m;
                    m.NAME = get_attribute(mc, "name").value_or("");
                    m.TYPE_REF = get_attribute(mc, "typeRef").value_or("");
                    m.SHORT_DESCRIPTION = get_attribute(mc, "shortDescription");
                    t.MEMBERS.push_back(std::move(m));
                }
            }
            pts.AGGREGATE_TYPES.push_back(std::move(t));
        }
    }
    return pts;
}

// ============================================================================
// PARSE PARAMETER SET
// ============================================================================

static XtceParameterSet parse_param_set(const XmlElement& el) {
    XtceParameterSet ps;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag != "parameter") continue;

        XtceParameter p;
        p.NAME = get_attribute(ch, "name").value_or("");
        p.PARAMETER_TYPE_REF = get_attribute(ch, "parameterTypeRef").value_or("");
        p.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
        p.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
        p.INITIAL_VALUE = get_attribute(ch, "initialValue");

        auto* pp = find_child(ch, "ParameterProperties");
        if (pp) {
            XtceParameterProperties props;
            auto ds = get_attribute(*pp, "dataSource");
            if (ds) props.DATA_SOURCE = parse_data_source(*ds);
            auto ro = get_attribute(*pp, "readOnly");
            if (ro) props.READ_ONLY = (*ro == "true" || *ro == "1");
            auto* sn = find_child(*pp, "SystemName");
            if (sn && !sn->text.empty()) props.SYSTEM_NAME = sn->text;
            p.PROPERTIES = props;
        }
        ps.PARAMETERS.push_back(std::move(p));
    }
    return ps;
}

// ============================================================================
// PARSE CONTAINER SET
// ============================================================================

static XtceLocationInContainer parse_location(const XmlElement& el) {
    XtceLocationInContainer loc;
    auto ref = get_attribute(el, "referenceLocation");
    if (ref) loc.REFERENCE_LOCATION = parse_ref_location(*ref);
    auto off = get_attribute(el, "offsetSizeInBits");
    if (!off) off = get_attribute(el, "bitOffset");
    if (off) loc.OFFSET_IN_BITS = to_i32(*off);
    // Also check text content for offset
    if (!off && !el.text.empty()) loc.OFFSET_IN_BITS = to_i32(el.text);
    return loc;
}

static XtceContainerSet parse_container_set(const XmlElement& el) {
    XtceContainerSet cs;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag != "sequencecontainer") continue;

        XtceSequenceContainer sc;
        sc.NAME = get_attribute(ch, "name").value_or("");
        sc.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
        sc.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
        auto abs = get_attribute(ch, "abstract");
        if (abs) sc.ABSTRACT = (*abs == "true" || *abs == "1");
        sc.IDLE_PATTERN = get_attribute(ch, "idlePattern");

        auto* bc = find_child(ch, "BaseContainer");
        if (bc) {
            XtceBaseContainer base;
            base.CONTAINER_REF = get_attribute(*bc, "containerRef").value_or("");
            auto* rc = find_child(*bc, "RestrictionCriteria");
            if (rc) base.RESTRICTION_CRITERIA = parse_match_criteria(*rc);
            sc.BASE_CONTAINER = base;
        }

        auto* entryList = find_child(ch, "EntryList");
        if (entryList) {
            for (const auto& ec : entryList->children) {
                auto etag = str_lower(ec.tag);
                auto ecolon = etag.rfind(':');
                if (ecolon != std::string::npos) etag = etag.substr(ecolon + 1);

                XtceContainerEntry entry;
                if (etag == "parameterrefentry") {
                    XtceParameterRefEntry pre;
                    pre.PARAMETER_REF = get_attribute(ec, "parameterRef").value_or("");
                    pre.SHORT_DESCRIPTION = get_attribute(ec, "shortDescription");
                    auto* loc = find_child(ec, "LocationInContainerInBits");
                    if (loc) pre.LOCATION = parse_location(*loc);
                    auto* ic = find_child(ec, "IncludeCondition");
                    if (ic) pre.INCLUDE_CONDITION = parse_match_criteria(*ic);
                    entry.PARAMETER_REF_ENTRY = std::move(pre);
                } else if (etag == "containerrefentry") {
                    XtceContainerRefEntry cre;
                    cre.CONTAINER_REF = get_attribute(ec, "containerRef").value_or("");
                    auto* loc = find_child(ec, "LocationInContainerInBits");
                    if (loc) cre.LOCATION = parse_location(*loc);
                    auto* ic = find_child(ec, "IncludeCondition");
                    if (ic) cre.INCLUDE_CONDITION = parse_match_criteria(*ic);
                    entry.CONTAINER_REF_ENTRY = std::move(cre);
                } else if (etag == "fixedvalueentry") {
                    XtceFixedValueEntry fve;
                    fve.BINARY_VALUE = get_attribute(ec, "binaryValue").value_or("");
                    auto sb = get_attribute(ec, "sizeInBits");
                    if (sb) fve.SIZE_IN_BITS = to_u16(*sb);
                    fve.NAME = get_attribute(ec, "name");
                    auto* loc = find_child(ec, "LocationInContainerInBits");
                    if (loc) fve.LOCATION = parse_location(*loc);
                    entry.FIXED_VALUE_ENTRY = std::move(fve);
                } else if (etag == "arrayparameterrefentry") {
                    XtceArrayParameterRefEntry apre;
                    apre.PARAMETER_REF = get_attribute(ec, "parameterRef").value_or("");
                    auto* loc = find_child(ec, "LocationInContainerInBits");
                    if (loc) apre.LOCATION = parse_location(*loc);
                    entry.ARRAY_PARAMETER_REF_ENTRY = std::move(apre);
                } else {
                    continue;
                }
                sc.ENTRY_LIST.push_back(std::move(entry));
            }
        }

        auto* ris = find_child(ch, "RateInStream");
        if (ris) {
            XtceRateInStream rate;
            rate.STREAM_REF = get_attribute(*ris, "streamRef");
            auto rv = get_attribute(*ris, "rate");
            if (rv) rate.RATE = to_double(*rv);
            auto rb = get_attribute(*ris, "basis");
            if (rb) rate.BASIS = parse_rate_basis(*rb);
            sc.RATE_IN_STREAM = rate;
        }

        cs.CONTAINERS.push_back(std::move(sc));
    }
    return cs;
}

// ============================================================================
// PARSE ALGORITHM SET
// ============================================================================

static std::vector<XtceAlgorithmTrigger> parse_triggers(const XmlElement& el) {
    std::vector<XtceAlgorithmTrigger> triggers;
    auto* ts = find_child(el, "TriggerSet");
    if (!ts) return triggers;
    for (const auto& ch : ts->children) {
        XtceAlgorithmTrigger t;
        auto pr = get_attribute(ch, "parameterRef");
        if (pr) t.PARAMETER_REF = *pr;
        auto cr = get_attribute(ch, "containerRef");
        if (cr) t.CONTAINER_REF = *cr;
        auto rt = get_attribute(ch, "rate");
        if (rt) t.RATE = to_double(*rt);
        triggers.push_back(std::move(t));
    }
    return triggers;
}

static XtceAlgorithmSet parse_algorithm_set(const XmlElement& el) {
    XtceAlgorithmSet as;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "customalgorithm") {
            XtceCustomAlgorithm a;
            a.NAME = get_attribute(ch, "name").value_or("");
            a.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            a.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* at = find_child(ch, "AlgorithmText");
            if (at) {
                a.LANGUAGE = get_attribute(*at, "language");
                if (!at->text.empty()) a.ALGORITHM_TEXT = at->text;
            }
            a.EXTERNAL_ALGORITHM_REF = get_attribute(ch, "externalAlgorithmRef");
            auto* il = find_child(ch, "InputSet");
            if (il) {
                for (const auto& ic : il->children) {
                    XtceAlgorithmInput inp;
                    auto pr = get_attribute(ic, "parameterRef");
                    if (pr) inp.PARAMETER_REF = *pr;
                    inp.INPUT_NAME = get_attribute(ic, "inputName");
                    a.INPUTS.push_back(std::move(inp));
                }
            }
            auto* ol = find_child(ch, "OutputSet");
            if (ol) {
                for (const auto& oc : ol->children) {
                    XtceAlgorithmOutput out;
                    auto pr = get_attribute(oc, "parameterRef");
                    if (pr) out.PARAMETER_REF = *pr;
                    out.OUTPUT_NAME = get_attribute(oc, "outputName");
                    a.OUTPUTS.push_back(std::move(out));
                }
            }
            a.TRIGGERS = parse_triggers(ch);
            as.CUSTOM_ALGORITHMS.push_back(std::move(a));
        } else if (tag == "mathalgorithm") {
            XtceMathAlgorithm a;
            a.NAME = get_attribute(ch, "name").value_or("");
            a.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            a.MATH_OPERATION = get_child_text(ch, "MathOperation");
            a.OUTPUT_PARAMETER_REF = get_attribute(ch, "outputParameterRef");
            a.TRIGGERS = parse_triggers(ch);
            as.MATH_ALGORITHMS.push_back(std::move(a));
        }
    }
    return as;
}

// ============================================================================
// PARSE STREAM SET
// ============================================================================

static XtceStreamSet parse_stream_set(const XmlElement& el) {
    XtceStreamSet ss;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "fixedframestream") {
            XtceFixedFrameStream s;
            s.NAME = get_attribute(ch, "name").value_or("");
            s.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            auto fs = get_attribute(ch, "frameSizeInBits");
            if (fs) s.FRAME_SIZE_IN_BITS = to_u32(*fs);
            s.SYNC_PATTERN = get_attribute(ch, "syncPattern");
            ss.FIXED_FRAME_STREAMS.push_back(std::move(s));
        } else if (tag == "variableframestream") {
            XtceVariableFrameStream s;
            s.NAME = get_attribute(ch, "name").value_or("");
            s.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            auto mn = get_attribute(ch, "minFrameSizeInBits");
            if (mn) s.MIN_FRAME_SIZE_IN_BITS = to_u32(*mn);
            auto mx = get_attribute(ch, "maxFrameSizeInBits");
            if (mx) s.MAX_FRAME_SIZE_IN_BITS = to_u32(*mx);
            ss.VARIABLE_FRAME_STREAMS.push_back(std::move(s));
        } else if (tag == "customstream") {
            XtceCustomStream s;
            s.NAME = get_attribute(ch, "name").value_or("");
            s.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            s.ALGORITHM_REF = get_attribute(ch, "algorithmRef");
            ss.CUSTOM_STREAMS.push_back(std::move(s));
        }
    }
    return ss;
}

// ============================================================================
// PARSE SERVICE SET
// ============================================================================

static XtceServiceSet parse_service_set(const XmlElement& el) {
    XtceServiceSet ss;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag != "service") continue;

        XtceService s;
        s.NAME = get_attribute(ch, "name").value_or("");
        s.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
        s.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
        auto* cl = find_child(ch, "ContainerRefList");
        if (cl) {
            for (const auto& cr : cl->children) {
                auto ref = get_attribute(cr, "containerRef");
                if (ref) s.CONTAINER_REFS.push_back(*ref);
            }
        }
        auto* cmdl = find_child(ch, "CommandRefList");
        if (cmdl) {
            for (const auto& cr : cmdl->children) {
                auto ref = get_attribute(cr, "commandRef");
                if (ref) s.COMMAND_REFS.push_back(*ref);
            }
        }
        ss.SERVICES.push_back(std::move(s));
    }
    return ss;
}

// ============================================================================
// PARSE ARGUMENT TYPE SET
// ============================================================================

static XtceArgumentTypeSet parse_arg_type_set(const XmlElement& el) {
    XtceArgumentTypeSet ats;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);

        if (tag == "integerargumenttype") {
            XtceIntegerArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            t.UNITS = parse_units(ch);
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            auto sgn = get_attribute(ch, "signed");
            if (sgn) t.SIGNED = (*sgn == "true" || *sgn == "1");
            auto sb = get_attribute(ch, "sizeInBits");
            if (sb) t.SIZE_IN_BITS = to_u16(*sb);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = to_i64(*iv);
            ats.INTEGER_TYPES.push_back(std::move(t));
        } else if (tag == "floatargumenttype") {
            XtceFloatArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            t.UNITS = parse_units(ch);
            auto* de = find_child(ch, "FloatDataEncoding");
            if (de) t.DATA_ENCODING = parse_float_data_enc(*de);
            auto sb = get_attribute(ch, "sizeInBits");
            if (sb) t.SIZE_IN_BITS = to_u16(*sb);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = to_double(*iv);
            ats.FLOAT_TYPES.push_back(std::move(t));
        } else if (tag == "stringargumenttype") {
            XtceStringArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "StringDataEncoding");
            if (de) t.DATA_ENCODING = parse_string_data_enc(*de);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            ats.STRING_TYPES.push_back(std::move(t));
        } else if (tag == "booleanargumenttype") {
            XtceBooleanArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            auto os = get_attribute(ch, "oneStringValue");
            if (os) t.ONE_STRING_VALUE = *os;
            auto zs = get_attribute(ch, "zeroStringValue");
            if (zs) t.ZERO_STRING_VALUE = *zs;
            ats.BOOLEAN_TYPES.push_back(std::move(t));
        } else if (tag == "enumeratedargumenttype") {
            XtceEnumeratedArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "IntegerDataEncoding");
            if (de) t.DATA_ENCODING = parse_int_data_enc(*de);
            t.ENUMERATION_LIST = parse_enum_list(ch);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            ats.ENUMERATED_TYPES.push_back(std::move(t));
        } else if (tag == "binaryargumenttype") {
            XtceBinaryArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* de = find_child(ch, "BinaryDataEncoding");
            if (de) t.DATA_ENCODING = parse_binary_data_enc(*de);
            auto iv = get_attribute(ch, "initialValue");
            if (iv) t.INITIAL_VALUE = *iv;
            ats.BINARY_TYPES.push_back(std::move(t));
        } else if (tag == "aggregateargumenttype") {
            XtceAggregateArgumentType t;
            t.NAME = get_attribute(ch, "name").value_or("");
            t.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
            t.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
            auto* ml = find_child(ch, "MemberList");
            if (ml) {
                for (const auto& mc : ml->children) {
                    XtceAggregateMember m;
                    m.NAME = get_attribute(mc, "name").value_or("");
                    m.TYPE_REF = get_attribute(mc, "typeRef").value_or("");
                    m.SHORT_DESCRIPTION = get_attribute(mc, "shortDescription");
                    t.MEMBERS.push_back(std::move(m));
                }
            }
            ats.AGGREGATE_TYPES.push_back(std::move(t));
        }
    }
    return ats;
}

// ============================================================================
// PARSE META COMMAND SET
// ============================================================================

static XtceMetaCommandSet parse_meta_command_set(const XmlElement& el) {
    XtceMetaCommandSet mcs;
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag != "metacommand") continue;

        XtceMetaCommand mc;
        mc.NAME = get_attribute(ch, "name").value_or("");
        mc.SHORT_DESCRIPTION = get_attribute(ch, "shortDescription");
        mc.LONG_DESCRIPTION = get_child_text(ch, "LongDescription");
        auto abs = get_attribute(ch, "abstract");
        if (abs) mc.ABSTRACT = (*abs == "true" || *abs == "1");

        auto* al = find_child(ch, "ArgumentList");
        if (al) {
            for (const auto& ac : al->children) {
                XtceArgument arg;
                arg.NAME = get_attribute(ac, "name").value_or("");
                arg.ARGUMENT_TYPE_REF = get_attribute(ac, "argumentTypeRef").value_or("");
                arg.SHORT_DESCRIPTION = get_attribute(ac, "shortDescription");
                arg.LONG_DESCRIPTION = get_child_text(ac, "LongDescription");
                arg.INITIAL_VALUE = get_attribute(ac, "initialValue");
                mc.ARGUMENTS.push_back(std::move(arg));
            }
        }

        auto* cc = find_child(ch, "CommandContainer");
        if (cc) {
            XtceCommandContainer container;
            container.NAME = get_attribute(*cc, "name").value_or("");
            auto* bcc = find_child(*cc, "BaseContainer");
            if (bcc) {
                XtceBaseContainer base;
                base.CONTAINER_REF = get_attribute(*bcc, "containerRef").value_or("");
                auto* rc = find_child(*bcc, "RestrictionCriteria");
                if (rc) base.RESTRICTION_CRITERIA = parse_match_criteria(*rc);
                container.BASE_CONTAINER = base;
            }
            auto* cel = find_child(*cc, "EntryList");
            if (cel) {
                for (const auto& ec : cel->children) {
                    auto etag = str_lower(ec.tag);
                    auto ecolon = etag.rfind(':');
                    if (ecolon != std::string::npos) etag = etag.substr(ecolon + 1);
                    XtceCommandContainerEntry entry;
                    if (etag == "argumentrefentry") {
                        XtceArgumentRefEntry are;
                        are.ARGUMENT_REF = get_attribute(ec, "argumentRef").value_or("");
                        are.SHORT_DESCRIPTION = get_attribute(ec, "shortDescription");
                        entry.ARGUMENT_REF_ENTRY = std::move(are);
                    } else if (etag == "parameterrefentry") {
                        XtceParameterRefEntry pre;
                        pre.PARAMETER_REF = get_attribute(ec, "parameterRef").value_or("");
                        pre.SHORT_DESCRIPTION = get_attribute(ec, "shortDescription");
                        entry.PARAMETER_REF_ENTRY = std::move(pre);
                    } else if (etag == "fixedvalueentry") {
                        XtceFixedValueEntry fve;
                        fve.BINARY_VALUE = get_attribute(ec, "binaryValue").value_or("");
                        auto sb = get_attribute(ec, "sizeInBits");
                        if (sb) fve.SIZE_IN_BITS = to_u16(*sb);
                        fve.NAME = get_attribute(ec, "name");
                        entry.FIXED_VALUE_ENTRY = std::move(fve);
                    } else {
                        continue;
                    }
                    container.ENTRY_LIST.push_back(std::move(entry));
                }
            }
            mc.COMMAND_CONTAINER = std::move(container);
        }

        auto* bmc = find_child(ch, "BaseMetaCommand");
        if (bmc) {
            XtceBaseMetaCommand base;
            base.META_COMMAND_REF = get_attribute(*bmc, "metaCommandRef").value_or("");
            auto* aal = find_child(*bmc, "ArgumentAssignmentList");
            if (aal) {
                for (const auto& aac : aal->children) {
                    XtceArgumentAssignment aa;
                    aa.ARGUMENT_NAME = get_attribute(aac, "argumentName").value_or("");
                    aa.VALUE = get_attribute(aac, "argumentValue").value_or("");
                    base.ARGUMENT_ASSIGNMENTS.push_back(std::move(aa));
                }
            }
            mc.BASE_META_COMMAND = base;
        }

        auto* vs = find_child(ch, "VerifierSet");
        if (vs) {
            for (const auto& vc : vs->children) {
                XtceCommandVerifier v;
                auto vtag = str_lower(vc.tag);
                auto vcolon = vtag.rfind(':');
                if (vcolon != std::string::npos) vtag = vtag.substr(vcolon + 1);
                if (vtag.find("verifier") == std::string::npos) continue;
                v.NAME = get_attribute(vc, "name").value_or(vtag);
                if (vtag.find("start") != std::string::npos) v.VERIFIER_TYPE = VerifierType::START;
                else if (vtag.find("progress") != std::string::npos) v.VERIFIER_TYPE = VerifierType::PROGRESS;
                else if (vtag.find("complete") != std::string::npos) v.VERIFIER_TYPE = VerifierType::COMPLETE;
                else if (vtag.find("failed") != std::string::npos) v.VERIFIER_TYPE = VerifierType::FAILED;
                auto* cond = find_child(vc, "Condition");
                if (!cond) cond = find_child(vc, "MatchCriteria");
                if (cond) v.CONDITION = parse_match_criteria(*cond);
                v.CONTAINER_REF = get_attribute(vc, "containerRef");
                mc.VERIFIERS.push_back(std::move(v));
            }
        }

        auto* sig = find_child(ch, "Significance");
        if (sig) {
            XtceCommandSignificance s;
            auto cl = get_attribute(*sig, "consequenceLevel");
            if (cl) s.CONSEQUENCE_LEVEL = to_u8(*cl);
            s.REASON_FOR_WARNING = get_attribute(*sig, "reasonForWarning");
            mc.SIGNIFICANCE = s;
        }

        mcs.META_COMMANDS.push_back(std::move(mc));
    }
    return mcs;
}

// ============================================================================
// PARSE SPACE SYSTEM (recursive)
// ============================================================================

static XtceSpaceSystem parse_space_system(const XmlElement& el) {
    XtceSpaceSystem ss;
    ss.NAME = get_attribute(el, "name").value_or("");
    ss.SHORT_DESCRIPTION = get_attribute(el, "shortDescription");
    ss.LONG_DESCRIPTION = get_child_text(el, "LongDescription");
    ss.OPERATIONAL_STATUS = get_attribute(el, "operationalStatus");

    auto* header = find_child(el, "Header");
    if (header) {
        XtceHeader h;
        h.VERSION = get_attribute(*header, "version");
        h.DATE = get_attribute(*header, "date");
        h.CLASSIFICATION = get_attribute(*header, "classification");
        h.VALIDATION_STATUS = get_attribute(*header, "validationStatus");
        auto* ai = find_child(*header, "AuthorSet");
        if (ai) {
            auto* author = find_child(*ai, "Author");
            if (author && !author->text.empty()) h.AUTHOR = author->text;
        }
        if (!h.AUTHOR) h.AUTHOR = get_attribute(*header, "author");
        auto* nl = find_child(*header, "NoteSet");
        if (nl) {
            for (const auto& nc : nl->children) {
                if (!nc.text.empty()) h.NOTES.push_back(nc.text);
            }
        }
        ss.HEADER = h;
    }

    auto* tmd = find_child(el, "TelemetryMetaData");
    if (tmd) {
        XtceTelemetryMetaData tm;
        auto* pts = find_child(*tmd, "ParameterTypeSet");
        if (pts) tm.PARAMETER_TYPE_SET = parse_param_type_set(*pts);
        auto* ps = find_child(*tmd, "ParameterSet");
        if (ps) tm.PARAMETER_SET = parse_param_set(*ps);
        auto* cs = find_child(*tmd, "ContainerSet");
        if (cs) tm.CONTAINER_SET = parse_container_set(*cs);
        auto* als = find_child(*tmd, "AlgorithmSet");
        if (als) tm.ALGORITHM_SET = parse_algorithm_set(*als);
        auto* sts = find_child(*tmd, "StreamSet");
        if (sts) tm.STREAM_SET = parse_stream_set(*sts);
        ss.TELEMETRY_META_DATA = tm;
    }

    auto* cmd = find_child(el, "CommandMetaData");
    if (cmd) {
        XtceCommandMetaData cm;
        auto* ats = find_child(*cmd, "ArgumentTypeSet");
        if (ats) cm.ARGUMENT_TYPE_SET = parse_arg_type_set(*ats);
        auto* pts = find_child(*cmd, "ParameterTypeSet");
        if (pts) cm.PARAMETER_TYPE_SET = parse_param_type_set(*pts);
        auto* ps = find_child(*cmd, "ParameterSet");
        if (ps) cm.PARAMETER_SET = parse_param_set(*ps);
        auto* mcs = find_child(*cmd, "MetaCommandSet");
        if (mcs) cm.META_COMMAND_SET = parse_meta_command_set(*mcs);
        auto* ccs = find_child(*cmd, "CommandContainerSet");
        if (ccs) cm.COMMAND_CONTAINER_SET = parse_container_set(*ccs);
        auto* als = find_child(*cmd, "AlgorithmSet");
        if (als) cm.ALGORITHM_SET = parse_algorithm_set(*als);
        auto* sts = find_child(*cmd, "StreamSet");
        if (sts) cm.STREAM_SET = parse_stream_set(*sts);
        ss.COMMAND_META_DATA = cm;
    }

    auto* svs = find_child(el, "ServiceSet");
    if (svs) ss.SERVICE_SET = parse_service_set(*svs);

    // Child SpaceSystems
    for (const auto& ch : el.children) {
        auto tag = str_lower(ch.tag);
        auto colon = tag.rfind(':');
        if (colon != std::string::npos) tag = tag.substr(colon + 1);
        if (tag == "spacesystem") {
            ss.CHILD_SYSTEMS.push_back(parse_space_system(ch));
        }
    }

    return ss;
}

// ============================================================================
// PUBLIC: parse_xtce_xml
// ============================================================================

XtceMessage parse_xtce_xml(std::string_view text) {
    auto root = parse_xml_string(text);

    // The root element should be <SpaceSystem>
    auto tag = str_lower(root.tag);
    auto colon = tag.rfind(':');
    if (colon != std::string::npos) tag = tag.substr(colon + 1);

    const XmlElement* ss_el = &root;
    if (tag != "spacesystem") {
        // Search for SpaceSystem child
        auto* found = find_child(root, "SpaceSystem");
        if (found) ss_el = found;
    }

    XtceMessage msg;
    msg.space_system = parse_space_system(*ss_el);
    return msg;
}

// ============================================================================
// XML WRITE HELPERS
// ============================================================================

static XmlElement el(const std::string& tag, const std::string& val) {
    return xml_elem(tag, {}, {}, val);
}

static void add_opt_attr(std::map<std::string, std::string>& attrs,
                         const std::string& key, const std::optional<std::string>& val) {
    if (val && !val->empty()) attrs[key] = *val;
}

static XmlElement write_int_data_enc_xml(const XtceIntegerDataEncoding& enc) {
    std::map<std::string, std::string> attrs;
    if (enc.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(enc.SIZE_IN_BITS);
    attrs["byteOrder"] = write_byte_order(enc.BYTE_ORDER);
    attrs["encoding"] = write_int_encoding(enc.ENCODING);
    return xml_elem("IntegerDataEncoding", std::move(attrs));
}

static XmlElement write_float_data_enc_xml(const XtceFloatDataEncoding& enc) {
    std::map<std::string, std::string> attrs;
    if (enc.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(enc.SIZE_IN_BITS);
    attrs["byteOrder"] = write_byte_order(enc.BYTE_ORDER);
    attrs["encoding"] = write_float_encoding(enc.ENCODING);
    return xml_elem("FloatDataEncoding", std::move(attrs));
}

static XmlElement write_string_data_enc_xml(const XtceStringDataEncoding& enc) {
    std::map<std::string, std::string> attrs;
    // encoding attr
    std::string enc_str = "UTF-8";
    switch (enc.ENCODING) {
        case StringEncodingType::US_ASCII: enc_str = "US-ASCII"; break;
        case StringEncodingType::UTF_8: enc_str = "UTF-8"; break;
        case StringEncodingType::UTF_16: enc_str = "UTF-16"; break;
        default: break;
    }
    attrs["encoding"] = enc_str;
    std::vector<XmlElement> children;
    if (enc.SIZE_IN_BITS > 0 || enc.SIZE_TYPE != StringSizeType::FIXED) {
        std::vector<XmlElement> sz_children;
        if (enc.SIZE_IN_BITS > 0) {
            sz_children.push_back(xml_elem("Fixed", {}, {el("FixedValue", u16tos(enc.SIZE_IN_BITS))}));
        }
        if (enc.SIZE_TYPE == StringSizeType::TERMINATION_CHAR) {
            sz_children.push_back(el("TerminationChar", u8tos(enc.TERMINATION_CHAR)));
        } else if (enc.SIZE_TYPE == StringSizeType::LEADING_SIZE) {
            sz_children.push_back(xml_elem("LeadingSize",
                {{"sizeInBitsOfSizeTag", u8tos(enc.LEADING_SIZE_BITS)}}));
        }
        children.push_back(xml_elem("SizeInBits", {}, std::move(sz_children)));
    }
    return xml_elem("StringDataEncoding", std::move(attrs), std::move(children));
}

static XmlElement write_binary_data_enc_xml(const XtceBinaryDataEncoding& enc) {
    std::map<std::string, std::string> attrs;
    if (enc.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(enc.SIZE_IN_BITS);
    if (enc.MAX_SIZE_IN_BITS > 0) attrs["maxSizeInBits"] = u16tos(enc.MAX_SIZE_IN_BITS);
    return xml_elem("BinaryDataEncoding", std::move(attrs));
}

static XmlElement write_units_xml(const std::vector<XtceUnit>& units) {
    std::vector<XmlElement> children;
    for (const auto& u : units) {
        std::map<std::string, std::string> attrs;
        if (u.SYMBOL) attrs["symbol"] = *u.SYMBOL;
        if (u.POWER) attrs["power"] = dtos(*u.POWER);
        if (u.FACTOR) attrs["factor"] = dtos(*u.FACTOR);
        std::string txt = u.DESCRIPTION.value_or("");
        children.push_back(xml_elem("Unit", std::move(attrs), {}, std::move(txt)));
    }
    return xml_elem("UnitSet", {}, std::move(children));
}

static XmlElement write_enum_list_xml(const std::vector<XtceEnumerationValue>& list) {
    std::vector<XmlElement> children;
    for (const auto& ev : list) {
        std::map<std::string, std::string> attrs;
        attrs["label"] = ev.LABEL;
        attrs["value"] = i64tos(ev.VALUE);
        if (ev.MAX_VALUE) attrs["maxValue"] = i64tos(*ev.MAX_VALUE);
        if (ev.DESCRIPTION) attrs["shortDescription"] = *ev.DESCRIPTION;
        children.push_back(xml_elem("Enumeration", std::move(attrs)));
    }
    return xml_elem("EnumerationList", {}, std::move(children));
}

static XmlElement write_alarm_range_xml(const std::string& tag, const XtceAlarmRange& r) {
    std::map<std::string, std::string> attrs;
    if (r.MIN_INCLUSIVE) attrs["minInclusive"] = dtos(*r.MIN_INCLUSIVE);
    if (r.MAX_INCLUSIVE) attrs["maxInclusive"] = dtos(*r.MAX_INCLUSIVE);
    if (r.MIN_EXCLUSIVE) attrs["minExclusive"] = dtos(*r.MIN_EXCLUSIVE);
    if (r.MAX_EXCLUSIVE) attrs["maxExclusive"] = dtos(*r.MAX_EXCLUSIVE);
    return xml_elem(tag, std::move(attrs));
}

static XmlElement write_default_alarm_xml(const XtceDefaultAlarm& a) {
    std::map<std::string, std::string> attrs;
    if (a.MIN_VIOLATIONS > 0) attrs["minViolations"] = u16tos(a.MIN_VIOLATIONS);
    std::vector<XmlElement> children;
    if (a.STATIC_ALARM_RANGES) {
        const auto& sar = *a.STATIC_ALARM_RANGES;
        std::vector<XmlElement> rc;
        if (sar.WATCH_RANGE) rc.push_back(write_alarm_range_xml("WatchRange", *sar.WATCH_RANGE));
        if (sar.WARNING_RANGE) rc.push_back(write_alarm_range_xml("WarningRange", *sar.WARNING_RANGE));
        if (sar.DISTRESS_RANGE) rc.push_back(write_alarm_range_xml("DistressRange", *sar.DISTRESS_RANGE));
        if (sar.CRITICAL_RANGE) rc.push_back(write_alarm_range_xml("CriticalRange", *sar.CRITICAL_RANGE));
        if (sar.SEVERE_RANGE) rc.push_back(write_alarm_range_xml("SevereRange", *sar.SEVERE_RANGE));
        children.push_back(xml_elem("StaticAlarmRanges", {}, std::move(rc)));
    }
    if (!a.ENUMERATION_ALARMS.empty()) {
        std::vector<XmlElement> ec;
        for (const auto& ea : a.ENUMERATION_ALARMS) {
            ec.push_back(xml_elem("EnumerationAlarm", {
                {"enumerationLabel", ea.LABEL},
                {"alarmLevel", write_alarm_severity(ea.ALARM_LEVEL)}
            }));
        }
        children.push_back(xml_elem("EnumerationAlarmList", {}, std::move(ec)));
    }
    return xml_elem("DefaultAlarm", std::move(attrs), std::move(children));
}

static XmlElement write_comparison_xml(const XtceParameterComparison& c) {
    std::map<std::string, std::string> attrs;
    attrs["parameterRef"] = c.PARAMETER_REF;
    attrs["comparisonOperator"] = write_comparison_op(c.OPERATOR);
    attrs["value"] = c.VALUE;
    if (!c.USE_CALIBRATED_VALUE) attrs["useCalibratedValue"] = "false";
    return xml_elem("Comparison", std::move(attrs));
}

static XmlElement write_match_criteria_xml(const std::string& tag, const XtceMatchCriteria& mc) {
    std::vector<XmlElement> children;
    if (mc.COMPARISON) {
        children.push_back(write_comparison_xml(*mc.COMPARISON));
    }
    if (!mc.COMPARISON_LIST.empty()) {
        std::vector<XmlElement> cl;
        for (const auto& c : mc.COMPARISON_LIST) cl.push_back(write_comparison_xml(c));
        children.push_back(xml_elem("ComparisonList", {}, std::move(cl)));
    }
    return xml_elem(tag, {}, std::move(children));
}

// ============================================================================
// WRITE PARAMETER TYPE SET
// ============================================================================

static XmlElement write_param_type_set_xml(const XtceParameterTypeSet& pts) {
    std::vector<XmlElement> children;

    for (const auto& t : pts.INTEGER_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.SIGNED) attrs["signed"] = "true";
        if (t.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(t.SIZE_IN_BITS);
        if (t.INITIAL_VALUE) attrs["initialValue"] = i64tos(*t.INITIAL_VALUE);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.UNITS.empty()) tc.push_back(write_units_xml(t.UNITS));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        if (t.DEFAULT_ALARM) tc.push_back(write_default_alarm_xml(*t.DEFAULT_ALARM));
        children.push_back(xml_elem("IntegerParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.FLOAT_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(t.SIZE_IN_BITS);
        if (t.INITIAL_VALUE) attrs["initialValue"] = dtos(*t.INITIAL_VALUE);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.UNITS.empty()) tc.push_back(write_units_xml(t.UNITS));
        if (t.DATA_ENCODING) tc.push_back(write_float_data_enc_xml(*t.DATA_ENCODING));
        if (t.DEFAULT_ALARM) tc.push_back(write_default_alarm_xml(*t.DEFAULT_ALARM));
        children.push_back(xml_elem("FloatParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.STRING_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.INITIAL_VALUE) attrs["initialValue"] = *t.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_string_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("StringParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.BOOLEAN_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.ONE_STRING_VALUE) attrs["oneStringValue"] = *t.ONE_STRING_VALUE;
        if (t.ZERO_STRING_VALUE) attrs["zeroStringValue"] = *t.ZERO_STRING_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("BooleanParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.ENUMERATED_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.INITIAL_VALUE) attrs["initialValue"] = *t.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        if (t.DEFAULT_ALARM) tc.push_back(write_default_alarm_xml(*t.DEFAULT_ALARM));
        if (!t.ENUMERATION_LIST.empty()) tc.push_back(write_enum_list_xml(t.ENUMERATION_LIST));
        children.push_back(xml_elem("EnumeratedParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.BINARY_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.INITIAL_VALUE) attrs["initialValue"] = *t.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_binary_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("BinaryParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.ABSOLUTE_TIME_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        std::string epoch_str = (t.EPOCH == EpochType::CUSTOM && t.EPOCH_DATE) ? *t.EPOCH_DATE : write_epoch(t.EPOCH);
        tc.push_back(xml_elem("ReferenceTime", {}, {el("Epoch", epoch_str)}));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("AbsoluteTimeParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.RELATIVE_TIME_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.UNITS.empty()) tc.push_back(write_units_xml(t.UNITS));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("RelativeTimeParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.ARRAY_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.ARRAY_TYPE_REF) attrs["arrayTypeRef"] = *t.ARRAY_TYPE_REF;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.DIMENSIONS.empty()) {
            std::vector<XmlElement> dc;
            for (const auto& d : t.DIMENSIONS) {
                std::vector<XmlElement> sz;
                sz.push_back(xml_elem("Size", {}, {el("FixedValue", u32tos(d.SIZE))}));
                dc.push_back(xml_elem("Dimension", {}, std::move(sz)));
            }
            tc.push_back(xml_elem("DimensionList", {}, std::move(dc)));
        }
        children.push_back(xml_elem("ArrayParameterType", std::move(attrs), std::move(tc)));
    }

    for (const auto& t : pts.AGGREGATE_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.MEMBERS.empty()) {
            std::vector<XmlElement> mc;
            for (const auto& m : t.MEMBERS) {
                std::map<std::string, std::string> ma;
                ma["name"] = m.NAME;
                ma["typeRef"] = m.TYPE_REF;
                add_opt_attr(ma, "shortDescription", m.SHORT_DESCRIPTION);
                mc.push_back(xml_elem("Member", std::move(ma)));
            }
            tc.push_back(xml_elem("MemberList", {}, std::move(mc)));
        }
        children.push_back(xml_elem("AggregateParameterType", std::move(attrs), std::move(tc)));
    }

    return xml_elem("ParameterTypeSet", {}, std::move(children));
}

// ============================================================================
// WRITE PARAMETER SET
// ============================================================================

static XmlElement write_param_set_xml(const XtceParameterSet& ps) {
    std::vector<XmlElement> children;
    for (const auto& p : ps.PARAMETERS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = p.NAME;
        attrs["parameterTypeRef"] = p.PARAMETER_TYPE_REF;
        add_opt_attr(attrs, "shortDescription", p.SHORT_DESCRIPTION);
        if (p.INITIAL_VALUE) attrs["initialValue"] = *p.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (p.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *p.LONG_DESCRIPTION));
        if (p.PROPERTIES) {
            std::map<std::string, std::string> pa;
            pa["dataSource"] = write_data_source(p.PROPERTIES->DATA_SOURCE);
            pa["readOnly"] = p.PROPERTIES->READ_ONLY ? "true" : "false";
            tc.push_back(xml_elem("ParameterProperties", std::move(pa)));
        }
        children.push_back(xml_elem("Parameter", std::move(attrs), std::move(tc)));
    }
    return xml_elem("ParameterSet", {}, std::move(children));
}

// ============================================================================
// WRITE CONTAINER SET
// ============================================================================

static XmlElement write_location_xml(const XtceLocationInContainer& loc) {
    std::map<std::string, std::string> attrs;
    attrs["referenceLocation"] = write_ref_location(loc.REFERENCE_LOCATION);
    return xml_elem("LocationInContainerInBits", std::move(attrs), {},
                     std::to_string(loc.OFFSET_IN_BITS));
}

static XmlElement write_container_set_xml(const std::string& tag, const XtceContainerSet& cs) {
    std::vector<XmlElement> children;
    for (const auto& sc : cs.CONTAINERS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = sc.NAME;
        add_opt_attr(attrs, "shortDescription", sc.SHORT_DESCRIPTION);
        if (sc.ABSTRACT) attrs["abstract"] = "true";
        add_opt_attr(attrs, "idlePattern", sc.IDLE_PATTERN);
        std::vector<XmlElement> tc;
        if (sc.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *sc.LONG_DESCRIPTION));

        if (sc.BASE_CONTAINER) {
            std::map<std::string, std::string> ba;
            ba["containerRef"] = sc.BASE_CONTAINER->CONTAINER_REF;
            std::vector<XmlElement> bc;
            if (sc.BASE_CONTAINER->RESTRICTION_CRITERIA)
                bc.push_back(write_match_criteria_xml("RestrictionCriteria", *sc.BASE_CONTAINER->RESTRICTION_CRITERIA));
            tc.push_back(xml_elem("BaseContainer", std::move(ba), std::move(bc)));
        }

        if (!sc.ENTRY_LIST.empty()) {
            std::vector<XmlElement> ec;
            for (const auto& e : sc.ENTRY_LIST) {
                if (e.PARAMETER_REF_ENTRY) {
                    const auto& pre = *e.PARAMETER_REF_ENTRY;
                    std::map<std::string, std::string> ea;
                    ea["parameterRef"] = pre.PARAMETER_REF;
                    add_opt_attr(ea, "shortDescription", pre.SHORT_DESCRIPTION);
                    std::vector<XmlElement> pc;
                    if (pre.LOCATION) pc.push_back(write_location_xml(*pre.LOCATION));
                    if (pre.INCLUDE_CONDITION)
                        pc.push_back(write_match_criteria_xml("IncludeCondition", *pre.INCLUDE_CONDITION));
                    ec.push_back(xml_elem("ParameterRefEntry", std::move(ea), std::move(pc)));
                } else if (e.CONTAINER_REF_ENTRY) {
                    const auto& cre = *e.CONTAINER_REF_ENTRY;
                    std::map<std::string, std::string> ea;
                    ea["containerRef"] = cre.CONTAINER_REF;
                    std::vector<XmlElement> pc;
                    if (cre.LOCATION) pc.push_back(write_location_xml(*cre.LOCATION));
                    ec.push_back(xml_elem("ContainerRefEntry", std::move(ea), std::move(pc)));
                } else if (e.FIXED_VALUE_ENTRY) {
                    const auto& fve = *e.FIXED_VALUE_ENTRY;
                    std::map<std::string, std::string> ea;
                    ea["binaryValue"] = fve.BINARY_VALUE;
                    if (fve.SIZE_IN_BITS > 0) ea["sizeInBits"] = u16tos(fve.SIZE_IN_BITS);
                    if (fve.NAME) ea["name"] = *fve.NAME;
                    ec.push_back(xml_elem("FixedValueEntry", std::move(ea)));
                } else if (e.ARRAY_PARAMETER_REF_ENTRY) {
                    const auto& apre = *e.ARRAY_PARAMETER_REF_ENTRY;
                    std::map<std::string, std::string> ea;
                    ea["parameterRef"] = apre.PARAMETER_REF;
                    ec.push_back(xml_elem("ArrayParameterRefEntry", std::move(ea)));
                }
            }
            tc.push_back(xml_elem("EntryList", {}, std::move(ec)));
        }

        children.push_back(xml_elem("SequenceContainer", std::move(attrs), std::move(tc)));
    }
    return xml_elem(tag, {}, std::move(children));
}

// ============================================================================
// WRITE ALGORITHM SET
// ============================================================================

static XmlElement write_algorithm_set_xml(const XtceAlgorithmSet& as) {
    std::vector<XmlElement> children;
    for (const auto& a : as.CUSTOM_ALGORITHMS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = a.NAME;
        add_opt_attr(attrs, "shortDescription", a.SHORT_DESCRIPTION);
        add_opt_attr(attrs, "externalAlgorithmRef", a.EXTERNAL_ALGORITHM_REF);
        std::vector<XmlElement> tc;
        if (a.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *a.LONG_DESCRIPTION));
        if (a.ALGORITHM_TEXT || a.LANGUAGE) {
            std::map<std::string, std::string> ata;
            add_opt_attr(ata, "language", a.LANGUAGE);
            tc.push_back(xml_elem("AlgorithmText", std::move(ata), {}, a.ALGORITHM_TEXT.value_or("")));
        }
        if (!a.INPUTS.empty()) {
            std::vector<XmlElement> ic;
            for (const auto& inp : a.INPUTS) {
                std::map<std::string, std::string> ia;
                ia["parameterRef"] = inp.PARAMETER_REF;
                add_opt_attr(ia, "inputName", inp.INPUT_NAME);
                ic.push_back(xml_elem("InputParameterInstanceRef", std::move(ia)));
            }
            tc.push_back(xml_elem("InputSet", {}, std::move(ic)));
        }
        if (!a.OUTPUTS.empty()) {
            std::vector<XmlElement> oc;
            for (const auto& out : a.OUTPUTS) {
                std::map<std::string, std::string> oa;
                oa["parameterRef"] = out.PARAMETER_REF;
                add_opt_attr(oa, "outputName", out.OUTPUT_NAME);
                oc.push_back(xml_elem("OutputParameterInstanceRef", std::move(oa)));
            }
            tc.push_back(xml_elem("OutputSet", {}, std::move(oc)));
        }
        if (!a.TRIGGERS.empty()) {
            std::vector<XmlElement> trc;
            for (const auto& tr : a.TRIGGERS) {
                std::map<std::string, std::string> ta;
                if (tr.PARAMETER_REF) ta["parameterRef"] = *tr.PARAMETER_REF;
                if (tr.CONTAINER_REF) ta["containerRef"] = *tr.CONTAINER_REF;
                if (tr.RATE) ta["rate"] = dtos(*tr.RATE);
                trc.push_back(xml_elem("Trigger", std::move(ta)));
            }
            tc.push_back(xml_elem("TriggerSet", {}, std::move(trc)));
        }
        children.push_back(xml_elem("CustomAlgorithm", std::move(attrs), std::move(tc)));
    }
    for (const auto& a : as.MATH_ALGORITHMS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = a.NAME;
        add_opt_attr(attrs, "shortDescription", a.SHORT_DESCRIPTION);
        add_opt_attr(attrs, "outputParameterRef", a.OUTPUT_PARAMETER_REF);
        std::vector<XmlElement> tc;
        if (a.MATH_OPERATION) tc.push_back(el("MathOperation", *a.MATH_OPERATION));
        children.push_back(xml_elem("MathAlgorithm", std::move(attrs), std::move(tc)));
    }
    return xml_elem("AlgorithmSet", {}, std::move(children));
}

// ============================================================================
// WRITE STREAM SET
// ============================================================================

static XmlElement write_stream_set_xml(const XtceStreamSet& ss) {
    std::vector<XmlElement> children;
    for (const auto& s : ss.FIXED_FRAME_STREAMS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = s.NAME;
        add_opt_attr(attrs, "shortDescription", s.SHORT_DESCRIPTION);
        if (s.FRAME_SIZE_IN_BITS > 0) attrs["frameSizeInBits"] = u32tos(s.FRAME_SIZE_IN_BITS);
        add_opt_attr(attrs, "syncPattern", s.SYNC_PATTERN);
        children.push_back(xml_elem("FixedFrameStream", std::move(attrs)));
    }
    for (const auto& s : ss.VARIABLE_FRAME_STREAMS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = s.NAME;
        add_opt_attr(attrs, "shortDescription", s.SHORT_DESCRIPTION);
        if (s.MIN_FRAME_SIZE_IN_BITS > 0) attrs["minFrameSizeInBits"] = u32tos(s.MIN_FRAME_SIZE_IN_BITS);
        if (s.MAX_FRAME_SIZE_IN_BITS > 0) attrs["maxFrameSizeInBits"] = u32tos(s.MAX_FRAME_SIZE_IN_BITS);
        children.push_back(xml_elem("VariableFrameStream", std::move(attrs)));
    }
    for (const auto& s : ss.CUSTOM_STREAMS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = s.NAME;
        add_opt_attr(attrs, "shortDescription", s.SHORT_DESCRIPTION);
        add_opt_attr(attrs, "algorithmRef", s.ALGORITHM_REF);
        children.push_back(xml_elem("CustomStream", std::move(attrs)));
    }
    return xml_elem("StreamSet", {}, std::move(children));
}

// ============================================================================
// WRITE SERVICE SET
// ============================================================================

static XmlElement write_service_set_xml(const XtceServiceSet& ss) {
    std::vector<XmlElement> children;
    for (const auto& s : ss.SERVICES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = s.NAME;
        add_opt_attr(attrs, "shortDescription", s.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (s.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *s.LONG_DESCRIPTION));
        if (!s.CONTAINER_REFS.empty()) {
            std::vector<XmlElement> rc;
            for (const auto& cr : s.CONTAINER_REFS)
                rc.push_back(xml_elem("ContainerRef", {{"containerRef", cr}}));
            tc.push_back(xml_elem("ContainerRefList", {}, std::move(rc)));
        }
        if (!s.COMMAND_REFS.empty()) {
            std::vector<XmlElement> rc;
            for (const auto& cr : s.COMMAND_REFS)
                rc.push_back(xml_elem("CommandRef", {{"commandRef", cr}}));
            tc.push_back(xml_elem("CommandRefList", {}, std::move(rc)));
        }
        children.push_back(xml_elem("Service", std::move(attrs), std::move(tc)));
    }
    return xml_elem("ServiceSet", {}, std::move(children));
}

// ============================================================================
// WRITE ARGUMENT TYPE SET
// ============================================================================

static XmlElement write_arg_type_set_xml(const XtceArgumentTypeSet& ats) {
    std::vector<XmlElement> children;
    for (const auto& t : ats.INTEGER_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.SIGNED) attrs["signed"] = "true";
        if (t.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(t.SIZE_IN_BITS);
        if (t.INITIAL_VALUE) attrs["initialValue"] = i64tos(*t.INITIAL_VALUE);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.UNITS.empty()) tc.push_back(write_units_xml(t.UNITS));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("IntegerArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.FLOAT_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.SIZE_IN_BITS > 0) attrs["sizeInBits"] = u16tos(t.SIZE_IN_BITS);
        if (t.INITIAL_VALUE) attrs["initialValue"] = dtos(*t.INITIAL_VALUE);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.UNITS.empty()) tc.push_back(write_units_xml(t.UNITS));
        if (t.DATA_ENCODING) tc.push_back(write_float_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("FloatArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.STRING_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_string_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("StringArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.BOOLEAN_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.ONE_STRING_VALUE) attrs["oneStringValue"] = *t.ONE_STRING_VALUE;
        if (t.ZERO_STRING_VALUE) attrs["zeroStringValue"] = *t.ZERO_STRING_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("BooleanArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.ENUMERATED_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.INITIAL_VALUE) attrs["initialValue"] = *t.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_int_data_enc_xml(*t.DATA_ENCODING));
        if (!t.ENUMERATION_LIST.empty()) tc.push_back(write_enum_list_xml(t.ENUMERATION_LIST));
        children.push_back(xml_elem("EnumeratedArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.BINARY_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        if (t.INITIAL_VALUE) attrs["initialValue"] = *t.INITIAL_VALUE;
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (t.DATA_ENCODING) tc.push_back(write_binary_data_enc_xml(*t.DATA_ENCODING));
        children.push_back(xml_elem("BinaryArgumentType", std::move(attrs), std::move(tc)));
    }
    for (const auto& t : ats.AGGREGATE_TYPES) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = t.NAME;
        add_opt_attr(attrs, "shortDescription", t.SHORT_DESCRIPTION);
        std::vector<XmlElement> tc;
        if (t.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *t.LONG_DESCRIPTION));
        if (!t.MEMBERS.empty()) {
            std::vector<XmlElement> mc;
            for (const auto& m : t.MEMBERS) {
                std::map<std::string, std::string> ma;
                ma["name"] = m.NAME;
                ma["typeRef"] = m.TYPE_REF;
                add_opt_attr(ma, "shortDescription", m.SHORT_DESCRIPTION);
                mc.push_back(xml_elem("Member", std::move(ma)));
            }
            tc.push_back(xml_elem("MemberList", {}, std::move(mc)));
        }
        children.push_back(xml_elem("AggregateArgumentType", std::move(attrs), std::move(tc)));
    }
    return xml_elem("ArgumentTypeSet", {}, std::move(children));
}

// ============================================================================
// WRITE META COMMAND SET
// ============================================================================

static XmlElement write_meta_command_set_xml(const XtceMetaCommandSet& mcs) {
    std::vector<XmlElement> children;
    for (const auto& mc : mcs.META_COMMANDS) {
        std::map<std::string, std::string> attrs;
        attrs["name"] = mc.NAME;
        add_opt_attr(attrs, "shortDescription", mc.SHORT_DESCRIPTION);
        if (mc.ABSTRACT) attrs["abstract"] = "true";
        std::vector<XmlElement> tc;
        if (mc.LONG_DESCRIPTION) tc.push_back(el("LongDescription", *mc.LONG_DESCRIPTION));

        if (mc.BASE_META_COMMAND) {
            std::map<std::string, std::string> ba;
            ba["metaCommandRef"] = mc.BASE_META_COMMAND->META_COMMAND_REF;
            std::vector<XmlElement> bc;
            if (!mc.BASE_META_COMMAND->ARGUMENT_ASSIGNMENTS.empty()) {
                std::vector<XmlElement> ac;
                for (const auto& aa : mc.BASE_META_COMMAND->ARGUMENT_ASSIGNMENTS) {
                    ac.push_back(xml_elem("ArgumentAssignment", {
                        {"argumentName", aa.ARGUMENT_NAME},
                        {"argumentValue", aa.VALUE}
                    }));
                }
                bc.push_back(xml_elem("ArgumentAssignmentList", {}, std::move(ac)));
            }
            tc.push_back(xml_elem("BaseMetaCommand", std::move(ba), std::move(bc)));
        }

        if (!mc.ARGUMENTS.empty()) {
            std::vector<XmlElement> ac;
            for (const auto& arg : mc.ARGUMENTS) {
                std::map<std::string, std::string> aa;
                aa["name"] = arg.NAME;
                aa["argumentTypeRef"] = arg.ARGUMENT_TYPE_REF;
                add_opt_attr(aa, "shortDescription", arg.SHORT_DESCRIPTION);
                if (arg.INITIAL_VALUE) aa["initialValue"] = *arg.INITIAL_VALUE;
                ac.push_back(xml_elem("Argument", std::move(aa)));
            }
            tc.push_back(xml_elem("ArgumentList", {}, std::move(ac)));
        }

        if (mc.COMMAND_CONTAINER) {
            const auto& cc = *mc.COMMAND_CONTAINER;
            std::map<std::string, std::string> ca;
            ca["name"] = cc.NAME;
            std::vector<XmlElement> ccc;
            if (cc.BASE_CONTAINER) {
                std::map<std::string, std::string> ba;
                ba["containerRef"] = cc.BASE_CONTAINER->CONTAINER_REF;
                std::vector<XmlElement> bc;
                if (cc.BASE_CONTAINER->RESTRICTION_CRITERIA)
                    bc.push_back(write_match_criteria_xml("RestrictionCriteria", *cc.BASE_CONTAINER->RESTRICTION_CRITERIA));
                ccc.push_back(xml_elem("BaseContainer", std::move(ba), std::move(bc)));
            }
            if (!cc.ENTRY_LIST.empty()) {
                std::vector<XmlElement> ec;
                for (const auto& e : cc.ENTRY_LIST) {
                    if (e.ARGUMENT_REF_ENTRY) {
                        ec.push_back(xml_elem("ArgumentRefEntry", {{"argumentRef", e.ARGUMENT_REF_ENTRY->ARGUMENT_REF}}));
                    } else if (e.PARAMETER_REF_ENTRY) {
                        ec.push_back(xml_elem("ParameterRefEntry", {{"parameterRef", e.PARAMETER_REF_ENTRY->PARAMETER_REF}}));
                    } else if (e.FIXED_VALUE_ENTRY) {
                        std::map<std::string, std::string> ea;
                        ea["binaryValue"] = e.FIXED_VALUE_ENTRY->BINARY_VALUE;
                        if (e.FIXED_VALUE_ENTRY->SIZE_IN_BITS > 0) ea["sizeInBits"] = u16tos(e.FIXED_VALUE_ENTRY->SIZE_IN_BITS);
                        ec.push_back(xml_elem("FixedValueEntry", std::move(ea)));
                    }
                }
                ccc.push_back(xml_elem("EntryList", {}, std::move(ec)));
            }
            tc.push_back(xml_elem("CommandContainer", std::move(ca), std::move(ccc)));
        }

        if (!mc.VERIFIERS.empty()) {
            std::vector<XmlElement> vc;
            for (const auto& v : mc.VERIFIERS) {
                std::string vtag;
                switch (v.VERIFIER_TYPE) {
                    case VerifierType::START: vtag = "StartVerifier"; break;
                    case VerifierType::PROGRESS: vtag = "ProgressVerifier"; break;
                    case VerifierType::COMPLETE: vtag = "CompleteVerifier"; break;
                    case VerifierType::FAILED: vtag = "FailedVerifier"; break;
                }
                std::map<std::string, std::string> va;
                if (!v.NAME.empty()) va["name"] = v.NAME;
                vc.push_back(xml_elem(vtag, std::move(va)));
            }
            tc.push_back(xml_elem("VerifierSet", {}, std::move(vc)));
        }

        if (mc.SIGNIFICANCE) {
            std::map<std::string, std::string> sa;
            sa["consequenceLevel"] = u8tos(mc.SIGNIFICANCE->CONSEQUENCE_LEVEL);
            add_opt_attr(sa, "reasonForWarning", mc.SIGNIFICANCE->REASON_FOR_WARNING);
            tc.push_back(xml_elem("Significance", std::move(sa)));
        }

        children.push_back(xml_elem("MetaCommand", std::move(attrs), std::move(tc)));
    }
    return xml_elem("MetaCommandSet", {}, std::move(children));
}

// ============================================================================
// WRITE SPACE SYSTEM (recursive)
// ============================================================================

static XmlElement write_space_system_xml(const XtceSpaceSystem& ss, bool is_root) {
    std::map<std::string, std::string> attrs;
    attrs["name"] = ss.NAME;
    if (is_root) attrs["xmlns"] = "http://www.omg.org/spec/XTCE/20180204";
    add_opt_attr(attrs, "shortDescription", ss.SHORT_DESCRIPTION);
    add_opt_attr(attrs, "operationalStatus", ss.OPERATIONAL_STATUS);

    std::vector<XmlElement> children;
    if (ss.LONG_DESCRIPTION) children.push_back(el("LongDescription", *ss.LONG_DESCRIPTION));

    if (ss.HEADER) {
        const auto& h = *ss.HEADER;
        std::map<std::string, std::string> ha;
        add_opt_attr(ha, "version", h.VERSION);
        add_opt_attr(ha, "date", h.DATE);
        add_opt_attr(ha, "classification", h.CLASSIFICATION);
        add_opt_attr(ha, "validationStatus", h.VALIDATION_STATUS);
        add_opt_attr(ha, "author", h.AUTHOR);
        std::vector<XmlElement> hc;
        if (!h.NOTES.empty()) {
            std::vector<XmlElement> nc;
            for (const auto& n : h.NOTES) nc.push_back(el("Note", n));
            hc.push_back(xml_elem("NoteSet", {}, std::move(nc)));
        }
        children.push_back(xml_elem("Header", std::move(ha), std::move(hc)));
    }

    if (ss.TELEMETRY_META_DATA) {
        const auto& tm = *ss.TELEMETRY_META_DATA;
        std::vector<XmlElement> tc;
        if (tm.PARAMETER_TYPE_SET) tc.push_back(write_param_type_set_xml(*tm.PARAMETER_TYPE_SET));
        if (tm.PARAMETER_SET) tc.push_back(write_param_set_xml(*tm.PARAMETER_SET));
        if (tm.CONTAINER_SET) tc.push_back(write_container_set_xml("ContainerSet", *tm.CONTAINER_SET));
        if (tm.ALGORITHM_SET) tc.push_back(write_algorithm_set_xml(*tm.ALGORITHM_SET));
        if (tm.STREAM_SET) tc.push_back(write_stream_set_xml(*tm.STREAM_SET));
        children.push_back(xml_elem("TelemetryMetaData", {}, std::move(tc)));
    }

    if (ss.COMMAND_META_DATA) {
        const auto& cm = *ss.COMMAND_META_DATA;
        std::vector<XmlElement> tc;
        if (cm.ARGUMENT_TYPE_SET) tc.push_back(write_arg_type_set_xml(*cm.ARGUMENT_TYPE_SET));
        if (cm.PARAMETER_TYPE_SET) tc.push_back(write_param_type_set_xml(*cm.PARAMETER_TYPE_SET));
        if (cm.PARAMETER_SET) tc.push_back(write_param_set_xml(*cm.PARAMETER_SET));
        if (cm.META_COMMAND_SET) tc.push_back(write_meta_command_set_xml(*cm.META_COMMAND_SET));
        if (cm.COMMAND_CONTAINER_SET) tc.push_back(write_container_set_xml("CommandContainerSet", *cm.COMMAND_CONTAINER_SET));
        if (cm.ALGORITHM_SET) tc.push_back(write_algorithm_set_xml(*cm.ALGORITHM_SET));
        if (cm.STREAM_SET) tc.push_back(write_stream_set_xml(*cm.STREAM_SET));
        children.push_back(xml_elem("CommandMetaData", {}, std::move(tc)));
    }

    if (ss.SERVICE_SET) children.push_back(write_service_set_xml(*ss.SERVICE_SET));

    for (const auto& child_ss : ss.CHILD_SYSTEMS) {
        children.push_back(write_space_system_xml(child_ss, false));
    }

    return xml_elem("SpaceSystem", std::move(attrs), std::move(children));
}

// ============================================================================
// PUBLIC: write_xtce_xml
// ============================================================================

std::string write_xtce_xml(const XtceMessage& msg) {
    auto root = write_space_system_xml(msg.space_system, true);
    return write_xml(root);
}

} // namespace ccsds
