<script>
  import { onMount } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import { IDLEditorContents, TestEditorContents } from "../../stores/Files.js";
  import fb from "../../../lib/flatbuffers.js";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded;
  export let args;

  const workerPath = "/workers/worker.js";

  function getTestScript() {
    if ($IDLEditorContents) {
      let inputObject = {
        currentLanguage: [
          "--js",
          "Generate JavaScript code",
          "js",
          "js",
          "text/javascript"
        ],
        currentDocument: "JSTEST",
        IDLEditorContents: $IDLEditorContents,
        loaded
      };
      workerLoader(workerPath, inputObject, function(d) {
        globalThis.eval(d.data);
      });
    }
  }

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
    grid-template-rows: 35px 50% auto;
  }
  :global(.editor2) {
    height: 100%;
  }
  #top-container {
    border: 1px solid silver;
    box-sizing: border-box;
  }
  #run {
    background: blue;
    color: white;
    width: 50px;
    height: 100%;
    border: 1px #333 solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<container>
  <div style="padding:5px;" on:click={() => getTestScript()}>
    <div id="run">RUN</div>
  </div>
  <div id="top-container">
    <Editor {args} />
  </div>
  <div></div>
</container>
