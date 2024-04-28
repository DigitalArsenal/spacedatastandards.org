import os
import tarfile
import shutil
import flatbuffers
import json
import sys

# Set the path for the FlatBuffers schema files
script_dir = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.abspath(os.path.join(script_dir, "..", "lib", "py", "SCM"))
sys.path.append(SRC_DIR)

from SCM import SCM
from SCM import SCMT
from SCHEMA_STANDARD import SCHEMA_STANDARDT


def read_manifest_flatbuffer(file_path):
    """Read and parse the FlatBuffer file."""
    with open(file_path, "rb") as f:
        buf = f.read()

    # Get the root of the FlatBuffer
    manifest = SCM.GetRootAsSCM(buf, 0)
    return manifest


def manifest_to_dict(manifest):
    """Convert the SCM object to a Python dictionary."""
    manifest_dict = {"version": manifest.Version().decode("utf-8"), "STANDARDS": {}}
    for i in range(manifest.RECORDSLength()):
        standard = manifest.RECORDS(i)
        key = standard.Key().decode("utf-8")
        idl = standard.Idl().decode("utf-8") if standard.Idl() else None
        files = [
            standard.Files(j).decode("utf-8") for j in range(standard.FilesLength())
        ]
        manifest_dict["STANDARDS"][key] = {"IDL": idl, "files": files}
    return manifest_dict


def write_json(file_path, data):
    """Write data to a JSON file."""
    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)


def create_tar_gz_of_directory(directory, output_dir):
    """Create a tar.gz file from a directory."""
    with tarfile.open(output_dir, "w:gz") as tar:
        tar.add(directory, arcname=os.path.basename(directory))


def main():
    lib_dir = "./lib"
    schema_dir = "./schema"
    dist_dir = "./dist"
    standards = {}
    package_json_path = "package.json"

    # Read version from package.json
    version = "unknown"
    if os.path.exists(package_json_path):
        with open(package_json_path, "r") as file:
            package_data = json.load(file)
        version = package_data.get("version", version)

    # Clear and recreate the dist directory
    if os.path.exists(dist_dir):
        shutil.rmtree(dist_dir)
    os.makedirs(dist_dir)

    # Process each child directory in lib_dir
    for subdir in os.listdir(lib_dir):
        subdir_path = os.path.join(lib_dir, subdir)
        if os.path.isdir(subdir_path):
            for child in os.listdir(subdir_path):
                child_path = os.path.join(subdir_path, child)
                if os.path.isdir(child_path):
                    child_dist_dir = os.path.join(dist_dir, child)
                    os.makedirs(child_dist_dir, exist_ok=True)

                    archive_name = f"{child}.{subdir}.tar.gz"
                    output_file = os.path.join(child_dist_dir, archive_name)
                    create_tar_gz_of_directory(child_path, output_file)

                    # Initialize or append to 'files' in the manifest
                    if child not in standards:
                        standards[child] = {"IDL": None, "files": []}
                    standards[child]["files"].append(output_file)

    # Process each child directory in schema_dir to read IDL
    for child in os.listdir(schema_dir):
        child_path = os.path.join(schema_dir, child)
        if os.path.isdir(child_path):
            # Read IDL content
            idl_file_path = os.path.join(child_path, "main.fbs")
            if os.path.isfile(idl_file_path):
                with open(idl_file_path, "r") as idl_file:
                    idl_content = idl_file.read()
                # Update or create 'IDL' in the manifest
                if child in standards:
                    standards[child]["IDL"] = idl_content
                else:
                    standards[child] = {"IDL": idl_content, "files": []}

    # Create SCHEMA_STANDARDT objects for each standard
    standards_objects = []
    for key, value in standards.items():
        standard_obj = SCHEMA_STANDARDT()
        standard_obj.key = key
        standard_obj.idl = value["IDL"]
        standard_obj.files = value["files"]
        standards_objects.append(standard_obj)

    # Create SCMT object
    manifest_obj = SCMT()
    manifest_obj.version = version
    manifest_obj.RECORDS = standards_objects

    # Serialize the SCMT object to a FlatBuffer
    builder = flatbuffers.Builder(0)
    builder.Finish(manifest_obj.Pack(builder))
    manifest_buf = builder.Output()

    # Write the FlatBuffer to a file
    manifest_json_path = os.path.abspath(os.path.join(dist_dir, "manifest.json"))
    manifest_path = os.path.abspath(os.path.join(dist_dir, "manifest.fb"))

    with open(manifest_path, "wb") as manifest_file:
        manifest_file.write(manifest_buf)

    print(f"Created manifest file: {manifest_path}")

    # Read the FlatBuffer file
    manifest = read_manifest_flatbuffer(manifest_path)

    # Convert the manifest to a Python dictionary
    manifest_dict = manifest_to_dict(manifest)

    # Print the dictionary
    # print(json.dumps(manifest_dict, indent=4))

    # Write the dictionary back to disk as JSON
    write_json(manifest_json_path, manifest_dict)

    print(f"Written JSON manifest to {manifest_json_path}")


if __name__ == "__main__":
    main()
