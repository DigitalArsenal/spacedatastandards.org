<script>
  import { onLoad } from "./global.js";
  import CodeMirror from "CodeMirror";
  let editor;
  onLoad(() => {
    editor = monaco.editor.create(document.getElementById("monacoeditor"), {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    });
  });
</script>

<style>
  #monacoeditor {
    width: 100vw;
    height: 100vh;
  }
</style>

<svelte:head>
  <script type="module">
    import monaco from "https://digitalarsenal.io/lib/monacoeditor.js";
    globalThis.monaco = monaco;
  </script>
</svelte:head>
<div id="monacoeditor" />
