const path = require("path");
const os = require("os");
const fs = require("fs");

// import path from "path";
// import os from "os";
// import fs from "fs";

// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these reqs.

const Busboy = require("busboy");
//import Busboy from "busboy";
module.exports = function(req, res, next) {
  if (req.method !== "POST" || req.is("json")) {
    return next();
  }
  // See https://cloud.google.com/functions/docs/writing/http#multipart_data
  const busboy = new Busboy({
    headers: req.headers,
    limits: {
      // Cloud functions impose this restriction anyway
      fileSize: 10 * 1024 * 1024,
    },
  });

  // This object will accumulate all the fields, keyed by their name
  const fields = {};

  // This object will accumulate all the uploaded files, keyed by their name.
  const files = [];
  const fileWrites = [];

  // Note: os.tmpdir() points to an in-memory file system on GCF
  // Thus, any files in it must fit in the instance's memory.
  const tmpdir = os.tmpdir();

  // This code will process each non-file field in the form.
  busboy.on("field", (fieldname, value) => {
    // TODO(developer): Process submitted field values here
    // You could do additional deserialization logic here, values will just be strings
    console.log(`Processed field ${fieldname}: ${value}.`);
    fields[fieldname] = value;
  });

  // This code will process each file uploaded.
  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    //console.log(`Processed file ${filename}`);
    const filepath = path.join(tmpdir, filename);
    console.log(`Handling file upload field ${fieldname}: ${filename} (${filepath})`);
    const writeStream = fs.createWriteStream(filepath);
    file.pipe(writeStream);

    // File was processed by Busboy; wait for it to be written to disk.
    const promise = new Promise((resolve, reject) => {
      file.on("end", () => {
        writeStream.end();
      });
      writeStream.on("finish", () => {
        fs.readFile(filepath, (err, buffer) => {
          const size = Buffer.byteLength(buffer);
          console.log(`${filename} is ${size} bytes`);
          if (err) {
            return reject(err);
          }

          files.push({
            fieldname,
            originalname: filename,
            encoding,
            mimetype,
            buffer,
            size,
          });

          try {
            fs.unlinkSync(filepath);
          } catch (error) {
            return reject(error);
          }

          resolve();
        });
      });
      writeStream.on("error", reject);
    });
    fileWrites.push(promise);
  });

  // Triggered once all uploaded files are processed by Busboy.
  // We still need to wait for the disk writes (saves) to complete.

  busboy.on("finish", async () => {
    try {
      await Promise.all(fileWrites);
      // TODO(developer): Process saved files here
      req.body = fields;
      req["files"] = files;
      next();
    } catch (error) {
      return res.status(500).send(error.toString());
    }
  });

  busboy.on("error", function(error) {
    //next();
    return res.status(500).send(error.toString());
  });

  busboy.end(req["rawBody"]);
};
