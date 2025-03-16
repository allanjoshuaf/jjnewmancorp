import express from 'express';
import Company from '../models/Company.js';

const router = express.Router();

// Route pour obtenir les informations de l'entreprise
router.get('/', async (req, res) => {
    try {
        const company = await Company.findOne({});
        if (!company) return res.status(404).json({ message: 'Aucune entreprise trouvée' });

        res.status(200).json(company);
    } catch (error) {
        console.error('Erreur MongoDB:', error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});

router.get('/contact', async (req, res) => {
    try {
        const company = await Company.findOne({}, 'contactEmail'); // Ne récupérer que l'email
        if (!company) return res.status(404).json({ message: 'Aucun email trouvé' });

        res.status(200).json({ contactEmail: company.contactEmail });
    } catch (error) {
        console.error('Erreur lors de la récupération du contact:', error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});


export default router;
