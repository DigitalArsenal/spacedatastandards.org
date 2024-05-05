import os


def generate_bov_collection(folder_identifier):
    """
    Generates the BOVCOLLECTION table string, customized with the folder identifier.
    """
    return f"""table {folder_identifier}COLLECTION {{
  RECORDS: [{folder_identifier}];
}}

"""


def modify_fbs_file(file_path, folder_identifier):
    """
    Modifies a given .fbs file by adding a collection table before the `root_type` if not already present.
    """
    with open(file_path, "r") as file:
        original_content = file.read()

    # Check if the collection table already exists
    collection_table_name = f"table {folder_identifier}COLLECTION"
    if collection_table_name not in original_content:
        # Generate the new collection table definition
        collection_table = generate_bov_collection(folder_identifier)

        # Locate the position to insert before 'root_type'
        root_type_pos = original_content.find("root_type")
        if root_type_pos == -1:
            # 'root_type' not found; simply append at the end
            new_content = original_content + collection_table
        else:
            # Insert the collection table before 'root_type'
            new_content = (
                original_content[:root_type_pos]
                + collection_table
                + original_content[root_type_pos:]
            )

        # Write the modified content back to the file
        with open(file_path, "w") as file:
            file.write(new_content)


def process_directory(directory):
    """
    Recursively searches for folders containing main.fbs files and applies the modification.
    """
    for root, dirs, files in os.walk(directory):
        if "main.fbs" in files:
            folder_name = os.path.basename(root)
            file_path = os.path.join(root, "main.fbs")
            modify_fbs_file(file_path, folder_name)


# Set this to the path containing the parent directory that includes the folders.
base_directory = "./schema"
process_directory(base_directory)
