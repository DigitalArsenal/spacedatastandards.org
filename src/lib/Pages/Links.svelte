<script lang="ts">
    import { location } from "svelte-spa-router";
    import { Icon } from "svelte-awesome";
    import { chevronRight } from "svelte-awesome/icons";
</script>

<div class="flex flex-col font-light w-full text-sm md:text-xl">
    <a
        class:underline={$location === "/"}
        class="flex gap-2 items-center justify-start"
        href="#/"
    >
        <Icon data={chevronRight} scale={.75}/>HOME
    </a>
    <a
        class:underline={$location === "/Standards"}
        class="flex gap-2 items-center justify-start"
        href="#/Standards"
    >
        <Icon data={chevronRight} scale={.75}/>STANDARDS
    </a>
</div>

<style lang="postcss">
    a {
        @apply p-2  w-full underline-offset-4;
    }
    a:hover {
        @apply bg-gray-500;
    }
</style>
