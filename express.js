const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const dist = "dist";

app.use(express.static(dist));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Express web server started: http://localhost:${port}`);
  console.log(`Serving content from /${dist}/`);
});
