import { writable } from "svelte/store";

let setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let getItem = (key) => JSON.parse(localStorage.getItem(key));

let _IDLDocument = getItem("IDLDocument");
let _IDLEditorContents = getItem(_IDLDocument);
_IDLDocument;
if (_IDLDocument && _IDLEditorContents) {
  //setTimeout(() => alert(`${_IDLDocument} loaded from disk.`), 1500);
}
export let manifest = writable({ files: [] });
export let IDLDocument = writable(_IDLDocument || "");
export let IDLEditorContents = writable(_IDLEditorContents);
export let CodeEditorDocument = writable("");
export let CodeEditorContents = writable("");
export let CodeEditorLanguage = writable([]);
export let TestEditorContents = writable("");

IDLDocument.subscribe((d) => {
  _IDLDocument = d;
  setItem("IDLDocument", d);
});

IDLEditorContents.subscribe((d) => {
  setItem(_IDLDocument, d);
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
