import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import apiRoutes from './routes';
import envConfig from './configs/env.config';
import { setupSwagger } from './swagger';

// Load environment variables
const PORT = envConfig.PORT;

// Create express app
const app = express();

// Enable CORS
app.use(
  cors({
    origin: [`${envConfig.API_URL}`, `http://localhost:${envConfig.PORT}`],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix /api
app.use('/api', apiRoutes);

// API docs
setupSwagger(app);

// Root handler
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Visit /api/docs for swagger documentation.',
    docs: '/api/docs',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Local dev only: run app.listen
if (envConfig.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
}

// Export as serverless handler for Vercel
export const handler = serverless(app);

// Also export the app (optional, if needed elsewhere)
export default app;
