const express = require("express");
const app = express();
const port = 3000;

// server starts listening on port 3000
app.listen(port, () => {
  `Server is currently running on port http://localhost:${port}`
})

// define home route
app.get("/", () => {
  console.log("Home route started");

  res.send("My blog's server")
})