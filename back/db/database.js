const mongoose = require ('mongoose');

moongosse.connect('mongodb://localhost:27017/nombreDeTuBaseDeDatos', {useNewUrlParrser : true, useUnifiedTopology: true,})

.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión: ',err));

const camiseta = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    
},
);