const mongoose = require ('mongoose');

moongosse.connect('mongodb://localhost:27017/nombreDeTuBaseDeDatos', {useNewUrlParrser : true, useUnifiedTopology: true,})

.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión: ',err));

const producto = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
},
);

const usuario = new moongose.Schema({
    nombreUsuario: {type: String, required: true},
    claveUsuario: {type: String, required: true},
    token: {type: String, required: true},
})

const Producto = mongoose.model ('Producto', productoSchema);

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
