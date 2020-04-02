<script>
  import { onMount } from "svelte";
  import { onLoad } from "./global.js";
  let flatcLoaded = false;
  let flatc;
  onLoad(() => {
    flatcLoaded = true;
    flatc = globalThis.flatc;
  });
</script>

<style>
  :global(html, body) {
    position: relative;
    width: 100%;
    height: 100%;
  }

  :global(body) {
    color: #333;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #006eff;
    text-transform: uppercase;
    font-size: 4em;
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
  <h1>SpaceDataStandards.Org</h1>
  <p>Loaded: {flatcLoaded}</p>
</main>
