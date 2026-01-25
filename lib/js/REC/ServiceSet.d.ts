import * as flatbuffers from 'flatbuffers';
import { Service, ServiceT } from './Service.js';
/**
 * Collection of services
 */
export declare class ServiceSet implements flatbuffers.IUnpackableObject<ServiceSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ServiceSet;
    static getRootAsServiceSet(bb: flatbuffers.ByteBuffer, obj?: ServiceSet): ServiceSet;
    static getSizePrefixedRootAsServiceSet(bb: flatbuffers.ByteBuffer, obj?: ServiceSet): ServiceSet;
    /**
     * Services
     */
    SERVICES(index: number, obj?: Service): Service | null;
    servicesLength(): number;
    static startServiceSet(builder: flatbuffers.Builder): void;
    static addServices(builder: flatbuffers.Builder, SERVICESOffset: flatbuffers.Offset): void;
    static createServicesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startServicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endServiceSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createServiceSet(builder: flatbuffers.Builder, SERVICESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ServiceSetT;
    unpackTo(_o: ServiceSetT): void;
}
export declare class ServiceSetT implements flatbuffers.IGeneratedObject {
    SERVICES: (ServiceT)[];
    constructor(SERVICES?: (ServiceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ServiceSet.d.ts.map