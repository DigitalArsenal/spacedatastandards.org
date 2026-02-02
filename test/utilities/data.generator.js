import { fTCheck, refRootName, resolver } from "../../src/js/resolver.js";
import { writeFileSync } from 'fs';
import standardsJSON from '../../lib/json/index.json' with { type: 'json' };
import * as standards from '../../lib/js/index.js';
import { faker } from '@faker-js/faker';
import { execSync } from 'child_process';
import { writeFB } from '../../index.js';
import { join } from 'path';
import ipfsHash from 'pure-ipfs-only-hash';

export const generateData = async (total = 10, numFiles = 5, dataPath = `test/output/data`, standardsToGenerate = Object.keys(standards)) => {
    if (!dataPath) return [];
    execSync(`rm -rf ${dataPath}/*.* && mkdir -p ${dataPath}`);

    const buildProp = (prop, propName) => {
        let { type, minimum: min, maximum: max, enum: enumValues } = prop;
        let fakerValue = null;

        if (enumValues) {
            fakerValue = faker.number.int({ min: 0, max: enumValues.length - 1 });
        } else if (type === "integer" && (max > Number.MAX_SAFE_INTEGER || min < Number.MIN_SAFE_INTEGER)) {
            fakerValue = BigInt(faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }));
        } else if (type === "integer") {
            fakerValue = faker.number.int({ min, max });
        } else if (type === "number") {
            fakerValue = faker.number.float();
        } else if (type === "boolean") {
            fakerValue = faker.datatype.boolean();
        } else if (type === "string") {
            if (
                ~propName.indexOf("_DATE") ||
                ~propName.indexOf("EPOCH") ||
                propName.indexOf("TIME") > 0 ||
                ~propName.indexOf("TCA")
            ) {
                fakerValue = faker.date.anytime().toISOString();
            } else if (~propName.indexOf("ORIGINATOR") || ~propName.indexOf("MESSAGE_FOR")) {
                fakerValue = faker.company.name();
            } else {
                fakerValue = [...Array(faker.number.int({ min: 5, max: 10 }))]
                    .map(() => faker.string.hexadecimal({ length: 1, casing: 'lower' }).replace('0x', ''))
                    .join('');
            }
        }
        return fakerValue;
    }

    const buildObject = (classProperties, parentClass, tableName, jsonSchema, depth = 0) => {
        if (depth > 5) return new parentClass[`${tableName}T`];
        let newObject = new parentClass[`${tableName}T`];

        for (let x in classProperties) {
            let resolvedProp = resolver(classProperties[x]?.items || classProperties[x], jsonSchema);
            if (!fTCheck(resolvedProp?.type)) {
                newObject[x] = buildProp(resolvedProp, x);
            } else if (resolvedProp?.type === "object" && classProperties[x]?.type !== "array") {
                newObject[x] = buildObject(resolvedProp.properties, parentClass, refRootName(resolvedProp.$$ref), jsonSchema, depth + 1);
            } else if (classProperties[x]?.type === "array") {
                newObject[x] = [];
                for (let i = 0; i < 2; i++) {
                    let aObject = !fTCheck(resolvedProp?.type) ?
                        buildProp(resolvedProp, x) :
                        buildObject(
                            resolvedProp?.items || resolvedProp.properties,
                            parentClass,
                            refRootName(resolvedProp.$$ref),
                            jsonSchema,
                            depth + 1);
                    newObject[x].push(aObject);
                }
            }
        }

        return newObject;
    }

    for (let i = 0; i < numFiles; i++) {
        for (let standard of standardsToGenerate) {
            let currentStandard = standardsJSON.STANDARDS[standard];
            let tableName = refRootName(currentStandard.$ref);
            let parentClass = standards[tableName];

            if (!tableName || !parentClass) {
                console.log(`Skipping unknown standard: ${standard}`);
                continue;
            }

            let objects = [];
            for (let j = 0; j < total; j++) {
                let newObject = buildObject(currentStandard.definitions[tableName].properties, parentClass, tableName, currentStandard);
                objects.push(newObject);
            }

            let resultBuffer = writeFB(objects);
            let CID = await ipfsHash.of(resultBuffer);
            writeFileSync(join(dataPath, `${CID}.${standard.toLowerCase()}.fbs`), resultBuffer);
        }
    }
}
