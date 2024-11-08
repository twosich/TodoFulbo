const express = require('express');
const path = require('path');
const cors = require('cors');

import Producto from "./db/database"

const app = express();


// Enable CORS for all routes
app.use(cors());

app.listen(3000, () => {
   console.log(`Server is up and running on port 3000 ...`);
});


app.get("/",function(req,resp){
    console.log("llego el pedido de /")
    return resp.send([{id:1,nombre:"tomas"},{id:2,nombre:"maria"}]);
})

app.get("editarPersona/:id/:nombre",function(req,resp){
    console.log(req.params.id,req.params.nombre);
    return resp.send([{id:1,nombre:"tomas"},{id:2,nombre:"maria"}]);
})

app.get('/img/:id', (req, res) => {    
    console.log(req.params.id);
    const imagen =req.params.id;
    // Set the path of the image
    const imagePath = path.join(__dirname, `img/${imagen}.png`);
    
    // Send the image file
    res.sendFile(imagePath);
  });

  app.post ('/productos', async (req, res) => {
    try {
        const productos = await Producto.find ();
        res.json (productos);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.get('/productos/:nombre', async (req, res) => {
    try {const producto = await Producto.findByName(req.params.nombre);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });}
} );

app.put('/productos/:nombre', async (req, res) => {
    try {
        const productoActualizado = await Producto.findByNameAndUpdate(req.params.nombre, req.body, { new: true });
        if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/productos/:nombre', async (req, res) => {
    try {
        const productoEliminado = await Producto.findByNameAndDelete(req.params.nombre);
        if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT:number = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
