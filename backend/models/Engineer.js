import mongoose from "mongoose";

const engineerSchema = new mongoose.Schema(
  {
    _id: {type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: { type: [String], required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Engineer = mongoose.model("Engineer", engineerSchema);
export default Engineer;
