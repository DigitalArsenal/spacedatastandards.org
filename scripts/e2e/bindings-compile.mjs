#!/usr/bin/env node
// Every generated language binding compiles against its pinned runtime and writes a correct buffer.
//
//   node scripts/e2e/bindings-compile.mjs [language ...]      (default: all)
//
// Swift reads with getRoot: the fork runtime's getCheckedRoot crashes on a vector of doubles (see docs/runtimes.md).
// Languages: java kotlin csharp php python go cpp swift dart lobster.
// Each one builds an $OMM and a $PCF with its generated binding, checks the file
// identifier where the binding has one, and reads a string back. Java, Kotlin,
// C#, PHP, Python and Go compile every standard (the umbrella $REC includes all
// 292). Swift typechecks every standard; Dart analyzes every standard; C++
// includes the umbrella header; Lobster compiles OMM, PCF, PIV and OEM with the
// standards they include (KMF and REC use an encryption walk the Lobster
// compiler does not finish, see docs/name-collisions.md).
//
// Runtimes (docs/runtimes.md): the DigitalArsenal/flatbuffers fork at tag
// wasm-v26.1.38 (FlatBuffers 25.12.19 plus the fork's changes) for C++, Java,
// Kotlin, C#, PHP, Swift and Lobster; flatbuffers 25.12.19 from PyPI and the Go
// module proxy; flat_buffers from pub.dev. The cache is ~/.cache/sds-bindings-compile.
// A missing toolchain fails the run; --allow-missing skips it with its name.
import { execFileSync, spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const LIB = path.join(root, "lib");
const CACHE = process.env.SDS_BINDINGS_CACHE || path.join(os.homedir(), ".cache", "sds-bindings-compile");
const WORK = fs.mkdtempSync(path.join(os.tmpdir(), "sds-bindings-"));
const args = process.argv.slice(2);
const allowMissing = args.includes("--allow-missing");
const ALL = ["java", "kotlin", "csharp", "php", "python", "go", "cpp", "swift", "dart", "lobster"];
const wanted = args.filter((a) => !a.startsWith("--"));
const languages = wanted.length ? wanted : ALL;

const FORK_TAG = "wasm-v26.1.38";
const FORK_COMMIT = "0e85c78b039f694032d1e8db837f101779b332fd";
const LOBSTER_TAG = "v2026.8";
const LOBSTER_COMMIT = "acc66d71978ae5525be1356aa622fbaa9a57e848";
const UA_ENV = { ...process.env };

class Missing extends Error {}

function run(cmd, cmdArgs, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, cmdArgs, { cwd: options.cwd, env: { ...UA_ENV, ...(options.env ?? {}) }, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("error", (e) => reject(e.code === "ENOENT" ? new Missing(`${cmd} is not installed`) : e));
    const timer = setTimeout(() => { child.kill("SIGKILL"); reject(new Error(`${cmd} timed out after ${options.timeout ?? 600}s\n${out.slice(-1500)}`)); }, (options.timeout ?? 600) * 1000);
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0 || options.allowFail) resolve({ code, out });
      else reject(new Error(`${cmd} ${cmdArgs.slice(0, 4).join(" ")} exited ${code}\n${out.slice(-2500)}`));
    });
  });
}
const have = async (cmd, versionArg = "--version") => { try { await run(cmd, [versionArg], { timeout: 30, allowFail: true }); return true; } catch { return false; } };
const need = async (cmd, versionArg) => { if (!(await have(cmd, versionArg))) throw new Missing(`${cmd} is not installed`); };
const work = (name) => { const dir = path.join(WORK, name); fs.mkdirSync(dir, { recursive: true }); return dir; };
const includes = (name, seen = new Set()) => {
  const source = fs.readFileSync(path.join(root, "schema", name, "main.fbs"), "utf8");
  for (const m of source.matchAll(/include\s+"\.\.\/([^/"]+)\/main\.fbs";/g)) if (!seen.has(m[1])) { seen.add(m[1]); includes(m[1], seen); }
  return seen;
};

let forkPromise;
function fork() {
  forkPromise ??= fetchFork();
  return forkPromise;
}
async function fetchFork() {
  const dir = path.join(CACHE, `flatbuffers-${FORK_TAG}`);
  if (!fs.existsSync(path.join(dir, ".git"))) {
    fs.mkdirSync(CACHE, { recursive: true });
    await run("git", ["-c", "advice.detachedHead=false", "clone", "--quiet", "--depth", "1", "--branch", FORK_TAG, "--filter=blob:none", "--sparse", "https://github.com/DigitalArsenal/flatbuffers.git", dir]);
    await run("git", ["-C", dir, "sparse-checkout", "set", "include", "java/src/main/java", "net/FlatBuffers", "php", "swift/Sources", "lobster"]);
  }
  const head = execFileSync("git", ["-C", dir, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  if (head !== FORK_COMMIT) throw new Error(`flatbuffers ${FORK_TAG} is ${head}, expected ${FORK_COMMIT}`);
  return dir;
}
const check = (condition, message) => { if (!condition) throw new Error(message); };

// ----------------------------------------------------------------- languages
const steps = {
  async java() {
    await need("javac", "-version");
    const fb = await fork();
    const dir = work("java");
    fs.mkdirSync(`${dir}/classes`);
    fs.writeFileSync(`${dir}/Main.java`, `import com.google.flatbuffers.FlatBufferBuilder;
import java.nio.ByteBuffer;
public class Main {
  public static void main(String[] a) {
    FlatBufferBuilder b = new FlatBufferBuilder(256);
    int n = b.createString("SDS TEST");
    OMM.startOMM(b); OMM.addObjectName(b, n); OMM.finishOMMBuffer(b, OMM.endOMM(b));
    ByteBuffer bb = b.dataBuffer();
    if (!OMM.OMMBufferHasIdentifier(bb)) throw new RuntimeException("OMM identifier");
    if (!"SDS TEST".equals(OMM.getRootAsOMM(bb).OBJECT_NAME())) throw new RuntimeException("OMM name");
    FlatBufferBuilder c = new FlatBufferBuilder(256);
    int id = c.createString("cfg-1");
    PCF.startPCF(c); PCF.addConfigurationId(c, id); PCF.finishPCFBuffer(c, PCF.endPCF(c));
    ByteBuffer cb = c.dataBuffer();
    if (!PCF.PCFBufferHasIdentifier(cb)) throw new RuntimeException("PCF identifier");
    if (!"cfg-1".equals(PCF.getRootAsPCF(cb).CONFIGURATION_ID())) throw new RuntimeException("PCF id");
    System.out.println("ok");
  }
}
`);
    const sources = [...walk(`${fb}/java/src/main/java`, ".java"), ...fs.readdirSync(`${LIB}/java/REC`).filter((f) => f.endsWith(".java")).map((f) => `${LIB}/java/REC/${f}`), `${dir}/Main.java`];
    await run("javac", ["-nowarn", "-Xmaxerrs", "20", "-d", `${dir}/classes`, ...sources], { timeout: 300 });
    const { out } = await run("java", ["-cp", `${dir}/classes`, "Main"]);
    check(out.trim().endsWith("ok"), `java: ${out}`);
    return "compiled 2082 files (REC), OMM and PCF round trip with identifiers";
  },

  async kotlin() {
    await need("kotlinc", "-version");
    await need("javac", "-version");
    const fb = await fork();
    const dir = work("kotlin");
    fs.mkdirSync(`${dir}/rt`);
    await run("javac", ["-nowarn", "-d", `${dir}/rt`, ...walk(`${fb}/java/src/main/java`, ".java")], { timeout: 300 });
    fs.writeFileSync(`${dir}/Main.kt`, `import com.google.flatbuffers.FlatBufferBuilder
fun main() {
  val b = FlatBufferBuilder(256)
  val n = b.createString("SDS TEST")
  OMM.startOMM(b); OMM.addOBJECTNAME(b, n); OMM.finishOMMBuffer(b, OMM.endOMM(b))
  val bb = b.dataBuffer()
  check(OMM.OMMBufferHasIdentifier(bb)) { "OMM identifier" }
  check(OMM.getRootAsOMM(bb).objectName == "SDS TEST") { "OMM name" }
  val c = FlatBufferBuilder(256)
  val id = c.createString("cfg-1")
  PCF.startPCF(c); PCF.addCONFIGURATIONID(c, id); PCF.finishPCFBuffer(c, PCF.endPCF(c))
  val cb = c.dataBuffer()
  check(PCF.PCFBufferHasIdentifier(cb)) { "PCF identifier" }
  check(PCF.getRootAsPCF(cb).configurationId == "cfg-1") { "PCF id" }
  println("ok")
}
`);
    await run("kotlinc", ["-nowarn", "-J-Xmx3g", "-cp", `${dir}/rt`, "-include-runtime", "-d", `${dir}/out.jar`, `${LIB}/kt/REC`, `${dir}/Main.kt`], { timeout: 900 });
    const { out } = await run("java", ["-cp", `${dir}/out.jar:${dir}/rt`, "MainKt"]);
    check(out.trim().endsWith("ok"), `kotlin: ${out}`);
    return "compiled 2082 files (REC), OMM and PCF round trip with identifiers";
  },

  async csharp() {
    await need("dotnet", "--version");
    const fb = await fork();
    const dir = work("csharp");
    fs.writeFileSync(`${dir}/sds.csproj`, `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework><OutputType>Exe</OutputType><EnableDefaultCompileItems>false</EnableDefaultCompileItems>
    <Nullable>disable</Nullable><AllowUnsafeBlocks>true</AllowUnsafeBlocks><NoWarn>$(NoWarn);CS0108;CS0114;CS8632;CS0219;CS0168;CS1591</NoWarn>
  </PropertyGroup>
  <ItemGroup>
    <Compile Include="${fb}/net/FlatBuffers/*.cs" /><Compile Include="${LIB}/cs/REC/*.cs" /><Compile Include="Program.cs" />
  </ItemGroup>
</Project>
`);
    fs.writeFileSync(`${dir}/Program.cs`, `using Google.FlatBuffers;
using System;
var b = new FlatBufferBuilder(256);
var n = b.CreateString("SDS TEST");
OMM.StartOMM(b); OMM.AddOBJECT_NAME(b, n); OMM.FinishOMMBuffer(b, OMM.EndOMM(b));
if (!OMM.OMMBufferHasIdentifier(b.DataBuffer)) throw new Exception("OMM identifier");
if (OMM.GetRootAsOMM(b.DataBuffer).OBJECT_NAME != "SDS TEST") throw new Exception("OMM name");
var c = new FlatBufferBuilder(256);
var id = c.CreateString("cfg-1");
PCF.StartPCF(c); PCF.AddCONFIGURATION_ID(c, id); PCF.FinishPCFBuffer(c, PCF.EndPCF(c));
if (!PCF.PCFBufferHasIdentifier(c.DataBuffer)) throw new Exception("PCF identifier");
if (PCF.GetRootAsPCF(c.DataBuffer).CONFIGURATION_ID != "cfg-1") throw new Exception("PCF id");
// the object API (UnPack) reads a union's type through the same accessor
var rfm = new RFM();
Console.WriteLine("ok");
`);
    const { out } = await run("dotnet", ["run", "-c", "Release", "--nologo", "-v", "q"], { cwd: dir, timeout: 600, env: { DOTNET_NOLOGO: "1", DOTNET_CLI_TELEMETRY_OPTOUT: "1" } });
    check(out.trim().endsWith("ok"), `csharp: ${out}`);
    return "compiled 2082 files (REC), OMM and PCF round trip with identifiers";
  },

  async php() {
    await need("php", "--version");
    const fb = await fork();
    const dir = work("php");
    fs.writeFileSync(`${dir}/main.php`, `<?php
foreach (glob('${fb}/php/*.php') as $p) require_once $p;
$files = glob('${LIB}/php/REC/*.php');
foreach ($files as $p) require_once $p;
use Google\\FlatBuffers\\FlatBufferBuilder;
use Google\\FlatBuffers\\ByteBuffer;
$b = new FlatBufferBuilder(256);
$n = $b->createString('SDS TEST');
OMM::startOMM($b); OMM::addOBJECT_NAME($b, $n); OMM::finishOMMBuffer($b, OMM::endOMM($b));
$bytes = $b->sizedByteArray();
if (substr($bytes, 4, 4) !== '$OMM') throw new Exception('OMM identifier bytes ' . bin2hex(substr($bytes, 4, 4)));
$bb = ByteBuffer::wrap($bytes);
if (!OMM::OMMBufferHasIdentifier($bb)) throw new Exception('OMM identifier');
if (OMM::getRootAsOMM($bb)->getOBJECT_NAME() !== 'SDS TEST') throw new Exception('OMM name');
$c = new FlatBufferBuilder(256);
$id = $c->createString('cfg-1');
PCF::startPCF($c); PCF::addCONFIGURATION_ID($c, $id); PCF::finishPCFBuffer($c, PCF::endPCF($c));
$cb = $c->sizedByteArray();
if (substr($cb, 4, 4) !== '$PCF') throw new Exception('PCF identifier bytes');
if (PCF::getRootAsPCF(ByteBuffer::wrap($cb))->getCONFIGURATION_ID() !== 'cfg-1') throw new Exception('PCF id');
echo count($files) . " ok\\n";
`);
    const { out } = await run("php", ["-d", "error_reporting=E_ALL", "-d", "display_errors=1", `${dir}/main.php`]);
    check(/2082 ok/.test(out) && !/Warning|Notice|Deprecated/.test(out), `php: ${out.slice(0, 500)}`);
    return "loaded 2082 classes (REC), OMM and PCF round trip with identifiers";
  },

  async python() {
    await need("python3", "--version");
    const venv = path.join(CACHE, "venv-flatbuffers-25.12.19");
    if (!fs.existsSync(`${venv}/bin/python`)) {
      fs.mkdirSync(CACHE, { recursive: true });
      await run("python3", ["-m", "venv", venv]);
      await run(`${venv}/bin/pip`, ["install", "-q", "flatbuffers==25.12.19"]);
    }
    const dir = work("python");
    fs.writeFileSync(`${dir}/main.py`, `import sys, os, importlib, flatbuffers
sys.path.insert(0, '${LIB}/py/REC')
mods = [f[:-3] for f in sorted(os.listdir('${LIB}/py/REC')) if f.endswith('.py')]
for m in mods: importlib.import_module(m)
import OMM, PCF
b = flatbuffers.Builder(256)
n = b.CreateString('SDS TEST')
OMM.OMMStart(b); OMM.OMMAddOBJECT_NAME(b, n); b.Finish(OMM.OMMEnd(b), b'$OMM')
buf = bytes(b.Output())
assert buf[4:8] == b'$OMM', buf[4:8]
assert OMM.OMM.OMMBufferHasIdentifier(buf, 0)
assert OMM.OMM.GetRootAs(buf, 0).OBJECT_NAME() == b'SDS TEST'
c = flatbuffers.Builder(256)
i = c.CreateString('cfg-1')
PCF.PCFStart(c); PCF.PCFAddCONFIGURATION_ID(c, i); c.Finish(PCF.PCFEnd(c), b'$PCF')
cb = bytes(c.Output())
assert PCF.PCF.PCFBufferHasIdentifier(cb, 0)
assert PCF.PCF.GetRootAs(cb, 0).CONFIGURATION_ID() == b'cfg-1'
print(len(mods), 'ok')
`);
    const { out } = await run(`${venv}/bin/python`, [`${dir}/main.py`]);
    check(/2082 ok/.test(out), `python: ${out}`);
    return "imported 2082 modules (REC), OMM and PCF round trip with identifiers";
  },

  async go() {
    await need("go", "version");
    const dir = work("go");
    fs.writeFileSync(`${dir}/go.mod`, `module sdscheck

go 1.21

require github.com/DigitalArsenal/spacedatastandards.org/lib/go v0.0.0
require github.com/google/flatbuffers v25.12.19+incompatible

replace github.com/DigitalArsenal/spacedatastandards.org/lib/go => ${LIB}/go
`);
    fs.writeFileSync(`${dir}/main.go`, `package main

import (
	"fmt"

	flatbuffers "github.com/google/flatbuffers/go"

	"github.com/DigitalArsenal/spacedatastandards.org/lib/go/OMM"
	"github.com/DigitalArsenal/spacedatastandards.org/lib/go/PCF"
)

func main() {
	b := flatbuffers.NewBuilder(256)
	n := b.CreateString("SDS TEST")
	OMM.OMMStart(b)
	OMM.OMMAddOBJECT_NAME(b, n)
	OMM.FinishOMMBuffer(b, OMM.OMMEnd(b))
	buf := b.FinishedBytes()
	if !OMM.OMMBufferHasIdentifier(buf) || string(buf[4:8]) != "$OMM" {
		panic("OMM identifier")
	}
	if string(OMM.GetRootAsOMM(buf, 0).OBJECT_NAME()) != "SDS TEST" {
		panic("OMM name")
	}
	c := flatbuffers.NewBuilder(256)
	id := c.CreateString("cfg-1")
	PCF.PCFStart(c)
	PCF.PCFAddCONFIGURATION_ID(c, id)
	PCF.FinishPCFBuffer(c, PCF.PCFEnd(c))
	cb := c.FinishedBytes()
	if !PCF.PCFBufferHasIdentifier(cb) || string(PCF.GetRootAsPCF(cb, 0).CONFIGURATION_ID()) != "cfg-1" {
		panic("PCF")
	}
	fmt.Println("ok")
}
`);
    const env = { GOFLAGS: "-mod=mod", GONOSUMDB: "*", GONOSUMCHECK: "1", GOFLAGS_EXTRA: "" };
    // go build writes go.sum next to go.mod, and the module is committed without one: build a copy.
    fs.cpSync(`${LIB}/go`, `${dir}/module`, { recursive: true });
    await run("go", ["build", "./..."], { cwd: `${dir}/module`, env, timeout: 600 });
    fs.writeFileSync(`${dir}/go.mod`, fs.readFileSync(`${dir}/go.mod`, "utf8").replace(`${LIB}/go`, `${dir}/module`));
    const { out } = await run("go", ["run", "."], { cwd: dir, env, timeout: 600 });
    check(out.trim().endsWith("ok"), `go: ${out}`);
    return "go build ./... of the module (292 packages), OMM and PCF round trip with identifiers";
  },

  async cpp() {
    await need("c++", "--version");
    const fb = await fork();
    const dir = work("cpp");
    fs.writeFileSync(`${dir}/main.cpp`, `// The umbrella header includes every standard; the macros a libc defines (see docs/name-collisions.md) are pushed aside.
#include <cstdio>
#include <cstring>
#include <flatbuffers/flatbuffers.h>
#pragma push_macro("DOMAIN")
#pragma push_macro("TIME_UTC")
#pragma push_macro("BYTE_ORDER")
#undef DOMAIN
#undef TIME_UTC
#undef BYTE_ORDER
#include "REC/main_generated.h"
#pragma pop_macro("BYTE_ORDER")
#pragma pop_macro("TIME_UTC")
#pragma pop_macro("DOMAIN")
int main() {
  flatbuffers::FlatBufferBuilder b(256);
  auto n = b.CreateString("SDS TEST");
  OMMBuilder ob(b);
  ob.add_OBJECT_NAME(n);
  FinishOMMBuffer(b, ob.Finish());
  if (!OMMBufferHasIdentifier(b.GetBufferPointer()) || std::memcmp(b.GetBufferPointer() + 4, "$OMM", 4)) return 1;
  if (std::strcmp(GetOMM(b.GetBufferPointer())->OBJECT_NAME()->c_str(), "SDS TEST")) return 2;
  flatbuffers::FlatBufferBuilder c(256);
  auto id = c.CreateString("cfg-1");
  PCFBuilder pb(c);
  pb.add_CONFIGURATION_ID(id);
  FinishPCFBuffer(c, pb.Finish());
  if (!PCFBufferHasIdentifier(c.GetBufferPointer()) || std::strcmp(GetPCF(c.GetBufferPointer())->CONFIGURATION_ID()->c_str(), "cfg-1")) return 3;
  std::puts("ok");
}
`);
    await run("c++", ["-std=c++17", "-I", `${fb}/include`, "-I", `${LIB}/cpp`, `${dir}/main.cpp`, "-o", `${dir}/main`], { timeout: 600 });
    const { out } = await run(`${dir}/main`, []);
    check(out.trim() === "ok", `cpp: ${out}`);
    return "compiled the umbrella header (292 standards), OMM and PCF round trip with identifiers";
  },

  async swift() {
    await need("swiftc", "--version");
    const fb = await fork();
    const dir = work("swift");
    fs.mkdirSync(`${dir}/modules`);
    fs.mkdirSync(`${dir}/src`);
    for (const module of ["Common", "FlatBuffers"]) {
      await run("swiftc", ["-O", "-parse-as-library", "-emit-library", "-static", "-suppress-warnings", "-module-name", module, "-I", `${dir}/modules`, "-emit-module-path", `${dir}/modules/${module}.swiftmodule`, "-o", `${dir}/modules/lib${module}.a`, ...walk(`${fb}/swift/Sources/${module}`, ".swift").filter((f) => !f.includes(".docc"))], { timeout: 600 });
    }
    for (const std of fs.readdirSync(`${LIB}/sw`)) fs.copyFileSync(`${LIB}/sw/${std}/main_generated.swift`, `${dir}/src/${std}.swift`);
    await run("swiftc", ["-typecheck", "-parse-as-library", "-suppress-warnings", "-I", `${dir}/modules`, "-module-name", "SDS", ...fs.readdirSync(`${dir}/src`).map((f) => `${dir}/src/${f}`)], { timeout: 900 });
    const closure = new Set(["OMM", "PCF", ...includes("OMM"), ...includes("PCF")]);
    fs.writeFileSync(`${dir}/main.swift`, `import FlatBuffers
var fbb = FlatBufferBuilder(initialSize: 256)
let n = fbb.create(string: "SDS TEST")
let s = OMM.startOMM(&fbb)
OMM.add(OBJECT_NAME: n, &fbb)
OMM.finish(&fbb, end: OMM.endOMM(&fbb, start: s))
let bytes = fbb.sizedByteArray
guard Array(bytes[4..<8]) == Array("$OMM".utf8) else { fatalError("OMM identifier") }
var buf = ByteBuffer(bytes: bytes)
let root: OMM = getRoot(byteBuffer: &buf)
guard root.OBJECT_NAME == "SDS TEST" else { fatalError("OMM name") }
var cfb = FlatBufferBuilder(initialSize: 256)
let id = cfb.create(string: "cfg-1")
let ps = PCF.startPCF(&cfb)
PCF.add(CONFIGURATION_ID: id, &cfb)
PCF.finish(&cfb, end: PCF.endPCF(&cfb, start: ps))
let cbytes = cfb.sizedByteArray
guard Array(cbytes[4..<8]) == Array("$PCF".utf8) else { fatalError("PCF identifier") }
var cbuf = ByteBuffer(bytes: cbytes)
let proot: PCF = getRoot(byteBuffer: &cbuf)
guard proot.CONFIGURATION_ID == "cfg-1" else { fatalError("PCF id") }
print("ok")
`);
    await run("swiftc", ["-O", "-suppress-warnings", "-I", `${dir}/modules`, "-L", `${dir}/modules`, "-lFlatBuffers", "-lCommon", `${dir}/main.swift`, ...[...closure].map((s) => `${dir}/src/${s}.swift`), "-o", `${dir}/main`], { timeout: 900 });
    const { out } = await run(`${dir}/main`, []);
    check(out.trim() === "ok", `swift: ${out}`);
    return "typechecked 292 standards, OMM and PCF round trip with identifiers";
  },

  async dart() {
    await need("dart", "--version");
    const dir = work("dart");
    fs.mkdirSync(`${dir}/bin`);
    fs.cpSync(`${LIB}/dart`, `${dir}/lib`, { recursive: true });
    fs.writeFileSync(`${dir}/pubspec.yaml`, `name: sds_check\nenvironment:\n  sdk: ">=3.0.0 <4.0.0"\ndependencies:\n  flat_buffers: 23.5.26\n`);
    fs.writeFileSync(`${dir}/bin/main.dart`, `import 'package:flat_buffers/flat_buffers.dart' as fb;
import 'package:sds_check/OMM/main_generated.dart';
import 'package:sds_check/PCF/main_generated.dart';
void main() {
  final b = fb.Builder();
  final n = b.writeString('SDS TEST');
  final ob = OMMBuilder(b)..begin()..addObjectNameOffset(n);
  b.finish(ob.finish());
  if (OMM(b.buffer).OBJECT_NAME != 'SDS TEST') throw 'OMM name';
  final c = fb.Builder();
  final id = c.writeString('cfg-1');
  final pb = PCFBuilder(c)..begin()..addConfigurationIdOffset(id);
  c.finish(pb.finish());
  if (PCF(c.buffer).CONFIGURATION_ID != 'cfg-1') throw 'PCF id';
  print('ok');
}
`);
    await run("dart", ["pub", "get"], { cwd: dir, timeout: 300 });
    const analysis = await run("dart", ["analyze", "--no-fatal-warnings", "lib", "bin"], { cwd: dir, timeout: 600, allowFail: true });
    const errors = analysis.out.split("\n").filter((l) => /^\s+error - /.test(l));
    check(/No issues found|issues? found/.test(analysis.out), `dart analyze did not run:\n${analysis.out.slice(0, 300)}`);
    check(errors.length === 0, `dart analyze: ${errors.length} errors\n${errors.slice(0, 8).join("\n")}`);
    const { out } = await run("dart", ["run", "bin/main.dart"], { cwd: dir, timeout: 300 });
    check(out.trim().endsWith("ok"), `dart: ${out}`);
    return "analyzed 292 standards with no errors, OMM and PCF round trip (the Dart generator writes no file identifier)";
  },

  async lobster() {
    await need("cmake", "--version");
    const fb = await fork();
    const src = path.join(CACHE, `lobster-${LOBSTER_TAG}`);
    if (!fs.existsSync(path.join(src, ".git"))) {
      await run("git", ["-c", "advice.detachedHead=false", "clone", "--quiet", "--depth", "1", "--branch", LOBSTER_TAG, "https://github.com/aardappel/lobster", src]);
    }
    const head = execFileSync("git", ["-C", src, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    if (head !== LOBSTER_COMMIT) throw new Error(`lobster ${LOBSTER_TAG} is ${head}, expected ${LOBSTER_COMMIT}`);
    const build = path.join(CACHE, `lobster-${LOBSTER_TAG}-build`);
    const bin = path.join(build, "lobster");
    if (!fs.existsSync(bin)) {
      // Lobster's console build with its JIT, the stock main.cpp (the engine and SDKs are skipped).
      fs.mkdirSync(build, { recursive: true });
      const L = `${src}/dev`;
      fs.writeFileSync(`${build}/CMakeLists.txt`, `cmake_minimum_required(VERSION 3.16)
project(lobster C CXX)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_BUILD_TYPE Release)
set(L "${L}")
file(GLOB_RECURSE FB_SRCS "\${L}/external/flatbuffers/*.cpp")
set(SRCS \${L}/src/builtindoc.cpp \${L}/src/builtins.cpp \${L}/src/compiler.cpp \${L}/src/file.cpp \${L}/src/lobsterreader.cpp
  \${L}/src/pakfile.cpp \${L}/src/platform.cpp \${L}/src/simplex.cpp \${L}/src/stdafx.cpp \${L}/src/vm.cpp \${L}/src/vmdata.cpp
  \${L}/src/tccbind.cpp \${L}/src/mirbind.cpp \${L}/src/main.cpp)
set(JIT \${L}/external/libtcc/libtcc.c \${L}/external/mir/mir.c \${L}/external/mir/mir-gen.c \${L}/external/mir/c2mir/c2mir.c)
set_source_files_properties(\${FB_SRCS} \${JIT} PROPERTIES COMPILE_FLAGS "-w")
set_source_files_properties(\${L}/external/mir/mir.c \${L}/external/mir/mir-gen.c \${L}/external/mir/c2mir/c2mir.c PROPERTIES COMPILE_FLAGS "-w -std=gnu11")
add_definitions(-DLOBSTER_ENGINE=0 -DVM_JIT_MODE=1 -DSKIP_SDKS "-DGIT_COMMIT_INFOSTR=\\"${LOBSTER_TAG}\\"")
set(CMAKE_CXX_FLAGS "\${CMAKE_CXX_FLAGS} -Wno-switch -Wno-unused-value -Wno-multichar -fwrapv -w")
include_directories(\${L}/include \${L}/src)
include_directories(SYSTEM \${L}/external/libtcc \${L}/external/mir \${L}/external/mir/c2mir)
find_package(Threads)
add_executable(lobster \${SRCS} \${FB_SRCS} \${JIT})
target_link_libraries(lobster \${CMAKE_THREAD_LIBS_INIT} \${CMAKE_DL_LIBS} m)
if(APPLE)
  target_link_libraries(lobster "-framework CoreFoundation")
endif()
`);
      await run("cmake", ["-S", build, "-B", build], { timeout: 600 });
      await run("cmake", ["--build", build, "-j", "8"], { timeout: 1500 });
    }
    check(fs.existsSync(bin), "lobster binary was not built");
    const dir = work("lobster");
    const closure = ["OMM", "PCF", "PIV", "OEM"];
    const imports = new Set(closure);
    for (const s of closure) for (const i of includes(s)) imports.add(i);
    fs.writeFileSync(`${dir}/main.lobster`, `import std
import flatbuffers
import from "${LIB}/lob/"
${[...imports].map((s) => `import ${s}.main_generated`).join("\n")}
let b = flatbuffers.builder {}
let n = b.CreateString("SDS TEST")
let omm = OMMBuilder { b }.start().add_OBJECT_NAME(n).end()
b.Finish(omm, "$OMM")
let bytes = b.SizedCopy()
assert bytes.substring(4, 4) == "$OMM"
assert GetRootAsOMM(bytes).OBJECT_NAME() == "SDS TEST"
let c = flatbuffers.builder {}
let id = c.CreateString("cfg-1")
let pcf = PCFBuilder { c }.start().add_CONFIGURATION_ID(id).end()
c.Finish(pcf, "$PCF")
let cbytes = c.SizedCopy()
assert cbytes.substring(4, 4) == "$PCF"
assert GetRootAsPCF(cbytes).CONFIGURATION_ID() == "cfg-1"
print "ok"
`);
    const { out } = await run(bin, ["--import", `${src}/modules`, "--import", `${fb}/lobster`, `${dir}/main.lobster`], { cwd: dir, timeout: 300 });
    check(out.trim().endsWith("ok"), `lobster: ${out}`);
    return `compiled ${imports.size} standards (OMM, PCF, PIV, OEM and their includes), OMM and PCF round trip`;
  },
};

function walk(dir, ext) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, ext));
    else if (entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------- main
const results = [];
const queue = [...languages];
async function worker() {
  while (queue.length) {
    const language = queue.shift();
    const started = Date.now();
    try {
      if (!steps[language]) throw new Error(`unknown language ${language}`);
      const detail = await steps[language]();
      results.push({ language, ok: true, detail, seconds: (Date.now() - started) / 1000 });
    } catch (error) {
      const skipped = error instanceof Missing && allowMissing;
      results.push({ language, ok: skipped, skipped, detail: error.message, seconds: (Date.now() - started) / 1000 });
    }
  }
}
await Promise.all([worker(), worker(), worker()]);
fs.rmSync(WORK, { recursive: true, force: true });
for (const r of ALL.map((l) => results.find((x) => x.language === l)).filter(Boolean)) {
  console.log(`${r.skipped ? "SKIP" : r.ok ? "PASS" : "FAIL"}  ${r.language.padEnd(8)} ${r.seconds.toFixed(0).padStart(4)}s  ${r.ok ? r.detail : r.detail.split("\n")[0]}`);
}
const failed = results.filter((r) => !r.ok);
for (const r of failed) console.log(`\n--- ${r.language}\n${r.detail}`);
console.log(failed.length ? `\nbindings-compile: ${failed.length} of ${results.length} languages failed` : `\nbindings-compile: ${results.length} languages pass`);
process.exit(failed.length ? 1 : 0);
