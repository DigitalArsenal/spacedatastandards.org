export default {
  tokenizer: {
    root: [
      [
        /\b(root_type|table|struct|union|enum|namespace|id|deprecated|required|original_order|force_align|bit_flags|nested_flatbuffer|key|attribute|include|file_identifier|file_extension)\b/,
        "keyword.control.flatbuffers"
      ],
      [
        /(\.)?\s*\b(bool|byte|ubyte|short|ushort|int|uint|float|long|ulong|double|string)\b/,
        "storage.type.flatbuffers"
      ] /*
      [
        /\\b(?!(enum|namespace|union|struct|table|include|true|false|bool|byte|ubyte|short|ushort|int|uint|float|long|ulong|double|string)\\W)([_a-zA-Z]\\w*)\\s*(?=\\.)/,
        "entity.name.section.flatbuffers"
      ],
      [
        /\\b(?!(enum|namespace|union|struct|table|include|true|false|bool|byte|ubyte|short|ushort|int|uint|float|long|ulong|double|string)\W)([_a-zA-Z]\w*)/,
        "entity.name.type.flatbuffers"
      ]*/
    ]
  }
}