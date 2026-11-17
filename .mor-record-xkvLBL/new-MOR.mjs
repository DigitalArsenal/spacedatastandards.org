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

// lib/ts/MOR/covarianceCalibration.ts
var covarianceCalibration = /* @__PURE__ */ ((covarianceCalibration2) => {
  covarianceCalibration2[covarianceCalibration2["Unspecified"] = 0] = "Unspecified";
  covarianceCalibration2[covarianceCalibration2["Uncalibrated"] = 1] = "Uncalibrated";
  covarianceCalibration2[covarianceCalibration2["Calibrated"] = 2] = "Calibrated";
  return covarianceCalibration2;
})(covarianceCalibration || {});

// lib/ts/MOR/covarianceRule.ts
var covarianceRule = /* @__PURE__ */ ((covarianceRule2) => {
  covarianceRule2[covarianceRule2["Unspecified"] = 0] = "Unspecified";
  covarianceRule2[covarianceRule2["Operator"] = 1] = "Operator";
  covarianceRule2[covarianceRule2["ScaledFit"] = 2] = "ScaledFit";
  covarianceRule2[covarianceRule2["SourceModel"] = 3] = "SourceModel";
  covarianceRule2[covarianceRule2["PooledModel"] = 4] = "PooledModel";
  covarianceRule2[covarianceRule2["EmpiricalHistoryShrunk"] = 5] = "EmpiricalHistoryShrunk";
  return covarianceRule2;
})(covarianceRule || {});

// lib/ts/MOR/CVR.ts
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

// lib/ts/MOR/meanElementSource.ts
var meanElementSource = /* @__PURE__ */ ((meanElementSource2) => {
  meanElementSource2[meanElementSource2["SGP4"] = 0] = "SGP4";
  meanElementSource2[meanElementSource2["SGP4XP"] = 1] = "SGP4XP";
  meanElementSource2[meanElementSource2["DSST"] = 2] = "DSST";
  meanElementSource2[meanElementSource2["USM"] = 3] = "USM";
  meanElementSource2[meanElementSource2["AP"] = 5] = "AP";
  meanElementSource2[meanElementSource2["UNSPECIFIED"] = 6] = "UNSPECIFIED";
  return meanElementSource2;
})(meanElementSource || {});

// lib/ts/MOR/MET.ts
var flatbuffers2 = __toESM(require_flatbuffers(), 1);
var MET = class _MET {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMET(bb, obj) {
    return (obj || new _MET()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMET(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers2.SIZE_PREFIX_LENGTH);
    return (obj || new _MET()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$MET");
  }
  MEAN_ELEMENT_THEORY() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* SGP4 */;
  }
  static startMET(builder) {
    builder.startObject(1);
  }
  static addMeanElementTheory(builder, MEAN_ELEMENT_THEORY) {
    builder.addFieldInt8(0, MEAN_ELEMENT_THEORY, 0 /* SGP4 */);
  }
  static endMET(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishMETBuffer(builder, offset) {
    builder.finish(offset, "$MET");
  }
  static finishSizePrefixedMETBuffer(builder, offset) {
    builder.finish(offset, "$MET", true);
  }
  static createMET(builder, MEAN_ELEMENT_THEORY) {
    _MET.startMET(builder);
    _MET.addMeanElementTheory(builder, MEAN_ELEMENT_THEORY);
    return _MET.endMET(builder);
  }
  unpack() {
    return new METT(
      this.MEAN_ELEMENT_THEORY()
    );
  }
  unpackTo(_o) {
    _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY();
  }
};
var METT = class {
  constructor(MEAN_ELEMENT_THEORY = 0 /* SGP4 */) {
    this.MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;
  }
  pack(builder) {
    return MET.createMET(
      builder,
      this.MEAN_ELEMENT_THEORY
    );
  }
};

// lib/ts/MOR/MOR.ts
var flatbuffers6 = __toESM(require_flatbuffers(), 1);

// lib/ts/MOR/MORCovariancePropagation.ts
var MORCovariancePropagation = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  FLOOR_UU_KM2() {
    return this.bb.readFloat64(this.bb_pos);
  }
  FLOOR_VU_KM2() {
    return this.bb.readFloat64(this.bb_pos + 8);
  }
  FLOOR_VV_KM2() {
    return this.bb.readFloat64(this.bb_pos + 16);
  }
  FLOOR_WU_KM2() {
    return this.bb.readFloat64(this.bb_pos + 24);
  }
  FLOOR_WV_KM2() {
    return this.bb.readFloat64(this.bb_pos + 32);
  }
  FLOOR_WW_KM2() {
    return this.bb.readFloat64(this.bb_pos + 40);
  }
  NOISE_ECCENTRICITY_PER_DAY() {
    return this.bb.readFloat64(this.bb_pos + 48);
  }
  NOISE_INCLINATION_PER_DAY() {
    return this.bb.readFloat64(this.bb_pos + 56);
  }
  NOISE_MEAN_MOTION_RELATIVE() {
    return this.bb.readFloat64(this.bb_pos + 64);
  }
  NOISE_NON_GRAVITATIONAL_RAD_DAY2() {
    return this.bb.readFloat64(this.bb_pos + 72);
  }
  NOISE_START_MINUTES() {
    return this.bb.readFloat64(this.bb_pos + 80);
  }
  NON_GRAVITATIONAL_SHARE() {
    return this.bb.readFloat64(this.bb_pos + 88);
  }
  NON_GRAVITATIONAL_RATE_PER_DAY() {
    return this.bb.readFloat64(this.bb_pos + 96);
  }
  static sizeOf() {
    return 104;
  }
  static createMORCovariancePropagation(builder, FLOOR_UU_KM2, FLOOR_VU_KM2, FLOOR_VV_KM2, FLOOR_WU_KM2, FLOOR_WV_KM2, FLOOR_WW_KM2, NOISE_ECCENTRICITY_PER_DAY, NOISE_INCLINATION_PER_DAY, NOISE_MEAN_MOTION_RELATIVE, NOISE_NON_GRAVITATIONAL_RAD_DAY2, NOISE_START_MINUTES, NON_GRAVITATIONAL_SHARE, NON_GRAVITATIONAL_RATE_PER_DAY) {
    builder.prep(8, 104);
    builder.writeFloat64(NON_GRAVITATIONAL_RATE_PER_DAY);
    builder.writeFloat64(NON_GRAVITATIONAL_SHARE);
    builder.writeFloat64(NOISE_START_MINUTES);
    builder.writeFloat64(NOISE_NON_GRAVITATIONAL_RAD_DAY2);
    builder.writeFloat64(NOISE_MEAN_MOTION_RELATIVE);
    builder.writeFloat64(NOISE_INCLINATION_PER_DAY);
    builder.writeFloat64(NOISE_ECCENTRICITY_PER_DAY);
    builder.writeFloat64(FLOOR_WW_KM2);
    builder.writeFloat64(FLOOR_WV_KM2);
    builder.writeFloat64(FLOOR_WU_KM2);
    builder.writeFloat64(FLOOR_VV_KM2);
    builder.writeFloat64(FLOOR_VU_KM2);
    builder.writeFloat64(FLOOR_UU_KM2);
    return builder.offset();
  }
  unpack() {
    return new MORCovariancePropagationT(
      this.FLOOR_UU_KM2(),
      this.FLOOR_VU_KM2(),
      this.FLOOR_VV_KM2(),
      this.FLOOR_WU_KM2(),
      this.FLOOR_WV_KM2(),
      this.FLOOR_WW_KM2(),
      this.NOISE_ECCENTRICITY_PER_DAY(),
      this.NOISE_INCLINATION_PER_DAY(),
      this.NOISE_MEAN_MOTION_RELATIVE(),
      this.NOISE_NON_GRAVITATIONAL_RAD_DAY2(),
      this.NOISE_START_MINUTES(),
      this.NON_GRAVITATIONAL_SHARE(),
      this.NON_GRAVITATIONAL_RATE_PER_DAY()
    );
  }
  unpackTo(_o) {
    _o.FLOOR_UU_KM2 = this.FLOOR_UU_KM2();
    _o.FLOOR_VU_KM2 = this.FLOOR_VU_KM2();
    _o.FLOOR_VV_KM2 = this.FLOOR_VV_KM2();
    _o.FLOOR_WU_KM2 = this.FLOOR_WU_KM2();
    _o.FLOOR_WV_KM2 = this.FLOOR_WV_KM2();
    _o.FLOOR_WW_KM2 = this.FLOOR_WW_KM2();
    _o.NOISE_ECCENTRICITY_PER_DAY = this.NOISE_ECCENTRICITY_PER_DAY();
    _o.NOISE_INCLINATION_PER_DAY = this.NOISE_INCLINATION_PER_DAY();
    _o.NOISE_MEAN_MOTION_RELATIVE = this.NOISE_MEAN_MOTION_RELATIVE();
    _o.NOISE_NON_GRAVITATIONAL_RAD_DAY2 = this.NOISE_NON_GRAVITATIONAL_RAD_DAY2();
    _o.NOISE_START_MINUTES = this.NOISE_START_MINUTES();
    _o.NON_GRAVITATIONAL_SHARE = this.NON_GRAVITATIONAL_SHARE();
    _o.NON_GRAVITATIONAL_RATE_PER_DAY = this.NON_GRAVITATIONAL_RATE_PER_DAY();
  }
};
var MORCovariancePropagationT = class {
  constructor(FLOOR_UU_KM2 = 0, FLOOR_VU_KM2 = 0, FLOOR_VV_KM2 = 0, FLOOR_WU_KM2 = 0, FLOOR_WV_KM2 = 0, FLOOR_WW_KM2 = 0, NOISE_ECCENTRICITY_PER_DAY = 0, NOISE_INCLINATION_PER_DAY = 0, NOISE_MEAN_MOTION_RELATIVE = 0, NOISE_NON_GRAVITATIONAL_RAD_DAY2 = 0, NOISE_START_MINUTES = 0, NON_GRAVITATIONAL_SHARE = 0, NON_GRAVITATIONAL_RATE_PER_DAY = 0) {
    this.FLOOR_UU_KM2 = FLOOR_UU_KM2;
    this.FLOOR_VU_KM2 = FLOOR_VU_KM2;
    this.FLOOR_VV_KM2 = FLOOR_VV_KM2;
    this.FLOOR_WU_KM2 = FLOOR_WU_KM2;
    this.FLOOR_WV_KM2 = FLOOR_WV_KM2;
    this.FLOOR_WW_KM2 = FLOOR_WW_KM2;
    this.NOISE_ECCENTRICITY_PER_DAY = NOISE_ECCENTRICITY_PER_DAY;
    this.NOISE_INCLINATION_PER_DAY = NOISE_INCLINATION_PER_DAY;
    this.NOISE_MEAN_MOTION_RELATIVE = NOISE_MEAN_MOTION_RELATIVE;
    this.NOISE_NON_GRAVITATIONAL_RAD_DAY2 = NOISE_NON_GRAVITATIONAL_RAD_DAY2;
    this.NOISE_START_MINUTES = NOISE_START_MINUTES;
    this.NON_GRAVITATIONAL_SHARE = NON_GRAVITATIONAL_SHARE;
    this.NON_GRAVITATIONAL_RATE_PER_DAY = NON_GRAVITATIONAL_RATE_PER_DAY;
  }
  pack(builder) {
    return MORCovariancePropagation.createMORCovariancePropagation(
      builder,
      this.FLOOR_UU_KM2,
      this.FLOOR_VU_KM2,
      this.FLOOR_VV_KM2,
      this.FLOOR_WU_KM2,
      this.FLOOR_WV_KM2,
      this.FLOOR_WW_KM2,
      this.NOISE_ECCENTRICITY_PER_DAY,
      this.NOISE_INCLINATION_PER_DAY,
      this.NOISE_MEAN_MOTION_RELATIVE,
      this.NOISE_NON_GRAVITATIONAL_RAD_DAY2,
      this.NOISE_START_MINUTES,
      this.NON_GRAVITATIONAL_SHARE,
      this.NON_GRAVITATIONAL_RATE_PER_DAY
    );
  }
};

// lib/ts/MOR/morWindowStatus.ts
var morWindowStatus = /* @__PURE__ */ ((morWindowStatus2) => {
  morWindowStatus2[morWindowStatus2["SERVED"] = 0] = "SERVED";
  morWindowStatus2[morWindowStatus2["THEORY_REFUSED"] = 1] = "THEORY_REFUSED";
  morWindowStatus2[morWindowStatus2["TOLERANCE_NOT_HELD"] = 2] = "TOLERANCE_NOT_HELD";
  return morWindowStatus2;
})(morWindowStatus || {});

// lib/ts/MOR/MORWindow.ts
var MORWindow = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  /**
   * Middle of the window, seconds after EPOCH_UNIX_US.
   */
  EPOCH_MID_SECONDS() {
    return this.bb.readFloat64(this.bb_pos);
  }
  /**
   * Half the window, seconds; above 0.
   */
  EPOCH_HALF_SPAN() {
    return this.bb.readFloat64(this.bb_pos + 8);
  }
  /**
   * SERVED, or why no record serves the window.
   */
  STATUS() {
    return this.bb.readUint8(this.bb_pos + 16);
  }
  /**
   * Position coefficients per axis, 1 or more when SERVED; the last triple is not +0.0 on all three axes.
   */
  POS_COEFF_COUNT() {
    return this.bb.readUint8(this.bb_pos + 17);
  }
  /**
   * Leading position coefficients per axis held as binary64; the rest are binary32. At most
   * POS_COEFF_COUNT.
   */
  POS_COEFF_HEAD_COUNT() {
    return this.bb.readUint8(this.bb_pos + 18);
  }
  /**
   * Velocity coefficients per axis; 0 for a position-only window. The last triple is not +0.0 on all
   * three axes.
   */
  VEL_COEFF_COUNT() {
    return this.bb.readUint8(this.bb_pos + 19);
  }
  /**
   * Leading velocity coefficients per axis held as binary64. At most VEL_COEFF_COUNT.
   */
  VEL_COEFF_HEAD_COUNT() {
    return this.bb.readUint8(this.bb_pos + 20);
  }
  static sizeOf() {
    return 24;
  }
  static createMORWindow(builder, EPOCH_MID_SECONDS, EPOCH_HALF_SPAN, STATUS, POS_COEFF_COUNT, POS_COEFF_HEAD_COUNT, VEL_COEFF_COUNT, VEL_COEFF_HEAD_COUNT) {
    builder.prep(8, 24);
    builder.pad(3);
    builder.writeInt8(VEL_COEFF_HEAD_COUNT);
    builder.writeInt8(VEL_COEFF_COUNT);
    builder.writeInt8(POS_COEFF_HEAD_COUNT);
    builder.writeInt8(POS_COEFF_COUNT);
    builder.writeInt8(STATUS);
    builder.writeFloat64(EPOCH_HALF_SPAN);
    builder.writeFloat64(EPOCH_MID_SECONDS);
    return builder.offset();
  }
  unpack() {
    return new MORWindowT(
      this.EPOCH_MID_SECONDS(),
      this.EPOCH_HALF_SPAN(),
      this.STATUS(),
      this.POS_COEFF_COUNT(),
      this.POS_COEFF_HEAD_COUNT(),
      this.VEL_COEFF_COUNT(),
      this.VEL_COEFF_HEAD_COUNT()
    );
  }
  unpackTo(_o) {
    _o.EPOCH_MID_SECONDS = this.EPOCH_MID_SECONDS();
    _o.EPOCH_HALF_SPAN = this.EPOCH_HALF_SPAN();
    _o.STATUS = this.STATUS();
    _o.POS_COEFF_COUNT = this.POS_COEFF_COUNT();
    _o.POS_COEFF_HEAD_COUNT = this.POS_COEFF_HEAD_COUNT();
    _o.VEL_COEFF_COUNT = this.VEL_COEFF_COUNT();
    _o.VEL_COEFF_HEAD_COUNT = this.VEL_COEFF_HEAD_COUNT();
  }
};
var MORWindowT = class {
  constructor(EPOCH_MID_SECONDS = 0, EPOCH_HALF_SPAN = 0, STATUS = 0 /* SERVED */, POS_COEFF_COUNT = 0, POS_COEFF_HEAD_COUNT = 0, VEL_COEFF_COUNT = 0, VEL_COEFF_HEAD_COUNT = 0) {
    this.EPOCH_MID_SECONDS = EPOCH_MID_SECONDS;
    this.EPOCH_HALF_SPAN = EPOCH_HALF_SPAN;
    this.STATUS = STATUS;
    this.POS_COEFF_COUNT = POS_COEFF_COUNT;
    this.POS_COEFF_HEAD_COUNT = POS_COEFF_HEAD_COUNT;
    this.VEL_COEFF_COUNT = VEL_COEFF_COUNT;
    this.VEL_COEFF_HEAD_COUNT = VEL_COEFF_HEAD_COUNT;
  }
  pack(builder) {
    return MORWindow.createMORWindow(
      builder,
      this.EPOCH_MID_SECONDS,
      this.EPOCH_HALF_SPAN,
      this.STATUS,
      this.POS_COEFF_COUNT,
      this.POS_COEFF_HEAD_COUNT,
      this.VEL_COEFF_COUNT,
      this.VEL_COEFF_HEAD_COUNT
    );
  }
};

// lib/ts/MOR/MPE.ts
var flatbuffers5 = __toESM(require_flatbuffers(), 1);

// lib/ts/MOR/MPETargeterSolution.ts
var flatbuffers4 = __toESM(require_flatbuffers(), 1);

// lib/ts/MOR/MPETargeterConstraint.ts
var flatbuffers3 = __toESM(require_flatbuffers(), 1);
var MPETargeterConstraint = class _MPETargeterConstraint {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMPETargeterConstraint(bb, obj) {
    return (obj || new _MPETargeterConstraint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMPETargeterConstraint(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers3.SIZE_PREFIX_LENGTH);
    return (obj || new _MPETargeterConstraint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  FRAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Epoch the constraint applies at (UNIX timestamp) [numeric seconds since
   * 1970-01-01T00:00:00 UTC]; 0 when the constraint anchors to EVENT
   */
  EPOCH() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  EVENT(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Target value of the constrained quantity
   */
  TARGET_VALUE() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Value achieved by the converged solution
   */
  ACHIEVED_VALUE() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Acceptable tolerance on the constrained quantity
   */
  TOLERANCE() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Relative weight of this constraint in the corrector
   */
  WEIGHT() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  static startMPETargeterConstraint(builder) {
    builder.startObject(8);
  }
  static addName(builder, NAMEOffset) {
    builder.addFieldOffset(0, NAMEOffset, 0);
  }
  static addFrame(builder, FRAMEOffset) {
    builder.addFieldOffset(1, FRAMEOffset, 0);
  }
  static addEpoch(builder, EPOCH) {
    builder.addFieldFloat64(2, EPOCH, 0);
  }
  static addEvent(builder, EVENTOffset) {
    builder.addFieldOffset(3, EVENTOffset, 0);
  }
  static addTargetValue(builder, TARGET_VALUE) {
    builder.addFieldFloat64(4, TARGET_VALUE, 0);
  }
  static addAchievedValue(builder, ACHIEVED_VALUE) {
    builder.addFieldFloat64(5, ACHIEVED_VALUE, 0);
  }
  static addTolerance(builder, TOLERANCE) {
    builder.addFieldFloat64(6, TOLERANCE, 0);
  }
  static addWeight(builder, WEIGHT) {
    builder.addFieldFloat64(7, WEIGHT, 0);
  }
  static endMPETargeterConstraint(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMPETargeterConstraint(builder, NAMEOffset, FRAMEOffset, EPOCH, EVENTOffset, TARGET_VALUE, ACHIEVED_VALUE, TOLERANCE, WEIGHT) {
    _MPETargeterConstraint.startMPETargeterConstraint(builder);
    _MPETargeterConstraint.addName(builder, NAMEOffset);
    _MPETargeterConstraint.addFrame(builder, FRAMEOffset);
    _MPETargeterConstraint.addEpoch(builder, EPOCH);
    _MPETargeterConstraint.addEvent(builder, EVENTOffset);
    _MPETargeterConstraint.addTargetValue(builder, TARGET_VALUE);
    _MPETargeterConstraint.addAchievedValue(builder, ACHIEVED_VALUE);
    _MPETargeterConstraint.addTolerance(builder, TOLERANCE);
    _MPETargeterConstraint.addWeight(builder, WEIGHT);
    return _MPETargeterConstraint.endMPETargeterConstraint(builder);
  }
  unpack() {
    return new MPETargeterConstraintT(
      this.NAME(),
      this.FRAME(),
      this.EPOCH(),
      this.EVENT(),
      this.TARGET_VALUE(),
      this.ACHIEVED_VALUE(),
      this.TOLERANCE(),
      this.WEIGHT()
    );
  }
  unpackTo(_o) {
    _o.NAME = this.NAME();
    _o.FRAME = this.FRAME();
    _o.EPOCH = this.EPOCH();
    _o.EVENT = this.EVENT();
    _o.TARGET_VALUE = this.TARGET_VALUE();
    _o.ACHIEVED_VALUE = this.ACHIEVED_VALUE();
    _o.TOLERANCE = this.TOLERANCE();
    _o.WEIGHT = this.WEIGHT();
  }
};
var MPETargeterConstraintT = class {
  constructor(NAME = null, FRAME = null, EPOCH = 0, EVENT = null, TARGET_VALUE = 0, ACHIEVED_VALUE = 0, TOLERANCE = 0, WEIGHT = 0) {
    this.NAME = NAME;
    this.FRAME = FRAME;
    this.EPOCH = EPOCH;
    this.EVENT = EVENT;
    this.TARGET_VALUE = TARGET_VALUE;
    this.ACHIEVED_VALUE = ACHIEVED_VALUE;
    this.TOLERANCE = TOLERANCE;
    this.WEIGHT = WEIGHT;
  }
  pack(builder) {
    const NAME = this.NAME !== null ? builder.createString(this.NAME) : 0;
    const FRAME = this.FRAME !== null ? builder.createString(this.FRAME) : 0;
    const EVENT = this.EVENT !== null ? builder.createString(this.EVENT) : 0;
    return MPETargeterConstraint.createMPETargeterConstraint(
      builder,
      NAME,
      FRAME,
      this.EPOCH,
      EVENT,
      this.TARGET_VALUE,
      this.ACHIEVED_VALUE,
      this.TOLERANCE,
      this.WEIGHT
    );
  }
};

// lib/ts/MOR/MPETargeterSolution.ts
var MPETargeterSolution = class _MPETargeterSolution {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMPETargeterSolution(bb, obj) {
    return (obj || new _MPETargeterSolution()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMPETargeterSolution(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers4.SIZE_PREFIX_LENGTH);
    return (obj || new _MPETargeterSolution()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  SOLVER(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  DYNAMICS(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Whether the corrector converged within tolerance
   */
  CONVERGED() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  /**
   * Number of corrector iterations executed
   */
  ITERATIONS() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * RMS of the final-iteration constraint residuals
   */
  RESIDUAL_RMS() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Final-iteration residual per constraint, aligned with CONSTRAINTS
   */
  RESIDUALS(index) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readFloat64(this.bb.__vector(this.bb_pos + offset) + index * 8) : 0;
  }
  residualsLength() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  residualsArray() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Float64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * The constraint set the solution was targeted against
   */
  CONSTRAINTS(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? (obj || new MPETargeterConstraint()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  constraintsLength() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  /**
   * Total delta-v of the solved maneuver sequence in m/s
   */
  TOTAL_DELTA_V() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Unix ms the solution was produced
   */
  SOLVED_AT() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  static startMPETargeterSolution(builder) {
    builder.startObject(9);
  }
  static addSolver(builder, SOLVEROffset) {
    builder.addFieldOffset(0, SOLVEROffset, 0);
  }
  static addDynamics(builder, DYNAMICSOffset) {
    builder.addFieldOffset(1, DYNAMICSOffset, 0);
  }
  static addConverged(builder, CONVERGED) {
    builder.addFieldInt8(2, +CONVERGED, 0);
  }
  static addIterations(builder, ITERATIONS) {
    builder.addFieldInt32(3, ITERATIONS, 0);
  }
  static addResidualRms(builder, RESIDUAL_RMS) {
    builder.addFieldFloat64(4, RESIDUAL_RMS, 0);
  }
  static addResiduals(builder, RESIDUALSOffset) {
    builder.addFieldOffset(5, RESIDUALSOffset, 0);
  }
  static createResidualsVector(builder, data) {
    builder.startVector(8, data.length, 8);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat64(data[i]);
    }
    return builder.endVector();
  }
  static startResidualsVector(builder, numElems) {
    builder.startVector(8, numElems, 8);
  }
  static addConstraints(builder, CONSTRAINTSOffset) {
    builder.addFieldOffset(6, CONSTRAINTSOffset, 0);
  }
  static createConstraintsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startConstraintsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addTotalDeltaV(builder, TOTAL_DELTA_V) {
    builder.addFieldFloat64(7, TOTAL_DELTA_V, 0);
  }
  static addSolvedAt(builder, SOLVED_AT) {
    builder.addFieldInt64(8, SOLVED_AT, BigInt("0"));
  }
  static endMPETargeterSolution(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMPETargeterSolution(builder, SOLVEROffset, DYNAMICSOffset, CONVERGED, ITERATIONS, RESIDUAL_RMS, RESIDUALSOffset, CONSTRAINTSOffset, TOTAL_DELTA_V, SOLVED_AT) {
    _MPETargeterSolution.startMPETargeterSolution(builder);
    _MPETargeterSolution.addSolver(builder, SOLVEROffset);
    _MPETargeterSolution.addDynamics(builder, DYNAMICSOffset);
    _MPETargeterSolution.addConverged(builder, CONVERGED);
    _MPETargeterSolution.addIterations(builder, ITERATIONS);
    _MPETargeterSolution.addResidualRms(builder, RESIDUAL_RMS);
    _MPETargeterSolution.addResiduals(builder, RESIDUALSOffset);
    _MPETargeterSolution.addConstraints(builder, CONSTRAINTSOffset);
    _MPETargeterSolution.addTotalDeltaV(builder, TOTAL_DELTA_V);
    _MPETargeterSolution.addSolvedAt(builder, SOLVED_AT);
    return _MPETargeterSolution.endMPETargeterSolution(builder);
  }
  unpack() {
    return new MPETargeterSolutionT(
      this.SOLVER(),
      this.DYNAMICS(),
      this.CONVERGED(),
      this.ITERATIONS(),
      this.RESIDUAL_RMS(),
      this.bb.createScalarList(this.RESIDUALS.bind(this), this.residualsLength()),
      this.bb.createObjList(this.CONSTRAINTS.bind(this), this.constraintsLength()),
      this.TOTAL_DELTA_V(),
      this.SOLVED_AT()
    );
  }
  unpackTo(_o) {
    _o.SOLVER = this.SOLVER();
    _o.DYNAMICS = this.DYNAMICS();
    _o.CONVERGED = this.CONVERGED();
    _o.ITERATIONS = this.ITERATIONS();
    _o.RESIDUAL_RMS = this.RESIDUAL_RMS();
    _o.RESIDUALS = this.bb.createScalarList(this.RESIDUALS.bind(this), this.residualsLength());
    _o.CONSTRAINTS = this.bb.createObjList(this.CONSTRAINTS.bind(this), this.constraintsLength());
    _o.TOTAL_DELTA_V = this.TOTAL_DELTA_V();
    _o.SOLVED_AT = this.SOLVED_AT();
  }
};
var MPETargeterSolutionT = class {
  constructor(SOLVER = null, DYNAMICS = null, CONVERGED = false, ITERATIONS = 0, RESIDUAL_RMS = 0, RESIDUALS = [], CONSTRAINTS = [], TOTAL_DELTA_V = 0, SOLVED_AT = BigInt("0")) {
    this.SOLVER = SOLVER;
    this.DYNAMICS = DYNAMICS;
    this.CONVERGED = CONVERGED;
    this.ITERATIONS = ITERATIONS;
    this.RESIDUAL_RMS = RESIDUAL_RMS;
    this.RESIDUALS = RESIDUALS;
    this.CONSTRAINTS = CONSTRAINTS;
    this.TOTAL_DELTA_V = TOTAL_DELTA_V;
    this.SOLVED_AT = SOLVED_AT;
  }
  pack(builder) {
    const SOLVER = this.SOLVER !== null ? builder.createString(this.SOLVER) : 0;
    const DYNAMICS = this.DYNAMICS !== null ? builder.createString(this.DYNAMICS) : 0;
    const RESIDUALS = MPETargeterSolution.createResidualsVector(builder, this.RESIDUALS);
    const CONSTRAINTS = MPETargeterSolution.createConstraintsVector(builder, builder.createObjectOffsetList(this.CONSTRAINTS));
    return MPETargeterSolution.createMPETargeterSolution(
      builder,
      SOLVER,
      DYNAMICS,
      this.CONVERGED,
      this.ITERATIONS,
      this.RESIDUAL_RMS,
      RESIDUALS,
      CONSTRAINTS,
      this.TOTAL_DELTA_V,
      this.SOLVED_AT
    );
  }
};

// lib/ts/MOR/MPE.ts
var MPE = class _MPE {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMPE(bb, obj) {
    return (obj || new _MPE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMPE(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers5.SIZE_PREFIX_LENGTH);
    return (obj || new _MPE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$MPE");
  }
  ENTITY_ID(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * Epoch of Mean Keplerian elements (UNIX timestamp) [numeric seconds since 1970-01-01T00:00:00 UTC]
   */
  EPOCH() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Mean motion in rev/day [M if chosen to represent orbit size for SGP/SGP4 elements]
   */
  MEAN_MOTION() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Eccentricity (unitless)
   */
  ECCENTRICITY() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Inclination in degrees
   */
  INCLINATION() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Right ascension of ascending node in degrees
   */
  RA_OF_ASC_NODE() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Argument of pericenter in degrees
   */
  ARG_OF_PERICENTER() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Mean anomaly in degrees
   */
  MEAN_ANOMALY() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * SGP/SGP4 drag-like coefficient (BSTAR) in units of 1/[Earth radii]
   */
  BSTAR() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Description of the Mean Element Theory (SGP4, DSST, USM)
   */
  MEAN_ELEMENT_THEORY() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* SGP4 */;
  }
  /**
   * Targeter solution + convergence metadata when this element set is the
   * product of maneuver targeting (absent for ordinary element sets)
   */
  TARGETER(obj) {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? (obj || new MPETargeterSolution()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * BTERM, the SGP4-XP drag term Cd*A/m in m**2/kg ($OMM BTERM). An SGP4XP set (MEAN_ELEMENT_THEORY
   * SGP4XP) carries BTERM and AGOM and leaves BSTAR 0; 0 for SGP4.
   */
  BTERM() {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * AGOM, the SGP4-XP radiation term gamma*A/m in m**2/kg ($OMM AGOM). SGP4XP only; 0 for SGP4.
   */
  AGOM() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  static startMPE(builder) {
    builder.startObject(13);
  }
  static addEntityId(builder, ENTITY_IDOffset) {
    builder.addFieldOffset(0, ENTITY_IDOffset, 0);
  }
  static addEpoch(builder, EPOCH) {
    builder.addFieldFloat64(1, EPOCH, 0);
  }
  static addMeanMotion(builder, MEAN_MOTION) {
    builder.addFieldFloat64(2, MEAN_MOTION, 0);
  }
  static addEccentricity(builder, ECCENTRICITY) {
    builder.addFieldFloat64(3, ECCENTRICITY, 0);
  }
  static addInclination(builder, INCLINATION) {
    builder.addFieldFloat64(4, INCLINATION, 0);
  }
  static addRaOfAscNode(builder, RA_OF_ASC_NODE) {
    builder.addFieldFloat64(5, RA_OF_ASC_NODE, 0);
  }
  static addArgOfPericenter(builder, ARG_OF_PERICENTER) {
    builder.addFieldFloat64(6, ARG_OF_PERICENTER, 0);
  }
  static addMeanAnomaly(builder, MEAN_ANOMALY) {
    builder.addFieldFloat64(7, MEAN_ANOMALY, 0);
  }
  static addBstar(builder, BSTAR) {
    builder.addFieldFloat64(8, BSTAR, 0);
  }
  static addMeanElementTheory(builder, MEAN_ELEMENT_THEORY) {
    builder.addFieldInt8(9, MEAN_ELEMENT_THEORY, 0 /* SGP4 */);
  }
  static addTargeter(builder, TARGETEROffset) {
    builder.addFieldOffset(10, TARGETEROffset, 0);
  }
  static addBterm(builder, BTERM) {
    builder.addFieldFloat64(11, BTERM, 0);
  }
  static addAgom(builder, AGOM) {
    builder.addFieldFloat64(12, AGOM, 0);
  }
  static endMPE(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishMPEBuffer(builder, offset) {
    builder.finish(offset, "$MPE");
  }
  static finishSizePrefixedMPEBuffer(builder, offset) {
    builder.finish(offset, "$MPE", true);
  }
  unpack() {
    return new MPET(
      this.ENTITY_ID(),
      this.EPOCH(),
      this.MEAN_MOTION(),
      this.ECCENTRICITY(),
      this.INCLINATION(),
      this.RA_OF_ASC_NODE(),
      this.ARG_OF_PERICENTER(),
      this.MEAN_ANOMALY(),
      this.BSTAR(),
      this.MEAN_ELEMENT_THEORY(),
      this.TARGETER() !== null ? this.TARGETER().unpack() : null,
      this.BTERM(),
      this.AGOM()
    );
  }
  unpackTo(_o) {
    _o.ENTITY_ID = this.ENTITY_ID();
    _o.EPOCH = this.EPOCH();
    _o.MEAN_MOTION = this.MEAN_MOTION();
    _o.ECCENTRICITY = this.ECCENTRICITY();
    _o.INCLINATION = this.INCLINATION();
    _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE();
    _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER();
    _o.MEAN_ANOMALY = this.MEAN_ANOMALY();
    _o.BSTAR = this.BSTAR();
    _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY();
    _o.TARGETER = this.TARGETER() !== null ? this.TARGETER().unpack() : null;
    _o.BTERM = this.BTERM();
    _o.AGOM = this.AGOM();
  }
};
var MPET = class {
  constructor(ENTITY_ID = null, EPOCH = 0, MEAN_MOTION = 0, ECCENTRICITY = 0, INCLINATION = 0, RA_OF_ASC_NODE = 0, ARG_OF_PERICENTER = 0, MEAN_ANOMALY = 0, BSTAR = 0, MEAN_ELEMENT_THEORY = 0 /* SGP4 */, TARGETER = null, BTERM = 0, AGOM = 0) {
    this.ENTITY_ID = ENTITY_ID;
    this.EPOCH = EPOCH;
    this.MEAN_MOTION = MEAN_MOTION;
    this.ECCENTRICITY = ECCENTRICITY;
    this.INCLINATION = INCLINATION;
    this.RA_OF_ASC_NODE = RA_OF_ASC_NODE;
    this.ARG_OF_PERICENTER = ARG_OF_PERICENTER;
    this.MEAN_ANOMALY = MEAN_ANOMALY;
    this.BSTAR = BSTAR;
    this.MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;
    this.TARGETER = TARGETER;
    this.BTERM = BTERM;
    this.AGOM = AGOM;
  }
  pack(builder) {
    const ENTITY_ID = this.ENTITY_ID !== null ? builder.createString(this.ENTITY_ID) : 0;
    const TARGETER = this.TARGETER !== null ? this.TARGETER.pack(builder) : 0;
    MPE.startMPE(builder);
    MPE.addEntityId(builder, ENTITY_ID);
    MPE.addEpoch(builder, this.EPOCH);
    MPE.addMeanMotion(builder, this.MEAN_MOTION);
    MPE.addEccentricity(builder, this.ECCENTRICITY);
    MPE.addInclination(builder, this.INCLINATION);
    MPE.addRaOfAscNode(builder, this.RA_OF_ASC_NODE);
    MPE.addArgOfPericenter(builder, this.ARG_OF_PERICENTER);
    MPE.addMeanAnomaly(builder, this.MEAN_ANOMALY);
    MPE.addBstar(builder, this.BSTAR);
    MPE.addMeanElementTheory(builder, this.MEAN_ELEMENT_THEORY);
    MPE.addTargeter(builder, TARGETER);
    MPE.addBterm(builder, this.BTERM);
    MPE.addAgom(builder, this.AGOM);
    return MPE.endMPE(builder);
  }
};

// lib/ts/MOR/morCovarianceFloor.ts
var morCovarianceFloor = /* @__PURE__ */ ((morCovarianceFloor2) => {
  morCovarianceFloor2[morCovarianceFloor2["UNSTATED"] = 0] = "UNSTATED";
  morCovarianceFloor2[morCovarianceFloor2["WRITER_THEORY_STATE"] = 1] = "WRITER_THEORY_STATE";
  morCovarianceFloor2[morCovarianceFloor2["MEAN_ELEMENTS_TWO_BODY"] = 2] = "MEAN_ELEMENTS_TWO_BODY";
  return morCovarianceFloor2;
})(morCovarianceFloor || {});

// lib/ts/MOR/morGravityField.ts
var morGravityField = /* @__PURE__ */ ((morGravityField2) => {
  morGravityField2[morGravityField2["THEORY"] = 0] = "THEORY";
  morGravityField2[morGravityField2["EGM2008"] = 1] = "EGM2008";
  morGravityField2[morGravityField2["EGM2008_SLOW_TESSERAL_70"] = 2] = "EGM2008_SLOW_TESSERAL_70";
  return morGravityField2;
})(morGravityField || {});

// lib/ts/MOR/morMessageStatus.ts
var morMessageStatus = /* @__PURE__ */ ((morMessageStatus2) => {
  morMessageStatus2[morMessageStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  morMessageStatus2[morMessageStatus2["REAL"] = 1] = "REAL";
  morMessageStatus2[morMessageStatus2["TEST"] = 2] = "TEST";
  return morMessageStatus2;
})(morMessageStatus || {});

// lib/ts/MOR/morRadiationModel.ts
var morRadiationModel = /* @__PURE__ */ ((morRadiationModel2) => {
  morRadiationModel2[morRadiationModel2["UNSTATED"] = 0] = "UNSTATED";
  morRadiationModel2[morRadiationModel2["SPHERE_ECOM2_Y0"] = 1] = "SPHERE_ECOM2_Y0";
  morRadiationModel2[morRadiationModel2["SPHERE_OUTPUT_MAP"] = 2] = "SPHERE_OUTPUT_MAP";
  morRadiationModel2[morRadiationModel2["SPHERE_OUTPUT_MAP_ECOM2_Y0"] = 3] = "SPHERE_OUTPUT_MAP_ECOM2_Y0";
  return morRadiationModel2;
})(morRadiationModel || {});

// lib/ts/MOR/morRecordKind.ts
var morRecordKind = /* @__PURE__ */ ((morRecordKind2) => {
  morRecordKind2[morRecordKind2["FULL"] = 0] = "FULL";
  morRecordKind2[morRecordKind2["ROWS_ONLY"] = 1] = "ROWS_ONLY";
  return morRecordKind2;
})(morRecordKind || {});

// lib/ts/MOR/morSolidTideModel.ts
var morSolidTideModel = /* @__PURE__ */ ((morSolidTideModel2) => {
  morSolidTideModel2[morSolidTideModel2["NONE"] = 0] = "NONE";
  morSolidTideModel2[morSolidTideModel2["IERS_2010"] = 1] = "IERS_2010";
  return morSolidTideModel2;
})(morSolidTideModel || {});

// lib/ts/MOR/MOR.ts
var MOR = class _MOR {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMOR(bb, obj) {
    return (obj || new _MOR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMOR(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers6.SIZE_PREFIX_LENGTH);
    return (obj || new _MOR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static bufferHasIdentifier(bb) {
    return bb.__has_identifier("$MOR");
  }
  /**
   * The object's NORAD catalog number, the join key to $CAT, $OMM and $OCM; 0 when it has none.
   */
  NORAD_CAT_ID() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  INTERNATIONAL_DESIGNATOR(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  ORIGINATOR(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * The theory the set is defined under: SGP4, SGP4XP or AP. A reader refuses UNSPECIFIED.
   */
  MEAN_ELEMENT_THEORY() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 6 /* UNSPECIFIED */;
  }
  /**
   * Epoch of the elements: microseconds since 1970-01-01T00:00:00 UTC, every UTC day 86,400,000,000
   * (the UNIX time scale of $MPE EPOCH). An $OCM EPOCH text with up to six fraction digits converts both
   * ways without loss; an instant inside a leap second has no value here.
   */
  EPOCH_UNIX_US() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
  }
  /**
   * What this record is (see "Record kinds" and "Rows only" above). An unknown kind: ignore the record.
   */
  RECORD_KIND() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* FULL */;
  }
  /**
   * Polynomial rows derived from this record by the builder its asset names ($DPM DPMAsset.DERIVED_BUILD),
   * in time order, without overlap, each half-span above 0. A convenience: the elements remain authoritative and a reader may
   * ignore the rows. Without the asset's DERIVED_BUILD a reader must not use them, nor when it cannot
   * reproduce that statement, nor when WINDOW_RECORD_CHECK does not match.
   * A record without WINDOWS has no rows; why is stated by the build's $DRB OUTCOMES, never in the record.
   */
  WINDOWS(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? (obj || new MORWindow()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
  }
  windowsLength() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  /**
   * The binary64 coefficients of the served windows, in window order: for each, X, Y and Z of position
   * (POS_COEFF_HEAD_COUNT each), then X, Y and Z of velocity (VEL_COEFF_HEAD_COUNT each).
   */
  WINDOW_COEFF_HEADS(index) {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readFloat64(this.bb.__vector(this.bb_pos + offset) + index * 8) : 0;
  }
  windowCoeffHeadsLength() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  windowCoeffHeadsArray() {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? new Float64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * The binary32 coefficients of the served windows, in the same order: X, Y and Z of position
   * (POS_COEFF_COUNT - POS_COEFF_HEAD_COUNT each), then of velocity.
   */
  WINDOW_COEFF_TAILS(index) {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
  }
  windowCoeffTailsLength() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  windowCoeffTailsArray() {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * The first 8 bytes, as a little-endian uint64, of the SHA-256 the builder named in DERIVED_BUILD
   * publishes as its record digest (over the record's decoded inputs). A reader recomputes it from this
   * record before using the rows: a mismatch voids the rows. With WINDOWS only.
   */
  WINDOW_RECORD_CHECK() {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt("0");
  }
  /**
   * Mean motion, rev/day, as the theory defines it: Kozai for SGP4, Brouwer for SGP4XP and AP.
   */
  MEAN_MOTION() {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Eccentricity.
   */
  ECCENTRICITY() {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Inclination, deg.
   */
  INCLINATION() {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Right ascension of the ascending node, deg.
   */
  RA_OF_ASC_NODE() {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Argument of pericenter, deg.
   */
  ARG_OF_PERICENTER() {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Mean anomaly, deg.
   */
  MEAN_ANOMALY() {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Drag term Cd*A/m, m**2/kg. SGP4XP and AP; 0 for SGP4.
   */
  BTERM() {
    const offset = this.bb.__offset(this.bb_pos, 36);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Radiation term Cr*A/m, m**2/kg. SGP4XP and AP; 0 for SGP4.
   */
  AGOM() {
    const offset = this.bb.__offset(this.bb_pos, 38);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * The gravity field the set flies on.
   */
  GRAVITY_FIELD() {
    const offset = this.bb.__offset(this.bb_pos, 40);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* THEORY */;
  }
  /**
   * Highest tesseral degree of the field's terms; 0 for SGP4 and SGP4XP.
   */
  MAXIMUM_TESSERAL_DEGREE() {
    const offset = this.bb.__offset(this.bb_pos, 42);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  /**
   * Highest zonal degree of the field's terms; 0 for SGP4 and SGP4XP.
   */
  MAXIMUM_ZONAL_DEGREE() {
    const offset = this.bb.__offset(this.bb_pos, 44);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
  }
  /**
   * The dynamic parameters the orbit determination carried, bit k for prwDynamicParameter ordinal k:
   * DRAG_AREA_OVER_MASS (bit 1, value BTERM), SRP_AREA_OVER_MASS (bit 3, value AGOM) and ECOM2_Y0
   * (bit 6, value ECOM2_Y0). Any other bit has no value here and is refused.
   */
  OD_PARAMETERS() {
    const offset = this.bb.__offset(this.bb_pos, 46);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * Of OD_PARAMETERS, the ones the orbit determination solved for (the others were held).
   */
  OD_SOLVED_FOR() {
    const offset = this.bb.__offset(this.bb_pos, 48);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }
  /**
   * The span of the observations the orbit determination used, days; NaN when not stated.
   */
  ACTUAL_OD_SPAN() {
    const offset = this.bb.__offset(this.bb_pos, 50);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Observations the orbit determination used; -1 when not stated ($OCM 0).
   */
  OD_OBSERVATIONS_USED() {
    const offset = this.bb.__offset(this.bb_pos, 52);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : -1;
  }
  /**
   * Weighted RMS residual ratio of the orbit determination; NaN when not stated ($OCM 0).
   */
  WEIGHTED_RMS() {
    const offset = this.bb.__offset(this.bb_pos, 54);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * Epoch of the orbit determination, in the form of EPOCH_UNIX_US. -9223372036854775807 is a sentinel
   * meaning not stated: the least int64 plus one, because some generated languages read the least int64
   * itself as a floating-point literal.
   */
  OD_EPOCH_UNIX_US() {
    const offset = this.bb.__offset(this.bb_pos, 56);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("-9223372036854775807");
  }
  /**
   * Tracks the orbit determination used; -1 when not stated ($OCM 0).
   */
  OD_TRACKS_USED() {
    const offset = this.bb.__offset(this.bb_pos, 58);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : -1;
  }
  /**
   * Days from the last observation the orbit determination used to OD_EPOCH; NaN when not stated.
   */
  DAYS_SINCE_LAST_OBS() {
    const offset = this.bb.__offset(this.bb_pos, 60);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : NaN;
  }
  /**
   * The epoch covariance, lower triangle row by row, N(N+1)/2 values: N = 6 plus the solved
   * DRAG_AREA_OVER_MASS and SRP_AREA_OVER_MASS (the covariance parameters OD_PARAMETERS can carry);
   * position and velocity in km and km/s in TRAJ_REF_FRAME of the expansion, then those parameters in
   * ascending ordinal. Absent: no covariance.
   */
  COVARIANCE_DATA(index) {
    const offset = this.bb.__offset(this.bb_pos, 62);
    return offset ? this.bb.readFloat64(this.bb.__vector(this.bb_pos + offset) + index * 8) : 0;
  }
  covarianceDataLength() {
    const offset = this.bb.__offset(this.bb_pos, 62);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  covarianceDataArray() {
    const offset = this.bb.__offset(this.bb_pos, 62);
    return offset ? new Float64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  /**
   * What propagates COVARIANCE_DATA beyond its epoch; with COVARIANCE_DATA only.
   */
  COV_PROPAGATION(obj) {
    const offset = this.bb.__offset(this.bb_pos, 64);
    return offset ? (obj || new MORCovariancePropagation()).__init(this.bb_pos + offset, this.bb) : null;
  }
  /**
   * Where COV_PROPAGATION's floor sits; with COVARIANCE_DATA only. It governs the covariance's numbers, over
   * any producer text: a record read alone flies the same covariance as its $OCM.
   */
  COV_FLOOR() {
    const offset = this.bb.__offset(this.bb_pos, 66);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* UNSTATED */;
  }
  /**
   * The realism model of COVARIANCE_DATA among its asset's $DPM DPMAsset.COV_REALISM_MODELS, by ID; 0 when
   * the record states its own COV_REALISM or none. The model's figures need the asset; the ID does not. An
   * ID the asset does not list leaves the figures unresolved, and a reader says so.
   */
  COV_REALISM_ID() {
    const offset = this.bb.__offset(this.bb_pos, 68);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
  }
  /**
   * Whether COVARIANCE_DATA's coverage was measured against independent reference states.
   */
  COV_CALIBRATION() {
    const offset = this.bb.__offset(this.bb_pos, 70);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : 0 /* Unspecified */;
  }
  /**
   * The object's own element set for times beyond what this record serves (a reader's fallback
   * propagator), as an $MPE: SGP4 with BSTAR or SGP4XP with BTERM and AGOM. Its ENTITY_ID is absent: the
   * object is this record's. No TARGETER.
   */
  FALLBACK(obj) {
    const offset = this.bb.__offset(this.bb_pos, 72);
    return offset ? (obj || new MPE()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  /**
   * BSTAR, 1/Earth radii. SGP4 only.
   */
  BSTAR() {
    const offset = this.bb.__offset(this.bb_pos, 74);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * MEAN_MOTION_DOT, rev/day**2. SGP4 only.
   */
  MEAN_MOTION_DOT() {
    const offset = this.bb.__offset(this.bb_pos, 76);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * MEAN_MOTION_DDOT, rev/day**3. SGP4 only.
   */
  MEAN_MOTION_DDOT() {
    const offset = this.bb.__offset(this.bb_pos, 78);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * The solid Earth tide the set flies with.
   */
  SOLID_TIDES_MODEL() {
    const offset = this.bb.__offset(this.bb_pos, 80);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* NONE */;
  }
  /**
   * The radiation pressure model the set states.
   */
  SOLAR_RAD_PRESSURE() {
    const offset = this.bb.__offset(this.bb_pos, 82);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* UNSTATED */;
  }
  /**
   * The ECOM2 Y0 radiation acceleration, m/s**2, when OD_PARAMETERS has bit 6.
   */
  ECOM2_Y0() {
    const offset = this.bb.__offset(this.bb_pos, 84);
    return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0;
  }
  /**
   * Whether the set is real or test data. A record that does not state it is an operational record of
   * unstated status; a publisher states it only when it is TEST.
   */
  MESSAGE_STATUS() {
    const offset = this.bb.__offset(this.bb_pos, 86);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0 /* UNSPECIFIED */;
  }
  OBJECT_NAME(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 88);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  /**
   * The realism of COVARIANCE_DATA when it is the record's own (it differs from record to record), the
   * single entry of $OCM COV_REALISM. Never with COV_REALISM_ID.
   */
  COV_REALISM(obj) {
    const offset = this.bb.__offset(this.bb_pos, 90);
    return offset ? (obj || new CVR()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  COV_CALIBRATION_REFERENCE(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 92);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startMOR(builder) {
    builder.startObject(45);
  }
  static addNoradCatId(builder, NORAD_CAT_ID) {
    builder.addFieldInt32(0, NORAD_CAT_ID, 0);
  }
  static addInternationalDesignator(builder, INTERNATIONAL_DESIGNATOROffset) {
    builder.addFieldOffset(1, INTERNATIONAL_DESIGNATOROffset, 0);
  }
  static addOriginator(builder, ORIGINATOROffset) {
    builder.addFieldOffset(2, ORIGINATOROffset, 0);
  }
  static addMeanElementTheory(builder, MEAN_ELEMENT_THEORY) {
    builder.addFieldInt8(3, MEAN_ELEMENT_THEORY, 6 /* UNSPECIFIED */);
  }
  static addEpochUnixUs(builder, EPOCH_UNIX_US) {
    builder.addFieldInt64(4, EPOCH_UNIX_US, BigInt("0"));
  }
  static addRecordKind(builder, RECORD_KIND) {
    builder.addFieldInt8(5, RECORD_KIND, 0 /* FULL */);
  }
  static addWindows(builder, WINDOWSOffset) {
    builder.addFieldOffset(6, WINDOWSOffset, 0);
  }
  static startWindowsVector(builder, numElems) {
    builder.startVector(24, numElems, 8);
  }
  static addWindowCoeffHeads(builder, WINDOW_COEFF_HEADSOffset) {
    builder.addFieldOffset(7, WINDOW_COEFF_HEADSOffset, 0);
  }
  static createWindowCoeffHeadsVector(builder, data) {
    builder.startVector(8, data.length, 8);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat64(data[i]);
    }
    return builder.endVector();
  }
  static startWindowCoeffHeadsVector(builder, numElems) {
    builder.startVector(8, numElems, 8);
  }
  static addWindowCoeffTails(builder, WINDOW_COEFF_TAILSOffset) {
    builder.addFieldOffset(8, WINDOW_COEFF_TAILSOffset, 0);
  }
  static createWindowCoeffTailsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]);
    }
    return builder.endVector();
  }
  static startWindowCoeffTailsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addWindowRecordCheck(builder, WINDOW_RECORD_CHECK) {
    builder.addFieldInt64(9, WINDOW_RECORD_CHECK, BigInt("0"));
  }
  static addMeanMotion(builder, MEAN_MOTION) {
    builder.addFieldFloat64(10, MEAN_MOTION, 0);
  }
  static addEccentricity(builder, ECCENTRICITY) {
    builder.addFieldFloat64(11, ECCENTRICITY, 0);
  }
  static addInclination(builder, INCLINATION) {
    builder.addFieldFloat64(12, INCLINATION, 0);
  }
  static addRaOfAscNode(builder, RA_OF_ASC_NODE) {
    builder.addFieldFloat64(13, RA_OF_ASC_NODE, 0);
  }
  static addArgOfPericenter(builder, ARG_OF_PERICENTER) {
    builder.addFieldFloat64(14, ARG_OF_PERICENTER, 0);
  }
  static addMeanAnomaly(builder, MEAN_ANOMALY) {
    builder.addFieldFloat64(15, MEAN_ANOMALY, 0);
  }
  static addBterm(builder, BTERM) {
    builder.addFieldFloat64(16, BTERM, 0);
  }
  static addAgom(builder, AGOM) {
    builder.addFieldFloat64(17, AGOM, 0);
  }
  static addGravityField(builder, GRAVITY_FIELD) {
    builder.addFieldInt8(18, GRAVITY_FIELD, 0 /* THEORY */);
  }
  static addMaximumTesseralDegree(builder, MAXIMUM_TESSERAL_DEGREE) {
    builder.addFieldInt8(19, MAXIMUM_TESSERAL_DEGREE, 0);
  }
  static addMaximumZonalDegree(builder, MAXIMUM_ZONAL_DEGREE) {
    builder.addFieldInt8(20, MAXIMUM_ZONAL_DEGREE, 0);
  }
  static addOdParameters(builder, OD_PARAMETERS) {
    builder.addFieldInt32(21, OD_PARAMETERS, 0);
  }
  static addOdSolvedFor(builder, OD_SOLVED_FOR) {
    builder.addFieldInt32(22, OD_SOLVED_FOR, 0);
  }
  static addActualOdSpan(builder, ACTUAL_OD_SPAN) {
    builder.addFieldFloat64(23, ACTUAL_OD_SPAN, NaN);
  }
  static addOdObservationsUsed(builder, OD_OBSERVATIONS_USED) {
    builder.addFieldInt32(24, OD_OBSERVATIONS_USED, -1);
  }
  static addWeightedRms(builder, WEIGHTED_RMS) {
    builder.addFieldFloat64(25, WEIGHTED_RMS, NaN);
  }
  static addOdEpochUnixUs(builder, OD_EPOCH_UNIX_US) {
    builder.addFieldInt64(26, OD_EPOCH_UNIX_US, BigInt("-9223372036854775807"));
  }
  static addOdTracksUsed(builder, OD_TRACKS_USED) {
    builder.addFieldInt32(27, OD_TRACKS_USED, -1);
  }
  static addDaysSinceLastObs(builder, DAYS_SINCE_LAST_OBS) {
    builder.addFieldFloat64(28, DAYS_SINCE_LAST_OBS, NaN);
  }
  static addCovarianceData(builder, COVARIANCE_DATAOffset) {
    builder.addFieldOffset(29, COVARIANCE_DATAOffset, 0);
  }
  static createCovarianceDataVector(builder, data) {
    builder.startVector(8, data.length, 8);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat64(data[i]);
    }
    return builder.endVector();
  }
  static startCovarianceDataVector(builder, numElems) {
    builder.startVector(8, numElems, 8);
  }
  static addCovPropagation(builder, COV_PROPAGATIONOffset) {
    builder.addFieldStruct(30, COV_PROPAGATIONOffset, 0);
  }
  static addCovFloor(builder, COV_FLOOR) {
    builder.addFieldInt8(31, COV_FLOOR, 0 /* UNSTATED */);
  }
  static addCovRealismId(builder, COV_REALISM_ID) {
    builder.addFieldInt16(32, COV_REALISM_ID, 0);
  }
  static addCovCalibration(builder, COV_CALIBRATION) {
    builder.addFieldInt8(33, COV_CALIBRATION, 0 /* Unspecified */);
  }
  static addFallback(builder, FALLBACKOffset) {
    builder.addFieldOffset(34, FALLBACKOffset, 0);
  }
  static addBstar(builder, BSTAR) {
    builder.addFieldFloat64(35, BSTAR, 0);
  }
  static addMeanMotionDot(builder, MEAN_MOTION_DOT) {
    builder.addFieldFloat64(36, MEAN_MOTION_DOT, 0);
  }
  static addMeanMotionDdot(builder, MEAN_MOTION_DDOT) {
    builder.addFieldFloat64(37, MEAN_MOTION_DDOT, 0);
  }
  static addSolidTidesModel(builder, SOLID_TIDES_MODEL) {
    builder.addFieldInt8(38, SOLID_TIDES_MODEL, 0 /* NONE */);
  }
  static addSolarRadPressure(builder, SOLAR_RAD_PRESSURE) {
    builder.addFieldInt8(39, SOLAR_RAD_PRESSURE, 0 /* UNSTATED */);
  }
  static addEcom2Y0(builder, ECOM2_Y0) {
    builder.addFieldFloat64(40, ECOM2_Y0, 0);
  }
  static addMessageStatus(builder, MESSAGE_STATUS) {
    builder.addFieldInt8(41, MESSAGE_STATUS, 0 /* UNSPECIFIED */);
  }
  static addObjectName(builder, OBJECT_NAMEOffset) {
    builder.addFieldOffset(42, OBJECT_NAMEOffset, 0);
  }
  static addCovRealism(builder, COV_REALISMOffset) {
    builder.addFieldOffset(43, COV_REALISMOffset, 0);
  }
  static addCovCalibrationReference(builder, COV_CALIBRATION_REFERENCEOffset) {
    builder.addFieldOffset(44, COV_CALIBRATION_REFERENCEOffset, 0);
  }
  static endMOR(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishMORBuffer(builder, offset) {
    builder.finish(offset, "$MOR");
  }
  static finishSizePrefixedMORBuffer(builder, offset) {
    builder.finish(offset, "$MOR", true);
  }
  unpack() {
    return new MORT(
      this.NORAD_CAT_ID(),
      this.INTERNATIONAL_DESIGNATOR(),
      this.ORIGINATOR(),
      this.MEAN_ELEMENT_THEORY(),
      this.EPOCH_UNIX_US(),
      this.RECORD_KIND(),
      this.bb.createObjList(this.WINDOWS.bind(this), this.windowsLength()),
      this.bb.createScalarList(this.WINDOW_COEFF_HEADS.bind(this), this.windowCoeffHeadsLength()),
      this.bb.createScalarList(this.WINDOW_COEFF_TAILS.bind(this), this.windowCoeffTailsLength()),
      this.WINDOW_RECORD_CHECK(),
      this.MEAN_MOTION(),
      this.ECCENTRICITY(),
      this.INCLINATION(),
      this.RA_OF_ASC_NODE(),
      this.ARG_OF_PERICENTER(),
      this.MEAN_ANOMALY(),
      this.BTERM(),
      this.AGOM(),
      this.GRAVITY_FIELD(),
      this.MAXIMUM_TESSERAL_DEGREE(),
      this.MAXIMUM_ZONAL_DEGREE(),
      this.OD_PARAMETERS(),
      this.OD_SOLVED_FOR(),
      this.ACTUAL_OD_SPAN(),
      this.OD_OBSERVATIONS_USED(),
      this.WEIGHTED_RMS(),
      this.OD_EPOCH_UNIX_US(),
      this.OD_TRACKS_USED(),
      this.DAYS_SINCE_LAST_OBS(),
      this.bb.createScalarList(this.COVARIANCE_DATA.bind(this), this.covarianceDataLength()),
      this.COV_PROPAGATION() !== null ? this.COV_PROPAGATION().unpack() : null,
      this.COV_FLOOR(),
      this.COV_REALISM_ID(),
      this.COV_CALIBRATION(),
      this.FALLBACK() !== null ? this.FALLBACK().unpack() : null,
      this.BSTAR(),
      this.MEAN_MOTION_DOT(),
      this.MEAN_MOTION_DDOT(),
      this.SOLID_TIDES_MODEL(),
      this.SOLAR_RAD_PRESSURE(),
      this.ECOM2_Y0(),
      this.MESSAGE_STATUS(),
      this.OBJECT_NAME(),
      this.COV_REALISM() !== null ? this.COV_REALISM().unpack() : null,
      this.COV_CALIBRATION_REFERENCE()
    );
  }
  unpackTo(_o) {
    _o.NORAD_CAT_ID = this.NORAD_CAT_ID();
    _o.INTERNATIONAL_DESIGNATOR = this.INTERNATIONAL_DESIGNATOR();
    _o.ORIGINATOR = this.ORIGINATOR();
    _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY();
    _o.EPOCH_UNIX_US = this.EPOCH_UNIX_US();
    _o.RECORD_KIND = this.RECORD_KIND();
    _o.WINDOWS = this.bb.createObjList(this.WINDOWS.bind(this), this.windowsLength());
    _o.WINDOW_COEFF_HEADS = this.bb.createScalarList(this.WINDOW_COEFF_HEADS.bind(this), this.windowCoeffHeadsLength());
    _o.WINDOW_COEFF_TAILS = this.bb.createScalarList(this.WINDOW_COEFF_TAILS.bind(this), this.windowCoeffTailsLength());
    _o.WINDOW_RECORD_CHECK = this.WINDOW_RECORD_CHECK();
    _o.MEAN_MOTION = this.MEAN_MOTION();
    _o.ECCENTRICITY = this.ECCENTRICITY();
    _o.INCLINATION = this.INCLINATION();
    _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE();
    _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER();
    _o.MEAN_ANOMALY = this.MEAN_ANOMALY();
    _o.BTERM = this.BTERM();
    _o.AGOM = this.AGOM();
    _o.GRAVITY_FIELD = this.GRAVITY_FIELD();
    _o.MAXIMUM_TESSERAL_DEGREE = this.MAXIMUM_TESSERAL_DEGREE();
    _o.MAXIMUM_ZONAL_DEGREE = this.MAXIMUM_ZONAL_DEGREE();
    _o.OD_PARAMETERS = this.OD_PARAMETERS();
    _o.OD_SOLVED_FOR = this.OD_SOLVED_FOR();
    _o.ACTUAL_OD_SPAN = this.ACTUAL_OD_SPAN();
    _o.OD_OBSERVATIONS_USED = this.OD_OBSERVATIONS_USED();
    _o.WEIGHTED_RMS = this.WEIGHTED_RMS();
    _o.OD_EPOCH_UNIX_US = this.OD_EPOCH_UNIX_US();
    _o.OD_TRACKS_USED = this.OD_TRACKS_USED();
    _o.DAYS_SINCE_LAST_OBS = this.DAYS_SINCE_LAST_OBS();
    _o.COVARIANCE_DATA = this.bb.createScalarList(this.COVARIANCE_DATA.bind(this), this.covarianceDataLength());
    _o.COV_PROPAGATION = this.COV_PROPAGATION() !== null ? this.COV_PROPAGATION().unpack() : null;
    _o.COV_FLOOR = this.COV_FLOOR();
    _o.COV_REALISM_ID = this.COV_REALISM_ID();
    _o.COV_CALIBRATION = this.COV_CALIBRATION();
    _o.FALLBACK = this.FALLBACK() !== null ? this.FALLBACK().unpack() : null;
    _o.BSTAR = this.BSTAR();
    _o.MEAN_MOTION_DOT = this.MEAN_MOTION_DOT();
    _o.MEAN_MOTION_DDOT = this.MEAN_MOTION_DDOT();
    _o.SOLID_TIDES_MODEL = this.SOLID_TIDES_MODEL();
    _o.SOLAR_RAD_PRESSURE = this.SOLAR_RAD_PRESSURE();
    _o.ECOM2_Y0 = this.ECOM2_Y0();
    _o.MESSAGE_STATUS = this.MESSAGE_STATUS();
    _o.OBJECT_NAME = this.OBJECT_NAME();
    _o.COV_REALISM = this.COV_REALISM() !== null ? this.COV_REALISM().unpack() : null;
    _o.COV_CALIBRATION_REFERENCE = this.COV_CALIBRATION_REFERENCE();
  }
};
var MORT = class {
  constructor(NORAD_CAT_ID = 0, INTERNATIONAL_DESIGNATOR = null, ORIGINATOR = null, MEAN_ELEMENT_THEORY = 6 /* UNSPECIFIED */, EPOCH_UNIX_US = BigInt("0"), RECORD_KIND = 0 /* FULL */, WINDOWS = [], WINDOW_COEFF_HEADS = [], WINDOW_COEFF_TAILS = [], WINDOW_RECORD_CHECK = BigInt("0"), MEAN_MOTION = 0, ECCENTRICITY = 0, INCLINATION = 0, RA_OF_ASC_NODE = 0, ARG_OF_PERICENTER = 0, MEAN_ANOMALY = 0, BTERM = 0, AGOM = 0, GRAVITY_FIELD = 0 /* THEORY */, MAXIMUM_TESSERAL_DEGREE = 0, MAXIMUM_ZONAL_DEGREE = 0, OD_PARAMETERS = 0, OD_SOLVED_FOR = 0, ACTUAL_OD_SPAN = NaN, OD_OBSERVATIONS_USED = -1, WEIGHTED_RMS = NaN, OD_EPOCH_UNIX_US = BigInt("-9223372036854775807"), OD_TRACKS_USED = -1, DAYS_SINCE_LAST_OBS = NaN, COVARIANCE_DATA = [], COV_PROPAGATION = null, COV_FLOOR = 0 /* UNSTATED */, COV_REALISM_ID = 0, COV_CALIBRATION = 0 /* Unspecified */, FALLBACK = null, BSTAR = 0, MEAN_MOTION_DOT = 0, MEAN_MOTION_DDOT = 0, SOLID_TIDES_MODEL = 0 /* NONE */, SOLAR_RAD_PRESSURE = 0 /* UNSTATED */, ECOM2_Y0 = 0, MESSAGE_STATUS = 0 /* UNSPECIFIED */, OBJECT_NAME = null, COV_REALISM = null, COV_CALIBRATION_REFERENCE = null) {
    this.NORAD_CAT_ID = NORAD_CAT_ID;
    this.INTERNATIONAL_DESIGNATOR = INTERNATIONAL_DESIGNATOR;
    this.ORIGINATOR = ORIGINATOR;
    this.MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;
    this.EPOCH_UNIX_US = EPOCH_UNIX_US;
    this.RECORD_KIND = RECORD_KIND;
    this.WINDOWS = WINDOWS;
    this.WINDOW_COEFF_HEADS = WINDOW_COEFF_HEADS;
    this.WINDOW_COEFF_TAILS = WINDOW_COEFF_TAILS;
    this.WINDOW_RECORD_CHECK = WINDOW_RECORD_CHECK;
    this.MEAN_MOTION = MEAN_MOTION;
    this.ECCENTRICITY = ECCENTRICITY;
    this.INCLINATION = INCLINATION;
    this.RA_OF_ASC_NODE = RA_OF_ASC_NODE;
    this.ARG_OF_PERICENTER = ARG_OF_PERICENTER;
    this.MEAN_ANOMALY = MEAN_ANOMALY;
    this.BTERM = BTERM;
    this.AGOM = AGOM;
    this.GRAVITY_FIELD = GRAVITY_FIELD;
    this.MAXIMUM_TESSERAL_DEGREE = MAXIMUM_TESSERAL_DEGREE;
    this.MAXIMUM_ZONAL_DEGREE = MAXIMUM_ZONAL_DEGREE;
    this.OD_PARAMETERS = OD_PARAMETERS;
    this.OD_SOLVED_FOR = OD_SOLVED_FOR;
    this.ACTUAL_OD_SPAN = ACTUAL_OD_SPAN;
    this.OD_OBSERVATIONS_USED = OD_OBSERVATIONS_USED;
    this.WEIGHTED_RMS = WEIGHTED_RMS;
    this.OD_EPOCH_UNIX_US = OD_EPOCH_UNIX_US;
    this.OD_TRACKS_USED = OD_TRACKS_USED;
    this.DAYS_SINCE_LAST_OBS = DAYS_SINCE_LAST_OBS;
    this.COVARIANCE_DATA = COVARIANCE_DATA;
    this.COV_PROPAGATION = COV_PROPAGATION;
    this.COV_FLOOR = COV_FLOOR;
    this.COV_REALISM_ID = COV_REALISM_ID;
    this.COV_CALIBRATION = COV_CALIBRATION;
    this.FALLBACK = FALLBACK;
    this.BSTAR = BSTAR;
    this.MEAN_MOTION_DOT = MEAN_MOTION_DOT;
    this.MEAN_MOTION_DDOT = MEAN_MOTION_DDOT;
    this.SOLID_TIDES_MODEL = SOLID_TIDES_MODEL;
    this.SOLAR_RAD_PRESSURE = SOLAR_RAD_PRESSURE;
    this.ECOM2_Y0 = ECOM2_Y0;
    this.MESSAGE_STATUS = MESSAGE_STATUS;
    this.OBJECT_NAME = OBJECT_NAME;
    this.COV_REALISM = COV_REALISM;
    this.COV_CALIBRATION_REFERENCE = COV_CALIBRATION_REFERENCE;
  }
  pack(builder) {
    const INTERNATIONAL_DESIGNATOR = this.INTERNATIONAL_DESIGNATOR !== null ? builder.createString(this.INTERNATIONAL_DESIGNATOR) : 0;
    const ORIGINATOR = this.ORIGINATOR !== null ? builder.createString(this.ORIGINATOR) : 0;
    const WINDOWS = builder.createStructOffsetList(this.WINDOWS, MOR.startWindowsVector);
    const WINDOW_COEFF_HEADS = MOR.createWindowCoeffHeadsVector(builder, this.WINDOW_COEFF_HEADS);
    const WINDOW_COEFF_TAILS = MOR.createWindowCoeffTailsVector(builder, this.WINDOW_COEFF_TAILS);
    const COVARIANCE_DATA = MOR.createCovarianceDataVector(builder, this.COVARIANCE_DATA);
    const FALLBACK = this.FALLBACK !== null ? this.FALLBACK.pack(builder) : 0;
    const OBJECT_NAME = this.OBJECT_NAME !== null ? builder.createString(this.OBJECT_NAME) : 0;
    const COV_REALISM = this.COV_REALISM !== null ? this.COV_REALISM.pack(builder) : 0;
    const COV_CALIBRATION_REFERENCE = this.COV_CALIBRATION_REFERENCE !== null ? builder.createString(this.COV_CALIBRATION_REFERENCE) : 0;
    MOR.startMOR(builder);
    MOR.addNoradCatId(builder, this.NORAD_CAT_ID);
    MOR.addInternationalDesignator(builder, INTERNATIONAL_DESIGNATOR);
    MOR.addOriginator(builder, ORIGINATOR);
    MOR.addMeanElementTheory(builder, this.MEAN_ELEMENT_THEORY);
    MOR.addEpochUnixUs(builder, this.EPOCH_UNIX_US);
    MOR.addRecordKind(builder, this.RECORD_KIND);
    MOR.addWindows(builder, WINDOWS);
    MOR.addWindowCoeffHeads(builder, WINDOW_COEFF_HEADS);
    MOR.addWindowCoeffTails(builder, WINDOW_COEFF_TAILS);
    MOR.addWindowRecordCheck(builder, this.WINDOW_RECORD_CHECK);
    MOR.addMeanMotion(builder, this.MEAN_MOTION);
    MOR.addEccentricity(builder, this.ECCENTRICITY);
    MOR.addInclination(builder, this.INCLINATION);
    MOR.addRaOfAscNode(builder, this.RA_OF_ASC_NODE);
    MOR.addArgOfPericenter(builder, this.ARG_OF_PERICENTER);
    MOR.addMeanAnomaly(builder, this.MEAN_ANOMALY);
    MOR.addBterm(builder, this.BTERM);
    MOR.addAgom(builder, this.AGOM);
    MOR.addGravityField(builder, this.GRAVITY_FIELD);
    MOR.addMaximumTesseralDegree(builder, this.MAXIMUM_TESSERAL_DEGREE);
    MOR.addMaximumZonalDegree(builder, this.MAXIMUM_ZONAL_DEGREE);
    MOR.addOdParameters(builder, this.OD_PARAMETERS);
    MOR.addOdSolvedFor(builder, this.OD_SOLVED_FOR);
    MOR.addActualOdSpan(builder, this.ACTUAL_OD_SPAN);
    MOR.addOdObservationsUsed(builder, this.OD_OBSERVATIONS_USED);
    MOR.addWeightedRms(builder, this.WEIGHTED_RMS);
    MOR.addOdEpochUnixUs(builder, this.OD_EPOCH_UNIX_US);
    MOR.addOdTracksUsed(builder, this.OD_TRACKS_USED);
    MOR.addDaysSinceLastObs(builder, this.DAYS_SINCE_LAST_OBS);
    MOR.addCovarianceData(builder, COVARIANCE_DATA);
    MOR.addCovPropagation(builder, this.COV_PROPAGATION !== null ? this.COV_PROPAGATION.pack(builder) : 0);
    MOR.addCovFloor(builder, this.COV_FLOOR);
    MOR.addCovRealismId(builder, this.COV_REALISM_ID);
    MOR.addCovCalibration(builder, this.COV_CALIBRATION);
    MOR.addFallback(builder, FALLBACK);
    MOR.addBstar(builder, this.BSTAR);
    MOR.addMeanMotionDot(builder, this.MEAN_MOTION_DOT);
    MOR.addMeanMotionDdot(builder, this.MEAN_MOTION_DDOT);
    MOR.addSolidTidesModel(builder, this.SOLID_TIDES_MODEL);
    MOR.addSolarRadPressure(builder, this.SOLAR_RAD_PRESSURE);
    MOR.addEcom2Y0(builder, this.ECOM2_Y0);
    MOR.addMessageStatus(builder, this.MESSAGE_STATUS);
    MOR.addObjectName(builder, OBJECT_NAME);
    MOR.addCovRealism(builder, COV_REALISM);
    MOR.addCovCalibrationReference(builder, COV_CALIBRATION_REFERENCE);
    return MOR.endMOR(builder);
  }
};
export {
  CVR,
  CVRT,
  MET,
  METT,
  MOR,
  MORCovariancePropagation,
  MORCovariancePropagationT,
  MORT,
  MORWindow,
  MORWindowT,
  MPE,
  MPET,
  MPETargeterConstraint,
  MPETargeterConstraintT,
  MPETargeterSolution,
  MPETargeterSolutionT,
  covarianceCalibration,
  covarianceRule,
  meanElementSource,
  morCovarianceFloor,
  morGravityField,
  morMessageStatus,
  morRadiationModel,
  morRecordKind,
  morSolidTideModel,
  morWindowStatus
};
