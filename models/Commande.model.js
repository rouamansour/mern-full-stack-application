import mongoose from "mongoose"
var commandeSchema = mongoose.Schema({
    total: Number,
    refacheteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acheteur'
    }
},
    {
        timestamps: true
    });
const Commande = mongoose.model('Commande', commandeSchema);
export default Commande