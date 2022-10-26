## Space Data Standard - 1 - Satellite Catalog Message (CAT)


## Description

The CAT describes metadata about space objects independent of positional data. The message fields are derived from the Satellite Catalog (SATCAT/SATC) message currently produced by the Space Defense Operations Center (SPADOC) system and used as the basis of satellite catalog databases within the United States Government.  Legacy format description can be found [here](https://github.com/DigitalArsenal/spacedatastandards.org/blob/main/survey/legacy-messages/satcat/README.md).

## Format

|Predicate |Description |
---|---|
OBJECT_NAME|Satellite Name(s)|
OBJECT_ID|International Designator (YYYY-NNNAAA)|
NORAD\_CAT\_ID|NORAD Catalog Number|
OBJECT_TYPE|Object type (Payload, Rocket body, Debris, Unknown)|
OPS\_STATUS\_CODE|Operational Status Code|
OWNER|Ownership, typically country or company|
LAUNCH_DATE|Launch Date [year-month-day] (ISO 8601)|
LAUNCH_SITE|Launch Site|
DECAY_DATE|Decay Date, if applicable [year-month-day] (ISO 8601)|
PERIOD|Orbital period [minutes]|
INCLINATION|Inclination [degrees]|
APOGEE|Apogee Altitude [kilometers]|
PERIGEE|Perigee Altitude [kilometers]|
RCS|Radar Cross Section [meters2]; blank if no data available|
DATA\_STATUS\_CODE|Data status code; blank otherwise|
ORBIT_CENTER|Orbit center|
ORBIT_TYPE|	Orbit type (Orbit, Landing, Impact, Docked to RSO, roundtrip)

