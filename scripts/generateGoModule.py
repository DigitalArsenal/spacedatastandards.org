import json
import os
import subprocess


def read_package_json(package_json_path):
    """Read the package.json file and return its contents"""
    with open(package_json_path, "r") as file:
        data = json.load(file)
    return data


def update_flatbuffers_version(go_directory, flatbuffers_version):
    """Update the FlatBuffers version in the go.mod file"""
    go_mod_path = os.path.join(go_directory, "go.mod")

    if not os.path.exists(go_mod_path):
        print(f"No go.mod file found in {go_directory}")
        return

    # Read the content of go.mod and update the flatbuffers version
    with open(go_mod_path, "r") as file:
        lines = file.readlines()

    with open(go_mod_path, "w") as file:
        for line in lines:
            if line.startswith("require") and "flatbuffers" in line:
                # Replace the existing flatbuffers version with the new one
                parts = line.split()
                parts[-1] = flatbuffers_version  # Assume the version is the last part
                line = " ".join(parts) + "+incompatible\n"
            file.write(line)

    # Run go mod tidy to clean up the go.mod and go.sum files
    subprocess.run(["go", "mod", "tidy"], cwd=go_directory)
    print(f"Updated FlatBuffers version to {flatbuffers_version} in go.mod")


def main():
    package_json_path = "package.json"
    go_directory = "lib/go"

    # Read the package.json file
    package_data = read_package_json(package_json_path)

    # Get the FlatBuffers version from package.json dependencies
    flatbuffers_version = "v" + package_data["dependencies"]["flatbuffers"]

    # Update the FlatBuffers version in the go.mod file
    update_flatbuffers_version(go_directory, flatbuffers_version)


if __name__ == "__main__":
    main()
