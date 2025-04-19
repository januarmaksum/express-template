import express from 'express';
import apiRoutes from './routes';

const app = express();
const port = process.env.PORT || 3000;

// Prefix /api
app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
  res.send('Hello from base route!');
});

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
