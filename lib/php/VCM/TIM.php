<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Time System
class TIM extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return TIM
     */
    public static function getRootAsTIM(ByteBuffer $bb)
    {
        $obj = new TIM();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function TIMIdentifier()
    {
        return "$TIM";
    }

    public static function TIMBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::TIMIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return TIM
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /**
     * @return sbyte
     */
    public function getTIME_SYSTEM()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->bb->getSbyte($o + $this->bb_pos) : \timeSystem::GMST;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startTIM(FlatBufferBuilder $builder)
    {
        $builder->StartObject(1);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return TIM
     */
    public static function createTIM(FlatBufferBuilder $builder, $TIME_SYSTEM)
    {
        $builder->startObject(1);
        self::addTIME_SYSTEM($builder, $TIME_SYSTEM);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param sbyte
     * @return void
     */
    public static function addTIME_SYSTEM(FlatBufferBuilder $builder, $TIME_SYSTEM)
    {
        $builder->addSbyteX(0, $TIME_SYSTEM, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endTIM(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishTIMBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$TIM");
    }
}