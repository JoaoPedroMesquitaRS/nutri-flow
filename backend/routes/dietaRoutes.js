import express, { Router } from 'express';
import { listarDietaId, listarDietas, salvarDieta } from '../controller/salvarDietaController.js';

const router = express.Router();

router.post('/', salvarDieta);
router.get('/', listarDietas);
router.get('/:id', listarDietaId)

export default router;