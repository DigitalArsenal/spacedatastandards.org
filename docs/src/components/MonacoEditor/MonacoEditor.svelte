<script>
  import { onLoad } from "../../lib/global.js";
  import { onMount, onDestroy } from "svelte";
  import { IDLDocument } from "../../stores/Files";
  import tokenProvider from "./TokenProvider.js";
  export let loaded = undefined;
  export let args;

  let editor;

  let {
    documentName,
    editorContents,
    _class,
    _style,
    language = "javascript",
    theme,
    readOnly = false
  } = args;

  const setEditorLanguage = n => {
    if (!n) return;
    let language;
    if (globalThis.monaco) {
      let extension = n.split(".").pop();
      let languages = monaco.languages.getLanguages();
      for (let x = 0; x < languages.length; x++) {
        let _language = languages[x];
        if (
          _language.extensions &&
          _language.extensions.indexOf("." + extension) > -1
        ) {
          language = _language.id;
          break;
        }
      }

      if (editor && globalThis.monaco && editor.getModel()) {
        monaco.editor.setModelLanguage(editor.getModel(), language);
        editor.updateOptions({ readOnly: readOnly });
      }
    }
  };

  documentName.subscribe(setEditorLanguage);

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
      monaco.languages.register({ id: "flatbuffers", extensions: [".fbs"] });
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
    setEditorLanguage($documentName);
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
