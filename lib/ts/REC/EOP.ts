// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DataType } from './DataType.js';


/**
 * Earth Orientation Parameters
 */
export class EOP implements flatbuffers.IUnpackableObject<EOPT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):EOP {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsEOP(bb:flatbuffers.ByteBuffer, obj?:EOP):EOP {
  return (obj || new EOP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsEOP(bb:flatbuffers.ByteBuffer, obj?:EOP):EOP {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new EOP()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$EOP');
}

/**
 *  Date in ISO 8601 format, e.g., "2018-01-01T00:00:00Z"
 */
DATE():string|null
DATE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DATE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 *  Modified Julian Date in UTC, e.g., 58119
 */
MJD():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

/**
 *  x component of Pole Wander in radians, e.g., 2.872908911518888E-7
 */
X_POLE_WANDER_RADIANS():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  y component of Pole Wander in radians, e.g., 1.2003259523750447E-6
 */
Y_POLE_WANDER_RADIANS():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  x component of Celestial Pole Offset in radians, e.g., 5.720801437092525E-10
 */
X_CELESTIAL_POLE_OFFSET_RADIANS():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  y component of Celestial Pole Offset in radians, e.g., -8.484239419416879E-10
 */
Y_CELESTIAL_POLE_OFFSET_RADIANS():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  UT1 minus UTC in seconds, e.g., 0.2163567
 */
UT1_MINUS_UTC_SECONDS():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  TAI minus UTC in seconds, e.g., 37
 */
TAI_MINUS_UTC_SECONDS():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

/**
 *  Correction to Length of Day in seconds, e.g., 8.094E-4
 */
LENGTH_OF_DAY_CORRECTION_SECONDS():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 *  Data type (O = Observed, P = Predicted)
 */
DATA_TYPE():DataType {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DataType.OBSERVED;
}

static startEOP(builder:flatbuffers.Builder) {
  builder.startObject(10);
}

static addDate(builder:flatbuffers.Builder, DATEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, DATEOffset, 0);
}

static addMjd(builder:flatbuffers.Builder, MJD:number) {
  builder.addFieldInt32(1, MJD, 0);
}

static addXPoleWanderRadians(builder:flatbuffers.Builder, X_POLE_WANDER_RADIANS:number) {
  builder.addFieldFloat32(2, X_POLE_WANDER_RADIANS, 0.0);
}

static addYPoleWanderRadians(builder:flatbuffers.Builder, Y_POLE_WANDER_RADIANS:number) {
  builder.addFieldFloat32(3, Y_POLE_WANDER_RADIANS, 0.0);
}

static addXCelestialPoleOffsetRadians(builder:flatbuffers.Builder, X_CELESTIAL_POLE_OFFSET_RADIANS:number) {
  builder.addFieldFloat32(4, X_CELESTIAL_POLE_OFFSET_RADIANS, 0.0);
}

static addYCelestialPoleOffsetRadians(builder:flatbuffers.Builder, Y_CELESTIAL_POLE_OFFSET_RADIANS:number) {
  builder.addFieldFloat32(5, Y_CELESTIAL_POLE_OFFSET_RADIANS, 0.0);
}

static addUt1MinusUtcSeconds(builder:flatbuffers.Builder, UT1_MINUS_UTC_SECONDS:number) {
  builder.addFieldFloat32(6, UT1_MINUS_UTC_SECONDS, 0.0);
}

static addTaiMinusUtcSeconds(builder:flatbuffers.Builder, TAI_MINUS_UTC_SECONDS:number) {
  builder.addFieldInt16(7, TAI_MINUS_UTC_SECONDS, 0);
}

static addLengthOfDayCorrectionSeconds(builder:flatbuffers.Builder, LENGTH_OF_DAY_CORRECTION_SECONDS:number) {
  builder.addFieldFloat32(8, LENGTH_OF_DAY_CORRECTION_SECONDS, 0.0);
}

static addDataType(builder:flatbuffers.Builder, DATA_TYPE:DataType) {
  builder.addFieldInt8(9, DATA_TYPE, DataType.OBSERVED);
}

static endEOP(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishEOPBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$EOP');
}

static finishSizePrefixedEOPBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$EOP', true);
}

static createEOP(builder:flatbuffers.Builder, DATEOffset:flatbuffers.Offset, MJD:number, X_POLE_WANDER_RADIANS:number, Y_POLE_WANDER_RADIANS:number, X_CELESTIAL_POLE_OFFSET_RADIANS:number, Y_CELESTIAL_POLE_OFFSET_RADIANS:number, UT1_MINUS_UTC_SECONDS:number, TAI_MINUS_UTC_SECONDS:number, LENGTH_OF_DAY_CORRECTION_SECONDS:number, DATA_TYPE:DataType):flatbuffers.Offset {
  EOP.startEOP(builder);
  EOP.addDate(builder, DATEOffset);
  EOP.addMjd(builder, MJD);
  EOP.addXPoleWanderRadians(builder, X_POLE_WANDER_RADIANS);
  EOP.addYPoleWanderRadians(builder, Y_POLE_WANDER_RADIANS);
  EOP.addXCelestialPoleOffsetRadians(builder, X_CELESTIAL_POLE_OFFSET_RADIANS);
  EOP.addYCelestialPoleOffsetRadians(builder, Y_CELESTIAL_POLE_OFFSET_RADIANS);
  EOP.addUt1MinusUtcSeconds(builder, UT1_MINUS_UTC_SECONDS);
  EOP.addTaiMinusUtcSeconds(builder, TAI_MINUS_UTC_SECONDS);
  EOP.addLengthOfDayCorrectionSeconds(builder, LENGTH_OF_DAY_CORRECTION_SECONDS);
  EOP.addDataType(builder, DATA_TYPE);
  return EOP.endEOP(builder);
}

unpack(): EOPT {
  return new EOPT(
    this.DATE(),
    this.MJD(),
    this.X_POLE_WANDER_RADIANS(),
    this.Y_POLE_WANDER_RADIANS(),
    this.X_CELESTIAL_POLE_OFFSET_RADIANS(),
    this.Y_CELESTIAL_POLE_OFFSET_RADIANS(),
    this.UT1_MINUS_UTC_SECONDS(),
    this.TAI_MINUS_UTC_SECONDS(),
    this.LENGTH_OF_DAY_CORRECTION_SECONDS(),
    this.DATA_TYPE()
  );
}


unpackTo(_o: EOPT): void {
  _o.DATE = this.DATE();
  _o.MJD = this.MJD();
  _o.X_POLE_WANDER_RADIANS = this.X_POLE_WANDER_RADIANS();
  _o.Y_POLE_WANDER_RADIANS = this.Y_POLE_WANDER_RADIANS();
  _o.X_CELESTIAL_POLE_OFFSET_RADIANS = this.X_CELESTIAL_POLE_OFFSET_RADIANS();
  _o.Y_CELESTIAL_POLE_OFFSET_RADIANS = this.Y_CELESTIAL_POLE_OFFSET_RADIANS();
  _o.UT1_MINUS_UTC_SECONDS = this.UT1_MINUS_UTC_SECONDS();
  _o.TAI_MINUS_UTC_SECONDS = this.TAI_MINUS_UTC_SECONDS();
  _o.LENGTH_OF_DAY_CORRECTION_SECONDS = this.LENGTH_OF_DAY_CORRECTION_SECONDS();
  _o.DATA_TYPE = this.DATA_TYPE();
}
}

export class EOPT implements flatbuffers.IGeneratedObject {
constructor(
  public DATE: string|Uint8Array|null = null,
  public MJD: number = 0,
  public X_POLE_WANDER_RADIANS: number = 0.0,
  public Y_POLE_WANDER_RADIANS: number = 0.0,
  public X_CELESTIAL_POLE_OFFSET_RADIANS: number = 0.0,
  public Y_CELESTIAL_POLE_OFFSET_RADIANS: number = 0.0,
  public UT1_MINUS_UTC_SECONDS: number = 0.0,
  public TAI_MINUS_UTC_SECONDS: number = 0,
  public LENGTH_OF_DAY_CORRECTION_SECONDS: number = 0.0,
  public DATA_TYPE: DataType = DataType.OBSERVED
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const DATE = (this.DATE !== null ? builder.createString(this.DATE!) : 0);

  return EOP.createEOP(builder,
    DATE,
    this.MJD,
    this.X_POLE_WANDER_RADIANS,
    this.Y_POLE_WANDER_RADIANS,
    this.X_CELESTIAL_POLE_OFFSET_RADIANS,
    this.Y_CELESTIAL_POLE_OFFSET_RADIANS,
    this.UT1_MINUS_UTC_SECONDS,
    this.TAI_MINUS_UTC_SECONDS,
    this.LENGTH_OF_DAY_CORRECTION_SECONDS,
    this.DATA_TYPE
  );
}
}
