import express from 'express';
const router = express.Router();
import {
    getCommandes, getCommandeByID, createCommande, updateCommande,
    deleteCommande
} from '../controllers/commande.controller.js';
/**
 * @route GET /api/commandes
 * @desc Get All commandes
 * @access Public
 */
router.get('/', getCommandes);
/**
 * @route POST /api/commandes
 * @desc Ajouter un commande
 * @access Public
 */
router.post('/', createCommande);
/**
 * @route GET /api/commandes/:id
 * @desc Renvoyer un commande
 * @access Public
 */
router.get('/:id', getCommandeByID);
/**
 * @route PUT /api/commandes/:id
 * @desc Modifier un commande
 * @access Public
 */
router.put('/:id', updateCommande);
/**
 * @route DELETE /api/commandes/:id
 * @desc Supprimer un commande
 * @access Public
 */
router.delete('/:id', deleteCommande);
export default router;