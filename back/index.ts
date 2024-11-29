import express from "express";
import router from "./api";
import { connetcToMongoDB } from "./db/database";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

(async () => {
    try {
        await connetcToMongoDB();
        app.use(router);

        app.listen(PORT, () => {
            console.log("Server conectado en el puert", PORT)
        })
    } catch(error) {
        console.error("Error al iniciar al servidor")
    }
})();
