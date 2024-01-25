# ASCII Vector Ephemeris (veceph) Format

The ASCII Vector Ephemeris (eci*.veceph) file has a single header line containing the EGM96
and earth radius constants and the time and date stamp of the first ephemeris point. There are
two lines for each ephemeris data point. The first line holds the number of seconds, the position,
and satellite number while the second line holds the two-digit year, Day of Year, hour, minutes,
seconds, velocity and the satellite number. This data format does not contain covariance data. It
is in ECI TEME.

## Text Format

&nbsp;n.nnnnnnnnnnnnnnna-nn&nbsp;n.nnnnnnnnnnnnnnna+nn&nbsp;nnnnnnnnnnn.nnn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;&nbsp;&nbsp;aa&nbsp;aaa  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nnn.nnnnnn&nbsp;&nbsp;&nbsp;&nbsp;-nnnn.nnnnnn&nbsp;&nbsp;&nbsp;&nbsp;-nnnn.nnnnnn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nnnn.nnnnnn&nbsp;nnnnn&nbsp;n&nbsp;aa&nbsp;aaa  
&nbsp;&nbsp;nnnnnnnnnnn.nnn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n.nnnnnnnnn&nbsp;&nbsp;&nbsp;&nbsp;-n.nnnnnnnnn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n.nnnnnnnnn&nbsp;nnnnn&nbsp;n&nbsp;aa&nbsp;aaa

## Definitions

### Header Row

|Column Number|Definition|
|-|-|
|1|Earth gravitational constant (Earth radius3/2/minute)|
|2|Mean Earth radius (km)|
|3|Epoch time (YYDDDHHMMSS.SSS)|
|4|Satellite number (only for 9-digit satellite number)|
|5|Ephemeris type|
|6|File coordinate system (ECI or EFG)|

### Line 1

|Column Number|Definition|
|-|-|
|1|Time since epoch (seconds)|
|2|X position component (km)|
|3|Y position component (km)|
|4|Z position component (km)|
|5|Satellite number (0’s will be present for 9-digit satellite numbers)|
|6|Ephemeris file type (1 = ECI or 3 = EFG)|
|7|Ephemeris type|
|8|File coordinate system (ECI or EFG)|

### Line 2

|Column Number|Definition|
|-|-|
|1|Time (YYDDDHHMMSS.SSS)|
|2|X velocity component (km)|
|3|Y velocity component (km)|
|4|Z velocity component (km)|
|5|Satellite number (0’s will be present for 9-digit satellite numbers)|
|6|Ephemeris file type (1 = ECI or 3 = EFG)|
|7|Ephemeris type|
|8|File coordinate system (ECI or EFG)|


### [Example File](./sample/00000.eci)