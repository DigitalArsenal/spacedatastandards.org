<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Schema Standard Definition
class SCHEMA_STANDARD extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return SCHEMA_STANDARD
     */
    public static function getRootAsSCHEMA_STANDARD(ByteBuffer $bb)
    {
        $obj = new SCHEMA_STANDARD();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function SCHEMA_STANDARDIdentifier()
    {
        return "$SCM";
    }

    public static function SCHEMA_STANDARDBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::SCHEMA_STANDARDIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return SCHEMA_STANDARD
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Unique identifier for the standard
    public function getKey()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// IDL
    public function getIdl()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// List Of File Paths
    /**
     * @param int offset
     * @return string
     */
    public function getFiles($j)
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getFilesLength()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startSCHEMA_STANDARD(FlatBufferBuilder $builder)
    {
        $builder->StartObject(3);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return SCHEMA_STANDARD
     */
    public static function createSCHEMA_STANDARD(FlatBufferBuilder $builder, $key, $idl, $files)
    {
        $builder->startObject(3);
        self::addKey($builder, $key);
        self::addIdl($builder, $idl);
        self::addFiles($builder, $files);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addKey(FlatBufferBuilder $builder, $key)
    {
        $builder->addOffsetX(0, $key, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addIdl(FlatBufferBuilder $builder, $idl)
    {
        $builder->addOffsetX(1, $idl, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addFiles(FlatBufferBuilder $builder, $files)
    {
        $builder->addOffsetX(2, $files, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createFilesVector(FlatBufferBuilder $builder, array $data)
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
    public static function startFilesVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endSCHEMA_STANDARD(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }
}
