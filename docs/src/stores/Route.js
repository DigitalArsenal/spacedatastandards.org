import { writable } from "svelte/store";

export let routeparams = writable({});
export let currentDocument = writable({});
export let editorContents = writable("");