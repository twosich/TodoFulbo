import { Router, Request, Response } from "express";
import { usuarios, productos } from "./db";

const router = Router();

router.get("/usuarios", (req: Request, res: Response) => {
  res.json(usuarios);
});

router.get("/usuarios/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  res.json(usuario);
});


router.get("/productos", (req: Request, res: Response) => {
  res.json(productos);
});

router.get("/productos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }
  res.json(producto);
});

export default router;
