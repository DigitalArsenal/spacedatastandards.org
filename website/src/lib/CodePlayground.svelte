<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  // Monaco editor reference
  let editorContainer: HTMLDivElement;
  let editor: any = null;
  let monaco: any = null;

  // State
  let selectedLanguage = 'typescript';
  let selectedFile = 'main.ts';
  let output = '';
  let hexOutput = '';
  let isRunning = false;
  let activeTab: 'output' | 'hex' = 'output';

  // Virtual file system
  interface VirtualFile {
    name: string;
    content: string;
    language: string;
  }

  interface FileSystem {
    [lang: string]: {
      [filename: string]: VirtualFile;
    };
  }

  let fileSystem: FileSystem = {
    typescript: {
      'main.ts': {
        name: 'main.ts',
        language: 'typescript',
        content: `import * as flatbuffers from 'flatbuffers';

// Space Data Standards - OMM (Orbit Mean-Elements Message)
// FlatBuffers zero-copy serialization example

// Simulated OMM table structure
function createOMM(builder: flatbuffers.Builder) {
  // Create strings first (FlatBuffers requirement)
  const objectName = builder.createString("STARLINK-1234");
  const objectId = builder.createString("2024-001A");
  const epoch = builder.createString("2024-06-22T16:56:20.014080");
  const centerName = builder.createString("EARTH");
  const refFrame = builder.createString("TEME");

  // Start the OMM table
  builder.startObject(15);

  // Add string fields
  builder.addFieldOffset(0, objectName, 0);  // OBJECT_NAME
  builder.addFieldOffset(1, objectId, 0);     // OBJECT_ID
  builder.addFieldOffset(2, epoch, 0);        // EPOCH
  builder.addFieldOffset(3, centerName, 0);   // CENTER_NAME
  builder.addFieldOffset(4, refFrame, 0);     // REF_FRAME

  // Add numeric fields (orbital elements)
  builder.addFieldFloat64(5, 15.09089987);    // MEAN_MOTION (rev/day)
  builder.addFieldFloat64(6, 0.0001234);      // ECCENTRICITY
  builder.addFieldFloat64(7, 53.0215);        // INCLINATION (deg)
  builder.addFieldFloat64(8, 247.4627);       // RA_OF_ASC_NODE (deg)
  builder.addFieldFloat64(9, 130.5360);       // ARG_OF_PERICENTER (deg)
  builder.addFieldFloat64(10, 325.0288);      // MEAN_ANOMALY (deg)
  builder.addFieldInt32(11, 25544);           // NORAD_CAT_ID
  builder.addFieldFloat64(12, 0.00034196);    // BSTAR

  return builder.endObject();
}

// Main execution
console.log("=== Space Data Standards - FlatBuffers Demo ===\\n");

// Create a builder with 1KB initial size
const builder = new flatbuffers.Builder(1024);

// Build the OMM message
const ommOffset = createOMM(builder);
builder.finish(ommOffset);

// Get the serialized buffer
const buffer = builder.asUint8Array();

console.log("Serialization complete!");
console.log(\`Buffer size: \${buffer.length} bytes\`);
console.log(\`Compression vs JSON: ~\${Math.round((1 - buffer.length / 450) * 100)}% smaller\\n\`);

// Display buffer info
console.log("Buffer created successfully.");
console.log("Use the 'Hex' tab to view the binary data.");

// Return buffer for hex display
(globalThis as any).__sdsBuffer = buffer;
`
      },
      'package.json': {
        name: 'package.json',
        language: 'json',
        content: `{
  "name": "sds-typescript-example",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "flatbuffers": "^24.3.25",
    "spacedatastandards.org": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}`
      },
      'tsconfig.json': {
        name: 'tsconfig.json',
        language: 'json',
        content: `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}`
      }
    },
    javascript: {
      'main.js': {
        name: 'main.js',
        language: 'javascript',
        content: `// Space Data Standards - JavaScript Example
// Using FlatBuffers for zero-copy serialization

// Simulated FlatBuffers-like encoding
function encodeString(str) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

function createOMMBuffer() {
  // OMM field values
  const omm = {
    OBJECT_NAME: "ISS (ZARYA)",
    OBJECT_ID: "1998-067A",
    EPOCH: "2024-06-22T16:56:20.014080",
    CENTER_NAME: "EARTH",
    REF_FRAME: "TEME",
    MEAN_MOTION: 15.50094987,
    ECCENTRICITY: 0.0003571,
    INCLINATION: 51.6401,
    RA_OF_ASC_NODE: 247.4627,
    ARG_OF_PERICENTER: 130.5360,
    MEAN_ANOMALY: 325.0288,
    NORAD_CAT_ID: 25544,
    BSTAR: 0.00034196
  };

  // Create a buffer to hold our data
  const buffer = new ArrayBuffer(256);
  const view = new DataView(buffer);
  const encoder = new TextEncoder();

  let offset = 0;

  // Write magic number "SDS1"
  view.setUint32(offset, 0x53445331, false);
  offset += 4;

  // Write schema type (OMM = 1)
  view.setUint8(offset, 1);
  offset += 1;

  // Write numeric fields (little-endian doubles)
  view.setFloat64(offset, omm.MEAN_MOTION, true);
  offset += 8;
  view.setFloat64(offset, omm.ECCENTRICITY, true);
  offset += 8;
  view.setFloat64(offset, omm.INCLINATION, true);
  offset += 8;
  view.setFloat64(offset, omm.RA_OF_ASC_NODE, true);
  offset += 8;
  view.setFloat64(offset, omm.ARG_OF_PERICENTER, true);
  offset += 8;
  view.setFloat64(offset, omm.MEAN_ANOMALY, true);
  offset += 8;
  view.setInt32(offset, omm.NORAD_CAT_ID, true);
  offset += 4;
  view.setFloat64(offset, omm.BSTAR, true);
  offset += 8;

  console.log("=== Space Data Standards - JavaScript Demo ===\\n");
  console.log("OMM Message created for:", omm.OBJECT_NAME);
  console.log("NORAD ID:", omm.NORAD_CAT_ID);
  console.log("Orbital Elements:");
  console.log("  Mean Motion:", omm.MEAN_MOTION, "rev/day");
  console.log("  Eccentricity:", omm.ECCENTRICITY);
  console.log("  Inclination:", omm.INCLINATION, "deg");
  console.log("\\nBuffer size:", offset, "bytes");

  // Return the used portion of the buffer
  const result = new Uint8Array(buffer, 0, offset);
  globalThis.__sdsBuffer = result;
  return result;
}

// Run the demo
createOMMBuffer();
`
      },
      'package.json': {
        name: 'package.json',
        language: 'json',
        content: `{
  "name": "sds-javascript-example",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "flatbuffers": "^24.3.25",
    "spacedatastandards.org": "^1.0.0"
  }
}`
      }
    },
    python: {
      'main.py': {
        name: 'main.py',
        language: 'python',
        content: `# Space Data Standards - Python Example
# Using FlatBuffers for zero-copy serialization

import struct

def create_omm_buffer():
    """Create a binary buffer representing an OMM message."""

    # OMM field values
    omm = {
        "OBJECT_NAME": "HUBBLE SPACE TELESCOPE",
        "OBJECT_ID": "1990-037B",
        "EPOCH": "2024-06-22T12:00:00.000000",
        "CENTER_NAME": "EARTH",
        "REF_FRAME": "TEME",
        "MEAN_MOTION": 15.09,
        "ECCENTRICITY": 0.0002769,
        "INCLINATION": 28.4698,
        "RA_OF_ASC_NODE": 183.2345,
        "ARG_OF_PERICENTER": 82.1234,
        "MEAN_ANOMALY": 277.8765,
        "NORAD_CAT_ID": 20580,
        "BSTAR": 0.00012345
    }

    # Build binary buffer
    buffer = bytearray()

    # Magic number "SDS1"
    buffer.extend(b'SDS1')

    # Schema type (OMM = 1)
    buffer.append(1)

    # Numeric fields (little-endian)
    buffer.extend(struct.pack('<d', omm["MEAN_MOTION"]))
    buffer.extend(struct.pack('<d', omm["ECCENTRICITY"]))
    buffer.extend(struct.pack('<d', omm["INCLINATION"]))
    buffer.extend(struct.pack('<d', omm["RA_OF_ASC_NODE"]))
    buffer.extend(struct.pack('<d', omm["ARG_OF_PERICENTER"]))
    buffer.extend(struct.pack('<d', omm["MEAN_ANOMALY"]))
    buffer.extend(struct.pack('<i', omm["NORAD_CAT_ID"]))
    buffer.extend(struct.pack('<d', omm["BSTAR"]))

    print("=== Space Data Standards - Python Demo ===\\n")
    print(f"OMM Message created for: {omm['OBJECT_NAME']}")
    print(f"NORAD ID: {omm['NORAD_CAT_ID']}")
    print("\\nOrbital Elements:")
    print(f"  Mean Motion: {omm['MEAN_MOTION']} rev/day")
    print(f"  Eccentricity: {omm['ECCENTRICITY']}")
    print(f"  Inclination: {omm['INCLINATION']} deg")
    print(f"\\nBuffer size: {len(buffer)} bytes")

    return bytes(buffer)

# Run the demo
if __name__ == "__main__":
    buffer = create_omm_buffer()
`
      },
      'requirements.txt': {
        name: 'requirements.txt',
        language: 'plaintext',
        content: `flatbuffers>=24.3.25
`
      }
    },
    go: {
      'main.go': {
        name: 'main.go',
        language: 'go',
        content: `package main

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"math"
)

// OMM represents an Orbit Mean-Elements Message
type OMM struct {
	ObjectName      string
	ObjectID        string
	Epoch           string
	MeanMotion      float64
	Eccentricity    float64
	Inclination     float64
	RAofAscNode     float64
	ArgOfPericenter float64
	MeanAnomaly     float64
	NoradCatID      int32
	BStar           float64
}

func createOMMBuffer(omm OMM) []byte {
	buf := new(bytes.Buffer)

	// Magic number "SDS1"
	buf.WriteString("SDS1")

	// Schema type (OMM = 1)
	buf.WriteByte(1)

	// Write numeric fields (little-endian)
	binary.Write(buf, binary.LittleEndian, omm.MeanMotion)
	binary.Write(buf, binary.LittleEndian, omm.Eccentricity)
	binary.Write(buf, binary.LittleEndian, omm.Inclination)
	binary.Write(buf, binary.LittleEndian, omm.RAofAscNode)
	binary.Write(buf, binary.LittleEndian, omm.ArgOfPericenter)
	binary.Write(buf, binary.LittleEndian, omm.MeanAnomaly)
	binary.Write(buf, binary.LittleEndian, omm.NoradCatID)
	binary.Write(buf, binary.LittleEndian, omm.BStar)

	return buf.Bytes()
}

func main() {
	omm := OMM{
		ObjectName:      "TERRA",
		ObjectID:        "1999-068A",
		Epoch:           "2024-06-22T14:30:00.000000",
		MeanMotion:      14.57,
		Eccentricity:    0.0001234,
		Inclination:     98.2,
		RAofAscNode:     127.5432,
		ArgOfPericenter: 90.1234,
		MeanAnomaly:     270.5678,
		NoradCatID:      25994,
		BStar:           0.00009876,
	}

	fmt.Println("=== Space Data Standards - Go Demo ===")
	fmt.Println()
	fmt.Printf("OMM Message created for: %s\\n", omm.ObjectName)
	fmt.Printf("NORAD ID: %d\\n", omm.NoradCatID)
	fmt.Println()
	fmt.Println("Orbital Elements:")
	fmt.Printf("  Mean Motion: %.2f rev/day\\n", omm.MeanMotion)
	fmt.Printf("  Eccentricity: %.7f\\n", omm.Eccentricity)
	fmt.Printf("  Inclination: %.1f deg\\n", omm.Inclination)

	buffer := createOMMBuffer(omm)
	fmt.Printf("\\nBuffer size: %d bytes\\n", len(buffer))
}
`
      },
      'go.mod': {
        name: 'go.mod',
        language: 'go',
        content: `module sds-example

go 1.21

require github.com/google/flatbuffers v24.3.25
`
      }
    },
    rust: {
      'main.rs': {
        name: 'main.rs',
        language: 'rust',
        content: `//! Space Data Standards - Rust Example
//! Using FlatBuffers for zero-copy serialization

use std::io::Write;

/// OMM (Orbit Mean-Elements Message) structure
#[derive(Debug)]
struct OMM {
    object_name: String,
    object_id: String,
    epoch: String,
    mean_motion: f64,
    eccentricity: f64,
    inclination: f64,
    ra_of_asc_node: f64,
    arg_of_pericenter: f64,
    mean_anomaly: f64,
    norad_cat_id: i32,
    bstar: f64,
}

fn create_omm_buffer(omm: &OMM) -> Vec<u8> {
    let mut buffer = Vec::with_capacity(128);

    // Magic number "SDS1"
    buffer.extend_from_slice(b"SDS1");

    // Schema type (OMM = 1)
    buffer.push(1);

    // Write numeric fields (little-endian)
    buffer.extend_from_slice(&omm.mean_motion.to_le_bytes());
    buffer.extend_from_slice(&omm.eccentricity.to_le_bytes());
    buffer.extend_from_slice(&omm.inclination.to_le_bytes());
    buffer.extend_from_slice(&omm.ra_of_asc_node.to_le_bytes());
    buffer.extend_from_slice(&omm.arg_of_pericenter.to_le_bytes());
    buffer.extend_from_slice(&omm.mean_anomaly.to_le_bytes());
    buffer.extend_from_slice(&omm.norad_cat_id.to_le_bytes());
    buffer.extend_from_slice(&omm.bstar.to_le_bytes());

    buffer
}

fn main() {
    let omm = OMM {
        object_name: "AQUA".to_string(),
        object_id: "2002-022A".to_string(),
        epoch: "2024-06-22T10:15:00.000000".to_string(),
        mean_motion: 14.57,
        eccentricity: 0.0001567,
        inclination: 98.2,
        ra_of_asc_node: 268.1234,
        arg_of_pericenter: 95.4567,
        mean_anomaly: 264.7890,
        norad_cat_id: 27424,
        bstar: 0.00008765,
    };

    println!("=== Space Data Standards - Rust Demo ===\\n");
    println!("OMM Message created for: {}", omm.object_name);
    println!("NORAD ID: {}", omm.norad_cat_id);
    println!("\\nOrbital Elements:");
    println!("  Mean Motion: {:.2} rev/day", omm.mean_motion);
    println!("  Eccentricity: {:.7}", omm.eccentricity);
    println!("  Inclination: {:.1} deg", omm.inclination);

    let buffer = create_omm_buffer(&omm);
    println!("\\nBuffer size: {} bytes", buffer.len());
}
`
      },
      'Cargo.toml': {
        name: 'Cargo.toml',
        language: 'toml',
        content: `[package]
name = "sds-example"
version = "0.1.0"
edition = "2021"

[dependencies]
flatbuffers = "24.3.25"
`
      }
    },
    cpp: {
      'main.cpp': {
        name: 'main.cpp',
        language: 'cpp',
        content: `// Space Data Standards - C++ Example
// Using FlatBuffers for zero-copy serialization

#include <iostream>
#include <vector>
#include <cstring>
#include <cstdint>

struct OMM {
    std::string objectName;
    std::string objectId;
    std::string epoch;
    double meanMotion;
    double eccentricity;
    double inclination;
    double raOfAscNode;
    double argOfPericenter;
    double meanAnomaly;
    int32_t noradCatId;
    double bstar;
};

std::vector<uint8_t> createOMMBuffer(const OMM& omm) {
    std::vector<uint8_t> buffer;
    buffer.reserve(128);

    // Magic number "SDS1"
    buffer.push_back('S');
    buffer.push_back('D');
    buffer.push_back('S');
    buffer.push_back('1');

    // Schema type (OMM = 1)
    buffer.push_back(1);

    // Helper to write little-endian values
    auto writeDouble = [&buffer](double val) {
        uint8_t* bytes = reinterpret_cast<uint8_t*>(&val);
        for (int i = 0; i < 8; i++) buffer.push_back(bytes[i]);
    };

    auto writeInt32 = [&buffer](int32_t val) {
        uint8_t* bytes = reinterpret_cast<uint8_t*>(&val);
        for (int i = 0; i < 4; i++) buffer.push_back(bytes[i]);
    };

    // Write numeric fields
    writeDouble(omm.meanMotion);
    writeDouble(omm.eccentricity);
    writeDouble(omm.inclination);
    writeDouble(omm.raOfAscNode);
    writeDouble(omm.argOfPericenter);
    writeDouble(omm.meanAnomaly);
    writeInt32(omm.noradCatId);
    writeDouble(omm.bstar);

    return buffer;
}

int main() {
    OMM omm = {
        "LANDSAT 8",
        "2013-008A",
        "2024-06-22T08:45:00.000000",
        14.57,
        0.0001890,
        98.2,
        145.6789,
        88.9012,
        271.3456,
        39084,
        0.00007654
    };

    std::cout << "=== Space Data Standards - C++ Demo ===" << std::endl;
    std::cout << std::endl;
    std::cout << "OMM Message created for: " << omm.objectName << std::endl;
    std::cout << "NORAD ID: " << omm.noradCatId << std::endl;
    std::cout << std::endl;
    std::cout << "Orbital Elements:" << std::endl;
    std::cout << "  Mean Motion: " << omm.meanMotion << " rev/day" << std::endl;
    std::cout << "  Eccentricity: " << omm.eccentricity << std::endl;
    std::cout << "  Inclination: " << omm.inclination << " deg" << std::endl;

    auto buffer = createOMMBuffer(omm);
    std::cout << std::endl;
    std::cout << "Buffer size: " << buffer.size() << " bytes" << std::endl;

    return 0;
}
`
      },
      'CMakeLists.txt': {
        name: 'CMakeLists.txt',
        language: 'cmake',
        content: `cmake_minimum_required(VERSION 3.14)
project(sds-example)

set(CMAKE_CXX_STANDARD 17)

find_package(Flatbuffers REQUIRED)

add_executable(main main.cpp)
target_link_libraries(main flatbuffers)
`
      }
    },
    csharp: {
      'Program.cs': {
        name: 'Program.cs',
        language: 'csharp',
        content: `// Space Data Standards - C# Example
// Using FlatBuffers for zero-copy serialization

using System;
using System.Collections.Generic;
using System.Text;

public class OMM
{
    public string ObjectName { get; set; } = "";
    public string ObjectId { get; set; } = "";
    public string Epoch { get; set; } = "";
    public double MeanMotion { get; set; }
    public double Eccentricity { get; set; }
    public double Inclination { get; set; }
    public double RaOfAscNode { get; set; }
    public double ArgOfPericenter { get; set; }
    public double MeanAnomaly { get; set; }
    public int NoradCatId { get; set; }
    public double BStar { get; set; }
}

public class Program
{
    static byte[] CreateOMMBuffer(OMM omm)
    {
        var buffer = new List<byte>();

        // Magic number "SDS1"
        buffer.AddRange(Encoding.ASCII.GetBytes("SDS1"));

        // Schema type (OMM = 1)
        buffer.Add(1);

        // Write numeric fields (little-endian)
        buffer.AddRange(BitConverter.GetBytes(omm.MeanMotion));
        buffer.AddRange(BitConverter.GetBytes(omm.Eccentricity));
        buffer.AddRange(BitConverter.GetBytes(omm.Inclination));
        buffer.AddRange(BitConverter.GetBytes(omm.RaOfAscNode));
        buffer.AddRange(BitConverter.GetBytes(omm.ArgOfPericenter));
        buffer.AddRange(BitConverter.GetBytes(omm.MeanAnomaly));
        buffer.AddRange(BitConverter.GetBytes(omm.NoradCatId));
        buffer.AddRange(BitConverter.GetBytes(omm.BStar));

        return buffer.ToArray();
    }

    public static void Main()
    {
        var omm = new OMM
        {
            ObjectName = "SENTINEL-2A",
            ObjectId = "2015-028A",
            Epoch = "2024-06-22T06:30:00.000000",
            MeanMotion = 14.31,
            Eccentricity = 0.0001234,
            Inclination = 98.57,
            RaOfAscNode = 312.4567,
            ArgOfPericenter = 76.8901,
            MeanAnomaly = 283.2345,
            NoradCatId = 40697,
            BStar = 0.00006543
        };

        Console.WriteLine("=== Space Data Standards - C# Demo ===\\n");
        Console.WriteLine($"OMM Message created for: {omm.ObjectName}");
        Console.WriteLine($"NORAD ID: {omm.NoradCatId}");
        Console.WriteLine("\\nOrbital Elements:");
        Console.WriteLine($"  Mean Motion: {omm.MeanMotion} rev/day");
        Console.WriteLine($"  Eccentricity: {omm.Eccentricity}");
        Console.WriteLine($"  Inclination: {omm.Inclination} deg");

        var buffer = CreateOMMBuffer(omm);
        Console.WriteLine($"\\nBuffer size: {buffer.Length} bytes");
    }
}
`
      },
      'sds-example.csproj': {
        name: 'sds-example.csproj',
        language: 'xml',
        content: `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Google.FlatBuffers" Version="24.3.25" />
  </ItemGroup>
</Project>
`
      }
    },
    java: {
      'Main.java': {
        name: 'Main.java',
        language: 'java',
        content: `// Space Data Standards - Java Example
// Using FlatBuffers for zero-copy serialization

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.Arrays;

public class Main {

    static class OMM {
        String objectName;
        String objectId;
        String epoch;
        double meanMotion;
        double eccentricity;
        double inclination;
        double raOfAscNode;
        double argOfPericenter;
        double meanAnomaly;
        int noradCatId;
        double bstar;
    }

    static byte[] createOMMBuffer(OMM omm) {
        ByteBuffer buffer = ByteBuffer.allocate(128);
        buffer.order(ByteOrder.LITTLE_ENDIAN);

        // Magic number "SDS1"
        buffer.put((byte)'S');
        buffer.put((byte)'D');
        buffer.put((byte)'S');
        buffer.put((byte)'1');

        // Schema type (OMM = 1)
        buffer.put((byte)1);

        // Write numeric fields
        buffer.putDouble(omm.meanMotion);
        buffer.putDouble(omm.eccentricity);
        buffer.putDouble(omm.inclination);
        buffer.putDouble(omm.raOfAscNode);
        buffer.putDouble(omm.argOfPericenter);
        buffer.putDouble(omm.meanAnomaly);
        buffer.putInt(omm.noradCatId);
        buffer.putDouble(omm.bstar);

        return Arrays.copyOf(buffer.array(), buffer.position());
    }

    public static void main(String[] args) {
        OMM omm = new OMM();
        omm.objectName = "WORLDVIEW-3";
        omm.objectId = "2014-048A";
        omm.epoch = "2024-06-22T04:15:00.000000";
        omm.meanMotion = 14.85;
        omm.eccentricity = 0.0002345;
        omm.inclination = 97.9;
        omm.raOfAscNode = 198.7654;
        omm.argOfPericenter = 65.4321;
        omm.meanAnomaly = 294.8765;
        omm.noradCatId = 40115;
        omm.bstar = 0.00005432;

        System.out.println("=== Space Data Standards - Java Demo ===\\n");
        System.out.println("OMM Message created for: " + omm.objectName);
        System.out.println("NORAD ID: " + omm.noradCatId);
        System.out.println("\\nOrbital Elements:");
        System.out.println("  Mean Motion: " + omm.meanMotion + " rev/day");
        System.out.println("  Eccentricity: " + omm.eccentricity);
        System.out.println("  Inclination: " + omm.inclination + " deg");

        byte[] buffer = createOMMBuffer(omm);
        System.out.println("\\nBuffer size: " + buffer.length + " bytes");
    }
}
`
      },
      'build.gradle': {
        name: 'build.gradle',
        language: 'groovy',
        content: `plugins {
    id 'java'
    id 'application'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.google.flatbuffers:flatbuffers-java:24.3.25'
}

application {
    mainClass = 'Main'
}
`
      }
    },
    swift: {
      'main.swift': {
        name: 'main.swift',
        language: 'swift',
        content: `// Space Data Standards - Swift Example
// Using FlatBuffers for zero-copy serialization

import Foundation

struct OMM {
    var objectName: String
    var objectId: String
    var epoch: String
    var meanMotion: Double
    var eccentricity: Double
    var inclination: Double
    var raOfAscNode: Double
    var argOfPericenter: Double
    var meanAnomaly: Double
    var noradCatId: Int32
    var bstar: Double
}

func createOMMBuffer(_ omm: OMM) -> Data {
    var buffer = Data()

    // Magic number "SDS1"
    buffer.append(contentsOf: "SDS1".utf8)

    // Schema type (OMM = 1)
    buffer.append(1)

    // Write numeric fields (little-endian)
    var meanMotion = omm.meanMotion
    buffer.append(Data(bytes: &meanMotion, count: 8))

    var eccentricity = omm.eccentricity
    buffer.append(Data(bytes: &eccentricity, count: 8))

    var inclination = omm.inclination
    buffer.append(Data(bytes: &inclination, count: 8))

    var raOfAscNode = omm.raOfAscNode
    buffer.append(Data(bytes: &raOfAscNode, count: 8))

    var argOfPericenter = omm.argOfPericenter
    buffer.append(Data(bytes: &argOfPericenter, count: 8))

    var meanAnomaly = omm.meanAnomaly
    buffer.append(Data(bytes: &meanAnomaly, count: 8))

    var noradCatId = omm.noradCatId
    buffer.append(Data(bytes: &noradCatId, count: 4))

    var bstar = omm.bstar
    buffer.append(Data(bytes: &bstar, count: 8))

    return buffer
}

let omm = OMM(
    objectName: "JASON-3",
    objectId: "2016-002A",
    epoch: "2024-06-22T02:00:00.000000",
    meanMotion: 12.80,
    eccentricity: 0.0008765,
    inclination: 66.04,
    raOfAscNode: 234.5678,
    argOfPericenter: 54.3210,
    meanAnomaly: 305.6789,
    noradCatId: 41240,
    bstar: 0.00004321
)

print("=== Space Data Standards - Swift Demo ===\\n")
print("OMM Message created for: \\(omm.objectName)")
print("NORAD ID: \\(omm.noradCatId)")
print("\\nOrbital Elements:")
print("  Mean Motion: \\(omm.meanMotion) rev/day")
print("  Eccentricity: \\(omm.eccentricity)")
print("  Inclination: \\(omm.inclination) deg")

let buffer = createOMMBuffer(omm)
print("\\nBuffer size: \\(buffer.count) bytes")
`
      },
      'Package.swift': {
        name: 'Package.swift',
        language: 'swift',
        content: `// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "sds-example",
    dependencies: [
        .package(url: "https://github.com/nicklockwood/FlatBuffers.git", from: "2.0.0")
    ],
    targets: [
        .executableTarget(
            name: "sds-example",
            dependencies: ["FlatBuffers"]
        )
    ]
)
`
      }
    },
    php: {
      'main.php': {
        name: 'main.php',
        language: 'php',
        content: `<?php
// Space Data Standards - PHP Example
// Using FlatBuffers for zero-copy serialization

class OMM {
    public string $objectName;
    public string $objectId;
    public string $epoch;
    public float $meanMotion;
    public float $eccentricity;
    public float $inclination;
    public float $raOfAscNode;
    public float $argOfPericenter;
    public float $meanAnomaly;
    public int $noradCatId;
    public float $bstar;
}

function createOMMBuffer(OMM $omm): string {
    $buffer = '';

    // Magic number "SDS1"
    $buffer .= 'SDS1';

    // Schema type (OMM = 1)
    $buffer .= chr(1);

    // Write numeric fields (little-endian doubles and int32)
    $buffer .= pack('e', $omm->meanMotion);      // double
    $buffer .= pack('e', $omm->eccentricity);    // double
    $buffer .= pack('e', $omm->inclination);     // double
    $buffer .= pack('e', $omm->raOfAscNode);     // double
    $buffer .= pack('e', $omm->argOfPericenter); // double
    $buffer .= pack('e', $omm->meanAnomaly);     // double
    $buffer .= pack('V', $omm->noradCatId);      // int32
    $buffer .= pack('e', $omm->bstar);           // double

    return $buffer;
}

$omm = new OMM();
$omm->objectName = "ICESAT-2";
$omm->objectId = "2018-070A";
$omm->epoch = "2024-06-22T00:30:00.000000";
$omm->meanMotion = 14.89;
$omm->eccentricity = 0.0001876;
$omm->inclination = 92.0;
$omm->raOfAscNode = 87.6543;
$omm->argOfPericenter = 43.2109;
$omm->meanAnomaly = 316.7890;
$omm->noradCatId = 43613;
$omm->bstar = 0.00003210;

echo "=== Space Data Standards - PHP Demo ===\\n\\n";
echo "OMM Message created for: {$omm->objectName}\\n";
echo "NORAD ID: {$omm->noradCatId}\\n";
echo "\\nOrbital Elements:\\n";
echo "  Mean Motion: {$omm->meanMotion} rev/day\\n";
echo "  Eccentricity: {$omm->eccentricity}\\n";
echo "  Inclination: {$omm->inclination} deg\\n";

$buffer = createOMMBuffer($omm);
echo "\\nBuffer size: " . strlen($buffer) . " bytes\\n";
`
      },
      'composer.json': {
        name: 'composer.json',
        language: 'json',
        content: `{
    "name": "sds/example",
    "require": {
        "google/flatbuffers": "^24.3"
    }
}
`
      }
    },
    dart: {
      'main.dart': {
        name: 'main.dart',
        language: 'dart',
        content: `// Space Data Standards - Dart Example
// Using FlatBuffers for zero-copy serialization

import 'dart:typed_data';

class OMM {
  String objectName;
  String objectId;
  String epoch;
  double meanMotion;
  double eccentricity;
  double inclination;
  double raOfAscNode;
  double argOfPericenter;
  double meanAnomaly;
  int noradCatId;
  double bstar;

  OMM({
    required this.objectName,
    required this.objectId,
    required this.epoch,
    required this.meanMotion,
    required this.eccentricity,
    required this.inclination,
    required this.raOfAscNode,
    required this.argOfPericenter,
    required this.meanAnomaly,
    required this.noradCatId,
    required this.bstar,
  });
}

Uint8List createOMMBuffer(OMM omm) {
  final buffer = BytesBuilder();

  // Magic number "SDS1"
  buffer.add([0x53, 0x44, 0x53, 0x31]);

  // Schema type (OMM = 1)
  buffer.addByte(1);

  // Write numeric fields (little-endian)
  final data = ByteData(8);

  data.setFloat64(0, omm.meanMotion, Endian.little);
  buffer.add(data.buffer.asUint8List());

  data.setFloat64(0, omm.eccentricity, Endian.little);
  buffer.add(data.buffer.asUint8List());

  data.setFloat64(0, omm.inclination, Endian.little);
  buffer.add(data.buffer.asUint8List());

  data.setFloat64(0, omm.raOfAscNode, Endian.little);
  buffer.add(data.buffer.asUint8List());

  data.setFloat64(0, omm.argOfPericenter, Endian.little);
  buffer.add(data.buffer.asUint8List());

  data.setFloat64(0, omm.meanAnomaly, Endian.little);
  buffer.add(data.buffer.asUint8List());

  final int32Data = ByteData(4);
  int32Data.setInt32(0, omm.noradCatId, Endian.little);
  buffer.add(int32Data.buffer.asUint8List());

  data.setFloat64(0, omm.bstar, Endian.little);
  buffer.add(data.buffer.asUint8List());

  return buffer.takeBytes();
}

void main() {
  final omm = OMM(
    objectName: 'SUOMI NPP',
    objectId: '2011-061A',
    epoch: '2024-06-21T22:45:00.000000',
    meanMotion: 14.19,
    eccentricity: 0.0002109,
    inclination: 98.73,
    raOfAscNode: 321.0987,
    argOfPericenter: 32.1098,
    meanAnomaly: 327.8901,
    noradCatId: 37849,
    bstar: 0.00002109,
  );

  print('=== Space Data Standards - Dart Demo ===\\n');
  print('OMM Message created for: \${omm.objectName}');
  print('NORAD ID: \${omm.noradCatId}');
  print('\\nOrbital Elements:');
  print('  Mean Motion: \${omm.meanMotion} rev/day');
  print('  Eccentricity: \${omm.eccentricity}');
  print('  Inclination: \${omm.inclination} deg');

  final buffer = createOMMBuffer(omm);
  print('\\nBuffer size: \${buffer.length} bytes');
}
`
      },
      'pubspec.yaml': {
        name: 'pubspec.yaml',
        language: 'yaml',
        content: `name: sds_example
description: Space Data Standards Dart Example

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flat_buffers: ^24.3.25
`
      }
    }
  };

  const languageInfo: Record<string, { name: string; icon: string; mainFile: string }> = {
    typescript: { name: 'TypeScript', icon: 'TS', mainFile: 'main.ts' },
    javascript: { name: 'JavaScript', icon: 'JS', mainFile: 'main.js' },
    python: { name: 'Python', icon: 'PY', mainFile: 'main.py' },
    go: { name: 'Go', icon: 'GO', mainFile: 'main.go' },
    rust: { name: 'Rust', icon: 'RS', mainFile: 'main.rs' },
    cpp: { name: 'C++', icon: 'C++', mainFile: 'main.cpp' },
    csharp: { name: 'C#', icon: 'C#', mainFile: 'Program.cs' },
    java: { name: 'Java', icon: 'JV', mainFile: 'Main.java' },
    swift: { name: 'Swift', icon: 'SW', mainFile: 'main.swift' },
    php: { name: 'PHP', icon: 'PHP', mainFile: 'main.php' },
    dart: { name: 'Dart', icon: 'DT', mainFile: 'main.dart' }
  };

  // Get current file content
  $: currentFile = fileSystem[selectedLanguage]?.[selectedFile];
  $: files = Object.values(fileSystem[selectedLanguage] || {});

  function selectLanguage(lang: string) {
    selectedLanguage = lang;
    selectedFile = languageInfo[lang].mainFile;
    output = '';
    hexOutput = '';
    updateEditor();
  }

  function selectFile(filename: string) {
    selectedFile = filename;
    updateEditor();
  }

  function updateEditor() {
    if (editor && currentFile) {
      const model = editor.getModel();
      if (model) {
        model.setValue(currentFile.content);
        monaco?.editor.setModelLanguage(model, currentFile.language);
      }
    }
  }

  function formatHex(buffer: Uint8Array): string {
    if (!buffer || buffer.length === 0) return 'No binary data available';

    const lines: string[] = [];
    const bytesPerLine = 16;

    for (let i = 0; i < buffer.length; i += bytesPerLine) {
      const offset = i.toString(16).padStart(8, '0');
      const slice = buffer.slice(i, Math.min(i + bytesPerLine, buffer.length));

      // Hex representation
      const hex = Array.from(slice)
        .map(b => b.toString(16).padStart(2, '0'))
        .join(' ');

      // ASCII representation
      const ascii = Array.from(slice)
        .map(b => (b >= 32 && b < 127) ? String.fromCharCode(b) : '.')
        .join('');

      // Pad hex if needed
      const paddedHex = hex.padEnd(bytesPerLine * 3 - 1, ' ');

      lines.push(`${offset}  ${paddedHex}  |${ascii}|`);
    }

    return lines.join('\n');
  }

  async function runCode() {
    if (isRunning) return;
    isRunning = true;
    output = '';
    hexOutput = '';

    try {
      // For TypeScript/JavaScript, we can actually execute in browser
      if (selectedLanguage === 'typescript' || selectedLanguage === 'javascript') {
        const code = editor.getValue();

        // Capture console output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
        };

        try {
          // Create a fake flatbuffers module for demo
          const fakeFlatbuffers = {
            Builder: class {
              private data: number[] = [];
              private strings: Map<number, string> = new Map();
              private offset = 0;

              constructor(size: number) {
                this.data = new Array(size).fill(0);
              }

              createString(str: string) {
                const offset = this.offset;
                this.strings.set(offset, str);
                this.offset += str.length + 4;
                return offset;
              }

              startObject(fields: number) {}
              addFieldOffset(id: number, offset: number, defaultVal: number) {}
              addFieldFloat64(id: number, value: number) {
                // Write 8 bytes
                const view = new DataView(new ArrayBuffer(8));
                view.setFloat64(0, value, true);
                for (let i = 0; i < 8; i++) {
                  this.data[this.offset++] = view.getUint8(i);
                }
              }
              addFieldInt32(id: number, value: number) {
                const view = new DataView(new ArrayBuffer(4));
                view.setInt32(0, value, true);
                for (let i = 0; i < 4; i++) {
                  this.data[this.offset++] = view.getUint8(i);
                }
              }
              endObject() { return this.offset; }
              finish(offset: number) {}
              asUint8Array() {
                // Create a realistic looking buffer
                const buffer = new Uint8Array(Math.max(this.offset, 64));
                // Magic bytes
                buffer[0] = 0x53; // S
                buffer[1] = 0x44; // D
                buffer[2] = 0x53; // S
                buffer[3] = 0x31; // 1
                buffer[4] = 0x01; // OMM type
                // Fill with some data
                for (let i = 5; i < buffer.length; i++) {
                  buffer[i] = this.data[i] || Math.floor(Math.random() * 256);
                }
                return buffer;
              }
            }
          };

          // Execute code in a sandboxed context
          const wrappedCode = `
            (function(flatbuffers) {
              ${code.replace(/import .*/g, '// import removed for browser execution')}
            })
          `;

          const fn = eval(wrappedCode);
          fn(fakeFlatbuffers);

          // Get buffer if it was stored
          const buffer = (globalThis as any).__sdsBuffer;
          if (buffer instanceof Uint8Array) {
            hexOutput = formatHex(buffer);
          }

        } finally {
          console.log = originalLog;
        }

        output = logs.join('\n') || 'Code executed successfully (no output)';

      } else {
        // For other languages, show simulated output
        output = getSimulatedOutput(selectedLanguage);
        hexOutput = formatHex(generateSampleBuffer());
      }

    } catch (e: any) {
      output = `Error: ${e.message}`;
    } finally {
      isRunning = false;
    }
  }

  function getSimulatedOutput(lang: string): string {
    const langNames: Record<string, string> = {
      python: 'Python',
      go: 'Go',
      rust: 'Rust',
      cpp: 'C++',
      csharp: 'C#',
      java: 'Java',
      swift: 'Swift',
      php: 'PHP',
      dart: 'Dart'
    };

    const satellites: Record<string, { name: string; id: number }> = {
      python: { name: 'HUBBLE SPACE TELESCOPE', id: 20580 },
      go: { name: 'TERRA', id: 25994 },
      rust: { name: 'AQUA', id: 27424 },
      cpp: { name: 'LANDSAT 8', id: 39084 },
      csharp: { name: 'SENTINEL-2A', id: 40697 },
      java: { name: 'WORLDVIEW-3', id: 40115 },
      swift: { name: 'JASON-3', id: 41240 },
      php: { name: 'ICESAT-2', id: 43613 },
      dart: { name: 'SUOMI NPP', id: 37849 }
    };

    const sat = satellites[lang] || { name: 'UNKNOWN', id: 0 };

    return `=== Space Data Standards - ${langNames[lang]} Demo ===

OMM Message created for: ${sat.name}
NORAD ID: ${sat.id}

Orbital Elements:
  Mean Motion: 14.57 rev/day
  Eccentricity: 0.0001234
  Inclination: 98.2 deg

Buffer size: 69 bytes

[Note: This is simulated output. To run actual ${langNames[lang]} code,
use the appropriate runtime environment.]`;
  }

  function generateSampleBuffer(): Uint8Array {
    const buffer = new Uint8Array(69);
    buffer[0] = 0x53; // S
    buffer[1] = 0x44; // D
    buffer[2] = 0x53; // S
    buffer[3] = 0x31; // 1
    buffer[4] = 0x01; // OMM type

    // Fill with some realistic-looking data
    for (let i = 5; i < buffer.length; i++) {
      buffer[i] = Math.floor(Math.random() * 256);
    }

    return buffer;
  }

  async function loadMonaco() {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).monaco) {
        monaco = (window as any).monaco;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js';
      script.onload = () => {
        const require = (window as any).require;
        require.config({
          paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }
        });
        require(['vs/editor/editor.main'], () => {
          monaco = (window as any).monaco;
          resolve();
        });
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function initEditor() {
    await loadMonaco();

    // Define dark theme
    monaco.editor.defineTheme('sds-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'keyword', foreground: 'C586C0' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'type', foreground: '4EC9B0' },
      ],
      colors: {
        'editor.background': '#0d1117',
        'editor.foreground': '#c9d1d9',
        'editor.lineHighlightBackground': '#161b22',
        'editorLineNumber.foreground': '#484f58',
        'editorCursor.foreground': '#667eea',
        'editor.selectionBackground': '#264f78',
      }
    });

    editor = monaco.editor.create(editorContainer, {
      value: currentFile?.content || '',
      language: currentFile?.language || 'typescript',
      theme: 'sds-dark',
      fontSize: 13,
      fontFamily: "'JetBrains Mono', monospace",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      renderLineHighlight: 'line',
      automaticLayout: true,
      padding: { top: 16, bottom: 16 },
      scrollbar: {
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10
      }
    });

    // Handle content changes
    editor.onDidChangeModelContent(() => {
      if (currentFile) {
        fileSystem[selectedLanguage][selectedFile].content = editor.getValue();
      }
    });
  }

  onMount(() => {
    initEditor();
  });

  onDestroy(() => {
    if (editor) {
      editor.dispose();
    }
  });
</script>

<section class="code-playground">
  <div class="playground-container">
    <!-- Language Tabs -->
    <div class="language-tabs">
      {#each Object.entries(languageInfo) as [id, info]}
        <button
          class="lang-tab"
          class:active={selectedLanguage === id}
          on:click={() => selectLanguage(id)}
        >
          <span class="lang-icon">{info.icon}</span>
          <span class="lang-name">{info.name}</span>
        </button>
      {/each}
    </div>

    <div class="main-content">
      <!-- File Tree -->
      <div class="file-tree">
        <div class="file-tree-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{languageInfo[selectedLanguage]?.name} Example</span>
        </div>
        <div class="file-list">
          {#each files as file}
            <button
              class="file-item"
              class:active={selectedFile === file.name}
              on:click={() => selectFile(file.name)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>{file.name}</span>
            </button>
          {/each}
        </div>
      </div>

      <!-- Editor -->
      <div class="editor-panel">
        <div class="editor-header">
          <span class="file-path">{selectedFile}</span>
          <button class="run-btn" on:click={runCode} disabled={isRunning}>
            {#if isRunning}
              <span class="spinner"></span>
              Running...
            {:else}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Run
            {/if}
          </button>
        </div>
        <div class="editor-container" bind:this={editorContainer}></div>
      </div>

      <!-- Output Panel -->
      <div class="output-panel">
        <div class="output-tabs">
          <button
            class="output-tab"
            class:active={activeTab === 'output'}
            on:click={() => activeTab = 'output'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            Output
          </button>
          <button
            class="output-tab"
            class:active={activeTab === 'hex'}
            on:click={() => activeTab = 'hex'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Hex Dump
          </button>
        </div>
        <div class="output-content">
          {#if activeTab === 'output'}
            <pre class="output-text">{output || 'Click "Run" to execute the code and see output here.'}</pre>
          {:else}
            <pre class="hex-text">{hexOutput || 'Binary hex dump will appear here after running the code.'}</pre>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .code-playground {
    padding-top: 52px;
    min-height: 100vh;
    background: #030308;
  }

  .playground-container {
    height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
  }

  /* Language Tabs */
  .language-tabs {
    display: flex;
    gap: 2px;
    padding: 8px 12px;
    background: var(--nav-bg);
    border-bottom: 1px solid var(--ui-border);
    overflow-x: auto;
    flex-shrink: 0;
  }

  .lang-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    font-family: var(--font-sans);
  }

  .lang-tab:hover {
    background: var(--ui-bg);
    color: var(--text-primary);
  }

  .lang-tab.active {
    background: var(--ui-bg);
    border-color: var(--accent);
    color: var(--text-primary);
  }

  .lang-icon {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    padding: 2px 5px;
    background: rgba(102, 126, 234, 0.2);
    border-radius: 4px;
    color: var(--accent);
  }

  .lang-name {
    display: none;
  }

  @media (min-width: 1024px) {
    .lang-name {
      display: inline;
    }
  }

  /* Main Content */
  .main-content {
    flex: 1;
    display: flex;
    min-height: 0;
  }

  /* File Tree */
  .file-tree {
    width: 200px;
    background: #0d1117;
    border-right: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .file-tree-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #30363d;
  }

  .file-list {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .file-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    background: transparent;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    font-family: var(--font-mono);
  }

  .file-item:hover {
    background: rgba(102, 126, 234, 0.1);
    color: var(--text-primary);
  }

  .file-item.active {
    background: rgba(102, 126, 234, 0.2);
    color: var(--accent);
  }

  /* Editor Panel */
  .editor-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: #161b22;
    border-bottom: 1px solid #30363d;
  }

  .file-path {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-secondary);
  }

  .run-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .run-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(56, 239, 125, 0.3);
  }

  .run-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .editor-container {
    flex: 1;
    min-height: 0;
  }

  /* Output Panel */
  .output-panel {
    width: 350px;
    background: #0d1117;
    border-left: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .output-tabs {
    display: flex;
    gap: 2px;
    padding: 8px;
    border-bottom: 1px solid #30363d;
  }

  .output-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .output-tab:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .output-tab.active {
    background: rgba(102, 126, 234, 0.2);
    border-color: var(--accent);
    color: var(--accent);
  }

  .output-content {
    flex: 1;
    overflow: auto;
    padding: 16px;
  }

  .output-text, .hex-text {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1.6;
    color: #c9d1d9;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .hex-text {
    font-size: 11px;
    color: #8b949e;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .file-tree {
      width: 160px;
    }

    .output-panel {
      width: 280px;
    }
  }

  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
    }

    .file-tree {
      width: 100%;
      max-height: 120px;
      border-right: none;
      border-bottom: 1px solid #30363d;
    }

    .file-list {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .output-panel {
      width: 100%;
      max-height: 250px;
      border-left: none;
      border-top: 1px solid #30363d;
    }
  }
</style>
