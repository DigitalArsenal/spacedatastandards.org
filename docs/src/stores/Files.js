import { writable } from "svelte/store";
import manifestFile from "../../schemas/manifest.json";

let setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let getItem = (key) => JSON.parse(localStorage.getItem(key));

let _IDLDocument = getItem("IDLDocument");
let _IDLEditorContents = getItem(_IDLDocument);
let _TestEditorContents = getItem("TestEditorContents");

export let manifest = writable(manifestFile);
export let IDLDocument = writable(_IDLDocument || "");
export let IDLEditorContents = writable(_IDLEditorContents);
export let CodeEditorDocuments = writable({});
export let CodeEditorActiveDocument = writable("");
export let CodeEditorContents = writable("");
export let CodeEditorLanguage = writable([]);
export let TestEditorDocument = writable("Test.js");
export let TestEditorContents = writable(_TestEditorContents);

IDLDocument.subscribe((d) => {
  _IDLDocument = d;
  setItem("IDLDocument", d);
});

IDLEditorContents.subscribe((d) => {
  setItem(_IDLDocument, d);
});

TestEditorContents.subscribe((d) => {
  setItem("TestEditorContents", d);
});