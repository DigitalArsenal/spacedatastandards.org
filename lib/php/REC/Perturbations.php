<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

class Perturbations extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return Perturbations
     */
    public static function getRootAsPerturbations(ByteBuffer $bb)
    {
        $obj = new Perturbations();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function PerturbationsIdentifier()
    {
        return "$OCM";
    }

    public static function PerturbationsBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::PerturbationsIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return Perturbations
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Comments in the Perturbations section.
    /**
     * @param int offset
     * @return string
     */
    public function getCOMMENT($j)
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getCOMMENTLength()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /// Atmospheric model used.
    public function getATMOSPHERIC_MODEL()
    {
        $obj = new ATM();
        $o = $this->__offset(6);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// Gravity model used.
    public function getGRAVITY_MODEL()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Degree of the gravity model.
    /**
     * @return int
     */
    public function getGRAVITY_DEGREE()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->bb->getInt($o + $this->bb_pos) : 0;
    }

    /// Order of the gravity model.
    /**
     * @return int
     */
    public function getGRAVITY_ORDER()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->bb->getInt($o + $this->bb_pos) : 0;
    }

    /// Gravitational constant times the mass of the central body.
    /**
     * @return double
     */
    public function getGM()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// List of celestial bodies included in n-body perturbations.
    /**
     * @param int offset
     * @return string
     */
    public function getN_BODY_PERTURBATIONS($j)
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getN_BODY_PERTURBATIONSLength()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /// Ocean tides model used.
    public function getOCEAN_TIDES_MODEL()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Solid tides model used.
    public function getSOLID_TIDES_MODEL()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Atmospheric tides model used.
    public function getATMOSPHERIC_TIDES_MODEL()
    {
        $o = $this->__offset(22);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Geopotential model used.
    public function getGEOPOTENTIAL_MODEL()
    {
        $o = $this->__offset(24);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Solar radiation pressure model used.
    public function getSOLAR_RAD_PRESSURE()
    {
        $o = $this->__offset(26);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Albedo model used.
    public function getALBEDO()
    {
        $o = $this->__offset(28);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Thermal model used.
    public function getTHERMAL()
    {
        $o = $this->__offset(30);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Relativity model used.
    public function getRELATIVITY()
    {
        $o = $this->__offset(32);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Atmospheric drag model used.
    public function getATMOSPHERIC_DRAG()
    {
        $o = $this->__offset(34);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Fixed geomagnetic Kp index used.
    /**
     * @return double
     */
    public function getFIXED_GEOMAG_KP()
    {
        $o = $this->__offset(36);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Fixed F10.7 solar flux value used.
    /**
     * @return double
     */
    public function getFIXED_F10P7()
    {
        $o = $this->__offset(38);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Fixed mean F10.7 solar flux value used.
    /**
     * @return double
     */
    public function getFIXED_F10P7_MEAN()
    {
        $o = $this->__offset(40);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startPerturbations(FlatBufferBuilder $builder)
    {
        $builder->StartObject(19);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return Perturbations
     */
    public static function createPerturbations(FlatBufferBuilder $builder, $COMMENT, $ATMOSPHERIC_MODEL, $GRAVITY_MODEL, $GRAVITY_DEGREE, $GRAVITY_ORDER, $GM, $N_BODY_PERTURBATIONS, $OCEAN_TIDES_MODEL, $SOLID_TIDES_MODEL, $ATMOSPHERIC_TIDES_MODEL, $GEOPOTENTIAL_MODEL, $SOLAR_RAD_PRESSURE, $ALBEDO, $THERMAL, $RELATIVITY, $ATMOSPHERIC_DRAG, $FIXED_GEOMAG_KP, $FIXED_F10P7, $FIXED_F10P7_MEAN)
    {
        $builder->startObject(19);
        self::addCOMMENT($builder, $COMMENT);
        self::addATMOSPHERIC_MODEL($builder, $ATMOSPHERIC_MODEL);
        self::addGRAVITY_MODEL($builder, $GRAVITY_MODEL);
        self::addGRAVITY_DEGREE($builder, $GRAVITY_DEGREE);
        self::addGRAVITY_ORDER($builder, $GRAVITY_ORDER);
        self::addGM($builder, $GM);
        self::addN_BODY_PERTURBATIONS($builder, $N_BODY_PERTURBATIONS);
        self::addOCEAN_TIDES_MODEL($builder, $OCEAN_TIDES_MODEL);
        self::addSOLID_TIDES_MODEL($builder, $SOLID_TIDES_MODEL);
        self::addATMOSPHERIC_TIDES_MODEL($builder, $ATMOSPHERIC_TIDES_MODEL);
        self::addGEOPOTENTIAL_MODEL($builder, $GEOPOTENTIAL_MODEL);
        self::addSOLAR_RAD_PRESSURE($builder, $SOLAR_RAD_PRESSURE);
        self::addALBEDO($builder, $ALBEDO);
        self::addTHERMAL($builder, $THERMAL);
        self::addRELATIVITY($builder, $RELATIVITY);
        self::addATMOSPHERIC_DRAG($builder, $ATMOSPHERIC_DRAG);
        self::addFIXED_GEOMAG_KP($builder, $FIXED_GEOMAG_KP);
        self::addFIXED_F10P7($builder, $FIXED_F10P7);
        self::addFIXED_F10P7_MEAN($builder, $FIXED_F10P7_MEAN);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addCOMMENT(FlatBufferBuilder $builder, $COMMENT)
    {
        $builder->addOffsetX(0, $COMMENT, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createCOMMENTVector(FlatBufferBuilder $builder, array $data)
    {
        $builder->startVector(4, count($data), 4);
        for ($i = count($data) - 1; $i >= 0; $i--) {
            $builder->putOffset($data[$i]);
        }
        return $builder->endVector();
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param int $numElems
     * @return void
     */
    public static function startCOMMENTVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addATMOSPHERIC_MODEL(FlatBufferBuilder $builder, $ATMOSPHERIC_MODEL)
    {
        $builder->addOffsetX(1, $ATMOSPHERIC_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addGRAVITY_MODEL(FlatBufferBuilder $builder, $GRAVITY_MODEL)
    {
        $builder->addOffsetX(2, $GRAVITY_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param int
     * @return void
     */
    public static function addGRAVITY_DEGREE(FlatBufferBuilder $builder, $GRAVITY_DEGREE)
    {
        $builder->addIntX(3, $GRAVITY_DEGREE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param int
     * @return void
     */
    public static function addGRAVITY_ORDER(FlatBufferBuilder $builder, $GRAVITY_ORDER)
    {
        $builder->addIntX(4, $GRAVITY_ORDER, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addGM(FlatBufferBuilder $builder, $GM)
    {
        $builder->addDoubleX(5, $GM, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addN_BODY_PERTURBATIONS(FlatBufferBuilder $builder, $N_BODY_PERTURBATIONS)
    {
        $builder->addOffsetX(6, $N_BODY_PERTURBATIONS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createN_BODY_PERTURBATIONSVector(FlatBufferBuilder $builder, array $data)
    {
        $builder->startVector(4, count($data), 4);
        for ($i = count($data) - 1; $i >= 0; $i--) {
            $builder->putOffset($data[$i]);
        }
        return $builder->endVector();
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param int $numElems
     * @return void
     */
    public static function startN_BODY_PERTURBATIONSVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addOCEAN_TIDES_MODEL(FlatBufferBuilder $builder, $OCEAN_TIDES_MODEL)
    {
        $builder->addOffsetX(7, $OCEAN_TIDES_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addSOLID_TIDES_MODEL(FlatBufferBuilder $builder, $SOLID_TIDES_MODEL)
    {
        $builder->addOffsetX(8, $SOLID_TIDES_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addATMOSPHERIC_TIDES_MODEL(FlatBufferBuilder $builder, $ATMOSPHERIC_TIDES_MODEL)
    {
        $builder->addOffsetX(9, $ATMOSPHERIC_TIDES_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addGEOPOTENTIAL_MODEL(FlatBufferBuilder $builder, $GEOPOTENTIAL_MODEL)
    {
        $builder->addOffsetX(10, $GEOPOTENTIAL_MODEL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addSOLAR_RAD_PRESSURE(FlatBufferBuilder $builder, $SOLAR_RAD_PRESSURE)
    {
        $builder->addOffsetX(11, $SOLAR_RAD_PRESSURE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addALBEDO(FlatBufferBuilder $builder, $ALBEDO)
    {
        $builder->addOffsetX(12, $ALBEDO, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addTHERMAL(FlatBufferBuilder $builder, $THERMAL)
    {
        $builder->addOffsetX(13, $THERMAL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addRELATIVITY(FlatBufferBuilder $builder, $RELATIVITY)
    {
        $builder->addOffsetX(14, $RELATIVITY, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addATMOSPHERIC_DRAG(FlatBufferBuilder $builder, $ATMOSPHERIC_DRAG)
    {
        $builder->addOffsetX(15, $ATMOSPHERIC_DRAG, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addFIXED_GEOMAG_KP(FlatBufferBuilder $builder, $FIXED_GEOMAG_KP)
    {
        $builder->addDoubleX(16, $FIXED_GEOMAG_KP, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addFIXED_F10P7(FlatBufferBuilder $builder, $FIXED_F10P7)
    {
        $builder->addDoubleX(17, $FIXED_F10P7, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addFIXED_F10P7_MEAN(FlatBufferBuilder $builder, $FIXED_F10P7_MEAN)
    {
        $builder->addDoubleX(18, $FIXED_F10P7_MEAN, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endPerturbations(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}
