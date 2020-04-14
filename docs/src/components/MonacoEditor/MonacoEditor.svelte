<script>
  import { onLoad } from "../../lib/global.js";
  import { onMount, onDestroy } from "svelte";
  import { currentDocument } from "../../stores/Files";
  import tokenProvider from "./TokenProvider.js";
  export let loaded;
  export let args;
  let editor;

  let { editorContents, _class, _style, language = "javascript", theme } = args;

  editorContents.subscribe(e => {
    if (editor && editor.getValue() !== e) {
      editor.setValue(e);
    }
    loaded = true;
  });

  const setC = () => {
    if (editor && $editorContents !== editor.getValue()) {
      $editorContents = editor.getValue();
    }
    loaded = true;
  };

  globalThis.createEditor = () => {
    if (!editor && globalThis.monaco) {
      monaco.languages.setMonarchTokensProvider("flatbuffers", tokenProvider);

      monaco.editor.defineTheme("flatbuffers", {
        base: "vs",
        inherit: false,
        rules: [
          { token: "keyword.control.flatbuffers", foreground: "9100ff" },
          { token: "storage.type.flatbuffers", foreground: "2f45eb" }
        ]
      });
      monaco.languages.register({ id: "flatbuffers" });
      editor = monaco.editor.create(document.getElementById("monacoeditor"), {
        value: $editorContents,
        language: language,
        theme: theme,
        automaticLayout: true
      });
      globalThis.editor = editor;
      editor.onDidChangeModelContent(setC);
      window.editor = editor;
    }
    loaded = true;
  };
  onMount(function() {
    createEditor();
  });

  onDestroy(() => (editor ? editor.dispose() : null));
</script>

<style>

</style>

<svelte:head>
  <script type="module">
    import monaco from "https://digitalarsenal.io/lib/monacoeditor.js";
    createEditor();
  </script>
</svelte:head>
<div id="monacoeditor" style={_style} class={_class} />
