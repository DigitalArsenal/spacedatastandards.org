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
  let tles;
  let raw;
  let total = 0;
  let current = 0;
  let versions = { RAW: "lines", OMM: "OMMCOLLECTION" };
  let currentVersion = "RAW";
  const filter = a => console.log(a);
  const setRawText = () => {
    let prop = versions[currentVersion];
    raw = JSON.stringify(tles[prop][current], null, 4);
  };

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
    raw = "";
    let i = downloads.indexOf(currentDownload);
    let start = new Date();
    let response = await fetch(currentDownload);
    let reader = response.body.getReader();
    tles = new tle(reader);
    let stop = await tles.readLines();

    if ($IDLEditorContents) {
      convertObjects();
    }
    setRawText();
    total = tles.lines.length;
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
    /*border-radius: 10px;*/
    font-size: 12px;
    padding: 2px;
    user-select: none;
    outline: none;
  }
  #topMenu {
    display: grid;
    grid-template-columns: 200px 60px 200px;
    grid-gap: 15px;
    padding: 5px;
    height: 40px;
  }

  #top-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 5px;
    display: grid;
    grid-template-rows: auto 50px;
    grid-gap: 5px;
  }

  #controls {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
  }
  #page {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 10px;
    font-size: var(--font-size-sm);
  }
  #controls #page div {
    cursor: pointer;
    display: flex;
    border: 1px #eee solid;
    align-items: center;
    justify-content: center;
    padding:5px;
  }
  #controls input {
    height: 1;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--celestrak-blue);
    /*border-radius: 5px;*/
    color: white;
    height: 100%;
    cursor: pointer;
  }
  .button:hover {
    background: #2164bd;
  }
</style>

<div id="topMenu">
  <select bind:value={currentDownload}>
    {#each downloads as download}
      <option value={download} selected={download === currentDownload}>
        {download}
      </option>
    {/each}
  </select>
  <div class="button" on:click={() => getData()}>Fetch</div>
  <select bind:value={currentVersion} on:change={() => setRawText()}>
    {#each Object.entries(versions) as [key, value]}
      <option value={key} selected={key === currentVersion}>{key}</option>
    {/each}
  </select>
</div>
<container id="top-container">
  <textarea bind:value={raw} />
  <div id="controls">
    <div id="page">
      <div class="arrow">⯇</div>
      <div>{total}</div>
      <div class="arrow">⯈</div>
    </div>
    <input type="text" on:keyup={e => filter(e.target.value)} />
  </div>
</container>
