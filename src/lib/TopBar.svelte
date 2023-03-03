<script lang="ts">
  import { location } from "svelte-spa-router";
  import Icon from "svelte-awesome";
  import { github } from "svelte-awesome/icons";
  export let title: string;
</script>

<div
  class="pl-3 pr-3 bg-gray-800 text-white flex items-center justify-between text-xs md:text-xl lg:text-xl font-light">
  <div class="flex gap-2 h-10">
    <a
      class:bg-blue-500={$location === "/"}
      class="transition-all flex gap-2 pl-2 pr-2 items-center justify-start"
      href="#/">
      HOME
    </a>
    <a
      class:bg-blue-500={$location === "/Standards"}
      class="transition-all p-1 flex gap-2 pl-2 pr-2 items-center justify-start"
      href="#/Standards">
      STANDARDS
    </a>
    <a
      class:underline={$location === "/Code"}
      class="flex gap-2 items-center justify-start"
      href="https://github.com/DigitalArsenal/spacedatastandards.org/tree/main/code">
      CODE
    </a>
  </div>
  <div class="text-sm">{@html title}</div>
  <div class="flex items-center justify-center">
    <a
      class="transition-all p-1 flex gap-2 pl-6 pr-2 items-center justify-start"
      href="https://github.com/digitalarsenal/spacedatastandards.org"
      ><Icon data={github} />GITHUB</a>
  </div>
</div>
