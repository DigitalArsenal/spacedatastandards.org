<script>
  import { onMount } from "svelte";
  import background from "./background.html.txt";

  export let loaded;
  onMount(() => {
    loaded = true;
  });
</script>

<style>
  #backgroundContainer {
    height: calc(100vh - var(--header-height));
    overflow-y: scroll;
  }
  #backgroundContainer div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    padding: 10px;
    font-weight: 500;
    font-size: 16px;
    max-width: 1024px;
    margin: auto;
  }
  :global(#backgroundContainer h2) {
    border-bottom-color: rgb(234, 236, 239);
    border-bottom-style: solid;
    border-bottom-width: 0.993304px;
    box-sizing: border-box;
    padding-bottom: 5px;
    font-weight: 100;
    font-size:calc((1.7rem + 0.5 * ((100vw - 50rem) / 120)));
  }
  h1 {
    margin: auto;
    font-size: calc((2rem + 0.5 * ((100vw - 50rem) / 120)));
    width: fit-content;
    padding: 15px;
    font-weight: 300;
  }
</style>

<div id="backgroundContainer">

  <h1>Space Data Standards</h1>
  <div>
    {@html background}
  </div>
</div>
