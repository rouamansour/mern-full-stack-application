import Acheteur from '../models/Acheteur.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const createAcheteur = async (req, res) => {
    const { nom, adress, email, password, role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newAcheteur = new Acheteur({
        nom: nom,
        adress: adress,
        email: email,
        password: hash,
        role: role
    });
    try {
        await newAcheteur.save();

        res.status(201).json(newAcheteur);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const generateAccessToken = (acheteur) => {
    return jwt.sign({ acheteur }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn:
            '60s'
    });
}
export const getacheteurBYEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        const acheteur = await Acheteur.findOne({ email });
        if (acheteur == "") {
            res.status(401).send('utilisateur non existant');
            return
        };
        const isMatch = await bcrypt.compare(password, acheteur.password);
        if (!isMatch) res.status(400).json({ msg: 'mot de passe incorrect' })
        if (acheteur.role == "0") throw Error('Accès authorisé sauf pour admin');
        const accessToken = generateAccessToken(acheteur);
        const refreshToken = generateRefreshToken(acheteur);

        res.status(200).json({
            accessToken,
            refreshToken
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// Refresh
function generateRefreshToken(acheteur) {
    return jwt.sign({ acheteur }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn:
            '1y'
    });
}
//Refresh
export const RefreshToken = async (req, res) => {
    try {
        const { email, password } = req.body;
        const acheteur = await Acheteur.findOne({ email });
        if (acheteur == "") {
            res.status(404).send('utilisateur non existant');
            return
        };
        const isMatch = await bcrypt.compare(password, acheteur.password);
        if (!isMatch) res.status(400).json({ msg: 'mot de passe incorrect' })
        const refreshedToken = generateAccessToken(acheteur);
        res.status(200).json({
            accessToken: refreshedToken,
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getacheteurBYEmailAcheteur = async (req, res) => {
    try {
        const { email, password } = req.body;
        const acheteur = await Acheteur.findOne({ email });
        if (acheteur == "") {
            res.status(401).send('utilisateur non existant');
            return
        };
        const isMatch = await bcrypt.compare(password, acheteur.password);
        if (!isMatch) res.status(400).json({ msg: 'mot de passe incorrect' })
        const accessToken = generateAccessToken(acheteur);
        const refreshToken = generateRefreshToken(acheteur);
        const _id = acheteur._id
        res.status(200).json({
            accessToken,
            refreshToken,
            _id
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 
