//@ts-ignore
import { Writable, writable } from "svelte/store";
import  languagesJSON from "./languages.mjs";
export const languages = languagesJSON;

export const currentEditorLanguage: Writable<number> = writable(0);
export const currentEditorFile: Writable<string> = writable("");
export const totalFiles: Writable<Array<string>> = writable([]);

/*export let languages = [
    ["--cpp", "C++ header", "h", "include"],
    ["--java", "Java", "java", "java"],
    ["--kotlin", "Kotlin", "kt", "java"],
    [["--csharp", "--gen-object-api"], "C#", "cs", "net"],
    ["--go", "Go", "go", "go"],
    ["--python", "Python", "py", "python", "text/x-script.python"],
    ["--jsonschema", "JSON Schema", "json", "json"],
    [["--ts", "--gen-object-api"], "TypeScript", "ts", "js", "text/javascript"],
    ["--php", " PHP", "php", "php"],
    ["--dart", " Dart"],
    ["--lua", " Lua"],
    ["--lobster", " Lobster"],
    /*["--rust, -r ", " Rust"],*/
  //  ["--swift", " Swift"]

//];