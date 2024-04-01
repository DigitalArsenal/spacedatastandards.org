<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { ByteBuffer } from "flatbuffers";
  import {
    SCHEMA_MANIFEST,
    SCHEMA_MANIFESTT,
    SCHEMA_STANDARDT,
  } from "standards/ts/SCHEMA_MANIFEST/main";
  import jsonSchema from "standards/json/index.json";
  import dataSchema from "root/scripts/datatypes.json";

  interface SelectedFiles {
    [key: string]: string; // Define the type for selectedFiles
  }

  let idlContent = writable("");
  let selectedFiles = writable<SelectedFiles>({}); // Use the interface for the store

  const jsonDSchema: any = jsonSchema;
  let manifestData: SCHEMA_MANIFESTT;

  const getKey = (standard: any) => {
    return standard.key?.toString() || "";
  };
  let searchInput = writable(""); // Store for the search input
  let filteredStandards = writable<SCHEMA_STANDARDT[]>([]);

  // Function to filter standards
  const filterStandards = (searchTerm: string) => {
    searchTerm = searchTerm?.toLowerCase() || "";
    const filtered = manifestData?.RECORDS.filter((standard: any) => {
      const standardData = jsonDSchema.STANDARDS[getKey(standard)];
      return JSON.stringify(standardData)?.toLowerCase().includes(searchTerm);
    });
    filteredStandards.set(filtered || []);
  };

  // Update filteredStandards whenever searchInput changes
  searchInput.subscribe((value) => {
    filterStandards(value);
  });
  onMount(async () => {
    try {
      const response = await fetch("./dist/manifest.fb");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();

      const bytes = new ByteBuffer(new Uint8Array(arrayBuffer));
      manifestData = new SCHEMA_MANIFESTT();
      SCHEMA_MANIFEST.getRootAsSCHEMA_MANIFEST(bytes).unpackTo(manifestData);
    } catch (error) {
      console.error("Error fetching and parsing manifest:", error);
    }
  });

  const getDownloadLinkText = (filename: string): any => {
    const abbreviation: string =
      filename.split(".tar.gz")[0].split(".").pop() || "";
    //@ts-ignore
    const standardRow = dataSchema.find((row: string[]) =>
      row.includes(abbreviation)
    );
    return standardRow ? standardRow[1] : abbreviation.toUpperCase();
  };

  const selectFile = (key: string, file: any) => {
    const dL = file.value;
    selectedFiles.update((files) => {
      files[key] = dL;
      return files;
    });
  };
</script>

<div class="text-black flex gap-2 fixed max-h-[calc(100vh-4rem)] top-16 w-full">
  <div class="list-section overflow-x-hidden pt-12 min-w-[500px] w-1/2 select-none">
    <input
      type="search"
      bind:value={$searchInput}
      class="focus:outline-none text-black search-box absolute top-1 left-0 p-2 border border border-gray-400 ml-1"
      placeholder="Search Standards..." />
    {#if !$filteredStandards?.length && $searchInput.length}
      <h1 class="w-full pl-4 text-left text-gray-800 text-xl font-bold">
        No Results Found
      </h1>
    {/if}
    {#each $filteredStandards?.length || $searchInput.length > 0 ? $filteredStandards : manifestData?.RECORDS || [] as standard}
      <div class="text-black shadow-md rounded-lg p-4 flex flex-col gap-3">
        <h3 class="text-xl font-semibold text-blue-600">
          {jsonDSchema.STANDARDS[getKey(standard)]?.definitions[
            getKey(standard)
          ].description} ({standard.key})
        </h3>
        <p class="text-gray-700">
          <button
            class:active-idl={$idlContent === standard.idl?.toString()}
            class="p-2 bg-blue-600 rounded text-white"
            on:click={() => {
              //@ts-ignore
              idlContent.set(standard.idl?.toString());

            }}>Show IDL</button>
        </p>
        {#if standard.files && standard.files.length > 0}
          <div>
            <select
              on:change={(e) => selectFile(getKey(standard), e.target)}
              class="p-[10px] rounded form-select text-gray-800">
              <option value="" disabled selected>Select Language</option>
              <option value={standard.idl?.toString()}
                >Flatbuffer IDL (text)</option>
              {#each standard.files as file}
                <option value={file}
                  >{getDownloadLinkText(file).toUpperCase()}</option>
              {/each}
            </select>
            <a
              href={$selectedFiles[getKey(standard)]}
              class="download-btn {$selectedFiles[getKey(standard)]
                ? ''
                : 'disabled'}"
              download
              class:disabled={!$selectedFiles[getKey(standard)]}>Download</a>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <div
    class="editor-section overflow-y-scroll w-full text-black text-xs border">
    <pre class="line-numbers">{$idlContent}</pre>
  </div>
</div>

<style global lang="postcss">
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .download-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
  }

  .download-btn:hover {
    background-color: #0056b3;
  }

  .download-btn.disabled {
    background-color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
