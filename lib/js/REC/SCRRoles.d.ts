import * as flatbuffers from 'flatbuffers';
import { scrScreeningRole } from './scrScreeningRole.js';
/**
 * Roles of the objects of a screen.
 */
export declare class SCRRoles implements flatbuffers.IUnpackableObject<SCRRolesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRRoles;
    static getRootAsSCRRoles(bb: flatbuffers.ByteBuffer, obj?: SCRRoles): SCRRoles;
    static getSizePrefixedRootAsSCRRoles(bb: flatbuffers.ByteBuffer, obj?: SCRRoles): SCRRoles;
    /**
     * One role per object, in the screen's index order. Absent roles mean
     * every object is a primary (all against all).
     */
    ROLES(index: number): scrScreeningRole | null;
    rolesLength(): number;
    rolesArray(): Uint8Array | null;
    static startSCRRoles(builder: flatbuffers.Builder): void;
    static addRoles(builder: flatbuffers.Builder, ROLESOffset: flatbuffers.Offset): void;
    static createRolesVector(builder: flatbuffers.Builder, data: scrScreeningRole[]): flatbuffers.Offset;
    static startRolesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRRoles(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRRoles(builder: flatbuffers.Builder, ROLESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRRolesT;
    unpackTo(_o: SCRRolesT): void;
}
export declare class SCRRolesT implements flatbuffers.IGeneratedObject {
    ROLES: (scrScreeningRole)[];
    constructor(ROLES?: (scrScreeningRole)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRRoles.d.ts.map