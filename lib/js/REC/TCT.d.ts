import * as flatbuffers from 'flatbuffers';
import { TCTPoint, TCTPointT } from './TCTPoint.js';
import { tctBasin } from './tctBasin.js';
import { tctTrackKind } from './tctTrackKind.js';
import { tctTrackOrigin } from './tctTrackOrigin.js';
import { wxfLicenseClass } from './wxfLicenseClass.js';
import { wxfMemberKind } from './wxfMemberKind.js';
import { wxfModelClass } from './wxfModelClass.js';
/**
 * Tropical Cyclone Track - One realisation of one storm's track.
 */
export declare class TCT implements flatbuffers.IUnpackableObject<TCTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TCT;
    static getRootAsTCT(bb: flatbuffers.ByteBuffer, obj?: TCT): TCT;
    static getSizePrefixedRootAsTCT(bb: flatbuffers.ByteBuffer, obj?: TCT): TCT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable storm identifier as issued by the origin (e.g. a best-track
     * serial identifier); equal across every member of the same storm.
     */
    STORM_ID(): string;
    STORM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Storm name if assigned; empty for invests and unnamed genesis events.
     */
    STORM_NAME(): string | null;
    STORM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Basin the system is tracked in.
     */
    BASIN(): tctBasin;
    /**
     * Provenance kind of the track.
     */
    TRACK_KIND(): tctTrackKind;
    /**
     * Whether the system existed at initialisation.
     */
    TRACK_ORIGIN(): tctTrackOrigin;
    /**
     * Class of the producing model; Unspecified for observed tracks.
     */
    MODEL_CLASS(): wxfModelClass;
    /**
     * Producer-defined model identifier.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer-defined model version.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initialisation time of the run, Unix milliseconds UTC; for observed
     * tracks the issue time of the track.
     */
    INIT_TIME_MS(): bigint;
    /**
     * Ensemble realisation or statistic the track represents.
     */
    MEMBER_KIND(): wxfMemberKind;
    /**
     * Zero-based member index when MEMBER_KIND is Member.
     */
    MEMBER_INDEX(): number;
    /**
     * Number of members in the ensemble the run produced.
     */
    ENSEMBLE_SIZE(): number;
    /**
     * Averaging period of MAX_SUSTAINED_WIND_MS, seconds (60 or 600).
     */
    WIND_AVERAGING_PERIOD_S(): number;
    /**
     * Track points in ascending VALID_TIME_MS order.
     */
    POINTS(index: number, obj?: TCTPoint): TCTPoint | null;
    pointsLength(): number;
    /**
     * Upstream publisher the track was retrieved from, as a host name or
     * stable identifier.
     */
    ORIGIN_ID(): string | null;
    ORIGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable dataset identifier within the origin.
     */
    DATASET_ID(): string | null;
    DATASET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Upstream URL or object path the track was retrieved from.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds UTC when the track was retrieved from the origin.
     */
    RETRIEVED_AT(): bigint;
    /**
     * Licence class applicable at RETRIEVED_AT.
     */
    LICENSE_CLASS(): wxfLicenseClass;
    /**
     * URL of the licence or terms the track is offered under.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publisher asks for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer identifier of the node that ingested and published this record.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTCT(builder: flatbuffers.Builder): void;
    static addStormId(builder: flatbuffers.Builder, STORM_IDOffset: flatbuffers.Offset): void;
    static addStormName(builder: flatbuffers.Builder, STORM_NAMEOffset: flatbuffers.Offset): void;
    static addBasin(builder: flatbuffers.Builder, BASIN: tctBasin): void;
    static addTrackKind(builder: flatbuffers.Builder, TRACK_KIND: tctTrackKind): void;
    static addTrackOrigin(builder: flatbuffers.Builder, TRACK_ORIGIN: tctTrackOrigin): void;
    static addModelClass(builder: flatbuffers.Builder, MODEL_CLASS: wxfModelClass): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addInitTimeMs(builder: flatbuffers.Builder, INIT_TIME_MS: bigint): void;
    static addMemberKind(builder: flatbuffers.Builder, MEMBER_KIND: wxfMemberKind): void;
    static addMemberIndex(builder: flatbuffers.Builder, MEMBER_INDEX: number): void;
    static addEnsembleSize(builder: flatbuffers.Builder, ENSEMBLE_SIZE: number): void;
    static addWindAveragingPeriodS(builder: flatbuffers.Builder, WIND_AVERAGING_PERIOD_S: number): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOriginId(builder: flatbuffers.Builder, ORIGIN_IDOffset: flatbuffers.Offset): void;
    static addDatasetId(builder: flatbuffers.Builder, DATASET_IDOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: wxfLicenseClass): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static endTCT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTCT(builder: flatbuffers.Builder, STORM_IDOffset: flatbuffers.Offset, STORM_NAMEOffset: flatbuffers.Offset, BASIN: tctBasin, TRACK_KIND: tctTrackKind, TRACK_ORIGIN: tctTrackOrigin, MODEL_CLASS: wxfModelClass, MODEL_IDOffset: flatbuffers.Offset, MODEL_VERSIONOffset: flatbuffers.Offset, INIT_TIME_MS: bigint, MEMBER_KIND: wxfMemberKind, MEMBER_INDEX: number, ENSEMBLE_SIZE: number, WIND_AVERAGING_PERIOD_S: number, POINTSOffset: flatbuffers.Offset, ORIGIN_IDOffset: flatbuffers.Offset, DATASET_IDOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, RETRIEVED_AT: bigint, LICENSE_CLASS: wxfLicenseClass, LICENSE_URLOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset, PRODUCER_PEER_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TCTT;
    unpackTo(_o: TCTT): void;
}
export declare class TCTT implements flatbuffers.IGeneratedObject {
    STORM_ID: string | Uint8Array | null;
    STORM_NAME: string | Uint8Array | null;
    BASIN: tctBasin;
    TRACK_KIND: tctTrackKind;
    TRACK_ORIGIN: tctTrackOrigin;
    MODEL_CLASS: wxfModelClass;
    MODEL_ID: string | Uint8Array | null;
    MODEL_VERSION: string | Uint8Array | null;
    INIT_TIME_MS: bigint;
    MEMBER_KIND: wxfMemberKind;
    MEMBER_INDEX: number;
    ENSEMBLE_SIZE: number;
    WIND_AVERAGING_PERIOD_S: number;
    POINTS: (TCTPointT)[];
    ORIGIN_ID: string | Uint8Array | null;
    DATASET_ID: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    RETRIEVED_AT: bigint;
    LICENSE_CLASS: wxfLicenseClass;
    LICENSE_URL: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    PRODUCER_PEER_ID: string | Uint8Array | null;
    constructor(STORM_ID?: string | Uint8Array | null, STORM_NAME?: string | Uint8Array | null, BASIN?: tctBasin, TRACK_KIND?: tctTrackKind, TRACK_ORIGIN?: tctTrackOrigin, MODEL_CLASS?: wxfModelClass, MODEL_ID?: string | Uint8Array | null, MODEL_VERSION?: string | Uint8Array | null, INIT_TIME_MS?: bigint, MEMBER_KIND?: wxfMemberKind, MEMBER_INDEX?: number, ENSEMBLE_SIZE?: number, WIND_AVERAGING_PERIOD_S?: number, POINTS?: (TCTPointT)[], ORIGIN_ID?: string | Uint8Array | null, DATASET_ID?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, RETRIEVED_AT?: bigint, LICENSE_CLASS?: wxfLicenseClass, LICENSE_URL?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, PRODUCER_PEER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TCT.d.ts.map