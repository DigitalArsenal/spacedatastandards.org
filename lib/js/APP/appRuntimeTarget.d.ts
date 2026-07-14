/**
 * Where a member module is instantiated. PAGE and BOTH assert the module
 * loads in the browser through the SAME module-sdk harness ABI the SDN
 * nodes use — page bytes are resolved by APPModuleRef.CONTENT_HASH over
 * IPFS and driven through manifest + plugin_invoke_stream, with no bespoke
 * page loader. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum appRuntimeTarget {
    /**
     * Loads only in the desktop/server node runtime.
     */
    NODE = 0,
    /**
     * Loads in the page through the isomorphic JS harness.
     */
    PAGE = 1,
    /**
     * Loads in both hosts from the same content-addressed bytes and ABI.
     */
    BOTH = 2
}
//# sourceMappingURL=appRuntimeTarget.d.ts.map