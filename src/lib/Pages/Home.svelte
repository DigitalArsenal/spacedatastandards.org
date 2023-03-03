<script lang="ts">
  import TopBar from "@/lib/TopBar.svelte";
</script>

<div class="flex flex-col h-screen">
  <header class="sticky top-0 z-50 w-full bg-gray-300">
    <TopBar title={`SpaceDataStandards.org`} />
  </header>
  <main class="relative overflow-y-auto h-screen">
    <iframe
      class="w-full h-full"
      src="https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/" />
  </main>
  <footer />
</div>

<style lang="postcss">
  @tailwind base;
  a {
    @apply text-blue-700;
  }
  h2 {
    @apply p-2 text-2xl  border-b-2;
  }
  p {
    @apply m-2;
  }
</style>
