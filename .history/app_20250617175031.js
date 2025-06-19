const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.jso("Hello World!");
});

app.listen(1307,()=>
console.log("")


);