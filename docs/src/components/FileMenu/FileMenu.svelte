<script>
  import { onMount, onDestroy } from "svelte";
  import {
    currentDocument,
    manifest,
    IDLEditorContents
  } from "../../stores/Files";
  import path from "path-browserify";
  export let loaded;
  let visible = false;
  let dE = document.documentElement;

  let cC = function(e) {
    if (Array.from(e.target.classList).indexOf("listClick") === -1) {
      visible = false;
    }
  };
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
  onMount(() => {
    dE.addEventListener("click", cC);
  });
  onDestroy(() => {
    dE.removeEventListener("click", cC);
  });
</script>

<style>
  a {
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    border: 1px #eee solid;
    padding: 5px;
    cursor: pointer;
  }
  a:hover {
    background: #eee;
    color: #333;
  }
  #dropdown {
    z-index: 100;
    position: fixed;
    top: calc(var(--header-height) - 2px);
    right: 1px;
    height: 100vh;
    background: #ddd;
    overflow-y: auto;
    border: 1px var(--celestrak-blue) solid;
  }
  #dropdown div {
    border: #ddd 1px solid;
    padding: 5px;
    background: var(--celestrak-blue);
    cursor: pointer;
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

<a
  class="listClick"
  target=""
  href="javascript:"
  on:click={e => {
    visible = !visible;
  }}>
  OPEN
</a>
<div
  id="dropdown"
  class="listClick"
  on:mouseleave={e => (visible = false)}
  style="display:{visible ? 'initial' : 'none'}">
  {#each $manifest.files as mfile}
    <div
      on:click={e => {
        loaded = false;
        loadFile(mfile);
        visible = false;
        window.location.hash = '/';
      }}>
      {mfile}
    </div>
  {/each}
</div>
