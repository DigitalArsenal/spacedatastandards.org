<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.js";
  export let loaded;
  let tles = [];
  fetch("./test/all.txt")
    .then(txx => txx.body)
    .then(rs => {
      const reader = rs.getReader();
      return new tle(reader, tles, true);
    })
    .then(stream => new Response(stream))
    .then(response => response.text())
    .then(txt => {
      for (let t = 0; t < tles.length; t++) {
        console.log(tles[t]);
      }
    })
    .catch(e => {
      console.log(e);
    });
  onMount(() => {
    loaded = true;
  });
</script>

<style>

</style>

<container id="top-container" />
