<?php
// automatically generated by the FlatBuffers compiler, do not modify

class RecordType
{
    const NONE = 0;
    const BOV = 1;
    const CAT = 2;
    const CDM = 3;
    const CRM = 4;
    const CSM = 5;
    const CTR = 6;
    const EME = 7;
    const EOO = 8;
    const EOP = 9;
    const EPM = 10;
    const HYP = 11;
    const IDM = 12;
    const LCC = 13;
    const LDM = 14;
    const MET = 15;
    const MPE = 16;
    const OCM = 17;
    const OEM = 18;
    const OMM = 19;
    const OSM = 20;
    const PLD = 21;
    const PNM = 22;
    const PRG = 23;
    const RFM = 24;
    const ROC = 25;
    const SCM = 26;
    const SIT = 27;
    const TDM = 28;
    const TIM = 29;
    const VCM = 30;

    private static $names = array(
        RecordType::NONE=>"NONE",
        RecordType::BOV=>"BOV",
        RecordType::CAT=>"CAT",
        RecordType::CDM=>"CDM",
        RecordType::CRM=>"CRM",
        RecordType::CSM=>"CSM",
        RecordType::CTR=>"CTR",
        RecordType::EME=>"EME",
        RecordType::EOO=>"EOO",
        RecordType::EOP=>"EOP",
        RecordType::EPM=>"EPM",
        RecordType::HYP=>"HYP",
        RecordType::IDM=>"IDM",
        RecordType::LCC=>"LCC",
        RecordType::LDM=>"LDM",
        RecordType::MET=>"MET",
        RecordType::MPE=>"MPE",
        RecordType::OCM=>"OCM",
        RecordType::OEM=>"OEM",
        RecordType::OMM=>"OMM",
        RecordType::OSM=>"OSM",
        RecordType::PLD=>"PLD",
        RecordType::PNM=>"PNM",
        RecordType::PRG=>"PRG",
        RecordType::RFM=>"RFM",
        RecordType::ROC=>"ROC",
        RecordType::SCM=>"SCM",
        RecordType::SIT=>"SIT",
        RecordType::TDM=>"TDM",
        RecordType::TIM=>"TIM",
        RecordType::VCM=>"VCM",
    );

    public static function Name($e)
    {
        if (!isset(self::$names[$e])) {
            throw new \Exception();
        }
        return self::$names[$e];
    }
}
