import express, { Request, Response, Router } from "express";
import { getCollection } from "./db/database";
import { Usuario, Producto } from "./db/schemas";

const router = Router();
const usuariosCollection = getCollection<Usuario>("usuarios");
const productosCollection = getCollection<Producto>("productos");

router.post("/user"), async (req: Request, res: Response) => {
    try {
        const addUser: Usuario = req.body;
        const result = await usuariosCollection.insertOne(addUser);
        res.status(201).json ({ id: result.insertedId,})
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

router.post("/producto"), async (req: Request, res: Response) => {
    try {
        const addProducto: Producto = req.body;
        const result = await productosCollection.insertOne(addProducto);
        res.status(201).json ({ id: result.insertedId,})
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

router.post("/usuarios"), async (req: Request, res: Response) => {
    try {
        const users = await usuariosCollection.find({}).toArray();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

router.post("/productos"), async (req: Request, res: Response) => {
    try {
        const producto = await productosCollection.find({}).toArray();
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

export default router;