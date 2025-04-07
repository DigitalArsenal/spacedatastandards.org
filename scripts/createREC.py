import os
import re


def list_schema_files(schema_dir, skip_dir="REC"):
    schema_files = []
    for root, dirs, files in os.walk(schema_dir):
        for file in files:
            if file == "main.fbs":
                rel_dir = os.path.relpath(root, schema_dir)
                if rel_dir.upper() != skip_dir.upper():
                    base_type = rel_dir.upper()
                    schema_files.append((rel_dir, base_type))
    return sorted(schema_files, key=lambda x: x[1])


def generate_includes_and_union(schema_files):
    imports = [f'include "../{rel_dir}/main.fbs";' for rel_dir, _ in schema_files]
    types = [base_type for _, base_type in schema_files]
    formatted_types = [", ".join(types[i : i + 4]) for i in range(0, len(types), 4)]
    formatted_union_body = ",\n  ".join(formatted_types)
    union_def = f"union RecordType {{\n  {formatted_union_body}\n}}  // Union of all record types"
    return "\n".join(imports), union_def


def replace_block(content, pattern, replacement):
    return re.sub(pattern, replacement, content, flags=re.DOTALL | re.MULTILINE)


def update_schema_file(schema_files, output_path):
    with open(output_path, "r", encoding="utf-8") as f:
        content = f.read()

    includes, union_def = generate_includes_and_union(schema_files)

    # Replace includes after the header
    content = replace_block(
        content,
        r"(// -----------------------------------END_HEADER\n)(.*?)(?=\nunion RecordType\s*\{)",
        r"\1" + includes + "\n"
    )

    # Replace entire union block (from 'union RecordType { ... } // Union...')
    content = replace_block(
        content,
        r"union\s+RecordType\s*\{[^}]+\}\s*//\s*Union of all record types",
        union_def
    )

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Schema file updated: {output_path}")


def main():
    schema_dir = "./schema"
    output_path = os.path.join(schema_dir, "REC", "main.fbs")
    schema_files = list_schema_files(schema_dir, skip_dir="REC")
    update_schema_file(schema_files, output_path)


if __name__ == "__main__":
    main()