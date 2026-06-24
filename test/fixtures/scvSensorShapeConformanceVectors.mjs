export const SENSOR_SHAPE_CONFORMANCE_VECTORS = Object.freeze([
  {
    name: "solid-conic",
    label: "solid conic",
    type: "conic",
    sensorType: "CONIC",
    inside: [0, 0, 50],
    outside: [50, 0, 50],
    shape: {
      outerHalfAngleRad: Math.PI / 6,
      innerHalfAngleRad: 0,
      minimumClockAngleRad: 0,
      maximumClockAngleRad: Math.PI * 2,
      radiusMeters: 100,
    },
  },
  {
    name: "inner-cutout",
    label: "inner cutout",
    type: "conic",
    sensorType: "CONIC",
    inside: [20, 0, 50],
    outside: [1, 0, 50],
    shape: {
      outerHalfAngleRad: Math.PI / 4,
      innerHalfAngleRad: Math.PI / 18,
      minimumClockAngleRad: 0,
      maximumClockAngleRad: Math.PI * 2,
      radiusMeters: 100,
    },
  },
  {
    name: "partial-clock-sector",
    label: "partial clock sector",
    type: "conic",
    sensorType: "CONIC",
    inside: [20, 20, 50],
    outside: [-20, 20, 50],
    shape: {
      outerHalfAngleRad: Math.PI / 4,
      innerHalfAngleRad: 0,
      minimumClockAngleRad: 0,
      maximumClockAngleRad: Math.PI / 2,
      radiusMeters: 100,
    },
  },
  {
    name: "wrapped-clock-sector",
    label: "wrapped clock sector",
    type: "conic",
    sensorType: "CONIC",
    inside: [20, 0, 50],
    outside: [0, 20, 50],
    shape: {
      outerHalfAngleRad: Math.PI / 4,
      innerHalfAngleRad: 0,
      minimumClockAngleRad: (5 * Math.PI) / 3,
      maximumClockAngleRad: Math.PI / 3,
      radiusMeters: 100,
    },
  },
  {
    name: "rectangular",
    label: "rectangular",
    type: "rectangular",
    sensorType: "RECTANGULAR",
    inside: [10, 5, 50],
    outside: [30, 0, 50],
    shape: {
      xHalfAngleRad: Math.PI / 8,
      yHalfAngleRad: Math.PI / 10,
      radiusMeters: 100,
    },
  },
  {
    name: "sar-annular-sector",
    label: "SAR annular sector",
    type: "sar",
    sensorType: "SAR",
    inside: [20, 0, 50],
    outside: [0, 20, 50],
    shape: {
      innerLookAngleRad: Math.PI / 9,
      outerLookAngleRad: Math.PI / 4,
      minimumClockAngleRad: -Math.PI / 6,
      maximumClockAngleRad: Math.PI / 6,
      radiusMeters: 100,
      sarSamplingDensity: 2,
    },
  },
  {
    name: "sar-min-range",
    label: "SAR min range",
    type: "sar",
    sensorType: "SAR",
    inside: [20, 0, 50],
    outside: [4, 0, 10],
    shape: {
      innerLookAngleRad: Math.PI / 9,
      outerLookAngleRad: Math.PI / 4,
      minimumClockAngleRad: -Math.PI / 6,
      maximumClockAngleRad: Math.PI / 6,
      minRangeMeters: 40,
      radiusMeters: 100,
      sarSamplingDensity: 2,
    },
  },
]);

export function sensorBackendShapeConfig(vector) {
  const shape = vector.shape;
  if (vector.type === "conic") {
    return {
      outerHalfAngle: shape.outerHalfAngleRad,
      innerHalfAngle: shape.innerHalfAngleRad,
      minimumClockAngle: shape.minimumClockAngleRad,
      maximumClockAngle: shape.maximumClockAngleRad,
      minRangeMeters: shape.minRangeMeters,
      radius: shape.radiusMeters,
    };
  }
  if (vector.type === "rectangular") {
    return {
      xHalfAngle: shape.xHalfAngleRad,
      yHalfAngle: shape.yHalfAngleRad,
      minRangeMeters: shape.minRangeMeters,
      radius: shape.radiusMeters,
    };
  }
  if (vector.type === "sar") {
    return {
      innerLookAngle: shape.innerLookAngleRad,
      outerLookAngle: shape.outerLookAngleRad,
      minimumClockAngle: shape.minimumClockAngleRad,
      maximumClockAngle: shape.maximumClockAngleRad,
      minRangeMeters: shape.minRangeMeters,
      radius: shape.radiusMeters,
      sarSamplingDensity: shape.sarSamplingDensity,
    };
  }
  throw new Error(`Unsupported conformance vector type: ${vector.type}`);
}

export function publicSensorOptions(vector, SensorType) {
  const type = SensorType[vector.sensorType];
  if (type === undefined) {
    throw new Error(`Missing public SensorType for ${vector.sensorType}`);
  }
  return {
    type,
    ...sensorBackendShapeConfig(vector),
  };
}
