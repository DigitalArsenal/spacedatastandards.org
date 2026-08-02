# EPM Canonical Serialization — Normative Annex

Status: **NORMATIVE**. This annex defines the phrase *"canonical EPM
content"* used by `EPM.SIGNATURE` (`schema/EPM/main.fbs`). Until this annex,
that phrase named a convention with three consenting implementations but no
standard; this document is the standard (Themis ruling, task
`sds-epm-canonical-serialization`; owner dual-curve ruling 2026-07-27).

## 1. The signing preimage is the JCS projection — never FlatBuffer bytes

The signature covers the UTF-8 bytes of an [RFC 8785 (JCS)] JSON document
projected from the EPM as specified below. FlatBuffer bytes are **not**
signable material: vtable deduplication, field-write order, padding,
alignment and size-prefix/`$EPM` framing are all builder-dependent, so
byte-for-byte reconstruction is achievable only over the JCS projection.

## 2. Projection rules

1. **Keys are the IDL field names, capitalization exact** (`DN`,
   `NORAD`-style upper snake). JCS orders object members by UTF-16 code
   units; the EPM key set is ASCII, so this equals byte order. HTML escaping
   is disabled (`&`, `<`, `>` and U+2028/U+2029 are emitted raw).
2. **A field that is absent, or empty after Unicode-whitespace trim, is
   OMITTED** — never emitted as `""`, `null`, or `[]`. A nested object that
   becomes empty after this rule is itself omitted (e.g. `ADDRESS`).
3. **`SIGNATURE` is excluded from its own preimage.**
   `ChainProof.SIGNATURE` **stays**: it is an inner attestation made by a
   chain key, not the outer signature being computed.
4. **`SIGNATURE_TIMESTAMP` is INCLUDED** (as a JSON number, when nonzero).
5. **`ENTITY_TYPE` is always present**, projected as its enum **name**
   (e.g. `"Organization"`), never its ordinal.
6. String-vector members are projected as JSON arrays of trimmed non-empty
   strings; table-vector members as arrays of objects, each projected under
   rules 1–2. `CryptoKey.KEY_TYPE` projects as its enum name (`"Signing"`,
   `"Encryption"`). All fields of `CryptoKey` (including 1.174.0's
   `KEY_PATH`, `ALGORITHM`, `ENCODING`) and of `ChainProof` participate
   under rule 2.

## 3. Vector order — the total order, and who it binds

JCS fixes object-member order but deliberately leaves **array order** as
insertion order. vCard property order is not EPM vector order, which is
exactly where vCard→EPM reconstruction historically broke.

**Verification is over stored order.** A verifier projects vectors in the
order the record carries them. This preserves the validity of every
signature made before this annex.

**Production is in canonical order.** A producer emitting a *canonical* EPM
(and every producer signing a new EPM MUST emit canonical form) writes each
vector in the following total order, so that an independent reconstruction
of the same content is byte-identical:

| Vector | Total order (ascending, lexicographic byte order) |
|---|---|
| `KEYS[]` | (`KEY_TYPE` name, `ADDRESS_TYPE`, `PUBLIC_KEY`, `XPUB`) |
| `CHAIN_PROOFS[]` | (`CHAIN`, `ADDRESS`, `KEY_PATH`) |
| `ALTERNATE_NAMES[]` | element value; exact duplicates (after trim) removed |
| `MULTIFORMAT_ADDRESS[]` | element value; exact duplicates (after trim) removed |

Every sort key participates after rule-2 trimming; absent sort-key fields
compare as the empty string. The tuples above have no equal-tuple collisions
for well-formed records (`PUBLIC_KEY` is unique per key; a chain address
appears once per chain/path).

## 4. Verification procedure — both curves, permanent asymmetry

The owner ruling (2026-07-27) keeps ed25519 and adds secp256k1. The curves
differ in **where the verifying key comes from**, and this asymmetry is
**permanent by design, not a defect**:

- **secp256k1** — the verifier DERIVES the verifying key from `XPUB` and the
  key's derivation path (non-hardened, `m/44'/0'/N'/0/0`). No published key
  is needed or wanted; a record that carries an xpub carries its own
  verification material. Signature bytes are DER ECDSA over SHA-256 of the
  preimage.
- **ed25519** — the verifier uses the **published key in `KEYS[]`, which is
  authoritative**. SLIP-10 ed25519 has no public derivation: the key at
  hardened `m/44'/0'/N'/0'/0'` is not xpub-derivable by anyone. Signature
  bytes are raw ed25519 over the preimage itself.

`EPM.SIGNATURE_ALGORITHM` (1.174.0) names the curve; when absent, verifiers
try ed25519 first, then secp256k1, against each `KEYS[]` entry with
`KEY_TYPE = Signing`.

## 5. What this annex gates

Reconstruction-dependent changes are valid only against canonical-form
records: removing the embedded `X-SDN-EPM-B64` blob from vCards, and any
importer that rebuilds an EPM from a projected representation instead of
carrying the original bytes.

[RFC 8785 (JCS)]: https://www.rfc-editor.org/rfc/rfc8785
