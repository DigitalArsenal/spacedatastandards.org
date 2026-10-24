# Name collisions in generated SDS code

For LLM agents. Read this when generated SDS code (`lib/<language>/`, the
`dist/*/*.tar.gz` archives, a vendored copy) fails to compile or misbehaves
because an SDS name is also a keyword, macro or token in the target language.

Every claim below was checked against the repo's generated output: flatc
25.12.19 (shipped as flatc-wasm 26.1.38), the flags in `scripts/datatypes.json`
plus `--preserve-case`, the FlatBuffers 25.12.19 runtimes, Apple clang 21 on
macOS (C++17), `kotlinc`, `javac`, `go build`, `php -l`. Windows entries come
from the Windows SDK headers and were not compiled here.

## Policy

1. SDS never renames a field, table, enum or member to avoid a keyword or macro
   of some language. Handle the collision in the consumer.
2. A rename needs a semantic reason. `DomainProof.DOMAIN` became
   `DOMAINS: [string]` because a proof binds several domains, not because
   `<math.h>` defines `DOMAIN`.
3. Never edit generated code (`lib/`, `dist/`, a vendored copy). The next
   release overwrites it. Put the workaround in your own code.
4. Two older IDL rules stay: they protect names flatc itself generates, not
   language names. `MIN` and `MAX` are reserved enum member names
   (`npm run check:enum-names`), and an enum type must not share a name with the
   camelCase form of a field that uses it (AGENTS.md, "Enum naming").

## C and C++: macros are the real class

The preprocessor expands macros before the compiler sees namespaces, scopes or
structs, so `namespace`, `struct` and `::` do not shield a name. Generated C++
declares one member function per field, `NAME()`, so a macro called `NAME`
rewrites the declaration:

```cpp
// error: expected member name or ';' after declaration specifiers
#include <math.h>                                    // macOS: #define DOMAIN 1
namespace sds { struct Alias { int DOMAIN() const; }; }
```

Known cases (macOS, Apple clang 21). Checked by compiling all 292 generated
headers after 68 libc and POSIX headers:

| SDS name | Declared in | Macro and header | Kind |
|---|---|---|---|
| `DOMAIN` | `SCV` ×4 (`schema/SCV/main.fbs:205,225,297,326`), `VCF` `VCFAlias` (`schema/VCF/main.fbs:183`) | `<math.h>` | object-like |
| `TIME_UTC` | `ENV` (`schema/ENV/main.fbs:50`) | `<time.h>` (C11) | object-like |
| `BYTE_ORDER` | `XTC` ×2 (`schema/XTC/main.fbs:228,242`) | `<machine/endian.h>`, reached through `<stdlib.h>` and `<sys/types.h>` | object-like |
| `MIN`, `MAX` | `AGR` `AGRBin` (`schema/AGR/main.fbs:31,32`) | `<sys/param.h>` | function-like, `MIN(a, b)` |
| all of the above | `REC` | the umbrella header includes every standard | |

- `<flatbuffers/flatbuffers.h>` alone defines `DOMAIN`, `TIME_UTC`, `BYTE_ORDER`,
  `BIG_ENDIAN` and `LITTLE_ENDIAN` on this toolchain, so every C++ translation
  unit that uses FlatBuffers has them. It does not define `MIN`, `MAX` or `ERROR`.
- `BIG_ENDIAN` and `LITTLE_ENDIAN` are enumerators of `XTC` `ByteOrderType`. C++
  prefixes them (`ByteOrderType_BIG_ENDIAN`), so only an unprefixed use is hit.
- Windows (`<windows.h>`): `min` and `max` (function-like; `NOMINMAX` removes
  them), `ERROR`, `DELETE`, `IN`, `OUT`, `TRANSPARENT`, `OPAQUE`, `RELATIVE`,
  `NEAR` (`NOGDI` removes the GDI ones; `WIN32_LEAN_AND_MEAN` trims the rest).
  SDS declares fields named `ERROR` (`DSS`, `ERM`, `WHA`), `DELETE` (`CZM`),
  `TRANSPARENT` (`CZM`), `OPAQUE` (`PLG`), `RELATIVE` (`LFV`, `MPL`) and `NEAR`
  (`KML`). Expect the same symptoms and the same fixes.
- libc differs by platform. Probe your own before trusting this table.

### Diagnose

An accessor turns into a number or a stray token, or the call "has too few
arguments".

```sh
# The compiler's complaint names the macro:
#   error: expected member name or ';' after declaration specifiers
#   note: expanded from macro 'DOMAIN'            (object-like)
#   error: too few arguments provided to function-like macro invocation
#   note: macro 'MIN' defined here                (function-like)
c++ -std=c++17 -I lib/cpp -I "$FLATBUFFERS_INCLUDE" -E your.cpp | grep -n '\*1() const'   # the accessor as the compiler saw it
echo '#include <flatbuffers/flatbuffers.h>' | c++ -std=c++17 -x c++ -I "$FLATBUFFERS_INCLUDE" -dM -E - | grep -w DOMAIN
```

Or add a probe where the generated header is included:

```cpp
#ifdef DOMAIN
#error DOMAIN is a macro here
#endif
```

### Fix, in order

**a. Guard the include.** Include every system header you need and
`<flatbuffers/flatbuffers.h>` first, so no later include defines the macro
again. Then push, `#undef`, include the generated header, pop. Calls to the
colliding accessor stay inside the guarded region, because `pop_macro` brings
the macro back for the code after it.

```cpp
#include <string>
#include <flatbuffers/flatbuffers.h>   // brings <cmath>, so DOMAIN is defined from here on
#pragma push_macro("DOMAIN")
#undef DOMAIN
#include "VCF/main_generated.h"
inline std::string domain_of(const VCFAlias &alias) {      // call site inside the region
  return alias.DOMAIN() ? alias.DOMAIN()->str() : std::string();
}
#pragma pop_macro("DOMAIN")
```

Without the first include, the generated header's own `#include
<flatbuffers/flatbuffers.h>` defines `DOMAIN` after your `#undef`, and the
header still fails. A call to `alias.DOMAIN()` after the `pop_macro` fails too.

**b. Confine the calls.** Put every call to a colliding accessor in one small
translation unit of yours and expose plain functions to the rest of the program.
If that unit does not need the macro, `#undef` it after the includes:

```cpp
#include <flatbuffers/flatbuffers.h>
#undef TIME_UTC                        // this file does not use C11's TIME_UTC
#include "ENV/main_generated.h"
double utc_seconds(const ENV &env) { return env.TIME_UTC(); }
```

For a function-like macro, parenthesize the member name at the call site. This
keeps `MIN(` from reading as an invocation; the declaration inside the header
still needs fix a:

```cpp
#include <sys/param.h>                 // defines MIN(a, b) and MAX(a, b)
#include <flatbuffers/flatbuffers.h>
#pragma push_macro("MIN")
#pragma push_macro("MAX")
#undef MIN
#undef MAX
#include "AGR/main_generated.h"
#pragma pop_macro("MAX")
#pragma pop_macro("MIN")
double lowest(const AGRBin &bin) { return (bin.MIN)(); }  // MIN is a macro again here
```

A translation unit that never includes `<sys/param.h>` (directly or through
another header) compiles `AGR` as is.

**c. Never edit the generated header.** Not to rename, not to `#undef` inside it.

## flatc and target keywords

flatc escapes a name only when the name it emits is in that generator's own
keyword list. The lists are lowercase words, plus a few capitalized ones
(Python `None`, `True`, `False`; Rust `Self`; Swift `Self`, `Any`, `Type`;
TypeScript `Object`). SDS field names are UPPER_SNAKE and the build passes
`--preserve-case`, so flatc emits `CLASS`, `DEFAULT` and `IN` unchanged in every
target except Kotlin. The 28 lowercase SDS field names (`MBL`, `SCM`, `RFM`,
`REC`) are not keywords in any target. What flatc does to a lowercase field
named after a keyword, which shows the rule:

| Target | Field `class` (or the keyword shown) becomes |
|---|---|
| C++, Java, Python, Swift, TypeScript/JS, Lobster | `class_` (suffix `_`) |
| Go, Rust | `default_()`, `type_()` (suffix `_`; `class` is not a Go or Rust keyword) |
| Kotlin | `class_` for a lowercase name; see the exception below |
| C# | `@class` (verbatim identifier) |
| Dart | getter `$class`, plus a plain `class` getter |
| PHP | no escaping needed: accessors are `getclass()`, parameters are `$class` |

Enum members follow the same rule: `None` in a `dssAction` enum is
`None_ = 0` in Python (`lib/py/DSS/dssAction.py`).

Two places where UPPER_SNAKE names still break:

- **Kotlin lowers the case after the keyword check.** `CLASS` becomes
  `val class`, `OBJECT` becomes `val object` and `WHEN` becomes `val when`,
  unescaped, so the file does not parse (`lib/kt/PIN/PINRule.kt:32`,
  `lib/kt/CDM/CDMObject.kt:43`). 21 standards are affected, through the fields
  `CLASS` (`PIN`, `RFE`), `OBJECT` (`ASG`, `CDM`, `ERM`, `OEM`, `PPE`) and `WHEN`
  (`KML`) and the standards that include them. Kotlin also reads the file
  identifier `"$EPM"` as a string template, so `EPMBufferHasIdentifier` throws
  `AssertionError: file identifier must be length 4`. Every standard's
  `*BufferHasIdentifier` and `finish*Buffer` pass such a template
  (`lib/kt/EPM/EPM.kt:354,448,449`). Fix: call the Java binding from Kotlin. It
  keeps the IDL names and compiles (`lib/java/CDM`); `OBJECT()` and
  `EPMBufferHasIdentifier` work.
- **Go aliases (raw flatc output; the build repairs it).** flatc adds a
  PascalCase alias per accessor (`Class()`). An alias can duplicate another
  method: `PRW.INIT` against the binding's `Init(buf, i)`, or `SDL.IV_LENGTH`
  against the vector-length alias of `IV`. The build drops the alias and keeps
  the exact-case accessor (last section).

## JSON

JSON keys and JSON Schema property names are the exact IDL field names
(`DOMAINS`, `PUBLIC_KEY`, `CLASS`), and flatc's JSON printer and parser use the
same names (`lib/fbjson/EPM/main.fb.schema.json`). No keyword or macro applies.

## What the build already repairs

These are flatc bugs that hit every consumer, repaired in
`scripts/generateSource.mjs` before the files are written. Do not patch them by
hand and do not rename a field for them:

- Go: a duplicate PascalCase alias (`dedupeGoAccessors`).
- C++ and Swift: a real enum member named like flatc's `MIN`/`MAX` sentinel
  (`dedupeCppEnumConstants`, `dedupeSwiftEnumStatics`).
- C++: the include guard, scoped per standard (`scopeCppIncludeGuard`).
- PHP: `nan` and `inf` defaults (`fixPhpFloatConstants`), and the empty
  parameter in `createX($builder, , $A)` when the first field is deprecated
  (`fixPhpDeprecatedFirstField`).
