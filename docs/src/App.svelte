<script>
  import { onMount } from "svelte";
  import { onLoad } from "./global.js";
  export let name;
  export let flatc = { length: null };
  onLoad(() => {
    flatc = globalThis.flatc;
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
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
  <h1>Hello {name}!</h1>
  <p>{flatc.length}</p>
</main>
