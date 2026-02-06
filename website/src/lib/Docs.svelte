<script lang="ts">
  import { link, push } from "svelte-spa-router";

  // Table of contents sections
  const tocSections = [
    { id: "getting-started", title: "Getting Started" },
    { id: "pipeline-integration", title: "Pipeline Integration" },
    { id: "performance-benefits", title: "Performance Benefits" },
    { id: "xtc-xtce", title: "XTC (XTCE) Telemetry" },
    { id: "field-encryption", title: "Field-Level Encryption" },
    { id: "migration-guide", title: "Migration Guide" },
    { id: "code-examples", title: "Code Examples" },
    { id: "x-flatbuffer", title: "x-flatbuffer Annotations" },
  ];

  const docSections = [
    {
      title: "Getting Started",
      description: "Quick introduction to Space Data Standards and how to use them in your projects",
      icon: "rocket",
      items: [
        { title: "Introduction", description: "Overview of Space Data Standards", section: "pipeline-integration" },
        { title: "Installation", description: "How to install the SDK", route: "/download" },
        { title: "Quick Start", description: "Your first SDS application", section: "code-examples" },
      ]
    },
    {
      title: "JSON Schema",
      description: "Using JSON Schema definitions with x-flatbuffer annotations",
      icon: "file",
      items: [
        { title: "Schema Structure", description: "Understanding JSON Schema format", route: "/schemas" },
        { title: "x-flatbuffer Annotations", description: "Mapping JSON to FlatBuffers", section: "x-flatbuffer" },
        { title: "Validation", description: "Validating data against schemas", section: "x-flatbuffer" },
      ]
    },
    {
      title: "FlatBuffers",
      description: "Working with FlatBuffers binary serialization",
      icon: "binary",
      items: [
        { title: "Why FlatBuffers", description: "Benefits of binary serialization", section: "performance-benefits" },
        { title: "Schema Compilation", description: "Using flatc compiler", section: "migration-guide" },
        { title: "Zero-Copy Access", description: "Reading data without parsing", section: "code-examples" },
      ]
    },
    {
      title: "Language Guides",
      description: "Using SDS in different programming languages",
      icon: "code",
      items: [
        { title: "TypeScript/JavaScript", description: "Browser and Node.js usage", route: "/download" },
        { title: "Go", description: "Server-side implementation", route: "/download" },
        { title: "Python", description: "Data science and analysis", route: "/download" },
        { title: "Rust", description: "Systems programming", route: "/download" },
      ]
    },
  ];

  const annotationDocs = [
    {
      name: "x-flatbuffer-type",
      description: "Maps JSON Schema type to FlatBuffer type",
      example: '"x-flatbuffer-type": "double"',
      values: ["bool", "byte", "ubyte", "short", "ushort", "int", "uint", "float", "double", "long", "ulong", "string"]
    },
    {
      name: "x-flatbuffer-field-id",
      description: "Stable field ID for binary compatibility across schema versions",
      example: '"x-flatbuffer-field-id": 1',
      values: ["Integer (0-65535)"]
    },
    {
      name: "x-flatbuffer-deprecated",
      description: "Marks a field as deprecated while maintaining compatibility",
      example: '"x-flatbuffer-deprecated": true',
      values: ["true", "false"]
    },
    {
      name: "x-flatbuffer-default",
      description: "Default value for the field in FlatBuffer encoding",
      example: '"x-flatbuffer-default": 0',
      values: ["Any value matching the field type"]
    },
  ];

  // Collapsible section state
  let expandedSections: Record<string, boolean> = {
    "getting-started": true,
    "pipeline-integration": false,
    "performance-benefits": false,
    "xtc-xtce": false,
    "field-encryption": false,
    "migration-guide": false,
    "code-examples": false,
    "x-flatbuffer": false,
  };

  function toggleSection(id: string) {
    expandedSections[id] = !expandedSections[id];
    expandedSections = expandedSections;
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      expandedSections[id] = true;
      expandedSections = expandedSections;
    }
  }

  function handleDocItemClick(item: { section?: string; route?: string }) {
    if (item.section) {
      scrollToSection(item.section);
    } else if (item.route) {
      push(item.route);
    }
  }
</script>

<section class="docs-page">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Documentation</h1>
      <p class="page-subtitle">
        Comprehensive guide to using Space Data Standards in your applications
      </p>
    </div>

    <div class="docs-layout">
      <!-- Table of Contents Sidebar -->
      <nav class="toc-sidebar">
        <div class="toc-header">Contents</div>
        <ul class="toc-list">
          {#each tocSections as section}
            <li>
              <button class="toc-link" on:click={() => scrollToSection(section.id)}>
                {section.title}
              </button>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Main Content -->
      <div class="docs-content">
        <!-- Getting Started Section -->
        <section id="getting-started" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('getting-started')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['getting-started'] ? '-' : '+'}</span>
              Getting Started
            </h2>
          </button>

          {#if expandedSections['getting-started']}
            <div class="section-content">
              <div class="docs-grid">
                {#each docSections as section}
                  <div class="doc-section-card">
                    <div class="doc-section-header">
                      <div class="doc-icon">
                        {#if section.icon === "rocket"}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          </svg>
                        {:else if section.icon === "file"}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                        {:else if section.icon === "binary"}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="4" width="4" height="16" rx="1"></rect>
                            <rect x="10" y="4" width="4" height="16" rx="1"></rect>
                            <rect x="18" y="4" width="4" height="16" rx="1"></rect>
                          </svg>
                        {:else if section.icon === "code"}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        {/if}
                      </div>
                      <div>
                        <h3 class="doc-section-title">{section.title}</h3>
                        <p class="doc-section-desc">{section.description}</p>
                      </div>
                    </div>
                    <ul class="doc-items">
                      {#each section.items as item}
                        <li class="doc-item" on:click={() => handleDocItemClick(item)} on:keydown={(e) => e.key === 'Enter' && handleDocItemClick(item)} role="button" tabindex="0">
                          <span class="doc-item-title">{item.title}</span>
                          <span class="doc-item-desc">{item.description}</span>
                          <svg class="doc-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </section>

        <!-- Pipeline Integration Section -->
        <section id="pipeline-integration" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('pipeline-integration')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['pipeline-integration'] ? '-' : '+'}</span>
              Pipeline Integration
            </h2>
          </button>

          {#if expandedSections['pipeline-integration']}
            <div class="section-content">
              <p class="intro-text">
                Space Data Standards (SDS) is designed to seamlessly integrate into existing space data pipelines,
                replacing verbose XML and JSON formats with efficient FlatBuffers while maintaining full compatibility
                with CCSDS standards.
              </p>

              <h3 class="subsection-title">Architecture Overview</h3>
              <div class="diagram-container">
                <pre class="ascii-diagram">{`
+------------------+     +-------------------+     +------------------+
|   Legacy System  |     |    SDS Bridge     |     |  Modern System   |
|                  |     |                   |     |                  |
|  XML/JSON/TLE    | --> |  Parse & Convert  | --> |   FlatBuffers    |
|  CCSDS Messages  |     |  Validate Schema  |     |   Zero-Copy      |
|                  |     |  Binary Encode    |     |   Type-Safe      |
+------------------+     +-------------------+     +------------------+
        |                        |                        |
        v                        v                        v
   +----------+            +----------+            +----------+
   | 100+ KB  |            |  ~10 KB  |            |  Direct  |
   | per msg  |            |  Bridge  |            |  Access  |
   +----------+            +----------+            +----------+`}</pre>
              </div>

              <h3 class="subsection-title">Before vs After Comparison</h3>
              <div class="comparison-table">
                <div class="comparison-row header">
                  <span>Aspect</span>
                  <span>Traditional (XML/JSON)</span>
                  <span>Space Data Standards</span>
                </div>
                <div class="comparison-row">
                  <span>Message Size</span>
                  <span class="bad">2-10 KB per OMM</span>
                  <span class="good">200-400 bytes per OMM</span>
                </div>
                <div class="comparison-row">
                  <span>Parse Time</span>
                  <span class="bad">5-50ms per message</span>
                  <span class="good">0ms (zero-copy)</span>
                </div>
                <div class="comparison-row">
                  <span>Memory Usage</span>
                  <span class="bad">Object allocation required</span>
                  <span class="good">Direct buffer access</span>
                </div>
                <div class="comparison-row">
                  <span>Type Safety</span>
                  <span class="bad">Runtime validation only</span>
                  <span class="good">Compile-time type checking</span>
                </div>
                <div class="comparison-row">
                  <span>Schema Evolution</span>
                  <span class="neutral">Manual versioning</span>
                  <span class="good">Forward/backward compatible</span>
                </div>
              </div>

              <h3 class="subsection-title">Integration Points</h3>
              <div class="integration-cards">
                <div class="integration-card">
                  <h4>Data Ingest</h4>
                  <p>Accept TLE, XML CDM, JSON OMM from external sources. SDS libraries handle parsing and conversion to FlatBuffers.</p>
                </div>
                <div class="integration-card">
                  <h4>Processing Pipeline</h4>
                  <p>Pass FlatBuffer messages directly between services. No serialization overhead, shared memory support.</p>
                </div>
                <div class="integration-card">
                  <h4>Storage Layer</h4>
                  <p>Store messages in native FlatBuffer format. Efficient binary storage, instant query results.</p>
                </div>
                <div class="integration-card">
                  <h4>API Gateway</h4>
                  <p>Serve JSON for web clients, FlatBuffers for high-performance clients. Same schema, multiple formats.</p>
                </div>
              </div>
            </div>
          {/if}
        </section>

        <!-- Performance Benefits Section -->
        <section id="performance-benefits" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('performance-benefits')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['performance-benefits'] ? '-' : '+'}</span>
              Performance Benefits
            </h2>
          </button>

          {#if expandedSections['performance-benefits']}
            <div class="section-content">
              <div class="benefit-grid">
                <!-- Data Size Reduction -->
                <div class="benefit-card">
                  <div class="benefit-icon size-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </div>
                  <h3>Data Size Reduction</h3>
                  <div class="stat-highlight">
                    <span class="stat-number">5-20x</span>
                    <span class="stat-label">smaller than XML</span>
                  </div>
                  <ul class="benefit-list">
                    <li>FlatBuffers are <strong>2-10x smaller</strong> than JSON</li>
                    <li><strong>5-20x smaller</strong> than XML</li>
                    <li>No field names in binary format</li>
                    <li>Efficient numeric encoding</li>
                  </ul>
                  <div class="example-box">
                    <div class="example-title">Example: Typical OMM Message</div>
                    <div class="example-comparison">
                      <div class="example-item bad">
                        <span class="format">JSON</span>
                        <span class="size">~2,400 bytes</span>
                      </div>
                      <div class="example-item good">
                        <span class="format">FlatBuffer</span>
                        <span class="size">~280 bytes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Latency Reduction -->
                <div class="benefit-card">
                  <div class="benefit-icon latency-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3>Latency Reduction</h3>
                  <div class="stat-highlight">
                    <span class="stat-number">0ms</span>
                    <span class="stat-label">parsing time</span>
                  </div>
                  <ul class="benefit-list">
                    <li><strong>Zero parsing time</strong> - access data directly from buffer</li>
                    <li>No deserialization step required</li>
                    <li>Ideal for <strong>real-time conjunction assessment</strong></li>
                    <li>Critical for time-sensitive collision avoidance</li>
                  </ul>
                  <div class="example-box">
                    <div class="example-title">Access Pattern</div>
                    <code class="inline-code">omm.MEAN_MOTION</code> directly reads from buffer offset
                  </div>
                </div>

                <!-- CPU Reduction -->
                <div class="benefit-card">
                  <div class="benefit-icon cpu-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                    </svg>
                  </div>
                  <h3>CPU Reduction</h3>
                  <div class="stat-highlight">
                    <span class="stat-number">100x</span>
                    <span class="stat-label">fewer CPU cycles</span>
                  </div>
                  <ul class="benefit-list">
                    <li>No parsing/unpacking CPU cycles</li>
                    <li><strong>Zero-copy access</strong> means no memory allocation during reads</li>
                    <li>No string-to-number conversions</li>
                    <li>No hash table lookups for field names</li>
                  </ul>
                  <div class="example-box">
                    <div class="example-title">Compare</div>
                    <div class="code-compare">
                      <div class="bad"><code>JSON.parse(text).EPOCH</code><br/><span class="note">Parse entire document</span></div>
                      <div class="good"><code>buffer.readFloat64(offset)</code><br/><span class="note">Direct memory read</span></div>
                    </div>
                  </div>
                </div>

                <!-- Memory Reduction -->
                <div class="benefit-card">
                  <div class="benefit-icon memory-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M6 19v-3"></path>
                      <path d="M10 19v-6"></path>
                      <path d="M14 19v-9"></path>
                      <path d="M18 19v-12"></path>
                    </svg>
                  </div>
                  <h3>Memory Reduction</h3>
                  <div class="stat-highlight">
                    <span class="stat-number">0</span>
                    <span class="stat-label">heap allocations</span>
                  </div>
                  <ul class="benefit-list">
                    <li>Only buffer memory needed, no object creation</li>
                    <li><strong>No heap allocation</strong> for reading data</li>
                    <li>Critical for <strong>embedded systems and satellites</strong></li>
                    <li>Predictable memory footprint</li>
                  </ul>
                  <div class="example-box">
                    <div class="example-title">Memory Model</div>
                    <pre class="mini-code">{`// Traditional: Creates objects
const omm = JSON.parse(data);  // Allocates ~50 objects

// FlatBuffers: No allocation
const omm = OMM.getRootAs(buffer);  // Zero allocation`}</pre>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </section>

        <!-- XTC (XTCE) Section -->
        <section id="xtc-xtce" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('xtc-xtce')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['xtc-xtce'] ? '-' : '+'}</span>
              XTC (XTCE) Telemetry
            </h2>
          </button>

          {#if expandedSections['xtc-xtce']}
            <div class="section-content">
              <div class="xtce-intro">
                <div class="xtce-badge">CCSDS 660.x</div>
                <h3>XML Telemetry and Command Exchange</h3>
                <p>
                  XTCE is the CCSDS standard (660.x series) for describing spacecraft telemetry and command
                  databases. It provides a comprehensive, machine-readable specification for how telemetry
                  data should be interpreted and how commands should be constructed.
                </p>
              </div>

              <h3 class="subsection-title">What is XTCE?</h3>
              <div class="info-cards">
                <div class="info-card">
                  <h4>Telemetry Definition</h4>
                  <p>Defines parameter types, encoding rules, calibration curves, and alarm thresholds for spacecraft telemetry.</p>
                </div>
                <div class="info-card">
                  <h4>Command Specification</h4>
                  <p>Describes command structure, arguments, verification conditions, and interlocks for spacecraft commanding.</p>
                </div>
                <div class="info-card">
                  <h4>Container Layouts</h4>
                  <p>Specifies packet structure, bit positions, and conditional inclusion rules for telemetry containers.</p>
                </div>
                <div class="info-card">
                  <h4>Algorithms</h4>
                  <p>Defines derived parameters, calibration algorithms, and data processing rules.</p>
                </div>
              </div>

              <h3 class="subsection-title">XTC FlatBuffer Schema</h3>
              <p class="intro-text">
                The XTC schema represents the complete XTCE data model in FlatBuffer format. This enables
                high-performance processing of telemetry database definitions while maintaining full
                compatibility with the CCSDS 660.x standard.
              </p>

              <div class="schema-structure">
                <pre class="schema-code">{`// XTC Root Structure (SpaceSystem)
table XTC {
  NAME: string;                    // Space system name
  HEADER: XTCHeader;               // Document metadata
  TELEMETRY_META_DATA: TelemetryMetaData;
  COMMAND_META_DATA: CommandMetaData;
  SERVICE_SET: ServiceSet;
  CHILD_SYSTEMS: [XTC];            // Hierarchical structure
}

// Key Components
table TelemetryMetaData {
  PARAMETER_TYPE_SET: ParameterTypeSet;   // Type definitions
  PARAMETER_SET: ParameterSet;            // Parameter instances
  CONTAINER_SET: ContainerSet;            // Packet definitions
  ALGORITHM_SET: AlgorithmSet;            // Processing rules
  STREAM_SET: StreamSet;                  // Data streams
}`}</pre>
              </div>

              <h3 class="subsection-title">Benefits of XML XTCE to FlatBuffer XTC</h3>
              <div class="benefit-comparison">
                <div class="benefit-item">
                  <div class="benefit-header">
                    <span class="benefit-number">10-50x</span>
                    <span>Smaller Files</span>
                  </div>
                  <p>Typical XTCE databases shrink from megabytes to hundreds of kilobytes.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-header">
                    <span class="benefit-number">100x</span>
                    <span>Faster Loading</span>
                  </div>
                  <p>No XML parsing required. Direct memory-mapped access to telemetry definitions.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-header">
                    <span class="benefit-number">Type-Safe</span>
                    <span>Access</span>
                  </div>
                  <p>Compile-time type checking for parameter types, encodings, and calibrations.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-header">
                    <span class="benefit-number">Embedded</span>
                    <span>Friendly</span>
                  </div>
                  <p>Small footprint suitable for on-board software and resource-constrained systems.</p>
                </div>
              </div>

              <div class="cta-inline">
                <a href="/schemas/XTC" use:link class="btn btn-accent">View XTC Schema</a>
              </div>
            </div>
          {/if}
        </section>

        <!-- Field-Level Encryption Section -->
        <section id="field-encryption" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('field-encryption')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['field-encryption'] ? '-' : '+'}</span>
              Field-Level Encryption
            </h2>
          </button>

          {#if expandedSections['field-encryption']}
            <div class="section-content">
              <p class="intro-text">
                Space Data Standards supports field-level encryption, allowing individual fields to be
                encrypted while headers and routing information remain readable. This enables secure
                data sharing over public networks without compromising message routability.
              </p>

              <div class="encryption-diagram">
                <pre class="ascii-diagram">{`
+------------------------------------------+
|             FlatBuffer Message           |
+------------------------------------------+
| Header (Unencrypted)                     |
| +--------------------------------------+ |
| | MESSAGE_ID: "CDM-2024-001"           | |  <-- Readable
| | CREATED: "2024-06-22T16:56:20Z"      | |  <-- Readable
| | ORIGINATOR: "USSPACECOM"             | |  <-- Readable
| +--------------------------------------+ |
+------------------------------------------+
| Payload (Encrypted Fields)               |
| +--------------------------------------+ |
| | TCA: [ENCRYPTED: AES-256-GCM]        | |  <-- Protected
| | MISS_DISTANCE: [ENCRYPTED]           | |  <-- Protected
| | COLLISION_PROBABILITY: [ENCRYPTED]   | |  <-- Protected
| +--------------------------------------+ |
+------------------------------------------+
| Encryption Metadata                      |
| +--------------------------------------+ |
| | PUBLIC_KEY: X25519 ephemeral key     | |
| | NONCE: 12-byte random                | |
| | TAG: GCM authentication tag          | |
| +--------------------------------------+ |
+------------------------------------------+`}</pre>
              </div>

              <h3 class="subsection-title">ECIES Encryption (X25519 + AES-256-GCM)</h3>
              <div class="encryption-features">
                <div class="encrypt-card">
                  <h4>X25519 Key Exchange</h4>
                  <p>Elliptic Curve Diffie-Hellman for efficient, secure key agreement. 256-bit security with compact 32-byte keys.</p>
                </div>
                <div class="encrypt-card">
                  <h4>AES-256-GCM</h4>
                  <p>Authenticated encryption providing both confidentiality and integrity verification.</p>
                </div>
                <div class="encrypt-card">
                  <h4>Per-Field Encryption</h4>
                  <p>Each sensitive field can be independently encrypted with its own key derivation.</p>
                </div>
              </div>

              <h3 class="subsection-title">Use Cases</h3>
              <div class="use-case-list">
                <div class="use-case">
                  <span class="use-case-icon">1</span>
                  <div>
                    <strong>Public Network Distribution</strong>
                    <p>Share CDM messages on public networks where routing information must be visible but collision details are protected.</p>
                  </div>
                </div>
                <div class="use-case">
                  <span class="use-case-icon">2</span>
                  <div>
                    <strong>Multi-Party Access Control</strong>
                    <p>Different fields encrypted for different recipients. Satellite operators see their own data, regulators see aggregate statistics.</p>
                  </div>
                </div>
                <div class="use-case">
                  <span class="use-case-icon">3</span>
                  <div>
                    <strong>Audit-Friendly Sharing</strong>
                    <p>Message metadata remains visible for logging and compliance while payload stays confidential.</p>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </section>

        <!-- Migration Guide Section -->
        <section id="migration-guide" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('migration-guide')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['migration-guide'] ? '-' : '+'}</span>
              Migration Guide
            </h2>
          </button>

          {#if expandedSections['migration-guide']}
            <div class="section-content">
              <h3 class="subsection-title">TLE to OMM Migration</h3>
              <div class="migration-block">
                <p>Two-Line Element Sets (TLE) are the legacy format for distributing orbital elements. OMM (Orbit Mean-Elements Message) is the modern replacement with richer metadata and better precision.</p>

                <div class="migration-steps">
                  <div class="migration-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                      <strong>Parse TLE Lines</strong>
                      <p>Extract epoch, mean motion, eccentricity, inclination, RAAN, argument of perigee, and mean anomaly.</p>
                    </div>
                  </div>
                  <div class="migration-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                      <strong>Add Metadata</strong>
                      <p>Include OBJECT_NAME, OBJECT_ID, CENTER_NAME, REF_FRAME, TIME_SYSTEM that TLE lacks.</p>
                    </div>
                  </div>
                  <div class="migration-step">
                    <span class="step-number">3</span>
                    <div class="step-content">
                      <strong>Serialize to FlatBuffer</strong>
                      <p>Use SDS library to create type-safe, compact OMM message.</p>
                    </div>
                  </div>
                </div>

                <div class="code-example">
                  <div class="code-header-mini">TypeScript: TLE to OMM</div>
                  <pre class="code-block-mini">{`import { OMMT, writeFB } from 'spacedatastandards.org';

// Parse TLE (simplified)
const tle1 = "1 25544U 98067A   24174.70578713  .00016717  00000-0  10270-3 0  9993";
const tle2 = "2 25544  51.6416 247.4627 0006703  130.5360 325.0288 15.72125391460273";

// Create OMM with full metadata
const omm = new OMMT({
  OBJECT_NAME: "ISS (ZARYA)",
  OBJECT_ID: "1998-067A",
  CENTER_NAME: "EARTH",
  REF_FRAME: "TEME",
  TIME_SYSTEM: "UTC",
  MEAN_ELEMENT_THEORY: "SGP4",
  EPOCH: "2024-06-22T16:56:20.014080",
  MEAN_MOTION: 15.72125391,
  ECCENTRICITY: 0.0006703,
  INCLINATION: 51.6416,
  RA_OF_ASC_NODE: 247.4627,
  ARG_OF_PERICENTER: 130.5360,
  MEAN_ANOMALY: 325.0288,
});

const buffer = writeFB([omm]);`}</pre>
                </div>
              </div>

              <h3 class="subsection-title">XML CDM to FlatBuffer CDM</h3>
              <div class="migration-block">
                <p>CCSDS XML CDM files can be directly converted to FlatBuffer format. The schema maintains full compatibility with all CDM fields.</p>

                <div class="code-example">
                  <div class="code-header-mini">TypeScript: XML CDM to FlatBuffer</div>
                  <pre class="code-block-mini">{`import { CDMT, writeFB } from 'spacedatastandards.org';
import { parseXmlCdm } from './xml-parser'; // Your XML parser

// Parse existing XML CDM
const xmlData = await fetch('cdm.xml').then(r => r.text());
const parsed = parseXmlCdm(xmlData);

// Convert to SDS CDM
const cdm = new CDMT({
  CCSDS_CDM_VERS: parsed.version,
  CREATION_DATE: parsed.creationDate,
  ORIGINATOR: parsed.originator,
  MESSAGE_ID: parsed.messageId,
  TCA: parsed.tca,
  MISS_DISTANCE: parsed.missDistance,
  // ... all other CDM fields map directly
});

// 10x smaller, 100x faster to read
const buffer = writeFB([cdm]);`}</pre>
                </div>
              </div>

              <h3 class="subsection-title">XTCE to XTC Integration</h3>
              <div class="migration-block">
                <p>Integrate existing XTCE telemetry databases with the XTC FlatBuffer format for high-performance ground systems.</p>

                <div class="migration-steps">
                  <div class="migration-step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                      <strong>Export XTCE Database</strong>
                      <p>Export your telemetry database to standard XTCE XML format from your existing tools.</p>
                    </div>
                  </div>
                  <div class="migration-step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                      <strong>Convert with SDS Tools</strong>
                      <p>Use SDS conversion utilities to transform XTCE XML to XTC FlatBuffer format.</p>
                    </div>
                  </div>
                  <div class="migration-step">
                    <span class="step-number">3</span>
                    <div class="step-content">
                      <strong>Deploy XTC Database</strong>
                      <p>Use compact XTC files in your ground system. Memory-map for instant access to parameter definitions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </section>

        <!-- Code Examples Section -->
        <section id="code-examples" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('code-examples')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['code-examples'] ? '-' : '+'}</span>
              Code Examples
            </h2>
          </button>

          {#if expandedSections['code-examples']}
            <div class="section-content">
              <h3 class="subsection-title">Reading FlatBuffer Without Parsing</h3>
              <div class="code-example">
                <div class="code-header-mini">TypeScript: Zero-Copy Access</div>
                <pre class="code-block-mini">{`import { readFB } from 'spacedatastandards.org';

// Receive binary buffer from network/file
const buffer = await fetch('/api/omm/25544')
  .then(res => res.arrayBuffer())
  .then(ab => new Uint8Array(ab));

// Zero-copy read - no parsing, no object creation
const messages = readFB(buffer);

// Direct access to fields (reads from buffer offset)
const omm = messages[0];
console.log(omm.OBJECT_NAME);      // "ISS (ZARYA)"
console.log(omm.MEAN_MOTION);      // 15.72125391
console.log(omm.ECCENTRICITY);     // 0.0006703

// Access is O(1) - constant time regardless of message size
// No JSON.parse(), no XML DOM creation, no heap allocation`}</pre>
              </div>

              <h3 class="subsection-title">Encrypting Specific Fields</h3>
              <div class="code-example">
                <div class="code-header-mini">TypeScript: Field-Level Encryption</div>
                <pre class="code-block-mini">{`import { CDMT, writeFB, encryptField } from 'spacedatastandards.org';
import { generateKeyPair, deriveSharedSecret } from './crypto';

// Recipient's public key (X25519)
const recipientPubKey = await fetchRecipientPublicKey('operator-123');

// Create CDM with some fields encrypted
const cdm = new CDMT({
  // Unencrypted routing headers
  MESSAGE_ID: "CDM-2024-001",
  CREATION_DATE: "2024-06-22T16:56:20Z",
  ORIGINATOR: "USSPACECOM",

  // Encrypted sensitive fields
  TCA: await encryptField("2024-06-25T08:30:00Z", recipientPubKey),
  MISS_DISTANCE: await encryptField(150.5, recipientPubKey),
  COLLISION_PROBABILITY: await encryptField(1.2e-5, recipientPubKey),

  // Object identification remains readable for routing
  OBJECT1_OBJECT_DESIGNATOR: "1998-067A",
  OBJECT2_OBJECT_DESIGNATOR: "2024-001C",
});

// Serialize - headers visible, payload encrypted
const buffer = writeFB([cdm]);`}</pre>
              </div>

              <h3 class="subsection-title">Converting Legacy Formats</h3>
              <div class="code-example">
                <div class="code-header-mini">TypeScript: Multi-Format Ingestion</div>
                <pre class="code-block-mini">{`import {
  OMMT, CDMT, writeFB, readFB,
  parseTLE, parseXmlCdm, parseJsonOmm
} from 'spacedatastandards.org';

// Unified ingestion pipeline
async function ingestOrbitalData(source: string, format: string) {
  let messages: OMMT[];

  switch (format) {
    case 'tle':
      // Parse TLE and convert to OMM
      const tles = await fetch(source).then(r => r.text());
      messages = parseTLE(tles).map(tle => new OMMT({
        OBJECT_NAME: tle.name,
        OBJECT_ID: tle.noradId,
        EPOCH: tle.epoch,
        MEAN_MOTION: tle.meanMotion,
        // ... map all fields
      }));
      break;

    case 'xml':
      // Parse CCSDS XML OMM
      const xml = await fetch(source).then(r => r.text());
      messages = parseXmlOmm(xml);
      break;

    case 'json':
      // Parse JSON OMM (Space-Track format)
      const json = await fetch(source).then(r => r.json());
      messages = parseJsonOmm(json);
      break;

    case 'flatbuffer':
      // Already in optimal format - zero conversion
      const buffer = await fetch(source).then(r => r.arrayBuffer());
      return readFB(new Uint8Array(buffer));
  }

  // Convert all formats to FlatBuffer for storage/processing
  return writeFB(messages);
}`}</pre>
              </div>

              <h3 class="subsection-title">Working with XTC Telemetry</h3>
              <div class="code-example">
                <div class="code-header-mini">TypeScript: XTC Parameter Access</div>
                <pre class="code-block-mini">{`import { readFB } from 'spacedatastandards.org';

// Load XTC telemetry database (memory-mapped for large files)
const xtcBuffer = await loadXtcDatabase('./spacecraft.xtc');
const xtc = readFB(xtcBuffer)[0];

// Navigate hierarchical space system
console.log(xtc.NAME);  // "SPACECRAFT-1"

// Access parameter type definitions
const paramTypes = xtc.TELEMETRY_META_DATA?.PARAMETER_TYPE_SET;
const floatTypes = paramTypes?.FLOAT_TYPES || [];

for (const type of floatTypes) {
  console.log(\`Parameter: \${type.NAME}\`);
  console.log(\`  Units: \${type.UNITS?.[0]?.SYMBOL}\`);
  console.log(\`  Valid Range: \${type.VALID_MIN} - \${type.VALID_MAX}\`);

  // Access calibration if defined
  const encoding = type.DATA_ENCODING;
  if (encoding?.DEFAULT_CALIBRATOR) {
    console.log(\`  Calibrator: \${encoding.DEFAULT_CALIBRATOR}\`);
  }
}

// Access container (packet) definitions
const containers = xtc.TELEMETRY_META_DATA?.CONTAINER_SET?.CONTAINERS || [];
for (const container of containers) {
  console.log(\`Packet: \${container.NAME}\`);
  console.log(\`  Entries: \${container.ENTRY_LIST?.length}\`);
}`}</pre>
              </div>
            </div>
          {/if}
        </section>

        <!-- x-flatbuffer Annotations Section -->
        <section id="x-flatbuffer" class="doc-section">
          <button class="section-header-btn" on:click={() => toggleSection('x-flatbuffer')}>
            <h2 class="section-title-collapsible">
              <span class="collapse-icon">{expandedSections['x-flatbuffer'] ? '-' : '+'}</span>
              x-flatbuffer Annotations
            </h2>
          </button>

          {#if expandedSections['x-flatbuffer']}
            <div class="section-content">
              <p class="section-subtitle-text">
                JSON Schema extensions for FlatBuffer type mapping
              </p>

              <div class="annotation-grid">
                {#each annotationDocs as annotation}
                  <div class="annotation-card">
                    <div class="annotation-header">
                      <code class="annotation-name">{annotation.name}</code>
                    </div>
                    <p class="annotation-desc">{annotation.description}</p>
                    <div class="annotation-example">
                      <span class="example-label">Example:</span>
                      <code>{annotation.example}</code>
                    </div>
                    <div class="annotation-values">
                      <span class="values-label">Values:</span>
                      <span class="values-list">{annotation.values.join(", ")}</span>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </section>

        <!-- CTA Section -->
        <div class="cta-section">
          <h2 class="cta-title">Ready to explore schemas?</h2>
          <p class="cta-desc">Browse the complete catalog of Space Data Standards schemas</p>
          <div class="cta-buttons">
            <a href="/schemas" use:link class="btn btn-accent">View All Schemas</a>
            <a href="/download" use:link class="btn btn-primary">Download SDK</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .docs-page {
    padding-top: 100px;
    min-height: 100vh;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .page-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .page-title {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .page-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Layout */
  .docs-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 48px;
  }

  /* Table of Contents */
  .toc-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(20px);
  }

  .toc-header {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--ui-border);
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-list li {
    margin-bottom: 4px;
  }

  .toc-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    font-size: 14px;
    color: var(--text-secondary);
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .toc-link:hover {
    background: var(--ui-hover);
    color: var(--text-primary);
  }

  /* Main Content */
  .docs-content {
    min-width: 0;
  }

  /* Collapsible Sections */
  .doc-section {
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 20px;
    margin-bottom: 24px;
    overflow: hidden;
    backdrop-filter: blur(20px);
  }

  .section-header-btn {
    width: 100%;
    padding: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s;
  }

  .section-header-btn:hover {
    background: var(--ui-hover);
  }

  .section-title-collapsible {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .collapse-icon {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 119, 182, 0.1);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: var(--accent);
  }

  .section-content {
    padding: 0 24px 24px;
  }

  /* Section Content Styles */
  .intro-text {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .subsection-title {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 16px;
  }

  .section-subtitle-text {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  /* Getting Started Grid */
  .docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .doc-section-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
  }

  .doc-section-header {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }

  .doc-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .doc-icon :global(svg) {
    width: 22px;
    height: 22px;
    color: white;
  }

  .doc-section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .doc-section-desc {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .doc-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .doc-item {
    padding: 10px 0;
    border-bottom: 1px solid var(--ui-border);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    padding-right: 24px;
  }

  .doc-item:last-child {
    border-bottom: none;
  }

  .doc-item:hover {
    padding-left: 8px;
  }

  .doc-item:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .doc-item-arrow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .doc-item:hover .doc-item-arrow {
    opacity: 1;
  }

  .doc-item-title {
    display: block;
    width: 100%;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .doc-item-desc {
    display: block;
    width: 100%;
    font-size: 13px;
    color: var(--text-muted);
  }

  /* ASCII Diagrams */
  .diagram-container {
    margin: 24px 0;
  }

  .ascii-diagram {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    line-height: 1.4;
    color: var(--text-secondary);
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 24px;
    overflow-x: auto;
    white-space: pre;
  }

  /* Comparison Table */
  .comparison-table {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    overflow: hidden;
    margin: 24px 0;
  }

  .comparison-row {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr;
    padding: 14px 20px;
    gap: 16px;
    border-bottom: 1px solid var(--ui-border);
    font-size: 14px;
  }

  .comparison-row:last-child {
    border-bottom: none;
  }

  .comparison-row.header {
    background: rgba(255, 255, 255, 0.03);
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
  }

  .comparison-row .good {
    color: #38ef7d;
  }

  .comparison-row .bad {
    color: #f5576c;
  }

  .comparison-row .neutral {
    color: #f7971e;
  }

  /* Integration Cards */
  .integration-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  .integration-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 20px;
  }

  .integration-card h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--accent);
  }

  .integration-card p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  /* Benefit Grid */
  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .benefit-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
  }

  .benefit-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .benefit-icon :global(svg) {
    width: 24px;
    height: 24px;
    color: white;
  }

  .size-icon { background: linear-gradient(135deg, #0077b6 0%, #005f8a 100%); }
  .latency-icon { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
  .cpu-icon { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
  .memory-icon { background: linear-gradient(135deg, #17ead9 0%, #005f8a 100%); }

  .benefit-card h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .stat-highlight {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 16px;
  }

  .stat-number {
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent) 0%, #17ead9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .benefit-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
    flex-grow: 1;
  }

  .benefit-list li {
    padding: 6px 0;
    font-size: 14px;
    color: var(--text-secondary);
    padding-left: 20px;
    position: relative;
  }

  .benefit-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
  }

  .example-box {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 16px;
    margin-top: auto;
  }

  .example-title {
    font-size: 12px;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .example-comparison {
    display: flex;
    gap: 16px;
  }

  .example-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .example-item .format {
    font-size: 12px;
    color: #8b949e;
  }

  .example-item .size {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
  }

  .example-item.bad .size { color: #f5576c; }
  .example-item.good .size { color: #38ef7d; }

  .inline-code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: #c9d1d9;
  }

  .code-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .code-compare code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    display: block;
    word-break: break-all;
    overflow-wrap: break-word;
  }

  .code-compare .note {
    font-size: 11px;
    color: #8b949e;
    display: block;
    margin-top: 4px;
  }

  .code-compare .bad code { color: #f5576c; }
  .code-compare .good code { color: #38ef7d; }

  .mini-code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    line-height: 1.5;
    color: #c9d1d9;
    margin: 0;
  }

  /* XTCE Section */
  .xtce-intro {
    background: linear-gradient(135deg, rgba(0, 119, 182, 0.1) 0%, rgba(23, 234, 217, 0.1) 100%);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 32px;
  }

  .xtce-badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    background: var(--accent);
    color: white;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .xtce-intro h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .xtce-intro p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin: 24px 0;
  }

  .info-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 20px;
  }

  .info-card h4 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .info-card p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .schema-structure {
    margin: 24px 0;
  }

  .schema-code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.5;
    color: #c9d1d9;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 20px;
    overflow-x: auto;
  }

  .benefit-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 24px 0;
  }

  .benefit-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }

  .benefit-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
  }

  .benefit-number {
    font-size: 28px;
    font-weight: 700;
    color: var(--accent);
  }

  .benefit-item p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .cta-inline {
    text-align: center;
    margin-top: 32px;
  }

  /* Encryption Section */
  .encryption-diagram {
    margin: 24px 0;
  }

  .encryption-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin: 24px 0;
  }

  .encrypt-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 20px;
  }

  .encrypt-card h4 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--accent);
  }

  .encrypt-card p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .use-case-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .use-case {
    display: flex;
    gap: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 12px;
    padding: 20px;
  }

  .use-case-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
    flex-shrink: 0;
  }

  .use-case strong {
    display: block;
    margin-bottom: 4px;
  }

  .use-case p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  /* Migration Section */
  .migration-block {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
  }

  .migration-block > p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .migration-steps {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 20px 0;
  }

  .migration-step {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .step-number {
    width: 28px;
    height: 28px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
    flex-shrink: 0;
  }

  .step-content strong {
    display: block;
    margin-bottom: 4px;
  }

  .step-content p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
  }

  /* Code Examples */
  .code-example {
    margin: 20px 0;
  }

  .code-header-mini {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    padding: 12px 16px;
    background: #161b22;
    border: 1px solid #30363d;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }

  .code-block-mini {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.5;
    color: #c9d1d9;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 0 0 12px 12px;
    padding: 16px;
    margin: 0;
    overflow-x: auto;
  }

  /* Annotations */
  .annotation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .annotation-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    padding: 20px;
  }

  .annotation-header {
    margin-bottom: 12px;
  }

  .annotation-name {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 600;
    color: var(--accent);
    background: rgba(0, 119, 182, 0.1);
    padding: 4px 10px;
    border-radius: 6px;
  }

  .annotation-desc {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .annotation-example {
    background: var(--code-bg, #0d1117);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
  }

  .example-label {
    display: block;
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .annotation-example code {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-primary);
  }

  .annotation-values {
    font-size: 13px;
  }

  .values-label {
    color: var(--text-muted);
    margin-right: 8px;
  }

  .values-list {
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 12px;
  }

  /* CTA Section */
  .cta-section {
    text-align: center;
    padding: 60px 20px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    margin-top: 48px;
  }

  .cta-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .cta-desc {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 28px;
    transition: all 0.2s ease;
    cursor: pointer;
    text-decoration: none;
  }

  .btn-accent {
    background: var(--accent);
    color: white;
    border: none;
    position: relative;
    overflow: hidden;
  }

  .btn-accent::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
    transition: background 0.2s ease;
  }

  .btn-accent:hover::before {
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
  }

  .btn-primary {
    background: var(--ui-bg);
    color: var(--text-primary);
    border: 1px solid var(--ui-border);
  }

  .btn-primary:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .docs-layout {
      grid-template-columns: 1fr;
    }

    .toc-sidebar {
      position: static;
      margin-bottom: 24px;
    }

    .toc-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .toc-list li {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    .comparison-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .comparison-row.header {
      display: none;
    }

    .benefit-grid,
    .info-cards,
    .encryption-features,
    .benefit-comparison {
      grid-template-columns: 1fr;
    }

    .code-compare {
      grid-template-columns: 1fr;
    }

    .example-comparison {
      flex-direction: column;
    }
  }
</style>
