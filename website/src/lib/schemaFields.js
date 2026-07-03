// @ts-check

/**
 * @typedef {object} FieldTypePart
 * @property {string} text
 * @property {string=} definitionName
 */

/**
 * @typedef {object} FieldInfo
 * @property {string} name
 * @property {string} type
 * @property {string} description
 * @property {boolean} required
 * @property {string=} flatbufferType
 * @property {number=} flatbufferId
 * @property {FieldTypePart[]} typeParts
 */

/**
 * @typedef {object} FieldDefinitionInfo
 * @property {string} name
 * @property {string} description
 * @property {boolean} root
 * @property {FieldInfo[]} fields
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
  return parseSchemaFieldDefinitions(schema, fallbackName)[0]?.fields ?? [];
}

/**
 * @param {Record<string, any>} schema
 * @param {string} fallbackName
 * @returns {FieldDefinitionInfo[]}
 */
export function parseSchemaFieldDefinitions(schema, fallbackName = "") {
  const rootName = resolveSchemaRootDefinitionName(schema, fallbackName);
  if (!rootName) return [];

  const definitions = schema?.definitions ?? {};
  const definitionNames = Object.keys(definitions).filter((name) => {
    const definition = definitions[name];
    return definition && typeof definition === "object" && definition.properties;
  });

  return [rootName, ...definitionNames.filter((name) => name !== rootName)].map((name) => ({
    name,
    description: definitions[name]?.description || "",
    root: name === rootName,
    fields: parseDefinitionFields(schema, name),
  }));
}

/**
 * @param {Record<string, any>} schema
 * @param {string} definitionName
 * @returns {FieldInfo[]}
 */
function parseDefinitionFields(schema, definitionName) {
  const definitions = schema?.definitions ?? {};
  const mainDef = definitions[definitionName];
  if (!mainDef?.properties) return [];

  return Object.entries(mainDef.properties).map(([name, prop]) => ({
    name,
    type: getTypeString(prop),
    description: prop?.description || "",
    required: mainDef.required?.includes(name) || false,
    flatbufferType: prop?.["x-flatbuffer-type"],
    flatbufferId: prop?.["x-flatbuffer-field-id"],
    typeParts: getTypeParts(prop, schema),
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

/**
 * @param {Record<string, any>} prop
 * @param {Record<string, any>} schema
 * @returns {FieldTypePart[]}
 */
export function getTypeParts(prop, schema) {
  const type = getTypeString(prop);
  const definitionName = getReferencedFieldDefinitionName(prop, schema);
  if (!definitionName) return [{ text: type }];

  const start = type.indexOf(definitionName);
  if (start === -1) {
    return [{ text: type, definitionName }];
  }

  const parts = [];
  if (start > 0) parts.push({ text: type.slice(0, start) });
  parts.push({ text: definitionName, definitionName });

  const end = start + definitionName.length;
  if (end < type.length) parts.push({ text: type.slice(end) });

  return parts;
}

/**
 * @param {Record<string, any>} prop
 * @param {Record<string, any>} schema
 * @returns {string}
 */
export function getReferencedFieldDefinitionName(prop, schema) {
  const definitions = schema?.definitions ?? {};

  const refName = getDefinitionNameFromRef(prop?.$ref);
  if (isFieldDefinition(definitions, refName)) return refName;

  const itemRefName = getDefinitionNameFromRef(prop?.items?.$ref);
  if (isFieldDefinition(definitions, itemRefName)) return itemRefName;

  const flatbufferType = typeof prop?.["x-flatbuffer-type"] === "string"
    ? prop["x-flatbuffer-type"].trim()
    : "";
  const flatbufferName = unwrapFlatbufferType(flatbufferType);
  if (isFieldDefinition(definitions, flatbufferName)) return flatbufferName;

  return "";
}

/**
 * @param {string | undefined} ref
 * @returns {string}
 */
function getDefinitionNameFromRef(ref) {
  if (typeof ref !== "string") return "";
  const match = ref.match(/^#\/definitions\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : "";
}

/**
 * @param {Record<string, any>} definitions
 * @param {string} definitionName
 * @returns {boolean}
 */
function isFieldDefinition(definitions, definitionName) {
  return Boolean(
    definitionName
      && definitions[definitionName]
      && typeof definitions[definitionName] === "object"
      && definitions[definitionName].properties,
  );
}

/**
 * @param {string} type
 * @returns {string}
 */
function unwrapFlatbufferType(type) {
  let current = type.trim();
  while (current.startsWith("[") && current.endsWith("]")) {
    current = current.slice(1, -1).trim();
  }
  return current;
}
