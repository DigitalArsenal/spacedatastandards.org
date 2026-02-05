import fs from "fs";
import path from "path";

const directoryPath = path.join("lib", "rs");
const srcDir = path.join(directoryPath, "src");
const libFilePath = path.join(srcDir, "lib.rs");
const mainGeneratedFilePath = path.join(srcDir, "main_generated.rs");

// Function to reset the directory structure
function resetDirectoryStructure() {
  if (fs.existsSync(srcDir)) {
    // Move lib.rs and main_generated.rs back to their original location
    if (fs.existsSync(libFilePath)) {
      fs.renameSync(libFilePath, path.join(directoryPath, "lib.rs"));
    }
    if (fs.existsSync(mainGeneratedFilePath)) {
      fs.renameSync(
        mainGeneratedFilePath,
        path.join(directoryPath, "main_generated.rs")
      );
    }

    // Move all module directories back to their original location
    fs.readdirSync(srcDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .forEach((dirent) => {
        const moduleDirPath = path.join(srcDir, dirent.name);
        const originalDirPath = path.join(directoryPath, dirent.name);
        fs.renameSync(moduleDirPath, originalDirPath);
      });

    // Remove the src directory if empty
    if (fs.readdirSync(srcDir).length === 0) {
      fs.rmdirSync(srcDir);
    }
  }
}

// Function to generate Cargo.toml
function generateCargoToml() {
  const cargoTomlContent = `
[package]
name = "spacedatastandards-org"
version = "0.1.0"
edition = "2021"
description = "Space data standards framework based on CCSDS standards and Google FlatBuffers."
license = "Apache-2.0"
authors = ["sds@digitalarsenal.io", "shanebenlolo@gmail.com"]
repository = "https://github.com/DigitalArsenal/spacedatastandards.org"
homepage = "https://spacedatastandards.org"
exclude = [
    "publish_cargo.sh",
    "publish_cargo_env_example.env",
]

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html
[dependencies]
flatbuffers = "24.3.25"
  `;
  fs.writeFileSync(
    path.join(directoryPath, "Cargo.toml"),
    cargoTomlContent.trim()
  );
}

// Reset the directory structure before running the main logic
resetDirectoryStructure();

// Generate lib.rs
let lib = "pub mod main_generated;\n\n";
fs.readdirSync(directoryPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    const folderName = dirent.name;
    if (folderName === "target") return;

    lib += `pub mod ${folderName} {\n`;
    lib += "    pub mod main_generated;\n";
    lib += "}\n";
  });
fs.writeFileSync(path.join(directoryPath, "lib.rs"), lib);

// Generate main_generated.rs
let mainGenerated = "";
fs.readdirSync(directoryPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    const folderName = dirent.name;
    if (folderName === "target") return;

    mainGenerated += `pub use crate::${folderName}::main_generated::*;\n`;
  });
fs.writeFileSync(path.join(directoryPath, "main_generated.rs"), mainGenerated);

// Create src folder if it doesn't exist
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

// Move lib.rs and main_generated.rs to src
fs.renameSync(path.join(directoryPath, "lib.rs"), libFilePath);
fs.renameSync(
  path.join(directoryPath, "main_generated.rs"),
  mainGeneratedFilePath
);

// Move all module directories to src
fs.readdirSync(directoryPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    if (dirent.name === "src") {
      return;
    }
    const moduleDirPath = path.join(directoryPath, dirent.name);
    const newModuleDirPath = path.join(srcDir, dirent.name);
    fs.renameSync(moduleDirPath, newModuleDirPath);
  });

// Generate Cargo.toml
generateCargoToml();
