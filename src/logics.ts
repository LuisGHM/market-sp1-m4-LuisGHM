import { Request, Response } from "express";
import { market } from "./database";

const expirationDate = () => {
    const dataAtual = new Date();
    const dataFutura = new Date(dataAtual);
    dataFutura.setDate(dataFutura.getDate() + 365);
    
    return dataFutura;
}

export const createProduct = (req: Request, res: Response) => {
    const newid = market.length + 1;

     const newProduct = {
        id: newid,
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        section: req.body.section,
        calories: req.body.calories,
        expirationDate: expirationDate(),
    } 

    market.push(newProduct);

    return res.status(201).json(newProduct)
}
