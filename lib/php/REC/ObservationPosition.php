<?php
// automatically generated by the FlatBuffers compiler, do not modify

class ObservationPosition
{
    const FENCE = 0;
    const FIRST = 1;
    const IN = 2;
    const LAST = 3;
    const SINGLE = 4;

    private static $names = array(
        ObservationPosition::FENCE=>"FENCE",
        ObservationPosition::FIRST=>"FIRST",
        ObservationPosition::IN=>"IN",
        ObservationPosition::LAST=>"LAST",
        ObservationPosition::SINGLE=>"SINGLE",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
