import { OrganizationAttributes } from './OrganizationAttributes.js';
import { PersonAttributes } from './PersonAttributes.js';
/**
 * Union for specific attributes, distinguishing between Person and Organization
 */
export declare enum SpecificAttributes {
    NONE = 0,
    PersonAttributes = 1,
    OrganizationAttributes = 2
}
export declare function unionToSpecificAttributes(type: SpecificAttributes, accessor: (obj: OrganizationAttributes | PersonAttributes) => OrganizationAttributes | PersonAttributes | null): OrganizationAttributes | PersonAttributes | null;
export declare function unionListToSpecificAttributes(type: SpecificAttributes, accessor: (index: number, obj: OrganizationAttributes | PersonAttributes) => OrganizationAttributes | PersonAttributes | null, index: number): OrganizationAttributes | PersonAttributes | null;
//# sourceMappingURL=SpecificAttributes.d.ts.map