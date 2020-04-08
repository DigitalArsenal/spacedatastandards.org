<script>
  import { onLoad } from "./global.js";
  import { onMount, onDestroy } from "svelte";

  let lang = "flatbuffers";

  let editor;

  let OMM_Text = `table OMM {
  CCSDS_OPM_VERS:float,
  COMMENT:string,
  CREATION_DATE:string,
  ORIGINATOR:string,
  OBJECT_NAME:string,
  OBJECT_ID:string,
  REF_FRAME:string,
  REF_FRAME_EPOCH:string,
  TIME_SYSTEM:string,
  MEAN_ELEMENT_THEORY:string,
  EPOCH:ulong,
  SEMI_MAJOR_AXIS:float,
  MEAN_MOTION:float,
  ECCENTRICITY:float,
  INCLINATION :float,
  RA_OF_ASC_NODE:float,
  ARG_OF_PERICENTER:float,
  MEAN_ANOMALY:float,
  GM :float,
  MASS:float,
  SOLAR_RAD_AREA :float,
  SOLAR_RAD_COEFF:float,
  DRAG_AREA:float,
  DRAG_COEFF:float,
  EPHEMERIS_TYPE:string,
  CLASSIFICATION_TYPE:string,
  NORAD_CAT_ID:uint,
  ELEMENT_SET_NO:ulong,
  REV_AT_EPOCH:float,
  BSTAR:float,
  MEAN_MOTION_DOT:float,
  MEAN_MOTION_DDOT:float
}

root_type OMM;`;

  globalThis.createEditor = () => {
    if (!editor && globalThis.monaco) {
      monaco.languages.setMonarchTokensProvider(lang, {
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
      });

      monaco.editor.defineTheme(lang, {
        base: "vs",
        inherit: false,
        rules: [
          { token: "keyword.control.flatbuffers", foreground: "9100ff" },
          { token: "storage.type.flatbuffers", foreground: "2f45eb" }
        ]
      });
      monaco.languages.register({ id: lang });
      editor = monaco.editor.create(document.getElementById("monacoeditor"), {
        value: OMM_Text,
        language: lang,
        theme: lang,
        automaticLayout: true
      });
      editor.onDidChangeModelContent(event => console.log(event));
      window.editor = editor;
    }
  };
  onMount(createEditor);
  onLoad(createEditor);
  onDestroy(() => (editor ? editor.dispose() : null));
</script>

<style>
  #monacoeditor {
    height: calc(99.99vh - var(--header-height));
  }
</style>

<svelte:head>
  <script type="module">
    import monaco from "https://digitalarsenal.io/lib/monacoeditor.js";
    createEditor();
  </script>
</svelte:head>
<div id="monacoeditor" />
