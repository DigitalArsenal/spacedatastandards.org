/**
 * Logical location inside a host pipeline where a compiled shader
 * fragment is meant to be spliced. A host maps these onto its own
 * concrete splice points.
 */
export declare enum shaderHookPoint {
    NONE = 0,
    VERTEX_PRE_TRANSFORM = 1,
    VERTEX_POST_TRANSFORM = 2,
    FRAGMENT_PRE_SHADE = 3,
    FRAGMENT_POST_SHADE = 4,
    FRAGMENT_FINAL_COLOR = 5,
    POSTPROCESS = 6
}
//# sourceMappingURL=shaderHookPoint.d.ts.map