# New Standards Candidates from OrbPro2-ModSim

Sourced from `../OrbPro2-ModSim/packages/space-data-parsers` and `../OrbPro2-ModSim/schemas/orbpro2/`.
Cross-referenced against the 39 existing standards in `schema/`.

---

## CCSDS Navigation — Gaps

These CCSDS navigation message types exist in `space-data-parsers` but are **not yet** in `schema/`:

| ID  | Name | CCSDS Reference | Description | Source |
|-----|------|-----------------|-------------|--------|
| AEM | Attitude Ephemeris Message | CCSDS 504.0-B-1 | Time-ordered attitude quaternions and angular rates for spacecraft orientation over time. Multiple segments with interpolation. | `ccsds/include/ccsds/navigation/aem.h` |
| APM | Attitude Parameter Message | CCSDS 504.0-B-1 | Single-epoch spacecraft attitude state (quaternion, Euler angles, spin). Counterpart to OPM for attitude. | `ccsds/include/ccsds/navigation/apm.h` (stub) |
| OPM | Orbit Parameter Message | CCSDS 502.0-B-2 | Single-epoch state vector with optional Keplerian elements, spacecraft parameters, and maneuver data. | `ccsds/include/ccsds/navigation/opm.h` |
| ACM | Attitude Covariance Message | CCSDS 504.0-B-1 | Attitude covariance data for spacecraft orientation uncertainty. | `ccsds/schemas/ACM.fbs` (stub) |
| RDM | Reentry Data Message | CCSDS 508.0-B-1 | Reentry prediction data for objects reentering Earth's atmosphere. | `ccsds/include/ccsds/navigation/rdm.h` (stub) |

> **Note:** OEM, OMM, CDM, TDM, OCM, VCM, and XTC already exist in `schema/`.

---

## CCSDS Data Link Protocols — All New

None of these exist in `schema/` today. These represent the CCSDS packet/frame layer standards.

| ID  | Name | CCSDS Reference | Description | Source |
|-----|------|-----------------|-------------|--------|
| SPP | Space Packet Protocol | CCSDS 133.0-B-1 | Primary header (APID, sequence control, length) plus data zone. Fundamental unit of space data transfer. | `ccsds/include/ccsds/datalink/space_packet.h` |
| TMF | Telemetry Transfer Frame | CCSDS 132.0-B-2 | Telemetry downlink frame with spacecraft/VC IDs, frame counters, OCF, optional FECF. Fixed-length container for space packets. | `ccsds/include/ccsds/datalink/tm_frame.h` |
| TCF | Telecommand Transfer Frame | CCSDS 232.0-B-3 | Uplink command frame with bypass/control flags, spacecraft/VC IDs, sequence number. | `ccsds/include/ccsds/datalink/tc_frame.h` |
| AOF | AOS Transfer Frame | CCSDS 732.0-B-3 | Advanced Orbiting Systems frame with insert zone, signaling field, higher-rate virtual channels. | `ccsds/include/ccsds/datalink/aos_frame.h` |
| SDL | Space Data Link Security | CCSDS 355.0-B-1 | Security header (SPI, IV) and trailer (MAC, pad) wrapping data link frames. Authentication and encryption at link layer. | `ccsds/include/ccsds/datalink/sdls.h` |

---

## CCSDS File Delivery Protocol — New

| ID  | Name | CCSDS Reference | Description | Source |
|-----|------|-----------------|-------------|--------|
| CFP | CCSDS File Delivery Protocol | CCSDS 727.0-B-5 | File transfer over space links. PDU header with entity/transaction IDs, metadata PDU (filenames, checksum), file data PDU (offset + payload). Supports acknowledged and unacknowledged modes. | `ccsds/include/ccsds/cfdp/` |

---

## CCSDS Space Link Extension — New

| ID  | Name | CCSDS Reference | Description | Source |
|-----|------|-----------------|-------------|--------|
| RAF | Return All Frames Service | CCSDS 913.1-B-2 | Ground-to-spacecraft service interface for receiving all TM frames. BIND/UNBIND, START/STOP, TRANSFER_BUFFER operations. BER/ASN.1 encoded. | `ccsds/include/ccsds/sle/raf.h` |
| RCF | Return Channel Frames Service | CCSDS 913.5-B-2 | Ground service for receiving frames from a specific virtual channel. Same operations as RAF but channel-filtered. | `ccsds/include/ccsds/sle/rcf.h` |
| CLT | CLTU Service | CCSDS 912.3-B-2 | Forward Command Link Transmission Unit service. Uplink command delivery with start/stop/transfer operations. | `ccsds/include/ccsds/sle/cltu.h` |

---

## OrbPro2 Domain Schemas — New Standards Candidates

These are domain-specific schemas from `schemas/orbpro2/` that represent potential new space data standards.

### Astrodynamics & Orbital Mechanics

| ID  | Name | Description | Source |
|-----|------|-------------|--------|
| AST | Astrodynamics | Propagation config, maneuver planning (Hohmann, Lambert), conjunction assessment, orbit determination, RPO/proximity operations, formation flying, pass predictions. 10 propagator types, 12 force models, 11 orbit types. | `schemas/orbpro2/Astrodynamics.fbs` |
| GRV | Gravity Models | Spherical harmonics (EGM96, EGM2008, WGS84), third-body perturbations, tidal effects (solid + ocean), geoid models, degree variance analysis. | `schemas/orbpro2/Gravity.fbs` |
| PCF | Propagator Configuration | Integrator selection (RK4/RK45/RK78/DOPRI5/ABM/BS), force model flags, step size, tolerances. 64-byte cache-aligned config struct. | `schemas/orbpro2/PropagatorConfig.fbs` |
| STV | State Vector | Core 64-byte state vector (epoch, position[3], velocity[3], ref_frame, flags). Optional 232-byte variant with 6x6 covariance. 7 reference frames (GCRF, ITRF, EME2000, TEME, ICRF, MOON_CI, MARS_CI). | `schemas/orbpro2/StateVector.fbs` |
| CRD | Coordinate Systems | 13 coordinate frames (ECEF, ECI variants, NED, ENU, BODY, lunar, Mars), geodetic/geocentric conversions, DCMs, frame transforms, horizon angles. 6 ellipsoid models. | `schemas/orbpro2/Coordinates.fbs` |

### Sensor & Tracking

| ID  | Name | Description | Source |
|-----|------|-------------|--------|
| SNR | Sensor Systems | 16 sensor types (radar variants, IR, EO, laser, RWR, MAW, sonar), 8 modes, radar equation, Kalman tracking state (272-byte), IR signatures, detection events. | `schemas/orbpro2/Sensor.fbs` |
| TRK | Tracking & Data Fusion | Kalman filters (EKF, UKF, CKF), IMM, MHT, JPDA, GNN association. Track tables, gating, hypothesis trees, multi-sensor fusion, track correlation. 11 filter types, 9 motion models, 13 measurement types. | `schemas/orbpro2/Tracking.fbs` |
| EWR | Electronic Warfare | ESM/ECM systems, 14 jamming types, 15 threat categories, direction finding, chaff/flare/towed decoys, RWR display, emitter database (EOB). | `schemas/orbpro2/ElectronicWarfare.fbs` |
| COM | Communications | Link budgets, 15 modulation types, 13 RF bands, 13 propagation models, data links (Link 16, Link 11, CDL, SATCOM, ADS-B, AIS), HAVEQUICK, SINCGARS, network topology. | `schemas/orbpro2/Communications.fbs` |
| SON | Sonar & Underwater Acoustics | Active/passive sonar equations, sound velocity profiles, ocean environment, transmission loss, submarine/surface ship signatures, target motion analysis (TMA), torpedo guidance, acoustic countermeasures. | `schemas/orbpro2/Sonar.fbs` |

### Environment & Physics

| ID  | Name | Description | Source |
|-----|------|-------------|--------|
| ENV | Atmosphere & Environment | ISA, US Std 1976, NRLMSISE-00 atmosphere models, 16 weather conditions, wind layers, space weather (F10.7, Kp, Ap), ground state, 12 terrain types. | `schemas/orbpro2/Atmosphere.fbs` |
| TRN | Terrain Models | DEM sources (SRTM, DTED, ASTER, Copernicus), elevation queries, line-of-sight, viewshed analysis, terrain following, slope analysis, hypsometric analysis, 17 land cover types. | `schemas/orbpro2/Terrain.fbs` |
| PHY | Physics & Rigid Body | 10 integration methods, 8 collision shapes, 11 materials, rigid body dynamics, springs, constraints, contact detection, fluid properties, aerodynamic forces, drag models, thermal state. | `schemas/orbpro2/Physics.fbs` |
| TME | Time Systems & Conversions | 14 time scales, 7 date formats, 6 clock types, Julian/MJD/GPS/Unix/mission time, leap second tables, EOP tables, solar/lunar position, sidereal time, clock models. | `schemas/orbpro2/Time.fbs` |

### Vehicle Platforms

| ID  | Name | Description | Source |
|-----|------|-------------|--------|
| ACR | Aircraft Dynamics | 12 aircraft types, 8 engine types, 10 flight phases, 6DOF flight controls, aero state, fuel state. 256-byte state struct. | `schemas/orbpro2/Aircraft.fbs` |
| HEL | Helicopter Dynamics | Blade Element Momentum Theory, 6 rotor types (conventional, tandem, coaxial), VRS/RBS detection, rotor state, helicopter controls. | `schemas/orbpro2/Helicopter.fbs` |
| NAV | Naval Vessels | 16 vessel types, 9 propulsion types, hull/submarine state, weapon mounts, damage control. 256-byte ship state. | `schemas/orbpro2/Naval.fbs` |
| GVH | Ground Vehicles | 16 vehicle types, 5 drive types, suspension state, turret state, drivetrain. Tanks, APCs, trucks. | `schemas/orbpro2/GroundVehicle.fbs` |

### Weapons & Effects

| ID  | Name | Description | Source |
|-----|------|-------------|--------|
| MSL | Guided Missiles | 15 missile types, 13 seeker types, 10 guidance laws (PN, APN, OGL), 8 flight phases. AAM, SAM, ASM, ATGM, cruise, ballistic, torpedo. 256-byte state. | `schemas/orbpro2/Missile.fbs` |
| WPN | Weapons & Munitions | 14 weapon types, 8 fuze types, gun configs, projectile state, bombs, rockets. | `schemas/orbpro2/Weapon.fbs` |
| BAL | Ballistics | 11 drag models (G1-GS, custom), 15 projectile types, 5 penetration models, firing solutions, ballistic tables, trajectory computation, fragmentation patterns. | `schemas/orbpro2/Ballistics.fbs` |
| ARM | Armor & Protection | 15 armor materials (RHA, ERA, NERA, composite, ceramic), 18 ammo types, DeMarre/Lanz-Odermatt/HEAT penetration models, impact events. | `schemas/orbpro2/Armor.fbs` |
| FCS | Fire Control Systems | 8 FCS modes, 5 lead methods, 5 rangefinder types, ballistic solutions, gun directors, CCIP/CCRP bombing solutions. | `schemas/orbpro2/FireControl.fbs` |
| DMG | Damage Models | 34 module types, component damage states, 9 crew roles, fire/repair modeling, destruction causes. War Thunder-style subsystem damage. | `schemas/orbpro2/DamageModel.fbs` |

---

## Summary

| Category | Count | IDs |
|----------|-------|-----|
| CCSDS Navigation (gaps) | 5 | ACM, AEM, APM, OPM, RDM |
| CCSDS Data Link | 5 | SPP, TMF, TCF, AOF, SDL |
| CCSDS File Delivery | 1 | CFP |
| CCSDS Space Link Extension | 3 | RAF, RCF, CLT |
| Astrodynamics & Orbital | 5 | AST, GRV, PCF, STV, CRD |
| Sensor & Tracking | 5 | SNR, TRK, EWR, COM, SON |
| Environment & Physics | 4 | ENV, TRN, PHY, TME |
| Vehicle Platforms | 4 | ACR, HEL, NAV, GVH |
| Weapons & Effects | 6 | MSL, WPN, BAL, ARM, FCS, DMG |
| **Total** | **38** | |

---

## UDL Branch Schemas (`origin/udl_schemas:schema_udl/`)

The `udl_schemas` branch contains **275 unique entity types** (each with Abridged/Full/Ingest variants) from the Unified Data Library. These are rich, field-documented FlatBuffers schemas with classification markings, audit trails, and data provenance fields.

### Already Covered by Existing `schema/` Standards

These UDL entities map to standards that already exist on `main`:

| UDL Entity | Existing Standard | Notes |
|------------|------------------|-------|
| Elset | OMM | Keplerian element sets — OMM covers this |
| Ephemeris / EphemerisSet | OEM | Ephemeris state vectors over time |
| StateVector | OEM (inline) | Position/velocity at epoch |
| Conjunction | CDM / CSM | Conjunction assessment data |
| EOObservation | EOO | Electro-optical observations |
| Eop | EOP | Earth Orientation Parameters |
| Country | CTR | Country codes |
| Site / SiteStatus / SiteRemark | SIT | Site/facility information |
| Sensor / Sensorcharacteristics / Sensorlimits | IDM (partial) | Sensor specs (IDM covers integrated devices) |

### Recommended to Pull Over — Space-Relevant, No Current Equivalent

These UDL schemas fill real gaps and are directly relevant to space data standards:

| ID  | UDL Entity | Description | Priority |
|-----|-----------|-------------|----------|
| SPW | SpaceWeather (SPW) | **Already on udl_schemas branch as `schema/SPW/`**. Kp, Ap, F10.7 solar indices, sunspot numbers. Pull this first. | **HIGH** |
| ATD | AttitudeData / AttitudeSet | Spacecraft orientation quaternions/Euler angles at epoch, with sets for time series. Fills the AEM/APM gap from the CCSDS side. | **HIGH** |
| OOB | Onorbit / OnorbitDetails | Satellite catalog enrichment: physical characteristics, mass, fuel, maneuverability, operational status. Extends CAT. | **HIGH** |
| OOA | OnorbitAntenna | Satellite antenna inventory with type and quantity references. | MEDIUM |
| OOB | OnorbitBattery | Satellite battery inventory with quantity specs. | MEDIUM |
| OOS | OnorbitSolarArray | Satellite solar array inventory with quantity specs. | MEDIUM |
| OOT | OnorbitThruster | Satellite thruster/engine inventory with type and quantity. | MEDIUM |
| OOE | OnorbitEvent | On-orbit events: loss events, status changes, capability impacts. | **HIGH** |
| OBD | OrbitDetermination | OD results: GP/SP solutions, residuals, fit quality, sensor contributions. | **HIGH** |
| OBT | OrbitTrack | Orbit track with Keplerian elements plus sensor correlation data. | MEDIUM |
| MNV | Maneuver | Detected/confirmed maneuver data with delta-V, pre/post states. Complements OCM. | **HIGH** |
| MNF | Manifold / ManifoldElset | Theoretical orbit sets for uncorrelated objects based on delta-V/delta-T variations. | MEDIUM |
| OOI | ObjectOfInterest | Objects of interest with last known state and sensor tasking windows for SDA. | **HIGH** |
| LND | LaunchDetection | Launch detection data with location, azimuth, trajectory observations. | **HIGH** |
| LNE | LaunchEvent | Known launch events with spacecraft, facility, and vehicle identification. | **HIGH** |
| LNS | LaunchSite / LaunchSiteDetails | Launch facility data with codes and identification. Extends SIT for launch sites. | MEDIUM |
| LNV | LaunchVehicle / LaunchVehicleDetails | Launch vehicle specs. Extends ROC. | MEDIUM |
| GEO | GEOStatus | GEO belt status: longitude, drift rate, orbital confidence, station-keeping status. | **HIGH** |
| DFH | DriftHistory | Historical GEO drift rates tracking longitudinal changes over time. | MEDIUM |
| STR | StarCatalog | Star positions, proper motion, parallax, photometric magnitudes for astrometric reference. | MEDIUM |
| TAU | TAIUTC | TAI-UTC leap second offset table. | LOW (TIM covers time systems) |
| GNO | GNSSObservation / GNSSObservationSet / GNSSRawIF | GNSS receiver observations from GPS, GLONASS, Galileo, BeiDou. | **HIGH** |
| ION | IonoObservation (+ 20 sub-entities) | Ionospheric observations: critical frequencies, density profiles, ionosonde data. | MEDIUM |
| SEO | SpaceEnvObservation | Space environment: particle counts, magnetic field measurements, radiation. | **HIGH** |
| SOI | SOIObservationSet / SOICalibration | Space Object Identification observation sets with optical/radar detections and calibration. | **HIGH** |
| RDO | RadarObservation | Radar observations: azimuth, elevation, range, range-rate, Doppler. | **HIGH** |
| RFO | RFObservation / RFObservationDetails | RF observations: frequency, power, signal characteristics, emitter fingerprinting. | **HIGH** |
| SAR | SARObservation | SAR observations: mode, polarization, resolution, imaging data. | MEDIUM |
| IRO | IR | Infrared observation data. | MEDIUM |
| SWR | SWIR | Short-wave infrared observation data. | MEDIUM |
| SKI | SkyImagery | Sky imagery observations. | MEDIUM |
| GDI | GroundImagery | Ground-based imagery observations. | MEDIUM |
| ANI | AnalyticImagery | Analytic/processed imagery products. | LOW |
| SEN | SensorMaintenance / SensorPlan / SensorStats | Sensor operational management: maintenance, planning, statistics. | MEDIUM |
| BUS | Bus | Satellite bus specifications: mass, power, dimensions. | MEDIUM |
| CMS | Comm / Transponder / Channel | Comms payload: transponders, channels, encryption, modulation. | **HIGH** |
| BEM | Beam / BeamContour | Antenna beam coverage: gain patterns, service area contours. | MEDIUM |
| RFE | RFEmitter / RFEmitterDetails | RF emitter characterization: frequency, power, signal parameters. | MEDIUM |
| RFB | RFBand / RFBandType | RF band specifications: frequency range, power, gain, polarization. | MEDIUM |
| LKS | LinkStatus | Satellite/ground link status: establishment, data rates, quality. | MEDIUM |
| MST | MissileTrack / MissileTrackVector | Missile track data: position, velocity, launch/impact location, confidence. | MEDIUM |
| TRK | Track / TrackDetails / TrackRoute / TrackSensor | General object tracking with identity, route, and sensor correlation. | **HIGH** |
| WTH | WeatherData / WeatherReport | Weather observations: radar reflectivity, wind, lightning, forecasts. | MEDIUM |
| DOA | DiffOfArrival | Time/frequency difference of arrival for geolocation. | MEDIUM |
| MTI | Mti (+ 10 sub-entities) | Moving Target Indicator radar: dwells, target reports, HRR profiles, job definitions. | MEDIUM |
| ISR | ISRCollection (+ 10 sub-entities) | ISR collection management: requirements, taskings, periods, exploitation. | LOW |
| EVE | EventEvolution | Event evolution tracking with timeline and status changes. | LOW |
| SGA | SigAct | Significant activities/events with location and participants. | LOW |

### UDL Entities Intentionally Excluded

These are operationally focused (logistics, air tasking, personnel recovery, etc.) and don't fit space data standards:

- **Air Operations**: AirEvent, AirTaskingOrder, AircraftSortie, AircraftStatus, AircraftMission*, Airfield*, AirspaceControl*, FlightPlan*, IndividualAircraftTasking, NavalFlightOperations, SortiePPR
- **Logistics**: Logistics*, Item*, ItemTracking, Equipment*
- **Personnel**: Crew*, Evac*, PersonnelRecovery*, PointOfContact
- **Admin**: DataLink* (tactical data links, not space data links), DiplomaticClearance*, Organization*, OperatingUnit*, GenText, Notification, RelatedDocument
- **Maritime**: AIS, Vessel, Port, NavigationalObstruction, Surface
- **CoT**: CotData, CotChatData, CotPositionData
- **Misc**: Entity, Location, Hazard, DataMode, DataOwner, ExportableEntities, Status, SubStatus, SofDataSourceRef, EffectRequest/Response, MonoRadar, PassiveRadarObservation, Navigation, OnboardNavigation

### UDL Branch Schema Changes to `schema/`

The `udl_schemas` branch also modifies existing schemas on `main`:

| Change | Details |
|--------|---------|
| **Added** | `SPW` (Space Weather) — new standard |
| **Removed** | `ACL`, `ATM`, `PLG`, `PLK`, `PUR`, `REV`, `STF`, `XTC` — marketplace/plugin/XTCE schemas removed |
| **Modified** | `EOO` (simplified), `RFM` (simplified), `REC` (updated union), most others (minor namespace changes) |

---

## Combined Summary — All New Standard Candidates

| Category | Count | IDs |
|----------|-------|-----|
| CCSDS Navigation (gaps) | 5 | ACM, AEM, APM, OPM, RDM |
| CCSDS Data Link | 5 | SPP, TMF, TCF, AOF, SDL |
| CCSDS File Delivery | 1 | CFP |
| CCSDS Space Link Extension | 3 | RAF, RCF, CLT |
| OrbPro2 Astrodynamics | 5 | AST, GRV, PCF, STV, CRD |
| OrbPro2 Sensor & Tracking | 5 | SNR, TRK, EWR, COM, SON |
| OrbPro2 Environment & Physics | 4 | ENV, TRN, PHY, TME |
| OrbPro2 Vehicle Platforms | 4 | ACR, HEL, NAV, GVH |
| OrbPro2 Weapons & Effects | 6 | MSL, WPN, BAL, ARM, FCS, DMG |
| UDL Space Core | ~15 | SPW, ATD, OOB, OOE, OBD, MNV, OOI, LND, LNE, GEO, DFH, GNO, SEO, SOI, RDO, RFO |
| UDL Sensor/Comms | ~10 | CMS, BEM, RFE, RFB, LKS, TRK, SAR, IRO, SWR, SKI |
| UDL Other | ~10 | STR, ION, MTI, WTH, DOA, BUS, MNF, OBT, SEN, MST |
| **Total** | **~73** | |

### HIGH Priority Recommendations (pull first)

1. **SPW** — Already implemented on the branch, ready to merge
2. **ATD** — Attitude data fills a critical CCSDS gap (AEM/APM equivalent)
3. **OBD** — Orbit determination results (essential for SSA)
4. **MNV** — Maneuver detection/confirmation (critical for SDA)
5. **OOI** — Object of interest tasking (SDA workflow)
6. **LND/LNE** — Launch detection/events (situational awareness)
7. **GEO** — GEO belt status (high operational value)
8. **GNO** — GNSS observations (widely used)
9. **SEO** — Space environment observations (radiation, particles)
10. **SOI** — Space object identification observations
11. **RDO/RFO** — Radar and RF observations (sensor data exchange)
12. **CMS** — Comms payload characterization
13. **TRK** — General object tracking
14. **OOB/OOE** — On-orbit object details and events

---

## Notes

- All CCSDS-sourced standards have established blue book references and should be high priority.
- OrbPro2 domain schemas use cache-aligned binary structs (64/128/256 bytes); adapting to FlatBuffers tables for spacedatastandards.org would follow existing patterns.
- Some existing standards overlap partially (e.g., `ATM` covers atmosphere model names, `ENV` would cover full atmospheric state data; `TIM` covers time system enums, `TME` would cover full time conversion data).
- The `Common.fbs` shared types (Vec3d, Quatd, Mat3d, EntityId, etc.) from OrbPro2 could inform a shared common types standard, but may overlap with existing field conventions.
- UDL schemas include rich field documentation, classification markings, and data provenance — these patterns should be adopted.
- The UDL branch removes marketplace schemas (ACL, PLG, PLK, PUR, REV, STF) and XTC — this should be a deliberate decision about scope.
