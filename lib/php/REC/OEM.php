<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Orbit Ephemeris Message
class OEM extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return OEM
     */
    public static function getRootAsOEM(ByteBuffer $bb)
    {
        $obj = new OEM();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function OEMIdentifier()
    {
        return "$OEM";
    }

    public static function OEMBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::OEMIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return OEM
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// OEM Header
    /// OEM Version
    /**
     * @return double
     */
    public function getCCSDS_OEM_VERS()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->bb->getDouble($o + $this->bb_pos) : 0.0;
    }

    /// Creation Date
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

    /// Array of ephemeris data blocks
    /**
     * @returnVectorOffset
     */
    public function getEPHEMERIS_DATA_BLOCK($j)
    {
        $o = $this->__offset(10);
        $obj = new EphemerisDataBlock();
        return $o != 0 ? $obj->init($this->__indirect($this->__vector($o) + $j * 4), $this->bb) : null;
    }

    /**
     * @return int
     */
    public function getEPHEMERIS_DATA_BLOCKLength()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startOEM(FlatBufferBuilder $builder)
    {
        $builder->StartObject(4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return OEM
     */
    public static function createOEM(FlatBufferBuilder $builder, $CCSDS_OEM_VERS, $CREATION_DATE, $ORIGINATOR, $EPHEMERIS_DATA_BLOCK)
    {
        $builder->startObject(4);
        self::addCCSDS_OEM_VERS($builder, $CCSDS_OEM_VERS);
        self::addCREATION_DATE($builder, $CREATION_DATE);
        self::addORIGINATOR($builder, $ORIGINATOR);
        self::addEPHEMERIS_DATA_BLOCK($builder, $EPHEMERIS_DATA_BLOCK);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param double
     * @return void
     */
    public static function addCCSDS_OEM_VERS(FlatBufferBuilder $builder, $CCSDS_OEM_VERS)
    {
        $builder->addDoubleX(0, $CCSDS_OEM_VERS, 0.0);
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
     * @param VectorOffset
     * @return void
     */
    public static function addEPHEMERIS_DATA_BLOCK(FlatBufferBuilder $builder, $EPHEMERIS_DATA_BLOCK)
    {
        $builder->addOffsetX(3, $EPHEMERIS_DATA_BLOCK, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createEPHEMERIS_DATA_BLOCKVector(FlatBufferBuilder $builder, array $data)
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
    public static function startEPHEMERIS_DATA_BLOCKVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endOEM(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishOEMBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$OEM");
    }
}