# Tap Schema Workshop

## Overview

This project is a barebones framework to generate code from Flatbuffer IDL schemas.

## Prerequisites

- Node.js (version 16 or later recommended)
- npm (usually comes with Node.js)
- Python (version 3.10.12 or later)

## Installation

Clone the repository to your local machine:

```bash
git clone ssh://git@gitlab.sdataplab.com:10022/tjkoury/tap-schema-workshop.git
```

Navigate to the project directory and install dependencies:

```bash
cd tap-schema-workshop
npm install
pip install -r requirements.txt 
```

## Generating Schemas

This project includes a script to automatically generate JSON schema files from FlatBuffers `.fbs` files.

### Generation Prerequisites

Before running the `build` script, ensure that you have FlatBuffers installed and the `flatc` compiler is available in your system's PATH.

### Generation Usage

To generate code from the schema files, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of the project.
3. Run the script by entering the following command:

```bash
npm run build
```

Each code generation run has a script file in `scripts`, and each has it's own independent build task in `package.json`, which can be called seperately.

## Versioning

[A script](./scripts//generateVersion.py) automates the process of semantic versioning for patch versions, based on the changes in your schema files. Here’s how it works:

- File Monitoring: The script monitors the files in the schema subdirectory.
- Version Updating: If any file in the schema directory has been modified since the last time the package.json was updated, the script increments the patch version in the semantic versioning format (major.minor.patch). This ensures that changes in the schema are reflected in the version - number.
- Timestamp Incorporation: Along with updating the patch version, the script also appends a build number to the version, represented as a Unix timestamp in milliseconds. This addition follows the format major.minor.patch+timestamp, making each build uniquely identifiable.
- Automated Execution: The script is intended to be run automatically as part of the build process, ensuring consistent version management without manual intervention.

### Note

#### The major and minor versions still need to be manually updated based on [semantic versioning rules](https://semver.org/)

## Manual Source Code Generation

To manually generate TypeScript source code from FlatBuffers schema files, use the flatc compiler with the following command:

```bash
flatc --ts --gen-object-api -o lib/[output folder]/ ./[path to IDL]/[idlname].fbs
```

## Use of the `.fb` File Extension Convention in SpaceDataStandards.org

 For binary FlatBuffers files, which are the serialized output of these schemas, there is no strict convention on the file extension.  In this project, we use the .fb extension for serialized FlatBuffer files. This choice of extension serves two primary purposes:

1. Clarity and Differentiation: The .fb extension clearly differentiates binary FlatBuffer files from FlatBuffers schema files, which use the .fbs extension.

2. Simplicity and Recognition: The .fb extension is succinct and directly associated with FlatBuffers, making it easy for developers to recognize the file type. This is especially important in environments where multiple serialization formats might be used.

## File Identifier Convention in SpaceDataStandards.org FlatBuffers Schema

In the initial design of our FlatBuffers schema generator, we aimed to use a unique identifier for the file_identifier that would be easily recognizable and meaningful, and unlikely to be naturally occuring. The `file_identifier` in FlatBuffers is constrained to exactly four ASCII characters.

This restriction is inherent to the FlatBuffers binary format specification and is crucial for ensuring the efficiency and compatibility of the binary data with its schema. We have decided to use a combination of a dollar sign followed by a three-letter abbreviation, e.g., "$HYP". This allows for 17,576 different message schemas.

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your proposed changes.

## License

All rights to the source code are reserved by the individual contributors, contact them for more information.
