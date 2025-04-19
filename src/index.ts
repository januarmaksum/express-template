import express, { Application } from 'express';
import apiRoutes from './routes';

const port = process.env.PORT || 3000;

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix /api
app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
    res.json({ success: true, message: 'Welcome to Express API on Vercel!' });
});

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
