import { NextFunction, Request, Response } from "express";
import { market } from "../database";

export const nameValidation = (req: Request, res: Response, next: NextFunction) => {
    const foundProduct = market.find(product => product.name === req.body.name);

    foundProduct ? res.status(409).json({message: "Product already registered."}) : next() ;
}