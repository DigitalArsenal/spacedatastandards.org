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
  import demangler from "../../lib/demangler.js";
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
    let _editorContents = $CodeEditorDocuments[$CodeEditorActiveDocument];
    let _sFile = Object.keys($CodeEditorDocuments).filter(
      f => f.indexOf("schema.json") > -1
    )[0];
    if (_sFile) {
      let _schema = JSON.parse($CodeEditorDocuments[_sFile]);
      let _keys = [];
      Object.entries(_schema.definitions).forEach(pp => {
        if (pp[1].hasOwnProperty("properties")) {
          _keys = _keys.concat(Object.keys(pp[1].properties));
        }
      });
      $CodeEditorContents = demangler(_keys, _editorContents);
    }
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
  const downloadFile = () => {
    download($CodeEditorContents, $CodeEditorActiveDocument, "text/plain");
  };
  onMount(() => {
    if (!$IDLDocument) {
      window.location.hash = "/select";
    }
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
    grid-template-columns:
      minmax(50px, 100px) minmax(50px, 200px) minmax(20px, 100px)
      auto;
    grid-gap: 15px;
    padding: 5px;
    height: 40px;
  }
  .dlBtn {
    display: flex;
    align-self: center;
    justify-content: flex-end;
    height: 100%;
  }
  .dlBtn a {
    text-decoration: none;
    color: white;
    background-color: var(--celestrak-blue);
    padding: 5px;
    font-weight: 300;
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: center;
    align-items: center;
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
    <div
      class="dlBtn"
      style="justify-content: left;"
      on:click={() => downloadFile()}>
      <a href="javascript:">Download</a>
    </div>
    <div class="dlBtn">
      {#if $CodeEditorLanguage[0]}
        <a
          target="_blank"
          href="https://github.com/google/flatbuffers/tree/master/{$CodeEditorLanguage[3]}">
          FB LIB ({$CodeEditorLanguage[0].replace('--', '').toUpperCase()})
        </a>
      {/if}
    </div>
  {/if}
</div>
<Editor {args} />
