import express from "express";
import cors from "cors";
import path from "path";
import router from "./api";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const publicPath = path.resolve(__dirname, "public");
app.use("/img", express.static(publicPath));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
