<?php
// automatically generated by the FlatBuffers compiler, do not modify

class DataType
{
    const OBSERVED = 0;
    const PREDICTED = 1;

    private static $names = array(
        DataType::OBSERVED=>"OBSERVED",
        DataType::PREDICTED=>"PREDICTED",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
