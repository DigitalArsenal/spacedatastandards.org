<script>
  import { onMount } from "svelte";
  import {
    IDLDocument,
    IDLEditorContents,
    CodeEditorDocument,
    CodeEditorContents
  } from "../../stores/Files";
  import { languages } from "./languages.js";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded;
  export let args;

  const workerPath = "/workers/worker.js";
  let currentLanguage = languages[0];

  const callback = data => {
    $CodeEditorDocument = data.fileName;
    $CodeEditorContents = data.data;
    loaded = data.loaded;
  };

  let createCode = () => {
    if (!$IDLDocument) {
      return;
    }
    $CodeEditorContents = "";
    let inputObject = {
      currentLanguage,
      IDLDocument: $IDLDocument,
      IDLEditorContents: $IDLEditorContents,
      loaded
    };
    workerLoader(workerPath, inputObject, callback);
  };
  IDLDocument.subscribe(() => {
    createCode();
  });
  onMount(() => {
    loaded = $IDLDocument ? false : true;
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
    padding: 2px;
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
  <a
    target="_blank"
    href="https://github.com/google/flatbuffers/tree/master/{currentLanguage[3]}">
    &darr; Library
  </a>
</div>
<Editor {args} />
