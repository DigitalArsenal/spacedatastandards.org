/**
 * FlatSQL operation outcome carried on the typed output port. Invocation ABI
 * errors remain in PIV; this status reports database-operation semantics.
 */
export declare enum flatSqlNodeStatus {
    UNSPECIFIED = 0,
    OK = 1,
    ACCEPTED = 2,
    YIELDED = 3,
    COMPLETE = 4,
    INVALID_ARGUMENT = 5,
    NOT_CONFIGURED = 6,
    NOT_FOUND = 7,
    CONFLICT = 8,
    RESOURCE_EXHAUSTED = 9,
    INTERNAL_ERROR = 10
}
//# sourceMappingURL=flatSqlNodeStatus.d.ts.map