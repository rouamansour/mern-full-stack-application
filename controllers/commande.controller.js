import mongoose from 'mongoose';
import Commande from '../models/Commande.model.js';
import LigneCommande from '../models/LigneCommande.model.js';
export const getCommandes = async (req, res) => {
    try {
        const comm = await Commande.find().populate('refacheteur');

        res.status(200).json(comm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getCommandeByID = async (req, res) => {
    try {
        const comm = await Commande.findById(req.params.id);

        res.status(200).json(comm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createCommande = async (req, res) => {
    const { total, refacheteur } = req.body;

    const newCommande = new Commande({ total: total, refacheteur: refacheteur })
    try {
        await newCommande.save();
        res.status(201).json(newCommande);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateCommande = async (req, res) => {
    const { _id } = req.params;
    const { total, refacheteur } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de commande avec un id: ${id}`);
    const comm1 = { total: total, refacheteur: refacheteur, _id: _id };
    await Commande.findByIdAndUpdate(_id, comm1);
    res.json(comm1);
}
export const deleteCommande = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de commande avec l'ID: ${id}`);
    await Commande.findByIdAndDelete(id);
    res.json({ message: "commande supprimée avec succès." });
} 