import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
/**
 * Frame coordinates the publisher derived from position and distance.
 */
export declare class SSYPlacement implements flatbuffers.IUnpackableObject<SSYPlacementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYPlacement;
    static getRootAsSSYPlacement(bb: flatbuffers.ByteBuffer, obj?: SSYPlacement): SSYPlacement;
    static getSizePrefixedRootAsSSYPlacement(bb: flatbuffers.ByteBuffer, obj?: SSYPlacement): SSYPlacement;
    GALACTIC_L_DEG(obj?: EXOParameter): EXOParameter | null;
    GALACTIC_B_DEG(obj?: EXOParameter): EXOParameter | null;
    SUPERGALACTIC_X_KPC(obj?: EXOParameter): EXOParameter | null;
    SUPERGALACTIC_Y_KPC(obj?: EXOParameter): EXOParameter | null;
    SUPERGALACTIC_Z_KPC(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_GALACTIC_CENTER_KPC(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_M31_KPC(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_LOCAL_GROUP_KPC(obj?: EXOParameter): EXOParameter | null;
    DISTANCE_HOST_KPC(obj?: EXOParameter): EXOParameter | null;
    /**
     * Frame constants used, verbatim (e.g. astropy Galactocentric "latest";
     * LG apex 316 km/s toward l=93, b=-4).
     */
    FRAME_NOTE(): string | null;
    FRAME_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSSYPlacement(builder: flatbuffers.Builder): void;
    static addGalacticLDeg(builder: flatbuffers.Builder, GALACTIC_L_DEGOffset: flatbuffers.Offset): void;
    static addGalacticBDeg(builder: flatbuffers.Builder, GALACTIC_B_DEGOffset: flatbuffers.Offset): void;
    static addSupergalacticXKpc(builder: flatbuffers.Builder, SUPERGALACTIC_X_KPCOffset: flatbuffers.Offset): void;
    static addSupergalacticYKpc(builder: flatbuffers.Builder, SUPERGALACTIC_Y_KPCOffset: flatbuffers.Offset): void;
    static addSupergalacticZKpc(builder: flatbuffers.Builder, SUPERGALACTIC_Z_KPCOffset: flatbuffers.Offset): void;
    static addDistanceGalacticCenterKpc(builder: flatbuffers.Builder, DISTANCE_GALACTIC_CENTER_KPCOffset: flatbuffers.Offset): void;
    static addDistanceM31Kpc(builder: flatbuffers.Builder, DISTANCE_M31_KPCOffset: flatbuffers.Offset): void;
    static addDistanceLocalGroupKpc(builder: flatbuffers.Builder, DISTANCE_LOCAL_GROUP_KPCOffset: flatbuffers.Offset): void;
    static addDistanceHostKpc(builder: flatbuffers.Builder, DISTANCE_HOST_KPCOffset: flatbuffers.Offset): void;
    static addFrameNote(builder: flatbuffers.Builder, FRAME_NOTEOffset: flatbuffers.Offset): void;
    static endSSYPlacement(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SSYPlacementT;
    unpackTo(_o: SSYPlacementT): void;
}
export declare class SSYPlacementT implements flatbuffers.IGeneratedObject {
    GALACTIC_L_DEG: EXOParameterT | null;
    GALACTIC_B_DEG: EXOParameterT | null;
    SUPERGALACTIC_X_KPC: EXOParameterT | null;
    SUPERGALACTIC_Y_KPC: EXOParameterT | null;
    SUPERGALACTIC_Z_KPC: EXOParameterT | null;
    DISTANCE_GALACTIC_CENTER_KPC: EXOParameterT | null;
    DISTANCE_M31_KPC: EXOParameterT | null;
    DISTANCE_LOCAL_GROUP_KPC: EXOParameterT | null;
    DISTANCE_HOST_KPC: EXOParameterT | null;
    FRAME_NOTE: string | Uint8Array | null;
    constructor(GALACTIC_L_DEG?: EXOParameterT | null, GALACTIC_B_DEG?: EXOParameterT | null, SUPERGALACTIC_X_KPC?: EXOParameterT | null, SUPERGALACTIC_Y_KPC?: EXOParameterT | null, SUPERGALACTIC_Z_KPC?: EXOParameterT | null, DISTANCE_GALACTIC_CENTER_KPC?: EXOParameterT | null, DISTANCE_M31_KPC?: EXOParameterT | null, DISTANCE_LOCAL_GROUP_KPC?: EXOParameterT | null, DISTANCE_HOST_KPC?: EXOParameterT | null, FRAME_NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYPlacement.d.ts.map