<script>
  import { onMount } from "svelte";
  import { currentDocument, editorContents } from "../../stores/Route";
  import { languages } from "./languages.js";

  export let loaded;
  let result = {
    fileName: "",
    data: ""
  };

  $: resultHref = [
    "data:application/octet-stream",
    result.fileName,
    "charset=utf-8",
    `base64,${btoa(result)}`
  ].join(";");
  let currentLanguage = languages[0];
  let createCode = async () => {
    loaded = false;
    result.data = "";
    let flatWorker = new Worker("./workers/worker.js", { type: "module" });
    flatWorker.postMessage({
      currentLanguage,
      currentDocument: $currentDocument,
      editorContents: $editorContents,
      loaded
    });
    flatWorker.onmessage = a => {
      loaded = a.data.loaded;
      result = a.data;
    };
  };
  globalThis.createCode = createCode;
  onMount(() => {
    loaded = true;
    createCode();
  });
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - var(--header-height) - 25px);
  }
  a:link,
  a:visited {
    background-color: rgb(233, 0, 0);
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
