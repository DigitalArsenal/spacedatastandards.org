import * as flatbuffers from 'flatbuffers';
import { atmosphericModel } from './atmosphericModel.js';
import { geopotentialModel } from './geopotentialModel.js';
import { lunarPerturbationModel } from './lunarPerturbationModel.js';
import { perturbationStatus } from './perturbationStatus.js';
import { resonanceModel } from './resonanceModel.js';
import { solarPerturbationModel } from './solarPerturbationModel.js';
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
    ATMOSPHERIC_MODEL(): atmosphericModel;
    GEOPOTENTIAL_MODEL(): geopotentialModel;
    LUNAR_SOLAR_PERTURBATION(): perturbationStatus;
    LUNAR_PERTURBATION_MODEL(): lunarPerturbationModel;
    SOLAR_PERTURBATION_MODEL(): solarPerturbationModel;
    SOLAR_RADIATION_PRESSURE(): perturbationStatus;
    SRP_MODEL(): solarRadiationPressureModel;
    RESONANCE_MODEL(): resonanceModel;
    static startVCMAtmosphericModelData(builder: flatbuffers.Builder): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericModel): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, GEOPOTENTIAL_MODEL: geopotentialModel): void;
    static addLunarSolarPerturbation(builder: flatbuffers.Builder, LUNAR_SOLAR_PERTURBATION: perturbationStatus): void;
    static addLunarPerturbationModel(builder: flatbuffers.Builder, LUNAR_PERTURBATION_MODEL: lunarPerturbationModel): void;
    static addSolarPerturbationModel(builder: flatbuffers.Builder, SOLAR_PERTURBATION_MODEL: solarPerturbationModel): void;
    static addSolarRadiationPressure(builder: flatbuffers.Builder, SOLAR_RADIATION_PRESSURE: perturbationStatus): void;
    static addSrpModel(builder: flatbuffers.Builder, SRP_MODEL: solarRadiationPressureModel): void;
    static addResonanceModel(builder: flatbuffers.Builder, RESONANCE_MODEL: resonanceModel): void;
    static endVCMAtmosphericModelData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMAtmosphericModelData(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericModel, GEOPOTENTIAL_MODEL: geopotentialModel, LUNAR_SOLAR_PERTURBATION: perturbationStatus, LUNAR_PERTURBATION_MODEL: lunarPerturbationModel, SOLAR_PERTURBATION_MODEL: solarPerturbationModel, SOLAR_RADIATION_PRESSURE: perturbationStatus, SRP_MODEL: solarRadiationPressureModel, RESONANCE_MODEL: resonanceModel): flatbuffers.Offset;
    unpack(): VCMAtmosphericModelDataT;
    unpackTo(_o: VCMAtmosphericModelDataT): void;
}
export declare class VCMAtmosphericModelDataT implements flatbuffers.IGeneratedObject {
    ATMOSPHERIC_MODEL: atmosphericModel;
    GEOPOTENTIAL_MODEL: geopotentialModel;
    LUNAR_SOLAR_PERTURBATION: perturbationStatus;
    LUNAR_PERTURBATION_MODEL: lunarPerturbationModel;
    SOLAR_PERTURBATION_MODEL: solarPerturbationModel;
    SOLAR_RADIATION_PRESSURE: perturbationStatus;
    SRP_MODEL: solarRadiationPressureModel;
    RESONANCE_MODEL: resonanceModel;
    constructor(ATMOSPHERIC_MODEL?: atmosphericModel, GEOPOTENTIAL_MODEL?: geopotentialModel, LUNAR_SOLAR_PERTURBATION?: perturbationStatus, LUNAR_PERTURBATION_MODEL?: lunarPerturbationModel, SOLAR_PERTURBATION_MODEL?: solarPerturbationModel, SOLAR_RADIATION_PRESSURE?: perturbationStatus, SRP_MODEL?: solarRadiationPressureModel, RESONANCE_MODEL?: resonanceModel);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCMAtmosphericModelData.d.ts.map