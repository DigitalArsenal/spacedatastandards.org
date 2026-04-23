import * as flatbuffers from 'flatbuffers';
import { atmosphericSource } from './atmosphericSource.js';
import { geopotentialSource } from './geopotentialSource.js';
import { lunarPerturbationSource } from './lunarPerturbationSource.js';
import { perturbationStatus } from './perturbationStatus.js';
import { resonanceSource } from './resonanceSource.js';
import { solarPerturbationSource } from './solarPerturbationSource.js';
import { solarRadiationPressureModel } from './solarRadiationPressureModel.js';
/**
 * VCM Atmospheric and Perturbation Model Data
 */
export declare class VCMAtmosphericModelData implements flatbuffers.IUnpackableObject<VCMAtmosphericModelDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCMAtmosphericModelData;
    static getRootAsVCMAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: VCMAtmosphericModelData): VCMAtmosphericModelData;
    static getSizePrefixedRootAsVCMAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: VCMAtmosphericModelData): VCMAtmosphericModelData;
    ATMOSPHERIC_MODEL(): atmosphericSource;
    GEOPOTENTIAL_MODEL(): geopotentialSource;
    LUNAR_SOLAR_PERTURBATION(): perturbationStatus;
    LUNAR_PERTURBATION_MODEL(): lunarPerturbationSource;
    SOLAR_PERTURBATION_MODEL(): solarPerturbationSource;
    SOLAR_RADIATION_PRESSURE(): perturbationStatus;
    SRP_MODEL(): solarRadiationPressureModel;
    RESONANCE_MODEL(): resonanceSource;
    static startVCMAtmosphericModelData(builder: flatbuffers.Builder): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericSource): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, GEOPOTENTIAL_MODEL: geopotentialSource): void;
    static addLunarSolarPerturbation(builder: flatbuffers.Builder, LUNAR_SOLAR_PERTURBATION: perturbationStatus): void;
    static addLunarPerturbationModel(builder: flatbuffers.Builder, LUNAR_PERTURBATION_MODEL: lunarPerturbationSource): void;
    static addSolarPerturbationModel(builder: flatbuffers.Builder, SOLAR_PERTURBATION_MODEL: solarPerturbationSource): void;
    static addSolarRadiationPressure(builder: flatbuffers.Builder, SOLAR_RADIATION_PRESSURE: perturbationStatus): void;
    static addSrpModel(builder: flatbuffers.Builder, SRP_MODEL: solarRadiationPressureModel): void;
    static addResonanceModel(builder: flatbuffers.Builder, RESONANCE_MODEL: resonanceSource): void;
    static endVCMAtmosphericModelData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMAtmosphericModelData(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericSource, GEOPOTENTIAL_MODEL: geopotentialSource, LUNAR_SOLAR_PERTURBATION: perturbationStatus, LUNAR_PERTURBATION_MODEL: lunarPerturbationSource, SOLAR_PERTURBATION_MODEL: solarPerturbationSource, SOLAR_RADIATION_PRESSURE: perturbationStatus, SRP_MODEL: solarRadiationPressureModel, RESONANCE_MODEL: resonanceSource): flatbuffers.Offset;
    unpack(): VCMAtmosphericModelDataT;
    unpackTo(_o: VCMAtmosphericModelDataT): void;
}
export declare class VCMAtmosphericModelDataT implements flatbuffers.IGeneratedObject {
    ATMOSPHERIC_MODEL: atmosphericSource;
    GEOPOTENTIAL_MODEL: geopotentialSource;
    LUNAR_SOLAR_PERTURBATION: perturbationStatus;
    LUNAR_PERTURBATION_MODEL: lunarPerturbationSource;
    SOLAR_PERTURBATION_MODEL: solarPerturbationSource;
    SOLAR_RADIATION_PRESSURE: perturbationStatus;
    SRP_MODEL: solarRadiationPressureModel;
    RESONANCE_MODEL: resonanceSource;
    constructor(ATMOSPHERIC_MODEL?: atmosphericSource, GEOPOTENTIAL_MODEL?: geopotentialSource, LUNAR_SOLAR_PERTURBATION?: perturbationStatus, LUNAR_PERTURBATION_MODEL?: lunarPerturbationSource, SOLAR_PERTURBATION_MODEL?: solarPerturbationSource, SOLAR_RADIATION_PRESSURE?: perturbationStatus, SRP_MODEL?: solarRadiationPressureModel, RESONANCE_MODEL?: resonanceSource);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCMAtmosphericModelData.d.ts.map