<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Table representing a frequency band with a name and frequency range
class Band extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return Band
     */
    public static function getRootAsBand(ByteBuffer $bb)
    {
        $obj = new Band();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function BandIdentifier()
    {
        return "$IDM";
    }

    public static function BandBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::BandIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return Band
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Name of the band
    public function getNAME()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Frequency range of the band
    public function getFREQUENCY_RANGE()
    {
        $obj = new FrequencyRange();
        $o = $this->__offset(6);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startBand(FlatBufferBuilder $builder)
    {
        $builder->StartObject(2);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return Band
     */
    public static function createBand(FlatBufferBuilder $builder, $NAME, $FREQUENCY_RANGE)
    {
        $builder->startObject(2);
        self::addNAME($builder, $NAME);
        self::addFREQUENCY_RANGE($builder, $FREQUENCY_RANGE);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addNAME(FlatBufferBuilder $builder, $NAME)
    {
        $builder->addOffsetX(0, $NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addFREQUENCY_RANGE(FlatBufferBuilder $builder, $FREQUENCY_RANGE)
    {
        $builder->addOffsetX(1, $FREQUENCY_RANGE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endBand(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}
