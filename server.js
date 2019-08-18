const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));
app.use(express.static(path.join(__dirname, "./")));
app.get("*", (req, res) => res.send("error, page not found"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
