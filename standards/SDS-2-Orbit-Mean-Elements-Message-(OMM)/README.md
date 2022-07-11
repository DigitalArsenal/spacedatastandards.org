## Space Data Standard - 2 - Orbit Mean Elements Message (OMM)

## Description

Orbit information may be exchanged between two participants by sending an orbital
state based on mean Keplerian elements for a specified epoch using an
Orbit Mean-Elements Message (OMM). The message recipient must use appropriate orbit
propagator algorithms in order to correctly propagate the OMM state to compute the orbit at
other desired epochs. 

Legacy format description can be found [here](https://github.com/DigitalArsenal/spacedatastandards.org/blob/main/survey/legacy-messages/tle/README.md).

CCSDS Reference documentation: [502x0b2c1e2](https://public.ccsds.org/Pubs/502x0b2c1e2.pdf).

## Format

|Predicate |Description |
---|---|
OBJECT\_NAME|Satellite Name(s)|
OBJECT\_ID|International Designator (YYYY-NNNAAA)|
CENTER\_NAME|Origin of reference frame (EARTH, MARS, MOON, etc.)|
REF\_FRAME|Name of the reference frame (TEME, EME2000, etc.)|
TIME\_SYSTEM|Time system used for the orbit state and covariance matrix. (UTC)|
MEAN\_ELEMENT\_THEORY|Description of the Mean Element Theory. (SGP4,DSST,USM)|
COMMENT|Plain-Text Comment|
EPOCH|Epoch of Mean Keplerian elements. (ISO 8601)|
SEMI\_MAJOR\_AXIS or MEAN\_MOTION|Semi-major axis in km or mean motion in rev/day|
ECCENTRICITY|Eccentricity|
INCLINATION|Inclination|
RA\_OF\_ASC\_NODE|Right ascension of ascending node|
ARG\_OF\_PERICENTER|Argument of pericenter|
MEAN\_ANOMALY|Mean anomaly|
GM|Gravitational Coefficient (Gravitational Constant x Central Mass)|
MASS|S/C Mass|
SOLAR\_RAD\_AREA|Solar Radiation Pressure Area (AR) m\*\*2|
SOLAR\_RAD\_COEFF|Solar Radiation Pressure Coefficient (CR)|
DRAG\_AREA|Drag Area (AD) m\*\*2|
DRAG\_COEFF|Drag Coefficient (CD)|
EPHEMERIS\_TYPE|Default value = 0|
CLASSIFICATION\_TYPE|Default value = U|
NORAD\_CAT\_ID|NORAD Catalog Number (Satellite Number) an integer|
ELEMENT\_SET\_NO|Element set number for this satellite|
REV\_AT\_EPOCH|Revolution Number|
BSTAR|SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])|
MEAN\_MOTION\_DOT|First Time Derivative of the Mean Motion|
MEAN\_MOTION\_DDOT|Second Time Derivative of Mean Motion|
COV\_REF\_FRAME|may be omitted if it is the same as the metadata REF\_FRAME|
COV\_REF\_FRAME|Reference frame for the covariance matrix|
CX\_X|Covariance matrix [1,1] km\*\*2|
CY\_X|Covariance matrix [2,1] km\*\*2|
CY\_Y|Covariance matrix [2,2] km\*\*2|
CZ\_X|Covariance matrix [3,1] km\*\*2|
CZ\_Y|Covariance matrix [3,2] km\*\*2|
CZ\_Z|Covariance matrix [3,3] km\*\*2|
CX\_DOT\_X|Covariance matrix [4,1] km\*\*2/s|
CX\_DOT\_Y|Covariance matrix [4,2] km\*\*2/s|
CX\_DOT\_Z|Covariance matrix [4,3] km\*\*2/s|
CX\_DOT\_X\_DOT|Covariance matrix [4,4] km\*\*2/s\*\*2|
CY\_DOT\_X|Covariance matrix [5,1] km\*\*2/s|
CY\_DOT\_Y|Covariance matrix [5,2] km\*\*2/s|
CY\_DOT\_Z|Covariance matrix [5,3] km\*\*2/s|
CY\_DOT\_X\_DOT|Covariance matrix [5,4] km\*\*2/s\*\*2|
CY\_DOT\_Y\_DOT|Covariance matrix [5,5] km\*\*2/s\*\*2|
CZ\_DOT\_X|Covariance matrix [6,1] km\*\*2/s|
CZ\_DOT\_Y|Covariance matrix [6,2] km\*\*2/s|
CZ\_DOT\_Z|Covariance matrix [6,3] km\*\*2/s|
CZ\_DOT\_X\_DOT|Covariance matrix [6,4] km\*\*2/s\*\*2|
CZ\_DOT\_Y\_DOT|Covariance matrix [6,5] km\*\*2/s\*\*2|
CZ\_DOT\_Z\_DOT|Covariance matrix [6,6] km\*\*2/s\*\*2|
USER\_DEFINED\_x|User defined parameter, where "x" is replaced by a variable. Must be described in an ICD.|
