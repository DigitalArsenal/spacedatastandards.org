<script>
  import { onMount } from "svelte";
  import {
    IDLDocument,
    manifest,
    IDLEditorContents
  } from "../../stores/Files.js";
  import path from "path-browserify";
  export let loaded;
  export let args;
  export let toggleMenu;

  let loadFile = mFile => {
    if (!$IDLEditorContents || confirm("Replace Current IDL Contents?")) {
      fetch(path.join($manifest.root, mFile))
        .then(async data => {
          $IDLDocument = mFile;
          $IDLEditorContents = "";
          $IDLEditorContents = await data.text();
          loaded = true;
        })
        .catch(e => {
          alert(`Fetch Failed With Error: ${e}`);
          loaded = true;
        });
    }
  };
  onMount(() => {
    loaded = true;
  });
</script>

<style>
  container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
    padding: 20px;
  }
  :root {
    --border-radius: 2em 17em;
  }
  .docButton {
    position: relative;
    color: #eee;
    font-size: var(--font-size-btn);
    font-weight: 150;
    min-width: 200px;
    padding: 5px;
    margin: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px #6c9ec4 outset;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    background: var(--button-gradient);
    text-shadow: 1px 1px #666;
    cursor: pointer;
  }
  .docButton .text {
    z-index: 2;
  }
  .docButton::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    transition: opacity 0.2s linear;
    opacity: 0;
    background-image: linear-gradient(
      to right,
      var(--celestrak-blue) 0%,
      #3dabff 50%,
      var(--celestrak-blue) 100%
    );
  }
  .docButton:hover::before {
    opacity: 1;
  }
  h1 {
    font-size: calc(2rem + 0.5 * ((100vw - 50rem) / 120));
    text-align: center;
    color: #444;
    font-weight: 100;
    font-family: var(--font-family);
  }
  h1 a {
    text-decoration: none;
    color: var(--celestrak-blue);
    border-bottom: 0.5px var(--celestrak-blue) solid;
  }
</style>

<h1>
  <a target="_blank" href="https://public.ccsds.org">CCSDS</a>
  RECOMMENDED STANDARDS
</h1>
<container>
  {#each $manifest.files as mfile}
    <div class="docButton">
      <div
        class="text"
        on:click={e => {
          loaded = false;
          loadFile(mfile.filename);
          window.location.hash = '/idl';
          toggleMenu(false);
        }}>
        {mfile.title}
        <br />
        {mfile.filename.match(/\w{1,}/)}
      </div>
    </div>
  {/each}
</container>
