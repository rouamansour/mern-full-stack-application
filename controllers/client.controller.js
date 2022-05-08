import mongoose from 'mongoose';
import Client from '../models/Client.model.js';
export const getClients = async (req, res) => {
    try {
    const cat = await Client.find();
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
}

export const getClientByID = async (req, res) => {
    try {
    const cat = await Client.findById(req.params.id);
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    export const createClient = async (req, res) => {
    const { nomclient, email, numtel} = req.body;
    const newClient = new Client({ nomclient:nomclient, email:email,numtel:numtel })
    try {
    await newClient.save();
    res.status(201).json(newClient );
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
    }
    export const updateClient= async (req, res) => {
    const { id } = req.params;
    const { nomclient, email, numtel} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de auteur avec un id: ${id}`);
    const aut1 = { nomclient:nomclient, email:email, numtel:numtel, _id: id };
    await Client.findByIdAndUpdate(id, aut1);
    res.json(aut1);
    }
    export const deleteClient = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de auteur avec l'ID: ${id}`);
    await Client.findByIdAndDelete(id);
    res.json({ message: "client supprimé avec succès." });
}
