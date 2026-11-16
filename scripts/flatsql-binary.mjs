// Binary adapters shared by the FlatSQL checks and browser example.
import * as flatbuffers from 'flatbuffers';
import { QRP, QRPT, QRPValueT, qrpKind, qrpStatus, qrpRepresentation, qrpValueKind } from '../lib/js/QRP/main.js';

export function frame(payload) {
  const bytes = new Uint8Array(payload.length + 4);
  new DataView(bytes.buffer).setUint32(0, payload.length, true);
  bytes.set(payload, 4);
  return bytes;
}

export function frames(bytes) {
  const result = [];
  for (let offset = 0; offset < bytes.length;) {
    if (offset + 4 > bytes.length) throw new Error('Incomplete frame length');
    const length = new DataView(bytes.buffer, bytes.byteOffset + offset, 4).getUint32(0, true);
    if (length < 8 || offset + 4 + length > bytes.length) throw new Error('Incomplete FlatBuffer frame');
    result.push(bytes.slice(offset + 4, offset + 4 + length));
    offset += 4 + length;
  }
  return result;
}

export function request(sql, parameters = []) {
  const query = Object.assign(new QRPT(), { SQL: sql, REPRESENTATION: qrpRepresentation.FlatBuffer });
  query.PARAMETERS = parameters.map(value => {
    const cell = new QRPValueT();
    if (typeof value === 'string') { cell.KIND = qrpValueKind.Text; cell.TEXT_VALUE = value; }
    else if (value instanceof Uint8Array) { cell.KIND = qrpValueKind.Bytes; cell.BYTES_VALUE = [...value]; }
    else if (typeof value === 'bigint') { cell.KIND = qrpValueKind.Int; cell.INT_VALUE = value; }
    else throw new TypeError('Parameter requires text, bytes or bigint');
    return cell;
  });
  const builder = new flatbuffers.Builder(512);
  const sqlOffset = builder.createString(sql);
  const parameterOffset = query.PARAMETERS.length
    ? QRP.createParametersVector(builder, query.PARAMETERS.map(cell => cell.pack(builder))) : 0;
  // Omit unrelated selection fields, including empty vectors.
  QRP.startQRP(builder);
  QRP.addSql(builder, sqlOffset);
  QRP.addRepresentation(builder, qrpRepresentation.FlatBuffer);
  if (parameterOffset) QRP.addParameters(builder, parameterOffset);
  QRP.finishQRPBuffer(builder, QRP.endQRP(builder));
  return builder.asUint8Array();
}

export function result(bytes) {
  const columns = [], rows = [], pages = [];
  for (const payload of frames(bytes)) {
    const buffer = new flatbuffers.ByteBuffer(payload);
    if (!QRP.bufferHasIdentifier(buffer)) throw new Error('Expected a QRP result');
    const page = QRP.getRootAsQRP(buffer).unpack();
    if (page.KIND === qrpKind.Error || page.STATUS !== qrpStatus.Ok || page.TRUNCATED)
      throw new Error(`Incomplete QRP result: kind=${page.KIND} status=${page.STATUS} partial=${page.PARTIAL} truncated=${page.TRUNCATED}: ${page.ERROR_CODE ?? ''} ${page.MESSAGE ?? ''}`);
    if (page.COLUMNS.length) columns.splice(0, columns.length, ...page.COLUMNS.map(c => c.NAME));
    for (const row of page.ROWS) rows.push(row.CELLS.map(cell => {
      switch (cell.KIND) {
        case qrpValueKind.Null: return null;
        case qrpValueKind.Bool: return cell.BOOL_VALUE;
        case qrpValueKind.Int: return cell.INT_VALUE;
        case qrpValueKind.Float: return cell.FLOAT_VALUE;
        case qrpValueKind.Text: return cell.TEXT_VALUE;
        case qrpValueKind.Bytes: return new Uint8Array(cell.BYTES_VALUE);
        default: throw new Error(`Unknown QRP value kind ${cell.KIND}`);
      }
    }));
    pages.push(page);
  }
  if (!pages.length) throw new Error('Missing QRP result');
  if (pages.at(-1).PARTIAL) throw new Error('Missing complete terminal QRP summary');
  return { columns, rows, pages };
}

export async function query(db, sql, parameters = []) {
  return result(await db.execute(request(sql, parameters)));
}

export function binarySchema(flatc, schemaInput) {
  flatc.mountFiles(Object.entries(schemaInput.files).map(([path, data]) => ({ path, data })));
  const output = '/sds-bfbs';
  const compiled = flatc.runCommand(['--binary', '--schema', '--bfbs-builtins', '-o', output,
    ...Object.keys(schemaInput.files).flatMap(path => ['-I', path.slice(0, path.lastIndexOf('/')) || '/']),
    schemaInput.entry]);
  if (compiled.code !== 0 || compiled.stderr.includes('error:'))
    throw new Error(`Binary schema compilation failed: ${compiled.stderr}`);
  const name = schemaInput.entry.split('/').pop().replace(/\.fbs$/, '.bfbs');
  const bytes = new Uint8Array(flatc.readFile(`${output}/${name}`));
  flatc.unlink(`${output}/${name}`);
  return bytes;
}
