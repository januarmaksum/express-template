import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import envConfig from './configs/env.config';
import fs from 'fs';
import path from 'path';

const isProduction = envConfig.NODE_ENV;
const publicApiServer =
  isProduction === 'production' ? envConfig.API_URL : `http://localhost:${envConfig.PORT}`;

const DOCS_DIR = path.join(__dirname, 'docs');

if (!fs.existsSync(DOCS_DIR)) {
  throw new Error(`❌ Missing Swagger docs folder: ${DOCS_DIR}`);
}

// 🟡 Dynamically collect all .yaml files
const yamlFiles = fs.existsSync(DOCS_DIR)
  ? fs
      .readdirSync(DOCS_DIR)
      .filter((file) => file.endsWith('.yaml'))
      .map((file) => path.join(DOCS_DIR, file).replace(/\\/g, '/'))
  : [];

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Docs',
      version: '1.0.0',
      contact: {
        name: 'Januar Maksum',
        url: 'https://github.com/januarmaksum',
        email: 'januarmaksum@gmail.com',
      },
      license: {
        name: 'Licence - MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: publicApiServer,
      },
    ],
    tags: [{ name: 'Users', description: 'User-related endpoints' }],
  },
  apis: yamlFiles,
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  const uiOptions = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.21.0/swagger-ui-standalone-preset.min.js',
    ],
    customfavIcon:
      'https://raw.githubusercontent.com/swagger-api/swagger-ui/master/dist/favicon-32x32.png',
    customSiteTitle: 'API - Express Template',
  };

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, uiOptions));
};
