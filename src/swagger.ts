import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express, { Express } from 'express';
import env from './configs/env.config';

const isProduction = process.env.NODE_ENV;
const publicApiServer =
  isProduction === 'production' ? env.API_URL : `http://localhost:${env.PORT}`;

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
      tags: [
        {
          name: 'Users',
          description: 'User related endpoints',
        },
      ],
    },
    servers: [
      {
        url: publicApiServer,
      },
    ],
  },
  apis: ['./src/docs/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

// const swaggerDocument = require('./swagger.json');

const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, 'src');

export const setupSwagger = (app: Express) => {
  // app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // const swaggerUi = require('swagger-ui-express');

  const options = {
    customCssUrl: '/public/swagger-ui.css',
    customSiteTitle: 'The Words That I Know API - Swagger',
  };

  app.use('/public', express.static(path.join(SRC_FOLDER, 'public')));
  app.use('/api/docs', swaggerUi.serve);
  app.get('/api/docs', swaggerUi.setup(swaggerSpec, options));
};
