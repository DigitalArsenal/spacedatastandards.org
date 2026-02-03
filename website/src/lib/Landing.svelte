<script lang="ts">
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";

  let schemaCount = 0;
  let canvas: HTMLCanvasElement;
  let animationFrame: number;
  let selectedLang = 'typescript';

  // Schema categories with descriptions
  const categories = [
    {
      icon: "orbit",
      iconClass: "icon-blue",
      title: "Orbital Data",
      description: "OMM, OEM, OCM, OSM - Mean elements, ephemerides, and orbit characterization messages",
      schemas: ["OMM", "OEM", "OCM", "OSM"]
    },
    {
      icon: "alert",
      iconClass: "icon-orange",
      title: "Conjunction",
      description: "CDM, CSM, CAT - Conjunction data, screening, and catalog messages for collision avoidance",
      schemas: ["CDM", "CSM", "CAT"]
    },
    {
      icon: "user",
      iconClass: "icon-green",
      title: "Entity",
      description: "EPM, PNM - Entity profiles and publish notifications for identity management",
      schemas: ["EPM", "PNM"]
    },
    {
      icon: "radio",
      iconClass: "icon-cyan",
      title: "Tracking",
      description: "TDM, RFM - Tracking data and reference frame messages for observation data",
      schemas: ["TDM", "RFM"]
    },
    {
      icon: "rocket",
      iconClass: "icon-purple",
      title: "Maneuver",
      description: "MET, MPE - Maneuver planning and execution messages for operations",
      schemas: ["MET", "MPE"]
    },
    {
      icon: "telemetry",
      iconClass: "icon-teal",
      title: "Telemetry",
      description: "XTC (XTCE) - XML Telemetry and Command Exchange for spacecraft telemetry data",
      schemas: ["XTC"]
    },
    {
      icon: "store",
      iconClass: "icon-gold",
      title: "Marketplace",
      description: "STF, PUR, REV, ACL - Storefront, purchase, review, and access control for data commerce",
      schemas: ["STF", "PUR", "REV", "ACL"]
    }
  ];

  const legacyFormats = [
    { name: "TLE", desc: "Two-Line Element Sets", replacement: "OMM" },
    { name: "SATCAT", desc: "Satellite Catalog", replacement: "CAT" },
    { name: "VCM", desc: "Vector Covariance Message", replacement: "VCM/OEM" },
    { name: "CDM (XML)", desc: "Conjunction Data Message", replacement: "CDM" },
    { name: "OEM (XML)", desc: "Orbit Ephemeris Message", replacement: "OEM" }
  ];

  const quickStartExamples: Record<string, { install: string; code: string }> = {
    typescript: {
      install: 'npm install spacedatastandards.org',
      code: `import { OMM, OMMT } from 'spacedatastandards.org/lib/js/OMM/main.js';
import * as flatbuffers from 'flatbuffers';

// Create a FlatBuffer builder
const builder = new flatbuffers.Builder(1024);

// Create string offsets first
const objectName = builder.createString("STARLINK-1234");
const objectId = builder.createString("2024-001A");
const epoch = builder.createString("2024-06-22T16:56:20.014080");

// Build the OMM message
OMM.startOMM(builder);
OMM.addOBJECT_NAME(builder, objectName);
OMM.addOBJECT_ID(builder, objectId);
OMM.addEPOCH(builder, epoch);
OMM.addMEAN_MOTION(builder, 15.09);
OMM.addECCENTRICITY(builder, 0.0001);
OMM.addINCLINATION(builder, 53.0);
const omm = OMM.endOMM(builder);

builder.finish(omm);
const buffer = builder.asUint8Array();

// Read back (zero-copy!)
const buf = new flatbuffers.ByteBuffer(buffer);
const msg = OMM.getRootAsOMM(buf);
console.log(msg.OBJECT_NAME()); // "STARLINK-1234"`
    },
    javascript: {
      install: 'npm install spacedatastandards.org',
      code: `import { OMM } from 'spacedatastandards.org/lib/js/OMM/main.js';
import * as flatbuffers from 'flatbuffers';

// Create a FlatBuffer builder
const builder = new flatbuffers.Builder(1024);

// Create string offsets
const objectName = builder.createString("STARLINK-1234");
const objectId = builder.createString("2024-001A");
const epoch = builder.createString("2024-06-22T16:56:20.014080");

// Build the OMM
OMM.startOMM(builder);
OMM.addOBJECT_NAME(builder, objectName);
OMM.addOBJECT_ID(builder, objectId);
OMM.addEPOCH(builder, epoch);
OMM.addMEAN_MOTION(builder, 15.09);
OMM.addECCENTRICITY(builder, 0.0001);
OMM.addINCLINATION(builder, 53.0);
const omm = OMM.endOMM(builder);

builder.finish(omm);
const buffer = builder.asUint8Array();

// Read back (zero-copy!)
const buf = new flatbuffers.ByteBuffer(buffer);
const msg = OMM.getRootAsOMM(buf);
console.log(msg.OBJECT_NAME()); // "STARLINK-1234"`
    },
    python: {
      install: 'pip install flatbuffers',
      code: `import flatbuffers
from OMM import OMM

# Create a FlatBuffer builder
builder = flatbuffers.Builder(1024)

# Create strings first
object_name = builder.CreateString("STARLINK-1234")
object_id = builder.CreateString("2024-001A")
epoch = builder.CreateString("2024-06-22T16:56:20.014080")

# Build the OMM message
OMM.Start(builder)
OMM.AddOBJECT_NAME(builder, object_name)
OMM.AddOBJECT_ID(builder, object_id)
OMM.AddEPOCH(builder, epoch)
OMM.AddMEAN_MOTION(builder, 15.09)
OMM.AddECCENTRICITY(builder, 0.0001)
OMM.AddINCLINATION(builder, 53.0)
omm = OMM.End(builder)

builder.Finish(omm)
buf = builder.Output()

# Read back (zero-copy!)
omm = OMM.OMM.GetRootAs(bytes(buf), 0)
print(omm.OBJECT_NAME().decode())  # "STARLINK-1234"`
    },
    go: {
      install: 'go get github.com/google/flatbuffers/go',
      code: `package main

import (
    flatbuffers "github.com/google/flatbuffers/go"
    "spacedatastandards/OMM"
)

func main() {
    builder := flatbuffers.NewBuilder(1024)

    // Create strings first
    objectName := builder.CreateString("STARLINK-1234")
    objectId := builder.CreateString("2024-001A")
    epoch := builder.CreateString("2024-06-22T16:56:20.014080")

    // Build the OMM message
    OMM.OMMStart(builder)
    OMM.OMMAddOBJECT_NAME(builder, objectName)
    OMM.OMMAddOBJECT_ID(builder, objectId)
    OMM.OMMAddEPOCH(builder, epoch)
    OMM.OMMAddMEAN_MOTION(builder, 15.09)
    OMM.OMMAddECCENTRICITY(builder, 0.0001)
    OMM.OMMAddINCLINATION(builder, 53.0)
    omm := OMM.OMMEnd(builder)

    builder.Finish(omm)
    buf := builder.FinishedBytes()

    // Read back (zero-copy!)
    msg := OMM.GetRootAsOMM(buf, 0)
    fmt.Println(string(msg.OBJECT_NAME())) // "STARLINK-1234"
}`
    },
    rust: {
      install: 'cargo add flatbuffers',
      code: `use flatbuffers::FlatBufferBuilder;

mod omm_generated;
use omm_generated::omm::{OMM, OMMArgs, root_as_omm};

fn main() {
    let mut builder = FlatBufferBuilder::new();

    // Create strings first
    let object_name = builder.create_string("STARLINK-1234");
    let object_id = builder.create_string("2024-001A");
    let epoch = builder.create_string("2024-06-22T16:56:20.014080");

    // Build the OMM message
    let omm = OMM::create(&mut builder, &OMMArgs {
        OBJECT_NAME: Some(object_name),
        OBJECT_ID: Some(object_id),
        EPOCH: Some(epoch),
        MEAN_MOTION: 15.09,
        ECCENTRICITY: 0.0001,
        INCLINATION: 53.0,
        ..Default::default()
    });

    builder.finish(omm, None);
    let buf = builder.finished_data();

    // Read back (zero-copy!)
    let msg = root_as_omm(buf).unwrap();
    println!("{}", msg.OBJECT_NAME().unwrap()); // "STARLINK-1234"
}`
    },
    cpp: {
      install: '# Include flatbuffers headers',
      code: `#include "flatbuffers/flatbuffers.h"
#include "OMM_generated.h"

int main() {
    flatbuffers::FlatBufferBuilder builder(1024);

    // Create strings first
    auto object_name = builder.CreateString("STARLINK-1234");
    auto object_id = builder.CreateString("2024-001A");
    auto epoch = builder.CreateString("2024-06-22T16:56:20.014080");

    // Build the OMM message
    auto omm = CreateOMM(builder,
        object_name,
        object_id,
        epoch,
        15.09,   // MEAN_MOTION
        0.0001,  // ECCENTRICITY
        53.0     // INCLINATION
    );

    builder.Finish(omm);
    uint8_t* buf = builder.GetBufferPointer();

    // Read back (zero-copy!)
    auto msg = GetOMM(buf);
    std::cout << msg->OBJECT_NAME()->str(); // "STARLINK-1234"
}`
    },
    csharp: {
      install: 'dotnet add package FlatBuffers',
      code: `using FlatBuffers;
using SpaceDataStandards;

var builder = new FlatBufferBuilder(1024);

// Create strings first
var objectName = builder.CreateString("STARLINK-1234");
var objectId = builder.CreateString("2024-001A");
var epoch = builder.CreateString("2024-06-22T16:56:20.014080");

// Build the OMM message
OMM.StartOMM(builder);
OMM.AddOBJECT_NAME(builder, objectName);
OMM.AddOBJECT_ID(builder, objectId);
OMM.AddEPOCH(builder, epoch);
OMM.AddMEAN_MOTION(builder, 15.09);
OMM.AddECCENTRICITY(builder, 0.0001);
OMM.AddINCLINATION(builder, 53.0);
var omm = OMM.EndOMM(builder);

builder.Finish(omm.Value);
var buf = builder.SizedByteArray();

// Read back (zero-copy!)
var msg = OMM.GetRootAsOMM(new ByteBuffer(buf));
Console.WriteLine(msg.OBJECT_NAME); // "STARLINK-1234"`
    },
    java: {
      install: 'implementation "com.google.flatbuffers:flatbuffers-java:24.3.25"',
      code: `import com.google.flatbuffers.FlatBufferBuilder;
import spacedatastandards.OMM;

public class Example {
    public static void main(String[] args) {
        FlatBufferBuilder builder = new FlatBufferBuilder(1024);

        // Create strings first
        int objectName = builder.createString("STARLINK-1234");
        int objectId = builder.createString("2024-001A");
        int epoch = builder.createString("2024-06-22T16:56:20.014080");

        // Build the OMM message
        OMM.startOMM(builder);
        OMM.addOBJECT_NAME(builder, objectName);
        OMM.addOBJECT_ID(builder, objectId);
        OMM.addEPOCH(builder, epoch);
        OMM.addMEAN_MOTION(builder, 15.09);
        OMM.addECCENTRICITY(builder, 0.0001);
        OMM.addINCLINATION(builder, 53.0);
        int omm = OMM.endOMM(builder);

        builder.finish(omm);
        byte[] buf = builder.sizedByteArray();

        // Read back (zero-copy!)
        OMM msg = OMM.getRootAsOMM(ByteBuffer.wrap(buf));
        System.out.println(msg.OBJECT_NAME()); // "STARLINK-1234"
    }
}`
    },
    swift: {
      install: '.package(url: "https://github.com/nicklockwood/FlatBuffers.git", from: "2.0.0")',
      code: `import FlatBuffers

var builder = FlatBufferBuilder(initialSize: 1024)

// Create strings first
let objectName = builder.create(string: "STARLINK-1234")
let objectId = builder.create(string: "2024-001A")
let epoch = builder.create(string: "2024-06-22T16:56:20.014080")

// Build the OMM message
let omm = OMM.createOMM(
    &builder,
    OBJECT_NAMEOffset: objectName,
    OBJECT_IDOffset: objectId,
    EPOCHOffset: epoch,
    MEAN_MOTION: 15.09,
    ECCENTRICITY: 0.0001,
    INCLINATION: 53.0
)

builder.finish(offset: omm)
let buf = builder.sizedByteArray

// Read back (zero-copy!)
let msg = OMM.getRootAsOMM(bb: ByteBuffer(bytes: buf))
print(msg.OBJECT_NAME!) // "STARLINK-1234"`
    },
    php: {
      install: 'composer require google/flatbuffers',
      code: `<?php
use Google\\FlatBuffers\\FlatbufferBuilder;
use SpaceDataStandards\\OMM;

$builder = new FlatbufferBuilder(1024);

// Create strings first
$objectName = $builder->createString("STARLINK-1234");
$objectId = $builder->createString("2024-001A");
$epoch = $builder->createString("2024-06-22T16:56:20.014080");

// Build the OMM message
OMM::startOMM($builder);
OMM::addOBJECT_NAME($builder, $objectName);
OMM::addOBJECT_ID($builder, $objectId);
OMM::addEPOCH($builder, $epoch);
OMM::addMEAN_MOTION($builder, 15.09);
OMM::addECCENTRICITY($builder, 0.0001);
OMM::addINCLINATION($builder, 53.0);
$omm = OMM::endOMM($builder);

$builder->finish($omm);
$buf = $builder->sizedByteArray();

// Read back (zero-copy!)
$msg = OMM::getRootAsOMM(new ByteBuffer($buf));
echo $msg->getOBJECT_NAME(); // "STARLINK-1234"`
    },
    dart: {
      install: 'dart pub add flat_buffers',
      code: `${"import"} 'package:flat_buffers/flat_buffers.dart';
${"import"} 'omm_generated.dart';

void main() {
  final builder = Builder(initialSize: 1024);

  // Create strings first
  final objectName = builder.writeString("STARLINK-1234");
  final objectId = builder.writeString("2024-001A");
  final epoch = builder.writeString("2024-06-22T16:56:20.014080");

  // Build the OMM message
  final omm = OMMBuilder(builder)
    ..addOBJECT_NAMEOffset(objectName)
    ..addOBJECT_IDOffset(objectId)
    ..addEPOCHOffset(epoch)
    ..addMEAN_MOTION(15.09)
    ..addECCENTRICITY(0.0001)
    ..addINCLINATION(53.0);

  final offset = omm.finish();
  builder.finish(offset);
  final buf = builder.buffer;

  // Read back (zero-copy!)
  final msg = OMM(buf);
  print(msg.OBJECT_NAME); // "STARLINK-1234"
}`
    }
  };

  const languages = [
    { id: 'typescript', name: 'TypeScript' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'go', name: 'Go' },
    { id: 'rust', name: 'Rust' },
    { id: 'cpp', name: 'C++' },
    { id: 'csharp', name: 'C#' },
    { id: 'java', name: 'Java' },
    { id: 'swift', name: 'Swift' },
    { id: 'php', name: 'PHP' },
    { id: 'dart', name: 'Dart' }
  ];

  // Technical grid background with floating data
  function initTechBackground() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 60;
    const dataStrings: { x: number; y: number; text: string; opacity: number; speed: number }[] = [];

    // Sample hex/binary data strings
    const dataFragments = [
      'OMM', 'CDM', 'EPM', 'TDM', 'OEM', 'XTC', 'CAT', 'STF',
      '0x7F', '0xA3', '0x1B', '0xE4', '0x9C', '0x2D', '0x5F', '0x8B',
      '1101', '0110', '1010', '0011', '1111', '0001', '1000', '0100',
      'FBS', 'SDS', 'P2P', 'DHT', 'CID', 'API', 'SDK', 'IDL'
    ];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDataStrings();
    }

    function initDataStrings() {
      dataStrings.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 40000);
      for (let i = 0; i < count; i++) {
        dataStrings.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: dataFragments[Math.floor(Math.random() * dataFragments.length)],
          opacity: Math.random() * 0.2 + 0.08,
          speed: Math.random() * 0.3 + 0.1
        });
      }
    }

    function draw() {
      // Clear with dark background
      ctx.fillStyle = '#030308';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(102, 126, 234, 0.08)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw grid intersection dots
      ctx.fillStyle = 'rgba(102, 126, 234, 0.15)';
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw floating data strings
      ctx.font = '10px "JetBrains Mono", monospace';
      dataStrings.forEach(data => {
        ctx.fillStyle = `rgba(102, 126, 234, ${data.opacity})`;
        ctx.fillText(data.text, data.x, data.y);

        // Slowly drift upward
        data.y -= data.speed;
        if (data.y < -20) {
          data.y = canvas.height + 20;
          data.x = Math.random() * canvas.width;
          data.text = dataFragments[Math.floor(Math.random() * dataFragments.length)];
        }
      });

      // Subtle gradient overlay at top
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.4);
      gradient.addColorStop(0, 'rgba(102, 126, 234, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.4);

      animationFrame = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }

  onMount(() => {
    schemaCount = 40; // Updated schema count
    const cleanup = initTechBackground();
    return cleanup;
  });
</script>

<canvas bind:this={canvas} class="starfield"></canvas>

<section class="hero">
  <h1 class="hero-title">Space Data Standards</h1>
  <p class="hero-subtitle">
    The open-source schema framework for the modern space industry. High-performance
    <a href="https://digitalarsenal.github.io/flatbuffers/" target="_blank" rel="noopener" class="inline-link">FlatBuffers</a>
    serialization with JSON Schema compatibility, replacing legacy formats like TLE, VCM, and XML-based CCSDS messages.
  </p>
  <div class="ci-badges">
    <a href="https://github.com/DigitalArsenal/spacedatastandards.org/actions" target="_blank" rel="noopener">
      <img src="https://github.com/DigitalArsenal/spacedatastandards.org/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Pages Build" />
    </a>
    <a href="https://www.npmjs.com/package/spacedatastandards.org" target="_blank" rel="noopener">
      <img src="https://img.shields.io/npm/v/spacedatastandards.org.svg?style=flat&colorB=667eea" alt="npm version" />
    </a>
    <a href="https://github.com/DigitalArsenal/spacedatastandards.org/blob/main/LICENSE" target="_blank" rel="noopener">
      <img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat&colorB=667eea" alt="License" />
    </a>
  </div>
  <div class="schema-badge-row">
    <a href="/schemas" use:link>
      <img src="https://img.shields.io/badge/schemas-{schemaCount}+-667eea?style=for-the-badge&labelColor=1a1a2e" alt="Schemas" />
    </a>
  </div>
  <div class="hero-actions">
    <a href="/schemas" use:link class="btn btn-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
      Browse Schemas
    </a>
    <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" rel="noopener" class="btn btn-primary">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      View on GitHub
    </a>
    <a href="/download" use:link class="btn btn-primary">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download
    </a>
  </div>
</section>

<section id="about" class="about-section">
  <div class="container">
    <div class="about-grid">
      <div class="about-content">
        <h2 class="section-title">What is Space Data Standards?</h2>
        <p class="about-text">
          Space Data Standards (SDS) is an open-source project providing modern, high-performance
          schemas for space situational awareness and space traffic management data exchange.
          Built on <a href="https://digitalarsenal.github.io/flatbuffers/" target="_blank" rel="noopener" class="inline-link">Google FlatBuffers</a>,
          SDS offers zero-copy serialization with cross-platform support for 13+ programming languages.
        </p>
        <p class="about-text">
          The schemas are based on <strong>CCSDS (Consultative Committee for Space Data Systems)</strong> standards
          used by NASA, ESA, JAXA, and space agencies worldwide, modernized for the demands of
          mega-constellations, commercial space, and real-time operations.
        </p>
        <p class="about-text">
          SDS powers the <a href="https://digitalarsenal.github.io/space-data-network/" target="_blank" rel="noopener" class="inline-link">Space Data Network</a>,
          a decentralized peer-to-peer network for global space data exchange built on IPFS/libp2p.
        </p>
      </div>
      <div class="about-stats">
        <div class="stat-card">
          <div class="stat-number">{schemaCount}+</div>
          <div class="stat-label">Schemas</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">13</div>
          <div class="stat-label">Languages</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">0</div>
          <div class="stat-label">Copy Overhead</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Open Source</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="why-flatbuffers" class="flatbuffers-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Why FlatBuffers?</h2>
      <p class="section-subtitle">
        Originally developed at Google for games and performance-critical applications,
        <a href="https://digitalarsenal.github.io/flatbuffers/" target="_blank" rel="noopener" class="inline-link">FlatBuffers</a>
        is the ideal serialization format for space data.
      </p>
    </div>
    <div class="comparison-grid">
      <div class="comparison-card highlight">
        <h3>FlatBuffers</h3>
        <ul class="comparison-list">
          <li><span class="check">&#x2713;</span> Zero-copy access - read directly from buffer</li>
          <li><span class="check">&#x2713;</span> No parsing/unpacking step required</li>
          <li><span class="check">&#x2713;</span> No heap allocation needed</li>
          <li><span class="check">&#x2713;</span> Forward & backward compatible schemas</li>
          <li><span class="check">&#x2713;</span> Tiny code footprint</li>
          <li><span class="check">&#x2713;</span> Human-readable schema definitions</li>
          <li><span class="check">&#x2713;</span> 13+ language support</li>
        </ul>
      </div>
      <div class="comparison-card">
        <h3>Protocol Buffers</h3>
        <ul class="comparison-list">
          <li><span class="neutral">~</span> Requires parsing step</li>
          <li><span class="neutral">~</span> Memory allocation on decode</li>
          <li><span class="check">&#x2713;</span> Schema evolution support</li>
          <li><span class="neutral">~</span> Larger generated code</li>
        </ul>
      </div>
      <div class="comparison-card">
        <h3>JSON/XML</h3>
        <ul class="comparison-list">
          <li><span class="check">&#x2713;</span> Human readable</li>
          <li><span class="cross">&#x2717;</span> Large file sizes</li>
          <li><span class="cross">&#x2717;</span> Slow parsing</li>
          <li><span class="cross">&#x2717;</span> No type safety</li>
          <li><span class="cross">&#x2717;</span> High memory usage</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="legacy" class="legacy-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Replacing Legacy Formats</h2>
      <p class="section-subtitle">
        Space Data Standards modernizes decades-old formats while maintaining compatibility with CCSDS standards
      </p>
    </div>
    <div class="legacy-table">
      <div class="legacy-header">
        <span>Legacy Format</span>
        <span>Description</span>
        <span>SDS Schema</span>
      </div>
      {#each legacyFormats as format}
        <div class="legacy-row">
          <span class="legacy-name">{format.name}</span>
          <span class="legacy-desc">{format.desc}</span>
          <span class="legacy-replacement">
            <a href="/schemas/{format.replacement.split('/')[0]}" use:link>{format.replacement}</a>
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="features">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Schema Categories</h2>
      <p class="section-subtitle">
        Comprehensive data standards covering all aspects of space operations
      </p>
    </div>
    <div class="features-grid">
      {#each categories as cat}
        <div class="feature-card">
          <div class="feature-icon {cat.iconClass}">
            {#if cat.icon === "orbit"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
                <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
              </svg>
            {:else if cat.icon === "alert"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            {:else if cat.icon === "user"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            {:else if cat.icon === "radio"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
              </svg>
            {:else if cat.icon === "rocket"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              </svg>
            {:else if cat.icon === "telemetry"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            {:else if cat.icon === "store"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            {/if}
          </div>
          <h3 class="feature-title">{cat.title}</h3>
          <p class="feature-desc">{cat.description}</p>
          <div class="feature-schemas">
            {#each cat.schemas as schema}
              <a href="/schemas/{schema}" use:link class="schema-tag">{schema}</a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="code-example" class="code-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Quick Start</h2>
      <p class="section-subtitle">
        Get started with Space Data Standards in your favorite language
      </p>
    </div>
    <div class="quickstart-container">
      <div class="lang-tabs">
        {#each languages as lang}
          <button
            class="lang-tab"
            class:active={selectedLang === lang.id}
            on:click={() => selectedLang = lang.id}
          >
            {lang.name}
          </button>
        {/each}
      </div>
      <div class="quickstart-content">
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">Installation</span>
          </div>
          <pre><code>{quickStartExamples[selectedLang]?.install || ''}</code></pre>
        </div>
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">{languages.find(l => l.id === selectedLang)?.name || ''}</span>
            <span class="code-title">OMM Example</span>
          </div>
          <pre><code>{quickStartExamples[selectedLang]?.code || ''}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="formats">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">13 Language Support</h2>
      <p class="section-subtitle">
        Generated code for every major programming language from a single schema definition
      </p>
    </div>
    <div class="languages-grid">
      {#each ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'C++', 'C#', 'Java', 'Kotlin', 'Swift', 'PHP', 'Dart', 'Lobster'] as lang}
        <div class="lang-card">
          <span class="lang-name">{lang}</span>
        </div>
      {/each}
    </div>
    <p class="formats-note">
      All schemas are defined in <strong>FlatBuffers IDL</strong> and automatically compiled to all supported languages.
      <strong>JSON Schema</strong> with <code>x-flatbuffer</code> annotations is also generated for validation and documentation.
    </p>
  </div>
</section>

<section id="sdn" class="sdn-section">
  <div class="container">
    <div class="sdn-content">
      <div class="sdn-text">
        <h2 class="section-title">Space Data Network</h2>
        <p class="about-text">
          Space Data Standards powers the <strong>Space Data Network (SDN)</strong>, a decentralized
          peer-to-peer network for real-time space data exchange. Built on IPFS and libp2p, SDN enables:
        </p>
        <ul class="sdn-features">
          <li><strong>Decentralized Architecture</strong> - No central server or single point of failure</li>
          <li><strong>Real-time PubSub</strong> - Subscribe to data streams by schema type (OMM, CDM, etc.)</li>
          <li><strong>Cryptographic Verification</strong> - Ed25519 signatures on all data</li>
          <li><strong>Content Addressing</strong> - Tamper-proof data with IPFS CIDs</li>
          <li><strong>Cross-Platform</strong> - Server, browser, desktop, and edge relay support</li>
        </ul>
        <div class="sdn-actions">
          <a href="https://digitalarsenal.github.io/space-data-network/" target="_blank" rel="noopener" class="btn btn-accent">
            Visit Space Data Network
          </a>
          <a href="https://github.com/DigitalArsenal/space-data-network" target="_blank" rel="noopener" class="btn btn-primary">
            View SDN on GitHub
          </a>
        </div>
      </div>
      <div class="sdn-diagram">
        <svg viewBox="0 55 1000 660" xmlns="http://www.w3.org/2000/svg" class="master-diagram-compact" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="idx-md-glow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <radialGradient id="idx-md-bg-glow" cx="50%" cy="53%" r="50%">
                <stop offset="0%" stop-color="rgba(96,165,250,0.1)"/>
                <stop offset="60%" stop-color="rgba(96,165,250,0.02)"/>
                <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
              </radialGradient>
              <radialGradient id="idx-md-center-fill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(96,165,250,0.18)"/>
                <stop offset="100%" stop-color="rgba(30,30,35,0.9)"/>
              </radialGradient>
            </defs>

            <circle cx="500" cy="370" r="340" fill="url(#idx-md-bg-glow)"/>

            <!-- Peer-to-peer mesh connections -->
            <g fill="none" stroke-width="1" stroke-dasharray="6 5">
              <line x1="500" y1="100" x2="690" y2="173" stroke="rgba(251,191,36,0.33)" style="animation: idx-md-dash 2.5s linear infinite;"/>
              <line x1="690" y1="173" x2="770" y2="370" stroke="rgba(167,139,250,0.33)" style="animation: idx-md-dash-rev 2.8s linear infinite;"/>
              <line x1="770" y1="370" x2="690" y2="557" stroke="rgba(23,234,217,0.33)" style="animation: idx-md-dash 2.6s linear infinite;"/>
              <line x1="690" y1="557" x2="500" y2="640" stroke="rgba(96,165,250,0.33)" style="animation: idx-md-dash-rev 3s linear infinite;"/>
              <line x1="500" y1="640" x2="310" y2="557" stroke="rgba(52,211,153,0.33)" style="animation: idx-md-dash 2.7s linear infinite;"/>
              <line x1="310" y1="557" x2="230" y2="370" stroke="rgba(244,114,182,0.33)" style="animation: idx-md-dash-rev 2.9s linear infinite;"/>
              <line x1="230" y1="370" x2="310" y2="173" stroke="rgba(251,146,60,0.33)" style="animation: idx-md-dash 2.4s linear infinite;"/>
              <line x1="310" y1="173" x2="500" y2="100" stroke="rgba(248,113,113,0.33)" style="animation: idx-md-dash-rev 2.6s linear infinite;"/>
            </g>

            <!-- Cross-mesh connections -->
            <g fill="none" stroke-width="1" stroke-dasharray="4 6">
              <line x1="500" y1="100" x2="690" y2="557" stroke="rgba(251,191,36,0.40)" style="animation: idx-md-dash-rev 3.5s linear infinite;"/>
              <line x1="690" y1="173" x2="310" y2="557" stroke="rgba(167,139,250,0.40)" style="animation: idx-md-dash 4s linear infinite;"/>
              <line x1="770" y1="370" x2="310" y2="173" stroke="rgba(23,234,217,0.40)" style="animation: idx-md-dash-rev 3.8s linear infinite;"/>
              <line x1="230" y1="370" x2="500" y2="640" stroke="rgba(251,146,60,0.40)" style="animation: idx-md-dash 3.6s linear infinite;"/>
              <line x1="690" y1="173" x2="230" y2="370" stroke="rgba(167,139,250,0.35)" style="animation: idx-md-dash 4.2s linear infinite;"/>
              <line x1="770" y1="370" x2="310" y2="557" stroke="rgba(23,234,217,0.35)" style="animation: idx-md-dash-rev 3.9s linear infinite;"/>
              <line x1="690" y1="557" x2="310" y2="173" stroke="rgba(96,165,250,0.35)" style="animation: idx-md-dash 4.4s linear infinite;"/>
              <line x1="500" y1="100" x2="500" y2="640" stroke="rgba(52,211,153,0.30)" style="animation: idx-md-dash-rev 4.6s linear infinite;"/>
            </g>

            <!-- Connection lines to center -->
            <line x1="500" y1="132" x2="500" y2="305" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash 1.5s linear infinite;"/>
            <line x1="665" y1="195" x2="548" y2="318" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash 1.8s linear infinite;"/>
            <line x1="738" y1="370" x2="565" y2="370" stroke="#17ead9" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash-rev 1.6s linear infinite;"/>
            <line x1="665" y1="535" x2="548" y2="418" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash-rev 1.7s linear infinite;"/>
            <line x1="500" y1="608" x2="500" y2="435" stroke="#34d399" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash 2.0s linear infinite;"/>
            <line x1="335" y1="535" x2="452" y2="418" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash-rev 1.9s linear infinite;"/>
            <line x1="262" y1="370" x2="435" y2="370" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash 1.4s linear infinite;"/>
            <line x1="335" y1="195" x2="452" y2="318" stroke="#f87171" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.75" style="animation: idx-md-dash-rev 2.1s linear infinite;"/>

            <!-- Traveling data dots -->
            <circle r="2.5" fill="#fbbf24" opacity="0.9"><animateMotion dur="2.5s" repeatCount="indefinite" path="M500,132 L500,305"/></circle>
            <circle r="2.5" fill="#60a5fa" opacity="0.9"><animateMotion dur="3s" repeatCount="indefinite" path="M548,418 L665,535"/></circle>
            <circle r="2.5" fill="#17ead9" opacity="0.9"><animateMotion dur="2.8s" repeatCount="indefinite" path="M738,370 L565,370"/></circle>
            <circle r="2.5" fill="#fb923c" opacity="0.9"><animateMotion dur="2.6s" repeatCount="indefinite" path="M262,370 L435,370"/></circle>
            <circle r="2" fill="#34d399" opacity="0.8"><animateMotion dur="3.2s" repeatCount="indefinite" path="M500,608 L500,435"/></circle>
            <circle r="2" fill="#f472b6" opacity="0.8"><animateMotion dur="3.4s" repeatCount="indefinite" path="M452,418 L335,535"/></circle>
            <circle r="2" fill="#a78bfa" opacity="0.8"><animateMotion dur="2.9s" repeatCount="indefinite" path="M665,195 L548,318"/></circle>
            <circle r="2" fill="#f87171" opacity="0.8"><animateMotion dur="3.1s" repeatCount="indefinite" path="M452,318 L335,195"/></circle>

            <!-- Mesh traveling dots -->
            <circle r="2" fill="#fbbf24" opacity="0.6"><animateMotion dur="4s" repeatCount="indefinite" path="M500,100 L690,173"/></circle>
            <circle r="2" fill="#17ead9" opacity="0.6"><animateMotion dur="4.5s" repeatCount="indefinite" path="M770,370 L690,557"/></circle>
            <circle r="2" fill="#fb923c" opacity="0.6"><animateMotion dur="3.8s" repeatCount="indefinite" path="M310,173 L230,370"/></circle>
            <circle r="2" fill="#34d399" opacity="0.6"><animateMotion dur="4.2s" repeatCount="indefinite" path="M310,557 L500,640"/></circle>
            <circle r="1.5" fill="#a78bfa" opacity="0.5"><animateMotion dur="5s" repeatCount="indefinite" path="M690,173 L310,557"/></circle>
            <circle r="1.5" fill="#fbbf24" opacity="0.5"><animateMotion dur="5.5s" repeatCount="indefinite" path="M690,557 L500,100"/></circle>
            <circle r="1.5" fill="#17ead9" opacity="0.5"><animateMotion dur="4.8s" repeatCount="indefinite" path="M770,370 L310,557"/></circle>
            <circle r="1.5" fill="#60a5fa" opacity="0.5"><animateMotion dur="5.2s" repeatCount="indefinite" path="M690,557 L310,173"/></circle>
            <circle r="1.5" fill="#34d399" opacity="0.4"><animateMotion dur="6s" repeatCount="indefinite" path="M500,100 L500,640"/></circle>

            <!-- Data type labels -->
            <g font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="rgba(255,255,255,0.3)">
              <text x="512" y="215" text-anchor="start">OMM TLE</text>
              <text x="614" y="248" text-anchor="middle">TDM RFM</text>
              <text x="655" y="362" text-anchor="middle">TDM CAT</text>
              <text x="614" y="486" text-anchor="middle">CDM CSM</text>
              <text x="512" y="528" text-anchor="start">ROC SIT</text>
              <text x="386" y="486" text-anchor="middle">EPM PNM</text>
              <text x="345" y="362" text-anchor="middle">OEM OCM</text>
              <text x="386" y="248" text-anchor="middle">STF PUR</text>
            </g>

            <!-- Center mesh -->
            <circle cx="500" cy="370" r="65" fill="url(#idx-md-center-fill)" stroke="rgba(96,165,250,0.4)" stroke-width="1.5"/>
            <circle cx="500" cy="370" fill="none" stroke="rgba(96,165,250,0.2)" stroke-width="1">
              <animate attributeName="r" values="62;70;62" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
            </circle>

            <!-- Inner mesh dots -->
            <g opacity="0.7">
              <circle cx="485" cy="350" r="3" fill="#60a5fa"/><circle cx="515" cy="348" r="2.5" fill="#17ead9"/>
              <circle cx="528" cy="368" r="3" fill="#a78bfa"/><circle cx="518" cy="388" r="2.5" fill="#fbbf24"/>
              <circle cx="494" cy="393" r="3" fill="#34d399"/><circle cx="473" cy="376" r="2.5" fill="#f472b6"/>
              <circle cx="478" cy="356" r="2" fill="#fb923c"/><circle cx="506" cy="362" r="2.5" fill="#f87171"/>
              <circle cx="498" cy="375" r="2" fill="#fff"/>
              <line x1="485" y1="350" x2="515" y2="348" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="515" y1="348" x2="528" y2="368" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="528" y1="368" x2="518" y2="388" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="518" y1="388" x2="494" y2="393" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="494" y1="393" x2="473" y2="376" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="473" y1="376" x2="485" y2="350" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
              <line x1="485" y1="350" x2="506" y2="362" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
              <line x1="506" y1="362" x2="528" y2="368" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
              <line x1="506" y1="362" x2="494" y2="393" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
              <line x1="498" y1="375" x2="518" y2="388" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
              <line x1="498" y1="375" x2="478" y2="356" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
              <line x1="478" y1="356" x2="506" y2="362" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
            </g>

            <!-- Center label -->
            <text x="500" y="362" text-anchor="middle" fill="white" font-family="'Inter', sans-serif" font-size="27" font-weight="700" letter-spacing="1.5">SDN</text>
            <text x="500" y="386" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-family="'Inter', sans-serif" font-size="18" font-weight="400" letter-spacing="0.3">IPFS / libp2p</text>

            <!-- Satellites (top, amber) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="500" cy="100" r="34" fill="rgba(30,30,35,0.9)" stroke="#fbbf24" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out infinite;"/>
              <g transform="translate(500,100)" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="-14" y="-4" width="10" height="8" rx="1"/><rect x="4" y="-4" width="10" height="8" rx="1"/>
                <line x1="-4" y1="0" x2="4" y2="0"/><circle cx="0" cy="0" r="2.5" fill="#fbbf24" stroke="none"/>
              </g>
            </g>
            <text x="500" y="154" text-anchor="middle" fill="#fbbf24" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Satellites</text>
            <text x="500" y="170" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">LEO / MEO / GEO</text>

            <!-- Space Sensors (top-right, violet) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="690" cy="173" r="34" fill="rgba(30,30,35,0.9)" stroke="#a78bfa" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 0.4s infinite;"/>
              <g transform="translate(690,173)" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round">
                <circle cx="0" cy="-4" r="8"/><circle cx="0" cy="-4" r="3" fill="rgba(167,139,250,0.3)"/>
                <circle cx="0" cy="-4" r="1" fill="#a78bfa" stroke="none"/>
                <line x1="0" y1="4" x2="0" y2="12"/><line x1="-5" y1="12" x2="5" y2="12"/>
              </g>
            </g>
            <text x="690" y="227" text-anchor="middle" fill="#a78bfa" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Space Sensors</text>
            <text x="690" y="243" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">SSA / SDA</text>

            <!-- Ground Sensors (right, teal) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="770" cy="370" r="34" fill="rgba(30,30,35,0.9)" stroke="#17ead9" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 0.8s infinite;"/>
              <g transform="translate(770,370)" fill="none" stroke="#17ead9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M-10,-2 Q0,-14 10,-2"/><line x1="0" y1="-6" x2="0" y2="8"/>
                <circle cx="0" cy="-6" r="2" fill="#17ead9" stroke="none"/>
                <line x1="-7" y1="8" x2="7" y2="8"/><line x1="-5" y1="12" x2="5" y2="12"/>
              </g>
            </g>
            <text x="770" y="424" text-anchor="middle" fill="#17ead9" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Ground Sensors</text>
            <text x="770" y="440" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">Radar / Optical / RF</text>

            <!-- Ops Centers (bottom-right, blue) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="690" cy="557" r="34" fill="rgba(30,30,35,0.9)" stroke="#60a5fa" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 1.2s infinite;"/>
              <g transform="translate(690,557)" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="-12" y="-9" width="24" height="15" rx="2"/>
                <line x1="-5" y1="6" x2="5" y2="6"/><line x1="0" y1="6" x2="0" y2="11"/><line x1="-6" y1="11" x2="6" y2="11"/>
                <rect x="-7" y="-5" width="5" height="4" rx="0.5" fill="rgba(96,165,250,0.3)"/>
                <rect x="2" y="-5" width="5" height="4" rx="0.5" fill="rgba(96,165,250,0.3)"/>
              </g>
            </g>
            <text x="690" y="611" text-anchor="middle" fill="#60a5fa" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Ops Centers</text>
            <text x="690" y="627" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">CSpOC / ESOC / TsUP / CNSA / JAXA</text>

            <!-- Data Consumers (bottom, green) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="500" cy="640" r="34" fill="rgba(30,30,35,0.9)" stroke="#34d399" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 1.6s infinite;"/>
              <g transform="translate(500,640)" fill="none" stroke="#34d399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="-11" y="-11" width="22" height="22" rx="2"/>
                <polyline points="-7,7 -3,-1 1,4 5,-3 8,-7"/>
                <circle cx="8" cy="-7" r="1.5" fill="#34d399" stroke="none"/>
              </g>
            </g>
            <text x="500" y="694" text-anchor="middle" fill="#34d399" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Data Consumers</text>
            <text x="500" y="710" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">Analysts / Researchers / Insurers</text>

            <!-- Commercial (bottom-left, pink) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="310" cy="557" r="34" fill="rgba(30,30,35,0.9)" stroke="#f472b6" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 2.0s infinite;"/>
              <g transform="translate(310,557)" fill="none" stroke="#f472b6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0,-14 C7,-10 7,0 4,6"/><path d="M0,-14 C-7,-10 -7,0 -4,6"/>
                <path d="M-4,6 L-8,12"/><path d="M4,6 L8,12"/><path d="M-1,6 L1,6"/>
                <circle cx="0" cy="-6" r="2" fill="#f472b6" stroke="none"/>
              </g>
            </g>
            <text x="310" y="611" text-anchor="middle" fill="#f472b6" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Commercial</text>
            <text x="310" y="627" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">Launch / Comms / EO</text>

            <!-- Independent (left, orange) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="230" cy="370" r="34" fill="rgba(30,30,35,0.9)" stroke="#fb923c" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 2.4s infinite;"/>
              <g transform="translate(230,370)" fill="none" stroke="#fb923c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="-4" cy="-8" r="4"/><path d="M-4,-4 L-4,4"/>
                <path d="M-4,4 L-9,12"/><path d="M-4,4 L1,12"/>
                <path d="M-4,-1 L4,-5"/><path d="M4,-5 L8,-9"/>
                <circle cx="9" cy="-10" r="2.5" fill="rgba(251,146,60,0.4)" stroke="#fb923c"/>
              </g>
            </g>
            <text x="230" y="424" text-anchor="middle" fill="#fb923c" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Independent</text>
            <text x="230" y="440" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">CubeSats / Universities</text>

            <!-- Marketplace (top-left, red) -->
            <g filter="url(#idx-md-glow)">
              <circle cx="310" cy="173" r="34" fill="rgba(30,30,35,0.9)" stroke="#f87171" stroke-width="1.5" opacity="0.8" style="animation: idx-md-pulse 3s ease-in-out 2.8s infinite;"/>
              <g transform="translate(310,173)" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round">
                <path d="M-9,-4 L9,-4"/><path d="M5,-8 L9,-4 L5,0"/>
                <path d="M9,4 L-9,4"/><path d="M-5,0 L-9,4 L-5,8"/>
              </g>
            </g>
            <text x="310" y="227" text-anchor="middle" fill="#f87171" font-family="'Inter', sans-serif" font-size="18" font-weight="600">Marketplace</text>
            <text x="310" y="243" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-family="'Inter', sans-serif" font-size="14">Buy / Sell / Subscribe</text>
          </svg>
      </div>
    </div>
  </div>
</section>

<section id="cta" class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">Ready to get started?</h2>
      <p class="cta-subtitle">
        Explore all available schemas, download packages for your language, or contribute on GitHub
      </p>
      <div class="cta-actions">
        <a href="/schemas" use:link class="btn btn-accent">Explore Schemas</a>
        <a href="/download" use:link class="btn btn-primary">Download All</a>
        <a href="/docs" use:link class="btn btn-primary">Documentation</a>
      </div>
    </div>
  </div>
</section>

<footer class="landing-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-links">
        <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.npmjs.com/package/spacedatastandards.org" target="_blank" rel="noopener">npm</a>
        <a href="https://digitalarsenal.github.io/space-data-network/" target="_blank" rel="noopener">Space Data Network</a>
        <a href="https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/" target="_blank" rel="noopener">GitBook Docs</a>
      </div>
      <p class="footer-copy">
        Apache 2.0 License &middot; Built for the space community
      </p>
    </div>
  </div>
</footer>

<style>
  .starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #030308;
  }

  .ci-badges {
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ci-badges a {
    display: inline-flex;
    transition: transform 0.2s, opacity 0.2s;
  }

  .ci-badges a:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  .ci-badges img {
    height: 22px;
    border-radius: 4px;
  }

  .schema-badge-row {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  .schema-badge-row a {
    display: inline-flex;
    transition: transform 0.2s, opacity 0.2s;
  }

  .schema-badge-row a:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  .schema-badge-row img {
    height: 32px;
    border-radius: 6px;
  }

  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 120px 24px 80px;
    position: relative;
  }

  .hero-title {
    font-size: clamp(40px, 8vw, 72px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
    max-width: 900px;
    background: linear-gradient(135deg, #ffffff 0%, #b8c6ff 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 400;
    color: var(--text-secondary);
    max-width: 750px;
    margin-bottom: 40px;
    line-height: 1.7;
  }

  .inline-link {
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }

  .inline-link:hover {
    border-bottom-color: var(--accent);
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  section {
    padding: 100px 24px;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* About Section */
  .about-section {
    background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.03) 50%, transparent 100%);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .about-text {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 20px;
  }

  .about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stat-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    backdrop-filter: blur(20px);
  }

  .stat-number {
    font-size: 36px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent) 0%, #17ead9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 14px;
    color: var(--text-secondary);
    margin-top: 4px;
  }

  /* FlatBuffers Section */
  .flatbuffers-section {
    background: linear-gradient(180deg, transparent 0%, rgba(17, 234, 217, 0.02) 50%, transparent 100%);
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .comparison-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 20px;
    padding: 28px;
    backdrop-filter: blur(20px);
  }

  .comparison-card.highlight {
    border-color: var(--accent);
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.15);
  }

  .comparison-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .comparison-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .comparison-list li {
    padding: 8px 0;
    font-size: 14px;
    color: var(--text-secondary);
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .check { color: #38ef7d; font-weight: bold; }
  .cross { color: #f5576c; font-weight: bold; }
  .neutral { color: #f7971e; font-weight: bold; }

  /* Legacy Section */
  .legacy-section {
    background: linear-gradient(180deg, transparent 0%, rgba(247, 151, 30, 0.02) 50%, transparent 100%);
  }

  .legacy-table {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(20px);
  }

  .legacy-header, .legacy-row {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 16px 24px;
    gap: 20px;
  }

  .legacy-header {
    background: rgba(255, 255, 255, 0.02);
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--ui-border);
  }

  .legacy-row {
    border-bottom: 1px solid var(--ui-border);
  }

  .legacy-row:last-child {
    border-bottom: none;
  }

  .legacy-name {
    font-family: 'JetBrains Mono', monospace;
    color: var(--text-primary);
  }

  .legacy-desc {
    color: var(--text-secondary);
  }

  .legacy-replacement a {
    color: var(--accent);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    padding: 28px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    transform: translateY(-4px);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .feature-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.9;
    border-radius: inherit;
  }

  .feature-icon :global(svg) {
    width: 24px;
    height: 24px;
    color: #fff;
    position: relative;
    z-index: 1;
  }

  .icon-blue::before { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  .icon-cyan::before { background: linear-gradient(135deg, #17ead9 0%, #6078ea 100%); }
  .icon-green::before { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
  .icon-orange::before { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
  .icon-purple::before { background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%); }
  .icon-gold::before { background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%); }
  .icon-teal::before { background: linear-gradient(135deg, #00c8aa 0%, #17ead9 100%); }

  .feature-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .feature-desc {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .feature-schemas {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .schema-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    padding: 4px 10px;
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 6px;
    color: var(--accent);
    text-decoration: none;
    transition: all 0.2s;
  }

  .schema-tag:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: var(--accent);
  }

  /* Code Section */
  .code-section {
    background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.03) 50%, transparent 100%);
  }

  .quickstart-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .lang-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    justify-content: center;
  }

  .lang-tab {
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .lang-tab:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
    color: var(--text-primary);
  }

  .lang-tab.active {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }

  .quickstart-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .code-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }

  .code-block {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
  }

  .code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: #161b22;
    border-bottom: 1px solid #30363d;
  }

  .code-lang {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: #8b949e;
    text-transform: uppercase;
  }

  .code-title {
    font-size: 13px;
    color: #c9d1d9;
  }

  .code-block pre {
    margin: 0;
    padding: 16px;
    overflow-x: auto;
    max-height: 500px;
  }

  .code-block code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: #c9d1d9;
  }

  /* Languages Grid */
  .languages-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
  }

  .lang-card {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 12px 20px;
    backdrop-filter: blur(20px);
    transition: all 0.2s;
  }

  .lang-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .lang-name {
    font-size: 14px;
    font-weight: 500;
  }

  .formats-note {
    text-align: center;
    color: var(--text-secondary);
    font-size: 15px;
    max-width: 700px;
    margin: 0 auto;
  }

  .formats-note code {
    font-family: 'JetBrains Mono', monospace;
    background: rgba(102, 126, 234, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
  }

  /* SDN Section */
  .sdn-section {
    background: linear-gradient(180deg, transparent 0%, rgba(17, 153, 142, 0.03) 50%, transparent 100%);
  }

  .sdn-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .sdn-features {
    list-style: none;
    padding: 0;
    margin: 24px 0;
  }

  .sdn-features li {
    padding: 10px 0;
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .sdn-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .master-diagram-compact {
    width: 100%;
    max-height: 450px;
    display: block;
  }

  @keyframes idx-md-dash {
    to { stroke-dashoffset: -30; }
  }

  @keyframes idx-md-dash-rev {
    to { stroke-dashoffset: 30; }
  }

  @keyframes idx-md-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 28px;
    backdrop-filter: blur(20px);
    transition: all 0.2s ease;
    cursor: pointer;
    border: 1px solid var(--ui-border);
    text-decoration: none;
  }

  .btn-primary {
    background: var(--ui-bg);
    color: var(--text-primary);
  }

  .btn-primary:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .btn-accent {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    color: white;
    border: none;
  }

  .btn-accent:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  }

  /* CTA Section */
  .cta-section {
    padding: 120px 24px;
  }

  .cta-content {
    text-align: center;
  }

  .cta-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    margin-bottom: 16px;
  }

  .cta-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  .cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Footer */
  .landing-footer {
    padding: 40px 24px;
    border-top: 1px solid var(--ui-border);
  }

  .footer-content {
    text-align: center;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--accent);
  }

  .footer-copy {
    font-size: 13px;
    color: var(--text-secondary);
    opacity: 0.7;
  }

  @media (max-width: 968px) {
    .about-grid, .sdn-content, .code-grid {
      grid-template-columns: 1fr;
    }

    .about-stats {
      order: -1;
    }

    .sdn-diagram {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 100px 20px 60px;
    }

    section {
      padding: 60px 20px;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .legacy-header, .legacy-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .legacy-header {
      display: none;
    }

    .code-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
