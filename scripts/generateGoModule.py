import os

def update_go_package_names(parent_dir):
    # Loop through the subdirectories in ./lib/go
    for subdir in next(os.walk(parent_dir))[1]:
        subdir_path = os.path.join(parent_dir, subdir)
        for file in os.listdir(subdir_path):
            if file.endswith(".go"):
                file_path = os.path.join(subdir_path, file)
                with open(file_path, "r") as f:
                    lines = f.readlines()
                with open(file_path, "w") as f:
                    for line in lines:
                        if line.startswith("package "):
                            line = f"package {subdir}\n"
                        f.write(line)

def create_go_mod(lib_go_path):
    go_mod_content = """module github.com/DigitalArsenal/spacedatastandards.org/lib/go

go 1.21

require github.com/google/flatbuffers/go v23.3.3+incompatible
"""
    go_mod_path = os.path.join(lib_go_path, "go.mod")
    with open(go_mod_path, "w") as f:
        f.write(go_mod_content)

if __name__ == "__main__":
    lib_go_path = "./lib/go"
    update_go_package_names(lib_go_path)
    create_go_mod(lib_go_path)