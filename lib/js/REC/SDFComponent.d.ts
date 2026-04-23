import * as flatbuffers from 'flatbuffers';
import { SDFConical, SDFConicalT } from './SDFConical.js';
import { SDFCustom, SDFCustomT } from './SDFCustom.js';
import { SDFCylindrical, SDFCylindricalT } from './SDFCylindrical.js';
import { SDFRectangular, SDFRectangularT } from './SDFRectangular.js';
import { SDFSpherical, SDFSphericalT } from './SDFSpherical.js';
import { sdfPrimitive } from './sdfPrimitive.js';
/**
 * Single component in a composed SDF.
 */
export declare class SDFComponent implements flatbuffers.IUnpackableObject<SDFComponentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFComponent;
    static getRootAsSDFComponent(bb: flatbuffers.ByteBuffer, obj?: SDFComponent): SDFComponent;
    static getSizePrefixedRootAsSDFComponent(bb: flatbuffers.ByteBuffer, obj?: SDFComponent): SDFComponent;
    PRIMITIVE(): sdfPrimitive;
    CONE(obj?: SDFConical): SDFConical | null;
    RECTANGULAR(obj?: SDFRectangular): SDFRectangular | null;
    SPHERICAL(obj?: SDFSpherical): SDFSpherical | null;
    CYLINDRICAL(obj?: SDFCylindrical): SDFCylindrical | null;
    CUSTOM(obj?: SDFCustom): SDFCustom | null;
    static startSDFComponent(builder: flatbuffers.Builder): void;
    static addPrimitive(builder: flatbuffers.Builder, PRIMITIVE: sdfPrimitive): void;
    static addCone(builder: flatbuffers.Builder, CONEOffset: flatbuffers.Offset): void;
    static addRectangular(builder: flatbuffers.Builder, RECTANGULAROffset: flatbuffers.Offset): void;
    static addSpherical(builder: flatbuffers.Builder, SPHERICALOffset: flatbuffers.Offset): void;
    static addCylindrical(builder: flatbuffers.Builder, CYLINDRICALOffset: flatbuffers.Offset): void;
    static addCustom(builder: flatbuffers.Builder, CUSTOMOffset: flatbuffers.Offset): void;
    static endSDFComponent(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SDFComponentT;
    unpackTo(_o: SDFComponentT): void;
}
export declare class SDFComponentT implements flatbuffers.IGeneratedObject {
    PRIMITIVE: sdfPrimitive;
    CONE: SDFConicalT | null;
    RECTANGULAR: SDFRectangularT | null;
    SPHERICAL: SDFSphericalT | null;
    CYLINDRICAL: SDFCylindricalT | null;
    CUSTOM: SDFCustomT | null;
    constructor(PRIMITIVE?: sdfPrimitive, CONE?: SDFConicalT | null, RECTANGULAR?: SDFRectangularT | null, SPHERICAL?: SDFSphericalT | null, CYLINDRICAL?: SDFCylindricalT | null, CUSTOM?: SDFCustomT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFComponent.d.ts.map