import os


def list_schema_files(schema_dir, skip_dir="REC"):
    """List all main.fbs files and extract directory names and base types, skipping the specified directory."""
    schema_files = []
    for root, dirs, files in os.walk(schema_dir):
        for file in files:
            if file == "main.fbs":
                rel_dir = os.path.relpath(root, schema_dir)
                if rel_dir.upper() != skip_dir.upper():  # Skip the specified directory
                    base_type = (
                        rel_dir.upper()
                    )  # Assuming directory names match the desired type names
                    schema_files.append((rel_dir, base_type))
    return schema_files


def create_schema_file(schema_files, output_dir):
    """Create a FlatBuffers schema file with dynamic imports and union definitions."""
    imports = []
    types = []

    for rel_dir, base_type in schema_files:
        imports.append(f'include "../{rel_dir}/main.fbs";')
        types.append(base_type)

    header = "\n".join(imports) + "\n\n"

    # Formatting types in groups of four per line
    formatted_types = [", ".join(types[i : i + 4]) for i in range(0, len(types), 4)]
    formatted_union_body = ",\n  ".join(formatted_types)
    union_def = f"union RecordType {{\n  {formatted_union_body}\n}}  // Union of all record types\n\n"

    body = (
        "table Record {\n"
        "  value: RecordType; \n"
        "}\n\n"
        "/// Collection of Standard Records\n"
        "table REC {\n"
        "  version: string;\n"
        "  standard: string;\n"
        "  RECORDS: [Record]; \n"
        "}\n\n"
        "table RECCOLLECTION {\n"
        "  RECORDS: [REC];\n"
        "}\n\n"
        "root_type REC;\n"
        'file_identifier "$REC";\n'
    )

    # Write the content to the output file
    with open(os.path.join(output_dir, "main.fbs"), "w") as file:
        file.write(header + union_def + body)
    print(f"Schema file created: {output_dir}/main.fbs")


def main():
    schema_dir = "./schema"
    output_dir = f"{schema_dir}/REC"
    schema_files = list_schema_files(schema_dir, skip_dir="REC")
    create_schema_file(schema_files, output_dir)


if __name__ == "__main__":
    main()