import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import engineerRoutes from "./routes/engineerRoutes.js";
import connectDB from "./config/db.js";
import contactRoutes from './routes/contact.js';
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/engineers", engineerRoutes);
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API JJNewmanCorp !");
});

app.use(express.json()); // Pour parser le JSON des requêtes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
