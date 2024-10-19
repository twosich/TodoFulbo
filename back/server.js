const express = require('express');
const path = require('path');
const cors = require('cors');


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
    const imagePath = path.join(__dirname, `imagenes/${imagen}.webp`);
    
    // Send the image file
    res.sendFile(imagePath);
  });