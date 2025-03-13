const express = require("express");
const app = express();
const port = 3000;

//import the router file

const posts = require("./routers/posts")

// initialize the postsRouter variable

const postsRouter = posts.router


// server starts listening on port 3000
app.listen(port, () => {
  console.log(`Server is currently running on port http://localhost:${port}`)
})

// define home route
app.get("/", () => {
  console.log("Home route started");

  res.send("My blog's server")
})

// link to the postsRouter routes

app.use("/api/v1/posts", postsRouter)

