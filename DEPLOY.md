# Deployment Guide

This guide covers how to publish Space Data Standards packages to various package managers for all 13 supported languages.

## Table of Contents

- [Overview](#overview)
- [Website Deployment Gates](#website-deployment-gates)
- [Prerequisites](#prerequisites)
- [JavaScript/TypeScript (npm)](#javascripttypescript-npm)
- [Python (PyPI)](#python-pypi)
- [Go (Go Modules)](#go-go-modules)
- [Rust (crates.io)](#rust-cratesio)
- [Java (Maven Central)](#java-maven-central)
- [Kotlin (Maven Central)](#kotlin-maven-central)
- [C# (.NET/NuGet)](#c-netnuget)
- [Dart (pub.dev)](#dart-pubdev)
- [Swift (Swift Package Manager)](#swift-swift-package-manager)
- [PHP (Packagist)](#php-packagist)
- [C++ (vcpkg/Conan)](#c-vcpkgconan)
- [Lobster](#lobster)
- [CI/CD Automation](#cicd-automation)

---

## Overview

Space Data Standards generates FlatBuffer bindings for 13 programming languages from a single schema definition. Each language has its own package manager ecosystem with unique publishing requirements.

**Generated Output Structure:**
```
lib/
├── js/      # JavaScript (ES modules)
├── ts/      # TypeScript (with type definitions)
├── py/      # Python
├── go/      # Go (with go.mod)
├── rs/      # Rust (with Cargo.toml)
├── java/    # Java
├── kt/      # Kotlin
├── cs/      # C#
├── dart/    # Dart
├── sw/      # Swift
├── php/     # PHP
├── cpp/     # C++
└── lob/     # Lobster
```

---

## Website Deployment Gates

`spacedatastandards.org` is served by GitHub Pages straight from `main`. There is
no staging step: whatever is committed to `main` is what the world gets, roughly
two minutes later, cached for 600 seconds. Two gates exist so a broken tree
cannot become a broken site, and so a broken site cannot go unnoticed.

### What went wrong on 2026-08-27

A stash pop during a merge left unresolved conflict blocks in 55 tracked files.
They were committed and pushed. `dist/manifest.json` — the registry's data feed —
was among them, so it was no longer JSON. Pages built green, the site served a
200, and the Schema Registry rendered nothing:

```
Failed to load schemas: SyntaxError: Expected property name or '}' at position 2
```

`package.json` was poisoned in the same commit, so `npm ci` and `npm run build`
could not even parse it. Nothing in the pipeline noticed. A green push is not a
working site.

### Pre-deploy gate — `npm run check:integrity`

`scripts/check-release-integrity.mjs` refuses a tree that cannot be safely
served. It enforces four rules:

| Rule | Refuses |
| --- | --- |
| `conflict-markers` | any tracked file containing an unresolved merge conflict block |
| `json-parse` | any tracked `.json` file that does not parse (`tsconfig`/`jsconfig` are JSONC and exempt) |
| `manifest-standards` | `dist/manifest.json` `STANDARDS` keys that are not exactly the `schema/<CODE>/main.fbs` set |
| `version-parity` | `dist/manifest.json` `.version` that differs from `package.json` `.version` |

It runs in four scopes, so it blocks new defects without wedging on old ones:

```bash
npm run check:integrity                      # whole tree — the release gate
node scripts/check-release-integrity.mjs --staged        # pre-commit hook
node scripts/check-release-integrity.mjs --pre-push      # pre-push hook
node scripts/check-release-integrity.mjs --rev <commit>  # judge a commit, no checkout
node scripts/check-release-integrity.mjs --all --json    # machine-readable
```

`--rev` matters here: this repo tracks ~43,000 files, so checking a commit out
to inspect it costs minutes. `--rev` reads the commit's tree directly.

Both hooks are installed by husky (`.husky/pre-commit`, `.husky/pre-push`).
`npm run deploy` runs the whole-tree gate *before* it commits.

### Post-deploy gate — `npm run verify:live`

Passing the pre-deploy gate proves the bytes are sane. It does not prove the
site works. `scripts/verify-live-site.mjs` proves that, against the real origin:

1. polls `https://spacedatastandards.org/dist/manifest.json` (cache-busted) until
   it is 200, parses as JSON, and reports the version and standard count this
   checkout just deployed — or fails after `--wait` seconds (default 600);
2. checks `dist/schema-embeddings.json`, `/`, and every asset `/` references —
   a script served as HTML is a 404 fallback, not a script;
3. loads `/#/schemas` in headless Chromium with a fresh profile and asserts the
   page renders `Showing N of N schemas` with N equal to the manifest count,
   at least N schema cards in the DOM, no "Failed to load" text, and zero
   console errors.

```bash
npm run verify:live                                    # expectations from ./dist/manifest.json
npm run verify:live -- --since "$(date -u +%FT%TZ)"    # also require a fresh last-modified
npm run verify:live -- --expect-version 1.196.0+1787624265986 --expect-count 224
```

Exit 0 = verified live. Exit 1 = **the deploy is failed**, roll back. Exit 2 =
the gate could not run (needs `npx playwright install chromium`); never read
exit 2 as a pass.

`npm run deploy` runs it after the push, so a deploy that does not render is a
failed deploy.

### npm publishing is not part of `npm run deploy`

Packages are published **only** by the release workflow
(`.github/workflows/publish.yml`), triggered by publishing a GitHub Release.
`npm run publish:js` refuses, by design. `npm run deploy` ships the site; a
release ships the packages.

### Rollback a bad deploy

The site is `main`. Rolling back means putting good bytes on `main` now — and
the fastest safe way is git plumbing, which writes a commit **without touching
your working tree or index**. That matters when a build is running in the
checkout, which is exactly when these accidents happen.

```bash
# 1. Find the last commit whose file was good.
git log --oneline -- dist/manifest.json
GOOD=<that commit>

# 2. Take that blob (already in the object store; hash-object -w if it is not).
BLOB=$(git rev-parse "$GOOD:dist/manifest.json")
#    from a file instead:  BLOB=$(git hash-object -w /path/to/fixed-manifest.json)

# 3. Build the new tree in a scratch index — the real index is untouched.
export GIT_INDEX_FILE=$(mktemp -u /tmp/sds-rollback-index.XXXXXX)
git read-tree origin/main
git update-index --cacheinfo 100644,"$BLOB",dist/manifest.json
TREE=$(git write-tree)
unset GIT_INDEX_FILE

# 4. Commit it on top of the live tip and push.
COMMIT=$(git commit-tree "$TREE" -p origin/main -m "hotfix: restore a servable dist/manifest.json")
git push origin "$COMMIT:refs/heads/main"

# 5. Prove it. Do not skip this step.
npm run verify:live -- --expect-version <version> --expect-count <count>
```

If the bad tip is the most recent commit and the previous tip was good, the
rollback is just `git push origin <good-sha>:refs/heads/main` (a fast-forward if
the good commit is a descendant; otherwise coordinate before force-pushing).

**Never force-push `main` to undo a hotfix.** On 2026-08-27 the manifest hotfix
was force-pushed away eleven minutes after it landed, Pages rebuilt the poisoned
commit, and the registry went down a second time. `git reflog show origin/main`
is how that was proven; `npm run verify:live` is how it was caught.

---

## Prerequisites

Before publishing, ensure you've built all artifacts:

```bash
npm run build
```

This runs the full build pipeline including:
- Schema compilation via FlatBuffers
- Source generation for all languages
- Archive creation in `dist/`
- Version updates

---

## JavaScript/TypeScript (npm)

**Package Manager:** [npm](https://www.npmjs.com/)
**Package Name:** `spacedatastandards.org`

### Setup

1. Ensure you're logged into npm:
   ```bash
   npm login
   ```

2. Verify `package.json` has correct version and metadata.

### Publish

```bash
npm publish
```

Or use the built-in deploy script:
```bash
npm run deploy
```

### Scoped Publishing (Optional)

To publish under an organization scope:
```bash
npm publish --access public
```

---

## Python (PyPI)

**Package Manager:** [PyPI](https://pypi.org/)
**Recommended Package Name:** `spacedatastandards`

### Setup

1. Create `lib/py/pyproject.toml`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "spacedatastandards"
version = "1.65.0"
description = "Space data standards framework based on CCSDS standards and Google FlatBuffers"
readme = "README.md"
license = {text = "Apache-2.0"}
authors = [
    {name = "Digital Arsenal", email = "sds@digitalarsenal.io"}
]
keywords = ["space", "flatbuffers", "ccsds", "satellite", "orbital-mechanics"]
classifiers = [
    "Development Status :: 4 - Beta",
    "Intended Audience :: Science/Research",
    "License :: OSI Approved :: Apache Software License",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.8",
    "Programming Language :: Python :: 3.9",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
    "Topic :: Scientific/Engineering :: Astronomy",
]
requires-python = ">=3.8"
dependencies = [
    "flatbuffers>=23.3.3",
]

[project.urls]
Homepage = "https://spacedatastandards.org"
Repository = "https://github.com/DigitalArsenal/spacedatastandards.org"
Documentation = "https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/"

[tool.setuptools.packages.find]
where = ["."]
```

2. Create `lib/py/README.md` with package documentation.

3. Install build tools:
   ```bash
   pip install build twine
   ```

### Publish

```bash
cd lib/py
python -m build
twine upload dist/*
```

For TestPyPI first:
```bash
twine upload --repository testpypi dist/*
```

---

## Go (Go Modules)

**Package Manager:** [Go Modules](https://go.dev/ref/mod) (via Git tags)
**Module Path:** `github.com/DigitalArsenal/spacedatastandards.org/lib/go`

### Setup

The `go.mod` is auto-generated by `scripts/generateGoModule.py`:

```go
module github.com/DigitalArsenal/spacedatastandards.org/lib/go

go 1.21

require github.com/google/flatbuffers/go v23.3.3+incompatible
```

### Publish

Go modules are published via Git tags. No separate registry upload needed.

```bash
# Tag the release
git tag lib/go/v1.65.0
git push origin lib/go/v1.65.0
```

Users install with:
```bash
go get github.com/DigitalArsenal/spacedatastandards.org/lib/go@v1.65.0
```

---

## Rust (crates.io)

**Package Manager:** [crates.io](https://crates.io/)
**Package Name:** `digitalarsenal-standards`

### Setup

1. The `Cargo.toml` is auto-generated by `scripts/generateCargoPackage.js`.

2. Login to crates.io:
   ```bash
   cargo login
   ```

3. Ensure the package structure is correct:
   ```bash
   node scripts/generateCargoPackage.js
   ```

### Publish

```bash
cd lib/rs
cargo publish
```

For dry-run:
```bash
cargo publish --dry-run
```

---

## Java (Maven Central)

**Package Manager:** [Maven Central](https://central.sonatype.com/)
**Recommended Coordinates:** `<MAVEN_GROUP_ID>:spacedatastandards`

Set the `MAVEN_GROUP_ID` repository variable to a Central-verified namespace
before enabling Maven Central as a release target. The publish workflow will
skip Maven and mark it as not configured when this variable is absent.

### Setup

1. Create `lib/java/pom.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>${MAVEN_GROUP_ID}</groupId>
    <artifactId>spacedatastandards</artifactId>
    <version>1.65.0</version>
    <packaging>jar</packaging>

    <name>Space Data Standards</name>
    <description>Space data standards framework based on CCSDS and FlatBuffers</description>
    <url>https://spacedatastandards.org</url>

    <licenses>
        <license>
            <name>Apache License, Version 2.0</name>
            <url>http://www.apache.org/licenses/LICENSE-2.0</url>
        </license>
    </licenses>

    <developers>
        <developer>
            <name>Digital Arsenal</name>
            <email>sds@digitalarsenal.io</email>
            <organization>Digital Arsenal</organization>
            <organizationUrl>https://digitalarsenal.io</organizationUrl>
        </developer>
    </developers>

    <scm>
        <connection>scm:git:git://github.com/DigitalArsenal/spacedatastandards.org.git</connection>
        <developerConnection>scm:git:ssh://github.com:DigitalArsenal/spacedatastandards.org.git</developerConnection>
        <url>https://github.com/DigitalArsenal/spacedatastandards.org</url>
    </scm>

    <dependencies>
        <dependency>
            <groupId>com.google.flatbuffers</groupId>
            <artifactId>flatbuffers-java</artifactId>
            <version>24.3.25</version>
        </dependency>
    </dependencies>

    <build>
        <sourceDirectory>.</sourceDirectory>
    </build>
</project>
```

2. Register for a Sonatype OSSRH account at https://central.sonatype.com/

3. Configure GPG signing and credentials in `~/.m2/settings.xml`

### Publish

```bash
cd lib/java
mvn clean deploy -P release
```

---

## Kotlin (Maven Central)

**Package Manager:** [Maven Central](https://central.sonatype.com/)
**Recommended Coordinates:** `<MAVEN_GROUP_ID>:spacedatastandards-kt`

### Setup

1. Create `lib/kt/build.gradle.kts`:

```kotlin
plugins {
    kotlin("jvm") version "1.9.0"
    `maven-publish`
    signing
}

group = System.getenv("MAVEN_GROUP_ID")
version = "1.65.0"

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.google.flatbuffers:flatbuffers-java:24.3.25")
}

publishing {
    publications {
        create<MavenPublication>("mavenKotlin") {
            artifactId = "spacedatastandards-kt"
            from(components["kotlin"])

            pom {
                name.set("Space Data Standards (Kotlin)")
                description.set("Space data standards framework for Kotlin")
                url.set("https://spacedatastandards.org")
                licenses {
                    license {
                        name.set("Apache-2.0")
                        url.set("http://www.apache.org/licenses/LICENSE-2.0")
                    }
                }
            }
        }
    }
}
```

### Publish

```bash
cd lib/kt
./gradlew publish
```

---

## C# (.NET/NuGet)

**Package Manager:** [NuGet](https://www.nuget.org/)
**Recommended Package Name:** `SpaceDataStandards`

### Setup

1. Create `lib/cs/SpaceDataStandards.csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
    <PackageId>SpaceDataStandards</PackageId>
    <Version>1.65.0</Version>
    <Authors>Digital Arsenal</Authors>
    <Company>Digital Arsenal</Company>
    <Description>Space data standards framework based on CCSDS and FlatBuffers</Description>
    <PackageLicenseExpression>Apache-2.0</PackageLicenseExpression>
    <PackageProjectUrl>https://spacedatastandards.org</PackageProjectUrl>
    <RepositoryUrl>https://github.com/DigitalArsenal/spacedatastandards.org</RepositoryUrl>
    <PackageTags>space;flatbuffers;ccsds;satellite;orbit</PackageTags>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Google.FlatBuffers" Version="24.3.25" />
  </ItemGroup>
</Project>
```

2. Get a NuGet API key from https://www.nuget.org/account/apikeys

### Publish

```bash
cd lib/cs
dotnet pack -c Release
dotnet nuget push bin/Release/*.nupkg --api-key YOUR_API_KEY --source https://api.nuget.org/v3/index.json
```

---

## Dart (pub.dev)

**Package Manager:** [pub.dev](https://pub.dev/)
**Recommended Package Name:** `spacedatastandards`

### Setup

1. Create `lib/dart/pubspec.yaml`:

```yaml
name: spacedatastandards
version: 1.65.0
description: Space data standards framework based on CCSDS and FlatBuffers
repository: https://github.com/DigitalArsenal/spacedatastandards.org
homepage: https://spacedatastandards.org

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flat_buffers: ^23.5.26
```

2. Create `lib/dart/LICENSE` (Apache 2.0)

3. Authenticate with pub.dev:
   ```bash
   dart pub login
   ```

### Publish

```bash
cd lib/dart
dart pub publish
```

For dry-run:
```bash
dart pub publish --dry-run
```

---

## Swift (Swift Package Manager)

**Package Manager:** [Swift Package Manager](https://swift.org/package-manager/)
**Distribution:** Git tags (no central registry)

### Setup

1. Create `lib/sw/Package.swift`:

```swift
// swift-tools-version:5.7
import PackageDescription

let package = Package(
    name: "SpaceDataStandards",
    platforms: [
        .macOS(.v10_15),
        .iOS(.v13),
        .tvOS(.v13),
        .watchOS(.v6)
    ],
    products: [
        .library(
            name: "SpaceDataStandards",
            targets: ["SpaceDataStandards"]),
    ],
    dependencies: [
        .package(url: "https://github.com/nicklockwood/FlatBuffers.git", from: "2.0.0"),
    ],
    targets: [
        .target(
            name: "SpaceDataStandards",
            dependencies: ["FlatBuffers"],
            path: "Sources"),
    ]
)
```

2. Organize source files under `lib/sw/Sources/`

### Publish

Swift packages are distributed via Git. Tag and push:

```bash
git tag swift/1.65.0
git push origin swift/1.65.0
```

Users add the dependency:
```swift
.package(url: "https://github.com/DigitalArsenal/spacedatastandards.org.git", from: "1.65.0")
```

---

## PHP (Packagist)

**Package Manager:** [Packagist](https://packagist.org/)
**Recommended Package Name:** `digitalarsenal/spacedatastandards`

### Setup

1. Create `lib/php/composer.json`:

```json
{
    "name": "digitalarsenal/spacedatastandards",
    "description": "Space data standards framework based on CCSDS and FlatBuffers",
    "type": "library",
    "license": "Apache-2.0",
    "homepage": "https://spacedatastandards.org",
    "authors": [
        {
            "name": "Digital Arsenal",
            "email": "sds@digitalarsenal.io"
        }
    ],
    "require": {
        "php": ">=8.0",
        "google/flatbuffers": "^24.3"
    },
    "autoload": {
        "psr-4": {
            "SpaceDataStandards\\": ""
        }
    }
}
```

2. Register on https://packagist.org/ and link your GitHub repository

### Publish

Packagist auto-updates from GitHub. Ensure:
1. Repository is public
2. Packagist webhook is configured
3. Tags follow semantic versioning

```bash
git tag v1.65.0
git push origin v1.65.0
```

---

## C++ (vcpkg/Conan)

**Package Managers:** [vcpkg](https://vcpkg.io/) or [Conan](https://conan.io/)

### vcpkg

1. Create a port in your vcpkg fork under `ports/spacedatastandards/`:

`portfile.cmake`:
```cmake
vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO DigitalArsenal/spacedatastandards.org
    REF v1.65.0
    SHA512 <sha512-hash>
    HEAD_REF main
)

vcpkg_cmake_configure(SOURCE_PATH "${SOURCE_PATH}/lib/cpp")
vcpkg_cmake_install()
vcpkg_copy_pdbs()
```

`vcpkg.json`:
```json
{
    "name": "spacedatastandards",
    "version": "1.65.0",
    "description": "Space data standards framework",
    "homepage": "https://spacedatastandards.org",
    "dependencies": ["flatbuffers"]
}
```

2. Submit a PR to https://github.com/microsoft/vcpkg

### Conan

1. Create `lib/cpp/conanfile.py`:

```python
from conan import ConanFile
from conan.tools.cmake import CMake

class SpaceDataStandardsConan(ConanFile):
    name = "spacedatastandards"
    version = "1.65.0"
    license = "Apache-2.0"
    url = "https://github.com/DigitalArsenal/spacedatastandards.org"
    description = "Space data standards framework"
    settings = "os", "compiler", "build_type", "arch"
    requires = "flatbuffers/24.3.25"

    def build(self):
        cmake = CMake(self)
        cmake.configure()
        cmake.build()
```

2. Upload to Conan Center or your own remote:
```bash
conan create . spacedatastandards/1.65.0@
conan upload spacedatastandards/1.65.0@ -r your-remote
```

---

## Lobster

**Distribution:** Direct download (no package manager)

Lobster is a niche language without a central package registry. Distribute via:

1. GitHub releases with `dist/*/SCHEMA.lob.tar.gz` archives
2. Direct download links from the website
3. Git submodules

---

## CI/CD Automation

The repository includes a comprehensive GitHub Actions workflow at [`.github/workflows/publish.yml`](./.github/workflows/publish.yml) that handles automated publishing to all package managers.

### Workflow Triggers

The workflow runs on:
- **Release published**: Automatically publishes when you create a GitHub Release
- **Manual dispatch**: Run manually with custom version and package selection

### Manual Trigger

You can trigger publishing manually from the Actions tab:

1. Go to **Actions** → **Publish Packages**
2. Click **Run workflow**
3. Enter the version number
4. Optionally specify which packages to publish (comma-separated: `npm,pypi,cargo,nuget,dart,maven,go,php`) or leave as `all`

### Published Packages

| Registry | Package Name | Install Command |
|----------|--------------|-----------------|
| npmjs.org | `spacedatastandards.org` | `npm install spacedatastandards.org` |
| GitHub Packages | `@digitalarsenal/spacedatastandards` | `npm install @digitalarsenal/spacedatastandards` |
| PyPI | `spacedatastandards` | `pip install spacedatastandards` |
| crates.io | `digitalarsenal-standards` | `cargo add digitalarsenal-standards` |
| NuGet | `SpaceDataStandards` | `dotnet add package SpaceDataStandards` |
| pub.dev | `spacedatastandards` | `dart pub add spacedatastandards` |
| Maven Central | `<MAVEN_GROUP_ID>:spacedatastandards` | Configure a Central-verified namespace first |
| Go Modules | `github.com/.../lib/go` | `go get github.com/DigitalArsenal/spacedatastandards.org/lib/go` |
| Packagist | `digitalarsenal/spacedatastandards` | `composer require digitalarsenal/spacedatastandards` |

### Required Secrets

Configure these in your GitHub repository settings:

| Secret | Description |
|--------|-------------|
| `NPM_TOKEN` | npm access token |
| `PYPI_TOKEN` | PyPI API token |
| `CARGO_TOKEN` | crates.io API token |
| `NUGET_TOKEN` | NuGet API key |
| `PUB_TOKEN` | pub.dev credentials |
| `MAVEN_USERNAME` | Sonatype OSSRH username |
| `MAVEN_PASSWORD` | Sonatype OSSRH password |
| `GPG_PRIVATE_KEY` | GPG key for Maven signing |
| `GPG_PASSPHRASE` | GPG key passphrase |

---

## Version Management

Keep versions synchronized across all packages. The build script updates `package.json` automatically. For other languages, consider:

1. **Single source of truth**: Read version from `package.json`
2. **Build-time generation**: Update all manifest files during build
3. **Git tags**: Use semantic versioning tags for all releases

Example version sync script addition to `scripts/generateVersion.py`:
```python
# Also update versions in:
# - lib/py/pyproject.toml
# - lib/rs/Cargo.toml
# - lib/java/pom.xml
# - lib/cs/*.csproj
# - lib/dart/pubspec.yaml
# - lib/php/composer.json
```

---

## Quick Reference

| Language | Package Manager | Publish Command |
|----------|-----------------|-----------------|
| JavaScript/TypeScript | npm | `npm publish` |
| Python | PyPI | `twine upload dist/*` |
| Go | Go Modules | `git tag lib/go/vX.Y.Z && git push --tags` |
| Rust | crates.io | `cargo publish` |
| Java | Maven Central | `mvn deploy` |
| Kotlin | Maven Central | `./gradlew publish` |
| C# | NuGet | `dotnet nuget push` |
| Dart | pub.dev | `dart pub publish` |
| Swift | SPM (Git) | `git tag swift/X.Y.Z && git push --tags` |
| PHP | Packagist | Auto-syncs from GitHub tags |
| C++ | vcpkg/Conan | Submit PR / `conan upload` |
| Lobster | N/A | GitHub releases |
