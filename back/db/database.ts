import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:hLtTsygwGIbGIfBnmvJVoQIUaSNwkhtI@autorack.proxy.rlwy.net:14791', {})

.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión: ',err));

const producto = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
},
);

const usuario = new mongoose.Schema({
    nombreUsuario: {type: String, required: true},
    claveUsuario: {type: String, required: true},
    token: {type: String, required: true},
})

export default producto;