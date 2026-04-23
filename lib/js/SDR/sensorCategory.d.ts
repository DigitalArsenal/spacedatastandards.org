/**
 * Sensor Detection Report — runtime I/O contract for sensor detection
 * plugins. Distinct from SNR (sensor hardware catalog) and SEN (sensor
 * maintenance log); SDR carries per-frame target states, configuration,
 * and detection results.
 * Sensor category for a report.
 */
export declare enum sensorCategory {
    RADAR = 0,
    ELECTRO_OPTICAL = 1,
    INFRARED = 2,
    ACOUSTIC = 3,
    RF = 4,
    LIDAR = 5,
    CUSTOM = 255
}
//# sourceMappingURL=sensorCategory.d.ts.map