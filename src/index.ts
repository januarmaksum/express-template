import express, { Application } from 'express';
import apiRoutes from './routes';
import dotenv from 'dotenv';

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix /api
app.use('/api', apiRoutes);

// Root handler
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to My API',
    docs: '/api/docs',
  });
});

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
