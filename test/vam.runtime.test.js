import { strict as assert } from 'node:assert';
import { readFB, standards, writeFB } from '../index.js';

describe('VAM runtime', () => {
  it('round-trips a reviewed IPFS GLB variant', () => {
    const {
      VAMMetricsT,
      VAMQualityDimensionT,
      VAMQuaternionT,
      VAMReviewT,
      VAMScale3T,
      VAMSourceT,
      VAMT,
      VAMTransformT,
      VAMValidationT,
      VAMVariantT,
      VAMVector3T,
      visualAssetDecisionKind,
      visualAssetLicenseClass,
      visualAssetPermissionDecision,
      visualAssetReviewState,
      visualAssetUpAxis,
      visualAssetVariantKind
    } = standards.VAM;

    const cid = 'bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku';
    const byteSha256 = '3'.repeat(64);

    const source = new VAMSourceT();
    Object.assign(source, {
      SOURCE_RECORD_ID: 'nasa/cassini',
      SOURCE_NAME: 'NASA Cassini',
      SOURCE_URL: 'https://science.nasa.gov/mission/cassini/',
      OBSERVED_AT: '2026-01-10T12:00:00.000Z',
      LICENSE_CLASS: visualAssetLicenseClass.USABLE_NOW,
      LICENSE_NAME: 'NASA Media Usage Guidelines',
      ATTRIBUTION: 'NASA/JPL-Caltech',
      REDISTRIBUTION_PERMISSION: visualAssetPermissionDecision.ALLOWED,
      DERIVATIVE_PERMISSION: visualAssetPermissionDecision.ALLOWED,
      SOURCE_METADATA_SHA256: '1'.repeat(64),
      NOTES: 'Cassini spacecraft source model'
    });

    const transform = new VAMTransformT();
    Object.assign(transform, {
      TRANSLATION: new VAMVector3T(0, 0, 0),
      ROTATION: new VAMQuaternionT(0, 0, 0, 1),
      SCALE: new VAMScale3T(1, 1, 1),
      UP_AXIS: visualAssetUpAxis.Y_UP,
      SOURCE_UNITS: 'meter',
      METERS_PER_SOURCE_UNIT: 1,
      ORIGIN_NOTE: 'Origin centered on the spacecraft body'
    });

    const metrics = new VAMMetricsT();
    Object.assign(metrics, {
      TRIANGLE_COUNT: 11551n,
      VERTEX_COUNT: 6200n,
      PRIMITIVE_COUNT: 3,
      DRAW_CALL_COUNT: 3,
      MATERIAL_COUNT: 3,
      TEXTURE_COUNT: 3,
      TEXTURE_BYTES: 516049n,
      ANIMATION_COUNT: 0,
      BOUNDING_BOX_MIN: new VAMVector3T(-1.2, -0.8, -2.1),
      BOUNDING_BOX_MAX: new VAMVector3T(1.2, 0.8, 2.1),
      DIMENSIONS_METERS: new VAMVector3T(2.4, 1.6, 4.2)
    });

    const validation = new VAMValidationT();
    Object.assign(validation, {
      STATUS: 'passed',
      VALIDATOR_NAME: 'gltf-validator',
      VALIDATOR_VERSION: '2.0.0',
      VALIDATED_AT: '2026-01-11T09:30:00.000Z',
      ERRORS: [],
      WARNINGS: []
    });

    const quality = new VAMQualityDimensionT();
    Object.assign(quality, {
      NAME: 'runtime_cost',
      SCORE: 0.92,
      BASIS: 'Reviewed for real-time rendering'
    });

    const variant = new VAMVariantT();
    Object.assign(variant, {
      ID: 'cassini-source-glb',
      VARIANT_KIND: visualAssetVariantKind.SOURCE,
      FILE_NAME: 'cassini.glb',
      MEDIA_TYPE: 'model/gltf-binary',
      BYTE_LENGTH: 1048576n,
      BYTE_SHA256: byteSha256,
      CID: cid,
      MULTIFORMAT_ADDRESS: `/ipfs/${cid}`,
      GLTF_VERSION: '2.0',
      SOURCE: source,
      TRANSFORM: transform,
      METRICS: metrics,
      VALIDATION: validation,
      QUALITY: [quality],
      REVIEW_STATE: visualAssetReviewState.APPROVED
    });

    const review = new VAMReviewT();
    Object.assign(review, {
      REVIEWER_ID: 'reviewer-alice',
      CAPABILITY_ID: 'cap-001',
      DECISION: visualAssetDecisionKind.APPROVE,
      CANDIDATE_ID: variant.ID,
      CANDIDATE_CID: cid,
      CANDIDATE_SHA256: byteSha256,
      DECIDED_AT: '2026-01-12T14:45:00.000Z',
      REASONS: ['License and runtime checks passed'],
      ENVELOPE_SHA256: '4'.repeat(64),
      SIGNATURE: [1, 2, 3, 4],
      SIGNATURE_TYPE: 'Ed25519'
    });

    const manifest = new VAMT();
    Object.assign(manifest, {
      ID: 'vam-cassini-001',
      VERSION: '1.0.0',
      ENTITY_ID: 'nasa/cassini',
      ENTITY_KIND: 'spacecraft',
      CANONICAL_VARIANT_ID: variant.ID,
      VARIANTS: [variant],
      REVIEW: review,
      REVIEW_STATE: visualAssetReviewState.APPROVED,
      CREATED_AT: '2026-01-10T12:00:00.000Z',
      UPDATED_AT: '2026-01-12T14:45:00.000Z'
    });

    const [decoded] = readFB(writeFB(manifest));

    assert.equal(decoded.ID, manifest.ID);
    assert.equal(decoded.VERSION, manifest.VERSION);
    assert.equal(decoded.ENTITY_ID, manifest.ENTITY_ID);
    assert.equal(decoded.CANONICAL_VARIANT_ID, variant.ID);
    assert.equal(decoded.VARIANTS.length, 1);
    assert.equal(decoded.VARIANTS[0].CID, cid);
    assert.equal(decoded.VARIANTS[0].BYTE_SHA256, byteSha256);
    assert.equal(decoded.VARIANTS[0].METRICS.TRIANGLE_COUNT, 11551n);
    assert.equal(decoded.VARIANTS[0].TRANSFORM.SCALE.X, 1);
    assert.equal(decoded.VARIANTS[0].TRANSFORM.SCALE.Y, 1);
    assert.equal(decoded.VARIANTS[0].TRANSFORM.SCALE.Z, 1);
    assert.equal(
      decoded.VARIANTS[0].SOURCE.REDISTRIBUTION_PERMISSION,
      visualAssetPermissionDecision.ALLOWED
    );
    assert.equal(
      decoded.VARIANTS[0].SOURCE.DERIVATIVE_PERMISSION,
      visualAssetPermissionDecision.ALLOWED
    );
    assert.equal(decoded.REVIEW.REVIEWER_ID, 'reviewer-alice');
    assert.equal(decoded.REVIEW.DECISION, visualAssetDecisionKind.APPROVE);
  });
});
