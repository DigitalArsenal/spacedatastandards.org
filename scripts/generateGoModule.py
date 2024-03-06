import os


def update_go_package_names(parent_dir):
    # Loop through the subdirectories in ./lib/go
    for subdir in next(os.walk(parent_dir))[
        1
    ]:  # `[1]` to get the list of subdirectories
        subdir_path = os.path.join(parent_dir, subdir)
        # Check if subdir name is 3 letters long as expected for package names
        for file in os.listdir(subdir_path):
            # Check if the current file is a Go file
            if file.endswith(".go"):
                file_path = os.path.join(subdir_path, file)
                with open(file_path, "r") as file:
                    lines = file.readlines()
                with open(file_path, "w") as file:
                    for line in lines:
                        # Replace package declaration with the new one based on subdir name
                        if line.startswith("package "):
                            line = f"package {subdir}\n"
                        file.write(line)



# Assuming the script is located at the root where `lib` directory is present.
if __name__ == "__main__":
    lib_go_path = "./lib/go"
    update_go_package_names(lib_go_path)