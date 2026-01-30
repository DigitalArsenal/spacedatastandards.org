"""
Generate FB JSON Schema files with x-flatbuffer-* extensions.

Takes the existing JSON Schema output from flatc (lib/json/) and augments it
with x-flatbuffer metadata parsed from the .fbs source files, following the
flatc-wasm x-flatbuffer extension spec.

Output: lib/fbjson/{STD}/main.fb.schema.json
"""

import json
import os
import re
import copy
from pathlib import Path

SCHEMA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "schema"))
JSON_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib", "json"))
OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib", "fbjson"))


def parse_enum_body(body):
    """Parse enum body to extract values with descriptions.

    Handles multi-line /// comments before each value.
    Enum values are identifiers followed by optional comma, on their own line.
    """
    values = {}
    idx = 0
    lines = body.split("\n")
    doc_lines = []

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("///"):
            doc_lines.append(stripped[3:].strip())
        elif stripped.startswith("//"):
            # Regular comment, not doc - still collect as description
            doc_lines.append(stripped[2:].strip())
        elif stripped == "" or stripped == ",":
            continue
        else:
            # This should be an enum value line like "GCRF," or "GCRF = 0,"
            # Extract the identifier (first word)
            val_match = re.match(r"([A-Za-z_]\w*)", stripped)
            if val_match:
                name = val_match.group(1)
                # Check for explicit value assignment
                eq_match = re.search(r"=\s*(\d+)", stripped)
                if eq_match:
                    idx = int(eq_match.group(1))
                # Collect description from accumulated doc lines
                desc = " ".join(doc_lines).strip()
                values[name] = {"value": idx, "description": desc}
                idx += 1
                doc_lines = []

    return values


def parse_fbs_file(fbs_path):
    """Parse a .fbs file and extract type information."""
    with open(fbs_path, "r") as f:
        content = f.read()

    result = {
        "root_type": None,
        "file_identifier": None,
        "namespace": None,
        "enums": {},   # name -> {underlying_type, values: [{name, value, description}]}
        "tables": {},  # name -> {fields: [{name, type, required, description}]}
        "includes": [],
    }

    # Parse namespace
    ns_match = re.search(r"namespace\s+([\w.]+)\s*;", content)
    if ns_match:
        result["namespace"] = ns_match.group(1)

    # Parse root_type
    rt_match = re.search(r"root_type\s+(\w+)\s*;", content)
    if rt_match:
        result["root_type"] = rt_match.group(1)

    # Parse file_identifier
    fi_match = re.search(r'file_identifier\s+"([^"]+)"\s*;', content)
    if fi_match:
        result["file_identifier"] = fi_match.group(1)

    # Parse includes
    for inc_match in re.finditer(r'include\s+"([^"]+)"\s*;', content):
        inc_path = os.path.normpath(os.path.join(os.path.dirname(fbs_path), inc_match.group(1)))
        result["includes"].append(inc_path)

    # Parse all enums
    for enum_match in re.finditer(
        r"\benum\s+(\w+)\s*:\s*(\w+)\s*\{([^}]*)\}",
        content, re.DOTALL
    ):
        enum_name = enum_match.group(1)
        enum_underlying = enum_match.group(2)
        enum_body = enum_match.group(3)

        # Get enum-level description from preceding /// comment
        enum_start = enum_match.start()
        preceding = content[:enum_start].rstrip()
        enum_desc = ""
        for line in reversed(preceding.split("\n")):
            stripped = line.strip()
            if stripped.startswith("///"):
                enum_desc = stripped[3:].strip()
                break
            elif stripped == "":
                continue
            else:
                break

        values = parse_enum_body(enum_body)
        result["enums"][enum_name] = {
            "underlying_type": enum_underlying,
            "description": enum_desc,
            "values": values,
        }

    # Parse tables
    for table_match in re.finditer(
        r"(?:///\s*(.*?)\s*\n\s*)?table\s+(\w+)\s*\{([^}]*)\}",
        content, re.DOTALL
    ):
        table_desc = table_match.group(1) or ""
        table_name = table_match.group(2)
        table_body = table_match.group(3)
        fields = []
        for field_match in re.finditer(
            r"(?:///\s*(.*?)\s*\n\s*)?(\w+)\s*:\s*(\[?\w+\]?)\s*(?:\(([^)]*)\))?\s*(?:=\s*(\w+))?\s*;",
            table_body
        ):
            desc = field_match.group(1) or ""
            fname = field_match.group(2)
            ftype = field_match.group(3)
            attrs = field_match.group(4) or ""
            default = field_match.group(5)
            required = "required" in attrs
            fields.append({
                "name": fname,
                "type": ftype,
                "required": required,
                "description": desc.strip(),
                "default": default,
            })
        result["tables"][table_name] = {
            "description": table_desc.strip(),
            "fields": fields,
        }

    return result


def collect_all_fbs_info(std_name):
    """Parse a standard's .fbs and all its includes recursively."""
    main_fbs = os.path.join(SCHEMA_DIR, std_name, "main.fbs")
    if not os.path.exists(main_fbs):
        return None

    visited = set()
    combined = {
        "root_type": None,
        "file_identifier": None,
        "namespace": None,
        "enums": {},
        "tables": {},
    }

    def visit(fbs_path):
        fbs_path = os.path.normpath(fbs_path)
        if fbs_path in visited or not os.path.exists(fbs_path):
            return
        visited.add(fbs_path)
        info = parse_fbs_file(fbs_path)
        # Visit includes first (dependencies)
        for inc in info["includes"]:
            visit(inc)
        # Merge
        combined["enums"].update(info["enums"])
        combined["tables"].update(info["tables"])
        # Only take root_type/file_identifier/namespace from the main file
        if fbs_path == os.path.normpath(main_fbs):
            combined["root_type"] = info["root_type"]
            combined["file_identifier"] = info["file_identifier"]
            combined["namespace"] = info["namespace"]

    visit(main_fbs)
    return combined


# Map FlatBuffers scalar types to their canonical names
FB_TYPE_MAP = {
    "bool": "bool",
    "byte": "byte",
    "ubyte": "ubyte",
    "int8": "int8",
    "uint8": "uint8",
    "short": "short",
    "ushort": "ushort",
    "int16": "int16",
    "uint16": "uint16",
    "int": "int",
    "uint": "uint",
    "int32": "int32",
    "uint32": "uint32",
    "float": "float",
    "float32": "float32",
    "long": "long",
    "ulong": "ulong",
    "int64": "int64",
    "uint64": "uint64",
    "double": "double",
    "float64": "float64",
    "string": "string",
}


def augment_definition(defn, name, fbs_info):
    """Add x-flatbuffer extensions to a JSON Schema definition."""
    # Check if this is an enum
    if name in fbs_info["enums"]:
        enum_info = fbs_info["enums"][name]
        defn["x-flatbuffer-type"] = "enum"
        defn["x-flatbuffer-enum-type"] = enum_info["underlying_type"]
        if enum_info["values"]:
            defn["x-flatbuffer-enum-values"] = {}
            for val_name, val_info in enum_info["values"].items():
                entry = {"value": val_info["value"]}
                if val_info["description"]:
                    entry["description"] = val_info["description"]
                defn["x-flatbuffer-enum-values"][val_name] = entry
        return

    # Check if this is a table
    if name in fbs_info["tables"]:
        table_info = fbs_info["tables"][name]
        props = defn.get("properties", {})
        for field in table_info["fields"]:
            fname = field["name"]
            if fname not in props:
                continue
            prop = props[fname]
            ftype = field["type"]

            # Determine x-flatbuffer-type
            if ftype.startswith("[") and ftype.endswith("]"):
                inner = ftype[1:-1]
                prop["x-flatbuffer-type"] = f"[{FB_TYPE_MAP.get(inner, inner)}]"
            elif ftype in FB_TYPE_MAP:
                prop["x-flatbuffer-type"] = FB_TYPE_MAP[ftype]
            elif ftype in fbs_info["enums"]:
                prop["x-flatbuffer-type"] = "enum"
                enum_info = fbs_info["enums"][ftype]
                prop["x-flatbuffer-enum-type"] = enum_info["underlying_type"]
                if enum_info["values"]:
                    prop["x-flatbuffer-enum-values"] = {}
                    for val_name, val_info in enum_info["values"].items():
                        entry = {"value": val_info["value"]}
                        if val_info["description"]:
                            entry["description"] = val_info["description"]
                        prop["x-flatbuffer-enum-values"][val_name] = entry
            elif ftype in fbs_info["tables"]:
                prop["x-flatbuffer-type"] = ftype
            else:
                prop["x-flatbuffer-type"] = ftype

            if field["required"]:
                prop["x-flatbuffer-required"] = True


def augment_schema(schema, fbs_info):
    """Add x-flatbuffer extensions to a full JSON Schema."""
    result = copy.deepcopy(schema)

    # Top-level extensions
    if fbs_info["root_type"]:
        result["x-flatbuffer-root-type"] = fbs_info["root_type"]
    if fbs_info["file_identifier"]:
        result["x-flatbuffer-file-identifier"] = fbs_info["file_identifier"]
    if fbs_info["namespace"]:
        result["x-flatbuffer-namespace"] = fbs_info["namespace"]

    # Augment each definition
    definitions = result.get("definitions", {})
    for def_name, defn in definitions.items():
        augment_definition(defn, def_name, fbs_info)

    return result


def generate_fb_json_index(output_dir):
    """Generate an index.json aggregating all FB JSON Schema files."""
    index = {"STANDARDS": {}}
    for root, dirs, files in os.walk(output_dir):
        for f in files:
            if f == "main.fb.schema.json":
                std_name = Path(root).name
                with open(os.path.join(root, f), "r") as jf:
                    index["STANDARDS"][std_name] = json.load(jf)
    index_path = os.path.join(output_dir, "index.json")
    with open(index_path, "w") as out:
        json.dump(index, out, indent=4)
    print(f"Written FB JSON Schema index to {index_path}")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    count = 0

    for std_name in sorted(os.listdir(SCHEMA_DIR)):
        std_schema_dir = os.path.join(SCHEMA_DIR, std_name)
        if not os.path.isdir(std_schema_dir):
            continue

        json_schema_path = os.path.join(JSON_DIR, std_name, "main.schema.json")
        if not os.path.exists(json_schema_path):
            print(f"  Skipping {std_name}: no JSON Schema found")
            continue

        fbs_info = collect_all_fbs_info(std_name)
        if not fbs_info:
            print(f"  Skipping {std_name}: no .fbs found")
            continue

        with open(json_schema_path, "r") as f:
            schema = json.load(f)

        fb_schema = augment_schema(schema, fbs_info)

        out_dir = os.path.join(OUTPUT_DIR, std_name)
        os.makedirs(out_dir, exist_ok=True)
        out_path = os.path.join(out_dir, "main.fb.schema.json")
        with open(out_path, "w") as f:
            json.dump(fb_schema, f, indent=2)

        count += 1
        print(f"  Generated FB JSON Schema for {std_name}")

    print(f"\nGenerated {count} FB JSON Schema files.")
    generate_fb_json_index(OUTPUT_DIR)


if __name__ == "__main__":
    main()
