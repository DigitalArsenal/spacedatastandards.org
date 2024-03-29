<?php
// automatically generated by the FlatBuffers compiler, do not modify

class referenceFrame
{
    /// Earth Mean Equator and Equinox of J2000
    const EME2000 = 0;
    /// Geocentric Celestial Reference Frame
    const GCRF = 1;
    /// Greenwich Rotating Coordinates
    const GRC = 2;
    /// International Celestial Reference Frame
    const ICRF = 3;
    /// International Terrestrial Reference Frame 2000
    const ITRF2000 = 4;
    /// International Terrestrial Reference Frame 1993
    const ITRF93 = 5;
    /// International Terrestrial Reference Frame 1997
    const ITRF97 = 6;
    /// Mars Centered Inertial
    const MCI = 7;
    /// True of Date, Rotating
    const TDR = 8;
    /// True Equator Mean Equinox
    const TEME = 9;
    /// True of Date
    const TOD = 10;

    private static $names = array(
        referenceFrame::EME2000=>"EME2000",
        referenceFrame::GCRF=>"GCRF",
        referenceFrame::GRC=>"GRC",
        referenceFrame::ICRF=>"ICRF",
        referenceFrame::ITRF2000=>"ITRF2000",
        referenceFrame::ITRF93=>"ITRF93",
        referenceFrame::ITRF97=>"ITRF97",
        referenceFrame::MCI=>"MCI",
        referenceFrame::TDR=>"TDR",
        referenceFrame::TEME=>"TEME",
        referenceFrame::TOD=>"TOD",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
