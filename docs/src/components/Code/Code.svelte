<script>
  import { onMount } from "svelte";
  import {
    IDLDocument,
    IDLEditorContents,
    CodeEditorDocument,
    CodeEditorContents,
    CodeEditorLanguage
  } from "../../stores/Files";
  import { languages } from "./languages.js";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded = undefined;
  export let toggleMenu = undefined;

  export let args;

  let results = { data: "", schema: "", fileName: "" };
  let mode = 0;
  const workerPath = "/workers/worker.js";
  $CodeEditorLanguage = $CodeEditorLanguage.length
    ? $CodeEditorLanguage
    : languages[0];

  $: {
    $CodeEditorContents = mode === 0 ? results.data : results.schema;
    $CodeEditorDocument =
      mode === 0 ? results.fileName : `${results.fileName}.schema.json`;
  }
  const callback = data => {
    results = data;
    mode = 0;
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
      currentLanguage: $CodeEditorLanguage,
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
  select {
    border-radius: 10px;
    font-size: 12px;
    padding: 2px;
    user-select: none;
    outline: none;
  }
  #topMenu {
    display: grid;
    grid-template-columns: 200px 75px 75px;
    grid-gap: 5px;
    padding: 5px;
  }
  #topMenu div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--celestrak-blue);
    border-radius: 5px;
    background: white;
    border: 1px var(--celestrak-blue) solid;
    cursor: pointer;
  }
  #topMenu div.active {
    background: var(--celestrak-blue);
    border-radius: 5px;
    color: white;
  }
</style>

<div id="topMenu">
  <select bind:value={$CodeEditorLanguage} on:change={() => createCode()}>
    {#each languages as language}
      <option value={language} selected={language === $CodeEditorLanguage}>
        {language[1]}
      </option>
    {/each}
  </select>

  <div class:active={mode === 0} on:click={() => (mode = 0)}>Code</div>
  <div class:active={mode === 1} on:click={() => (mode = 1)}>Schema</div>
</div>
<Editor {args} />
