import json
import os


def read_and_modify_package_json():
    # Define the path to the package.json file in the parent directory
    path_to_package_json = "package.json"

    # Define the new directory to copy the modified package.json
    new_directory_path = "./lib/js"

    # Ensure the new directory exists
    os.makedirs(new_directory_path, exist_ok=True)

    # Read the original package.json file
    with open(path_to_package_json, "r") as file:
        package_data = json.load(file)

    # Update the 'name' property
    package_data["name"] = "@digitalarsenal/standards"  # Set the desired name here

    # Remove the 'scripts' property
    if "scripts" in package_data:
        del package_data["scripts"]

    # Remove the 'main' property
    if "main" in package_data:
        del package_data["main"]

    # Remove the 'main' property
    if "files" in package_data:
        del package_data["files"]

    # Retain only the 'flatbuffers' dependency
    if "dependencies" in package_data:
        flatbuffers_version = package_data["dependencies"].get("flatbuffers")
        if flatbuffers_version:
            package_data["dependencies"] = {"flatbuffers": flatbuffers_version}
        else:
            del package_data["dependencies"]

    # Remove 'devDependencies' if present
    if "devDependencies" in package_data:
        del package_data["devDependencies"]

    # Define the path for the new package.json in the new directory
    new_package_json_path = os.path.join(new_directory_path, "package.json")

    # Write the modified data to the new package.json file
    with open(new_package_json_path, "w") as new_file:
        json.dump(package_data, new_file, indent=4)


# Run the function
read_and_modify_package_json()
