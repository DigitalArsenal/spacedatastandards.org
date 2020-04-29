<script>
  import { onMount, onDestroy } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import {
    IDLDocument,
    IDLEditorContents,
    TestEditorDocument,
    TestEditorContents,
    saveEventTime
  } from "../../stores/Files.js";
  import fb from "../../../lib/flatbuffers.js";
  import ws from "../../lib/workerShim.js";
  import workerLoader from "../../lib/workerLoader.js";
  import demangler from "../../lib/demangler.js";

  export let loaded;
  export let args;

  const workerPath = "/workers/worker.js";
  let carat = `>`;
  let _logOutput = `${carat}\n`;
  let startLine = 0;
  let _worker;
  let _running;
  let dragging;
  let dragEl = [];

  let mouseupEvent = () => {
    dragging = false;
    scrollDown();
    document.removeEventListener("mouseup", mouseupEvent);
    document.removeEventListener("mousemove", mouseMoveEvent);
  };
  let mouseMoveEvent = e => {
    e = e && e.touches ? e.touches[0] : e;
    if (e) {
      dragEl[3].style.height = dragging
        ? `${Math.max(
            10,
            window.innerHeight -
              e.clientY -
              2 *
                parseInt(
                  globalThis
                    .getComputedStyle(document.getElementById("hr"))
                    .height.replace("px", "")
                )
          )}px`
        : dragEl[3].style.height;
    }
    dragEl[2].style.height = `${window.innerHeight -
      document.getElementsByTagName("header")[0].clientHeight -
      dragEl[1].clientHeight -
      dragEl[3].clientHeight}px`;
  };
  $: {
    if ($saveEventTime) {
      runTestScript();
    }
  }

  const scrollDown = () =>
    setTimeout(() => {
      let ta = document.getElementById("console");
      if (ta) {
        ta.scrollTop = ta.scrollHeight;
      }
    }, 10);
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
    _logOutput = "";
    _worker.onmessage = e => {
      if (e.data === "done") _worker.terminate();

      if (e.data.global) {
        globalThis[e.data.globalName] = e.data.global;
      } else _logOutput += `${carat} ${e.data.join("")}  \n`;
      scrollDown();
    };
    _worker.onerror = function(err) {
      _logOutput += `${err.message}  at line ${err.lineno - startLine}`;
      _worker.terminate();
    };
  };

  function runTestScript() {
    if (_running) return;
    _running = true;
    if ($IDLEditorContents) {
      _logOutput = `${carat} LOADING ...`;
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
        _running = false;
        let file = Object.keys(d.files).filter(
          f => f.slice(f.lastIndexOf(".")) === ".js"
        );
        let schemaFile = Object.keys(d.files).filter(
          f => f.indexOf("schema.json") > -1
        );

        if (d.files[file] && d.files[schemaFile]) {
          let _keys = Object.keys(
            JSON.parse(d.files[schemaFile]).definitions.OMM.properties
          );
          d.files[file] = demangler(_keys, d.files[file]);
          _exec(`${fb}${d.files[file]}; OMM.schema = ${d.files[schemaFile]};`);
        } else {
          alert(JSON.stringify(d));
        }
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
    if (!$IDLDocument) {
      window.location.hash = "/select";
    }
    dragEl = [
      document.getElementById("test-top-container"),
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
    mouseMoveEvent();
    window.addEventListener("resize", mouseMoveEvent);
  });
  onDestroy(() => {
    window.removeEventListener("resize", mouseMoveEvent);
  });
</script>

<style>
  :root {
    --console-height: 250px;
  }
  #test-top-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :global(.editor2) {
    height: 100%;
  }
  #editor-container {
    box-sizing: border-box;
    height: 50%;
  }
  #editor-container,
  #console {
    flex: 1 1 auto;
  }
  #console {
    padding: 5px;
    padding-bottom: 50px;
    font-size: 12px;
    font-weight: 400;
    font-family: monospace;
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
    font-weight: 300;
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
  #top-menu div#reloadEditor,
  #top-menu div#run {
    max-width: 200px;
    right: 0px;
    background: var(--button-gradient);
  }
  #top-menu div#reloadEditor:hover,
  #top-menu div#run:hover {
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
    z-index: 1;
    cursor: ns-resize;
    height: 20px;
    background: #888;
    box-shadow: -1px 2px 2px -1px black;
  }
</style>

<div id="test-top-container">
  <div id="top-menu">
    <div id="run" on:click={() => runTestScript()}>RUN CODE</div>
    <div style="font-size:.7rem">NOTE: This tool only works in Chrome.</div>
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
    }}
    on:touchstart={() => {
      dragging = true;
      [['touchcancel', mouseupEvent], ['touchend', mouseupEvent], ['touchmove', mouseMoveEvent]].forEach(
        ee => {
          document.addEventListener.apply(document, ee);
        }
      );
    }}>
    &nbsp;
  </div>
  <textarea readonly id="console" bind:value={_logOutput} />
</div>
