<?php
// automatically generated by the FlatBuffers compiler, do not modify

class elementType
{
    const OSCULATING = 0;
    const MEAN = 1;

    private static $names = array(
        elementType::OSCULATING=>"OSCULATING",
        elementType::MEAN=>"MEAN",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
