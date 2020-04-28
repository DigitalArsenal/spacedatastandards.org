<script>
  import { onMount } from "svelte";
  import background from "./background.html.txt";
  console.log(background);
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
    padding: 5px;
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
  }
</style>

<div id="backgroundContainer">
  <div>
    {@html background}
  </div>
</div>
