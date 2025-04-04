<?php
// automatically generated by the FlatBuffers compiler, do not modify

class RecordType
{
    const NONE = 0;
    const CAT = 1;
    const VCM = 2;
    const CDM = 3;
    const IDM = 4;
    const PLD = 5;
    const BOV = 6;
    const EPM = 7;
    const OSM = 8;
    const PRG = 9;
    const CTR = 10;
    const SIT = 11;
    const CRM = 12;
    const EOP = 13;
    const MET = 14;
    const OEM = 15;
    const HYP = 16;
    const TIM = 17;
    const ROC = 18;
    const EME = 19;
    const RFM = 20;
    const OMM = 21;
    const CSM = 22;
    const LCC = 23;
    const MPE = 24;
    const LDM = 25;
    const SCM = 26;
    const EOO = 27;
    const TDM = 28;
    const OCM = 29;
    const PNM = 30;

    private static $names = array(
        RecordType::NONE=>"NONE",
        RecordType::CAT=>"CAT",
        RecordType::VCM=>"VCM",
        RecordType::CDM=>"CDM",
        RecordType::IDM=>"IDM",
        RecordType::PLD=>"PLD",
        RecordType::BOV=>"BOV",
        RecordType::EPM=>"EPM",
        RecordType::OSM=>"OSM",
        RecordType::PRG=>"PRG",
        RecordType::CTR=>"CTR",
        RecordType::SIT=>"SIT",
        RecordType::CRM=>"CRM",
        RecordType::EOP=>"EOP",
        RecordType::MET=>"MET",
        RecordType::OEM=>"OEM",
        RecordType::HYP=>"HYP",
        RecordType::TIM=>"TIM",
        RecordType::ROC=>"ROC",
        RecordType::EME=>"EME",
        RecordType::RFM=>"RFM",
        RecordType::OMM=>"OMM",
        RecordType::CSM=>"CSM",
        RecordType::LCC=>"LCC",
        RecordType::MPE=>"MPE",
        RecordType::LDM=>"LDM",
        RecordType::SCM=>"SCM",
        RecordType::EOO=>"EOO",
        RecordType::TDM=>"TDM",
        RecordType::OCM=>"OCM",
        RecordType::PNM=>"PNM",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
