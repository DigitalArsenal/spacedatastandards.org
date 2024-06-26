<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Conjunction Summary Message
class CSM extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return CSM
     */
    public static function getRootAsCSM(ByteBuffer $bb)
    {
        $obj = new CSM();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function CSMIdentifier()
    {
        return "$CSM";
    }

    public static function CSMBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::CSMIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return CSM
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Satellite name for the first object
    public function getOBJECT_1()
    {
        $obj = new CAT();
        $o = $this->__offset(4);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// Days since epoch for the first object
    /**
     * @return double
     */
    public function getDSE_1()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Satellite name for the second object
    public function getOBJECT_2()
    {
        $obj = new CAT();
        $o = $this->__offset(8);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// Days since epoch for the second object
    /**
     * @return double
     */
    public function getDSE_2()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Time of closest approach as a Unix timestamp
    /**
     * @return double
     */
    public function getTCA()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// The distance or range between the two objects at TCA
    /**
     * @return double
     */
    public function getTCA_RANGE()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// The magnitude of the relative velocity at TCA
    /**
     * @return double
     */
    public function getTCA_RELATIVE_SPEED()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Maximum probability
    /**
     * @return double
     */
    public function getMAX_PROB()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Standard deviation that produces the maximum probability
    /**
     * @return double
     */
    public function getDILUTION()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startCSM(FlatBufferBuilder $builder)
    {
        $builder->StartObject(9);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return CSM
     */
    public static function createCSM(FlatBufferBuilder $builder, $OBJECT_1, $DSE_1, $OBJECT_2, $DSE_2, $TCA, $TCA_RANGE, $TCA_RELATIVE_SPEED, $MAX_PROB, $DILUTION)
    {
        $builder->startObject(9);
        self::addOBJECT_1($builder, $OBJECT_1);
        self::addDSE_1($builder, $DSE_1);
        self::addOBJECT_2($builder, $OBJECT_2);
        self::addDSE_2($builder, $DSE_2);
        self::addTCA($builder, $TCA);
        self::addTCA_RANGE($builder, $TCA_RANGE);
        self::addTCA_RELATIVE_SPEED($builder, $TCA_RELATIVE_SPEED);
        self::addMAX_PROB($builder, $MAX_PROB);
        self::addDILUTION($builder, $DILUTION);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addOBJECT_1(FlatBufferBuilder $builder, $OBJECT_1)
    {
        $builder->addOffsetX(0, $OBJECT_1, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDSE_1(FlatBufferBuilder $builder, $DSE_1)
    {
        $builder->addDoubleX(1, $DSE_1, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addOBJECT_2(FlatBufferBuilder $builder, $OBJECT_2)
    {
        $builder->addOffsetX(2, $OBJECT_2, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDSE_2(FlatBufferBuilder $builder, $DSE_2)
    {
        $builder->addDoubleX(3, $DSE_2, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addTCA(FlatBufferBuilder $builder, $TCA)
    {
        $builder->addDoubleX(4, $TCA, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addTCA_RANGE(FlatBufferBuilder $builder, $TCA_RANGE)
    {
        $builder->addDoubleX(5, $TCA_RANGE, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addTCA_RELATIVE_SPEED(FlatBufferBuilder $builder, $TCA_RELATIVE_SPEED)
    {
        $builder->addDoubleX(6, $TCA_RELATIVE_SPEED, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addMAX_PROB(FlatBufferBuilder $builder, $MAX_PROB)
    {
        $builder->addDoubleX(7, $MAX_PROB, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addDILUTION(FlatBufferBuilder $builder, $DILUTION)
    {
        $builder->addDoubleX(8, $DILUTION, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endCSM(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishCSMBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$CSM");
    }
}
