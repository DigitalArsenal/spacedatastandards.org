import * as flatbuffers from 'flatbuffers';
import { viewerMapMode } from './viewerMapMode.js';
/**
 * App display toggles for a scenario viewer.
 */
export declare class VSTDisplaySettings implements flatbuffers.IUnpackableObject<VSTDisplaySettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VSTDisplaySettings;
    static getRootAsVSTDisplaySettings(bb: flatbuffers.ByteBuffer, obj?: VSTDisplaySettings): VSTDisplaySettings;
    static getSizePrefixedRootAsVSTDisplaySettings(bb: flatbuffers.ByteBuffer, obj?: VSTDisplaySettings): VSTDisplaySettings;
    /**
     * Active map rendering mode for the scenario viewer.
     */
    MAP_MODE(): viewerMapMode;
    /**
     * Show geosynchronous belt reference markers.
     */
    SHOW_GEO_BELT_MARKERS(): boolean;
    /**
     * Show cislunar reference content.
     */
    SHOW_CIS_LUNAR(): boolean;
    /**
     * Show the equator overlay.
     */
    SHOW_EQUATOR(): boolean;
    /**
     * Show latitude grid lines.
     */
    SHOW_LATITUDE(): boolean;
    /**
     * Show longitude grid lines.
     */
    SHOW_LONGITUDE(): boolean;
    /**
     * Show body shadow-cone overlays.
     */
    SHOW_SHADOW_CONES(): boolean;
    /**
     * Show animated capture or GIF export controls.
     */
    SHOW_GIF_CONTROLS(): boolean;
    /**
     * Render the atmospheric shell around the central body.
     */
    SHOW_ATMOSPHERE(): boolean;
    /**
     * Show the sun-direction indicator overlay.
     */
    SHOW_SUN_DIRECTION_INDICATOR(): boolean;
    /**
     * Render the starfield background.
     */
    USE_STARFIELD(): boolean;
    /**
     * Render orbits as stitched continuous paths.
     */
    USE_STITCHED_ORBIT(): boolean;
    static startVSTDisplaySettings(builder: flatbuffers.Builder): void;
    static addMapMode(builder: flatbuffers.Builder, MAP_MODE: viewerMapMode): void;
    static addShowGeoBeltMarkers(builder: flatbuffers.Builder, SHOW_GEO_BELT_MARKERS: boolean): void;
    static addShowCisLunar(builder: flatbuffers.Builder, SHOW_CIS_LUNAR: boolean): void;
    static addShowEquator(builder: flatbuffers.Builder, SHOW_EQUATOR: boolean): void;
    static addShowLatitude(builder: flatbuffers.Builder, SHOW_LATITUDE: boolean): void;
    static addShowLongitude(builder: flatbuffers.Builder, SHOW_LONGITUDE: boolean): void;
    static addShowShadowCones(builder: flatbuffers.Builder, SHOW_SHADOW_CONES: boolean): void;
    static addShowGifControls(builder: flatbuffers.Builder, SHOW_GIF_CONTROLS: boolean): void;
    static addShowAtmosphere(builder: flatbuffers.Builder, SHOW_ATMOSPHERE: boolean): void;
    static addShowSunDirectionIndicator(builder: flatbuffers.Builder, SHOW_SUN_DIRECTION_INDICATOR: boolean): void;
    static addUseStarfield(builder: flatbuffers.Builder, USE_STARFIELD: boolean): void;
    static addUseStitchedOrbit(builder: flatbuffers.Builder, USE_STITCHED_ORBIT: boolean): void;
    static endVSTDisplaySettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVSTDisplaySettings(builder: flatbuffers.Builder, MAP_MODE: viewerMapMode, SHOW_GEO_BELT_MARKERS: boolean, SHOW_CIS_LUNAR: boolean, SHOW_EQUATOR: boolean, SHOW_LATITUDE: boolean, SHOW_LONGITUDE: boolean, SHOW_SHADOW_CONES: boolean, SHOW_GIF_CONTROLS: boolean, SHOW_ATMOSPHERE: boolean, SHOW_SUN_DIRECTION_INDICATOR: boolean, USE_STARFIELD: boolean, USE_STITCHED_ORBIT: boolean): flatbuffers.Offset;
    unpack(): VSTDisplaySettingsT;
    unpackTo(_o: VSTDisplaySettingsT): void;
}
export declare class VSTDisplaySettingsT implements flatbuffers.IGeneratedObject {
    MAP_MODE: viewerMapMode;
    SHOW_GEO_BELT_MARKERS: boolean;
    SHOW_CIS_LUNAR: boolean;
    SHOW_EQUATOR: boolean;
    SHOW_LATITUDE: boolean;
    SHOW_LONGITUDE: boolean;
    SHOW_SHADOW_CONES: boolean;
    SHOW_GIF_CONTROLS: boolean;
    SHOW_ATMOSPHERE: boolean;
    SHOW_SUN_DIRECTION_INDICATOR: boolean;
    USE_STARFIELD: boolean;
    USE_STITCHED_ORBIT: boolean;
    constructor(MAP_MODE?: viewerMapMode, SHOW_GEO_BELT_MARKERS?: boolean, SHOW_CIS_LUNAR?: boolean, SHOW_EQUATOR?: boolean, SHOW_LATITUDE?: boolean, SHOW_LONGITUDE?: boolean, SHOW_SHADOW_CONES?: boolean, SHOW_GIF_CONTROLS?: boolean, SHOW_ATMOSPHERE?: boolean, SHOW_SUN_DIRECTION_INDICATOR?: boolean, USE_STARFIELD?: boolean, USE_STITCHED_ORBIT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VSTDisplaySettings.d.ts.map