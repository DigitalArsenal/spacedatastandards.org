var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/flatbuffers/js/constants.js
var require_constants = __commonJS({
  "node_modules/flatbuffers/js/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SIZE_PREFIX_LENGTH = exports.FILE_IDENTIFIER_LENGTH = exports.SIZEOF_INT = exports.SIZEOF_SHORT = void 0;
    exports.SIZEOF_SHORT = 2;
    exports.SIZEOF_INT = 4;
    exports.FILE_IDENTIFIER_LENGTH = 4;
    exports.SIZE_PREFIX_LENGTH = 4;
  }
});

// node_modules/flatbuffers/js/utils.js
var require_utils = __commonJS({
  "node_modules/flatbuffers/js/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isLittleEndian = exports.float64 = exports.float32 = exports.int32 = void 0;
    exports.int32 = new Int32Array(2);
    exports.float32 = new Float32Array(exports.int32.buffer);
    exports.float64 = new Float64Array(exports.int32.buffer);
    exports.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
  }
});

// node_modules/flatbuffers/js/encoding.js
var require_encoding = __commonJS({
  "node_modules/flatbuffers/js/encoding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Encoding = void 0;
    var Encoding;
    (function(Encoding2) {
      Encoding2[Encoding2["UTF8_BYTES"] = 1] = "UTF8_BYTES";
      Encoding2[Encoding2["UTF16_STRING"] = 2] = "UTF16_STRING";
    })(Encoding || (exports.Encoding = Encoding = {}));
  }
});

// node_modules/flatbuffers/js/byte-buffer.js
var require_byte_buffer = __commonJS({
  "node_modules/flatbuffers/js/byte-buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ByteBuffer = void 0;
    var constants_js_1 = require_constants();
    var encoding_js_1 = require_encoding();
    var utils_js_1 = require_utils();
    var ByteBuffer = class _ByteBuffer {
      /**
       * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
       */
      constructor(bytes_) {
        this.bytes_ = bytes_;
        this.position_ = 0;
        this.text_decoder_ = new TextDecoder();
      }
      /**
       * Create and allocate a new ByteBuffer with a given size.
       */
      static allocate(byte_size) {
        return new _ByteBuffer(new Uint8Array(byte_size));
      }
      clear() {
        this.position_ = 0;
      }
      /**
       * Get the underlying `Uint8Array`.
       */
      bytes() {
        return this.bytes_;
      }
      /**
       * Get the buffer's position.
       */
      position() {
        return this.position_;
      }
      /**
       * Set the buffer's position.
       */
      setPosition(position) {
        this.position_ = position;
      }
      /**
       * Get the buffer's capacity.
       */
      capacity() {
        return this.bytes_.length;
      }
      readInt8(offset) {
        return this.readUint8(offset) << 24 >> 24;
      }
      readUint8(offset) {
        return this.bytes_[offset];
      }
      readInt16(offset) {
        return this.readUint16(offset) << 16 >> 16;
      }
      readUint16(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
      }
      readInt32(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
      }
      readUint32(offset) {
        return this.readInt32(offset) >>> 0;
      }
      readInt64(offset) {
        return BigInt.asIntN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
      }
      readUint64(offset) {
        return BigInt.asUintN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
      }
      readFloat32(offset) {
        utils_js_1.int32[0] = this.readInt32(offset);
        return utils_js_1.float32[0];
      }
      readFloat64(offset) {
        utils_js_1.int32[utils_js_1.isLittleEndian ? 0 : 1] = this.readInt32(offset);
        utils_js_1.int32[utils_js_1.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
        return utils_js_1.float64[0];
      }
      writeInt8(offset, value) {
        this.bytes_[offset] = value;
      }
      writeUint8(offset, value) {
        this.bytes_[offset] = value;
      }
      writeInt16(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
      }
      writeUint16(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
      }
      writeInt32(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
      }
      writeUint32(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
      }
      writeInt64(offset, value) {
        this.writeInt32(offset, Number(BigInt.asIntN(32, value)));
        this.writeInt32(offset + 4, Number(BigInt.asIntN(32, value >> BigInt(32))));
      }
      writeUint64(offset, value) {
        this.writeUint32(offset, Number(BigInt.asUintN(32, value)));
        this.writeUint32(offset + 4, Number(BigInt.asUintN(32, value >> BigInt(32))));
      }
      writeFloat32(offset, value) {
        utils_js_1.float32[0] = value;
        this.writeInt32(offset, utils_js_1.int32[0]);
      }
      writeFloat64(offset, value) {
        utils_js_1.float64[0] = value;
        this.writeInt32(offset, utils_js_1.int32[utils_js_1.isLittleEndian ? 0 : 1]);
        this.writeInt32(offset + 4, utils_js_1.int32[utils_js_1.isLittleEndian ? 1 : 0]);
      }
      /**
       * Return the file identifier.   Behavior is undefined for FlatBuffers whose
       * schema does not include a file_identifier (likely points at padding or the
       * start of a the root vtable).
       */
      getBufferIdentifier() {
        if (this.bytes_.length < this.position_ + constants_js_1.SIZEOF_INT + constants_js_1.FILE_IDENTIFIER_LENGTH) {
          throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
        }
        let result = "";
        for (let i = 0; i < constants_js_1.FILE_IDENTIFIER_LENGTH; i++) {
          result += String.fromCharCode(this.readInt8(this.position_ + constants_js_1.SIZEOF_INT + i));
        }
        return result;
      }
      /**
       * Look up a field in the vtable, return an offset into the object, or 0 if the
       * field is not present.
       */
      __offset(bb_pos, vtable_offset) {
        const vtable = bb_pos - this.readInt32(bb_pos);
        return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
      }
      /**
       * Initialize any Table-derived type to point to the union at the given offset.
       */
      __union(t, offset) {
        t.bb_pos = offset + this.readInt32(offset);
        t.bb = this;
        return t;
      }
      /**
       * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
       * This allocates a new string and converts to wide chars upon each access.
       *
       * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
       * "optionalEncoding" argument. This is useful for avoiding conversion when
       * the data will just be packaged back up in another FlatBuffer later on.
       *
       * @param offset
       * @param opt_encoding Defaults to UTF16_STRING
       */
      __string(offset, opt_encoding) {
        offset += this.readInt32(offset);
        const length = this.readInt32(offset);
        offset += constants_js_1.SIZEOF_INT;
        const utf8bytes = this.bytes_.subarray(offset, offset + length);
        if (opt_encoding === encoding_js_1.Encoding.UTF8_BYTES)
          return utf8bytes;
        else
          return this.text_decoder_.decode(utf8bytes);
      }
      /**
       * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
       * if a string then return a new one
       *
       * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
       * makes the behaviour of __union_with_string different compared to __union
       */
      __union_with_string(o, offset) {
        if (typeof o === "string") {
          return this.__string(offset);
        }
        return this.__union(o, offset);
      }
      /**
       * Retrieve the relative offset stored at "offset"
       */
      __indirect(offset) {
        return offset + this.readInt32(offset);
      }
      /**
       * Get the start of data of a vector whose offset is stored at "offset" in this object.
       */
      __vector(offset) {
        return offset + this.readInt32(offset) + constants_js_1.SIZEOF_INT;
      }
      /**
       * Get the length of a vector whose offset is stored at "offset" in this object.
       */
      __vector_len(offset) {
        return this.readInt32(offset + this.readInt32(offset));
      }
      __has_identifier(ident) {
        if (ident.length != constants_js_1.FILE_IDENTIFIER_LENGTH) {
          throw new Error("FlatBuffers: file identifier must be length " + constants_js_1.FILE_IDENTIFIER_LENGTH);
        }
        for (let i = 0; i < constants_js_1.FILE_IDENTIFIER_LENGTH; i++) {
          if (ident.charCodeAt(i) != this.readInt8(this.position() + constants_js_1.SIZEOF_INT + i)) {
            return false;
          }
        }
        return true;
      }
      /**
       * A helper function for generating list for obj api
       */
      createScalarList(listAccessor, listLength) {
        const ret = [];
        for (let i = 0; i < listLength; ++i) {
          const val = listAccessor(i);
          if (val !== null) {
            ret.push(val);
          }
        }
        return ret;
      }
      /**
       * A helper function for generating list for obj api
       * @param listAccessor function that accepts an index and return data at that index
       * @param listLength listLength
       * @param res result list
       */
      createObjList(listAccessor, listLength) {
        const ret = [];
        for (let i = 0; i < listLength; ++i) {
          const val = listAccessor(i);
          if (val !== null) {
            ret.push(val.unpack());
          }
        }
        return ret;
      }
    };
    exports.ByteBuffer = ByteBuffer;
  }
});

// node_modules/flatbuffers/js/builder.js
var require_builder = __commonJS({
  "node_modules/flatbuffers/js/builder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Builder = void 0;
    var byte_buffer_js_1 = require_byte_buffer();
    var constants_js_1 = require_constants();
    var Builder = class _Builder {
      /**
       * Create a FlatBufferBuilder.
       */
      constructor(opt_initial_size) {
        this.minalign = 1;
        this.vtable = null;
        this.vtable_in_use = 0;
        this.isNested = false;
        this.object_start = 0;
        this.vtables = [];
        this.vector_num_elems = 0;
        this.force_defaults = false;
        this.string_maps = null;
        this.text_encoder = new TextEncoder();
        let initial_size;
        if (!opt_initial_size) {
          initial_size = 1024;
        } else {
          initial_size = opt_initial_size;
        }
        this.bb = byte_buffer_js_1.ByteBuffer.allocate(initial_size);
        this.space = initial_size;
      }
      clear() {
        this.bb.clear();
        this.space = this.bb.capacity();
        this.minalign = 1;
        this.vtable = null;
        this.vtable_in_use = 0;
        this.isNested = false;
        this.object_start = 0;
        this.vtables = [];
        this.vector_num_elems = 0;
        this.force_defaults = false;
        this.string_maps = null;
      }
      /**
       * In order to save space, fields that are set to their default value
       * don't get serialized into the buffer. Forcing defaults provides a
       * way to manually disable this optimization.
       *
       * @param forceDefaults true always serializes default values
       */
      forceDefaults(forceDefaults) {
        this.force_defaults = forceDefaults;
      }
      /**
       * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
       * called finish(). The actual data starts at the ByteBuffer's current position,
       * not necessarily at 0.
       */
      dataBuffer() {
        return this.bb;
      }
      /**
       * Get the bytes representing the FlatBuffer. Only call this after you've
       * called finish().
       */
      asUint8Array() {
        return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
      }
      /**
       * Prepare to write an element of `size` after `additional_bytes` have been
       * written, e.g. if you write a string, you need to align such the int length
       * field is aligned to 4 bytes, and the string data follows it directly. If all
       * you need to do is alignment, `additional_bytes` will be 0.
       *
       * @param size This is the of the new element to write
       * @param additional_bytes The padding size
       */
      prep(size, additional_bytes) {
        if (size > this.minalign) {
          this.minalign = size;
        }
        const align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
        while (this.space < align_size + size + additional_bytes) {
          const old_buf_size = this.bb.capacity();
          this.bb = _Builder.growByteBuffer(this.bb);
          this.space += this.bb.capacity() - old_buf_size;
        }
        this.pad(align_size);
      }
      pad(byte_size) {
        for (let i = 0; i < byte_size; i++) {
          this.bb.writeInt8(--this.space, 0);
        }
      }
      writeInt8(value) {
        this.bb.writeInt8(this.space -= 1, value);
      }
      writeInt16(value) {
        this.bb.writeInt16(this.space -= 2, value);
      }
      writeInt32(value) {
        this.bb.writeInt32(this.space -= 4, value);
      }
      writeInt64(value) {
        this.bb.writeInt64(this.space -= 8, value);
      }
      writeFloat32(value) {
        this.bb.writeFloat32(this.space -= 4, value);
      }
      writeFloat64(value) {
        this.bb.writeFloat64(this.space -= 8, value);
      }
      /**
       * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `int8` to add the buffer.
       */
      addInt8(value) {
        this.prep(1, 0);
        this.writeInt8(value);
      }
      /**
       * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `int16` to add the buffer.
       */
      addInt16(value) {
        this.prep(2, 0);
        this.writeInt16(value);
      }
      /**
       * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `int32` to add the buffer.
       */
      addInt32(value) {
        this.prep(4, 0);
        this.writeInt32(value);
      }
      /**
       * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `int64` to add the buffer.
       */
      addInt64(value) {
        this.prep(8, 0);
        this.writeInt64(value);
      }
      /**
       * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `float32` to add the buffer.
       */
      addFloat32(value) {
        this.prep(4, 0);
        this.writeFloat32(value);
      }
      /**
       * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
       * @param value The `float64` to add the buffer.
       */
      addFloat64(value) {
        this.prep(8, 0);
        this.writeFloat64(value);
      }
      addFieldInt8(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt8(value);
          this.slot(voffset);
        }
      }
      addFieldInt16(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt16(value);
          this.slot(voffset);
        }
      }
      addFieldInt32(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt32(value);
          this.slot(voffset);
        }
      }
      addFieldInt64(voffset, value, defaultValue) {
        if (this.force_defaults || value !== defaultValue) {
          this.addInt64(value);
          this.slot(voffset);
        }
      }
      addFieldFloat32(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addFloat32(value);
          this.slot(voffset);
        }
      }
      addFieldFloat64(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addFloat64(value);
          this.slot(voffset);
        }
      }
      addFieldOffset(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addOffset(value);
          this.slot(voffset);
        }
      }
      /**
       * Structs are stored inline, so nothing additional is being added. `d` is always 0.
       */
      addFieldStruct(voffset, value, defaultValue) {
        if (value != defaultValue) {
          this.nested(value);
          this.slot(voffset);
        }
      }
      /**
       * Structures are always stored inline, they need to be created right
       * where they're used.  You'll get this assertion failure if you
       * created it elsewhere.
       */
      nested(obj) {
        if (obj != this.offset()) {
          throw new TypeError("FlatBuffers: struct must be serialized inline.");
        }
      }
      /**
       * Should not be creating any other object, string or vector
       * while an object is being constructed
       */
      notNested() {
        if (this.isNested) {
          throw new TypeError("FlatBuffers: object serialization must not be nested.");
        }
      }
      /**
       * Set the current vtable at `voffset` to the current location in the buffer.
       */
      slot(voffset) {
        if (this.vtable !== null)
          this.vtable[voffset] = this.offset();
      }
      /**
       * @returns Offset relative to the end of the buffer.
       */
      offset() {
        return this.bb.capacity() - this.space;
      }
      /**
       * Doubles the size of the backing ByteBuffer and copies the old data towards
       * the end of the new buffer (since we build the buffer backwards).
       *
       * @param bb The current buffer with the existing data
       * @returns A new byte buffer with the old data copied
       * to it. The data is located at the end of the buffer.
       *
       * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
       * it a uint8Array we need to suppress the type check:
       * @suppress {checkTypes}
       */
      static growByteBuffer(bb) {
        const old_buf_size = bb.capacity();
        if (old_buf_size & 3221225472) {
          throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
        }
        const new_buf_size = old_buf_size << 1;
        const nbb = byte_buffer_js_1.ByteBuffer.allocate(new_buf_size);
        nbb.setPosition(new_buf_size - old_buf_size);
        nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
        return nbb;
      }
      /**
       * Adds on offset, relative to where it will be written.
       *
       * @param offset The offset to add.
       */
      addOffset(offset) {
        this.prep(constants_js_1.SIZEOF_INT, 0);
        this.writeInt32(this.offset() - offset + constants_js_1.SIZEOF_INT);
      }
      /**
       * Start encoding a new object in the buffer.  Users will not usually need to
       * call this directly. The FlatBuffers compiler will generate helper methods
       * that call this method internally.
       */
      startObject(numfields) {
        this.notNested();
        if (this.vtable == null) {
          this.vtable = [];
        }
        this.vtable_in_use = numfields;
        for (let i = 0; i < numfields; i++) {
          this.vtable[i] = 0;
        }
        this.isNested = true;
        this.object_start = this.offset();
      }
      /**
       * Finish off writing the object that is under construction.
       *
       * @returns The offset to the object inside `dataBuffer`
       */
      endObject() {
        if (this.vtable == null || !this.isNested) {
          throw new Error("FlatBuffers: endObject called without startObject");
        }
        this.addInt32(0);
        const vtableloc = this.offset();
        let i = this.vtable_in_use - 1;
        for (; i >= 0 && this.vtable[i] == 0; i--) {
        }
        const trimmed_size = i + 1;
        for (; i >= 0; i--) {
          this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
        }
        const standard_fields = 2;
        this.addInt16(vtableloc - this.object_start);
        const len = (trimmed_size + standard_fields) * constants_js_1.SIZEOF_SHORT;
        this.addInt16(len);
        let existing_vtable = 0;
        const vt1 = this.space;
        outer_loop:
          for (i = 0; i < this.vtables.length; i++) {
            const vt2 = this.bb.capacity() - this.vtables[i];
            if (len == this.bb.readInt16(vt2)) {
              for (let j = constants_js_1.SIZEOF_SHORT; j < len; j += constants_js_1.SIZEOF_SHORT) {
                if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
                  continue outer_loop;
                }
              }
              existing_vtable = this.vtables[i];
              break;
            }
          }
        if (existing_vtable) {
          this.space = this.bb.capacity() - vtableloc;
          this.bb.writeInt32(this.space, existing_vtable - vtableloc);
        } else {
          this.vtables.push(this.offset());
          this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
        }
        this.isNested = false;
        return vtableloc;
      }
      /**
       * Finalize a buffer, poiting to the given `root_table`.
       */
      finish(root_table, opt_file_identifier, opt_size_prefix) {
        const size_prefix = opt_size_prefix ? constants_js_1.SIZE_PREFIX_LENGTH : 0;
        if (opt_file_identifier) {
          const file_identifier = opt_file_identifier;
          this.prep(this.minalign, constants_js_1.SIZEOF_INT + constants_js_1.FILE_IDENTIFIER_LENGTH + size_prefix);
          if (file_identifier.length != constants_js_1.FILE_IDENTIFIER_LENGTH) {
            throw new TypeError("FlatBuffers: file identifier must be length " + constants_js_1.FILE_IDENTIFIER_LENGTH);
          }
          for (let i = constants_js_1.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
            this.writeInt8(file_identifier.charCodeAt(i));
          }
        }
        this.prep(this.minalign, constants_js_1.SIZEOF_INT + size_prefix);
        this.addOffset(root_table);
        if (size_prefix) {
          this.addInt32(this.bb.capacity() - this.space);
        }
        this.bb.setPosition(this.space);
      }
      /**
       * Finalize a size prefixed buffer, pointing to the given `root_table`.
       */
      finishSizePrefixed(root_table, opt_file_identifier) {
        this.finish(root_table, opt_file_identifier, true);
      }
      /**
       * This checks a required field has been set in a given table that has
       * just been constructed.
       */
      requiredField(table, field) {
        const table_start = this.bb.capacity() - table;
        const vtable_start = table_start - this.bb.readInt32(table_start);
        const ok = field < this.bb.readInt16(vtable_start) && this.bb.readInt16(vtable_start + field) != 0;
        if (!ok) {
          throw new TypeError("FlatBuffers: field " + field + " must be set");
        }
      }
      /**
       * Start a new array/vector of objects.  Users usually will not call
       * this directly. The FlatBuffers compiler will create a start/end
       * method for vector types in generated code.
       *
       * @param elem_size The size of each element in the array
       * @param num_elems The number of elements in the array
       * @param alignment The alignment of the array
       */
      startVector(elem_size, num_elems, alignment) {
        this.notNested();
        this.vector_num_elems = num_elems;
        this.prep(constants_js_1.SIZEOF_INT, elem_size * num_elems);
        this.prep(alignment, elem_size * num_elems);
      }
      /**
       * Finish off the creation of an array and all its elements. The array must be
       * created with `startVector`.
       *
       * @returns The offset at which the newly created array
       * starts.
       */
      endVector() {
        this.writeInt32(this.vector_num_elems);
        return this.offset();
      }
      /**
       * Encode the string `s` in the buffer using UTF-8. If the string passed has
       * already been seen, we return the offset of the already written string
       *
       * @param s The string to encode
       * @return The offset in the buffer where the encoded string starts
       */
      createSharedString(s) {
        if (!s) {
          return 0;
        }
        if (!this.string_maps) {
          this.string_maps = /* @__PURE__ */ new Map();
        }
        if (this.string_maps.has(s)) {
          return this.string_maps.get(s);
        }
        const offset = this.createString(s);
        this.string_maps.set(s, offset);
        return offset;
      }
      /**
       * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
       * instead of a string, it is assumed to contain valid UTF-8 encoded data.
       *
       * @param s The string to encode
       * @return The offset in the buffer where the encoded string starts
       */
      createString(s) {
        if (s === null || s === void 0) {
          return 0;
        }
        let utf8;
        if (s instanceof Uint8Array) {
          utf8 = s;
        } else {
          utf8 = this.text_encoder.encode(s);
        }
        this.addInt8(0);
        this.startVector(1, utf8.length, 1);
        this.bb.setPosition(this.space -= utf8.length);
        this.bb.bytes().set(utf8, this.space);
        return this.endVector();
      }
      /**
       * Create a byte vector.
       *
       * @param v The bytes to add
       * @returns The offset in the buffer where the byte vector starts
       */
      createByteVector(v) {
        if (v === null || v === void 0) {
          return 0;
        }
        this.startVector(1, v.length, 1);
        this.bb.setPosition(this.space -= v.length);
        this.bb.bytes().set(v, this.space);
        return this.endVector();
      }
      /**
       * A helper function to pack an object
       *
       * @returns offset of obj
       */
      createObjectOffset(obj) {
        if (obj === null) {
          return 0;
        }
        if (typeof obj === "string") {
          return this.createString(obj);
        } else {
          return obj.pack(this);
        }
      }
      /**
       * A helper function to pack a list of object
       *
       * @returns list of offsets of each non null object
       */
      createObjectOffsetList(list) {
        const ret = [];
        for (let i = 0; i < list.length; ++i) {
          const val = list[i];
          if (val !== null) {
            ret.push(this.createObjectOffset(val));
          } else {
            throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
          }
        }
        return ret;
      }
      createStructOffsetList(list, startFunc) {
        startFunc(this, list.length);
        this.createObjectOffsetList(list.slice().reverse());
        return this.endVector();
      }
    };
    exports.Builder = Builder;
  }
});

// node_modules/flatbuffers/js/flatbuffers.js
var require_flatbuffers = __commonJS({
  "node_modules/flatbuffers/js/flatbuffers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Encoding = exports.ByteBuffer = exports.Builder = exports.isLittleEndian = exports.int32 = exports.float64 = exports.float32 = exports.SIZE_PREFIX_LENGTH = exports.SIZEOF_SHORT = exports.SIZEOF_INT = exports.FILE_IDENTIFIER_LENGTH = void 0;
    var constants_js_1 = require_constants();
    Object.defineProperty(exports, "FILE_IDENTIFIER_LENGTH", { enumerable: true, get: function() {
      return constants_js_1.FILE_IDENTIFIER_LENGTH;
    } });
    Object.defineProperty(exports, "SIZEOF_INT", { enumerable: true, get: function() {
      return constants_js_1.SIZEOF_INT;
    } });
    Object.defineProperty(exports, "SIZEOF_SHORT", { enumerable: true, get: function() {
      return constants_js_1.SIZEOF_SHORT;
    } });
    Object.defineProperty(exports, "SIZE_PREFIX_LENGTH", { enumerable: true, get: function() {
      return constants_js_1.SIZE_PREFIX_LENGTH;
    } });
    var utils_js_1 = require_utils();
    Object.defineProperty(exports, "float32", { enumerable: true, get: function() {
      return utils_js_1.float32;
    } });
    Object.defineProperty(exports, "float64", { enumerable: true, get: function() {
      return utils_js_1.float64;
    } });
    Object.defineProperty(exports, "int32", { enumerable: true, get: function() {
      return utils_js_1.int32;
    } });
    Object.defineProperty(exports, "isLittleEndian", { enumerable: true, get: function() {
      return utils_js_1.isLittleEndian;
    } });
    var builder_js_1 = require_builder();
    Object.defineProperty(exports, "Builder", { enumerable: true, get: function() {
      return builder_js_1.Builder;
    } });
    var byte_buffer_js_1 = require_byte_buffer();
    Object.defineProperty(exports, "ByteBuffer", { enumerable: true, get: function() {
      return byte_buffer_js_1.ByteBuffer;
    } });
    var encoding_js_1 = require_encoding();
    Object.defineProperty(exports, "Encoding", { enumerable: true, get: function() {
      return encoding_js_1.Encoding;
    } });
  }
});

// lib/ts/DPM/covarianceCalibration.ts
var covarianceCalibration = /* @__PURE__ */ ((covarianceCalibration2) => {
  covarianceCalibration2[covarianceCalibration2["Unspecified"] = 0] = "Unspecified";
  covarianceCalibration2[covarianceCalibration2["Uncalibrated"] = 1] = "Uncalibrated";
  covarianceCalibration2[covarianceCalibration2["Calibrated"] = 2] = "Calibrated";
  return covarianceCalibration2;
})(covarianceCalibration || {});

// lib/ts/DPM/covarianceRule.ts
var covarianceRule = /* @__PURE__ */ ((covarianceRule2) => {
  covarianceRule2[covarianceRule2["Unspecified"] = 0] = "Unspecified";
  covarianceRule2[covarianceRule2["Operator"] = 1] = "Operator";
  covarianceRule2[covarianceRule2["ScaledFit"] = 2] = "ScaledFit";
  covarianceRule2[covarianceRule2["SourceModel"] = 3] = "SourceModel";
  covarianceRule2[covarianceRule2["PooledModel"] = 4] = "PooledModel";
  covarianceRule2[covarianceRule2["EmpiricalHistoryShrunk"] = 5] = "EmpiricalHistoryShrunk";
  return covarianceRule2;
})(covarianceRule || {});

// lib/ts/DPM/CVR.ts
var flatbuffers = __toESM(require_flatbuffers(), 1);
var CVR = class _CVR {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsCVR(bb, obj) {
    return (obj || new _CVR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsCVR(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new _CVR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$CVR");
  }
  /**
   * The rule that produced the covariance. In a CCSDS covariance block,
   * Operator keeps the operator's COV_BASIS, ScaledFit is DETERMINED, and
   * SourceModel, PooledModel and EmpiricalHistoryShrunk are EMPIRICAL with
   * MODEL_ID as COV_BASIS_ID.
   */
  RULE() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unspecified */;
  }
  MODEL_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  REGIME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Age of the element set at the covariance's epoch, in days. NaN when the
   * covariance is not an element set's.
   */
  AGE_DAYS() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Prediction horizon of the cell, in days: the element-set age its
   * statistics were measured at. NaN when no cell applies.
   */
  HORIZON_DAYS() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  MEASURED_LINEAGE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  TEST_WINDOW(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Mean of d2/3 over the held-out samples. NaN when not measured.
   */
  MEAN_D2_OVER_3() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Share of the held-out samples inside the 95 % region, 0 to 1. NaN when
   * not measured.
   */
  COVERAGE_95() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Number of held-out samples the test used.
   */
  SAMPLES() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * Number of distinct objects the samples came from.
   */
  OBJECTS() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * Factor the covariance was multiplied by to make it realistic. NaN when
   * none was applied.
   */
  SCALE_FACTOR() {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * The verdict. Calibrated when MEAN_D2_OVER_3 lies in [0.8, 1.25] and
   * COVERAGE_95 in [0.93, 0.97], from at least 30 samples of at least 3
   * objects of MEASURED_LINEAGE; Uncalibrated otherwise, including a cell
   * never measured.
   */
  CALIBRATION() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unspecified */;
  }
  EVIDENCE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Number of retained older/newer element-set residual pairs from this
   * object in the age bin containing AGE_DAYS, after rejection/clipping.
   * Zero means no retained pairs; never the held-out test count SAMPLES.
   */
  HISTORY_SAMPLES() {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * Number of distinct older element sets contributing HISTORY_SAMPLES.
   * Zero means none; never the distinct calibration-object count OBJECTS.
   */
  HISTORY_SETS() {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  HISTORY_WINDOW(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 36);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Dimensionless population-prior fraction alpha in the covariance blend
   * P = (1-alpha) H + alpha P_prior, where H is the history error second
   * moment and P_prior includes the population model's realism scaling.
   * Range [0,1]: 0 is all history, 1 is all prior; NaN when not applicable
   * or unknown. For interpolation across bins, report the correspondingly
   * interpolated alpha. EVIDENCE must identify the estimator/configuration,
   * retained-count bin, participating bins and their weights so the blend
   * can be reconstructed; the scalar alone does not describe that mixture.
   * This is not SCALE_FACTOR, which multiplies a covariance. History-only
   * evidence leaves CALIBRATION Uncalibrated and test statistics unmeasured.
   */
  SHRINKAGE_WEIGHT() {
    const offset = this.bb.__offset(this.bb_pos, 38);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Distinct truth epochs among the SAMPLES: predictions that share one truth
   * state count once here. 0 when not stated.
   */
  TRUTH_EPOCHS() {
    const offset = this.bb.__offset(this.bb_pos, 40);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * Share of the held-out samples whose error lies inside the 1-sigma band of
   * the first, second and third axis of the covariance's frame (radial,
   * in-track and cross-track for an RTN or curvilinear covariance), 0 to 1;
   * nominal 0.6827 for Gaussian errors. NaN when not measured.
   */
  COVERAGE_1_SIGMA_AXIS1() {
    const offset = this.bb.__offset(this.bb_pos, 42);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  COVERAGE_1_SIGMA_AXIS2() {
    const offset = this.bb.__offset(this.bb_pos, 44);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  COVERAGE_1_SIGMA_AXIS3() {
    const offset = this.bb.__offset(this.bb_pos, 46);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * As COVERAGE_1_SIGMA_AXISn for the 3-sigma band; nominal 0.9973.
   */
  COVERAGE_3_SIGMA_AXIS1() {
    const offset = this.bb.__offset(this.bb_pos, 48);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  COVERAGE_3_SIGMA_AXIS2() {
    const offset = this.bb.__offset(this.bb_pos, 50);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  COVERAGE_3_SIGMA_AXIS3() {
    const offset = this.bb.__offset(this.bb_pos, 52);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  static startCVR(builder) {
    builder.startObject(25);
  }
  static addRule(builder, RULE) {
    builder.addFieldInt8(0, RULE, 0 /* Unspecified */);
  }
  static addModelId(builder, MODEL_IDOffset) {
    builder.addFieldOffset(1, MODEL_IDOffset, 0);
  }
  static addRegime(builder, REGIMEOffset) {
    builder.addFieldOffset(2, REGIMEOffset, 0);
  }
  static addAgeDays(builder, AGE_DAYS) {
    builder.addFieldFloat64(3, AGE_DAYS, NaN);
  }
  static addHorizonDays(builder, HORIZON_DAYS) {
    builder.addFieldFloat64(4, HORIZON_DAYS, NaN);
  }
  static addMeasuredLineage(builder, MEASURED_LINEAGEOffset) {
    builder.addFieldOffset(5, MEASURED_LINEAGEOffset, 0);
  }
  static addTestWindow(builder, TEST_WINDOWOffset) {
    builder.addFieldOffset(6, TEST_WINDOWOffset, 0);
  }
  static addMeanD2Over3(builder, MEAN_D2_OVER_3) {
    builder.addFieldFloat64(7, MEAN_D2_OVER_3, NaN);
  }
  static addCoverage95(builder, COVERAGE_95) {
    builder.addFieldFloat64(8, COVERAGE_95, NaN);
  }
  static addSamples(builder, SAMPLES) {
    builder.addFieldInt32(9, SAMPLES, 0);
  }
  static addObjects(builder, OBJECTS) {
    builder.addFieldInt32(10, OBJECTS, 0);
  }
  static addScaleFactor(builder, SCALE_FACTOR) {
    builder.addFieldFloat64(11, SCALE_FACTOR, NaN);
  }
  static addCalibration(builder, CALIBRATION) {
    builder.addFieldInt8(12, CALIBRATION, 0 /* Unspecified */);
  }
  static addEvidence(builder, EVIDENCEOffset) {
    builder.addFieldOffset(13, EVIDENCEOffset, 0);
  }
  static addHistorySamples(builder, HISTORY_SAMPLES) {
    builder.addFieldInt32(14, HISTORY_SAMPLES, 0);
  }
  static addHistorySets(builder, HISTORY_SETS) {
    builder.addFieldInt32(15, HISTORY_SETS, 0);
  }
  static addHistoryWindow(builder, HISTORY_WINDOWOffset) {
    builder.addFieldOffset(16, HISTORY_WINDOWOffset, 0);
  }
  static addShrinkageWeight(builder, SHRINKAGE_WEIGHT) {
    builder.addFieldFloat64(17, SHRINKAGE_WEIGHT, NaN);
  }
  static addTruthEpochs(builder, TRUTH_EPOCHS) {
    builder.addFieldInt32(18, TRUTH_EPOCHS, 0);
  }
  static addCoverage1SigmaAxis1(builder, COVERAGE_1_SIGMA_AXIS1) {
    builder.addFieldFloat64(19, COVERAGE_1_SIGMA_AXIS1, NaN);
  }
  static addCoverage1SigmaAxis2(builder, COVERAGE_1_SIGMA_AXIS2) {
    builder.addFieldFloat64(20, COVERAGE_1_SIGMA_AXIS2, NaN);
  }
  static addCoverage1SigmaAxis3(builder, COVERAGE_1_SIGMA_AXIS3) {
    builder.addFieldFloat64(21, COVERAGE_1_SIGMA_AXIS3, NaN);
  }
  static addCoverage3SigmaAxis1(builder, COVERAGE_3_SIGMA_AXIS1) {
    builder.addFieldFloat64(22, COVERAGE_3_SIGMA_AXIS1, NaN);
  }
  static addCoverage3SigmaAxis2(builder, COVERAGE_3_SIGMA_AXIS2) {
    builder.addFieldFloat64(23, COVERAGE_3_SIGMA_AXIS2, NaN);
  }
  static addCoverage3SigmaAxis3(builder, COVERAGE_3_SIGMA_AXIS3) {
    builder.addFieldFloat64(24, COVERAGE_3_SIGMA_AXIS3, NaN);
  }
  static endCVR(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishCVRBuffer(builder, offset) {
    builder.finish(offset, "$CVR");
  }
  static finishSizePrefixedCVRBuffer(builder, offset) {
    builder.finish(offset, "$CVR", true);
  }
  static createCVR(builder, RULE, MODEL_IDOffset, REGIMEOffset, AGE_DAYS, HORIZON_DAYS, MEASURED_LINEAGEOffset, TEST_WINDOWOffset, MEAN_D2_OVER_3, COVERAGE_95, SAMPLES, OBJECTS, SCALE_FACTOR, CALIBRATION, EVIDENCEOffset, HISTORY_SAMPLES, HISTORY_SETS, HISTORY_WINDOWOffset, SHRINKAGE_WEIGHT, TRUTH_EPOCHS, COVERAGE_1_SIGMA_AXIS1, COVERAGE_1_SIGMA_AXIS2, COVERAGE_1_SIGMA_AXIS3, COVERAGE_3_SIGMA_AXIS1, COVERAGE_3_SIGMA_AXIS2, COVERAGE_3_SIGMA_AXIS3) {
    _CVR.startCVR(builder);
    _CVR.addRule(builder, RULE);
    _CVR.addModelId(builder, MODEL_IDOffset);
    _CVR.addRegime(builder, REGIMEOffset);
    _CVR.addAgeDays(builder, AGE_DAYS);
    _CVR.addHorizonDays(builder, HORIZON_DAYS);
    _CVR.addMeasuredLineage(builder, MEASURED_LINEAGEOffset);
    _CVR.addTestWindow(builder, TEST_WINDOWOffset);
    _CVR.addMeanD2Over3(builder, MEAN_D2_OVER_3);
    _CVR.addCoverage95(builder, COVERAGE_95);
    _CVR.addSamples(builder, SAMPLES);
    _CVR.addObjects(builder, OBJECTS);
    _CVR.addScaleFactor(builder, SCALE_FACTOR);
    _CVR.addCalibration(builder, CALIBRATION);
    _CVR.addEvidence(builder, EVIDENCEOffset);
    _CVR.addHistorySamples(builder, HISTORY_SAMPLES);
    _CVR.addHistorySets(builder, HISTORY_SETS);
    _CVR.addHistoryWindow(builder, HISTORY_WINDOWOffset);
    _CVR.addShrinkageWeight(builder, SHRINKAGE_WEIGHT);
    _CVR.addTruthEpochs(builder, TRUTH_EPOCHS);
    _CVR.addCoverage1SigmaAxis1(builder, COVERAGE_1_SIGMA_AXIS1);
    _CVR.addCoverage1SigmaAxis2(builder, COVERAGE_1_SIGMA_AXIS2);
    _CVR.addCoverage1SigmaAxis3(builder, COVERAGE_1_SIGMA_AXIS3);
    _CVR.addCoverage3SigmaAxis1(builder, COVERAGE_3_SIGMA_AXIS1);
    _CVR.addCoverage3SigmaAxis2(builder, COVERAGE_3_SIGMA_AXIS2);
    _CVR.addCoverage3SigmaAxis3(builder, COVERAGE_3_SIGMA_AXIS3);
    return _CVR.endCVR(builder);
  }
  unpack() {
    return new CVRT(
      this.RULE(),
      this.MODEL_ID(),
      this.REGIME(),
      this.AGE_DAYS(),
      this.HORIZON_DAYS(),
      this.MEASURED_LINEAGE(),
      this.TEST_WINDOW(),
      this.MEAN_D2_OVER_3(),
      this.COVERAGE_95(),
      this.SAMPLES(),
      this.OBJECTS(),
      this.SCALE_FACTOR(),
      this.CALIBRATION(),
      this.EVIDENCE(),
      this.HISTORY_SAMPLES(),
      this.HISTORY_SETS(),
      this.HISTORY_WINDOW(),
      this.SHRINKAGE_WEIGHT(),
      this.TRUTH_EPOCHS(),
      this.COVERAGE_1_SIGMA_AXIS1(),
      this.COVERAGE_1_SIGMA_AXIS2(),
      this.COVERAGE_1_SIGMA_AXIS3(),
      this.COVERAGE_3_SIGMA_AXIS1(),
      this.COVERAGE_3_SIGMA_AXIS2(),
      this.COVERAGE_3_SIGMA_AXIS3()
    );
  }
  unpackTo(_o) {
    _o.RULE = this.RULE();
    _o.MODEL_ID = this.MODEL_ID();
    _o.REGIME = this.REGIME();
    _o.AGE_DAYS = this.AGE_DAYS();
    _o.HORIZON_DAYS = this.HORIZON_DAYS();
    _o.MEASURED_LINEAGE = this.MEASURED_LINEAGE();
    _o.TEST_WINDOW = this.TEST_WINDOW();
    _o.MEAN_D2_OVER_3 = this.MEAN_D2_OVER_3();
    _o.COVERAGE_95 = this.COVERAGE_95();
    _o.SAMPLES = this.SAMPLES();
    _o.OBJECTS = this.OBJECTS();
    _o.SCALE_FACTOR = this.SCALE_FACTOR();
    _o.CALIBRATION = this.CALIBRATION();
    _o.EVIDENCE = this.EVIDENCE();
    _o.HISTORY_SAMPLES = this.HISTORY_SAMPLES();
    _o.HISTORY_SETS = this.HISTORY_SETS();
    _o.HISTORY_WINDOW = this.HISTORY_WINDOW();
    _o.SHRINKAGE_WEIGHT = this.SHRINKAGE_WEIGHT();
    _o.TRUTH_EPOCHS = this.TRUTH_EPOCHS();
    _o.COVERAGE_1_SIGMA_AXIS1 = this.COVERAGE_1_SIGMA_AXIS1();
    _o.COVERAGE_1_SIGMA_AXIS2 = this.COVERAGE_1_SIGMA_AXIS2();
    _o.COVERAGE_1_SIGMA_AXIS3 = this.COVERAGE_1_SIGMA_AXIS3();
    _o.COVERAGE_3_SIGMA_AXIS1 = this.COVERAGE_3_SIGMA_AXIS1();
    _o.COVERAGE_3_SIGMA_AXIS2 = this.COVERAGE_3_SIGMA_AXIS2();
    _o.COVERAGE_3_SIGMA_AXIS3 = this.COVERAGE_3_SIGMA_AXIS3();
  }
};
var CVRT = class {
  constructor(RULE = 0 /* Unspecified */, MODEL_ID = null, REGIME = null, AGE_DAYS = NaN, HORIZON_DAYS = NaN, MEASURED_LINEAGE = null, TEST_WINDOW = null, MEAN_D2_OVER_3 = NaN, COVERAGE_95 = NaN, SAMPLES = 0, OBJECTS = 0, SCALE_FACTOR = NaN, CALIBRATION = 0 /* Unspecified */, EVIDENCE = null, HISTORY_SAMPLES = 0, HISTORY_SETS = 0, HISTORY_WINDOW = null, SHRINKAGE_WEIGHT = NaN, TRUTH_EPOCHS = 0, COVERAGE_1_SIGMA_AXIS1 = NaN, COVERAGE_1_SIGMA_AXIS2 = NaN, COVERAGE_1_SIGMA_AXIS3 = NaN, COVERAGE_3_SIGMA_AXIS1 = NaN, COVERAGE_3_SIGMA_AXIS2 = NaN, COVERAGE_3_SIGMA_AXIS3 = NaN) {
    this.RULE = RULE;
    this.MODEL_ID = MODEL_ID;
    this.REGIME = REGIME;
    this.AGE_DAYS = AGE_DAYS;
    this.HORIZON_DAYS = HORIZON_DAYS;
    this.MEASURED_LINEAGE = MEASURED_LINEAGE;
    this.TEST_WINDOW = TEST_WINDOW;
    this.MEAN_D2_OVER_3 = MEAN_D2_OVER_3;
    this.COVERAGE_95 = COVERAGE_95;
    this.SAMPLES = SAMPLES;
    this.OBJECTS = OBJECTS;
    this.SCALE_FACTOR = SCALE_FACTOR;
    this.CALIBRATION = CALIBRATION;
    this.EVIDENCE = EVIDENCE;
    this.HISTORY_SAMPLES = HISTORY_SAMPLES;
    this.HISTORY_SETS = HISTORY_SETS;
    this.HISTORY_WINDOW = HISTORY_WINDOW;
    this.SHRINKAGE_WEIGHT = SHRINKAGE_WEIGHT;
    this.TRUTH_EPOCHS = TRUTH_EPOCHS;
    this.COVERAGE_1_SIGMA_AXIS1 = COVERAGE_1_SIGMA_AXIS1;
    this.COVERAGE_1_SIGMA_AXIS2 = COVERAGE_1_SIGMA_AXIS2;
    this.COVERAGE_1_SIGMA_AXIS3 = COVERAGE_1_SIGMA_AXIS3;
    this.COVERAGE_3_SIGMA_AXIS1 = COVERAGE_3_SIGMA_AXIS1;
    this.COVERAGE_3_SIGMA_AXIS2 = COVERAGE_3_SIGMA_AXIS2;
    this.COVERAGE_3_SIGMA_AXIS3 = COVERAGE_3_SIGMA_AXIS3;
  }
  pack(builder) {
    const MODEL_ID = this.MODEL_ID !== null ? builder.createString(this.MODEL_ID) : 0;
    const REGIME = this.REGIME !== null ? builder.createString(this.REGIME) : 0;
    const MEASURED_LINEAGE = this.MEASURED_LINEAGE !== null ? builder.createString(this.MEASURED_LINEAGE) : 0;
    const TEST_WINDOW = this.TEST_WINDOW !== null ? builder.createString(this.TEST_WINDOW) : 0;
    const EVIDENCE = this.EVIDENCE !== null ? builder.createString(this.EVIDENCE) : 0;
    const HISTORY_WINDOW = this.HISTORY_WINDOW !== null ? builder.createString(this.HISTORY_WINDOW) : 0;
    return CVR.createCVR(
      builder,
      this.RULE,
      MODEL_ID,
      REGIME,
      this.AGE_DAYS,
      this.HORIZON_DAYS,
      MEASURED_LINEAGE,
      TEST_WINDOW,
      this.MEAN_D2_OVER_3,
      this.COVERAGE_95,
      this.SAMPLES,
      this.OBJECTS,
      this.SCALE_FACTOR,
      this.CALIBRATION,
      EVIDENCE,
      this.HISTORY_SAMPLES,
      this.HISTORY_SETS,
      HISTORY_WINDOW,
      this.SHRINKAGE_WEIGHT,
      this.TRUTH_EPOCHS,
      this.COVERAGE_1_SIGMA_AXIS1,
      this.COVERAGE_1_SIGMA_AXIS2,
      this.COVERAGE_1_SIGMA_AXIS3,
      this.COVERAGE_3_SIGMA_AXIS1,
      this.COVERAGE_3_SIGMA_AXIS2,
      this.COVERAGE_3_SIGMA_AXIS3
    );
  }
};

// lib/ts/DPM/DPM.ts
var flatbuffers10 = __toESM(require_flatbuffers(), 1);

// lib/ts/DPM/DPMAsset.ts
var flatbuffers5 = __toESM(require_flatbuffers(), 1);

// lib/ts/DPM/DPMDerivedBuild.ts
var flatbuffers2 = __toESM(require_flatbuffers(), 1);
var DPMDerivedBuild = class _DPMDerivedBuild {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMDerivedBuild(bb, obj) {
    return (obj || new _DPMDerivedBuild()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMDerivedBuild(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers2.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMDerivedBuild()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  BUILDER_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  BUILDER_VERSION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * SHA-256 of the builder's executable artifact (32 bytes).
   */
  BUILDER_DIGEST(index) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
  }
  builderDigestLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  builderDigestArray() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * SHA-256 over the configuration and environment inputs the builder used that
   * are not in the source record, by the builder's published rule (32 bytes);
   * empty when the builder uses none.
   */
  ENVIRONMENT_DIGEST(index) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
  }
  environmentDigestLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  environmentDigestArray() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * Build tolerance per position axis in km. NaN when not stated.
   */
  TOL_POSITION() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Build tolerance per velocity axis in km/s. NaN when not stated or without
   * velocity.
   */
  TOL_VELOCITY() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  static startDPMDerivedBuild(builder) {
    builder.startObject(6);
  }
  static addBuilderName(builder, BUILDER_NAMEOffset) {
    builder.addFieldOffset(0, BUILDER_NAMEOffset, 0);
  }
  static addBuilderVersion(builder, BUILDER_VERSIONOffset) {
    builder.addFieldOffset(1, BUILDER_VERSIONOffset, 0);
  }
  static addBuilderDigest(builder, BUILDER_DIGESTOffset) {
    builder.addFieldOffset(2, BUILDER_DIGESTOffset, 0);
  }
  static createBuilderDigestVector(builder, data) {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }
  static startBuilderDigestVector(builder, numElems) {
    builder.startVector(1, numElems, 1);
  }
  static addEnvironmentDigest(builder, ENVIRONMENT_DIGESTOffset) {
    builder.addFieldOffset(3, ENVIRONMENT_DIGESTOffset, 0);
  }
  static createEnvironmentDigestVector(builder, data) {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }
  static startEnvironmentDigestVector(builder, numElems) {
    builder.startVector(1, numElems, 1);
  }
  static addTolPosition(builder, TOL_POSITION) {
    builder.addFieldFloat64(4, TOL_POSITION, NaN);
  }
  static addTolVelocity(builder, TOL_VELOCITY) {
    builder.addFieldFloat64(5, TOL_VELOCITY, NaN);
  }
  static endDPMDerivedBuild(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDPMDerivedBuild(builder, BUILDER_NAMEOffset, BUILDER_VERSIONOffset, BUILDER_DIGESTOffset, ENVIRONMENT_DIGESTOffset, TOL_POSITION, TOL_VELOCITY) {
    _DPMDerivedBuild.startDPMDerivedBuild(builder);
    _DPMDerivedBuild.addBuilderName(builder, BUILDER_NAMEOffset);
    _DPMDerivedBuild.addBuilderVersion(builder, BUILDER_VERSIONOffset);
    _DPMDerivedBuild.addBuilderDigest(builder, BUILDER_DIGESTOffset);
    _DPMDerivedBuild.addEnvironmentDigest(builder, ENVIRONMENT_DIGESTOffset);
    _DPMDerivedBuild.addTolPosition(builder, TOL_POSITION);
    _DPMDerivedBuild.addTolVelocity(builder, TOL_VELOCITY);
    return _DPMDerivedBuild.endDPMDerivedBuild(builder);
  }
  unpack() {
    return new DPMDerivedBuildT(
      this.BUILDER_NAME(),
      this.BUILDER_VERSION(),
      this.bb.createScalarList(this.BUILDER_DIGEST.bind(this), this.builderDigestLength()),
      this.bb.createScalarList(this.ENVIRONMENT_DIGEST.bind(this), this.environmentDigestLength()),
      this.TOL_POSITION(),
      this.TOL_VELOCITY()
    );
  }
  unpackTo(_o) {
    _o.BUILDER_NAME = this.BUILDER_NAME();
    _o.BUILDER_VERSION = this.BUILDER_VERSION();
    _o.BUILDER_DIGEST = this.bb.createScalarList(this.BUILDER_DIGEST.bind(this), this.builderDigestLength());
    _o.ENVIRONMENT_DIGEST = this.bb.createScalarList(this.ENVIRONMENT_DIGEST.bind(this), this.environmentDigestLength());
    _o.TOL_POSITION = this.TOL_POSITION();
    _o.TOL_VELOCITY = this.TOL_VELOCITY();
  }
};
var DPMDerivedBuildT = class {
  constructor(BUILDER_NAME = null, BUILDER_VERSION = null, BUILDER_DIGEST = [], ENVIRONMENT_DIGEST = [], TOL_POSITION = NaN, TOL_VELOCITY = NaN) {
    this.BUILDER_NAME = BUILDER_NAME;
    this.BUILDER_VERSION = BUILDER_VERSION;
    this.BUILDER_DIGEST = BUILDER_DIGEST;
    this.ENVIRONMENT_DIGEST = ENVIRONMENT_DIGEST;
    this.TOL_POSITION = TOL_POSITION;
    this.TOL_VELOCITY = TOL_VELOCITY;
  }
  pack(builder) {
    const BUILDER_NAME = this.BUILDER_NAME !== null ? builder.createString(this.BUILDER_NAME) : 0;
    const BUILDER_VERSION = this.BUILDER_VERSION !== null ? builder.createString(this.BUILDER_VERSION) : 0;
    const BUILDER_DIGEST = DPMDerivedBuild.createBuilderDigestVector(builder, this.BUILDER_DIGEST);
    const ENVIRONMENT_DIGEST = DPMDerivedBuild.createEnvironmentDigestVector(builder, this.ENVIRONMENT_DIGEST);
    return DPMDerivedBuild.createDPMDerivedBuild(
      builder,
      BUILDER_NAME,
      BUILDER_VERSION,
      BUILDER_DIGEST,
      ENVIRONMENT_DIGEST,
      this.TOL_POSITION,
      this.TOL_VELOCITY
    );
  }
};

// lib/ts/DPM/DPMRealismModel.ts
var flatbuffers3 = __toESM(require_flatbuffers(), 1);
var DPMRealismModel = class _DPMRealismModel {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMRealismModel(bb, obj) {
    return (obj || new _DPMRealismModel()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMRealismModel(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers3.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMRealismModel()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  /**
   * The model's number within the asset, 1 or more; a record names it.
   */
  ID() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
  }
  /**
   * The realism entry, MODEL_ID and figures, exactly as an $OCM COV_REALISM
   * entry of each record that names this ID.
   */
  REALISM(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new CVR()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startDPMRealismModel(builder) {
    builder.startObject(2);
  }
  static addId(builder, ID) {
    builder.addFieldInt16(0, ID, 0);
  }
  static addRealism(builder, REALISMOffset) {
    builder.addFieldOffset(1, REALISMOffset, 0);
  }
  static endDPMRealismModel(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DPMRealismModelT(
      this.ID(),
      this.REALISM() !== null ? this.REALISM().unpack() : null
    );
  }
  unpackTo(_o) {
    _o.ID = this.ID();
    _o.REALISM = this.REALISM() !== null ? this.REALISM().unpack() : null;
  }
};
var DPMRealismModelT = class {
  constructor(ID = 0, REALISM = null) {
    this.ID = ID;
    this.REALISM = REALISM;
  }
  pack(builder) {
    const REALISM = this.REALISM !== null ? this.REALISM.pack(builder) : 0;
    DPMRealismModel.startDPMRealismModel(builder);
    DPMRealismModel.addId(builder, this.ID);
    DPMRealismModel.addRealism(builder, REALISM);
    return DPMRealismModel.endDPMRealismModel(builder);
  }
};

// lib/ts/DPM/PVN.ts
var flatbuffers4 = __toESM(require_flatbuffers(), 1);

// lib/ts/DPM/pvnLicenseClass.ts
var pvnLicenseClass = /* @__PURE__ */ ((pvnLicenseClass2) => {
  pvnLicenseClass2[pvnLicenseClass2["Unspecified"] = 0] = "Unspecified";
  pvnLicenseClass2[pvnLicenseClass2["Reproducible"] = 1] = "Reproducible";
  pvnLicenseClass2[pvnLicenseClass2["CiteOnly"] = 2] = "CiteOnly";
  pvnLicenseClass2[pvnLicenseClass2["ShareAlike"] = 3] = "ShareAlike";
  pvnLicenseClass2[pvnLicenseClass2["NonCommercial"] = 4] = "NonCommercial";
  return pvnLicenseClass2;
})(pvnLicenseClass || {});

// lib/ts/DPM/pvnSourceKind.ts
var pvnSourceKind = /* @__PURE__ */ ((pvnSourceKind2) => {
  pvnSourceKind2[pvnSourceKind2["Unspecified"] = 0] = "Unspecified";
  pvnSourceKind2[pvnSourceKind2["ElementSet"] = 1] = "ElementSet";
  pvnSourceKind2[pvnSourceKind2["Ephemeris"] = 2] = "Ephemeris";
  pvnSourceKind2[pvnSourceKind2["Observation"] = 3] = "Observation";
  pvnSourceKind2[pvnSourceKind2["Reference"] = 4] = "Reference";
  return pvnSourceKind2;
})(pvnSourceKind || {});

// lib/ts/DPM/PVN.ts
var PVN = class _PVN {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsPVN(bb, obj) {
    return (obj || new _PVN()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsPVN(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers4.SIZE_PREFIX_LENGTH);
    return (obj || new _PVN()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$PVN");
  }
  SOURCE_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * What kind of data the source supplies.
   */
  SOURCE_KIND() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unspecified */;
  }
  ORIGINATOR(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  PROVIDER_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  PRODUCER(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * What the source's terms permit for the product.
   */
  LICENSE_CLASS() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unspecified */;
  }
  LICENSE_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  LINEAGE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SOURCE_URL(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SOURCE_VERSION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  RETRIEVED_AT(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SOURCE_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Number of source bytes SOURCE_SHA256 covers: the length of the prefix when
   * the source was fetched by range. 0 when not stated.
   */
  SOURCE_BYTES() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  PRODUCER_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startPVN(builder) {
    builder.startObject(14);
  }
  static addSourceId(builder, SOURCE_IDOffset) {
    builder.addFieldOffset(0, SOURCE_IDOffset, 0);
  }
  static addSourceKind(builder, SOURCE_KIND) {
    builder.addFieldInt8(1, SOURCE_KIND, 0 /* Unspecified */);
  }
  static addOriginator(builder, ORIGINATOROffset) {
    builder.addFieldOffset(2, ORIGINATOROffset, 0);
  }
  static addProviderId(builder, PROVIDER_IDOffset) {
    builder.addFieldOffset(3, PROVIDER_IDOffset, 0);
  }
  static addProducer(builder, PRODUCEROffset) {
    builder.addFieldOffset(4, PRODUCEROffset, 0);
  }
  static addLicenseClass(builder, LICENSE_CLASS) {
    builder.addFieldInt8(5, LICENSE_CLASS, 0 /* Unspecified */);
  }
  static addLicenseId(builder, LICENSE_IDOffset) {
    builder.addFieldOffset(6, LICENSE_IDOffset, 0);
  }
  static addLineage(builder, LINEAGEOffset) {
    builder.addFieldOffset(7, LINEAGEOffset, 0);
  }
  static addSourceUrl(builder, SOURCE_URLOffset) {
    builder.addFieldOffset(8, SOURCE_URLOffset, 0);
  }
  static addSourceVersion(builder, SOURCE_VERSIONOffset) {
    builder.addFieldOffset(9, SOURCE_VERSIONOffset, 0);
  }
  static addRetrievedAt(builder, RETRIEVED_ATOffset) {
    builder.addFieldOffset(10, RETRIEVED_ATOffset, 0);
  }
  static addSourceSha256(builder, SOURCE_SHA256Offset) {
    builder.addFieldOffset(11, SOURCE_SHA256Offset, 0);
  }
  static addSourceBytes(builder, SOURCE_BYTES) {
    builder.addFieldInt64(12, SOURCE_BYTES, BigInt("0"));
  }
  static addProducerSha256(builder, PRODUCER_SHA256Offset) {
    builder.addFieldOffset(13, PRODUCER_SHA256Offset, 0);
  }
  static endPVN(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishPVNBuffer(builder, offset) {
    builder.finish(offset, "$PVN");
  }
  static finishSizePrefixedPVNBuffer(builder, offset) {
    builder.finish(offset, "$PVN", true);
  }
  static createPVN(builder, SOURCE_IDOffset, SOURCE_KIND, ORIGINATOROffset, PROVIDER_IDOffset, PRODUCEROffset, LICENSE_CLASS, LICENSE_IDOffset, LINEAGEOffset, SOURCE_URLOffset, SOURCE_VERSIONOffset, RETRIEVED_ATOffset, SOURCE_SHA256Offset, SOURCE_BYTES, PRODUCER_SHA256Offset) {
    _PVN.startPVN(builder);
    _PVN.addSourceId(builder, SOURCE_IDOffset);
    _PVN.addSourceKind(builder, SOURCE_KIND);
    _PVN.addOriginator(builder, ORIGINATOROffset);
    _PVN.addProviderId(builder, PROVIDER_IDOffset);
    _PVN.addProducer(builder, PRODUCEROffset);
    _PVN.addLicenseClass(builder, LICENSE_CLASS);
    _PVN.addLicenseId(builder, LICENSE_IDOffset);
    _PVN.addLineage(builder, LINEAGEOffset);
    _PVN.addSourceUrl(builder, SOURCE_URLOffset);
    _PVN.addSourceVersion(builder, SOURCE_VERSIONOffset);
    _PVN.addRetrievedAt(builder, RETRIEVED_ATOffset);
    _PVN.addSourceSha256(builder, SOURCE_SHA256Offset);
    _PVN.addSourceBytes(builder, SOURCE_BYTES);
    _PVN.addProducerSha256(builder, PRODUCER_SHA256Offset);
    return _PVN.endPVN(builder);
  }
  unpack() {
    return new PVNT(
      this.SOURCE_ID(),
      this.SOURCE_KIND(),
      this.ORIGINATOR(),
      this.PROVIDER_ID(),
      this.PRODUCER(),
      this.LICENSE_CLASS(),
      this.LICENSE_ID(),
      this.LINEAGE(),
      this.SOURCE_URL(),
      this.SOURCE_VERSION(),
      this.RETRIEVED_AT(),
      this.SOURCE_SHA256(),
      this.SOURCE_BYTES(),
      this.PRODUCER_SHA256()
    );
  }
  unpackTo(_o) {
    _o.SOURCE_ID = this.SOURCE_ID();
    _o.SOURCE_KIND = this.SOURCE_KIND();
    _o.ORIGINATOR = this.ORIGINATOR();
    _o.PROVIDER_ID = this.PROVIDER_ID();
    _o.PRODUCER = this.PRODUCER();
    _o.LICENSE_CLASS = this.LICENSE_CLASS();
    _o.LICENSE_ID = this.LICENSE_ID();
    _o.LINEAGE = this.LINEAGE();
    _o.SOURCE_URL = this.SOURCE_URL();
    _o.SOURCE_VERSION = this.SOURCE_VERSION();
    _o.RETRIEVED_AT = this.RETRIEVED_AT();
    _o.SOURCE_SHA256 = this.SOURCE_SHA256();
    _o.SOURCE_BYTES = this.SOURCE_BYTES();
    _o.PRODUCER_SHA256 = this.PRODUCER_SHA256();
  }
};
var PVNT = class {
  constructor(SOURCE_ID = null, SOURCE_KIND = 0 /* Unspecified */, ORIGINATOR = null, PROVIDER_ID = null, PRODUCER = null, LICENSE_CLASS = 0 /* Unspecified */, LICENSE_ID = null, LINEAGE = null, SOURCE_URL = null, SOURCE_VERSION = null, RETRIEVED_AT = null, SOURCE_SHA256 = null, SOURCE_BYTES = BigInt("0"), PRODUCER_SHA256 = null) {
    this.SOURCE_ID = SOURCE_ID;
    this.SOURCE_KIND = SOURCE_KIND;
    this.ORIGINATOR = ORIGINATOR;
    this.PROVIDER_ID = PROVIDER_ID;
    this.PRODUCER = PRODUCER;
    this.LICENSE_CLASS = LICENSE_CLASS;
    this.LICENSE_ID = LICENSE_ID;
    this.LINEAGE = LINEAGE;
    this.SOURCE_URL = SOURCE_URL;
    this.SOURCE_VERSION = SOURCE_VERSION;
    this.RETRIEVED_AT = RETRIEVED_AT;
    this.SOURCE_SHA256 = SOURCE_SHA256;
    this.SOURCE_BYTES = SOURCE_BYTES;
    this.PRODUCER_SHA256 = PRODUCER_SHA256;
  }
  pack(builder) {
    const SOURCE_ID = this.SOURCE_ID !== null ? builder.createString(this.SOURCE_ID) : 0;
    const ORIGINATOR = this.ORIGINATOR !== null ? builder.createString(this.ORIGINATOR) : 0;
    const PROVIDER_ID = this.PROVIDER_ID !== null ? builder.createString(this.PROVIDER_ID) : 0;
    const PRODUCER = this.PRODUCER !== null ? builder.createString(this.PRODUCER) : 0;
    const LICENSE_ID = this.LICENSE_ID !== null ? builder.createString(this.LICENSE_ID) : 0;
    const LINEAGE = this.LINEAGE !== null ? builder.createString(this.LINEAGE) : 0;
    const SOURCE_URL = this.SOURCE_URL !== null ? builder.createString(this.SOURCE_URL) : 0;
    const SOURCE_VERSION = this.SOURCE_VERSION !== null ? builder.createString(this.SOURCE_VERSION) : 0;
    const RETRIEVED_AT = this.RETRIEVED_AT !== null ? builder.createString(this.RETRIEVED_AT) : 0;
    const SOURCE_SHA256 = this.SOURCE_SHA256 !== null ? builder.createString(this.SOURCE_SHA256) : 0;
    const PRODUCER_SHA256 = this.PRODUCER_SHA256 !== null ? builder.createString(this.PRODUCER_SHA256) : 0;
    return PVN.createPVN(
      builder,
      SOURCE_ID,
      this.SOURCE_KIND,
      ORIGINATOR,
      PROVIDER_ID,
      PRODUCER,
      this.LICENSE_CLASS,
      LICENSE_ID,
      LINEAGE,
      SOURCE_URL,
      SOURCE_VERSION,
      RETRIEVED_AT,
      SOURCE_SHA256,
      this.SOURCE_BYTES,
      PRODUCER_SHA256
    );
  }
};

// lib/ts/DPM/dpmTransportKind.ts
var dpmTransportKind = /* @__PURE__ */ ((dpmTransportKind2) => {
  dpmTransportKind2[dpmTransportKind2["CONTENT_ADDRESS"] = 0] = "CONTENT_ADDRESS";
  dpmTransportKind2[dpmTransportKind2["SDN_QUERY"] = 1] = "SDN_QUERY";
  dpmTransportKind2[dpmTransportKind2["OTHER"] = 2] = "OTHER";
  return dpmTransportKind2;
})(dpmTransportKind || {});

// lib/ts/DPM/publicationAssetKind.ts
var publicationAssetKind = /* @__PURE__ */ ((publicationAssetKind2) => {
  publicationAssetKind2[publicationAssetKind2["DATA_SHARD"] = 0] = "DATA_SHARD";
  publicationAssetKind2[publicationAssetKind2["QUERY_INDEX"] = 1] = "QUERY_INDEX";
  publicationAssetKind2[publicationAssetKind2["MANIFEST"] = 2] = "MANIFEST";
  publicationAssetKind2[publicationAssetKind2["OTHER"] = 3] = "OTHER";
  publicationAssetKind2[publicationAssetKind2["EMBEDDING_SHARD"] = 4] = "EMBEDDING_SHARD";
  publicationAssetKind2[publicationAssetKind2["QUERY_ENCODER_MODEL"] = 5] = "QUERY_ENCODER_MODEL";
  publicationAssetKind2[publicationAssetKind2["CAR_ARCHIVE"] = 6] = "CAR_ARCHIVE";
  return publicationAssetKind2;
})(publicationAssetKind || {});

// lib/ts/DPM/DPMAsset.ts
var DPMAsset = class _DPMAsset {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMAsset(bb, obj) {
    return (obj || new _DPMAsset()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMAsset(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers5.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMAsset()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  /**
   * Asset role.
   */
  ASSET_KIND() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 3 /* OTHER */;
  }
  /**
   * Transport profile for this asset. CONTENT_ADDRESS assets use CID and
   * MULTIFORMAT_ADDRESS. SDN_QUERY assets use TRANSPORT_PROTOCOL plus the
   * signed DPM query and root fields; they are not required to be published as
   * discoverable IPFS files.
   */
  TRANSPORT_KIND() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* CONTENT_ADDRESS */;
  }
  CID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  MULTIFORMAT_ADDRESS(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  FILE_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  FILE_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  TRANSPORT_PROTOCOL(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Byte length of the published object.
   */
  BYTE_LENGTH() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  BYTE_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  DATA_ROOT(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SCHEMA_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SCHEMA_HASH(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  CONTENT_KEY_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Highest record seq the asset covers (its as-of point), for CAR_ARCHIVE
   * assets of a FlatSQL feed; 0 when not applicable.
   */
  THROUGH_SEQ() {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  /**
   * The provenance of every record of this asset that carries none of its own
   * ($MOR records never do): stated once for the asset instead of in each
   * record. A record's own PROVENANCE, where its standard has one, governs that
   * record. Absent: the records state their own or have none.
   */
  RECORD_PROVENANCE(obj) {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? (obj || new PVN()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * The builder of the derived polynomial rows the asset's records carry
   * ($MOR WINDOWS), stated once for the asset. Absent: the asset's records
   * carry no derived rows, or a reader must ignore them. It holds for this
   * asset only: a reader sets it aside before reading another asset, and
   * judges compatibility by every field, never by a version string alone.
   */
  DERIVED_BUILD(obj) {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? (obj || new DPMDerivedBuild()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * The covariance realism models the asset's records name by ID ($MOR
   * COV_REALISM_ID), each stated once with its population figures. IDs are
   * 1 or more and unique within the asset; a reader refuses a list that
   * repeats one.
   */
  COV_REALISM_MODELS(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 36);
    return offset ? (obj || new DPMRealismModel()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  covRealismModelsLength() {
    const offset = this.bb.__offset(this.bb_pos, 36);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startDPMAsset(builder) {
    builder.startObject(17);
  }
  static addAssetKind(builder, ASSET_KIND) {
    builder.addFieldInt8(0, ASSET_KIND, 3 /* OTHER */);
  }
  static addTransportKind(builder, TRANSPORT_KIND) {
    builder.addFieldInt8(1, TRANSPORT_KIND, 0 /* CONTENT_ADDRESS */);
  }
  static addCid(builder, CIDOffset) {
    builder.addFieldOffset(2, CIDOffset, 0);
  }
  static addMultiformatAddress(builder, MULTIFORMAT_ADDRESSOffset) {
    builder.addFieldOffset(3, MULTIFORMAT_ADDRESSOffset, 0);
  }
  static addFileName(builder, FILE_NAMEOffset) {
    builder.addFieldOffset(4, FILE_NAMEOffset, 0);
  }
  static addFileId(builder, FILE_IDOffset) {
    builder.addFieldOffset(5, FILE_IDOffset, 0);
  }
  static addTransportProtocol(builder, TRANSPORT_PROTOCOLOffset) {
    builder.addFieldOffset(6, TRANSPORT_PROTOCOLOffset, 0);
  }
  static addByteLength(builder, BYTE_LENGTH) {
    builder.addFieldInt64(7, BYTE_LENGTH, BigInt("0"));
  }
  static addByteSha256(builder, BYTE_SHA256Offset) {
    builder.addFieldOffset(8, BYTE_SHA256Offset, 0);
  }
  static addDataRoot(builder, DATA_ROOTOffset) {
    builder.addFieldOffset(9, DATA_ROOTOffset, 0);
  }
  static addSchemaName(builder, SCHEMA_NAMEOffset) {
    builder.addFieldOffset(10, SCHEMA_NAMEOffset, 0);
  }
  static addSchemaHash(builder, SCHEMA_HASHOffset) {
    builder.addFieldOffset(11, SCHEMA_HASHOffset, 0);
  }
  static addContentKeyId(builder, CONTENT_KEY_IDOffset) {
    builder.addFieldOffset(12, CONTENT_KEY_IDOffset, 0);
  }
  static addThroughSeq(builder, THROUGH_SEQ) {
    builder.addFieldInt64(13, THROUGH_SEQ, BigInt("0"));
  }
  static addRecordProvenance(builder, RECORD_PROVENANCEOffset) {
    builder.addFieldOffset(14, RECORD_PROVENANCEOffset, 0);
  }
  static addDerivedBuild(builder, DERIVED_BUILDOffset) {
    builder.addFieldOffset(15, DERIVED_BUILDOffset, 0);
  }
  static addCovRealismModels(builder, COV_REALISM_MODELSOffset) {
    builder.addFieldOffset(16, COV_REALISM_MODELSOffset, 0);
  }
  static createCovRealismModelsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCovRealismModelsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endDPMAsset(builder) {
    const offset = builder.endObject();
    return offset;
  }
  unpack() {
    return new DPMAssetT(
      this.ASSET_KIND(),
      this.TRANSPORT_KIND(),
      this.CID(),
      this.MULTIFORMAT_ADDRESS(),
      this.FILE_NAME(),
      this.FILE_ID(),
      this.TRANSPORT_PROTOCOL(),
      this.BYTE_LENGTH(),
      this.BYTE_SHA256(),
      this.DATA_ROOT(),
      this.SCHEMA_NAME(),
      this.SCHEMA_HASH(),
      this.CONTENT_KEY_ID(),
      this.THROUGH_SEQ(),
      this.RECORD_PROVENANCE() !== null ? this.RECORD_PROVENANCE().unpack() : null,
      this.DERIVED_BUILD() !== null ? this.DERIVED_BUILD().unpack() : null,
      this.bb.createObjList(this.COV_REALISM_MODELS.bind(this), this.covRealismModelsLength())
    );
  }
  unpackTo(_o) {
    _o.ASSET_KIND = this.ASSET_KIND();
    _o.TRANSPORT_KIND = this.TRANSPORT_KIND();
    _o.CID = this.CID();
    _o.MULTIFORMAT_ADDRESS = this.MULTIFORMAT_ADDRESS();
    _o.FILE_NAME = this.FILE_NAME();
    _o.FILE_ID = this.FILE_ID();
    _o.TRANSPORT_PROTOCOL = this.TRANSPORT_PROTOCOL();
    _o.BYTE_LENGTH = this.BYTE_LENGTH();
    _o.BYTE_SHA256 = this.BYTE_SHA256();
    _o.DATA_ROOT = this.DATA_ROOT();
    _o.SCHEMA_NAME = this.SCHEMA_NAME();
    _o.SCHEMA_HASH = this.SCHEMA_HASH();
    _o.CONTENT_KEY_ID = this.CONTENT_KEY_ID();
    _o.THROUGH_SEQ = this.THROUGH_SEQ();
    _o.RECORD_PROVENANCE = this.RECORD_PROVENANCE() !== null ? this.RECORD_PROVENANCE().unpack() : null;
    _o.DERIVED_BUILD = this.DERIVED_BUILD() !== null ? this.DERIVED_BUILD().unpack() : null;
    _o.COV_REALISM_MODELS = this.bb.createObjList(this.COV_REALISM_MODELS.bind(this), this.covRealismModelsLength());
  }
};
var DPMAssetT = class {
  constructor(ASSET_KIND = 3 /* OTHER */, TRANSPORT_KIND = 0 /* CONTENT_ADDRESS */, CID = null, MULTIFORMAT_ADDRESS = null, FILE_NAME = null, FILE_ID = null, TRANSPORT_PROTOCOL = null, BYTE_LENGTH = BigInt("0"), BYTE_SHA256 = null, DATA_ROOT = null, SCHEMA_NAME = null, SCHEMA_HASH = null, CONTENT_KEY_ID = null, THROUGH_SEQ = BigInt("0"), RECORD_PROVENANCE = null, DERIVED_BUILD = null, COV_REALISM_MODELS = []) {
    this.ASSET_KIND = ASSET_KIND;
    this.TRANSPORT_KIND = TRANSPORT_KIND;
    this.CID = CID;
    this.MULTIFORMAT_ADDRESS = MULTIFORMAT_ADDRESS;
    this.FILE_NAME = FILE_NAME;
    this.FILE_ID = FILE_ID;
    this.TRANSPORT_PROTOCOL = TRANSPORT_PROTOCOL;
    this.BYTE_LENGTH = BYTE_LENGTH;
    this.BYTE_SHA256 = BYTE_SHA256;
    this.DATA_ROOT = DATA_ROOT;
    this.SCHEMA_NAME = SCHEMA_NAME;
    this.SCHEMA_HASH = SCHEMA_HASH;
    this.CONTENT_KEY_ID = CONTENT_KEY_ID;
    this.THROUGH_SEQ = THROUGH_SEQ;
    this.RECORD_PROVENANCE = RECORD_PROVENANCE;
    this.DERIVED_BUILD = DERIVED_BUILD;
    this.COV_REALISM_MODELS = COV_REALISM_MODELS;
  }
  pack(builder) {
    const CID = this.CID !== null ? builder.createString(this.CID) : 0;
    const MULTIFORMAT_ADDRESS = this.MULTIFORMAT_ADDRESS !== null ? builder.createString(this.MULTIFORMAT_ADDRESS) : 0;
    const FILE_NAME = this.FILE_NAME !== null ? builder.createString(this.FILE_NAME) : 0;
    const FILE_ID = this.FILE_ID !== null ? builder.createString(this.FILE_ID) : 0;
    const TRANSPORT_PROTOCOL = this.TRANSPORT_PROTOCOL !== null ? builder.createString(this.TRANSPORT_PROTOCOL) : 0;
    const BYTE_SHA256 = this.BYTE_SHA256 !== null ? builder.createString(this.BYTE_SHA256) : 0;
    const DATA_ROOT = this.DATA_ROOT !== null ? builder.createString(this.DATA_ROOT) : 0;
    const SCHEMA_NAME = this.SCHEMA_NAME !== null ? builder.createString(this.SCHEMA_NAME) : 0;
    const SCHEMA_HASH = this.SCHEMA_HASH !== null ? builder.createString(this.SCHEMA_HASH) : 0;
    const CONTENT_KEY_ID = this.CONTENT_KEY_ID !== null ? builder.createString(this.CONTENT_KEY_ID) : 0;
    const RECORD_PROVENANCE = this.RECORD_PROVENANCE !== null ? this.RECORD_PROVENANCE.pack(builder) : 0;
    const DERIVED_BUILD = this.DERIVED_BUILD !== null ? this.DERIVED_BUILD.pack(builder) : 0;
    const COV_REALISM_MODELS = DPMAsset.createCovRealismModelsVector(builder, builder.createObjectOffsetList(this.COV_REALISM_MODELS));
    DPMAsset.startDPMAsset(builder);
    DPMAsset.addAssetKind(builder, this.ASSET_KIND);
    DPMAsset.addTransportKind(builder, this.TRANSPORT_KIND);
    DPMAsset.addCid(builder, CID);
    DPMAsset.addMultiformatAddress(builder, MULTIFORMAT_ADDRESS);
    DPMAsset.addFileName(builder, FILE_NAME);
    DPMAsset.addFileId(builder, FILE_ID);
    DPMAsset.addTransportProtocol(builder, TRANSPORT_PROTOCOL);
    DPMAsset.addByteLength(builder, this.BYTE_LENGTH);
    DPMAsset.addByteSha256(builder, BYTE_SHA256);
    DPMAsset.addDataRoot(builder, DATA_ROOT);
    DPMAsset.addSchemaName(builder, SCHEMA_NAME);
    DPMAsset.addSchemaHash(builder, SCHEMA_HASH);
    DPMAsset.addContentKeyId(builder, CONTENT_KEY_ID);
    DPMAsset.addThroughSeq(builder, this.THROUGH_SEQ);
    DPMAsset.addRecordProvenance(builder, RECORD_PROVENANCE);
    DPMAsset.addDerivedBuild(builder, DERIVED_BUILD);
    DPMAsset.addCovRealismModels(builder, COV_REALISM_MODELS);
    return DPMAsset.endDPMAsset(builder);
  }
};

// lib/ts/DPM/DPMCompletenessIndex.ts
var flatbuffers6 = __toESM(require_flatbuffers(), 1);
var DPMCompletenessIndex = class _DPMCompletenessIndex {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMCompletenessIndex(bb, obj) {
    return (obj || new _DPMCompletenessIndex()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMCompletenessIndex(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers6.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMCompletenessIndex()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  INDEX_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  CANONICAL_ORDER(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  INDEX_ROOT(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  MERKLE_PROFILE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Whether this index can prove that no matching records were omitted for a
   * supported range query. Inclusion proofs alone prove authenticity, not
   * completeness.
   */
  SUPPORTS_RANGE_COMPLETENESS() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startDPMCompletenessIndex(builder) {
    builder.startObject(5);
  }
  static addIndexName(builder, INDEX_NAMEOffset) {
    builder.addFieldOffset(0, INDEX_NAMEOffset, 0);
  }
  static addCanonicalOrder(builder, CANONICAL_ORDEROffset) {
    builder.addFieldOffset(1, CANONICAL_ORDEROffset, 0);
  }
  static addIndexRoot(builder, INDEX_ROOTOffset) {
    builder.addFieldOffset(2, INDEX_ROOTOffset, 0);
  }
  static addMerkleProfile(builder, MERKLE_PROFILEOffset) {
    builder.addFieldOffset(3, MERKLE_PROFILEOffset, 0);
  }
  static addSupportsRangeCompleteness(builder, SUPPORTS_RANGE_COMPLETENESS) {
    builder.addFieldInt8(4, +SUPPORTS_RANGE_COMPLETENESS, 0);
  }
  static endDPMCompletenessIndex(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDPMCompletenessIndex(builder, INDEX_NAMEOffset, CANONICAL_ORDEROffset, INDEX_ROOTOffset, MERKLE_PROFILEOffset, SUPPORTS_RANGE_COMPLETENESS) {
    _DPMCompletenessIndex.startDPMCompletenessIndex(builder);
    _DPMCompletenessIndex.addIndexName(builder, INDEX_NAMEOffset);
    _DPMCompletenessIndex.addCanonicalOrder(builder, CANONICAL_ORDEROffset);
    _DPMCompletenessIndex.addIndexRoot(builder, INDEX_ROOTOffset);
    _DPMCompletenessIndex.addMerkleProfile(builder, MERKLE_PROFILEOffset);
    _DPMCompletenessIndex.addSupportsRangeCompleteness(builder, SUPPORTS_RANGE_COMPLETENESS);
    return _DPMCompletenessIndex.endDPMCompletenessIndex(builder);
  }
  unpack() {
    return new DPMCompletenessIndexT(
      this.INDEX_NAME(),
      this.CANONICAL_ORDER(),
      this.INDEX_ROOT(),
      this.MERKLE_PROFILE(),
      this.SUPPORTS_RANGE_COMPLETENESS()
    );
  }
  unpackTo(_o) {
    _o.INDEX_NAME = this.INDEX_NAME();
    _o.CANONICAL_ORDER = this.CANONICAL_ORDER();
    _o.INDEX_ROOT = this.INDEX_ROOT();
    _o.MERKLE_PROFILE = this.MERKLE_PROFILE();
    _o.SUPPORTS_RANGE_COMPLETENESS = this.SUPPORTS_RANGE_COMPLETENESS();
  }
};
var DPMCompletenessIndexT = class {
  constructor(INDEX_NAME = null, CANONICAL_ORDER = null, INDEX_ROOT = null, MERKLE_PROFILE = null, SUPPORTS_RANGE_COMPLETENESS = false) {
    this.INDEX_NAME = INDEX_NAME;
    this.CANONICAL_ORDER = CANONICAL_ORDER;
    this.INDEX_ROOT = INDEX_ROOT;
    this.MERKLE_PROFILE = MERKLE_PROFILE;
    this.SUPPORTS_RANGE_COMPLETENESS = SUPPORTS_RANGE_COMPLETENESS;
  }
  pack(builder) {
    const INDEX_NAME = this.INDEX_NAME !== null ? builder.createString(this.INDEX_NAME) : 0;
    const CANONICAL_ORDER = this.CANONICAL_ORDER !== null ? builder.createString(this.CANONICAL_ORDER) : 0;
    const INDEX_ROOT = this.INDEX_ROOT !== null ? builder.createString(this.INDEX_ROOT) : 0;
    const MERKLE_PROFILE = this.MERKLE_PROFILE !== null ? builder.createString(this.MERKLE_PROFILE) : 0;
    return DPMCompletenessIndex.createDPMCompletenessIndex(
      builder,
      INDEX_NAME,
      CANONICAL_ORDER,
      INDEX_ROOT,
      MERKLE_PROFILE,
      this.SUPPORTS_RANGE_COMPLETENESS
    );
  }
};

// lib/ts/DPM/DPMEncryptionBinding.ts
var flatbuffers7 = __toESM(require_flatbuffers(), 1);
var DPMEncryptionBinding = class _DPMEncryptionBinding {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMEncryptionBinding(bb, obj) {
    return (obj || new _DPMEncryptionBinding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMEncryptionBinding(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers7.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMEncryptionBinding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  /**
   * Whether any artifact in this manifest is encrypted.
   */
  ENCRYPTED() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  ALGORITHM(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  CONTENT_KEY_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  KEY_EPOCH(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  POLICY_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  AAD_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startDPMEncryptionBinding(builder) {
    builder.startObject(6);
  }
  static addEncrypted(builder, ENCRYPTED) {
    builder.addFieldInt8(0, +ENCRYPTED, 0);
  }
  static addAlgorithm(builder, ALGORITHMOffset) {
    builder.addFieldOffset(1, ALGORITHMOffset, 0);
  }
  static addContentKeyId(builder, CONTENT_KEY_IDOffset) {
    builder.addFieldOffset(2, CONTENT_KEY_IDOffset, 0);
  }
  static addKeyEpoch(builder, KEY_EPOCHOffset) {
    builder.addFieldOffset(3, KEY_EPOCHOffset, 0);
  }
  static addPolicyId(builder, POLICY_IDOffset) {
    builder.addFieldOffset(4, POLICY_IDOffset, 0);
  }
  static addAadSha256(builder, AAD_SHA256Offset) {
    builder.addFieldOffset(5, AAD_SHA256Offset, 0);
  }
  static endDPMEncryptionBinding(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDPMEncryptionBinding(builder, ENCRYPTED, ALGORITHMOffset, CONTENT_KEY_IDOffset, KEY_EPOCHOffset, POLICY_IDOffset, AAD_SHA256Offset) {
    _DPMEncryptionBinding.startDPMEncryptionBinding(builder);
    _DPMEncryptionBinding.addEncrypted(builder, ENCRYPTED);
    _DPMEncryptionBinding.addAlgorithm(builder, ALGORITHMOffset);
    _DPMEncryptionBinding.addContentKeyId(builder, CONTENT_KEY_IDOffset);
    _DPMEncryptionBinding.addKeyEpoch(builder, KEY_EPOCHOffset);
    _DPMEncryptionBinding.addPolicyId(builder, POLICY_IDOffset);
    _DPMEncryptionBinding.addAadSha256(builder, AAD_SHA256Offset);
    return _DPMEncryptionBinding.endDPMEncryptionBinding(builder);
  }
  unpack() {
    return new DPMEncryptionBindingT(
      this.ENCRYPTED(),
      this.ALGORITHM(),
      this.CONTENT_KEY_ID(),
      this.KEY_EPOCH(),
      this.POLICY_ID(),
      this.AAD_SHA256()
    );
  }
  unpackTo(_o) {
    _o.ENCRYPTED = this.ENCRYPTED();
    _o.ALGORITHM = this.ALGORITHM();
    _o.CONTENT_KEY_ID = this.CONTENT_KEY_ID();
    _o.KEY_EPOCH = this.KEY_EPOCH();
    _o.POLICY_ID = this.POLICY_ID();
    _o.AAD_SHA256 = this.AAD_SHA256();
  }
};
var DPMEncryptionBindingT = class {
  constructor(ENCRYPTED = false, ALGORITHM = null, CONTENT_KEY_ID = null, KEY_EPOCH = null, POLICY_ID = null, AAD_SHA256 = null) {
    this.ENCRYPTED = ENCRYPTED;
    this.ALGORITHM = ALGORITHM;
    this.CONTENT_KEY_ID = CONTENT_KEY_ID;
    this.KEY_EPOCH = KEY_EPOCH;
    this.POLICY_ID = POLICY_ID;
    this.AAD_SHA256 = AAD_SHA256;
  }
  pack(builder) {
    const ALGORITHM = this.ALGORITHM !== null ? builder.createString(this.ALGORITHM) : 0;
    const CONTENT_KEY_ID = this.CONTENT_KEY_ID !== null ? builder.createString(this.CONTENT_KEY_ID) : 0;
    const KEY_EPOCH = this.KEY_EPOCH !== null ? builder.createString(this.KEY_EPOCH) : 0;
    const POLICY_ID = this.POLICY_ID !== null ? builder.createString(this.POLICY_ID) : 0;
    const AAD_SHA256 = this.AAD_SHA256 !== null ? builder.createString(this.AAD_SHA256) : 0;
    return DPMEncryptionBinding.createDPMEncryptionBinding(
      builder,
      this.ENCRYPTED,
      ALGORITHM,
      CONTENT_KEY_ID,
      KEY_EPOCH,
      POLICY_ID,
      AAD_SHA256
    );
  }
};

// lib/ts/DPM/DPMQueryBinding.ts
var flatbuffers8 = __toESM(require_flatbuffers(), 1);
var DPMQueryBinding = class _DPMQueryBinding {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMQueryBinding(bb, obj) {
    return (obj || new _DPMQueryBinding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMQueryBinding(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers8.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMQueryBinding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  CANONICAL_QUERY(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  QUERY_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  RESULT_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  QUERY_ENGINE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  QUERY_ENGINE_VERSION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  CANONICAL_ORDER(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  QUERY_PROTOCOL(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SCHEMA_NAMES(index, optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }
  schemaNamesLength() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  PROVIDER_IDS(index, optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }
  providerIdsLength() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  SOURCE_NAMES(index, optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }
  sourceNamesLength() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  BATCH_IDS(index, optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }
  batchIdsLength() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  WINDOW_START(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  WINDOW_END(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startDPMQueryBinding(builder) {
    builder.startObject(13);
  }
  static addCanonicalQuery(builder, CANONICAL_QUERYOffset) {
    builder.addFieldOffset(0, CANONICAL_QUERYOffset, 0);
  }
  static addQuerySha256(builder, QUERY_SHA256Offset) {
    builder.addFieldOffset(1, QUERY_SHA256Offset, 0);
  }
  static addResultSha256(builder, RESULT_SHA256Offset) {
    builder.addFieldOffset(2, RESULT_SHA256Offset, 0);
  }
  static addQueryEngine(builder, QUERY_ENGINEOffset) {
    builder.addFieldOffset(3, QUERY_ENGINEOffset, 0);
  }
  static addQueryEngineVersion(builder, QUERY_ENGINE_VERSIONOffset) {
    builder.addFieldOffset(4, QUERY_ENGINE_VERSIONOffset, 0);
  }
  static addCanonicalOrder(builder, CANONICAL_ORDEROffset) {
    builder.addFieldOffset(5, CANONICAL_ORDEROffset, 0);
  }
  static addQueryProtocol(builder, QUERY_PROTOCOLOffset) {
    builder.addFieldOffset(6, QUERY_PROTOCOLOffset, 0);
  }
  static addSchemaNames(builder, SCHEMA_NAMESOffset) {
    builder.addFieldOffset(7, SCHEMA_NAMESOffset, 0);
  }
  static createSchemaNamesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startSchemaNamesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addProviderIds(builder, PROVIDER_IDSOffset) {
    builder.addFieldOffset(8, PROVIDER_IDSOffset, 0);
  }
  static createProviderIdsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startProviderIdsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addSourceNames(builder, SOURCE_NAMESOffset) {
    builder.addFieldOffset(9, SOURCE_NAMESOffset, 0);
  }
  static createSourceNamesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startSourceNamesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addBatchIds(builder, BATCH_IDSOffset) {
    builder.addFieldOffset(10, BATCH_IDSOffset, 0);
  }
  static createBatchIdsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startBatchIdsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addWindowStart(builder, WINDOW_STARTOffset) {
    builder.addFieldOffset(11, WINDOW_STARTOffset, 0);
  }
  static addWindowEnd(builder, WINDOW_ENDOffset) {
    builder.addFieldOffset(12, WINDOW_ENDOffset, 0);
  }
  static endDPMQueryBinding(builder) {
    const offset = builder.endObject();
    builder.requiredField(offset, 4);
    builder.requiredField(offset, 6);
    builder.requiredField(offset, 8);
    return offset;
  }
  static createDPMQueryBinding(builder, CANONICAL_QUERYOffset, QUERY_SHA256Offset, RESULT_SHA256Offset, QUERY_ENGINEOffset, QUERY_ENGINE_VERSIONOffset, CANONICAL_ORDEROffset, QUERY_PROTOCOLOffset, SCHEMA_NAMESOffset, PROVIDER_IDSOffset, SOURCE_NAMESOffset, BATCH_IDSOffset, WINDOW_STARTOffset, WINDOW_ENDOffset) {
    _DPMQueryBinding.startDPMQueryBinding(builder);
    _DPMQueryBinding.addCanonicalQuery(builder, CANONICAL_QUERYOffset);
    _DPMQueryBinding.addQuerySha256(builder, QUERY_SHA256Offset);
    _DPMQueryBinding.addResultSha256(builder, RESULT_SHA256Offset);
    _DPMQueryBinding.addQueryEngine(builder, QUERY_ENGINEOffset);
    _DPMQueryBinding.addQueryEngineVersion(builder, QUERY_ENGINE_VERSIONOffset);
    _DPMQueryBinding.addCanonicalOrder(builder, CANONICAL_ORDEROffset);
    _DPMQueryBinding.addQueryProtocol(builder, QUERY_PROTOCOLOffset);
    _DPMQueryBinding.addSchemaNames(builder, SCHEMA_NAMESOffset);
    _DPMQueryBinding.addProviderIds(builder, PROVIDER_IDSOffset);
    _DPMQueryBinding.addSourceNames(builder, SOURCE_NAMESOffset);
    _DPMQueryBinding.addBatchIds(builder, BATCH_IDSOffset);
    _DPMQueryBinding.addWindowStart(builder, WINDOW_STARTOffset);
    _DPMQueryBinding.addWindowEnd(builder, WINDOW_ENDOffset);
    return _DPMQueryBinding.endDPMQueryBinding(builder);
  }
  unpack() {
    return new DPMQueryBindingT(
      this.CANONICAL_QUERY(),
      this.QUERY_SHA256(),
      this.RESULT_SHA256(),
      this.QUERY_ENGINE(),
      this.QUERY_ENGINE_VERSION(),
      this.CANONICAL_ORDER(),
      this.QUERY_PROTOCOL(),
      this.bb.createScalarList(this.SCHEMA_NAMES.bind(this), this.schemaNamesLength()),
      this.bb.createScalarList(this.PROVIDER_IDS.bind(this), this.providerIdsLength()),
      this.bb.createScalarList(this.SOURCE_NAMES.bind(this), this.sourceNamesLength()),
      this.bb.createScalarList(this.BATCH_IDS.bind(this), this.batchIdsLength()),
      this.WINDOW_START(),
      this.WINDOW_END()
    );
  }
  unpackTo(_o) {
    _o.CANONICAL_QUERY = this.CANONICAL_QUERY();
    _o.QUERY_SHA256 = this.QUERY_SHA256();
    _o.RESULT_SHA256 = this.RESULT_SHA256();
    _o.QUERY_ENGINE = this.QUERY_ENGINE();
    _o.QUERY_ENGINE_VERSION = this.QUERY_ENGINE_VERSION();
    _o.CANONICAL_ORDER = this.CANONICAL_ORDER();
    _o.QUERY_PROTOCOL = this.QUERY_PROTOCOL();
    _o.SCHEMA_NAMES = this.bb.createScalarList(this.SCHEMA_NAMES.bind(this), this.schemaNamesLength());
    _o.PROVIDER_IDS = this.bb.createScalarList(this.PROVIDER_IDS.bind(this), this.providerIdsLength());
    _o.SOURCE_NAMES = this.bb.createScalarList(this.SOURCE_NAMES.bind(this), this.sourceNamesLength());
    _o.BATCH_IDS = this.bb.createScalarList(this.BATCH_IDS.bind(this), this.batchIdsLength());
    _o.WINDOW_START = this.WINDOW_START();
    _o.WINDOW_END = this.WINDOW_END();
  }
};
var DPMQueryBindingT = class {
  constructor(CANONICAL_QUERY = null, QUERY_SHA256 = null, RESULT_SHA256 = null, QUERY_ENGINE = null, QUERY_ENGINE_VERSION = null, CANONICAL_ORDER = null, QUERY_PROTOCOL = null, SCHEMA_NAMES = [], PROVIDER_IDS = [], SOURCE_NAMES = [], BATCH_IDS = [], WINDOW_START = null, WINDOW_END = null) {
    this.CANONICAL_QUERY = CANONICAL_QUERY;
    this.QUERY_SHA256 = QUERY_SHA256;
    this.RESULT_SHA256 = RESULT_SHA256;
    this.QUERY_ENGINE = QUERY_ENGINE;
    this.QUERY_ENGINE_VERSION = QUERY_ENGINE_VERSION;
    this.CANONICAL_ORDER = CANONICAL_ORDER;
    this.QUERY_PROTOCOL = QUERY_PROTOCOL;
    this.SCHEMA_NAMES = SCHEMA_NAMES;
    this.PROVIDER_IDS = PROVIDER_IDS;
    this.SOURCE_NAMES = SOURCE_NAMES;
    this.BATCH_IDS = BATCH_IDS;
    this.WINDOW_START = WINDOW_START;
    this.WINDOW_END = WINDOW_END;
  }
  pack(builder) {
    const CANONICAL_QUERY = this.CANONICAL_QUERY !== null ? builder.createString(this.CANONICAL_QUERY) : 0;
    const QUERY_SHA256 = this.QUERY_SHA256 !== null ? builder.createString(this.QUERY_SHA256) : 0;
    const RESULT_SHA256 = this.RESULT_SHA256 !== null ? builder.createString(this.RESULT_SHA256) : 0;
    const QUERY_ENGINE = this.QUERY_ENGINE !== null ? builder.createString(this.QUERY_ENGINE) : 0;
    const QUERY_ENGINE_VERSION = this.QUERY_ENGINE_VERSION !== null ? builder.createString(this.QUERY_ENGINE_VERSION) : 0;
    const CANONICAL_ORDER = this.CANONICAL_ORDER !== null ? builder.createString(this.CANONICAL_ORDER) : 0;
    const QUERY_PROTOCOL = this.QUERY_PROTOCOL !== null ? builder.createString(this.QUERY_PROTOCOL) : 0;
    const SCHEMA_NAMES = DPMQueryBinding.createSchemaNamesVector(builder, builder.createObjectOffsetList(this.SCHEMA_NAMES));
    const PROVIDER_IDS = DPMQueryBinding.createProviderIdsVector(builder, builder.createObjectOffsetList(this.PROVIDER_IDS));
    const SOURCE_NAMES = DPMQueryBinding.createSourceNamesVector(builder, builder.createObjectOffsetList(this.SOURCE_NAMES));
    const BATCH_IDS = DPMQueryBinding.createBatchIdsVector(builder, builder.createObjectOffsetList(this.BATCH_IDS));
    const WINDOW_START = this.WINDOW_START !== null ? builder.createString(this.WINDOW_START) : 0;
    const WINDOW_END = this.WINDOW_END !== null ? builder.createString(this.WINDOW_END) : 0;
    return DPMQueryBinding.createDPMQueryBinding(
      builder,
      CANONICAL_QUERY,
      QUERY_SHA256,
      RESULT_SHA256,
      QUERY_ENGINE,
      QUERY_ENGINE_VERSION,
      CANONICAL_ORDER,
      QUERY_PROTOCOL,
      SCHEMA_NAMES,
      PROVIDER_IDS,
      SOURCE_NAMES,
      BATCH_IDS,
      WINDOW_START,
      WINDOW_END
    );
  }
};

// lib/ts/DPM/DPMSourceBatch.ts
var flatbuffers9 = __toESM(require_flatbuffers(), 1);
var DPMSourceBatch = class _DPMSourceBatch {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPMSourceBatch(bb, obj) {
    return (obj || new _DPMSourceBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPMSourceBatch(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers9.SIZE_PREFIX_LENGTH);
    return (obj || new _DPMSourceBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  SOURCE_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SOURCE_URL(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  SOURCE_SHA256(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  HTTP_ETAG(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  HTTP_LAST_MODIFIED(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  RETRIEVED_AT(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  PARSER_VERSION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Number of normalized records emitted from this source.
   */
  RECORD_COUNT() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  WARNINGS(index, optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }
  warningsLength() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  LICENSE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  LICENSE_URL(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  CITATION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startDPMSourceBatch(builder) {
    builder.startObject(12);
  }
  static addSourceName(builder, SOURCE_NAMEOffset) {
    builder.addFieldOffset(0, SOURCE_NAMEOffset, 0);
  }
  static addSourceUrl(builder, SOURCE_URLOffset) {
    builder.addFieldOffset(1, SOURCE_URLOffset, 0);
  }
  static addSourceSha256(builder, SOURCE_SHA256Offset) {
    builder.addFieldOffset(2, SOURCE_SHA256Offset, 0);
  }
  static addHttpEtag(builder, HTTP_ETAGOffset) {
    builder.addFieldOffset(3, HTTP_ETAGOffset, 0);
  }
  static addHttpLastModified(builder, HTTP_LAST_MODIFIEDOffset) {
    builder.addFieldOffset(4, HTTP_LAST_MODIFIEDOffset, 0);
  }
  static addRetrievedAt(builder, RETRIEVED_ATOffset) {
    builder.addFieldOffset(5, RETRIEVED_ATOffset, 0);
  }
  static addParserVersion(builder, PARSER_VERSIONOffset) {
    builder.addFieldOffset(6, PARSER_VERSIONOffset, 0);
  }
  static addRecordCount(builder, RECORD_COUNT) {
    builder.addFieldInt64(7, RECORD_COUNT, BigInt("0"));
  }
  static addWarnings(builder, WARNINGSOffset) {
    builder.addFieldOffset(8, WARNINGSOffset, 0);
  }
  static createWarningsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startWarningsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addLicense(builder, LICENSEOffset) {
    builder.addFieldOffset(9, LICENSEOffset, 0);
  }
  static addLicenseUrl(builder, LICENSE_URLOffset) {
    builder.addFieldOffset(10, LICENSE_URLOffset, 0);
  }
  static addCitation(builder, CITATIONOffset) {
    builder.addFieldOffset(11, CITATIONOffset, 0);
  }
  static endDPMSourceBatch(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDPMSourceBatch(builder, SOURCE_NAMEOffset, SOURCE_URLOffset, SOURCE_SHA256Offset, HTTP_ETAGOffset, HTTP_LAST_MODIFIEDOffset, RETRIEVED_ATOffset, PARSER_VERSIONOffset, RECORD_COUNT, WARNINGSOffset, LICENSEOffset, LICENSE_URLOffset, CITATIONOffset) {
    _DPMSourceBatch.startDPMSourceBatch(builder);
    _DPMSourceBatch.addSourceName(builder, SOURCE_NAMEOffset);
    _DPMSourceBatch.addSourceUrl(builder, SOURCE_URLOffset);
    _DPMSourceBatch.addSourceSha256(builder, SOURCE_SHA256Offset);
    _DPMSourceBatch.addHttpEtag(builder, HTTP_ETAGOffset);
    _DPMSourceBatch.addHttpLastModified(builder, HTTP_LAST_MODIFIEDOffset);
    _DPMSourceBatch.addRetrievedAt(builder, RETRIEVED_ATOffset);
    _DPMSourceBatch.addParserVersion(builder, PARSER_VERSIONOffset);
    _DPMSourceBatch.addRecordCount(builder, RECORD_COUNT);
    _DPMSourceBatch.addWarnings(builder, WARNINGSOffset);
    _DPMSourceBatch.addLicense(builder, LICENSEOffset);
    _DPMSourceBatch.addLicenseUrl(builder, LICENSE_URLOffset);
    _DPMSourceBatch.addCitation(builder, CITATIONOffset);
    return _DPMSourceBatch.endDPMSourceBatch(builder);
  }
  unpack() {
    return new DPMSourceBatchT(
      this.SOURCE_NAME(),
      this.SOURCE_URL(),
      this.SOURCE_SHA256(),
      this.HTTP_ETAG(),
      this.HTTP_LAST_MODIFIED(),
      this.RETRIEVED_AT(),
      this.PARSER_VERSION(),
      this.RECORD_COUNT(),
      this.bb.createScalarList(this.WARNINGS.bind(this), this.warningsLength()),
      this.LICENSE(),
      this.LICENSE_URL(),
      this.CITATION()
    );
  }
  unpackTo(_o) {
    _o.SOURCE_NAME = this.SOURCE_NAME();
    _o.SOURCE_URL = this.SOURCE_URL();
    _o.SOURCE_SHA256 = this.SOURCE_SHA256();
    _o.HTTP_ETAG = this.HTTP_ETAG();
    _o.HTTP_LAST_MODIFIED = this.HTTP_LAST_MODIFIED();
    _o.RETRIEVED_AT = this.RETRIEVED_AT();
    _o.PARSER_VERSION = this.PARSER_VERSION();
    _o.RECORD_COUNT = this.RECORD_COUNT();
    _o.WARNINGS = this.bb.createScalarList(this.WARNINGS.bind(this), this.warningsLength());
    _o.LICENSE = this.LICENSE();
    _o.LICENSE_URL = this.LICENSE_URL();
    _o.CITATION = this.CITATION();
  }
};
var DPMSourceBatchT = class {
  constructor(SOURCE_NAME = null, SOURCE_URL = null, SOURCE_SHA256 = null, HTTP_ETAG = null, HTTP_LAST_MODIFIED = null, RETRIEVED_AT = null, PARSER_VERSION = null, RECORD_COUNT = BigInt("0"), WARNINGS = [], LICENSE = null, LICENSE_URL = null, CITATION = null) {
    this.SOURCE_NAME = SOURCE_NAME;
    this.SOURCE_URL = SOURCE_URL;
    this.SOURCE_SHA256 = SOURCE_SHA256;
    this.HTTP_ETAG = HTTP_ETAG;
    this.HTTP_LAST_MODIFIED = HTTP_LAST_MODIFIED;
    this.RETRIEVED_AT = RETRIEVED_AT;
    this.PARSER_VERSION = PARSER_VERSION;
    this.RECORD_COUNT = RECORD_COUNT;
    this.WARNINGS = WARNINGS;
    this.LICENSE = LICENSE;
    this.LICENSE_URL = LICENSE_URL;
    this.CITATION = CITATION;
  }
  pack(builder) {
    const SOURCE_NAME = this.SOURCE_NAME !== null ? builder.createString(this.SOURCE_NAME) : 0;
    const SOURCE_URL = this.SOURCE_URL !== null ? builder.createString(this.SOURCE_URL) : 0;
    const SOURCE_SHA256 = this.SOURCE_SHA256 !== null ? builder.createString(this.SOURCE_SHA256) : 0;
    const HTTP_ETAG = this.HTTP_ETAG !== null ? builder.createString(this.HTTP_ETAG) : 0;
    const HTTP_LAST_MODIFIED = this.HTTP_LAST_MODIFIED !== null ? builder.createString(this.HTTP_LAST_MODIFIED) : 0;
    const RETRIEVED_AT = this.RETRIEVED_AT !== null ? builder.createString(this.RETRIEVED_AT) : 0;
    const PARSER_VERSION = this.PARSER_VERSION !== null ? builder.createString(this.PARSER_VERSION) : 0;
    const WARNINGS = DPMSourceBatch.createWarningsVector(builder, builder.createObjectOffsetList(this.WARNINGS));
    const LICENSE = this.LICENSE !== null ? builder.createString(this.LICENSE) : 0;
    const LICENSE_URL = this.LICENSE_URL !== null ? builder.createString(this.LICENSE_URL) : 0;
    const CITATION = this.CITATION !== null ? builder.createString(this.CITATION) : 0;
    return DPMSourceBatch.createDPMSourceBatch(
      builder,
      SOURCE_NAME,
      SOURCE_URL,
      SOURCE_SHA256,
      HTTP_ETAG,
      HTTP_LAST_MODIFIED,
      RETRIEVED_AT,
      PARSER_VERSION,
      this.RECORD_COUNT,
      WARNINGS,
      LICENSE,
      LICENSE_URL,
      CITATION
    );
  }
};

// lib/ts/DPM/DPM.ts
var DPM = class _DPM {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDPM(bb, obj) {
    return (obj || new _DPM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDPM(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers10.SIZE_PREFIX_LENGTH);
    return (obj || new _DPM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$DPM");
  }
  VERSION(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  DATASET_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  UPDATE_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  FILE_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  PROVIDER_PEER_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  PROVIDER_EPM_CID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  PUBLISH_TIMESTAMP(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return this.bb.__string(this.bb_pos + offset, optionalEncoding);
  }
  /**
   * Published shard, index, and auxiliary artifacts.
   */
  ASSETS(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? (obj || new DPMAsset()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  assetsLength() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  /**
   * Source batches used to build the dataset.
   */
  SOURCES(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? (obj || new DPMSourceBatch()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  sourcesLength() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  /**
   * Replayable query binding.
   */
  QUERY(obj) {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? (obj || new DPMQueryBinding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * Signed completeness-capable indexes. Inclusion proofs prove that returned
   * records are authentic members of DATA_ROOT. Range-completeness proofs also
   * prove that no matching records were omitted, but only for predicates
   * expressible against these declared indexes.
   */
  INDEXES(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? (obj || new DPMCompletenessIndex()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  indexesLength() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  /**
   * Encryption/key metadata.
   */
  ENCRYPTION(obj) {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? (obj || new DPMEncryptionBinding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * Provider signature over the canonical manifest bytes or manifest digest.
   */
  PROVIDER_SIGNATURE(index) {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
  }
  providerSignatureLength() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  providerSignatureArray() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  SIGNATURE_TYPE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startDPM(builder) {
    builder.startObject(14);
  }
  static addVersion(builder, VERSIONOffset) {
    builder.addFieldOffset(0, VERSIONOffset, 0);
  }
  static addDatasetId(builder, DATASET_IDOffset) {
    builder.addFieldOffset(1, DATASET_IDOffset, 0);
  }
  static addUpdateId(builder, UPDATE_IDOffset) {
    builder.addFieldOffset(2, UPDATE_IDOffset, 0);
  }
  static addFileId(builder, FILE_IDOffset) {
    builder.addFieldOffset(3, FILE_IDOffset, 0);
  }
  static addProviderPeerId(builder, PROVIDER_PEER_IDOffset) {
    builder.addFieldOffset(4, PROVIDER_PEER_IDOffset, 0);
  }
  static addProviderEpmCid(builder, PROVIDER_EPM_CIDOffset) {
    builder.addFieldOffset(5, PROVIDER_EPM_CIDOffset, 0);
  }
  static addPublishTimestamp(builder, PUBLISH_TIMESTAMPOffset) {
    builder.addFieldOffset(6, PUBLISH_TIMESTAMPOffset, 0);
  }
  static addAssets(builder, ASSETSOffset) {
    builder.addFieldOffset(7, ASSETSOffset, 0);
  }
  static createAssetsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startAssetsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addSources(builder, SOURCESOffset) {
    builder.addFieldOffset(8, SOURCESOffset, 0);
  }
  static createSourcesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startSourcesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addQuery(builder, QUERYOffset) {
    builder.addFieldOffset(9, QUERYOffset, 0);
  }
  static addIndexes(builder, INDEXESOffset) {
    builder.addFieldOffset(10, INDEXESOffset, 0);
  }
  static createIndexesVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startIndexesVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addEncryption(builder, ENCRYPTIONOffset) {
    builder.addFieldOffset(11, ENCRYPTIONOffset, 0);
  }
  static addProviderSignature(builder, PROVIDER_SIGNATUREOffset) {
    builder.addFieldOffset(12, PROVIDER_SIGNATUREOffset, 0);
  }
  static createProviderSignatureVector(builder, data) {
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }
  static startProviderSignatureVector(builder, numElems) {
    builder.startVector(1, numElems, 1);
  }
  static addSignatureType(builder, SIGNATURE_TYPEOffset) {
    builder.addFieldOffset(13, SIGNATURE_TYPEOffset, 0);
  }
  static endDPM(builder) {
    const offset = builder.endObject();
    builder.requiredField(offset, 6);
    builder.requiredField(offset, 8);
    builder.requiredField(offset, 12);
    builder.requiredField(offset, 16);
    return offset;
  }
  static finishDPMBuffer(builder, offset) {
    builder.finish(offset, "$DPM");
  }
  static finishSizePrefixedDPMBuffer(builder, offset) {
    builder.finish(offset, "$DPM", true);
  }
  unpack() {
    return new DPMT(
      this.VERSION(),
      this.DATASET_ID(),
      this.UPDATE_ID(),
      this.FILE_ID(),
      this.PROVIDER_PEER_ID(),
      this.PROVIDER_EPM_CID(),
      this.PUBLISH_TIMESTAMP(),
      this.bb.createObjList(this.ASSETS.bind(this), this.assetsLength()),
      this.bb.createObjList(this.SOURCES.bind(this), this.sourcesLength()),
      this.QUERY() !== null ? this.QUERY().unpack() : null,
      this.bb.createObjList(this.INDEXES.bind(this), this.indexesLength()),
      this.ENCRYPTION() !== null ? this.ENCRYPTION().unpack() : null,
      this.bb.createScalarList(this.PROVIDER_SIGNATURE.bind(this), this.providerSignatureLength()),
      this.SIGNATURE_TYPE()
    );
  }
  unpackTo(_o) {
    _o.VERSION = this.VERSION();
    _o.DATASET_ID = this.DATASET_ID();
    _o.UPDATE_ID = this.UPDATE_ID();
    _o.FILE_ID = this.FILE_ID();
    _o.PROVIDER_PEER_ID = this.PROVIDER_PEER_ID();
    _o.PROVIDER_EPM_CID = this.PROVIDER_EPM_CID();
    _o.PUBLISH_TIMESTAMP = this.PUBLISH_TIMESTAMP();
    _o.ASSETS = this.bb.createObjList(this.ASSETS.bind(this), this.assetsLength());
    _o.SOURCES = this.bb.createObjList(this.SOURCES.bind(this), this.sourcesLength());
    _o.QUERY = this.QUERY() !== null ? this.QUERY().unpack() : null;
    _o.INDEXES = this.bb.createObjList(this.INDEXES.bind(this), this.indexesLength());
    _o.ENCRYPTION = this.ENCRYPTION() !== null ? this.ENCRYPTION().unpack() : null;
    _o.PROVIDER_SIGNATURE = this.bb.createScalarList(this.PROVIDER_SIGNATURE.bind(this), this.providerSignatureLength());
    _o.SIGNATURE_TYPE = this.SIGNATURE_TYPE();
  }
};
var DPMT = class {
  constructor(VERSION = null, DATASET_ID = null, UPDATE_ID = null, FILE_ID = null, PROVIDER_PEER_ID = null, PROVIDER_EPM_CID = null, PUBLISH_TIMESTAMP = null, ASSETS = [], SOURCES = [], QUERY = null, INDEXES = [], ENCRYPTION = null, PROVIDER_SIGNATURE = [], SIGNATURE_TYPE = null) {
    this.VERSION = VERSION;
    this.DATASET_ID = DATASET_ID;
    this.UPDATE_ID = UPDATE_ID;
    this.FILE_ID = FILE_ID;
    this.PROVIDER_PEER_ID = PROVIDER_PEER_ID;
    this.PROVIDER_EPM_CID = PROVIDER_EPM_CID;
    this.PUBLISH_TIMESTAMP = PUBLISH_TIMESTAMP;
    this.ASSETS = ASSETS;
    this.SOURCES = SOURCES;
    this.QUERY = QUERY;
    this.INDEXES = INDEXES;
    this.ENCRYPTION = ENCRYPTION;
    this.PROVIDER_SIGNATURE = PROVIDER_SIGNATURE;
    this.SIGNATURE_TYPE = SIGNATURE_TYPE;
  }
  pack(builder) {
    const VERSION = this.VERSION !== null ? builder.createString(this.VERSION) : 0;
    const DATASET_ID = this.DATASET_ID !== null ? builder.createString(this.DATASET_ID) : 0;
    const UPDATE_ID = this.UPDATE_ID !== null ? builder.createString(this.UPDATE_ID) : 0;
    const FILE_ID = this.FILE_ID !== null ? builder.createString(this.FILE_ID) : 0;
    const PROVIDER_PEER_ID = this.PROVIDER_PEER_ID !== null ? builder.createString(this.PROVIDER_PEER_ID) : 0;
    const PROVIDER_EPM_CID = this.PROVIDER_EPM_CID !== null ? builder.createString(this.PROVIDER_EPM_CID) : 0;
    const PUBLISH_TIMESTAMP = this.PUBLISH_TIMESTAMP !== null ? builder.createString(this.PUBLISH_TIMESTAMP) : 0;
    const ASSETS = DPM.createAssetsVector(builder, builder.createObjectOffsetList(this.ASSETS));
    const SOURCES = DPM.createSourcesVector(builder, builder.createObjectOffsetList(this.SOURCES));
    const QUERY = this.QUERY !== null ? this.QUERY.pack(builder) : 0;
    const INDEXES = DPM.createIndexesVector(builder, builder.createObjectOffsetList(this.INDEXES));
    const ENCRYPTION = this.ENCRYPTION !== null ? this.ENCRYPTION.pack(builder) : 0;
    const PROVIDER_SIGNATURE = DPM.createProviderSignatureVector(builder, this.PROVIDER_SIGNATURE);
    const SIGNATURE_TYPE = this.SIGNATURE_TYPE !== null ? builder.createString(this.SIGNATURE_TYPE) : 0;
    DPM.startDPM(builder);
    DPM.addVersion(builder, VERSION);
    DPM.addDatasetId(builder, DATASET_ID);
    DPM.addUpdateId(builder, UPDATE_ID);
    DPM.addFileId(builder, FILE_ID);
    DPM.addProviderPeerId(builder, PROVIDER_PEER_ID);
    DPM.addProviderEpmCid(builder, PROVIDER_EPM_CID);
    DPM.addPublishTimestamp(builder, PUBLISH_TIMESTAMP);
    DPM.addAssets(builder, ASSETS);
    DPM.addSources(builder, SOURCES);
    DPM.addQuery(builder, QUERY);
    DPM.addIndexes(builder, INDEXES);
    DPM.addEncryption(builder, ENCRYPTION);
    DPM.addProviderSignature(builder, PROVIDER_SIGNATURE);
    DPM.addSignatureType(builder, SIGNATURE_TYPE);
    return DPM.endDPM(builder);
  }
};
export {
  CVR,
  CVRT,
  DPM,
  DPMAsset,
  DPMAssetT,
  DPMCompletenessIndex,
  DPMCompletenessIndexT,
  DPMDerivedBuild,
  DPMDerivedBuildT,
  DPMEncryptionBinding,
  DPMEncryptionBindingT,
  DPMQueryBinding,
  DPMQueryBindingT,
  DPMRealismModel,
  DPMRealismModelT,
  DPMSourceBatch,
  DPMSourceBatchT,
  DPMT,
  PVN,
  PVNT,
  covarianceCalibration,
  covarianceRule,
  dpmTransportKind,
  publicationAssetKind,
  pvnLicenseClass,
  pvnSourceKind
};
