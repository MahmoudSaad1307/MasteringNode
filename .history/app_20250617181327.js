const express = require("express");
const app = express();

const products = [{

  id:1,
  title: "Product 1",
  price: 100
}, {

  id:2,
  title: "Product 2",
  price: 200
}];

app.get("/api/", (req, res) => {
  res.send({ id: 5 });
});

app.listen(1307, () => console.log(""));
