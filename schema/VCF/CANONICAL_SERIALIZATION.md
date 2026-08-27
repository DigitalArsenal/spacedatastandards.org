# $VCF — vCard 3.0 Projection of $EPM — Normative Annex

Status: **NORMATIVE**. This annex is part of the `$VCF` standard. It defines the
byte-level canonical vCard 3.0 text projection of an `$EPM` record: the field
map, the total emission order of each card form, the identity address rows, the
folding rule, the line terminator, and the density budget.

`schema/VCF/main.fbs` is the record; this annex is its emission contract. The
IDL carries the emitted octets in `CARD` and the publisher's parse of them in
`PROPERTIES` / `ALIASES`; **this annex is what makes `CARD` reproducible**. Two
conforming implementations projecting the same `$EPM` in the same `FORM` MUST
produce identical `CARD` octets and therefore identical
`CONFORMANCE.CARD_SHA256`. A `$VCF` record whose `CARD` does not follow this
annex is non-conforming even when every other field is well-formed.

`CONFORMANCE.PROFILE` names the annex revision the publisher implemented.

## 1. Scope

An `$EPM` record projects to TWO card forms, each with its own canonical
emission order:

- **Full card** (`FORM = FULL`) — the downloadable `.vcf`: contact fields, the
  complete verification-chain address rows, and the photo when one is published.
  Served at `/identity/<peer>.vcf`.
- **Compact card** (`FORM = COMPACT`) — the scannable card: contact fields plus
  exactly the signing-key, encryption-key and profile-signature rows. Served at
  `/identity/<peer>.qr.vcf`. The signature-timestamp and profile-content-id rows
  are dropped (both are recoverable from the record the signature binds); every
  address row costs scan density.

The compact card's density budget is **1200 octets** (`CONFORMANCE.BYTE_BUDGET`),
matching `deployment/checks/fleet-surface-conformance.mjs`. A card exceeding this
sets `WITHIN_BYTE_BUDGET = false` and is not servable as an optical code.

## 2. Field map ($EPM → vCard property)

| vCard property | $EPM source | Notes |
|---|---|---|
| `VERSION` | fixed `3.0` | Always first; `CONFORMANCE.VERSION` |
| `FN` | `DN` | Empty or `<peer.ID…` → `SDN Node` fallback |
| `N` | `FAMILY_NAME`;`GIVEN_NAME`;`ADDITIONAL_NAME`;`HONORIFIC_PREFIX`;`HONORIFIC_SUFFIX` | `fam;given;add;pre;suf` |
| `ORG` | `LEGAL_NAME` | |
| `TITLE` | `JOB_TITLE` | |
| `ROLE` | `OCCUPATION` | Full card only |
| `EMAIL` | `EMAIL` | The human contact address (not an identity row) |
| `TEL` | `TELEPHONE` | |
| `ADR;TYPE=WORK` | `ADDRESS` | `pobox;;street;locality;region;code;country` |
| `NICKNAME` | `ALTERNATE_NAMES` | Trimmed, comma-joined (full card only) |
| `PHOTO` | node profile (API-synthesized) | Full card only; see §5 |
| `END` | fixed | Always last |

Every emitted property is mirrored into one `VCFProperty` with its `ORDER` set to
its zero-based position in this emission order and `OCTET_LENGTH` set to the
unfolded content-line length.

## 3. Identity address rows (§21 literal-key)

Machine identity rides in `EMAIL` items shaped
`<local-part>@<kind>.<identity-domain>` because vCard 3.0 importers in the widely
deployed class silently drop `X-*` extension properties. The deployment identity
domain is `spacedatanetwork.org`; it is publisher DATA and is carried per-row in
`VCFAlias.DOMAIN`, never fixed by the IDL.

Under **§21 (owner ruling 2026-08-19)**, the signing and encryption rows carry
`base64url(hex-decode(PUBLIC_KEY))` — the **literal public key bytes**, not a
derivation path. The extended-public-key row is **RETIRED and not representable
in `$VCF`**: `vcfAliasKind` has no member for it and never will, because
publishing a derivation ancestor exposes an entity's whole key tree. Domains are
unchanged (`sign.`, `encrypt.`); the local part is the key, not the path.

| row | `VCFAlias.KIND` | `KIND_TOKEN` | local part | full | compact |
|---|---|---|---|---|---|
| signing key | `SIGNING_KEY` | `sign` | b64url(first `KEY_TYPE=Signing` `PUBLIC_KEY`) | yes (ONE row) | yes (ONE row) |
| encryption key | `ENCRYPTION_KEY` | `encrypt` | b64url(first `KEY_TYPE=Encryption` `PUBLIC_KEY`) | yes (ONE row) | yes (ONE row) |
| profile signature | `PROFILE_SIGNATURE` | `epmsig` | b64url(`SIGNATURE` hex) | yes | yes |
| signature timestamp | `PROFILE_SIGNATURE_TIMESTAMP` | `epmts` | decimal `SIGNATURE_TIMESTAMP` | yes | **no** (density) |
| profile content id | `PROFILE_CONTENT_ID` | `epmcid` | CIDv1 of the size-prefixed `$EPM` | yes | **no** (density) |
| extended public key | — | — | — | **RETIRED (§21)** | **RETIRED** |
| ledger account | `LEDGER_ACCOUNT` | `bitcoin` / `ethereum` / `solana` | `CHAIN_PROOFS[].ADDRESS` for that `CHAIN` | yes | no |

`ON_COMPACT_CARD` mirrors the last column. `ALGORITHM` carries the profile's
stated algorithm for key and signature rows. `PUBLIC_KEY` carries the profile's
published key value verbatim — the same bytes `LOCAL_PART` encodes.

**One-row invariant**: exactly ONE signing row (the key that produced
`SIGNATURE` — the first `KEY_TYPE=Signing` entry in `KEYS[]`) and exactly ONE
encryption row (the first `KEY_TYPE=Encryption` entry). Never "every signing key"
(`sdn-vcf-duplicate-sign-alias` precedent).

**Encoding**: `ENCODING = base64url` is MANDATORY for key and signature rows
(RFC 5321 caps a local part at 64 octets; a 66-character secp256k1 hex string
would not fit). Timestamp rows use `decimal`; content-id rows use `cidv1`.

**Verification chain** (`CONFORMANCE.CARRIES_VERIFICATION_CHAIN`): the UNFOLDED
card must contain `@sign.`, `@encrypt.` and `@epmsig.` rows on the identity
domain. The extended-public-key row is NOT required (retired).

## 4. Canonical emission order

### 4.1 Full card

```
VERSION:3.0
ADR;TYPE=WORK:...
EMAIL:...
FN:...
N:...
NICKNAME:...
ORG:...
PRODID:...           ← full card only; canonical card should emit NO PRODID
ROLE:...
TEL:...
TITLE:...
[row block: sign, encrypt, ledger..., epmsig, epmts, epmcid]
[PHOTO]
END:VCARD
```

Properties are emitted in ASCII property-name order, with the identity-row block
and PHOTO spliced after the sorted body. The card begins with `VERSION:3.0` and
ends with `END:VCARD`.

### 4.2 Compact card

```
VERSION:3.0
N:...
FN:...
ORG:...
EMAIL:...
TEL:...
ADR;TYPE=WORK:...
EMAIL;type=INTERNET;type=sign:...
EMAIL;type=INTERNET;type=encrypt:...
EMAIL;type=INTERNET;type=epmsig:...
END:VCARD
```

The compact card emits `N` before `FN` (not the full card's ASCII order) and
`ADR;TYPE=WORK` (not bare `ADR`). No `PRODID`, `ROLE`, `TITLE`, `NICKNAME`,
`PHOTO`, timestamp row, content-id row, or ledger rows. The three identity rows
are the verification chain; nothing else rides the compact card.

## 5. PHOTO

`VCF.PHOTO_POLICY` states which of three shapes the card uses, so a
non-canonical emission is describable rather than silently mislabelled:

- `ABSENT` — no `PHOTO` row. The canonical compact card is ALWAYS `ABSENT`.
- `URI_REFERENCE` — `PHOTO;VALUE=uri:<locator>`, with the locator in
  `PHOTO_URI`. **This is the canonical v3 spelling** (RFC 2426: `VALUE=uri` is
  the v3 way to carry a URI; `MEDIATYPE=` is v4-only).
- `INLINE_ENCODED` — `PHOTO;ENCODING=b;...:<base64>`. Non-canonical for v3 and
  dominates the octet budget.

**LACK — no canonical implementer exists yet.** The Go emitter writes
`PHOTO;ENCODING=b;MEDIATYPE=<type>:<base64>` (a v4 parameter on a v3 card, which
strict importers drop) and its JS twin emits
`PHOTO;ENCODING=b;TYPE=<TYPE>:<base64>` with LF-only folding. Both are
`INLINE_ENCODED` and both are non-canonical. `URI_REFERENCE` requires content
pin/unpin infrastructure that does not exist yet. Until it does, the canonical
compact card carries no photo (it already does not) and a full card's
`INLINE_ENCODED` photo is an implementation detail that MUST be reported
honestly in `PHOTO_POLICY`, never as `URI_REFERENCE`.

## 6. Folding and line endings

- All lines end with **CRLF** (`\r\n`): `CONFORMANCE.LINE_ENDING = CRLF`. `LF`
  is representable so a non-conforming emitter can be described, never blessed.
- **Folding** (RFC 2425): a content line longer than 75 octets is split at 75 and
  each continuation line begins with a single space (`\r\n `):
  `CONFORMANCE.FOLD_OCTET_WIDTH = 75`. `FOLD_OCTET_WIDTH = 0` means nothing was
  folded, which is non-canonical.
- `BYTE_LENGTH` is the emitted card including folding and terminators;
  `UNFOLDED_BYTE_LENGTH` is the same card with folding removed. A folding
  disagreement between two emitters is detectable from the pair without
  unfolding either text.
- Folding today applies to the identity-row block and the compact-card lines (the
  lines most likely to exceed 75 octets). The Go encoder emits body lines and
  PHOTO unfolded; a canonical emitter SHOULD fold every content line exceeding 75
  octets.

## 7. What this annex gates

A `$VCF` projection module (WASM guest on space-data-module-sdk) implements this
annex: `$EPM` bytes in → `$VCF` record out, with `CARD` byte-identical across
browser / WasmEdge / container-WasmEdge. The parity gate compares the module's
`CARD` against the host emitter's output on real signed `$EPM` fixtures, by
`CONFORMANCE.CARD_SHA256`. Any divergence is a P1 defect (tri-runtime parity
law).

## 8. Open items (LACK, not blockers)

- `PHOTO;VALUE=uri:<locator>` — needs content pin/unpin infrastructure; until
  then `PHOTO_POLICY` reports `INLINE_ENCODED` honestly.
- `PRODID` removal from the canonical full card — host emitter amend needed.
- Folding of every content line (not just identity rows / compact card) — host
  emitter amend needed.
- `URL` — banned 2026-08-04 (`/ip4`, `/ip6`, `/dns` values); excluded from the
  projection.

## 9. Annex section → IDL field

| annex | `schema/VCF/main.fbs` |
|---|---|
| §1 forms | `VCF.FORM` (`vcfCardForm`), `CONFORMANCE.BYTE_BUDGET`, `WITHIN_BYTE_BUDGET` |
| §2 field map | `VCF.PROPERTIES` (`VCFProperty.NAME` / `PARAMETERS` / `VALUE` / `ORDER`) |
| §3 identity rows | `VCF.ALIASES` (`VCFAlias`), `VCF.SUBJECT` literal keys |
| §4 emission order | `VCFProperty.ORDER`, `VCFAlias` list order |
| §5 photo | `VCF.PHOTO_POLICY`, `PHOTO_URI`, `PHOTO_MEDIA_TYPE` |
| §6 folding / endings | `CONFORMANCE.LINE_ENDING`, `FOLD_OCTET_WIDTH`, `BYTE_LENGTH`, `UNFOLDED_BYTE_LENGTH` |
| §7 parity | `CONFORMANCE.CARD_SHA256`, `VCF.PRODUCER_ID`, `PRODUCER_VERSION` |
