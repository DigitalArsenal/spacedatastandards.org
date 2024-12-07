import json
import os
import shutil

def generate_enum(enum_name, enum_values, description):
    """
    Generate a FlatBuffer enum definition.
    Parses description to associate each enum value with its specific explanation
    and removes &nbsp; from descriptions.
    """
    parsed_descriptions = {}
    if description:
        sections = description.split("\n\n")
        for section in sections:
            if ":" in section:
                key, value = section.split(":", 1)
                parsed_descriptions[key.strip()] = value.strip().replace("&nbsp;", "")

    enum_content = "enum {} : byte {{\n".format(enum_name)
    for value in enum_values:
        desc = parsed_descriptions.get(value, "No description available.")
        enum_content += "    /// {}\n    {},\n".format(desc, value)
    enum_content = enum_content.rstrip(",\n") + "\n}\n"  # Remove trailing comma and newline
    return enum_content

def map_type(json_type, format_type=None):
    """
    Map JSON schema types and formats to FlatBuffer types.
    """
    if json_type == "integer":
        if format_type == "int32":
            return "int32"
        return "int64"
    elif json_type == "number":
        if format_type == "float":
            return "float"
        return "double"
    elif json_type == "boolean":
        return "bool"
    elif json_type == "array":
        return "[{}]".format(format_type if format_type else "string")
    return "string"

def generate_idl(table_name, schema):
    """
    Generate the FlatBuffer IDL for a given table.
    """
    idl_content = "/// {}\n".format(schema.get("description", "No description available."))
    idl_content += "table {} {{\n".format(table_name)
    enums = []
    for field_name, field_props in schema.get("properties", {}).items():
        field_desc = field_props.get("description", "No description provided.")
        example = field_props.get("example", "No example provided.")
        constraints = []
        if "minLength" in field_props:
            constraints.append("Minimum length = {}".format(field_props["minLength"]))
        if "maxLength" in field_props:
            constraints.append("Maximum length = {}".format(field_props["maxLength"]))
        if "minimum" in field_props:
            constraints.append("Minimum value = {}".format(field_props["minimum"]))
        if "maximum" in field_props:
            constraints.append("Maximum value = {}".format(field_props["maximum"]))
        constraints_text = ", ".join(constraints) if constraints else "No constraints specified."

        # Handle enum fields
        if "enum" in field_props:
            enum_name = "{}_{}_Enum".format(table_name, field_name)
            enums.append(generate_enum(enum_name, field_props["enum"], field_desc))
            field_type = enum_name
        else:
            # Map type and format
            field_type = map_type(field_props.get("type"), field_props.get("format"))

        idl_content += (
            "    /// {}\n".format(field_desc.replace("\n\n", " ")) +
            "    /// Example: {}\n".format(example) +
            "    /// Constraints: {}\n".format(constraints_text) +
            "    {}: {};\n".format(field_name, field_type)
        )
    idl_content += "}\n"
    if enums:
        idl_content += "\n".join(enums) + "\n"
    return idl_content

def generate_idls_from_openapi(openapi_file_path, output_dir):
    """
    Generate FlatBuffer IDLs from an OpenAPI JSON schema.
    """
    with open(openapi_file_path, 'r') as f:
        openapi = json.load(f)

    schemas = openapi.get("components", {}).get("schemas", {})
    if not schemas:
        raise ValueError("No schemas found in the OpenAPI file under 'components->schemas'.")

    # Remove the output directory if it exists
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)

    os.makedirs(output_dir, exist_ok=True)

    for table_name, schema in schemas.items():
        table_dir = os.path.join(output_dir, table_name)
        os.makedirs(table_dir, exist_ok=True)
        idl_path = os.path.join(table_dir, 'main.fbs')
        idl_content = generate_idl(table_name, schema)
        with open(idl_path, 'w') as idl_file:
            idl_file.write(idl_content)

    print("FlatBuffer IDLs generated in: {}".format(output_dir))

if __name__ == "__main__":
    input_file = "input_schemas/udl/udl_openapi.json"
    output_dir = "schema_udl"
    generate_idls_from_openapi(input_file, output_dir)
