<script>
  import { onMount, onDestroy } from "svelte";
  import { tle, satcat, vcm } from "../../../parsers/legacy.js";
  export let loaded;
  let tles = [];
  (async function() {
    async function* makeTextFileLineIterator(fileURL) {
      const utf8Decoder = new TextDecoder("utf-8");
      let response = await fetch(fileURL);
      let reader = response.body.getReader();
      let { value: chunk, done } = await reader.read();
      chunk = chunk ? utf8Decoder.decode(chunk) : "";

      let re = /\r\n|\n|\r/gm;
      let startIndex = 0;
      let result;

      for (;;) {
        let result = re.exec(chunk);
        if (!result) {
          if (done) {
            break;
          }
          let remainder = chunk.substr(startIndex);
          ({ value: chunk, done } = await reader.read());
          chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
          console.log(remainder);
          startIndex = re.lastIndex = 0;
          continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
      }
      if (startIndex < chunk.length) {
        // last line didn't end in a newline char
        yield chunk.substr(startIndex);
      }
    }

    for await (let line of makeTextFileLineIterator("./test/all.txt")) {
      //console.log("Line", line);
    }
  })();
  onMount(() => {
    loaded = true;
  });
</script>

<style>

</style>

<container id="top-container" />
