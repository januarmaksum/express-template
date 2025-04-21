import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import fs from 'fs';
import path from 'path';
// import env from './configs/env.config';

// const isProduction = process.env.NODE_ENV;
// const publicApiServer =
//   isProduction === 'production' ? env.API_URL : `http://localhost:${env.PORT}`;

// Load Swagger JSON spec file
const swaggerSpec = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'docs', 'swagger.json'), 'utf8')
);

export const setupSwagger = (app: Express) => {
  const uiOptions = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui-standalone-preset.min.js',
    ],
  };

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, uiOptions));
};
