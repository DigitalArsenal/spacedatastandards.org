import * as flatbuffers from 'flatbuffers';
import { CLGBlackout, CLGBlackoutT } from './CLGBlackout.js';
import { CLGBody, CLGBodyT } from './CLGBody.js';
import { CLGControls, CLGControlsT } from './CLGControls.js';
import { CLGNode, CLGNodeT } from './CLGNode.js';
import { CLGSource, CLGSourceT } from './CLGSource.js';
import { CLGTerminal, CLGTerminalT } from './CLGTerminal.js';
import { CLGTerminalProfile, CLGTerminalProfileT } from './CLGTerminalProfile.js';
import { RFMCoordinateSystem, RFMCoordinateSystemT } from './RFMCoordinateSystem.js';
export declare class CLGDefinition implements flatbuffers.IUnpackableObject<CLGDefinitionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGDefinition;
    static getRootAsCLGDefinition(bb: flatbuffers.ByteBuffer, obj?: CLGDefinition): CLGDefinition;
    static getSizePrefixedRootAsCLGDefinition(bb: flatbuffers.ByteBuffer, obj?: CLGDefinition): CLGDefinition;
    /**
     * Two-part JD TT, integer noon-based day plus seconds [0,86400).
     */
    EPOCH_JD_TT_DAY(): bigint;
    EPOCH_JD_TT_SECONDS(): number;
    /**
     * ALL offsets incl. source halos satisfy abs(offset)<2^22 seconds.
     * Longer analyses split/re-epoch definitions; never use year-long doubles.
     */
    START_OFFSET_S(): number;
    STOP_OFFSET_S(): number;
    /**
     * SIMULTANEOUS may use fixed axes. RETARDED requires SSB/ICRF inertial
     * coordinates or a declared constant-velocity inertial transform thereof.
     * GCRS-like local approximation needs certified model error; rotating
     * body-fixed axes and a moving body center are not inertial ray coordinates.
     */
    WORKING_FRAME(obj?: RFMCoordinateSystem): RFMCoordinateSystem | null;
    BODIES(index: number, obj?: CLGBody): CLGBody | null;
    bodiesLength(): number;
    SOURCES(index: number, obj?: CLGSource): CLGSource | null;
    sourcesLength(): number;
    /**
     * Dense index = vector position; ascending exact UTF-8 NODE_ID bytes.
     * Immutable for the graph, including all state blocks and result chunks.
     */
    NODES(index: number, obj?: CLGNode): CLGNode | null;
    nodesLength(): number;
    PROFILES(index: number, obj?: CLGTerminalProfile): CLGTerminalProfile | null;
    profilesLength(): number;
    /**
     * Ascending (NODE_INDEX, exact UTF-8 TERMINAL_ID bytes); unique IDs.
     */
    TERMINALS(index: number, obj?: CLGTerminal): CLGTerminal | null;
    terminalsLength(): number;
    BLACKOUTS(index: number, obj?: CLGBlackout): CLGBlackout | null;
    blackoutsLength(): number;
    CONTROLS(obj?: CLGControls): CLGControls | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_EPOCH_JD_TT_DAY(): boolean;
    HAS_EPOCH_JD_TT_SECONDS(): boolean;
    HAS_START_OFFSET_S(): boolean;
    HAS_STOP_OFFSET_S(): boolean;
    static startCLGDefinition(builder: flatbuffers.Builder): void;
    static addEpochJdTtDay(builder: flatbuffers.Builder, EPOCH_JD_TT_DAY: bigint): void;
    static addEpochJdTtSeconds(builder: flatbuffers.Builder, EPOCH_JD_TT_SECONDS: number): void;
    static addStartOffsetS(builder: flatbuffers.Builder, START_OFFSET_S: number): void;
    static addStopOffsetS(builder: flatbuffers.Builder, STOP_OFFSET_S: number): void;
    static addWorkingFrame(builder: flatbuffers.Builder, WORKING_FRAMEOffset: flatbuffers.Offset): void;
    static addBodies(builder: flatbuffers.Builder, BODIESOffset: flatbuffers.Offset): void;
    static createBodiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBodiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNodes(builder: flatbuffers.Builder, NODESOffset: flatbuffers.Offset): void;
    static createNodesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNodesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProfiles(builder: flatbuffers.Builder, PROFILESOffset: flatbuffers.Offset): void;
    static createProfilesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProfilesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTerminals(builder: flatbuffers.Builder, TERMINALSOffset: flatbuffers.Offset): void;
    static createTerminalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTerminalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBlackouts(builder: flatbuffers.Builder, BLACKOUTSOffset: flatbuffers.Offset): void;
    static startBlackoutsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addControls(builder: flatbuffers.Builder, CONTROLSOffset: flatbuffers.Offset): void;
    static addHasEpochJdTtDay(builder: flatbuffers.Builder, HAS_EPOCH_JD_TT_DAY: boolean): void;
    static addHasEpochJdTtSeconds(builder: flatbuffers.Builder, HAS_EPOCH_JD_TT_SECONDS: boolean): void;
    static addHasStartOffsetS(builder: flatbuffers.Builder, HAS_START_OFFSET_S: boolean): void;
    static addHasStopOffsetS(builder: flatbuffers.Builder, HAS_STOP_OFFSET_S: boolean): void;
    static endCLGDefinition(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGDefinitionT;
    unpackTo(_o: CLGDefinitionT): void;
}
export declare class CLGDefinitionT implements flatbuffers.IGeneratedObject {
    EPOCH_JD_TT_DAY: bigint;
    EPOCH_JD_TT_SECONDS: number;
    START_OFFSET_S: number;
    STOP_OFFSET_S: number;
    WORKING_FRAME: RFMCoordinateSystemT | null;
    BODIES: (CLGBodyT)[];
    SOURCES: (CLGSourceT)[];
    NODES: (CLGNodeT)[];
    PROFILES: (CLGTerminalProfileT)[];
    TERMINALS: (CLGTerminalT)[];
    BLACKOUTS: (CLGBlackoutT)[];
    CONTROLS: CLGControlsT | null;
    HAS_EPOCH_JD_TT_DAY: boolean;
    HAS_EPOCH_JD_TT_SECONDS: boolean;
    HAS_START_OFFSET_S: boolean;
    HAS_STOP_OFFSET_S: boolean;
    constructor(EPOCH_JD_TT_DAY?: bigint, EPOCH_JD_TT_SECONDS?: number, START_OFFSET_S?: number, STOP_OFFSET_S?: number, WORKING_FRAME?: RFMCoordinateSystemT | null, BODIES?: (CLGBodyT)[], SOURCES?: (CLGSourceT)[], NODES?: (CLGNodeT)[], PROFILES?: (CLGTerminalProfileT)[], TERMINALS?: (CLGTerminalT)[], BLACKOUTS?: (CLGBlackoutT)[], CONTROLS?: CLGControlsT | null, HAS_EPOCH_JD_TT_DAY?: boolean, HAS_EPOCH_JD_TT_SECONDS?: boolean, HAS_START_OFFSET_S?: boolean, HAS_STOP_OFFSET_S?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGDefinition.d.ts.map