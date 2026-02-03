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
    // OEM - Orbit Ephemeris Message (Compact Row-Major Format)
    // ISS orbit: 120 points propagated using Keplerian mechanics
    // ~424km altitude, 51.6° inclination, ~92.68 min period
    OEM: {
      OBJECT_NAME: "ISS (ZARYA)",
      OBJECT_ID: "1998-067A",
      CENTER_NAME: "EARTH",
      REF_FRAME: "EME2000",
      TIME_SYSTEM: "UTC",
      START_TIME: "2024-06-22T00:00:00.000Z",
      STOP_TIME: "2024-06-22T01:32:40.000Z",
      STEP_SIZE: 46.34,
      STATE_VECTOR_SIZE: 6,
      EPHEMERIS_DATA: [
        4650.866, 2849.401, 4047.689, -0.622, 6.563, -3.905,
        4615.614, 3149.979, 3860.985, -0.896, 6.386, -4.138,
        4567.716, 3441.928, 3663.702, -1.167, 6.191, -4.360,
        4507.302, 3724.447, 3456.380, -1.435, 5.979, -4.571,
        4434.537, 3996.762, 3239.586, -1.699, 5.751, -4.768,
        4349.622, 4258.129, 3013.914, -1.959, 5.508, -4.953,
        4252.788, 4507.831, 2779.981, -2.213, 5.249, -5.124,
        4144.299, 4745.184, 2538.429, -2.461, 4.976, -5.281,
        4024.454, 4969.539, 2289.918, -2.702, 4.689, -5.424,
        3893.580, 5180.280, 2035.129, -2.936, 4.389, -5.552,
        3752.035, 5376.830, 1774.759, -3.161, 4.077, -5.664,
        3600.206, 5558.651, 1509.522, -3.379, 3.754, -5.761,
        3438.509, 5725.244, 1240.142, -3.586, 3.421, -5.842,
        3267.387, 5876.152, 967.359, -3.784, 3.079, -5.907,
        3087.307, 6010.963, 691.918, -3.972, 2.728, -5.956,
        2898.763, 6129.305, 414.574, -4.149, 2.369, -5.989,
        2702.270, 6230.854, 136.087, -4.314, 2.004, -6.005,
        2498.367, 6315.332, -142.780, -4.468, 1.634, -6.005,
        2287.611, 6382.506, -421.265, -4.609, 1.259, -5.988,
        2070.580, 6432.191, -698.604, -4.738, 0.881, -5.955,
        1847.868, 6464.251, -974.036, -4.853, 0.500, -5.906,
        1620.085, 6478.596, -1246.809, -4.956, 0.118, -5.840,
        1387.854, 6475.187, -1516.173, -5.045, -0.265, -5.759,
        1151.812, 6454.033, -1781.391, -5.119, -0.646, -5.661,
        912.605, 6415.189, -2041.737, -5.180, -1.026, -5.549,
        670.888, 6358.763, -2296.496, -5.227, -1.403, -5.421,
        427.324, 6284.906, -2544.970, -5.260, -1.777, -5.278,
        182.579, 6193.822, -2786.478, -5.278, -2.145, -5.120,
        -62.675, 6085.757, -3020.358, -5.281, -2.507, -4.949,
        -307.766, 5961.009, -3245.968, -5.270, -2.863, -4.764,
        -552.023, 5819.917, -3462.690, -5.245, -3.211, -4.566,
        -794.775, 5662.867, -3669.928, -5.205, -3.550, -4.355,
        -1035.359, 5490.290, -3867.115, -5.151, -3.879, -4.133,
        -1273.113, 5302.657, -4053.709, -5.083, -4.198, -3.899,
        -1507.386, 5100.481, -4229.198, -5.001, -4.505, -3.655,
        -1737.536, 4884.317, -4393.101, -4.905, -4.799, -3.400,
        -1962.931, 4654.756, -4544.966, -4.796, -5.081, -3.136,
        -2182.953, 4412.427, -4684.379, -4.673, -5.349, -2.864,
        -2396.999, 4157.993, -4810.955, -4.538, -5.601, -2.584,
        -2604.481, 3892.152, -4924.346, -4.391, -5.839, -2.296,
        -2804.830, 3615.632, -5024.241, -4.231, -6.061, -2.003,
        -2997.496, 3329.191, -5110.366, -4.060, -6.266, -1.704,
        -3181.950, 3033.615, -5182.484, -3.877, -6.453, -1.400,
        -3357.687, 2729.712, -5240.396, -3.684, -6.623, -1.092,
        -3524.223, 2418.317, -5283.942, -3.481, -6.775, -0.782,
        -3681.102, 2100.283, -5313.003, -3.269, -6.909, -0.469,
        -3827.893, 1776.482, -5327.499, -3.047, -7.023, -0.155,
        -3964.192, 1447.803, -5327.388, -2.817, -7.118, 0.160,
        -4089.626, 1115.147, -5312.671, -2.579, -7.194, 0.474,
        -4203.850, 779.426, -5283.388, -2.335, -7.250, 0.786,
        -4306.550, 441.561, -5239.618, -2.084, -7.286, 1.097,
        -4397.444, 102.478, -5181.482, -1.827, -7.302, 1.404,
        -4476.283, -236.890, -5109.138, -1.565, -7.298, 1.708,
        -4542.850, -575.615, -5022.784, -1.299, -7.274, 2.007,
        -4596.962, -912.765, -4922.657, -1.029, -7.230, 2.300,
        -4638.470, -1247.417, -4809.032, -0.757, -7.166, 2.588,
        -4667.260, -1578.652, -4682.220, -0.482, -7.083, 2.868,
        -4683.254, -1905.561, -4542.569, -0.206, -6.980, 3.140,
        -4686.407, -2227.247, -4390.462, 0.070, -6.858, 3.403,
        -4676.709, -2542.828, -4226.315, 0.347, -6.717, 3.658,
        -4654.189, -2851.436, -4050.581, 0.622, -6.558, 3.902,
        -4618.908, -3152.227, -3863.740, 0.896, -6.381, 4.135,
        -4570.961, -3444.373, -3666.305, 1.167, -6.186, 4.358,
        -4510.482, -3727.075, -3458.819, 1.435, -5.975, 4.568,
        -4437.636, -3999.555, -3241.850, 1.699, -5.747, 4.766,
        -4352.624, -4261.067, -3015.994, 1.958, -5.503, 4.950,
        -4255.677, -4510.894, -2781.870, 2.212, -5.244, 5.121,
        -4147.064, -4748.349, -2540.122, 2.460, -4.971, 5.278,
        -4027.081, -4972.782, -2291.413, 2.701, -4.684, 5.421,
        -3896.059, -5183.577, -2036.425, 2.935, -4.384, 5.549,
        -3754.356, -5380.157, -1775.857, 3.161, -4.073, 5.661,
        -3602.363, -5561.981, -1510.426, 3.378, -3.750, 5.758,
        -3440.497, -5728.553, -1240.859, 3.586, -3.417, 5.839,
        -3269.201, -5879.415, -967.896, 3.784, -3.074, 5.905,
        -3088.946, -6014.154, -692.285, 3.972, -2.723, 5.954,
        -2900.227, -6132.401, -414.784, 4.148, -2.365, 5.986,
        -2703.562, -6233.833, -136.152, 4.314, -2.000, 6.002,
        -2499.490, -6318.171, 142.845, 4.467, -1.629, 6.002,
        -2288.572, -6385.185, 421.442, 4.609, -1.254, 5.986,
        -2071.386, -6434.693, 698.875, 4.737, -0.876, 5.953,
        -1848.528, -6466.559, 974.384, 4.853, -0.495, 5.903,
        -1620.610, -6480.697, 1247.213, 4.955, -0.113, 5.838,
        -1388.257, -6477.069, 1516.613, 5.044, 0.269, 5.756,
        -1152.107, -6455.685, 1781.847, 5.119, 0.651, 5.659,
        -912.806, -6416.605, 2042.188, 5.180, 1.031, 5.546,
        -671.012, -6359.938, 2296.921, 5.227, 1.408, 5.418,
        -427.387, -6285.840, 2545.348, 5.259, 1.781, 5.275,
        -182.600, -6194.514, 2786.790, 5.277, 2.150, 5.117,
        62.679, -6086.212, 3020.584, 5.281, 2.512, 4.946,
        307.777, -5961.232, 3246.090, 5.270, 2.868, 4.761,
        552.023, -5819.917, 3462.690, 5.244, 3.216, 4.563,
        794.746, -5662.656, 3669.791, 5.205, 3.554, 4.352,
        1035.281, -5489.880, 3866.826, 5.151, 3.884, 4.130,
        1272.971, -5302.064, 4053.256, 5.082, 4.202, 3.896,
        1507.162, -5099.724, 4228.570, 5.000, 4.509, 3.652,
        1737.215, -4883.414, 4392.289, 4.905, 4.804, 3.397,
        1962.498, -4653.729, 4543.964, 4.795, 5.086, 3.133,
        2182.395, -4411.297, 4683.180, 4.673, 5.353, 2.861,
        2396.303, -4156.785, 4809.557, 4.538, 5.606, 2.581,
        2603.637, -3890.890, 4922.750, 4.390, 5.844, 2.293,
        2803.829, -3614.341, 5022.448, 4.231, 6.065, 2.000,
        2996.330, -3327.897, 5108.379, 4.059, 6.270, 1.701,
        3180.615, -3032.341, 5180.309, 3.877, 6.458, 1.397,
        3356.178, -2728.485, 5238.041, 3.684, 6.628, 1.089,
        3522.539, -2417.162, 5281.418, 3.481, 6.780, 0.779,
        3679.243, -2099.223, 5310.321, 3.268, 6.913, 0.466,
        3825.861, -1775.540, 5324.672, 3.047, 7.028, 0.152,
        3961.992, -1447.000, 5324.432, 2.817, 7.123, -0.162,
        4087.263, -1114.503, 5309.602, 2.579, 7.199, -0.476,
        4201.332, -778.959, 5280.224, 2.334, 7.255, -0.789,
        4303.887, -441.287, 5236.379, 2.083, 7.291, -1.100,
        4394.647, -102.413, 5178.186, 1.826, 7.307, -1.407,
        4473.364, 236.736, 5105.805, 1.564, 7.303, -1.711,
        4539.822, 575.231, 5019.436, 1.298, 7.279, -2.010,
        4593.840, 912.146, 4919.315, 1.029, 7.235, -2.303,
        4635.271, 1246.557, 4805.716, 0.756, 7.171, -2.590,
        4664.001, 1577.550, 4678.950, 0.482, 7.088, -2.870,
        4679.952, 1904.217, 4539.366, 0.206, 6.985, -3.143,
        4683.079, 2225.666, 4387.344, -0.071, 6.863, -3.406,
        4673.375, 2541.015, 4223.302, -0.347, 6.722, -3.661
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

  // Reset camera to home view (instant)
  function resetCamera() {
    const Cesium = getCesium();
    if (!viewer || !Cesium) return;

    viewer.camera.flyHome(0);
  }

  // Load sample data
  function loadSample(type: string) {
    schemaType = type;
    inputData = JSON.stringify(sampleData[type], null, 2);
    validateJson(inputData);
    resetCamera(); // Reset camera before visualizing
    visualize();
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
        width: 3,
        material: Cesium.Color.WHITE
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

    // Don't zoom - orbit is visible from home view
  }

  // Visualize OEM (ephemeris) - supports both compact and verbose formats
  async function visualizeOEM(data: any) {
    const Cesium = getCesium();

    // Extract state vectors based on format
    let stateVectors: Array<{x: number, y: number, z: number}> = [];

    // Check which format is being used:
    // COMPACT FORMAT: STEP_SIZE > 0 with EPHEMERIS_DATA array
    // VERBOSE FORMAT: EPHEMERIS_DATA_LINES or EPHEMERIS with per-entry epochs

    console.log("OEM data:", {
      STEP_SIZE: data.STEP_SIZE,
      hasEphemerisData: !!data.EPHEMERIS_DATA,
      ephemerisDataLength: data.EPHEMERIS_DATA?.length,
      STATE_VECTOR_SIZE: data.STATE_VECTOR_SIZE
    });

    if (data.STEP_SIZE && data.STEP_SIZE > 0 && data.EPHEMERIS_DATA) {
      // ─────────────────────────────────────────────────────────────────────
      // COMPACT FORMAT (Row-Major Array)
      // ─────────────────────────────────────────────────────────────────────
      // Array layout: [x0,y0,z0,xdot0,ydot0,zdot0, x1,y1,z1,xdot1,ydot1,zdot1, ...]
      // STATE_VECTOR_SIZE determines components per state (6 or 9)
      const stateSize = data.STATE_VECTOR_SIZE || 6;
      const numStates = Math.floor(data.EPHEMERIS_DATA.length / stateSize);

      for (let i = 0; i < numStates; i++) {
        const offset = i * stateSize;
        stateVectors.push({
          x: data.EPHEMERIS_DATA[offset] * 1000,     // X in km -> m
          y: data.EPHEMERIS_DATA[offset + 1] * 1000, // Y in km -> m
          z: data.EPHEMERIS_DATA[offset + 2] * 1000  // Z in km -> m
          // Velocity (indices 3-5) and acceleration (indices 6-8) not used for viz
        });
      }
    } else if (data.EPHEMERIS_DATA_LINES && data.EPHEMERIS_DATA_LINES.length > 0) {
      // ─────────────────────────────────────────────────────────────────────
      // VERBOSE FORMAT (Structured Lines with explicit epochs)
      // ─────────────────────────────────────────────────────────────────────
      stateVectors = data.EPHEMERIS_DATA_LINES.map((ep: any) => ({
        x: ep.X * 1000,
        y: ep.Y * 1000,
        z: ep.Z * 1000
      }));
    } else if (data.EPHEMERIS && data.EPHEMERIS.length > 0) {
      // Legacy format (EPHEMERIS array)
      stateVectors = data.EPHEMERIS.map((ep: any) => ({
        x: ep.X * 1000,
        y: ep.Y * 1000,
        z: ep.Z * 1000
      }));
    }

    console.log("OEM stateVectors:", stateVectors.length, stateVectors.slice(0, 2));

    if (stateVectors.length === 0) {
      console.error("OEM: No state vectors extracted!");
      return;
    }

    // Create orbit path from state vectors
    const positions = stateVectors.map(sv =>
      new Cesium.Cartesian3(sv.x, sv.y, sv.z)
    );

    // Create orbit polyline
    viewer.entities.add({
      name: data.OBJECT_NAME || "Spacecraft",
      polyline: {
        positions: positions,
        width: 3,
        material: Cesium.Color.fromCssColorString("#333333")
      }
    });

    // Add markers at each ephemeris point
    stateVectors.forEach((sv, idx: number) => {
      viewer.entities.add({
        position: new Cesium.Cartesian3(sv.x, sv.y, sv.z),
        point: {
          pixelSize: idx === 0 ? 10 : 4,
          color: idx === 0 ? Cesium.Color.fromCssColorString("#38ef7d") : Cesium.Color.YELLOW,
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: idx === 0 ? 2 : 1
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

    // Don't zoom - orbit is visible from home view
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

      // Initialize viewer with dark theme - no Cesium Ion dependency
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
        // Use simple ellipsoid terrain (no Cesium Ion required)
        terrain: undefined,
        // Start with no imagery (we'll add our own)
        imageryProvider: false,
        contextOptions: {
          webgl: {
            alpha: true
          }
        }
      });

      // Add dark base layer - local tiles for zoom 0-2, remote for 3+
      // Local tiles reduce external dependencies for initial view
      viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          url: "/tiles/dark/{z}/{x}/{y}.png",
          maximumLevel: 2,
          credit: "CartoDB, OpenStreetMap contributors"
        })
      );
      // Remote tiles for higher zoom levels
      viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
          subdomains: ['a', 'b', 'c', 'd'],
          minimumLevel: 3,
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

  onMount(async () => {
    await initCesium();
    loadSample("OMM");
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
