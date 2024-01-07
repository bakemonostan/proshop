import products from "./data/products.js";

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

// all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// single product
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p._id === productId);
  res.json(product);
});

app.listen(port, () => console.log(`server running on port ${port}`));
