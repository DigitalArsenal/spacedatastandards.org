<script>
  import { onMount, onDestroy } from "svelte";
  import {
    currentDocument,
    manifest,
    editorContents
  } from "../../stores/Files";
  import path from "path-browserify";

  let visible = false;
  let dE = document.documentElement;

  let cC = function(e) {
    if (Array.from(e.target.classList).indexOf("listClick") === -1) {
      visible = false;
    }
  };
  let loadFile = mFile => {
    fetch(path.join($manifest.root, mFile)).then(async data => {
      $editorContents = await data.text();
    });
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
    top: calc(var(--header-height) - 5px);
    right: 5px;
  }
  #dropdown div {
    border: #eee 1px solid;
    padding: 5px;
    background: var(--celestrak-blue);
    cursor: pointer;
  }
</style>

<a
  class="listClick"
  target=""
  href="javascript:"
  on:click={e => {
    visible = !visible;
  }}>
  {$currentDocument || 'Select Schema'}
</a>
<div
  id="dropdown"
  class="listClick"
  on:mouseleave={e => (visible = false)}
  style="display:{visible ? 'initial' : 'none'}">
  {#each $manifest.files as mfile}
    <div
      on:click={e => {
        loadFile(mfile);
        visible = false;
      }}>
      {mfile}
    </div>
  {/each}
</div>
