<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Minimum Propagatable Element Set
class MPE extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return MPE
     */
    public static function getRootAsMPE(ByteBuffer $bb)
    {
        $obj = new MPE();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function MPEIdentifier()
    {
        return "$MPE";
    }

    public static function MPEBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::MPEIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return MPE
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Unique ID as a String
    public function getENTITY_ID()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Epoch of Mean Keplerian elements. (UNIX TimeStamp)
    /**
     * @return double
     */
    public function getEPOCH()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Semi-major axis in km or mean motion in rev/day
    /**
     * @return double
     */
    public function getMEAN_MOTION()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Eccentricity
    /**
     * @return double
     */
    public function getECCENTRICITY()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Inclination
    /**
     * @return double
     */
    public function getINCLINATION()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Right ascension of ascending node
    /**
     * @return double
     */
    public function getRA_OF_ASC_NODE()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Argument of pericenter
    /**
     * @return double
     */
    public function getARG_OF_PERICENTER()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Mean anomaly
    /**
     * @return double
     */
    public function getMEAN_ANOMALY()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
    /**
     * @return double
     */
    public function getBSTAR()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Description of the Mean Element Theory. (SGP4,DSST,USM)
    /**
     * @return sbyte
     */
    public function getMEAN_ELEMENT_THEORY()
    {
        $o = $this->__offset(22);
        return $o != 0 ? $this->bb->getSbyte($o + $this->bb_pos) : \meanElementTheory::SGP4;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startMPE(FlatBufferBuilder $builder)
    {
        $builder->StartObject(10);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return MPE
     */
    public static function createMPE(FlatBufferBuilder $builder, $ENTITY_ID, $EPOCH, $MEAN_MOTION, $ECCENTRICITY, $INCLINATION, $RA_OF_ASC_NODE, $ARG_OF_PERICENTER, $MEAN_ANOMALY, $BSTAR, $MEAN_ELEMENT_THEORY)
    {
        $builder->startObject(10);
        self::addENTITY_ID($builder, $ENTITY_ID);
        self::addEPOCH($builder, $EPOCH);
        self::addMEAN_MOTION($builder, $MEAN_MOTION);
        self::addECCENTRICITY($builder, $ECCENTRICITY);
        self::addINCLINATION($builder, $INCLINATION);
        self::addRA_OF_ASC_NODE($builder, $RA_OF_ASC_NODE);
        self::addARG_OF_PERICENTER($builder, $ARG_OF_PERICENTER);
        self::addMEAN_ANOMALY($builder, $MEAN_ANOMALY);
        self::addBSTAR($builder, $BSTAR);
        self::addMEAN_ELEMENT_THEORY($builder, $MEAN_ELEMENT_THEORY);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addENTITY_ID(FlatBufferBuilder $builder, $ENTITY_ID)
    {
        $builder->addOffsetX(0, $ENTITY_ID, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addEPOCH(FlatBufferBuilder $builder, $EPOCH)
    {
        $builder->addDoubleX(1, $EPOCH, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_MOTION(FlatBufferBuilder $builder, $MEAN_MOTION)
    {
        $builder->addDoubleX(2, $MEAN_MOTION, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addECCENTRICITY(FlatBufferBuilder $builder, $ECCENTRICITY)
    {
        $builder->addDoubleX(3, $ECCENTRICITY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addINCLINATION(FlatBufferBuilder $builder, $INCLINATION)
    {
        $builder->addDoubleX(4, $INCLINATION, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addRA_OF_ASC_NODE(FlatBufferBuilder $builder, $RA_OF_ASC_NODE)
    {
        $builder->addDoubleX(5, $RA_OF_ASC_NODE, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addARG_OF_PERICENTER(FlatBufferBuilder $builder, $ARG_OF_PERICENTER)
    {
        $builder->addDoubleX(6, $ARG_OF_PERICENTER, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMEAN_ANOMALY(FlatBufferBuilder $builder, $MEAN_ANOMALY)
    {
        $builder->addDoubleX(7, $MEAN_ANOMALY, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addBSTAR(FlatBufferBuilder $builder, $BSTAR)
    {
        $builder->addDoubleX(8, $BSTAR, 0.0);
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
     * @return int table offset
     */
    public static function endMPE(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishMPEBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$MPE");
    }
}