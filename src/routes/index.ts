import { Router } from 'express';
import userRoute from './user.route';

const router = Router();

// Health Check
router.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// User Routes
router.use('/users', userRoute);

export default router;
