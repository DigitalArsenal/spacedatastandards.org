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

  const workerPath = "/workers/worker.js";
  $CodeEditorLanguage = $CodeEditorLanguage.length
    ? $CodeEditorLanguage
    : languages[0];

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
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    padding: 2px;
    user-select: none;
    outline: none;
  }
</style>

<div>
  <select bind:value={$CodeEditorLanguage} on:change={() => createCode()}>
    {#each languages as language}
      <option value={language} selected={language === $CodeEditorLanguage}>
        {language[1]}
      </option>
    {/each}
  </select>
</div>
<Editor {args} />
