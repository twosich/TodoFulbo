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

mongoose.producto.insertOne({
    "nombre" : "Camiseta Manchester City Puma 24/25 local",
    "descripcion" : "Camiseta versión fanático, con talles disponibles S, M, L Y XL. Diseño inspirado en el código de área de 0161 de Manchester.",
    "precio" : "$30.000"
})

mongoose.producto.insertOne({
    "nombre" : "Camiseta Selección Argentina Adidas 2024/25 local",
    "descripcion" : "Camiseta versión fanático, con talles disponibles S, M, L Y XL. Diseñada para hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY, la insignisa de campeón del mundo y la tercera estrella sobre el escudo confirman una victoria memorable",
    "precio" : "$25.000"
})

mongoose.producto.insertOne({
    "nombre" : "Camiseta Inter Miami Adidas 2024/25 local",
    "descripcion" : "Camiseta versión fanático, con talles disponibles S, M, L Y XL. Cuando cae la noche, Miami se ilumina, inspirada en el resplandeciente paseo marítimo de Magic City para encantar con sus detalles rosas y un gráfico ondulado.",
    "precio" : "$30.000"
})

mongoose.producto.insertOne({
    "nombre" : "Camiseta FC Barcelona Nike 2024/25 local",
    "descripcion" : "Camiseta versión fanático, con talles disponibles S, M, L Y XL. Coincidiendo con la conmemoración de los 125 años del club, el diseño se inspira en las raìces, trayectoria y legado del club, utilizando los colores azul y grana, presentes en el escudo como elemento central.",
    "precio" : "$30.000"
})



export default producto;
