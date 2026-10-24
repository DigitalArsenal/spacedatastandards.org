// Schema-driven wire round trip helpers for the SDS binding E2Es.
//
// Reads the FlatBuffers IDL a package ships (schema/<CODE>/main.fbs and every
// include it names), then derives from it, for one root table:
//   - a JS value in which EVERY reachable table and EVERY field is populated
//     with a non-default value (populate),
//   - the C++ and Go programs that copy a buffer field by field through the
//     GENERATED readers and builders (cppCopySource, goCopySource).
// Nothing is listed by hand, so a field added to a schema is covered by the
// next run. Unsupported IDL (unions, structs, fixed arrays) in the populated
// closure fails loudly instead of being skipped.
import fs from 'node:fs';
import path from 'node:path';

const INT_BITS = { byte: 8, int8: 8, ubyte: 8, uint8: 8, short: 16, int16: 16, ushort: 16, uint16: 16, int: 32, int32: 32, uint: 32, uint32: 32, long: 64, int64: 64, ulong: 64, uint64: 64 };
const SIGNED = new Set(['byte', 'int8', 'short', 'int16', 'int', 'int32', 'long', 'int64']);
const FLOATS = new Set(['float', 'float32', 'double', 'float64']);
const SCALARS = new Set(['bool', ...Object.keys(INT_BITS), ...FLOATS]);
// IDL scalar -> the C++ element type of a generated vector.
const CPP_TYPE = { bool: 'uint8_t', byte: 'int8_t', int8: 'int8_t', ubyte: 'uint8_t', uint8: 'uint8_t', short: 'int16_t', int16: 'int16_t', ushort: 'uint16_t', uint16: 'uint16_t', int: 'int32_t', int32: 'int32_t', uint: 'uint32_t', uint32: 'uint32_t', long: 'int64_t', int64: 'int64_t', ulong: 'uint64_t', uint64: 'uint64_t', float: 'float', float32: 'float', double: 'double', float64: 'double' };
// IDL scalar -> [Go Builder prepend call, Go cast] for the elements of a vector.
const GO_PREPEND = { bool: ['PrependBool', 'bool'], byte: ['PrependInt8', 'int8'], int8: ['PrependInt8', 'int8'], ubyte: ['PrependUint8', 'uint8'], uint8: ['PrependUint8', 'uint8'], short: ['PrependInt16', 'int16'], int16: ['PrependInt16', 'int16'], ushort: ['PrependUint16', 'uint16'], uint16: ['PrependUint16', 'uint16'], int: ['PrependInt32', 'int32'], int32: ['PrependInt32', 'int32'], uint: ['PrependUint32', 'uint32'], uint32: ['PrependUint32', 'uint32'], long: ['PrependInt64', 'int64'], int64: ['PrependInt64', 'int64'], ulong: ['PrependUint64', 'uint64'], uint64: ['PrependUint64', 'uint64'], float: ['PrependFloat32', 'float32'], float32: ['PrependFloat32', 'float32'], double: ['PrependFloat64', 'float64'], float64: ['PrependFloat64', 'float64'] };

function stripComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
}

/** Parse schema/<code>/main.fbs and its transitive includes. */
export function parseIdl(schemaRoot, code) {
  const model = { tables: new Map(), enums: new Map(), unsupported: new Map(), root: null };
  const seen = new Set();
  const visit = (file) => {
    const real = path.resolve(file);
    if (seen.has(real)) return;
    seen.add(real);
    const text = stripComments(fs.readFileSync(real, 'utf8'));
    for (const m of text.matchAll(/\binclude\s+"([^"]+)"\s*;/g)) visit(path.resolve(path.dirname(real), m[1]));
    for (const m of text.matchAll(/\benum\s+(\w+)\s*:\s*(\w+)\s*(\(([^)]*)\))?\s*\{([^}]*)\}/g)) {
      const flags = /bit_flags/.test(m[4] ?? '');
      let next = 0;
      const members = [];
      for (const raw of m[5].split(',')) {
        const member = raw.trim();
        if (!member) continue;
        const [name, value] = member.split('=').map((s) => s.trim());
        const n = value === undefined ? next : Number(value);
        members.push({ name, value: flags ? (1 << n) >>> 0 : n });
        next = n + 1;
      }
      model.enums.set(m[1], { name: m[1], base: m[2], flags, members });
    }
    for (const kind of ['struct', 'union']) {
      for (const m of text.matchAll(new RegExp(`\\b${kind}\\s+(\\w+)\\s*(?::\\s*\\w+)?\\s*(?:\\([^)]*\\))?\\s*\\{`, 'g'))) model.unsupported.set(m[1], kind);
    }
    for (const m of text.matchAll(/\btable\s+(\w+)\s*(?:\([^)]*\))?\s*\{([^}]*)\}/g)) {
      const fields = [];
      for (const raw of m[2].split(';')) {
        const f = raw.trim();
        if (!f) continue;
        const fm = f.match(/^(\w+)\s*:\s*(\[[^\]]+\]|[\w.]+)\s*(?:=\s*([^()]+?))?\s*(?:\(([^)]*)\))?\s*$/s);
        if (!fm) throw new Error(`cannot parse field "${f}" of table ${m[1]} in ${real}`);
        const attrs = fm[4] ?? '';
        if (/\bdeprecated\b/.test(attrs)) continue;
        const vector = fm[2].startsWith('[');
        const elem = vector ? fm[2].slice(1, -1).trim() : fm[2];
        if (elem.includes(':')) throw new Error(`fixed-size array ${f} in ${m[1]} is not supported`);
        fields.push({ name: fm[1], vector, elem, def: fm[3] === undefined ? null : fm[3].trim(), required: /\brequired\b/.test(attrs) });
      }
      model.tables.set(m[1], { name: m[1], fields });
    }
    if (real === path.resolve(schemaRoot, code, 'main.fbs')) {
      const r = text.match(/\broot_type\s+(\w+)\s*;/);
      model.root = r ? r[1] : null;
    }
  };
  visit(path.join(schemaRoot, code, 'main.fbs'));
  return model;
}

export function kindOf(model, type) {
  if (SCALARS.has(type)) return 'scalar';
  if (type === 'string') return 'string';
  if (model.enums.has(type)) return 'enum';
  if (model.tables.has(type)) return 'table';
  if (model.unsupported.has(type)) return model.unsupported.get(type);
  throw new Error(`unknown type ${type}`);
}

/** Tables reachable from `start`, in discovery order; `stop` tables are listed but not entered. */
export function closure(model, start, stop = new Set()) {
  const order = [];
  const seen = new Set();
  const walk = (name) => {
    if (seen.has(name)) return;
    seen.add(name);
    order.push(name);
    if (stop.has(name)) return;
    for (const f of model.tables.get(name).fields) {
      const kind = kindOf(model, f.elem);
      if (kind === 'table') walk(f.elem);
      else if (kind === 'struct' || kind === 'union') throw new Error(`${name}.${f.name}: ${kind} ${f.elem} is not supported by the round-trip harness`);
    }
  };
  walk(start);
  return order;
}

function defaultOf(model, field) {
  if (field.def === null) return null;
  const kind = kindOf(model, field.elem);
  if (kind === 'enum') {
    const e = model.enums.get(field.elem);
    const hit = e.members.find((m) => m.name === field.def);
    return hit ? hit.value : Number(field.def);
  }
  if (field.def === 'true') return true;
  if (field.def === 'false') return false;
  return Number(field.def);
}

/** A deterministic, non-default value for every field; `visited` collects the tables built. */
export function populate(model, M, tableName, visited, seed = { n: 1 }, stack = []) {
  const T = M[`${tableName}T`];
  if (!T) throw new Error(`generated JS has no ${tableName}T`);
  visited.add(tableName);
  const out = new T();
  for (const f of model.tables.get(tableName).fields) {
    const k = seed.n++;
    const kind = kindOf(model, f.elem);
    const one = (i) => {
      if (kind === 'table') {
        if (stack.includes(f.elem)) throw new Error(`table cycle ${[...stack, tableName, f.elem].join(' -> ')}`);
        return populate(model, M, f.elem, visited, seed, [...stack, tableName]);
      }
      if (kind === 'string') return `${tableName}.${f.name}·${k}:${i}é`;
      if (kind === 'enum') {
        const e = model.enums.get(f.elem);
        const dflt = defaultOf(model, f);
        const pool = e.members.map((m) => m.value).filter((v) => v !== dflt);
        const choices = pool.length ? pool : e.members.map((m) => m.value);
        return choices[(k + i) % choices.length];
      }
      return scalarValue(f.elem, k + i, defaultOf(model, f));
    };
    if (f.vector) {
      const count = kind === 'table' ? 2 : kind === 'string' ? 2 : 3;
      out[f.name] = Array.from({ length: count }, (_, i) => one(i));
    } else {
      out[f.name] = one(0);
    }
  }
  return out;
}

function scalarValue(type, k, dflt) {
  if (type === 'bool') return dflt === true ? false : true;
  if (FLOATS.has(type)) {
    // float32 gets a dyadic value (exact in 32 bits); float64 gets a full-precision one.
    const v = type === 'float' || type === 'float32' ? k / 8 + 0.5 : k / 7 + 1 / 3;
    return v === dflt ? v + 1 : v;
  }
  const bits = INT_BITS[type];
  const signed = SIGNED.has(type);
  if (bits === 64) {
    const v = BigInt(2 ** 40 + k * 1013) * (signed && k % 2 ? -1n : 1n);
    return v === (dflt === null ? 0n : BigInt(dflt)) ? v + 1n : v;
  }
  const cap = bits === 8 ? 100 : bits === 16 ? 30000 : 2_000_000_000;
  let v = 1 + ((k * 37) % (cap - 1));
  if (signed && k % 2) v = -v;
  return v === (dflt ?? 0) ? v + 1 : v;
}

// ---------------------------------------------------------------- C++ ------
/** C++ program: copies each (input, output) buffer pair given on its command line through the generated readers and builders. */
export function cppCopySource({ model, root, include, populated }) {
  const known = new Set(populated);
  const lines = [];
  const decls = [];
  const defs = [];
  const cppElem = (f) => (kindOf(model, f.elem) === 'scalar' ? CPP_TYPE[f.elem] : kindOf(model, f.elem) === 'enum' ? CPP_TYPE[model.enums.get(f.elem).base] : null);
  for (const name of populated) {
    decls.push(`static flatbuffers::Offset<${name}> copy_${name}(flatbuffers::FlatBufferBuilder &b, const ${name} *s);`);
    const body = [`static flatbuffers::Offset<${name}> copy_${name}(flatbuffers::FlatBufferBuilder &b, const ${name} *s) {`, '  if (!s) return 0;'];
    const adds = [];
    for (const f of model.tables.get(name).fields) {
      const kind = kindOf(model, f.elem);
      const v = `v_${f.name}`;
      if (kind === 'table' && !known.has(f.elem)) { body.push(`  if (s->${f.name}()) { std::fprintf(stderr, "unpopulated table field ${name}.${f.name} is set\\n"); std::abort(); }`); continue; }
      if (f.vector) {
        if (kind === 'table') {
          body.push(`  flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<${f.elem}>>> ${v} = 0;`, `  if (auto l = s->${f.name}()) { std::vector<flatbuffers::Offset<${f.elem}>> t; for (auto e : *l) t.push_back(copy_${f.elem}(b, e)); ${v} = b.CreateVector(t); }`);
        } else if (kind === 'string') {
          body.push(`  flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> ${v} = 0;`, `  if (auto l = s->${f.name}()) { std::vector<flatbuffers::Offset<flatbuffers::String>> t; for (auto e : *l) t.push_back(b.CreateString(e->str())); ${v} = b.CreateVector(t); }`);
        } else {
          const el = cppElem(f);
          body.push(`  flatbuffers::Offset<flatbuffers::Vector<${el}>> ${v} = 0;`, `  if (auto l = s->${f.name}()) { ${v} = b.CreateVector<${el}>(l->data(), l->size()); }`);
        }
        adds.push(`  if (s->${f.name}()) x.add_${f.name}(${v});`);
      } else if (kind === 'string') {
        body.push(`  flatbuffers::Offset<flatbuffers::String> ${v} = 0;`, `  if (auto p = s->${f.name}()) ${v} = b.CreateString(p->str());`);
        adds.push(`  if (s->${f.name}()) x.add_${f.name}(${v});`);
      } else if (kind === 'table') {
        body.push(`  flatbuffers::Offset<${f.elem}> ${v} = 0;`, `  if (auto p = s->${f.name}()) ${v} = copy_${f.elem}(b, p);`);
        adds.push(`  if (s->${f.name}()) x.add_${f.name}(${v});`);
      } else {
        adds.push(`  x.add_${f.name}(s->${f.name}());`);
      }
    }
    body.push(`  ${name}Builder x(b);`, ...adds, '  return x.Finish();', '}');
    defs.push(body.join('\n'));
  }
  lines.push(
    `#include "${include}"`,
    '#include <cstdio>', '#include <cstdlib>', '#include <fstream>', '#include <iterator>', '#include <vector>',
    decls.join('\n'), defs.join('\n'),
    // main(): copy every (input, output) pair named on the command line.
    'int main(int argc, char **argv) {',
    '  for (int i = 1; i + 1 < argc; i += 2) {',
    '    std::ifstream in(argv[i], std::ios::binary); std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});',
    '    flatbuffers::Verifier v(bytes.data(), bytes.size());',
    `    if (!Verify${root}Buffer(v)) { std::fprintf(stderr, "C++ verifier rejected %s\\n", argv[i]); return 2; }`,
    `    if (!${root}BufferHasIdentifier(bytes.data())) { std::fprintf(stderr, "file identifier missing in %s\\n", argv[i]); return 3; }`,
    '    flatbuffers::FlatBufferBuilder b;',
    `    Finish${root}Buffer(b, copy_${root}(b, Get${root}(bytes.data())));`,
    '    std::ofstream out(argv[i + 1], std::ios::binary); out.write(reinterpret_cast<const char *>(b.GetBufferPointer()), b.GetSize());',
    '  }',
    '  return 0;', '}', '');
  return lines.join('\n');
}

// ----------------------------------------------------------------- Go ------
/** Go file (package <pkg>) whose WireE2E copies each (input, output) pair through the generated Go readers and builders. */
export function goCopySource({ model, root, pkg, populated }) {
  const known = new Set(populated);
  const out = [`package ${pkg}`, 'import ("fmt"; "os"; "github.com/google/flatbuffers/go")'];
  for (const name of populated) {
    const body = [`func copy${name}(b *flatbuffers.Builder, s *${name}) flatbuffers.UOffsetT {`, '  if s == nil { return 0 }'];
    const adds = [];
    for (const f of model.tables.get(name).fields) {
      const kind = kindOf(model, f.elem);
      const v = `v_${f.name}`;
      const add = `${name}Add${f.name}`;
      if (kind === 'table' && !known.has(f.elem)) {
        body.push(f.vector ? `  if s.${f.name}Length() > 0 { panic("unpopulated table field ${name}.${f.name} is set") }` : `  if s.${f.name}(nil) != nil { panic("unpopulated table field ${name}.${f.name} is set") }`);
        continue;
      }
      if (f.vector) {
        const n = `s.${f.name}Length()`;
        body.push(`  var ${v} flatbuffers.UOffsetT`, `  if ${n} > 0 {`);
        if (kind === 'table') {
          body.push(`    offs := make([]flatbuffers.UOffsetT, ${n})`, `    for i := range offs { var e ${f.elem}; if !s.${f.name}(&e, i) { panic("${name}.${f.name}") }; offs[i] = copy${f.elem}(b, &e) }`,
            `    ${name}Start${f.name}Vector(b, len(offs))`, '    for i := len(offs) - 1; i >= 0; i-- { b.PrependUOffsetT(offs[i]) }', `    ${v} = b.EndVector(len(offs))`);
        } else if (kind === 'string') {
          body.push(`    offs := make([]flatbuffers.UOffsetT, ${n})`, `    for i := range offs { offs[i] = b.CreateByteString(s.${f.name}(i)) }`,
            `    ${name}Start${f.name}Vector(b, len(offs))`, '    for i := len(offs) - 1; i >= 0; i-- { b.PrependUOffsetT(offs[i]) }', `    ${v} = b.EndVector(len(offs))`);
        } else {
          const base = kind === 'enum' ? model.enums.get(f.elem).base : f.elem;
          const [call, cast] = GO_PREPEND[base];
          body.push(`    ${name}Start${f.name}Vector(b, ${n})`, `    for i := ${n} - 1; i >= 0; i-- { b.${call}(${cast}(s.${f.name}(i))) }`, `    ${v} = b.EndVector(${n})`);
        }
        body.push('  }');
        adds.push(`  if ${v} != 0 { ${add}(b, ${v}) }`);
      } else if (kind === 'string') {
        body.push(`  var ${v} flatbuffers.UOffsetT`, `  if p := s.${f.name}(); p != nil { ${v} = b.CreateByteString(p) }`);
        adds.push(`  if ${v} != 0 { ${add}(b, ${v}) }`);
      } else if (kind === 'table') {
        body.push(`  var ${v} flatbuffers.UOffsetT`, `  if p := s.${f.name}(nil); p != nil { ${v} = copy${f.elem}(b, p) }`);
        adds.push(`  if ${v} != 0 { ${add}(b, ${v}) }`);
      } else {
        adds.push(`  ${add}(b, s.${f.name}())`);
      }
    }
    body.push(`  ${name}Start(b)`, ...adds, `  return ${name}End(b)`, '}');
    out.push(body.join('\n'));
  }
  out.push(
    // WireE2E copies every (input, output) pair of file names it is given.
    'func WireE2E(pairs []string) {',
    '  for i := 0; i+1 < len(pairs); i += 2 {',
    '    data, err := os.ReadFile(pairs[i]); if err != nil { panic(err) }',
    `    if !${root}BufferHasIdentifier(data) { panic("file identifier missing") }`,
    '    b := flatbuffers.NewBuilder(1024)',
    `    Finish${root}Buffer(b, copy${root}(b, GetRootAs${root}(data, 0)))`,
    '    if err := os.WriteFile(pairs[i+1], b.FinishedBytes(), 0600); err != nil { panic(err) }',
    '  }',
    '  fmt.Print("")', '}', '');
  return out.join('\n');
}
