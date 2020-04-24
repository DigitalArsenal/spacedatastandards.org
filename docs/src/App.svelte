<script>
  import { onMount, onDestroy } from "svelte";
  import { onLoad } from "./lib/global.js";
  import Main from "./components/Main/Main.svelte";
  import Editor from "./components/MonacoEditor/MonacoEditor.svelte";
  import Code from "./components/Code/Code.svelte";
  import Examples from "./components/Examples/Examples.svelte";

  import Test from "./components/Test/Test.svelte";
  import download from "downloadjs";
  import Loader from "./Loader.svelte";
  import Navaid from "navaid";
  import { routeparams } from "./stores/Route";

  import {
    manifest,
    IDLDocument,
    IDLEditorContents,
    CodeEditorActiveDocument,
    CodeEditorContents,
    CodeEditorLanguage,
    TestEditorDocument,
    TestEditorContents,
    saveEventTime
  } from "./stores/Files.js";

  let menuOpen = false;
  let loaded;
  let editor;
  let router = new Navaid("/");
  let args;

  $: link = `https://public.ccsds.org/Pubs/${($IDLDocument || "").match(
    /\w{1,}/
  )}.pdf`;

  const setRoute = (_params, _component) => {
    $routeparams = _params;
    activeComponent = _component;
  };
  $: linkName = ($IDLDocument || "").match(/\w{1,}/);
  let activeComponent = Editor;
  let defaultPath = params => {
    setRoute(params, Main);
  };

  router.on("/", defaultPath);
  router.on("/#/", defaultPath);
  router.on("/#/idl", params => {
    args = {
      documentName: IDLDocument,
      editorContents: IDLEditorContents,
      language: "flatbuffers",
      theme: "flatbuffers",
      _class: "editor1"
    };
    setRoute(params, Editor);
  });

  router.on("/#/code", params => {
    args = {
      documentName: CodeEditorActiveDocument,
      editorContents: CodeEditorContents,
      language: "",
      theme: "",
      _class: "editor1",
      readOnly: true
    };
    setRoute(params, Code);
  });
  router.on("/#/examples", params => {
    args = {
      documentName: "",
      editorContents: "",
      language: "",
      theme: "",
      _class: "editor1",
      readOnly: true
    };
    setRoute(params, Examples);
  });
  router.on("/#/test", params => {
    args = {
      documentName: TestEditorDocument,
      editorContents: TestEditorContents,
      language: "",
      theme: "",
      _class: "editor1",
      readOnly: true
    };
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
      dL = [$CodeEditorContents, $CodeEditorActiveDocument];
    } else if (activeComponent === Test) {
      dL = [$TestEditorContents, $TestEditorDocument];
    }
    download(dL[0], dL[1], "text/plain");
  }

  const sEvent = event => {
    if (event.which == 83 && event.ctrlKey) {
      event.preventDefault();
      $saveEventTime = new Date();
    }
  };

  onMount(() => {
    if (!$IDLDocument) {
      window.location.hash = "";
    }
    window.addEventListener("keydown", sEvent);
  });
  onDestroy(() => {
    window.removeEventListener("keydown", sEvent);
  });
</script>

<style>
  :global(:root) {
    --font-size-sm: calc((0.85rem + 0.5 * ((100vw - 50rem) / 120)));
    --font-size-btn: calc((1.5rem + 0.5 * ((100vw - 50rem) / 120)));
    --font-size-header: calc((1rem + 0.5 * ((100vw - 80rem) / 120)));
    --celestrak-blue: #1e5cad;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --header-height: 50px;
    --container-position: 0px;
    --menu-width: 30vw;
    --header-gradient: linear-gradient(
      to bottom,
      var(--celestrak-blue) 20%,
      #2963af 50%,
      var(--celestrak-blue) 80%
    );
    --button-gradient: linear-gradient(
      to right,
      var(--celestrak-blue) 0%,
      #2b66b3 50%,
      var(--celestrak-blue) 100%
    );
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
    background: var(--header-gradient);
    color: white;
    padding: 2px;
    box-sizing: border-box;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    transition: all 0.1s;
    background: white;
    box-shadow: -5px 2px 6px 7px #00000044;
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
    grid-template-columns: auto;
    font-size: var(--font-size-header);
    padding-right: 10px;
  }
  #links a,
  header a,
  menu a {
    color: #fff;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
    border: 0.5px #ccc solid;
    padding: 5px;
  }

  #menuButton {
    color: #eee;
    padding-left: 10px;
    display: flex;
    cursor: pointer;
    font-size: 30px;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 0px;
  }

  menu a {
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  #links {
    position: absolute;
    right: 0px;
  }
  #links a:hover,
  #links a.active {
    background: #eee;
    color: #333;
  }

  #mainHeader span {
    font-size: var(--font-size-header);
    display: flex;
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
    <a
      href="#/"
      class:active={activeComponent === Main}
      on:click={() => toggleMenu()}>
      HOME
    </a>
  </div>
  <div>
    <a
      href="#/idl"
      class:active={activeComponent === Editor}
      on:click={() => toggleMenu()}>
      IDL
    </a>
  </div>
  <div>
    <a
      href="#/code"
      class:active={activeComponent === Code}
      on:click={() => toggleMenu()}>
      CODE
    </a>
  </div>
  <div>
    <a
      href="#/examples"
      class:active={activeComponent === Test}
      on:click={() => toggleMenu()}>
      EXAMPLES
    </a>
  </div>
  <div>
    <a
      href="#/test"
      class:active={activeComponent === Test}
      on:click={() => toggleMenu()}>
      TEST
    </a>
  </div>
</menu>
<container>
  <header>
    <div id="menuButton" on:click={() => toggleMenu()}>
      <span>☰</span>
    </div>
    <div id="mainHeader">
      <span>
        <a
          style="border:none"
          target="_blank"
          href="https://github.com/DigitalArsenal/spacedatastandards.org">
          SPACEDATASTANDARDS.ORG
        </a>
      </span>
    </div>
    <div id="links">
      {#if $IDLDocument}
        <a target="_blank" href={link} on:click={() => toggleMenu()}>
          {linkName}
        </a>
        <!--<a href="javascript:" on:click={() => createDownload()}>SAVE</a>-->
      {:else}
        <a href="#/">SELECT...</a>
      {/if}
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
