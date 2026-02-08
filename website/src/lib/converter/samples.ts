export interface Sample {
  label: string;
  type: string;
  format: 'kvn' | 'xml' | 'json';
  content: string;
}

export const samples: Sample[] = [
  {
    label: "OMM KVN (ISS)",
    type: "OMM",
    format: "kvn",
    content: `CCSDS_OMM_VERS = 2.0

CREATION_DATE = 2007-065T16:00:00
ORIGINATOR = NORAD

META_START
OBJECT_NAME = ISS (ZARYA)
OBJECT_ID = 1998-067A
CENTER_NAME = EARTH
REF_FRAME = TEME
TIME_SYSTEM = UTC
MEAN_ELEMENT_THEORY = SGP4
META_STOP

EPOCH = 2007-064T10:34:41.4264
MEAN_MOTION = 15.72125391 [rev/day]
ECCENTRICITY = 0.0006703
INCLINATION = 51.6416 [deg]
RA_OF_ASC_NODE = 247.4627 [deg]
ARG_OF_PERICENTER = 130.5360 [deg]
MEAN_ANOMALY = 325.0288 [deg]
GM = 398600.4418 [km**3/s**2]

EPHEMERIS_TYPE = 0
CLASSIFICATION_TYPE = U
NORAD_CAT_ID = 25544
ELEMENT_SET_NO = 925
REV_AT_EPOCH = 48170
BSTAR = 0.000020128 [1/ER]
MEAN_MOTION_DOT = -0.00002182 [rev/day**2]
MEAN_MOTION_DDOT = 0.00000000 [rev/day**3]
`
  },
  {
    label: "OMM XML (ISS)",
    type: "OMM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<omm xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_OMM_VERS" version="2.0">
  <header>
    <CREATION_DATE>2007-065T16:00:00</CREATION_DATE>
    <ORIGINATOR>NORAD</ORIGINATOR>
  </header>
  <body>
    <segment>
      <metadata>
        <OBJECT_NAME>ISS (ZARYA)</OBJECT_NAME>
        <OBJECT_ID>1998-067A</OBJECT_ID>
        <CENTER_NAME>EARTH</CENTER_NAME>
        <REF_FRAME>TEME</REF_FRAME>
        <TIME_SYSTEM>UTC</TIME_SYSTEM>
        <MEAN_ELEMENT_THEORY>SGP4</MEAN_ELEMENT_THEORY>
      </metadata>
      <data>
        <meanElements>
          <EPOCH>2007-064T10:34:41.4264</EPOCH>
          <MEAN_MOTION>15.72125391</MEAN_MOTION>
          <ECCENTRICITY>.0006703</ECCENTRICITY>
          <INCLINATION>51.6416</INCLINATION>
          <RA_OF_ASC_NODE>247.4627</RA_OF_ASC_NODE>
          <ARG_OF_PERICENTER>130.5360</ARG_OF_PERICENTER>
          <MEAN_ANOMALY>325.0288</MEAN_ANOMALY>
          <GM>398600.4418</GM>
        </meanElements>
        <tleParameters>
          <EPHEMERIS_TYPE>0</EPHEMERIS_TYPE>
          <CLASSIFICATION_TYPE>U</CLASSIFICATION_TYPE>
          <NORAD_CAT_ID>25544</NORAD_CAT_ID>
          <ELEMENT_SET_NO>925</ELEMENT_SET_NO>
          <REV_AT_EPOCH>48170</REV_AT_EPOCH>
          <BSTAR>.000020128</BSTAR>
          <MEAN_MOTION_DOT>-.00002182</MEAN_MOTION_DOT>
          <MEAN_MOTION_DDOT>0</MEAN_MOTION_DDOT>
        </tleParameters>
      </data>
    </segment>
  </body>
</omm>`
  },
  {
    label: "OEM KVN (Mars Global Surveyor)",
    type: "OEM",
    format: "kvn",
    content: `CCSDS_OEM_VERS = 2.0

CREATION_DATE = 2004-281T17:17:00
ORIGINATOR = NASA/JPL

META_START
OBJECT_NAME = MARS GLOBAL SURVEYOR
OBJECT_ID = 2001-006A
CENTER_NAME = MARS BARYCENTER
REF_FRAME = EME2000
TIME_SYSTEM = UTC
START_TIME = 2002-12-18T12:00:00.331
USEABLE_START_TIME = 2002-12-18T12:10:00.331
USEABLE_STOP_TIME = 2002-12-28T21:23:00.331
STOP_TIME = 2002-12-28T21:28:00.331
INTERPOLATION = HERMITE
INTERPOLATION_DEGREE = 7
META_STOP

2002-12-18T12:00:00.331 2789.619 -280.045 -1746.755 4.73372 -7.80783 -1.24313
2002-12-18T12:01:00.331 2783.419 -308.143 -1877.071 5.18604 -7.64279 -0.44066
2002-12-18T12:02:00.331 2776.033 -336.859 -2008.299 5.63678 -7.45775 0.37274
`
  },
  {
    label: "OEM XML (Mars Global Surveyor)",
    type: "OEM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<oem xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_OEM_VERS" version="2.0">
  <header>
    <CREATION_DATE>2004-281T17:17:00</CREATION_DATE>
    <ORIGINATOR>NASA/JPL</ORIGINATOR>
  </header>
  <body>
    <segment>
      <metadata>
        <OBJECT_NAME>MARS GLOBAL SURVEYOR</OBJECT_NAME>
        <OBJECT_ID>2001-006A</OBJECT_ID>
        <CENTER_NAME>MARS BARYCENTER</CENTER_NAME>
        <REF_FRAME>EME2000</REF_FRAME>
        <TIME_SYSTEM>UTC</TIME_SYSTEM>
        <START_TIME>2002-12-18T12:00:00.331</START_TIME>
        <USEABLE_START_TIME>2002-12-18T12:10:00.331</USEABLE_START_TIME>
        <USEABLE_STOP_TIME>2002-12-28T21:23:00.331</USEABLE_STOP_TIME>
        <STOP_TIME>2002-12-28T21:28:00.331</STOP_TIME>
        <INTERPOLATION>HERMITE</INTERPOLATION>
        <INTERPOLATION_DEGREE>7</INTERPOLATION_DEGREE>
      </metadata>
      <data>
        <stateVector>
          <EPOCH>2002-12-18T12:00:00.331</EPOCH>
          <X>2789.619</X>
          <Y>-280.045</Y>
          <Z>-1746.755</Z>
          <X_DOT>4.73372</X_DOT>
          <Y_DOT>-7.80783</Y_DOT>
          <Z_DOT>-1.24313</Z_DOT>
        </stateVector>
        <stateVector>
          <EPOCH>2002-12-18T12:01:00.331</EPOCH>
          <X>2783.419</X>
          <Y>-308.143</Y>
          <Z>-1877.071</Z>
          <X_DOT>5.18604</X_DOT>
          <Y_DOT>-7.64279</Y_DOT>
          <Z_DOT>-0.44066</Z_DOT>
        </stateVector>
        <stateVector>
          <EPOCH>2002-12-18T12:02:00.331</EPOCH>
          <X>2776.033</X>
          <Y>-336.859</Y>
          <Z>-2008.299</Z>
          <X_DOT>5.63678</X_DOT>
          <Y_DOT>-7.45775</Y_DOT>
          <Z_DOT>0.37274</Z_DOT>
        </stateVector>
      </data>
    </segment>
  </body>
</oem>`
  },
  {
    label: "CDM KVN (Conjunction)",
    type: "CDM",
    format: "kvn",
    content: `CCSDS_CDM_VERS = 1.0

CREATION_DATE = 2010-03-12T22:31:12.000
ORIGINATOR = JSPOC
MESSAGE_FOR = SATELLITE A
MESSAGE_ID = 201113719185

COMMENT HBR

TCA = 2010-03-13T22:37:52.618
MISS_DISTANCE = 715 [m]
RELATIVE_SPEED = 14762 [m/s]
RELATIVE_POSITION_R = 27.4 [m]
RELATIVE_POSITION_T = -70.2 [m]
RELATIVE_POSITION_N = 711.8 [m]
RELATIVE_VELOCITY_R = -7.2 [m/s]
RELATIVE_VELOCITY_T = -14760.0 [m/s]
RELATIVE_VELOCITY_N = 24.6 [m/s]
START_SCREEN_PERIOD = 2010-03-12T18:29:32.212
STOP_SCREEN_PERIOD = 2010-03-15T18:29:32.212
COLLISION_PROBABILITY = 4.835E-05
COLLISION_PROBABILITY_METHOD = FOSTER-1992

OBJECT = OBJECT1
OBJECT_DESIGNATOR = 12345
CATALOG_NAME = SATCAT
OBJECT_NAME = SATELLITE A
INTERNATIONAL_DESIGNATOR = 1997-009A
OBJECT_TYPE = PAYLOAD
OPERATOR_CONTACT_POSITION = OSA
OPERATOR_ORGANIZATION = EUMETSAT
EPHEMERIS_NAME = EPHEMERIS_SAT_A
COVARIANCE_METHOD = CALCULATED
MANEUVERABLE = YES
REF_FRAME = EME2000
GRAVITY_MODEL = EGM-96: 36D 36O
ATMOSPHERIC_MODEL = JBH09
N_BODY_PERTURBATIONS = MOON,SUN
SOLAR_RAD_PRESSURE = YES
EARTH_TIDES = YES
INTRACK_THRUST = NO
OBS_AVAILABLE = 183
OBS_USED = 183
WEIGHTED_RMS = 0.864
X = 2570.097065 [km]
Y = 2244.654904 [km]
Z = 6281.497978 [km]
X_DOT = 4.418769571 [km/s]
Y_DOT = 4.833547743 [km/s]
Z_DOT = -3.526774384 [km/s]
CR_R = 4.142E+01
CT_R = -8.579E+00
CT_T = 2.533E+03
CN_R = -2.313E+01
CN_T = 1.336E+01
CN_N = 7.098E+01

OBJECT = OBJECT2
OBJECT_DESIGNATOR = 30337
CATALOG_NAME = SATCAT
OBJECT_NAME = DEBRIS B
INTERNATIONAL_DESIGNATOR = 1999-024B
OBJECT_TYPE = DEBRIS
EPHEMERIS_NAME = EPHEMERIS_DEB_B
COVARIANCE_METHOD = CALCULATED
MANEUVERABLE = NO
REF_FRAME = EME2000
X = 2569.540800 [km]
Y = 2245.093614 [km]
Z = 6281.599946 [km]
X_DOT = -2.888612500 [km/s]
Y_DOT = -6.007289930 [km/s]
Z_DOT = 3.328894050 [km/s]
CR_R = 1.337E+03
CT_R = -4.806E+04
CT_T = 2.492E+06
CN_R = -3.298E+01
CN_T = -7.5888E+02
CN_N = 7.105E+01
`
  },
  {
    label: "CDM XML (Conjunction)",
    type: "CDM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<cdm xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_CDM_VERS" version="1.0">
  <header>
    <CREATION_DATE>2010-03-12T22:31:12.000</CREATION_DATE>
    <ORIGINATOR>JSPOC</ORIGINATOR>
    <MESSAGE_FOR>SATELLITE A</MESSAGE_FOR>
    <MESSAGE_ID>201113719185</MESSAGE_ID>
  </header>
  <body>
    <relativeMetadataData>
      <TCA>2010-03-13T22:37:52.618</TCA>
      <MISS_DISTANCE units="m">715</MISS_DISTANCE>
      <RELATIVE_SPEED units="m/s">14762</RELATIVE_SPEED>
      <RELATIVE_POSITION_R units="m">27.4</RELATIVE_POSITION_R>
      <RELATIVE_POSITION_T units="m">-70.2</RELATIVE_POSITION_T>
      <RELATIVE_POSITION_N units="m">711.8</RELATIVE_POSITION_N>
      <RELATIVE_VELOCITY_R units="m/s">-7.2</RELATIVE_VELOCITY_R>
      <RELATIVE_VELOCITY_T units="m/s">-14760.0</RELATIVE_VELOCITY_T>
      <RELATIVE_VELOCITY_N units="m/s">24.6</RELATIVE_VELOCITY_N>
      <START_SCREEN_PERIOD>2010-03-12T18:29:32.212</START_SCREEN_PERIOD>
      <STOP_SCREEN_PERIOD>2010-03-15T18:29:32.212</STOP_SCREEN_PERIOD>
      <COLLISION_PROBABILITY>4.835E-05</COLLISION_PROBABILITY>
      <COLLISION_PROBABILITY_METHOD>FOSTER-1992</COLLISION_PROBABILITY_METHOD>
    </relativeMetadataData>
    <segment>
      <metadata>
        <OBJECT>OBJECT1</OBJECT>
        <OBJECT_DESIGNATOR>12345</OBJECT_DESIGNATOR>
        <CATALOG_NAME>SATCAT</CATALOG_NAME>
        <OBJECT_NAME>SATELLITE A</OBJECT_NAME>
        <INTERNATIONAL_DESIGNATOR>1997-009A</INTERNATIONAL_DESIGNATOR>
        <OBJECT_TYPE>PAYLOAD</OBJECT_TYPE>
        <EPHEMERIS_NAME>EPHEMERIS_SAT_A</EPHEMERIS_NAME>
        <COVARIANCE_METHOD>CALCULATED</COVARIANCE_METHOD>
        <MANEUVERABLE>YES</MANEUVERABLE>
        <REF_FRAME>EME2000</REF_FRAME>
      </metadata>
      <data>
        <stateVector>
          <X units="km">2570.097065</X>
          <Y units="km">2244.654904</Y>
          <Z units="km">6281.497978</Z>
          <X_DOT units="km/s">4.418769571</X_DOT>
          <Y_DOT units="km/s">4.833547743</Y_DOT>
          <Z_DOT units="km/s">-3.526774384</Z_DOT>
        </stateVector>
      </data>
    </segment>
    <segment>
      <metadata>
        <OBJECT>OBJECT2</OBJECT>
        <OBJECT_DESIGNATOR>30337</OBJECT_DESIGNATOR>
        <CATALOG_NAME>SATCAT</CATALOG_NAME>
        <OBJECT_NAME>DEBRIS B</OBJECT_NAME>
        <INTERNATIONAL_DESIGNATOR>1999-024B</INTERNATIONAL_DESIGNATOR>
        <OBJECT_TYPE>DEBRIS</OBJECT_TYPE>
        <EPHEMERIS_NAME>EPHEMERIS_DEB_B</EPHEMERIS_NAME>
        <COVARIANCE_METHOD>CALCULATED</COVARIANCE_METHOD>
        <MANEUVERABLE>NO</MANEUVERABLE>
        <REF_FRAME>EME2000</REF_FRAME>
      </metadata>
      <data>
        <stateVector>
          <X units="km">2569.540800</X>
          <Y units="km">2245.093614</Y>
          <Z units="km">6281.599946</Z>
          <X_DOT units="km/s">-2.888612500</X_DOT>
          <Y_DOT units="km/s">-6.007289930</Y_DOT>
          <Z_DOT units="km/s">3.328894050</Z_DOT>
        </stateVector>
      </data>
    </segment>
  </body>
</cdm>`
  },
  {
    label: "OPM KVN (GOES 9)",
    type: "OPM",
    format: "kvn",
    content: `CCSDS_OPM_VERS = 2.0

CREATION_DATE = 2007-065T16:00:00
ORIGINATOR = NASA/JPL

META_START
OBJECT_NAME = GOES 9
OBJECT_ID = 1995-025A
CENTER_NAME = EARTH
REF_FRAME = EME2000
TIME_SYSTEM = UTC
META_STOP

COMMENT Orbit state
EPOCH = 1998-12-18T14:28:15.1172
X = 6503.514000 [km]
Y = 1239.647000 [km]
Z = -717.490000 [km]
X_DOT = -0.873160 [km/s]
Y_DOT = 8.740420 [km/s]
Z_DOT = -4.191076 [km/s]

COMMENT Osculating Keplerian elements
SEMI_MAJOR_AXIS = 6730.963 [km]
ECCENTRICITY = 0.0012221
INCLINATION = 28.4700 [deg]
RA_OF_ASC_NODE = 140.4720 [deg]
ARG_OF_PERICENTER = 197.5290 [deg]
TRUE_ANOMALY = 253.4710 [deg]
GM = 398600.4418 [km**3/s**2]

COMMENT Spacecraft parameters
MASS = 1913.000 [kg]
SOLAR_RAD_AREA = 10.000 [m**2]
SOLAR_RAD_COEFF = 1.300
DRAG_AREA = 10.000 [m**2]
DRAG_COEFF = 2.200
`
  },
  {
    label: "OPM XML (GOES 9)",
    type: "OPM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<opm xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_OPM_VERS" version="2.0">
  <header>
    <CREATION_DATE>2007-065T16:00:00</CREATION_DATE>
    <ORIGINATOR>NASA/JPL</ORIGINATOR>
  </header>
  <body>
    <segment>
      <metadata>
        <OBJECT_NAME>GOES 9</OBJECT_NAME>
        <OBJECT_ID>1995-025A</OBJECT_ID>
        <CENTER_NAME>EARTH</CENTER_NAME>
        <REF_FRAME>EME2000</REF_FRAME>
        <TIME_SYSTEM>UTC</TIME_SYSTEM>
      </metadata>
      <data>
        <stateVector>
          <EPOCH>1998-12-18T14:28:15.1172</EPOCH>
          <X units="km">6503.514000</X>
          <Y units="km">1239.647000</Y>
          <Z units="km">-717.490000</Z>
          <X_DOT units="km/s">-0.873160</X_DOT>
          <Y_DOT units="km/s">8.740420</Y_DOT>
          <Z_DOT units="km/s">-4.191076</Z_DOT>
        </stateVector>
        <keplerianElements>
          <SEMI_MAJOR_AXIS units="km">6730.963</SEMI_MAJOR_AXIS>
          <ECCENTRICITY>0.0012221</ECCENTRICITY>
          <INCLINATION units="deg">28.4700</INCLINATION>
          <RA_OF_ASC_NODE units="deg">140.4720</RA_OF_ASC_NODE>
          <ARG_OF_PERICENTER units="deg">197.5290</ARG_OF_PERICENTER>
          <TRUE_ANOMALY units="deg">253.4710</TRUE_ANOMALY>
          <GM units="km**3/s**2">398600.4418</GM>
        </keplerianElements>
        <spacecraftParameters>
          <MASS units="kg">1913.000</MASS>
          <SOLAR_RAD_AREA units="m**2">10.000</SOLAR_RAD_AREA>
          <SOLAR_RAD_COEFF>1.300</SOLAR_RAD_COEFF>
          <DRAG_AREA units="m**2">10.000</DRAG_AREA>
          <DRAG_COEFF>2.200</DRAG_COEFF>
        </spacecraftParameters>
      </data>
    </segment>
  </body>
</opm>`
  },
  {
    label: "AEM KVN (AURA Attitude)",
    type: "AEM",
    format: "kvn",
    content: `CCSDS_AEM_VERS = 1.0

CREATION_DATE = 2007-09-26T00:00:00
ORIGINATOR = NASA/GSFC

META_START
OBJECT_NAME = AURA
OBJECT_ID = 2004-026A
CENTER_NAME = EARTH
REF_FRAME_A = EME2000
REF_FRAME_B = SC_BODY_1
ATTITUDE_DIR = A2B
TIME_SYSTEM = UTC
START_TIME = 2007-09-22T12:00:00
STOP_TIME = 2007-09-22T18:00:00
ATTITUDE_TYPE = QUATERNION
QUATERNION_TYPE = FIRST
META_STOP

COMMENT Attitude data for Aura spacecraft
2007-09-22T12:00:00  0.68427  0.56748  0.03146  0.45689
2007-09-22T12:01:00  0.68359  0.56823  0.03152  0.45753
2007-09-22T12:02:00  0.68291  0.56898  0.03158  0.45817
2007-09-22T12:03:00  0.68223  0.56973  0.03164  0.45881
`
  },
  {
    label: "AEM XML (AURA Attitude)",
    type: "AEM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<aem xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_AEM_VERS" version="1.0">
  <header>
    <CREATION_DATE>2007-09-26T00:00:00</CREATION_DATE>
    <ORIGINATOR>NASA/GSFC</ORIGINATOR>
  </header>
  <body>
    <segment>
      <metadata>
        <OBJECT_NAME>AURA</OBJECT_NAME>
        <OBJECT_ID>2004-026A</OBJECT_ID>
        <CENTER_NAME>EARTH</CENTER_NAME>
        <REF_FRAME_A>EME2000</REF_FRAME_A>
        <REF_FRAME_B>SC_BODY_1</REF_FRAME_B>
        <ATTITUDE_DIR>A2B</ATTITUDE_DIR>
        <TIME_SYSTEM>UTC</TIME_SYSTEM>
        <START_TIME>2007-09-22T12:00:00</START_TIME>
        <STOP_TIME>2007-09-22T18:00:00</STOP_TIME>
        <ATTITUDE_TYPE>QUATERNION</ATTITUDE_TYPE>
        <QUATERNION_TYPE>FIRST</QUATERNION_TYPE>
      </metadata>
      <data>
        <attitudeState>
          <EPOCH>2007-09-22T12:00:00</EPOCH>
          <Q1>0.68427</Q1>
          <Q2>0.56748</Q2>
          <Q3>0.03146</Q3>
          <QC>0.45689</QC>
        </attitudeState>
        <attitudeState>
          <EPOCH>2007-09-22T12:01:00</EPOCH>
          <Q1>0.68359</Q1>
          <Q2>0.56823</Q2>
          <Q3>0.03152</Q3>
          <QC>0.45753</QC>
        </attitudeState>
        <attitudeState>
          <EPOCH>2007-09-22T12:02:00</EPOCH>
          <Q1>0.68291</Q1>
          <Q2>0.56898</Q2>
          <Q3>0.03158</Q3>
          <QC>0.45817</QC>
        </attitudeState>
        <attitudeState>
          <EPOCH>2007-09-22T12:03:00</EPOCH>
          <Q1>0.68223</Q1>
          <Q2>0.56973</Q2>
          <Q3>0.03164</Q3>
          <QC>0.45881</QC>
        </attitudeState>
      </data>
    </segment>
  </body>
</aem>`
  },
  {
    label: "TDM KVN (DSN Tracking)",
    type: "TDM",
    format: "kvn",
    content: `CCSDS_TDM_VERS = 1.0

CREATION_DATE = 2007-09-20T12:00:00
ORIGINATOR = NASA/GSFC

META_START
TIME_SYSTEM = UTC
PARTICIPANT_1 = DSS-25
PARTICIPANT_2 = MARS GLOBAL SURVEYOR
MODE = SEQUENTIAL
PATH = 1,2,1
TRANSMIT_BAND = X
RECEIVE_BAND = X
INTEGRATION_INTERVAL = 1.000
RANGE_UNITS = km
META_STOP

DATA_START
RECEIVE_FREQ_1 = 2007-09-20T12:00:00 8420432073.6
RECEIVE_FREQ_1 = 2007-09-20T12:00:01 8420432074.2
RECEIVE_FREQ_1 = 2007-09-20T12:00:02 8420432074.8
TRANSMIT_FREQ_1 = 2007-09-20T12:00:00 7182990000.0
RANGE = 2007-09-20T12:00:00 243195622.219
RANGE = 2007-09-20T12:00:01 243195622.420
DOPPLER_INSTANTANEOUS = 2007-09-20T12:00:00 -1232.56
DOPPLER_INSTANTANEOUS = 2007-09-20T12:00:01 -1232.58
DATA_STOP
`
  },
  {
    label: "TDM XML (DSN Tracking)",
    type: "TDM",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<tdm xmlns="urn:ccsds:recommendation:navigation:schema:ndmxml"
     id="CCSDS_TDM_VERS" version="1.0">
  <header>
    <CREATION_DATE>2007-09-20T12:00:00</CREATION_DATE>
    <ORIGINATOR>NASA/GSFC</ORIGINATOR>
  </header>
  <body>
    <segment>
      <metadata>
        <TIME_SYSTEM>UTC</TIME_SYSTEM>
        <PARTICIPANT_1>DSS-25</PARTICIPANT_1>
        <PARTICIPANT_2>MARS GLOBAL SURVEYOR</PARTICIPANT_2>
        <MODE>SEQUENTIAL</MODE>
        <PATH>1,2,1</PATH>
        <TRANSMIT_BAND>X</TRANSMIT_BAND>
        <RECEIVE_BAND>X</RECEIVE_BAND>
        <INTEGRATION_INTERVAL units="s">1.000</INTEGRATION_INTERVAL>
        <RANGE_UNITS>km</RANGE_UNITS>
      </metadata>
      <data>
        <observation>
          <EPOCH>2007-09-20T12:00:00</EPOCH>
          <RECEIVE_FREQ_1>8420432073.6</RECEIVE_FREQ_1>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:01</EPOCH>
          <RECEIVE_FREQ_1>8420432074.2</RECEIVE_FREQ_1>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:02</EPOCH>
          <RECEIVE_FREQ_1>8420432074.8</RECEIVE_FREQ_1>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:00</EPOCH>
          <TRANSMIT_FREQ_1>7182990000.0</TRANSMIT_FREQ_1>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:00</EPOCH>
          <RANGE>243195622.219</RANGE>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:01</EPOCH>
          <RANGE>243195622.420</RANGE>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:00</EPOCH>
          <DOPPLER_INSTANTANEOUS>-1232.56</DOPPLER_INSTANTANEOUS>
        </observation>
        <observation>
          <EPOCH>2007-09-20T12:00:01</EPOCH>
          <DOPPLER_INSTANTANEOUS>-1232.58</DOPPLER_INSTANTANEOUS>
        </observation>
      </data>
    </segment>
  </body>
</tdm>`
  },
  {
    label: "XTCE XML (Telemetry DB)",
    type: "XTCE",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<xtce:SpaceSystem name="TestSatellite"
  xmlns:xtce="http://www.omg.org/spec/XTCE/20180204">
  <xtce:Header validationStatus="Working" classification="NotClassified" version="1.2" date="2024-01-15">
    <xtce:AuthorSet>
      <xtce:Author>SDS Test Suite</xtce:Author>
    </xtce:AuthorSet>
    <xtce:NoteSet>
      <xtce:Note>Test XTCE 1.2 document for SDS WASM parser validation.</xtce:Note>
    </xtce:NoteSet>
  </xtce:Header>
  <xtce:TelemetryMetaData>
    <xtce:ParameterTypeSet>
      <xtce:IntegerParameterType name="uint16_type" signed="false">
        <xtce:UnitSet>
          <xtce:Unit>counts</xtce:Unit>
        </xtce:UnitSet>
        <xtce:IntegerDataEncoding sizeInBits="16" encoding="unsigned"/>
      </xtce:IntegerParameterType>
      <xtce:FloatParameterType name="temperature_type" sizeInBits="32">
        <xtce:UnitSet>
          <xtce:Unit>degC</xtce:Unit>
        </xtce:UnitSet>
        <xtce:FloatDataEncoding sizeInBits="32" encoding="IEEE754_1985"/>
      </xtce:FloatParameterType>
    </xtce:ParameterTypeSet>
    <xtce:ParameterSet>
      <xtce:Parameter name="BATTERY_VOLTAGE" parameterTypeRef="uint16_type"/>
      <xtce:Parameter name="PANEL_TEMP" parameterTypeRef="temperature_type"/>
    </xtce:ParameterSet>
  </xtce:TelemetryMetaData>
</xtce:SpaceSystem>`
  },
  {
    label: "GeoJSON (ISS Track)",
    type: "GJN",
    format: "json",
    content: `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "iss-position",
      "geometry": {
        "type": "Point",
        "coordinates": [-95.364, 29.7604, 408000]
      },
      "properties": {
        "name": "ISS Current Position",
        "altitude_km": 408,
        "velocity_kms": 7.66,
        "object_id": "1998-067A"
      }
    },
    {
      "type": "Feature",
      "id": "iss-ground-track",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [-95.364, 29.7604, 408000],
          [-80.191, 25.7617, 408000],
          [-60.025, 15.4942, 408000],
          [-40.321, 3.119, 408000],
          [-25.746, -10.122, 408000]
        ]
      },
      "properties": {
        "name": "ISS Ground Track",
        "orbit_number": 48170
      }
    },
    {
      "type": "Feature",
      "id": "coverage-zone",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-100.0, 25.0],
            [-90.0, 25.0],
            [-90.0, 35.0],
            [-100.0, 35.0],
            [-100.0, 25.0]
          ]
        ]
      },
      "properties": {
        "name": "Ground Station Coverage",
        "station": "Houston"
      }
    }
  ]
}`
  },
  {
    label: "CZML (ISS Tracking)",
    type: "CZM",
    format: "json",
    content: `[
  {
    "id": "document",
    "name": "ISS Tracking",
    "version": "1.0",
    "clock": {
      "interval": "2024-01-15T00:00:00Z/2024-01-16T00:00:00Z",
      "currentTime": "2024-01-15T12:00:00Z",
      "multiplier": 60
    }
  },
  {
    "id": "iss",
    "name": "ISS (ZARYA)",
    "description": "International Space Station",
    "availability": "2024-01-15T00:00:00Z/2024-01-16T00:00:00Z",
    "position": {
      "epoch": "2024-01-15T00:00:00Z",
      "cartographicDegrees": [
        0, -95.364, 29.7604, 408000,
        3600, -80.191, 25.7617, 408000,
        7200, -60.025, 15.4942, 408000,
        10800, -40.321, 3.119, 408000
      ]
    },
    "billboard": {
      "show": true,
      "image": "data:image/png;base64,iVBORw0KGgo=",
      "scale": 1.5,
      "color": { "rgba": [255, 255, 0, 255] }
    },
    "label": {
      "show": true,
      "text": "ISS",
      "font": "12pt sans-serif",
      "fillColor": { "rgba": [255, 255, 255, 255] }
    },
    "path": {
      "show": true,
      "leadTime": 3600,
      "trailTime": 3600,
      "width": 2,
      "material": {
        "solidColor": {
          "color": { "rgba": [0, 255, 255, 128] }
        }
      },
      "resolution": 120
    }
  }
]`
  },
  {
    label: "KML (Space Facilities)",
    type: "KML",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Space Data Locations</name>
    <description>Key space tracking facilities</description>
    <Style id="station-style">
      <IconStyle>
        <color>ff0000ff</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/red-circle.png</href>
        </Icon>
      </IconStyle>
      <LabelStyle>
        <color>ffffffff</color>
        <scale>0.8</scale>
      </LabelStyle>
      <LineStyle>
        <color>ff00ffff</color>
        <width>2</width>
      </LineStyle>
    </Style>
    <Folder>
      <name>Ground Stations</name>
      <Placemark>
        <name>NASA Johnson Space Center</name>
        <description>Mission Control Center, Houston TX</description>
        <styleUrl>#station-style</styleUrl>
        <Point>
          <altitudeMode>clampToGround</altitudeMode>
          <coordinates>-95.0933,29.5593,0</coordinates>
        </Point>
      </Placemark>
      <Placemark>
        <name>ESA ESOC</name>
        <description>European Space Operations Centre, Darmstadt</description>
        <styleUrl>#station-style</styleUrl>
        <Point>
          <coordinates>8.6724,49.8697,0</coordinates>
        </Point>
      </Placemark>
    </Folder>
    <Placemark>
      <name>ISS Ground Track Segment</name>
      <LineString>
        <tessellate>1</tessellate>
        <coordinates>
          -95.364,29.7604,408000 -80.191,25.7617,408000 -60.025,15.4942,408000
        </coordinates>
      </LineString>
    </Placemark>
  </Document>
</kml>`
  },
  {
    label: "GPX (ISS Observation)",
    type: "GPX",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="SpaceDataStandards"
     xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>ISS Pass Observations</name>
    <desc>Observed ISS passes from Houston TX</desc>
    <author>
      <name>SDS Observer</name>
    </author>
    <time>2024-01-15T12:00:00Z</time>
    <bounds minlat="29.5" minlon="-95.5" maxlat="30.0" maxlon="-95.0"/>
  </metadata>
  <wpt lat="29.7604" lon="-95.3631">
    <ele>15</ele>
    <time>2024-01-15T02:30:00Z</time>
    <name>Observation Point Alpha</name>
    <desc>Primary ISS observation site</desc>
    <sym>Flag</sym>
    <type>Observation</type>
  </wpt>
  <trk>
    <name>ISS Visual Pass</name>
    <desc>Observed track of ISS evening pass</desc>
    <type>Satellite Pass</type>
    <trkseg>
      <trkpt lat="29.50" lon="-95.80">
        <ele>408000</ele>
        <time>2024-01-15T02:30:00Z</time>
      </trkpt>
      <trkpt lat="29.80" lon="-95.20">
        <ele>408000</ele>
        <time>2024-01-15T02:32:00Z</time>
      </trkpt>
      <trkpt lat="30.10" lon="-94.60">
        <ele>408000</ele>
        <time>2024-01-15T02:34:00Z</time>
      </trkpt>
    </trkseg>
  </trk>
</gpx>`
  },
  {
    label: "CoT (ISS Position)",
    type: "COT",
    format: "xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<event version="2.0"
       uid="ISS-ZARYA-25544"
       type="a-f-S-C-O"
       how="m-g"
       time="2024-01-15T12:00:00Z"
       start="2024-01-15T12:00:00Z"
       stale="2024-01-15T12:05:00Z">
  <point lat="29.7604" lon="-95.364" hae="408000" ce="50" le="100"/>
  <detail>
    <contact callsign="ISS" endpoint="*:-1:stcp"/>
    <track course="45.2" speed="7660"/>
    <__group name="Space" role="Satellite"/>
    <status battery="100"/>
    <precisionlocation geopointsrc="GPS" altsrc="GPS"/>
    <uid Droid="ISS-ZARYA"/>
    <remarks source="NORAD" time="2024-01-15T12:00:00Z">International Space Station, NORAD ID 25544</remarks>
    <link uid="1998-067A" type="a-f-S" relation="p-p"/>
  </detail>
</event>`
  },
];
