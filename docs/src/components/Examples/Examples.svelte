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
  import bignumber from "bignumber.js";

  const workerPath = "/workers/worker.js";

  export let loaded;
  const downloads = ["./test/twoline.txt", "./test/threeline.txt"];
  let currentDownload = downloads[0];

  let _worker;
  let tles;
  let raw;
  let schema;

  let startLine = 0;
  let total = 0;
  $: current = Math.min(Math.max(current, 1), total) || 0;
  let currentVersion = "RAW";
  let filtered = [];
  let filter = "";
  let tofixed = n => {
    if (!isNaN(n) && (typeof n === "number" || n instanceof bignumber)) {
      let place = n % 1 ? 15 : 0;
      n = n.toFixed(place);
      n = place ? n.replace(/0+$/, "") : n;
    } else {
      n = n || null;
    }
    return n;
  };

  let versions = {
    RAW: v => (v ? v.join("\n") : ""),
    "OMM (KEY / VALUE)": v => {
      if (!v) return;
      v = tles.format.OMM(v);
      let _v = {};
      let keys = Reflect.ownKeys(schema.definitions.OMM.properties);
      for (let k = 0; k < keys.length; k++) {
        let key = keys[k];
        _v[key] = v[key] || null;
      }
      let _max =
        Reflect.ownKeys(_v).reduce((p, c) => (p.length > c.length ? p : c))
          .length + 1;
      let result = Object.entries(_v)
        .map(kv => {
          return `${kv[0].padEnd(_max)} = ${(tofixed(kv[1]) || "null")
            .toString()
            .replace(/"/g, "")}`;
        })
        .join("\n");
      return result;
    },
    "OMM (JSON)": v => {
      if (!v) return;
      v = tles.format.OMM(v);
      let _v = {};
      let keys = Reflect.ownKeys(schema.definitions.OMM.properties);
      for (let k = 0; k < keys.length; k++) {
        let key = keys[k];
        _v[key] = tofixed([key]);
      }
      return JSON.stringify(_v, null, 4).replace(
        /"([\-+\s]?[0-9]+\.{0,1}[0-9]*)"/g,
        "$1"
      );
    }
    /* "OMM (XML)": v => {}*/
  };

  $: {
    if (tles && currentVersion && !isNaN(current)) {
      setRawText();
    }
  }

  $: filtered =
    tles && tles.lines && filter.length
      ? tles.lines.filter(v => JSON.stringify(v).indexOf(filter) > -1)
      : [];
  const setRawText = c =>
    tles && schema
      ? (raw = versions[currentVersion](tles.lines[c || current]))
      : null;

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
      if (e.data === "done") {
        _worker.terminate();
        loaded = true;
        setRawText();
      } else {
        _results += `${e.data.join("")}  \n`;
      }
    };
    _worker.onerror = function(err) {
      alert(`${err.message}  at line ${err.lineno - startLine}`);
    };
  };

  let src = `
    _done();
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
        let sfile = Object.keys(d.files).filter(
          f => f.indexOf("schema.json") > -1
        );
        schema = JSON.parse(d.files[sfile]);
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

    setRawText();
    total = tles.lines.length - 1;
    if ($IDLEditorContents && !schema) {
      convertObjects();
    } else {
      loaded = true;
      setRawText();
    }
  }

  onMount(async () => {
    loaded = true;
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
    grid-template-columns: 200px 60px 150px;
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
    padding: 5px;
  }
  #slider {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  #slider input {
    height: 1;
    width: 100%;
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
  div[contenteditable="true"] {
    padding: 1px;
    width: 50px;
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
      <div
        class="arrow"
        on:click={() => {
          current = Math.max(0, current - 1);
        }}>
        ⯇
      </div>
      <div>
        <div
          contenteditable="true"
          bind:textContent={current}
          inputmode="text" />
        /{total}
      </div>
      <div
        class="arrow"
        on:click={() => {
          current = Math.min(total, current + 1);
        }}>
        ⯈
      </div>
    </div>
    <div id="slider">
      <input
        type="range"
        min="1"
        max={total}
        bind:value={current}
        class="slider"
        id="myRange" />
    </div>
  </div>
</container>
