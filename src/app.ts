import express from "express";
import { createProduct, deleteProduct, editProduct, getAllProducts, getProductById } from "./logics";
import { nameValidation } from "./middlewares/nameValidation";
import { existId } from "./middlewares/existId";

const app = express();

app.use(express.json());

app.post("/products", nameValidation, createProduct);

app.get("/products", getAllProducts);

app.get("/products/:id", existId, getProductById);

app.patch("/products/:id", existId, nameValidation, editProduct);

app.delete("/products/:id", existId, deleteProduct);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});