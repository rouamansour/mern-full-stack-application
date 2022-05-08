import express from 'express';
const router = express.Router();
import {
    getCategories, getCategorieByID, createCategorie,
    updateCategorie, deleteCategorie
} from
    '../controllers/categorie.controller.js';
/**
* @route GET /api/specialites
* @desc Get All specialites
* @access Public
*/
router.get('/', getCategories);
/**
* @route POST /api/specialites
* @desc Ajouter une specialite
* @access Public
*/
router.post('/', createCategorie);
/**
* @route GET /api/specialites/:id
* @desc Renvoyer une specialite
* @access Public
*/
router.get('/:id', getCategorieByID);
/**
* @route PUT /api/specialites/:id
* @desc Modifier une specialite
* @access Public
*/
router.put('/:id', updateCategorie);
/**
* @route DELETE /api/specialites/:id
* @desc Supprimer une specialite
* @access Public
*/
router.delete('/:id', deleteCategorie);
export default router;