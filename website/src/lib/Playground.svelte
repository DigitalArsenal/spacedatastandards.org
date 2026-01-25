<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  // Cesium viewer reference
  let cesiumContainer: HTMLDivElement;
  let viewer: any = null;
  let cesiumLoaded = false;
  let cesiumError = "";

  // UI State
  let inputData = "";
  let schemaType = "OMM";
  let isJsonValid = true;
  let jsonError = "";
  let isLoading = false;
  let visualizationActive = false;

  // Schema options
  const schemaTypes = [
    { value: "OMM", label: "OMM - Orbit Mean-Elements" },
    { value: "OEM", label: "OEM - Orbit Ephemeris" },
    { value: "CDM", label: "CDM - Conjunction Data" },
    { value: "EPM", label: "EPM - Entity Profile" },
  ];

  // Sample data
  const sampleData: Record<string, object> = {
    OMM: {
      OBJECT_NAME: "ISS (ZARYA)",
      OBJECT_ID: "1998-067A",
      CENTER_NAME: "EARTH",
      REF_FRAME: "TEME",
      TIME_SYSTEM: "UTC",
      MEAN_ELEMENT_THEORY: "SGP4",
      EPOCH: "2024-06-22T16:56:20.014080Z",
      MEAN_MOTION: 15.50094987,
      ECCENTRICITY: 0.0003571,
      INCLINATION: 51.6401,
      RA_OF_ASC_NODE: 247.4627,
      ARG_OF_PERICENTER: 130.5360,
      MEAN_ANOMALY: 325.0288,
      EPHEMERIS_TYPE: 0,
      CLASSIFICATION_TYPE: "U",
      NORAD_CAT_ID: 25544,
      ELEMENT_SET_NO: 999,
      REV_AT_EPOCH: 48587,
      BSTAR: 0.00034196,
      MEAN_MOTION_DOT: 0.00019817,
      MEAN_MOTION_DDOT: 0
    },
    OEM: {
      OBJECT_NAME: "STARLINK-1234",
      OBJECT_ID: "2020-001A",
      CENTER_NAME: "EARTH",
      REF_FRAME: "EME2000",
      TIME_SYSTEM: "UTC",
      START_TIME: "2024-06-22T00:00:00.000Z",
      STOP_TIME: "2024-06-22T06:00:00.000Z",
      EPHEMERIS: [
        {
          EPOCH: "2024-06-22T00:00:00.000Z",
          X: 6678.137,
          Y: 0.0,
          Z: 0.0,
          X_DOT: 0.0,
          Y_DOT: 7.725,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T01:00:00.000Z",
          X: 4721.937,
          Y: 4721.937,
          Z: 0.0,
          X_DOT: -5.462,
          Y_DOT: 5.462,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T02:00:00.000Z",
          X: 0.0,
          Y: 6678.137,
          Z: 0.0,
          X_DOT: -7.725,
          Y_DOT: 0.0,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T03:00:00.000Z",
          X: -4721.937,
          Y: 4721.937,
          Z: 0.0,
          X_DOT: -5.462,
          Y_DOT: -5.462,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T04:00:00.000Z",
          X: -6678.137,
          Y: 0.0,
          Z: 0.0,
          X_DOT: 0.0,
          Y_DOT: -7.725,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T05:00:00.000Z",
          X: -4721.937,
          Y: -4721.937,
          Z: 0.0,
          X_DOT: 5.462,
          Y_DOT: -5.462,
          Z_DOT: 0.0
        },
        {
          EPOCH: "2024-06-22T06:00:00.000Z",
          X: 0.0,
          Y: -6678.137,
          Z: 0.0,
          X_DOT: 7.725,
          Y_DOT: 0.0,
          Z_DOT: 0.0
        }
      ]
    },
    CDM: {
      MESSAGE_ID: "CDM-2024-001",
      CREATION_DATE: "2024-06-22T12:00:00.000Z",
      ORIGINATOR: "JSPOC",
      TCA: "2024-06-23T08:30:45.000Z",
      MISS_DISTANCE: 0.125,
      COLLISION_PROBABILITY: 0.000234,
      OBJECT1: {
        OBJECT_DESIGNATOR: "25544",
        OBJECT_NAME: "ISS (ZARYA)",
        INTERNATIONAL_DESIGNATOR: "1998-067A",
        CATALOG_NAME: "SATCAT",
        OBJECT_TYPE: "PAYLOAD",
        OPERATOR_CONTACT_POSITION: "NASA",
        X: 6678.137,
        Y: 0.0,
        Z: 0.0,
        X_DOT: 0.0,
        Y_DOT: 7.725,
        Z_DOT: 0.0
      },
      OBJECT2: {
        OBJECT_DESIGNATOR: "99999",
        OBJECT_NAME: "DEBRIS",
        INTERNATIONAL_DESIGNATOR: "2019-999A",
        CATALOG_NAME: "SATCAT",
        OBJECT_TYPE: "DEBRIS",
        X: 6678.200,
        Y: 0.100,
        Z: 0.050,
        X_DOT: 0.0,
        Y_DOT: 7.720,
        Z_DOT: 0.002
      }
    },
    EPM: {
      ENTITY_ID: "ORG-001",
      ENTITY_NAME: "SpaceX",
      ENTITY_TYPE: "OPERATOR",
      COUNTRY: "USA",
      CONTACT_EMAIL: "operations@spacex.com",
      CONTACT_PHONE: "+1-310-363-6000",
      LOCATION: {
        LATITUDE: 28.5620,
        LONGITUDE: -80.5772,
        ALTITUDE: 0.003
      },
      DESCRIPTION: "Commercial space transportation company",
      CAPABILITIES: ["LAUNCH", "SPACECRAFT_OPERATIONS", "CONSTELLATION_MANAGEMENT"],
      ACTIVE_ASSETS: 5000,
      REGISTRATION_DATE: "2002-05-06T00:00:00.000Z"
    }
  };

  // Get Cesium from window (loaded via CDN)
  function getCesium(): any {
    return (window as any).Cesium;
  }

  // Validate JSON input
  function validateJson(value: string): boolean {
    if (!value.trim()) {
      isJsonValid = true;
      jsonError = "";
      return true;
    }
    try {
      JSON.parse(value);
      isJsonValid = true;
      jsonError = "";
      return true;
    } catch (e: any) {
      isJsonValid = false;
      jsonError = e.message;
      return false;
    }
  }

  // Handle input change
  function handleInputChange() {
    validateJson(inputData);
  }

  // Load sample data
  function loadSample(type: string) {
    schemaType = type;
    inputData = JSON.stringify(sampleData[type], null, 2);
    validateJson(inputData);
  }

  // Convert OMM elements to orbit position (simplified Keplerian)
  function ommToOrbitPositions(omm: any): Array<{x: number, y: number, z: number}> {
    const positions: Array<{x: number, y: number, z: number}> = [];

    // Extract orbital elements
    const a = Math.pow(398600.4418 / Math.pow(omm.MEAN_MOTION * 2 * Math.PI / 86400, 2), 1/3); // Semi-major axis in km
    const e = omm.ECCENTRICITY;
    const i = omm.INCLINATION * Math.PI / 180; // Convert to radians
    const omega = omm.RA_OF_ASC_NODE * Math.PI / 180;
    const w = omm.ARG_OF_PERICENTER * Math.PI / 180;

    // Generate orbit points
    for (let theta = 0; theta <= 360; theta += 2) {
      const nu = theta * Math.PI / 180; // True anomaly
      const r = a * (1 - e * e) / (1 + e * Math.cos(nu));

      // Position in orbital plane
      const xOrbit = r * Math.cos(nu);
      const yOrbit = r * Math.sin(nu);

      // Rotate to ECI frame
      const x = xOrbit * (Math.cos(omega) * Math.cos(w) - Math.sin(omega) * Math.sin(w) * Math.cos(i))
              - yOrbit * (Math.cos(omega) * Math.sin(w) + Math.sin(omega) * Math.cos(w) * Math.cos(i));
      const y = xOrbit * (Math.sin(omega) * Math.cos(w) + Math.cos(omega) * Math.sin(w) * Math.cos(i))
              - yOrbit * (Math.sin(omega) * Math.sin(w) - Math.cos(omega) * Math.cos(w) * Math.cos(i));
      const z = xOrbit * Math.sin(w) * Math.sin(i) + yOrbit * Math.cos(w) * Math.sin(i);

      positions.push({ x: x * 1000, y: y * 1000, z: z * 1000 }); // Convert to meters
    }

    return positions;
  }

  // Visualize data
  async function visualize() {
    const Cesium = getCesium();
    if (!viewer || !Cesium) {
      console.error("Cesium not initialized");
      return;
    }

    if (!validateJson(inputData)) {
      return;
    }

    isLoading = true;

    try {
      const data = JSON.parse(inputData);

      // Clear existing entities
      viewer.entities.removeAll();

      switch (schemaType) {
        case "OMM":
          await visualizeOMM(data);
          break;
        case "OEM":
          await visualizeOEM(data);
          break;
        case "CDM":
          await visualizeCDM(data);
          break;
        case "EPM":
          await visualizeEPM(data);
          break;
      }

      visualizationActive = true;
    } catch (e) {
      console.error("Visualization error:", e);
    } finally {
      isLoading = false;
    }
  }

  // Visualize OMM (orbit)
  async function visualizeOMM(data: any) {
    const Cesium = getCesium();
    const positions = ommToOrbitPositions(data);

    // Create orbit path
    const cartesianPositions = positions.map(p =>
      new Cesium.Cartesian3(p.x, p.y, p.z)
    );

    viewer.entities.add({
      name: data.OBJECT_NAME || "Satellite",
      polyline: {
        positions: cartesianPositions,
        width: 2,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.2,
          color: Cesium.Color.fromCssColorString("#667eea")
        })
      }
    });

    // Add satellite marker at current position (first position)
    const satPos = positions[0];
    viewer.entities.add({
      name: data.OBJECT_NAME || "Satellite",
      position: new Cesium.Cartesian3(satPos.x, satPos.y, satPos.z),
      point: {
        pixelSize: 12,
        color: Cesium.Color.fromCssColorString("#38ef7d"),
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2
      },
      label: {
        text: data.OBJECT_NAME || "Satellite",
        font: "14px JetBrains Mono, monospace",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -15)
      }
    });

    // Zoom to show orbit
    viewer.zoomTo(viewer.entities);
  }

  // Visualize OEM (ephemeris)
  async function visualizeOEM(data: any) {
    const Cesium = getCesium();
    if (!data.EPHEMERIS || data.EPHEMERIS.length === 0) return;

    const positions = data.EPHEMERIS.map((ep: any) =>
      new Cesium.Cartesian3(ep.X * 1000, ep.Y * 1000, ep.Z * 1000)
    );

    // Create orbit path
    viewer.entities.add({
      name: data.OBJECT_NAME || "Spacecraft",
      polyline: {
        positions: positions,
        width: 3,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.3,
          color: Cesium.Color.fromCssColorString("#17ead9")
        })
      }
    });

    // Add markers at each ephemeris point
    data.EPHEMERIS.forEach((ep: any, idx: number) => {
      viewer.entities.add({
        position: new Cesium.Cartesian3(ep.X * 1000, ep.Y * 1000, ep.Z * 1000),
        point: {
          pixelSize: idx === 0 ? 12 : 6,
          color: idx === 0 ? Cesium.Color.fromCssColorString("#38ef7d") : Cesium.Color.fromCssColorString("#17ead9"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 1
        },
        label: idx === 0 ? {
          text: data.OBJECT_NAME || "Spacecraft",
          font: "14px JetBrains Mono, monospace",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -15)
        } : undefined
      });
    });

    viewer.zoomTo(viewer.entities);
  }

  // Visualize CDM (conjunction)
  async function visualizeCDM(data: any) {
    const Cesium = getCesium();

    // Object 1
    if (data.OBJECT1) {
      const pos1 = new Cesium.Cartesian3(
        data.OBJECT1.X * 1000,
        data.OBJECT1.Y * 1000,
        data.OBJECT1.Z * 1000
      );

      viewer.entities.add({
        name: data.OBJECT1.OBJECT_NAME || "Object 1",
        position: pos1,
        point: {
          pixelSize: 14,
          color: Cesium.Color.fromCssColorString("#667eea"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2
        },
        label: {
          text: data.OBJECT1.OBJECT_NAME || "Object 1",
          font: "14px JetBrains Mono, monospace",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -20)
        }
      });
    }

    // Object 2
    if (data.OBJECT2) {
      const pos2 = new Cesium.Cartesian3(
        data.OBJECT2.X * 1000,
        data.OBJECT2.Y * 1000,
        data.OBJECT2.Z * 1000
      );

      viewer.entities.add({
        name: data.OBJECT2.OBJECT_NAME || "Object 2",
        position: pos2,
        point: {
          pixelSize: 14,
          color: Cesium.Color.fromCssColorString("#f5576c"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2
        },
        label: {
          text: data.OBJECT2.OBJECT_NAME || "Object 2",
          font: "14px JetBrains Mono, monospace",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -20)
        }
      });
    }

    // TCA indicator
    if (data.OBJECT1 && data.OBJECT2) {
      const midpoint = new Cesium.Cartesian3(
        ((data.OBJECT1.X + data.OBJECT2.X) / 2) * 1000,
        ((data.OBJECT1.Y + data.OBJECT2.Y) / 2) * 1000,
        ((data.OBJECT1.Z + data.OBJECT2.Z) / 2) * 1000
      );

      // Line between objects
      viewer.entities.add({
        polyline: {
          positions: [
            new Cesium.Cartesian3(data.OBJECT1.X * 1000, data.OBJECT1.Y * 1000, data.OBJECT1.Z * 1000),
            new Cesium.Cartesian3(data.OBJECT2.X * 1000, data.OBJECT2.Y * 1000, data.OBJECT2.Z * 1000)
          ],
          width: 2,
          material: new Cesium.PolylineDashMaterialProperty({
            color: Cesium.Color.fromCssColorString("#f7971e"),
            dashLength: 16
          })
        }
      });

      // TCA label
      viewer.entities.add({
        position: midpoint,
        label: {
          text: `TCA: ${data.TCA || "Unknown"}\nMiss: ${data.MISS_DISTANCE || "?"} km\nPc: ${data.COLLISION_PROBABILITY || "?"}`,
          font: "12px JetBrains Mono, monospace",
          fillColor: Cesium.Color.fromCssColorString("#f7971e"),
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          showBackground: true,
          backgroundColor: Cesium.Color.fromCssColorString("rgba(0, 0, 0, 0.7)"),
          backgroundPadding: new Cesium.Cartesian2(10, 8)
        }
      });
    }

    viewer.zoomTo(viewer.entities);
  }

  // Visualize EPM (entity location)
  async function visualizeEPM(data: any) {
    const Cesium = getCesium();

    if (data.LOCATION) {
      const position = Cesium.Cartesian3.fromDegrees(
        data.LOCATION.LONGITUDE,
        data.LOCATION.LATITUDE,
        (data.LOCATION.ALTITUDE || 0) * 1000
      );

      viewer.entities.add({
        name: data.ENTITY_NAME || "Entity",
        position: position,
        point: {
          pixelSize: 16,
          color: Cesium.Color.fromCssColorString("#38ef7d"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2
        },
        label: {
          text: data.ENTITY_NAME || "Entity",
          font: "16px JetBrains Mono, monospace",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -20)
        }
      });

      // Add info popup
      const infoText = [
        data.ENTITY_NAME,
        `Type: ${data.ENTITY_TYPE || "Unknown"}`,
        `Country: ${data.COUNTRY || "Unknown"}`,
        data.DESCRIPTION || ""
      ].filter(Boolean).join("\n");

      viewer.entities.add({
        position: position,
        label: {
          text: infoText,
          font: "12px JetBrains Mono, monospace",
          fillColor: Cesium.Color.WHITE,
          showBackground: true,
          backgroundColor: Cesium.Color.fromCssColorString("rgba(0, 0, 0, 0.8)"),
          backgroundPadding: new Cesium.Cartesian2(12, 10),
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
          pixelOffset: new Cesium.Cartesian2(20, 0)
        }
      });

      viewer.zoomTo(viewer.entities);
    }
  }

  // Clear visualization
  function clearVisualization() {
    if (viewer) {
      viewer.entities.removeAll();
    }
    visualizationActive = false;
  }

  // Load Cesium script via CDN
  function loadCesiumScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if ((window as any).Cesium) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Cesium'));
      document.head.appendChild(script);
    });
  }

  // Initialize Cesium
  async function initCesium() {
    try {
      // Load Cesium via CDN
      await loadCesiumScript();

      const Cesium = getCesium();
      if (!Cesium) {
        throw new Error('Cesium not available');
      }

      // Set default access token (empty for basic globe without terrain)
      Cesium.Ion.defaultAccessToken = '';

      // Initialize viewer with dark theme
      viewer = new Cesium.Viewer(cesiumContainer, {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        homeButton: true,
        infoBox: true,
        sceneModePicker: true,
        selectionIndicator: true,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        skyBox: false,
        skyAtmosphere: new Cesium.SkyAtmosphere(),
        contextOptions: {
          webgl: {
            alpha: true
          }
        }
      });

      // Remove default imagery
      viewer.imageryLayers.removeAll();

      // Add dark base layer
      viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
          subdomains: ['a', 'b', 'c', 'd'],
          credit: "CartoDB, OpenStreetMap contributors"
        })
      );

      // Set dark background
      viewer.scene.backgroundColor = Cesium.Color.fromCssColorString("#030308");
      viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#1a1a2e");

      // Configure atmosphere for dark theme
      viewer.scene.globe.enableLighting = false;
      viewer.scene.globe.showGroundAtmosphere = true;

      // Set initial camera view
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-95.0, 30.0, 20000000.0),
        orientation: {
          heading: 0.0,
          pitch: -Cesium.Math.PI_OVER_TWO,
          roll: 0.0
        }
      });

      cesiumLoaded = true;

    } catch (e: any) {
      console.error("Failed to initialize Cesium:", e);
      cesiumError = e.message || "Failed to load Cesium";
    }
  }

  onMount(() => {
    initCesium();
  });

  onDestroy(() => {
    if (viewer) {
      viewer.destroy();
    }
  });
</script>

<svelte:head>
  <link href="https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
</svelte:head>

<section class="playground-page">
  <div class="playground-layout">
    <!-- Control Panel -->
    <div class="control-panel">
      <div class="panel-header">
        <h1 class="panel-title">SDS Playground</h1>
        <p class="panel-subtitle">Visualize Space Data Standards on a 3D globe</p>
      </div>

      <!-- Schema Type Selector -->
      <div class="control-group">
        <label class="control-label">Schema Type</label>
        <select class="control-select" bind:value={schemaType}>
          {#each schemaTypes as type}
            <option value={type.value}>{type.label}</option>
          {/each}
        </select>
      </div>

      <!-- Sample Data Buttons -->
      <div class="control-group">
        <label class="control-label">Load Sample Data</label>
        <div class="sample-buttons">
          <button class="sample-btn" on:click={() => loadSample("OMM")}>
            ISS Orbit (OMM)
          </button>
          <button class="sample-btn" on:click={() => loadSample("OEM")}>
            Ephemeris (OEM)
          </button>
          <button class="sample-btn" on:click={() => loadSample("CDM")}>
            Conjunction (CDM)
          </button>
          <button class="sample-btn" on:click={() => loadSample("EPM")}>
            Entity (EPM)
          </button>
        </div>
      </div>

      <!-- Data Input -->
      <div class="control-group data-input-group">
        <label class="control-label">
          Data Input (JSON)
          {#if inputData}
            <span class="validation-badge" class:valid={isJsonValid} class:invalid={!isJsonValid}>
              {isJsonValid ? "Valid JSON" : "Invalid JSON"}
            </span>
          {/if}
        </label>
        <textarea
          class="data-input"
          class:invalid={!isJsonValid}
          bind:value={inputData}
          on:input={handleInputChange}
          placeholder="Paste your SDS JSON data here..."
          spellcheck="false"
        ></textarea>
        {#if !isJsonValid && jsonError}
          <div class="error-message">{jsonError}</div>
        {/if}
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button
          class="btn btn-accent"
          on:click={visualize}
          disabled={!isJsonValid || !inputData.trim() || isLoading || !cesiumLoaded}
        >
          {#if isLoading}
            <span class="spinner"></span>
            Rendering...
          {:else}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Visualize
          {/if}
        </button>
        {#if visualizationActive}
          <button class="btn btn-secondary" on:click={clearVisualization}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            </svg>
            Clear
          </button>
        {/if}
      </div>

      <!-- Help Section -->
      <div class="help-section">
        <h3 class="help-title">Visualization Guide</h3>
        <div class="help-content">
          <div class="help-item">
            <span class="help-badge omm">OMM</span>
            <span>Shows satellite orbit path computed from mean elements</span>
          </div>
          <div class="help-item">
            <span class="help-badge oem">OEM</span>
            <span>Plots state vectors as orbit trajectory</span>
          </div>
          <div class="help-item">
            <span class="help-badge cdm">CDM</span>
            <span>Displays two objects at TCA with miss distance</span>
          </div>
          <div class="help-item">
            <span class="help-badge epm">EPM</span>
            <span>Shows entity location on globe with info popup</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Globe Container -->
    <div class="globe-container">
      <div class="cesium-wrapper" bind:this={cesiumContainer}></div>
      {#if !cesiumLoaded}
        <div class="loading-overlay">
          <div class="loading-content">
            {#if cesiumError}
              <div class="error-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <p class="error-text">Failed to load Cesium Globe</p>
              <p class="error-detail">{cesiumError}</p>
            {:else}
              <div class="loading-spinner"></div>
              <p>Loading Cesium Globe...</p>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .playground-page {
    padding-top: 52px;
    min-height: 100vh;
    background: #030308;
  }

  .playground-layout {
    display: flex;
    height: calc(100vh - 52px);
  }

  /* Control Panel */
  .control-panel {
    width: 30%;
    min-width: 320px;
    max-width: 450px;
    background: var(--nav-bg);
    border-right: 1px solid var(--ui-border);
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .panel-header {
    margin-bottom: 8px;
  }

  .panel-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #ffffff 0%, #b8c6ff 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .panel-subtitle {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .control-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .control-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .control-select {
    padding: 12px 16px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    font-size: 14px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    cursor: pointer;
    transition: all 0.2s;
  }

  .control-select:focus {
    outline: none;
    border-color: var(--accent);
  }

  .sample-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .sample-btn {
    padding: 10px 12px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-mono);
  }

  .sample-btn:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    color: var(--text-primary);
  }

  .data-input-group {
    flex: 1;
    min-height: 200px;
  }

  .data-input {
    flex: 1;
    min-height: 180px;
    padding: 16px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1.6;
    color: #c9d1d9;
    resize: vertical;
    transition: all 0.2s;
  }

  .data-input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .data-input.invalid {
    border-color: #f5576c;
  }

  .data-input::placeholder {
    color: #484f58;
  }

  .validation-badge {
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 8px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: normal;
  }

  .validation-badge.valid {
    background: rgba(56, 239, 125, 0.15);
    color: #38ef7d;
  }

  .validation-badge.invalid {
    background: rgba(245, 87, 108, 0.15);
    color: #f5576c;
  }

  .error-message {
    font-size: 12px;
    color: #f5576c;
    font-family: var(--font-mono);
    padding: 8px 12px;
    background: rgba(245, 87, 108, 0.1);
    border-radius: 8px;
  }

  .action-buttons {
    display: flex;
    gap: 12px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    font-family: var(--font-sans);
  }

  .btn-accent {
    flex: 1;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    color: white;
  }

  .btn-accent:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  }

  .btn-accent:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-secondary {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    color: var(--text-primary);
  }

  .btn-secondary:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Help Section */
  .help-section {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid var(--ui-border);
  }

  .help-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .help-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .help-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .help-badge {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    flex-shrink: 0;
  }

  .help-badge.omm {
    background: rgba(102, 126, 234, 0.2);
    color: #667eea;
  }

  .help-badge.oem {
    background: rgba(23, 234, 217, 0.2);
    color: #17ead9;
  }

  .help-badge.cdm {
    background: rgba(245, 87, 108, 0.2);
    color: #f5576c;
  }

  .help-badge.epm {
    background: rgba(56, 239, 125, 0.2);
    color: #38ef7d;
  }

  /* Globe Container */
  .globe-container {
    flex: 1;
    position: relative;
    background: #030308;
  }

  .cesium-wrapper {
    width: 100%;
    height: 100%;
  }

  .cesium-wrapper :global(.cesium-viewer) {
    font-family: var(--font-sans);
  }

  .cesium-wrapper :global(.cesium-viewer-bottom) {
    display: none;
  }

  .cesium-wrapper :global(.cesium-widget-credits) {
    display: none !important;
  }

  .cesium-wrapper :global(.cesium-infoBox) {
    background: rgba(22, 22, 23, 0.95) !important;
    border: 1px solid var(--ui-border) !important;
    border-radius: 12px !important;
    overflow: hidden;
  }

  .loading-overlay {
    position: absolute;
    inset: 0;
    background: rgba(3, 3, 8, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-content {
    text-align: center;
    color: var(--text-secondary);
  }

  .loading-spinner {
    width: 48px;
    height: 48px;
    border: 3px solid var(--ui-border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 16px;
  }

  .error-icon {
    color: #f5576c;
    margin-bottom: 16px;
  }

  .error-text {
    color: #f5576c;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .error-detail {
    font-size: 14px;
    color: var(--text-muted);
  }

  /* Responsive */
  @media (max-width: 968px) {
    .playground-layout {
      flex-direction: column;
    }

    .control-panel {
      width: 100%;
      max-width: none;
      height: auto;
      max-height: 50vh;
      border-right: none;
      border-bottom: 1px solid var(--ui-border);
    }

    .globe-container {
      min-height: 50vh;
    }

    .data-input-group {
      min-height: 120px;
    }

    .data-input {
      min-height: 100px;
    }
  }
</style>
