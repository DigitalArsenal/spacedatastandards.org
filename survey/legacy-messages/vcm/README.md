# Vector Covariance Message (VCM)

## OVERVIEW
The Orbital Safety Workstation Vector/Covariance Message is a fixed-format ASCII
formatted message which contains state vector and covariance matrix information about a
satellite being maintained on the SP Catalog Maintenance System. The message format
complies with [JANAP-128](../documentation/automatic-digital-network-autodin-operating-procedures-janap-1281.pdf) and DD-173 standards.

## COORDINATE SYSTEMS
The position and velocity of the satellite are provided in three different coordinate
systems: J2K, ECI, and EFG. 

The “J2K” (J2000) coordinate system is the Earth-centered
inertial coordinate system referenced to the mean equator and mean equinox of J2000.0
(Jan 1.5 2000 TDT). 

The "ECI" coordinate system is the Earth-Centered Inertial
coordinate system referenced to the true equator and mean equinox of date (epoch). 

The
"EFG" (Earth-Fixed Geocentric) coordinate system is an Earth-fixed rotating coordinate
system related to ECI by a simple rotation about the Z axis (normal to the true equator of
date), using the mean Greenwich hour angle. Polar motion effects are not taken into
account in the EFG system.

The satellite's state error estimates ("vector sigmas") are the standard deviations of the
position and velocity error in the satellite-centered inertial UVW coordinate system. 

In
this system, U (“radial”) is the unit vector in the radial direction, W (“cross-track”) is the
unit vector normal to the satellite’s inertial orbit plane (in the direction of the satellite’s
angular momentum), and V (“in-track”) is the unit vector that completes the right-handed
coordinate system.

## LEAP SECOND PROCESSING
In order to predict across a leap second, the message contains the time of the next leap
second after epoch. 

If the next leap second is not known, the time of the previous leap
second is inserted. If neither value is known, “2049 365 (31 DEC) 23:59:59.999” is
inserted for the time.

## MESSAGE FORMATTING 

The message consists of 28 or more lines of data. 

All data lines are preceded by the 2-
character sequence “<>“ (less-than, greater-than) to distinguish the message data lines
from additional lines that the various communication systems may insert. 

In the
message, all fields must appear within the columns indicated.

The message will be transmitted in JANAP 128 narrative format. The message data lines
detailed below will comprise multiple Format Lines 12I (FL12I) per the JANAP 128(J)
specification. 

The message classification is indicated in Format Lines FL2 and FL4 of the
message header and in the first line, FL12A, of the message text portion. 

For an
unclassified message, the first 6 characters of line FL12A consist of “UNCLAS”, and this
line immediately precedes the message data lines detailed below.

The message lines detailed below appear as contiguous lines when created. However,
communication system components used in message formatting and delivery may
automatically break up address lines plus message body lines into pages of about 20
lines, and insert lines identifying page number, message source, and classification.

In the format, note that:

- “Tabs” and other non-printing characters (except for blanks) are not allowed
- “+” signs may be replaced by blanks
- Leading zeros on numerical fields may be replaced by blanks
- Alphabetic fields may contain blanks
- Trailing blanks on a line may be removed during transmission
- Each line will be followed by the JANAP end-of-line sequence
`(<CR><CR><LF>)`

## FORMAT

```
123456789012345678901234567890123456789012345678901234567890123456789  
<> SP VECTOR/COVARIANCE MESSAGE – V2.0  
<> ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt  
<> MESSAGE TIME (UTC): yyyy ddd (dd mmm) hh:mm:ss.sss CENTER: cccc  
<> SATELLITE NUMBER: sssss INT. DES.: yyyy-lllppp  
<> COMMON NAME: nnnnnnnnnnnnnnnnnnnnnnnnn  
<> EPOCH TIME (UTC): yyyy ddd (dd mmm) hh:mm:ss.sss EPOCH REV: rrrrr  
<> J2K POS (KM): ±xxxxxx.xxxxxxxx ±yyyyyy.yyyyyyyy ±zzzzzz.zzzzzzzz  
<> J2K VEL (KM/S): ±xx.xxxxxxxxxxxx ±yy.yyyyyyyyyyyy ±zz.zzzzzzzzzzzz  
<> ECI POS (KM): ±xxxxxx.xxxxxxxx ±yyyyyy.yyyyyyyy ±zzzzzz.zzzzzzzz  
<> ECI VEL (KM/S): ±xx.xxxxxxxxxxxx ±yy.yyyyyyyyyyyy ±zz.zzzzzzzzzzzz  
<> EFG POS (KM): ±xxxxxx.xxxxxxxx ±yyyyyy.yyyyyyyy ±zzzzzz.zzzzzzzz  
<> EFG VEL (KM/S): ±xx.xxxxxxxxxxxx ±yy.yyyyyyyyyyyy ±zz.zzzzzzzzzzzz  
<> GEOPOTENTIAL: gggggg mmZ,nnT DRAG: dddddddddddd LUNAR/SOLAR: ooo  
<> SOLAR RAD PRESS: ooo SOLID EARTH TIDES: ooo IN-TRACK THRUST: ooo  
<> BALLISTIC COEF (M2/KG): ±x.xxxxxxE±xx BDOT (M2/KG-S): x.xxxxxxE±xx  
<> SOLAR RAD PRESS COEFF (M2/KG): ±x.xxxxxxE±xx EDR(W/KG): ±r.rrE±rr   
<> THRUST ACCEL (M/S2): ±x.xxxxxxE±xx C.M. OFFSET (M): ±x.xxxxxxE±xx  
<> SOLAR FLUX: F10: fff AVERAGE F10: fff AVERAGE AP: aaa.a  
<> TAI-UTC (S): ss UT1-UTC (S): ±s.sssss UT1 RATE (MS/DAY): ±s.sss  
<> POLAR MOT X,Y (ARCSEC): ±p.pppp ±p.pppp IAU 1980 NUTAT: ttt TERMS  
<> TIME CONST LEAP SECOND TIME (UTC): yyyy ddd (dd mmm) hh:mm:ss.sss  
<> INTEGRATOR MODE: mmmmmmmmmmm COORD SYS: ccccc PARTIALS: tttttttt  
<> STEP MODE: mmmm FIXED STEP: fff STEP SIZE SELECTION: ssssss  
<> INITIAL STEP SIZE (S): ssss.sss ERROR CONTROL: c.cccE±cc  
<> VECTOR U,V,W SIGMAS (KM): ±uuuu.uuuu ±vvvv.vvvv ±wwww.wwww  
<> VECTOR UD,VD,WD SIGMAS (KM/S): ±uu.uuuu ±vv.vvvv ±ww.wwww  
<> COVARIANCE MATRIX (EQUINOCTIAL ELS): (nnxnn) WTD RMS: ±r.rrrrrE±rr  
<> ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx  
<> ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx  
<> ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx  
<> ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx  
<> ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx ±x.xxxxxE±xx
```

In the above format:

- ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt = Real/Test/Exercise indicator (REAL,
TEST, or EXERCISE//45-character exercise name//EXERCISE)
- yyyy ddd (dd mmm) hh:mm:ss.sss = Date and UTC time (e.g. 1998 125 (05 MAY)
12:34:56.789)
- cccc = Mission center performing the run (either CMOC or NAV)
sssss = NORAD satellite number
- yyyy-lllppp = International Designator (Year of launch, launch #, piece designator)
- nnnnnnnnnnnnnnnnnnnnnnnn = Common name
- rrrrr = Epoch revolution number
- ±xxxxxx.xxxxxxxx = X component of satellite’s position (km)
- ±yyyyyy.yyyyyyyy = Y component of satellite’s position (km)
- ±zzzzzz.zzzzzzzz = Z component of satellite’s position (km)
- ±xx.xxxxxxxxxxxx = X component of satellite’s velocity (km/s)
- ±yy.yyyyyyyyyyyy = Y component of satellite’s velocity (km/s)
- ±zz.zzzzzzzzzzzz = Z component of satellite’s velocity (km/s)
- gggggg mmZ,nnT = Geopotential model used (e.g. EGM-96, WGS-84, WGS-72, JGM-2,
- or GEM-T3), truncated to mm degree zonals, nn degree/order tesserals
- dddddddddd = Drag model used (e.g. JACCHIA 70)
- ooo = ON/OFF indicator for lunar/solar, solar radiation pressure, solid earth tides, and intrack thrust perturbations
- ±x.xxxxxxE±xx = Model parameter value for drag, solar radiation pressure, in-track
- thrust; or satellite center of mass offset
- ±r.rrE±rr = Energy Dissipation Rate
- fff = F10 (10.7 cm) solar flux or 81-day average F10
- aaa.a = Average geomagnetic index
- ss = TAI minus UTC offset (s)
- ±s.sssss = UT1 minus UTC offset, (seconds)
- ±s.sss =Rate of change of UT1 (milliseconds/day) 
- ±p.pppp = Component of polar motion (arc-seconds)
- ttt = Number of terms used in nutation model (4, 50, or 106)
- mmmmmmmmmmm = Integrator Mode (SPADOC or ASW)
- ccccc = Numerical Integrator coordinate system (J2000 or EPOCH)
- tttttttt = Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM)
- mmmm = Integrator step mode (AUTO, TIME, or S)
- fff = Fixed step size indicator (ON or OFF)
- ssssss = Initial step size selection (AUTO or MANUAL)
- ssss.sss = Initial integration step size (seconds)
- c.cccE±cc = Integrator error control
- ±uuuu.uuuu = Standard deviation of error in satellite's position, U direction (km)
- ±vvvv.vvvv = Standard deviation of error in satellite's position, V direction (km)
- ±wwww.wwww = Standard deviation of error in satellite's position, W direction (km)
- ±uu.uuuu = Standard deviation of error in satellite's velocity, U direction (km/s)
- ±vv.vvvv = Standard deviation of error in satellite's velocity, V direction (km/s)
- ±ww.wwww = Standard deviation of error in satellite's velocity, W direction (km/s)
- nnxnn = Size of covariance matrix
- ±r.rrrrrE±rr = Weighted RMS of last DC on the satellite
- ±x.xxxxxE±xx = Covariance matrix component
- The covariance matrix values represent the lower triangular half of the covariance matrix in terms of equinoctial elements. 
- The size of the covariance matrix is dynamic. The
values are outputted in order across each row, i.e.:
  
  |1   |2  |3  |4  |5  |
  |----|---|---|---|---|
  |6   |7  |8  |9  |10 |
  |:   |:  |:  |:  |:  |
  |:   |:  |:  |:  |:  |
  |51  |52 |53 |54 |55 |
  |:   |:  |:  |:  |:  |
  |:   |:  |:  |:  |:  |

The ordering of values is as follows:

|    |Af|Ag| L |N |Chi |Psi|B |BDOT |AGOM| T |C1| C2 |...|
|----|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Af  |1  |   |   |   |   |   |   |   |   |   |   |   |   |
|Ag  |2  |3  |   |   |   |   |   |   |   |   |   |   |   |
|Ag  |4  |5  |6  |   |   |   |   |   |   |   |   |   |   |
|N   |7  |8  |9  |10 |   |   |   |   |   |   |   |   |   |
|Chi |11 |12 |13 |14 |15 |   |   |   |   |   |   |   |   |
|Psi |16 |17 |18 |19 |20 |21 |   |   |   |   |   |   |   |
|B   |22 |23 |24 |25 |26 |27 |28 |   |   |   |   |   |   |
|BDOT|29 |30 |31 |32 |33 |34 |35 |36 |   |   |   |   |   |
|AGOM|37 |38 |39 |40 |41 |42 |43 |44 |45 |   |   |   |   |
|T   |46 |47 |48 |49 |50 |51 |52 |53 |54 |55 |   |   |   |
|C1  |56 |57 |58 |59 |60 |61 |62 |63 |64 |65 |66 |   |   |
|C2  |67 |68 |69 |70 |71 |72 |73 |74 |75 |76 |77 |78 |   |

C1, C2, etc, are the "consider parameters" that may be added
to the covariance matrix. 

The covariance matrix will be as large as
the last element/model parameter needed. In other words, if the DC
solved for all 6 elements plus AGOM, the covariance matrix will be 9x9
(and the rows for B and BDOT will be all zeros). 

If the covariance
matrix is unavailable, the size will be set to 0x0, and no data will
follow. 

### [Example File](./sample/vcm.txt)
