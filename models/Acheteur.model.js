import mongoose from "mongoose"
var acheteurSchema = mongoose.Schema({
    nom: {
        type: String,
        required: "nom is required"
    },
    adress: {
        type: String
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: "password is required"
    },
    role: {
        type: Number
    }
});
const Acheteur = mongoose.model('Acheteur', acheteurSchema)
export default Acheteur 