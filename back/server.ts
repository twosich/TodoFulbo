import express, { Request, Response } from 'express'; // Importa express correctamente
import cors from 'cors';
import path from 'path'; // Importa path para manejar rutas de archivos

// Simulación de base de datos
import producto from "./db/database"; // Asegúrate de que este archivo exista y sea válido

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite leer el body en JSON

// Rutas
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

app.post('/productos', async (req: Request, res: Response) => {
    try {
        const productos = await producto.find(); // Asegúrate de que esta función exista
        res.json(productos);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        // Simulación de búsqueda (reemplazar con lógica real)
        const nombreProducto = req.params.nombre;
        const productoEncontrado = { nombre: nombreProducto, precio: 100 }; // Simulación
        res.json(productoEncontrado);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        const nombreProducto = req.params.nombre;
        const datosActualizados = req.body;
        // Simulación de actualización (reemplazar con lógica real)
        res.json({ mensaje: "Producto actualizado", producto: { nombre: nombreProducto, ...datosActualizados } });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        const nombreProducto = req.params.nombre;
        // Simulación de eliminación (reemplazar con lógica real)
        res.json({ mensaje: "Producto eliminado", nombre: nombreProducto });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Inicialización del servidor
const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});