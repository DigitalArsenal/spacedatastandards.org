import os

def modify_flatbuffer_schema(schema_path):
    """
    Modify the FlatBuffer schema file by removing tables with 'COLLECTION' in their names
    and updating the root_type to match the non-collection table name.
    """
    with open(schema_path, 'r') as file:
        lines = file.readlines()

    new_lines = []
    inside_collection_table = False
    root_type_set = False
    for line in lines:
        if 'table' in line and 'COLLECTION' in line:
            inside_collection_table = True
            continue  # Skip this line
        elif inside_collection_table and '}' in line:
            inside_collection_table = False
            continue  # Skip the closing bracket of the collection table
        if not inside_collection_table:
            if 'root_type' in line and not root_type_set:
                # Extract the root type from the line that declares the COLLECTION
                root_type = line.split()[1].replace('COLLECTION;', '').strip()
                new_lines.append(f'root_type {root_type};\n')
                root_type_set = True
            elif 'file_identifier' in line:
                new_lines.append(line)  # Keep the file identifier line unchanged
            elif not 'root_type' in line:
                new_lines.append(line)  # Keep all other lines unchanged

    with open(schema_path, 'w') as file:
        file.writelines(new_lines)

def process_schema_folders(root_folder='schema'):
    """
    Traverse through the folders inside the root_folder and modify each FlatBuffer schema file by
    removing 'COLLECTION' tables and updating the root_type.
    """
    for root, dirs, files in os.walk(root_folder):
        for name in files:
            if name.endswith('.fbs'):  # Assuming the schema files have .fbs extension
                schema_path = os.path.join(root, name)
                print(f"Processing {schema_path}")
                modify_flatbuffer_schema(schema_path)

# Call the function to start processing
process_schema_folders()