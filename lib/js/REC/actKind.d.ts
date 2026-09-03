/**
 * Account Record (ACT)
 * Description
 * A node-local operator account, a signed-in session, a sign-in challenge or
 * an external wallet link, keyed by the extended public key the operator
 * proves control of. Sign-in is a challenge the node issues and a signature
 * the operator returns over it; a session is the node's record of a verified
 * signature until EXPIRES_AT. Key slots list the derivation paths the node
 * uses for each purpose key so an operator can see and rotate them. A record
 * never carries private key material.
 * Role of the record. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum actKind {
    Operator = 0,
    Session = 1,
    Challenge = 2,
    ExternalLink = 3
}
//# sourceMappingURL=actKind.d.ts.map