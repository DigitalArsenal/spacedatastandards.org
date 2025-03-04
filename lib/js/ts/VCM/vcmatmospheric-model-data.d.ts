import * as flatbuffers from 'flatbuffers';
import { atmosphericModel } from './atmospheric-model.js';
import { geopotentialModel } from './geopotential-model.js';
import { lunarPerturbationModel } from './lunar-perturbation-model.js';
import { perturbationStatus } from './perturbation-status.js';
import { resonanceModel } from './resonance-model.js';
import { solarPerturbationModel } from './solar-perturbation-model.js';
import { solarRadiationPressureModel } from './solar-radiation-pressure-model.js';
/**
 * VCM Atmospheric and Perturbation Model Data
 */
export declare class VCMAtmosphericModelData implements flatbuffers.IUnpackableObject<VCMAtmosphericModelDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCMAtmosphericModelData;
    static getRootAsVCMAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: VCMAtmosphericModelData): VCMAtmosphericModelData;
    static getSizePrefixedRootAsVCMAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: VCMAtmosphericModelData): VCMAtmosphericModelData;
    atmosphericModel(): atmosphericModel;
    geopotentialModel(): geopotentialModel;
    lunarSolarPerturbation(): perturbationStatus;
    lunarPerturbationModel(): lunarPerturbationModel;
    solarPerturbationModel(): solarPerturbationModel;
    solarRadiationPressure(): perturbationStatus;
    srpModel(): solarRadiationPressureModel;
    resonanceModel(): resonanceModel;
    static startVCMAtmosphericModelData(builder: flatbuffers.Builder): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, atmosphericModel: atmosphericModel): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, geopotentialModel: geopotentialModel): void;
    static addLunarSolarPerturbation(builder: flatbuffers.Builder, lunarSolarPerturbation: perturbationStatus): void;
    static addLunarPerturbationModel(builder: flatbuffers.Builder, lunarPerturbationModel: lunarPerturbationModel): void;
    static addSolarPerturbationModel(builder: flatbuffers.Builder, solarPerturbationModel: solarPerturbationModel): void;
    static addSolarRadiationPressure(builder: flatbuffers.Builder, solarRadiationPressure: perturbationStatus): void;
    static addSrpModel(builder: flatbuffers.Builder, srpModel: solarRadiationPressureModel): void;
    static addResonanceModel(builder: flatbuffers.Builder, resonanceModel: resonanceModel): void;
    static endVCMAtmosphericModelData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCMAtmosphericModelData(builder: flatbuffers.Builder, atmosphericModel: atmosphericModel, geopotentialModel: geopotentialModel, lunarSolarPerturbation: perturbationStatus, lunarPerturbationModel: lunarPerturbationModel, solarPerturbationModel: solarPerturbationModel, solarRadiationPressure: perturbationStatus, srpModel: solarRadiationPressureModel, resonanceModel: resonanceModel): flatbuffers.Offset;
    unpack(): VCMAtmosphericModelDataT;
    unpackTo(_o: VCMAtmosphericModelDataT): void;
}
export declare class VCMAtmosphericModelDataT implements flatbuffers.IGeneratedObject {
    atmosphericModel: atmosphericModel;
    geopotentialModel: geopotentialModel;
    lunarSolarPerturbation: perturbationStatus;
    lunarPerturbationModel: lunarPerturbationModel;
    solarPerturbationModel: solarPerturbationModel;
    solarRadiationPressure: perturbationStatus;
    srpModel: solarRadiationPressureModel;
    resonanceModel: resonanceModel;
    constructor(atmosphericModel?: atmosphericModel, geopotentialModel?: geopotentialModel, lunarSolarPerturbation?: perturbationStatus, lunarPerturbationModel?: lunarPerturbationModel, solarPerturbationModel?: solarPerturbationModel, solarRadiationPressure?: perturbationStatus, srpModel?: solarRadiationPressureModel, resonanceModel?: resonanceModel);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=vcmatmospheric-model-data.d.ts.map