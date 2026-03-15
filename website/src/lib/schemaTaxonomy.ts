export interface SchemaTypeDefinition {
  abbr: string;
  desc: string;
}

export interface SchemaCategoryDefinition {
  name: string;
  tag: string;
  types: SchemaTypeDefinition[];
}

export const schemaCategoryDefinitions: SchemaCategoryDefinition[] = [
  {
    name: "Orbit & Navigation",
    tag: "Orbit",
    types: [
      { abbr: "OMM", desc: "Orbit Mean Elements Message" },
      { abbr: "OEM", desc: "Orbit Ephemeris Message" },
      { abbr: "OPM", desc: "Orbit Parameter Message" },
      { abbr: "OCM", desc: "Orbit Comprehensive Message" },
      { abbr: "BOV", desc: "Burn Out Vector" },
      { abbr: "MNV", desc: "Maneuver Orbital State" },
      { abbr: "MFE", desc: "Manifold Element Set" },
      { abbr: "MNF", desc: "Manifold Element Set" },
      { abbr: "MPE", desc: "Min Propagatable Element Set" },
      { abbr: "STV", desc: "State Vector" },
      { abbr: "OBT", desc: "Orbit Track" },
      { abbr: "OBD", desc: "Orbit Determination Solution" },
      { abbr: "OSM", desc: "Observation Stability Message" },
      { abbr: "AST", desc: "Astrodynamics" },
      { abbr: "PCF", desc: "Propagator Configuration" },
      { abbr: "VCM", desc: "Vector Covariance Message" },
    ],
  },
  {
    name: "Attitude",
    tag: "Attitude",
    types: [
      { abbr: "AEM", desc: "Attitude Ephemeris Message" },
      { abbr: "APM", desc: "Attitude Parameter Message" },
      { abbr: "ACM", desc: "Attitude State Data" },
      { abbr: "ATD", desc: "Attitude Data Point" },
    ],
  },
  {
    name: "Conjunction & Safety",
    tag: "Conjunction",
    types: [
      { abbr: "CDM", desc: "Conjunction Data Message" },
      { abbr: "CSM", desc: "Conjunction Summary Message" },
      { abbr: "HYP", desc: "Hypothesis Message" },
    ],
  },
  {
    name: "Tracking & Data",
    tag: "Tracking",
    types: [
      { abbr: "TDM", desc: "Tracking Data Message" },
      { abbr: "TRK", desc: "Track" },
      { abbr: "TKG", desc: "Tracking and Data Fusion" },
    ],
  },
  {
    name: "Space Objects & Catalog",
    tag: "Objects",
    types: [
      { abbr: "CAT", desc: "Catalog Entity Message" },
      { abbr: "OON", desc: "On-Orbit Object" },
      { abbr: "OOD", desc: "On-Orbit Object Details" },
      { abbr: "OOL", desc: "On-Orbit Object List" },
      { abbr: "OOI", desc: "Object of Interest" },
      { abbr: "OOE", desc: "On-Orbit Event" },
      { abbr: "OOA", desc: "On-Orbit Antenna" },
      { abbr: "OOB", desc: "On-Orbit Battery" },
      { abbr: "OOS", desc: "On-Orbit Solar Array" },
      { abbr: "OOT", desc: "On-Orbit Thruster" },
      { abbr: "SOI", desc: "Space Object Identification" },
      { abbr: "IDM", desc: "Frequency Range Definition" },
    ],
  },
  {
    name: "Observations & Sensors",
    tag: "Observation",
    types: [
      { abbr: "EOO", desc: "Electro-Optical Observation" },
      { abbr: "IRO", desc: "Infrared Observation" },
      { abbr: "RDO", desc: "Radar Observation" },
      { abbr: "SAR", desc: "SAR Observation" },
      { abbr: "RFO", desc: "RF Observation" },
      { abbr: "GNO", desc: "GNSS Observation" },
      { abbr: "DOA", desc: "Difference of Arrival" },
      { abbr: "MTI", desc: "Moving Target Indicator" },
      { abbr: "SWR", desc: "Short-Wave IR Observation" },
      { abbr: "GDI", desc: "Ground Imagery" },
      { abbr: "SKI", desc: "Sky Imagery" },
      { abbr: "ANI", desc: "Analytic Imagery Product" },
      { abbr: "SNR", desc: "Sensor Systems" },
      { abbr: "SEN", desc: "Sensor Maintenance Event" },
    ],
  },
  {
    name: "Communications & RF",
    tag: "Comms",
    types: [
      { abbr: "COM", desc: "Communications Systems" },
      { abbr: "CMS", desc: "Transponder Channel" },
      { abbr: "CHN", desc: "Communications Channel" },
      { abbr: "TPN", desc: "Transponder" },
      { abbr: "RFB", desc: "RF Band Specification" },
      { abbr: "RFE", desc: "RF Emitter Detail Record" },
      { abbr: "LKS", desc: "Link Status" },
      { abbr: "BEM", desc: "Beam Contour Point" },
      { abbr: "BMC", desc: "Beam Contour" },
    ],
  },
  {
    name: "Space Environment",
    tag: "Environment",
    types: [
      { abbr: "ENV", desc: "Atmosphere and Environment" },
      { abbr: "SEO", desc: "Space Environment Observation" },
      { abbr: "SEV", desc: "Space Environment Detail" },
      { abbr: "ION", desc: "Ionospheric Observation" },
      { abbr: "ATM", desc: "Atmospheric Model" },
      { abbr: "SPW", desc: "Space Weather Data Record" },
      { abbr: "WTH", desc: "Weather Data" },
      { abbr: "GRV", desc: "Gravity Models" },
      { abbr: "EOP", desc: "Earth Orientation Parameters" },
      { abbr: "PHY", desc: "Physics & Rigid Body Dynamics" },
      { abbr: "TRN", desc: "Terrain Models" },
      { abbr: "STR", desc: "Star Catalog Entry" },
    ],
  },
  {
    name: "Launch & Reentry",
    tag: "Launch",
    types: [
      { abbr: "LDM", desc: "Launch Data Message" },
      { abbr: "LND", desc: "Launch Detection" },
      { abbr: "LNE", desc: "Launch Event" },
      { abbr: "ROC", desc: "Rocket Configuration" },
      { abbr: "RDM", desc: "Reentry State Vector" },
    ],
  },
  {
    name: "Vehicles & Platforms",
    tag: "Vehicle",
    types: [
      { abbr: "BUS", desc: "Satellite Bus Specification" },
      { abbr: "PLD", desc: "Payload Information" },
      { abbr: "GEO", desc: "GEO Spacecraft Status" },
      { abbr: "DFH", desc: "GEO Drift History" },
      { abbr: "PRG", desc: "Program Description" },
      { abbr: "ACR", desc: "Aircraft Dynamics" },
      { abbr: "GVH", desc: "Ground Vehicles" },
      { abbr: "HEL", desc: "Helicopter Dynamics" },
      { abbr: "MSL", desc: "Guided Missiles" },
      { abbr: "MST", desc: "Missile Track" },
      { abbr: "NAV", desc: "Naval Vessels" },
    ],
  },
  {
    name: "Defense & EW",
    tag: "Defense",
    types: [
      { abbr: "ARM", desc: "Armor and Protection" },
      { abbr: "BAL", desc: "Ballistics" },
      { abbr: "DMG", desc: "Damage Models" },
      { abbr: "EWR", desc: "Electronic Warfare" },
      { abbr: "FCS", desc: "Fire Control Systems" },
      { abbr: "WPN", desc: "Weapons and Munitions" },
      { abbr: "SON", desc: "Sonar & Underwater Acoustics" },
    ],
  },
  {
    name: "Protocol & Data Link",
    tag: "Protocol",
    types: [
      { abbr: "SPP", desc: "Space Packet Protocol" },
      { abbr: "AOF", desc: "AOS Transfer Frame" },
      { abbr: "TCF", desc: "Telecommand Transfer Frame" },
      { abbr: "TMF", desc: "Telemetry Transfer Frame" },
      { abbr: "CFP", desc: "CCSDS File Delivery PDU" },
      { abbr: "CLT", desc: "Command Link Transmission" },
      { abbr: "RAF", desc: "Return All Frames Service" },
      { abbr: "RCF", desc: "Return Channel Frames" },
      { abbr: "SDL", desc: "Space Data Link Security" },
      { abbr: "XTC", desc: "Telemetry & Command Exchange" },
    ],
  },
  {
    name: "Security & Encryption",
    tag: "Security",
    types: [
      { abbr: "EME", desc: "Encrypted Message Envelope" },
      { abbr: "ENC", desc: "Encryption Header" },
      { abbr: "EPM", desc: "Cryptographic Key Info" },
      { abbr: "PLK", desc: "Plugin Key Exchange" },
    ],
  },
  {
    name: "Reference & Metadata",
    tag: "Reference",
    types: [
      { abbr: "RFM", desc: "Reference Frame Message" },
      { abbr: "CRD", desc: "Coordinate Systems" },
      { abbr: "TIM", desc: "Time System" },
      { abbr: "TME", desc: "Time Systems" },
      { abbr: "MET", desc: "Mean Element Theory" },
      { abbr: "LCC", desc: "Legacy Country Code" },
      { abbr: "CTR", desc: "Country Identity" },
      { abbr: "SIT", desc: "Geometric Properties" },
      { abbr: "SCM", desc: "Schema Standard Definition" },
    ],
  },
  {
    name: "Data Exchange",
    tag: "Exchange",
    types: [
      { abbr: "CRM", desc: "Collection Request Message" },
      { abbr: "PNM", desc: "Publish Notification" },
      { abbr: "ACL", desc: "Access Control Grant" },
      { abbr: "PUR", desc: "Purchase Request" },
      { abbr: "REV", desc: "Review" },
      { abbr: "REC", desc: "Record Wrapper" },
      { abbr: "STF", desc: "Spatial Coverage Definition" },
      { abbr: "PLG", desc: "Plugin Declaration" },
    ],
  },
  {
    name: "Geospatial & Industry",
    tag: "Geospatial",
    types: [
      { abbr: "GJN", desc: "GeoJSON Feature Collection" },
      { abbr: "CZM", desc: "CZML (Cesium Language)" },
      { abbr: "KML", desc: "Keyhole Markup Language" },
      { abbr: "GPX", desc: "GPS Exchange Format" },
      { abbr: "COT", desc: "Cursor on Target" },
    ],
  },
];

export const schemaTagMap: Record<string, string> = Object.fromEntries(
  schemaCategoryDefinitions.flatMap(({ tag, types }) =>
    types.map(({ abbr }) => [abbr, tag] as const),
  ),
);

export const schemaTagOptions = [
  "All",
  ...new Set(schemaCategoryDefinitions.map(({ tag }) => tag)),
];

export interface LandingFeatureCategory {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
  schemas: string[];
}

export const landingFeatureCategories: LandingFeatureCategory[] = [
  {
    icon: "orbit",
    iconClass: "icon-blue",
    title: "Orbit & Navigation",
    description: "OMM, OEM, OCM, MPE - mean elements, ephemerides, and compact propagatable element sets",
    schemas: ["OMM", "OEM", "OCM", "MPE"],
  },
  {
    icon: "alert",
    iconClass: "icon-orange",
    title: "Conjunction & Safety",
    description: "CDM, CSM, CAT - conjunction assessment, screening, and catalog messages for collision risk",
    schemas: ["CDM", "CSM", "CAT"],
  },
  {
    icon: "user",
    iconClass: "icon-green",
    title: "Identity & Exchange",
    description: "EPM, PNM - signed entity profiles and publish notifications for distributed data exchange",
    schemas: ["EPM", "PNM"],
  },
  {
    icon: "radio",
    iconClass: "icon-cyan",
    title: "Tracking & Reference",
    description: "TDM, RFM - observation data and reference-frame metadata for tracking workflows",
    schemas: ["TDM", "RFM"],
  },
  {
    icon: "telemetry",
    iconClass: "icon-teal",
    title: "Telemetry & Command",
    description: "XTC (XTCE) - XML telemetry and command exchange metadata for spacecraft systems",
    schemas: ["XTC"],
  },
  {
    icon: "rocket",
    iconClass: "icon-purple",
    title: "Reference & Metadata",
    description: "MET, TIM, TME - propagation theory, time systems, and supporting reference metadata",
    schemas: ["MET", "TIM", "TME"],
  },
  {
    icon: "store",
    iconClass: "icon-gold",
    title: "Data Exchange",
    description: "STF, PUR, REV, ACL - storefronts, purchases, reviews, and access grants for data commerce",
    schemas: ["STF", "PUR", "REV", "ACL"],
  },
];
