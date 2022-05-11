import express from 'express';
import { createUser,getuserBYEmail} from '../controllers/user.controller.js';
const router = express.Router();
router.post('/', createUser);
router.post('/login', getuserBYEmail);
export default router; 