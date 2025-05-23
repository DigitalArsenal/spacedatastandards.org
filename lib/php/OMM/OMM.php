<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Orbit Mean Elements Message
class OMM extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return OMM
     */
    public static function getRootAsOMM(ByteBuffer $bb)
    {
        $obj = new OMM();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function OMMIdentifier()
    {
        return "$OMM";
    }

    public static function OMMBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::OMMIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return OMM
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// CCSDS OMM Version 
    /**
     * @return double
     */
    public function getCCSDS_OMM_VERS()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Creation Date (ISO 8601 UTC format) 
    public function getCREATION_DATE()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Originator 
    public function getORIGINATOR()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Satellite Name(s)
    public function getOBJECT_NAME()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// International Designator (YYYY-NNNAAA)
    public function getOBJECT_ID()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Center Name (e.g. EARTH, MARS)
    public function getCENTER_NAME()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Reference Frame
    /// Typically TEMEOFDATE
    public function getREFERENCE_FRAME()
    {
        $obj = new RFM();
        $o = $this->__offset(16);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// Reference Frame Epoch (ISO 8601 UTC format)
    public function getREFERENCE_FRAME_EPOCH()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Time System [M, UTC]
    /**
     * @return sbyte
     */
    public function getTIME_SYSTEM()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->bb->getSbyte($o + $this->bb_pos) : \timeSystem::UTC;
    }

    /// Mean Element Theory
    /**
     * @return sbyte
     */
    public function getMEAN_ELEMENT_THEORY()
    {
        $o = $this->__offset(22);
        return $o != 0 ? $this->bb->getSbyte($o + $this->bb_pos) : \meanElementTheory::SGP4;
    }

    /// COMMENT (O)
    public function getCOMMENT()
    {
        $o = $this->__offset(24);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// EPOCH of Mean Keplerian elements (ISO 8601 UTC format)
    public function getEPOCH()
    {
        $o = $this->__offset(26);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Semi-major axis in km or Mean Motion in rev/day
    /**
     * @return double
     */
    public function getSEMI_MAJOR_AXIS()
    {
        $o = $this->__offset(28);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Mean motion in rev/day if MEAN_ELEMENT_THEORY=SGP/SGP4 else unused
    /**
     * @return double
     */
    public function getMEAN_MOTION()
    {
        $o = $this->__offset(30);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Eccentricity (unitless)
    /**
     * @return double
     */
    public function getECCENTRICITY()
    {
        $o = $this->__offset(32);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Inclination in degrees
    /**
     * @return double
     */
    public function getINCLINATION()
    {
        $o = $this->__offset(34);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// RA_OF_ASC_NODE in degrees
    /**
     * @return double
     */
    public function getRA_OF_ASC_NODE()
    {
        $o = $this->__offset(36);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// ARG_OF_PERICENTER in degrees
    /**
     * @return double
     */
    public function getARG_OF_PERICENTER()
    {
        $o = $this->__offset(38);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// MEAN_ANOMALY in degrees
    /**
     * @return double
     */
    public function getMEAN_ANOMALY()
    {
        $o = $this->__offset(40);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// GM in km**3/s**2
    /**
     * @return double
     */
    public function getGM()
    {
        $o = $this->__offset(42);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// MASS in kg
    /**
     * @return double
     */
    public function getMASS()
    {
        $o = $this->__offset(44);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// SOLAR_RAD_AREA in m**2
    /**
     * @return double
     */
    public function getSOLAR_RAD_AREA()
    {
        $o = $this->__offset(46);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// SOLAR_RAD_COEFF (unitless)
    /**
     * @return double
     */
    public function getSOLAR_RAD_COEFF()
    {
        $o = $this->__offset(48);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// DRAG_AREA in m**2
    /**
     * @return double
     */
    public function getDRAG_AREA()
    {
        $o = $this->__offset(50);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// DRAG_COEFF (unitless)
    /**
     * @return double
     */
    public function getDRAG_COEFF()
    {
        $o = $this->__offset(52);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// TLE Related Parameters (Only if MEAN_ELEMENT_THEORY=SGP/SGP4)
    /// EPHEMERIS_TYPE Default=0
    /**
     * @return sbyte
     */
    public function getEPHEMERIS_TYPE()
    {
        $o = $this->__offset(54);
        return $o != 0 ? $this->bb->getSbyte($o + $this->bb_pos) : \ephemerisType::SGP4;
    }

    /// CLASSIFICATION_TYPE Default=U
    public function getCLASSIFICATION_TYPE()
    {
        $o = $this->__offset(56);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// NORAD_CAT_ID (integer) [O if SGP/SGP4]
    /**
     * @return uint
     */
    public function getNORAD_CAT_ID()
    {
        $o = $this->__offset(58);
        return $o != 0 ? $this->bb->getUint($o + $this->bb_pos) : 0;
    }

    /// ELEMENT_SET_NO [O if SGP/SGP4]
    /**
     * @return uint
     */
    public function getELEMENT_SET_NO()
    {
        $o = $this->__offset(60);
        return $o != 0 ? $this->bb->getUint($o + $this->bb_pos) : 0;
    }

    /// REV_AT_EPOCH [O if SGP/SGP4]
    /**
     * @return double
     */
    public function getREV_AT_EPOCH()
    {
        $o = $this->__offset(62);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// BSTAR in 1/Earth radii or BTERM in m²/kg depending on MEAN_ELEMENT_THEORY [C]
    /**
     * @return double
     */
    public function getBSTAR()
    {
        $o = $this->__offset(64);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// MEAN_MOTION_DOT in rev/day² [C if SGP or PPT3]
    /**
     * @return double
     */
    public function getMEAN_MOTION_DOT()
    {
        $o = $this->__offset(66);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// MEAN_MOTION_DDOT in rev/day³ if SGP/PPT3 or AGOM in m²/kg if SGP4-XP [C]
    /**
     * @return double
     */
    public function getMEAN_MOTION_DDOT()
    {
        $o = $this->__offset(68);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Position/Velocity Covariance Matrix (6x6 Lower Triangular) [C if any covariance provided]
    /// COV_REF_FRAME reference frame for covariance [C if covariance given]
    /// Typically RSW
    public function getCOV_REFERENCE_FRAME()
    {
        $obj = new RFM();
        $o = $this->__offset(70);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// CX_X [km**2]
    /**
     * @return double
     */
    public function getCX_X()
    {
        $o = $this->__offset(72);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_X [km**2]
    /**
     * @return double
     */
    public function getCY_X()
    {
        $o = $this->__offset(74);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_Y [km**2]
    /**
     * @return double
     */
    public function getCY_Y()
    {
        $o = $this->__offset(76);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_X [km**2]
    /**
     * @return double
     */
    public function getCZ_X()
    {
        $o = $this->__offset(78);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_Y [km**2]
    /**
     * @return double
     */
    public function getCZ_Y()
    {
        $o = $this->__offset(80);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_Z [km**2]
    /**
     * @return double
     */
    public function getCZ_Z()
    {
        $o = $this->__offset(82);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CX_DOT_X [km**2/s]
    /**
     * @return double
     */
    public function getCX_DOT_X()
    {
        $o = $this->__offset(84);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CX_DOT_Y [km**2/s]
    /**
     * @return double
     */
    public function getCX_DOT_Y()
    {
        $o = $this->__offset(86);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CX_DOT_Z [km**2/s]
    /**
     * @return double
     */
    public function getCX_DOT_Z()
    {
        $o = $this->__offset(88);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CX_DOT_X_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCX_DOT_X_DOT()
    {
        $o = $this->__offset(90);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_DOT_X [km**2/s]
    /**
     * @return double
     */
    public function getCY_DOT_X()
    {
        $o = $this->__offset(92);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_DOT_Y [km**2/s]
    /**
     * @return double
     */
    public function getCY_DOT_Y()
    {
        $o = $this->__offset(94);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_DOT_Z [km**2/s]
    /**
     * @return double
     */
    public function getCY_DOT_Z()
    {
        $o = $this->__offset(96);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_DOT_X_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCY_DOT_X_DOT()
    {
        $o = $this->__offset(98);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CY_DOT_Y_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCY_DOT_Y_DOT()
    {
        $o = $this->__offset(100);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_X [km**2/s]
    /**
     * @return double
     */
    public function getCZ_DOT_X()
    {
        $o = $this->__offset(102);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_Y [km**2/s]
    /**
     * @return double
     */
    public function getCZ_DOT_Y()
    {
        $o = $this->__offset(104);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_Z [km**2/s]
    /**
     * @return double
     */
    public function getCZ_DOT_Z()
    {
        $o = $this->__offset(106);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_X_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCZ_DOT_X_DOT()
    {
        $o = $this->__offset(108);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_Y_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCZ_DOT_Y_DOT()
    {
        $o = $this->__offset(110);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// CZ_DOT_Z_DOT [km**2/s**2]
    /**
     * @return double
     */
    public function getCZ_DOT_Z_DOT()
    {
        $o = $this->__offset(112);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// USER_DEFINED_BIP_0044_TYPE [O, units per ICD]
    /**
     * @return uint
     */
    public function getUSER_DEFINED_BIP_0044_TYPE()
    {
        $o = $this->__offset(114);
        return $o != 0 ? $this->bb->getUint($o + $this->bb_pos) : 0;
    }

    /// USER_DEFINED_OBJECT_DESIGNATOR [O, units per ICD]
    public function getUSER_DEFINED_OBJECT_DESIGNATOR()
    {
        $o = $this->__offset(116);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// USER_DEFINED_EARTH_MODEL [O, units per ICD]
    public function getUSER_DEFINED_EARTH_MODEL()
    {
        $o = $this->__offset(118);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// USER_DEFINED_EPOCH_TIMESTAMP [O, units per ICD]
    /**
     * @return double
     */
    public function getUSER_DEFINED_EPOCH_TIMESTAMP()
    {
        $o = $this->__offset(120);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// USER_DEFINED_MICROSECONDS [O, units per ICD]
    /**
     * @return double
     */
    public function getUSER_DEFINED_MICROSECONDS()
    {
        $o = $this->__offset(122);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startOMM(FlatBufferBuilder $builder)
    {
        $builder->StartObject(60);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return OMM
     */
    public static function createOMM(FlatBufferBuilder $builder, $CCSDS_OMM_VERS, $CREATION_DATE, $ORIGINATOR, $OBJECT_NAME, $OBJECT_ID, $CENTER_NAME, $REFERENCE_FRAME, $REFERENCE_FRAME_EPOCH, $TIME_SYSTEM, $MEAN_ELEMENT_THEORY, $COMMENT, $EPOCH, $SEMI_MAJOR_AXIS, $MEAN_MOTION, $ECCENTRICITY, $INCLINATION, $RA_OF_ASC_NODE, $ARG_OF_PERICENTER, $MEAN_ANOMALY, $GM, $MASS, $SOLAR_RAD_AREA, $SOLAR_RAD_COEFF, $DRAG_AREA, $DRAG_COEFF, $EPHEMERIS_TYPE, $CLASSIFICATION_TYPE, $NORAD_CAT_ID, $ELEMENT_SET_NO, $REV_AT_EPOCH, $BSTAR, $MEAN_MOTION_DOT, $MEAN_MOTION_DDOT, $COV_REFERENCE_FRAME, $CX_X, $CY_X, $CY_Y, $CZ_X, $CZ_Y, $CZ_Z, $CX_DOT_X, $CX_DOT_Y, $CX_DOT_Z, $CX_DOT_X_DOT, $CY_DOT_X, $CY_DOT_Y, $CY_DOT_Z, $CY_DOT_X_DOT, $CY_DOT_Y_DOT, $CZ_DOT_X, $CZ_DOT_Y, $CZ_DOT_Z, $CZ_DOT_X_DOT, $CZ_DOT_Y_DOT, $CZ_DOT_Z_DOT, $USER_DEFINED_BIP_0044_TYPE, $USER_DEFINED_OBJECT_DESIGNATOR, $USER_DEFINED_EARTH_MODEL, $USER_DEFINED_EPOCH_TIMESTAMP, $USER_DEFINED_MICROSECONDS)
    {
        $builder->startObject(60);
        self::addCCSDS_OMM_VERS($builder, $CCSDS_OMM_VERS);
        self::addCREATION_DATE($builder, $CREATION_DATE);
        self::addORIGINATOR($builder, $ORIGINATOR);
        self::addOBJECT_NAME($builder, $OBJECT_NAME);
        self::addOBJECT_ID($builder, $OBJECT_ID);
        self::addCENTER_NAME($builder, $CENTER_NAME);
        self::addREFERENCE_FRAME($builder, $REFERENCE_FRAME);
        self::addREFERENCE_FRAME_EPOCH($builder, $REFERENCE_FRAME_EPOCH);
        self::addTIME_SYSTEM($builder, $TIME_SYSTEM);
        self::addMEAN_ELEMENT_THEORY($builder, $MEAN_ELEMENT_THEORY);
        self::addCOMMENT($builder, $COMMENT);
        self::addEPOCH($builder, $EPOCH);
        self::addSEMI_MAJOR_AXIS($builder, $SEMI_MAJOR_AXIS);
        self::addMEAN_MOTION($builder, $MEAN_MOTION);
        self::addECCENTRICITY($builder, $ECCENTRICITY);
        self::addINCLINATION($builder, $INCLINATION);
        self::addRA_OF_ASC_NODE($builder, $RA_OF_ASC_NODE);
        self::addARG_OF_PERICENTER($builder, $ARG_OF_PERICENTER);
        self::addMEAN_ANOMALY($builder, $MEAN_ANOMALY);
        self::addGM($builder, $GM);
        self::addMASS($builder, $MASS);
        self::addSOLAR_RAD_AREA($builder, $SOLAR_RAD_AREA);
        self::addSOLAR_RAD_COEFF($builder, $SOLAR_RAD_COEFF);
        self::addDRAG_AREA($builder, $DRAG_AREA);
        self::addDRAG_COEFF($builder, $DRAG_COEFF);
        self::addEPHEMERIS_TYPE($builder, $EPHEMERIS_TYPE);
        self::addCLASSIFICATION_TYPE($builder, $CLASSIFICATION_TYPE);
        self::addNORAD_CAT_ID($builder, $NORAD_CAT_ID);
        self::addELEMENT_SET_NO($builder, $ELEMENT_SET_NO);
        self::addREV_AT_EPOCH($builder, $REV_AT_EPOCH);
        self::addBSTAR($builder, $BSTAR);
        self::addMEAN_MOTION_DOT($builder, $MEAN_MOTION_DOT);
        self::addMEAN_MOTION_DDOT($builder, $MEAN_MOTION_DDOT);
        self::addCOV_REFERENCE_FRAME($builder, $COV_REFERENCE_FRAME);
        self::addCX_X($builder, $CX_X);
        self::addCY_X($builder, $CY_X);
        self::addCY_Y($builder, $CY_Y);
        self::addCZ_X($builder, $CZ_X);
        self::addCZ_Y($builder, $CZ_Y);
        self::addCZ_Z($builder, $CZ_Z);
        self::addCX_DOT_X($builder, $CX_DOT_X);
        self::addCX_DOT_Y($builder, $CX_DOT_Y);
        self::addCX_DOT_Z($builder, $CX_DOT_Z);
        self::addCX_DOT_X_DOT($builder, $CX_DOT_X_DOT);
        self::addCY_DOT_X($builder, $CY_DOT_X);
        self::addCY_DOT_Y($builder, $CY_DOT_Y);
        self::addCY_DOT_Z($builder, $CY_DOT_Z);
        self::addCY_DOT_X_DOT($builder, $CY_DOT_X_DOT);
        self::addCY_DOT_Y_DOT($builder, $CY_DOT_Y_DOT);
        self::addCZ_DOT_X($builder, $CZ_DOT_X);
        self::addCZ_DOT_Y($builder, $CZ_DOT_Y);
        self::addCZ_DOT_Z($builder, $CZ_DOT_Z);
        self::addCZ_DOT_X_DOT($builder, $CZ_DOT_X_DOT);
        self::addCZ_DOT_Y_DOT($builder, $CZ_DOT_Y_DOT);
        self::addCZ_DOT_Z_DOT($builder, $CZ_DOT_Z_DOT);
        self::addUSER_DEFINED_BIP_0044_TYPE($builder, $USER_DEFINED_BIP_0044_TYPE);
        self::addUSER_DEFINED_OBJECT_DESIGNATOR($builder, $USER_DEFINED_OBJECT_DESIGNATOR);
        self::addUSER_DEFINED_EARTH_MODEL($builder, $USER_DEFINED_EARTH_MODEL);
        self::addUSER_DEFINED_EPOCH_TIMESTAMP($builder, $USER_DEFINED_EPOCH_TIMESTAMP);
        self::addUSER_DEFINED_MICROSECONDS($builder, $USER_DEFINED_MICROSECONDS);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCCSDS_OMM_VERS(FlatBufferBuilder $builder, $CCSDS_OMM_VERS)
    {
        $builder->addDoubleX(0, $CCSDS_OMM_VERS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCREATION_DATE(FlatBufferBuilder $builder, $CREATION_DATE)
    {
        $builder->addOffsetX(1, $CREATION_DATE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addORIGINATOR(FlatBufferBuilder $builder, $ORIGINATOR)
    {
        $builder->addOffsetX(2, $ORIGINATOR, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addOBJECT_NAME(FlatBufferBuilder $builder, $OBJECT_NAME)
    {
        $builder->addOffsetX(3, $OBJECT_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addOBJECT_ID(FlatBufferBuilder $builder, $OBJECT_ID)
    {
        $builder->addOffsetX(4, $OBJECT_ID, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCENTER_NAME(FlatBufferBuilder $builder, $CENTER_NAME)
    {
        $builder->addOffsetX(5, $CENTER_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addREFERENCE_FRAME(FlatBufferBuilder $builder, $REFERENCE_FRAME)
    {
        $builder->addOffsetX(6, $REFERENCE_FRAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addREFERENCE_FRAME_EPOCH(FlatBufferBuilder $builder, $REFERENCE_FRAME_EPOCH)
    {
        $builder->addOffsetX(7, $REFERENCE_FRAME_EPOCH, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param sbyte
     * @return void
     */
    public static function addTIME_SYSTEM(FlatBufferBuilder $builder, $TIME_SYSTEM)
    {
        $builder->addSbyteX(8, $TIME_SYSTEM, 11);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param sbyte
     * @return void
     */
    public static function addMEAN_ELEMENT_THEORY(FlatBufferBuilder $builder, $MEAN_ELEMENT_THEORY)
    {
        $builder->addSbyteX(9, $MEAN_ELEMENT_THEORY, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCOMMENT(FlatBufferBuilder $builder, $COMMENT)
    {
        $builder->addOffsetX(10, $COMMENT, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addEPOCH(FlatBufferBuilder $builder, $EPOCH)
    {
        $builder->addOffsetX(11, $EPOCH, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSEMI_MAJOR_AXIS(FlatBufferBuilder $builder, $SEMI_MAJOR_AXIS)
    {
        $builder->addDoubleX(12, $SEMI_MAJOR_AXIS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_MOTION(FlatBufferBuilder $builder, $MEAN_MOTION)
    {
        $builder->addDoubleX(13, $MEAN_MOTION, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addECCENTRICITY(FlatBufferBuilder $builder, $ECCENTRICITY)
    {
        $builder->addDoubleX(14, $ECCENTRICITY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addINCLINATION(FlatBufferBuilder $builder, $INCLINATION)
    {
        $builder->addDoubleX(15, $INCLINATION, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addRA_OF_ASC_NODE(FlatBufferBuilder $builder, $RA_OF_ASC_NODE)
    {
        $builder->addDoubleX(16, $RA_OF_ASC_NODE, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addARG_OF_PERICENTER(FlatBufferBuilder $builder, $ARG_OF_PERICENTER)
    {
        $builder->addDoubleX(17, $ARG_OF_PERICENTER, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_ANOMALY(FlatBufferBuilder $builder, $MEAN_ANOMALY)
    {
        $builder->addDoubleX(18, $MEAN_ANOMALY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addGM(FlatBufferBuilder $builder, $GM)
    {
        $builder->addDoubleX(19, $GM, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMASS(FlatBufferBuilder $builder, $MASS)
    {
        $builder->addDoubleX(20, $MASS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSOLAR_RAD_AREA(FlatBufferBuilder $builder, $SOLAR_RAD_AREA)
    {
        $builder->addDoubleX(21, $SOLAR_RAD_AREA, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSOLAR_RAD_COEFF(FlatBufferBuilder $builder, $SOLAR_RAD_COEFF)
    {
        $builder->addDoubleX(22, $SOLAR_RAD_COEFF, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRAG_AREA(FlatBufferBuilder $builder, $DRAG_AREA)
    {
        $builder->addDoubleX(23, $DRAG_AREA, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRAG_COEFF(FlatBufferBuilder $builder, $DRAG_COEFF)
    {
        $builder->addDoubleX(24, $DRAG_COEFF, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param sbyte
     * @return void
     */
    public static function addEPHEMERIS_TYPE(FlatBufferBuilder $builder, $EPHEMERIS_TYPE)
    {
        $builder->addSbyteX(25, $EPHEMERIS_TYPE, 1);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCLASSIFICATION_TYPE(FlatBufferBuilder $builder, $CLASSIFICATION_TYPE)
    {
        $builder->addOffsetX(26, $CLASSIFICATION_TYPE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param uint
     * @return void
     */
    public static function addNORAD_CAT_ID(FlatBufferBuilder $builder, $NORAD_CAT_ID)
    {
        $builder->addUintX(27, $NORAD_CAT_ID, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param uint
     * @return void
     */
    public static function addELEMENT_SET_NO(FlatBufferBuilder $builder, $ELEMENT_SET_NO)
    {
        $builder->addUintX(28, $ELEMENT_SET_NO, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addREV_AT_EPOCH(FlatBufferBuilder $builder, $REV_AT_EPOCH)
    {
        $builder->addDoubleX(29, $REV_AT_EPOCH, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addBSTAR(FlatBufferBuilder $builder, $BSTAR)
    {
        $builder->addDoubleX(30, $BSTAR, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_MOTION_DOT(FlatBufferBuilder $builder, $MEAN_MOTION_DOT)
    {
        $builder->addDoubleX(31, $MEAN_MOTION_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_MOTION_DDOT(FlatBufferBuilder $builder, $MEAN_MOTION_DDOT)
    {
        $builder->addDoubleX(32, $MEAN_MOTION_DDOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addCOV_REFERENCE_FRAME(FlatBufferBuilder $builder, $COV_REFERENCE_FRAME)
    {
        $builder->addOffsetX(33, $COV_REFERENCE_FRAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCX_X(FlatBufferBuilder $builder, $CX_X)
    {
        $builder->addDoubleX(34, $CX_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_X(FlatBufferBuilder $builder, $CY_X)
    {
        $builder->addDoubleX(35, $CY_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_Y(FlatBufferBuilder $builder, $CY_Y)
    {
        $builder->addDoubleX(36, $CY_Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_X(FlatBufferBuilder $builder, $CZ_X)
    {
        $builder->addDoubleX(37, $CZ_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_Y(FlatBufferBuilder $builder, $CZ_Y)
    {
        $builder->addDoubleX(38, $CZ_Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_Z(FlatBufferBuilder $builder, $CZ_Z)
    {
        $builder->addDoubleX(39, $CZ_Z, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCX_DOT_X(FlatBufferBuilder $builder, $CX_DOT_X)
    {
        $builder->addDoubleX(40, $CX_DOT_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCX_DOT_Y(FlatBufferBuilder $builder, $CX_DOT_Y)
    {
        $builder->addDoubleX(41, $CX_DOT_Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCX_DOT_Z(FlatBufferBuilder $builder, $CX_DOT_Z)
    {
        $builder->addDoubleX(42, $CX_DOT_Z, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCX_DOT_X_DOT(FlatBufferBuilder $builder, $CX_DOT_X_DOT)
    {
        $builder->addDoubleX(43, $CX_DOT_X_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_DOT_X(FlatBufferBuilder $builder, $CY_DOT_X)
    {
        $builder->addDoubleX(44, $CY_DOT_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_DOT_Y(FlatBufferBuilder $builder, $CY_DOT_Y)
    {
        $builder->addDoubleX(45, $CY_DOT_Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_DOT_Z(FlatBufferBuilder $builder, $CY_DOT_Z)
    {
        $builder->addDoubleX(46, $CY_DOT_Z, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_DOT_X_DOT(FlatBufferBuilder $builder, $CY_DOT_X_DOT)
    {
        $builder->addDoubleX(47, $CY_DOT_X_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCY_DOT_Y_DOT(FlatBufferBuilder $builder, $CY_DOT_Y_DOT)
    {
        $builder->addDoubleX(48, $CY_DOT_Y_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_X(FlatBufferBuilder $builder, $CZ_DOT_X)
    {
        $builder->addDoubleX(49, $CZ_DOT_X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_Y(FlatBufferBuilder $builder, $CZ_DOT_Y)
    {
        $builder->addDoubleX(50, $CZ_DOT_Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_Z(FlatBufferBuilder $builder, $CZ_DOT_Z)
    {
        $builder->addDoubleX(51, $CZ_DOT_Z, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_X_DOT(FlatBufferBuilder $builder, $CZ_DOT_X_DOT)
    {
        $builder->addDoubleX(52, $CZ_DOT_X_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_Y_DOT(FlatBufferBuilder $builder, $CZ_DOT_Y_DOT)
    {
        $builder->addDoubleX(53, $CZ_DOT_Y_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCZ_DOT_Z_DOT(FlatBufferBuilder $builder, $CZ_DOT_Z_DOT)
    {
        $builder->addDoubleX(54, $CZ_DOT_Z_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param uint
     * @return void
     */
    public static function addUSER_DEFINED_BIP_0044_TYPE(FlatBufferBuilder $builder, $USER_DEFINED_BIP_0044_TYPE)
    {
        $builder->addUintX(55, $USER_DEFINED_BIP_0044_TYPE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addUSER_DEFINED_OBJECT_DESIGNATOR(FlatBufferBuilder $builder, $USER_DEFINED_OBJECT_DESIGNATOR)
    {
        $builder->addOffsetX(56, $USER_DEFINED_OBJECT_DESIGNATOR, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addUSER_DEFINED_EARTH_MODEL(FlatBufferBuilder $builder, $USER_DEFINED_EARTH_MODEL)
    {
        $builder->addOffsetX(57, $USER_DEFINED_EARTH_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addUSER_DEFINED_EPOCH_TIMESTAMP(FlatBufferBuilder $builder, $USER_DEFINED_EPOCH_TIMESTAMP)
    {
        $builder->addDoubleX(58, $USER_DEFINED_EPOCH_TIMESTAMP, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addUSER_DEFINED_MICROSECONDS(FlatBufferBuilder $builder, $USER_DEFINED_MICROSECONDS)
    {
        $builder->addDoubleX(59, $USER_DEFINED_MICROSECONDS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endOMM(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishOMMBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$OMM");
    }
}
