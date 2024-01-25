<script lang="ts">
  import Router, { location, push } from "svelte-spa-router";
  import { derived } from "svelte/store";
  import "./app.css";
  import Standards from "./lib/Standards.svelte";
  import Form from "./lib/Form.svelte";
  import packageJSON from "root/package.json";
  import Icon from "svelte-awesome";
  import { github } from "svelte-awesome/icons";

  let routes: any = {
    "/": Standards,
    "/standards": Standards,
  };

  if (window.location.host !== "spacedatastandards.org") {
    routes["/form"] = Form;
  }

  const currentPath = derived(location, ($location) => {
    // If the path is empty or not recognized, redirect to '/standards'
    if ($location === "/" || !Object.keys(routes).includes($location)) {
      push("/standards");
    }
    return $location;
  });
</script>

<main class="w-screen h-screen text-black flex flex-col">
  <div
    class="fixed bg-blue-800 text-white flex gap-2 w-full flex items-center justify-between h-12 pl-2">
    <div class="flex gap-5 items-center">
      <div class="flex flex-col">
        <div>SpaceDataStandards.org</div>
        <div class="text-[.6rem]">
          {packageJSON.version}
        </div>
      </div>
      {#if window.location.host !== "spacedatastandards.org"}
        <a
          href="#/standards"
          class="hover:bg-blue-600 p-2 rounded"
          class:bg-blue-500={$currentPath === "/standards"}>Standards</a>
        <a
          href="#/form"
          class="hover:bg-blue-600 p-2 rounded"
          class:bg-blue-500={$currentPath === "/form"}>Test Form</a>
      {/if}
    </div>
    <a
      class="transition-all p-1 flex gap-2 pl-6 pr-2 items-center justify-start"
      href="https://github.com/digitalarsenal/spacedatastandards.org">
      <Icon data={github} />GITHUB
    </a>
  </div>
  <Router {routes} />
</main>

<style lang="postcss">
</style>
