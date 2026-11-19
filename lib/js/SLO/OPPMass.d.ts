import * as flatbuffers from 'flatbuffers';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
/**
 * Mass breakdown. Each component is independently sourced; a wet mass and a
 * dry mass may legitimately come from different publishers and epochs.
 */
export declare class OPPMass implements flatbuffers.IUnpackableObject<OPPMassT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPMass;
    static getRootAsOPPMass(bb: flatbuffers.ByteBuffer, obj?: OPPMass): OPPMass;
    static getSizePrefixedRootAsOPPMass(bb: flatbuffers.ByteBuffer, obj?: OPPMass): OPPMass;
    /**
     * Mass without propellant or consumables [kg].
     */
    DRY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Mass with propellant, at the stated epoch [kg].
     */
    WET(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Mass at separation from the launch vehicle [kg].
     */
    LAUNCH(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Propellant mass at the stated epoch [kg].
     */
    PROPELLANT(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Payload mass carried by the bus [kg].
     */
    PAYLOAD(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Best current estimate of mass at the record's epoch [kg].
     */
    CURRENT(obj?: OPPQuantity): OPPQuantity | null;
    static startOPPMass(builder: flatbuffers.Builder): void;
    static addDry(builder: flatbuffers.Builder, DRYOffset: flatbuffers.Offset): void;
    static addWet(builder: flatbuffers.Builder, WETOffset: flatbuffers.Offset): void;
    static addLaunch(builder: flatbuffers.Builder, LAUNCHOffset: flatbuffers.Offset): void;
    static addPropellant(builder: flatbuffers.Builder, PROPELLANTOffset: flatbuffers.Offset): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static addCurrent(builder: flatbuffers.Builder, CURRENTOffset: flatbuffers.Offset): void;
    static endOPPMass(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPMassT;
    unpackTo(_o: OPPMassT): void;
}
export declare class OPPMassT implements flatbuffers.IGeneratedObject {
    DRY: OPPQuantityT | null;
    WET: OPPQuantityT | null;
    LAUNCH: OPPQuantityT | null;
    PROPELLANT: OPPQuantityT | null;
    PAYLOAD: OPPQuantityT | null;
    CURRENT: OPPQuantityT | null;
    constructor(DRY?: OPPQuantityT | null, WET?: OPPQuantityT | null, LAUNCH?: OPPQuantityT | null, PROPELLANT?: OPPQuantityT | null, PAYLOAD?: OPPQuantityT | null, CURRENT?: OPPQuantityT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPMass.d.ts.map