import * as flatbuffers from 'flatbuffers';
import { THPProvenance, THPProvenanceT } from './THPProvenance.js';
import { thpParamValueKind } from './thpParamValueKind.js';
/**
 * One typed capability or environmental threshold parameter on a threat profile.
 */
export declare class THPParameter implements flatbuffers.IUnpackableObject<THPParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): THPParameter;
    static getRootAsTHPParameter(bb: flatbuffers.ByteBuffer, obj?: THPParameter): THPParameter;
    static getSizePrefixedRootAsTHPParameter(bb: flatbuffers.ByteBuffer, obj?: THPParameter): THPParameter;
    /**
     * Canonical parameter key (e.g. "ALTITUDE_CAP_KM", "EIRP_DBW", "LASER_WAVELENGTH_NM").
     */
    PARAM_KEY(): string;
    PARAM_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Discriminator naming which value field is populated.
     */
    VALUE_KIND(): thpParamValueKind;
    /**
     * Numeric parameter value when VALUE_KIND is SCALAR_DOUBLE.
     */
    NUMERIC_VALUE(): number;
    /**
     * String parameter value when VALUE_KIND is TEXT.
     */
    TEXT_VALUE(): string | null;
    TEXT_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Boolean parameter value when VALUE_KIND is BOOLEAN.
     */
    BOOL_VALUE(): boolean;
    /**
     * Physical units string for numeric values (e.g. "km", "dBW", "MHz", "nm").
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameter-level provenance and certainty.
     */
    PROVENANCE(obj?: THPProvenance): THPProvenance | null;
    static startTHPParameter(builder: flatbuffers.Builder): void;
    static addParamKey(builder: flatbuffers.Builder, PARAM_KEYOffset: flatbuffers.Offset): void;
    static addValueKind(builder: flatbuffers.Builder, VALUE_KIND: thpParamValueKind): void;
    static addNumericValue(builder: flatbuffers.Builder, NUMERIC_VALUE: number): void;
    static addTextValue(builder: flatbuffers.Builder, TEXT_VALUEOffset: flatbuffers.Offset): void;
    static addBoolValue(builder: flatbuffers.Builder, BOOL_VALUE: boolean): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endTHPParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): THPParameterT;
    unpackTo(_o: THPParameterT): void;
}
export declare class THPParameterT implements flatbuffers.IGeneratedObject {
    PARAM_KEY: string | Uint8Array | null;
    VALUE_KIND: thpParamValueKind;
    NUMERIC_VALUE: number;
    TEXT_VALUE: string | Uint8Array | null;
    BOOL_VALUE: boolean;
    UNITS: string | Uint8Array | null;
    PROVENANCE: THPProvenanceT | null;
    constructor(PARAM_KEY?: string | Uint8Array | null, VALUE_KIND?: thpParamValueKind, NUMERIC_VALUE?: number, TEXT_VALUE?: string | Uint8Array | null, BOOL_VALUE?: boolean, UNITS?: string | Uint8Array | null, PROVENANCE?: THPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=THPParameter.d.ts.map