<?php
// automatically generated by the FlatBuffers compiler, do not modify

/// Enum to represent the status of various perturbations (ON/OFF)
class perturbationStatus
{
    const OFF = 0;
    const ON = 1;

    private static $names = array(
        perturbationStatus::OFF=>"OFF",
        perturbationStatus::ON=>"ON",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}