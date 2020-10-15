const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
