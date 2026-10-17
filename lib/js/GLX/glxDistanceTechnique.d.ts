/**
 * Galaxy structural catalog record, including redshift-survey targets.
 * CSO describes detections, localization and alerts; CSO_ID links that record.
 * Positions use ICRS degrees (IVOA STC 1.33); no distance is inferred from z.
 * Source conventions: NED https://ned.ipac.caltech.edu/ and HyperLEDA
 * http://leda.univ-lyon1.fr/leda/param/ (D25, axis ratio, position angle, T).
 * Unknown floating quantities are NaN, never a measured zero.
 */
export declare enum glxDistanceTechnique {
    UNSPECIFIED = 0,
    TRGB = 1,
    CEPHEID = 2,
    SBF = 3,
    TULLY_FISHER = 4,
    FUNDAMENTAL_PLANE = 5,
    SN_IA = 6,
    MEMBERSHIP = 7,
    HUBBLE_FLOW = 8,
    OTHER = 9
}
//# sourceMappingURL=glxDistanceTechnique.d.ts.map