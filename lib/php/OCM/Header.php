<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

class Header extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return Header
     */
    public static function getRootAsHeader(ByteBuffer $bb)
    {
        $obj = new Header();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function HeaderIdentifier()
    {
        return "$OCM";
    }

    public static function HeaderBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::HeaderIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return Header
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Format version in the form of 'x.y', where 'y' is incremented for minor changes, and 'x' for major changes.
    public function getCCSDS_OCM_VERS()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Comments (a contiguous set of one or more comment lines may be provided immediately after the version number).
    /**
     * @param int offset
     * @return string
     */
    public function getCOMMENT($j)
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getCOMMENTLength()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /// User-defined free-text message classification/caveats of this OCM.
    public function getCLASSIFICATION()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// File creation date/time in UTC.
    public function getCREATION_DATE()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Creating agency or operator.
    public function getORIGINATOR()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Free-text field containing an ID that uniquely identifies a message from this originator.
    public function getMESSAGE_ID()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startHeader(FlatBufferBuilder $builder)
    {
        $builder->StartObject(6);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return Header
     */
    public static function createHeader(FlatBufferBuilder $builder, $CCSDS_OCM_VERS, $COMMENT, $CLASSIFICATION, $CREATION_DATE, $ORIGINATOR, $MESSAGE_ID)
    {
        $builder->startObject(6);
        self::addCCSDS_OCM_VERS($builder, $CCSDS_OCM_VERS);
        self::addCOMMENT($builder, $COMMENT);
        self::addCLASSIFICATION($builder, $CLASSIFICATION);
        self::addCREATION_DATE($builder, $CREATION_DATE);
        self::addORIGINATOR($builder, $ORIGINATOR);
        self::addMESSAGE_ID($builder, $MESSAGE_ID);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCCSDS_OCM_VERS(FlatBufferBuilder $builder, $CCSDS_OCM_VERS)
    {
        $builder->addOffsetX(0, $CCSDS_OCM_VERS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addCOMMENT(FlatBufferBuilder $builder, $COMMENT)
    {
        $builder->addOffsetX(1, $COMMENT, 0);
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
     * @param StringOffset
     * @return void
     */
    public static function addCLASSIFICATION(FlatBufferBuilder $builder, $CLASSIFICATION)
    {
        $builder->addOffsetX(2, $CLASSIFICATION, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addCREATION_DATE(FlatBufferBuilder $builder, $CREATION_DATE)
    {
        $builder->addOffsetX(3, $CREATION_DATE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addORIGINATOR(FlatBufferBuilder $builder, $ORIGINATOR)
    {
        $builder->addOffsetX(4, $ORIGINATOR, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addMESSAGE_ID(FlatBufferBuilder $builder, $MESSAGE_ID)
    {
        $builder->addOffsetX(5, $MESSAGE_ID, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endHeader(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}