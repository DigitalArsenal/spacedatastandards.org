/**
 * Query Page (QRP)
 * Description
 * The one request, page-header and error frame for every paged, searched or
 * aggregated read of standards records over a stream of size-prefixed
 * records. A request names the standard, the selection (SQL, search text or
 * field filters), the lane (provider, source, batch, producer, origin), an
 * epoch window and a page. A page header precedes RECORD_COUNT record frames
 * of the named standard and accounts honestly for what was scanned: PARTIAL is
 * true when a bounded scan returned before covering every stored record, so a
 * reader never waits and never mistakes a bounded page for the whole set. An
 * error is exactly one frame with KIND Error; the HTTP status stays honest
 * beside it. Cursors are opaque strings issued by the serving node.
 * Role of a frame. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum qrpKind {
    Request = 0,
    Page = 1,
    Error = 2
}
//# sourceMappingURL=qrpKind.d.ts.map