/**
 * Conjunction request/result semantics (normative): use exactly one payload
 * arm consistent with PIV.METHOD_ID. Errors belong in PIV status/error fields;
 * an empty scientific result is not a successful response. UNSPECIFIED choices
 * that affect evaluation and unsupported controls fail explicitly.
 *
 * Inputs resolve to a common explicit RFM frame/origin and TIM time scale.
 * Unknown ECI/ECEF realizations are errors, never aliases inferred by a guest.
 * The host selects the propagator for mean elements; propagated OEM/PPE tracks
 * accept any compatible provider. Source queries are provenance, not commands.
 *
 * These tables define canonical FlatBuffers. Port manifests retain both
 * FLATBUFFER and ALIGNED_BINARY with identical logical schema identity; an
 * aligned peer needs a declared portable layout and codec, not merely an
 * aligned pointer to these bytes. See TAB/PLG and GCT's section-layout precedent.
 *
 * Append-only; no claim that every provider implements every choice.
 */
export declare enum cqrProbabilityAlgorithm {
    UNSPECIFIED = 0,
    FOSTER = 1,
    PATERA = 2,
    ALFANO_MAXIMUM = 3,
    CHAN = 4,
    ALFRIEND_1999 = 5,
    ALFRIEND_1999_MAXIMUM = 6,
    ALFANO_2005 = 7,
    LAAS_2015 = 8,
    ALFRIEND_2D = 9
}
//# sourceMappingURL=cqrProbabilityAlgorithm.d.ts.map