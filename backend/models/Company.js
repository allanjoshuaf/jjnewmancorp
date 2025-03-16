import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    contactEmail: { type: String, required: true, 
        match: [/^\S+@\S+\.\S+$/, 'Veuillez entrer un email valide'] },
    location: { type: String, required: true },
}, { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);
export default Company;