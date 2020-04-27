<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.mjs";
  import {
    CodeEditorDocuments,
    IDLEditorContents,
    IDLDocument
  } from "../../stores/Files";
  import workerLoader from "../../lib/workerLoader.js";
  import { flatbuffers } from "./flatbuffers.js";
  import bignumber from "bignumber.js";

  const workerPath = "/workers/worker.js";

  export let loaded;
  const downloads = ["./test/twoline.txt", "./test/threeline.txt"];
  let currentDownload = downloads[0];

  let _worker;
  let tles;
  let raw;
  let schema;
  let FlatBuffer = {};
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
          let _v =
            kv[1] instanceof Date
              ? JSON.stringify(kv[1])
              : tofixed(kv[1]) || "null";

          return `${kv[0].padEnd(_max)} = ${_v.toString().replace(/"/g, "")}`;
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
        _v[key] = tofixed(v[key]);
      }
      return JSON.stringify(_v, null, 4).replace(
        /"([\-+\s]?[0-9]+\.{0,1}[0-9]*)"/g,
        "$1"
      );
    },
    "OMM (FLATBUFFER)": v => {
      if (!v) return;
      v = tles.format.OMM(v);
      let { OMM } = FlatBuffer;
      let builder = new flatbuffers.Builder(0);
      let shim = Object.keys(schema.definitions.OMM.properties);
      let intermediate = {};
      shim.forEach(canonicalname => {
        let mangledname = canonicalname.replace(/_/g, "").toUpperCase();
        for (let prop in OMM) {
          if (prop.indexOf(mangledname) > -1) {
            if (v[canonicalname] || v[canonicalname] === 0) {
              let schemaValue =
                schema.definitions.OMM.properties[canonicalname];
              intermediate[prop] = { canonicalname, mangledname };
              let _value = v[canonicalname];
              switch (schemaValue.type) {
                case "number":
                  break;
                case "string":
                  _value = builder.createString(_value);
                  break;
              }
              intermediate[prop].value = _value;
            }
          }
        }
      });

      OMM.startOMM(builder);

      for (let prop in intermediate) {
        OMM[prop](builder, intermediate[prop].value);
      }

      var GOESBuiltOMM = OMM.endOMM(builder);

      builder.finish(GOESBuiltOMM);

      var buf = builder.dataBuffer();
      let uint8 = builder.asUint8Array();
      var decoder = new TextDecoder("utf8");
      var b64encoded = btoa(
        unescape(encodeURIComponent(decoder.decode(uint8)))
      );
      console.log(JSON.stringify(uint8));
      return uint8;
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

  function convertObjects() {
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
      new Function(d.files[file]).bind(FlatBuffer)();
      schema = JSON.parse(d.files[sfile]);
      setRawText();
      loaded = true;
    });
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
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 15px;
    padding: 5px;
  }

  #top-container {
    box-sizing: border-box;
    width: 100%;
    height: calc(100%); /*calc(100% - var(--header-height) - 50px);*/
    padding: 5px;
    display: grid;
    grid-template-rows: 40px auto 50px;
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

<container id="top-container">
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
  <textarea bind:value={raw} />
  <div id="controls">
    <div id="page">
      <div
        class="arrow"
        on:click={() => {
          current = Math.max(0, current - 1);
        }}>
        ◁
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
        ▷
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
