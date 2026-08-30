import { CelestialFrameWrapper } from './CelestialFrameWrapper.js';
import { CustomFrameWrapper } from './CustomFrameWrapper.js';
import { OrbitFrameWrapper } from './OrbitFrameWrapper.js';
import { RFMCoordinateSystemWrapper } from './RFMCoordinateSystemWrapper.js';
import { SpacecraftFrameWrapper } from './SpacecraftFrameWrapper.js';
/**
 * Union ordinals are WIRE. Append new members LAST; never reorder.
 */
export declare enum RFMUnion {
    NONE = 0,
    CelestialFrameWrapper = 1,
    SpacecraftFrameWrapper = 2,
    OrbitFrameWrapper = 3,
    CustomFrameWrapper = 4,
    RFMCoordinateSystemWrapper = 5
}
export declare function unionToRfmunion(type: RFMUnion, accessor: (obj: CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper) => CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper | null): CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper | null;
export declare function unionListToRfmunion(type: RFMUnion, accessor: (index: number, obj: CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper) => CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper | null, index: number): CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | RFMCoordinateSystemWrapper | SpacecraftFrameWrapper | null;
//# sourceMappingURL=RFMUnion.d.ts.map