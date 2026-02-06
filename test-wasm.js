import { FlatcRunner } from "flatc-wasm";
import { promises as fs } from "fs";
import path from "path";

const SCHEMA_DIR = path.resolve("schema");

async function main() {
  const flatc = await FlatcRunner.init();
  const dirs = (await fs.readdir(SCHEMA_DIR, { withFileTypes: true }))
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let passed = 0;
  let failed = 0;
  const errors = [];

  for (const name of dirs) {
    try {
      // Read the schema and strip header
      const files = {};
      const visited = new Set();

      const resolve = async (stdName) => {
        if (visited.has(stdName)) return;
        visited.add(stdName);
        const fbsPath = path.join(SCHEMA_DIR, stdName, "main.fbs");
        let idl;
        try {
          idl = await fs.readFile(fbsPath, "utf8");
        } catch { return; }

        // Strip header
        const headerEnd = idl.indexOf("END_HEADER");
        if (headerEnd !== -1) {
          idl = idl.substring(idl.indexOf("\n", headerEnd) + 1);
        }

        files[`/schemas/${stdName}/main.fbs`] = idl;

        // Find includes
        const includeRegex = /include\s+"\.\.\/(\w+)\/main\.fbs"\s*;/g;
        let match;
        const rawIdl = await fs.readFile(fbsPath, "utf8");
        while ((match = includeRegex.exec(rawIdl)) !== null) {
          await resolve(match[1]);
        }
      };

      await resolve(name);

      const schemaInput = { entry: `/schemas/${name}/main.fbs`, files };
      const result = await flatc.generateCode(schemaInput, "ts", { genObjectApi: true });

      if (Object.keys(result).length > 0) {
        passed++;
      } else {
        failed++;
        errors.push(`${name}: no output generated`);
      }
    } catch (e) {
      failed++;
      errors.push(`${name}: ${e.message}`);
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${dirs.length} schemas`);
  if (errors.length > 0) {
    console.log("\nFailures:");
    errors.forEach(e => console.log(`  - ${e}`));
  }
}

main();
