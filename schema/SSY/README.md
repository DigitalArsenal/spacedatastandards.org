# Stellar System ($SSY)

One galaxy, dwarf system, star cluster, or candidate, with independently cited measurements.

## Shared type ruling

`EXOParameter` is included from `../EXO/main.fbs`, following the existing cross-standard include convention (for example STR includes PHB). Its definition remains solely in EXO. GLX lacks per-quantity asymmetric errors, limits and citations; STR describes individual stars. SSY therefore adds a distinct record without changing either existing wire contract.

All measured and derived quantities, including coordinates, correlations, member count and J-factor percentiles, use `EXOParameter`. Each has VALUE, ERR1, ERR2, LIMIT, UNIT and reference fields. UNIT and RETRIEVED_AT are required by the shared type. Unknown quantities are absent; unknown numeric cells are NaN. Errors retain their signs (+ upper, − lower); LIMIT is 0 for a measurement, +1 for an upper bound and −1 for a lower bound. Missing bibcodes remain absent; never fabricate citations. Discovery year and confidence are record metadata.

The E2E fixture is a two-row excerpt of the CC0 LVDB v1.1.1 release CSV, with retrieval metadata and full-source SHA-256 in `scripts/fixtures/ssy-lvdb-v1.1.1.json`. The test pins the fixture digest and checks generated TS and C++ readers. The complete CSV/YAML importer is a separate task.

## SSYProfileFit

| Field | Type |
|---|---|
| `MODEL` | `ssyProfileModel = UNSPECIFIED` |
| `RADIUS` | `EXOParameter` |
| `CORE_RADIUS` | `EXOParameter` |
| `TIDAL_RADIUS` | `EXOParameter` |
| `CONCENTRATION` | `EXOParameter` |
| `SHAPE_INDEX` | `EXOParameter` |
| `ELLIPTICITY` | `EXOParameter` |
| `POSITION_ANGLE` | `EXOParameter` |
| `CENTRAL_SURFACE_BRIGHTNESS` | `EXOParameter` |

## SSYProperMotion

| Field | Type |
|---|---|
| `PMRA` | `EXOParameter` |
| `PMDEC` | `EXOParameter` |
| `CORRELATION` | `EXOParameter` |
| `METHOD` | `string` |
| `ADOPTED` | `bool = false` |
| `COMMENTS` | `string` |

## SSYJFactor

| Field | Type |
|---|---|
| `ANGLE_DEG` | `EXOParameter` |
| `LOG_J` | `EXOParameter` |
| `LOG_J_P05` | `EXOParameter` |
| `LOG_J_P95` | `EXOParameter` |
| `LOG_J_UPPER_LIMIT_95` | `EXOParameter` |
| `SELECTION` | `string` |
| `USE` | `string` |
| `COMMENTS` | `string` |

## SSYAlternate

| Field | Type |
|---|---|
| `FIELD` | `string (required)` |
| `VALUE` | `EXOParameter (required)` |
| `NOTE` | `string` |

## SSYCrossIdentifier

| Field | Type |
|---|---|
| `CATALOG` | `string (required)` |
| `IDENTIFIER` | `string (required)` |

## SSYPlacement

| Field | Type |
|---|---|
| `GALACTIC_L_DEG` | `EXOParameter` |
| `GALACTIC_B_DEG` | `EXOParameter` |
| `SUPERGALACTIC_X_KPC` | `EXOParameter` |
| `SUPERGALACTIC_Y_KPC` | `EXOParameter` |
| `SUPERGALACTIC_Z_KPC` | `EXOParameter` |
| `DISTANCE_GALACTIC_CENTER_KPC` | `EXOParameter` |
| `DISTANCE_M31_KPC` | `EXOParameter` |
| `DISTANCE_LOCAL_GROUP_KPC` | `EXOParameter` |
| `DISTANCE_HOST_KPC` | `EXOParameter` |
| `FRAME_NOTE` | `string` |

## SSY

| Field | Type |
|---|---|
| `ID` | `string (required)` |
| `NAME` | `string` |
| `ABBREVIATION` | `string` |
| `DESIGNATIONS` | `[string]` |
| `CROSS_IDS` | `[SSYCrossIdentifier]` |
| `SYSTEM_CLASS` | `ssySystemKind = UNSPECIFIED` |
| `MORPHOLOGY` | `string` |
| `HOST_ID` | `string` |
| `CONFIRMED_REAL` | `ssyVerdict = UNKNOWN` |
| `CONFIRMED_GALAXY` | `ssyVerdict = UNKNOWN` |
| `CONFIRMED_STAR_CLUSTER` | `ssyVerdict = UNKNOWN` |
| `FALSE_POSITIVE` | `ssyFalsePositiveVerdict = UNKNOWN` |
| `FALSE_POSITIVE_REFS` | `[string]` |
| `DISCOVERY_YEAR` | `int = -1` |
| `DISCOVERY_REFS` | `[string]` |
| `NOTES` | `[string]` |
| `RA` | `EXOParameter` |
| `DEC` | `EXOParameter` |
| `DISTANCE_MODULUS` | `EXOParameter` |
| `DISTANCE` | `EXOParameter` |
| `DISTANCE_METHOD` | `ssyDistanceTechnique = UNSPECIFIED` |
| `DISTANCE_METHOD_TEXT` | `string` |
| `PARALLAX` | `EXOParameter` |
| `PLACEMENT` | `SSYPlacement` |
| `APPARENT_MAG_V` | `EXOParameter` |
| `APPARENT_MAG_B` | `EXOParameter` |
| `APPARENT_MAG_I` | `EXOParameter` |
| `MEAN_EBV` | `EXOParameter` |
| `EXTINCTION_AV` | `EXOParameter` |
| `ABSOLUTE_MAG_V` | `EXOParameter` |
| `STELLAR_MASS_LOG` | `EXOParameter` |
| `RHALF` | `EXOParameter` |
| `ELLIPTICITY` | `EXOParameter` |
| `POSITION_ANGLE` | `EXOParameter` |
| `STRUCTURE_MODEL` | `string` |
| `RHALF_PC` | `EXOParameter` |
| `RHALF_SPH_PC` | `EXOParameter` |
| `SURFACE_BRIGHTNESS_RHALF` | `EXOParameter` |
| `HOLMBERG_DIAMETER` | `EXOParameter` |
| `PROFILE_FITS` | `[SSYProfileFit]` |
| `VLOS_SYSTEMIC` | `EXOParameter` |
| `VLOS_SIGMA` | `EXOParameter` |
| `VLOS_SIGMA_CENTRAL` | `EXOParameter` |
| `VLOS_ROTATION` | `EXOParameter` |
| `VELOCITY_GSR` | `EXOParameter` |
| `VELOCITY_LG` | `EXOParameter` |
| `PMRA` | `EXOParameter` |
| `PMDEC` | `EXOParameter` |
| `PMRA_PMDEC_CORR` | `EXOParameter` |
| `PROPER_MOTIONS` | `[SSYProperMotion]` |
| `METALLICITY_SPECTROSCOPIC` | `EXOParameter` |
| `METALLICITY_SPECTROSCOPIC_SIGMA` | `EXOParameter` |
| `METALLICITY_PHOTOMETRIC` | `EXOParameter` |
| `METALLICITY_PHOTOMETRIC_SIGMA` | `EXOParameter` |
| `METALLICITY_ISOCHRONE` | `EXOParameter` |
| `METALLICITY_ISOCHRONE_SIGMA` | `EXOParameter` |
| `METALLICITY` | `EXOParameter` |
| `METALLICITY_BASIS` | `ssyMetallicityTechnique = UNSPECIFIED` |
| `GAS_PHASE_METALLICITY` | `EXOParameter` |
| `GAS_PHASE_METALLICITY_METHOD` | `string` |
| `AGE` | `EXOParameter` |
| `LOG_AGE` | `EXOParameter` |
| `TAU_50` | `EXOParameter` |
| `TAU_80` | `EXOParameter` |
| `TAU_90` | `EXOParameter` |
| `FLUX_HI` | `EXOParameter` |
| `VLOS_SYSTEMIC_HI` | `EXOParameter` |
| `SIGMA_HI` | `EXOParameter` |
| `VROT_HI` | `EXOParameter` |
| `HI_LINE_WIDTH_50` | `EXOParameter` |
| `HI_MASS_LOG` | `EXOParameter` |
| `DYNAMICAL_MASS_WOLF_LOG` | `EXOParameter` |
| `TOTAL_MASS_LOG` | `EXOParameter` |
| `MEMBER_COUNT` | `EXOParameter` |
| `JACOBI_RADIUS_PC` | `EXOParameter` |
| `PERICENTER` | `EXOParameter` |
| `APOCENTER` | `EXOParameter` |
| `ORBIT_POTENTIAL` | `string` |
| `J_FACTORS` | `[SSYJFactor]` |
| `ALTERNATES` | `[SSYAlternate]` |
| `UNCERTAINTY_CONVENTION` | `string` |
| `LIMIT_CONFIDENCE` | `double = nan` |
| `SOURCE_CATALOG` | `string` |
| `SOURCE_RELEASE` | `string` |
| `SOURCE_KEY` | `string` |
| `SOURCE_TABLE` | `string` |
| `SOURCE_URL` | `string` |
| `SOURCE_SHA256` | `[string]` |
| `CITATION` | `string` |
| `LICENSE` | `string` |
| `RETRIEVED_AT` | `string` |
