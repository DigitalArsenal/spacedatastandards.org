import { type Record as ProductRecord, type RecordEpoch } from './record.js';
import { type Result } from './tokens.js';
/** Geodetic coordinates of one epoch: deg, deg, km. */
export interface TrackingGeodetic {
    readonly latitude: number;
    readonly longitude: number;
    readonly height: number;
}
/** Mean elements of one epoch: rev/day, unitless, deg. */
export interface TrackingMeanElements {
    readonly meanMotion: number;
    readonly eccentricity: number;
    readonly inclination: number;
    readonly raan: number;
    readonly argOfPericenter: number;
    readonly meanAnomaly: number;
}
export type TrackingEpoch = Omit<RecordEpoch, 'geodetic' | 'meanElements'> & {
    readonly geodetic: TrackingGeodetic | null;
    readonly meanElements: TrackingMeanElements | null;
};
/** A Record as P1 reads it: every Record is one; the per-epoch views are read where present. */
export type TrackingRecord = Omit<ProductRecord, 'epochs'> & {
    readonly epochs: readonly TrackingEpoch[];
};
/** The two P1 header rows: state labels, then the geodetic and mean-element labels. */
export declare function trackingHeaderRows(): Result<string[]>;
/** P1 of a Record; refused, with no partial output, when any value it prints is absent. */
export declare function writeP1(record: TrackingRecord): Result<string>;
//# sourceMappingURL=ephtrk.d.ts.map