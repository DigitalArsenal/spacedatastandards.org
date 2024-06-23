/**
 * List of foreign types used for type checking.
 * 
 * @type {string[]}
 */
const foreignTypes = ["object", "array", "union"];

/**
 * Resolves a property within a JSON schema, following references if necessary.
 *
 * @param {Object} prop - The property to resolve. If the property contains an `$ref`, it will be resolved recursively.
 * @param {Object} jsonSchema - The JSON schema containing the definitions for references.
 * @returns {Object} - The resolved property.
 */
export const resolver = (prop, jsonSchema) => {
    if (!prop) return {};
    prop = prop?.items || prop;
    let { $ref, $$ref } = prop;
    if ($ref) {
        let rpath = $ref.split("/").slice(1);
        let fprop = jsonSchema;
        for (let i = 0; i < rpath.length; i++) {
            try {
                fprop = fprop[rpath[i]];
            } catch (e) {
                console.log(fprop);
            }
        }
        fprop.$$ref = $ref || $$ref;
        return resolver(fprop, jsonSchema);
    } else {
        return prop;
    }
};

/**
 * Checks if a given predicate is present in the list of foreign types.
 *
 * @param {string} ftPredicate - The predicate to check against the foreign types list.
 * @returns {boolean} - Returns `true` if the predicate is found in the foreign types list, otherwise `false`.
 */
export const fTCheck = (ftPredicate) => foreignTypes.indexOf(ftPredicate) !== -1;

/**
 * Extracts the root name from a reference path.
 *
 * @param {string} [$ref=""] - The reference path from which to extract the root name.
 * @returns {string} - The extracted root name from the reference path.
 */
export const refRootName = ($ref = "") => $ref.split("/").pop();