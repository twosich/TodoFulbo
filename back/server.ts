import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path'; 

const app = express();
app.use(cors());
app.use(express.json()); 

app.get("/", (req: Request, res: Response) => {
    console.log("Llego el pedido de /");
    res.send([{ id: 1, nombre: "tomas" }, { id: 2, nombre: "maria" }]);
});

app.get("/editarPersona/:id/:nombre", (req: Request, res: Response) => {
    console.log(`ID: ${req.params.id}, Nombre: ${req.params.nombre}`);
    res.send({ mensaje: "Persona editada con éxito", datos: req.params });
});

app.get('/img/:id', (req: Request, res: Response) => {
    console.log(`Solicitud de imagen con ID: ${req.params.id}`);
    const imagen = req.params.id;
    const imagePath = path.join(__dirname, `img/${imagen}.png`);

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).json({ error: "Imagen no encontrada" });
        }
    });
});


const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});