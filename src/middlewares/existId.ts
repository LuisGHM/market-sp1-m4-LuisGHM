import { NextFunction, Request, Response } from "express";
import { market } from "../database";

export const existId =  (req: Request, res: Response, next: NextFunction) => {
    const foundProduct = market.find(product => product.id === +req.params.id);

    foundProduct ? next() : res.status(404).json({message: "Product not found."});
}