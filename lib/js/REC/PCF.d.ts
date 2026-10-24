import * as flatbuffers from 'flatbuffers';
import { PCFEventDefinition, PCFEventDefinitionT } from './PCFEventDefinition.js';
import { PCFFitPolicy, PCFFitPolicyT } from './PCFFitPolicy.js';
import { PCFForceModel, PCFForceModelT } from './PCFForceModel.js';
import { PCFIntegratorSettings, PCFIntegratorSettingsT } from './PCFIntegratorSettings.js';
import { PCFLaunch, PCFLaunchT } from './PCFLaunch.js';
import { PCFManeuverDetection, PCFManeuverDetectionT } from './PCFManeuverDetection.js';
import { PCFMeanElementOptions, PCFMeanElementOptionsT } from './PCFMeanElementOptions.js';
import { PCFOutput, PCFOutputT } from './PCFOutput.js';
import { PCFReentry, PCFReentryT } from './PCFReentry.js';
import { PCFSegmentOptions, PCFSegmentOptionsT } from './PCFSegmentOptions.js';
import { pcfTheory } from './pcfTheory.js';
/**
 * Propagation Configuration ($PCF 1.0): one FlatBuffer message that configures
 * any propagator (SGP4, SGP4-XP, the advanced mean-element propagator, the full
 * force model, Kepler): the theory, the integrator and its settings, the
 * forces, the fit policy, the events to locate, maneuver detection, reentry
 * hand-off, launch priors and the output. A host passes it beside the
 * request; the method it invokes (propagate, fit, detect maneuvers, reentry,
 * launch) selects the tables that method reads. An absent table takes the
 * theory's own defaults; a table or value the selected theory cannot honor is
 * refused by name, never silently dropped. $PRW reuses PCFIntegratorSettings,
 * PCFForceModel and their enums, so the runtime wire and the configuration
 * share one definition of each. Units are in the field names and docs; every
 * field states its default.
 */
export declare class PCF implements flatbuffers.IUnpackableObject<PCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCF;
    static getRootAsPCF(bb: flatbuffers.ByteBuffer, obj?: PCF): PCF;
    static getSizePrefixedRootAsPCF(bb: flatbuffers.ByteBuffer, obj?: PCF): PCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Opaque identifier of this configuration, for provenance. Default empty.
     */
    CONFIGURATION_ID(): string | null;
    CONFIGURATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Named profile this configuration instantiates, for example "FFM-1".
     * Informational: every value that matters is carried below. Default empty.
     */
    PROFILE(): string | null;
    PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The orbit theory. Default UNSPECIFIED (the receiving module's own).
     */
    THEORY(): pcfTheory;
    /**
     * Integrator and settings. Absent: the theory's own.
     */
    INTEGRATOR(obj?: PCFIntegratorSettings): PCFIntegratorSettings | null;
    /**
     * Forces. Absent: the theory's built-in set.
     */
    FORCES(obj?: PCFForceModel): PCFForceModel | null;
    /**
     * Truncations and switches of the averaged theories (SGP4XP, SDNAP).
     */
    MEAN_ELEMENT(obj?: PCFMeanElementOptions): PCFMeanElementOptions | null;
    /**
     * Beyond-Earth segment sets.
     */
    SEGMENTS(obj?: PCFSegmentOptions): PCFSegmentOptions | null;
    /**
     * Fit policy.
     */
    FIT(obj?: PCFFitPolicy): PCFFitPolicy | null;
    /**
     * Events located while integrating. Default empty.
     */
    EVENTS(index: number, obj?: PCFEventDefinition): PCFEventDefinition | null;
    eventsLength(): number;
    /**
     * Maneuver detection.
     */
    MANEUVER_DETECTION(obj?: PCFManeuverDetection): PCFManeuverDetection | null;
    /**
     * Reentry hand-off and window.
     */
    REENTRY(obj?: PCFReentry): PCFReentry | null;
    /**
     * Launch initialization priors.
     */
    LAUNCH(obj?: PCFLaunch): PCFLaunch | null;
    /**
     * Output states.
     */
    OUTPUT(obj?: PCFOutput): PCFOutput | null;
    static startPCF(builder: flatbuffers.Builder): void;
    static addConfigurationId(builder: flatbuffers.Builder, CONFIGURATION_IDOffset: flatbuffers.Offset): void;
    static addProfile(builder: flatbuffers.Builder, PROFILEOffset: flatbuffers.Offset): void;
    static addTheory(builder: flatbuffers.Builder, THEORY: pcfTheory): void;
    static addIntegrator(builder: flatbuffers.Builder, INTEGRATOROffset: flatbuffers.Offset): void;
    static addForces(builder: flatbuffers.Builder, FORCESOffset: flatbuffers.Offset): void;
    static addMeanElement(builder: flatbuffers.Builder, MEAN_ELEMENTOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static addFit(builder: flatbuffers.Builder, FITOffset: flatbuffers.Offset): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuverDetection(builder: flatbuffers.Builder, MANEUVER_DETECTIONOffset: flatbuffers.Offset): void;
    static addReentry(builder: flatbuffers.Builder, REENTRYOffset: flatbuffers.Offset): void;
    static addLaunch(builder: flatbuffers.Builder, LAUNCHOffset: flatbuffers.Offset): void;
    static addOutput(builder: flatbuffers.Builder, OUTPUTOffset: flatbuffers.Offset): void;
    static endPCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PCFT;
    unpackTo(_o: PCFT): void;
}
export declare class PCFT implements flatbuffers.IGeneratedObject {
    CONFIGURATION_ID: string | Uint8Array | null;
    PROFILE: string | Uint8Array | null;
    THEORY: pcfTheory;
    INTEGRATOR: PCFIntegratorSettingsT | null;
    FORCES: PCFForceModelT | null;
    MEAN_ELEMENT: PCFMeanElementOptionsT | null;
    SEGMENTS: PCFSegmentOptionsT | null;
    FIT: PCFFitPolicyT | null;
    EVENTS: (PCFEventDefinitionT)[];
    MANEUVER_DETECTION: PCFManeuverDetectionT | null;
    REENTRY: PCFReentryT | null;
    LAUNCH: PCFLaunchT | null;
    OUTPUT: PCFOutputT | null;
    constructor(CONFIGURATION_ID?: string | Uint8Array | null, PROFILE?: string | Uint8Array | null, THEORY?: pcfTheory, INTEGRATOR?: PCFIntegratorSettingsT | null, FORCES?: PCFForceModelT | null, MEAN_ELEMENT?: PCFMeanElementOptionsT | null, SEGMENTS?: PCFSegmentOptionsT | null, FIT?: PCFFitPolicyT | null, EVENTS?: (PCFEventDefinitionT)[], MANEUVER_DETECTION?: PCFManeuverDetectionT | null, REENTRY?: PCFReentryT | null, LAUNCH?: PCFLaunchT | null, OUTPUT?: PCFOutputT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCF.d.ts.map