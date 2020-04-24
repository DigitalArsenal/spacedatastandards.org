<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.mjs";
  export let loaded;
  let tles = [];

  onMount(async () => {
    loaded = true;
    let response = await fetch("./test/all.txt");
    let reader = response.body.getReader();
    let tles = new tle(reader);
    let stuff = await tles.readLines();
    let response2 = await fetch("./test/tle.txt");
    let reader2 = response2.body.getReader();
    let tles2 = new tle(reader2);
    let stuff2 = await tles2.readLines();
  });
</script>

<style>

</style>

<container id="top-container" />
