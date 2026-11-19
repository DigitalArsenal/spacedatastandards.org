import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
/**
 * Physical envelope. Every extent is a sourced quantity. Extents measured off
 * 3D-asset geometry carry PROVENANCE.METHOD MODEL_DERIVED and describe the
 * model, not the flight article.
 */
export declare class OPPDimensions implements flatbuffers.IUnpackableObject<OPPDimensionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPDimensions;
    static getRootAsOPPDimensions(bb: flatbuffers.ByteBuffer, obj?: OPPDimensions): OPPDimensions;
    static getSizePrefixedRootAsOPPDimensions(bb: flatbuffers.ByteBuffer, obj?: OPPDimensions): OPPDimensions;
    /**
     * Extents along the object's own body axes [m].
     */
    BODY_X(obj?: OPPQuantity): OPPQuantity | null;
    BODY_Y(obj?: OPPQuantity): OPPQuantity | null;
    BODY_Z(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Envelope terms as an object database publishes them [m].
     */
    HEIGHT(obj?: OPPQuantity): OPPQuantity | null;
    WIDTH(obj?: OPPQuantity): OPPQuantity | null;
    DEPTH(obj?: OPPQuantity): OPPQuantity | null;
    DIAMETER(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Largest extent with appendages stowed [m].
     */
    SPAN_STOWED(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Largest extent with appendages deployed [m].
     */
    SPAN_DEPLOYED(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Gross geometric shape verbatim from the source, such as a shape string
     * of the form "Box + 1 Pan" or "Cyl". Never parsed into geometry.
     */
    SHAPE(): string | null;
    SHAPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provenance of SHAPE. Present whenever SHAPE is nonempty.
     */
    SHAPE_PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startOPPDimensions(builder: flatbuffers.Builder): void;
    static addBodyX(builder: flatbuffers.Builder, BODY_XOffset: flatbuffers.Offset): void;
    static addBodyY(builder: flatbuffers.Builder, BODY_YOffset: flatbuffers.Offset): void;
    static addBodyZ(builder: flatbuffers.Builder, BODY_ZOffset: flatbuffers.Offset): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHTOffset: flatbuffers.Offset): void;
    static addWidth(builder: flatbuffers.Builder, WIDTHOffset: flatbuffers.Offset): void;
    static addDepth(builder: flatbuffers.Builder, DEPTHOffset: flatbuffers.Offset): void;
    static addDiameter(builder: flatbuffers.Builder, DIAMETEROffset: flatbuffers.Offset): void;
    static addSpanStowed(builder: flatbuffers.Builder, SPAN_STOWEDOffset: flatbuffers.Offset): void;
    static addSpanDeployed(builder: flatbuffers.Builder, SPAN_DEPLOYEDOffset: flatbuffers.Offset): void;
    static addShape(builder: flatbuffers.Builder, SHAPEOffset: flatbuffers.Offset): void;
    static addShapeProvenance(builder: flatbuffers.Builder, SHAPE_PROVENANCEOffset: flatbuffers.Offset): void;
    static endOPPDimensions(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPDimensionsT;
    unpackTo(_o: OPPDimensionsT): void;
}
export declare class OPPDimensionsT implements flatbuffers.IGeneratedObject {
    BODY_X: OPPQuantityT | null;
    BODY_Y: OPPQuantityT | null;
    BODY_Z: OPPQuantityT | null;
    HEIGHT: OPPQuantityT | null;
    WIDTH: OPPQuantityT | null;
    DEPTH: OPPQuantityT | null;
    DIAMETER: OPPQuantityT | null;
    SPAN_STOWED: OPPQuantityT | null;
    SPAN_DEPLOYED: OPPQuantityT | null;
    SHAPE: string | Uint8Array | null;
    SHAPE_PROVENANCE: OPPProvenanceT | null;
    constructor(BODY_X?: OPPQuantityT | null, BODY_Y?: OPPQuantityT | null, BODY_Z?: OPPQuantityT | null, HEIGHT?: OPPQuantityT | null, WIDTH?: OPPQuantityT | null, DEPTH?: OPPQuantityT | null, DIAMETER?: OPPQuantityT | null, SPAN_STOWED?: OPPQuantityT | null, SPAN_DEPLOYED?: OPPQuantityT | null, SHAPE?: string | Uint8Array | null, SHAPE_PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPDimensions.d.ts.map