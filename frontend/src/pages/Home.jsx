import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Home() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    axios
      .get("/api/test") // Remplace par une vraie route de ton backend
      .then((response) => setMessage(response.data.message))
      .catch((error) => setMessage("Erreur de connexion"));
  }, []);

  return (
    <div className="text-2xl font-bold text-white">
      <h2>Bienvenue sur JJNewmanCorp</h2>
      <p className="mt-4">{message}</p>
    </div>
  );
}
