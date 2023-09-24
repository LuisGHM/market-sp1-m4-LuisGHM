export interface IProduct {
    id: number; //Criar automaticamente 
    name: string;
    price: number; // centavos
    weight: number; // gramas
    section: "food" | "cleaning"; // Restrito a "food" ou "cleaning"
    calories?: number | null;
    expirationDate: Date; // mexer automatico
}
