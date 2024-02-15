import { Organization } from './Organization.js';
import { Person } from './Person.js';
/**
 * Union type for Entity, which can be either a Person or an Organization
 */
export declare enum Entity {
    NONE = 0,
    Person = 1,
    Organization = 2
}
export declare function unionToEntity(type: Entity, accessor: (obj: Organization | Person) => Organization | Person | null): Organization | Person | null;
export declare function unionListToEntity(type: Entity, accessor: (index: number, obj: Organization | Person) => Organization | Person | null, index: number): Organization | Person | null;
//# sourceMappingURL=Entity.d.ts.map