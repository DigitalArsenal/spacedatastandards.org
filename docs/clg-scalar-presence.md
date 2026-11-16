# Exhaustive scalar presence inventory

Normative companion to [contract](clg-contract.md) section 3. Every scalar declared by schema/ACW/main.fbs and schema/CLG/main.fbs appears below, including old ACW tables revised by appended flags, enum fields, boolean fields, struct components, presence bits, and scalar-vector elements. Included external standards are unchanged and retain their declared contracts.

No optional scalars occur. Table fields use the SDS value/HAS_FIELD convention. Struct scalar groups are atomic; a producer sets the group bit only after every component is supplied. Presence bits encode absence themselves, so absent and false have the same metadata meaning, never a domain default. A containing optional struct/table pointer must also exist. Required strings/tables/vectors use FlatBuffers required pointers where unconditional; conditional pointer applicability is checked before use. Present empty vectors and omitted vectors remain distinct. NaN, infinity, negative indices and domain-invalid enums fail even with presence true. Wire defaults are not evidence of supply.

For ACW operations 3/4, applicable request state, station, constraint, sensor and control scalars require true flags. Conditional override/signature/identity/result diagnostic fields use false when absent; successful output quantities use true when applicable. Flags append after old slots, preserving conformance. See [contract](clg-contract.md) section 3 for archive conversion and applicability.

## ACW limiting-constraint indices

ACWAccessWindow.START_LIMITING_CONSTRAINT_INDEX and END_LIMITING_CONSTRAINT_INDEX are absent for boundaries clipped to the sample span: the corresponding HAS_START_LIMITING_CONSTRAINT_INDEX or HAS_END_LIMITING_CONSTRAINT_INDEX is false and the associated label is absent. With a true flag the index is nonnegative and within the flattened depth-first constraint list. A true flag with a negative value fails. The retained wire default is not a clipping sentinel. Output producers and the archive converter apply this same rule.

## Enumeration domains and presence

All new CLG enumerations declare UNSPECIFIED=0. With the applicable individual or atomic-group HAS flag true, UNSPECIFIED is invalid. With the flag false the value is absent. Required applicable values need a true flag and an implemented nonzero member. Included enums follow their own domains, not the CLG zero rule. Existing ACW ordinals are unchanged:

- acwOperationCode: ACWRequest.OPERATION uses HAS_OPERATION. False is absent and fails an executable request. With true, UNKNOWN=0 is invalid, COMPUTE_ACCESS_WINDOWS=1 and SIMULATE_OBSERVATIONS=2 require offline conversion and fail runtime dispatch, and COMPUTE_ACCESS_WINDOWS_EXPLICIT_BODY=3 or SIMULATE_OBSERVATIONS_EXPLICIT_BODY=4 selects the corresponding supported body-aware operation.
- acwResultStatus: ACWResult.STATUS uses HAS_STATUS. True permits OK=0, INVALID_INPUT=1 or UNSUPPORTED_OPERATION=2; false means missing status, never success.
- acwRefractionModelKind: ACWRefractionModel.MODEL_KIND uses HAS_MODEL_KIND. True permits NONE=0 or EARTH_STANDARD_ATMOSPHERE=1 subject to the explicit body/model support rule; false means omitted, never NONE. A supplied applicable model requires true.
- acwConstraintKind: ACWConstraint.KIND uses HAS_KIND. True requires an implemented member MIN_ELEVATION=1 through BLACKOUT=9; UNSPECIFIED=0 is invalid. False means absent and fails a supplied constraint.
- acwConstraintOperator: ACWConstraintSet.OPERATOR uses HAS_OPERATOR. True permits ALL_OF=0 or ANY_OF=1; false means omitted and fails a supplied set.
- acwEvaluationMode: ACWRequest.EVALUATION_MODE and ACWResult.EVALUATION_MODE each use their own HAS_EVALUATION_MODE. True permits DISCRETE=0 or CONTINUOUS=1; false means omitted, never DISCRETE. Applicable requests and successful access results require true; an inapplicable result diagnostic is absent.
- acwLightingCondition: ACWConstraint.LIGHTING uses HAS_LIGHTING. For KIND=TARGET_LIGHTING, true permits ANY=0, SUNLIT=1, PENUMBRA=2, UMBRA=3 or NOT_UMBRA=4. False means omitted and fails that applicable constraint. For other kinds LIGHTING is absent.
- acwSensorPhenomenology: ACWSensor.PHENOMENOLOGY uses HAS_PHENOMENOLOGY. True permits implemented RADAR=1, OPTICAL=2, PASSIVE_RF=3 or LASER_RANGING=4; UNSPECIFIED=0 is invalid. False means absent and fails a supplied sensor.

Every enum value outside its declared and implemented domain fails with a true flag. An omitted or false flag never supplies a default domain value.


## schema/ACW/main.fbs

| Table/struct | Scalar field | Type | Presence rule |
|---|---|---|---|
| BodyDescriptor | NAIF_ID | int | HAS_NAIF_ID must be true before reading the value; false = omitted; true + zero = supplied zero. |
| BodyDescriptor | SEMI_AXIS_X_M | double | HAS_SEMI_AXIS_X_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| BodyDescriptor | SEMI_AXIS_Y_M | double | HAS_SEMI_AXIS_Y_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| BodyDescriptor | SEMI_AXIS_Z_M | double | HAS_SEMI_AXIS_Z_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| BodyDescriptor | LIGHTING_SPHERE_RADIUS_M | double | HAS_LIGHTING_SPHERE_RADIUS_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| BodyDescriptor | HAS_NAIF_ID | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| BodyDescriptor | HAS_SEMI_AXIS_X_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| BodyDescriptor | HAS_SEMI_AXIS_Y_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| BodyDescriptor | HAS_SEMI_AXIS_Z_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| BodyDescriptor | HAS_LIGHTING_SPHERE_RADIUS_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | JULIAN_DATE_TT | double | HAS_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | POSITION_X_M | double | HAS_POSITION_X_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | POSITION_Y_M | double | HAS_POSITION_Y_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | POSITION_Z_M | double | HAS_POSITION_Z_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | VELOCITY_X_MPS | double | HAS_VELOCITY_X_MPS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | VELOCITY_Y_MPS | double | HAS_VELOCITY_Y_MPS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | VELOCITY_Z_MPS | double | HAS_VELOCITY_Z_MPS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWStateSample | HAS_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_POSITION_X_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_POSITION_Y_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_POSITION_Z_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_VELOCITY_X_MPS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_VELOCITY_Y_MPS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWStateSample | HAS_VELOCITY_Z_MPS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWElevationMaskPoint | AZIMUTH_RAD | double | HAS_AZIMUTH_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWElevationMaskPoint | ELEVATION_RAD | double | HAS_ELEVATION_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWElevationMaskPoint | HAS_AZIMUTH_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWElevationMaskPoint | HAS_ELEVATION_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRefractionModel | MODEL_KIND | acwRefractionModelKind | HAS_MODEL_KIND must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRefractionModel | PRESSURE_PA | double | HAS_PRESSURE_PA must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRefractionModel | TEMPERATURE_K | double | HAS_TEMPERATURE_K must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRefractionModel | HAS_MODEL_KIND | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRefractionModel | HAS_PRESSURE_PA | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRefractionModel | HAS_TEMPERATURE_K | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWBlackoutWindow | START_JULIAN_DATE_TT | double | HAS_START_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWBlackoutWindow | END_JULIAN_DATE_TT | double | HAS_END_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWBlackoutWindow | HAS_START_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWBlackoutWindow | HAS_END_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWGroundStation | LATITUDE_RAD | double | HAS_LATITUDE_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWGroundStation | LONGITUDE_RAD | double | HAS_LONGITUDE_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWGroundStation | ALTITUDE_M | double | HAS_ALTITUDE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWGroundStation | MIN_ELEVATION_RAD | double | HAS_MIN_ELEVATION_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWGroundStation | CHANNEL_CAPACITY | uint32 | HAS_CHANNEL_CAPACITY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWGroundStation | HAS_LATITUDE_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWGroundStation | HAS_LONGITUDE_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWGroundStation | HAS_ALTITUDE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWGroundStation | HAS_MIN_ELEVATION_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWGroundStation | HAS_CHANNEL_CAPACITY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | KIND | acwConstraintKind | HAS_KIND must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | THRESHOLD_RAD | double | HAS_THRESHOLD_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | MIN_RANGE_M | double | HAS_MIN_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | MAX_RANGE_M | double | HAS_MAX_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | LIGHTING | acwLightingCondition | HAS_LIGHTING must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | OCCULTATION_ATMOSPHERE_HEIGHT_M | double | HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraint | HAS_KIND | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | HAS_THRESHOLD_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | HAS_MIN_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | HAS_MAX_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | HAS_LIGHTING | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraint | HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWConstraintSet | OPERATOR | acwConstraintOperator | HAS_OPERATOR must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWConstraintSet | HAS_OPERATOR | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTargetSignature | RCS_M2 | double | HAS_RCS_M2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTargetSignature | DIAMETER_M | double | HAS_DIAMETER_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTargetSignature | GEOMETRIC_ALBEDO | double | HAS_GEOMETRIC_ALBEDO must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTargetSignature | EMITTER_FREQUENCY_HZ | double | HAS_EMITTER_FREQUENCY_HZ must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTargetSignature | EMITTER_EIRP_DBW | double | HAS_EMITTER_EIRP_DBW must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTargetSignature | HAS_RCS_M2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTargetSignature | HAS_DIAMETER_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTargetSignature | HAS_GEOMETRIC_ALBEDO | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTargetSignature | HAS_EMITTER_FREQUENCY_HZ | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTargetSignature | HAS_EMITTER_EIRP_DBW | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTarget | NORAD_CAT_ID | uint32 | HAS_NORAD_CAT_ID must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTarget | HAS_NORAD_CAT_ID | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | PHENOMENOLOGY | acwSensorPhenomenology | HAS_PHENOMENOLOGY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | OBSERVATION_INTERVAL_S | double | HAS_OBSERVATION_INTERVAL_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | TRACK_DURATION_S | double | HAS_TRACK_DURATION_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | REVISIT_INTERVAL_S | double | HAS_REVISIT_INTERVAL_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | MAX_SIMULTANEOUS_TRACKS | uint32 | HAS_MAX_SIMULTANEOUS_TRACKS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | REFERENCE_SNR_DB | double | HAS_REFERENCE_SNR_DB must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | REFERENCE_RANGE_M | double | HAS_REFERENCE_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | REFERENCE_RCS_M2 | double | HAS_REFERENCE_RCS_M2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | DETECTION_THRESHOLD_DB | double | HAS_DETECTION_THRESHOLD_DB must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | RECEIVER_G_OVER_T_DB_PER_K | double | HAS_RECEIVER_G_OVER_T_DB_PER_K must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | RECEIVER_BANDWIDTH_HZ | double | HAS_RECEIVER_BANDWIDTH_HZ must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | LIMITING_MAGNITUDE | double | HAS_LIMITING_MAGNITUDE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | MAX_HOST_SUN_ELEVATION_RAD | double | HAS_MAX_HOST_SUN_ELEVATION_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | FALSE_ALARM_RATE_PER_HOUR | double | HAS_FALSE_ALARM_RATE_PER_HOUR must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | TRANSMIT_FREQUENCY_HZ | double | HAS_TRANSMIT_FREQUENCY_HZ must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWSensor | HAS_PHENOMENOLOGY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_OBSERVATION_INTERVAL_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_TRACK_DURATION_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_REVISIT_INTERVAL_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_MAX_SIMULTANEOUS_TRACKS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_REFERENCE_SNR_DB | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_REFERENCE_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_REFERENCE_RCS_M2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_DETECTION_THRESHOLD_DB | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_RECEIVER_G_OVER_T_DB_PER_K | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_RECEIVER_BANDWIDTH_HZ | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_LIMITING_MAGNITUDE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_MAX_HOST_SUN_ELEVATION_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_FALSE_ALARM_RATE_PER_HOUR | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWSensor | HAS_TRANSMIT_FREQUENCY_HZ | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTrack | START_JULIAN_DATE_TT | double | HAS_START_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTrack | END_JULIAN_DATE_TT | double | HAS_END_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTrack | SCHEDULED_COUNT | uint32 | HAS_SCHEDULED_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTrack | DETECTED_COUNT | uint32 | HAS_DETECTED_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWTrack | HAS_START_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTrack | HAS_END_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTrack | HAS_SCHEDULED_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWTrack | HAS_DETECTED_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | OPERATION | acwOperationCode | HAS_OPERATION must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | MIN_ELEVATION_OVERRIDE_RAD | double | HAS_MIN_ELEVATION_OVERRIDE_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | EVALUATION_MODE | acwEvaluationMode | HAS_EVALUATION_MODE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | ROOT_TOLERANCE_S | double | HAS_ROOT_TOLERANCE_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | RANDOM_SEED | uint64 | HAS_RANDOM_SEED must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | START_JULIAN_DATE_TT | double | HAS_START_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | END_JULIAN_DATE_TT | double | HAS_END_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWRequest | HAS_OPERATION | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_MIN_ELEVATION_OVERRIDE_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_EVALUATION_MODE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_ROOT_TOLERANCE_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_RANDOM_SEED | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_START_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWRequest | HAS_END_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | START_JULIAN_DATE_TT | double | HAS_START_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | END_JULIAN_DATE_TT | double | HAS_END_JULIAN_DATE_TT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | MAX_ELEVATION_RAD | double | HAS_MAX_ELEVATION_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | SAMPLE_COUNT | uint32 | HAS_SAMPLE_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | START_LIMITING_CONSTRAINT_INDEX | int32 | HAS_START_LIMITING_CONSTRAINT_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | END_LIMITING_CONSTRAINT_INDEX | int32 | HAS_END_LIMITING_CONSTRAINT_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | MIN_RANGE_M | double | HAS_MIN_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | MAX_RANGE_M | double | HAS_MAX_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | EDGES_REFINED | bool | HAS_EDGES_REFINED must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWAccessWindow | HAS_START_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_END_JULIAN_DATE_TT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_MAX_ELEVATION_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_SAMPLE_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_START_LIMITING_CONSTRAINT_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_END_LIMITING_CONSTRAINT_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_MIN_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_MAX_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWAccessWindow | HAS_EDGES_REFINED | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWResult | STATUS | acwResultStatus | HAS_STATUS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWResult | EVALUATION_MODE | acwEvaluationMode | HAS_EVALUATION_MODE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWResult | OBSERVATION_COUNT | uint32 | HAS_OBSERVATION_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| ACWResult | HAS_STATUS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWResult | HAS_EVALUATION_MODE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| ACWResult | HAS_OBSERVATION_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |

## schema/CLG/main.fbs

| Table/struct | Scalar field | Type | Presence rule |
|---|---|---|---|
| CLGIndex | VALUE | uint | HAS_VALUE gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGIndex | HAS_VALUE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGVector3 | X | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGVector3 | Y | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGVector3 | Z | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGVector3 | HAS_VALUES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGQuaternion | X | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGQuaternion | Y | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGQuaternion | Z | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGQuaternion | W | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGQuaternion | HAS_VALUES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | CATEGORY | clgSourceCategory | HAS_CATEGORY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | POSITION_ERROR_M | double | HAS_POSITION_ERROR_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | VELOCITY_ERROR_MPS | double | HAS_VELOCITY_ERROR_MPS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | ACCELERATION_ERROR_MPS2 | double | HAS_ACCELERATION_ERROR_MPS2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | JERK_ERROR_MPS3 | double | HAS_JERK_ERROR_MPS3 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | ATTITUDE_ERROR_RAD | double | HAS_ATTITUDE_ERROR_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | ANGULAR_RATE_ERROR_RAD_S | double | HAS_ANGULAR_RATE_ERROR_RAD_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | ANGULAR_ACCELERATION_ERROR_RAD_S2 | double | HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGSource | HAS_CATEGORY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_POSITION_ERROR_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_VELOCITY_ERROR_MPS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_ACCELERATION_ERROR_MPS2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_JERK_ERROR_MPS3 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_ATTITUDE_ERROR_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_ANGULAR_RATE_ERROR_RAD_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGSource | HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBody | MOTION_SOURCE_INDEX | int | HAS_MOTION_SOURCE_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBody | FRAME_STATIONARY | bool | HAS_FRAME_STATIONARY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBody | CLEARANCE | clgClearanceMode | HAS_CLEARANCE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBody | SPACE_SPACE_SKIM_MARGIN_M | double | HAS_SPACE_SPACE_SKIM_MARGIN_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBody | HAS_MOTION_SOURCE_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBody | HAS_FRAME_STATIONARY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBody | HAS_CLEARANCE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBody | HAS_SPACE_SPACE_SKIM_MARGIN_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | CATEGORY | clgNodeCategory | HAS_CATEGORY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | BODY_INDEX | int | HAS_BODY_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | STATE_SOURCE_INDEX | int | HAS_STATE_SOURCE_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | MAX_SIMULTANEOUS_LINKS | int | HAS_MAX_SIMULTANEOUS_LINKS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | ELEVATION_GATE | clgElevationGate | HAS_ELEVATION_GATE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | MIN_ELEVATION_RAD | double | HAS_MIN_ELEVATION_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | ATTITUDE_LAW | clgAttitudeLaw | HAS_ATTITUDE_LAW must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGNode | HAS_CATEGORY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_BODY_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_STATE_SOURCE_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_MAX_SIMULTANEOUS_LINKS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_ELEVATION_GATE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_MIN_ELEVATION_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGNode | HAS_ATTITUDE_LAW | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | MEDIUM | clgTerminalMedium | HAS_MEDIUM must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | CAPABILITY | clgTerminalCapability | HAS_CAPABILITY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | STEERING | clgSteeringClass | HAS_STEERING must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | REGARD | clgRegardGeometry | HAS_REGARD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MIN_RANGE_M | double | HAS_MIN_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MAX_RANGE_M | double | HAS_MAX_RANGE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MAX_SLEW_RATE_RAD_S | double | HAS_MAX_SLEW_RATE_RAD_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MAX_ANGULAR_ACCELERATION_RAD_S2 | double | HAS_MAX_ANGULAR_ACCELERATION_RAD_S2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | ACQUISITION_MAX_RATE_RAD_S | double | HAS_ACQUISITION_MAX_RATE_RAD_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | ACQUISITION_TIME_S | double | HAS_ACQUISITION_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | SETTLE_TIME_S | double | HAS_SETTLE_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | BEAM_SWITCH_TIME_S | double | HAS_BEAM_SWITCH_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MAX_SIMULTANEOUS_LINKS | int | HAS_MAX_SIMULTANEOUS_LINKS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | INDEPENDENT_BEAMS | bool | HAS_INDEPENDENT_BEAMS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | POINTING | clgPointingArchitecture | HAS_POINTING must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | MAX_POINT_AHEAD_RAD | double | HAS_MAX_POINT_AHEAD_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminalProfile | HAS_MEDIUM | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_CAPABILITY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_STEERING | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_REGARD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MIN_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MAX_RANGE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MAX_SLEW_RATE_RAD_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MAX_ANGULAR_ACCELERATION_RAD_S2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_ACQUISITION_MAX_RATE_RAD_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_ACQUISITION_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_SETTLE_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_BEAM_SWITCH_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MAX_SIMULTANEOUS_LINKS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_INDEPENDENT_BEAMS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_POINTING | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminalProfile | HAS_MAX_POINT_AHEAD_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminal | NODE_INDEX | int | HAS_NODE_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminal | PROFILE_INDEX | int | HAS_PROFILE_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminal | INITIAL_AT_REST | bool | HAS_INITIAL_AT_REST must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGTerminal | HAS_NODE_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminal | HAS_PROFILE_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTerminal | HAS_INITIAL_AT_REST | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBlackout | START_S | double | HAS_TIMES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGBlackout | STOP_S | double | HAS_TIMES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGBlackout | HAS_TIMES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | TIMING | clgPropagationTiming | HAS_TIMING must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | DIRECTION | clgLinkDirection | HAS_DIRECTION must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_LIGHT_TIME_S | double | HAS_MAX_LIGHT_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | REQUESTED_TIME_ACCURACY_S | double | HAS_REQUESTED_TIME_ACCURACY_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | ROOT_TOLERANCE_S | double | HAS_ROOT_TOLERANCE_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | LIGHT_TIME_TOLERANCE_S | double | HAS_LIGHT_TIME_TOLERANCE_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | ISOLATION_FLOOR_S | double | HAS_ISOLATION_FLOOR_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | RANGE_EXTREMUM_TOLERANCE_M | double | HAS_RANGE_EXTREMUM_TOLERANCE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | ATTITUDE_JOIN_TOLERANCE_RAD | double | HAS_ATTITUDE_JOIN_TOLERANCE_RAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | RATE_JOIN_TOLERANCE_RAD_S | double | HAS_RATE_JOIN_TOLERANCE_RAD_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | ACCELERATION_JOIN_TOLERANCE_RAD_S2 | double | HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | POSITION_JOIN_TOLERANCE_M | double | HAS_POSITION_JOIN_TOLERANCE_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | VELOCITY_JOIN_TOLERANCE_MPS | double | HAS_VELOCITY_JOIN_TOLERANCE_MPS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | ACCELERATION_JOIN_TOLERANCE_MPS2 | double | HAS_ACCELERATION_JOIN_TOLERANCE_MPS2 must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | POLICY | clgSelectionPolicy | HAS_POLICY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MIN_HOLD_TIME_S | double | HAS_MIN_HOLD_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MIN_ACTIVE_TIME_S | double | HAS_MIN_ACTIVE_TIME_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | DECISION_STEP_S | double | HAS_DECISION_STEP_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | OUTPUT_EPOCHS_S | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGControls | EMIT_EVENT_SNAPSHOTS | bool | HAS_EMIT_EVENT_SNAPSHOTS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | THREAD_COUNT | int | HAS_THREAD_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_WORKING_BYTES | long | HAS_MAX_WORKING_BYTES must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_RESULT_BYTES | long | HAS_MAX_RESULT_BYTES must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_CANDIDATE_PAIRS | long | HAS_MAX_CANDIDATE_PAIRS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_INPUT_BYTES | long | HAS_MAX_INPUT_BYTES must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | MAX_SPOOL_BYTES | long | HAS_MAX_SPOOL_BYTES must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGControls | HAS_TIMING | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_DIRECTION | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_LIGHT_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_REQUESTED_TIME_ACCURACY_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_ROOT_TOLERANCE_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_LIGHT_TIME_TOLERANCE_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_ISOLATION_FLOOR_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_RANGE_EXTREMUM_TOLERANCE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_ATTITUDE_JOIN_TOLERANCE_RAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_RATE_JOIN_TOLERANCE_RAD_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_POSITION_JOIN_TOLERANCE_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_VELOCITY_JOIN_TOLERANCE_MPS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_ACCELERATION_JOIN_TOLERANCE_MPS2 | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_POLICY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MIN_HOLD_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MIN_ACTIVE_TIME_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_DECISION_STEP_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_EMIT_EVENT_SNAPSHOTS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_THREAD_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_WORKING_BYTES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_RESULT_BYTES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_CANDIDATE_PAIRS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_INPUT_BYTES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGControls | HAS_MAX_SPOOL_BYTES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGDefinition | EPOCH_JD_TT_DAY | long | HAS_EPOCH_JD_TT_DAY must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGDefinition | EPOCH_JD_TT_SECONDS | double | HAS_EPOCH_JD_TT_SECONDS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGDefinition | START_OFFSET_S | double | HAS_START_OFFSET_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGDefinition | STOP_OFFSET_S | double | HAS_STOP_OFFSET_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGDefinition | HAS_EPOCH_JD_TT_DAY | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGDefinition | HAS_EPOCH_JD_TT_SECONDS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGDefinition | HAS_START_OFFSET_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGDefinition | HAS_STOP_OFFSET_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPoseSegment | OWNER | clgOwnerCategory | HAS_OWNER must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGPoseSegment | OWNER_INDEX | int | HAS_OWNER_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGPoseSegment | START_S | double | HAS_START_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGPoseSegment | STOP_S | double | HAS_STOP_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGPoseSegment | DEGREE | int | HAS_DEGREE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGPoseSegment | POSITION_COEFFICIENTS | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGPoseSegment | QUATERNION_COEFFICIENTS | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGPoseSegment | HAS_OWNER | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPoseSegment | HAS_OWNER_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPoseSegment | HAS_START_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPoseSegment | HAS_STOP_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPoseSegment | HAS_DEGREE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGStateBlock | SEQUENCE | int | HAS_SEQUENCE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGStateBlock | FINAL_BLOCK | bool | HAS_FINAL_BLOCK must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGStateBlock | HAS_SEQUENCE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGStateBlock | HAS_FINAL_BLOCK | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGPair | DIRECTION | clgLinkDirection | HAS_DIRECTION gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGPair | HAS_DIRECTION | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGCause | KIND | clgBoundaryCause | HAS_KIND gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGCause | DIRECTION | clgRayDirection | HAS_DIRECTION gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGCause | HAS_KIND | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGCause | HAS_DIRECTION | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGRayTimes | DIRECTION | clgRayDirection | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGRayTimes | EMISSION_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGRayTimes | RECEPTION_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGRayTimes | RECEPTION_BRACKET_LO_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGRayTimes | RECEPTION_BRACKET_HI_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGRayTimes | HAS_VALUES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBoundary | OFFSET_S | double | HAS_OFFSET_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBoundary | BRACKET_LO_S | double | HAS_BRACKET_LO_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBoundary | BRACKET_HI_S | double | HAS_BRACKET_HI_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGBoundary | HAS_OFFSET_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBoundary | HAS_BRACKET_LO_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGBoundary | HAS_BRACKET_HI_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGInterval | START_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGInterval | STOP_S | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGInterval | MIN_RANGE_M | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGInterval | MAX_RANGE_M | double | HAS_VALUES gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGInterval | READY_FROM_S | double | HAS_READY_FROM gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGInterval | HAS_VALUES | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGInterval | HAS_READY_FROM | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTransition | TIME_S | double | HAS_TIME gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGTransition | STAGE | clgTransitionStage | HAS_STAGE gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGTransition | CAUSE | clgBoundaryCause | HAS_CAUSE gates this atomic value/group; false = omitted, true + zero = supplied zero. |
| CLGTransition | HAS_TIME | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTransition | HAS_STAGE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGTransition | HAS_CAUSE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGAdjacency | EPOCH_S | double | HAS_EPOCH_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGAdjacency | ORIGIN | clgSnapshotOrigin | HAS_ORIGIN must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGAdjacency | ROW_OFFSETS | [uint] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | NEIGHBOR_NODE_INDEXES | [uint] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | LINK_INDEXES | [uint] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | RANGES_M | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | LIGHT_TIMES_S | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | RECEPTION_EPOCHS_S | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGAdjacency | HAS_EPOCH_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGAdjacency | HAS_ORIGIN | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | ROOT_ERROR_BOUND_S | double | HAS_ROOT_ERROR_BOUND_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | SOURCE_ERROR_BOUND_S | double | HAS_SOURCE_ERROR_BOUND_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | FRAME_TIME_ERROR_BOUND_S | double | HAS_FRAME_TIME_ERROR_BOUND_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | RANGE_ERROR_BOUND_M | double | HAS_RANGE_ERROR_BOUND_M must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | MODEL_ERROR_BOUND_S | double | HAS_MODEL_ERROR_BOUND_S must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | ANALYSIS_SCOPE | clgAnalysisScope | HAS_ANALYSIS_SCOPE must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | TIMING | clgPropagationTiming | HAS_TIMING must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGProvenance | HAS_ROOT_ERROR_BOUND_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_SOURCE_ERROR_BOUND_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_FRAME_TIME_ERROR_BOUND_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_RANGE_ERROR_BOUND_M | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_MODEL_ERROR_BOUND_S | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_ANALYSIS_SCOPE | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGProvenance | HAS_TIMING | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGResult | STATUS | clgComputationState | HAS_STATUS must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGResult | CHUNK_INDEX | int | HAS_CHUNK_INDEX must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGResult | CHUNK_COUNT | int | HAS_CHUNK_COUNT must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLGResult | TOPOLOGY_CHANGE_EPOCHS_S | [double] | Vector pointer presence; every encoded element is supplied, including zero. Length/domain validated. |
| CLGResult | HAS_STATUS | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGResult | HAS_CHUNK_INDEX | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLGResult | HAS_CHUNK_COUNT | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |
| CLG | PAYLOAD | clgPayloadClass | HAS_PAYLOAD must be true before reading the value; false = omitted; true + zero = supplied zero. |
| CLG | HAS_PAYLOAD | bool | Presence metadata: false (including omission) = absent; true = supplied. No recursive flag. |

