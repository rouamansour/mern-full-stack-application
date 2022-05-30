import express from 'express';
const router = express.Router();
import {
    getLigneCommandes, getLigneCommandeByID, createLigneCommande,
    updateLigneCommande, deleteLigneCommande, getLigneCommandeByIdCom
} from
    '../controllers/ligneCommande.controller.js';
/**
 * @route GET /api/ligneCommandes
 * @desc Get All ligneCommandes
 * @access Public
 */
router.get('/', getLigneCommandes);
/**
 * @route POST /api/ligneCommandes
 * @desc Ajouter une ligneCommande
 * @access Public
 */
router.post('/', createLigneCommande);
/**
 * @route GET /api/ligneCommandes/:id
 * @desc Renvoyer une ligneCommande
 * @access Public
 */
router.get('/:id', getLigneCommandeByID);
/**
 * @route PUT /api/ligneCommandes/:id
 * @desc Modifier une ligneCommande
 * @access Public
 */
router.put('/:id', updateLigneCommande);
/**
 * @route DELETE /api/ligneCommandes/:id
 * @desc Supprimer une ligneCommande
 * @access Public
 */
router.delete('/:id', deleteLigneCommande);
/**
 * @route GET /api/ligneCommandes/comm/ :refcommande
 * @desc Get All ligneCommandes pour une commande donnée
 * @access Public
 */
router.get('/comm/:refcommande', getLigneCommandeByIdCom);
export default router; 