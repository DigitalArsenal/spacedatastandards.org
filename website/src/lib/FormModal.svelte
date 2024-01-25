<script lang="ts">
  import { onMount } from "svelte";
  import { type IEventMessage } from "@/class/IEventMessage";

  export let message: IEventMessage;
  export let onClose: () => void;
  let localMessage = {};
  let jsonString = "";
  let idx: string;
  onMount(() => {
    const { id, headers, ...rest } = message;
    idx = id;
    localMessage = rest;
    jsonString = JSON.stringify(localMessage, null, 4);
    createDownloadLink();
  });

  const createDownloadLink = () => {
    const data = new Blob([jsonString], { type: "application/json" });
    const jsonURL = window.URL.createObjectURL(data);
    const tt = document.getElementById("download-link") as any;
    if (tt) {
      tt.href = jsonURL;
    }
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-backdrop" on:click={onClose}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="modal-content flex flex-col justify-between"
    on:click|stopPropagation>
    <div
      class="modal-header flex items-center justify-between w-full font-bold">
      <div>Message Details</div>
      <button class="close-button" on:click={onClose}>x</button>
    </div>
    <div class="modal-body h-full">
      <textarea class="w-full h-full border p-1"
        >{jsonString.slice(0, 1000) +
          (jsonString.length > 1000 ? "..." : "")}</textarea>
    </div>
    <div class="modal-footer flex flex-col gap-2 justify-between items-start">
      <a
        id="download-link"
        download="{idx}.json"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Download JSON</a>
      <div class="text-sm flex gap-1 items-center justify-center">
        Sent by: <p class="text-xs">{message.headers["x-client-dn"]}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 50%;
    max-height: 100%;
    height: 80%;
    overflow: auto;
    position: relative;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .modal-body {
    margin-top: 20px;
  }

  .modal-footer {
    margin-top: 20px;
    font-style: italic;
  }
</style>
