import mongoose from 'mongoose';
import LigneCommande from '../models/LigneCommande.model.js';
export const getLigneCommandes = async (req, res) => {
    try {
        const lc = await
            LigneCommande.find().populate('refarticle').populate('refcommande');

        res.status(200).json(lc);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getLigneCommandeByID = async (req, res) => {
    try {
        const lc = await LigneCommande.findById(req.params.id);

        res.status(200).json(lc);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createLigneCommande = async (req, res) => {
    const { quantitecommandee, totligne, refarticle, refcommande } = req.body;

    const newLigneCommande = new
        LigneCommande({
            quantitecommandee: quantitecommandee,
            totligne: totligne, refarticle: refarticle, refcommande: refcommande
        })
    try {
        await newLigneCommande.save();
        res.status(201).json(newLigneCommande);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateLigneCommande = async (req, res) => {
    const { id } = req.params;
    const { quantitecommandee, totligne, refarticle, refcommande } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de LC avec un id: ${id}`);
    const lc1 = {
        quantitecommandee: quantitecommandee, totligne: totligne,
        refarticle: refarticle, refcommande: refcommande, _id: id
    };
    await LigneCommande.findByIdAndUpdate(id, lc1);
    res.json(lc1);
}
export const deleteLigneCommande = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de LC avec l'ID: ${id}`);
    await LigneCommande.findByIdAndDelete(id);
    res.json({ message: "LC supprimée avec succès." });
}
export const getLigneCommandeByIdCom = async (req, res) => {
    try {
        const lc = await LigneCommande.find({
            refcommande:
                req.params.refcommande
        }).populate('refcommande').populate('refarticle').exec()
            ;

        res.status(200).json(lc);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 