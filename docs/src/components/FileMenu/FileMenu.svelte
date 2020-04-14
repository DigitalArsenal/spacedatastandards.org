<script>
  import { onMount, onDestroy } from "svelte";
  import {
    currentDocument,
    manifest,
    IDLEditorContents
  } from "../../stores/Files";
  import path from "path-browserify";
  export let loaded;
  export let toggleMenu;
  let dE = document.documentElement;
  $: {
    if ($manifest) {
      loaded = true;
    }
  }

  let loadFile = mFile => {
    if (!$IDLEditorContents || confirm("Replace Current IDL Contents?")) {
      fetch(path.join($manifest.root, mFile))
        .then(async data => {
          $currentDocument = mFile;
          $IDLEditorContents = "";
          $IDLEditorContents = await data.text();
        })
        .catch(e => {});
    }
  };
</script>

<style>
  #docs {
    z-index: 100;
    width: 100%;
    right: 1px;
    height: 100vh;
    background: #fff;
    overflow-y: auto;
    border: 1px var(--celestrak-blue) solid;
  }
  #docs div {
    border: #ddd 1px solid;
    padding: 5px;
    background: var(--celestrak-blue);
    cursor: pointer;
    color: #eee;
    width: 50%;
  }
  #docs div:hover {
    background: #2164bd;
  }
</style>

<div id="docs">
  {#each $manifest.files as mfile}
    <div
      on:click={e => {
        loaded = false;
        loadFile(mfile);
        window.location.hash = '/';
        toggleMenu(false);
      }}>
      {mfile}
    </div>
  {/each}
</div>
