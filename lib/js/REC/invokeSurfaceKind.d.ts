/**
 * Canonical invoke surfaces a plugin artifact can expose. A single
 * artifact can support multiple.
 */
export declare enum invokeSurfaceKind {
    /**
     * Direct ABI — host calls `plugin_invoke_stream` in-process.
     */
    DIRECT = 0,
    /**
     * Command surface — envelope is queued by a runtime host.
     */
    COMMAND = 1
}
//# sourceMappingURL=invokeSurfaceKind.d.ts.map