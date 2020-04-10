<script>
  import { onLoad } from "../../lib/global.js";
  import { onMount, onDestroy } from "svelte";
  import { currentDocument, editorContents } from "../../stores/Route";
  import tokenProvider from "./TokenProvider.js";
  export let loaded;
  let lang = "flatbuffers";
  let editor;

  editorContents.subscribe(e => {
    if (editor) editor.setValue(e);
  });

  const setC = () => {
    if (editor && $editorContents !== editor.getValue()) {
      $editorContents = editor.getValue();
    }
  };

  globalThis.createEditor = () => {
    if (!editor && globalThis.monaco) {
      monaco.languages.setMonarchTokensProvider(lang, tokenProvider);

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
        value: $editorContents,
        language: lang,
        theme: lang,
        automaticLayout: true
      });
      globalThis.editor = editor;
      editor.onDidChangeModelContent(setC);
    }
    loaded = true;
  };
  onMount(function() {
    loaded = false;
    createEditor();
  });

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
