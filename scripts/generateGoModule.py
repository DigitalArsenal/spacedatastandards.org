import json
import os
import subprocess


def read_package_json(package_json_path):
    """Read the package.json file and return its contents"""
    with open(package_json_path, "r") as file:
        data = json.load(file)
    return data


def initialize_go_module_in_subdirs(parent_directory, module_path_base):
    """Initialize a Go module in each subdirectory of the parent_directory"""
    for subdir_name in os.listdir(parent_directory):
        subdir_path = os.path.join(parent_directory, subdir_name)
        if os.path.isdir(subdir_path):
            go_mod_path = os.path.join(subdir_path, "go.mod")
            module_path = f"{module_path_base}/{subdir_name}"
            with open(go_mod_path, "w") as go_mod_file:
                go_mod_file.write(f"module {module_path}\n")
                go_mod_file.write("\n")  # Add a newline at the end of the file
            # print(f"Initialized Go module in {subdir_path}")


def update_flatbuffers_version_in_subdirs(parent_directory, flatbuffers_version):
    """Update the FlatBuffers version in the go.mod file for all subdirectories"""
    for subdir_name in os.listdir(parent_directory):
        subdir_path = os.path.join(parent_directory, subdir_name)
        if os.path.isdir(subdir_path):
            go_mod_path = os.path.join(subdir_path, "go.mod")
            if os.path.exists(go_mod_path):
                with open(go_mod_path, "a") as go_mod_file:
                    go_mod_file.write(
                        f"require github.com/google/flatbuffers {flatbuffers_version}\n"
                    )
                subprocess.run(["go", "mod", "tidy"], cwd=subdir_path)
                # print(f"Updated FlatBuffers version to {flatbuffers_version} in {go_mod_path}")


def main():
    package_json_path = "package.json"
    parent_directory = "lib/go"
    module_path_base = "github.com/DigitalArsenal/spacedatastandards.org/lib/go"

    # Initialize Go modules in all subdirectories
    initialize_go_module_in_subdirs(parent_directory, module_path_base)

    # Read the package.json file
    package_data = read_package_json(package_json_path)

    # Get the FlatBuffers version from package.json dependencies
    flatbuffers_version = (
        "v" + package_data["dependencies"]["flatbuffers"] + "+incompatible"
    )

    # Update the FlatBuffers version in the go.mod file for all subdirectories
    update_flatbuffers_version_in_subdirs(parent_directory, flatbuffers_version)


if __name__ == "__main__":
    main()
