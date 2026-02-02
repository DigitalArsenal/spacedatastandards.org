# Tasks: New Standards Discovery from OrbPro2-ModSim

## Objective
Review the `../OrbPro2-ModSim` packages (especially `space-data-parsers`) to identify data formats, schemas, and domain concepts that could become new standards on spacedatastandards.org. Document all findings in `.claude/new_standards.md`.

## Existing Standards (already in schema/)
ACL, ATM, BOV, CAT, CDM, CRM, CSM, CTR, EME, EOO, EOP, EPM, HYP, IDM, LCC, LDM, MET, MPE, OCM, OEM, OMM, OSM, PLD, PLG, PLK, PNM, PRG, PUR, REC, REV, RFM, ROC, SCM, SIT, STF, TDM, TIM, VCM, XTC

## Tasks

- [x] **Audit CCSDS Navigation parsers** — Compare OPM, OEM, OMM, CDM, TDM, AEM, OCM against existing schemas. Identify gaps (e.g., AEM attitude ephemeris is not in schema/ yet).

- [x] **Audit CCSDS Datalink parsers** — Review TM Frame, TC Frame, AOS Frame, SDLS parsers for potential new standards (none of these appear in existing schemas).

- [x] **Audit CFDP parsers** — Review CCSDS File Delivery Protocol PDU types (Metadata PDU, File Data PDU) as potential standards.

- [x] **Audit SLE parsers** — Review Space Link Extension (RAF, RCF, CLTU, BER codec) for potential standards.

- [x] **Audit XTCE parser** — Review XML Telemetry & Command Exchange format for standardization.

- [x] **Review OrbPro2 domain schemas** — Examine FlatBuffers schemas in `schemas/orbpro2/` for new standards candidates: Astrodynamics, Aircraft, Helicopter, Naval, Missile, Ballistics, Sensor, Atmosphere, Gravity, Physics, Coordinates, Terrain, Weapon, Armor, FireControl, DamageModel, ElectronicWarfare, Communications, Sonar, Tracking, GroundVehicle, PropagatorConfig.

- [x] **Review plugin-specific data models** — Check the 34 plugins for data structures not covered by existing schemas (attitude, power/thermal, EW, comms, ground segment, SDA, satellite reconnaissance, sonar, threat model, tracking).

- [x] **Compile findings into `.claude/new_standards.md`** — Document each candidate standard with: name, source, CCSDS blue book reference (if applicable), description, and priority.
