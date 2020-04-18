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
  let dragging;
  let dragEl = [];

  let mouseupEvent = () => {
    dragging = false;
    document.removeEventListener("mouseup", mouseupEvent);
    document.removeEventListener("mousemove", mouseMoveEvent);
  };
  let mouseMoveEvent = e => {
    dragEl[3].style.height = dragging
      ? `${Math.max(10, window.innerHeight - e.clientY)}px`
      : dragEl[3].style.height;
    dragEl[2].style.height = `${window.innerHeight -
      document.getElementsByTagName("header")[0].clientHeight -
      dragEl[1].clientHeight -
      dragEl[3].clientHeight}px`;
  };

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
    dragEl = [
      document.getElementById("top-container"),
      document.getElementById("top-menu"),
      document.getElementById("editor-container"),
      document.getElementById("console")
    ];
    loaded = false;
    if (!$TestEditorContents) {
      resetTestScript();
    } else {
      loaded = true;
    }
    window.addEventListener("resize", mouseMoveEvent);
  });
  onDestroy(() => {
    window.removeEventListener("resize", mouseMoveEvent);
  });
</script>

<style>
  :root {
    --console-height: 100px;
  }
  container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  container div {
  }
  :global(.editor2) {
    height: 100%;
  }
  #editor-container {
    box-sizing: border-box;
  }
  #editor-container,
  #console {
    flex: 1 1 auto;
  }
  #console {
    padding: 5px;
    font-size: 12px;
    overflow-y: scroll;
    overflow-x: none;
    user-select: none;
    word-wrap: break-word;
    font: 12px/1.2 sans-serif;
    color: #333;
    height: var(--console-height);
  }
  #top-menu {
    font-size: var(--font-size-sm);
    padding: 2px;
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
  #hr {
    border-top: 0.5px #eee solid;
    cursor: ns-resize;
    height: 3px;
    background: #444;
  }
</style>

<container id="top-container">
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
  <div id="editor-container">
    <Editor {args} />
  </div>
  <div
    id="hr"
    on:mousedown={() => {
      dragging = true;
      [['mouseup', mouseupEvent], ['mousemove', mouseMoveEvent]].forEach(ee => {
        document.addEventListener.apply(document, ee);
      });
    }}>
    &nbsp;
  </div>
  <div id="console">
    {@html _logOutput}
  </div>
</container>
