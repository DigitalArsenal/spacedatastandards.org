<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// VCM State Vector (position and velocity)
class VCMStateVector extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return VCMStateVector
     */
    public static function getRootAsVCMStateVector(ByteBuffer $bb)
    {
        $obj = new VCMStateVector();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return VCMStateVector
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    public function getEPOCH()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /**
     * @return double
     */
    public function getX()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @return double
     */
    public function getY()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @return double
     */
    public function getZ()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @return double
     */
    public function getX_DOT()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @return double
     */
    public function getY_DOT()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @return double
     */
    public function getZ_DOT()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startVCMStateVector(FlatBufferBuilder $builder)
    {
        $builder->StartObject(7);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return VCMStateVector
     */
    public static function createVCMStateVector(FlatBufferBuilder $builder, $EPOCH, $X, $Y, $Z, $X_DOT, $Y_DOT, $Z_DOT)
    {
        $builder->startObject(7);
        self::addEPOCH($builder, $EPOCH);
        self::addX($builder, $X);
        self::addY($builder, $Y);
        self::addZ($builder, $Z);
        self::addX_DOT($builder, $X_DOT);
        self::addY_DOT($builder, $Y_DOT);
        self::addZ_DOT($builder, $Z_DOT);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addEPOCH(FlatBufferBuilder $builder, $EPOCH)
    {
        $builder->addOffsetX(0, $EPOCH, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addX(FlatBufferBuilder $builder, $X)
    {
        $builder->addDoubleX(1, $X, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addY(FlatBufferBuilder $builder, $Y)
    {
        $builder->addDoubleX(2, $Y, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addZ(FlatBufferBuilder $builder, $Z)
    {
        $builder->addDoubleX(3, $Z, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addX_DOT(FlatBufferBuilder $builder, $X_DOT)
    {
        $builder->addDoubleX(4, $X_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addY_DOT(FlatBufferBuilder $builder, $Y_DOT)
    {
        $builder->addDoubleX(5, $Y_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addZ_DOT(FlatBufferBuilder $builder, $Z_DOT)
    {
        $builder->addDoubleX(6, $Z_DOT, 0.0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endVCMStateVector(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}
