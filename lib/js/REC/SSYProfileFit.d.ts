import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
import { ssyProfileModel } from './ssyProfileModel.js';
/**
 * One structural fit of one profile model.
 */
export declare class SSYProfileFit implements flatbuffers.IUnpackableObject<SSYProfileFitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYProfileFit;
    static getRootAsSSYProfileFit(bb: flatbuffers.ByteBuffer, obj?: SSYProfileFit): SSYProfileFit;
    static getSizePrefixedRootAsSSYProfileFit(bb: flatbuffers.ByteBuffer, obj?: SSYProfileFit): SSYProfileFit;
    MODEL(): ssyProfileModel;
    /**
     * Scale radius of MODEL (Plummer, exponential, Sersic, EFF), arcmin.
     */
    RADIUS(obj?: EXOParameter): EXOParameter | null;
    /**
     * King core and tidal radii, arcmin; King concentration log10(rt/rc).
     */
    CORE_RADIUS(obj?: EXOParameter): EXOParameter | null;
    TIDAL_RADIUS(obj?: EXOParameter): EXOParameter | null;
    CONCENTRATION(obj?: EXOParameter): EXOParameter | null;
    /**
     * Sersic n or EFF gamma, dimensionless.
     */
    SHAPE_INDEX(obj?: EXOParameter): EXOParameter | null;
    ELLIPTICITY(obj?: EXOParameter): EXOParameter | null;
    POSITION_ANGLE(obj?: EXOParameter): EXOParameter | null;
    /**
     * Central surface brightness, mag/arcsec^2.
     */
    CENTRAL_SURFACE_BRIGHTNESS(obj?: EXOParameter): EXOParameter | null;
    static startSSYProfileFit(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODEL: ssyProfileModel): void;
    static addRadius(builder: flatbuffers.Builder, RADIUSOffset: flatbuffers.Offset): void;
    static addCoreRadius(builder: flatbuffers.Builder, CORE_RADIUSOffset: flatbuffers.Offset): void;
    static addTidalRadius(builder: flatbuffers.Builder, TIDAL_RADIUSOffset: flatbuffers.Offset): void;
    static addConcentration(builder: flatbuffers.Builder, CONCENTRATIONOffset: flatbuffers.Offset): void;
    static addShapeIndex(builder: flatbuffers.Builder, SHAPE_INDEXOffset: flatbuffers.Offset): void;
    static addEllipticity(builder: flatbuffers.Builder, ELLIPTICITYOffset: flatbuffers.Offset): void;
    static addPositionAngle(builder: flatbuffers.Builder, POSITION_ANGLEOffset: flatbuffers.Offset): void;
    static addCentralSurfaceBrightness(builder: flatbuffers.Builder, CENTRAL_SURFACE_BRIGHTNESSOffset: flatbuffers.Offset): void;
    static endSSYProfileFit(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SSYProfileFitT;
    unpackTo(_o: SSYProfileFitT): void;
}
export declare class SSYProfileFitT implements flatbuffers.IGeneratedObject {
    MODEL: ssyProfileModel;
    RADIUS: EXOParameterT | null;
    CORE_RADIUS: EXOParameterT | null;
    TIDAL_RADIUS: EXOParameterT | null;
    CONCENTRATION: EXOParameterT | null;
    SHAPE_INDEX: EXOParameterT | null;
    ELLIPTICITY: EXOParameterT | null;
    POSITION_ANGLE: EXOParameterT | null;
    CENTRAL_SURFACE_BRIGHTNESS: EXOParameterT | null;
    constructor(MODEL?: ssyProfileModel, RADIUS?: EXOParameterT | null, CORE_RADIUS?: EXOParameterT | null, TIDAL_RADIUS?: EXOParameterT | null, CONCENTRATION?: EXOParameterT | null, SHAPE_INDEX?: EXOParameterT | null, ELLIPTICITY?: EXOParameterT | null, POSITION_ANGLE?: EXOParameterT | null, CENTRAL_SURFACE_BRIGHTNESS?: EXOParameterT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYProfileFit.d.ts.map