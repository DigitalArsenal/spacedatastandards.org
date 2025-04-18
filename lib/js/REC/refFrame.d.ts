export declare enum refFrame {
    /**
     * Earth-Centered-Earth-Fixed: Rotates with Earth. X-axis at prime meridian, Y eastward, Z towards North Pole.
     */
    ECEF = 0,
    /**
     * International Celestial Reference Frame: Fixed relative to distant stars. Used in astronomy.
     */
    ICRF = 1,
    /**
     * True Equator Mean Equinox: Dynamic frame for SGP4 satellite tracking.
     */
    TEME = 2,
    /**
     * East-North-Up: Local tangent plane for surface points. Suitable for stationary objects.
     */
    ENU = 3,
    /**
     * North-East-Down: Aviation/navigation frame aligned with gravity.
     */
    NED = 4,
    /**
     * North-East-Up: Similar to NED, with "Up" opposite gravity.
     */
    NEU = 5,
    /**
     * Radial-Intrack-Cross-track: Spacecraft orientation aligned with orbit.
     */
    RIC = 6,
    /**
     * Earth Mean Equator and Equinox of J2000: Fixed relative to stars, used for celestial mechanics.
     */
    J2000 = 7,
    /**
     * Geocentric Celestial Reference Frame: Inertial Earth-centered frame.
     */
    GCRF = 8,
    /**
     * Greenwich Rotating Coordinates: Rotates with Earth's true equator.
     */
    GRC = 9,
    /**
     * International Terrestrial Reference Frame 2000: Rotating Earth-fixed frame.
     */
    ITRF2000 = 10,
    /**
     * International Terrestrial Reference Frame 1993: Older ITRF realization.
     */
    ITRF93 = 11,
    /**
     * International Terrestrial Reference Frame 1997: Intermediate ITRF realization.
     */
    ITRF97 = 12,
    /**
     * True of Date, Rotating: Rotates with Earth's true equator.
     */
    TDR = 13,
    /**
     * True of Date: Similar to TDR, without rotation.
     */
    TOD = 14,
    /**
     * Radial, Transverse, Normal: Orbit frame for spacecraft dynamics.
     */
    RTN = 15,
    /**
     * Transverse, Velocity, Normal: Alternative orbit frame.
     */
    TVN = 16,
    /**
     * Vehicle-Body-Local-Horizontal: Orbit frame aligned with spacecraft.
     */
    VVLH = 17,
    /**
     * Vehicle-Local-Vertical-Local-Horizontal: Used in surface or proximity ops.
     */
    VLVH = 18,
    /**
     * Local Tangent Plane: Surface-fixed frame for terrestrial uses.
     */
    LTP = 19,
    /**
     * Local Vertical-Local Horizontal: Orbit frame with Z towards Earth center.
     */
    LVLH = 20,
    /**
     * Polar-North-East: Polar coordinate frame.
     */
    PNE = 21,
    /**
     * Body-Fixed Reference Frame: Fixed to a spacecraft or celestial object.
     */
    BRF = 22,
    /**
     * Radial, Down-track, Cross-track: Alternate name for RTN.
     */
    RSW = 23,
    /**
     * Tangential, Normal, Cross-track: Local orbit frame.
     */
    TNW = 24,
    /**
     * Radial, Along-track, Cross-track: Satellite motion frame.
     */
    UVW = 25,
    /**
     * Equinoctial Inertial: Frame with axes aligned to orbital properties.
     */
    EQW_INERTIAL = 26,
    /**
     * Inertial version of LVLH.
     */
    LVLH_INERTIAL = 27,
    /**
     * Rotating LVLH frame.
     */
    LVLH_ROTATING = 28,
    /**
     * Inertial Nadir-Sun-Normal frame.
     */
    NSW_INERTIAL = 29,
    /**
     * Rotating Nadir-Sun-Normal frame.
     */
    NSW_ROTATING = 30,
    /**
     * Inertial Transverse-Velocity-Normal frame.
     */
    NTW_INERTIAL = 31,
    /**
     * Rotating Transverse-Velocity-Normal frame.
     */
    NTW_ROTATING = 32,
    /**
     * Perifocal Coordinate System: Inertial frame aligned to periapsis.
     */
    PQW_INERTIAL = 33,
    /**
     * Inertial Radial, Transverse, Normal frame.
     */
    RSW_INERTIAL = 34,
    /**
     * Rotating RSW frame: Aligned with orbit angular momentum.
     */
    RSW_ROTATING = 35,
    /**
     * South/East/Zenith inertial frame.
     */
    SEZ_INERTIAL = 36,
    /**
     * Rotating South/East/Zenith frame.
     */
    SEZ_ROTATING = 37,
    /**
     * Inertial Tangential, Normal, Cross-track frame.
     */
    TNW_INERTIAL = 38,
    /**
     * Rotating Tangential, Normal, Cross-track frame.
     */
    TNW_ROTATING = 39,
    /**
     * Velocity, Normal, Co-normal inertial frame.
     */
    VNC_INERTIAL = 40,
    /**
     * Rotating Velocity, Normal, Co-normal frame.
     */
    VNC_ROTATING = 41,
    /**
     * Central Body alignment inertial frame.
     */
    ALIGN_CB = 42,
    /**
     * Earth alignment inertial frame.
     */
    ALIGN_EARTH = 43,
    /**
     * Inertial realization of B1950 epoch.
     */
    B1950 = 44,
    /**
     * Celestial Intermediate Reference System.
     */
    CIRS = 45,
    /**
     * DTRF Inertial frame with corrections.
     */
    DTRFyyyy = 46,
    /**
     * Earth-Fixed Greenwich rotating frame.
     */
    EFG = 47,
    /**
     * Earth Mean Equator and Equinox of 2000 epoch.
     */
    EME2000 = 48,
    /**
     * Central Body fixed rotating frame.
     */
    FIXED_CB = 49,
    /**
     * Earth-fixed rotating frame.
     */
    FIXED_EARTH = 50,
    /**
     * Geocentric Celestial Reference Frame with versioning.
     */
    GCRFn = 51,
    /**
     * Greenwich True-of-Date rotating frame.
     */
    GTOD = 52,
    /**
     * Mean of Date for all central bodies except Earth and Moon.
     */
    MOD_CB = 53,
    /**
     * Mean of Date for Earth.
     */
    MOD_EARTH = 54,
    /**
     * Mean of Date for Moon.
     */
    MOD_MOON = 55,
    /**
     * Mean of Epoch for central bodies.
     */
    MOE_CB = 56,
    /**
     * Mean of Epoch for Earth.
     */
    MOE_EARTH = 57,
    /**
     * Lunar Moon Mean Earth reference frame.
     */
    MOON_ME = 58,
    /**
     * Lunar Mean Equator and IAU Node reference frame.
     */
    MOON_MEIAUE = 59,
    /**
     * Lunar Principal Axis rotating frame.
     */
    MOON_PAxxx = 60,
    /**
     * True Equator Mean Equinox of Date.
     */
    TEMEOFDATE = 61,
    /**
     * True Equator Mean Equinox of Epoch.
     */
    TEMEOFEPOCH = 62,
    /**
     * Terrestrial Intermediate Reference System.
     */
    TIRS = 63,
    /**
     * True of Date for central bodies.
     */
    TOD_CB = 64,
    /**
     * True of Date for Earth.
     */
    TOD_EARTH = 65,
    /**
     * True of Date for Moon.
     */
    TOD_MOON = 66,
    /**
     * True of Epoch for central bodies.
     */
    TOE_CB = 67,
    /**
     * True of Epoch for Earth.
     */
    TOE_EARTH = 68,
    /**
     * True of Epoch for Moon.
     */
    TOE_MOON = 69,
    /**
     * True Ecliptic reference frame.
     */
    TRUE_ECLIPTIC = 70,
    /**
     * Launch go-inertial reference frame.
     */
    UVW_GO_INERTIAL = 71,
    /**
     * WGS 84 Earth-fixed terrestrial system.
     */
    WGS84 = 72,
    /**
     * Accelerometer reference frame.
     */
    ACC_i = 73,
    /**
     * Actuator reference frame.
     */
    ACTUATOR_i = 74,
    /**
     * Autonomous Star Tracker reference frame.
     */
    AST_i = 75,
    /**
     * Coarse Sun Sensor reference frame.
     */
    CSS_i = 76,
    /**
     * Digital Sun Sensor reference frame.
     */
    DSS_i = 77,
    /**
     * Earth Sensor Assembly reference frame.
     */
    ESA_i = 78,
    /**
     * Gyro reference frame.
     */
    GYRO_FRAME_i = 79,
    /**
     * Inertial Measurement Unit reference frame.
     */
    IMU_FRAME_i = 80,
    /**
     * Instrument reference frame.
     */
    INSTRUMENT_i = 81,
    /**
     * Magnetic Torque Assembly reference frame.
     */
    MTA_i = 82,
    /**
     * Reaction Wheel reference frame.
     */
    RW_i = 83,
    /**
     * Solar Array reference frame.
     */
    SA_i = 84,
    /**
     * Spacecraft Body reference frame.
     */
    SC_BODY_i = 85,
    /**
     * Sensor reference frame.
     */
    SENSOR_i = 86,
    /**
     * Star Tracker reference frame.
     */
    STARTRACKER_i = 87,
    /**
     * Three Axis Magnetometer reference frame.
     */
    TAM_i = 88
}
//# sourceMappingURL=refFrame.d.ts.map