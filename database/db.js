const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const dataFolder = path.join(__dirname, "..", "data");
fs.mkdirSync(dataFolder, { recursive: true });

const databasePath = path.join(dataFolder, "campusprint.db");
const schemaPath = path.join(__dirname, "schema.sql");

const db = new DatabaseSync(databasePath);
const schema = fs.readFileSync(schemaPath, "utf8");

db.exec(schema);

console.log("CampusPrint database is ready.");

module.exports = db;