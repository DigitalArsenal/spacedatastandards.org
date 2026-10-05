/**
 * MISSION CONTROL for the XTC sample (owner 2026-10-05: "punch up the demo
 * with sending commands to satellites manually"). Four satellites, three
 * ground stations and an operations center. An operator sends an XTCE
 * MetaCommand to one satellite; it is encoded as a CCSDS telecommand, waits
 * for that satellite's next pass, travels ops → ground station → spacecraft,
 * is verified on acceptance and on execution, and changes what the satellite
 * does: its mode, where it points, what it images, what it dumps.
 *
 * The demo runs on wall-clock time, about 130x faster than the orbit it draws.
 */
import { encodeCommand, hex, parseCommandLine, type ArgValues, type XtceCommand, type XtceType } from "./xtcPacket";

export const MODE_COLORS: Record<string, string> = {
  OFF: "#6b6b70",
  SAFE: "#ff5252",
  NOMINAL: "#f5f5f7",
  SCIENCE: "#00e5ff",
  MANEUVER: "#ff9100",
};

const SAT_COLORS = ["#f5a524", "#00bcd4", "#ab47bc", "#ffeb3b"];
const INC_OFFSETS = [0, 3, -4, 7];
const ANOMALY_OFFSETS = [0, 90, 180, 270];
/** Milliseconds of wall clock per orbit sample (one sample = 2° of true anomaly). */
const MS_PER_SAMPLE = 240;
const GROUND_LEG_MS = 900;
const SPACE_LEG_MS = 700;
const EXECUTE_MS = 1200;
const RECORDER_MB = 4096;
const LOG_LINES = 60;

export type LogKind = "tc" | "up" | "ack" | "exec" | "rej" | "tm" | "fdir" | "info";

export interface LogLine {
  readonly id: number;
  readonly time: string;
  readonly kind: LogKind;
  readonly text: string;
}

export interface SatView {
  readonly name: string;
  readonly color: string;
  readonly mode: string;
  readonly soc: number;
  readonly battV: number;
  readonly recorderMb: number;
  readonly pointing: string;
  readonly collecting: boolean;
  readonly downlinking: boolean;
  readonly contact: string | null;
  readonly aosInS: number | null;
  readonly rangeKm: number | null;
  readonly rssiDbm: number | null;
  readonly marginDb: number | null;
  readonly accepted: number;
  readonly rejected: number;
  readonly queued: number;
}

export interface QueueView {
  readonly id: number;
  readonly label: string;
  readonly sat: string;
  readonly color: string;
  readonly state: string;
}

export interface MissionView {
  readonly sats: readonly SatView[];
  readonly selected: number;
  readonly following: boolean;
  readonly queue: readonly QueueView[];
  readonly log: readonly LogLine[];
  readonly lastHex: string;
  readonly lastBytes: number;
  readonly lastApid: string;
}

interface Sat {
  name: string;
  color: string;
  orbit: { x: number; y: number; z: number }[];
  offset: number;
  entity: any;
  mode: string;
  soc: number;
  recorderMb: number;
  pointing: { ra: number; dec: number } | null;
  collectUntil: number;
  collectSensor: string;
  downlinking: boolean;
  dumpedMb: number;
  swaths: { points: any[]; entity: any }[];
  apid: number;
  sequence: number;
  accepted: number;
  rejected: number;
}

interface Pending {
  id: number;
  sat: number;
  command: XtceCommand;
  args: ArgValues;
  label: string;
  bytes: Uint8Array;
  state: "QUEUED" | "UPLINK" | "ONBOARD";
  t0: number;
  gs: number;
  sentAt: number;
  packet: any;
}

export interface Mission {
  readonly commands: readonly XtceCommand[];
  readonly types: ReadonlyMap<string, XtceType>;
  send(sat: number, command: XtceCommand, args: ArgValues): void;
  select(sat: number): void;
  follow(on: boolean): void;
  clearQueue(): void;
  destroy(): void;
}

export interface MissionDeps {
  Cesium: any;
  viewer: any;
  data: any;
  addEntity(options: any): any;
  orbitPositions(elements: any): { x: number; y: number; z: number }[];
  onView(view: MissionView): void;
}

export function createMission({ Cesium, viewer, data, addEntity, orbitPositions, onView }: MissionDeps): Mission {
  const C = Cesium;
  const ellipsoid = viewer.scene.globe.ellipsoid;
  const commands: XtceCommand[] = data.COMMANDS?.META_COMMANDS ?? [];
  const types = new Map<string, XtceType>(
    [...(data.TELEMETRY?.PARAMETER_TYPES ?? []), ...(data.COMMANDS?.ARGUMENT_TYPES ?? [])].map((t: XtceType) => [t.NAME, t]),
  );
  const ops = data.OPERATIONS_CENTER;
  const opsPos = C.Cartesian3.fromDegrees(ops.LONGITUDE, ops.LATITUDE, 100);
  const stations = (data.GROUND_NETWORK?.STATIONS ?? []).map((gs: any) => ({
    ...gs,
    pos: C.Cartesian3.fromDegrees(gs.LONGITUDE, gs.LATITUDE, 100),
  }));
  const occluders = stations.map((gs: any) => new C.EllipsoidalOccluder(ellipsoid, gs.pos));

  const base = data.SATELLITE;
  const sats: Sat[] = INC_OFFSETS.map((dInc, i) => {
    const orbit = orbitPositions({ ...base, INCLINATION: base.INCLINATION + dInc, MEAN_ANOMALY: base.MEAN_ANOMALY + ANOMALY_OFFSETS[i] });
    return {
      name: i === 0 ? base.OBJECT_NAME : String(base.OBJECT_NAME).replace(/-1$/, `-${i + 1}`),
      color: SAT_COLORS[i],
      orbit,
      offset: (orbit.length * i) / 4,
      entity: null,
      mode: i === 0 ? String(data.SIM_VALUES?.SC_MODE ?? "NOMINAL") : "NOMINAL",
      soc: 92 - i * 6,
      recorderMb: 180 + i * 260,
      pointing: null,
      collectUntil: 0,
      collectSensor: "",
      downlinking: false,
      dumpedMb: 0,
      swaths: [],
      apid: 0x100 + i,
      sequence: 0,
      accepted: Number(data.SIM_VALUES?.CMD_ACCEPT ?? 0) + i * 37,
      rejected: 0,
    };
  });
  // One orbit of the drawn track, in wall-clock seconds, against the real period.
  const periodWallS = (sats[0].orbit.length * MS_PER_SAMPLE) / 1000;
  const periodSimS = 86400 / Number(base.MEAN_MOTION || 15);
  const speedup = periodSimS / periodWallS;

  function satPosition(s: number, timeMs: number, result = new C.Cartesian3()): any {
    const { orbit, offset } = sats[s];
    const n = orbit.length;
    const t = (((timeMs / MS_PER_SAMPLE + offset) % n) + n) % n;
    const i = Math.floor(t);
    const f = t - i;
    const a = orbit[i % n];
    const b = orbit[(i + 1) % n];
    result.x = a.x + (b.x - a.x) * f;
    result.y = a.y + (b.y - a.y) * f;
    result.z = a.z + (b.z - a.z) * f;
    return result;
  }
  const contactAt = (s: number, timeMs: number): number => {
    const p = satPosition(s, timeMs);
    return occluders.findIndex((o: any) => o.isPointVisible(p));
  };

  // Per frame: every satellite's position and contact, read by all callbacks.
  const frame = { now: Date.now(), pos: sats.map(() => new C.Cartesian3()), contact: sats.map(() => -1) };
  const onPreRender = () => {
    frame.now = Date.now();
    sats.forEach((_, s) => {
      satPosition(s, frame.now, frame.pos[s]);
      frame.contact[s] = occluders.findIndex((o: any) => o.isPointVisible(frame.pos[s]));
    });
  };
  onPreRender();
  viewer.scene.preRender.addEventListener(onPreRender);

  let selected = 0;
  let following = false;
  let nextId = 1;
  let lastHex = "";
  let lastBytes = 0;
  let lastApid = "";
  const pending: Pending[] = [];
  const log: LogLine[] = [];
  const entities: any[] = [];
  const add = (options: any) => {
    const entity = addEntity(options);
    entities.push(entity);
    return entity;
  };
  const remove = (entity: any) => {
    if (!entity) return;
    viewer.entities.remove(entity);
    const i = entities.indexOf(entity);
    if (i >= 0) entities.splice(i, 1);
  };
  const clock = () => new Date().toISOString().slice(11, 19);
  function note(kind: LogKind, text: string) {
    log.unshift({ id: nextId++, time: clock(), kind, text });
    if (log.length > LOG_LINES) log.length = LOG_LINES;
  }
  const surface = (p: any) => ellipsoid.scaleToGeodeticSurface(p, new C.Cartesian3()) ?? p;
  /** The point under `p`, lifted `heightM` so straight chords stay above the globe. */
  function under(p: any, heightM: number): any {
    const carto = C.Cartographic.fromCartesian(p);
    return C.Cartesian3.fromRadians(carto.longitude, carto.latitude, heightM);
  }
  function surfaceLerp(a: any, b: any, t: number): any {
    const mid = C.Cartesian3.lerp(a, b, t, new C.Cartesian3());
    const carto = C.Cartographic.fromCartesian(mid);
    return C.Cartesian3.fromRadians(carto.longitude, carto.latitude, 50000);
  }
  const col = (css: string, alpha = 1) => C.Color.fromCssColorString(css).withAlpha(alpha);

  // ---------------------------------------------------------------- ground
  // How far a ground station sees: the 0° elevation horizon at the orbit's height.
  const orbitRadius = C.Cartesian3.magnitude(satPosition(0, 0));
  const horizonM = 6378137 * Math.acos(6378137 / Math.max(orbitRadius, 6478137));
  add({
    name: ops.NAME,
    position: opsPos,
    point: { pixelSize: 18, color: col("#59d9ff"), outlineColor: C.Color.WHITE, outlineWidth: 3 },
    label: {
      text: `${ops.NAME}\n${ops.LOCATION}`,
      font: "13px JetBrains Mono, monospace",
      fillColor: col("#59d9ff"),
      outlineColor: C.Color.BLACK,
      outlineWidth: 2,
      style: C.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: C.VerticalOrigin.TOP,
      pixelOffset: new C.Cartesian2(0, 16),
    },
  });
  stations.forEach((gs: any, g: number) => {
    const linked = () => frame.contact.includes(g);
    add({
      name: gs.NAME,
      position: gs.pos,
      point: { pixelSize: 14, color: col("#f5a524"), outlineColor: C.Color.WHITE, outlineWidth: 2 },
      label: {
        text: `${gs.NAME}\n${gs.ANTENNA_BAND}`,
        font: "12px JetBrains Mono, monospace",
        fillColor: col("#f5a524"),
        outlineColor: C.Color.BLACK,
        outlineWidth: 2,
        style: C.LabelStyle.FILL_AND_OUTLINE,
        verticalOrigin: C.VerticalOrigin.TOP,
        pixelOffset: new C.Cartesian2(0, 14),
      },
    });
    // The station's view of the sky: lights up while it holds a satellite.
    add({
      name: `${gs.NAME} coverage`,
      position: C.Cartesian3.fromDegrees(gs.LONGITUDE, gs.LATITUDE, 0),
      ellipse: {
        semiMajorAxis: horizonM,
        semiMinorAxis: horizonM,
        height: 0,
        material: new C.ColorMaterialProperty(new C.CallbackProperty(() => col("#f5a524", linked() ? 0.1 : 0.03), false)),
        outline: true,
        outlineColor: new C.CallbackProperty(() => col("#f5a524", linked() ? 0.7 : 0.18), false),
      },
    });
    add({
      name: `Internet: Ops → ${gs.NAME}`,
      polyline: {
        positions: [opsPos, gs.pos],
        width: new C.CallbackProperty(() => (linked() ? 2 : 1), false),
        material: new C.PolylineDashMaterialProperty({
          color: new C.CallbackProperty(() => col("#59d9ff", linked() ? 0.6 : 0.12), false),
          dashLength: 12,
        }),
      },
    });
  });

  // ------------------------------------------------------------ satellites
  sats.forEach((sat, s) => {
    add({
      name: `Orbit Track ${sat.name}`,
      polyline: {
        positions: sat.orbit.map((p) => new C.Cartesian3(p.x, p.y, p.z)),
        width: new C.CallbackProperty(() => (s === selected ? 2.5 : 1.5), false),
        material: new C.ColorMaterialProperty(new C.CallbackProperty(() => col(sat.color, s === selected ? 0.4 : 0.15), false)),
      },
    });
    sat.entity = add({
      name: sat.name,
      description: `XTCE SpaceSystem ${data.SPACE_SYSTEM_NAME} · APID 0x${sat.apid.toString(16).toUpperCase()}`,
      position: new C.CallbackProperty(() => frame.pos[s], false),
      point: {
        pixelSize: new C.CallbackProperty(() => (s === selected ? 17 : 13), false),
        color: col(sat.color),
        outlineColor: new C.CallbackProperty(() => {
          const c = col(MODE_COLORS[sat.mode] ?? "#ffffff");
          // SAFE blinks; the rest hold steady.
          return sat.mode === "SAFE" && Math.floor(frame.now / 400) % 2 ? c.withAlpha(0.25) : c;
        }, false),
        outlineWidth: 3,
        disableDepthTestDistance: 0,
      },
      label: {
        text: new C.CallbackProperty(() => `${sat.name} · ${sat.mode}`, false),
        font: "13px JetBrains Mono, monospace",
        fillColor: col(sat.color),
        outlineColor: C.Color.BLACK,
        outlineWidth: 2,
        style: C.LabelStyle.FILL_AND_OUTLINE,
        showBackground: new C.CallbackProperty(() => s === selected, false),
        backgroundColor: col("#000000", 0.7),
        verticalOrigin: C.VerticalOrigin.BOTTOM,
        pixelOffset: new C.Cartesian2(0, -18),
      },
    });
    // RF link to the station holding it.
    add({
      name: `RF Link ${sat.name}`,
      polyline: {
        positions: new C.CallbackProperty(() => {
          const g = frame.contact[s];
          return g < 0 ? [] : [stations[g].pos, frame.pos[s]];
        }, false),
        width: 1.5,
        material: new C.PolylineDashMaterialProperty({ color: col(sat.color, 0.45), dashLength: 10 }),
      },
    });
    // Telemetry flowing down while in contact; a torrent while dumping.
    for (let k = 0; k < 6; k++) {
      const phase = k / 6;
      add({
        name: `TM ${sat.name} ${k}`,
        position: new C.CallbackProperty(() => {
          const g = frame.contact[s];
          if (g < 0) return opsPos;
          const t = (frame.now / (sat.downlinking ? 2600 : 9000) + phase) % 1;
          return t < 0.6
            ? C.Cartesian3.lerp(frame.pos[s], stations[g].pos, t / 0.6, new C.Cartesian3())
            : surfaceLerp(stations[g].pos, opsPos, (t - 0.6) / 0.4);
        }, false),
        point: {
          show: new C.CallbackProperty(() => frame.contact[s] >= 0 && (k < 2 || sat.downlinking), false),
          pixelSize: new C.CallbackProperty(() => (sat.downlinking ? 7 : 5), false),
          color: col("#80ffb0"),
          outlineColor: col(sat.color),
          outlineWidth: 1,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
    }
    // Where it points (REPOINT): an arrow along the commanded direction.
    add({
      name: `${sat.name} boresight`,
      polyline: {
        positions: new C.CallbackProperty(() => {
          if (!sat.pointing) return [];
          const ra = C.Math.toRadians(sat.pointing.ra);
          const dec = C.Math.toRadians(sat.pointing.dec);
          const dir = new C.Cartesian3(Math.cos(dec) * Math.cos(ra), Math.cos(dec) * Math.sin(ra), Math.sin(dec));
          const tip = C.Cartesian3.add(frame.pos[s], C.Cartesian3.multiplyByScalar(dir, 1.6e6, dir), new C.Cartesian3());
          return [frame.pos[s], tip];
        }, false),
        width: 10,
        arcType: C.ArcType.NONE,
        material: new C.PolylineArrowMaterialProperty(col(sat.color, 0.9)),
      },
    });
    // The imaging footprint while COLLECT_DATA runs.
    add({
      name: `${sat.name} footprint`,
      position: new C.CallbackProperty(() => surface(frame.pos[s]), false),
      ellipse: {
        show: new C.CallbackProperty(() => frame.now < sat.collectUntil, false),
        semiMajorAxis: 220000,
        semiMinorAxis: 220000,
        height: 0,
        material: col(MODE_COLORS.SCIENCE, 0.25),
        outline: true,
        outlineColor: col(MODE_COLORS.SCIENCE, 0.9),
      },
    });
  });

  // ----------------------------------------------------------- commanding
  function startSwath(sat: Sat) {
    const swath: { points: any[]; entity: any } = { points: [], entity: null };
    swath.entity = add({
      name: `${sat.name} ${sat.collectSensor} swath`,
      polyline: {
        positions: new C.CallbackProperty(() => swath.points, false),
        width: 14,
        arcType: C.ArcType.NONE,
        material: new C.PolylineGlowMaterialProperty({ color: col(MODE_COLORS.SCIENCE, 0.85), glowPower: 0.25 }),
      },
    });
    sat.swaths.push(swath);
    if (sat.swaths.length > 4) remove(sat.swaths.shift()!.entity);
  }

  function refuse(sat: Sat, command: XtceCommand, args: ArgValues): string | null {
    if (sat.mode === "OFF" && command.NAME !== "SET_MODE") return "spacecraft is OFF";
    if (sat.mode === "SAFE" && (command.NAME === "REPOINT" || command.NAME === "COLLECT_DATA")) return "SAFE mode inhibits slews and the payload";
    if (command.NAME === "COLLECT_DATA" && sat.mode !== "SCIENCE") return "COLLECT_DATA needs SCIENCE mode (send SET_MODE SCIENCE first)";
    if (command.NAME === "COLLECT_DATA" && frame.now < sat.collectUntil) return "a collection is already running";
    if (command.NAME === "COLLECT_DATA" && sat.recorderMb >= RECORDER_MB) return "recorder full (send DOWNLINK)";
    if (command.NAME === "REPOINT") {
      const dec = Number(args.DEC_DEG);
      if (!(dec >= -90 && dec <= 90)) return "DEC_DEG outside −90…90";
    }
    return null;
  }

  function execute(p: Pending) {
    const sat = sats[p.sat];
    const { NAME } = p.command;
    if (NAME === "SET_MODE") {
      sat.mode = String(p.args.TARGET_MODE);
      if (sat.mode !== "SCIENCE") sat.collectUntil = 0;
      note("exec", `${sat.name} ${p.label} · EXECUTED · mode ${sat.mode}`);
    } else if (NAME === "REPOINT") {
      sat.pointing = { ra: Number(p.args.RA_DEG), dec: Number(p.args.DEC_DEG) };
      note("exec", `${sat.name} slewed to RA ${sat.pointing.ra.toFixed(1)}° DEC ${sat.pointing.dec.toFixed(1)}°`);
    } else if (NAME === "COLLECT_DATA") {
      sat.collectSensor = String(p.args.SENSOR_ID || "IMG-1");
      sat.collectUntil = frame.now + (Number(p.args.DURATION_S) * 1000) / speedup;
      startSwath(sat);
      note("exec", `${sat.name} ${sat.collectSensor} collecting for ${Number(p.args.DURATION_S)} s`);
    } else if (NAME === "DOWNLINK") {
      sat.downlinking = true;
      sat.dumpedMb = 0;
      note("exec", `${sat.name} recorder dump armed · ${Math.round(sat.recorderMb)} MB on board`);
    } else {
      note("exec", `${sat.name} ${p.label} · EXECUTED · round trip ${((frame.now - p.sentAt) / 1000).toFixed(1)} s`);
    }
  }

  function tick(dtS: number) {
    const now = frame.now;
    // The command pipeline, oldest first; one command in flight per satellite.
    for (const p of [...pending]) {
      const sat = sats[p.sat];
      if (p.state === "QUEUED") {
        const g = frame.contact[p.sat];
        // Start only if the pass lasts the whole transfer; otherwise wait for the next one.
        const lasts = g >= 0 && contactAt(p.sat, now + GROUND_LEG_MS + SPACE_LEG_MS + 300) === g;
        if (lasts && !pending.some((q) => q !== p && q.sat === p.sat && q.state !== "QUEUED")) {
          p.state = "UPLINK";
          p.t0 = now;
          p.gs = g;
          p.packet = add({
            name: `TC ${p.label}`,
            position: new C.CallbackProperty(() => {
              const e = frame.now - p.t0;
              if (e < GROUND_LEG_MS) return surfaceLerp(opsPos, stations[p.gs].pos, e / GROUND_LEG_MS);
              return C.Cartesian3.lerp(stations[p.gs].pos, frame.pos[p.sat], Math.min(1, (e - GROUND_LEG_MS) / SPACE_LEG_MS), new C.Cartesian3());
            }, false),
            point: { pixelSize: 11, color: col("#f5a524"), outlineColor: C.Color.WHITE, outlineWidth: 2, disableDepthTestDistance: Number.POSITIVE_INFINITY },
            polyline: {
              positions: new C.CallbackProperty(() => (frame.now - p.t0 < GROUND_LEG_MS ? [] : [stations[p.gs].pos, frame.pos[p.sat]]), false),
              width: 8,
              arcType: C.ArcType.NONE,
              material: new C.PolylineGlowMaterialProperty({ color: col("#f5a524", 0.9), glowPower: 0.3 }),
            },
          });
          note("up", `${p.label} → ${sat.name} · uplink via ${stations[g].NAME}`);
        }
      } else if (p.state === "UPLINK") {
        const elapsed = now - p.t0;
        if (elapsed > GROUND_LEG_MS && frame.contact[p.sat] !== p.gs) {
          remove(p.packet);
          p.packet = null;
          p.state = "QUEUED";
          note("rej", `${p.label} → ${sat.name} · lost the pass during uplink · re-queued`);
        } else if (elapsed >= GROUND_LEG_MS + SPACE_LEG_MS) {
          remove(p.packet);
          p.packet = null;
          const reason = refuse(sat, p.command, p.args);
          if (reason) {
            sat.rejected++;
            pending.splice(pending.indexOf(p), 1);
            note("rej", `${sat.name} REJECTED ${p.label} · ${reason}`);
          } else {
            sat.accepted++;
            p.state = "ONBOARD";
            p.t0 = now;
            note("ack", `${sat.name} ACCEPTED ${p.label} · seq ${((p.bytes[2] & 0x3f) << 8) | p.bytes[3]}`);
          }
        }
      } else if (now - p.t0 >= EXECUTE_MS) {
        pending.splice(pending.indexOf(p), 1);
        execute(p);
      }
    }

    // Power, payload and recorder.
    sats.forEach((sat, s) => {
      const collecting = now < sat.collectUntil;
      const draw = sat.mode === "OFF" ? 0 : collecting ? 1.6 : sat.mode === "SCIENCE" ? 0.6 : sat.mode === "MANEUVER" ? 0.8 : sat.mode === "SAFE" ? -0.9 : -0.35;
      sat.soc = Math.min(100, Math.max(0, sat.soc - draw * dtS));
      if (collecting) {
        sat.recorderMb = Math.min(RECORDER_MB, sat.recorderMb + 45 * dtS);
        const swath = sat.swaths[sat.swaths.length - 1];
        if (swath) swath.points = [...swath.points, under(frame.pos[s], 20000)];
        if (sat.recorderMb >= RECORDER_MB) {
          sat.collectUntil = 0;
          note("tm", `${sat.name} recorder full · collection stopped`);
        }
      } else if (sat.collectUntil && sat.collectUntil <= now) {
        sat.collectUntil = 0;
        note("tm", `${sat.name} ${sat.collectSensor} collection complete · ${Math.round(sat.recorderMb)} MB on board`);
      }
      if (sat.downlinking && frame.contact[s] >= 0) {
        const step = Math.min(sat.recorderMb, 70 * dtS);
        sat.recorderMb -= step;
        sat.dumpedMb += step;
        if (sat.recorderMb <= 0) {
          sat.downlinking = false;
          note("tm", `${sat.name} dump complete · ${Math.round(sat.dumpedMb)} MB to ${stations[frame.contact[s]].NAME}`);
        }
      }
      // Fault protection: the spacecraft saves itself, no ground in the loop.
      if (sat.soc < 22 && sat.mode !== "SAFE" && sat.mode !== "OFF") {
        sat.mode = "SAFE";
        sat.collectUntil = 0;
        note("fdir", `${sat.name} FDIR: battery ${sat.soc.toFixed(0)}% · autonomous SAFE mode`);
      }
    });
  }

  // ------------------------------------------------------------- the view
  /** Seconds to each satellite's next pass, refreshed twice a second. */
  const aos: (number | null)[] = sats.map(() => null);
  let aosAt = 0;
  function aosInS(s: number): number | null {
    if (frame.now - aosAt > 500) {
      aosAt = frame.now;
      sats.forEach((_, i) => {
        aos[i] = null;
        if (frame.contact[i] >= 0) return;
        for (let k = 1; k <= 480; k++) if (contactAt(i, frame.now + k * 250) >= 0) { aos[i] = k * 0.25; break; }
      });
    }
    return aos[s] === null ? null : Math.max(0, aos[s]! - (frame.now - aosAt) / 1000);
  }
  function publish() {
    onView({
      sats: sats.map((sat, s) => {
        const g = frame.contact[s];
        const rangeKm = g >= 0 ? C.Cartesian3.distance(frame.pos[s], stations[g].pos) / 1000 : null;
        return {
          name: sat.name,
          color: sat.color,
          mode: sat.mode,
          soc: sat.soc,
          battV: 24.6 + sat.soc * 0.044,
          recorderMb: sat.recorderMb,
          pointing: sat.pointing ? `RA ${sat.pointing.ra.toFixed(1)}° DEC ${sat.pointing.dec.toFixed(1)}°` : "NADIR",
          collecting: frame.now < sat.collectUntil,
          downlinking: sat.downlinking,
          contact: g >= 0 ? stations[g].NAME : null,
          aosInS: g >= 0 ? null : aosInS(s),
          rangeKm,
          rssiDbm: rangeKm === null ? null : -78 - 20 * Math.log10(rangeKm / 400),
          marginDb: rangeKm === null ? null : 14 - 20 * Math.log10(rangeKm / 400),
          accepted: sat.accepted,
          rejected: sat.rejected,
          queued: pending.filter((p) => p.sat === s).length,
        };
      }),
      selected,
      following,
      queue: pending.map((p) => ({ id: p.id, label: p.label, sat: sats[p.sat].name, color: sats[p.sat].color, state: p.state })),
      log: [...log],
      lastHex,
      lastBytes,
      lastApid,
    });
  }

  let last = Date.now();
  const timer = setInterval(() => {
    const now = Date.now();
    tick(Math.min(0.5, (now - last) / 1000));
    last = now;
    publish();
  }, 100);

  // A click on a satellite makes it the command target.
  const removeSelection = viewer.selectedEntityChanged.addEventListener((entity: any) => {
    const s = sats.findIndex((sat) => sat.entity === entity);
    if (s >= 0) {
      selected = s;
      if (following) viewer.trackedEntity = sats[s].entity;
    }
  });

  const mission: Mission = {
    commands,
    types,
    send(s, command, args) {
      const sat = sats[s];
      sat.sequence = (sat.sequence + 1) & 0x3fff;
      const bytes = encodeCommand(command, args, types, sat.apid, sat.sequence);
      const label = [command.NAME, ...(command.ARGS ?? []).map((a) => args[a.NAME])].join(" ");
      pending.push({ id: nextId++, sat: s, command, args, label, bytes, state: "QUEUED", t0: 0, gs: -1, sentAt: Date.now(), packet: null });
      lastHex = hex(bytes);
      lastBytes = bytes.length;
      lastApid = `0x${sat.apid.toString(16).toUpperCase()}`;
      const waiting = frame.contact[s] < 0 ? " · waiting for a pass" : "";
      note("tc", `${label} → ${sat.name} · ${bytes.length} B TC${waiting}`);
      publish();
    },
    select(s) {
      selected = s;
      if (following) viewer.trackedEntity = sats[s].entity;
      publish();
    },
    follow(on) {
      following = on;
      viewer.trackedEntity = on ? sats[selected].entity : undefined;
      publish();
    },
    clearQueue() {
      for (const p of pending) remove(p.packet);
      const dropped = pending.length;
      pending.length = 0;
      if (dropped) note("info", `queue cleared · ${dropped} command${dropped === 1 ? "" : "s"} dropped`);
      publish();
    },
    destroy() {
      clearInterval(timer);
      removeSelection();
      viewer.scene.preRender.removeEventListener(onPreRender);
      if (following) viewer.trackedEntity = undefined;
      for (const entity of [...entities]) remove(entity);
    },
  };

  // The sample's own queue runs first, on the lead satellite.
  for (const line of data.SIM_VALUES?.CMD_QUEUE ?? []) {
    const parsed = parseCommandLine(String(line), commands);
    if (parsed) mission.send(0, parsed.command, parsed.args);
  }
  note("info", `${data.SPACE_SYSTEM_NAME}: ${commands.length} commands, ${stations.length} ground stations · pick a satellite and send one`);
  publish();
  return mission;
}
