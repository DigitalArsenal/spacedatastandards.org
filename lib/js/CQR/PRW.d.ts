import * as flatbuffers from 'flatbuffers';
import { PRWAtmosphereRequest, PRWAtmosphereRequestT } from './PRWAtmosphereRequest.js';
import { PRWAtmosphereResult, PRWAtmosphereResultT } from './PRWAtmosphereResult.js';
import { PRWBatchRequest, PRWBatchRequestT } from './PRWBatchRequest.js';
import { PRWBatchResponse, PRWBatchResponseT } from './PRWBatchResponse.js';
import { PRWDescribeRequest, PRWDescribeRequestT } from './PRWDescribeRequest.js';
import { PRWDescribeResult, PRWDescribeResultT } from './PRWDescribeResult.js';
import { PRWEphemerisRequest, PRWEphemerisRequestT } from './PRWEphemerisRequest.js';
import { PRWEphemerisResult, PRWEphemerisResultT } from './PRWEphemerisResult.js';
import { PRWExecutionRequest, PRWExecutionRequestT } from './PRWExecutionRequest.js';
import { PRWExecutionResult, PRWExecutionResultT } from './PRWExecutionResult.js';
import { PRWInit, PRWInitT } from './PRWInit.js';
import { PRWNativeInput, PRWNativeInputT } from './PRWNativeInput.js';
import { PRWPrepareRequest, PRWPrepareRequestT } from './PRWPrepareRequest.js';
import { PRWPrepareResult, PRWPrepareResultT } from './PRWPrepareResult.js';
import { PRWResidentRequest, PRWResidentRequestT } from './PRWResidentRequest.js';
import { PRWResidentState, PRWResidentStateT } from './PRWResidentState.js';
import { PRWVersionResult, PRWVersionResultT } from './PRWVersionResult.js';
/**
 * Exactly one arm per envelope. Existing three arms keep their ordinals.
 */
export declare class PRW implements flatbuffers.IUnpackableObject<PRWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRW;
    static getRootAsPRW(bb: flatbuffers.ByteBuffer, obj?: PRW): PRW;
    static getSizePrefixedRootAsPRW(bb: flatbuffers.ByteBuffer, obj?: PRW): PRW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    INIT(obj?: PRWInit): PRWInit | null;
    BATCH_REQUEST(obj?: PRWBatchRequest): PRWBatchRequest | null;
    BATCH_RESPONSE(obj?: PRWBatchResponse): PRWBatchResponse | null;
    /**
     * Appended portable arms; each method names its permitted arm.
     */
    EXECUTION_REQUEST(obj?: PRWExecutionRequest): PRWExecutionRequest | null;
    EXECUTION_RESULT(obj?: PRWExecutionResult): PRWExecutionResult | null;
    RESIDENT_STATE(obj?: PRWResidentState): PRWResidentState | null;
    RESIDENT_REQUEST(obj?: PRWResidentRequest): PRWResidentRequest | null;
    PREPARE_REQUEST(obj?: PRWPrepareRequest): PRWPrepareRequest | null;
    PREPARE_RESULT(obj?: PRWPrepareResult): PRWPrepareResult | null;
    DESCRIBE_REQUEST(obj?: PRWDescribeRequest): PRWDescribeRequest | null;
    DESCRIBE_RESULT(obj?: PRWDescribeResult): PRWDescribeResult | null;
    NATIVE_INPUT(obj?: PRWNativeInput): PRWNativeInput | null;
    EPHEMERIS_REQUEST(obj?: PRWEphemerisRequest): PRWEphemerisRequest | null;
    EPHEMERIS_RESULT(obj?: PRWEphemerisResult): PRWEphemerisResult | null;
    ATMOSPHERE_REQUEST(obj?: PRWAtmosphereRequest): PRWAtmosphereRequest | null;
    ATMOSPHERE_RESULT(obj?: PRWAtmosphereResult): PRWAtmosphereResult | null;
    VERSION_QUERY(): boolean;
    VERSION_RESULT(obj?: PRWVersionResult): PRWVersionResult | null;
    static startPRW(builder: flatbuffers.Builder): void;
    static addInit(builder: flatbuffers.Builder, INITOffset: flatbuffers.Offset): void;
    static addBatchRequest(builder: flatbuffers.Builder, BATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addBatchResponse(builder: flatbuffers.Builder, BATCH_RESPONSEOffset: flatbuffers.Offset): void;
    static addExecutionRequest(builder: flatbuffers.Builder, EXECUTION_REQUESTOffset: flatbuffers.Offset): void;
    static addExecutionResult(builder: flatbuffers.Builder, EXECUTION_RESULTOffset: flatbuffers.Offset): void;
    static addResidentState(builder: flatbuffers.Builder, RESIDENT_STATEOffset: flatbuffers.Offset): void;
    static addResidentRequest(builder: flatbuffers.Builder, RESIDENT_REQUESTOffset: flatbuffers.Offset): void;
    static addPrepareRequest(builder: flatbuffers.Builder, PREPARE_REQUESTOffset: flatbuffers.Offset): void;
    static addPrepareResult(builder: flatbuffers.Builder, PREPARE_RESULTOffset: flatbuffers.Offset): void;
    static addDescribeRequest(builder: flatbuffers.Builder, DESCRIBE_REQUESTOffset: flatbuffers.Offset): void;
    static addDescribeResult(builder: flatbuffers.Builder, DESCRIBE_RESULTOffset: flatbuffers.Offset): void;
    static addNativeInput(builder: flatbuffers.Builder, NATIVE_INPUTOffset: flatbuffers.Offset): void;
    static addEphemerisRequest(builder: flatbuffers.Builder, EPHEMERIS_REQUESTOffset: flatbuffers.Offset): void;
    static addEphemerisResult(builder: flatbuffers.Builder, EPHEMERIS_RESULTOffset: flatbuffers.Offset): void;
    static addAtmosphereRequest(builder: flatbuffers.Builder, ATMOSPHERE_REQUESTOffset: flatbuffers.Offset): void;
    static addAtmosphereResult(builder: flatbuffers.Builder, ATMOSPHERE_RESULTOffset: flatbuffers.Offset): void;
    static addVersionQuery(builder: flatbuffers.Builder, VERSION_QUERY: boolean): void;
    static addVersionResult(builder: flatbuffers.Builder, VERSION_RESULTOffset: flatbuffers.Offset): void;
    static endPRW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPRWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPRWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PRWT;
    unpackTo(_o: PRWT): void;
}
export declare class PRWT implements flatbuffers.IGeneratedObject {
    INIT: PRWInitT | null;
    BATCH_REQUEST: PRWBatchRequestT | null;
    BATCH_RESPONSE: PRWBatchResponseT | null;
    EXECUTION_REQUEST: PRWExecutionRequestT | null;
    EXECUTION_RESULT: PRWExecutionResultT | null;
    RESIDENT_STATE: PRWResidentStateT | null;
    RESIDENT_REQUEST: PRWResidentRequestT | null;
    PREPARE_REQUEST: PRWPrepareRequestT | null;
    PREPARE_RESULT: PRWPrepareResultT | null;
    DESCRIBE_REQUEST: PRWDescribeRequestT | null;
    DESCRIBE_RESULT: PRWDescribeResultT | null;
    NATIVE_INPUT: PRWNativeInputT | null;
    EPHEMERIS_REQUEST: PRWEphemerisRequestT | null;
    EPHEMERIS_RESULT: PRWEphemerisResultT | null;
    ATMOSPHERE_REQUEST: PRWAtmosphereRequestT | null;
    ATMOSPHERE_RESULT: PRWAtmosphereResultT | null;
    VERSION_QUERY: boolean;
    VERSION_RESULT: PRWVersionResultT | null;
    constructor(INIT?: PRWInitT | null, BATCH_REQUEST?: PRWBatchRequestT | null, BATCH_RESPONSE?: PRWBatchResponseT | null, EXECUTION_REQUEST?: PRWExecutionRequestT | null, EXECUTION_RESULT?: PRWExecutionResultT | null, RESIDENT_STATE?: PRWResidentStateT | null, RESIDENT_REQUEST?: PRWResidentRequestT | null, PREPARE_REQUEST?: PRWPrepareRequestT | null, PREPARE_RESULT?: PRWPrepareResultT | null, DESCRIBE_REQUEST?: PRWDescribeRequestT | null, DESCRIBE_RESULT?: PRWDescribeResultT | null, NATIVE_INPUT?: PRWNativeInputT | null, EPHEMERIS_REQUEST?: PRWEphemerisRequestT | null, EPHEMERIS_RESULT?: PRWEphemerisResultT | null, ATMOSPHERE_REQUEST?: PRWAtmosphereRequestT | null, ATMOSPHERE_RESULT?: PRWAtmosphereResultT | null, VERSION_QUERY?: boolean, VERSION_RESULT?: PRWVersionResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRW.d.ts.map