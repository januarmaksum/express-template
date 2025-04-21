import express from 'express';
import apiRoutes from './routes';
import env from './configs/env.config';
import { setupSwagger } from './swagger';

// Load environment variables
const PORT = env.PORT;

// Create express app
const app = express();

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

// Create HTTP server instance
const server = app.listen(PORT, (error?: Error | null) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

// Export server for external use (e.g., testing or graceful shutdown)
export { app, server };

// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
});
