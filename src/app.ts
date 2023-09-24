import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({ message: "Deu bom"});
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})