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
      ],
      [
        /\b(?=>(namespace|attribute|include|enum|union|struct|table|root_type) )\w{1,}\b/,
        "keyword.name.flatbuffers"
      ],
      [
        /^\s*\/\/[^\/]{1,}/,
        "keyword.comments.flatbuffers"
      ],
      [
        /^\s*\/\/\/.*/,
        "keyword.local.comment.flatbuffers"
      ]
    ]
  }
}