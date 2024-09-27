const express = require('express');


const cors = require('cors');


const app = express();


// Enable CORS for all routes
app.use(cors());


app.listen(3000, () => {
   console.log(`Server is up and running on port 3000 ...`);
});

