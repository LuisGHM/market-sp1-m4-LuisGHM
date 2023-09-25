import express, { Request, Response } from "express";
import { market } from "./database";
import { createProduct, deleteProduct, editProduct, getAllProducts, getProductById } from "./logics";

const app = express();

app.use(express.json());

app.post("/products", createProduct);

app.get("/products", getAllProducts);

app.get("/products/:id", getProductById);

app.patch("/products/:id", editProduct);

app.delete("/products/:id", deleteProduct);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})