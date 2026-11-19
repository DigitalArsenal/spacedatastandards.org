/**
 * Which host field of a $SLO is set. Exactly one host field per record. Ordinals are wire values:
 * append only.
 */
export declare enum sloHostScope {
    /**
     * Not stated. A reader rejects the record.
     */
    UNSPECIFIED = 0,
    /**
     * One catalogued object: NORAD_CAT_ID.
     */
    OBJECT = 1,
    /**
     * One ground site: SITE_ID.
     */
    SITE = 2,
    /**
     * One platform with neither a catalogue number nor a $SIT: ENTITY_ID.
     */
    ENTITY = 3,
    /**
     * Every current member of a constellation: CONSTELLATION_ID.
     */
    CONSTELLATION = 4,
    /**
     * Every member of an entity group: GROUP_ID.
     */
    GROUP = 5,
    /**
     * Every object built on a bus design: BUS_ID.
     */
    BUS = 6
}
//# sourceMappingURL=sloHostScope.d.ts.map