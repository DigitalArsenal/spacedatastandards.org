# Claude Code Guidelines for spacedatastandards.org

## Package Naming

**ALWAYS** use `spacedatastandards.org` as the package name across all package registries:
- npm: `spacedatastandards.org`
- PyPI: `spacedatastandards.org`
- Other registries: Follow the same convention where possible

## Build & Deploy

- Run `npm run build` to build all artifacts
- Run `npm run deploy` to build, commit, and push
- Create a GitHub release to trigger publishing to package registries

## Schema Authoring Rules

Schemas live at `schema/*/main.fbs` (FlatBuffers IDL). Changes trigger codegen
for every supported language binding (TS, JS, C++, Go, Swift, Python, etc.).

### Enum naming

An enum and a field MUST NEVER share a name in ANY case form. Pick an enum name
that cannot collide with the camelCase form of ANY field that references it.

`flatc`'s TypeScript generator emits `addX(builder, x: enumType)` where the
parameter name `x` is derived from the field name (`FOO_BAR` → `fooBar`). If
the enum is also called `fooBar`, the parameter shadows the enum type and the
generated `.ts` fails to compile.

**Do NOT** fix this by switching enum casing (e.g. `fooBar` → `FooBar`) — the
underlying problem is semantic overlap, not casing. **Rename the enum to
something semantically distinct.**

```fbs
// WRONG — enum name matches the field's camelCase form
enum pluginType : byte { ... }
table PLG {
  PLUGIN_TYPE: pluginType;   // generated param `pluginType: pluginType` → shadow
}

// ALSO WRONG — still overlaps on "pluginType"
enum PluginType : byte { ... }

// RIGHT — enum renamed to a semantically distinct concept
enum pluginCategory : byte { ... }
table PLG {
  PLUGIN_TYPE: pluginCategory;   // generated param `pluginType: pluginCategory` → no shadow
}
```

If you can't think of a distinct name, rename the FIELD as well so field-param
and enum-type are unambiguously different tokens at every casing.

### Other rules

- Field names are `UPPER_SNAKE_CASE`.
- Table names are 3-letter codes (`ETM`, `PLG`, `OMM`, …).
- Each schema file must carry a `file_identifier "$XXX";` line matching its
  3-letter code.
- Root type is the 3-letter table.
- Version + SHA-256 hash headers at the top are managed by
  `scripts/generateVersion.py` — do not hand-edit them.
