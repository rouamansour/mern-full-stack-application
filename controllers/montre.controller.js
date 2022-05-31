import mongoose from 'mongoose';
import Montre from '../models/Montre.model.js';
export const getMontres = async (req, res) => {
    try {
        const cat = await Montre.find().populate('categorie');
        ;
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getMontreByID = async (req, res) => {
    try {
        const mont = await Montre.findById(req.params.id).populate('categorie');
        res.status(200).json(mont);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createMontre = async (req, res) => {
    const {
        marque, couleur, prix, qtestock,image, categorie } = req.body;
    const newMontre = new Montre({
        marque: marque, couleur: couleur, prix: prix, qtestock: qtestock, image: image, categorie: categorie
    })
    try {
        await newMontre.save();
        res.status(201).json(newMontre);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateMontre = async (req, res) => {
    const { id } = req.params;
    const {
        marque, couleur, prix, qtestock, image,categorie} =
        req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de montre avec un id: ${id}`);
    const Mont1 = {
        marque: marque, couleur: couleur, prix: prix, qtestock: qtestock,  image: image,categorie: categorie,_id: id
    };
    await Montre.findByIdAndUpdate(id, Mont1);
    res.json(Mont1);
}
export const deleteMontre = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de montre avec l'ID: ${id}`);
    await Montre.findByIdAndDelete(id);
    res.json({ message: "montre supprimé avec succès." });
}