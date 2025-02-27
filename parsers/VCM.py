import re
from datetime import datetime

class VCMParser:
    def __init__(self, message: str):
        self.message = message
        self.parsed_data = {}

    def parse(self):
        lines = self.message.split('<>')

        # Parse header data
        self.parsed_data['header'] = self._parse_header(lines)
        
        # Parse the message data lines
        self.parsed_data['message_data'] = self._parse_message_data(lines)

        return self.parsed_data

    def _parse_header(self, lines):
        header = {}
        header['version'] = self._parse_version(lines[1])
        header['time'] = self._parse_message_time(lines[2])
        header['satellite_number'] = self._parse_satellite_number(lines[3])
        header['epoch'] = self._parse_epoch_time(lines[6])
        header['coordinates'] = self._parse_coordinates(lines[7:13])
        header['geopotential_drag'] = self._parse_geopotential_drag(lines[13])
        header['solar_flux'] = self._parse_solar_flux(lines[16])
        header['tautc_ut1'] = self._parse_tautc_ut1(lines[17])
        header['polar_motion'] = self._parse_polar_motion(lines[18])
        header['leap_second'] = self._parse_leap_second(lines[19])
        header['integrator'] = self._parse_integrator(lines[20])
        header['covariance_matrix'] = self._parse_covariance_matrix(lines[22:])
        
        return header

    def _parse_version(self, line):
        return line.strip()

    def _parse_message_time(self, line):
        match = re.match(r'(\d{4}) (\d{3}) \((\d{2} \w{3})\) (\d{2}):(\d{2}):(\d{2})\.(\d{3})', line.strip())
        if match:
            year, day_of_year, month_day, hour, minute, second, microsecond = match.groups()
            date_str = f'{year}-{month_day} {day_of_year} {hour}:{minute}:{second}.{microsecond}'
            return datetime.strptime(date_str, '%Y-%d %d %H:%M:%S.%f')
        return None

    def _parse_satellite_number(self, line):
        match = re.match(r'SATELLITE NUMBER: (\d+)', line.strip())
        if match:
            return int(match.group(1))
        return None

    def _parse_epoch_time(self, line):
        match = re.match(r'EPOCH TIME \(UTC\): (\d{4}) (\d{3}) \((\d{2} \w{3})\) (\d{2}):(\d{2}):(\d{2})\.(\d{3})', line.strip())
        if match:
            year, day_of_year, month_day, hour, minute, second, microsecond = match.groups()
            date_str = f'{year}-{month_day} {day_of_year} {hour}:{minute}:{second}.{microsecond}'
            return datetime.strptime(date_str, '%Y-%d %d %H:%M:%S.%f')
        return None

    def _parse_coordinates(self, lines):
        coordinates = {}
        for i, line in enumerate(lines):
            if i < 3:  # Parse position
                coords = self._parse_position_velocity(line.strip())
                if i == 0: 
                    coordinates['J2K_POS'] = coords
                elif i == 1:
                    coordinates['ECI_POS'] = coords
                elif i == 2:
                    coordinates['EFG_POS'] = coords
            elif i < 6:  # Parse velocity
                coords = self._parse_position_velocity(line.strip())
                if i == 3: 
                    coordinates['J2K_VEL'] = coords
                elif i == 4:
                    coordinates['ECI_VEL'] = coords
                elif i == 5:
                    coordinates['EFG_VEL'] = coords
        return coordinates

    def _parse_position_velocity(self, line):
        match = re.match(r'±([\d\.E-]+) ±([\d\.E-]+) ±([\d\.E-]+)', line)
        if match:
            return [float(match.group(1)), float(match.group(2)), float(match.group(3))]
        return None

    def _parse_geopotential_drag(self, line):
        match = re.match(r'GEOPOTENTIAL: (\w{6}) (\d{2})Z,(\d{2})T DRAG: (\S+) LUNAR/SOLAR: (\S+)', line.strip())
        if match:
            geopotential, degree, order, drag_model, lu
