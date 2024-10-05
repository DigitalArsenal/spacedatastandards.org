import * as flatbuffers from 'flatbuffers';
import { atmosphericModel } from './atmosphericModel.js';
import { geopotentialModel } from './geopotentialModel.js';
import { lunarPerturbationModel } from './lunarPerturbationModel.js';
import { perturbationStatus } from './perturbationStatus.js';
import { resonanceModel } from './resonanceModel.js';
import { solarPerturbationModel } from './solarPerturbationModel.js';
import { solarRadiationPressureModel } from './solarRadiationPressureModel.js';
/**
 * OPM Atmospheric and Perturbation Model Data
 */
export declare class opmAtmosphericModelData implements flatbuffers.IUnpackableObject<opmAtmosphericModelDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): opmAtmosphericModelData;
    static getRootAsopmAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: opmAtmosphericModelData): opmAtmosphericModelData;
    static getSizePrefixedRootAsopmAtmosphericModelData(bb: flatbuffers.ByteBuffer, obj?: opmAtmosphericModelData): opmAtmosphericModelData;
    ATMOSPHERIC_MODEL(): atmosphericModel;
    GEOPOTENTIAL_MODEL(): geopotentialModel;
    LUNAR_SOLAR_PERTURBATION(): perturbationStatus;
    LUNAR_PERTURBATION_MODEL(): lunarPerturbationModel;
    SOLAR_PERTURBATION_MODEL(): solarPerturbationModel;
    SOLAR_RADIATION_PRESSURE(): perturbationStatus;
    SRP_MODEL(): solarRadiationPressureModel;
    RESONANCE_MODEL(): resonanceModel;
    static startopmAtmosphericModelData(builder: flatbuffers.Builder): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericModel): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, GEOPOTENTIAL_MODEL: geopotentialModel): void;
    static addLunarSolarPerturbation(builder: flatbuffers.Builder, LUNAR_SOLAR_PERTURBATION: perturbationStatus): void;
    static addLunarPerturbationModel(builder: flatbuffers.Builder, LUNAR_PERTURBATION_MODEL: lunarPerturbationModel): void;
    static addSolarPerturbationModel(builder: flatbuffers.Builder, SOLAR_PERTURBATION_MODEL: solarPerturbationModel): void;
    static addSolarRadiationPressure(builder: flatbuffers.Builder, SOLAR_RADIATION_PRESSURE: perturbationStatus): void;
    static addSrpModel(builder: flatbuffers.Builder, SRP_MODEL: solarRadiationPressureModel): void;
    static addResonanceModel(builder: flatbuffers.Builder, RESONANCE_MODEL: resonanceModel): void;
    static endopmAtmosphericModelData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createopmAtmosphericModelData(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL: atmosphericModel, GEOPOTENTIAL_MODEL: geopotentialModel, LUNAR_SOLAR_PERTURBATION: perturbationStatus, LUNAR_PERTURBATION_MODEL: lunarPerturbationModel, SOLAR_PERTURBATION_MODEL: solarPerturbationModel, SOLAR_RADIATION_PRESSURE: perturbationStatus, SRP_MODEL: solarRadiationPressureModel, RESONANCE_MODEL: resonanceModel): flatbuffers.Offset;
    unpack(): opmAtmosphericModelDataT;
    unpackTo(_o: opmAtmosphericModelDataT): void;
}
export declare class opmAtmosphericModelDataT implements flatbuffers.IGeneratedObject {
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
//# sourceMappingURL=opmAtmosphericModelData.d.ts.map