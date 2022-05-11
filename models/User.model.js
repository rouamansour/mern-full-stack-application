import mongoose from "mongoose"
var userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: "nom is required"
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

});
const User = mongoose.model('User', userSchema)
export default User