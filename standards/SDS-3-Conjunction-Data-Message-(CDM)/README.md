## Space Data Standard - 3 - Conjunction Data Message (CDM)


## Description

The Conjunction Data Message (CDM) specifies a standard message format for use in exchanging spacecraft conjunction information between originators of Conjunction Assessments (CAs) and satellite owner/operators and other authorized parties. Such exchanges are used to inform satellite owner/operators of conjunctions between objects in space to enable consistent warning by different organizations employing diverse CA techniques. 

## Format

### CDM

| Predicate Name        | Description  |
| ------------- |:-------------|
| CCSDS\_CDM\_VERS      | The version of the CCSDS CDM standard used |
| CREATION\_DATE | The date the CDM message was created |
| ORIGINATOR | The originator of the CDM message |
| MESSAGE\_FOR | The intended recipient of the CDM message |
| MESSAGE\_ID | A unique identifier for the CDM message |
| TCA | Time of closest approach |
| MISS\_DISTANCE | The miss distance between the two objects |
| RELATIVE\_SPEED | The relative speed between the two objects |
| RELATIVE\_POSITION\_R | The relative position R component |
| RELATIVE\_POSITION\_T | The relative position T component |
| RELATIVE\_POSITION\_N | The relative position N component |
| RELATIVE\_VELOCITY\_R | The relative velocity R component |
| RELATIVE\_VELOCITY\_T | The relative velocity T component |
| RELATIVE\_VELOCITY\_N | The relative velocity N component |
| START\_SCREEN\_PERIOD | The start time of the screening period |
| STOP\_SCREEN\_PERIOD | The end time of the screening period |
| SCREEN\_VOLUME\_FRAME | The reference frame for the screening volume |
| SCREEN\_VOLUME\_SHAPE | The shape of the screening volume |
| SCREEN\_VOLUME\_X | The X dimension of the screening volume |
| SCREEN\_VOLUME\_Y | The Y dimension of the screening volume |
| SCREEN\_VOLUME\_Z | The Z dimension of the screening volume |
| SCREEN\_ENTRY\_TIME | The time the objects entered the screening volume |
| SCREEN\_EXIT\_TIME | The time the objects exited the screening volume |
| COLLISION\_PROBABILITY | The probability of collision between the two objects |
| COLLISION\_PROBABILITY\_METHOD | The method used to calculate the collision probability |
| OBJECT1 | The first object in the CDM message |
| OBJECT2 | The second object in the CDM message |


### CDMOBJECT

| Predicate Name | Description |
|---|---|
| COMMENT | A string value for a comment |
| OBJECT | An enumerated value for the object number |
| OBJECT\_DESIGNATOR | A string value for the object designator |
| CATALOG\_NAME | A string value for the catalog name |
| OBJECT\_NAME | A string value for the object name |
| INTERNATIONAL\_DESIGNATOR | A string value for the international designator |
| OBJECT\_TYPE | An enumerated value for the object type |
| OPERATOR\_CONTACT\_POSITION | A string value for the operator contact position |
| OPERATOR\_ORGANIZATION | A string value for the operator organization |
| EPHEMERIS\_NAME | A string value for the ephemeris name |
| COVARIANCE\_METHOD | An enumerated value for the covariance method |
| MANEUVERABLE | An enumerated value for the maneuverable type |
| ORBIT\_CENTER | A string value for the orbit center |
| REF\_FRAME | An enumerated value for the reference frame |
| GRAVITY\_MODEL | A string value for the gravity model |
| ATMOSPHERIC\_MODEL | A string value for the atmospheric model |
| N\_BODY\_PERTURBATIONS | A string value for the n-body perturbations |
| SOLAR\_RAD\_PRESSURE | A boolean value for solar radiation pressure |
| EARTH\_TIDES | A boolean value for earth tides |
| INTRACK\_THRUST | A boolean value for intrack thrust |
| TIME\_LASTOB\_START | A string value for the time of last observation start |
| TIME\_LASTOB\_END | A string value for the time of last observation end |
| RECOMMENDED\_OD\_SPAN | A double value for the recommended observation data span |
| ACTUAL\_OD\_SPAN | A double value for the actual observation data span |
| OBS\_AVAILABLE | An unsigned integer value for the number of observations available |
| OBS\_USED | An unsigned integer value for the number of observations used |
| TRACKS\_AVAILABLE | An unsigned integer value for the number of tracks available |
| TRACKS\_USED | An unsigned integer value for the number of tracks used |
| RESIDUALS\_ACCEPTED | A double value for the residuals accepted |
| WEIGHTED\_RMS | A double value for the weighted root mean square |
| AREA\_PC | A double value for the area of the object |
| AREA\_DRG | A double value for the area of the object drag |
| AREA\_SRP | A double value for the area of the object solar radiation pressure |
| MASS | A double value for the mass of the object |
| CR\_AREA\_OVER\_MASS | A double value for the object's area-to-mass ratio |
| THRUST\_ACCELERATION | A double value for the object's thrust acceleration |
| SEDR | A double value for the object's solar flux |
| X | A double value for the X-coordinate of the object's position in RTN coordinates |
| Y | A double value for the Y-coordinate of the object's position in RTN |
| Z | A double value for the Z-coordinate of the object's position in RTN |
| X\_DOT | A double value for the X-coordinate of the object's position in RTN coordinates |
| Y\_DOT | A double value for the Y-coordinate of the object's position in RTN |
| Z\_DOT | A double value for the Z-coordinate of the object's position in RTN |