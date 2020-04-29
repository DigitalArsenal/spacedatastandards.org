<script>
  import OMM from "./OMM.svelte";
  export let loaded;
  export let args;
  export let toggleMenu;
</script>

<svelte:component bind:loaded bind:args bind:toggleMenu this={OMM} />
