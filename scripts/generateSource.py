import os
import platform
import shutil
import subprocess
import json

# Get the directory in which the current script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Path to the data.json file relative to the script
data_json_path = os.path.join(script_dir, "datatypes.json")

# Load the JSON data
with open(data_json_path, "r") as file:
    data = json.load(file)

# Define the source and output directories using absolute paths
SRC_DIR = os.path.abspath(os.path.join(script_dir, "..", "schema"))
OUTPUT_DIR = os.path.abspath(os.path.join(script_dir, "..", "lib"))
FLATC_DIR = os.path.abspath(os.path.join(script_dir, "..", "bin"))

# Clear the directory
shutil.rmtree(OUTPUT_DIR, ignore_errors=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)


# Helper function to find all fbs files referenced by main.fbs
def find_referenced_fbs(directory):
    referenced_files = []
    main_fbs_path = os.path.join(directory, "main.fbs")
    if os.path.isfile(main_fbs_path):
        with open(main_fbs_path, "r") as f:
            lines = f.readlines()
        for line in lines:
            if line.startswith("include"):
                # Extract the file name and assume it's directly under the same directory
                included_file = line.split('"')[1]
                included_path = os.path.join(directory, included_file)
                if os.path.isfile(included_path):
                    referenced_files.append(included_path)
                    # Recursively check for files included in the included files
                    referenced_files.extend(
                        find_referenced_fbs(os.path.dirname(included_path))
                    )
    return referenced_files


# Process each subdirectory in the schema directory
for subdir in os.listdir(SRC_DIR):
    subdir_path = os.path.join(SRC_DIR, subdir)
    if os.path.isdir(subdir_path):
        referenced_files = find_referenced_fbs(subdir_path)

        # Add main.fbs file path if not already included
        main_fbs_path = os.path.join(subdir_path, "main.fbs")
        if main_fbs_path not in referenced_files:
            referenced_files.append(main_fbs_path)

        # Process each entry in the JSON data
        for entry in data:
            args, lang_name, ext, _ = (
                entry if isinstance(entry, list) else (entry, *entry[1:])
            )
            args = args if isinstance(args, list) else [args]

            # Define the output path for the specific language extension
            OUTPUT_PATH = os.path.join(OUTPUT_DIR, ext, subdir)
            os.makedirs(OUTPUT_PATH, exist_ok=True)

            # Prepare the command
            flatc_executable = "flatc_osx" if platform.system() == "Darwin" else "flatc"
            flatc_command = os.path.join(FLATC_DIR, flatc_executable)
            command = [
                flatc_command,
                "--preserve-case",
                *args,
                "-o",
                OUTPUT_PATH,
            ] + referenced_files
            subprocess.run(command)
print("Code Generation Complete.")
