<?php
// automatically generated by the FlatBuffers compiler, do not modify

/// Enum to represent common lunar perturbation models
class lunarPerturbationModel
{
    const NONE = 0;
    const DE430 = 1;
    const DE431 = 2;
    const LP150Q = 3;

    private static $names = array(
        lunarPerturbationModel::NONE=>"NONE",
        lunarPerturbationModel::DE430=>"DE430",
        lunarPerturbationModel::DE431=>"DE431",
        lunarPerturbationModel::LP150Q=>"LP150Q",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}