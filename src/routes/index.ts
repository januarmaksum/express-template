import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Hello from /api!' });
});

router.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

export default router;
