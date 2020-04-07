<script>
  import { onLoad } from "./global.js";
  let editor;
  onLoad(() => {
    editor = monaco.editor.create(document.getElementById("monacoeditor"), {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript",
      automaticLayout: true
    });
  });
</script>

<style>
  #monacoeditor {
    height: calc(99.99vh - var(--header-height));
  }
</style>

<svelte:head>
  <script type="module">
    import monaco from "https://digitalarsenal.io/lib/monacoeditor.js";
    globalThis.monaco = monaco;
  </script>
</svelte:head>
<div id="monacoeditor" />
