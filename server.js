const express = require ("express");
const path = require("node:path");


const app = express();
const port = 3000;

//serving browser files from the public folder.
app.use(express.static(path.join(__dirname, "public")));



// I am keeping the development server accessible on this computer.
app.listen(port, "127.0.0.1", () => {
  console.log(`CampusPrint is running at http://127.0.0.1:${port}`);
});
