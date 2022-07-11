<script lang="ts">
  import "codemirror/lib/codemirror.css";
  import CodeMirror from "codemirror";
  //import "codemirror/mode/javascript/javascript";
  import addFlatbufferMode from "@/external/google-modes/flatbuffers.js";

  import { onMount } from "svelte";
  let codeMirrorInstance;
  export let readOnly = false;
  let id = "cm-editor-21394595934509";

  addFlatbufferMode(CodeMirror);
  export let content;

  $: {
    if (content && codeMirrorInstance) {
      codeMirrorInstance.setValue(content);
    }
  }

  onMount(() => {
    codeMirrorInstance = CodeMirror(document.getElementById(id), {
      value: "",
      mode: "flatbuffers",
      lineNumbers: true,
      lineWrapping: true,
      readOnly,
    });
    codeMirrorInstance.setSize("100%", "100%");
  });
</script>

<div class="w-full h-full" {id} />
