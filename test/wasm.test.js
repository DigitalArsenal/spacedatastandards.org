import { expect } from 'chai';
import { init } from '../wasm/node/index.mjs';
import { promises as fs } from 'fs';
import path from 'path';

const fixturesDir = path.resolve('wasm/fixtures');

describe('WASM Parser Cross-Platform Tests', function () {
  this.timeout(30000);

  let sds;
  let gjnFixture, czmFixture, kmlFixture;

  before(async () => {
    sds = await init();
    [gjnFixture, czmFixture, kmlFixture] = await Promise.all([
      fs.readFile(path.join(fixturesDir, 'gjn-sample.json'), 'utf-8'),
      fs.readFile(path.join(fixturesDir, 'czm-sample.json'), 'utf-8'),
      fs.readFile(path.join(fixturesDir, 'kml-sample.xml'), 'utf-8'),
    ]);
  });

  describe('Format Detection', () => {
    it('should detect JSON format for GeoJSON', () => {
      expect(sds.detectFormat(gjnFixture)).to.equal('json');
    });

    it('should detect JSON format for CZML', () => {
      expect(sds.detectFormat(czmFixture)).to.equal('json');
    });

    it('should detect XML format for KML', () => {
      expect(sds.detectFormat(kmlFixture)).to.equal('xml');
    });

    it('should detect GJN JSON type', () => {
      expect(sds.detectJsonType(gjnFixture)).to.equal('GJN');
    });

    it('should detect CZM JSON type', () => {
      expect(sds.detectJsonType(czmFixture)).to.equal('CZM');
    });

    it('should detect KML XML type', () => {
      expect(sds.detectXmlType(kmlFixture)).to.equal('KML');
    });
  });

  describe('GeoJSON (GJN)', () => {
    let roundtripped;

    before(() => {
      roundtripped = sds.gjnJsonRoundtrip(gjnFixture);
    });

    it('should roundtrip without error and return non-empty output', () => {
      expect(roundtripped).to.be.a('string');
      expect(roundtripped.length).to.be.greaterThan(0);
    });

    it('should produce valid JSON', () => {
      const parsed = JSON.parse(roundtripped);
      expect(parsed).to.be.an('object');
    });

    it('should preserve FeatureCollection type', () => {
      const parsed = JSON.parse(roundtripped);
      expect(parsed.type).to.equal('FeatureCollection');
    });

    it('should preserve all features', () => {
      const parsed = JSON.parse(roundtripped);
      expect(parsed.features).to.be.an('array');
      expect(parsed.features.length).to.equal(3);
    });

    it('should preserve geometry types (Point, LineString, Polygon)', () => {
      const parsed = JSON.parse(roundtripped);
      const types = parsed.features.map(f => f.geometry.type);
      expect(types).to.include('Point');
      expect(types).to.include('LineString');
      expect(types).to.include('Polygon');
    });

    it('should preserve feature properties', () => {
      const parsed = JSON.parse(roundtripped);
      const point = parsed.features.find(f => f.geometry.type === 'Point');
      expect(point.properties).to.have.property('name');
    });

    it('should be idempotent on double roundtrip', () => {
      const doubleRoundtripped = sds.gjnJsonRoundtrip(roundtripped);
      expect(doubleRoundtripped).to.equal(roundtripped);
    });

    it('should match convert() output', () => {
      const converted = sds.convert(gjnFixture, 'json');
      expect(converted).to.equal(roundtripped);
    });
  });

  describe('CZML (CZM)', () => {
    let roundtripped;

    before(() => {
      roundtripped = sds.czmJsonRoundtrip(czmFixture);
    });

    it('should roundtrip without error and return non-empty output', () => {
      expect(roundtripped).to.be.a('string');
      expect(roundtripped.length).to.be.greaterThan(0);
    });

    it('should produce valid JSON', () => {
      const parsed = JSON.parse(roundtripped);
      expect(parsed).to.be.an('array');
    });

    it('should preserve document packet', () => {
      const parsed = JSON.parse(roundtripped);
      const doc = parsed.find(p => p.id === 'document');
      expect(doc).to.exist;
      expect(doc.name).to.equal('ISS Tracking');
    });

    it('should preserve entity packets', () => {
      const parsed = JSON.parse(roundtripped);
      const iss = parsed.find(p => p.id === 'iss');
      expect(iss).to.exist;
      expect(iss.name).to.equal('ISS (ZARYA)');
    });

    it('should preserve position data', () => {
      const parsed = JSON.parse(roundtripped);
      const iss = parsed.find(p => p.id === 'iss');
      expect(iss.position).to.exist;
      expect(iss.position.cartographicDegrees).to.be.an('array');
    });

    it('should preserve billboard properties', () => {
      const parsed = JSON.parse(roundtripped);
      const iss = parsed.find(p => p.id === 'iss');
      expect(iss.billboard).to.exist;
      expect(iss.billboard.image).to.be.a('string');
    });

    it('should preserve ellipse entity', () => {
      const parsed = JSON.parse(roundtripped);
      const coverage = parsed.find(p => p.id === 'coverage-zone');
      expect(coverage).to.exist;
      expect(coverage.ellipse).to.exist;
      expect(coverage.ellipse.semiMajorAxis).to.be.a('number');
    });

    it('should preserve polygon with holes', () => {
      const parsed = JSON.parse(roundtripped);
      const station = parsed.find(p => p.id === 'ground-station');
      expect(station).to.exist;
      expect(station.polygon).to.exist;
      expect(station.polygon.holes).to.exist;
    });

    it('should preserve delete packet', () => {
      const parsed = JSON.parse(roundtripped);
      const deleted = parsed.find(p => p.id === 'delete-me');
      expect(deleted).to.exist;
      expect(deleted.delete).to.equal(true);
    });

    it('should preserve sampled position with interpolation', () => {
      const parsed = JSON.parse(roundtripped);
      const sat = parsed.find(p => p.id === 'sampled-sat');
      expect(sat).to.exist;
      expect(sat.position.interpolationAlgorithm).to.equal('LAGRANGE');
      expect(sat.position.interpolationDegree).to.equal(5);
    });

    it('should preserve reference properties', () => {
      const parsed = JSON.parse(roundtripped);
      const follower = parsed.find(p => p.id === 'reference-follower');
      expect(follower).to.exist;
      expect(follower.position.reference).to.equal('sampled-sat#position');
    });

    it('should be idempotent on double roundtrip', () => {
      const doubleRoundtripped = sds.czmJsonRoundtrip(roundtripped);
      expect(doubleRoundtripped).to.equal(roundtripped);
    });

    it('should match convert() output', () => {
      const converted = sds.convert(czmFixture, 'json');
      expect(converted).to.equal(roundtripped);
    });
  });

  describe('KML', () => {
    let roundtripped;

    before(() => {
      roundtripped = sds.kmlXmlRoundtrip(kmlFixture);
    });

    it('should roundtrip without error and return non-empty output', () => {
      expect(roundtripped).to.be.a('string');
      expect(roundtripped.length).to.be.greaterThan(0);
    });

    it('should produce valid XML with kml root element', () => {
      expect(roundtripped).to.include('<kml');
      expect(roundtripped).to.include('</kml>');
    });

    it('should preserve Document name', () => {
      expect(roundtripped).to.include('<name>Space Data Locations</name>');
    });

    it('should preserve Placemarks', () => {
      expect(roundtripped).to.include('<Placemark>');
      expect(roundtripped).to.include('NASA Johnson Space Center');
      expect(roundtripped).to.include('ESA ESOC');
    });

    it('should preserve Folder structure', () => {
      expect(roundtripped).to.include('<Folder>');
      expect(roundtripped).to.include('Ground Stations');
    });

    it('should preserve Style definitions', () => {
      expect(roundtripped).to.include('<Style');
      expect(roundtripped).to.include('station-style');
      expect(roundtripped).to.include('<IconStyle>');
      expect(roundtripped).to.include('<LabelStyle>');
      expect(roundtripped).to.include('<LineStyle>');
      expect(roundtripped).to.include('<PolyStyle>');
    });

    it('should preserve StyleMap', () => {
      expect(roundtripped).to.include('<StyleMap');
      expect(roundtripped).to.include('station-map');
    });

    it('should preserve NetworkLink', () => {
      expect(roundtripped).to.include('<NetworkLink>');
      expect(roundtripped).to.include('Live TLE Data');
    });

    it('should preserve coordinates', () => {
      expect(roundtripped).to.include('-95.0933');
      expect(roundtripped).to.include('29.5593');
    });

    it('should preserve gx:Track', () => {
      expect(roundtripped).to.include('gx:Track');
      expect(roundtripped).to.include('gx:coord');
    });

    it('should preserve MultiGeometry with nesting', () => {
      expect(roundtripped).to.include('<MultiGeometry>');
    });

    it('should preserve GroundOverlay', () => {
      expect(roundtripped).to.include('<GroundOverlay>');
      expect(roundtripped).to.include('Satellite Imagery');
    });

    it('should preserve gx:Tour', () => {
      expect(roundtripped).to.include('gx:Tour');
      expect(roundtripped).to.include('Space Center Tour');
    });

    it('should preserve NetworkLinkControl', () => {
      expect(roundtripped).to.include('<NetworkLinkControl>');
      expect(roundtripped).to.include('<minRefreshPeriod>');
    });

    it('should preserve Schema and ExtendedData', () => {
      expect(roundtripped).to.include('<Schema');
      expect(roundtripped).to.include('TrackSchema');
      expect(roundtripped).to.include('<ExtendedData>');
      expect(roundtripped).to.include('<SchemaData');
    });

    it('should be idempotent on double roundtrip', () => {
      const doubleRoundtripped = sds.kmlXmlRoundtrip(roundtripped);
      expect(doubleRoundtripped).to.equal(roundtripped);
    });

    it('should match convert() output', () => {
      const converted = sds.convert(kmlFixture, 'xml');
      expect(converted).to.equal(roundtripped);
    });
  });
});
