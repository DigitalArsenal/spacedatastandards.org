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

  let startLine = 0;
  let _worker;
  let _results = "";

  let _2le = "";
  let _3le = "";
  let time = {};

  $: {
    if (($CodeEditorDocuments, $IDLDocument)) {
    }
  }

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

  onMount(async () => {
    Promise.all(
      ["./test/tle.txt", "./test/all.txt"].map((file, i) =>
        (async (file, i) => {
          let start = new Date();
          let response = await fetch(file);
          let reader = response.body.getReader();
          let tles = new tle(reader);
          let stop = await tles.readLines();
          let rows = tles.lines;

          if (i) {
            _3le = rows.flat().join("\n");
          } else {
            _2le = rows.flat().join("\n");
          }
        })(file, i)
      )
    ).then(a => {
      if ($IDLEditorContents) {
        convertObjects();
      } else {
        IDLEditorContents.subscribe(c => {
          convertObjects();
        });
      }
      loaded = true;
    });
  });
</script>

<style>
  #top-container {
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    padding: 5px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
  }

  #top-container textarea {
    height: 100%;
  }
</style>

<container id="top-container">
  <textarea bind:value={_2le} />
  <textarea bind:value={_3le} />

</container>
