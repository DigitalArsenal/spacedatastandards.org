import { writable } from "svelte/store";

export let manifest = writable({ files: [] });
export let currentDocument = writable("");
export let editorContents = writable("");

fetch(`./schemas/manifest.json`).then(async (r) => {
  let m = await r.json();
  manifest.set(m);
});
