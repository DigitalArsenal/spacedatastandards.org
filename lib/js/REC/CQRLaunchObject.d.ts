import * as flatbuffers from 'flatbuffers';
import { CQRObjectSource, CQRObjectSourceT } from './CQRObjectSource.js';
import { cqrLaunchObjectClass } from './cqrLaunchObjectClass.js';
/**
 * One orbiting object to screen against.
 */
export declare class CQRLaunchObject implements flatbuffers.IUnpackableObject<CQRLaunchObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchObject;
    static getRootAsCQRLaunchObject(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchObject): CQRLaunchObject;
    static getSizePrefixedRootAsCQRLaunchObject(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchObject): CQRLaunchObject;
    /**
     * Ephemeris in EVALUATION_FRAME covering the screened absolute times.
     */
    SOURCE(obj?: CQRObjectSource): CQRObjectSource | null;
    OBJECT_CLASS(): cqrLaunchObjectClass;
    /**
     * A pre-coordinated rendezvous or close approach: reported, never a
     * window closure.
     */
    RENDEZVOUS_COORDINATED(): boolean;
    static startCQRLaunchObject(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addObjectClass(builder: flatbuffers.Builder, OBJECT_CLASS: cqrLaunchObjectClass): void;
    static addRendezvousCoordinated(builder: flatbuffers.Builder, RENDEZVOUS_COORDINATED: boolean): void;
    static endCQRLaunchObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRLaunchObject(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, OBJECT_CLASS: cqrLaunchObjectClass, RENDEZVOUS_COORDINATED: boolean): flatbuffers.Offset;
    unpack(): CQRLaunchObjectT;
    unpackTo(_o: CQRLaunchObjectT): void;
}
export declare class CQRLaunchObjectT implements flatbuffers.IGeneratedObject {
    SOURCE: CQRObjectSourceT | null;
    OBJECT_CLASS: cqrLaunchObjectClass;
    RENDEZVOUS_COORDINATED: boolean;
    constructor(SOURCE?: CQRObjectSourceT | null, OBJECT_CLASS?: cqrLaunchObjectClass, RENDEZVOUS_COORDINATED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchObject.d.ts.map