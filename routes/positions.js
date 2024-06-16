import express from 'express';
import authMiddleware from '../middleware/auth.js';
import Position from '../models/Position.js';

const router = express.Router();

router.use(authMiddleware);

// Récupérer les données de position des véhicules
router.get('/', async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
