<?php
// automatically generated by the FlatBuffers compiler, do not modify

/// https://sanaregistry.org/r/orbit_relative_reference_frames/
/// Orbit-Relative Reference Frames (SANA registry 1.3.112.4.57.3)
class OrbitFrame
{
    /// OID: 1.3.112.4.57.3.1
    /// Earth Equatorial Inertial frame aligned with J2000 epoch.
    const EQW_INERTIAL = 0;
    /// OID: 1.3.112.4.57.3.3
    /// Local Vertical Local Horizontal inertial frame.
    const LVLH_INERTIAL = 1;
    /// OID: 1.3.112.4.57.3.2
    /// Local Vertical Local Horizontal rotating frame.
    const LVLH_ROTATING = 2;
    /// OID: 1.3.112.4.57.3.5
    /// Normal along-track cross-track inertial frame.
    const NSW_INERTIAL = 3;
    /// OID: 1.3.112.4.57.3.4
    /// Normal along-track cross-track rotating frame.
    const NSW_ROTATING = 4;
    /// OID: 1.3.112.4.57.3.7
    /// Orbit normal Tangential cross-track inertial frame.
    const NTW_INERTIAL = 5;
    /// OID: 1.3.112.4.57.3.6
    /// Orbit normal Tangential cross-track rotating frame.
    const NTW_ROTATING = 6;
    /// OID: 1.3.112.4.57.3.8
    /// Perifocal frame aligned with orbit's perigee.
    const PQW_INERTIAL = 7;
    /// OID: 1.3.112.4.57.3.10
    /// Radial along-track cross-track inertial frame.
    const RSW_INERTIAL = 8;
    /// OID: 1.3.112.4.57.3.9
    /// Radial along-track cross-track rotating frame.
    const RSW_ROTATING = 9;
    /// OID: 1.3.112.4.57.3.14
    /// South-East-Zenith inertial (topocentric) frame.
    const SEZ_INERTIAL = 10;
    /// OID: 1.3.112.4.57.3.13
    /// South-East-Zenith rotating (topocentric) frame.
    const SEZ_ROTATING = 11;
    /// OID: 1.3.112.4.57.3.12
    /// Transverse normal cross-track inertial frame.
    const TNW_INERTIAL = 12;
    /// OID: 1.3.112.4.57.3.11
    /// Transverse normal cross-track rotating frame.
    const TNW_ROTATING = 13;
    /// OID: 1.3.112.4.57.3.16
    /// Velocity-normal co-normal inertial frame.
    const VNC_INERTIAL = 14;
    /// OID: 1.3.112.4.57.3.15
    /// Velocity-normal co-normal rotating frame.
    const VNC_ROTATING = 15;

    private static $names = array(
        OrbitFrame::EQW_INERTIAL=>"EQW_INERTIAL",
        OrbitFrame::LVLH_INERTIAL=>"LVLH_INERTIAL",
        OrbitFrame::LVLH_ROTATING=>"LVLH_ROTATING",
        OrbitFrame::NSW_INERTIAL=>"NSW_INERTIAL",
        OrbitFrame::NSW_ROTATING=>"NSW_ROTATING",
        OrbitFrame::NTW_INERTIAL=>"NTW_INERTIAL",
        OrbitFrame::NTW_ROTATING=>"NTW_ROTATING",
        OrbitFrame::PQW_INERTIAL=>"PQW_INERTIAL",
        OrbitFrame::RSW_INERTIAL=>"RSW_INERTIAL",
        OrbitFrame::RSW_ROTATING=>"RSW_ROTATING",
        OrbitFrame::SEZ_INERTIAL=>"SEZ_INERTIAL",
        OrbitFrame::SEZ_ROTATING=>"SEZ_ROTATING",
        OrbitFrame::TNW_INERTIAL=>"TNW_INERTIAL",
        OrbitFrame::TNW_ROTATING=>"TNW_ROTATING",
        OrbitFrame::VNC_INERTIAL=>"VNC_INERTIAL",
        OrbitFrame::VNC_ROTATING=>"VNC_ROTATING",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
