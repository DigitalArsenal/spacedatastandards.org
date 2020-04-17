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
      else _logOutput += "> " + e.data + "<br/>";
      setTimeout(() => {
        let ta = document.getElementById("console");
        ta.scrollTop = ta.scrollHeight;
      }, 10);
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
        let file = Object.keys(d.files).filter(
          f => f.slice(f.lastIndexOf(".")) === ".js"
        );
        _exec(`${fb}${d.files[file]}`);
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
    loaded = false;
    fetch("./test/test.js")
      .then(async d => {
        $TestEditorContents = await d.text();
        loaded = true;
      })
      .catch(e => {
        alert(`Loading file error: ${e}`);
        loaded = true;
      });
  });
</script>

<style>
  container {
    height: 100%;
    display: grid;
    grid-template-rows: 35px auto 100px;
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
  #console {
    padding-left: 5px;
    font-size: 12px;
    overflow-y: scroll;
    overflow-x: none;
    user-select: none;
    word-wrap: break-word;
    font: 12px/1.2 sans-serif;
    color: #333;
  }
</style>

<container>
  <div style="padding:5px;" on:click={() => getTestScript()}>
    <div id="run">RUN CODE</div>
  </div>
  <div id="top-container">
    <Editor {args} />
  </div>
  <div id="console">
    {@html _logOutput}
  </div>
</container>
