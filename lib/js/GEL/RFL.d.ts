import * as flatbuffers from 'flatbuffers';
import { RFLInterferenceContribution, RFLInterferenceContributionT } from './RFLInterferenceContribution.js';
import { RFLLink, RFLLinkT } from './RFLLink.js';
import { RFLObstruction, RFLObstructionT } from './RFLObstruction.js';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { rflAccessState } from './rflAccessState.js';
import { rflConstraint } from './rflConstraint.js';
import { timingStandard } from './timingStandard.js';
/**
 * RF Link Sample
 */
export declare class RFL implements flatbuffers.IUnpackableObject<RFLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFL;
    static getRootAsRFL(bb: flatbuffers.ByteBuffer, obj?: RFL): RFL;
    static getSizePrefixedRootAsRFL(bb: flatbuffers.ByteBuffer, obj?: RFL): RFL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this sample set.
     */
    RFL_ID(): string;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Analysis or scenario grouping identifier shared with the `$ACI` and
     * `$CVP` products derived from this set.
     */
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link definitions. SAMPLE_LINK_INDEXES index into this vector.
     */
    LINKS(index: number, obj?: RFLLink): RFLLink | null;
    linksLength(): number;
    /**
     * Number of samples. Every present metric array MUST have exactly this
     * many entries.
     */
    SAMPLE_COUNT(): number;
    /**
     * Index into LINKS for each sample.
     */
    SAMPLE_LINK_INDEXES(index: number): number | null;
    sampleLinkIndexesLength(): number;
    sampleLinkIndexesArray(): Uint32Array;
    /**
     * Sample epochs, seconds since 1970-01-01T00:00:00 in TIME_SYSTEM. Samples
     * need not be uniformly spaced and need not be grouped by link, but MUST be
     * non-decreasing within each link.
     */
    SAMPLE_EPOCHS(index: number): number | null;
    sampleEpochsLength(): number;
    sampleEpochsArray(): Float64Array;
    /**
     * Time scale SAMPLE_EPOCHS are expressed in. Defaults to UTC explicitly:
     * `timingStandard` ordinal 0 is GMST, so an unset field would otherwise
     * decode as sidereal time.
     */
    TIME_SYSTEM(): timingStandard;
    /**
     * Access state per sample.
     */
    ACCESS_STATES(index: number): rflAccessState | null;
    accessStatesLength(): number;
    accessStatesArray(): Int8Array | null;
    /**
     * Slant range, metres.
     */
    RANGE_M(index: number): number | null;
    rangeMLength(): number;
    rangeMArray(): Float64Array | null;
    /**
     * Range rate, metres per second; positive is opening.
     */
    RANGE_RATE_M_S(index: number): number | null;
    rangeRateMSLength(): number;
    rangeRateMSArray(): Float64Array | null;
    /**
     * Azimuth at the receiving endpoint, degrees east of north [0-360).
     */
    AZIMUTH_DEG(index: number): number | null;
    azimuthDegLength(): number;
    azimuthDegArray(): Float64Array | null;
    /**
     * Elevation at the receiving endpoint, degrees above the local horizon.
     */
    ELEVATION_DEG(index: number): number | null;
    elevationDegLength(): number;
    elevationDegArray(): Float64Array | null;
    /**
     * Azimuth at the transmitting endpoint, degrees east of north [0-360).
     */
    TRANSMIT_AZIMUTH_DEG(index: number): number | null;
    transmitAzimuthDegLength(): number;
    transmitAzimuthDegArray(): Float64Array | null;
    /**
     * Elevation at the transmitting endpoint, degrees.
     */
    TRANSMIT_ELEVATION_DEG(index: number): number | null;
    transmitElevationDegLength(): number;
    transmitElevationDegArray(): Float64Array | null;
    /**
     * Doppler shift of the carrier, hertz; positive is closing. Hertz, not the
     * MHz used for frequencies elsewhere in this record — a shift of a few kHz
     * on a GHz carrier is destroyed by an MHz encoding.
     */
    DOPPLER_SHIFT_HZ(index: number): number | null;
    dopplerShiftHzLength(): number;
    dopplerShiftHzArray(): Float64Array | null;
    /**
     * Doppler rate, hertz per second.
     */
    DOPPLER_RATE_HZ_S(index: number): number | null;
    dopplerRateHzSLength(): number;
    dopplerRateHzSArray(): Float64Array | null;
    /**
     * Effective isotropic radiated power toward the receiver, dBW.
     */
    EIRP_DBW(index: number): number | null;
    eirpDbwLength(): number;
    eirpDbwArray(): Float64Array | null;
    /**
     * Transmit antenna gain in the direction of the receiver, dBi.
     */
    TRANSMIT_ANTENNA_GAIN_DBI(index: number): number | null;
    transmitAntennaGainDbiLength(): number;
    transmitAntennaGainDbiArray(): Float64Array | null;
    /**
     * Receive antenna gain in the direction of the transmitter, dBi.
     */
    RECEIVE_ANTENNA_GAIN_DBI(index: number): number | null;
    receiveAntennaGainDbiLength(): number;
    receiveAntennaGainDbiArray(): Float64Array | null;
    /**
     * Free-space path loss, dB.
     */
    FREE_SPACE_PATH_LOSS_DB(index: number): number | null;
    freeSpacePathLossDbLength(): number;
    freeSpacePathLossDbArray(): Float64Array | null;
    /**
     * Gaseous (oxygen and water vapour) absorption, dB.
     */
    GASEOUS_ABSORPTION_LOSS_DB(index: number): number | null;
    gaseousAbsorptionLossDbLength(): number;
    gaseousAbsorptionLossDbArray(): Float64Array | null;
    /**
     * Rain attenuation, dB.
     */
    RAIN_LOSS_DB(index: number): number | null;
    rainLossDbLength(): number;
    rainLossDbArray(): Float64Array | null;
    /**
     * Cloud and fog attenuation, dB.
     */
    CLOUD_FOG_LOSS_DB(index: number): number | null;
    cloudFogLossDbLength(): number;
    cloudFogLossDbArray(): Float64Array | null;
    /**
     * Tropospheric or ionospheric scintillation, dB.
     */
    SCINTILLATION_LOSS_DB(index: number): number | null;
    scintillationLossDbLength(): number;
    scintillationLossDbArray(): Float64Array | null;
    /**
     * Terrain diffraction and blockage, dB.
     */
    TERRAIN_DIFFRACTION_LOSS_DB(index: number): number | null;
    terrainDiffractionLossDbLength(): number;
    terrainDiffractionLossDbArray(): Float64Array | null;
    /**
     * Total loss from 3D obstacles on the path, dB. The per-obstacle detail —
     * which object, which material, at what angle, through how much of it — is
     * in OBSTRUCTIONS.
     */
    OBSTRUCTION_LOSS_DB(index: number): number | null;
    obstructionLossDbLength(): number;
    obstructionLossDbArray(): Float64Array | null;
    /**
     * Polarization mismatch, dB.
     */
    POLARIZATION_LOSS_DB(index: number): number | null;
    polarizationLossDbLength(): number;
    polarizationLossDbArray(): Float64Array | null;
    /**
     * Antenna pointing error, dB.
     */
    POINTING_LOSS_DB(index: number): number | null;
    pointingLossDbLength(): number;
    pointingLossDbArray(): Float64Array | null;
    /**
     * Implementation and hardware losses, dB.
     */
    IMPLEMENTATION_LOSS_DB(index: number): number | null;
    implementationLossDbLength(): number;
    implementationLossDbArray(): Float64Array | null;
    /**
     * Total of all path terms actually applied, dB. Published as its own column
     * rather than left to the consumer to sum: a producer that applied a term
     * this schema has no column for MUST still report an honest total, and the
     * discrepancy against the itemised columns is then visible.
     */
    TOTAL_PATH_LOSS_DB(index: number): number | null;
    totalPathLossDbLength(): number;
    totalPathLossDbArray(): Float64Array | null;
    /**
     * Received carrier power at the receiver input, dBW.
     */
    RECEIVED_POWER_DBW(index: number): number | null;
    receivedPowerDbwLength(): number;
    receivedPowerDbwArray(): Float64Array | null;
    /**
     * Receiving system noise temperature, kelvin.
     */
    SYSTEM_NOISE_TEMPERATURE_K(index: number): number | null;
    systemNoiseTemperatureKLength(): number;
    systemNoiseTemperatureKArray(): Float64Array | null;
    /**
     * Receiving system figure of merit G/T, dB/K.
     */
    GAIN_TO_NOISE_TEMPERATURE_DB_PER_K(index: number): number | null;
    gainToNoiseTemperatureDbPerKLength(): number;
    gainToNoiseTemperatureDbPerKArray(): Float64Array | null;
    /**
     * Carrier-to-noise-density ratio C/N0, dB-Hz.
     */
    CARRIER_TO_NOISE_DENSITY_DBHZ(index: number): number | null;
    carrierToNoiseDensityDbhzLength(): number;
    carrierToNoiseDensityDbhzArray(): Float64Array | null;
    /**
     * Carrier-to-noise ratio C/N in the occupied bandwidth, dB.
     */
    CARRIER_TO_NOISE_DB(index: number): number | null;
    carrierToNoiseDbLength(): number;
    carrierToNoiseDbArray(): Float64Array | null;
    /**
     * Energy per bit to noise density Eb/N0, dB.
     */
    ENERGY_PER_BIT_TO_NOISE_DENSITY_DB(index: number): number | null;
    energyPerBitToNoiseDensityDbLength(): number;
    energyPerBitToNoiseDensityDbArray(): Float64Array | null;
    /**
     * Bit error rate as a probability [0-1], NOT an exponent and NOT a
     * percentage. 1e-6 is encoded 1e-6.
     */
    BIT_ERROR_RATE(index: number): number | null;
    bitErrorRateLength(): number;
    bitErrorRateArray(): Float64Array | null;
    /**
     * Link margin against the link's stated threshold, dB. Meaningless without
     * RFLLink.THRESHOLD_TERM / THRESHOLD_VALUE / THRESHOLD_COMPARISON.
     */
    LINK_MARGIN_DB(index: number): number | null;
    linkMarginDbLength(): number;
    linkMarginDbArray(): Float64Array | null;
    /**
     * Achievable channel capacity, bits per second.
     */
    CHANNEL_CAPACITY_BPS(index: number): number | null;
    channelCapacityBpsLength(): number;
    channelCapacityBpsArray(): Float64Array | null;
    /**
     * Aggregate received interfering power, dBW.
     */
    INTERFERENCE_POWER_DBW(index: number): number | null;
    interferencePowerDbwLength(): number;
    interferencePowerDbwArray(): Float64Array | null;
    /**
     * Carrier to noise-plus-interference ratio C/(N+I), dB.
     */
    CARRIER_TO_NOISE_PLUS_INTERFERENCE_DB(index: number): number | null;
    carrierToNoisePlusInterferenceDbLength(): number;
    carrierToNoisePlusInterferenceDbArray(): Float64Array | null;
    /**
     * Signal to interference-plus-noise ratio, dB.
     */
    SIGNAL_TO_INTERFERENCE_PLUS_NOISE_DB(index: number): number | null;
    signalToInterferencePlusNoiseDbLength(): number;
    signalToInterferencePlusNoiseDbArray(): Float64Array | null;
    /**
     * Per-contribution interference detail, sparse.
     */
    INTERFERENCE_CONTRIBUTIONS(index: number, obj?: RFLInterferenceContribution): RFLInterferenceContribution | null;
    interferenceContributionsLength(): number;
    /**
     * Per-interaction obstacle detail, sparse. Each entry names the `$RFS`
     * material it went through, reflected off or was blocked by.
     */
    OBSTRUCTIONS(index: number, obj?: RFLObstruction): RFLObstruction | null;
    obstructionsLength(): number;
    /**
     * The single condition that bound the link at each sample.
     */
    LIMITING_CONSTRAINTS(index: number): rflConstraint | null;
    limitingConstraintsLength(): number;
    limitingConstraintsArray(): Int8Array | null;
    /**
     * Verbatim description required when a LIMITING_CONSTRAINTS entry is OTHER.
     */
    LIMITING_CONSTRAINT_NOTE(): string | null;
    LIMITING_CONSTRAINT_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provenance of the whole set. Required: an unattributed budget is not
     * publishable.
     */
    PROVENANCE(obj?: RFLProvenance): RFLProvenance | null;
    /**
     * Unix ms this record was serialized.
     */
    COMPUTED_AT(): bigint;
    /**
     * `$EPM` identifier of the producing node.
     */
    PRODUCER_ID(): string | null;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the producing `$EPM` over the size-prefixed
     * FlatBuffer projection with both 64-byte signature payloads zeroed while
     * preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * Ed25519 signature by the producing `$EPM` over canonical JSON with IDL
     * field order, IDL capitalization, no insignificant whitespace, and both
     * signature fields omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array | null;
    /**
     * Index into the selected link's RFLLink.MODCOD_SET for each sample.
     * SELECTED_MODCOD_VALID distinguishes index 0 from no selection.
     */
    SELECTED_MODCOD_INDEX(index: number): number | null;
    selectedModcodIndexLength(): number;
    selectedModcodIndexArray(): Uint32Array | null;
    SELECTED_MODCOD_VALID(index: number): boolean | null;
    selectedModcodValidLength(): number;
    selectedModcodValidArray(): Int8Array | null;
    /**
     * Spectral efficiency delivered by the selected entry, bit/s/Hz.
     */
    SPECTRAL_EFFICIENCY_BPS_HZ(index: number): number | null;
    spectralEfficiencyBpsHzLength(): number;
    spectralEfficiencyBpsHzArray(): Float64Array | null;
    /**
     * Delivered information rate after adaptive selection, bits per second.
     */
    ACHIEVED_DATA_RATE_BPS(index: number): number | null;
    achievedDataRateBpsLength(): number;
    achievedDataRateBpsArray(): Float64Array | null;
    /**
     * Margin above the selected entry's threshold, dB.
     */
    ACM_MARGIN_DB(index: number): number | null;
    acmMarginDbLength(): number;
    acmMarginDbArray(): Float64Array | null;
    /**
     * Symbol energy to noise spectral density, dB.
     */
    ENERGY_PER_SYMBOL_TO_NOISE_DENSITY_DB(index: number): number | null;
    energyPerSymbolToNoiseDensityDbLength(): number;
    energyPerSymbolToNoiseDensityDbArray(): Float64Array | null;
    /**
     * Decoded block error probability [0-1].
     */
    BLOCK_ERROR_RATE(index: number): number | null;
    blockErrorRateLength(): number;
    blockErrorRateArray(): Float64Array | null;
    static startRFL(builder: flatbuffers.Builder): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addSampleLinkIndexes(builder: flatbuffers.Builder, SAMPLE_LINK_INDEXESOffset: flatbuffers.Offset): void;
    static createSampleLinkIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleLinkIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleLinkIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleEpochs(builder: flatbuffers.Builder, SAMPLE_EPOCHSOffset: flatbuffers.Offset): void;
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addAccessStates(builder: flatbuffers.Builder, ACCESS_STATESOffset: flatbuffers.Offset): void;
    static createAccessStatesVector(builder: flatbuffers.Builder, data: rflAccessState[]): flatbuffers.Offset;
    static startAccessStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRangeM(builder: flatbuffers.Builder, RANGE_MOffset: flatbuffers.Offset): void;
    static createRangeMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangeMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangeMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRangeRateMS(builder: flatbuffers.Builder, RANGE_RATE_M_SOffset: flatbuffers.Offset): void;
    static createRangeRateMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangeRateMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangeRateMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAzimuthDeg(builder: flatbuffers.Builder, AZIMUTH_DEGOffset: flatbuffers.Offset): void;
    static createAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAzimuthDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addElevationDeg(builder: flatbuffers.Builder, ELEVATION_DEGOffset: flatbuffers.Offset): void;
    static createElevationDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createElevationDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startElevationDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransmitAzimuthDeg(builder: flatbuffers.Builder, TRANSMIT_AZIMUTH_DEGOffset: flatbuffers.Offset): void;
    static createTransmitAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTransmitAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTransmitAzimuthDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransmitElevationDeg(builder: flatbuffers.Builder, TRANSMIT_ELEVATION_DEGOffset: flatbuffers.Offset): void;
    static createTransmitElevationDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTransmitElevationDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTransmitElevationDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDopplerShiftHz(builder: flatbuffers.Builder, DOPPLER_SHIFT_HZOffset: flatbuffers.Offset): void;
    static createDopplerShiftHzVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDopplerShiftHzVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDopplerShiftHzVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDopplerRateHzS(builder: flatbuffers.Builder, DOPPLER_RATE_HZ_SOffset: flatbuffers.Offset): void;
    static createDopplerRateHzSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDopplerRateHzSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDopplerRateHzSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEirpDbw(builder: flatbuffers.Builder, EIRP_DBWOffset: flatbuffers.Offset): void;
    static createEirpDbwVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEirpDbwVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEirpDbwVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransmitAntennaGainDbi(builder: flatbuffers.Builder, TRANSMIT_ANTENNA_GAIN_DBIOffset: flatbuffers.Offset): void;
    static createTransmitAntennaGainDbiVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTransmitAntennaGainDbiVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTransmitAntennaGainDbiVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceiveAntennaGainDbi(builder: flatbuffers.Builder, RECEIVE_ANTENNA_GAIN_DBIOffset: flatbuffers.Offset): void;
    static createReceiveAntennaGainDbiVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReceiveAntennaGainDbiVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceiveAntennaGainDbiVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFreeSpacePathLossDb(builder: flatbuffers.Builder, FREE_SPACE_PATH_LOSS_DBOffset: flatbuffers.Offset): void;
    static createFreeSpacePathLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFreeSpacePathLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFreeSpacePathLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGaseousAbsorptionLossDb(builder: flatbuffers.Builder, GASEOUS_ABSORPTION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRainLossDb(builder: flatbuffers.Builder, RAIN_LOSS_DBOffset: flatbuffers.Offset): void;
    static createRainLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRainLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRainLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCloudFogLossDb(builder: flatbuffers.Builder, CLOUD_FOG_LOSS_DBOffset: flatbuffers.Offset): void;
    static createCloudFogLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCloudFogLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCloudFogLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScintillationLossDb(builder: flatbuffers.Builder, SCINTILLATION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createScintillationLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScintillationLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScintillationLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTerrainDiffractionLossDb(builder: flatbuffers.Builder, TERRAIN_DIFFRACTION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createTerrainDiffractionLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTerrainDiffractionLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTerrainDiffractionLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObstructionLossDb(builder: flatbuffers.Builder, OBSTRUCTION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createObstructionLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createObstructionLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startObstructionLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolarizationLossDb(builder: flatbuffers.Builder, POLARIZATION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createPolarizationLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPolarizationLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPolarizationLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPointingLossDb(builder: flatbuffers.Builder, POINTING_LOSS_DBOffset: flatbuffers.Offset): void;
    static createPointingLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPointingLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPointingLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addImplementationLossDb(builder: flatbuffers.Builder, IMPLEMENTATION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createImplementationLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createImplementationLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startImplementationLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalPathLossDb(builder: flatbuffers.Builder, TOTAL_PATH_LOSS_DBOffset: flatbuffers.Offset): void;
    static createTotalPathLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTotalPathLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTotalPathLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReceivedPowerDbw(builder: flatbuffers.Builder, RECEIVED_POWER_DBWOffset: flatbuffers.Offset): void;
    static createReceivedPowerDbwVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReceivedPowerDbwVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceivedPowerDbwVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSystemNoiseTemperatureK(builder: flatbuffers.Builder, SYSTEM_NOISE_TEMPERATURE_KOffset: flatbuffers.Offset): void;
    static createSystemNoiseTemperatureKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSystemNoiseTemperatureKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSystemNoiseTemperatureKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGainToNoiseTemperatureDbPerK(builder: flatbuffers.Builder, GAIN_TO_NOISE_TEMPERATURE_DB_PER_KOffset: flatbuffers.Offset): void;
    static createGainToNoiseTemperatureDbPerKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGainToNoiseTemperatureDbPerKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGainToNoiseTemperatureDbPerKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCarrierToNoiseDensityDbhz(builder: flatbuffers.Builder, CARRIER_TO_NOISE_DENSITY_DBHZOffset: flatbuffers.Offset): void;
    static createCarrierToNoiseDensityDbhzVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCarrierToNoiseDensityDbhzVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCarrierToNoiseDensityDbhzVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCarrierToNoiseDb(builder: flatbuffers.Builder, CARRIER_TO_NOISE_DBOffset: flatbuffers.Offset): void;
    static createCarrierToNoiseDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCarrierToNoiseDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCarrierToNoiseDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergyPerBitToNoiseDensityDb(builder: flatbuffers.Builder, ENERGY_PER_BIT_TO_NOISE_DENSITY_DBOffset: flatbuffers.Offset): void;
    static createEnergyPerBitToNoiseDensityDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnergyPerBitToNoiseDensityDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnergyPerBitToNoiseDensityDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBitErrorRate(builder: flatbuffers.Builder, BIT_ERROR_RATEOffset: flatbuffers.Offset): void;
    static createBitErrorRateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBitErrorRateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBitErrorRateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinkMarginDb(builder: flatbuffers.Builder, LINK_MARGIN_DBOffset: flatbuffers.Offset): void;
    static createLinkMarginDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLinkMarginDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLinkMarginDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChannelCapacityBps(builder: flatbuffers.Builder, CHANNEL_CAPACITY_BPSOffset: flatbuffers.Offset): void;
    static createChannelCapacityBpsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createChannelCapacityBpsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChannelCapacityBpsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterferencePowerDbw(builder: flatbuffers.Builder, INTERFERENCE_POWER_DBWOffset: flatbuffers.Offset): void;
    static createInterferencePowerDbwVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInterferencePowerDbwVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInterferencePowerDbwVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCarrierToNoisePlusInterferenceDb(builder: flatbuffers.Builder, CARRIER_TO_NOISE_PLUS_INTERFERENCE_DBOffset: flatbuffers.Offset): void;
    static createCarrierToNoisePlusInterferenceDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCarrierToNoisePlusInterferenceDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCarrierToNoisePlusInterferenceDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignalToInterferencePlusNoiseDb(builder: flatbuffers.Builder, SIGNAL_TO_INTERFERENCE_PLUS_NOISE_DBOffset: flatbuffers.Offset): void;
    static createSignalToInterferencePlusNoiseDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSignalToInterferencePlusNoiseDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignalToInterferencePlusNoiseDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterferenceContributions(builder: flatbuffers.Builder, INTERFERENCE_CONTRIBUTIONSOffset: flatbuffers.Offset): void;
    static createInterferenceContributionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInterferenceContributionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObstructions(builder: flatbuffers.Builder, OBSTRUCTIONSOffset: flatbuffers.Offset): void;
    static createObstructionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObstructionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLimitingConstraints(builder: flatbuffers.Builder, LIMITING_CONSTRAINTSOffset: flatbuffers.Offset): void;
    static createLimitingConstraintsVector(builder: flatbuffers.Builder, data: rflConstraint[]): flatbuffers.Offset;
    static startLimitingConstraintsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLimitingConstraintNote(builder: flatbuffers.Builder, LIMITING_CONSTRAINT_NOTEOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSelectedModcodIndex(builder: flatbuffers.Builder, SELECTED_MODCOD_INDEXOffset: flatbuffers.Offset): void;
    static createSelectedModcodIndexVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSelectedModcodIndexVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSelectedModcodIndexVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSelectedModcodValid(builder: flatbuffers.Builder, SELECTED_MODCOD_VALIDOffset: flatbuffers.Offset): void;
    static createSelectedModcodValidVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startSelectedModcodValidVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpectralEfficiencyBpsHz(builder: flatbuffers.Builder, SPECTRAL_EFFICIENCY_BPS_HZOffset: flatbuffers.Offset): void;
    static createSpectralEfficiencyBpsHzVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpectralEfficiencyBpsHzVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpectralEfficiencyBpsHzVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAchievedDataRateBps(builder: flatbuffers.Builder, ACHIEVED_DATA_RATE_BPSOffset: flatbuffers.Offset): void;
    static createAchievedDataRateBpsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAchievedDataRateBpsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAchievedDataRateBpsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAcmMarginDb(builder: flatbuffers.Builder, ACM_MARGIN_DBOffset: flatbuffers.Offset): void;
    static createAcmMarginDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAcmMarginDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAcmMarginDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergyPerSymbolToNoiseDensityDb(builder: flatbuffers.Builder, ENERGY_PER_SYMBOL_TO_NOISE_DENSITY_DBOffset: flatbuffers.Offset): void;
    static createEnergyPerSymbolToNoiseDensityDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnergyPerSymbolToNoiseDensityDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnergyPerSymbolToNoiseDensityDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBlockErrorRate(builder: flatbuffers.Builder, BLOCK_ERROR_RATEOffset: flatbuffers.Offset): void;
    static createBlockErrorRateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBlockErrorRateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBlockErrorRateVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RFLT;
    unpackTo(_o: RFLT): void;
}
export declare class RFLT implements flatbuffers.IGeneratedObject {
    RFL_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    LINKS: (RFLLinkT)[];
    SAMPLE_COUNT: number;
    SAMPLE_LINK_INDEXES: (number)[];
    SAMPLE_EPOCHS: (number)[];
    TIME_SYSTEM: timingStandard;
    ACCESS_STATES: (rflAccessState)[];
    RANGE_M: (number)[];
    RANGE_RATE_M_S: (number)[];
    AZIMUTH_DEG: (number)[];
    ELEVATION_DEG: (number)[];
    TRANSMIT_AZIMUTH_DEG: (number)[];
    TRANSMIT_ELEVATION_DEG: (number)[];
    DOPPLER_SHIFT_HZ: (number)[];
    DOPPLER_RATE_HZ_S: (number)[];
    EIRP_DBW: (number)[];
    TRANSMIT_ANTENNA_GAIN_DBI: (number)[];
    RECEIVE_ANTENNA_GAIN_DBI: (number)[];
    FREE_SPACE_PATH_LOSS_DB: (number)[];
    GASEOUS_ABSORPTION_LOSS_DB: (number)[];
    RAIN_LOSS_DB: (number)[];
    CLOUD_FOG_LOSS_DB: (number)[];
    SCINTILLATION_LOSS_DB: (number)[];
    TERRAIN_DIFFRACTION_LOSS_DB: (number)[];
    OBSTRUCTION_LOSS_DB: (number)[];
    POLARIZATION_LOSS_DB: (number)[];
    POINTING_LOSS_DB: (number)[];
    IMPLEMENTATION_LOSS_DB: (number)[];
    TOTAL_PATH_LOSS_DB: (number)[];
    RECEIVED_POWER_DBW: (number)[];
    SYSTEM_NOISE_TEMPERATURE_K: (number)[];
    GAIN_TO_NOISE_TEMPERATURE_DB_PER_K: (number)[];
    CARRIER_TO_NOISE_DENSITY_DBHZ: (number)[];
    CARRIER_TO_NOISE_DB: (number)[];
    ENERGY_PER_BIT_TO_NOISE_DENSITY_DB: (number)[];
    BIT_ERROR_RATE: (number)[];
    LINK_MARGIN_DB: (number)[];
    CHANNEL_CAPACITY_BPS: (number)[];
    INTERFERENCE_POWER_DBW: (number)[];
    CARRIER_TO_NOISE_PLUS_INTERFERENCE_DB: (number)[];
    SIGNAL_TO_INTERFERENCE_PLUS_NOISE_DB: (number)[];
    INTERFERENCE_CONTRIBUTIONS: (RFLInterferenceContributionT)[];
    OBSTRUCTIONS: (RFLObstructionT)[];
    LIMITING_CONSTRAINTS: (rflConstraint)[];
    LIMITING_CONSTRAINT_NOTE: string | Uint8Array | null;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    SELECTED_MODCOD_INDEX: (number)[];
    SELECTED_MODCOD_VALID: (boolean)[];
    SPECTRAL_EFFICIENCY_BPS_HZ: (number)[];
    ACHIEVED_DATA_RATE_BPS: (number)[];
    ACM_MARGIN_DB: (number)[];
    ENERGY_PER_SYMBOL_TO_NOISE_DENSITY_DB: (number)[];
    BLOCK_ERROR_RATE: (number)[];
    constructor(RFL_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, LINKS?: (RFLLinkT)[], SAMPLE_COUNT?: number, SAMPLE_LINK_INDEXES?: (number)[], SAMPLE_EPOCHS?: (number)[], TIME_SYSTEM?: timingStandard, ACCESS_STATES?: (rflAccessState)[], RANGE_M?: (number)[], RANGE_RATE_M_S?: (number)[], AZIMUTH_DEG?: (number)[], ELEVATION_DEG?: (number)[], TRANSMIT_AZIMUTH_DEG?: (number)[], TRANSMIT_ELEVATION_DEG?: (number)[], DOPPLER_SHIFT_HZ?: (number)[], DOPPLER_RATE_HZ_S?: (number)[], EIRP_DBW?: (number)[], TRANSMIT_ANTENNA_GAIN_DBI?: (number)[], RECEIVE_ANTENNA_GAIN_DBI?: (number)[], FREE_SPACE_PATH_LOSS_DB?: (number)[], GASEOUS_ABSORPTION_LOSS_DB?: (number)[], RAIN_LOSS_DB?: (number)[], CLOUD_FOG_LOSS_DB?: (number)[], SCINTILLATION_LOSS_DB?: (number)[], TERRAIN_DIFFRACTION_LOSS_DB?: (number)[], OBSTRUCTION_LOSS_DB?: (number)[], POLARIZATION_LOSS_DB?: (number)[], POINTING_LOSS_DB?: (number)[], IMPLEMENTATION_LOSS_DB?: (number)[], TOTAL_PATH_LOSS_DB?: (number)[], RECEIVED_POWER_DBW?: (number)[], SYSTEM_NOISE_TEMPERATURE_K?: (number)[], GAIN_TO_NOISE_TEMPERATURE_DB_PER_K?: (number)[], CARRIER_TO_NOISE_DENSITY_DBHZ?: (number)[], CARRIER_TO_NOISE_DB?: (number)[], ENERGY_PER_BIT_TO_NOISE_DENSITY_DB?: (number)[], BIT_ERROR_RATE?: (number)[], LINK_MARGIN_DB?: (number)[], CHANNEL_CAPACITY_BPS?: (number)[], INTERFERENCE_POWER_DBW?: (number)[], CARRIER_TO_NOISE_PLUS_INTERFERENCE_DB?: (number)[], SIGNAL_TO_INTERFERENCE_PLUS_NOISE_DB?: (number)[], INTERFERENCE_CONTRIBUTIONS?: (RFLInterferenceContributionT)[], OBSTRUCTIONS?: (RFLObstructionT)[], LIMITING_CONSTRAINTS?: (rflConstraint)[], LIMITING_CONSTRAINT_NOTE?: string | Uint8Array | null, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[], SELECTED_MODCOD_INDEX?: (number)[], SELECTED_MODCOD_VALID?: (boolean)[], SPECTRAL_EFFICIENCY_BPS_HZ?: (number)[], ACHIEVED_DATA_RATE_BPS?: (number)[], ACM_MARGIN_DB?: (number)[], ENERGY_PER_SYMBOL_TO_NOISE_DENSITY_DB?: (number)[], BLOCK_ERROR_RATE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFL.d.ts.map