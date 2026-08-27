# $VCF — vCard 3.0 Projection of $EPM — Normative Annex

Status: **NORMATIVE**. This annex defines the canonical vCard 3.0 text
projection of an `$EPM` record. It is the standard a vCard-projection WASM
module implements so that byte-identical output is provable across
browser/WasmEdge/Docker-WasmEdge (tri-runtime parity).

`$VCF` is a **text standard, not a FlatBuffer IDL** — vCard 3.0 (RFC 2426)
is a line-oriented text format, and a `.fbs` schema would invent unused binary
structure with no wire presence. This annex follows the
`schema/EPM/CANONICAL_SERIALIZATION.md` naming precedent: a normative doc
governing a projection, not a serializable record type.

## 1. Scope

A `$EPM` record projects to TWO vCard shapes, each with its own canonical
emission order:

- **Full card** — the downloadable `.vcf`: contact fields + the complete
  verification-chain email aliases + the photo. Served at `/identity/<peer>.vcf`.
- **Compact QR card** — the scannable card: contact fields + exactly
  `sign`, `encrypt`, `epmsig` aliases. Served at `/identity/<peer>.qr.vcf`.
  `epmts`/`epmcid` are dropped from the QR (both recoverable from the record
  the signature binds); every alias line costs scan density.

The compact card's density budget is **1200 bytes** (QR_MAX_BYTES), matching
`deployment/checks/fleet-surface-conformance.mjs`. A card exceeding this is
not servable as QR.

## 2. Field map ($EPM → vCard property)

| vCard property | $EPM source | Notes |
|---|---|---|
| `VERSION` | fixed `3.0` | Always first |
| `FN` | `DN` | Empty or `<peer.ID…` → `SDN Node` fallback |
| `N` | `FAMILY_NAME`;`GIVEN_NAME`;`ADDITIONAL_NAME`;`HONORIFIC_PREFIX`;`HONORIFIC_SUFFIX` | `fam;given;add;pre;suf` |
| `ORG` | `LEGAL_NAME` | |
| `TITLE` | `JOB_TITLE` | |
| `ROLE` | `OCCUPATION` | Full card only |
| `EMAIL` | `EMAIL` | The human contact email (not an alias) |
| `TEL` | `TELEPHONE` | |
| `ADR;TYPE=WORK` | `ADDRESS` | `pobox;;street;locality;region;code;country` |
| `NICKNAME` | `ALTERNATE_NAMES` | Trimmed, comma-joined (full card only) |
| `PHOTO` | node profile (API-synthesized) | Full card only; see §5 |
| `END` | fixed | Always last |

## 3. Identity email aliases (§21 literal-key)

Machine identity rides in `EMAIL` items shaped
`<value>@<kind>.spacedatanetwork.org` because vCard 3.0 importers
(iPhone/Android) drop `X-*` properties.

Under **§21 (owner ruling 2026-08-19)**, the sign/encrypt aliases carry
`base64url(hex-decode(PUBLIC_KEY))` — the **literal public key bytes**, not
a derivation path. The xpub alias is **RETIRED**. Domains are unchanged
(`sign.`, `encrypt.`); the local part is the key, not the path.

| alias kind | local part | domain | full card | compact QR |
|---|---|---|---|---|
| `sign` | b64url(first `KEY_TYPE=Signing` PUBLIC_KEY) | `sign.spacedatanetwork.org` | yes (ONE row) | yes (ONE row) |
| `encrypt` | b64url(first `KEY_TYPE=Encryption` PUBLIC_KEY) | `encrypt.spacedatanetwork.org` | yes (ONE row) | yes (ONE row) |
| `epmsig` | b64url(SIGNATURE hex) | `epmsig.spacedatanetwork.org` | yes | yes |
| `epmts` | decimal `SIGNATURE_TIMESTAMP` | `epmts.spacedatanetwork.org` | yes | **no** (dropped for density) |
| `epmcid` | CIDv1 of size-prefixed EPM | `epmcid.spacedatanetwork.org` | yes | **no** (dropped for density) |
| `xpub` | — | — | **RETIRED** (§21) | **RETIRED** |
| `bitcoin` | `CHAIN_PROOFS[].ADDRESS` (chain=bitcoin) | `bitcoin.spacedatanetwork.org` | yes | no |
| `ethereum` | `CHAIN_PROOFS[].ADDRESS` (chain=ethereum) | `ethereum.spacedatanetwork.org` | yes | no |
| `solana` | `CHAIN_PROOFS[].ADDRESS` (chain=solana) | `solana.spacedatanetwork.org` | yes | no |

**One-row invariant**: exactly ONE `sign` alias (the key that produced
SIGNATURE — the first `KEY_TYPE=Signing` entry in `KEYS[]`) + ONE `encrypt`
alias (the first `KEY_TYPE=Encryption` entry). Never "every signing key"
(`sdn-vcf-duplicate-sign-alias` precedent).

**Encoding**: b64url MANDATORY (RFC 5321 64-octet local-part cap; secp256k1
hex = 66 chars would not fit). Domains UNCHANGED.

**CardCarriesCryptoIdentity** (the QR gate): the unfolded card must contain
`@sign.spacedatanetwork.org`, `@encrypt.spacedatanetwork.org`, and
`@epmsig.spacedatanetwork.org`. The xpub alias is NOT required (retired).

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
[alias block: sign, encrypt, chain..., epmsig, epmts, epmcid]
[PHOTO]
END:VCARD
```

Properties are emitted in ASCII property-name order (the Go `go-vcard` encoder
sorts), with the alias block and PHOTO spliced after the sorted body. The
card begins with `VERSION:3.0` and ends with `END:VCARD`.

### 4.2 Compact QR card

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
`PHOTO`, `epmts`, `epmcid`, or chain aliases. The three alias rows are the
verification chain; nothing else rides the QR.

## 5. PHOTO

**LACK — no canonical implementer exists.** The Go emitter writes
`PHOTO;ENCODING=b;MEDIATYPE=<type>:<base64>` (a vCard 4.0 parameter on a
v3.0 card, which iOS drops silently). The JS twin emits
`PHOTO;ENCODING=b;TYPE=<TYPE>:<base64>` with LF-only folding. Both are
non-canonical v3 spellings, and the PHOTO source is the node profile
(API-synthesized `photo_data_url`), not an `$EPM` FlatBuffer field.

The canonical v3 spelling is `PHOTO;VALUE=uri:/ipfs/<cid>` (per RFC 2426,
`VALUE=uri` is the v3 way to carry a URI; `MEDIATYPE=` is v4-only). This
requires pin/unpin infrastructure that does not exist yet. Until it does, the
canonical compact card carries NO photo (it already doesn't), and the full
card's PHOTO is an implementation detail, not a `$VCF` canonical field.

## 6. Folding and line endings

- All lines end with **CRLF** (`\r\n`).
- **Folding** (RFC 2425): a line longer than 75 octets is split at 75, and
  each continuation line begins with a single space (`\r\n `).
- Folding applies to the **alias block and compact card lines** (the lines most
  likely to exceed 75 octets). The encoder body lines and PHOTO are emitted
  unfolded by the Go encoder today; a canonical emitter SHOULD fold all lines
  exceeding 75 octets.

## 7. What this annex gates

A `$VCF` projection module (WASM guest on space-data-module-sdk) implements
this annex: `$EPM` bytes in → vCard text out, byte-identical across
runtimes. The parity gate compares the module's output against the Go
`internal/vcard/vcard.go` emitter on real signed `$EPM` fixtures. The module
must not diverge from this annex — any divergence is a P1 defect (Janus
tri-runtime parity law).

## 8. Open items (LACK, not blocker)

- `PHOTO;VALUE=uri:/ipfs/<cid>` — needs pin/unpin infra
- `PRODID` removal from the canonical full card — Go amend needed
- Folding of all lines (not just alias/compact) — Go amend needed
- `URL` — banned 2026-08-04 (`/ip4`/`ip6`/`dns` values); excluded from the
  projection
