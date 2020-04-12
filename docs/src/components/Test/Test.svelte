<script>
  import { onMount } from "svelte";
  import Editor from "../MonacoEditor/MonacoEditor.svelte";
  import fb from "../../../lib/flatbuffers.js";

  export let loaded;
  onMount(() => {
    loaded = true;
  });
</script>

<style>
  container {
    height: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
  }
</style>

<container>
  <div>Test1</div>
  <div>Test2</div>
</container>
