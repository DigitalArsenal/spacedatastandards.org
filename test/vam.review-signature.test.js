import { strict as assert } from 'node:assert';
import { createHash, generateKeyPairSync, sign, verify } from 'node:crypto';
import { readFB, standards, writeFB } from '../index.js';

const {
  VAMAnnotationT,
  VAMMetadataOnlyReviewT,
  VAMQuaternionT,
  VAMReviewT,
  VAMScale3T,
  VAMSourceT,
  VAMT,
  VAMTransformT,
  VAMVariantT,
  VAMVector3T,
  visualAssetDecisionKind,
  visualAssetLicenseClass,
  visualAssetPermissionDecision,
  visualAssetReviewerRole,
  visualAssetReviewState,
  visualAssetUpAxis
} = standards.VAM;

const fixture = {
  repository: 'DigitalArsenal/asset-models',
  issueNumber: '42',
  entityId: 'nasa/cassini',
  vamId: 'vam-cassini-001',
  variantId: 'cassini-source-glb',
  cid: 'bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku',
  sha256: '3'.repeat(64),
  alternateCid: 'bafkreialternatevariantcid',
  alternateSha256: '5'.repeat(64),
  secondAlternateCid: 'bafkreisecondalternatecid',
  secondAlternateSha256: '6'.repeat(64),
  nonce: '018f47a2-6b8d-7c91-a234-567890abcdef'
};

// This is sufficient for the schema projections here: null, booleans, finite
// numbers, strings, arrays, and string-keyed objects with no undefined values.
// Array.sort() supplies the required JavaScript UTF-16 code-unit key ordering.
const canonicalizeJcs = (value) => {
  if (value === null || typeof value === 'boolean' || typeof value === 'string') {
    return JSON.stringify(value);
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new TypeError('JCS numbers must be finite');
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => {
      if (item === undefined) throw new TypeError('JCS does not support undefined');
      return canonicalizeJcs(item);
    }).join(',')}]`;
  }
  if (typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => {
      if (value[key] === undefined) throw new TypeError('JCS does not support undefined');
      return `${JSON.stringify(key)}:${canonicalizeJcs(value[key])}`;
    }).join(',')}}`;
  }
  throw new TypeError(`JCS does not support ${typeof value}`);
};

const sha256 = (value) => createHash('sha256').update(value).digest();
const digestProjection = (projection) => sha256(Buffer.from(canonicalizeJcs(projection)));
const hexDigestProjection = (projection) => digestProjection(projection).toString('hex');

const vectorProjection = (vector) => ({ X: vector.X, Y: vector.Y, Z: vector.Z });
const quaternionProjection = (quaternion) => ({
  W: quaternion.W,
  X: quaternion.X,
  Y: quaternion.Y,
  Z: quaternion.Z
});

const transformProjection = (transform) => {
  const projection = {
    UP_AXIS: transform.UP_AXIS,
    METERS_PER_SOURCE_UNIT: transform.METERS_PER_SOURCE_UNIT
  };
  if (transform.TRANSLATION !== null) {
    projection.TRANSLATION = vectorProjection(transform.TRANSLATION);
  }
  if (transform.ROTATION !== null) projection.ROTATION = quaternionProjection(transform.ROTATION);
  if (transform.SCALE !== null) projection.SCALE = vectorProjection(transform.SCALE);
  if (transform.SOURCE_UNITS !== null) projection.SOURCE_UNITS = transform.SOURCE_UNITS;
  if (transform.ORIGIN_NOTE !== null) projection.ORIGIN_NOTE = transform.ORIGIN_NOTE;
  return projection;
};

const annotationProjection = (annotation) => {
  const projection = {
    ID: annotation.ID,
    KIND: annotation.KIND,
    MESSAGE: annotation.MESSAGE
  };
  if (annotation.POSITION !== null) projection.POSITION = vectorProjection(annotation.POSITION);
  return projection;
};

const sourceMetadataProjection = (source) => {
  const projection = {
    SOURCE_RECORD_ID: source.SOURCE_RECORD_ID,
    SOURCE_URL: source.SOURCE_URL,
    LICENSE_CLASS: source.LICENSE_CLASS,
    REDISTRIBUTION_PERMISSION: source.REDISTRIBUTION_PERMISSION,
    DERIVATIVE_PERMISSION: source.DERIVATIVE_PERMISSION
  };
  for (const field of [
    'SOURCE_NAME',
    'OBSERVED_AT',
    'LICENSE_NAME',
    'ATTRIBUTION',
    'SOURCE_METADATA_SHA256',
    'NOTES'
  ]) {
    if (source[field] !== null) projection[field] = source[field];
  }
  return projection;
};

const binaryReviewProjection = (review) => {
  const projection = {
    REVIEWER_ID: review.REVIEWER_ID,
    DECISION: review.DECISION,
    CANDIDATE_ID: review.CANDIDATE_ID,
    CANDIDATE_SHA256: review.CANDIDATE_SHA256,
    DECIDED_AT: review.DECIDED_AT,
    REASONS: review.REASONS,
    SIGNATURE_TYPE: review.SIGNATURE_TYPE,
    REVIEWER_ROLE: review.REVIEWER_ROLE,
    REPOSITORY: review.REPOSITORY,
    ISSUE_NUMBER: review.ISSUE_NUMBER,
    ENTITY_ID: review.ENTITY_ID,
    VAM_ID: review.VAM_ID,
    NONCE: review.NONCE,
    ALTERNATE_VARIANT_IDS: review.ALTERNATE_VARIANT_IDS,
    ANNOTATIONS: review.ANNOTATIONS.map(annotationProjection)
  };
  for (const field of [
    'CAPABILITY_ID',
    'CANDIDATE_CID',
    'COMMENT',
    'PREVIOUS_DECISION_SHA256',
    'CANONICAL_VARIANT_ID'
  ]) {
    if (review[field] !== null) projection[field] = review[field];
  }
  if (review.REVIEWED_TRANSFORM !== null) {
    projection.REVIEWED_TRANSFORM = transformProjection(review.REVIEWED_TRANSFORM);
  }
  return projection;
};

const metadataReviewProjection = (review) => {
  const projection = {
    REVIEWER_ID: review.REVIEWER_ID,
    CAPABILITY_ID: review.CAPABILITY_ID,
    REVIEWER_ROLE: review.REVIEWER_ROLE,
    REPOSITORY: review.REPOSITORY,
    ISSUE_NUMBER: review.ISSUE_NUMBER,
    ENTITY_ID: review.ENTITY_ID,
    VAM_ID: review.VAM_ID,
    NONCE: review.NONCE,
    DECISION: review.DECISION,
    CANDIDATE_ID: review.CANDIDATE_ID,
    CANDIDATE_METADATA_SHA256: review.CANDIDATE_METADATA_SHA256,
    DECIDED_AT: review.DECIDED_AT,
    REASONS: review.REASONS,
    ANNOTATIONS: review.ANNOTATIONS.map(annotationProjection),
    SIGNATURE_TYPE: review.SIGNATURE_TYPE
  };
  for (const field of ['COMMENT', 'PREVIOUS_DECISION_SHA256']) {
    if (review[field] !== null) projection[field] = review[field];
  }
  return projection;
};

const signReview = (review, projectionBuilder, privateKey) => {
  const digest = digestProjection(projectionBuilder(review));
  review.ENVELOPE_SHA256 = digest.toString('hex');
  review.SIGNATURE = Array.from(sign(null, digest, privateKey));
};

const verifyReviewSignature = (review, projectionBuilder, publicKey) => {
  const digest = digestProjection(projectionBuilder(review));
  return review.ENVELOPE_SHA256 === digest.toString('hex')
    && verify(null, digest, publicKey, Buffer.from(review.SIGNATURE));
};

const makeTransform = () => new VAMTransformT(
  new VAMVector3T(0, 0, 0),
  new VAMQuaternionT(0, 0, 0, 1),
  new VAMScale3T(1, 1, 1),
  visualAssetUpAxis.Y_UP,
  'meter',
  1,
  'Origin centered on the spacecraft body'
);

const makeAnnotation = () => new VAMAnnotationT(
  'annotation-001',
  'review-note',
  'Canonical orientation confirmed',
  new VAMVector3T(0, 0, 0)
);

const makeBinaryReview = (privateKey, role = visualAssetReviewerRole.REVIEWER) => {
  const review = new VAMReviewT();
  Object.assign(review, {
    REVIEWER_ID: 'reviewer-alice',
    CAPABILITY_ID: 'cap-001',
    DECISION: visualAssetDecisionKind.APPROVE,
    CANDIDATE_ID: fixture.variantId,
    CANDIDATE_CID: fixture.cid,
    CANDIDATE_SHA256: fixture.sha256,
    DECIDED_AT: '2026-01-12T14:45:00.000Z',
    REASONS: ['License and runtime checks passed'],
    COMMENT: 'Approved for canonical visual asset publication',
    SIGNATURE_TYPE: 'Ed25519',
    REVIEWER_ROLE: role,
    REPOSITORY: fixture.repository,
    ISSUE_NUMBER: fixture.issueNumber,
    ENTITY_ID: fixture.entityId,
    VAM_ID: fixture.vamId,
    NONCE: fixture.nonce,
    REVIEWED_TRANSFORM: makeTransform(),
    CANONICAL_VARIANT_ID: fixture.variantId,
    ALTERNATE_VARIANT_IDS: ['cassini-low-poly', 'cassini-wireframe'],
    ANNOTATIONS: [makeAnnotation()]
  });
  signReview(review, binaryReviewProjection, privateKey);
  return review;
};

const makeBinaryManifest = (review) => new VAMT(
  fixture.vamId,
  '1.0.0',
  fixture.entityId,
  'spacecraft',
  fixture.variantId,
  ['cassini-low-poly', 'cassini-wireframe'],
  [
    Object.assign(new VAMVariantT(), {
      ID: fixture.variantId,
      RANK: 0,
      CID: fixture.cid,
      BYTE_SHA256: fixture.sha256,
      TRANSFORM: makeTransform()
    }),
    Object.assign(new VAMVariantT(), {
      ID: 'cassini-low-poly',
      RANK: 1,
      CID: fixture.alternateCid,
      BYTE_SHA256: fixture.alternateSha256,
      TRANSFORM: makeTransform()
    }),
    Object.assign(new VAMVariantT(), {
      ID: 'cassini-wireframe',
      RANK: 2,
      CID: fixture.secondAlternateCid,
      BYTE_SHA256: fixture.secondAlternateSha256,
      TRANSFORM: makeTransform()
    })
  ],
  review,
  visualAssetReviewState.APPROVED,
  '2026-01-10T12:00:00.000Z',
  '2026-01-12T14:45:00.000Z'
);

const expectedContext = {
  repository: fixture.repository,
  issueNumber: fixture.issueNumber,
  entityId: fixture.entityId,
  vamId: fixture.vamId
};

const decodeBinaryManifest = (privateKey) => readFB(
  writeFB(makeBinaryManifest(makeBinaryReview(privateKey)))
)[0];

const normalizedTransform = (transform) => ({
  TRANSLATION: vectorProjection(transform?.TRANSLATION ?? new VAMVector3T(0, 0, 0)),
  ROTATION: quaternionProjection(transform?.ROTATION ?? new VAMQuaternionT(0, 0, 0, 1)),
  SCALE: vectorProjection(transform?.SCALE ?? new VAMScale3T(1, 1, 1)),
  UP_AXIS: transform?.UP_AXIS ?? visualAssetUpAxis.Y_UP,
  SOURCE_UNITS: transform?.SOURCE_UNITS ?? null,
  METERS_PER_SOURCE_UNIT: transform?.METERS_PER_SOURCE_UNIT ?? 1,
  ORIGIN_NOTE: transform?.ORIGIN_NOTE ?? null
});

const validatesSignedBinaryReview = (manifest, publicKey, context, usedNonces) => {
  const review = manifest.REVIEW;
  if (review === null) return false;
  const authorized = review.REVIEWER_ROLE === visualAssetReviewerRole.REVIEWER
    || review.REVIEWER_ROLE === visualAssetReviewerRole.ADMIN;
  if (!authorized || review.DECISION !== visualAssetDecisionKind.APPROVE) return false;
  const requiredProfileFields = [
    'CAPABILITY_ID',
    'REPOSITORY',
    'ISSUE_NUMBER',
    'ENTITY_ID',
    'VAM_ID',
    'NONCE'
  ];
  if (requiredProfileFields.some((field) => (
    typeof review[field] !== 'string' || review[field].length === 0
  ))) return false;
  if (!/^[1-9][0-9]*$/.test(review.ISSUE_NUMBER)) return false;
  if (!review.CANDIDATE_CID || !review.CANDIDATE_SHA256
    || review.REVIEWED_TRANSFORM === null || !review.CANONICAL_VARIANT_ID) return false;
  if (review.CANONICAL_VARIANT_ID !== review.CANDIDATE_ID) return false;
  if (review.REPOSITORY !== context.repository
    || review.ISSUE_NUMBER !== context.issueNumber
    || review.ENTITY_ID !== context.entityId
    || review.VAM_ID !== context.vamId) return false;
  if (manifest.ID !== review.VAM_ID
    || manifest.ENTITY_ID !== review.ENTITY_ID
    || manifest.CANONICAL_VARIANT_ID !== review.CANONICAL_VARIANT_ID) return false;
  const alternates = review.ALTERNATE_VARIANT_IDS;
  if (!Array.isArray(alternates)
    || !Array.isArray(manifest.ALTERNATE_VARIANT_IDS)
    || alternates.length !== manifest.ALTERNATE_VARIANT_IDS.length
    || alternates.some((id, index) => id !== manifest.ALTERNATE_VARIANT_IDS[index])) {
    return false;
  }
  const alternateIds = new Set();
  let previousRank = -1;
  for (const id of alternates) {
    if (typeof id !== 'string' || id.length === 0
      || id === review.CANONICAL_VARIANT_ID || alternateIds.has(id)) return false;
    alternateIds.add(id);
    const variant = manifest.VARIANTS.find((candidate) => candidate.ID === id);
    if (!variant || variant.RANK <= previousRank) return false;
    previousRank = variant.RANK;
  }
  const selectedVariant = manifest.VARIANTS.find(({ ID }) => ID === review.CANDIDATE_ID);
  if (!selectedVariant
    || selectedVariant.CID !== review.CANDIDATE_CID
    || selectedVariant.BYTE_SHA256 !== review.CANDIDATE_SHA256) return false;
  if (canonicalizeJcs(normalizedTransform(selectedVariant.TRANSFORM))
    !== canonicalizeJcs(normalizedTransform(review.REVIEWED_TRANSFORM))) return false;
  if (!review.NONCE || usedNonces.has(review.NONCE)) return false;
  if (!verifyReviewSignature(review, binaryReviewProjection, publicKey)) return false;
  usedNonces.add(review.NONCE);
  return true;
};

const validatesMetadataReview = (review, source, publicKey, context, usedNonces) => {
  const metadataDigest = hexDigestProjection(sourceMetadataProjection(source));
  const authorized = review.REVIEWER_ROLE === visualAssetReviewerRole.REVIEWER
    || review.REVIEWER_ROLE === visualAssetReviewerRole.ADMIN;
  if (!authorized) return false;
  if (review.DECISION !== visualAssetDecisionKind.APPROVE_METADATA_ONLY) return false;
  if (review.CANDIDATE_METADATA_SHA256 !== metadataDigest) return false;
  if (review.REPOSITORY !== context.repository
    || review.ISSUE_NUMBER !== context.issueNumber
    || review.ENTITY_ID !== context.entityId
    || review.VAM_ID !== context.vamId) return false;
  if (!review.NONCE || usedNonces.has(review.NONCE)) return false;
  if (!verifyReviewSignature(review, metadataReviewProjection, publicKey)) return false;
  usedNonces.add(review.NONCE);
  return true;
};

const hasValidRanking = (manifest) => {
  const ranks = manifest.VARIANTS.map((variant) => variant.RANK);
  const sortedUnique = ranks.every((rank, index) => index === 0 || rank > ranks[index - 1]);
  return sortedUnique
    && manifest.VARIANTS.some((variant) => variant.ID === manifest.CANONICAL_VARIANT_ID);
};

describe('VAM signed review profiles', () => {
  it('canonicalizes the supported RFC 8785 JSON subset', () => {
    assert.equal(
      canonicalizeJcs({ z: 'line\n"quote"', a: 333333333.33333329, nested: [true, null] }),
      '{"a":333333333.3333333,"nested":[true,null],"z":"line\\n\\"quote\\""}'
    );
    assert.throws(() => canonicalizeJcs(Number.NaN), /finite/);
    assert.throws(() => canonicalizeJcs({ invalid: undefined }), /undefined/);
  });

  it('round-trips and verifies a real binary review signature', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const [decoded] = readFB(writeFB(makeBinaryManifest(makeBinaryReview(privateKey))));
    const digest = hexDigestProjection(binaryReviewProjection(decoded.REVIEW));

    assert.equal(decoded.REVIEW.ENVELOPE_SHA256, digest);
    assert.equal(verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey), true);
  });

  it('rejects every signed security-relevant binary review mutation', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const signedBuffer = writeFB(makeBinaryManifest(makeBinaryReview(privateKey)));
    const mutations = [
      { key: 'REPOSITORY', mutate: (review) => { review.REPOSITORY = 'attacker/example'; } },
      { key: 'ISSUE_NUMBER', mutate: (review) => { review.ISSUE_NUMBER = '43'; } },
      { key: 'ENTITY_ID', mutate: (review) => { review.ENTITY_ID = 'nasa/voyager'; } },
      { key: 'VAM_ID', mutate: (review) => { review.VAM_ID = 'vam-other'; } },
      { key: 'NONCE', mutate: (review) => {
        review.NONCE = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
      } },
      { key: 'REVIEWED_TRANSFORM', mutate: (review) => {
        review.REVIEWED_TRANSFORM.SCALE.X = 2;
      } },
      { key: 'REVIEWED_TRANSFORM', mutate: (review) => {
        review.REVIEWED_TRANSFORM.ROTATION.W = 0.5;
      } },
      { key: 'CANONICAL_VARIANT_ID', mutate: (review) => {
        review.CANONICAL_VARIANT_ID = 'cassini-low-poly';
      } },
      { key: 'ALTERNATE_VARIANT_IDS', mutate: (review) => {
        review.ALTERNATE_VARIANT_IDS[0] = 'tampered-alternate';
      } },
      { key: 'ANNOTATIONS', mutate: (review) => {
        review.ANNOTATIONS[0].MESSAGE = 'Changed after signing';
      } },
      { key: 'CANDIDATE_SHA256', mutate: (review) => {
        review.CANDIDATE_SHA256 = '9'.repeat(64);
      } }
    ];

    for (const { key, mutate } of mutations) {
      const [decoded] = readFB(signedBuffer);
      const review = decoded.REVIEW;
      const originalProjection = structuredClone(binaryReviewProjection(review));
      assert.equal(Object.hasOwn(originalProjection, key), true, `${key} must be signed`);

      mutate(review);
      const changedProjection = binaryReviewProjection(review);
      assert.notDeepEqual(changedProjection, originalProjection, `${key} projection must change`);
      assert.equal(
        verifyReviewSignature(review, binaryReviewProjection, publicKey),
        false,
        `${key} mutation must invalidate the signature`
      );
    }
  });

  it('rejects an omitted required binary review profile field', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const [decoded] = readFB(writeFB(makeBinaryManifest(makeBinaryReview(privateKey))));
    const review = decoded.REVIEW;
    const originalProjection = binaryReviewProjection(review);
    assert.equal(Object.hasOwn(originalProjection, 'CAPABILITY_ID'), true);

    review.CAPABILITY_ID = null;
    const changedProjection = binaryReviewProjection(review);
    assert.equal(Object.hasOwn(changedProjection, 'CAPABILITY_ID'), false);
    assert.notDeepEqual(changedProjection, originalProjection);
    assert.equal(verifyReviewSignature(review, binaryReviewProjection, publicKey), false);
    assert.equal(
      validatesSignedBinaryReview(decoded, publicKey, expectedContext, new Set()),
      false
    );
  });

  it('requires signed approval state to match the enclosing VAM and selected variant', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const valid = decodeBinaryManifest(privateKey);
    assert.equal(
      validatesSignedBinaryReview(valid, publicKey, expectedContext, new Set()),
      true
    );

    const defaultedIdentity = decodeBinaryManifest(privateKey);
    defaultedIdentity.VARIANTS[0].TRANSFORM.TRANSLATION = null;
    defaultedIdentity.VARIANTS[0].TRANSFORM.ROTATION = null;
    defaultedIdentity.VARIANTS[0].TRANSFORM.SCALE = null;
    assert.equal(validatesSignedBinaryReview(
      defaultedIdentity, publicKey, expectedContext, new Set()
    ), true);

    const missingTransform = decodeBinaryManifest(privateKey);
    missingTransform.REVIEW.REVIEWED_TRANSFORM = null;
    assert.equal(verifyReviewSignature(
      missingTransform.REVIEW, binaryReviewProjection, publicKey
    ), false);
    assert.equal(validatesSignedBinaryReview(
      missingTransform, publicKey, expectedContext, new Set()
    ), false);

    const missingCanonical = decodeBinaryManifest(privateKey);
    missingCanonical.REVIEW.CANONICAL_VARIANT_ID = null;
    assert.equal(verifyReviewSignature(
      missingCanonical.REVIEW, binaryReviewProjection, publicKey
    ), false);
    assert.equal(validatesSignedBinaryReview(
      missingCanonical, publicKey, expectedContext, new Set()
    ), false);

    const enclosingCanonicalMismatch = decodeBinaryManifest(privateKey);
    enclosingCanonicalMismatch.CANONICAL_VARIANT_ID = 'cassini-low-poly';
    assert.equal(verifyReviewSignature(
      enclosingCanonicalMismatch.REVIEW, binaryReviewProjection, publicKey
    ), true);
    assert.equal(validatesSignedBinaryReview(
      enclosingCanonicalMismatch, publicKey, expectedContext, new Set()
    ), false);

    const transformMismatch = decodeBinaryManifest(privateKey);
    transformMismatch.VARIANTS[0].TRANSFORM.SCALE.X = 2;
    assert.equal(validatesSignedBinaryReview(
      transformMismatch, publicKey, expectedContext, new Set()
    ), false);

    const cidMismatch = decodeBinaryManifest(privateKey);
    cidMismatch.VARIANTS[0].CID = 'bafkreibadcid';
    assert.equal(validatesSignedBinaryReview(
      cidMismatch, publicKey, expectedContext, new Set()
    ), false);

    const shaMismatch = decodeBinaryManifest(privateKey);
    shaMismatch.VARIANTS[0].BYTE_SHA256 = '9'.repeat(64);
    assert.equal(validatesSignedBinaryReview(
      shaMismatch, publicKey, expectedContext, new Set()
    ), false);
  });

  it('requires re-signing after an approved transform or canonical selection changes', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const decoded = decodeBinaryManifest(privateKey);
    decoded.VARIANTS[0].TRANSFORM.SCALE.X = 2;
    decoded.REVIEW.REVIEWED_TRANSFORM.SCALE.X = 2;

    assert.equal(verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey), false);
    assert.equal(validatesSignedBinaryReview(
      decoded, publicKey, expectedContext, new Set()
    ), false);

    signReview(decoded.REVIEW, binaryReviewProjection, privateKey);
    assert.equal(verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey), true);
    assert.equal(validatesSignedBinaryReview(
      decoded, publicKey, expectedContext, new Set()
    ), true);

    const canonicalChange = decodeBinaryManifest(privateKey);
    canonicalChange.CANONICAL_VARIANT_ID = 'cassini-low-poly';
    canonicalChange.ALTERNATE_VARIANT_IDS = [fixture.variantId, 'cassini-wireframe'];
    Object.assign(canonicalChange.REVIEW, {
      CANDIDATE_ID: 'cassini-low-poly',
      CANDIDATE_CID: fixture.alternateCid,
      CANDIDATE_SHA256: fixture.alternateSha256,
      CANONICAL_VARIANT_ID: 'cassini-low-poly',
      ALTERNATE_VARIANT_IDS: [fixture.variantId, 'cassini-wireframe']
    });
    assert.equal(verifyReviewSignature(
      canonicalChange.REVIEW, binaryReviewProjection, publicKey
    ), false);
    assert.equal(validatesSignedBinaryReview(
      canonicalChange, publicKey, expectedContext, new Set()
    ), false);

    signReview(canonicalChange.REVIEW, binaryReviewProjection, privateKey);
    assert.equal(validatesSignedBinaryReview(
      canonicalChange, publicKey, expectedContext, new Set()
    ), true);
  });

  it('binds ordered alternate selections to distinct ranked manifest variants', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const valid = decodeBinaryManifest(privateKey);
    assert.equal(validatesSignedBinaryReview(
      valid, publicKey, expectedContext, new Set()
    ), true);

    const noAlternates = decodeBinaryManifest(privateKey);
    noAlternates.REVIEW.ALTERNATE_VARIANT_IDS = [];
    noAlternates.ALTERNATE_VARIANT_IDS = [];
    signReview(noAlternates.REVIEW, binaryReviewProjection, privateKey);
    assert.equal(validatesSignedBinaryReview(
      noAlternates, publicKey, expectedContext, new Set()
    ), true);

    const manifestMismatch = decodeBinaryManifest(privateKey);
    manifestMismatch.ALTERNATE_VARIANT_IDS = ['cassini-low-poly'];
    assert.equal(verifyReviewSignature(
      manifestMismatch.REVIEW, binaryReviewProjection, publicKey
    ), true);
    assert.equal(validatesSignedBinaryReview(
      manifestMismatch, publicKey, expectedContext, new Set()
    ), false);

    const invalidSelections = [
      ['cassini-wireframe', 'cassini-low-poly'],
      ['cassini-low-poly', 'cassini-low-poly'],
      [fixture.variantId, 'cassini-low-poly'],
      ['missing-variant'],
      [42]
    ];
    for (const alternateIds of invalidSelections) {
      const decoded = decodeBinaryManifest(privateKey);
      decoded.REVIEW.ALTERNATE_VARIANT_IDS = alternateIds;
      decoded.ALTERNATE_VARIANT_IDS = [...alternateIds];
      signReview(decoded.REVIEW, binaryReviewProjection, privateKey);
      assert.equal(verifyReviewSignature(
        decoded.REVIEW, binaryReviewProjection, publicKey
      ), true);
      assert.equal(validatesSignedBinaryReview(
        decoded, publicKey, expectedContext, new Set()
      ), false);
    }

    const nonAscendingRanks = decodeBinaryManifest(privateKey);
    nonAscendingRanks.VARIANTS[1].RANK = 2;
    nonAscendingRanks.VARIANTS[2].RANK = 1;
    assert.equal(validatesSignedBinaryReview(
      nonAscendingRanks, publicKey, expectedContext, new Set()
    ), false);
  });

  it('requires re-signing and matching VAM state after alternate selection changes', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const decoded = decodeBinaryManifest(privateKey);
    decoded.REVIEW.ALTERNATE_VARIANT_IDS = ['cassini-low-poly'];

    assert.equal(verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey), false);
    assert.equal(validatesSignedBinaryReview(
      decoded, publicKey, expectedContext, new Set()
    ), false);

    signReview(decoded.REVIEW, binaryReviewProjection, privateKey);
    assert.equal(verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey), true);
    assert.equal(validatesSignedBinaryReview(
      decoded, publicKey, expectedContext, new Set()
    ), false);

    decoded.ALTERNATE_VARIANT_IDS = ['cassini-low-poly'];
    assert.equal(validatesSignedBinaryReview(
      decoded, publicKey, expectedContext, new Set()
    ), true);
  });

  it('enforces reviewer role, context equality, and nonce single use', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const viewer = readFB(writeFB(makeBinaryManifest(
      makeBinaryReview(privateKey, visualAssetReviewerRole.VIEWER)
    )))[0];
    const reviewer = decodeBinaryManifest(privateKey);

    assert.equal(validatesSignedBinaryReview(viewer, publicKey, expectedContext, new Set()), false);
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, {
      ...expectedContext, repository: 'other/repository'
    }, new Set()), false);
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, {
      ...expectedContext, issueNumber: '43'
    }, new Set()), false);
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, {
      ...expectedContext, entityId: 'nasa/voyager'
    }, new Set()), false);
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, {
      ...expectedContext, vamId: 'vam-other'
    }, new Set()), false);

    const nonceRegistry = new Set();
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, expectedContext, nonceRegistry), true);
    assert.equal(validatesSignedBinaryReview(reviewer, publicKey, expectedContext, nonceRegistry), false);
  });

  it('rejects empty or non-string approval profile context before signature trust', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const fields = [
      { field: 'CAPABILITY_ID' },
      { field: 'REPOSITORY', contextKey: 'repository' },
      { field: 'ISSUE_NUMBER', contextKey: 'issueNumber' },
      { field: 'ENTITY_ID', contextKey: 'entityId', manifestKey: 'ENTITY_ID' },
      { field: 'VAM_ID', contextKey: 'vamId', manifestKey: 'ID' },
      { field: 'NONCE' }
    ];

    for (const invalidValue of ['', 42]) {
      for (const { field, contextKey, manifestKey } of fields) {
        const decoded = decodeBinaryManifest(privateKey);
        const context = { ...expectedContext };
        decoded.REVIEW[field] = invalidValue;
        if (contextKey) context[contextKey] = invalidValue;
        if (manifestKey) decoded[manifestKey] = invalidValue;
        signReview(decoded.REVIEW, binaryReviewProjection, privateKey);

        assert.equal(
          verifyReviewSignature(decoded.REVIEW, binaryReviewProjection, publicKey),
          true,
          `${field} fixture must remain cryptographically valid`
        );
        assert.equal(
          validatesSignedBinaryReview(decoded, publicKey, context, new Set()),
          false,
          `${field} must be a non-empty string`
        );
      }
    }

    for (const invalidIssue of ['042', '0']) {
      const decoded = decodeBinaryManifest(privateKey);
      decoded.REVIEW.ISSUE_NUMBER = invalidIssue;
      signReview(decoded.REVIEW, binaryReviewProjection, privateKey);
      assert.equal(verifyReviewSignature(
        decoded.REVIEW, binaryReviewProjection, publicKey
      ), true);
      assert.equal(validatesSignedBinaryReview(
        decoded, publicKey, { ...expectedContext, issueNumber: invalidIssue }, new Set()
      ), false);
    }
  });

  it('binds a metadata-only signature to the exact source metadata', () => {
    const { privateKey, publicKey } = generateKeyPairSync('ed25519');
    const source = Object.assign(new VAMSourceT(), {
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
    const review = Object.assign(new VAMMetadataOnlyReviewT(), {
      REVIEWER_ID: 'reviewer-alice',
      CAPABILITY_ID: 'cap-metadata-001',
      REVIEWER_ROLE: visualAssetReviewerRole.REVIEWER,
      REPOSITORY: fixture.repository,
      ISSUE_NUMBER: fixture.issueNumber,
      ENTITY_ID: fixture.entityId,
      VAM_ID: fixture.vamId,
      NONCE: '118f47a2-6b8d-7c91-a234-567890abcdef',
      DECISION: visualAssetDecisionKind.APPROVE_METADATA_ONLY,
      CANDIDATE_ID: fixture.variantId,
      CANDIDATE_METADATA_SHA256: hexDigestProjection(sourceMetadataProjection(source)),
      DECIDED_AT: '2026-01-12T14:45:00.000Z',
      REASONS: ['Metadata and license reviewed'],
      COMMENT: 'Metadata-only approval',
      ANNOTATIONS: [makeAnnotation()],
      SIGNATURE_TYPE: 'Ed25519'
    });
    signReview(review, metadataReviewProjection, privateKey);
    const manifest = Object.assign(makeBinaryManifest(null), {
      VARIANTS: [Object.assign(new VAMVariantT(), { ID: fixture.variantId, SOURCE: source })],
      REVIEW: null,
      METADATA_REVIEW: review
    });
    const [decoded] = readFB(writeFB(manifest));

    assert.equal(decoded.REVIEW, null);
    assert.equal('CANDIDATE_CID' in decoded.METADATA_REVIEW, false);
    assert.equal('CANDIDATE_SHA256' in decoded.METADATA_REVIEW, false);
    assert.equal(decoded.METADATA_REVIEW.CANDIDATE_METADATA_SHA256,
      hexDigestProjection(sourceMetadataProjection(decoded.VARIANTS[0].SOURCE)));
    assert.equal(verifyReviewSignature(
      decoded.METADATA_REVIEW, metadataReviewProjection, publicKey
    ), true);
    assert.equal(validatesMetadataReview(
      decoded.METADATA_REVIEW, decoded.VARIANTS[0].SOURCE, publicKey,
      expectedContext, new Set()
    ), true);

    const changedLicense = { ...decoded.VARIANTS[0].SOURCE,
      LICENSE_CLASS: visualAssetLicenseClass.MANUAL_REVIEW };
    const changedUrl = { ...decoded.VARIANTS[0].SOURCE,
      SOURCE_URL: 'https://example.invalid/cassini.glb' };
    assert.equal(validatesMetadataReview(
      decoded.METADATA_REVIEW, changedLicense, publicKey, expectedContext, new Set()
    ), false);
    assert.equal(validatesMetadataReview(
      decoded.METADATA_REVIEW, changedUrl, publicKey, expectedContext, new Set()
    ), false);
  });

  it('requires ascending unique ranks and a present canonical variant', () => {
    const variant0 = Object.assign(new VAMVariantT(), { ID: 'canonical', RANK: 0 });
    const variant1 = Object.assign(new VAMVariantT(), { ID: 'alternate', RANK: 1 });

    assert.equal(hasValidRanking(Object.assign(new VAMT(), {
      CANONICAL_VARIANT_ID: 'canonical', VARIANTS: [variant0, variant1]
    })), true);
    assert.equal(hasValidRanking(Object.assign(new VAMT(), {
      CANONICAL_VARIANT_ID: 'canonical', VARIANTS: [variant1, variant0]
    })), false);
    assert.equal(hasValidRanking(Object.assign(new VAMT(), {
      CANONICAL_VARIANT_ID: 'canonical',
      VARIANTS: [variant0, Object.assign(new VAMVariantT(), { ID: 'duplicate', RANK: 0 })]
    })), false);
    assert.equal(hasValidRanking(Object.assign(new VAMT(), {
      CANONICAL_VARIANT_ID: 'missing', VARIANTS: [variant0, variant1]
    })), false);
  });
});
