import mongoose from "mongoose"
var montreSchema = mongoose.Schema({
    marque: String,
    couleur:String,
    prix: Number,
    qtestock: Number,
    image: String,
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie'
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }]
})
const Montre = mongoose.model('Montre', montreSchema);
export default Montre 
