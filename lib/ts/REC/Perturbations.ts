// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ATM, ATMT } from './ATM.js';


export class Perturbations implements flatbuffers.IUnpackableObject<PerturbationsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Perturbations {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPerturbations(bb:flatbuffers.ByteBuffer, obj?:Perturbations):Perturbations {
  return (obj || new Perturbations()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPerturbations(bb:flatbuffers.ByteBuffer, obj?:Perturbations):Perturbations {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Perturbations()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Comments in the Perturbations section.
 */
COMMENT(index: number):string
COMMENT(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
COMMENT(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

commentLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Atmospheric model used.
 */
ATMOSPHERIC_MODEL(obj?:ATM):ATM|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ATM()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Gravity model used.
 */
GRAVITY_MODEL():string|null
GRAVITY_MODEL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
GRAVITY_MODEL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Degree of the gravity model.
 */
GRAVITY_DEGREE():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

/**
 * Order of the gravity model.
 */
GRAVITY_ORDER():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

/**
 * Gravitational constant times the mass of the central body.
 */
GM():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * List of celestial bodies included in n-body perturbations.
 */
N_BODY_PERTURBATIONS(index: number):string
N_BODY_PERTURBATIONS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
N_BODY_PERTURBATIONS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

nBodyPerturbationsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Ocean tides model used.
 */
OCEAN_TIDES_MODEL():string|null
OCEAN_TIDES_MODEL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
OCEAN_TIDES_MODEL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Solid tides model used.
 */
SOLID_TIDES_MODEL():string|null
SOLID_TIDES_MODEL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SOLID_TIDES_MODEL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Atmospheric tides model used.
 */
ATMOSPHERIC_TIDES_MODEL():string|null
ATMOSPHERIC_TIDES_MODEL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ATMOSPHERIC_TIDES_MODEL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Geopotential model used.
 */
GEOPOTENTIAL_MODEL():string|null
GEOPOTENTIAL_MODEL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
GEOPOTENTIAL_MODEL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Solar radiation pressure model used.
 */
SOLAR_RAD_PRESSURE():string|null
SOLAR_RAD_PRESSURE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SOLAR_RAD_PRESSURE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Albedo model used.
 */
ALBEDO():string|null
ALBEDO(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ALBEDO(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Thermal model used.
 */
THERMAL():string|null
THERMAL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
THERMAL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Relativity model used.
 */
RELATIVITY():string|null
RELATIVITY(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
RELATIVITY(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Atmospheric drag model used.
 */
ATMOSPHERIC_DRAG():string|null
ATMOSPHERIC_DRAG(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ATMOSPHERIC_DRAG(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Fixed geomagnetic Kp index used.
 */
FIXED_GEOMAG_KP():number {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Fixed F10.7 solar flux value used.
 */
FIXED_F10P7():number {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Fixed mean F10.7 solar flux value used.
 */
FIXED_F10P7_MEAN():number {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startPerturbations(builder:flatbuffers.Builder) {
  builder.startObject(19);
}

static addComment(builder:flatbuffers.Builder, COMMENTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, COMMENTOffset, 0);
}

static createCommentVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startCommentVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addAtmosphericModel(builder:flatbuffers.Builder, ATMOSPHERIC_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ATMOSPHERIC_MODELOffset, 0);
}

static addGravityModel(builder:flatbuffers.Builder, GRAVITY_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, GRAVITY_MODELOffset, 0);
}

static addGravityDegree(builder:flatbuffers.Builder, GRAVITY_DEGREE:number) {
  builder.addFieldInt32(3, GRAVITY_DEGREE, 0);
}

static addGravityOrder(builder:flatbuffers.Builder, GRAVITY_ORDER:number) {
  builder.addFieldInt32(4, GRAVITY_ORDER, 0);
}

static addGm(builder:flatbuffers.Builder, GM:number) {
  builder.addFieldFloat64(5, GM, 0.0);
}

static addNBodyPerturbations(builder:flatbuffers.Builder, N_BODY_PERTURBATIONSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, N_BODY_PERTURBATIONSOffset, 0);
}

static createNBodyPerturbationsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startNBodyPerturbationsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addOceanTidesModel(builder:flatbuffers.Builder, OCEAN_TIDES_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, OCEAN_TIDES_MODELOffset, 0);
}

static addSolidTidesModel(builder:flatbuffers.Builder, SOLID_TIDES_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, SOLID_TIDES_MODELOffset, 0);
}

static addAtmosphericTidesModel(builder:flatbuffers.Builder, ATMOSPHERIC_TIDES_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, ATMOSPHERIC_TIDES_MODELOffset, 0);
}

static addGeopotentialModel(builder:flatbuffers.Builder, GEOPOTENTIAL_MODELOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, GEOPOTENTIAL_MODELOffset, 0);
}

static addSolarRadPressure(builder:flatbuffers.Builder, SOLAR_RAD_PRESSUREOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, SOLAR_RAD_PRESSUREOffset, 0);
}

static addAlbedo(builder:flatbuffers.Builder, ALBEDOOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, ALBEDOOffset, 0);
}

static addThermal(builder:flatbuffers.Builder, THERMALOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, THERMALOffset, 0);
}

static addRelativity(builder:flatbuffers.Builder, RELATIVITYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, RELATIVITYOffset, 0);
}

static addAtmosphericDrag(builder:flatbuffers.Builder, ATMOSPHERIC_DRAGOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, ATMOSPHERIC_DRAGOffset, 0);
}

static addFixedGeomagKp(builder:flatbuffers.Builder, FIXED_GEOMAG_KP:number) {
  builder.addFieldFloat64(16, FIXED_GEOMAG_KP, 0.0);
}

static addFixedF10P7(builder:flatbuffers.Builder, FIXED_F10P7:number) {
  builder.addFieldFloat64(17, FIXED_F10P7, 0.0);
}

static addFixedF10P7Mean(builder:flatbuffers.Builder, FIXED_F10P7_MEAN:number) {
  builder.addFieldFloat64(18, FIXED_F10P7_MEAN, 0.0);
}

static endPerturbations(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): PerturbationsT {
  return new PerturbationsT(
    this.bb!.createScalarList<string>(this.COMMENT.bind(this), this.commentLength()),
    (this.ATMOSPHERIC_MODEL() !== null ? this.ATMOSPHERIC_MODEL()!.unpack() : null),
    this.GRAVITY_MODEL(),
    this.GRAVITY_DEGREE(),
    this.GRAVITY_ORDER(),
    this.GM(),
    this.bb!.createScalarList<string>(this.N_BODY_PERTURBATIONS.bind(this), this.nBodyPerturbationsLength()),
    this.OCEAN_TIDES_MODEL(),
    this.SOLID_TIDES_MODEL(),
    this.ATMOSPHERIC_TIDES_MODEL(),
    this.GEOPOTENTIAL_MODEL(),
    this.SOLAR_RAD_PRESSURE(),
    this.ALBEDO(),
    this.THERMAL(),
    this.RELATIVITY(),
    this.ATMOSPHERIC_DRAG(),
    this.FIXED_GEOMAG_KP(),
    this.FIXED_F10P7(),
    this.FIXED_F10P7_MEAN()
  );
}


unpackTo(_o: PerturbationsT): void {
  _o.COMMENT = this.bb!.createScalarList<string>(this.COMMENT.bind(this), this.commentLength());
  _o.ATMOSPHERIC_MODEL = (this.ATMOSPHERIC_MODEL() !== null ? this.ATMOSPHERIC_MODEL()!.unpack() : null);
  _o.GRAVITY_MODEL = this.GRAVITY_MODEL();
  _o.GRAVITY_DEGREE = this.GRAVITY_DEGREE();
  _o.GRAVITY_ORDER = this.GRAVITY_ORDER();
  _o.GM = this.GM();
  _o.N_BODY_PERTURBATIONS = this.bb!.createScalarList<string>(this.N_BODY_PERTURBATIONS.bind(this), this.nBodyPerturbationsLength());
  _o.OCEAN_TIDES_MODEL = this.OCEAN_TIDES_MODEL();
  _o.SOLID_TIDES_MODEL = this.SOLID_TIDES_MODEL();
  _o.ATMOSPHERIC_TIDES_MODEL = this.ATMOSPHERIC_TIDES_MODEL();
  _o.GEOPOTENTIAL_MODEL = this.GEOPOTENTIAL_MODEL();
  _o.SOLAR_RAD_PRESSURE = this.SOLAR_RAD_PRESSURE();
  _o.ALBEDO = this.ALBEDO();
  _o.THERMAL = this.THERMAL();
  _o.RELATIVITY = this.RELATIVITY();
  _o.ATMOSPHERIC_DRAG = this.ATMOSPHERIC_DRAG();
  _o.FIXED_GEOMAG_KP = this.FIXED_GEOMAG_KP();
  _o.FIXED_F10P7 = this.FIXED_F10P7();
  _o.FIXED_F10P7_MEAN = this.FIXED_F10P7_MEAN();
}
}

export class PerturbationsT implements flatbuffers.IGeneratedObject {
constructor(
  public COMMENT: (string)[] = [],
  public ATMOSPHERIC_MODEL: ATMT|null = null,
  public GRAVITY_MODEL: string|Uint8Array|null = null,
  public GRAVITY_DEGREE: number = 0,
  public GRAVITY_ORDER: number = 0,
  public GM: number = 0.0,
  public N_BODY_PERTURBATIONS: (string)[] = [],
  public OCEAN_TIDES_MODEL: string|Uint8Array|null = null,
  public SOLID_TIDES_MODEL: string|Uint8Array|null = null,
  public ATMOSPHERIC_TIDES_MODEL: string|Uint8Array|null = null,
  public GEOPOTENTIAL_MODEL: string|Uint8Array|null = null,
  public SOLAR_RAD_PRESSURE: string|Uint8Array|null = null,
  public ALBEDO: string|Uint8Array|null = null,
  public THERMAL: string|Uint8Array|null = null,
  public RELATIVITY: string|Uint8Array|null = null,
  public ATMOSPHERIC_DRAG: string|Uint8Array|null = null,
  public FIXED_GEOMAG_KP: number = 0.0,
  public FIXED_F10P7: number = 0.0,
  public FIXED_F10P7_MEAN: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const COMMENT = Perturbations.createCommentVector(builder, builder.createObjectOffsetList(this.COMMENT));
  const ATMOSPHERIC_MODEL = (this.ATMOSPHERIC_MODEL !== null ? this.ATMOSPHERIC_MODEL!.pack(builder) : 0);
  const GRAVITY_MODEL = (this.GRAVITY_MODEL !== null ? builder.createString(this.GRAVITY_MODEL!) : 0);
  const N_BODY_PERTURBATIONS = Perturbations.createNBodyPerturbationsVector(builder, builder.createObjectOffsetList(this.N_BODY_PERTURBATIONS));
  const OCEAN_TIDES_MODEL = (this.OCEAN_TIDES_MODEL !== null ? builder.createString(this.OCEAN_TIDES_MODEL!) : 0);
  const SOLID_TIDES_MODEL = (this.SOLID_TIDES_MODEL !== null ? builder.createString(this.SOLID_TIDES_MODEL!) : 0);
  const ATMOSPHERIC_TIDES_MODEL = (this.ATMOSPHERIC_TIDES_MODEL !== null ? builder.createString(this.ATMOSPHERIC_TIDES_MODEL!) : 0);
  const GEOPOTENTIAL_MODEL = (this.GEOPOTENTIAL_MODEL !== null ? builder.createString(this.GEOPOTENTIAL_MODEL!) : 0);
  const SOLAR_RAD_PRESSURE = (this.SOLAR_RAD_PRESSURE !== null ? builder.createString(this.SOLAR_RAD_PRESSURE!) : 0);
  const ALBEDO = (this.ALBEDO !== null ? builder.createString(this.ALBEDO!) : 0);
  const THERMAL = (this.THERMAL !== null ? builder.createString(this.THERMAL!) : 0);
  const RELATIVITY = (this.RELATIVITY !== null ? builder.createString(this.RELATIVITY!) : 0);
  const ATMOSPHERIC_DRAG = (this.ATMOSPHERIC_DRAG !== null ? builder.createString(this.ATMOSPHERIC_DRAG!) : 0);

  Perturbations.startPerturbations(builder);
  Perturbations.addComment(builder, COMMENT);
  Perturbations.addAtmosphericModel(builder, ATMOSPHERIC_MODEL);
  Perturbations.addGravityModel(builder, GRAVITY_MODEL);
  Perturbations.addGravityDegree(builder, this.GRAVITY_DEGREE);
  Perturbations.addGravityOrder(builder, this.GRAVITY_ORDER);
  Perturbations.addGm(builder, this.GM);
  Perturbations.addNBodyPerturbations(builder, N_BODY_PERTURBATIONS);
  Perturbations.addOceanTidesModel(builder, OCEAN_TIDES_MODEL);
  Perturbations.addSolidTidesModel(builder, SOLID_TIDES_MODEL);
  Perturbations.addAtmosphericTidesModel(builder, ATMOSPHERIC_TIDES_MODEL);
  Perturbations.addGeopotentialModel(builder, GEOPOTENTIAL_MODEL);
  Perturbations.addSolarRadPressure(builder, SOLAR_RAD_PRESSURE);
  Perturbations.addAlbedo(builder, ALBEDO);
  Perturbations.addThermal(builder, THERMAL);
  Perturbations.addRelativity(builder, RELATIVITY);
  Perturbations.addAtmosphericDrag(builder, ATMOSPHERIC_DRAG);
  Perturbations.addFixedGeomagKp(builder, this.FIXED_GEOMAG_KP);
  Perturbations.addFixedF10P7(builder, this.FIXED_F10P7);
  Perturbations.addFixedF10P7Mean(builder, this.FIXED_F10P7_MEAN);

  return Perturbations.endPerturbations(builder);
}
}
