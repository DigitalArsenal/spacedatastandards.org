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
  args._class = "editorCode";

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
    if (data.error) {
      alert(data.error);
      loaded = true;
      return;
    }
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
      loaded,
      flags: ["--es6-js-export", "--gen-onefile"]
    };
    workerLoader(workerPath, inputObject, callback);
  };
  IDLDocument.subscribe(() => {
    createCode();
    if (false) toggleMenu();
  });
  onMount(() => {
    loaded = $IDLDocument ? false : true;
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
    grid-template-columns: 100px 30vw auto;
    grid-gap: 15px;
    padding: 5px;
    height: 40px;
  }
  #libraryDownload {
    display: flex;
    align-self: center;
    justify-content: flex-end;
  }
  #libraryDownload a {
    text-decoration: none;
    color: white;
    background-color: var(--celestrak-blue);
    padding: 5px;
    font-weight: 200;
    font-size: var(--font-size-sm);
    /*border-radius: 3px;*/
  }
  :global(.editorCode) {
    height: calc(99.99vh - var(--header-height) - 40px);
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
    <select bind:value={$CodeEditorActiveDocument}>
      {#each Object.keys($CodeEditorDocuments).sort(schemaSort) as document}
        <option
          value={document}
          selected={document === $CodeEditorActiveDocument}>
          {document}
        </option>
      {/each}
    </select>
    <div id="libraryDownload">
      {#if $CodeEditorLanguage[0]}
        <a
          target="_blank"
          href="https://github.com/google/flatbuffers/tree/master/{$CodeEditorLanguage[3]}">
          FB LIBRARY ({$CodeEditorLanguage[0].replace('--', '').toUpperCase()})
        </a>
      {/if}
    </div>
  {/if}
</div>
<Editor {args} />
