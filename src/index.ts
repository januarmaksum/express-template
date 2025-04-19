import express, { Application } from 'express';
import apiRoutes from './routes';

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
