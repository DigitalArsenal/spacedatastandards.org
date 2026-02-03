<script lang="ts">
  import type { StandardProperty } from "./StandardProperty";
  import InputText from "./InputText.svelte";
  import InputNumber from "./InputNumber.svelte";
  import InputArray from "./InputArray.svelte";
  import InputBoolean from "./InputBoolean.svelte";

  export let properties: Record<string, StandardProperty>;
  export let formData: Record<string, any>;
</script>

{#each Object.entries(properties) as [key, prop]}
  {#if prop.type === "string"}
    <InputText bind:value={formData[key]} {prop} />
  {:else if prop.type === "number"}
    <InputNumber bind:value={formData[key]} {prop} />
  {:else if prop.type === "array"}
    <InputArray bind:value={formData[key]} {prop} />
  {:else if prop.type === "boolean"}
    <InputBoolean bind:value={formData[key]} {prop} />
  {/if}
{/each}
