// automatically generated by the FlatBuffers compiler, do not modify

@SuppressWarnings("unused")
public final class referenceFrame {
  private referenceFrame() { }
  /**
   * Earth-Centered-Earth-Fixed (ECEF) frame: Rotates with Earth. Origin at Earth's center. X-axis towards prime meridian, Y-axis eastward, Z-axis towards North Pole. Ideal for terrestrial points.
   */
  public static final byte ECEF = 0;
  /**
   * International Celestial Reference Frame (ICRF): An inertial frame fixed relative to distant stars. Based on quasars. Used for precision astronomy and unaffected by Earth's rotation.
   */
  public static final byte ICRF = 1;
  /**
   * True Equator Mean Equinox (TEME): Used in SGP4 model for satellite tracking. Accounts for Earth's precession and nutation. Dynamic frame useful for orbit prediction.
   */
  public static final byte TEME = 2;
  /**
   * East-North-Up (ENU): Local tangent plane system for surface points. "East" eastward, "North" northward, "Up" perpendicular to Earth's surface. Suited for stationary or slow-moving objects at low altitudes.
   */
  public static final byte ENU = 3;
  /**
   * North-East-Down (NED): Common in aviation and navigation. "North" northward, "East" eastward, "Down" towards Earth's center. Aligns with gravity, intuitive for aircraft and vehicles.
   */
  public static final byte NED = 4;
  /**
   * North-East-Up (NEU): Similar to NED but "Up" axis is opposite to gravity. Suited for applications preferring a conventional "Up" direction.
   */
  public static final byte NEU = 5;
  /**
   * Radial-Intrack-Cross-track (RIC): Aligned with spacecraft's UVW system. "Radial" axis towards spacecraft, "In-track" perpendicular to radial and cross-track, "Cross-track" normal to orbit plane. Used for spacecraft orientation and tracking.
   */
  public static final byte RIC = 6;
  /**
   * Earth Mean Equator and Equinox of J2000 (J2000): An Earth-Centered Inertial (ECI) frame defined by Earth's mean equator and equinox at the start of the year 2000. Fixed relative to distant stars, used for celestial mechanics and space navigation.
   */
  public static final byte J2000 = 7;
  /**
   * Geocentric Celestial Reference Frame
   */
  public static final byte GCRF = 8;
  /**
   * Greenwich Rotating Coordinates
   */
  public static final byte GRC = 9;
  /**
   * International Terrestrial Reference Frame 2000
   */
  public static final byte ITRF2000 = 10;
  /**
   * International Terrestrial Reference Frame 1993
   */
  public static final byte ITRF93 = 11;
  /**
   * International Terrestrial Reference Frame 1997
   */
  public static final byte ITRF97 = 12;
  /**
   * True of Date, Rotating
   */
  public static final byte TDR = 13;
  /**
   * True of Date
   */
  public static final byte TOD = 14;
  /**
   * Radial, Transverse, Normal
   */
  public static final byte RTN = 15;
  /**
   * Transverse, Velocity, Normal
   */
  public static final byte TVN = 16;
  /**
   * Vehicle-Body-Local-Horizontal (VVLH): An orbit reference frame with X-axis pointing from the center of the central body to the vehicle, Z-axis oppoOBSERVER to the orbital angular momentum vector, and Y-axis completing the right-handed system.
   */
  public static final byte VVLH = 17;
  /**
   * Vehicle-Local-Vertical-Local-Horizontal (VLVH): An orbit reference frame similar to VVLH, often used in close proximity operations or surface-oriented missions.
   */
  public static final byte VLVH = 18;
  /**
   * Local Tangent Plane (LTP): A local, surface-fixed reference frame often used for terrestrial applications, aligned with the local horizon.
   */
  public static final byte LTP = 19;
  /**
   * Local Vertical-Local Horizontal (LVLH): An orbit reference frame with the Z-axis pointing towards the center of the central body (oppoOBSERVER to local vertical), the X-axis in the velocity direction (local horizontal), and the Y-axis completing the right-hand system.
   */
  public static final byte LVLH = 20;
  /**
   * Polar-North-East (PNE): A variation of local coordinate systems typically used in polar regions, with axes aligned toward the geographic North Pole, Eastward, and perpendicular to the Earth's surface.
   */
  public static final byte PNE = 21;
  /**
   * Body-Fixed Reference Frame (BRF): A reference frame fixed to the body of a spacecraft or celestial object, oriented according to the body's principal axes.
   */
  public static final byte BRF = 22;

  public static final String[] names = { "ECEF", "ICRF", "TEME", "ENU", "NED", "NEU", "RIC", "J2000", "GCRF", "GRC", "ITRF2000", "ITRF93", "ITRF97", "TDR", "TOD", "RTN", "TVN", "VVLH", "VLVH", "LTP", "LVLH", "PNE", "BRF", };

  public static String name(int e) { return names[e]; }
}
