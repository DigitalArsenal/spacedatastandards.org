<?php
// automatically generated by the FlatBuffers compiler, do not modify

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

/// Entity Profile Message
class EPM extends Table
{
    /**
     * @param ByteBuffer $bb
     * @return EPM
     */
    public static function getRootAsEPM(ByteBuffer $bb)
    {
        $obj = new EPM();
        return ($obj->init($bb->getInt($bb->getPosition()) + $bb->getPosition(), $bb));
    }

    public static function EPMIdentifier()
    {
        return "$EPM";
    }

    public static function EPMBufferHasIdentifier(ByteBuffer $buf)
    {
        return self::__has_identifier($buf, self::EPMIdentifier());
    }

    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return EPM
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /// Distinguished Name of the entity
    public function getDN()
    {
        $o = $this->__offset(4);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Common name of the entity (person or organization)
    public function getLEGAL_NAME()
    {
        $o = $this->__offset(6);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Family name or surname of the person
    public function getFAMILY_NAME()
    {
        $o = $this->__offset(8);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Given name or first name of the person
    public function getGIVEN_NAME()
    {
        $o = $this->__offset(10);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Additional name or middle name of the person
    public function getADDITIONAL_NAME()
    {
        $o = $this->__offset(12);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Honorific prefix preceding the person's name (e.g., Mr., Dr.)
    public function getHONORIFIC_PREFIX()
    {
        $o = $this->__offset(14);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Honorific suffix following the person's name (e.g., Jr., Sr.)
    public function getHONORIFIC_SUFFIX()
    {
        $o = $this->__offset(16);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Job title of the person
    public function getJOB_TITLE()
    {
        $o = $this->__offset(18);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Occupation of the person
    public function getOCCUPATION()
    {
        $o = $this->__offset(20);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Physical Address
    public function getADDRESS()
    {
        $obj = new Address();
        $o = $this->__offset(22);
        return $o != 0 ? $obj->init($this->__indirect($o + $this->bb_pos), $this->bb) : 0;
    }

    /// Alternate names for the entity
    /**
     * @param int offset
     * @return string
     */
    public function getALTERNATE_NAMES($j)
    {
        $o = $this->__offset(24);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getALTERNATE_NAMESLength()
    {
        $o = $this->__offset(24);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /// Email address of the entity
    public function getEMAIL()
    {
        $o = $this->__offset(26);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Telephone number of the entity
    public function getTELEPHONE()
    {
        $o = $this->__offset(28);
        return $o != 0 ? $this->__string($o + $this->bb_pos) : null;
    }

    /// Cryptographic keys associated with the entity
    /**
     * @returnVectorOffset
     */
    public function getKEYS($j)
    {
        $o = $this->__offset(30);
        $obj = new CryptoKey();
        return $o != 0 ? $obj->init($this->__indirect($this->__vector($o) + $j * 4), $this->bb) : null;
    }

    /**
     * @return int
     */
    public function getKEYSLength()
    {
        $o = $this->__offset(30);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /// Multiformat addresses associated with the entity
    /**
     * @param int offset
     * @return string
     */
    public function getMULTIFORMAT_ADDRESS($j)
    {
        $o = $this->__offset(32);
        return $o != 0 ? $this->__string($this->__vector($o) + $j * 4) : 0;
    }

    /**
     * @return int
     */
    public function getMULTIFORMAT_ADDRESSLength()
    {
        $o = $this->__offset(32);
        return $o != 0 ? $this->__vector_len($o) : 0;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return void
     */
    public static function startEPM(FlatBufferBuilder $builder)
    {
        $builder->StartObject(15);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return EPM
     */
    public static function createEPM(FlatBufferBuilder $builder, $DN, $LEGAL_NAME, $FAMILY_NAME, $GIVEN_NAME, $ADDITIONAL_NAME, $HONORIFIC_PREFIX, $HONORIFIC_SUFFIX, $JOB_TITLE, $OCCUPATION, $ADDRESS, $ALTERNATE_NAMES, $EMAIL, $TELEPHONE, $KEYS, $MULTIFORMAT_ADDRESS)
    {
        $builder->startObject(15);
        self::addDN($builder, $DN);
        self::addLEGAL_NAME($builder, $LEGAL_NAME);
        self::addFAMILY_NAME($builder, $FAMILY_NAME);
        self::addGIVEN_NAME($builder, $GIVEN_NAME);
        self::addADDITIONAL_NAME($builder, $ADDITIONAL_NAME);
        self::addHONORIFIC_PREFIX($builder, $HONORIFIC_PREFIX);
        self::addHONORIFIC_SUFFIX($builder, $HONORIFIC_SUFFIX);
        self::addJOB_TITLE($builder, $JOB_TITLE);
        self::addOCCUPATION($builder, $OCCUPATION);
        self::addADDRESS($builder, $ADDRESS);
        self::addALTERNATE_NAMES($builder, $ALTERNATE_NAMES);
        self::addEMAIL($builder, $EMAIL);
        self::addTELEPHONE($builder, $TELEPHONE);
        self::addKEYS($builder, $KEYS);
        self::addMULTIFORMAT_ADDRESS($builder, $MULTIFORMAT_ADDRESS);
        $o = $builder->endObject();
        return $o;
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addDN(FlatBufferBuilder $builder, $DN)
    {
        $builder->addOffsetX(0, $DN, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addLEGAL_NAME(FlatBufferBuilder $builder, $LEGAL_NAME)
    {
        $builder->addOffsetX(1, $LEGAL_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addFAMILY_NAME(FlatBufferBuilder $builder, $FAMILY_NAME)
    {
        $builder->addOffsetX(2, $FAMILY_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addGIVEN_NAME(FlatBufferBuilder $builder, $GIVEN_NAME)
    {
        $builder->addOffsetX(3, $GIVEN_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addADDITIONAL_NAME(FlatBufferBuilder $builder, $ADDITIONAL_NAME)
    {
        $builder->addOffsetX(4, $ADDITIONAL_NAME, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addHONORIFIC_PREFIX(FlatBufferBuilder $builder, $HONORIFIC_PREFIX)
    {
        $builder->addOffsetX(5, $HONORIFIC_PREFIX, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addHONORIFIC_SUFFIX(FlatBufferBuilder $builder, $HONORIFIC_SUFFIX)
    {
        $builder->addOffsetX(6, $HONORIFIC_SUFFIX, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addJOB_TITLE(FlatBufferBuilder $builder, $JOB_TITLE)
    {
        $builder->addOffsetX(7, $JOB_TITLE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addOCCUPATION(FlatBufferBuilder $builder, $OCCUPATION)
    {
        $builder->addOffsetX(8, $OCCUPATION, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param int
     * @return void
     */
    public static function addADDRESS(FlatBufferBuilder $builder, $ADDRESS)
    {
        $builder->addOffsetX(9, $ADDRESS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addALTERNATE_NAMES(FlatBufferBuilder $builder, $ALTERNATE_NAMES)
    {
        $builder->addOffsetX(10, $ALTERNATE_NAMES, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createALTERNATE_NAMESVector(FlatBufferBuilder $builder, array $data)
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
    public static function startALTERNATE_NAMESVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addEMAIL(FlatBufferBuilder $builder, $EMAIL)
    {
        $builder->addOffsetX(11, $EMAIL, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param StringOffset
     * @return void
     */
    public static function addTELEPHONE(FlatBufferBuilder $builder, $TELEPHONE)
    {
        $builder->addOffsetX(12, $TELEPHONE, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addKEYS(FlatBufferBuilder $builder, $KEYS)
    {
        $builder->addOffsetX(13, $KEYS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createKEYSVector(FlatBufferBuilder $builder, array $data)
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
    public static function startKEYSVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param VectorOffset
     * @return void
     */
    public static function addMULTIFORMAT_ADDRESS(FlatBufferBuilder $builder, $MULTIFORMAT_ADDRESS)
    {
        $builder->addOffsetX(14, $MULTIFORMAT_ADDRESS, 0);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @param array offset array
     * @return int vector offset
     */
    public static function createMULTIFORMAT_ADDRESSVector(FlatBufferBuilder $builder, array $data)
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
    public static function startMULTIFORMAT_ADDRESSVector(FlatBufferBuilder $builder, $numElems)
    {
        $builder->startVector(4, $numElems, 4);
    }

    /**
     * @param FlatBufferBuilder $builder
     * @return int table offset
     */
    public static function endEPM(FlatBufferBuilder $builder)
    {
        $o = $builder->endObject();
        return $o;
    }

    public static function finishEPMBuffer(FlatBufferBuilder $builder, $offset)
    {
        $builder->finish($offset, "$EPM");
    }
}