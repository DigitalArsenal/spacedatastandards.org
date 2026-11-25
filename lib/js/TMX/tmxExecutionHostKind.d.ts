/**
 * Compute host that executed the threat matrix assessment. Append new values only.
 */
export declare enum tmxExecutionHostKind {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * Executed locally in browser WebAssembly / SharedArrayBuffer workers.
     */
    BROWSER_LOCAL = 1,
    /**
     * Executed remotely on an SDN WasmEdge compute node.
     */
    SDN_COMPUTE_NODE = 2
}
//# sourceMappingURL=tmxExecutionHostKind.d.ts.map