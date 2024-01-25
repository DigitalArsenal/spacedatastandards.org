# Space Data Standards Repository

This repository is dedicated to the development and dissemination of space data standards, employing Flatbuffer Interface Definition Language (IDL) schemas as a modern alternative to legacy space data message formats. By embracing Flatbuffers, we aim to provide an efficient, cross-platform serialization solution that is critical for space operations.

Flatbuffers offer several advantages over traditional data serialization methods, particularly in terms of performance and memory efficiency. This makes them highly suitable for space applications where resources are at a premium.

## Repository Structure

The repository is structured to facilitate easy access and collaboration:

- **dist/**: This directory contains the generated source code files from Flatbuffer IDLs, ready for use in various programming environments.

## Purpose

The primary goal of this repository is to establish a set of standardized Flatbuffer IDLs that can replace a variety of legacy space data messages such as SATCAT, TLE, VCM, and others. These legacy formats have served the space industry for decades, but as technology progresses, the need for more advanced data handling becomes apparent.

Transitioning to Flatbuffer IDLs allows us to address the challenges of modern space data communication, ensuring faster, more reliable, and more secure data exchange. These standards are essential for the interoperability between different systems and organizations within the aerospace sector.

## Generated Source Code Files

For the generated Flatbuffer IDL source code files, please refer to the `dist/` folder in this repository. Each subfolder within `dist/` corresponds to a specific Flatbuffer schema related to a space data standard.

[Access the Generated Source Code Files](./dist/)

## Contributing

Contributions to this repository are welcome. To propose changes or improvements to the existing Flatbuffer IDLs, please submit a pull request or open an issue for discussion.

For more detailed discussions or to request new features, you may reach out to us via email at [spacestandards@digitalarsenal.io](mailto:spacestandards@digitalarsenal.io), or by [opening an issue](https://github.com/DigitalArsenal/spacedatastandards.org/issues) on this repository.

## More Information

For a more comprehensive understanding of the space data standards being developed in this repository, please refer to our [Gitbook documentation](https://digitalarsenal-io-inc.gitbook.io/spacedatastandards.org/).

For historical context and information about legacy message documentation, please visit the [legacy message documentation section](https://github.com/DigitalArsenal/spacedatastandards.org/tree/main/survey/legacy-messages).
