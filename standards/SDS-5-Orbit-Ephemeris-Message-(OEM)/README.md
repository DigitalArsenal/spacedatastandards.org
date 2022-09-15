## Space Data Standard - 5 - Orbit Ephemeris Message (OEM)

## Description

Orbit information may be exchanged between two participants by sending an
ephemeris in the form of a series of state vectors (Cartesian vectors providing position and
velocity, and optionally accelerations) using an Orbit Ephemeris Message (OEM). The
message recipient must have a means of interpolating across these state vectors to obtain the
state at an arbitrary time contained within the span of the ephemeris.

CCSDS Reference documentation: [502x0b2c1e2](https://public.ccsds.org/Pubs/502x0b2c1e2.pdf).

## Format

|Predicate |Description |
---|---|
COMMENT|Plain-Text Comment|
OBJECT\_NAME|Satellite Name(s)|
OBJECT\_ID|International Designator (YYYY-NNNAAA)|
CENTER\_NAME|Origin of reference frame (EARTH, MARS, MOON, etc.)|
REF\_FRAME|Name of the reference frame (TEME, EME2000, etc.)|
REF\_FRAME\_EPOCH|Epoch of reference frame, if not intrinsic to the definition of the reference frame|
TIME\_SYSTEM|Time system used for the orbit state and covariance matrix. (UTC)|
START_TIME|Start of TOTAL time span covered by ephemeris data and covariance data ((ISO 8601))|
USEABLE_START_TIME|Optional start USEABLE time span covered by ephemeris data ((ISO 8601))|
USEABLE_STOP_TIME|Optional end of USEABLE time span covered by ephemeris data ((ISO 8601))|
STOP_TIME|End of TOTAL time span covered by ephemeris data and covariance data ((ISO 8601))|
INTERPOLATION|Recommended interpolation method for ephemeris data (Hermite, Linear, Lagrange, etc.)|
INTERPOLATION_DEGREE|Recommended interpolation degree for ephemeris data|
EPHEMERIS DATA LINES|Each set of ephemeris data, including the time tag, must be provided on a single line. Fields described below|
COVARIANCE MATRIX LINES|A single covariance matrix data section may optionally follow each ephemeris data block. Fields described below|

### EPHEMERIS DATA LINES

|Predicate |Description |
---|---|
EPOCH|Epoch of state vector (ISO 8601)|
X|Position vector X-component km
Y|Position vector Y-component km
Z|Position vector Z-component km
X\_DOT|Velocity vector X-component km/s
Y\_DOT|Velocity vector Y-component km/s
Z\_DOT|Velocity vector Z-component km/s
X\_DDOT|Acceleration vector X-component (optional) km/s/s
Y\_DDOT|Acceleration vector Y-component (optional) km/s/s
Z\_DDOT|Acceleration vector Z-component (optional) km/s/s

### COVARIANCE MATRIX LINES

|Predicate |Description |
---|---|
COV\_REF\_FRAME|Reference frame for the covariance matrix (may be omitted if it is the same as the metadata REF\_FRAME)|
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
