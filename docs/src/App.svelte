<script>
  import { onMount } from "svelte";
  import { onLoad } from "./lib/global.js";
  import Editor from "./components/MonacoEditor/MonacoEditor.svelte";
  import Code from "./components/Code/Code.svelte";
  import Test from "./components/Test/Test.svelte";

  import FileMenu from "./components/FileMenu/FileMenu.svelte";
  import Loader from "./Loader.svelte";
  import Navaid from "navaid";
  import { routeparams } from "./stores/Route";
  import {
    manifest,
    currentDocument,
    IDLEditorContents
  } from "./stores/Files.js";

  let menuOpen;

  let loaded = false;
  let router = new Navaid("/");

  let args = {
    editorContents: IDLEditorContents,
    language: "flatbuffers",
    theme: "flatbuffers",
    _class: "editor1"
  };

  $: link = `https://public.ccsds.org/Pubs/${
    $currentDocument.split("/").filter(Boolean)[0]
  }.pdf`;
  const setRoute = (_params, _component) => {
    $routeparams = _params;
    activeComponent = _component;
  };
  $: linkName = $currentDocument.split("/").filter(Boolean)[0];
  let activeComponent = Editor;
  router.on("/#/", params => {
    setRoute(params, Editor);
  });

  router.on("/#/code", params => {
    setRoute(params, Code);
  });

  router.on("/#/test", params => {
    setRoute(params, Test);
  });

  router.listen();
</script>

<style>
  :root {
    --font-size-sm: calc((2rem + 0.5 * ((100vw - 50rem) / 120)));
    --celestrak-blue: #1e5cad;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --header-height: 50px;
  }
  :global(.editor1) {
    height: calc(99.99vh - var(--header-height));
  }
  :global(html, body) {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  :global(body) {
    /*overflow: hidden;*/
    color: #333;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }
  :global(div) {
    box-sizing: border-box;
  }

  main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100vw;
  }

  header {
    background: var(--celestrak-blue);
    color: white;
    padding: 6px;
    box-sizing: border-box;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  container {
    display: grid;
    grid-template-rows: var(--header-height) auto;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
      z-index: 1;
    }
  }
  #mainContainer {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #links {
    box-sizing: border-box;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto auto auto auto auto;
  }
  #links a,
  header a {
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    border: 1px #eee solid;
    padding: 5px;
  }
  #links a:hover,
  #links a.active {
    background: #eee;
    color: #333;
  }
</style>

<svelte:head>
  <link rel="modulepreload" href="workers/worker.js" />
</svelte:head>
<svelte:options accessors={true} />
<container>
  <header>
    <span style="display: flex;">
      {#if $currentDocument}
        <a target="_blank" href={link}>{linkName}</a>
      {:else}
        <span style="font-size:2vw">SPACEDATASTANDARDS.ORG</span>
      {/if}
    </span>
    <div id="links">
      <FileMenu bind:loaded />
      <a href="#/" class:active={activeComponent === Editor}>IDL</a>
      <a href="#/code" class:active={activeComponent === Code}>CODE</a>
      <a href="#/test">TEST</a>
    </div>
  </header>
  <main>
    {#if !loaded}
      <Loader />
    {/if}

    <div id="mainContainer">
      <svelte:component this={activeComponent} bind:loaded {args} />
    </div>

  </main>
</container>
