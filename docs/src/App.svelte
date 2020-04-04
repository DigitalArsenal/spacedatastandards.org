<script>
  import { onMount } from "svelte";
  import { onLoad } from "./global.js";
  import Editor from "./MonacoEditor.svelte";

  let flatcLoaded = false;
  let flatc;
  onLoad(() => {
    flatcLoaded = true;
    flatc = globalThis.flatc;
  });
</script>

<style>
  :root {
    --font-size-sm: calc((2rem + 0.5 * ((100vw - 50rem) / 120)));
  }
  :global(html, body) {
    position: relative;
    width: 100%;
    height: 100%;
  }

  :global(body) {
    overflow: hidden;
    color: #333;
    margin: 0;
    padding: 2px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  main {
    margin: 0 auto;
  }

  h1 {
    color: #006eff;
    text-transform: uppercase;
    font-size: var(--font-size-sm);
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    globalThis.flatc = flatc;
  </script>
</svelte:head>

<main>
  <Editor />
</main>
