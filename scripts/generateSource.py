import os
import subprocess
import json
import shutil

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

# Clear the directory
shutil.rmtree(OUTPUT_DIR, ignore_errors=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Store the current directory
CURRENT_DIR = os.getcwd()

# Navigate to the schema directory
os.chdir(SRC_DIR)

# Process each entry in the JSON data
for entry in data:
    # Unpack the entry
    args, lang_name, ext, type = (
        entry if isinstance(entry, list) else (entry, *entry[1:])
    )
    args = args if isinstance(args, list) else [args]

    # Loop through all subdirectories in the schema directory
    for dir in os.listdir("."):
        if os.path.isdir(dir):
            # Define the output path for each directory
            OUTPUT_PATH = os.path.join(CURRENT_DIR, OUTPUT_DIR, ext)
            os.makedirs(OUTPUT_PATH, exist_ok=True)

            # Navigate into the source subdirectory
            os.chdir(dir)

            # Find all .fbs files in the directory
            for fbs in os.listdir("."):
                if fbs.endswith(".fbs") and os.path.getsize(fbs) > 0:
                    # Define the directory path for each file
                    dir_path = os.path.join(OUTPUT_PATH, dir)
                    os.makedirs(dir_path, exist_ok=True)

                    # Prepare the command
                    command = ["flatc"]
                    # Append '--gen-all' only for TypeScript
                    if lang_name == 'TypeScript':
                        command.append("--gen-all")
                    # Add the rest of the arguments
                    command.extend(args)
                    command.extend(["-o", dir_path, fbs])
                    
                    subprocess.run(command)
            # Go back to the schema directory before the next iteration
            os.chdir(SRC_DIR)

# Go back to the original directory
os.chdir(CURRENT_DIR)
print("Code Generation Complete.")
