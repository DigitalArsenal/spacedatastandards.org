// automatically generated by the FlatBuffers compiler, do not modify
export var referenceFrame;
(function (referenceFrame) {
    /**
     * Earth-Centered-Earth-Fixed (ECEF) frame: Rotates with Earth. Origin at Earth's center. X-axis towards prime meridian, Y-axis eastward, Z-axis towards North Pole. Ideal for terrestrial points.
     */
    referenceFrame[referenceFrame["ECEF"] = 0] = "ECEF";
    /**
     * International Celestial Reference Frame (ICRF): An inertial frame fixed relative to distant stars. Based on quasars. Used for precision astronomy and unaffected by Earth's rotation.
     */
    referenceFrame[referenceFrame["ICRF"] = 1] = "ICRF";
    /**
     * True Equator Mean Equinox (TEME): Used in SGP4 model for satellite tracking. Accounts for Earth's precession and nutation. Dynamic frame useful for orbit prediction.
     */
    referenceFrame[referenceFrame["TEME"] = 2] = "TEME";
    /**
     * East-North-Up (ENU): Local tangent plane system for surface points. "East" eastward, "North" northward, "Up" perpendicular to Earth's surface. Suited for stationary or slow-moving objects at low altitudes.
     */
    referenceFrame[referenceFrame["ENU"] = 3] = "ENU";
    /**
     * North-East-Down (NED): Common in aviation and navigation. "North" northward, "East" eastward, "Down" towards Earth's center. Aligns with gravity, intuitive for aircraft and vehicles.
     */
    referenceFrame[referenceFrame["NED"] = 4] = "NED";
    /**
     * North-East-Up (NEU): Similar to NED but "Up" axis is opposite to gravity. Suited for applications preferring a conventional "Up" direction.
     */
    referenceFrame[referenceFrame["NEU"] = 5] = "NEU";
    /**
     * Radial-Intrack-Cross-track (RIC): Aligned with spacecraft's UVW system. "Radial" axis towards spacecraft, "In-track" perpendicular to radial and cross-track, "Cross-track" normal to orbit plane. Used for spacecraft orientation and tracking.
     */
    referenceFrame[referenceFrame["RIC"] = 6] = "RIC";
    /**
     * Earth Mean Equator and Equinox of J2000 (J2000): An Earth-Centered Inertial (ECI) frame defined by Earth's mean equator and equinox at the start of the year 2000. Fixed relative to distant stars, used for celestial mechanics and space navigation.
     */
    referenceFrame[referenceFrame["J2000"] = 7] = "J2000";
    /**
     * Geocentric Celestial Reference Frame
     */
    referenceFrame[referenceFrame["GCRF"] = 8] = "GCRF";
    /**
     * Greenwich Rotating Coordinates
     */
    referenceFrame[referenceFrame["GRC"] = 9] = "GRC";
    /**
     * International Terrestrial Reference Frame 2000
     */
    referenceFrame[referenceFrame["ITRF2000"] = 10] = "ITRF2000";
    /**
     * International Terrestrial Reference Frame 1993
     */
    referenceFrame[referenceFrame["ITRF93"] = 11] = "ITRF93";
    /**
     * International Terrestrial Reference Frame 1997
     */
    referenceFrame[referenceFrame["ITRF97"] = 12] = "ITRF97";
    /**
     * True of Date, Rotating
     */
    referenceFrame[referenceFrame["TDR"] = 13] = "TDR";
    /**
     * True of Date
     */
    referenceFrame[referenceFrame["TOD"] = 14] = "TOD";
    /**
     * Radial, Transverse, Normal
     */
    referenceFrame[referenceFrame["RTN"] = 15] = "RTN";
    /**
     * Transverse, Velocity, Normal
     */
    referenceFrame[referenceFrame["TVN"] = 16] = "TVN";
    /**
     * Vehicle-Body-Local-Horizontal (VVLH): An orbit reference frame with X-axis pointing from the center of the central body to the vehicle, Z-axis oppoOBSERVER to the orbital angular momentum vector, and Y-axis completing the right-handed system.
     */
    referenceFrame[referenceFrame["VVLH"] = 17] = "VVLH";
    /**
     * Vehicle-Local-Vertical-Local-Horizontal (VLVH): An orbit reference frame similar to VVLH, often used in close proximity operations or surface-oriented missions.
     */
    referenceFrame[referenceFrame["VLVH"] = 18] = "VLVH";
    /**
     * Local Tangent Plane (LTP): A local, surface-fixed reference frame often used for terrestrial applications, aligned with the local horizon.
     */
    referenceFrame[referenceFrame["LTP"] = 19] = "LTP";
    /**
     * Local Vertical-Local Horizontal (LVLH): An orbit reference frame with the Z-axis pointing towards the center of the central body (oppoOBSERVER to local vertical), the X-axis in the velocity direction (local horizontal), and the Y-axis completing the right-hand system.
     */
    referenceFrame[referenceFrame["LVLH"] = 20] = "LVLH";
    /**
     * Polar-North-East (PNE): A variation of local coordinate systems typically used in polar regions, with axes aligned toward the geographic North Pole, Eastward, and perpendicular to the Earth's surface.
     */
    referenceFrame[referenceFrame["PNE"] = 21] = "PNE";
    /**
     * Body-Fixed Reference Frame (BRF): A reference frame fixed to the body of a spacecraft or celestial object, oriented according to the body's principal axes.
     */
    referenceFrame[referenceFrame["BRF"] = 22] = "BRF";
})(referenceFrame || (referenceFrame = {}));