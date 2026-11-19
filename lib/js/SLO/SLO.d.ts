import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { SNRMounting, SNRMountingT } from './SNRMounting.js';
import { sloHostScope } from './sloHostScope.js';
import { sloUnitState } from './sloUnitState.js';
/**
 * Loadout: one host, or one set of hosts, carries one published configuration.
 */
export declare class SLO implements flatbuffers.IUnpackableObject<SLOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLO;
    static getRootAsSLO(bb: flatbuffers.ByteBuffer, obj?: SLO): SLO;
    static getSizePrefixedRootAsSLO(bb: flatbuffers.ByteBuffer, obj?: SLO): SLO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of this loadout. Together with the publishing key it is the
     * loadout's identity across versions. Recommended form: "<CONFIG_ID>@<host field value>".
     */
    LOADOUT_ID(): string;
    LOADOUT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Four-character standard code of the definition, `$` included: "$SNR" or "$RFB". Never the
     * union ordinal.
     */
    CONFIG_STANDARD(): string;
    CONFIG_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The definition's id, verbatim: $SNR.SENSOR_ID, or $RFB.ID_TRANSMITTER.
     */
    CONFIG_ID(): string;
    CONFIG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional content identifier pinning the exact definition bytes.
     */
    CONFIG_CID(): string | null;
    CONFIG_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Which host field is set.
     */
    HOST_SCOPE(): sloHostScope;
    /**
     * OBJECT: $CAT.NORAD_CAT_ID of the host. 0 = not this scope.
     */
    NORAD_CAT_ID(): number;
    /**
     * SITE: $SIT.ID of the host.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ENTITY: stable non-catalogue entity key of the host, as $SNR.ENTITY_ID.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CONSTELLATION: $CMR.CONSTELLATION_ID of the host set.
     */
    CONSTELLATION_ID(): string | null;
    CONSTELLATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GROUP: $EGP.GROUP_ID of the host set.
     */
    GROUP_ID(): string | null;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BUS: $BUS.ID of the host set, matched against $CAT.BUS_ID.
     */
    BUS_ID(): string | null;
    BUS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp the host starts carrying the configuration,
     * inclusive. Absent = open.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp the host stops carrying it, exclusive. Absent = open.
     */
    VALID_TO(): string | null;
    VALID_TO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of this configuration on each host. 0 = not stated.
     */
    COUNT(): number;
    /**
     * Where the unit sits on the host, as the source names it (a slot, a face, a panel). Two units
     * of one configuration on one host differ by POSITION.
     */
    POSITION(): string | null;
    POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Serial number of the unit, for a single-host loadout.
     */
    SERIAL_NUMBER(): string | null;
    SERIAL_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How this unit sits and points, over the definition's MOUNTING (READING RULE, step 5).
     */
    MOUNTING(obj?: SNRMounting): SNRMounting | null;
    STATUS(): sloUnitState;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp of this version of the loadout.
     */
    UPDATED_AT(): string;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Where the binding was read, one entry per source: a filing, the operator, a catalogue. A
     * user-made loadout carries METHOD USER_DEFINED.
     */
    PROVENANCE(index: number, obj?: OPPProvenance): OPPProvenance | null;
    provenanceLength(): number;
    /**
     * Attribution or citation string the source license requires this record to carry downstream.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publisher note; never a substitute for a field.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSLO(builder: flatbuffers.Builder): void;
    static addLoadoutId(builder: flatbuffers.Builder, LOADOUT_IDOffset: flatbuffers.Offset): void;
    static addConfigStandard(builder: flatbuffers.Builder, CONFIG_STANDARDOffset: flatbuffers.Offset): void;
    static addConfigId(builder: flatbuffers.Builder, CONFIG_IDOffset: flatbuffers.Offset): void;
    static addConfigCid(builder: flatbuffers.Builder, CONFIG_CIDOffset: flatbuffers.Offset): void;
    static addHostScope(builder: flatbuffers.Builder, HOST_SCOPE: sloHostScope): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addConstellationId(builder: flatbuffers.Builder, CONSTELLATION_IDOffset: flatbuffers.Offset): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addBusId(builder: flatbuffers.Builder, BUS_IDOffset: flatbuffers.Offset): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidTo(builder: flatbuffers.Builder, VALID_TOOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static addSerialNumber(builder: flatbuffers.Builder, SERIAL_NUMBEROffset: flatbuffers.Offset): void;
    static addMounting(builder: flatbuffers.Builder, MOUNTINGOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: sloUnitState): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static createProvenanceVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProvenanceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endSLO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSLOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSLOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SLOT;
    unpackTo(_o: SLOT): void;
}
export declare class SLOT implements flatbuffers.IGeneratedObject {
    LOADOUT_ID: string | Uint8Array | null;
    CONFIG_STANDARD: string | Uint8Array | null;
    CONFIG_ID: string | Uint8Array | null;
    CONFIG_CID: string | Uint8Array | null;
    HOST_SCOPE: sloHostScope;
    NORAD_CAT_ID: number;
    SITE_ID: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    CONSTELLATION_ID: string | Uint8Array | null;
    GROUP_ID: string | Uint8Array | null;
    BUS_ID: string | Uint8Array | null;
    VALID_FROM: string | Uint8Array | null;
    VALID_TO: string | Uint8Array | null;
    COUNT: number;
    POSITION: string | Uint8Array | null;
    SERIAL_NUMBER: string | Uint8Array | null;
    MOUNTING: SNRMountingT | null;
    STATUS: sloUnitState;
    UPDATED_AT: string | Uint8Array | null;
    PROVENANCE: (OPPProvenanceT)[];
    CITATION: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(LOADOUT_ID?: string | Uint8Array | null, CONFIG_STANDARD?: string | Uint8Array | null, CONFIG_ID?: string | Uint8Array | null, CONFIG_CID?: string | Uint8Array | null, HOST_SCOPE?: sloHostScope, NORAD_CAT_ID?: number, SITE_ID?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, CONSTELLATION_ID?: string | Uint8Array | null, GROUP_ID?: string | Uint8Array | null, BUS_ID?: string | Uint8Array | null, VALID_FROM?: string | Uint8Array | null, VALID_TO?: string | Uint8Array | null, COUNT?: number, POSITION?: string | Uint8Array | null, SERIAL_NUMBER?: string | Uint8Array | null, MOUNTING?: SNRMountingT | null, STATUS?: sloUnitState, UPDATED_AT?: string | Uint8Array | null, PROVENANCE?: (OPPProvenanceT)[], CITATION?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLO.d.ts.map