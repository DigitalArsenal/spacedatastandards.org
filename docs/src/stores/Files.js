import { writable } from "svelte/store";

let _currentDocument = localStorage.getItem("currentDocument");
let _IDLEditorContents = localStorage.getItem(_currentDocument);
if (_IDLEditorContents) {
  alert(`${_currentDocument} loaded from disk.`);
}
export let manifest = writable({ files: [] });
export let currentDocument = writable(_currentDocument);
export let IDLEditorContents = writable(_IDLEditorContents);
export let TestEditorContents = writable("");

currentDocument.subscribe((d) => {
  _currentDocument = d;
  localStorage.setItem("currentDocument", d);
});

IDLEditorContents.subscribe((d) => {
  localStorage.setItem(_currentDocument, d);
});

if (localStorage.getItem("currentDocument")) {
  console.log(localStorage.getItem("currentDocument"));
}

fetch(`./schemas/manifest.json`)
  .then(async (r) => {
    let m = await r.json();
    manifest.set(m);
  })
  .catch((e) => {
    alert(e);
    manifest.set({ files: [] });
  });
