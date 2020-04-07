<script>
  import { onMount } from "svelte";
  import { onLoad } from "./global.js";
  import Editor from "./MonacoEditor.svelte";
  import Loader from "./Loader.svelte";
  import Navaid from "navaid";
  import { routeparams } from "./stores/Route";

  let menuOpen;

  let router = new Navaid("/");

  const setRoute = (_params, _component) => {
    $routeparams = _params;
    activeComponent = _component;
  };

  let activeComponent = Editor;
  router.on("/", params => {
    setRoute(params, Editor);
  });
  /*
  router.on("/#Docs/:link?", params => {
    setRoute(params, Docs);
  });
  router.on("/#Docs", params => {
    setRoute(params, Docs);
  });
  router.on("/#Docs/Page/:link?/:sublink?/:subsection?", params => {
    setRoute(params, DocPage);
  });*/
  router.listen();

  let loaded = false;
  let flatc;
  onLoad(() => {
    loaded = true;
    flatc = globalThis.flatc;
  });
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
  }

  :global(body) {
    /*overflow: hidden;*/
    color: #333;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100vw;
  }
  header {
    background: var(--celestrak-blue);
    display: flex;
    align-items: center;
    color: white;
    padding: 6px;
    box-sizing: border-box;
  }
  container {
    display: grid;
    grid-template-rows: var(--header-height) auto;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  #editorContainer {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    globalThis.flatc = flatc;
  </script>
</svelte:head>
<container>
  <header>SPACEDATASTANDARDS.ORG</header>
  <main>
    {#if !loaded}
      <Loader />
    {/if}
    <div id="editorContainer">
      <Editor />
    </div>

  </main>
</container>
