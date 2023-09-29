import { NextFunction, Request, Response } from "express";
import { market } from "./database";

const expirationDate = () => {
    const dataAtual = new Date();
    const dataFutura = new Date(dataAtual);
    dataFutura.setDate(dataFutura.getDate() + 365);
    
    return dataFutura;
}

export const createProduct = (req: Request, res: Response) => {
    let id: any;

    market.forEach((product) => {
        id = product.id + 1;
    })

    if(id == undefined){
        id = 1;
    }  

     const newProduct = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        section: req.body.section,
        calories: req.body.calories,
        expirationDate: expirationDate(),
    }; 

    market.push(newProduct);

    return res.status(201).json(newProduct);
}

export const getAllProducts = (req: Request, res: Response) => {
    let total = 0;

    market.forEach((product) => {
        total = total + product.price
    });

    return res.status(200).json({
        total: total,
        products: market
    });
}

export const getProductById = (req: Request, res: Response) => {
    const foundProduct = market.find(Product => Product.id == +req.params.id);

    return res.status(200).json(foundProduct);
}

export const editProduct = (req: Request, res: Response, next: NextFunction) => {
    const index = market.findIndex(product => product.id == +req.params.id);
    const foundProduct = market.find(Product => Product.id == +req.params.id);

    if (!foundProduct) {
        return res.status(404).json({ message: "Product not found." });
    }

    const editProduct = {
        id: +req.params.id, 
        name: req.body.name ? req.body.name : foundProduct.name,
        price: req.body.price ? req.body.price : foundProduct.price,
        weight: req.body.weight ? req.body.weight : foundProduct.weight,
        calories: req.body.calories ? req.body.calories : foundProduct.calories,
        section: foundProduct.section,
        expirationDate: foundProduct.expirationDate
    };

    market.splice(index, 1, editProduct);

    return res.status(200).json(editProduct);
}

export const deleteProduct = (req: Request, res: Response) => {
    const index = market.findIndex(product => product.id == +req.params.id);
    market.splice(index, 1);

    return res.status(204).json(); 
}



