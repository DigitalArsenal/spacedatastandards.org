<script>
  import { onMount } from "svelte";
  import { onLoad } from "./lib/global.js";
  import Editor from "./components/MonacoEditor/MonacoEditor.svelte";
  import Code from "./components/Code/Code.svelte";
  import Test from "./components/Test/Test.svelte";
  import download from "downloadjs";
  import FileMenu from "./components/FileMenu/FileMenu.svelte";
  import Loader from "./Loader.svelte";
  import Navaid from "navaid";
  import { routeparams } from "./stores/Route";
  import {
    manifest,
    IDLDocument,
    IDLEditorContents,
    CodeEditorDocument,
    CodeEditorContents,
    CodeEditorLanguage,
    TestEditorDocument,
    TestEditorContents
  } from "./stores/Files.js";

  let menuOpen = false;
  let loaded;
  let editor;
  let router = new Navaid("/");
  let args;

  $: link = `https://public.ccsds.org/Pubs/${
    ($IDLDocument || "").split("/").filter(Boolean)[0]
  }.pdf`;

  const setRoute = (_params, _component) => {
    $routeparams = _params;
    activeComponent = _component;
  };
  $: linkName = ($IDLDocument || "").split("/").filter(Boolean)[0];
  let activeComponent = Editor;
  let defaultPath = params => {
    args = {
      documentName: IDLDocument,
      editorContents: IDLEditorContents,
      language: "flatbuffers",
      theme: "flatbuffers",
      _class: "editor1"
    };
    setRoute(params, Editor);
  };
  router.on("/", defaultPath);
  router.on("/#/", defaultPath);
  router.on("/#/code", params => {
    args = {
      documentName: CodeEditorDocument,
      editorContents: CodeEditorContents,
      language: "",
      theme: "",
      _class: "editor1",
      readOnly: true
    };
    setRoute(params, Code);
  });
  router.on("/#/files", params => {
    setRoute(params, FileMenu);
  });

  router.on("/#/test", params => {
    setRoute(params, Test);
  });

  router.listen();

  const toggleMenu = value => {
    menuOpen = value !== undefined ? value : !menuOpen;
    let posVal = menuOpen ? "30vw" : "0vw";
    document.documentElement.style.setProperty("--container-position", posVal);
  };

  function createDownload() {
    let dL = [];
    if (activeComponent === Editor) {
      dL = [$IDLEditorContents, $IDLDocument];
    } else if (activeComponent === Code) {
      dL = [$CodeEditorContents, $CodeEditorDocument];
    } else if (activeComponent === Test) {
      dL = [$TestEditorContents, $TestEditorDocument];
    }
    download(dL[0], dL[1], "text/plain");
  }
</script>

<style>
  :root {
    --font-size-sm: calc((2rem + 0.5 * ((100vw - 50rem) / 120)));
    --celestrak-blue: #1e5cad;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --header-height: 50px;
    --container-position: 0px;
    --menu-width: 30vw;
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
    user-select: none;
  }

  main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100vw;
  }

  header {
    background: var(--celestrak-blue);
    color: white;
    padding: 2px;
    box-sizing: border-box;
    margin-bottom: 1px;
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
    position: relative;
    left: var(--container-position);
    transition: all 0.2s;
    border-left: 1px var(--celestrak-blue) solid;
    background: white;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
      z-index: 1;
      background: white;
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
    grid-gap: 4px;
    grid-template-columns: auto auto auto auto auto;
  }
  #links a,
  header a,
  menu a {
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    border: 1px #eee solid;
    padding: 5px;
  }
  menu a {
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #links a:hover,
  #links a.active {
    background: #eee;
    color: #333;
  }
  #menuButton {
    padding-left: 5px;
    display: flex;
    cursor: pointer;
    font-size: 30px;
  }
  menu {
    position: fixed;
    left: 0px;
    padding: 0px;
    width: var(--menu-width);
    height: 100vh;
    background: #164583;

    margin: 0px;
  }
  menu div {
    height: var(--header-height);
    border-bottom: 1px #aaa solid;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #eee;
    background: #164583;
  }
  menu div:hover {
    background: #1a529b;
  }
</style>

<svelte:head>
  <link
    rel="prefetch"
    href="/workers/worker.js"
    as="worker"
    type="text/javascript" />
  <link
    rel="prefetch"
    href="https://digitalarsenal.io/lib/flatbuffers.js"
    as="worker"
    type="text/javascript" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
    user-scalable=no" />

</svelte:head>
<svelte:options accessors={true} />
<menu>
  <div>
    <a href="#/files">OPEN</a>
  </div>
  <div on:click={() => createDownload()}>SAVE FILE</div>
  {#if $CodeEditorLanguage[0]}
    <div>
      <a
        target="_blank"
        href="https://github.com/google/flatbuffers/tree/master/{$CodeEditorLanguage[3]}">
        &darr; LIBRARY ({$CodeEditorLanguage[0]
          .replace('--', '')
          .toUpperCase()})
      </a>
    </div>
  {/if}
  {#if $IDLDocument}
    <div>
      <a target="_blank" href={link}>{linkName} (PDF)</a>
    </div>
  {/if}
</menu>
<container>
  <header>
    <div id="menuButton" on:click={() => toggleMenu()}>
      <span>☰</span>
    </div>
    <div style="font-size:13px;display:flex">
      <span>SPACEDATASTANDARDS.ORG</span>
    </div>
    <div id="links">
      <a href="#/" class:active={activeComponent === Editor}>IDL</a>
      <a href="#/code" class:active={activeComponent === Code}>CODE</a>
      <a href="#/test" class:active={activeComponent === Test}>TEST</a>
    </div>
  </header>
  <main>
    {#if !loaded}
      <Loader />
    {/if}

    <div id="mainContainer">
      <svelte:component
        this={activeComponent}
        bind:loaded
        {args}
        {toggleMenu} />
    </div>

  </main>
</container>
