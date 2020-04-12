<script>
  import { onMount } from "svelte";
  import { onLoad } from "./lib/global.js";
  import Editor from "./components/MonacoEditor/MonacoEditor.svelte";
  import Code from "./components/Code/Code.svelte";
  import FileMenu from "./components/FileMenu/FileMenu.svelte";
  import Loader from "./Loader.svelte";
  import Navaid from "navaid";
  import { routeparams } from "./stores/Route";
  import { manifest, currentDocument, editorContents } from "./stores/Files.js";

  let menuOpen;

  let loaded = false;
  let router = new Navaid("/");
  $: {
    console.log($currentDocument);
  }
  $: link = `https://public.ccsds.org/Pubs/${
    $currentDocument.split("/").filter(Boolean)[0]
  }.pdf`;
  const setRoute = (_params, _component) => {
    $routeparams = _params;
    activeComponent = _component;
  };

  let activeComponent = Editor;
  router.on("/#/", params => {
    setRoute(params, Editor);
  });

  router.on("/#/code", params => {
    setRoute(params, Code);
  }); /*
  router.on("/#Docs", params => {
    setRoute(params, Docs);
  });
  router.on("/#Docs/Page/:link?/:sublink?/:subsection?", params => {
    setRoute(params, DocPage);
  });*/
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
    margin-bottom: 5px;
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
    grid-template-columns: auto auto auto;
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

<container>
  <header>
    <span style="font-size:2vw">SPACEDATASTANDARDS.ORG</span>
    {#if $currentDocument}
      <a target="_blank" href={link}>DOC</a>
    {/if}
    <div id="links">
      <FileMenu bind:loaded />
      <a href="#/" class:active={activeComponent === Editor}>IDL</a>
      <a href="#/code" class:active={activeComponent === Code}>CODE</a>
    </div>
  </header>
  <main>
    {#if !loaded}
      <Loader />
    {/if}
    <div id="mainContainer">
      <svelte:component this={activeComponent} bind:loaded />
    </div>

  </main>
</container>
