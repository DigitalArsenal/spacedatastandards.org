<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

class PhysicalProperties extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return PhysicalProperties
     */
    public static function getRootAsPhysicalProperties(ByteBuffer $bb)
    {
        $obj = new PhysicalProperties();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function PhysicalPropertiesIdentifier()
    {
        return "$OCM";
    }

    public static function PhysicalPropertiesBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::PhysicalPropertiesIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return PhysicalProperties
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Comments in the Physical Properties section.
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

    /// Wet mass of the space object.
    /**
     * @return double
     */
    public function getWET_MASS()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Dry mass of the space object.
    /**
     * @return double
     */
    public function getDRY_MASS()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Units for mass values.
    public function getMASS_UNITS()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Quaternion component q1 of orientation from OEB to EME2000.
    /**
     * @return double
     */
    public function getOEB_Q1()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Quaternion component q2.
    /**
     * @return double
     */
    public function getOEB_Q2()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Quaternion component q3.
    /**
     * @return double
     */
    public function getOEB_Q3()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Quaternion scalar component qc.
    /**
     * @return double
     */
    public function getOEB_QC()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Maximum dimension of the object along OEB frame axes.
    /**
     * @return double
     */
    public function getOEB_MAX()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Intermediate dimension along OEB frame axes.
    /**
     * @return double
     */
    public function getOEB_INT()
    {
        $o = $this->__offset(22);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Minimum dimension of the object along OEB frame axes.
    /**
     * @return double
     */
    public function getOEB_MIN()
    {
        $o = $this->__offset(24);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Area along OEB_MAX axis.
    /**
     * @return double
     */
    public function getAREA_ALONG_OEB_MAX()
    {
        $o = $this->__offset(26);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Area along OEB_INT axis.
    /**
     * @return double
     */
    public function getAREA_ALONG_OEB_INT()
    {
        $o = $this->__offset(28);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Area along OEB_MIN axis.
    /**
     * @return double
     */
    public function getAREA_ALONG_OEB_MIN()
    {
        $o = $this->__offset(30);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Units for area values.
    public function getAREA_UNITS()
    {
        $o = $this->__offset(32);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Constant area for drag computations.
    /**
     * @return double
     */
    public function getDRAG_CONST_AREA()
    {
        $o = $this->__offset(34);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Nominal drag coefficient.
    /**
     * @return double
     */
    public function getDRAG_COEFF_NOM()
    {
        $o = $this->__offset(36);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Uncertainty in the drag coefficient.
    /**
     * @return double
     */
    public function getDRAG_UNCERTAINTY()
    {
        $o = $this->__offset(38);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Constant area for solar radiation pressure computations.
    /**
     * @return double
     */
    public function getSRP_CONST_AREA()
    {
        $o = $this->__offset(40);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Nominal solar radiation pressure coefficient.
    /**
     * @return double
     */
    public function getSOLAR_RAD_COEFF()
    {
        $o = $this->__offset(42);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Uncertainty in the solar radiation pressure coefficient.
    /**
     * @return double
     */
    public function getSRP_UNCERTAINTY()
    {
        $o = $this->__offset(44);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startPhysicalProperties(FlatBufferBuilder $builder)
    {
        $builder->StartObject(21);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return PhysicalProperties
     */
    public static function createPhysicalProperties(FlatBufferBuilder $builder, $COMMENT, $WET_MASS, $DRY_MASS, $MASS_UNITS, $OEB_Q1, $OEB_Q2, $OEB_Q3, $OEB_QC, $OEB_MAX, $OEB_INT, $OEB_MIN, $AREA_ALONG_OEB_MAX, $AREA_ALONG_OEB_INT, $AREA_ALONG_OEB_MIN, $AREA_UNITS, $DRAG_CONST_AREA, $DRAG_COEFF_NOM, $DRAG_UNCERTAINTY, $SRP_CONST_AREA, $SOLAR_RAD_COEFF, $SRP_UNCERTAINTY)
    {
        $builder->startObject(21);
        self::addCOMMENT($builder, $COMMENT);
        self::addWET_MASS($builder, $WET_MASS);
        self::addDRY_MASS($builder, $DRY_MASS);
        self::addMASS_UNITS($builder, $MASS_UNITS);
        self::addOEB_Q1($builder, $OEB_Q1);
        self::addOEB_Q2($builder, $OEB_Q2);
        self::addOEB_Q3($builder, $OEB_Q3);
        self::addOEB_QC($builder, $OEB_QC);
        self::addOEB_MAX($builder, $OEB_MAX);
        self::addOEB_INT($builder, $OEB_INT);
        self::addOEB_MIN($builder, $OEB_MIN);
        self::addAREA_ALONG_OEB_MAX($builder, $AREA_ALONG_OEB_MAX);
        self::addAREA_ALONG_OEB_INT($builder, $AREA_ALONG_OEB_INT);
        self::addAREA_ALONG_OEB_MIN($builder, $AREA_ALONG_OEB_MIN);
        self::addAREA_UNITS($builder, $AREA_UNITS);
        self::addDRAG_CONST_AREA($builder, $DRAG_CONST_AREA);
        self::addDRAG_COEFF_NOM($builder, $DRAG_COEFF_NOM);
        self::addDRAG_UNCERTAINTY($builder, $DRAG_UNCERTAINTY);
        self::addSRP_CONST_AREA($builder, $SRP_CONST_AREA);
        self::addSOLAR_RAD_COEFF($builder, $SOLAR_RAD_COEFF);
        self::addSRP_UNCERTAINTY($builder, $SRP_UNCERTAINTY);
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
     * @param double
     * @return void
     */
    public static function addWET_MASS(FlatBufferBuilder $builder, $WET_MASS)
    {
        $builder->addDoubleX(1, $WET_MASS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRY_MASS(FlatBufferBuilder $builder, $DRY_MASS)
    {
        $builder->addDoubleX(2, $DRY_MASS, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addMASS_UNITS(FlatBufferBuilder $builder, $MASS_UNITS)
    {
        $builder->addOffsetX(3, $MASS_UNITS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_Q1(FlatBufferBuilder $builder, $OEB_Q1)
    {
        $builder->addDoubleX(4, $OEB_Q1, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_Q2(FlatBufferBuilder $builder, $OEB_Q2)
    {
        $builder->addDoubleX(5, $OEB_Q2, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_Q3(FlatBufferBuilder $builder, $OEB_Q3)
    {
        $builder->addDoubleX(6, $OEB_Q3, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_QC(FlatBufferBuilder $builder, $OEB_QC)
    {
        $builder->addDoubleX(7, $OEB_QC, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_MAX(FlatBufferBuilder $builder, $OEB_MAX)
    {
        $builder->addDoubleX(8, $OEB_MAX, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_INT(FlatBufferBuilder $builder, $OEB_INT)
    {
        $builder->addDoubleX(9, $OEB_INT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addOEB_MIN(FlatBufferBuilder $builder, $OEB_MIN)
    {
        $builder->addDoubleX(10, $OEB_MIN, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addAREA_ALONG_OEB_MAX(FlatBufferBuilder $builder, $AREA_ALONG_OEB_MAX)
    {
        $builder->addDoubleX(11, $AREA_ALONG_OEB_MAX, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addAREA_ALONG_OEB_INT(FlatBufferBuilder $builder, $AREA_ALONG_OEB_INT)
    {
        $builder->addDoubleX(12, $AREA_ALONG_OEB_INT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addAREA_ALONG_OEB_MIN(FlatBufferBuilder $builder, $AREA_ALONG_OEB_MIN)
    {
        $builder->addDoubleX(13, $AREA_ALONG_OEB_MIN, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addAREA_UNITS(FlatBufferBuilder $builder, $AREA_UNITS)
    {
        $builder->addOffsetX(14, $AREA_UNITS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRAG_CONST_AREA(FlatBufferBuilder $builder, $DRAG_CONST_AREA)
    {
        $builder->addDoubleX(15, $DRAG_CONST_AREA, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRAG_COEFF_NOM(FlatBufferBuilder $builder, $DRAG_COEFF_NOM)
    {
        $builder->addDoubleX(16, $DRAG_COEFF_NOM, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDRAG_UNCERTAINTY(FlatBufferBuilder $builder, $DRAG_UNCERTAINTY)
    {
        $builder->addDoubleX(17, $DRAG_UNCERTAINTY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSRP_CONST_AREA(FlatBufferBuilder $builder, $SRP_CONST_AREA)
    {
        $builder->addDoubleX(18, $SRP_CONST_AREA, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSOLAR_RAD_COEFF(FlatBufferBuilder $builder, $SOLAR_RAD_COEFF)
    {
        $builder->addDoubleX(19, $SOLAR_RAD_COEFF, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addSRP_UNCERTAINTY(FlatBufferBuilder $builder, $SRP_UNCERTAINTY)
    {
        $builder->addDoubleX(20, $SRP_UNCERTAINTY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endPhysicalProperties(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}