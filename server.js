const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const devEnv = process.env.NODE_ENV === "development";
const port = process.env.PORT || 3000;

app.get("*", (req, res, next) => {
  if (!devEnv && req.headers["x-forwarded-proto"] !== "https") {
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));
app.use(express.static(path.join(__dirname, "./")));
app.get("*", (req, res) => res.send("error, page not found"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
