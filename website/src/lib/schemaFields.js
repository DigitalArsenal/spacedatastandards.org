// @ts-check

/**
 * @typedef {object} FieldInfo
 * @property {string} name
 * @property {string} type
 * @property {string} description
 * @property {boolean} required
 * @property {string=} flatbufferType
 * @property {number=} flatbufferId
 */

/**
 * @param {Record<string, any>} schema
 * @param {string} fallbackName
 * @returns {string}
 */
export function resolveSchemaRootDefinitionName(schema, fallbackName = "") {
  const definitions = schema?.definitions ?? {};
  const metadataRoot = typeof schema?.["x-flatbuffer-root-type"] === "string"
    ? schema["x-flatbuffer-root-type"].trim()
    : "";
  if (metadataRoot && definitions[metadataRoot]) return metadataRoot;

  const ref = typeof schema?.$ref === "string" ? schema.$ref : "";
  const refMatch = ref.match(/^#\/definitions\/([^/]+)$/);
  const refName = refMatch ? decodeURIComponent(refMatch[1]) : "";
  if (refName && definitions[refName]) return refName;

  if (fallbackName && definitions[fallbackName]) return fallbackName;

  const firstDefinitionWithFields = Object.entries(definitions).find(([, definition]) => {
    return definition && typeof definition === "object" && definition.properties;
  });
  return firstDefinitionWithFields?.[0] ?? "";
}

/**
 * @param {Record<string, any>} schema
 * @param {string} fallbackName
 * @returns {FieldInfo[]}
 */
export function parseSchemaFields(schema, fallbackName = "") {
  const rootName = resolveSchemaRootDefinitionName(schema, fallbackName);
  const mainDef = schema?.definitions?.[rootName];
  if (!mainDef?.properties) return [];

  return Object.entries(mainDef.properties).map(([name, prop]) => ({
    name,
    type: getTypeString(prop),
    description: prop?.description || "",
    required: mainDef.required?.includes(name) || false,
    flatbufferType: prop?.["x-flatbuffer-type"],
    flatbufferId: prop?.["x-flatbuffer-field-id"],
  }));
}

/**
 * @param {Record<string, any>} prop
 * @returns {string}
 */
export function getTypeString(prop) {
  if (prop?.["x-flatbuffer-type"]) return prop["x-flatbuffer-type"];
  if (prop?.$ref) {
    const refName = prop.$ref.split("/").pop();
    return refName || "object";
  }
  if (prop?.type === "array") {
    return `array<${getTypeString(prop.items || {})}>`;
  }
  if (Array.isArray(prop?.type)) {
    return prop.type.join(" | ");
  }
  return prop?.type || "any";
}
