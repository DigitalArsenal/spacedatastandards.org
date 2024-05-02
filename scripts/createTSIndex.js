import fs from "fs";
import path from "path";

const directoryPath = path.join('lib', 'ts');  // Adjust the directory as needed
let exports = '';

// Read all directory names under the specified path
fs.readdirSync(directoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .forEach(dirent => {
        const folderName = dirent.name;
        exports += `export * as ${folderName.toUpperCase()} from './${folderName}/main.js';\n`;
    });

// Write the master index.ts file
fs.writeFileSync(path.join(directoryPath, 'index.ts'), exports);