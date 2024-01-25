# Space Defense Operations Center (SPADOC) V4 Satellite Catalog

"A reference of general information on all cataloged objects
(lAW United Nations (UN) treaty) distributed weekly by 1 SPCS via Web Site or floppy disk (upon
request with an approved USSTRATCOM Form 1, Orbital Data Request. The SATCAT includes data on
objects that have decayed and some planetary probes, as well as objects currently in earth orbit." ([USSTRATCOM SD 505-1](https://www.stratcom.mil/Portals/8/Documents/FOIA/SD%20505-1%20Vol%201%20(Redacted).pdf?ver=ksIJ3AWVwDZCSvAha9Gr2g%3d%3d))


### Column Format

----

000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111111111111
000000000111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012


### Text Format

----

yyyy-nnnaaa  nnnnn M*O aaaaaaaaaaaaaaaaaaaaaaaa  aaaaa  yyyy-mm-dd  aaaaa  yyyy-mm-dd  nnnnn.n  nnn.n  nnnnnn  nnnnnn  nnn.nnnn  aaa

### Definitions

----

<table>
<thead>
  <tr>
    <th>Columns</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
<tr><td>001-011</td><td>International Designator
	<ul>
	<li>Launch Year (001-004)</li>
	<li>Launch of the Year (006-008)</li>
	<li>Piece of the Launch (009-011)</li>
	</ul></td></tr>
<tr><td>014-018</td><td>NORAD Catalog Number</td></tr>
<tr><td>020-020</td><td>Multiple Name Flag ("M" if multiple names exist; alternate names found in 
	satcat-annex.txt)</td></tr>
<tr><td>021-021</td><td>Payload Flag ("*" if payload; blank otherwise)</td></tr>
<tr><td>022-022</td><td>Operational Status Code</td>
</tr>
<tr><td>024-047</td><td>Satellite Name(s)
	<ul>
	<li>R/B(1) = Rocket body, first stage</li>
	<li>R/B(2) = Rocket body, second stage</li>
	<li>DEB = Debris</li>
	<li>PLAT = Platform</li>
	<li>Items in parentheses are alternate names</li>
	<li>Items in brackets indicate type of object<br>(e.g., BREEZE-M DEB [TANK] = tank)</li>
	<li>An ampersand (&amp;) indicates two or more objects are attached</li>
	</ul></td></tr>
<tr><td>050-054</td><td>Source or Ownership</td></tr>
<tr><td>057-066</td><td>Launch Date [year-month-day]</td></tr>
<tr><td>069-073</td><td>Launch Site</td></tr>
<tr><td>076-085</td><td>Decay Date, if applicable [year-month-day]</td></tr>
<tr><td>088-094</td><td>Orbital period [minutes]</td></tr>
<tr><td>097-101</td><td>Inclination [degrees]</td></tr>
<tr><td>104-109</td><td>Apogee Altitude [kilometers]</td></tr>
<tr><td>112-117</td><td>Perigee Altitude [kilometers]</td></tr>
<tr><td>120-127</td><td>Radar Cross Section [meters<sup>2</sup>]; N/A if no data available</td></tr>
<tr ><td>130-132</td><td>Orbital Status Code
	<ul>
	<li>NCE = No Current Elements</li>
	<li>NIE = No Initial Elements</li>
	<li>NEA = No Elements Available</li>
	<li>DOC = Permanently Docked</li>
	<li>ISS = Docked to International Space Station</li>
	<li>XXN = Central Body (XX) and Orbit Type (N)</li>
  	<ul>
		<li>AS = Asteroid</li>
		<li>EA = Earth (default if blank)</li>
		<li>EL = Earth Lagrange</li>
		<li>EM = Earth-Moon Barycenter</li>
		<li>JU = Jupiter</li>
		<li>MA = Mars</li>
		<li>ME = Mercury</li>
		<li>MO = Moon (Earth)</li>
		<li>NE = Neptune</li>
		<li>PL = Pluto</li>
		<li>SA = Saturn</li>
		<li>SS = Solar System Escape</li>
		<li>SU = Sun</li>
		<li>UR = Uranus</li>
		<li>VE = Venus</li>
		<li>0 = Orbit</li>
		<li>1 = Landing</li>
		<li>2 = Impact</li>
		<li>3 = Roundtrip</li>
		</ul>
		(e.g., SU0 = Heliocentric Orbit, MO2 = Lunar Impact)
	</ul></td></tr>
	</tbody>
</table>

### [Example File](./sample/satcat.txt)