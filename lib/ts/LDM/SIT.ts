// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Geometry, GeometryT } from './Geometry.js';
import { IDM, IDMT } from './IDM.js';
import { SiteType } from './SiteType.js';


/**
 * Site Information Message
 */
export class SIT implements flatbuffers.IUnpackableObject<SITT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SIT {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSIT(bb:flatbuffers.ByteBuffer, obj?:SIT):SIT {
  return (obj || new SIT()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSIT(bb:flatbuffers.ByteBuffer, obj?:SIT):SIT {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SIT()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Unique identifier for the site, BE_NUMBER
 */
ID():string|null
ID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Name of the site
 */
NAME():string|null
NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Abbreviation
 */
ABBREVIATION():string|null
ABBREVIATION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ABBREVIATION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Site type as defined in SiteType enum
 */
SITE_TYPE():SiteType {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : SiteType.LAUNCH_SITE;
}

/**
 * Site type CATCODE
 */
CATCODE():string|null
CATCODE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CATCODE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Network identifier
 */
NETWORK():string|null
NETWORK(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NETWORK(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Latitude of the site
 */
LATITUDE():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 * Longitude of the site
 */
LONGITUDE():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 * Altitude of the site
 */
ALTITUDE():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 * Geometry of the site
 */
GEOMETRY(obj?:Geometry):Geometry|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new Geometry()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Center point geometry coordinates
 */
CENTER_POINT_GEOMETRY(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

centerPointGeometryLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

centerPointGeometryArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * Classification marking of the site
 */
CLASSIFICATION():string|null
CLASSIFICATION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CLASSIFICATION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * CTR ISO 3166 Numeric code as string
 */
CTR_ID():string|null
CTR_ID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CTR_ID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Identifier of the user who created the site data
 */
CREATED_BY():string|null
CREATED_BY(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CREATED_BY(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Description of the site
 */
DESCRIPTION():string|null
DESCRIPTION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DESCRIPTION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * URL for the 3D model of the site
 */
MODEL_URL():string|null
MODEL_URL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
MODEL_URL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Source of the site data
 */
SOURCE():string|null
SOURCE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SOURCE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Indicates if the site is taskable
 */
TASKABLE():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * Operational status of the site (e.g., active, inactive, under construction)
 */
OPERATIONAL_STATUS():string|null
OPERATIONAL_STATUS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
OPERATIONAL_STATUS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Date of establishment
 */
ESTABLISHMENT_DATE():string|null
ESTABLISHMENT_DATE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ESTABLISHMENT_DATE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Contact information for the site
 */
CONTACT_INFO():string|null
CONTACT_INFO(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
CONTACT_INFO(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Environmental impact or considerations
 */
ENVIRONMENTAL_IMPACT():string|null
ENVIRONMENTAL_IMPACT(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ENVIRONMENTAL_IMPACT(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Accessibility and infrastructure details
 */
ACCESSIBILITY_INFRA():string|null
ACCESSIBILITY_INFRA(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ACCESSIBILITY_INFRA(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Vector of Integrated Devices (IDM)
 */
INTEGRATED_DEVICES(index: number, obj?:IDM):IDM|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? (obj || new IDM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

integratedDevicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSIT(builder:flatbuffers.Builder) {
  builder.startObject(24);
}

static addId(builder:flatbuffers.Builder, IDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, IDOffset, 0);
}

static addName(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, NAMEOffset, 0);
}

static addAbbreviation(builder:flatbuffers.Builder, ABBREVIATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, ABBREVIATIONOffset, 0);
}

static addSiteType(builder:flatbuffers.Builder, SITE_TYPE:SiteType) {
  builder.addFieldInt8(3, SITE_TYPE, SiteType.LAUNCH_SITE);
}

static addCatcode(builder:flatbuffers.Builder, CATCODEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, CATCODEOffset, 0);
}

static addNetwork(builder:flatbuffers.Builder, NETWORKOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, NETWORKOffset, 0);
}

static addLatitude(builder:flatbuffers.Builder, LATITUDE:number) {
  builder.addFieldFloat32(6, LATITUDE, 0.0);
}

static addLongitude(builder:flatbuffers.Builder, LONGITUDE:number) {
  builder.addFieldFloat32(7, LONGITUDE, 0.0);
}

static addAltitude(builder:flatbuffers.Builder, ALTITUDE:number) {
  builder.addFieldFloat32(8, ALTITUDE, 0.0);
}

static addGeometry(builder:flatbuffers.Builder, GEOMETRYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, GEOMETRYOffset, 0);
}

static addCenterPointGeometry(builder:flatbuffers.Builder, CENTER_POINT_GEOMETRYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, CENTER_POINT_GEOMETRYOffset, 0);
}

static createCenterPointGeometryVector(builder:flatbuffers.Builder, data:number[]|Float32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createCenterPointGeometryVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createCenterPointGeometryVector(builder:flatbuffers.Builder, data:number[]|Float32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]!);
  }
  return builder.endVector();
}

static startCenterPointGeometryVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addClassification(builder:flatbuffers.Builder, CLASSIFICATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, CLASSIFICATIONOffset, 0);
}

static addCtrId(builder:flatbuffers.Builder, CTR_IDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, CTR_IDOffset, 0);
}

static addCreatedBy(builder:flatbuffers.Builder, CREATED_BYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, CREATED_BYOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, DESCRIPTIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, DESCRIPTIONOffset, 0);
}

static addModelUrl(builder:flatbuffers.Builder, MODEL_URLOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, MODEL_URLOffset, 0);
}

static addSource(builder:flatbuffers.Builder, SOURCEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, SOURCEOffset, 0);
}

static addTaskable(builder:flatbuffers.Builder, TASKABLE:boolean) {
  builder.addFieldInt8(17, +TASKABLE, +false);
}

static addOperationalStatus(builder:flatbuffers.Builder, OPERATIONAL_STATUSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, OPERATIONAL_STATUSOffset, 0);
}

static addEstablishmentDate(builder:flatbuffers.Builder, ESTABLISHMENT_DATEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, ESTABLISHMENT_DATEOffset, 0);
}

static addContactInfo(builder:flatbuffers.Builder, CONTACT_INFOOffset:flatbuffers.Offset) {
  builder.addFieldOffset(20, CONTACT_INFOOffset, 0);
}

static addEnvironmentalImpact(builder:flatbuffers.Builder, ENVIRONMENTAL_IMPACTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, ENVIRONMENTAL_IMPACTOffset, 0);
}

static addAccessibilityInfra(builder:flatbuffers.Builder, ACCESSIBILITY_INFRAOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, ACCESSIBILITY_INFRAOffset, 0);
}

static addIntegratedDevices(builder:flatbuffers.Builder, INTEGRATED_DEVICESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, INTEGRATED_DEVICESOffset, 0);
}

static createIntegratedDevicesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startIntegratedDevicesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSIT(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): SITT {
  return new SITT(
    this.ID(),
    this.NAME(),
    this.ABBREVIATION(),
    this.SITE_TYPE(),
    this.CATCODE(),
    this.NETWORK(),
    this.LATITUDE(),
    this.LONGITUDE(),
    this.ALTITUDE(),
    (this.GEOMETRY() !== null ? this.GEOMETRY()!.unpack() : null),
    this.bb!.createScalarList<number>(this.CENTER_POINT_GEOMETRY.bind(this), this.centerPointGeometryLength()),
    this.CLASSIFICATION(),
    this.CTR_ID(),
    this.CREATED_BY(),
    this.DESCRIPTION(),
    this.MODEL_URL(),
    this.SOURCE(),
    this.TASKABLE(),
    this.OPERATIONAL_STATUS(),
    this.ESTABLISHMENT_DATE(),
    this.CONTACT_INFO(),
    this.ENVIRONMENTAL_IMPACT(),
    this.ACCESSIBILITY_INFRA(),
    this.bb!.createObjList<IDM, IDMT>(this.INTEGRATED_DEVICES.bind(this), this.integratedDevicesLength())
  );
}


unpackTo(_o: SITT): void {
  _o.ID = this.ID();
  _o.NAME = this.NAME();
  _o.ABBREVIATION = this.ABBREVIATION();
  _o.SITE_TYPE = this.SITE_TYPE();
  _o.CATCODE = this.CATCODE();
  _o.NETWORK = this.NETWORK();
  _o.LATITUDE = this.LATITUDE();
  _o.LONGITUDE = this.LONGITUDE();
  _o.ALTITUDE = this.ALTITUDE();
  _o.GEOMETRY = (this.GEOMETRY() !== null ? this.GEOMETRY()!.unpack() : null);
  _o.CENTER_POINT_GEOMETRY = this.bb!.createScalarList<number>(this.CENTER_POINT_GEOMETRY.bind(this), this.centerPointGeometryLength());
  _o.CLASSIFICATION = this.CLASSIFICATION();
  _o.CTR_ID = this.CTR_ID();
  _o.CREATED_BY = this.CREATED_BY();
  _o.DESCRIPTION = this.DESCRIPTION();
  _o.MODEL_URL = this.MODEL_URL();
  _o.SOURCE = this.SOURCE();
  _o.TASKABLE = this.TASKABLE();
  _o.OPERATIONAL_STATUS = this.OPERATIONAL_STATUS();
  _o.ESTABLISHMENT_DATE = this.ESTABLISHMENT_DATE();
  _o.CONTACT_INFO = this.CONTACT_INFO();
  _o.ENVIRONMENTAL_IMPACT = this.ENVIRONMENTAL_IMPACT();
  _o.ACCESSIBILITY_INFRA = this.ACCESSIBILITY_INFRA();
  _o.INTEGRATED_DEVICES = this.bb!.createObjList<IDM, IDMT>(this.INTEGRATED_DEVICES.bind(this), this.integratedDevicesLength());
}
}

export class SITT implements flatbuffers.IGeneratedObject {
constructor(
  public ID: string|Uint8Array|null = null,
  public NAME: string|Uint8Array|null = null,
  public ABBREVIATION: string|Uint8Array|null = null,
  public SITE_TYPE: SiteType = SiteType.LAUNCH_SITE,
  public CATCODE: string|Uint8Array|null = null,
  public NETWORK: string|Uint8Array|null = null,
  public LATITUDE: number = 0.0,
  public LONGITUDE: number = 0.0,
  public ALTITUDE: number = 0.0,
  public GEOMETRY: GeometryT|null = null,
  public CENTER_POINT_GEOMETRY: (number)[] = [],
  public CLASSIFICATION: string|Uint8Array|null = null,
  public CTR_ID: string|Uint8Array|null = null,
  public CREATED_BY: string|Uint8Array|null = null,
  public DESCRIPTION: string|Uint8Array|null = null,
  public MODEL_URL: string|Uint8Array|null = null,
  public SOURCE: string|Uint8Array|null = null,
  public TASKABLE: boolean = false,
  public OPERATIONAL_STATUS: string|Uint8Array|null = null,
  public ESTABLISHMENT_DATE: string|Uint8Array|null = null,
  public CONTACT_INFO: string|Uint8Array|null = null,
  public ENVIRONMENTAL_IMPACT: string|Uint8Array|null = null,
  public ACCESSIBILITY_INFRA: string|Uint8Array|null = null,
  public INTEGRATED_DEVICES: (IDMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const ID = (this.ID !== null ? builder.createString(this.ID!) : 0);
  const NAME = (this.NAME !== null ? builder.createString(this.NAME!) : 0);
  const ABBREVIATION = (this.ABBREVIATION !== null ? builder.createString(this.ABBREVIATION!) : 0);
  const CATCODE = (this.CATCODE !== null ? builder.createString(this.CATCODE!) : 0);
  const NETWORK = (this.NETWORK !== null ? builder.createString(this.NETWORK!) : 0);
  const GEOMETRY = (this.GEOMETRY !== null ? this.GEOMETRY!.pack(builder) : 0);
  const CENTER_POINT_GEOMETRY = SIT.createCenterPointGeometryVector(builder, this.CENTER_POINT_GEOMETRY);
  const CLASSIFICATION = (this.CLASSIFICATION !== null ? builder.createString(this.CLASSIFICATION!) : 0);
  const CTR_ID = (this.CTR_ID !== null ? builder.createString(this.CTR_ID!) : 0);
  const CREATED_BY = (this.CREATED_BY !== null ? builder.createString(this.CREATED_BY!) : 0);
  const DESCRIPTION = (this.DESCRIPTION !== null ? builder.createString(this.DESCRIPTION!) : 0);
  const MODEL_URL = (this.MODEL_URL !== null ? builder.createString(this.MODEL_URL!) : 0);
  const SOURCE = (this.SOURCE !== null ? builder.createString(this.SOURCE!) : 0);
  const OPERATIONAL_STATUS = (this.OPERATIONAL_STATUS !== null ? builder.createString(this.OPERATIONAL_STATUS!) : 0);
  const ESTABLISHMENT_DATE = (this.ESTABLISHMENT_DATE !== null ? builder.createString(this.ESTABLISHMENT_DATE!) : 0);
  const CONTACT_INFO = (this.CONTACT_INFO !== null ? builder.createString(this.CONTACT_INFO!) : 0);
  const ENVIRONMENTAL_IMPACT = (this.ENVIRONMENTAL_IMPACT !== null ? builder.createString(this.ENVIRONMENTAL_IMPACT!) : 0);
  const ACCESSIBILITY_INFRA = (this.ACCESSIBILITY_INFRA !== null ? builder.createString(this.ACCESSIBILITY_INFRA!) : 0);
  const INTEGRATED_DEVICES = SIT.createIntegratedDevicesVector(builder, builder.createObjectOffsetList(this.INTEGRATED_DEVICES));

  SIT.startSIT(builder);
  SIT.addId(builder, ID);
  SIT.addName(builder, NAME);
  SIT.addAbbreviation(builder, ABBREVIATION);
  SIT.addSiteType(builder, this.SITE_TYPE);
  SIT.addCatcode(builder, CATCODE);
  SIT.addNetwork(builder, NETWORK);
  SIT.addLatitude(builder, this.LATITUDE);
  SIT.addLongitude(builder, this.LONGITUDE);
  SIT.addAltitude(builder, this.ALTITUDE);
  SIT.addGeometry(builder, GEOMETRY);
  SIT.addCenterPointGeometry(builder, CENTER_POINT_GEOMETRY);
  SIT.addClassification(builder, CLASSIFICATION);
  SIT.addCtrId(builder, CTR_ID);
  SIT.addCreatedBy(builder, CREATED_BY);
  SIT.addDescription(builder, DESCRIPTION);
  SIT.addModelUrl(builder, MODEL_URL);
  SIT.addSource(builder, SOURCE);
  SIT.addTaskable(builder, this.TASKABLE);
  SIT.addOperationalStatus(builder, OPERATIONAL_STATUS);
  SIT.addEstablishmentDate(builder, ESTABLISHMENT_DATE);
  SIT.addContactInfo(builder, CONTACT_INFO);
  SIT.addEnvironmentalImpact(builder, ENVIRONMENTAL_IMPACT);
  SIT.addAccessibilityInfra(builder, ACCESSIBILITY_INFRA);
  SIT.addIntegratedDevices(builder, INTEGRATED_DEVICES);

  return SIT.endSIT(builder);
}
}