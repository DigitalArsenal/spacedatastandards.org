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

## Schema Development

- Schema files are in `schema/*/main.fbs` (FlatBuffers IDL format)
- Changes to schemas trigger code generation for all supported languages
- Avoid naming fields the same as their enum type to prevent TypeScript parameter shadowing issues
