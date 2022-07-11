# NORAD Two-Line Element Set Format

Data for each satellite consists of three lines in the following format:

AAAAAAAAAAAAAAAAAAAAAAAA  
1 NNNNNU NNNNNAAA NNNNN.NNNNNNNN +.NNNNNNNN +NNNNN-N +NNNNN-N N NNNNN  
2 NNNNN NNN.NNNN NNN.NNNN NNNNNNN NNN.NNNN NNN.NNNN NN.NNNNNNNNNNNNNN

Line 0 is a twenty-four character name (to be consistent with the name length in the NORAD SATCAT).

Lines 1 and 2 are the standard Two-Line Orbital Element Set Format identical to that used by NORAD and NASA. The format description is:


<table>
  <tbody><tr >
    <th>Line 1</th>
  </tr>
  <tr>
    <th>Column</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Line Number of Element Data</td>
  </tr>
  <tr>
    <td>03-07</td>
    <td>Satellite Number</td>
  </tr>
  <tr>
    <td>08</td>
    <td>Classification (U=Unclassified)</td>
  </tr>
  <tr>
    <td>10-11</td>
    <td>International Designator (Last two digits of launch year)</td>
  </tr>
  <tr>
    <td>12-14</td>
    <td>International Designator (Launch number of the year)</td>
  </tr>
  <tr>
    <td>15-17</td>
    <td>International Designator (Piece of the launch)</td>
  </tr>
  <tr>
    <td>19-20</td>
    <td>Epoch Year (Last two digits of year)</td>
  </tr>
  <tr>
    <td>21-32</td>
    <td>Epoch (Day of the year and fractional portion of the day)</td>
  </tr>
  <tr>
    <td>34-43</td>
    <td>First Time Derivative of the Mean Motion</td>
  </tr>
  <tr>
    <td>45-52</td>
    <td>Second Time Derivative of Mean Motion (Leading decimal point assumed)</td>
  </tr>
  <tr>
    <td>54-61</td>
    <td>BSTAR drag term (Leading decimal point assumed)</td>
  </tr>
  <tr>
    <td>63</td>
    <td>Ephemeris type</td>
  </tr>
  <tr>
    <td>65-68</td>
    <td>Element number</td>
  </tr>
  <tr>
    <td>69</td>
    <td>Checksum (Modulo 10)<br>
    (Letters, blanks, periods, plus signs&nbsp;=&nbsp;0; minus signs&nbsp;=&nbsp;1)</td>
  </tr>
</tbody>
</table>

<table>
  <tbody>
  <tr>
    <th>Line 2</th>
  </tr>
  <tr>
    <th>Column</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Line Number of Element Data</td>
  </tr>
  <tr>
    <td>03-07</td>
    <td>Satellite Number</td>
  </tr>
  <tr>
    <td>09-16</td>
    <td>Inclination [Degrees]</td>
  </tr>
  <tr>
    <td>18-25</td>
    <td>Right Ascension of the Ascending Node [Degrees]</td>
  </tr>
  <tr>
    <td>27-33</td>
    <td>Eccentricity (Leading decimal point assumed)</td>
  </tr>
  <tr>
    <td>35-42</td>
    <td>Argument of Perigee [Degrees]</td>
  </tr>
  <tr>
    <td>44-51</td>
    <td>Mean Anomaly [Degrees]</td>
  </tr>
  <tr>
    <td>53-63</td>
    <td>Mean Motion [Revs per day]</td>
  </tr>
  <tr>
    <td>64-68</td>
    <td>Revolution number at epoch [Revs]</td>
  </tr>
  <tr>
    <td>69</td>
    <td>Checksum (Modulo 10)</td>
  </tr>
</tbody></table>

### [Example File](./sample/tle.txt)