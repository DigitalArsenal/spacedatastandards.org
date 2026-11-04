import * as flatbuffers from 'flatbuffers';
import { ocmIntegrationFrame } from './ocmIntegrationFrame.js';
import { ocmIntegratorMode } from './ocmIntegratorMode.js';
import { ocmPartialsMethod } from './ocmPartialsMethod.js';
import { ocmStepMode } from './ocmStepMode.js';
import { ocmStepSelection } from './ocmStepSelection.js';
/**
 * Settings of the numerical integrator that made a solution, as a legacy SP
 * Vector/Covariance Message states them (SDS addition: CCSDS 502.0-B-3 has no
 * integrator keywords). Present only on a message made from such a message;
 * a reader of any other message treats it as absent.
 */
export declare class OCMIntegrator implements flatbuffers.IUnpackableObject<OCMIntegratorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMIntegrator;
    static getRootAsOCMIntegrator(bb: flatbuffers.ByteBuffer, obj?: OCMIntegrator): OCMIntegrator;
    static getSizePrefixedRootAsOCMIntegrator(bb: flatbuffers.ByteBuffer, obj?: OCMIntegrator): OCMIntegrator;
    /**
     * INTEGRATOR MODE.
     */
    MODE(): ocmIntegratorMode;
    /**
     * COORD SYS: the coordinate system the integration ran in. Not
     * TRAJ_REF_FRAME, which is the frame of STATE_DATA.
     */
    COORDINATE_SYSTEM(): ocmIntegrationFrame;
    /**
     * PARTIALS.
     */
    PARTIALS(): ocmPartialsMethod;
    /**
     * STEP MODE.
     */
    STEP_MODE(): ocmStepMode;
    /**
     * FIXED STEP: true for ON.
     */
    FIXED_STEP(): boolean;
    /**
     * STEP SIZE SELECTION.
     */
    STEP_SIZE_SELECTION(): ocmStepSelection;
    /**
     * INITIAL STEP SIZE, s. NaN when not stated.
     */
    INITIAL_STEP_SECONDS(): number;
    /**
     * ERROR CONTROL, dimensionless, as the SP integrator takes it. NaN when not
     * stated.
     */
    ERROR_CONTROL(): number;
    static startOCMIntegrator(builder: flatbuffers.Builder): void;
    static addMode(builder: flatbuffers.Builder, MODE: ocmIntegratorMode): void;
    static addCoordinateSystem(builder: flatbuffers.Builder, COORDINATE_SYSTEM: ocmIntegrationFrame): void;
    static addPartials(builder: flatbuffers.Builder, PARTIALS: ocmPartialsMethod): void;
    static addStepMode(builder: flatbuffers.Builder, STEP_MODE: ocmStepMode): void;
    static addFixedStep(builder: flatbuffers.Builder, FIXED_STEP: boolean): void;
    static addStepSizeSelection(builder: flatbuffers.Builder, STEP_SIZE_SELECTION: ocmStepSelection): void;
    static addInitialStepSeconds(builder: flatbuffers.Builder, INITIAL_STEP_SECONDS: number): void;
    static addErrorControl(builder: flatbuffers.Builder, ERROR_CONTROL: number): void;
    static endOCMIntegrator(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMIntegrator(builder: flatbuffers.Builder, MODE: ocmIntegratorMode, COORDINATE_SYSTEM: ocmIntegrationFrame, PARTIALS: ocmPartialsMethod, STEP_MODE: ocmStepMode, FIXED_STEP: boolean, STEP_SIZE_SELECTION: ocmStepSelection, INITIAL_STEP_SECONDS: number, ERROR_CONTROL: number): flatbuffers.Offset;
    unpack(): OCMIntegratorT;
    unpackTo(_o: OCMIntegratorT): void;
}
export declare class OCMIntegratorT implements flatbuffers.IGeneratedObject {
    MODE: ocmIntegratorMode;
    COORDINATE_SYSTEM: ocmIntegrationFrame;
    PARTIALS: ocmPartialsMethod;
    STEP_MODE: ocmStepMode;
    FIXED_STEP: boolean;
    STEP_SIZE_SELECTION: ocmStepSelection;
    INITIAL_STEP_SECONDS: number;
    ERROR_CONTROL: number;
    constructor(MODE?: ocmIntegratorMode, COORDINATE_SYSTEM?: ocmIntegrationFrame, PARTIALS?: ocmPartialsMethod, STEP_MODE?: ocmStepMode, FIXED_STEP?: boolean, STEP_SIZE_SELECTION?: ocmStepSelection, INITIAL_STEP_SECONDS?: number, ERROR_CONTROL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMIntegrator.d.ts.map