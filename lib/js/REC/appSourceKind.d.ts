/**
 * Kind of upstream source an APPSourceRef names.
 */
export declare enum appSourceKind {
    /**
     * REF is an APPModuleRef.ID in the same manifest — one member module is
     * itself the source for another.
     */
    MODULE = 0,
    /**
     * REF is a URL or endpoint identifier outside the app.
     */
    EXTERNAL_API = 1,
    /**
     * REF is a dataset or catalog identifier.
     */
    DATASET = 2
}
//# sourceMappingURL=appSourceKind.d.ts.map