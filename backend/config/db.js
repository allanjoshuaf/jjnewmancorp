import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Définir __dirname en mode ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger .env depuis la racine du projet
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connexion à MongoDB réussie !");
    } catch (err) {
        console.error("❌ Erreur MongoDB :", err.message);
        process.exit(1); // Arrête le processus en cas d'erreur critique
    }
};

export default connectDB;