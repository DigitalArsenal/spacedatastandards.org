import { CelestialFrameWrapper } from './CelestialFrameWrapper.js';
import { CustomFrameWrapper } from './CustomFrameWrapper.js';
import { OrbitFrameWrapper } from './OrbitFrameWrapper.js';
import { SpacecraftFrameWrapper } from './SpacecraftFrameWrapper.js';
export declare enum RFMUnion {
    NONE = 0,
    CelestialFrameWrapper = 1,
    SpacecraftFrameWrapper = 2,
    OrbitFrameWrapper = 3,
    CustomFrameWrapper = 4
}
export declare function unionToRfmunion(type: RFMUnion, accessor: (obj: CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper) => CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper | null): CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper | null;
export declare function unionListToRfmunion(type: RFMUnion, accessor: (index: number, obj: CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper) => CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper | null, index: number): CelestialFrameWrapper | CustomFrameWrapper | OrbitFrameWrapper | SpacecraftFrameWrapper | null;
//# sourceMappingURL=RFMUnion.d.ts.map