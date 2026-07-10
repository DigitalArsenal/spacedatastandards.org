import { strict as assert } from 'node:assert';
import { readFB, standards, writeFB } from '../index.js';

describe('VAM runtime', () => {
  it('round-trips a reviewed IPFS GLB variant', () => {
    const {
      VAMAnnotationT,
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
      visualAssetReviewerRole,
      visualAssetReviewState,
      visualAssetUpAxis,
      visualAssetVariantKind
    } = standards.VAM;

    const cid = 'bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku';
    const byteSha256 = '3'.repeat(64);
    const sourceMetadataSha256 = '1'.repeat(64);
    const envelopeSha256 = '4'.repeat(64);
    const triangleCount = 9007199254740993n;
    const vertexCount = 9007199254740995n;
    const textureBytes = 9007199254740997n;
    const byteLength = 9007199254740999n;

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
      SOURCE_METADATA_SHA256: sourceMetadataSha256,
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
      TRIANGLE_COUNT: triangleCount,
      VERTEX_COUNT: vertexCount,
      PRIMITIVE_COUNT: 3,
      DRAW_CALL_COUNT: 3,
      MATERIAL_COUNT: 3,
      TEXTURE_COUNT: 3,
      TEXTURE_BYTES: textureBytes,
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
      ERRORS: ['mesh/primitive/0: invalid tangent'],
      WARNINGS: ['texture/0: oversized for browser profile']
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
      BYTE_LENGTH: byteLength,
      BYTE_SHA256: byteSha256,
      CID: cid,
      MULTIFORMAT_ADDRESS: `/ipfs/${cid}`,
      GLTF_VERSION: '2.0',
      SOURCE: source,
      TRANSFORM: transform,
      METRICS: metrics,
      VALIDATION: validation,
      QUALITY: [quality],
      REVIEW_STATE: visualAssetReviewState.APPROVED,
      RANK: 0
    });

    const annotation = new VAMAnnotationT();
    Object.assign(annotation, {
      ID: 'annotation-001',
      KIND: 'review-note',
      MESSAGE: 'Canonical orientation confirmed',
      POSITION: new VAMVector3T(0, 0, 0)
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
      COMMENT: 'Approved for canonical visual asset publication',
      ENVELOPE_SHA256: envelopeSha256,
      SIGNATURE: [1, 2, 3, 4],
      SIGNATURE_TYPE: 'Ed25519',
      REVIEWER_ROLE: visualAssetReviewerRole.REVIEWER,
      REPOSITORY: 'DigitalArsenal/asset-models',
      ISSUE_NUMBER: '42',
      ENTITY_ID: 'nasa/cassini',
      VAM_ID: 'vam-cassini-001',
      NONCE: '018f47a2-6b8d-7c91-a234-567890abcdef',
      REVIEWED_TRANSFORM: transform,
      CANONICAL_VARIANT_ID: variant.ID,
      ALTERNATE_VARIANT_IDS: [],
      ANNOTATIONS: [annotation]
    });

    const manifest = new VAMT();
    Object.assign(manifest, {
      ID: 'vam-cassini-001',
      VERSION: '1.0.0',
      ENTITY_ID: 'nasa/cassini',
      ENTITY_KIND: 'spacecraft',
      CANONICAL_VARIANT_ID: variant.ID,
      ALTERNATE_VARIANT_IDS: [],
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
    assert.equal(decoded.ENTITY_KIND, manifest.ENTITY_KIND);
    assert.equal(decoded.CANONICAL_VARIANT_ID, variant.ID);
    assert.deepEqual(decoded.ALTERNATE_VARIANT_IDS, []);
    assert.equal(decoded.REVIEW_STATE, visualAssetReviewState.APPROVED);
    assert.equal(decoded.CREATED_AT, manifest.CREATED_AT);
    assert.equal(decoded.UPDATED_AT, manifest.UPDATED_AT);
    assert.equal(decoded.METADATA_REVIEW, null);
    assert.equal(decoded.VARIANTS.length, 1);

    const decodedVariant = decoded.VARIANTS[0];
    assert.equal(decodedVariant.ID, variant.ID);
    assert.equal(decodedVariant.VARIANT_KIND, visualAssetVariantKind.SOURCE);
    assert.equal(decodedVariant.FILE_NAME, variant.FILE_NAME);
    assert.equal(decodedVariant.MEDIA_TYPE, 'model/gltf-binary');
    assert.equal(decodedVariant.BYTE_LENGTH, byteLength);
    assert.equal(decodedVariant.BYTE_SHA256, byteSha256);
    assert.equal(decodedVariant.CID, cid);
    assert.equal(decodedVariant.MULTIFORMAT_ADDRESS, `/ipfs/${cid}`);
    assert.equal(decodedVariant.GLTF_VERSION, '2.0');
    assert.equal(decodedVariant.REVIEW_STATE, visualAssetReviewState.APPROVED);
    assert.equal(decodedVariant.RANK, 0);

    const decodedSource = decodedVariant.SOURCE;
    assert.equal(decodedSource.SOURCE_RECORD_ID, 'nasa/cassini');
    assert.equal(decodedSource.SOURCE_NAME, 'NASA Cassini');
    assert.equal(decodedSource.SOURCE_URL, source.SOURCE_URL);
    assert.equal(decodedSource.OBSERVED_AT, source.OBSERVED_AT);
    assert.equal(decodedSource.LICENSE_CLASS, visualAssetLicenseClass.USABLE_NOW);
    assert.equal(decodedSource.LICENSE_NAME, source.LICENSE_NAME);
    assert.equal(decodedSource.ATTRIBUTION, 'NASA/JPL-Caltech');
    assert.equal(
      decodedSource.REDISTRIBUTION_PERMISSION,
      visualAssetPermissionDecision.ALLOWED
    );
    assert.equal(
      decodedSource.DERIVATIVE_PERMISSION,
      visualAssetPermissionDecision.ALLOWED
    );
    assert.equal(decodedSource.SOURCE_METADATA_SHA256, sourceMetadataSha256);
    assert.equal(decodedSource.NOTES, source.NOTES);

    const decodedTransform = decodedVariant.TRANSFORM;
    assert.deepEqual(
      [decodedTransform.TRANSLATION.X, decodedTransform.TRANSLATION.Y, decodedTransform.TRANSLATION.Z],
      [0, 0, 0]
    );
    assert.deepEqual(
      [
        decodedTransform.ROTATION.X,
        decodedTransform.ROTATION.Y,
        decodedTransform.ROTATION.Z,
        decodedTransform.ROTATION.W
      ],
      [0, 0, 0, 1]
    );
    assert.deepEqual(
      [decodedTransform.SCALE.X, decodedTransform.SCALE.Y, decodedTransform.SCALE.Z],
      [1, 1, 1]
    );
    assert.equal(decodedTransform.UP_AXIS, visualAssetUpAxis.Y_UP);
    assert.equal(decodedTransform.SOURCE_UNITS, 'meter');
    assert.equal(decodedTransform.METERS_PER_SOURCE_UNIT, 1);
    assert.equal(decodedTransform.ORIGIN_NOTE, transform.ORIGIN_NOTE);

    const decodedMetrics = decodedVariant.METRICS;
    assert.equal(decodedMetrics.TRIANGLE_COUNT, triangleCount);
    assert.equal(decodedMetrics.VERTEX_COUNT, vertexCount);
    assert.equal(decodedMetrics.PRIMITIVE_COUNT, 3);
    assert.equal(decodedMetrics.DRAW_CALL_COUNT, 3);
    assert.equal(decodedMetrics.MATERIAL_COUNT, 3);
    assert.equal(decodedMetrics.TEXTURE_COUNT, 3);
    assert.equal(decodedMetrics.TEXTURE_BYTES, textureBytes);
    assert.equal(decodedMetrics.ANIMATION_COUNT, 0);
    assert.deepEqual(
      [decodedMetrics.BOUNDING_BOX_MIN.X, decodedMetrics.BOUNDING_BOX_MIN.Y, decodedMetrics.BOUNDING_BOX_MIN.Z],
      [-1.2, -0.8, -2.1]
    );
    assert.deepEqual(
      [decodedMetrics.BOUNDING_BOX_MAX.X, decodedMetrics.BOUNDING_BOX_MAX.Y, decodedMetrics.BOUNDING_BOX_MAX.Z],
      [1.2, 0.8, 2.1]
    );
    assert.deepEqual(
      [decodedMetrics.DIMENSIONS_METERS.X, decodedMetrics.DIMENSIONS_METERS.Y, decodedMetrics.DIMENSIONS_METERS.Z],
      [2.4, 1.6, 4.2]
    );

    const decodedValidation = decodedVariant.VALIDATION;
    assert.equal(decodedValidation.STATUS, 'passed');
    assert.equal(decodedValidation.VALIDATOR_NAME, 'gltf-validator');
    assert.equal(decodedValidation.VALIDATOR_VERSION, '2.0.0');
    assert.equal(decodedValidation.VALIDATED_AT, validation.VALIDATED_AT);
    assert.deepEqual(decodedValidation.ERRORS, ['mesh/primitive/0: invalid tangent']);
    assert.deepEqual(decodedValidation.WARNINGS, [
      'texture/0: oversized for browser profile'
    ]);

    assert.equal(decodedVariant.QUALITY.length, 1);
    assert.equal(decodedVariant.QUALITY[0].NAME, 'runtime_cost');
    assert.equal(decodedVariant.QUALITY[0].SCORE, 0.92);
    assert.equal(decodedVariant.QUALITY[0].BASIS, quality.BASIS);

    const decodedReview = decoded.REVIEW;
    assert.equal(decodedReview.REVIEWER_ID, 'reviewer-alice');
    assert.equal(decodedReview.CAPABILITY_ID, 'cap-001');
    assert.equal(decodedReview.DECISION, visualAssetDecisionKind.APPROVE);
    assert.equal(decodedReview.CANDIDATE_ID, variant.ID);
    assert.equal(decodedReview.CANDIDATE_CID, cid);
    assert.equal(decodedReview.CANDIDATE_SHA256, byteSha256);
    assert.equal(decodedReview.DECIDED_AT, review.DECIDED_AT);
    assert.deepEqual(decodedReview.REASONS, ['License and runtime checks passed']);
    assert.equal(decodedReview.COMMENT, review.COMMENT);
    assert.equal(decodedReview.ENVELOPE_SHA256, envelopeSha256);
    assert.deepEqual(decodedReview.SIGNATURE, [1, 2, 3, 4]);
    assert.equal(decodedReview.SIGNATURE_TYPE, 'Ed25519');
    assert.equal(decodedReview.REVIEWER_ROLE, visualAssetReviewerRole.REVIEWER);
    assert.equal(decodedReview.REPOSITORY, 'DigitalArsenal/asset-models');
    assert.equal(decodedReview.ISSUE_NUMBER, '42');
    assert.equal(decodedReview.ENTITY_ID, manifest.ENTITY_ID);
    assert.equal(decodedReview.VAM_ID, manifest.ID);
    assert.equal(decodedReview.NONCE, '018f47a2-6b8d-7c91-a234-567890abcdef');
    assert.deepEqual(
      [
        decodedReview.REVIEWED_TRANSFORM.SCALE.X,
        decodedReview.REVIEWED_TRANSFORM.SCALE.Y,
        decodedReview.REVIEWED_TRANSFORM.SCALE.Z
      ],
      [1, 1, 1]
    );
    assert.equal(decodedReview.CANONICAL_VARIANT_ID, variant.ID);
    assert.deepEqual(decodedReview.ALTERNATE_VARIANT_IDS, []);
    assert.equal(decodedReview.ANNOTATIONS.length, 1);
    assert.equal(decodedReview.ANNOTATIONS[0].ID, 'annotation-001');
    assert.equal(decodedReview.ANNOTATIONS[0].KIND, 'review-note');
    assert.equal(decodedReview.ANNOTATIONS[0].MESSAGE, 'Canonical orientation confirmed');
    assert.deepEqual(
      [
        decodedReview.ANNOTATIONS[0].POSITION.X,
        decodedReview.ANNOTATIONS[0].POSITION.Y,
        decodedReview.ANNOTATIONS[0].POSITION.Z
      ],
      [0, 0, 0]
    );
  });
});
