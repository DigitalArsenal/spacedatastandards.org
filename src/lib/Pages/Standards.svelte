<script lang="ts">
    import { standards, getStandards, last } from "@/stores/data";
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import TopBar from "../TopBar.svelte";
    import { Icon } from "svelte-awesome";
    import { file, search } from "svelte-awesome/icons";

    let searchTerm: string = "";

    onMount(async () => {
        await getStandards();
    });

    const nameFormat = (name) => {
        let n = name.split("-");
        return `${n[0]}-${n[1]}: ${n.slice(2).join(" ")}`;
    };
</script>

<div class="flex flex-col h-screen">
    <header class="sticky top-0 z-50 w-full bg-gray-300">
        <TopBar title={`Directory`} />
        <div class="bg-gray-200 text-xs flex justify-end">
            <input
                type="search"
                class="rounded p-2 border m-2 w-1/3"
                placeholder="Search"
                bind:value={searchTerm}
            />
        </div>
    </header>
    <main class="relative h-full">
        <div
            class="p-5 overflow-y-auto relative flex flex-wrap gap-5 items-start h-full justify-center"
        >
            {#each $standards.filter((s) => !searchTerm || ~s.name
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase())) as standard, s}
                <!-- {#each new Array(40) as r}-->
                <div
                    class="w-40 h-40 flex flex-col gap-2 items-center text-base justify-center cursor-pointer p-3 2 bg-slate-600 hover:bg-slate-500 text-gray-300"
                    on:click={(e) => {
                        push("/Standard/" + standard.name);
                    }}
                >
                    <Icon data={file} />
                    {nameFormat(standard.name)}
                </div>
                <!--    {/each} -->
            {/each}
        </div>
    </main>
    <footer />
</div>
