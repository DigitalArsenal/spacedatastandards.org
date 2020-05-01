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
  import download from "downloadjs";
  import xmlformatter from "xml-formatter";
  import navCommon_xsd from "../../../test/ndmxml-1.0-navwg-common.xsd";
  import omm_xsd from "../../../test/ndmxml-1.0-omm-2.0.xsd";

  const workerPath = "/workers/worker.js";

  export let loaded;
  export let args;
  export let toggleMenu;

  const downloads = ["./test/twoline.txt", "./test/threeline.txt"];
  let currentDownload = downloads[0];

  let parser = new DOMParser();
  let navCommon_xsd_xml = parser.parseFromString(navCommon_xsd, "text/xml");
  let omm_xsd_xml = parser.parseFromString(omm_xsd, "text/xml");
  let _xml = [navCommon_xsd_xml, omm_xsd_xml];

  const makeArray = a => Array.prototype.slice.call(a);
  const getElementsByAttribute = (
    _documentElement,
    _TagName,
    _attributeName,
    _attributeValue
  ) => {
    let _array = makeArray(_documentElement.getElementsByTagName(_TagName));
    return _attributeName
      ? _array.filter(n =>
          _attributeValue
            ? n.attributes.getNamedItem(_attributeName).value ===
              _attributeValue
            : n.attributes.getNamedItem(_attributeName)
        )
      : _array;
  };

  const getKids = a =>
    makeArray(a.children[0].children)
      .map(n =>
        n.attributes.getNamedItem("name")
          ? n.attributes.getNamedItem("name").value
          : false
      )
      .filter(Boolean);
  const aMap = (a = {}) =>
    Object.entries(a)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  const tagUp = (k, v, a = {}) => `\t<${k} ${aMap(a)}>${v}</${k}>`;

  let rMap = {
    covarianceMatrix: "covarianceMatrixElementsGroup"
  };

  const genTags = (tags, a, _v) => {
    return getKids(tags[a]).map(n => {
      if (tags[n + "Type"] || tags[rMap[n]]) {
        _v[n] = genTags(tags, tags[rMap[n]] ? rMap[n] : n + "Type", _v).join(
          "\n"
        );
      }
      if (_v[n]) {
        return `\t${tagUp(n, _v[n])}`;
      }
    });
  };

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

  let versionExtensions = {
    RAW: "txt",
    "OMM (KEY / VALUE)": "txt",
    "OMM (JSON)": "json",
    "OMM (XML)": "xml",
    "OMM (FLATBUFFER)": "fbs"
  };

  let versions = {
    RAW: v => (v ? v.join("\n") : ""),
    "OMM (KEY/VALUE)": v => {
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
    "OMM (XML)": v => {
      let tagTypes = {
        "xsd:complexType": [],
        "xsd:simpleType": [],
        "xsd:element": [],
        "xsd:group": []
      };

      _xml.forEach(xx => {
        Object.keys(tagTypes).forEach(tt => {
          tagTypes[tt] = tagTypes[tt].concat(
            makeArray(xx.documentElement.getElementsByTagName(tt))
          );
        });
      });

      let tags = {};
      Object.values(tagTypes).forEach(ta => {
        ta.forEach(ttt => {
          if (ttt.attributes.getNamedItem("name")) {
            tags[ttt.attributes.getNamedItem("name").value] = ttt;
          }
        });
      });
      //TAGS

      v = tles.format.OMM(v);
      let _v = {};
      let keys = Reflect.ownKeys(schema.definitions.OMM.properties);
      for (let k = 0; k < keys.length; k++) {
        let key = keys[k];
        _v[key] = v[key] || null;
      }

      Object.entries(_v).map(kv => {
        _v[kv[0]] =
          kv[1] instanceof Date
            ? JSON.stringify(kv[1])
            : tofixed(kv[1]) || "null";
      });

      let xmlString = `
<ndm 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:noNamespaceSchemaLocation="http://sanaregistry.org/r/ndmxml/ndmxml-1.0-master.xsd">
  <omm id="CCSDS_OMM_VERS" version="2.0">
    <header>
       ${genTags(tags, "ndmHeader", _v).join("\n")}
    </header>
    <body>
    <segment>
    <metadata>
    ${genTags(tags, "ommMetadata", _v).join("\n")}
    </metadata>
    <data>
    ${genTags(tags, "ommData", _v).join("\n")}
    </data>
    </segment>
    </body>
  </omm>
</ndm>`;

      let xmlDoc = parser.parseFromString(xmlString, "text/xml");
      let XML = {
        parse: (string, type = "text/xml") =>
          new DOMParser().parseFromString(string, type), // like JSON.parse
        stringify: DOM => new XMLSerializer().serializeToString(DOM), // like JSON.stringify

        transform: (xml, xsl) => {
          let proc = new XSLTProcessor();
          proc.importStylesheet(typeof xsl == "string" ? XML.parse(xsl) : xsl);
          let output = proc.transformToFragment(
            typeof xml == "string" ? XML.parse(xml) : xml,
            document
          );
          return typeof xml == "string" ? XML.stringify(output) : output; // if source was string then stringify response, else return object
        },

        minify: node => XML.toString(node, false),
        prettify: node => XML.toString(node, true),
        toString: (node, pretty, level = 0, singleton = false) => {
          // einzelkind
          if (typeof node == "string") node = XML.parse(node);
          let tabs = pretty
            ? Array(level + 1)
                .fill("")
                .join("\t")
            : "";
          let newLine = pretty ? "\n" : "";
          if (node.nodeType == 3)
            return (
              (singleton ? "" : tabs) +
              node.textContent.trim() +
              (singleton ? "" : newLine)
            );
          if (!node.tagName) return XML.toString(node.firstChild, pretty);
          let output = tabs + `<${node.tagName}`; // >\n
          for (let i = 0; i < node.attributes.length; i++)
            output += ` ${node.attributes[i].name}="${node.attributes[i].value}"`;
          if (node.childNodes.length == 0) return output + " />" + newLine;
          else output += ">";
          let onlyOneTextChild =
            node.childNodes.length == 1 && node.childNodes[0].nodeType == 3;
          if (!onlyOneTextChild) output += newLine;
          for (let i = 0; i < node.childNodes.length; i++)
            output += XML.toString(
              node.childNodes[i],
              pretty,
              level + 1,
              onlyOneTextChild
            );
          return (
            output +
            (onlyOneTextChild ? "" : tabs) +
            `</${node.tagName}>` +
            newLine
          );
        }
      };
      return (
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        xmlformatter(
          new XMLSerializer().serializeToString(xmlDoc.documentElement),
          { indentation: "  ", collapseContent: true }
        )
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

      var BuiltOMM = OMM.endOMM(builder);

      builder.finish(BuiltOMM);

      var buf = builder.dataBuffer();
      let uint8 = builder.asUint8Array();
      var decoder = new TextDecoder("utf8");
      var b64encoded = btoa(
        unescape(encodeURIComponent(decoder.decode(uint8)))
      );
      return uint8;
    }
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
  const setRawText = c => {
    tles && schema
      ? (raw = versions[currentVersion](tles.lines[c || current]))
      : null;
  };

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
    total = tles.lines.length - 1;
    if ($IDLEditorContents && !schema) {
      convertObjects();
    } else {
      loaded = true;
    }
    setRawText();
  }
  const downloadData = () => {
    if (raw) {
      download(
        raw,
        `test_omm.${versionExtensions[currentVersion] || "txt"}`,
        "text/plain"
      );
    }
  };
  let versionsKey = {
    raw: "RAW",
    kv: "OMM (KEY / VALUE)",
    json: "OMM (JSON)",
    xml: "OMM (XML)",
    fbs: "OMM (FLATBUFFER)"
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
    getData();
    let params = new URL(document.location.href.split("#")).searchParams;
    let format = (params.get("format") || "").toLowerCase();

    if (format && versionsKey[format]) {
      currentVersion = versionsKey[format];
    }
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
