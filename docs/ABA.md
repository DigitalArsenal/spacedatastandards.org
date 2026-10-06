# ABA — Address Book Attestation

Ratified by THEMIS on 2026-10-06 under the owner's approved address-book
design and SDS auto-ratification authority. Introduced in SDS 1.234.0.
Canonical schema: [`schema/ABA/main.fbs`](../schema/ABA/main.fbs).

An ABA is one node's signed attestation that a specific EPM is an entry in
its address book. Importing an EPM, or projecting a vCard to an EPM, does
not itself admit the contact. Admission requires a valid ABA, retained and
retrievable alongside the entry. The assertion identifies the node making
it; it does not establish the contact's identity or endorsement of the node.

## Identity and exact profile binding

`NODE_PEER_ID` identifies the signing node. `PUBLIC_KEY` contains the literal
verification key, never an extended key, wallet path or derivation material.
For `SIGNATURE_ALGORITHM = "secp256k1"`, it is a compressed 33-byte SEC1 key.
Derive its libp2p Peer ID using the deterministic libp2p PublicKey protobuf
(type Secp256k1, value 2) and require equality with `NODE_PEER_ID`.
The secp256k1 identity multihash embeds this key, so a verifier can recover
it from the node Peer ID alone and compare it to `PUBLIC_KEY`.

`PROFILE_BYTES` holds the EPM FlatBuffer exactly as attested, including its
file identifier and any size prefix. `PROFILE_SHA256` is exactly 32 raw
SHA-256 digest bytes of that entire byte vector. Verify the digest and the
EPM root before admitting an entry. Never decode and reserialize the profile
before hashing. A vCard projection is completed before these bytes are signed.
Tombstones retain the attested bytes and their digest.

## Canonical signing form

Like CLM, sign the canonical record after clearing `SIGNATURE`. ABA defines
that form precisely so implementations in different languages interoperate:

1. Create a JSON object containing every ABA field, with the exact IDL names.
2. Represent `PUBLIC_KEY`, `PROFILE_BYTES` and `PROFILE_SHA256` as arrays of
   unsigned integers in [0, 255]. Set `SIGNATURE` to the empty array `[]`.
3. Represent `CREATED_AT` and `UPDATED_AT` as decimal strings, with no leading
   zeroes (except `"0"`), so the uint64 values are lossless in every language.
4. Represent `VISIBILITY` by its numeric ordinal: PRIVATE = 0, PUBLIC = 1.
   Include `DELETED` as a boolean and all other fields as strings. An absent
   optional `NOTE` becomes `""`. Include scalar defaults; omit no fields and
   introduce no additional keys.
5. Encode with [RFC 8785 JCS](https://www.rfc-editor.org/rfc/rfc8785), yielding
   UTF-8 bytes without a BOM or trailing newline. Do not normalize strings.
6. Sign those bytes with the node's libp2p identity key. The `secp256k1`
   algorithm hashes them with SHA-256, produces a low-S ECDSA signature and
   serializes that signature as ASN.1 DER, following the
   [libp2p key specification](https://github.com/libp2p/specs/blob/master/peer-ids/peer-ids.md).
   Store the resulting bytes in `SIGNATURE`.

Verification reconstructs the same canonical bytes, validates the signature,
checks the literal key against the peer identity, and checks the profile
hash. Reject missing/empty identifiers, missing/invalid keys, empty signatures,
unsupported algorithms or visibility values, malformed EPMs, wrong-length
digests, and timestamps where `UPDATED_AT < CREATED_AT`. A signature or digest
failure never yields an address-book entry.

## Projection, revocation and visibility

`ENTRY_ID` is stable and unique within the issuing node. It is not the
profile hash: a profile can change while retaining its entry ID. Project
valid records by `(NODE_PEER_ID, ENTRY_ID)`, choosing the greatest `UPDATED_AT`.
Updates preserve `CREATED_AT` and strictly increase `UPDATED_AT`; identical
replays are harmless, while conflicting revisions with the same timestamp
must remain unresolved. Keep the signed record with each projected profile.

A latest record with `DELETED = true` revokes the entry. Retain that signed
tombstone to prevent an older revision from restoring it. A later deliberate
reattestation uses a greater timestamp and sets `DELETED = false`.

`VISIBILITY` defaults to PRIVATE. This standard records the flag; the node
is responsible for keeping PRIVATE entries and their attestations out of all
public serving and synchronization. Public consumers still verify signatures
and profile hashes. Changing the flag requires a newly signed revision.
`NOTE` is an optional short operator note and is covered by the signature.

## Bindings

ABA appends `RecordTypeExtended.ABA = 256` after the frozen 255-member REC
union. A REC wrapper carries `standard = "ABA"`, `value_type = NONE`,
`EXTENDED_TYPE = ABA`, and the ABA root FlatBuffer in `EXTENDED_VALUE`.
Existing union ordinals are unchanged.

JavaScript/TypeScript: `standards.ABA`, `ABAT`, `abaDisclosure`.
Go module: `github.com/DigitalArsenal/spacedatastandards.org/lib/go`.
Go import: `github.com/DigitalArsenal/spacedatastandards.org/lib/go/ABA`;
package directory: `lib/go/ABA` (generated package name `ABA`).
SDN's vendored location is `sdn-server/third_party/spacedatastandards-go/ABA`.
The coordinator performs downstream adoption separately from this SDS release.
