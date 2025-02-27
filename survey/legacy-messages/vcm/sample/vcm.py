from typing import List, Dict
from datetime import datetime
import json
import sys
import re

class PosVel:
    def __init__(self, pos: List[float], vel: List[float]):
        self.pos = pos
        self.vel = vel

    def to_dict(self):
        return {"pos": self.pos, "vel": self.vel}


class CovarianceMatrix:
    def __init__(self, size: Dict[str, int], weightedRMS: float, values: List[List[float]]):
        self.size = size
        self.weightedRMS = weightedRMS
        self.values = values

    def to_dict(self):
        return {"size": self.size, "weightedRMS": self.weightedRMS, "values": self.values}


class SolarFlux:
    def __init__(self, F10: float, avgF10: float, avgAP: float):
        self.F10 = F10
        self.avgF10 = avgF10
        self.avgAP = avgAP

    def to_dict(self):
        return {"F10": self.F10, "avgF10": self.avgF10, "avgAP": self.avgAP}


class PolarMotion:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def to_dict(self):
        return {"x": self.x, "y": self.y}


class VCMData:
    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)

    def to_dict(self):
        return {k: (v.to_dict() if hasattr(v, "to_dict") else v) for k, v in self.__dict__.items()}


class VCMParser:
    @staticmethod
    def mline_parser(line: str) -> List[float]:
        return list(map(float, line.split(":")[1].strip().split()))

    @staticmethod
    def parse_date_string(date_string: str) -> datetime:
        components = re.sub("[()']", "", date_string.strip()).split()
        year = int(components[0])
        day_of_year = int(components[1])  # Julian day (day of the year)
        time_string = components[4]  # Time in "HH:MM:SS.sss" format

        # Combine year and Julian day into a datetime
        dt = datetime.strptime(f"{year} {day_of_year} {time_string}", "%Y %j %H:%M:%S.%f")
        return dt

    @staticmethod
    def get_last(line: str) -> str:
        return line.split(":")[-1].strip()

    @staticmethod
    def parse_pos_vel(pos_line: str, vel_line: str) -> PosVel:
        pos = VCMParser.mline_parser(pos_line)
        vel = VCMParser.mline_parser(vel_line)
        return PosVel(pos, vel)

    @staticmethod
    def parse_vcm(vcm: str) -> VCMData:
        parts = [part.strip() for part in vcm.split("<>") if part.strip()]
        lines =[""] + parts

        print(len(parts))
        for i in parts:
            print(i)

        j2k_pos_vel = VCMParser.parse_pos_vel(lines[6], lines[7])
        eci_pos_vel = VCMParser.parse_pos_vel(lines[8], lines[9])
        efg_pos_vel = VCMParser.parse_pos_vel(lines[10], lines[11])

        vector_sigmas = VCMParser.parse_pos_vel(lines[24], lines[25])

        # Parse covariance size and weighted RMS safely
        cov_size_parts = re.sub(r"[()x]", "", lines[26][36:45]).split()
        cov_size = list(map(int, cov_size_parts))
        cov_weighted_rms = float(lines[26].split(":")[-1])

        cov_values = []
        intermediate_cov = []
        for i in range(27, len(lines)):
            try:
                values = list(map(float, lines[i].strip().split()))
                intermediate_cov.extend(values)
            except ValueError:
                # Skip non-numeric lines
                continue

        while intermediate_cov:
            cov_values.append(intermediate_cov[:cov_size[0]])
            intermediate_cov = intermediate_cov[cov_size[0]:]

        covariance_matrix = CovarianceMatrix(
            size={"x": cov_size[0], "y": cov_size[1]},
            weightedRMS=cov_weighted_rms,
            values=cov_values,
        )

        polar_motion = list(map(float, lines[19][23:40].strip().split()))

        return VCMData(
            type=lines[0].strip(),
            messageTime=VCMParser.parse_date_string(lines[2][20:50]),
            center=lines[2][60:],
            satelliteNumber=int(lines[3][18:43]),
            internationalDesignator=VCMParser.get_last(lines[3]),
            commonName=VCMParser.get_last(lines[4]),
            epochTime=VCMParser.parse_date_string(lines[5][18:48]),
            epochRev=VCMParser.get_last(lines[5]),
            j2kPosVel=j2k_pos_vel,
            eciPosVel=eci_pos_vel,
            efgPosVel=efg_pos_vel,
            geopotentialModel=lines[12][14:30].strip(),
            dragModel=lines[12][36:50].strip(),
            lunarSolar=VCMParser.get_last(lines[12]),
            solarRadPressure=lines[13][17:20].strip(),
            solidEarthTides=lines[13][41:46].strip(),
            inTrackThrust=VCMParser.get_last(lines[13]),
            ballisticCoeff=float(lines[14][25:38]),
            bdot=float(VCMParser.get_last(lines[14])),
            solarRadPressureCoeff=float(lines[15][32:46]),
            edr=float(VCMParser.get_last(lines[15])),
            thrustAccel=float(lines[16][22:36]),
            cmOffset=float(VCMParser.get_last(lines[16])),
            solarFlux=SolarFlux(
                F10=float(lines[17][17:22]),
                avgF10=float(lines[17][35:40]),
                avgAP=float(VCMParser.get_last(lines[17])),
            ),
            taiUtc=float(lines[18][14:17]),
            ut1Utc=float(lines[18][29:40]),
            ut1Rate=float(VCMParser.get_last(lines[18])),
            polarMotion=PolarMotion(x=polar_motion[0], y=polar_motion[1]),
            nutationTerms=VCMParser.get_last(lines[19]),
            constLeapSecTime=VCMParser.parse_date_string(lines[20].split("):")[1]),
            integratorMode=lines[21][16:30].strip(),
            coordSys=lines[21][40:48].strip(),
            partials=VCMParser.get_last(lines[22]),
            stepMode=lines[22][10:17].strip(),
            fixedStep=lines[22][28:33].strip(),
            stepSizeSelection=VCMParser.get_last(lines[22]),
            initialStepSize=float(lines[23][22:33]),
            errorControl=float(VCMParser.get_last(lines[23][47:57])),
            vectorSigmas=vector_sigmas,
            covarianceMatrix=covariance_matrix,
        )

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        #sys.exit(1)

    filename = "vcm.txt"

    try:
        with open(filename, "r") as file:
            vcm_content = file.read()
        parsed_vcm = VCMParser.parse_vcm(vcm_content)
        print(json.dumps(parsed_vcm.to_dict(), indent=4, default=str))
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
