<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.mjs";
  export let loaded;
  let tles = [];

  onMount(async () => {
    let response = await fetch("./test/all.txt");
    let reader = response.body.getReader();
    let tles = new tle(reader);
    loaded = true;
  });
</script>

<style>

</style>

<container id="top-container" />
