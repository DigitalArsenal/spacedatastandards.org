import * as flatbuffers from 'flatbuffers';
import { TRHAntenna, TRHAntennaT } from './TRHAntenna.js';
import { TRHAttestation, TRHAttestationT } from './TRHAttestation.js';
import { TRHInstallation, TRHInstallationT } from './TRHInstallation.js';
import { TRHReceiver, TRHReceiverT } from './TRHReceiver.js';
import { TRHTransmitter, TRHTransmitterT } from './TRHTransmitter.js';
import { TRHTransponder, TRHTransponderT } from './TRHTransponder.js';
/**
 * Tracking Hardware. Installations attach antennas, transmitters, receivers
 * and transponders to either a surface site or a tracked object. Delays are
 * seconds, frequencies hertz, temperatures kelvin and powers watts. JSON
 * projections preserve these IDL-capitalized field names exactly.
 */
export declare class TRH implements flatbuffers.IUnpackableObject<TRHT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRH;
    static getRootAsTRH(bb: flatbuffers.ByteBuffer, obj?: TRH): TRH;
    static getSizePrefixedRootAsTRH(bb: flatbuffers.ByteBuffer, obj?: TRH): TRH;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ANTENNAS(index: number, obj?: TRHAntenna): TRHAntenna | null;
    antennasLength(): number;
    TRANSMITTERS(index: number, obj?: TRHTransmitter): TRHTransmitter | null;
    transmittersLength(): number;
    RECEIVERS(index: number, obj?: TRHReceiver): TRHReceiver | null;
    receiversLength(): number;
    TRANSPONDERS(index: number, obj?: TRHTransponder): TRHTransponder | null;
    transpondersLength(): number;
    INSTALLATIONS(index: number, obj?: TRHInstallation): TRHInstallation | null;
    installationsLength(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTESTATION(obj?: TRHAttestation): TRHAttestation | null;
    static startTRH(builder: flatbuffers.Builder): void;
    static addAntennas(builder: flatbuffers.Builder, ANTENNASOffset: flatbuffers.Offset): void;
    static createAntennasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAntennasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransmitters(builder: flatbuffers.Builder, TRANSMITTERSOffset: flatbuffers.Offset): void;
    static createTransmittersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTransmittersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceivers(builder: flatbuffers.Builder, RECEIVERSOffset: flatbuffers.Offset): void;
    static createReceiversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReceiversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransponders(builder: flatbuffers.Builder, TRANSPONDERSOffset: flatbuffers.Offset): void;
    static createTranspondersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTranspondersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInstallations(builder: flatbuffers.Builder, INSTALLATIONSOffset: flatbuffers.Offset): void;
    static createInstallationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInstallationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addAttestation(builder: flatbuffers.Builder, ATTESTATIONOffset: flatbuffers.Offset): void;
    static endTRH(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TRHT;
    unpackTo(_o: TRHT): void;
}
export declare class TRHT implements flatbuffers.IGeneratedObject {
    ANTENNAS: (TRHAntennaT)[];
    TRANSMITTERS: (TRHTransmitterT)[];
    RECEIVERS: (TRHReceiverT)[];
    TRANSPONDERS: (TRHTransponderT)[];
    INSTALLATIONS: (TRHInstallationT)[];
    TRACE_ID: string | Uint8Array | null;
    ATTESTATION: TRHAttestationT | null;
    constructor(ANTENNAS?: (TRHAntennaT)[], TRANSMITTERS?: (TRHTransmitterT)[], RECEIVERS?: (TRHReceiverT)[], TRANSPONDERS?: (TRHTransponderT)[], INSTALLATIONS?: (TRHInstallationT)[], TRACE_ID?: string | Uint8Array | null, ATTESTATION?: TRHAttestationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRH.d.ts.map