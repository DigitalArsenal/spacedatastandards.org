/**
 * An XTCE MetaCommand as the bytes that go up the link: one CCSDS Space Packet
 * (CCSDS 133.0-B-2) with a 6-byte primary header, the command's opcode, its
 * arguments encoded by their XTCE argument types (big-endian), and a
 * CRC-16/CCITT-FALSE trailer.
 */

export interface XtceArgument {
  NAME: string;
  TYPE?: string;
  DEFAULT?: string | number;
}

export interface XtceCommand {
  NAME: string;
  OPCODE?: number;
  DESC?: string;
  ARGS?: XtceArgument[];
  VERIFY?: string[];
}

export interface XtceType {
  NAME: string;
  ENCODING: string;
  SIZE_BITS: number;
  UNIT?: string;
  ENUM?: string[];
  MIN?: number;
  MAX?: number;
}

export type ArgValues = Record<string, string | number>;

function writeArgument(out: number[], type: XtceType | undefined, raw: string | number | undefined): void {
  const bits = type?.SIZE_BITS ?? 32;
  const bytes = Math.max(1, Math.round(bits / 8));
  if (type?.ENUM) {
    const index = type.ENUM.indexOf(String(raw));
    out.push(Math.max(0, index) & 0xff);
    return;
  }
  if (type?.ENCODING === "STRING") {
    const text = String(raw ?? "");
    for (let i = 0; i < bytes; i++) out.push(i < text.length ? text.charCodeAt(i) & 0x7f : 0);
    return;
  }
  const view = new DataView(new ArrayBuffer(8));
  const value = Number(raw ?? 0);
  if (type?.ENCODING === "IEEE754_1985") {
    if (bytes === 8) view.setFloat64(0, value);
    else view.setFloat32(0, value);
  } else {
    const whole = Math.max(0, Math.round(value));
    if (bytes === 1) view.setUint8(0, whole & 0xff);
    else if (bytes === 2) view.setUint16(0, whole & 0xffff);
    else view.setUint32(0, whole >>> 0);
  }
  for (let i = 0; i < bytes; i++) out.push(view.getUint8(i));
}

/** CRC-16/CCITT-FALSE: polynomial 0x1021, initial value 0xFFFF. */
export function crc16(bytes: Uint8Array): number {
  let crc = 0xffff;
  for (const byte of bytes) {
    crc ^= byte << 8;
    for (let bit = 0; bit < 8; bit++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc;
}

export function encodeCommand(
  command: XtceCommand,
  args: ArgValues,
  types: ReadonlyMap<string, XtceType>,
  apid: number,
  sequence: number,
): Uint8Array {
  const body: number[] = [(command.OPCODE ?? 0) & 0xff];
  for (const arg of command.ARGS ?? []) writeArgument(body, types.get(arg.TYPE ?? ""), args[arg.NAME]);
  const dataLength = body.length + 2;
  const packet = new Uint8Array(6 + dataLength);
  // Version 0, type 1 (telecommand), secondary header flag 1, APID.
  const id = (1 << 12) | (1 << 11) | (apid & 0x7ff);
  // Sequence flags 0b11 (unsegmented), 14-bit sequence count.
  const seq = (0b11 << 14) | (sequence & 0x3fff);
  packet[0] = id >> 8;
  packet[1] = id & 0xff;
  packet[2] = seq >> 8;
  packet[3] = seq & 0xff;
  packet[4] = ((dataLength - 1) >> 8) & 0xff;
  packet[5] = (dataLength - 1) & 0xff;
  packet.set(body, 6);
  const crc = crc16(packet.subarray(0, 6 + body.length));
  packet[6 + body.length] = crc >> 8;
  packet[7 + body.length] = crc & 0xff;
  return packet;
}

export function hex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

/** "REPOINT 185.2 45.8" → the command and its arguments in declared order. */
export function parseCommandLine(line: string, commands: readonly XtceCommand[]): { command: XtceCommand; args: ArgValues } | null {
  const [name, ...rest] = line.trim().split(/\s+/);
  const command = commands.find((c) => c.NAME === name);
  if (!command) return null;
  const args: ArgValues = {};
  (command.ARGS ?? []).forEach((arg, i) => {
    const raw = rest[i] ?? arg.DEFAULT ?? "";
    args[arg.NAME] = raw !== "" && !Number.isNaN(Number(raw)) ? Number(raw) : raw;
  });
  return { command, args };
}
