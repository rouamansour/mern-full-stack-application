import express from 'express';
import { createUser,getuserBYEmail,RefreshToken} from '../controllers/user.controller.js';
const router = express.Router();
router.post('/', createUser);
router.post('/login', getuserBYEmail);
router.post('/refreshToken/',RefreshToken); // Refresh
export default router; 