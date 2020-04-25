<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.mjs";
  import {
    CodeEditorDocuments,
    IDLEditorContents,
    IDLDocument
  } from "../../stores/Files";
  import workerLoader from "../../lib/workerLoader.js";
  import fb from "../../../lib/flatbuffers.js";
  import ws from "../../lib/workerShim.js";

  const workerPath = "/workers/worker.js";

  export let loaded;
  const downloads = ["./test/twoline.txt", "./test/threeline.txt"];
  let currentDownload = downloads[0];
  let startLine = 0;
  let _worker;
  let tles = { lines: [] };
  let raw;

  let _exec = code => {
    if (_worker) _worker.terminate();
    let _preamble = `${ws}${code}`;
    startLine = _preamble.match(/\n/g).length;
    _worker = new Worker(
      window.URL.createObjectURL(
        new Blob([`${_preamble}`], {
          type: "text/javascript"
        })
      )
    );
    _worker.onmessage = e => {
      if (e.data === "done") worker.terminate();
      else _results += `${e.data.join("")}  \n`;
      console.log(_results);
    };
    _worker.onerror = function(err) {
      _results += `${err.message}  at line ${err.lineno - startLine}`;
    };
  };

  let src = `
    //console.log(OMM);
  `;

  function convertObjects() {
    if (src) {
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
        _exec(`${fb}${d.files[file]}${src}`);
      });
    }
  }
  async function getData() {
    loaded = false;
    let i = downloads.indexOf(currentDownload);
    let start = new Date();
    let response = await fetch(currentDownload);
    let reader = response.body.getReader();
    tles = new tle(reader);
    let stop = await tles.readLines();
    let rows = tles.lines;

    if ($IDLEditorContents) {
      convertObjects();
    }
    raw = tles.lines.flat().join("\n");
    loaded = true;
  }

  onMount(async () => {
    loaded = true;
    /*
     */
  });
</script>

<style>
  select {
    border-radius: 10px;
    font-size: 12px;
    padding: 2px;
    user-select: none;
    outline: none;
  }
  #topMenu {
    display: grid;
    grid-template-columns: 200px 60px;
    grid-gap: 15px;
    padding: 5px;
    height: 40px;
  }

  #top-container {
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    padding: 5px;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 5px;
  }

  #top-container textarea {
    height: 100%;
  }
  #download {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--celestrak-blue);
    border-radius: 5px;
    color: white;
    height: 100%;
    cursor: pointer;
  }
  #download:hover {
    background: #2164bd;
  }
</style>

<div id="topMenu">
  <select
    bind:value={currentDownload}
    on:change={() => console.log(currentDownload)}>
    {#each downloads as download}
      <option value={download} selected={download === currentDownload}>
        {download}
      </option>
    {/each}
  </select>
  <div id="download" on:click={() => getData()}>Fetch</div>
</div>
<container id="top-container">
  <textarea bind:value={raw} />
</container>
