<script>
  import { onMount, onDestroy } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import {
    IDLEditorContents,
    TestEditorDocument,
    TestEditorContents
  } from "../../stores/Files.js";
  import fb from "../../../lib/flatbuffers.js";
  import ws from "./workerShim.js";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded;
  export let args;

  let _logOutput = "> \n";
  let startLine = 0;
  let _worker;

  const workerPath = "/workers/worker.js";

  let _exec = code => {
    if (_worker) _worker.terminate();
    _logOutput = "";
    let _preamble = `${ws}${code}`;
    startLine = _preamble.match(/\n/g).length;
    _worker = new Worker(
      window.URL.createObjectURL(
        new Blob([`${_preamble}${$TestEditorContents}`], {
          type: "text/javascript"
        })
      )
    );
    _worker.onmessage = e => {
      if (e.data === "done") worker.terminate();
      else _logOutput += "> " + e.data + "\n";
    };
    _worker.onerror = function(err) {
      _logOutput += `${err.message}  at line ${err.lineno - startLine}`;
    };
  };

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
        IDLDocument: "JSTEST",
        IDLEditorContents: $IDLEditorContents,
        loaded
      };
      workerLoader(workerPath, inputObject, function(d) {
        _exec(`${fb}${d.data}`);
      });
    }
  }

  args = {
    documentName: TestEditorDocument,
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
    grid-template-rows: 35px 70% auto;
  }
  :global(.editor2) {
    height: 100%;
  }
  #top-container {
    border: 1px solid silver;
    box-sizing: border-box;
  }
  #run {
    background: #bd1c00;
    color: white;
    height: 100%;
    max-width: 100px;
    border: 1px #333 solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
  }
  textarea {
    font-size: 12px;
    overflow-y: scroll;
    user-select: none;
    font: 12px/1.2 sans-serif;
  }
</style>

<container>
  <div style="padding:5px;" on:click={() => getTestScript()}>
    <div id="run">RUN CODE</div>
  </div>
  <div id="top-container">
    <Editor {args} />
  </div>
  <textarea readonly value={_logOutput} />
</container>
