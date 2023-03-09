## Space Data Standard - 6 - Minimum-Propagatable-Element-Set-(MPE)

## Description

Truncated version of the Orbit Mean-Elements Message (OMM). Includes only the Mean Elements required to propagate an orbit. Legacy format description can be found [here](https://github.com/DigitalArsenal/spacedatastandards.org/blob/main/survey/legacy-messages/tle/README.md). CCSDS Reference documentation: [502x0b2c1e2](https://public.ccsds.org/Pubs/502x0b2c1e2.pdf).

## Format

| Predicate         | Description                                               |
| ----------------- | --------------------------------------------------------- |
| ENTITY_ID         | Unique ID as a String                                     |
| EPOCH             | Epoch of Mean Keplerian elements. (UNIX TimeStamp)        |
| MEAN_MOTION       | Semi-major axis in km or mean motion in rev/day           |
| ECCENTRICITY      | Eccentricity                                              |
| INCLINATION       | Inclination                                               |
| RA_OF_ASC_NODE    | Right ascension of ascending node                         |
| ARG_OF_PERICENTER | Argument of pericenter                                    |
| MEAN_ANOMALY      | Mean anomaly                                              |
| BSTAR             | SGP/SGP4 drag-like coefficient (in units 1/[Earth radii]) |

## Collection Attributes

| Predicate           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| CLASSIFICATION_TYPE | Default value = U                                                 |
| REF_FRAME           | Name of the reference frame (TEME, EME2000, etc.)                 |
| REF_FRAME_EPOCH     | Epoch of the Reference Frame. (UNIX TimeStamp)                    |
| TIME_SYSTEM         | Time system used for the orbit state and covariance matrix. (UTC) |
| MEAN_ELEMENT_THEORY | Description of the Mean Element Theory. (SGP4,DSST,USM)           |
