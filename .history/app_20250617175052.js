const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({id:5});
});

app.listen(1307,()=>
console.log("")


);