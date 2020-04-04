<script>
  import { onMount } from "svelte";
  import CodeMirror from "CodeMirror";
  export let editor;
  onMount(() => {
    editor = CodeMirror(document.getElementById("editor"), {
      value: `
      import { world } from 'hello';
      `,
      mode: "javascript",
      lineNumbers: true,
      lineWrapping: true
    });
    editor.on("change", (...args) => {
      console.log(args[0].getValue());
    });
  });
</script>

<svelte:head>
  <style>
    @import "../../../node_modules/codemirror/lib/codemirror.css";
  </style>
</svelte:head>
<div id="editor" />
