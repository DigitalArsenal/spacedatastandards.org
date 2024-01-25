import json
import os
import time

def get_last_modified_time_of_files(directory):
    """ Get the latest modified time among all files in a directory """
    latest_time = 0
    for subdir, dirs, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(subdir, file)
            file_time = os.path.getmtime(filepath)
            latest_time = max(latest_time, file_time)
    return latest_time

def increment_patch_version(version):
    """ Increment the patch version of a semantic version string """
    parts = version.split('+')[0].split('.')
    if len(parts) == 3:
        major, minor, patch = parts
        patch = int(patch) + 1
        return f"{major}.{minor}.{patch}"
    else:
        return "1.0.1"  # default if version format is unexpected

def update_version_in_json(file_path, new_version):
    """ Update the version number in a JSON file """
    with open(file_path, 'r') as file:
        data = json.load(file)
    data['version'] = new_version
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

def main():
    # Read version from package.json
    package_json_path = 'package.json'
    if os.path.exists(package_json_path):
        with open(package_json_path, 'r') as file:
            data = json.load(file)
        current_version = data.get('version', '1.0.0')

        # Check if any files in 'schema' directory have changed
        schema_directory = 'schema'
        last_modified_time_schema = get_last_modified_time_of_files(schema_directory)
        build_number = int(time.time() * 1000)
        new_version = increment_patch_version(current_version)

        if last_modified_time_schema > os.path.getmtime(package_json_path):
            # Update version if files in 'schema' have changed
            new_version += '+' + str(build_number)
            update_version_in_json(package_json_path, new_version)
            print(f"Updated version in '{package_json_path}' to {new_version}")
        else:
            # Only update build number if no changes in 'schema'
            new_version = current_version.split('+')[0] + '+' + str(build_number)
            update_version_in_json(package_json_path, new_version)
            print(f"Updated build number in '{package_json_path}' to {new_version}")
    else:
        print(f"'{package_json_path}' not found.")

if __name__ == "__main__":
    main()
