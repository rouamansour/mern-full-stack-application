import express from 'express';
const router = express.Router();
import { getMontres, getMontreByID, createMontre, updateMontre, deleteMontre } from '../controllers/montre.controller.js';
import {auth} from "../middleware/auth.js";

/**
 * @route GET /api/livres
 * @desc Get All livres
 * @access Public
 */
router.get('/',auth,getMontres);
/**
 * @route POST /api/livres
 * @desc Ajouter un livre
 * @access Public
 */
router.post('/', createMontre);
/**
 * @route GET /api/livres/:id
 * @desc Renvoyer un livre
 * @access Public
 */
router.get('/:id', getMontreByID);
/**
 * @route PUT /api/livres/:id
 * @desc Modifier un livre
 * @access Public
 */
router.put('/:id', updateMontre);
/**
 * @route DELETE /api/livres/:id
 * @desc Supprimer un livre
 * @access Public
 */
router.delete('/:id', deleteMontre);
export default router; 
