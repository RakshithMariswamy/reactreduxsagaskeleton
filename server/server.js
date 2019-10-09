const express = require("express");
const path = require("path");

const app = express();
// "/events" will be the project routebase
app.use("/events", express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../build/index.html`));
});
// check with devops team for posrt listen number
app.listen(40100);
