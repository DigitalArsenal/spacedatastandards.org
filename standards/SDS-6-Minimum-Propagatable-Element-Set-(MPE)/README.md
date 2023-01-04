## Space Data Standard - 6 - Minimum-Propagatable-Element-Set-(MPE)

## Description

Truncated version of the Orbit Mean-Elements Message (OMM).  Includes only the Mean Elements required to propagate an orbit.  Legacy format description can be found [here](https://github.com/DigitalArsenal/spacedatastandards.org/blob/main/survey/legacy-messages/tle/README.md).  CCSDS Reference documentation: [502x0b2c1e2](https://public.ccsds.org/Pubs/502x0b2c1e2.pdf).

## Format

|Predicate |Description |
---|---|
OBJECT\_ID|International Designator (YYYY-NNNAAA)|
USER\_DEFINED\_EPOCH\_TIMESTAMP|Epoch of Mean Keplerian elements. (UNIX TimeStamp)|
MEAN\_MOTION|Semi-major axis in km or mean motion in rev/day|
ECCENTRICITY|Eccentricity|
INCLINATION|Inclination|
RA\_OF\_ASC\_NODE|Right ascension of ascending node|
ARG\_OF\_PERICENTER|Argument of pericenter|
MEAN\_ANOMALY|Mean anomaly|
BSTAR|SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])|

## Collection Attributes

|Predicate |Description |
---|---|
CLASSIFICATION\_TYPE|Default value = U|
REF\_FRAME|Name of the reference frame (TEME, EME2000, etc.)|
REF\_FRAME\_EPOCH|Epoch of the Reference Frame. (UNIX TimeStamp)|
TIME\_SYSTEM|Time system used for the orbit state and covariance matrix. (UTC)|
MEAN\_ELEMENT\_THEORY|Description of the Mean Element Theory. (SGP4,DSST,USM)|
