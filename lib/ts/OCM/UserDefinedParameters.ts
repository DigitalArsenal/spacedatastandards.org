// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class UserDefinedParameters implements flatbuffers.IUnpackableObject<UserDefinedParametersT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UserDefinedParameters {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUserDefinedParameters(bb:flatbuffers.ByteBuffer, obj?:UserDefinedParameters):UserDefinedParameters {
  return (obj || new UserDefinedParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUserDefinedParameters(bb:flatbuffers.ByteBuffer, obj?:UserDefinedParameters):UserDefinedParameters {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UserDefinedParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Name of the user-defined parameter.
 */
PARAM_NAME():string|null
PARAM_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PARAM_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Value of the user-defined parameter.
 */
PARAM_VALUE():string|null
PARAM_VALUE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PARAM_VALUE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startUserDefinedParameters(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addParamName(builder:flatbuffers.Builder, PARAM_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, PARAM_NAMEOffset, 0);
}

static addParamValue(builder:flatbuffers.Builder, PARAM_VALUEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, PARAM_VALUEOffset, 0);
}

static endUserDefinedParameters(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUserDefinedParameters(builder:flatbuffers.Builder, PARAM_NAMEOffset:flatbuffers.Offset, PARAM_VALUEOffset:flatbuffers.Offset):flatbuffers.Offset {
  UserDefinedParameters.startUserDefinedParameters(builder);
  UserDefinedParameters.addParamName(builder, PARAM_NAMEOffset);
  UserDefinedParameters.addParamValue(builder, PARAM_VALUEOffset);
  return UserDefinedParameters.endUserDefinedParameters(builder);
}

unpack(): UserDefinedParametersT {
  return new UserDefinedParametersT(
    this.PARAM_NAME(),
    this.PARAM_VALUE()
  );
}


unpackTo(_o: UserDefinedParametersT): void {
  _o.PARAM_NAME = this.PARAM_NAME();
  _o.PARAM_VALUE = this.PARAM_VALUE();
}
}

export class UserDefinedParametersT implements flatbuffers.IGeneratedObject {
constructor(
  public PARAM_NAME: string|Uint8Array|null = null,
  public PARAM_VALUE: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const PARAM_NAME = (this.PARAM_NAME !== null ? builder.createString(this.PARAM_NAME!) : 0);
  const PARAM_VALUE = (this.PARAM_VALUE !== null ? builder.createString(this.PARAM_VALUE!) : 0);

  return UserDefinedParameters.createUserDefinedParameters(builder,
    PARAM_NAME,
    PARAM_VALUE
  );
}
}
