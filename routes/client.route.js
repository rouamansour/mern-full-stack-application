import express from 'express';
const router = express.Router();
import { getClients, getClientByID, createClient, updateClient, deleteClient }
from '../controllers/client.controller.js';
/**
* @route GET /api/client
* @desc Get All client
* @access Public
*/
router.get('/', getClients);
/**
* @route POST /api/clients
* @desc Ajouter un client
* @access Public
*/
router.post('/', createClient);
/**
* @route GET /api/clients/:id
* @desc Renvoyer un client
* @access Public
*/
router.get('/:id', getClientByID);
/**
* @route PUT /api/clients/:id
* @desc Modifier un client
* @access Public
*/
router.put('/:id', updateClient);
/**
* @route DELETE /api/clients/:id
* @desc Supprimer un client
* @access Public
*/
router.delete('/:id', deleteClient);
export default router;
