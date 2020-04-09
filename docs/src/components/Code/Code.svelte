<script>
  import { onMount } from "svelte";
  import { fs } from "../../stores/FileSystem";
  import { currentDocument } from "../../stores/Route";
  import { languages } from "./languages.js";

  export let loaded;
  let result = "";

  let currentLanguage = languages[0];
  let createCode = async () => {
    loaded = false;
    if (!globalThis.flatc) {
      loaded = true;
      return;
    }
    try {
      let fb = new globalThis.flatc({
        fs: fs,
        rootDir: "/"
      });
      await fb.runCommand([
        "./flatc",
        currentLanguage[0],
        "-o",
        "/test",
        `/test/${$currentDocument}.fbs`
      ]);
      window.errPipe = fs.createReadStream("/dev/stderr");
      window.outPipe = fs.createReadStream("/dev/stdout");
      window.errPipe.on("data", data => {
        console.log(data.toString("utf8"));
      });
      window.outPipe.on("data", data => {
        console.log(data.toString("utf8"));
      });
      globalThis.fs = fs;
      let _resultFile;
      fs.readdirSync("/test/").forEach(f => {
        if (f.slice(f.lastIndexOf(".") + 1) === currentLanguage[2]) {
          _resultFile = f;
        }
      });
      result = fs.readFileSync(`/test/${_resultFile}`, {
        encoding: "utf8"
      });
      loaded = true;
    } catch (e) {
      loaded = true;
      result = "Code Generation Failed:  Check Syntax And Try Again.";
    }
  };
  globalThis.createCode = createCode;
  onMount(() => {
    loaded = true;
    createCode();
  });
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - var(--header-height) - 25px);
  }
</style>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    globalThis.flatc = flatc;
    createCode();
  </script>
</svelte:head>
<div>
<select bind:value={currentLanguage} on:change={() => createCode()}>
  {#each languages as language}
    <option value={language}>{language[1]}</option>
  {/each}
</select>
<a href="https://github.com/google/flatbuffers/tree/master/{currentLanguage[3]}">Download Flatbuffer Library</a>
</div>
<textarea readonly value={result} />
