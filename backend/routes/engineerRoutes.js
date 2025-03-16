import express from "express";
import Engineer from "../models/Engineer.js";

const router = express.Router();

// Ajouter un ingénieur
router.post("/", async (req, res) => {
  try {
    const engineer = await Engineer.create(req.body);
    res.status(201).json(engineer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir tous les ingénieurs
router.get("/", async (req, res) => {
  try {
    const engineers = await Engineer.find();
    res.json(engineers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;