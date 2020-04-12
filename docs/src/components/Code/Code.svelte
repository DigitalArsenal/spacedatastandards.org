<script>
  import { onMount } from "svelte";
  import { currentDocument, editorContents } from "../../stores/Files";
  import { languages } from "./languages.js";
  import { mobilecheck } from "./DetectMobile.js";

  export let loaded;

  const workerPath = "/workers/worker.js";
  let currentLanguage = languages[0];

  let result = {
    fileName: "",
    data: ""
  };

  const callback = data => {
    result = data;
    loaded = data.loaded;
  };

  $: resultHref = [
    "data:application/octet-stream",
    result.fileName,
    "charset=utf-8",
    `base64,${btoa(result)}`
  ].join(";");

  let createCode = () => {
    if (!$currentDocument) {
      return;
    }
    loaded = false;
    result.data = "";
    let inputObject = {
      currentLanguage,
      currentDocument: $currentDocument,
      editorContents: $editorContents,
      loaded
    };
    if (mobilecheck()) {
      import(workerPath).then(m => {
        m.convert({ data: inputObject })
          .then(callback)
          .catch(e => {
            result = e;
          });
      });
    } else {
      let flatWorker = new Worker(workerPath, { type: "module" });
      flatWorker.postMessage(inputObject);
      flatWorker.onmessage = a => {
        let { data } = a;
        callback(data);
      };
    }
  };
  currentDocument.subscribe(() => {
    loaded = false;
    createCode();
  });
  onMount(() => {
    loaded = $currentDocument ? false : true;
  });
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - var(--header-height) - 25px);
  }
  a:link,
  a:visited {
    background-color: #c00;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  a:hover,
  a:active {
    background-color: rgb(233, 0, 0);
  }
</style>

<div>
  <select bind:value={currentLanguage} on:change={() => createCode()}>
    {#each languages as language}
      <option value={language}>{language[1]}</option>
    {/each}
  </select>
  <a href={resultHref} download={result.fileName}>&darr; Code</a>
  <a
    target="_blank"
    href="https://github.com/google/flatbuffers/tree/master/{currentLanguage[3]}">
    &darr; Library
  </a>
</div>
<textarea readonly value={result.data} />
