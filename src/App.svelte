<script lang="ts">
  import "./index.css";
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import { routes } from "@/stores/routes";

  onMount(async () => {});
</script>

<Router {routes} />

<style global lang="postcss">
  /* Avoid Chrome to see Safari hack */

  :global(body) {
    height: 100vh;
    overflow: hidden;

    /* The hack for Safari */
    height: -webkit-fill-available;
  }
  :global(div) {
    box-sizing: border-box;
  }
  /* Chrome, safari */
  *::-webkit-scrollbar {
    width: 8px;
  }
  * {
    outline: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }
</style>
