<script>
  import { onMount, onDestroy } from "svelte";
  import { satcat } from "../../../parsers/legacy.mjs";
  import {
    CodeEditorDocuments,
    IDLEditorContents,
    IDLDocument
  } from "../../stores/Files";
  import workerLoader from "../../lib/workerLoader.js";
  import { flatbuffers } from "./flatbuffers.js";
  import bignumber from "bignumber.js";
  import download from "downloadjs";

  const workerPath = "/workers/worker.js";

  export let loaded;
  export let args;
  export let toggleMenu;

  const downloads = ["./test/satcat.txt"];
  let currentDownload = downloads[0];

  let _worker;
  let catalog;
  let raw;
  let schema;
  let FlatBuffer = {};
  let startLine = 0;
  let total = 0;
  let boolCheck = v => (v || v === false ? v : null);

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
      n = boolCheck(n);
    }
    return n;
  };

  let versionExtensions = {
    RAW: "txt",
    "CAT (KEY / VALUE)": "txt",
    "CAT (JSON)": "json",
    "CAT (FLATBUFFER)": "fbs"
  };

  let versions = {
    RAW: v => v,
    "CAT (KEY / VALUE)": v => {
      if (!v) return;
      v = catalog.format.CAT(v);
      let _v = {};
      let keys = Reflect.ownKeys(schema.definitions.CAT.properties);
      for (let k = 0; k < keys.length; k++) {
        let key = keys[k];
        _v[key] = boolCheck(_v[key]);
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
    "CAT (JSON)": v => {
      if (!v) return;
      v = catalog.format.CAT(v);
      let _v = {};
      let keys = Reflect.ownKeys(schema.definitions.CAT.properties);
      for (let k = 0; k < keys.length; k++) {
        let key = keys[k];
        _v[key] = tofixed(v[key]);
        if (schema.definitions.CAT.properties[key].$ref) {
          let _key = schema.definitions.CAT.properties[key].$ref.split(
            "/definitions/"
          )[1];
          _v[key] = schema.definitions[_key].enum[_v[key]] || _v[key];
        }
      }
      return JSON.stringify(_v, null, 4).replace(
        /"([\-+\s]?[0-9]+\.{0,1}[0-9]*)"/g,
        "$1"
      );
    },
    "CAT (FLATBUFFER)": v => {
      if (!v) return;
      v = satcat.format.CAT(v);
      let { CAT } = FlatBuffer;
      let builder = new flatbuffers.Builder(0);
      let shim = Object.keys(schema.definitions.CAT.properties);
      let intermediate = {};
      shim.forEach(canonicalname => {
        let mangledname = canonicalname.replace(/_/g, "").toUpperCase();
        for (let prop in CAT) {
          if (prop.indexOf(mangledname) > -1) {
            if (v[canonicalname] || v[canonicalname] === 0) {
              let schemaValue =
                schema.definitions.CAT.properties[canonicalname];
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

      CAT.startCAT(builder);

      for (let prop in intermediate) {
        CAT[prop](builder, intermediate[prop].value);
      }

      var BuiltCAT = CAT.endCAT(builder);

      builder.finish(BuiltCAT);

      var buf = builder.dataBuffer();
      let uint8 = builder.asUint8Array();
      var decoder = new TextDecoder("utf8");
      var b64encoded = btoa(
        unescape(encodeURIComponent(decoder.decode(uint8)))
      );
      return uint8;
    }
    /* "CAT (XML)": v => {}*/
  };

  $: {
    if (catalog && currentVersion && !isNaN(current)) {
      setRawText();
    }
  }

  $: filtered =
    catalog && catalog.lines && filter.length
      ? catalog.lines.filter(v => JSON.stringify(v).indexOf(filter) > -1)
      : [];
  const setRawText = c =>
    catalog && schema
      ? (raw = versions[currentVersion](catalog.lines[c || current]))
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
    catalog = new satcat(reader);
    let stop = await catalog.readLines();

    setRawText();
    total = catalog.lines.length - 1;
    if ($IDLEditorContents && !schema) {
      convertObjects();
    } else {
      loaded = true;
      setRawText();
    }
  }
  const downloadData = () => {
    if (raw) {
      download(
        raw,
        `test_CAT.${versionExtensions[currentVersion] || "txt"}`,
        "text/plain"
      );
    }
  };
  let sizeEvents = ["resize", "orientationchange"];
  let sizeSet = () =>
    (document.getElementById(
      "code-top-container"
    ).style.height = `calc(${window.innerHeight}px - var(--header-height))`);
  onMount(async () => {
    if (!$IDLDocument) {
      window.location.hash = "/select";
    }
    sizeSet();
    sizeEvents.forEach(e => {
      window.addEventListener(e, sizeSet);
    });
    loaded = true;
  });
  onDestroy(() => {
    sizeEvents.forEach(e => {
      window.removeEventListener(e, sizeSet);
    });
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    padding: 5px;
  }

  #topMenu > div {
    display: grid;
    grid-gap: 5px;
    font-size: var(--font-size-sm);
    padding: 2px;
    grid-template-columns: minmax(100px, 200px) minmax(35px, 55px);
  }
  #right {
    justify-content: right;
  }
  #code-top-container {
    box-sizing: border-box;
    width: 100%;
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

<div id="code-top-container">
  <div id="topMenu">
    <div>
      <select bind:value={currentDownload}>
        {#each downloads as download}
          <option value={download} selected={download === currentDownload}>
            {download}
          </option>
        {/each}
      </select>
      <div class="button" on:click={() => getData()}>GET</div>
    </div>
    <div id="right">
      <select bind:value={currentVersion} on:change={() => setRawText()}>
        {#each Object.entries(versions) as [key, value]}
          <option value={key} selected={key === currentVersion}>{key}</option>
        {/each}
      </select>
      <div class="button" on:click={() => downloadData()}>D/L</div>
    </div>
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
</div>
