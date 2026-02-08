#pragma once
#include <string>
#include <string_view>
#include <optional>
#include <vector>
#include <cstdint>

namespace ccsds {

// ============================================================================
// ENUMERATIONS
// ============================================================================

// macOS defines BIG_ENDIAN, LITTLE_ENDIAN, BYTE_ORDER as macros in <sys/__endian.h>
#ifdef BIG_ENDIAN
#undef BIG_ENDIAN
#endif
#ifdef LITTLE_ENDIAN
#undef LITTLE_ENDIAN
#endif
#ifdef BYTE_ORDER
#undef BYTE_ORDER
#endif

enum class ComparisonOperator {
    EQ, NE, GT, LT, GE, LE,
    STARTS_WITH, ENDS_WITH, CONTAINS,
    NOT_STARTS_WITH, NOT_ENDS_WITH, NOT_CONTAINS
};

enum class DataSourceType {
    TELEMETERED, DERIVED, CONSTANT, LOCAL, GROUND
};

enum class BooleanOperatorType {
    BOOL_AND, BOOL_OR, BOOL_XOR
};

enum class ReferenceLocationType {
    CONTAINER_START, CONTAINER_END, PREVIOUS_ENTRY, NEXT_ENTRY
};

enum class RateBasisType {
    PER_SECOND, PER_CONTAINER
};

enum class ByteOrderType {
    BIG_ENDIAN, LITTLE_ENDIAN
};

enum class IntegerEncodingType {
    UNSIGNED, TWOS_COMPLEMENT, SIGN_MAGNITUDE, ONES_COMPLEMENT, BCD, PACKED_BCD
};

enum class FloatEncodingType {
    IEEE754_1985, MILSTD_1750A, DEC, IBM, TI
};

enum class StringEncodingType {
    US_ASCII, ISO_8859_1, WINDOWS_1252, UTF_8, UTF_16, UTF_16BE, UTF_16LE
};

enum class StringSizeType {
    FIXED, LEADING_SIZE, TERMINATION_CHAR
};

enum class AlarmSeverityType {
    NORMAL, WATCH, WARNING, DISTRESS, CRITICAL, SEVERE
};

enum class VerifierType {
    START, PROGRESS, COMPLETE, FAILED
};

enum class TimeWindowRefType {
    COMMAND_RELEASE, TIME_LAST_VERIFIER_PASSED
};

enum class EpochType {
    TAI, J2000, UNIX, GPS, CUSTOM
};

enum class ErrorDetectionType {
    NONE, CRC, CHECKSUM, PARITY
};

// ============================================================================
// DATA ENCODING TYPES
// ============================================================================

struct XtceIntegerDataEncoding {
    uint16_t SIZE_IN_BITS = 0;
    ByteOrderType BYTE_ORDER = ByteOrderType::BIG_ENDIAN;
    IntegerEncodingType ENCODING = IntegerEncodingType::UNSIGNED;
    std::optional<std::string> DEFAULT_CALIBRATOR;
};

struct XtceFloatDataEncoding {
    uint16_t SIZE_IN_BITS = 0;
    ByteOrderType BYTE_ORDER = ByteOrderType::BIG_ENDIAN;
    FloatEncodingType ENCODING = FloatEncodingType::IEEE754_1985;
    std::optional<std::string> DEFAULT_CALIBRATOR;
};

struct XtceStringDataEncoding {
    StringEncodingType ENCODING = StringEncodingType::UTF_8;
    StringSizeType SIZE_TYPE = StringSizeType::FIXED;
    uint16_t SIZE_IN_BITS = 0;
    uint8_t TERMINATION_CHAR = 0;
    uint16_t MAX_SIZE_IN_BITS = 0;
    uint8_t LEADING_SIZE_BITS = 0;
};

struct XtceBinaryDataEncoding {
    uint16_t SIZE_IN_BITS = 0;
    uint16_t MAX_SIZE_IN_BITS = 0;
    uint8_t LEADING_SIZE_BITS = 0;
};

// ============================================================================
// CALIBRATION TYPES
// ============================================================================

struct XtcePolynomialCalibrator {
    std::vector<double> COEFFICIENTS;
};

struct XtceSplinePoint {
    double RAW = 0;
    double CALIBRATED = 0;
};

struct XtceSplineCalibrator {
    std::vector<XtceSplinePoint> POINTS;
    bool EXTRAPOLATE_LOW = false;
    bool EXTRAPOLATE_HIGH = false;
};

struct XtceMathOperation {
    std::string RPN_EXPRESSION;
};

// Forward declarations
struct XtceMatchCriteria;

struct XtceContextCalibrator {
    std::optional<XtcePolynomialCalibrator> POLYNOMIAL;
    std::optional<XtceSplineCalibrator> SPLINE;
    std::optional<XtceMathOperation> MATH_OPERATION;
    // MATCH_CRITERIA handled via shared_ptr for forward reference
};

// ============================================================================
// ALARM DEFINITIONS
// ============================================================================

struct XtceAlarmRange {
    std::optional<double> MIN_INCLUSIVE;
    std::optional<double> MAX_INCLUSIVE;
    std::optional<double> MIN_EXCLUSIVE;
    std::optional<double> MAX_EXCLUSIVE;
};

struct XtceStaticAlarmRanges {
    std::optional<XtceAlarmRange> WATCH_RANGE;
    std::optional<XtceAlarmRange> WARNING_RANGE;
    std::optional<XtceAlarmRange> DISTRESS_RANGE;
    std::optional<XtceAlarmRange> CRITICAL_RANGE;
    std::optional<XtceAlarmRange> SEVERE_RANGE;
};

struct XtceEnumerationAlarm {
    std::string LABEL;
    AlarmSeverityType ALARM_LEVEL = AlarmSeverityType::NORMAL;
};

struct XtceDefaultAlarm {
    uint16_t MIN_VIOLATIONS = 0;
    std::optional<XtceStaticAlarmRanges> STATIC_ALARM_RANGES;
    std::vector<XtceEnumerationAlarm> ENUMERATION_ALARMS;
};

// ============================================================================
// MATCH CRITERIA AND CONDITIONS
// ============================================================================

struct XtceParameterComparison {
    std::string PARAMETER_REF;
    ComparisonOperator OPERATOR = ComparisonOperator::EQ;
    std::string VALUE;
    bool USE_CALIBRATED_VALUE = true;
};

struct XtceBooleanExpression {
    BooleanOperatorType OPERATOR = BooleanOperatorType::BOOL_AND;
    std::vector<XtceParameterComparison> CONDITIONS;
    std::vector<XtceBooleanExpression> EXPRESSIONS;
};

struct XtceMatchCriteria {
    std::optional<XtceParameterComparison> COMPARISON;
    std::vector<XtceParameterComparison> COMPARISON_LIST;
    std::optional<XtceBooleanExpression> BOOLEAN_EXPRESSION;
    std::optional<std::string> CUSTOM_ALGORITHM;
};

struct XtceContextAlarm {
    XtceMatchCriteria MATCH_CRITERIA;
    XtceDefaultAlarm ALARM;
};

// ============================================================================
// UNIT SPECIFICATION
// ============================================================================

struct XtceUnit {
    std::optional<std::string> DESCRIPTION;
    std::optional<std::string> SYMBOL;
    std::optional<double> POWER;
    std::optional<double> FACTOR;
};

// ============================================================================
// ENUMERATION VALUE
// ============================================================================

struct XtceEnumerationValue {
    std::string LABEL;
    int64_t VALUE = 0;
    std::optional<int64_t> MAX_VALUE;
    std::optional<std::string> DESCRIPTION;
};

// ============================================================================
// PARAMETER TYPES
// ============================================================================

struct XtceIntegerParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceUnit> UNITS;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
    std::optional<int64_t> VALID_MIN;
    std::optional<int64_t> VALID_MAX;
    bool SIGNED = false;
    uint16_t SIZE_IN_BITS = 0;
    std::optional<int64_t> INITIAL_VALUE;
};

struct XtceFloatParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceUnit> UNITS;
    std::optional<XtceFloatDataEncoding> DATA_ENCODING;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
    std::optional<double> VALID_MIN;
    std::optional<double> VALID_MAX;
    uint16_t SIZE_IN_BITS = 0;
    std::optional<double> INITIAL_VALUE;
};

struct XtceStringParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceStringDataEncoding> DATA_ENCODING;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
    std::optional<std::string> INITIAL_VALUE;
    std::optional<std::string> RESTRICTION_PATTERN;
};

struct XtceBooleanParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<std::string> ONE_STRING_VALUE;
    std::optional<std::string> ZERO_STRING_VALUE;
    bool INITIAL_VALUE = false;
};

struct XtceEnumeratedParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
    std::vector<XtceEnumerationValue> ENUMERATION_LIST;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceBinaryParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceBinaryDataEncoding> DATA_ENCODING;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceAbsoluteTimeParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    EpochType EPOCH = EpochType::UNIX;
    std::optional<std::string> EPOCH_DATE;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<double> SCALE;
    std::optional<double> OFFSET;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
};

struct XtceRelativeTimeParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceUnit> UNITS;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<XtceDefaultAlarm> DEFAULT_ALARM;
    std::vector<XtceContextAlarm> CONTEXT_ALARMS;
};

struct XtceArrayDimension {
    uint32_t SIZE = 0;
    std::optional<std::string> SIZE_PARAMETER_REF;
};

struct XtceArrayParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<std::string> ARRAY_TYPE_REF;
    std::vector<XtceArrayDimension> DIMENSIONS;
};

struct XtceAggregateMember {
    std::string NAME;
    std::string TYPE_REF;
    std::optional<std::string> SHORT_DESCRIPTION;
};

struct XtceAggregateParameterType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceAggregateMember> MEMBERS;
};

struct XtceParameterTypeSet {
    std::vector<XtceIntegerParameterType> INTEGER_TYPES;
    std::vector<XtceFloatParameterType> FLOAT_TYPES;
    std::vector<XtceStringParameterType> STRING_TYPES;
    std::vector<XtceBooleanParameterType> BOOLEAN_TYPES;
    std::vector<XtceEnumeratedParameterType> ENUMERATED_TYPES;
    std::vector<XtceBinaryParameterType> BINARY_TYPES;
    std::vector<XtceAbsoluteTimeParameterType> ABSOLUTE_TIME_TYPES;
    std::vector<XtceRelativeTimeParameterType> RELATIVE_TIME_TYPES;
    std::vector<XtceArrayParameterType> ARRAY_TYPES;
    std::vector<XtceAggregateParameterType> AGGREGATE_TYPES;
};

// ============================================================================
// PARAMETER DEFINITIONS
// ============================================================================

struct XtceParameterProperties {
    DataSourceType DATA_SOURCE = DataSourceType::TELEMETERED;
    bool READ_ONLY = true;
    std::optional<std::string> SYSTEM_NAME;
};

struct XtceParameter {
    std::string NAME;
    std::string PARAMETER_TYPE_REF;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceParameterProperties> PROPERTIES;
    std::optional<std::string> PHYSICAL_ADDRESS;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceParameterSet {
    std::vector<XtceParameter> PARAMETERS;
};

// ============================================================================
// CONTAINER DEFINITIONS
// ============================================================================

struct XtceLocationInContainer {
    ReferenceLocationType REFERENCE_LOCATION = ReferenceLocationType::PREVIOUS_ENTRY;
    int32_t OFFSET_IN_BITS = 0;
};

struct XtceRepeatEntry {
    uint32_t COUNT = 0;
    std::optional<std::string> COUNT_PARAMETER_REF;
    int32_t OFFSET_IN_BITS = 0;
};

struct XtceParameterRefEntry {
    std::string PARAMETER_REF;
    std::optional<XtceLocationInContainer> LOCATION;
    std::optional<XtceRepeatEntry> REPEAT;
    std::optional<XtceMatchCriteria> INCLUDE_CONDITION;
    std::optional<std::string> SHORT_DESCRIPTION;
};

struct XtceContainerRefEntry {
    std::string CONTAINER_REF;
    std::optional<XtceLocationInContainer> LOCATION;
    std::optional<XtceRepeatEntry> REPEAT;
    std::optional<XtceMatchCriteria> INCLUDE_CONDITION;
};

struct XtceFixedValueEntry {
    std::string BINARY_VALUE;
    uint16_t SIZE_IN_BITS = 0;
    std::optional<std::string> NAME;
    std::optional<XtceLocationInContainer> LOCATION;
};

struct XtceArrayParameterRefEntry {
    std::string PARAMETER_REF;
    std::optional<XtceLocationInContainer> LOCATION;
    uint32_t FIRST_INDEX = 0;
    uint32_t LAST_INDEX = 0;
};

struct XtceContainerEntry {
    std::optional<XtceParameterRefEntry> PARAMETER_REF_ENTRY;
    std::optional<XtceContainerRefEntry> CONTAINER_REF_ENTRY;
    std::optional<XtceFixedValueEntry> FIXED_VALUE_ENTRY;
    std::optional<XtceArrayParameterRefEntry> ARRAY_PARAMETER_REF_ENTRY;
};

struct XtceBaseContainer {
    std::string CONTAINER_REF;
    std::optional<XtceMatchCriteria> RESTRICTION_CRITERIA;
};

struct XtceRateInStream {
    std::optional<std::string> STREAM_REF;
    double RATE = 0;
    RateBasisType BASIS = RateBasisType::PER_SECOND;
};

struct XtceContainerBinaryEncoding {
    ErrorDetectionType ERROR_DETECTION = ErrorDetectionType::NONE;
    std::optional<std::string> CRC_POLYNOMIAL;
    uint32_t SIZE_IN_BITS = 0;
};

struct XtceSequenceContainer {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    bool ABSTRACT = false;
    std::vector<XtceContainerEntry> ENTRY_LIST;
    std::optional<XtceBaseContainer> BASE_CONTAINER;
    std::optional<XtceContainerBinaryEncoding> BINARY_ENCODING;
    std::optional<XtceRateInStream> RATE_IN_STREAM;
    std::optional<std::string> IDLE_PATTERN;
};

struct XtceContainerSet {
    std::vector<XtceSequenceContainer> CONTAINERS;
};

// ============================================================================
// ALGORITHM DEFINITIONS
// ============================================================================

struct XtceAlgorithmInput {
    std::string PARAMETER_REF;
    std::optional<std::string> INPUT_NAME;
};

struct XtceAlgorithmOutput {
    std::string PARAMETER_REF;
    std::optional<std::string> OUTPUT_NAME;
};

struct XtceAlgorithmTrigger {
    std::optional<std::string> PARAMETER_REF;
    std::optional<std::string> CONTAINER_REF;
    std::optional<double> RATE;
};

struct XtceCustomAlgorithm {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<std::string> LANGUAGE;
    std::optional<std::string> ALGORITHM_TEXT;
    std::optional<std::string> EXTERNAL_ALGORITHM_REF;
    std::vector<XtceAlgorithmInput> INPUTS;
    std::vector<XtceAlgorithmOutput> OUTPUTS;
    std::vector<XtceAlgorithmTrigger> TRIGGERS;
};

struct XtceMathAlgorithm {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> MATH_OPERATION;
    std::optional<std::string> OUTPUT_PARAMETER_REF;
    std::vector<XtceAlgorithmTrigger> TRIGGERS;
};

struct XtceAlgorithmSet {
    std::vector<XtceCustomAlgorithm> CUSTOM_ALGORITHMS;
    std::vector<XtceMathAlgorithm> MATH_ALGORITHMS;
};

// ============================================================================
// COMMAND ARGUMENT TYPES
// ============================================================================

struct XtceIntegerArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceUnit> UNITS;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<int64_t> VALID_MIN;
    std::optional<int64_t> VALID_MAX;
    bool SIGNED = false;
    uint16_t SIZE_IN_BITS = 0;
    std::optional<int64_t> INITIAL_VALUE;
};

struct XtceFloatArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceUnit> UNITS;
    std::optional<XtceFloatDataEncoding> DATA_ENCODING;
    std::optional<double> VALID_MIN;
    std::optional<double> VALID_MAX;
    uint16_t SIZE_IN_BITS = 0;
    std::optional<double> INITIAL_VALUE;
};

struct XtceStringArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceStringDataEncoding> DATA_ENCODING;
    std::optional<std::string> INITIAL_VALUE;
    std::optional<std::string> RESTRICTION_PATTERN;
};

struct XtceBooleanArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::optional<std::string> ONE_STRING_VALUE;
    std::optional<std::string> ZERO_STRING_VALUE;
    bool INITIAL_VALUE = false;
};

struct XtceEnumeratedArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceIntegerDataEncoding> DATA_ENCODING;
    std::vector<XtceEnumerationValue> ENUMERATION_LIST;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceBinaryArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<XtceBinaryDataEncoding> DATA_ENCODING;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceAggregateArgumentType {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<XtceAggregateMember> MEMBERS;
};

struct XtceArgumentTypeSet {
    std::vector<XtceIntegerArgumentType> INTEGER_TYPES;
    std::vector<XtceFloatArgumentType> FLOAT_TYPES;
    std::vector<XtceStringArgumentType> STRING_TYPES;
    std::vector<XtceBooleanArgumentType> BOOLEAN_TYPES;
    std::vector<XtceEnumeratedArgumentType> ENUMERATED_TYPES;
    std::vector<XtceBinaryArgumentType> BINARY_TYPES;
    std::vector<XtceAggregateArgumentType> AGGREGATE_TYPES;
};

// ============================================================================
// COMMAND DEFINITIONS
// ============================================================================

struct XtceArgument {
    std::string NAME;
    std::string ARGUMENT_TYPE_REF;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<std::string> INITIAL_VALUE;
};

struct XtceArgumentRefEntry {
    std::string ARGUMENT_REF;
    std::optional<XtceLocationInContainer> LOCATION;
    std::optional<std::string> SHORT_DESCRIPTION;
};

struct XtceCommandContainerEntry {
    std::optional<XtceArgumentRefEntry> ARGUMENT_REF_ENTRY;
    std::optional<XtceParameterRefEntry> PARAMETER_REF_ENTRY;
    std::optional<XtceFixedValueEntry> FIXED_VALUE_ENTRY;
};

struct XtceCommandContainer {
    std::string NAME;
    std::vector<XtceCommandContainerEntry> ENTRY_LIST;
    std::optional<XtceBaseContainer> BASE_CONTAINER;
};

struct XtceCommandVerifier {
    std::string NAME;
    VerifierType VERIFIER_TYPE = VerifierType::COMPLETE;
    std::optional<XtceMatchCriteria> CONDITION;
    std::optional<std::string> CONTAINER_REF;
    std::optional<double> TIME_WINDOW_START;
    std::optional<double> TIME_WINDOW_STOP;
    TimeWindowRefType TIME_WINDOW_REF = TimeWindowRefType::COMMAND_RELEASE;
};

struct XtceCommandSignificance {
    uint8_t CONSEQUENCE_LEVEL = 0;
    std::optional<std::string> REASON_FOR_WARNING;
};

struct XtceArgumentAssignment {
    std::string ARGUMENT_NAME;
    std::string VALUE;
};

struct XtceBaseMetaCommand {
    std::string META_COMMAND_REF;
    std::vector<XtceArgumentAssignment> ARGUMENT_ASSIGNMENTS;
};

struct XtceInterlock {
    std::string PARAMETER_REF;
    std::string VALUE;
    ComparisonOperator OPERATOR = ComparisonOperator::EQ;
};

struct XtceMetaCommand {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    bool ABSTRACT = false;
    std::vector<XtceArgument> ARGUMENTS;
    std::optional<XtceCommandContainer> COMMAND_CONTAINER;
    std::optional<XtceBaseMetaCommand> BASE_META_COMMAND;
    std::vector<XtceCommandVerifier> VERIFIERS;
    std::optional<XtceCommandSignificance> SIGNIFICANCE;
    std::vector<XtceInterlock> INTERLOCKS;
    std::optional<XtceCommandSignificance> DEFAULT_SIGNIFICANCE;
};

struct XtceMetaCommandSet {
    std::vector<XtceMetaCommand> META_COMMANDS;
};

// ============================================================================
// STREAM DEFINITIONS
// ============================================================================

struct XtceFixedFrameStream {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    uint32_t FRAME_SIZE_IN_BITS = 0;
    std::optional<std::string> SYNC_PATTERN;
};

struct XtceVariableFrameStream {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    uint32_t MIN_FRAME_SIZE_IN_BITS = 0;
    uint32_t MAX_FRAME_SIZE_IN_BITS = 0;
    uint32_t SIZE_FIELD_OFFSET = 0;
    uint16_t SIZE_FIELD_SIZE = 0;
};

struct XtceCustomStream {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> ALGORITHM_REF;
};

struct XtceStreamSet {
    std::vector<XtceFixedFrameStream> FIXED_FRAME_STREAMS;
    std::vector<XtceVariableFrameStream> VARIABLE_FRAME_STREAMS;
    std::vector<XtceCustomStream> CUSTOM_STREAMS;
};

// ============================================================================
// SERVICE DEFINITIONS
// ============================================================================

struct XtceService {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::vector<std::string> CONTAINER_REFS;
    std::vector<std::string> COMMAND_REFS;
};

struct XtceServiceSet {
    std::vector<XtceService> SERVICES;
};

// ============================================================================
// HEADER
// ============================================================================

struct XtceHeader {
    std::optional<std::string> VERSION;
    std::optional<std::string> DATE;
    std::optional<std::string> CLASSIFICATION;
    std::optional<std::string> VALIDATION_STATUS;
    std::optional<std::string> AUTHOR;
    std::vector<std::string> NOTES;
};

// ============================================================================
// TELEMETRY METADATA
// ============================================================================

struct XtceTelemetryMetaData {
    std::optional<XtceParameterTypeSet> PARAMETER_TYPE_SET;
    std::optional<XtceParameterSet> PARAMETER_SET;
    std::optional<XtceContainerSet> CONTAINER_SET;
    std::optional<XtceAlgorithmSet> ALGORITHM_SET;
    std::optional<XtceStreamSet> STREAM_SET;
};

// ============================================================================
// COMMAND METADATA
// ============================================================================

struct XtceCommandMetaData {
    std::optional<XtceArgumentTypeSet> ARGUMENT_TYPE_SET;
    std::optional<XtceParameterTypeSet> PARAMETER_TYPE_SET;
    std::optional<XtceParameterSet> PARAMETER_SET;
    std::optional<XtceMetaCommandSet> META_COMMAND_SET;
    std::optional<XtceContainerSet> COMMAND_CONTAINER_SET;
    std::optional<XtceAlgorithmSet> ALGORITHM_SET;
    std::optional<XtceStreamSet> STREAM_SET;
};

// ============================================================================
// SPACE SYSTEM (ROOT)
// ============================================================================

struct XtceSpaceSystem {
    std::string NAME;
    std::optional<std::string> SHORT_DESCRIPTION;
    std::optional<std::string> LONG_DESCRIPTION;
    std::optional<std::string> OPERATIONAL_STATUS;
    std::optional<XtceHeader> HEADER;
    std::optional<XtceTelemetryMetaData> TELEMETRY_META_DATA;
    std::optional<XtceCommandMetaData> COMMAND_META_DATA;
    std::optional<XtceServiceSet> SERVICE_SET;
    std::vector<XtceSpaceSystem> CHILD_SYSTEMS;
};

// ============================================================================
// TOP-LEVEL MESSAGE
// ============================================================================

struct XtceMessage {
    XtceSpaceSystem space_system;
};

// ============================================================================
// PARSE / WRITE FUNCTIONS
// ============================================================================

XtceMessage parse_xtce_xml(std::string_view text);
std::string write_xtce_xml(const XtceMessage& msg);

} // namespace ccsds
