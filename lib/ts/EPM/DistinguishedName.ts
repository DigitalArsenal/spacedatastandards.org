// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DNComponent, DNComponentT } from './DNComponent.js';


/**
 * Represents a Distinguished Name composed of DNComponents
 */
export class DistinguishedName implements flatbuffers.IUnpackableObject<DistinguishedNameT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DistinguishedName {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDistinguishedName(bb:flatbuffers.ByteBuffer, obj?:DistinguishedName):DistinguishedName {
  return (obj || new DistinguishedName()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDistinguishedName(bb:flatbuffers.ByteBuffer, obj?:DistinguishedName):DistinguishedName {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DistinguishedName()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * The sequence of components making up the DN
 */
COMPONENTS(index: number, obj?:DNComponent):DNComponent|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DNComponent()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

componentsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startDistinguishedName(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addComponents(builder:flatbuffers.Builder, COMPONENTSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, COMPONENTSOffset, 0);
}

static createComponentsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startComponentsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endDistinguishedName(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDistinguishedName(builder:flatbuffers.Builder, COMPONENTSOffset:flatbuffers.Offset):flatbuffers.Offset {
  DistinguishedName.startDistinguishedName(builder);
  DistinguishedName.addComponents(builder, COMPONENTSOffset);
  return DistinguishedName.endDistinguishedName(builder);
}

unpack(): DistinguishedNameT {
  return new DistinguishedNameT(
    this.bb!.createObjList<DNComponent, DNComponentT>(this.COMPONENTS.bind(this), this.componentsLength())
  );
}


unpackTo(_o: DistinguishedNameT): void {
  _o.COMPONENTS = this.bb!.createObjList<DNComponent, DNComponentT>(this.COMPONENTS.bind(this), this.componentsLength());
}
}

export class DistinguishedNameT implements flatbuffers.IGeneratedObject {
constructor(
  public COMPONENTS: (DNComponentT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const COMPONENTS = DistinguishedName.createComponentsVector(builder, builder.createObjectOffsetList(this.COMPONENTS));

  return DistinguishedName.createDistinguishedName(builder,
    COMPONENTS
  );
}
}