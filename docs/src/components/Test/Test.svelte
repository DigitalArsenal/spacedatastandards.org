<script>
  import { onMount } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import { TestEditorContents } from "../../stores/Files.js";
  import fb from "../../../lib/flatbuffers.js";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded;
  export let args;

  const workerPath = "/workers/worker.js";

  args = {
    _class: "editor2",
    language: "javascript",
    editorContents: TestEditorContents,
    theme: "vs-dark"
  };
  onMount(() => {
    loaded = true;
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
    <Editor {args} />
  </div>
  <div>Test2</div>
</container>
