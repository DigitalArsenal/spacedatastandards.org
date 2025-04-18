<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

class Record extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return Record
     */
    public static function getRootAsRecord(ByteBuffer $bb)
    {
        $obj = new Record();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function RecordIdentifier()
    {
        return "$REC";
    }

    public static function RecordBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::RecordIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return Record
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /**
     * @return byte
     */
    public function getValueType()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->bb->getByte($o + $this->bb_pos) : \RecordType::NONE;
    }

    /**
     * @returnint
     */
    public function getValue($obj)
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__union($obj, $o) : null;
    }

    public function getStandard()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startRecord(FlatBufferBuilder $builder)
    {
        $builder->StartObject(3);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return Record
     */
    public static function createRecord(FlatBufferBuilder $builder, $value_type, $value, $standard)
    {
        $builder->startObject(3);
        self::addValueType($builder, $value_type);
        self::addValue($builder, $value);
        self::addStandard($builder, $standard);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param byte
     * @return void
     */
    public static function addValueType(FlatBufferBuilder $builder, $valueType)
    {
        $builder->addByteX(0, $valueType, 0);
    }

    public static function addValue(FlatBufferBuilder $builder, $offset)
    {
        $builder->addOffsetX(1, $offset, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addStandard(FlatBufferBuilder $builder, $standard)
    {
        $builder->addOffsetX(2, $standard, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endRecord(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}
