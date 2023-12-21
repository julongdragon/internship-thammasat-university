const express = require("express");
var cors = require("cors");
const app = express();
const port = 8888;
var bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const morgan = require("morgan");
app.use(cors());
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/api/test", jsonParser, (req, res, next) => {
  try {
    const payload = req.body;
    if (Object.keys(payload).length === 0) {
      res.json({ returnPayload: [], status: "success" });
    } else {
      res.json({ returnPayload: payload, status: "success" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
