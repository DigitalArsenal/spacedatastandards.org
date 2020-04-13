<script>
  import { onMount } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import { TestEditorContents } from "../../stores/Files.js";
  import fb from "../../../lib/flatbuffers.js";
  export let editorContents;
  export let language;
  export let _class;
  export let loaded;
  export let theme;

  onMount(() => {
    loaded = true;
    _class = "editor2";
    language = "javascript";
    editorContents = TestEditorContents;
    theme = "vs-dark";
  });
</script>

<style>
  container {
    height: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
  }
  :global(.editor2) {
    height: 100%;
  }
  #top-container {
    border: 1px solid silver;
    box-sizing: border-box;
  }
</style>

<container>
  <div id="top-container">
    <Editor editorContents={TestEditorContents} {_class} theme="vs-dark" />
  </div>
  <div>Test2</div>
</container>
