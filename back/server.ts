import express from 'express';
import path from 'path';
import cors from 'cors';

import producto from "./db/database"
import {Request, Response} from 'express';
const app = express();


// Enable CORS for all routes
app.use(cors());

app.listen(3000, () => {
   console.log(`Server is up and running on port 3000 ...`);
});


app.get("/", (req: Request ,resp: Response) =>{
    console.log("llego el pedido de /");
    return resp.send([{id:1,nombre:"tomas"},{id:2,nombre:"maria"}]);
});

app.get("editarPersona/:id/:nombre",(req:Request,resp:Response)=>{
    console.log(req.params.id,req.params.nombre);
    return resp.send([{id:1,nombre:"tomas"},{id:2,nombre:"maria"}]);
})

app.get('/img/:id', (req:Request, res:Response) => {    
    console.log(req.params.id);
    const imagen =req.params.id;
    // Set the path of the image
    const imagePath = path.join(__dirname, `img/${imagen}.png`);
    
    // Send the image file
    res.sendFile(imagePath);
  });

  app.post ('/productos', async (req:Request, res:Response) => {
    try {
        const productos = await producto.find();
        res.json (productos);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.get('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        /*const producto = await producto.findByName(req.params.nombre);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);*/
        return;
    } catch (error) {
        res.status(500).json({ error: error.message });}
} );

app.put('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        /*const productoActualizado = await producto.findByNameAndUpdate(req.params.nombre, req.body, { new: true });
        if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(productoActualizado);*/
        return;
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/productos/:nombre', async (req: Request, res: Response) => {
    try {
        /*const productoEliminado = await producto.findByNameAndDelete(req.params.nombre);
        if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto eliminado' });*/
        return;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT:number = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
