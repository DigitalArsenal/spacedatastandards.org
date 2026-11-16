import * as flatbuffers from 'flatbuffers';
import { CLGRecordRef, CLGRecordRefT } from './CLGRecordRef.js';
import { clgSourceCategory } from './clgSourceCategory.js';
export declare class CLGSource implements flatbuffers.IUnpackableObject<CLGSourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGSource;
    static getRootAsCLGSource(bb: flatbuffers.ByteBuffer, obj?: CLGSource): CLGSource;
    static getSizePrefixedRootAsCLGSource(bb: flatbuffers.ByteBuffer, obj?: CLGSource): CLGSource;
    CATEGORY(): clgSourceCategory;
    RECORD(obj?: CLGRecordRef): CLGRecordRef | null;
    THEORY(): string;
    THEORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_VERSION(): string | null;
    PROVIDER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_SHA256(): string | null;
    PROVIDER_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONFIGURATION(obj?: CLGRecordRef): CLGRecordRef | null;
    ATTITUDE(obj?: CLGRecordRef): CLGRecordRef | null;
    AUXILIARY(index: number, obj?: CLGRecordRef): CLGRecordRef | null;
    auxiliaryLength(): number;
    INTERPOLATION_ID(): string;
    INTERPOLATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * HAS_<FIELD> controls presence; applicable bounds must be finite >=0.
     */
    POSITION_ERROR_M(): number;
    VELOCITY_ERROR_MPS(): number;
    ACCELERATION_ERROR_MPS2(): number;
    JERK_ERROR_MPS3(): number;
    ATTITUDE_ERROR_RAD(): number;
    ANGULAR_RATE_ERROR_RAD_S(): number;
    ANGULAR_ACCELERATION_ERROR_RAD_S2(): number;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_CATEGORY(): boolean;
    HAS_POSITION_ERROR_M(): boolean;
    HAS_VELOCITY_ERROR_MPS(): boolean;
    HAS_ACCELERATION_ERROR_MPS2(): boolean;
    HAS_JERK_ERROR_MPS3(): boolean;
    HAS_ATTITUDE_ERROR_RAD(): boolean;
    HAS_ANGULAR_RATE_ERROR_RAD_S(): boolean;
    HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2(): boolean;
    static startCLGSource(builder: flatbuffers.Builder): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: clgSourceCategory): void;
    static addRecord(builder: flatbuffers.Builder, RECORDOffset: flatbuffers.Offset): void;
    static addTheory(builder: flatbuffers.Builder, THEORYOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addProviderVersion(builder: flatbuffers.Builder, PROVIDER_VERSIONOffset: flatbuffers.Offset): void;
    static addProviderSha256(builder: flatbuffers.Builder, PROVIDER_SHA256Offset: flatbuffers.Offset): void;
    static addConfiguration(builder: flatbuffers.Builder, CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addAttitude(builder: flatbuffers.Builder, ATTITUDEOffset: flatbuffers.Offset): void;
    static addAuxiliary(builder: flatbuffers.Builder, AUXILIARYOffset: flatbuffers.Offset): void;
    static createAuxiliaryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAuxiliaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolationId(builder: flatbuffers.Builder, INTERPOLATION_IDOffset: flatbuffers.Offset): void;
    static addPositionErrorM(builder: flatbuffers.Builder, POSITION_ERROR_M: number): void;
    static addVelocityErrorMps(builder: flatbuffers.Builder, VELOCITY_ERROR_MPS: number): void;
    static addAccelerationErrorMps2(builder: flatbuffers.Builder, ACCELERATION_ERROR_MPS2: number): void;
    static addJerkErrorMps3(builder: flatbuffers.Builder, JERK_ERROR_MPS3: number): void;
    static addAttitudeErrorRad(builder: flatbuffers.Builder, ATTITUDE_ERROR_RAD: number): void;
    static addAngularRateErrorRadS(builder: flatbuffers.Builder, ANGULAR_RATE_ERROR_RAD_S: number): void;
    static addAngularAccelerationErrorRadS2(builder: flatbuffers.Builder, ANGULAR_ACCELERATION_ERROR_RAD_S2: number): void;
    static addHasCategory(builder: flatbuffers.Builder, HAS_CATEGORY: boolean): void;
    static addHasPositionErrorM(builder: flatbuffers.Builder, HAS_POSITION_ERROR_M: boolean): void;
    static addHasVelocityErrorMps(builder: flatbuffers.Builder, HAS_VELOCITY_ERROR_MPS: boolean): void;
    static addHasAccelerationErrorMps2(builder: flatbuffers.Builder, HAS_ACCELERATION_ERROR_MPS2: boolean): void;
    static addHasJerkErrorMps3(builder: flatbuffers.Builder, HAS_JERK_ERROR_MPS3: boolean): void;
    static addHasAttitudeErrorRad(builder: flatbuffers.Builder, HAS_ATTITUDE_ERROR_RAD: boolean): void;
    static addHasAngularRateErrorRadS(builder: flatbuffers.Builder, HAS_ANGULAR_RATE_ERROR_RAD_S: boolean): void;
    static addHasAngularAccelerationErrorRadS2(builder: flatbuffers.Builder, HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2: boolean): void;
    static endCLGSource(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGSourceT;
    unpackTo(_o: CLGSourceT): void;
}
export declare class CLGSourceT implements flatbuffers.IGeneratedObject {
    CATEGORY: clgSourceCategory;
    RECORD: CLGRecordRefT | null;
    THEORY: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    PROVIDER_VERSION: string | Uint8Array | null;
    PROVIDER_SHA256: string | Uint8Array | null;
    CONFIGURATION: CLGRecordRefT | null;
    ATTITUDE: CLGRecordRefT | null;
    AUXILIARY: (CLGRecordRefT)[];
    INTERPOLATION_ID: string | Uint8Array | null;
    POSITION_ERROR_M: number;
    VELOCITY_ERROR_MPS: number;
    ACCELERATION_ERROR_MPS2: number;
    JERK_ERROR_MPS3: number;
    ATTITUDE_ERROR_RAD: number;
    ANGULAR_RATE_ERROR_RAD_S: number;
    ANGULAR_ACCELERATION_ERROR_RAD_S2: number;
    HAS_CATEGORY: boolean;
    HAS_POSITION_ERROR_M: boolean;
    HAS_VELOCITY_ERROR_MPS: boolean;
    HAS_ACCELERATION_ERROR_MPS2: boolean;
    HAS_JERK_ERROR_MPS3: boolean;
    HAS_ATTITUDE_ERROR_RAD: boolean;
    HAS_ANGULAR_RATE_ERROR_RAD_S: boolean;
    HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2: boolean;
    constructor(CATEGORY?: clgSourceCategory, RECORD?: CLGRecordRefT | null, THEORY?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, PROVIDER_VERSION?: string | Uint8Array | null, PROVIDER_SHA256?: string | Uint8Array | null, CONFIGURATION?: CLGRecordRefT | null, ATTITUDE?: CLGRecordRefT | null, AUXILIARY?: (CLGRecordRefT)[], INTERPOLATION_ID?: string | Uint8Array | null, POSITION_ERROR_M?: number, VELOCITY_ERROR_MPS?: number, ACCELERATION_ERROR_MPS2?: number, JERK_ERROR_MPS3?: number, ATTITUDE_ERROR_RAD?: number, ANGULAR_RATE_ERROR_RAD_S?: number, ANGULAR_ACCELERATION_ERROR_RAD_S2?: number, HAS_CATEGORY?: boolean, HAS_POSITION_ERROR_M?: boolean, HAS_VELOCITY_ERROR_MPS?: boolean, HAS_ACCELERATION_ERROR_MPS2?: boolean, HAS_JERK_ERROR_MPS3?: boolean, HAS_ATTITUDE_ERROR_RAD?: boolean, HAS_ANGULAR_RATE_ERROR_RAD_S?: boolean, HAS_ANGULAR_ACCELERATION_ERROR_RAD_S2?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGSource.d.ts.map