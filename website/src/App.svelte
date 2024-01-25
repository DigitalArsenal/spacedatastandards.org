<script lang="ts">
  import Router, { location, push } from "svelte-spa-router";
  import { derived } from "svelte/store";
  import "./app.css";
  import Standards from "./lib/Standards.svelte";
  import Form from "./lib/Form.svelte";
  import packageJSON from "root/package.json";

  const routes = {
    "/": Standards,
    "/standards": Standards,
    "/form": Form,
  };
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
    class="fixed bg-blue-700 text-white flex gap-2 w-full flex items-center justify-start h-12 pl-2">
    <a
      href="#/standards"
      class="hover:bg-blue-600 p-2 rounded"
      class:bg-blue-500={$currentPath === "/standards"}>Standards</a>
    <a
      href="#/form"
      class="hover:bg-blue-600 p-2 rounded"
      class:bg-blue-500={$currentPath === "/form"}>Test Form</a>
  </div>
  <div class="fixed top-12 left-0 text-black z-1 text-xs text-gray-600 pl-1">standards version: {packageJSON.version}</div>

  <Router {routes} />
</main>

<style lang="postcss">
</style>
