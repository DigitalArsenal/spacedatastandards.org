## Space Data Standard - 4 - Orbit Parameter Message (OPM)

## Description

Orbit information may be exchanged between two participants by sending a state
vector for a specified epoch using an Orbit Parameter Message (OPM).
The message recipient must have an orbit propagator available that is able to propagate the
OPM state vector to compute the orbit at other desired epochs. For this propagation,
additional ancillary information (spacecraft properties such as mass, area, and maneuver
planning data, if applicable) may be included with the message.

CCSDS Reference documentation: [502x0b2c1e2](https://public.ccsds.org/Pubs/502x0b2c1e2.pdf).

## Format

|Predicate |Description |
---|---|
OBJECT\_NAME|Satellite Name(s)|
OBJECT\_ID|International Designator (YYYY-NNNAAA)|
CENTER\_NAME|Origin of reference frame (EARTH, MARS, MOON, etc.)|
REF\_FRAME|Name of the reference frame (TEME, EME2000, etc.)|
REF\_FRAME\_EPOCH|Epoch of reference frame, if not intrinsic to the definition of the reference frame|
TIME\_SYSTEM|Time system used for the orbit state and covariance matrix. (UTC)|
COMMENT|Plain-Text Comment|
EPOCH|Epoch of state vector & optional Keplerian elements (ISO 8601)|
X|Position vector X-component km
Y|Position vector Y-component km
Z|Position vector Z-component km
X\_DOT|Velocity vector X-component km/s
Y\_DOT|Velocity vector Y-component km/s
Z\_DOT| Velocity vector Z-component km/s
SEMI\_MAJOR\_AXIS|Semi-major axis km|
ECCENTRICITY|Eccentricity|
INCLINATION|Inclination deg|
RA\_OF\_ASC\_NODE|Right ascension of ascending node deg|
ARG\_OF\_PERICENTER|Argument of pericenter deg|
TRUE\_ANOMALY or MEAN\_ANOMALY|True anomaly or mean anomaly deg|
GM|Gravitational Coefficient (Gravitational Constant x Central Mass) km\*\*3/s\*\*2|
MASS|S/C Mass kg|
SOLAR\_RAD\_AREA|Solar Radiation Pressure Area (AR) m\*\*2|
SOLAR\_RAD\_COEFF|Solar Radiation Pressure Coefficient (CR)|
DRAG\_AREA|Drag Area (AD) m\*\*2|
DRAG\_COEFF|Drag Coefficient (CD)|
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
MAN_EPOCH_IGNITION| Epoch of ignition (ISO 8601)|
MAN_DURATION|Maneuver duration (If = 0, impulsive maneuver) s|
MAN_DELTA_MASS|Mass change during maneuver (value is < 0) kg|
MAN_REF_FRAME|Coordinate system for velocity increment vector|
MAN_DV_1|1st component of the velocity increment km/s|
MAN_DV_2|2nd component of the velocity increment km/s|
MAN_DV_3|3rd component of the velocity increment km/s|
USER\_DEFINED\_x|User defined parameter, where "x" is replaced by a variable. Must be described in an ICD.|
