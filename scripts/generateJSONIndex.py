import json
import os
from pathlib import Path

# Set the directory where the main.schema.json files are located
lib_json_dir = './lib/json'

# Initialize an empty dictionary to hold the JSON objects
schema_dict = {}
schema_dict["STANDARDS"] = {}
# Walk through the directory
for root, dirs, files in os.walk(lib_json_dir):
    for file in files:
        # Check if the file is a main.schema.json file
        if file == "main.schema.json":
            # Get the three-letter identifier from the directory name
            three_letter_id = Path(root).name
            # Construct the full path to the file
            file_path = os.path.join(root, file)
            # Read the JSON file and add it to the dictionary
            with open(file_path, 'r') as json_file:
                schema_dict["STANDARDS"][three_letter_id] = json.load(json_file)

# Set the path for the output JSON file in the root of the /json directory
output_path = './lib/json/index.json'

# Write the combined JSON object to the file
with open(output_path, 'w') as outfile:
    json.dump(schema_dict, outfile, indent=4)

# Returning the path to the created file to provide it to the user
output_path
