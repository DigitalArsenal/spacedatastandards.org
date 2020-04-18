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

  function runTestScript() {
    if ($IDLEditorContents) {
      _logOutput = "LOADING ...";
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
  const resetTestScript = () => {
    fetch("./test/test.js")
      .then(async d => {
        $TestEditorContents = await d.text();
        loaded = true;
      })
      .catch(e => {
        alert(`Loading file error: ${e}`);
        loaded = true;
      });
  };

  args = {
    documentName: TestEditorDocument,
    _class: "editor2",
    language: "javascript",
    editorContents: TestEditorContents,
    theme: "vs-dark"
  };

  onMount(() => {
    loaded = false;
    if (!$TestEditorContents) {
      resetTestScript();
    } else {
      loaded = true;
    }
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
  #top-menu {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;
  }
  #top-menu div {
    font-weight: 200;
    color: #eee;
    height: 100%;
    border: 0.5px #eee inset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    padding: 8px;
    background: linear-gradient(
      to right,
      #8f0222 0%,
      #a90329 44%,
      #830220 100%
    );
  }
  #top-menu div:hover {
    background: linear-gradient(
      to right,
      #8f0222 0%,
      #c90230 44%,
      #6d0019 100%
    );
  }
  #top-menu div#reloadEditor {
    max-width: 200px;
    right: 0px;
    background: var(--button-gradient);
  }
  #top-menu div#reloadEditor:hover {
    max-width: 200px;
    right: 0px;
    background: linear-gradient(
      to right,
      var(--celestrak-blue) 0%,
      #007fe0 50%,
      var(--celestrak-blue) 100%
    );
  }
</style>

<container>
  <div id="top-menu">
    <div id="run" on:click={() => runTestScript()}>RUN CODE</div>
    <div
      id="reloadEditor"
      on:click={() => {
        if (confirm('Reset Test Editor?')) {
          resetTestScript();
        }
      }}>
      RELOAD SCRIPT
    </div>
  </div>
  <div id="top-container">
    <Editor {args} />
  </div>
  <div id="console">
    {@html _logOutput}
  </div>
</container>
