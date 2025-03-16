import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Ou un autre service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `Nouveau message de ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l’envoi de l’email:', error);
        res.status(500).json({ message: 'Erreur lors de l’envoi de l’email' });
    }
};
