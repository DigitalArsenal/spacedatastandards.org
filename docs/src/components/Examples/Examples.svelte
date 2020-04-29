<script>
  import OMM from "./OMM.svelte";
  import { onMount, onDestroy } from "svelte";

  import {
    CodeEditorDocuments,
    IDLEditorContents,
    IDLDocument
  } from "../../stores/Files";

  export let loaded;
  export let args;
  export let toggleMenu;

  let examples = { OMM };
  let activeComponent;

  onMount(() => {
    let root_type = $IDLEditorContents.match(/(?<=root_type\s{1,})([^;]{1,})/g);
    if (root_type && examples[root_type[0]]) {
      activeComponent = examples[root_type[0]];
    } else {
      alert(`No Example For Type ${root_type}`);
      window.location.hash = "/idl";
    }
  });
</script>

<svelte:component
  this={activeComponent}
  bind:loaded
  bind:args
  bind:toggleMenu />
