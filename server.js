const express = require ("express");
const path = require("node:path");
const db = require("./database/db");

const app = express();
app.use(express.json());
const port = 3000;

//serving browser files from the public folder.
app.use(express.static(path.join(__dirname, "public")));



const insertRequest = db.prepare(
`INSERT INTO requests (customerName, customerEmail, requestPages, requestCopies, requestColor, requestSideness,estimatedTotalCents) VALUES (?, ?, ?, ?, ?, ?, ?)`
)
app.post("/api/request", (req, res) => {
  // Handle the request
  const details = req.body || {};
  const customerName = details.customerName;
  const customerEmail = details.customerEmail;
  const requestPages = details.requestPages;
  const requestCopies = details.requestCopies;
  const requestColor = details.requestColor;
  const requestSideness = details.requestSideness;

  if(typeof customerName !== "string" || typeof customerEmail !== "string" || typeof requestPages !== "number" || typeof requestCopies !== "number" || typeof requestColor !== "string" || typeof requestSideness !== "string") {
    res.status(400).json({message: "Invalid request data"});
    return;
  }

  if(customerName.trim() === "" || customerEmail.trim() === "" || requestPages <= 0 || requestCopies <= 0 || requestColor.trim() === "" || requestSideness.trim() === "") {
    res.status(400).json({message: "Invalid request data"});
    return;
  }

  if (!Number.isInteger(requestPages) || !Number.isInteger(requestCopies)) {
    res.status(400).json({message: "Pages and copies must be integers"});
    return;
  }
  if (requestColor !== "color" && requestColor !== "bw") {
    res.status(400).json({message: "Invalid color option"});
    return;
  }
  if (requestSideness !== "single" && requestSideness !== "double") {
    res.status(400).json({message: "Invalid sideness option"});
    return;
  }

  let rate = 0;
  let assistantFee = 200;

  rate = requestColor === "color" ? 90 : 25;
  let totalCost = (requestPages * requestCopies * rate) + assistantFee;



  try{
  const saved = insertRequest.run(
        customerName.trim(), customerEmail.trim(), requestPages, requestCopies, requestColor, requestSideness, totalCost
  );


  res.status(201).json({
    message: "Request saved successfully",
    requestId: saved.lastInsertRowid,
    totalCost: totalCost
  });


  } catch(error){
    console.error("Error saving request:", error.message);

    res.status(500).json({
      message: "An error occurred while saving the request"
    })
  } 
  
});

// I am keeping the development server accessible on this computer.
app.listen(port, "127.0.0.1", () => {
  console.log(`CampusPrint is running at http://127.0.0.1:${port}`);
});
