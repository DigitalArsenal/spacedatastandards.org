// @ts-ignore
import * as flatbuffers from 'flatbuffers';
import { Buffer } from 'buffer';
import * as standards from '../../lib/js/index.js';

/**
 * Packs a standard object or an array of standard objects into a concatenated FlatBuffer and returns it as a Buffer.
 * @param {Object|Array<Object>} standardsInput - The standard object or array of standard objects to be packed.
 * @returns {Buffer} - The packed FlatBuffer as a Buffer.
 * @throws Will throw an error if any standard object is invalid or does not have a pack method.
 */
export const writeFB = (standardsInput) => {
    const standardsArray = Array.isArray(standardsInput) ? standardsInput : [standardsInput];

    if (standardsArray.length === 0) {
        throw new Error("Invalid array of standards to be packed");
    }

    const buffers = standardsArray.map(standard => {
        if (!standard?.pack) {
            console.log(standard);
            throw new Error("INVALID DATA TO BE PACKED");
        }
        const flatBufferBuilder = new flatbuffers.Builder(1);
        let packed = standard.pack(flatBufferBuilder);
        const fileID = "$" + standard.constructor.name.slice(0, 3);
        flatBufferBuilder.finishSizePrefixed(packed, fileID);
        return Buffer.from(flatBufferBuilder.asUint8Array());
    });

    return Buffer.concat(buffers);
}

/**
 * Reads a FlatBuffer and returns an array of unpacked objects.
 * @param {Uint8Array} fbs - The FlatBuffer to be read.
 * @returns {Array<Object>} - An array of unpacked objects.
 * @throws Will throw an error if the table name or buffer type is unknown.
 */
export const readFB = (fbs) => {
    const byteBuffer = new flatbuffers.ByteBuffer(fbs);
    const results = [];

    let offset = 0;
    while (offset < fbs.length) {
        // Read the size of the current buffer
        const bufferLength = byteBuffer.readUint32(offset);
        // Get the file identifier
        const fileIdentifier = String.fromCharCode.apply(null, byteBuffer.bytes().slice(offset + 8, offset + 12));
        const tableName = fileIdentifier.replace('$', '');

        const parentClass = standards[tableName];
        if (!parentClass) {
            throw new Error(`Unknown table name: ${tableName}`);
        }

        // Get the root and unpack
        const tableClass = parentClass[tableName];
        if (tableClass) {
            const sizePrefixedRoot = tableClass[`getSizePrefixedRootAs${tableName}`](new flatbuffers.ByteBuffer(fbs.slice(offset)));
            const input = new parentClass[`${tableName}T`]();
            sizePrefixedRoot.unpackTo(input);
            results.push(input);
        } else {
            throw new Error(`Unknown buffer type for table name: ${tableName}`);
        }

        // Move to the next buffer
        offset += bufferLength + 4; // Add 4 bytes for the length prefix
    }

    return results;
}

/**
 * Reads a stream of FlatBuffers and resolves to an array of objects.
 * @param {Readable} stream - The readable stream to be processed.
 * @returns {Promise<Buffer>} - A promise that resolves to an array of objects.
 */
export const readFBStream = (stream) => {
    return new Promise((resolve, reject) => {
        let objectArray = [];
        let concatenatedBuffer = Buffer.alloc(0);

        stream.on('data', (chunk) => {
            concatenatedBuffer = Buffer.concat([concatenatedBuffer, chunk]);

            const byteBuffer = new flatbuffers.ByteBuffer(new Uint8Array(concatenatedBuffer));
            let offset = 0;

            while (offset < concatenatedBuffer.length) {
                if (offset + 4 > concatenatedBuffer.length) break;

                const bufferLength = byteBuffer.readUint32(offset);
                if (offset + bufferLength + 4 > concatenatedBuffer.length) break;

                const fileIdentifier = String.fromCharCode.apply(null, byteBuffer.bytes().slice(offset + 8, offset + 12));
                const tableName = fileIdentifier.replace('$', '');

                const parentClass = standards[tableName];
                if (!parentClass) {
                    reject(new Error(`Unknown table name: ${tableName}`));
                    return;
                }

                const tableClass = parentClass[tableName];
                if (tableClass) {
                    const sizePrefixedRoot = tableClass[`getSizePrefixedRootAs${tableName}`](new flatbuffers.ByteBuffer(concatenatedBuffer.slice(offset)));
                    const input = new parentClass[`${tableName}T`]();
                    sizePrefixedRoot.unpackTo(input);
                    objectArray.push(input);
                } else {
                    reject(new Error(`Unknown buffer type for table name: ${tableName}`));
                    return;
                }

                offset += bufferLength + 4; // Move to the next buffer
            }

            concatenatedBuffer = concatenatedBuffer.subarray(offset); // Keep the remaining buffer
        });

        stream.on('end', () => {
            resolve(objectArray);
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
}

export const getFileName = (standard, CID) => `${CID}.${standard?.toLowerCase()}.fbs`;
