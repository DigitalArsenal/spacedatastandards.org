<script>
  import { onMount } from "svelte";
  import {
    IDLDocument,
    IDLEditorContents,
    CodeEditorDocuments,
    CodeEditorActiveDocument,
    CodeEditorContents,
    CodeEditorLanguage
  } from "../../stores/Files";
  import { languages } from "./languages.js";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import workerLoader from "../../lib/workerLoader.js";

  export let loaded = undefined;
  export let toggleMenu = undefined;

  export let args;

  const schemaSort = (a, b) => {
    if (a === b) {
      return 0;
    } else if (a.indexOf("schema.json") > -1) {
      return 1;
    } else if (b.indexOf("schema.json") > -1) {
      return -1;
    } else {
      return a < b ? 1 : -1;
    }
  };

  $: {
    $CodeEditorContents = $CodeEditorDocuments[$CodeEditorActiveDocument];
  }
  const workerPath = "/workers/worker.js";
  $CodeEditorLanguage = $CodeEditorLanguage.length
    ? $CodeEditorLanguage
    : languages[0];

  const callback = data => {
    $CodeEditorDocuments = data.files;
    $CodeEditorActiveDocument = Object.keys(data.files).sort(schemaSort)[0];
    $CodeEditorContents = $CodeEditorDocuments[$CodeEditorActiveDocument];
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
    grid-template-columns: 150px 30vw;
    grid-gap: 15px;
    padding: 5px;
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
  {#if Object.keys($CodeEditorDocuments).length > 0}
    <div>
      <select bind:value={$CodeEditorActiveDocument}>
        {#each Object.keys($CodeEditorDocuments).sort(schemaSort) as document}
          <option
            value={document}
            selected={document === $CodeEditorActiveDocument}>
            {document}
          </option>
        {/each}
      </select>
    </div>
  {/if}
</div>
<Editor {args} />
