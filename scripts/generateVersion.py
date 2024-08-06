import json
import os
import time
import hashlib
import argparse

HEADER_PATTERN = "// -----------------------------------END_HEADER"


def calculate_hash(content):
    """Calculate SHA-256 hash of the content"""
    return hashlib.sha256(content.encode("utf-8")).hexdigest()


def process_idl_file(file_path, major_version, minor_version, debug=False):
    """Process an IDL file to update its hash and version"""
    with open(file_path, "r") as file:
        content = file.read()

    existing_header = HEADER_PATTERN in content

    if existing_header:
        header, content_to_hash = content.split(HEADER_PATTERN, 1)
        lines = header.strip().splitlines()
        previous_hash = lines[0].split(":")[1].strip()
        previous_version = lines[1].split(":")[1].strip()
    else:
        previous_hash = None
        previous_version = f"{major_version}.{minor_version}.0"
        content_to_hash = content

    content_to_hash = content_to_hash.strip()
    current_hash = calculate_hash(content_to_hash)

    if debug:
        print(f"Processing file: {file_path}")
        print(f"Previous hash: {previous_hash}")
        print(f"Current hash: {current_hash}")
        print(f"Previous version: {previous_version}")
        print(f"Content to hash:\n{content_to_hash}")

    if current_hash != previous_hash:
        version_parts = previous_version.split(".")
        major, minor, patch_build = (
            version_parts[0],
            version_parts[1],
            version_parts[2].split("+")[0],
        )
        new_patch = int(patch_build) + 1 if existing_header else 0
        new_version = f"{major}.{minor}.{new_patch}"

        new_header = (
            f"// Hash: {current_hash}\n"
            f"// Version: {new_version}\n"
            f"{HEADER_PATTERN}"
        )
        new_content = new_header + "\n" + content_to_hash

        with open(file_path, "w") as file:
            file.write(new_content)

        print(
            f"Updated IDL file '{file_path}' with new hash and version: {new_version}"
        )
        return True  # Indicate that a change was detected and processed
    else:
        print(f"No changes detected in IDL file '{file_path}'.")
        return False  # Indicate that no change was detected


def main():
    parser = argparse.ArgumentParser(
        description="Process IDL files and update versions."
    )
    parser.add_argument("--debug", action="store_true", help="Enable debug output")
    args = parser.parse_args()

    # Read version from package.json
    package_json_path = "package.json"
    if os.path.exists(package_json_path):
        with open(package_json_path, "r") as file:
            data = json.load(file)
        current_version = data.get("version", "1.0.0+0")
        major_version, minor_version, patch_build = current_version.split(".")
        patch, build_number = patch_build.split("+")
    else:
        print(f"'{package_json_path}' not found.")
        return

    # Process IDL files in the 'schema' directory
    schema_directory = "schema"
    changed_files = []
    for subdir, dirs, files in os.walk(schema_directory):
        for file in files:
            if file.endswith(".fbs"):
                file_path = os.path.join(subdir, file)
                if process_idl_file(
                    file_path, major_version, minor_version, args.debug
                ):
                    changed_files.append(file_path)

    # Increment the minor version in package.json if any change was detected
    if changed_files:
        new_minor_version = int(minor_version) + 1
        new_major_minor_version = f"{major_version}.{new_minor_version}"
        new_build_number = int(time.time() * 1000)
        new_version = f"{new_major_minor_version}.0+{new_build_number}"

        # Update the version in package.json
        data["version"] = new_version
        with open(package_json_path, "w") as file:
            json.dump(data, file, indent=4)
        print(f"Updated version in '{package_json_path}' to {new_version}")
    else:
        print("No changes detected in any IDL files.")


if __name__ == "__main__":
    main()
