<script>
  import { onLoad } from "./global.js";
  import { onMount, onDestroy } from "svelte";
  import FB_Schema from "./lib/schema/flatbuffers/FlatbuffersSchema.configuration.json";
  import FB_Scheme from "./lib/schema/flatbuffers/flatbuffers.json";
  let lang = "flatbuffers";
  let editor;

  globalThis.createEditor = () => {
    if (!editor && globalThis.monaco) {
      monaco.editor.defineTheme(lang, {
        base: "vs",
        inherit: false,
        rules: FB_Scheme
      });
      monaco.languages.register({ id: lang });
      editor = monaco.editor.create(document.getElementById("monacoeditor"), {
        value: `struct Vec3 {
  x:float;
  y:float;
  z:float;
}

table Monster {
  pos:Vec3;
  mana:short = 150;
  hp:short = 100;
  name:string;
  inventory:[ubyte];
  test:Any;
}

root_type Monster;
      `,
        language: lang,
        automaticLayout: true
      });
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
