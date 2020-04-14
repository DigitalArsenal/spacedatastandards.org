import { writable } from "svelte/store";

let setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let getItem = (key) => JSON.parse(localStorage.getItem(key));

let _currentDocument = getItem("currentDocument");
let _IDLEditorContents = getItem(_currentDocument);
_currentDocument;
if (_currentDocument && _IDLEditorContents) {
  //setTimeout(() => alert(`${_currentDocument} loaded from disk.`), 1500);
}
export let manifest = writable({ files: [] });
export let currentDocument = writable(_currentDocument);
export let IDLEditorContents = writable(_IDLEditorContents);
export let TestEditorContents = writable("");

currentDocument.subscribe((d) => {
  _currentDocument = d;
  setItem("currentDocument", d);
});

IDLEditorContents.subscribe((d) => {
  setItem(_currentDocument, d);
});

fetch(`./schemas/manifest.json`)
  .then(async (r) => {
    let m = await r.json();
    manifest.set(m);
  })
  .catch((e) => {
    alert(e);
    manifest.set({ files: [] });
  });
