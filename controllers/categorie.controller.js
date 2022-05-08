import mongoose from 'mongoose';
import Categorie from '../models/Categorie.model.js';
export const getCategories = async (req, res) => {
    try {
        const cat = await Categorie.find();
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getCategorieByID = async (req, res) => {
    try {
        const spec = await Categorie.findById(req.params.id);
        res.status(200).json(spec);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createCategorie = async (req, res) => {
    const { nomcategorie } = req.body; const newCategorie = new Categorie({ nomcategorie: nomcategorie })
    try {
        await newCategorie.save(); res.status(201).json(newCategorie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateCategorie = async (req, res) => {
    const { id } = req.params;
    const { nomcategorie } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de Categorieavec un id: ${id}`);
    const catg1 = { nomcategorie: nomcategorie, _id: id };
    await Categorie.findByIdAndUpdate(id, catg1);
    res.json(catg1);
}
export const deleteCategorie = async (req, res) => {
    const { id } = req.params; if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de Categorie avec l'ID: ${id}`);
    await Categorie.findByIdAndDelete(id);
    res.json({ message: "Categorie supprimée avec succès." });
}