<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import SchemaForm, {
    type ValidationError,
  } from "root/packages/svelte-jsonschema-form";
  import { onMount } from "svelte";
  import schema from "standards/json/index.json";
  import { nodeREDURL, messages } from "@/stores/links.store";
  import Modal from "./FormModal.svelte";
  import Ajv from "ajv";

  let showModal = false;
  let selectedMessageDetails: any = null;
  const formData: Writable<any> = writable({});
  const selectedStandard = writable("");
  const formSchema = writable({});
  const ajv = new Ajv();
  let jsonFile: File | null = null;
  let validationError: string | null = null;
  let validationSuccess: string | null = null;

  function openModal(message: any) {
    selectedMessageDetails = message;
    showModal = true;
  }

  function getStandardType(payload: any) {
    if (!payload) return;
    const keys = Object.keys(payload);
    const collectionKey = keys.find((key) => key.endsWith("COLLECTION"));
    return collectionKey ? collectionKey.split("COLLECTION")[0] : "N/A";
  }

  function handleSubmit(data: any) {
    const submitData = $formData.hasOwnProperty(
      `${$selectedStandard}COLLECTION`
    )
      ? $formData
      : {
          [`${$selectedStandard}COLLECTION`]: { RECORDS: [$formData] },
        };

    fetch(`https://${nodeREDURL}/messagebus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", result))
      .catch((error) => console.error("Error:", error));
  }

  onMount(() => {
    const lastQueryTime = localStorage.getItem("lastQueryTime");
    const startTime = lastQueryTime
      ? new Date(lastQueryTime).toISOString()
      : new Date(0).toISOString();

    fetch(`https://${nodeREDURL}/messagearchive?start=${startTime}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        const storedMessages = JSON.parse(
          localStorage.getItem("messages") || "[]"
        );
        const combinedMessages = [...storedMessages, ...result].slice(-10000);
        localStorage.setItem("messages", JSON.stringify(combinedMessages));
        messages.set(combinedMessages);
        localStorage.setItem("lastQueryTime", new Date().toISOString());
      })
      .catch((error) => console.error("Error:", error));
  });

  interface StandardProperty {
    type: string;
    enum?: string[];
    description?: string;
    properties?: Record<string, StandardProperty>;
    definitions?: Record<string, StandardProperty>;
    items?: {
      type: string;
    };
  }

  interface Standards {
    [key: string]: StandardProperty;
  }

  const { STANDARDS } = schema as { STANDARDS: Standards | any };
  $: if ($selectedStandard && STANDARDS[$selectedStandard]) {
    let _formSchema = STANDARDS[$selectedStandard];
    delete _formSchema.$schema;
    formSchema.set(_formSchema);
  } else {
    formSchema.set({});
  }

  let messagesContainer: HTMLDivElement;

  messages.subscribe((_m) => {
    if (messagesContainer && _m.length > 0) {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 10);
    }
  });

  function handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      jsonFile = file;
      validationError = null;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          validateJson(json);
        } catch (err) {
          validationError = "Invalid JSON file.";
        }
      };
      reader.readAsText(file);
    }
  }

  function validateJson(json: any) {
    let formVal: any = { ...$formSchema };
    for (let key in formVal.definitions) {
      formVal.definitions[key].additionalProperties = true;
    }
    const validate = ajv.compile(formVal);
    if (!validate(json)) {
      validationError = "JSON does not match the selected standard.";
      return false;
    } else {
      validationSuccess = "Successfully validated";
    }
    formData.set(json);
    console.log(formData);
    return true;
  }

  function handleUploadSubmit() {
    if (validateJson($formData)) {
      handleSubmit($formData);
    }
  }

  $: console.log($messages);
</script>

{#if showModal}
  <Modal message={selectedMessageDetails} onClose={() => (showModal = false)} />
{/if}

<div
  class="m-4 text-gray-500 {$selectedStandard
    ? 'text-xs fixed bottom-0 right-0 w-1/3'
    : 'text-lg fixed top-1/2 left-0 transform -translate-y-1/2 w-1/2 h-4/5'}">
  INSTRUCTIONS:
  <hr class="m-2" />
  Select a standard from the dropdown in the upper right, fill out the form, and
  submit it to the Node-RED instance. Routing will occur according to the rules set
  up<a
    href="https://apollo.sdataplab.com/node-red/admindashboard/"
    class="ml-1 text-blue-500">here</a
  >.
</div>
{#if $selectedStandard}
  <div class="p-2 text-white rounded w-24 fixed top-10 left-[50%] m-4">
    <input type="file" accept=".json" on:change={handleFileChange} />
    <button
      on:click={handleUploadSubmit}
      disabled={!jsonFile || !!validationError}>Upload and Submit</button>
    {#if validationError}
      <p class="error text-red-600 text-xs">{validationError}</p>
    {:else if validationSuccess}
      <p class="error text-blue-600 text-xs">{validationSuccess}</p>
    {/if}
  </div>
{/if}
<button
  type="submit"
  disabled={!$selectedStandard}
  on:click={handleSubmit}
  class:bg-blue-500={$selectedStandard}
  class:bg-gray-500={!$selectedStandard}
  class="p-2 text-white rounded w-24 fixed top-24 right-0 m-4">Submit</button>
<div
  class="fixed top-1/2 right-0 transform -translate-y-1/2 m-4 bg-white border border-gray-300 rounded p-4 w-1/3 flex flex-col justify-between h-1/3">
  <div>
    <h2 class="text-xs font-bold mb-2">Messages: {$messages.length}</h2>
  </div>
  <div
    bind:this={messagesContainer}
    class="text-xs overflow-y-auto flex flex-col gap-2">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#each $messages as message}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => openModal(message)}
        class="cursor-pointer border rounded p-2 hover:bg-blue-400 hover:text-white">
        <p class="text-sm">{getStandardType(message)}</p>
        <p class="text-xs">
          Org: {message.headers["x-client-dn"].split(",")[3].split("=")[1]}
        </p>
        <p class="text-xs">
          CN: {message.headers["x-client-dn"]?.split("CN=")[1]?.split("=")[0]}
        </p>
      </div>
    {/each}
  </div>
  <button
    type="submit"
    on:click={() => {
      localStorage.clear();
      $messages = [];
    }}
    class:bg-blue-500={$selectedStandard}
    class:bg-gray-500={!$selectedStandard}
    class="p-2 text-white rounded w-32 text-xs mt-2 bg-red-600 hover:bg-red-500"
    >Clear Local Cache</button>
</div>
<select
  on:change={() => {
    $formData = {};
  }}
  bind:value={$selectedStandard}
  class="p-2 border border-gray-300 rounded m-4 fixed top-10 right-0">
  <option value="">Select a standard</option>
  {#each Object.keys(schema.STANDARDS).filter((k) => k !== "SCHEMA_MANIFEST") as key}
    <option value={key}>{key}</option>
  {/each}
</select>

{#if $selectedStandard}
  <div
    class="fixed top-16 left-0 w-1/2 max-h-[calc(100vh-4rem)] overflow-y-auto p-6 flex flex-col gap-3">
    <SchemaForm bind:schema={$formSchema} bind:data={$formData} />
  </div>
{/if}
