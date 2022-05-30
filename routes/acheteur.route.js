import express from 'express';
import { createAcheteur, getacheteurBYEmail, RefreshToken, getacheteurBYEmailAcheteur }
    from '../controllers/acheteur.controller';
const router = express.Router();
router.post('/', createAcheteur);
router.post('/login', getacheteurBYEmail);
router.post('/loginacheteur', getacheteurBYEmailAcheteur);
router.post('/refreshToken/', RefreshToken);
export default router;